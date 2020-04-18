(ns taboo.view
  (:require
   ["react" :as react]
   [crinkle.dom :as d]
   [crinkle.component :refer [CE RE]]
   [taboo.words :as w]))

;; NOTE a better "deck" strategy could simply be to shuffle w/words when the page loads then keep track of index the stack.
;; `history` can then contain what team and what happened.

(defn card
  [{:keys [target taboo]}]
  (d/div {}
         (d/h4 nil target)
         (d/div nil
                (into []
                      (map #(d/div {:key %} %))
                      taboo))
         (d/hr nil)))

(defn new-wordset
  [wordsets history]
  (let [wordset (rand-nth w/words)]
    (if (= (count history) (count w/words))
      (js/alert "You have used all the words, refresh to shuffle the cards.")
      ;; If wordset already in history, try again
      (if (some #(= wordset %) history)
        (new-wordset wordsets history)
        wordset))))

(defn app
  []
  (let [;; Track history of cards, new items added to front. t of -1 is present.
        [{:keys [t history]} setHistory] (react/useState {:t -1 :history []})

        wordset (if (= t -1)
                  ;; Get new wordset
                  (new-wordset w/words history)
                  ;; Look at old wordset
                  (nth history t))
        target  (first wordset)
        taboo   (rest wordset)]
    (d/div nil
           (CE card {:target target
                     :taboo  taboo})
           (d/div {:style #js {:display        "flex"
                               :justifyContent "space-between"}}
                  (d/button {:disabled (or (empty? history) (>= t (dec (count history))))
                             :onClick  (fn [_e]
                                         (if (= t -1)
                                           ;; Set t to 1 and update history with current wordset (don't want to lose track of it)
                                           (setHistory {:t       1
                                                        :history (cons wordset history)})
                                           ;; Increment t to go back in history
                                           (setHistory {:t       (inc t)
                                                        :history history})))}
                            "<<")
                  (d/button {:onClick (fn [_e]
                                        (if (= t -1)
                                          ;; Update history with current wordset
                                          (setHistory {:t       t
                                                       :history (cons wordset history)})
                                          ;; Decrement t to go forward in history
                                          (setHistory {:t       (dec t)
                                                       :history history})))}
                            "skip")
                  (d/button {:onClick (fn [_e]
                                        (if (= t -1)
                                          ;; Update history with current wordset
                                          (setHistory {:t       t
                                                       :history (cons wordset history)})
                                          ;; Decrement t to go forward in history
                                          (setHistory {:t       (dec t)
                                                       :history history})))}
                            ">>")))))
