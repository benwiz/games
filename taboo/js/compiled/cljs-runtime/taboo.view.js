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
taboo.view.styles = (function (){var G__55722 = (function (theme){
var theme__$1 = cljs_bean.core.__GT_clj(theme);
var card_width = (260);
var card_height = (1.5 * card_width);
var next_button_height = (60);
var next_button_margin = (function (){var fexpr__55723 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__55723.cljs$core$IFn$_invoke$arity$1 ? fexpr__55723.cljs$core$IFn$_invoke$arity$1(1.0) : fexpr__55723.call(null,1.0));
})();
return ({"taboo": ({"marginTop": (function (){var fexpr__55724 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__55724.cljs$core$IFn$_invoke$arity$1 ? fexpr__55724.cljs$core$IFn$_invoke$arity$1(1.5) : fexpr__55724.call(null,1.5));
})(), "marginBottom": (function (){var fexpr__55725 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__55725.cljs$core$IFn$_invoke$arity$1 ? fexpr__55725.cljs$core$IFn$_invoke$arity$1(1.5) : fexpr__55725.call(null,1.5));
})()}), "score-span": ({"margin": (function (){var fexpr__55726 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__55726.cljs$core$IFn$_invoke$arity$1 ? fexpr__55726.cljs$core$IFn$_invoke$arity$1(0.5) : fexpr__55726.call(null,0.5));
})()}), "invisible": ({"visibility": "hidden"}), "tinder-card": ({"position": "absolute", "top": (0), "bottom": (0), "left": (0), "right": (0)}), "front": ({"zIndex": (-1)}), "review-item": ({"fontFamily": "'Roboto', sans-serif", "margin": (function (){var fexpr__55727 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__55727.cljs$core$IFn$_invoke$arity$1 ? fexpr__55727.cljs$core$IFn$_invoke$arity$1(2.0) : fexpr__55727.call(null,2.0));
})()}), "deck": ({"marginTop": (function (){var fexpr__55728 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__55728.cljs$core$IFn$_invoke$arity$1 ? fexpr__55728.cljs$core$IFn$_invoke$arity$1(4.0) : fexpr__55728.call(null,4.0));
})(), "width": card_width, "height": card_height}), "green": ({"backgroundColor": "#27c4a8"}), "display-none": ({"display": "none"}), "review-taboo": ({"margin": (function (){var fexpr__55729 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__55729.cljs$core$IFn$_invoke$arity$1 ? fexpr__55729.cljs$core$IFn$_invoke$arity$1(2.0) : fexpr__55729.call(null,2.0));
})()}), "card": ({"textAlign": "center", "marginLeft": "auto", "marginRight": "auto", "marginTop": (function (){var fexpr__55730 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__55730.cljs$core$IFn$_invoke$arity$1 ? fexpr__55730.cljs$core$IFn$_invoke$arity$1(4.0) : fexpr__55730.call(null,4.0));
})(), "width": card_width, "height": card_height}), "review-button": ({"margin": (function (){var fexpr__55731 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__55731.cljs$core$IFn$_invoke$arity$1 ? fexpr__55731.cljs$core$IFn$_invoke$arity$1(2.0) : fexpr__55731.call(null,2.0));
})()}), "review": ({"background": "linear-gradient(0deg, #e3ffe7 0%, #d9e7ff 100%)", "position": "absolute", "top": (0), "right": (0), "left": (0), "display": "flex", "flexDirection": "column", "padding": (function (){var fexpr__55732 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__55732.cljs$core$IFn$_invoke$arity$1 ? fexpr__55732.cljs$core$IFn$_invoke$arity$1(2.0) : fexpr__55732.call(null,2.0));
})()}), "score": ({"margin": (function (){var fexpr__55733 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__55733.cljs$core$IFn$_invoke$arity$1 ? fexpr__55733.cljs$core$IFn$_invoke$arity$1(1.0) : fexpr__55733.call(null,1.0));
})()}), "blue": ({"backgroundColor": "dodgerblue"}), "clock-span": ({"fontSize": (24)}), "app": ({"fontFamily": "'Walter Turncoat', 'Roboto', sans-serif"}), "card-header": ({"color": "white", "height": (0.1 * card_height), "padding": (function (){var fexpr__55734 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__55734.cljs$core$IFn$_invoke$arity$1 ? fexpr__55734.cljs$core$IFn$_invoke$arity$1(2.0) : fexpr__55734.call(null,2.0));
})()}), "scores": ({"position": "absolute", "bottom": (100), "textAlign": "center", "width": "100%"}), "clock": ({"fontFamily": "'Roboto Mono', monospace", "textAlign": "center", "margin": (function (){var fexpr__55735 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__55735.cljs$core$IFn$_invoke$arity$1 ? fexpr__55735.cljs$core$IFn$_invoke$arity$1(4.0) : fexpr__55735.call(null,4.0));
})()}), "purple": ({"backgroundColor": "#8e2dfc"}), "next-button": ({"height": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_button_height),"px"].join(''), "margin": next_button_margin}), "history-button": ({"height": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((next_button_height * (3)) + (next_button_margin * (4)))),"px"].join(''), "margin": (function (){var fexpr__55736 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__55736.cljs$core$IFn$_invoke$arity$1 ? fexpr__55736.cljs$core$IFn$_invoke$arity$1(1.0) : fexpr__55736.call(null,1.0));
})()}), "review-target": ({"fontSize": "larger", "fontWeight": "bold"}), "card-content": ({"marginLeft": (function (){var fexpr__55737 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__55737.cljs$core$IFn$_invoke$arity$1 ? fexpr__55737.cljs$core$IFn$_invoke$arity$1(1.0) : fexpr__55737.call(null,1.0));
})(), "flexDirection": "column", "justifyContent": "space-evenly", "padding": (function (){var fexpr__55738 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__55738.cljs$core$IFn$_invoke$arity$1 ? fexpr__55738.cljs$core$IFn$_invoke$arity$1(2.0) : fexpr__55738.call(null,2.0));
})(), "marginBottom": (function (){var fexpr__55739 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__55739.cljs$core$IFn$_invoke$arity$1 ? fexpr__55739.cljs$core$IFn$_invoke$arity$1(1.0) : fexpr__55739.call(null,1.0));
})(), "display": "flex", "backgroundColor": "seashell", "height": (((((card_height - (0.1 * card_height)) - ((2) * (function (){var fexpr__55740 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__55740.cljs$core$IFn$_invoke$arity$1 ? fexpr__55740.cljs$core$IFn$_invoke$arity$1(2.0) : fexpr__55740.call(null,2.0));
})())) - ((2) * (function (){var fexpr__55741 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__55741.cljs$core$IFn$_invoke$arity$1 ? fexpr__55741.cljs$core$IFn$_invoke$arity$1(2.0) : fexpr__55741.call(null,2.0));
})())) - (function (){var fexpr__55742 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__55742.cljs$core$IFn$_invoke$arity$1 ? fexpr__55742.cljs$core$IFn$_invoke$arity$1(1.0) : fexpr__55742.call(null,1.0));
})()) - (function (){var fexpr__55743 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__55743.cljs$core$IFn$_invoke$arity$1 ? fexpr__55743.cljs$core$IFn$_invoke$arity$1(1.0) : fexpr__55743.call(null,1.0));
})()), "marginRight": (function (){var fexpr__55744 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme__$1);
return (fexpr__55744.cljs$core$IFn$_invoke$arity$1 ? fexpr__55744.cljs$core$IFn$_invoke$arity$1(1.0) : fexpr__55744.call(null,1.0));
})()})});
});
return module$node_modules$$material_ui$core$styles$makeStyles.default(G__55722);
})();
taboo.view.classname = (function taboo$view$classname(classes,classnames){
var classnames__$1 = ((cljs.core.vector_QMARK_(classnames))?classnames:(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[classnames],null)));
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__55745_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(classes,p1__55745_SHARP_);
})),classnames__$1));
});
taboo.view.review = (function taboo$view$review(p__55747){
var map__55748 = p__55747;
var map__55748__$1 = (((((!((map__55748 == null))))?(((((map__55748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55748):map__55748);
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55748__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var wordsets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55748__$1,new cljs.core.Keyword(null,"wordsets","wordsets",-2073196555));
var setReviewing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55748__$1,new cljs.core.Keyword(null,"setReviewing","setReviewing",-259484244));
return crinkle.component.react_createElement_STAR_("div",({"className": new cljs.core.Keyword(null,"review","review",1101692435).cljs$core$IFn$_invoke$arity$1(classes)}),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__55750){
var vec__55751 = p__55750;
var seq__55752 = cljs.core.seq(vec__55751);
var first__55753 = cljs.core.first(seq__55752);
var seq__55752__$1 = cljs.core.next(seq__55752);
var target = first__55753;
var taboo__$1 = seq__55752__$1;
return crinkle.component.react_createElement_STAR_("div",({"className": new cljs.core.Keyword(null,"review-item","review-item",-1284874135).cljs$core$IFn$_invoke$arity$1(classes), "key": target}),crinkle.component.react_createElement_STAR_("div",({"className": new cljs.core.Keyword(null,"review-target","review-target",1330472381).cljs$core$IFn$_invoke$arity$1(classes)}),target),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__55746_SHARP_){
return crinkle.component.react_createElement_STAR_("div",({"className": new cljs.core.Keyword(null,"review-taboo","review-taboo",926205547).cljs$core$IFn$_invoke$arity$1(classes), "key": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(target),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__55746_SHARP_)].join('')}),p1__55746_SHARP_);
})),taboo__$1));
}))),wordsets),crinkle.component.react_createElement_STAR_(module$node_modules$$material_ui$core$Button$index.default,({"className": new cljs.core.Keyword(null,"review-button","review-button",-1597697902).cljs$core$IFn$_invoke$arity$1(classes), "variant": "contained", "color": "primary", "onClick": (function (_e){
return (setReviewing.cljs$core$IFn$_invoke$arity$1 ? setReviewing.cljs$core$IFn$_invoke$arity$1(false) : setReviewing.call(null,false));
})}),"Continue"));
});
taboo.view.card = (function taboo$view$card(p__55755){
var map__55756 = p__55755;
var map__55756__$1 = (((((!((map__55756 == null))))?(((((map__55756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55756):map__55756);
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55756__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55756__$1,new cljs.core.Keyword(null,"target","target",253001721));
var taboo__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55756__$1,new cljs.core.Keyword(null,"taboo","taboo",309107072));
return crinkle.component.react_createElement_STAR_(module$node_modules$$material_ui$core$Card$index.default,({"className": taboo.view.classname(classes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card","card",-1430355152),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target,"Ready?"))?new cljs.core.Keyword(null,"blue","blue",-622100620):((cljs.core.even_QMARK_(cljs.core.count(target)))?new cljs.core.Keyword(null,"purple","purple",-876021126):new cljs.core.Keyword(null,"green","green",-945526839)))], null))}),crinkle.component.react_createElement_STAR_(module$node_modules$$material_ui$core$CardHeader$index.default,({"className": new cljs.core.Keyword(null,"card-header","card-header",253587447).cljs$core$IFn$_invoke$arity$1(classes), "title": clojure.string.upper_case(target)})),crinkle.component.react_createElement_STAR_(module$node_modules$$material_ui$core$CardContent$index.default,({"className": new cljs.core.Keyword(null,"card-content","card-content",1213828862).cljs$core$IFn$_invoke$arity$1(classes)}),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__55754_SHARP_){
return crinkle.component.react_createElement_STAR_("div",({"key": p1__55754_SHARP_, "className": new cljs.core.Keyword(null,"taboo","taboo",309107072).cljs$core$IFn$_invoke$arity$1(classes)}),clojure.string.upper_case(p1__55754_SHARP_));
})),taboo__$1)));
});
taboo.view.start_card = (function taboo$view$start_card(p__55758){
var map__55759 = p__55758;
var map__55759__$1 = (((((!((map__55759 == null))))?(((((map__55759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55759):map__55759);
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55759__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
return crinkle.component.react_createElement_STAR_(module$node_modules$$material_ui$core$Card$index.default,({"className": taboo.view.classname(classes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blue","blue",-622100620)], null))}));
});
taboo.view.swipe_card = (function taboo$view$swipe_card(p__55761){
var map__55762 = p__55761;
var map__55762__$1 = (((((!((map__55762 == null))))?(((((map__55762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55762.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55762):map__55762);
var classname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55762__$1,new cljs.core.Keyword(null,"classname","classname",777390796));
var child_card = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55762__$1,new cljs.core.Keyword(null,"child-card","child-card",452339504));
var on_card_left_screen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55762__$1,new cljs.core.Keyword(null,"on-card-left-screen","on-card-left-screen",2094180989));
return crinkle.component.react_createElement_STAR_(module$taboo$react_tinder_card.TinderCard,({"className": classname, "preventSwipe": ["up","down"], "onSwipe": cljs.core.identity, "onCardLeftScreen": on_card_left_screen}),child_card);
});
taboo.view.deck = (function taboo$view$deck(p__55764){
var map__55765 = p__55764;
var map__55765__$1 = (((((!((map__55765 == null))))?(((((map__55765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55765):map__55765);
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55765__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var extra_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55765__$1,new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843));
var wordsets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55765__$1,new cljs.core.Keyword(null,"wordsets","wordsets",-2073196555));
var setT = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55765__$1,new cljs.core.Keyword(null,"setT","setT",-1721028573));
return crinkle.component.react_createElement_STAR_("div",({"className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"deck","deck",1145325705).cljs$core$IFn$_invoke$arity$1(classes))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_classes)].join('')}),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__55767){
var vec__55768 = p__55767;
var seq__55769 = cljs.core.seq(vec__55768);
var first__55770 = cljs.core.first(seq__55769);
var seq__55769__$1 = cljs.core.next(seq__55769);
var target = first__55770;
var taboo__$1 = seq__55769__$1;
return crinkle.component.create_element_raw_props(taboo.view.swipe_card,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"classname","classname",777390796),taboo.view.classname(classes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tinder-card","tinder-card",-141233118)], null)),new cljs.core.Keyword(null,"on-card-left-screen","on-card-left-screen",2094180989),(function (){
return (setT.cljs$core$IFn$_invoke$arity$1 ? setT.cljs$core$IFn$_invoke$arity$1(cljs.core.inc) : setT.call(null,cljs.core.inc));
}),new cljs.core.Keyword(null,"child-card","child-card",452339504),crinkle.component.create_element_raw_props(taboo.view.card,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"classes","classes",2037804510),classes,new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"taboo","taboo",309107072),taboo__$1], null),null,null)], null),target,null);
})),wordsets));
});
taboo.view.clock = (function taboo$view$clock(p__55771){
var map__55772 = p__55771;
var map__55772__$1 = (((((!((map__55772 == null))))?(((((map__55772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55772):map__55772);
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55772__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var extra_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55772__$1,new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843));
var timer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55772__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));
var minutes = ((timer / (60)) | (0));
var seconds = cljs.core.mod(timer,(60));
return crinkle.component.react_createElement_STAR_("div",({"className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"clock","clock",-894301127).cljs$core$IFn$_invoke$arity$1(classes))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_classes)].join('')}),crinkle.component.react_createElement_STAR_("span",({"className": new cljs.core.Keyword(null,"clock-span","clock-span",-1301409579).cljs$core$IFn$_invoke$arity$1(classes)}),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(minutes),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.string.format("%02d",seconds))].join('')));
});
taboo.view.game = (function taboo$view$game(p__55774){
var map__55775 = p__55774;
var map__55775__$1 = (((((!((map__55775 == null))))?(((((map__55775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55775.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55775):map__55775);
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55775__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var game_seconds = (function (){var custom_game_length = parseInt((new URLSearchParams(window.location.search)).get("t"));
if(cljs.core.truth_(isNaN(custom_game_length))){
return (61);
} else {
return custom_game_length;
}
})();
var excess = (5);
var vec__55777 = module$node_modules$react$index.useState((0));
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55777,(0),null);
var setT = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55777,(1),null);
var vec__55780 = (function (){var G__55792 = cljs.core.reverse(cljs.core.take.cljs$core$IFn$_invoke$arity$2(excess,taboo.words.words));
return module$node_modules$react$index.useState(G__55792);
})();
var wordsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55780,(0),null);
var setWordsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55780,(1),null);
var vec__55783 = module$node_modules$react$index.useState((0));
var timer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55783,(0),null);
var setTimer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55783,(1),null);
var vec__55786 = (function (){var G__55793 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
return module$node_modules$react$index.useState(G__55793);
})();
var turn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55786,(0),null);
var setTurn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55786,(1),null);
var vec__55789 = module$node_modules$react$index.useState(false);
var reviewing_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55789,(0),null);
var setReviewing = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55789,(1),null);
var G__55794_55818 = (function (){
var G__55796_55820 = cljs.core.reverse(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(taboo.words.words,t,(t + excess)));
(setWordsets.cljs$core$IFn$_invoke$arity$1 ? setWordsets.cljs$core$IFn$_invoke$arity$1(G__55796_55820) : setWordsets.call(null,G__55796_55820));

return cljs.core.constantly(null);
});
var G__55795_55819 = [t];
module$node_modules$react$index.useEffect(G__55794_55818,G__55795_55819);

var G__55797_55821 = (function (){
if((timer === (0))){
(setWordsets.cljs$core$IFn$_invoke$arity$1 ? setWordsets.cljs$core$IFn$_invoke$arity$1(cljs.core.drop_last) : setWordsets.call(null,cljs.core.drop_last));

(setT.cljs$core$IFn$_invoke$arity$1 ? setT.cljs$core$IFn$_invoke$arity$1(cljs.core.inc) : setT.call(null,cljs.core.inc));

var G__55799_55823 = (function (p__55800){
var vec__55801 = p__55800;
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55801,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55801,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [end,t], null);
});
(setTurn.cljs$core$IFn$_invoke$arity$1 ? setTurn.cljs$core$IFn$_invoke$arity$1(G__55799_55823) : setTurn.call(null,G__55799_55823));

(setReviewing.cljs$core$IFn$_invoke$arity$1 ? setReviewing.cljs$core$IFn$_invoke$arity$1(true) : setReviewing.call(null,true));
} else {
}

return cljs.core.constantly(null);
});
var G__55798_55822 = [timer];
module$node_modules$react$index.useEffect(G__55797_55821,G__55798_55822);

var G__55804_55824 = (function (){
var interval = setInterval((function (){
var G__55806 = (function (x){
if((x > (0))){
return (x - (1));
} else {
return (0);
}
});
return (setTimer.cljs$core$IFn$_invoke$arity$1 ? setTimer.cljs$core$IFn$_invoke$arity$1(G__55806) : setTimer.call(null,G__55806));
}),(1000));
return (function (){
return clearInterval(interval);
});
});
var G__55805_55825 = [];
module$node_modules$react$index.useEffect(G__55804_55824,G__55805_55825);

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
taboo.view.score = (function taboo$view$score(p__55807){
var map__55808 = p__55807;
var map__55808__$1 = (((((!((map__55808 == null))))?(((((map__55808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55808):map__55808);
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55808__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var vec__55810 = module$node_modules$react$index.useState((0));
var score = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55810,(0),null);
var setScore = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55810,(1),null);
return crinkle.component.react_createElement_STAR_("span",({"className": new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(classes)}),crinkle.component.react_createElement_STAR_(module$node_modules$$material_ui$core$IconButton$index.default,({"onClick": (function (){
return (setScore.cljs$core$IFn$_invoke$arity$1 ? setScore.cljs$core$IFn$_invoke$arity$1(cljs.core.dec) : setScore.call(null,cljs.core.dec));
})}),crinkle.component.react_createElement_STAR_(module$node_modules$$material_ui$icons$Remove.default,null)),crinkle.component.react_createElement_STAR_("span",({"className": new cljs.core.Keyword(null,"score-span","score-span",-201889280).cljs$core$IFn$_invoke$arity$1(classes)}),score),crinkle.component.react_createElement_STAR_(module$node_modules$$material_ui$core$IconButton$index.default,({"onClick": (function (){
return (setScore.cljs$core$IFn$_invoke$arity$1 ? setScore.cljs$core$IFn$_invoke$arity$1(cljs.core.inc) : setScore.call(null,cljs.core.inc));
})}),crinkle.component.react_createElement_STAR_(module$node_modules$$material_ui$icons$Add.default,null)));
});
taboo.view.scores = (function taboo$view$scores(p__55813){
var map__55814 = p__55813;
var map__55814__$1 = (((((!((map__55814 == null))))?(((((map__55814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55814):map__55814);
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55814__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
return crinkle.component.react_createElement_STAR_("div",({"className": new cljs.core.Keyword(null,"scores","scores",-1267421800).cljs$core$IFn$_invoke$arity$1(classes)}),crinkle.component.create_element_raw_props(taboo.view.score,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),classes], null),null,null),crinkle.component.create_element_raw_props(taboo.view.score,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),classes], null),null,null));
});
taboo.view.app = (function taboo$view$app(){
var classes = cljs_bean.core.__GT_clj((taboo.view.styles.cljs$core$IFn$_invoke$arity$0 ? taboo.view.styles.cljs$core$IFn$_invoke$arity$0() : taboo.view.styles.call(null)));
return crinkle.component.react_createElement_STAR_("div",({"className": new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(classes)}),crinkle.component.create_element_raw_props(taboo.view.game,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),classes], null),null,null),crinkle.component.create_element_raw_props(taboo.view.scores,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),classes], null),null,null));
});

//# sourceMappingURL=taboo.view.js.map
