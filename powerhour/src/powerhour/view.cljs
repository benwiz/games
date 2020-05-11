(ns powerhour.view
  (:require ["@material-ui/core/Button" :default Button]
            ["react" :as react]
            ["react-iframe" :default Iframe]
            ;; [goog.string :as gstr]
            ;; [goog.string.format]
            ;; ["@material-ui/core/Card" :default Card]
            ;; ["@material-ui/core/CardContent" :default CardContent]
            ;; ["@material-ui/core/CardHeader" :default CardHeader]
            ["@material-ui/core/styles/makeStyles" :default makeStyles]
            [cljs-bean.core :refer [->clj]]
            [cljs.core.async :refer [alt!]]
            [clojure.string :as str]
            [crinkle.component :refer [CE RE]]
            [crinkle.dom :as d]
            [powerhour.spotify :as spotify]))

;; NOTE I should have all the external hooks I need to create the app.
;; NOTE if spotify web player button does not work well, I can use Spotify Web Playback SDK.

;; TODO login button if not logged in
;; TODO expiration on spotify-token
;; TODO select a device, with an info icon button with js/alert for "I don't see my device"
;; TODO select a playlist -> load songs into queue, with an info icon button explaining what is happening
;; TODO shot interval seletor
;; TODO game length selector
;; TODO play button
;; TODO album cover and track name
;; TODO very very simple audio reactive quil background, with checkbox to turn it on, default off

(def styles
  (makeStyles (fn [theme]
                (let [theme (->clj theme)]
                  #js {:app #js {:fontFamily    "'Roboto', sans-serif"
                                 :dispaly       "flex"
                                 :flexDirection "column"}
                       }))))

(defn classname
  [classes classnames]
  (let [classnames (if (vector? classnames)
                     classnames
                     (vector classnames))]
    (str/join " " (into []
                        (map #(get classes %))
                        classnames))))

(defn app
  []
  (let [;; Log into spotify so that full songs can be played through iFrame and get access token for api use.
        spotify-token (spotify/token "ff53948d58f1491baa6169d34bc4179a")
        classes       (->clj (styles))]
    (d/div {:className (:app classes)}
           (RE Iframe {:src               "https://open.spotify.com/embed/playlist/02FALZS2dSPI33T644ENNb"
                       :width             "300"
                       :height            "80"
                       :frameborder       "0"
                       :allowtransparency "true"
                       :allow             "encrypted-media"}))))

