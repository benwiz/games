goog.provide('taboo.view');
goog.require('cljs.core');
var module$taboo$react_tinder_card=shadow.js.require("module$taboo$react_tinder_card", {});
var module$node_modules$$material_ui$core$Button$index=shadow.js.require("module$node_modules$$material_ui$core$Button$index", {});
var module$node_modules$$material_ui$core$Card$index=shadow.js.require("module$node_modules$$material_ui$core$Card$index", {});
var module$node_modules$$material_ui$core$CardContent$index=shadow.js.require("module$node_modules$$material_ui$core$CardContent$index", {});
var module$node_modules$$material_ui$core$CardHeader$index=shadow.js.require("module$node_modules$$material_ui$core$CardHeader$index", {});
var module$node_modules$$material_ui$core$styles$makeStyles=shadow.js.require("module$node_modules$$material_ui$core$styles$makeStyles", {});
var module$node_modules$$material_ui$icons$Check=shadow.js.require("module$node_modules$$material_ui$icons$Check", {});
var module$node_modules$$material_ui$icons$Clear=shadow.js.require("module$node_modules$$material_ui$icons$Clear", {});
var module$node_modules$$material_ui$icons$FastForward=shadow.js.require("module$node_modules$$material_ui$icons$FastForward", {});
var module$node_modules$$material_ui$icons$FastRewind=shadow.js.require("module$node_modules$$material_ui$icons$FastRewind", {});
var module$node_modules$$material_ui$icons$Redo=shadow.js.require("module$node_modules$$material_ui$icons$Redo", {});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
goog.require('cljs_bean.core');
goog.require('clojure.string');
goog.require('crinkle.component');
goog.require('crinkle.dom');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('taboo.words');
taboo.view.dev_words = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A","a","a","a","a"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["B","b","b","b","b"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","c","c","c","c"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["D","d","d","d","d"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["E","e","e","e","e"], null)], null);
taboo.view.styles = (function (){var G__39547 = (function (theme){
var theme__$1 = cljs_bean.core.__GT_clj(theme);
var card_width = (260);
var card_height = (1.5 * card_width);
var next_button_height = (60);
var next_button_margin = (function (){var fexpr__39548 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__39548.cljs$core$IFn$_invoke$arity$1 ? fexpr__39548.cljs$core$IFn$_invoke$arity$1(1.0) : fexpr__39548.call(null,1.0));
})();
return ({"taboo": ({"marginTop": (function (){var fexpr__39549 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__39549.cljs$core$IFn$_invoke$arity$1 ? fexpr__39549.cljs$core$IFn$_invoke$arity$1(1.5) : fexpr__39549.call(null,1.5));
})(), "marginBottom": (function (){var fexpr__39550 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__39550.cljs$core$IFn$_invoke$arity$1 ? fexpr__39550.cljs$core$IFn$_invoke$arity$1(1.5) : fexpr__39550.call(null,1.5));
})()}), "invisible": ({"visibility": "hidden"}), "tinder-card": ({"position": "absolute", "top": (0), "bottom": (0), "left": (0), "right": (0)}), "front": ({"zIndex": (-1)}), "review-item": ({"fontFamily": "'Roboto', sans-serif", "margin": (function (){var fexpr__39551 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__39551.cljs$core$IFn$_invoke$arity$1 ? fexpr__39551.cljs$core$IFn$_invoke$arity$1(2.0) : fexpr__39551.call(null,2.0));
})()}), "deck": ({"marginTop": (function (){var fexpr__39552 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__39552.cljs$core$IFn$_invoke$arity$1 ? fexpr__39552.cljs$core$IFn$_invoke$arity$1(4.0) : fexpr__39552.call(null,4.0));
})(), "width": card_width, "height": card_height}), "green": ({"backgroundColor": "#27c4a8"}), "display-none": ({"display": "none"}), "review-taboo": ({"margin": (function (){var fexpr__39553 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__39553.cljs$core$IFn$_invoke$arity$1 ? fexpr__39553.cljs$core$IFn$_invoke$arity$1(2.0) : fexpr__39553.call(null,2.0));
})()}), "card": ({"textAlign": "center", "marginLeft": "auto", "marginRight": "auto", "marginTop": (function (){var fexpr__39554 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__39554.cljs$core$IFn$_invoke$arity$1 ? fexpr__39554.cljs$core$IFn$_invoke$arity$1(4.0) : fexpr__39554.call(null,4.0));
})(), "width": card_width, "height": card_height}), "review-button": ({"margin": (function (){var fexpr__39555 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__39555.cljs$core$IFn$_invoke$arity$1 ? fexpr__39555.cljs$core$IFn$_invoke$arity$1(2.0) : fexpr__39555.call(null,2.0));
})()}), "review": ({"background": "linear-gradient(0deg, #e3ffe7 0%, #d9e7ff 100%)", "position": "absolute", "top": (0), "right": (0), "left": (0), "display": "flex", "flexDirection": "column", "padding": (function (){var fexpr__39556 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__39556.cljs$core$IFn$_invoke$arity$1 ? fexpr__39556.cljs$core$IFn$_invoke$arity$1(2.0) : fexpr__39556.call(null,2.0));
})()}), "blue": ({"backgroundColor": "dodgerblue"}), "clock-span": ({"fontSize": (24)}), "app": ({"fontFamily": "'Walter Turncoat', 'Roboto', sans-serif", "dispaly": "flex", "flexDirection": "column"}), "card-header": ({"color": "white", "height": (0.1 * card_height), "padding": (function (){var fexpr__39557 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__39557.cljs$core$IFn$_invoke$arity$1 ? fexpr__39557.cljs$core$IFn$_invoke$arity$1(2.0) : fexpr__39557.call(null,2.0));
})()}), "clock": ({"fontFamily": "'Roboto Mono', monospace", "textAlign": "center", "margin": (function (){var fexpr__39558 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__39558.cljs$core$IFn$_invoke$arity$1 ? fexpr__39558.cljs$core$IFn$_invoke$arity$1(4.0) : fexpr__39558.call(null,4.0));
})()}), "purple": ({"backgroundColor": "#8e2dfc"}), "next-button": ({"height": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_button_height),"px"].join(''), "margin": next_button_margin}), "history-button": ({"height": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((next_button_height * (3)) + (next_button_margin * (4)))),"px"].join(''), "margin": (function (){var fexpr__39559 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__39559.cljs$core$IFn$_invoke$arity$1 ? fexpr__39559.cljs$core$IFn$_invoke$arity$1(1.0) : fexpr__39559.call(null,1.0));
})()}), "review-target": ({"fontSize": "larger", "fontWeight": "bold"}), "card-content": ({"marginLeft": (function (){var fexpr__39560 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__39560.cljs$core$IFn$_invoke$arity$1 ? fexpr__39560.cljs$core$IFn$_invoke$arity$1(1.0) : fexpr__39560.call(null,1.0));
})(), "flexDirection": "column", "justifyContent": "space-evenly", "padding": (function (){var fexpr__39561 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__39561.cljs$core$IFn$_invoke$arity$1 ? fexpr__39561.cljs$core$IFn$_invoke$arity$1(2.0) : fexpr__39561.call(null,2.0));
})(), "marginBottom": (function (){var fexpr__39562 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__39562.cljs$core$IFn$_invoke$arity$1 ? fexpr__39562.cljs$core$IFn$_invoke$arity$1(1.0) : fexpr__39562.call(null,1.0));
})(), "display": "flex", "backgroundColor": "seashell", "height": (((((card_height - (0.1 * card_height)) - ((2) * (function (){var fexpr__39563 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__39563.cljs$core$IFn$_invoke$arity$1 ? fexpr__39563.cljs$core$IFn$_invoke$arity$1(2.0) : fexpr__39563.call(null,2.0));
})())) - ((2) * (function (){var fexpr__39564 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__39564.cljs$core$IFn$_invoke$arity$1 ? fexpr__39564.cljs$core$IFn$_invoke$arity$1(2.0) : fexpr__39564.call(null,2.0));
})())) - (function (){var fexpr__39565 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__39565.cljs$core$IFn$_invoke$arity$1 ? fexpr__39565.cljs$core$IFn$_invoke$arity$1(1.0) : fexpr__39565.call(null,1.0));
})()) - (function (){var fexpr__39566 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__39566.cljs$core$IFn$_invoke$arity$1 ? fexpr__39566.cljs$core$IFn$_invoke$arity$1(1.0) : fexpr__39566.call(null,1.0));
})()), "marginRight": (function (){var fexpr__39567 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__39567.cljs$core$IFn$_invoke$arity$1 ? fexpr__39567.cljs$core$IFn$_invoke$arity$1(1.0) : fexpr__39567.call(null,1.0));
})()})});
});
return module$node_modules$$material_ui$core$styles$makeStyles.default(G__39547);
})();
taboo.view.classname = (function taboo$view$classname(classes,classnames){
var classnames__$1 = ((cljs.core.vector_QMARK_(classnames))?classnames:(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[classnames],null)));
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__39568_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(classes,p1__39568_SHARP_);
})),classnames__$1));
});
taboo.view.review = (function taboo$view$review(p__39570){
var map__39571 = p__39570;
var map__39571__$1 = (((((!((map__39571 == null))))?(((((map__39571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39571):map__39571);
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39571__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var wordsets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39571__$1,new cljs.core.Keyword(null,"wordsets","wordsets",-2073196555));
var setReviewing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39571__$1,new cljs.core.Keyword(null,"setReviewing","setReviewing",-259484244));
return crinkle.component.react_createElement_STAR_("div",({"className": new cljs.core.Keyword(null,"review","review",1101692435).cljs$core$IFn$_invoke$arity$1(classes)}),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__39573){
var vec__39574 = p__39573;
var seq__39575 = cljs.core.seq(vec__39574);
var first__39576 = cljs.core.first(seq__39575);
var seq__39575__$1 = cljs.core.next(seq__39575);
var target = first__39576;
var taboo__$1 = seq__39575__$1;
return crinkle.component.react_createElement_STAR_("div",({"className": new cljs.core.Keyword(null,"review-item","review-item",-1284874135).cljs$core$IFn$_invoke$arity$1(classes), "key": target}),crinkle.component.react_createElement_STAR_("div",({"className": new cljs.core.Keyword(null,"review-target","review-target",1330472381).cljs$core$IFn$_invoke$arity$1(classes)}),target),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__39569_SHARP_){
return crinkle.component.react_createElement_STAR_("div",({"className": new cljs.core.Keyword(null,"review-taboo","review-taboo",926205547).cljs$core$IFn$_invoke$arity$1(classes), "key": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(target),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__39569_SHARP_)].join('')}),p1__39569_SHARP_);
})),taboo__$1));
}))),wordsets),crinkle.component.react_createElement_STAR_(module$node_modules$$material_ui$core$Button$index.default,({"className": new cljs.core.Keyword(null,"review-button","review-button",-1597697902).cljs$core$IFn$_invoke$arity$1(classes), "variant": "contained", "color": "primary", "onClick": (function (_e){
return (setReviewing.cljs$core$IFn$_invoke$arity$1 ? setReviewing.cljs$core$IFn$_invoke$arity$1(false) : setReviewing.call(null,false));
})}),"Continue"));
});
taboo.view.card = (function taboo$view$card(p__39578){
var map__39579 = p__39578;
var map__39579__$1 = (((((!((map__39579 == null))))?(((((map__39579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39579):map__39579);
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39579__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39579__$1,new cljs.core.Keyword(null,"target","target",253001721));
var taboo__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39579__$1,new cljs.core.Keyword(null,"taboo","taboo",309107072));
return crinkle.component.react_createElement_STAR_(module$node_modules$$material_ui$core$Card$index.default,({"className": taboo.view.classname(classes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card","card",-1430355152),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target,"Ready?"))?new cljs.core.Keyword(null,"blue","blue",-622100620):((cljs.core.even_QMARK_(cljs.core.count(target)))?new cljs.core.Keyword(null,"purple","purple",-876021126):new cljs.core.Keyword(null,"green","green",-945526839)))], null))}),crinkle.component.react_createElement_STAR_(module$node_modules$$material_ui$core$CardHeader$index.default,({"className": new cljs.core.Keyword(null,"card-header","card-header",253587447).cljs$core$IFn$_invoke$arity$1(classes), "title": clojure.string.upper_case(target)})),crinkle.component.react_createElement_STAR_(module$node_modules$$material_ui$core$CardContent$index.default,({"className": new cljs.core.Keyword(null,"card-content","card-content",1213828862).cljs$core$IFn$_invoke$arity$1(classes)}),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__39577_SHARP_){
return crinkle.component.react_createElement_STAR_("div",({"key": p1__39577_SHARP_, "className": new cljs.core.Keyword(null,"taboo","taboo",309107072).cljs$core$IFn$_invoke$arity$1(classes)}),clojure.string.upper_case(p1__39577_SHARP_));
})),taboo__$1)));
});
taboo.view.start_card = (function taboo$view$start_card(p__39581){
var map__39582 = p__39581;
var map__39582__$1 = (((((!((map__39582 == null))))?(((((map__39582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39582):map__39582);
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39582__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
return crinkle.component.react_createElement_STAR_(module$node_modules$$material_ui$core$Card$index.default,({"className": taboo.view.classname(classes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blue","blue",-622100620)], null))}));
});
taboo.view.swipe_card = (function taboo$view$swipe_card(p__39584){
var map__39585 = p__39584;
var map__39585__$1 = (((((!((map__39585 == null))))?(((((map__39585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39585.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39585):map__39585);
var classname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39585__$1,new cljs.core.Keyword(null,"classname","classname",777390796));
var child_card = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39585__$1,new cljs.core.Keyword(null,"child-card","child-card",452339504));
var on_card_left_screen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39585__$1,new cljs.core.Keyword(null,"on-card-left-screen","on-card-left-screen",2094180989));
return crinkle.component.react_createElement_STAR_(module$taboo$react_tinder_card.TinderCard,({"className": classname, "preventSwipe": ["up","down"], "onSwipe": cljs.core.identity, "onCardLeftScreen": on_card_left_screen}),child_card);
});
taboo.view.deck = (function taboo$view$deck(p__39587){
var map__39588 = p__39587;
var map__39588__$1 = (((((!((map__39588 == null))))?(((((map__39588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39588):map__39588);
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39588__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var extra_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39588__$1,new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843));
var wordsets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39588__$1,new cljs.core.Keyword(null,"wordsets","wordsets",-2073196555));
var setT = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39588__$1,new cljs.core.Keyword(null,"setT","setT",-1721028573));
return crinkle.component.react_createElement_STAR_("div",({"className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"deck","deck",1145325705).cljs$core$IFn$_invoke$arity$1(classes))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_classes)].join('')}),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__39590){
var vec__39591 = p__39590;
var seq__39592 = cljs.core.seq(vec__39591);
var first__39593 = cljs.core.first(seq__39592);
var seq__39592__$1 = cljs.core.next(seq__39592);
var target = first__39593;
var taboo__$1 = seq__39592__$1;
return crinkle.component.create_element_raw_props(taboo.view.swipe_card,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"classname","classname",777390796),taboo.view.classname(classes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tinder-card","tinder-card",-141233118)], null)),new cljs.core.Keyword(null,"on-card-left-screen","on-card-left-screen",2094180989),(function (){
return (setT.cljs$core$IFn$_invoke$arity$1 ? setT.cljs$core$IFn$_invoke$arity$1(cljs.core.inc) : setT.call(null,cljs.core.inc));
}),new cljs.core.Keyword(null,"child-card","child-card",452339504),crinkle.component.create_element_raw_props(taboo.view.card,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"classes","classes",2037804510),classes,new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"taboo","taboo",309107072),taboo__$1], null),null,null)], null),target,null);
})),wordsets));
});
taboo.view.clock = (function taboo$view$clock(p__39594){
var map__39595 = p__39594;
var map__39595__$1 = (((((!((map__39595 == null))))?(((((map__39595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39595.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39595):map__39595);
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39595__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var extra_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39595__$1,new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843));
var timer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39595__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));
var minutes = ((timer / (60)) | (0));
var seconds = cljs.core.mod(timer,(60));
return crinkle.component.react_createElement_STAR_("div",({"className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"clock","clock",-894301127).cljs$core$IFn$_invoke$arity$1(classes))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_classes)].join('')}),crinkle.component.react_createElement_STAR_("span",({"className": new cljs.core.Keyword(null,"clock-span","clock-span",-1301409579).cljs$core$IFn$_invoke$arity$1(classes)}),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(minutes),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.string.format("%02d",seconds))].join('')));
});
taboo.view.game = (function taboo$view$game(p__39597){
var map__39598 = p__39597;
var map__39598__$1 = (((((!((map__39598 == null))))?(((((map__39598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39598):map__39598);
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39598__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var game_seconds = (function (){var custom_game_length = parseInt((new URLSearchParams(window.location.search)).get("t"));
if(cljs.core.truth_(isNaN(custom_game_length))){
return (61);
} else {
return custom_game_length;
}
})();
var excess = (5);
var vec__39600 = module$node_modules$react$index.useState((0));
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39600,(0),null);
var setT = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39600,(1),null);
var vec__39603 = (function (){var G__39615 = cljs.core.reverse(cljs.core.take.cljs$core$IFn$_invoke$arity$2(excess,taboo.words.words));
return module$node_modules$react$index.useState(G__39615);
})();
var wordsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39603,(0),null);
var setWordsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39603,(1),null);
var vec__39606 = module$node_modules$react$index.useState((0));
var timer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39606,(0),null);
var setTimer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39606,(1),null);
var vec__39609 = (function (){var G__39616 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
return module$node_modules$react$index.useState(G__39616);
})();
var turn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39609,(0),null);
var setTurn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39609,(1),null);
var vec__39612 = module$node_modules$react$index.useState(false);
var reviewing_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39612,(0),null);
var setReviewing = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39612,(1),null);
var G__39617_39632 = (function (){
var G__39619_39634 = cljs.core.reverse(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(taboo.words.words,t,(t + excess)));
(setWordsets.cljs$core$IFn$_invoke$arity$1 ? setWordsets.cljs$core$IFn$_invoke$arity$1(G__39619_39634) : setWordsets.call(null,G__39619_39634));

return cljs.core.constantly(null);
});
var G__39618_39633 = [t];
module$node_modules$react$index.useEffect(G__39617_39632,G__39618_39633);

var G__39620_39635 = (function (){
if((timer === (0))){
(setWordsets.cljs$core$IFn$_invoke$arity$1 ? setWordsets.cljs$core$IFn$_invoke$arity$1(cljs.core.drop_last) : setWordsets.call(null,cljs.core.drop_last));

(setT.cljs$core$IFn$_invoke$arity$1 ? setT.cljs$core$IFn$_invoke$arity$1(cljs.core.inc) : setT.call(null,cljs.core.inc));

var G__39622_39637 = (function (p__39623){
var vec__39624 = p__39623;
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39624,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39624,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [end,t], null);
});
(setTurn.cljs$core$IFn$_invoke$arity$1 ? setTurn.cljs$core$IFn$_invoke$arity$1(G__39622_39637) : setTurn.call(null,G__39622_39637));

(setReviewing.cljs$core$IFn$_invoke$arity$1 ? setReviewing.cljs$core$IFn$_invoke$arity$1(true) : setReviewing.call(null,true));
} else {
}

return cljs.core.constantly(null);
});
var G__39621_39636 = [timer];
module$node_modules$react$index.useEffect(G__39620_39635,G__39621_39636);

var G__39627_39638 = (function (){
var interval = setInterval((function (){
var G__39629 = (function (x){
if((x > (0))){
return (x - (1));
} else {
return (0);
}
});
return (setTimer.cljs$core$IFn$_invoke$arity$1 ? setTimer.cljs$core$IFn$_invoke$arity$1(G__39629) : setTimer.call(null,G__39629));
}),(1000));
return (function (){
return clearInterval(interval);
});
});
var G__39628_39639 = [];
module$node_modules$react$index.useEffect(G__39627_39638,G__39628_39639);

return crinkle.component.react_createElement_STAR_("div",({"className": new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(classes)}),(((timer === (0)))?crinkle.component.create_element_raw_props(taboo.view.swipe_card,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"classname","classname",777390796),taboo.view.classname(classes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tinder-card","tinder-card",-141233118),new cljs.core.Keyword(null,"front","front",-1523508988)], null)),new cljs.core.Keyword(null,"on-card-left-screen","on-card-left-screen",2094180989),(function (){
return (setTimer.cljs$core$IFn$_invoke$arity$1 ? setTimer.cljs$core$IFn$_invoke$arity$1(game_seconds) : setTimer.call(null,game_seconds));
}),new cljs.core.Keyword(null,"child-card","child-card",452339504),crinkle.component.create_element_raw_props(taboo.view.card,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"classes","classes",2037804510),classes,new cljs.core.Keyword(null,"target","target",253001721),"Ready?",new cljs.core.Keyword(null,"taboo","taboo",309107072),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Swipe to begin"], null)], null),null,null)], null),null,null):null),(cljs.core.truth_((((timer === (0)))?(function (){var and__4174__auto__ = reviewing_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
return (cljs.core.second(turn) > (0));
} else {
return and__4174__auto__;
}
})():false))?crinkle.component.create_element_raw_props(taboo.view.review,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"classes","classes",2037804510),classes,new cljs.core.Keyword(null,"wordsets","wordsets",-2073196555),cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(taboo.words.words,(cljs.core.first(turn) + (1)),(cljs.core.second(turn) + (1))),new cljs.core.Keyword(null,"setReviewing","setReviewing",-259484244),setReviewing], null),null,null):null),crinkle.component.create_element_raw_props(taboo.view.deck,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"classes","classes",2037804510),classes,new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843),(((timer === (0)))?new cljs.core.Keyword(null,"display-none","display-none",-582835605).cljs$core$IFn$_invoke$arity$1(classes):null),new cljs.core.Keyword(null,"wordsets","wordsets",-2073196555),wordsets,new cljs.core.Keyword(null,"setT","setT",-1721028573),setT], null),null,null),crinkle.component.create_element_raw_props(taboo.view.clock,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"classes","classes",2037804510),classes,new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843),(((timer === (0)))?new cljs.core.Keyword(null,"invisible","invisible",810504226).cljs$core$IFn$_invoke$arity$1(classes):null),new cljs.core.Keyword(null,"timer","timer",-1266967739),timer], null),null,null));
});
taboo.view.app = (function taboo$view$app(){
var classes = cljs_bean.core.__GT_clj((taboo.view.styles.cljs$core$IFn$_invoke$arity$0 ? taboo.view.styles.cljs$core$IFn$_invoke$arity$0() : taboo.view.styles.call(null)));
return crinkle.component.react_createElement_STAR_("div",({"className": new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(classes)}),crinkle.component.create_element_raw_props(taboo.view.game,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),classes], null),null,null));
});

//# sourceMappingURL=taboo.view.js.map
