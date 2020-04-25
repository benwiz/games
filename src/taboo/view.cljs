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

;; TODO toggle colors randomly
;; TODO rotate cards to it looks like a stack
;; TODO visually prepare next card when swiping top card
;; TODO ready screen
;; TODO timer
;; TODO finish screen (should show all wordsets during this turn, netagtes need for history explorer)
;; TODO toggle colors based on team
;; TODO history explorer (probably don't need)

;; Card visual reference https://www.bestchoicereviews.org/wp-content/uploads/2014/12/taboo-card-and-board-games.jpg

(def dev-words
  [["A" "a" "a" "a" "a"]
   ["B" "b" "b" "b" "b"]
   ["C" "c" "c" "c" "c"]
   ["D" "d" "d" "d" "d"]
   ["E" "e" "e" "e" "e"]])

(def styles (makeStyles (fn [theme]
                          (let [theme              (->clj theme)
                                card-width         311
                                card-height        (* 1.5 card-width)
                                next-button-height 60
                                next-button-margin ((:spacing theme) 1.0) ]
                            #js {:app          #js {:fontFamily "'Walter Turncoat', cursive"}
                                 :deck         #js {}
                                 :tinder-card  #js {:position "absolute"
                                                    :top      0
                                                    :bottom   0
                                                    :left     0
                                                    :right    0}
                                 :card         #js {:textAlign   "center"
                                                    :marginLeft  "auto"
                                                    :marginRight "auto"
                                                    :marginTop   ((:spacing theme) 4.0)
                                                    :width       card-width
                                                    :height      card-height}
                                 :card-header  #js {:color   "white"
                                                    :height  (* 0.1 card-height)
                                                    :padding ((:spacing theme) 2.0)}
                                 :card-content #js {:backgroundColor "white"
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
                                 :purple         #js {:backgroundColor "#8e2dfc"}
                                 :green          #js {:backgroundColor "#27c4a8"}
                                 :next-button    #js {:height (str next-button-height "px")
                                                      :margin next-button-margin}
                                 :history-button #js {:height (str (+ (* next-button-height 3) (* next-button-margin 4)) "px")
                                                      :margin ((:spacing theme) 1.0)}}))))

(defn classname
  [classes classnames]
  (let [classnames (if (vector? classnames)
                     classnames
                     (vector classnames))]
    (str/join " " (into []
                        (map #(get classes %))
                        classnames))))

(defn history-button
  [{:keys [classes direction t history setHistory]}]
  (assert (#{:backward :forward} direction) "direction must be either backward or forward")
  (RE Button {:className (:history-button classes)
              :variant   "outlined"
              :disabled  (case direction
                           :backward (<= t 0)
                           :forward  false)
              :onClick   (fn [_e]
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

(defn card
  [{:keys [classes target taboo]}]
  (RE Card {:className (classname classes [:card (if (even? (count target))
                                                   :purple
                                                   :green)])}
      (RE CardHeader {:className             (:card-header classes)
                      :title                 (str/upper-case target)
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
  [{:keys [classes target taboo setT]}]
  (RE TinderCard {:key              target
                  :className        (:tinder-card classes)
                  :preventSwipe     #js ["up" "down"]
                  :onSwipe          identity ;; (fn [direction] (prn "dir" direction))
                  :onCardLeftScreen (fn []
                                      (prn "left screen")
                                      (setT inc))}
      (CE card {:classes classes
                :target  target
                :taboo   taboo})))

(defn deck
  [{:keys [classes wordsets setT]}]
  (d/div {:className (:deck classes)}
         (into []
               (map (fn [[target & taboo]]
                      (CE swipe-card {:classes classes
                                      :target  target
                                      :taboo   taboo
                                      :setT    setT}
                          :key target)))
               wordsets)))

(defn game
  [{:keys [classes]}]
  (let [[t setT]               (react/useState 0)
        excess                 5
        [wordsets setWordsets] (react/useState (reverse (take excess w/words)))]
    ;; (prn (into [] (map first) wordsets))
    (react/useEffect (fn []
                       (setWordsets (reverse (take (+ t excess) w/words)))
                       js/undefined)
                     #js[t])
    (d/div {:className (:game classes)}
           (CE deck {:classes  classes
                     :wordsets wordsets
                     :setT     setT}))))

(defn app
  []
  (let [classes (->clj (styles))]
    (d/div nil
           (CE game {:classes classes}))))
