(ns powerhour.view
  (:require
   ["@material-ui/core/Button" :default Button]
   ["react" :as react]
   ;; [goog.string :as gstr]
   ;; [goog.string.format]
   ;; ["@material-ui/core/Card" :default Card]
   ;; ["@material-ui/core/CardContent" :default CardContent]
   ;; ["@material-ui/core/CardHeader" :default CardHeader]
   ["@material-ui/core/styles/makeStyles" :default makeStyles]
   [cljs-bean.core :refer [->clj]]
   [clojure.string :as str]
   [crinkle.component :refer [CE RE]]
   [crinkle.dom :as d]
   [powerhour.localstorage :as localstorage]))

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

(defn spotify-auth
  [client-id]
  (let [access-token      (or (localstorage/get-item "spotify-access-token")
                              (-> (js/URLSearchParams. (subs js/window.location.hash 1))
                                  (.get "access_token")))]
    (if access-token
      (do
        (localstorage/set-item! "spotify-access-token" access-token)
        access-token)
      (let [scopes            (js/encodeURIComponent "user-read-playback-state user-modify-playback-state")
          redirect-uri      (.. js/window -location -href)
            spotify-login-uri (str "https://accounts.spotify.com/authorize?response_type=token&client_id=" client-id "&scope=" scopes "&redirect_uri=" redirect-uri)]
        ;; Redirect, so doesn't matter what is returned
        (set! js/window.location spotify-login-uri)))))

(defn app
  []
  (let [spotify-token (spotify-auth "ff53948d58f1491baa6169d34bc4179a")
        classes       (->clj (styles))]
    (prn "spotify-token" spotify-token)
    (d/div {:className (:app classes)}
           (d/div nil spotify-token))))
