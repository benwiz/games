(ns powerhour.view
  (:require ["@material-ui/core/Button" :default Button]
            ["@material-ui/core/Fab" :default Fab]
            ["@material-ui/core/FormControl" :default FormControl]
            ["@material-ui/core/IconButton" :default IconButton]
            ["@material-ui/core/InputLabel" :default InputLabel]
            ["@material-ui/core/MenuItem" :default MenuItem]
            ["@material-ui/core/Select" :default Select]
            ["@material-ui/icons/HelpOutline" :default HelpOutlineIcon]
            ["@material-ui/core/SvgIcon" :default SvgIcon]
            ["@material-ui/icons/Pause" :default PauseIcon]
            ["@material-ui/icons/PlayArrow" :default PlayArrowIcon]
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
            [goog.string :as gstr]
            [goog.string.format]
            [powerhour.spotify :as spotify]))

;; NOTE neither spotify play butter nor spotify web playback api work on mobile

;; TODO refresh access token when appropriate

;; TODO trigger ding on minute mark
;; TODO make buttons average color of album color, or maybe the dominant (mode) color
;; TODO very very simple audio reactive quil background, with checkbox to turn it on, default off

(def styles
  (makeStyles (fn [theme]
                (let [theme (->clj theme)]
                  #js {:app            #js {:fontFamily    "'Roboto', sans-serif"
                                            :display       "flex"
                                            :flexDirection "column"
                                            :margin        "0 auto"
                                            :width         300}
                       :title          #js {:textAlign "center"}
                       :item           #js {:margin    ((:spacing theme) 3.0)
                                            :textAlign "center"}
                       :button         #js {:textAlign "left"
                                            :width     200}
                       :fab            #js {:margin "0 auto"}
                       :now-playing    #js {}
                       :artist         #js {:color "gray"}
                       :spotify-button #js {:backgroundColor "#1DB954"
                                            :color           "white"
                                            :fontWeight      900
                                            :border          "none"
                                            :borderRadius    "100px"}}))))

(defn classname
  [classes classnames]
  (let [classnames (if (vector? classnames)
                     classnames
                     (vector classnames))]
    (str/join " " (into []
                        (map #(get classes %))
                        classnames))))

(defn useInterval
  [callback delay]
  (let [savedCallback (react/useRef)]
    (react/useEffect
      (fn []
        (set! (.. savedCallback -current) callback)
        (fn []))
      #js [callback])
    (react/useEffect
      (fn []
        (when (some? delay)
          (let [id (js/setInterval #(.. savedCallback current) delay)]
            (fn []
              (js/clearInterval id)))))
      #js [delay])))

(defn shot-interval
  [{:keys [classes interval setInterval]}]
  (d/div {:className (:item classes)}
         (RE FormControl {:className (:button classes)
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
                       [5 15 30 60 90 120 180])))))

(defn game-length
  [{:keys [classes length setLength started]}]
  (d/div {:className (:item classes)}
         (RE FormControl {:className   (:button classes)
                          #_#_:variant "outlined"}
             (RE InputLabel {:id "length-select-label"} "Length")
             (RE Select {:labelId  "length-select-label"
                         :value    (str length)
                         :disabled started
                         :onChange (fn [e]
                                     (setLength (js/parseInt (.. e -target -value))))}
                 (into []
                       (map (fn [minutes]
                              (let [seconds (* 60 minutes)]
                                (RE MenuItem {:key   (str minutes)
                                              :value (str seconds)}
                                    (d/span nil (str minutes " minutes"))))))
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

    (d/div {:className (:item classes)}
           (RE FormControl {:className (:button classes)
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
           (d/div nil ;; TODO make pretty
                  (RE IconButton {:className "select-help-button"
                                      :size      "small"
                                      :onClick   (fn []
                                                   (js/alert "This app is just a remote for Spotify. Open the Spotify app on this device or another device then select it from the list."))}
                          (RE HelpOutlineIcon {:fontSize "inherit"}))))))

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
    (d/div {:className (:item classes)}
           (RE FormControl {:className (:button classes)
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
           (d/div nil ;; TODO make pretty
                  (RE IconButton {:className "select-help-button"
                                  :size      "small"
                                  :onClick   (fn []
                                               (js/alert "Selecting a playlist will append (not replace) the songs from this playlist to your queue. This is optional."))}
                      (RE HelpOutlineIcon {:fontSize "inherit"}))))))

(defn clock
  [{:keys [classes spotify-token device length playing interval]}]
  (let [[timer setTimer] (react/useState length)
        minutes (int (/ timer 60))
        seconds (mod timer 60)]

    (useInterval
      (fn []
        (when playing
          (setTimer dec)))
      1000)

    (react/useEffect
      (fn []
        (prn seconds)
        (when (and (< timer length) ;; don't skip at start of game
                   (zero? (mod timer interval)))
          ;; TODO make a ding sound
          (spotify/skip! spotify-token
                          (fn [_response])
                          device))
        (fn []))
      #js [timer shot-interval])

    (d/div {:className (:item classes)}
           (d/span {:className (:clock-span classes)}
                   (str minutes ":" (gstr/format "%02d" seconds))))))

(defn now-playing
  [{:keys [classes currentTrack]}]
  (d/div {:className (classname classes [:item :now-playing])}
         (d/img {:src    (-> currentTrack :album :images second :url)
                 :height 200
                 :width  200})
         (d/div {:className (:track classes)}
                (-> currentTrack :name))
         (d/div {:className (:artist classes)}
                (->> (into []
                           (map :name)
                           (-> currentTrack :artists))
                     (str/join ", ")))))

(defn play-pause
  [{:keys [classes spotify-token device playing setPlaying]}]
  (d/div {:className (:item classes)}
         (RE Fab {:className (:fab classes)
                  :onClick (fn [_]
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

(defn start-button
  [{:keys [classes spotify-token device setStarted playing setPlaying]}]
  (RE Button {:className (:item classes)
              :disabled  (nil? device)
              :variant   "contained"
              :color     "primary"
              :onClick   (fn [_]
                           (setStarted true)
                           (when-not playing
                             (spotify/play! spotify-token
                                            (fn [_response] (setPlaying true))
                                            device)))}
      "Start!"))

(defn redirect-button
  [{:keys [classes]}]
  (RE Button {:className        (:spotify-button classes)
              :variant          "contained"
              :disableElevation true
              :startIcon        (RE SvgIcon {:style #js {:background "url('https://api.iconify.design/mdi-spotify.svg?color=%23FFFFFF') no-repeat center center / contain"}})
              :onClick          #(spotify/redirect "ff53948d58f1491baa6169d34bc4179a")}
      "Log into Spotify"))

(defn login-page
  [{:keys [classes]}]
  (d/div {:className (:app classes)}
         (d/h2 {:className (:title classes)}
               "Power Hour")
         (CE redirect-button {:classes classes})))

(defn app
  []
  ;; Log into spotify so that full songs can be played through iFrame and get access token for api use.
  (let [classes       (->clj (styles))
        spotify-token (spotify/token)]
    (if-not spotify-token
      ;; Log in to Spotify page
      (CE login-page {:classes classes})
      ;; Main app
      (let [[interval setShotInterval]     (react/useState 60)
            [length setLength]             (react/useState 3600)
            [device setDevice]             (react/useState "")
            [started setStarted]           (react/useState false)
            [playing setPlaying]           (react/useState false)
            [currentTrack setCurrentTrack] (react/useState nil)]

        ;; Update playing and currentTrack
        (react/useEffect
          (fn []
            (letfn [(currently-playing
                      []
                      (spotify/player spotify-token
                                      (fn [response]
                                        (let [track   (-> response :body :item)
                                              playing (-> response :body :is_playing)]
                                          (when (some? track)
                                            (setCurrentTrack track))
                                          (when (some? playing)
                                            (setPlaying playing))))))]
              (currently-playing)
              (js/setInterval currently-playing 5000))
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
                                :setLength setLength
                                :started   started})
               (CE devices {:classes       classes
                            :spotify-token spotify-token
                            :device        device
                            :setDevice     setDevice})
               (when (not-empty device)
                 (CE playlists {:classes       classes
                                :spotify-token spotify-token
                                :device        device}))
               (when started
                 (CE clock {:classes       classes
                            :spotify-token spotify-token
                            :device        device
                            :length        length
                            :playing       playing
                            :interval      interval}))
               (CE now-playing {:classes      classes
                                :currentTrack currentTrack})
               (if started
                 (CE play-pause {:classes       classes
                                 :spotify-token spotify-token
                                 :device        device
                                 :playing       playing
                                 :setPlaying    setPlaying})
                 (CE start-button {:classes       classes
                                   :spotify-token spotify-token
                                   :device        device
                                   :playing       playing
                                   :setPlaying    setPlaying
                                   :setStarted    setStarted})))))))
