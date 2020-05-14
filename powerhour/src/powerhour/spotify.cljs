(ns powerhour.spotify
  (:require-macros [cljs.core.async.macros :refer [go]]
                   [clojure.string :as str])
  (:require [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [clojure.edn :as edn]
            [clojure.string :as str]
            [crinkle.dom :as d]
            [powerhour.localstorage :as localstorage]))

;; TODO I think there is a way for me to tell spotify to only give me desired parts of response tree
(defn redirect
  [client-id]
  (let [scopes            (js/encodeURIComponent (str/join " " ["user-read-playback-state"
                                                                "user-modify-playback-state"
                                                                "streaming"
                                                                "user-read-email"
                                                                "user-read-private"
                                                                "playlist-read-private"
                                                                "playlist-read-collaborative"]))
        redirect-uri      (.. js/window -location -href)
        spotify-login-uri (str "https://accounts.spotify.com/authorize?response_type=token&client_id=" client-id "&scope=" scopes "&redirect_uri=" redirect-uri)]
    ;; Redirect, so doesn't matter what is returned
    (set! js/window.location spotify-login-uri)))

(defn token
  "Get access token. I am currently never refreshing this token, I should."
  [client-id]
  (let [stored-access-token (-> (localstorage/get-item "spotify-access-token")
                                edn/read-string)
        url-access-token    (-> (subs js/window.location.hash 1)
                                js/URLSearchParams.
                                (.get "access_token"))
        now                 (/ (.now js/Date) 1000)
        ttl                 3600]
    (cond
      ;; Access token in localstorage -> branch
      (some? stored-access-token)
      (let [{:keys [token expiration]} stored-access-token]
        (if (< expiration now)
          ;; First check url for access token, if not exists then redirect
          (if url-access-token
            (do
              (localstorage/set-item! "spotify-access-token" {:token      url-access-token
                                                              :expiration (+ now ttl)})
              url-access-token)
            (redirect client-id))
          token))

      ;; Access token from url (but only after checking for local storage) -> store in localstorage
      (some? url-access-token)
      (do
        (localstorage/set-item! "spotify-access-token" {:token      url-access-token
                                                        :expiration (+ now ttl)})
        url-access-token)

      ;; Otherwise, we have no token -> redirect
      :else (redirect client-id))))

(defn api-get
  [url token handler & [query-params]]
  (go (let [response (<! (http/get url
                                   (cond-> {:with-credentials? false
                                            :oauth-token       token}
                                     (some? query-params) (assoc :query-params query-params))))]
        (handler response))))

(defn api-put
  [url token handler & [query-params json-params]]
  (go (let [response (<! (http/put url
                                   (cond-> {:with-credentials? false
                                            :oauth-token       token}
                                     (some? query-params) (assoc :query-params query-params)
                                     (some? json-params)  (assoc :json-params json-params))))]
        (handler response))))

(defn api-post
  [url token handler & [query-params]]
  (go (let [response (<! (http/post url
                                    (cond-> {:with-credentials? false
                                             :oauth-token       token}
                                      (some? query-params) (assoc :query-params query-params))))]
        (handler response))))

(defn playlist
  [token playlist-id handler]
  (api-get (str "https://api.spotify.com/v1/playlists/" playlist-id "/tracks") token handler))

(defn playlists
  [token handler]
  (api-get "https://api.spotify.com/v1/me/playlists" token handler))

(defn playlist-tracks
  [token playlist-id handler]
  (api-get (str "https://api.spotify.com/v1/playlists/" playlist-id "/tracks") token handler
           {"limit" 90}))

(defn devices
  [token handler]
  (api-get "https://api.spotify.com/v1/me/player/devices" token handler))

(defn playback
  [token handler]
  (api-get "https://api.spotify.com/v1/me/player" token handler))

(defn queue!
  [token track-uri handler & [device-id]]
  (api-post "https://api.spotify.com/v1/me/player/queue" token handler
            (cond-> {"uri" track-uri}
              (some? device-id) (assoc "device_id" device-id))))

(defn skip!
  [token handler & [device-id]]
  (api-post "https://api.spotify.com/v1/me/player/next" token handler
            (when device-id
              {"device_id" device-id})))

(defn seek!
  [token handler & [device-id]]
  (api-put "https://api.spotify.com/v1/me/player/seek" token handler
           (cond-> {"position_ms" 10000}
             (some? device-id) (assoc "device_id" device-id))))

(defn play!
  [token handler uris & [device-id]]
  (api-put "https://api.spotify.com/v1/me/player/play" token handler
           (cond-> {}
             (some? device-id) (assoc "device_id" device-id))
           {"uris" uris}))

(defn transfer!
  [token device-id handler]
  (api-put "https://api.spotify.com/v1/me/player" token handler
           nil
           {"device_ids" [device-id]
            "play"       true}))
