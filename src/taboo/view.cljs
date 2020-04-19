(ns taboo.view
  (:require
   ["react" :as react]
   [crinkle.dom :as d]
   [crinkle.component :refer [CE RE]]
   [taboo.words :as w]))

(def word-count (dec (count w/words))) ;; Minus 1 because the "Done" hack

(defn card
  [{:keys [target taboo]}]
  (d/div {}
         (d/h4 nil target)
         (d/div nil
                (into []
                      (map #(d/div {:key %} %))
                      taboo))
         (d/hr nil)))

(defn app
  []
  (let [;; Track place (t) in deck and history of what happened
        [{:keys [t history]} setHistory] (react/useState {:t 0 :history []})

        ;; Get current word
        wordset (nth w/words t)
        target  (first wordset)
        taboo   (rest wordset)]
    (d/div nil
           (CE card {:target (str target " #" t "/" (inc (count history)))
                     :taboo  taboo})
           (d/div {:style #js {:display        "flex"
                               :justifyContent "space-between"}}
                  (d/button {:disabled (<= t 0)
                             :onClick  (fn [_e]
                                         (setHistory {:t       (dec t)
                                                      :history history}))}
                            "<<")
                  #_(d/button {:disabled (or (< t (count history)) (= (count history) (dec word-count)))
                               :onClick  (fn [_e]
                                           (setHistory {:t       (inc t)
                                                        :history (conj history "skip")}))}
                              "skip")
                  (d/button {:disabled (= (count history) (dec word-count))
                             :onClick  (fn [_e]
                                         (setHistory {:t       (inc t)
                                                      :history (if (= t (count history))
                                                                 (conj history "correct")
                                                                 history)}))}
                            (if (= t (count history))
                              "correct >>"
                              ">>"))))))
