(ns taboo.view
  (:require
   ["@material-ui/core/styles/makeStyles" :default makeStyles]
   ["react" :as react]
   [cljs-bean.core :refer [->clj]]
   [crinkle.component :refer [CE RE]]
   [crinkle.dom :as d]
   [taboo.words :as w]))

(def word-count (dec (count w/words))) ;; Minus 1 because the "Done" hack

(def styles (makeStyles (fn [theme]
                          (let [theme (->clj theme)]
                            #js {:next-button #js {:height "80px"
                                                   :margin ((:spacing theme) 0.5)}}))))

(defn card
  [{:keys [target taboo]}]
  (d/div {}
         (d/h4 nil target)
         (d/div nil
                (into []
                      (map #(d/div {:key %} %))
                      taboo))
         (d/hr nil)))

(defn next-button
  [{:keys [classes event t history setHistory]}]
  (d/button {:className (:next-button classes)
             :onClick (fn [_e]
                        (setHistory {:t       (inc t)
                                     :history (conj history event)}))}
            (str (name event) " >>")))

(defn app
  []
  (let [classes (->clj (styles))

        ;; Track place (t) in deck and history of what happened
        [{:keys [t history]} setHistory] (react/useState {:t 0 :history []})

        ;; Get current word
        wordset (nth w/words t)
        target  (first wordset)
        taboo   (rest wordset)

        reviewing? (< t (count history))]
    (d/div nil
           (CE card {:target (str target " #" t "///" (inc (count history)))
                     :taboo  taboo})
           (d/div {:style #js {:display        "flex"
                               :justifyContent "space-between"}}
                  (d/button {:disabled (<= t 0)
                             :onClick  (fn [_e]
                                         (setHistory {:t       (dec t)
                                                      :history history}))}
                            "<<")
                  (when reviewing?
                    (d/button {:disabled (= t (count history))
                               :onClick  (fn [_e]
                                           (setHistory {:t       (inc t)
                                                        :history history}))}
                              ">>"))
                  (when-not reviewing?
                    (d/div {:style #js {:display       "flex"
                                        :flexDirection "column"}}
                           (CE next-button {:classes    classes
                                            :event      :correct
                                            :t          t
                                            :history    history
                                            :setHistory setHistory})
                           (CE next-button {:classes    classes
                                            :event      :skip
                                            :t          t
                                            :history    history
                                            :setHistory setHistory})
                           (CE next-button {:classes    classes
                                            :event      :wrong
                                            :disabled   (< t (count history))
                                            :t          t
                                            :history    history
                                            :setHistory setHistory})))))))
