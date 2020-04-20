(ns taboo.view
  (:require
   ["@material-ui/core/Button" :default Button]
   ["@material-ui/core/Card" :default Card]
   ["@material-ui/core/CardHeader" :default CardHeader]
   ["@material-ui/core/CardContent" :default CardContent]
   ["@material-ui/core/styles/makeStyles" :default makeStyles]
   ["@material-ui/icons/Check" :default CheckIcon]
   ["@material-ui/icons/Redo" :default RedoIcon]
   ["@material-ui/icons/Clear" :default ClearIcon]
   ["@material-ui/icons/FastForward" :default FastForwardIcon]
   ["@material-ui/icons/FastRewind" :default FastRewindIcon]
   ["react" :as react]
   [clojure.string :as str]
   [cljs-bean.core :refer [->clj]]
   [crinkle.component :refer [CE RE]]
   [crinkle.dom :as d]
   [taboo.words :as w]))

;; Card visual reference https://www.bestchoicereviews.org/wp-content/uploads/2014/12/taboo-card-and-board-games.jpg

(def word-count (dec (count w/words))) ;; minus 1 because the "done" hack

(def styles (makeStyles (fn [theme]
                          (let [theme (->clj theme)
                                card-width 200]
                            #js {:app            #js {:fontFamily "Roboto"}
                                 :card           #js {:textAlign "center"
                                                      :margin    "60px auto"
                                                      :width     (str card-width "px")
                                                      :height    (str (* card-width 1.5) "px")
                                                      :backgroundColor "#8e2dfc"} ;; 27c4a8
                                 :card-header    #js {:color "white"}
                                 :card-content   #js {:backgroundColor "white"
                                                      :paddingLeft 0
                                                      :paddingRight 0
                                                      :marginLeft ((:spacing theme) 1.0)
                                                      :marginRight ((:spacing theme) 1.0)
                                                      ;; Would be better to have dynamic bottom border rather than hardcoded height
                                                      ;; :marginBottom ((:spacing theme) 1.0)
                                                      :height (- card-width 12)}
                                 :taboo          #js {:marginTop ((:spacing theme) 2.0)
                                                      #_#_:marginBottom ((:spacing theme) 2.0)}
                                 :next-button    #js {:height "80px"
                                                      :margin ((:spacing theme) 0.5)}
                                 :history-button #js {:height "264px"}}))))

(defn card
  [{:keys [classes target taboo]}]
  (RE Card {:className (:card classes)}
      (RE CardHeader {:className (:card-header classes)
                      :title     (str/upper-case target)})
      (RE CardContent {:className (:card-content classes)}
          (into []
                (map #(d/div {:key       %
                              :className (:taboo classes)}
                             (str/upper-case %)))
                taboo))))

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
