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
   ["./react-tinder-card" :refer [TinderCard]]
   ["react" :as react]
   [clojure.string :as str]
   [cljs-bean.core :refer [->clj]]
   [crinkle.component :refer [CE RE]]
   [crinkle.dom :as d]
   [taboo.words :as w]))

;; TODO ready screen
;; TODO timer
;; TODO finish screen
;; TODO toggle colors

;; Card visual reference https://www.bestchoicereviews.org/wp-content/uploads/2014/12/taboo-card-and-board-games.jpg

(def word-count (dec (count w/words))) ;; minus 1 because the "done" hack

(def styles (makeStyles (fn [theme]
                          (let [theme (->clj theme)
                                card-width 311
                                card-height (* 1.5 card-width)
                                next-button-height 60
                                next-button-margin ((:spacing theme) 1.0) ]
                            #js {:app            #js {:fontFamily "'Comic Neueu', cursive"}
                                 :deck           #js {}
                                 :tinder-card    #js {:position "absolute"
                                                      :top      0
                                                      :bottom   0
                                                      :left     0
                                                      :right    0}
                                 :card           #js {:backgroundColor "#8e2dfc" ;; 27c4a8
                                                      :textAlign       "center"
                                                      :marginLeft      "auto"
                                                      :marginRight     "auto"
                                                      :marginTop       ((:spacing theme) 4.0)
                                                      :width           card-width
                                                      :height          card-height}
                                 :card-header    #js {:color "white"
                                                      :height (* 0.1 card-height)
                                                      :padding ((:spacing theme) 2.0)}
                                 :card-content   #js {:backgroundColor "white"
                                                      :padding         ((:spacing theme) 2.0)
                                                      :marginLeft      ((:spacing theme) 1.0)
                                                      :marginRight     ((:spacing theme) 1.0)
                                                      :marginBottom    ((:spacing theme) 1.0)
                                                      :height          (- card-height
                                                                          ;; minus header and header padding
                                                                          (* 0.1 card-height)
                                                                          (* 2 ((:spacing theme) 2.0))
                                                                          ;; minus content padding
                                                                          (* 2 ((:spacing theme) 2.0))
                                                                          ;; minus content margin
                                                                          ((:spacing theme) 1.0)
                                                                          ;; Actual border
                                                                          ((:spacing theme) 1.0))
                                                      :display         "flex"
                                                      :flexDirection   "column"
                                                      :justifyContent  "space-evenly"}

                                 :taboo          #js {:marginTop    ((:spacing theme) 1.5)
                                                      :marginBottom ((:spacing theme) 1.5)}
                                 :next-button    #js {:height (str next-button-height "px")
                                                      :margin next-button-margin}
                                 :history-button #js {:height (str (+ (* next-button-height 3) (* next-button-margin 4)) "px")
                                                      :margin ((:spacing theme) 1.0)}}))))

(defn card
  [{:keys [classes target taboo]}]
  (RE Card {:className (:card classes)}
      (RE CardHeader {:className (:card-header classes)
                      :title     (str/upper-case target)
                      ;; If I want to use same font as other text.
                      ;; Alternatively, and better, is to pass in titleTypographyProps
                      #_#_:disableTypography true})
      (RE CardContent {:className (:card-content classes)}
          (into []
                (map #(d/div {:key       %
                              :className (:taboo classes)}
                             (str/upper-case %)))
                taboo))))

(defn swipe-card
  [{:keys [classes target taboo swipe]}]
  (RE TinderCard {:key              target
                  :className        (:tinder-card classes)
                  :preventSwipe     #js ["up" "down"]
                  :onSwipe          swipe
                  :onCardLeftScreen (fn []
                                      (prn "card left screen"))}
      (CE card {:classes classes
                :target  target
                :taboo   taboo})))

(defn deck
  [{:keys [classes _target _taboo _swipe] :as args}]
  (let [[cards setCard] (react/useState [(CE swipe-card args) (CE swipe-card args)])]
    (d/div {:className (:deck classes)}
           cards)))

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
           (CE deck {:classes classes
                     :target  target
                     :taboo   taboo
                     :swipe   (fn [direction]
                                (prn (str "Swiped: " direction)))})
           #_(d/div {:style #js {:display        "flex"
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
