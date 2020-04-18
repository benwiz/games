(ns taboo.view
  (:require
   ["react" :as react]
   [crinkle.dom :as d]
   [crinkle.component :refer [CE RE]]
   [taboo.words :as w]))

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
           (CE card {:target target
                     :taboo  taboo})
           (d/div {:style #js {:display        "flex"
                               :justifyContent "space-between"}}
                  (d/button {:disabled (<= t 0)
                             :onClick  (fn [_e]
                                         (setHistory {:t       (dec t)
                                                      :history history}))}
                            "<<")
                  #_(d/button {:disabled (or (not= t -1) (= (count history) (dec (count w/words))))
                             :onClick (fn [_e]
                                        (if (= t -1)
                                          ;; Update history with current wordset
                                          (setHistory {:t       t
                                                       :history (cons wordset history)})
                                          ;; Decrement t to go forward in history
                                          (setHistory {:t       (dec t)
                                                       :history history})))}
                            "skip")
                  (d/button {:disabled (= (count history) (dec (count w/words)))
                             :onClick  (fn [_e]
                                         (setHistory {:t       (inc t)
                                                      :history (conj history "success")}))}
                            ">>")))))
