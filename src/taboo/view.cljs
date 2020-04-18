(ns taboo.view
  (:require
   ["react" :as react]
   [crinkle.dom :as d]
   [crinkle.component :refer [CE RE]]
   [taboo.words :as w]))

(defn app
  []
  (let [;; Track history of cards, new items added to front. t of -1 is present.
        [{:keys [t history]} setHistory] (react/useState {:t       -1
                                                          :history []})
        card                 (if (= t -1)
                               ;; Get new card
                               (rand-nth w/words)
                               ;; Look at old card
                               (nth history t))
        target               (first card)
        taboo                (rest card)]
    (d/div nil
           (d/h4 nil target)
           (d/div nil
                  (into []
                        (map #(d/div {:key %} %))
                        taboo))
           (d/hr nil)
           (d/div {:style #js {:display "flex"
                               :justifyContent "space-between"}}
                  (d/button {:disabled (or (empty? history) (>= t (dec (count history))))
                             :onClick  (fn [_e]
                                         (if (= t -1)
                                           ;; Set t to 1 and update history with current card (don't want to lose track of it)
                                           (setHistory {:t       1
                                                        :history (cons card history)})
                                           ;; Increment t to go back in history
                                           (setHistory {:t       (inc t)
                                                        :history history})))}
                            "<<")
                  (d/button {:onClick (fn [_e]
                                        (if (= t -1)
                                          ;; Update history with current card
                                          (setHistory {:t       t
                                                       :history (cons card history)})
                                          ;; Decrement t to go forward in history
                                          (setHistory {:t       (dec t)
                                                       :history history})))}
                            "skip")
                  (d/button {:onClick (fn [_e]
                                        (if (= t -1)
                                          ;; Update history with current card
                                          (setHistory {:t       t
                                                       :history (cons card history)})
                                          ;; Decrement t to go forward in history
                                          (setHistory {:t       (dec t)
                                                       :history history})))}
                            ">>")))))
