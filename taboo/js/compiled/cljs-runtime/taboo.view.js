goog.provide('taboo.view');
goog.require('cljs.core');
var module$taboo$react_tinder_card=shadow.js.require("module$taboo$react_tinder_card", {});
var module$node_modules$$material_ui$core$Button$index=shadow.js.require("module$node_modules$$material_ui$core$Button$index", {});
var module$node_modules$$material_ui$core$Card$index=shadow.js.require("module$node_modules$$material_ui$core$Card$index", {});
var module$node_modules$$material_ui$core$CardContent$index=shadow.js.require("module$node_modules$$material_ui$core$CardContent$index", {});
var module$node_modules$$material_ui$core$CardHeader$index=shadow.js.require("module$node_modules$$material_ui$core$CardHeader$index", {});
var module$node_modules$$material_ui$core$IconButton$index=shadow.js.require("module$node_modules$$material_ui$core$IconButton$index", {});
var module$node_modules$$material_ui$core$styles$makeStyles=shadow.js.require("module$node_modules$$material_ui$core$styles$makeStyles", {});
var module$node_modules$$material_ui$icons$Add=shadow.js.require("module$node_modules$$material_ui$icons$Add", {});
var module$node_modules$$material_ui$icons$Check=shadow.js.require("module$node_modules$$material_ui$icons$Check", {});
var module$node_modules$$material_ui$icons$Clear=shadow.js.require("module$node_modules$$material_ui$icons$Clear", {});
var module$node_modules$$material_ui$icons$FastForward=shadow.js.require("module$node_modules$$material_ui$icons$FastForward", {});
var module$node_modules$$material_ui$icons$FastRewind=shadow.js.require("module$node_modules$$material_ui$icons$FastRewind", {});
var module$node_modules$$material_ui$icons$Redo=shadow.js.require("module$node_modules$$material_ui$icons$Redo", {});
var module$node_modules$$material_ui$icons$Remove=shadow.js.require("module$node_modules$$material_ui$icons$Remove", {});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
goog.require('cljs_bean.core');
goog.require('clojure.string');
goog.require('crinkle.component');
goog.require('crinkle.dom');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('taboo.words');
taboo.view.dev_words = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A","a","a","a","a"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["B","b","b","b","b"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","c","c","c","c"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["D","d","d","d","d"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["E","e","e","e","e"], null)], null);
taboo.view.styles = (function (){var G__55618 = (function (theme){
var theme__$1 = cljs_bean.core.__GT_clj(theme);
var card_width = (260);
var card_height = (1.5 * card_width);
var next_button_height = (60);
var next_button_margin = (function (){var fexpr__55619 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__55619.cljs$core$IFn$_invoke$arity$1 ? fexpr__55619.cljs$core$IFn$_invoke$arity$1(1.0) : fexpr__55619.call(null,1.0));
})();
return ({"taboo": ({"marginTop": (function (){var fexpr__55620 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__55620.cljs$core$IFn$_invoke$arity$1 ? fexpr__55620.cljs$core$IFn$_invoke$arity$1(1.5) : fexpr__55620.call(null,1.5));
})(), "marginBottom": (function (){var fexpr__55621 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__55621.cljs$core$IFn$_invoke$arity$1 ? fexpr__55621.cljs$core$IFn$_invoke$arity$1(1.5) : fexpr__55621.call(null,1.5));
})()}), "score-span": ({"margin": (function (){var fexpr__55622 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__55622.cljs$core$IFn$_invoke$arity$1 ? fexpr__55622.cljs$core$IFn$_invoke$arity$1(0.5) : fexpr__55622.call(null,0.5));
})()}), "invisible": ({"visibility": "hidden"}), "tinder-card": ({"position": "absolute", "top": (0), "bottom": (0), "left": (0), "right": (0)}), "front": ({"zIndex": (-1)}), "review-item": ({"fontFamily": "'Roboto', sans-serif", "margin": (function (){var fexpr__55623 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__55623.cljs$core$IFn$_invoke$arity$1 ? fexpr__55623.cljs$core$IFn$_invoke$arity$1(2.0) : fexpr__55623.call(null,2.0));
})()}), "deck": ({"marginTop": (function (){var fexpr__55624 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__55624.cljs$core$IFn$_invoke$arity$1 ? fexpr__55624.cljs$core$IFn$_invoke$arity$1(4.0) : fexpr__55624.call(null,4.0));
})(), "width": card_width, "height": card_height}), "green": ({"backgroundColor": "#27c4a8"}), "display-none": ({"display": "none"}), "review-taboo": ({"margin": (function (){var fexpr__55625 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__55625.cljs$core$IFn$_invoke$arity$1 ? fexpr__55625.cljs$core$IFn$_invoke$arity$1(2.0) : fexpr__55625.call(null,2.0));
})()}), "card": ({"textAlign": "center", "marginLeft": "auto", "marginRight": "auto", "marginTop": (function (){var fexpr__55626 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__55626.cljs$core$IFn$_invoke$arity$1 ? fexpr__55626.cljs$core$IFn$_invoke$arity$1(4.0) : fexpr__55626.call(null,4.0));
})(), "width": card_width, "height": card_height}), "review-button": ({"margin": (function (){var fexpr__55627 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__55627.cljs$core$IFn$_invoke$arity$1 ? fexpr__55627.cljs$core$IFn$_invoke$arity$1(2.0) : fexpr__55627.call(null,2.0));
})()}), "review": ({"background": "linear-gradient(0deg, #e3ffe7 0%, #d9e7ff 100%)", "position": "absolute", "top": (0), "right": (0), "left": (0), "display": "flex", "flexDirection": "column", "padding": (function (){var fexpr__55628 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__55628.cljs$core$IFn$_invoke$arity$1 ? fexpr__55628.cljs$core$IFn$_invoke$arity$1(2.0) : fexpr__55628.call(null,2.0));
})()}), "score": ({"margin": (function (){var fexpr__55629 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__55629.cljs$core$IFn$_invoke$arity$1 ? fexpr__55629.cljs$core$IFn$_invoke$arity$1(1.0) : fexpr__55629.call(null,1.0));
})()}), "blue": ({"backgroundColor": "dodgerblue"}), "clock-span": ({"fontSize": (24)}), "app": ({"fontFamily": "'Walter Turncoat', 'Roboto', sans-serif"}), "card-header": ({"color": "white", "height": (0.1 * card_height), "padding": (function (){var fexpr__55630 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__55630.cljs$core$IFn$_invoke$arity$1 ? fexpr__55630.cljs$core$IFn$_invoke$arity$1(2.0) : fexpr__55630.call(null,2.0));
})()}), "scores": ({"position": "absolute", "bottom": (100), "textAlign": "center", "width": "100%"}), "clock": ({"fontFamily": "'Roboto Mono', monospace", "textAlign": "center", "margin": (function (){var fexpr__55631 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__55631.cljs$core$IFn$_invoke$arity$1 ? fexpr__55631.cljs$core$IFn$_invoke$arity$1(4.0) : fexpr__55631.call(null,4.0));
})()}), "purple": ({"backgroundColor": "#8e2dfc"}), "next-button": ({"height": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_button_height),"px"].join(''), "margin": next_button_margin}), "history-button": ({"height": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((next_button_height * (3)) + (next_button_margin * (4)))),"px"].join(''), "margin": (function (){var fexpr__55632 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__55632.cljs$core$IFn$_invoke$arity$1 ? fexpr__55632.cljs$core$IFn$_invoke$arity$1(1.0) : fexpr__55632.call(null,1.0));
})()}), "review-target": ({"fontSize": "larger", "fontWeight": "bold"}), "card-content": ({"marginLeft": (function (){var fexpr__55633 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__55633.cljs$core$IFn$_invoke$arity$1 ? fexpr__55633.cljs$core$IFn$_invoke$arity$1(1.0) : fexpr__55633.call(null,1.0));
})(), "flexDirection": "column", "justifyContent": "space-evenly", "padding": (function (){var fexpr__55634 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__55634.cljs$core$IFn$_invoke$arity$1 ? fexpr__55634.cljs$core$IFn$_invoke$arity$1(2.0) : fexpr__55634.call(null,2.0));
})(), "marginBottom": (function (){var fexpr__55635 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__55635.cljs$core$IFn$_invoke$arity$1 ? fexpr__55635.cljs$core$IFn$_invoke$arity$1(1.0) : fexpr__55635.call(null,1.0));
})(), "display": "flex", "backgroundColor": "seashell", "height": (((((card_height - (0.1 * card_height)) - ((2) * (function (){var fexpr__55636 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__55636.cljs$core$IFn$_invoke$arity$1 ? fexpr__55636.cljs$core$IFn$_invoke$arity$1(2.0) : fexpr__55636.call(null,2.0));
})())) - ((2) * (function (){var fexpr__55637 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__55637.cljs$core$IFn$_invoke$arity$1 ? fexpr__55637.cljs$core$IFn$_invoke$arity$1(2.0) : fexpr__55637.call(null,2.0));
})())) - (function (){var fexpr__55638 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__55638.cljs$core$IFn$_invoke$arity$1 ? fexpr__55638.cljs$core$IFn$_invoke$arity$1(1.0) : fexpr__55638.call(null,1.0));
})()) - (function (){var fexpr__55639 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__55639.cljs$core$IFn$_invoke$arity$1 ? fexpr__55639.cljs$core$IFn$_invoke$arity$1(1.0) : fexpr__55639.call(null,1.0));
})()), "marginRight": (function (){var fexpr__55640 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__55640.cljs$core$IFn$_invoke$arity$1 ? fexpr__55640.cljs$core$IFn$_invoke$arity$1(1.0) : fexpr__55640.call(null,1.0));
})()})});
});
return module$node_modules$$material_ui$core$styles$makeStyles.default(G__55618);
})();
taboo.view.classname = (function taboo$view$classname(classes,classnames){
var classnames__$1 = ((cljs.core.vector_QMARK_(classnames))?classnames:(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[classnames],null)));
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__55641_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(classes,p1__55641_SHARP_);
})),classnames__$1));
});
taboo.view.review = (function taboo$view$review(p__55643){
var map__55644 = p__55643;
var map__55644__$1 = (((((!((map__55644 == null))))?(((((map__55644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55644.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55644):map__55644);
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55644__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var wordsets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55644__$1,new cljs.core.Keyword(null,"wordsets","wordsets",-2073196555));
var setReviewing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55644__$1,new cljs.core.Keyword(null,"setReviewing","setReviewing",-259484244));
return crinkle.component.react_createElement_STAR_("div",({"className": new cljs.core.Keyword(null,"review","review",1101692435).cljs$core$IFn$_invoke$arity$1(classes)}),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__55646){
var vec__55647 = p__55646;
var seq__55648 = cljs.core.seq(vec__55647);
var first__55649 = cljs.core.first(seq__55648);
var seq__55648__$1 = cljs.core.next(seq__55648);
var target = first__55649;
var taboo__$1 = seq__55648__$1;
return crinkle.component.react_createElement_STAR_("div",({"className": new cljs.core.Keyword(null,"review-item","review-item",-1284874135).cljs$core$IFn$_invoke$arity$1(classes), "key": target}),crinkle.component.react_createElement_STAR_("div",({"className": new cljs.core.Keyword(null,"review-target","review-target",1330472381).cljs$core$IFn$_invoke$arity$1(classes)}),target),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__55642_SHARP_){
return crinkle.component.react_createElement_STAR_("div",({"className": new cljs.core.Keyword(null,"review-taboo","review-taboo",926205547).cljs$core$IFn$_invoke$arity$1(classes), "key": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(target),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__55642_SHARP_)].join('')}),p1__55642_SHARP_);
})),taboo__$1));
}))),wordsets),crinkle.component.react_createElement_STAR_(module$node_modules$$material_ui$core$Button$index.default,({"className": new cljs.core.Keyword(null,"review-button","review-button",-1597697902).cljs$core$IFn$_invoke$arity$1(classes), "variant": "contained", "color": "primary", "onClick": (function (_e){
return (setReviewing.cljs$core$IFn$_invoke$arity$1 ? setReviewing.cljs$core$IFn$_invoke$arity$1(false) : setReviewing.call(null,false));
})}),"Continue"));
});
taboo.view.card = (function taboo$view$card(p__55651){
var map__55652 = p__55651;
var map__55652__$1 = (((((!((map__55652 == null))))?(((((map__55652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55652.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55652):map__55652);
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55652__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55652__$1,new cljs.core.Keyword(null,"target","target",253001721));
var taboo__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55652__$1,new cljs.core.Keyword(null,"taboo","taboo",309107072));
return crinkle.component.react_createElement_STAR_(module$node_modules$$material_ui$core$Card$index.default,({"className": taboo.view.classname(classes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card","card",-1430355152),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target,"Ready?"))?new cljs.core.Keyword(null,"blue","blue",-622100620):((cljs.core.even_QMARK_(cljs.core.count(target)))?new cljs.core.Keyword(null,"purple","purple",-876021126):new cljs.core.Keyword(null,"green","green",-945526839)))], null))}),crinkle.component.react_createElement_STAR_(module$node_modules$$material_ui$core$CardHeader$index.default,({"className": new cljs.core.Keyword(null,"card-header","card-header",253587447).cljs$core$IFn$_invoke$arity$1(classes), "title": clojure.string.upper_case(target)})),crinkle.component.react_createElement_STAR_(module$node_modules$$material_ui$core$CardContent$index.default,({"className": new cljs.core.Keyword(null,"card-content","card-content",1213828862).cljs$core$IFn$_invoke$arity$1(classes)}),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__55650_SHARP_){
return crinkle.component.react_createElement_STAR_("div",({"key": p1__55650_SHARP_, "className": new cljs.core.Keyword(null,"taboo","taboo",309107072).cljs$core$IFn$_invoke$arity$1(classes)}),clojure.string.upper_case(p1__55650_SHARP_));
})),taboo__$1)));
});
taboo.view.start_card = (function taboo$view$start_card(p__55654){
var map__55655 = p__55654;
var map__55655__$1 = (((((!((map__55655 == null))))?(((((map__55655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55655):map__55655);
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55655__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
return crinkle.component.react_createElement_STAR_(module$node_modules$$material_ui$core$Card$index.default,({"className": taboo.view.classname(classes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blue","blue",-622100620)], null))}));
});
taboo.view.swipe_card = (function taboo$view$swipe_card(p__55657){
var map__55658 = p__55657;
var map__55658__$1 = (((((!((map__55658 == null))))?(((((map__55658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55658):map__55658);
var classname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55658__$1,new cljs.core.Keyword(null,"classname","classname",777390796));
var child_card = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55658__$1,new cljs.core.Keyword(null,"child-card","child-card",452339504));
var on_card_left_screen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55658__$1,new cljs.core.Keyword(null,"on-card-left-screen","on-card-left-screen",2094180989));
return crinkle.component.react_createElement_STAR_(module$taboo$react_tinder_card.TinderCard,({"className": classname, "preventSwipe": ["up","down"], "onSwipe": cljs.core.identity, "onCardLeftScreen": on_card_left_screen}),child_card);
});
taboo.view.deck = (function taboo$view$deck(p__55660){
var map__55661 = p__55660;
var map__55661__$1 = (((((!((map__55661 == null))))?(((((map__55661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55661):map__55661);
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55661__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var extra_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55661__$1,new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843));
var wordsets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55661__$1,new cljs.core.Keyword(null,"wordsets","wordsets",-2073196555));
var setT = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55661__$1,new cljs.core.Keyword(null,"setT","setT",-1721028573));
return crinkle.component.react_createElement_STAR_("div",({"className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"deck","deck",1145325705).cljs$core$IFn$_invoke$arity$1(classes))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_classes)].join('')}),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__55663){
var vec__55664 = p__55663;
var seq__55665 = cljs.core.seq(vec__55664);
var first__55666 = cljs.core.first(seq__55665);
var seq__55665__$1 = cljs.core.next(seq__55665);
var target = first__55666;
var taboo__$1 = seq__55665__$1;
return crinkle.component.create_element_raw_props(taboo.view.swipe_card,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"classname","classname",777390796),taboo.view.classname(classes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tinder-card","tinder-card",-141233118)], null)),new cljs.core.Keyword(null,"on-card-left-screen","on-card-left-screen",2094180989),(function (){
return (setT.cljs$core$IFn$_invoke$arity$1 ? setT.cljs$core$IFn$_invoke$arity$1(cljs.core.inc) : setT.call(null,cljs.core.inc));
}),new cljs.core.Keyword(null,"child-card","child-card",452339504),crinkle.component.create_element_raw_props(taboo.view.card,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"classes","classes",2037804510),classes,new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"taboo","taboo",309107072),taboo__$1], null),null,null)], null),target,null);
})),wordsets));
});
taboo.view.clock = (function taboo$view$clock(p__55667){
var map__55668 = p__55667;
var map__55668__$1 = (((((!((map__55668 == null))))?(((((map__55668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55668):map__55668);
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55668__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var extra_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55668__$1,new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843));
var timer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55668__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));
var minutes = ((timer / (60)) | (0));
var seconds = cljs.core.mod(timer,(60));
return crinkle.component.react_createElement_STAR_("div",({"className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"clock","clock",-894301127).cljs$core$IFn$_invoke$arity$1(classes))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_classes)].join('')}),crinkle.component.react_createElement_STAR_("span",({"className": new cljs.core.Keyword(null,"clock-span","clock-span",-1301409579).cljs$core$IFn$_invoke$arity$1(classes)}),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(minutes),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.string.format("%02d",seconds))].join('')));
});
taboo.view.game = (function taboo$view$game(p__55670){
var map__55671 = p__55670;
var map__55671__$1 = (((((!((map__55671 == null))))?(((((map__55671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55671):map__55671);
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55671__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var game_seconds = (function (){var custom_game_length = parseInt((new URLSearchParams(window.location.search)).get("t"));
if(cljs.core.truth_(isNaN(custom_game_length))){
return (61);
} else {
return custom_game_length;
}
})();
var excess = (5);
var vec__55673 = module$node_modules$react$index.useState((0));
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55673,(0),null);
var setT = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55673,(1),null);
var vec__55676 = (function (){var G__55688 = cljs.core.reverse(cljs.core.take.cljs$core$IFn$_invoke$arity$2(excess,taboo.words.words));
return module$node_modules$react$index.useState(G__55688);
})();
var wordsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55676,(0),null);
var setWordsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55676,(1),null);
var vec__55679 = module$node_modules$react$index.useState((0));
var timer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55679,(0),null);
var setTimer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55679,(1),null);
var vec__55682 = (function (){var G__55689 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
return module$node_modules$react$index.useState(G__55689);
})();
var turn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55682,(0),null);
var setTurn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55682,(1),null);
var vec__55685 = module$node_modules$react$index.useState(false);
var reviewing_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55685,(0),null);
var setReviewing = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55685,(1),null);
var G__55690_55714 = (function (){
var G__55692_55716 = cljs.core.reverse(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(taboo.words.words,t,(t + excess)));
(setWordsets.cljs$core$IFn$_invoke$arity$1 ? setWordsets.cljs$core$IFn$_invoke$arity$1(G__55692_55716) : setWordsets.call(null,G__55692_55716));

return cljs.core.constantly(null);
});
var G__55691_55715 = [t];
module$node_modules$react$index.useEffect(G__55690_55714,G__55691_55715);

var G__55693_55717 = (function (){
if((timer === (0))){
(setWordsets.cljs$core$IFn$_invoke$arity$1 ? setWordsets.cljs$core$IFn$_invoke$arity$1(cljs.core.drop_last) : setWordsets.call(null,cljs.core.drop_last));

(setT.cljs$core$IFn$_invoke$arity$1 ? setT.cljs$core$IFn$_invoke$arity$1(cljs.core.inc) : setT.call(null,cljs.core.inc));

var G__55695_55719 = (function (p__55696){
var vec__55697 = p__55696;
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55697,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55697,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [end,t], null);
});
(setTurn.cljs$core$IFn$_invoke$arity$1 ? setTurn.cljs$core$IFn$_invoke$arity$1(G__55695_55719) : setTurn.call(null,G__55695_55719));

(setReviewing.cljs$core$IFn$_invoke$arity$1 ? setReviewing.cljs$core$IFn$_invoke$arity$1(true) : setReviewing.call(null,true));
} else {
}

return cljs.core.constantly(null);
});
var G__55694_55718 = [timer];
module$node_modules$react$index.useEffect(G__55693_55717,G__55694_55718);

var G__55700_55720 = (function (){
var interval = setInterval((function (){
var G__55702 = (function (x){
if((x > (0))){
return (x - (1));
} else {
return (0);
}
});
return (setTimer.cljs$core$IFn$_invoke$arity$1 ? setTimer.cljs$core$IFn$_invoke$arity$1(G__55702) : setTimer.call(null,G__55702));
}),(1000));
return (function (){
return clearInterval(interval);
});
});
var G__55701_55721 = [];
module$node_modules$react$index.useEffect(G__55700_55720,G__55701_55721);

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
taboo.view.score = (function taboo$view$score(p__55703){
var map__55704 = p__55703;
var map__55704__$1 = (((((!((map__55704 == null))))?(((((map__55704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55704):map__55704);
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55704__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var vec__55706 = module$node_modules$react$index.useState((0));
var score = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55706,(0),null);
var setScore = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55706,(1),null);
return crinkle.component.react_createElement_STAR_("span",({"className": new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(classes)}),crinkle.component.react_createElement_STAR_(module$node_modules$$material_ui$core$IconButton$index.default,({"onClick": (function (){
return (setScore.cljs$core$IFn$_invoke$arity$1 ? setScore.cljs$core$IFn$_invoke$arity$1(cljs.core.dec) : setScore.call(null,cljs.core.dec));
})}),crinkle.component.react_createElement_STAR_(module$node_modules$$material_ui$icons$Remove.default,null)),crinkle.component.react_createElement_STAR_("span",({"className": new cljs.core.Keyword(null,"score-span","score-span",-201889280).cljs$core$IFn$_invoke$arity$1(classes)}),score),crinkle.component.react_createElement_STAR_(module$node_modules$$material_ui$core$IconButton$index.default,({"onClick": (function (){
return (setScore.cljs$core$IFn$_invoke$arity$1 ? setScore.cljs$core$IFn$_invoke$arity$1(cljs.core.inc) : setScore.call(null,cljs.core.inc));
})}),crinkle.component.react_createElement_STAR_(module$node_modules$$material_ui$icons$Add.default,null)));
});
taboo.view.scores = (function taboo$view$scores(p__55709){
var map__55710 = p__55709;
var map__55710__$1 = (((((!((map__55710 == null))))?(((((map__55710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55710):map__55710);
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55710__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
return crinkle.component.react_createElement_STAR_("div",({"className": new cljs.core.Keyword(null,"scores","scores",-1267421800).cljs$core$IFn$_invoke$arity$1(classes)}),crinkle.component.create_element_raw_props(taboo.view.score,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),classes], null),null,null),crinkle.component.create_element_raw_props(taboo.view.score,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),classes], null),null,null));
});
taboo.view.app = (function taboo$view$app(){
var classes = cljs_bean.core.__GT_clj((taboo.view.styles.cljs$core$IFn$_invoke$arity$0 ? taboo.view.styles.cljs$core$IFn$_invoke$arity$0() : taboo.view.styles.call(null)));
return crinkle.component.react_createElement_STAR_("div",({"className": new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(classes)}),crinkle.component.create_element_raw_props(taboo.view.game,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),classes], null),null,null),crinkle.component.create_element_raw_props(taboo.view.scores,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),classes], null),null,null));
});

//# sourceMappingURL=taboo.view.js.map
