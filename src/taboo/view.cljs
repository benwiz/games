(ns taboo.view
  (:require
   ["@material-ui/core/Button" :default Button]
   ["@material-ui/core/styles/makeStyles" :default makeStyles]
   ["@material-ui/icons/Check" :default CheckIcon]
   ["@material-ui/icons/Redo" :default RedoIcon]
   ["@material-ui/icons/Clear" :default ClearIcon]
   ["@material-ui/icons/FastForward" :default FastForwardIcon]
   ["@material-ui/icons/FastRewind" :default FastRewindIcon]
   ["react" :as react]
   [cljs-bean.core :refer [->clj]]
   [crinkle.component :refer [CE RE]]
   [crinkle.dom :as d]
   [taboo.words :as w]))

(def word-count (dec (count w/words))) ;; minus 1 because the "done" hack

(def styles (makeStyles (fn [theme]
                          (let [theme (->clj theme)]
                            #js {:app            #js {}
                                 :card           #js {:textAlign "center"}
                                 :taboo          #js {:margin ((:spacing theme) 0.75)}
                                 :next-button    #js {:height "80px"
                                                      :margin ((:spacing theme) 0.5)}
                                 :history-button #js {:height "264px"}}))))

(defn card
  [{:keys [classes target taboo]}]
  (d/div {:className (:card classes)}
         (d/h4 nil target)
         (d/div nil
                (into []
                      (map #(d/div {:key %
                                    :className (:taboo classes)}
                                   %))
                      taboo))
         (d/hr {:style #js {:margin "30px"}})))

(defn history-button
  [{:keys [classes direction t history setHistory]}]
  (assert (#{:backward :forward} direction) "direction must be either backward or forward")
  (RE Button {:className (:history-button classes)
              :variant  "outlined"
              :disabled (case direction
                          :backward (<= t 0)
                          :forward  false)
              :onClick  (fn [_e]
                          (setHistory {:t       (case direction
                                                  :backward (dec t)
                                                  :forward  (inc t))
                                       :history history}))}
      (case direction
        :backward (RE FastRewindIcon nil)
        :forward  (RE FastForwardIcon nil))))

(defn next-button
  [{:keys [classes event t history setHistory]}]
  (RE Button {:className (:next-button classes)
              :variant   (case event
                           :correct "contained"
                           "outlined")
              :color     (case event
                           :correct "primary"
                           :skip    "default"
                           :wrong   "secondary")
              :onClick   (fn [_e]
                           (setHistory {:t       (inc t)
                                        :history (conj history event)}))}
      (case event
        :correct (RE CheckIcon nil)
        :skip    (RE RedoIcon nil)
        :wrong   (RE ClearIcon nil))))

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
    (d/div {:className (:app classes)}
           (CE card {:classes classes
                     :target  target
                     :taboo   taboo})
           (d/div {:style #js {:display        "flex"
                               :justifyContent "space-between"}}
                  (CE history-button {:direction  :backward
                                      :classes    classes
                                      :t          t
                                      :history    history
                                      :setHistory setHistory})
                  (when reviewing?
                    (CE history-button {:direction  :forward
                                        :classes    classes
                                        :t          t
                                        :history    history
                                        :setHistory setHistory}))
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
