(ns powerhour.view
  (:require
   ["@material-ui/core/Button" :default Button]
   ;; ["@material-ui/core/Card" :default Card]
   ;; ["@material-ui/core/CardContent" :default CardContent]
   ;; ["@material-ui/core/CardHeader" :default CardHeader]
   ["@material-ui/core/styles/makeStyles" :default makeStyles]
   ["react" :as react]
   [cljs-bean.core :refer [->clj]]
   [clojure.string :as str]
   [crinkle.component :refer [CE RE]]
   [crinkle.dom :as d]
   #_[goog.string :as gstr]
   #_[goog.string.format]))

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
  (let [classes (->clj (styles))]
    (d/div {:className (:app classes)}
           (d/div nil "hey!"))))
