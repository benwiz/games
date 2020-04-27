(ns taboo.view
  (:require
   ["./react-tinder-card" :refer [TinderCard]]
   ["@material-ui/core/Button" :default Button]
   ["@material-ui/core/Card" :default Card]
   ["@material-ui/core/CardContent" :default CardContent]
   ["@material-ui/core/CardHeader" :default CardHeader]
   ["@material-ui/core/styles/makeStyles" :default makeStyles]
   ["@material-ui/icons/Check" :default CheckIcon]
   ["@material-ui/icons/Clear" :default ClearIcon]
   ["@material-ui/icons/FastForward" :default FastForwardIcon]
   ["@material-ui/icons/FastRewind" :default FastRewindIcon]
   ["@material-ui/icons/Redo" :default RedoIcon]
   ["react" :as react]
   [cljs-bean.core :refer [->clj]]
   [clojure.string :as str]
   [crinkle.component :refer [CE RE]]
   [crinkle.dom :as d]
   [goog.string :as gstr]
   [goog.string.format]
   [taboo.words :as w]))

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
                                next-button-margin ((:spacing theme) 1.0)]
                            #js {:app          #js {:fontFamily "'Walter Turncoat', cursive"
                                                    :dispaly "flex"
                                                    :flexDirection "column"}
                                 :deck         #js {:marginTop ((:spacing theme) 4.0)
                                                    :width     card-width
                                                    :height    card-height}
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
                                 :clock          #js {:textAlign "center"
                                                      :margin ((:spacing theme) 4.0)}
                                 :clock-span     #js {:fontSize 24} ;; TODO look into using (:typography theme)
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

(defn clock
  [{:keys [classes timer]}]
  (let [minutes (int (/ timer 60))
        seconds (mod timer 60)]
    (d/div {:className (:clock classes)}
           (d/span {:className (:clock-span classes)}
                   (str minutes ":" (gstr/format "%02d" seconds))))))

(defn game
  [{:keys [classes]}]
  (let [[t setT]               (react/useState 0)
        excess                 5
        [wordsets setWordsets] (react/useState (reverse (take excess w/words)))
        [timer setTimer]       (react/useState 3)]

    ;; t triggers wordsets update
    (react/useEffect (fn []
                       (setWordsets (reverse (take (+ t excess) w/words)))
                       js/undefined)
                     #js[t])

    ;; countdown timer
    (react/useEffect (fn []
                       (let [interval (js/setInterval
                                        (fn []
                                          (setTimer (fn [x]
                                                      (when (> x 0)
                                                        (dec x)))))
                                        1000)]
                         (fn []
                           (js/clearInterval interval))))
                     #js[])

    (d/div {:className (:game classes)}
           (CE deck {:classes  classes
                     :wordsets wordsets
                     :setT     setT})
           (CE clock {:classes classes
                      :timer   timer}))))

(defn app
  []
  (let [classes (->clj (styles))]
    (d/div nil
           (CE game {:classes classes}))))
