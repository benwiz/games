(ns powerhour.view
  (:require ["@material-ui/core/Button" :default Button]
            ["@material-ui/core/FormControl" :default FormControl]
            ["@material-ui/core/Fab" :default Fab]
            ["@material-ui/core/IconButton" :default IconButton]
            ["@material-ui/core/InputLabel" :default InputLabel]
            ["@material-ui/core/MenuItem" :default MenuItem]
            ["@material-ui/core/Select" :default Select]
            ["@material-ui/icons/HelpOutline" :default HelpOutlineIcon]
            ["@material-ui/icons/PlayArrow" :default PlayArrowIcon]
            ["@material-ui/icons/Pause" :default PauseIcon]
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

;; TODO album cover and track name
;; TOOD timer component... play-pause needs to link into this
;; TODO trigger next on minute mark
;; TODO trigger ding on monite mark
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

(defn shot-interval
  [{:keys [classes interval setInterval]}]
  (d/div nil
         (RE FormControl {:className   (:buttonFormControl classes)
                          #_#_:variant "outlined"}
             (RE InputLabel {:id "interval-select-label"} "Interval")
             (RE Select {:labelId  "interval-select-label"
                         :value    (str interval)
                         :onChange (fn [e]
                                     (setInterval (js/parseInt (.. e -target -value))))}
                 (into []
                       (map (fn [seconds]
                              (RE MenuItem {:key   (str seconds)
                                            :value (str seconds)}
                                  (d/span nil
                                          (as-> (/ seconds 60) minutes
                                            (if (< minutes 2)
                                              (str seconds " seconds")
                                              (str minutes " minutes")))))))
                       [15 30 60 90 120 180])))))

(defn game-length
  [{:keys [classes length setLength]}]
  (d/div nil
         (RE FormControl {:className   (:buttonFormControl classes)
                          #_#_:variant "outlined"}
             (RE InputLabel {:id "length-select-label"} "Length")
             (RE Select {:labelId  "length-select-label"
                         :value    (str length)
                         :onChange (fn [e]
                                     (setLength (js/parseInt (.. e -target -value))))}
                 (into []
                       (map (fn [minutes]
                              (RE MenuItem {:key   (str minutes)
                                            :value (str minutes)}
                                  (d/span nil (str minutes " minutes")))))
                       [20 30 60 90 100])))))

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
                                         (when (empty? device)
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
                           :value    (if (some #(= device (:id %)) devices)
                                       device
                                       "")
                           :onChange (fn [e]
                                       (let [device-id (.. e -target -value)]
                                         (spotify/transfer! spotify-token device-id identity)
                                         (setDevice device-id)))}
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
                                        (js/alert "This app is just a remote for Spotify. Open the Spotify app on this device or another device then select it from the list. If your device is not on the list, double check that the app is open, if it still isn't there then that speaker (e.g. Sonos) cannot be controlled from Spotify's Web API."))}
               (RE HelpOutlineIcon {:fontSize "inherit"})))))

(defn playlists
  [{:keys [classes spotify-token device]}]
  (let [[playlists setPlaylists] (react/useState [])
        [playlist setPlaylist]   (react/useState "")]

    ;; Use effect on load to read list of playists one time
    (react/useEffect
      (fn []
        (letfn [(get-and-update-playlists
                  []
                  (spotify/playlists spotify-token
                                     (fn [response]
                                       (let [ps (or (some-> response :body :items)
                                                    [])]
                                         (setPlaylists ps)))))]
          (get-and-update-playlists))
        (fn []))
      #js [])

    ;; TODO use a split button https://material-ui.com/components/button-group/#split-button
    ;; then it can be very obvious that you are taking the action of "queueing" a playlist
    ;; I can have some default "power hour" playlists. Also, can do away with playlist state.
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

(defn now-playing
  [{:keys [classes currentTrack]}]
  (cljs.pprint/pprint currentTrack)
  (d/div nil
         (d/img {:src    (-> currentTrack :album :images second :url)
                 :height 200
                 :width  200})
         (d/div nil (-> currentTrack :name))
         (d/div nil (->> (into []
                               (map :name)
                               (-> currentTrack :artists))
                         (str/join ", ")))))

(defn play-pause
  [{:keys [classes spotify-token device playing setPlaying]}]
  (d/div nil
         (RE Fab {:onClick (fn [_]
                             (if playing
                               (spotify/pause! spotify-token
                                               (fn [_response] (setPlaying false))
                                               device)
                               (spotify/play! spotify-token
                                              (fn [_response] (setPlaying true))
                                              device)))}
             (if playing
               (RE PauseIcon)
               (RE PlayArrowIcon)))))

(defn app
  []
  (let [;; Log into spotify so that full songs can be played through iFrame and get access token for api use.
        classes                (->clj (styles))
        spotify-token          (spotify/token "ff53948d58f1491baa6169d34bc4179a")
        [interval setShotInterval] (react/useState 60)
        [length setLength]     (react/useState 60)
        [device setDevice]     (react/useState "")
        [playing setPlaying]   (react/useState false)
        [currentTrack setCurrentTrack] (react/useState nil)]

    ;; Update playing and currentTrack
    (react/useEffect
      (fn []
        (letfn [(currently-playing
                  []
                  (spotify/player spotify-token
                                  (fn [response]
                                    (setCurrentTrack (-> response :body :item))
                                    (setPlaying (-> response :body :is_playing)))))]
          (currently-playing)
          (js/setInterval currently-playing 1000))
        (fn []))
      #js [])

    (d/div {:className (:app classes)}
           #_(RE Iframe {:src                 (int minutesminutes        "Length://open.spotify.com/embed/playlist/02FALZS2dSPI33T644ENNb")
                         :minutesminuteswidth "300"
                         :height              "80"
                         :frameborder         "0"
                         :allowtransparency   "true"
                         :allow               "encrypted-media"})
           (CE shot-interval {:classes     classes
                              :interval    interval
                              :setInterval setShotInterval})
           (CE game-length {:classes   classes
                            :length    length
                            :setLength setLength})
           (CE devices {:classes       classes
                        :spotify-token spotify-token
                        :device        device
                        :setDevice     setDevice})
           (when (not-empty device)
             (CE playlists {:classes       classes
                            :spotify-token spotify-token
                            :device        device}))
           (CE now-playing {:classes      classes
                            :currentTrack currentTrack})
           (when (not-empty device)
             (CE play-pause {:classes       classes
                             :spotify-token spotify-token
                             :device        device
                             :playing       playing
                             :setPlaying    setPlaying})))))
