(ns crinkle-template.view
  (:require
   ["react" :as react]
   [crinkle.dom :as d]
   [crinkle.component :refer [CE RE]]))

(defn app
  []
  (prn "hi")
  (d/div nil "this is a crinkle template (clojurescript react)"))
