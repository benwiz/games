(ns powerhour.view
  (:require ["@material-ui/core/Button" :default Button]
            ["@material-ui/core/FormControl" :default FormControl]
            ["@material-ui/core/IconButton" :default IconButton]
            ["@material-ui/core/InputLabel" :default InputLabel]
            ["@material-ui/core/MenuItem" :default MenuItem]
            ["@material-ui/core/Select" :default Select]
            ["@material-ui/icons/HelpOutline" :default HelpOutlineIcon]
            ["react" :as react]
            ;; ["react-iframe" :default Iframe]
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

;; NOTE neither spotify play butter nor spotify web playback api work on mobile

;; TODO shot interval seletor
;; TODO game length selector
;; TODO play button
;; TODO album cover and track name
;; TODO very very simple audio reactive quil background, with checkbox to turn it on, default off
;; TODO login button if not logged in
;; TODO refresh access token when appropriate

(def styles
  (makeStyles (fn [theme]
                (let [theme (->clj theme)]
                  #js {:app               #js {:fontFamily    "'Roboto', sans-serif"
                                               :dispaly       "flex"
                                               :flexDirection "column"}
                       :buttonFormControl #js {:width 200}}))))

(defn classname
  [classes classnames]
  (let [classnames (if (vector? classnames)
                     classnames
                     (vector classnames))]
    (str/join " " (into []
                        (map #(get classes %))
                        classnames))))

(defn devices
  [{:keys [classes spotify-token device setDevice]}]
  (let [[devices setDevices] (react/useState [])]

    ;; Use effect on load to read list of devices one time, check again every 10s
    (react/useEffect
      (fn []
        (letfn [(get-and-update-devices
                  []
                  (spotify/devices spotify-token
                                     (fn [response]
                                       (let [ds (or (some-> response :body :devices)
                                                    [])]
                                         (setDevices ds)
                                         (when (not-empty device)
                                           (setDevice (first (into []
                                                                   (comp
                                                                     (remove :is_restricted)
                                                                     (filter :is_active)
                                                                     (map :id))
                                                                   ds))))))))]
          (get-and-update-devices)
          (js/setInterval get-and-update-devices 10000))
        (fn []))
      #js [])

    (d/div nil
           (RE FormControl {:className   (:buttonFormControl classes)
                            #_#_:variant "outlined"}
               (RE InputLabel {:id "device-select-label"} "Playback Device")
               (RE Select {:labelId  "device-select-label"
                           :value    device
                           :onChange (fn [e]
                                       ;; TODO should also call Transfer Playback API (not essential)
                                       (setDevice (.. e -target -value)))}
                   (into []
                         (comp
                           (remove :is_restricted)
                           (map (fn [{:keys [id name]}]
                                  (RE MenuItem {:key   id
                                                :value id}
                                      (d/span nil name)))))
                         devices)))
           (RE IconButton {:className "select-help-button"
                           :size      "small"
                           :onClick   (fn []
                                        (js/alert "This app is just a remote for Spotify. Open the Spotify app on this device or another device then select it from the list."))}
               (RE HelpOutlineIcon {:fontSize "inherit"})))))

(defn playlists
  [{:keys [classes spotify-token device playlist setPlaylist]}]
  (let [[playlists setPlaylists] (react/useState [])]

    ;; Use effect on load to read list of playists one time
    (react/useEffect
      (fn []
        (letfn [(get-and-update-playlists
                  []
                  (spotify/playlists spotify-token
                                     (fn [response]
                                       (let [ps (or (some-> response :body :items)
                                                    [])]
                                         (setPlaylists ps)
                                         (when-not playlist
                                           (setPlaylist (first (into []
                                                                     (comp
                                                                       (map :id))
                                                                     ps))))))))]
          (get-and-update-playlists))
        (fn []))
      #js [])

    ;; TODO use a split button https://material-ui.com/components/button-group/#split-button
    ;; then it can be very obvious that you are taking the action of "queueing" a playlist
    ;; I can have some default "power hour" playlists
    (d/div nil
           (RE FormControl {:className   (:buttonFormControl classes)
                            #_#_:variant "outlined"}
               (RE InputLabel {:id "playlist-select-label"} "Queue Playlist (optional)")
               (RE Select {:labelId  "playlist-select-label"
                           :value    playlist
                           :onChange (fn [e]
                                       (let [playlist-id (.. e -target -value)]
                                         ;; NOTE it would be nice to empty the queue but
                                         ;;      that is not a feature of Spotify's apis
                                         (spotify/playlist spotify-token playlist-id
                                                           (fn [response]
                                                             (as-> (into []
                                                                         (comp
                                                                           (map (comp :uri :track)))
                                                                         (-> response :body :items))
                                                                 uris
                                                               (doseq [uri uris]
                                                                 (spotify/queue! spotify-token uri identity device)))))
                                         (setPlaylist playlist-id)))}
                   (into []
                         (comp
                           (map (fn [{:keys [id name]}]
                                  (RE MenuItem {:key   id
                                                :value id}
                                      (d/span nil name)))))
                         playlists)))
           (RE IconButton {:className "select-help-button"
                           :size      "small"
                           :onClick   (fn []
                                        (js/alert "This app is just a remote for Spotify. Selecting a playlist will replace your queue with the first 60 songs of the playlist. This is optional."))}
               (RE HelpOutlineIcon {:fontSize "inherit"})))))

(defn app
  []
  (let [;; Log into spotify so that full songs can be played through iFrame and get access token for api use.
        classes            (->clj (styles))
        spotify-token      (spotify/token "ff53948d58f1491baa6169d34bc4179a")
        [device setDevice] (react/useState "")
        [playlist setPlaylist] (react/useState "")]
    (d/div {:className (:app classes)}
           #_(RE Iframe {:src               "https://open.spotify.com/embed/playlist/02FALZS2dSPI33T644ENNb"
                         :width             "300"
                         :height            "80"
                         :frameborder       "0"
                         :allowtransparency "true"
                         :allow             "encrypted-media"})
           (CE devices {:classes       classes
                        :spotify-token spotify-token
                        :device        device
                        :setDevice     setDevice})
           (CE playlists {:classes       classes
                          :spotify-token spotify-token
                          :device        device
                          :playlist      playlist
                          :setPlaylist   setPlaylist}))))
