goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__47990 = coll;
var G__47991 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__47990,G__47991) : shadow.dom.lazy_native_coll_seq.call(null,G__47990,G__47991));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4185__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__48008 = arguments.length;
switch (G__48008) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__48015 = arguments.length;
switch (G__48015) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__48020 = arguments.length;
switch (G__48020) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__48024 = arguments.length;
switch (G__48024) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__48036 = arguments.length;
switch (G__48036) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__48041 = document;
var G__48042 = shadow.dom.dom_node(el);
return goog.dom.contains(G__48041,G__48042);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__48045 = shadow.dom.dom_node(parent);
var G__48046 = shadow.dom.dom_node(el);
return goog.dom.contains(G__48045,G__48046);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__48049 = shadow.dom.dom_node(el);
var G__48050 = cls;
return goog.dom.classlist.add(G__48049,G__48050);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__48052 = shadow.dom.dom_node(el);
var G__48053 = cls;
return goog.dom.classlist.remove(G__48052,G__48053);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__48055 = arguments.length;
switch (G__48055) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__48058 = shadow.dom.dom_node(el);
var G__48059 = cls;
return goog.dom.classlist.toggle(G__48058,G__48059);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e48062){if((e48062 instanceof Object)){
var e = e48062;
return console.log("didnt support attachEvent",el,e);
} else {
throw e48062;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__48068 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__48069 = null;
var count__48070 = (0);
var i__48071 = (0);
while(true){
if((i__48071 < count__48070)){
var el = chunk__48069.cljs$core$IIndexed$_nth$arity$2(null,i__48071);
var handler_48839__$1 = ((function (seq__48068,chunk__48069,count__48070,i__48071,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__48068,chunk__48069,count__48070,i__48071,el))
;
var G__48081_48840 = el;
var G__48082_48841 = cljs.core.name(ev);
var G__48083_48842 = handler_48839__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__48081_48840,G__48082_48841,G__48083_48842) : shadow.dom.dom_listen.call(null,G__48081_48840,G__48082_48841,G__48083_48842));


var G__48846 = seq__48068;
var G__48847 = chunk__48069;
var G__48848 = count__48070;
var G__48849 = (i__48071 + (1));
seq__48068 = G__48846;
chunk__48069 = G__48847;
count__48070 = G__48848;
i__48071 = G__48849;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48068);
if(temp__5735__auto__){
var seq__48068__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48068__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__48068__$1);
var G__48855 = cljs.core.chunk_rest(seq__48068__$1);
var G__48856 = c__4609__auto__;
var G__48857 = cljs.core.count(c__4609__auto__);
var G__48858 = (0);
seq__48068 = G__48855;
chunk__48069 = G__48856;
count__48070 = G__48857;
i__48071 = G__48858;
continue;
} else {
var el = cljs.core.first(seq__48068__$1);
var handler_48862__$1 = ((function (seq__48068,chunk__48069,count__48070,i__48071,el,seq__48068__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__48068,chunk__48069,count__48070,i__48071,el,seq__48068__$1,temp__5735__auto__))
;
var G__48086_48863 = el;
var G__48087_48864 = cljs.core.name(ev);
var G__48088_48865 = handler_48862__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__48086_48863,G__48087_48864,G__48088_48865) : shadow.dom.dom_listen.call(null,G__48086_48863,G__48087_48864,G__48088_48865));


var G__48866 = cljs.core.next(seq__48068__$1);
var G__48867 = null;
var G__48868 = (0);
var G__48869 = (0);
seq__48068 = G__48866;
chunk__48069 = G__48867;
count__48070 = G__48868;
i__48071 = G__48869;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__48093 = arguments.length;
switch (G__48093) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__48094 = shadow.dom.dom_node(el);
var G__48095 = cljs.core.name(ev);
var G__48096 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__48094,G__48095,G__48096) : shadow.dom.dom_listen.call(null,G__48094,G__48095,G__48096));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__48099 = shadow.dom.dom_node(el);
var G__48100 = cljs.core.name(ev);
var G__48101 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__48099,G__48100,G__48101) : shadow.dom.dom_listen_remove.call(null,G__48099,G__48100,G__48101));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__48102 = cljs.core.seq(events);
var chunk__48103 = null;
var count__48104 = (0);
var i__48105 = (0);
while(true){
if((i__48105 < count__48104)){
var vec__48114 = chunk__48103.cljs$core$IIndexed$_nth$arity$2(null,i__48105);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48114,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48114,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48892 = seq__48102;
var G__48893 = chunk__48103;
var G__48894 = count__48104;
var G__48895 = (i__48105 + (1));
seq__48102 = G__48892;
chunk__48103 = G__48893;
count__48104 = G__48894;
i__48105 = G__48895;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48102);
if(temp__5735__auto__){
var seq__48102__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48102__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__48102__$1);
var G__48898 = cljs.core.chunk_rest(seq__48102__$1);
var G__48899 = c__4609__auto__;
var G__48900 = cljs.core.count(c__4609__auto__);
var G__48901 = (0);
seq__48102 = G__48898;
chunk__48103 = G__48899;
count__48104 = G__48900;
i__48105 = G__48901;
continue;
} else {
var vec__48117 = cljs.core.first(seq__48102__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48117,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48117,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48903 = cljs.core.next(seq__48102__$1);
var G__48904 = null;
var G__48905 = (0);
var G__48906 = (0);
seq__48102 = G__48903;
chunk__48103 = G__48904;
count__48104 = G__48905;
i__48105 = G__48906;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__48122 = cljs.core.seq(styles);
var chunk__48123 = null;
var count__48124 = (0);
var i__48125 = (0);
while(true){
if((i__48125 < count__48124)){
var vec__48142 = chunk__48123.cljs$core$IIndexed$_nth$arity$2(null,i__48125);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48142,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48142,(1),null);
var G__48145_48910 = dom;
var G__48146_48911 = cljs.core.name(k);
var G__48147_48912 = (((v == null))?"":v);
goog.style.setStyle(G__48145_48910,G__48146_48911,G__48147_48912);


var G__48914 = seq__48122;
var G__48915 = chunk__48123;
var G__48916 = count__48124;
var G__48917 = (i__48125 + (1));
seq__48122 = G__48914;
chunk__48123 = G__48915;
count__48124 = G__48916;
i__48125 = G__48917;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48122);
if(temp__5735__auto__){
var seq__48122__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48122__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__48122__$1);
var G__48919 = cljs.core.chunk_rest(seq__48122__$1);
var G__48920 = c__4609__auto__;
var G__48921 = cljs.core.count(c__4609__auto__);
var G__48922 = (0);
seq__48122 = G__48919;
chunk__48123 = G__48920;
count__48124 = G__48921;
i__48125 = G__48922;
continue;
} else {
var vec__48150 = cljs.core.first(seq__48122__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48150,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48150,(1),null);
var G__48154_48923 = dom;
var G__48155_48924 = cljs.core.name(k);
var G__48156_48925 = (((v == null))?"":v);
goog.style.setStyle(G__48154_48923,G__48155_48924,G__48156_48925);


var G__48928 = cljs.core.next(seq__48122__$1);
var G__48929 = null;
var G__48930 = (0);
var G__48931 = (0);
seq__48122 = G__48928;
chunk__48123 = G__48929;
count__48124 = G__48930;
i__48125 = G__48931;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__48158_48933 = key;
var G__48158_48934__$1 = (((G__48158_48933 instanceof cljs.core.Keyword))?G__48158_48933.fqn:null);
switch (G__48158_48934__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_48940 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_48940,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_48940,"aria-");
}
})())){
el.setAttribute(ks_48940,value);
} else {
(el[ks_48940] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__48174 = shadow.dom.dom_node(el);
var G__48175 = cls;
return goog.dom.classlist.contains(G__48174,G__48175);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__48184){
var map__48186 = p__48184;
var map__48186__$1 = (((((!((map__48186 == null))))?(((((map__48186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48186):map__48186);
var props = map__48186__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48186__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__48190 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48190,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48190,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48190,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__48193 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__48193,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__48193;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__48198 = arguments.length;
switch (G__48198) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__48205){
var vec__48206 = p__48205;
var seq__48207 = cljs.core.seq(vec__48206);
var first__48208 = cljs.core.first(seq__48207);
var seq__48207__$1 = cljs.core.next(seq__48207);
var nn = first__48208;
var first__48208__$1 = cljs.core.first(seq__48207__$1);
var seq__48207__$2 = cljs.core.next(seq__48207__$1);
var np = first__48208__$1;
var nc = seq__48207__$2;
var node = vec__48206;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48213 = nn;
var G__48214 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__48213,G__48214) : create_fn.call(null,G__48213,G__48214));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48218 = nn;
var G__48219 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__48218,G__48219) : create_fn.call(null,G__48218,G__48219));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__48224 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48224,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48224,(1),null);
var seq__48227_48980 = cljs.core.seq(node_children);
var chunk__48228_48981 = null;
var count__48229_48982 = (0);
var i__48230_48983 = (0);
while(true){
if((i__48230_48983 < count__48229_48982)){
var child_struct_48985 = chunk__48228_48981.cljs$core$IIndexed$_nth$arity$2(null,i__48230_48983);
var children_48986 = shadow.dom.dom_node(child_struct_48985);
if(cljs.core.seq_QMARK_(children_48986)){
var seq__48269_48987 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48986));
var chunk__48271_48988 = null;
var count__48272_48989 = (0);
var i__48273_48990 = (0);
while(true){
if((i__48273_48990 < count__48272_48989)){
var child_48994 = chunk__48271_48988.cljs$core$IIndexed$_nth$arity$2(null,i__48273_48990);
if(cljs.core.truth_(child_48994)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48994);


var G__48995 = seq__48269_48987;
var G__48996 = chunk__48271_48988;
var G__48997 = count__48272_48989;
var G__48998 = (i__48273_48990 + (1));
seq__48269_48987 = G__48995;
chunk__48271_48988 = G__48996;
count__48272_48989 = G__48997;
i__48273_48990 = G__48998;
continue;
} else {
var G__49000 = seq__48269_48987;
var G__49001 = chunk__48271_48988;
var G__49002 = count__48272_48989;
var G__49003 = (i__48273_48990 + (1));
seq__48269_48987 = G__49000;
chunk__48271_48988 = G__49001;
count__48272_48989 = G__49002;
i__48273_48990 = G__49003;
continue;
}
} else {
var temp__5735__auto___49005 = cljs.core.seq(seq__48269_48987);
if(temp__5735__auto___49005){
var seq__48269_49006__$1 = temp__5735__auto___49005;
if(cljs.core.chunked_seq_QMARK_(seq__48269_49006__$1)){
var c__4609__auto___49007 = cljs.core.chunk_first(seq__48269_49006__$1);
var G__49009 = cljs.core.chunk_rest(seq__48269_49006__$1);
var G__49010 = c__4609__auto___49007;
var G__49011 = cljs.core.count(c__4609__auto___49007);
var G__49012 = (0);
seq__48269_48987 = G__49009;
chunk__48271_48988 = G__49010;
count__48272_48989 = G__49011;
i__48273_48990 = G__49012;
continue;
} else {
var child_49014 = cljs.core.first(seq__48269_49006__$1);
if(cljs.core.truth_(child_49014)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49014);


var G__49016 = cljs.core.next(seq__48269_49006__$1);
var G__49017 = null;
var G__49018 = (0);
var G__49019 = (0);
seq__48269_48987 = G__49016;
chunk__48271_48988 = G__49017;
count__48272_48989 = G__49018;
i__48273_48990 = G__49019;
continue;
} else {
var G__49024 = cljs.core.next(seq__48269_49006__$1);
var G__49025 = null;
var G__49026 = (0);
var G__49027 = (0);
seq__48269_48987 = G__49024;
chunk__48271_48988 = G__49025;
count__48272_48989 = G__49026;
i__48273_48990 = G__49027;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48986);
}


var G__49028 = seq__48227_48980;
var G__49029 = chunk__48228_48981;
var G__49030 = count__48229_48982;
var G__49031 = (i__48230_48983 + (1));
seq__48227_48980 = G__49028;
chunk__48228_48981 = G__49029;
count__48229_48982 = G__49030;
i__48230_48983 = G__49031;
continue;
} else {
var temp__5735__auto___49033 = cljs.core.seq(seq__48227_48980);
if(temp__5735__auto___49033){
var seq__48227_49034__$1 = temp__5735__auto___49033;
if(cljs.core.chunked_seq_QMARK_(seq__48227_49034__$1)){
var c__4609__auto___49035 = cljs.core.chunk_first(seq__48227_49034__$1);
var G__49036 = cljs.core.chunk_rest(seq__48227_49034__$1);
var G__49037 = c__4609__auto___49035;
var G__49038 = cljs.core.count(c__4609__auto___49035);
var G__49039 = (0);
seq__48227_48980 = G__49036;
chunk__48228_48981 = G__49037;
count__48229_48982 = G__49038;
i__48230_48983 = G__49039;
continue;
} else {
var child_struct_49040 = cljs.core.first(seq__48227_49034__$1);
var children_49041 = shadow.dom.dom_node(child_struct_49040);
if(cljs.core.seq_QMARK_(children_49041)){
var seq__48280_49042 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_49041));
var chunk__48282_49043 = null;
var count__48283_49044 = (0);
var i__48284_49045 = (0);
while(true){
if((i__48284_49045 < count__48283_49044)){
var child_49047 = chunk__48282_49043.cljs$core$IIndexed$_nth$arity$2(null,i__48284_49045);
if(cljs.core.truth_(child_49047)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49047);


var G__49049 = seq__48280_49042;
var G__49050 = chunk__48282_49043;
var G__49051 = count__48283_49044;
var G__49052 = (i__48284_49045 + (1));
seq__48280_49042 = G__49049;
chunk__48282_49043 = G__49050;
count__48283_49044 = G__49051;
i__48284_49045 = G__49052;
continue;
} else {
var G__49053 = seq__48280_49042;
var G__49054 = chunk__48282_49043;
var G__49055 = count__48283_49044;
var G__49056 = (i__48284_49045 + (1));
seq__48280_49042 = G__49053;
chunk__48282_49043 = G__49054;
count__48283_49044 = G__49055;
i__48284_49045 = G__49056;
continue;
}
} else {
var temp__5735__auto___49057__$1 = cljs.core.seq(seq__48280_49042);
if(temp__5735__auto___49057__$1){
var seq__48280_49058__$1 = temp__5735__auto___49057__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48280_49058__$1)){
var c__4609__auto___49059 = cljs.core.chunk_first(seq__48280_49058__$1);
var G__49061 = cljs.core.chunk_rest(seq__48280_49058__$1);
var G__49062 = c__4609__auto___49059;
var G__49063 = cljs.core.count(c__4609__auto___49059);
var G__49064 = (0);
seq__48280_49042 = G__49061;
chunk__48282_49043 = G__49062;
count__48283_49044 = G__49063;
i__48284_49045 = G__49064;
continue;
} else {
var child_49065 = cljs.core.first(seq__48280_49058__$1);
if(cljs.core.truth_(child_49065)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49065);


var G__49066 = cljs.core.next(seq__48280_49058__$1);
var G__49067 = null;
var G__49068 = (0);
var G__49069 = (0);
seq__48280_49042 = G__49066;
chunk__48282_49043 = G__49067;
count__48283_49044 = G__49068;
i__48284_49045 = G__49069;
continue;
} else {
var G__49070 = cljs.core.next(seq__48280_49058__$1);
var G__49071 = null;
var G__49072 = (0);
var G__49073 = (0);
seq__48280_49042 = G__49070;
chunk__48282_49043 = G__49071;
count__48283_49044 = G__49072;
i__48284_49045 = G__49073;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_49041);
}


var G__49075 = cljs.core.next(seq__48227_49034__$1);
var G__49076 = null;
var G__49077 = (0);
var G__49078 = (0);
seq__48227_48980 = G__49075;
chunk__48228_48981 = G__49076;
count__48229_48982 = G__49077;
i__48230_48983 = G__49078;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__48301 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__48301);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__48304 = cljs.core.seq(node);
var chunk__48305 = null;
var count__48306 = (0);
var i__48307 = (0);
while(true){
if((i__48307 < count__48306)){
var n = chunk__48305.cljs$core$IIndexed$_nth$arity$2(null,i__48307);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__49089 = seq__48304;
var G__49090 = chunk__48305;
var G__49091 = count__48306;
var G__49092 = (i__48307 + (1));
seq__48304 = G__49089;
chunk__48305 = G__49090;
count__48306 = G__49091;
i__48307 = G__49092;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48304);
if(temp__5735__auto__){
var seq__48304__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48304__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__48304__$1);
var G__49095 = cljs.core.chunk_rest(seq__48304__$1);
var G__49096 = c__4609__auto__;
var G__49097 = cljs.core.count(c__4609__auto__);
var G__49098 = (0);
seq__48304 = G__49095;
chunk__48305 = G__49096;
count__48306 = G__49097;
i__48307 = G__49098;
continue;
} else {
var n = cljs.core.first(seq__48304__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__49102 = cljs.core.next(seq__48304__$1);
var G__49103 = null;
var G__49104 = (0);
var G__49105 = (0);
seq__48304 = G__49102;
chunk__48305 = G__49103;
count__48306 = G__49104;
i__48307 = G__49105;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__48316 = shadow.dom.dom_node(new$);
var G__48317 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__48316,G__48317);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__48324 = arguments.length;
switch (G__48324) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__48331 = arguments.length;
switch (G__48331) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__48341 = arguments.length;
switch (G__48341) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4185__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4795__auto__ = [];
var len__4789__auto___49119 = arguments.length;
var i__4790__auto___49120 = (0);
while(true){
if((i__4790__auto___49120 < len__4789__auto___49119)){
args__4795__auto__.push((arguments[i__4790__auto___49120]));

var G__49121 = (i__4790__auto___49120 + (1));
i__4790__auto___49120 = G__49121;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__48347_49126 = cljs.core.seq(nodes);
var chunk__48348_49127 = null;
var count__48349_49128 = (0);
var i__48350_49129 = (0);
while(true){
if((i__48350_49129 < count__48349_49128)){
var node_49130 = chunk__48348_49127.cljs$core$IIndexed$_nth$arity$2(null,i__48350_49129);
fragment.appendChild(shadow.dom._to_dom(node_49130));


var G__49131 = seq__48347_49126;
var G__49132 = chunk__48348_49127;
var G__49133 = count__48349_49128;
var G__49134 = (i__48350_49129 + (1));
seq__48347_49126 = G__49131;
chunk__48348_49127 = G__49132;
count__48349_49128 = G__49133;
i__48350_49129 = G__49134;
continue;
} else {
var temp__5735__auto___49135 = cljs.core.seq(seq__48347_49126);
if(temp__5735__auto___49135){
var seq__48347_49136__$1 = temp__5735__auto___49135;
if(cljs.core.chunked_seq_QMARK_(seq__48347_49136__$1)){
var c__4609__auto___49137 = cljs.core.chunk_first(seq__48347_49136__$1);
var G__49138 = cljs.core.chunk_rest(seq__48347_49136__$1);
var G__49139 = c__4609__auto___49137;
var G__49140 = cljs.core.count(c__4609__auto___49137);
var G__49141 = (0);
seq__48347_49126 = G__49138;
chunk__48348_49127 = G__49139;
count__48349_49128 = G__49140;
i__48350_49129 = G__49141;
continue;
} else {
var node_49142 = cljs.core.first(seq__48347_49136__$1);
fragment.appendChild(shadow.dom._to_dom(node_49142));


var G__49143 = cljs.core.next(seq__48347_49136__$1);
var G__49144 = null;
var G__49145 = (0);
var G__49146 = (0);
seq__48347_49126 = G__49143;
chunk__48348_49127 = G__49144;
count__48349_49128 = G__49145;
i__48350_49129 = G__49146;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq48342){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48342));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__48359_49147 = cljs.core.seq(scripts);
var chunk__48360_49148 = null;
var count__48361_49149 = (0);
var i__48362_49150 = (0);
while(true){
if((i__48362_49150 < count__48361_49149)){
var vec__48371_49151 = chunk__48360_49148.cljs$core$IIndexed$_nth$arity$2(null,i__48362_49150);
var script_tag_49152 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48371_49151,(0),null);
var script_body_49153 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48371_49151,(1),null);
eval(script_body_49153);


var G__49154 = seq__48359_49147;
var G__49155 = chunk__48360_49148;
var G__49156 = count__48361_49149;
var G__49157 = (i__48362_49150 + (1));
seq__48359_49147 = G__49154;
chunk__48360_49148 = G__49155;
count__48361_49149 = G__49156;
i__48362_49150 = G__49157;
continue;
} else {
var temp__5735__auto___49158 = cljs.core.seq(seq__48359_49147);
if(temp__5735__auto___49158){
var seq__48359_49159__$1 = temp__5735__auto___49158;
if(cljs.core.chunked_seq_QMARK_(seq__48359_49159__$1)){
var c__4609__auto___49160 = cljs.core.chunk_first(seq__48359_49159__$1);
var G__49161 = cljs.core.chunk_rest(seq__48359_49159__$1);
var G__49162 = c__4609__auto___49160;
var G__49163 = cljs.core.count(c__4609__auto___49160);
var G__49164 = (0);
seq__48359_49147 = G__49161;
chunk__48360_49148 = G__49162;
count__48361_49149 = G__49163;
i__48362_49150 = G__49164;
continue;
} else {
var vec__48376_49165 = cljs.core.first(seq__48359_49159__$1);
var script_tag_49166 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48376_49165,(0),null);
var script_body_49167 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48376_49165,(1),null);
eval(script_body_49167);


var G__49168 = cljs.core.next(seq__48359_49159__$1);
var G__49169 = null;
var G__49170 = (0);
var G__49171 = (0);
seq__48359_49147 = G__49168;
chunk__48360_49148 = G__49169;
count__48361_49149 = G__49170;
i__48362_49150 = G__49171;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__48381){
var vec__48382 = p__48381;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48382,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48382,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__48390 = shadow.dom.dom_node(el);
var G__48392 = cls;
return goog.dom.getAncestorByClass(G__48390,G__48392);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__48395 = arguments.length;
switch (G__48395) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__48398 = shadow.dom.dom_node(el);
var G__48399 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__48398,G__48399);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__48400 = shadow.dom.dom_node(el);
var G__48401 = cljs.core.name(tag);
var G__48402 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__48400,G__48401,G__48402);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__48404 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__48404);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__48406 = shadow.dom.dom_node(dom);
var G__48407 = value;
return goog.dom.forms.setValue(G__48406,G__48407);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__48410 = cljs.core.seq(style_keys);
var chunk__48411 = null;
var count__48412 = (0);
var i__48413 = (0);
while(true){
if((i__48413 < count__48412)){
var it = chunk__48411.cljs$core$IIndexed$_nth$arity$2(null,i__48413);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__49181 = seq__48410;
var G__49182 = chunk__48411;
var G__49183 = count__48412;
var G__49184 = (i__48413 + (1));
seq__48410 = G__49181;
chunk__48411 = G__49182;
count__48412 = G__49183;
i__48413 = G__49184;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48410);
if(temp__5735__auto__){
var seq__48410__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48410__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__48410__$1);
var G__49188 = cljs.core.chunk_rest(seq__48410__$1);
var G__49189 = c__4609__auto__;
var G__49190 = cljs.core.count(c__4609__auto__);
var G__49191 = (0);
seq__48410 = G__49188;
chunk__48411 = G__49189;
count__48412 = G__49190;
i__48413 = G__49191;
continue;
} else {
var it = cljs.core.first(seq__48410__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__49192 = cljs.core.next(seq__48410__$1);
var G__49193 = null;
var G__49194 = (0);
var G__49195 = (0);
seq__48410 = G__49192;
chunk__48411 = G__49193;
count__48412 = G__49194;
i__48413 = G__49195;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k48420,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__48425 = k48420;
var G__48425__$1 = (((G__48425 instanceof cljs.core.Keyword))?G__48425.fqn:null);
switch (G__48425__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48420,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__48427){
var vec__48428 = p__48427;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48428,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48428,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48419){
var self__ = this;
var G__48419__$1 = this;
return (new cljs.core.RecordIter((0),G__48419__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__48446 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__48446(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48421,other48422){
var self__ = this;
var this48421__$1 = this;
return (((!((other48422 == null)))) && ((this48421__$1.constructor === other48422.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48421__$1.x,other48422.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48421__$1.y,other48422.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48421__$1.__extmap,other48422.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__48419){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__48458 = cljs.core.keyword_identical_QMARK_;
var expr__48459 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__48462 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__48463 = expr__48459;
return (pred__48458.cljs$core$IFn$_invoke$arity$2 ? pred__48458.cljs$core$IFn$_invoke$arity$2(G__48462,G__48463) : pred__48458.call(null,G__48462,G__48463));
})())){
return (new shadow.dom.Coordinate(G__48419,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48465 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__48466 = expr__48459;
return (pred__48458.cljs$core$IFn$_invoke$arity$2 ? pred__48458.cljs$core$IFn$_invoke$arity$2(G__48465,G__48466) : pred__48458.call(null,G__48465,G__48466));
})())){
return (new shadow.dom.Coordinate(self__.x,G__48419,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__48419),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__48419){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__48419,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__48423){
var extmap__4478__auto__ = (function (){var G__48481 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48423,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__48423)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48481);
} else {
return G__48481;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__48423),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__48423),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__48482 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__48482);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__48483 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__48483);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__48486 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__48486);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k48488,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__48503 = k48488;
var G__48503__$1 = (((G__48503 instanceof cljs.core.Keyword))?G__48503.fqn:null);
switch (G__48503__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48488,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__48505){
var vec__48506 = p__48505;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48506,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48506,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Size{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48487){
var self__ = this;
var G__48487__$1 = this;
return (new cljs.core.RecordIter((0),G__48487__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__48509 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__48509(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48489,other48490){
var self__ = this;
var this48489__$1 = this;
return (((!((other48490 == null)))) && ((this48489__$1.constructor === other48490.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48489__$1.w,other48490.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48489__$1.h,other48490.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48489__$1.__extmap,other48490.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__48487){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__48518 = cljs.core.keyword_identical_QMARK_;
var expr__48519 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__48522 = new cljs.core.Keyword(null,"w","w",354169001);
var G__48523 = expr__48519;
return (pred__48518.cljs$core$IFn$_invoke$arity$2 ? pred__48518.cljs$core$IFn$_invoke$arity$2(G__48522,G__48523) : pred__48518.call(null,G__48522,G__48523));
})())){
return (new shadow.dom.Size(G__48487,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48525 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__48526 = expr__48519;
return (pred__48518.cljs$core$IFn$_invoke$arity$2 ? pred__48518.cljs$core$IFn$_invoke$arity$2(G__48525,G__48526) : pred__48518.call(null,G__48525,G__48526));
})())){
return (new shadow.dom.Size(self__.w,G__48487,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__48487),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__48487){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__48487,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__48491){
var extmap__4478__auto__ = (function (){var G__48541 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48491,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__48491)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48541);
} else {
return G__48541;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__48491),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__48491),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__48552 = shadow.dom.dom_node(el);
return goog.style.getSize(G__48552);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4663__auto__ = opts;
var l__4664__auto__ = a__4663__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4664__auto__)){
var G__49232 = (i + (1));
var G__49233 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__49232;
ret = G__49233;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__48584){
var vec__48585 = p__48584;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48585,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48585,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__48591 = arguments.length;
switch (G__48591) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__48600_49240 = new_node;
var G__48601_49241 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__48600_49240,G__48601_49241);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__48604_49242 = new_node;
var G__48605_49243 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__48604_49242,G__48605_49243);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__49244 = ps;
var G__49245 = (i + (1));
el__$1 = G__49244;
i = G__49245;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__48609 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__48609);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__48620 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__48620);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__48623 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__48623);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__48626 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48626,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48626,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48626,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__48631_49249 = cljs.core.seq(props);
var chunk__48632_49250 = null;
var count__48633_49251 = (0);
var i__48634_49252 = (0);
while(true){
if((i__48634_49252 < count__48633_49251)){
var vec__48647_49256 = chunk__48632_49250.cljs$core$IIndexed$_nth$arity$2(null,i__48634_49252);
var k_49257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48647_49256,(0),null);
var v_49258 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48647_49256,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_49257);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_49257),v_49258);


var G__49263 = seq__48631_49249;
var G__49264 = chunk__48632_49250;
var G__49265 = count__48633_49251;
var G__49266 = (i__48634_49252 + (1));
seq__48631_49249 = G__49263;
chunk__48632_49250 = G__49264;
count__48633_49251 = G__49265;
i__48634_49252 = G__49266;
continue;
} else {
var temp__5735__auto___49267 = cljs.core.seq(seq__48631_49249);
if(temp__5735__auto___49267){
var seq__48631_49268__$1 = temp__5735__auto___49267;
if(cljs.core.chunked_seq_QMARK_(seq__48631_49268__$1)){
var c__4609__auto___49269 = cljs.core.chunk_first(seq__48631_49268__$1);
var G__49270 = cljs.core.chunk_rest(seq__48631_49268__$1);
var G__49271 = c__4609__auto___49269;
var G__49272 = cljs.core.count(c__4609__auto___49269);
var G__49273 = (0);
seq__48631_49249 = G__49270;
chunk__48632_49250 = G__49271;
count__48633_49251 = G__49272;
i__48634_49252 = G__49273;
continue;
} else {
var vec__48654_49274 = cljs.core.first(seq__48631_49268__$1);
var k_49275 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48654_49274,(0),null);
var v_49276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48654_49274,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_49275);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_49275),v_49276);


var G__49277 = cljs.core.next(seq__48631_49268__$1);
var G__49278 = null;
var G__49279 = (0);
var G__49280 = (0);
seq__48631_49249 = G__49277;
chunk__48632_49250 = G__49278;
count__48633_49251 = G__49279;
i__48634_49252 = G__49280;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__48662 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48662,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48662,(1),null);
var seq__48665_49281 = cljs.core.seq(node_children);
var chunk__48667_49282 = null;
var count__48668_49283 = (0);
var i__48669_49284 = (0);
while(true){
if((i__48669_49284 < count__48668_49283)){
var child_struct_49285 = chunk__48667_49282.cljs$core$IIndexed$_nth$arity$2(null,i__48669_49284);
if((!((child_struct_49285 == null)))){
if(typeof child_struct_49285 === 'string'){
var text_49287 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_49287),child_struct_49285].join(''));
} else {
var children_49288 = shadow.dom.svg_node(child_struct_49285);
if(cljs.core.seq_QMARK_(children_49288)){
var seq__48710_49289 = cljs.core.seq(children_49288);
var chunk__48712_49290 = null;
var count__48713_49291 = (0);
var i__48714_49292 = (0);
while(true){
if((i__48714_49292 < count__48713_49291)){
var child_49293 = chunk__48712_49290.cljs$core$IIndexed$_nth$arity$2(null,i__48714_49292);
if(cljs.core.truth_(child_49293)){
node.appendChild(child_49293);


var G__49294 = seq__48710_49289;
var G__49295 = chunk__48712_49290;
var G__49296 = count__48713_49291;
var G__49297 = (i__48714_49292 + (1));
seq__48710_49289 = G__49294;
chunk__48712_49290 = G__49295;
count__48713_49291 = G__49296;
i__48714_49292 = G__49297;
continue;
} else {
var G__49298 = seq__48710_49289;
var G__49299 = chunk__48712_49290;
var G__49300 = count__48713_49291;
var G__49301 = (i__48714_49292 + (1));
seq__48710_49289 = G__49298;
chunk__48712_49290 = G__49299;
count__48713_49291 = G__49300;
i__48714_49292 = G__49301;
continue;
}
} else {
var temp__5735__auto___49303 = cljs.core.seq(seq__48710_49289);
if(temp__5735__auto___49303){
var seq__48710_49304__$1 = temp__5735__auto___49303;
if(cljs.core.chunked_seq_QMARK_(seq__48710_49304__$1)){
var c__4609__auto___49305 = cljs.core.chunk_first(seq__48710_49304__$1);
var G__49306 = cljs.core.chunk_rest(seq__48710_49304__$1);
var G__49307 = c__4609__auto___49305;
var G__49308 = cljs.core.count(c__4609__auto___49305);
var G__49309 = (0);
seq__48710_49289 = G__49306;
chunk__48712_49290 = G__49307;
count__48713_49291 = G__49308;
i__48714_49292 = G__49309;
continue;
} else {
var child_49310 = cljs.core.first(seq__48710_49304__$1);
if(cljs.core.truth_(child_49310)){
node.appendChild(child_49310);


var G__49311 = cljs.core.next(seq__48710_49304__$1);
var G__49312 = null;
var G__49313 = (0);
var G__49314 = (0);
seq__48710_49289 = G__49311;
chunk__48712_49290 = G__49312;
count__48713_49291 = G__49313;
i__48714_49292 = G__49314;
continue;
} else {
var G__49315 = cljs.core.next(seq__48710_49304__$1);
var G__49316 = null;
var G__49317 = (0);
var G__49318 = (0);
seq__48710_49289 = G__49315;
chunk__48712_49290 = G__49316;
count__48713_49291 = G__49317;
i__48714_49292 = G__49318;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_49288);
}
}


var G__49320 = seq__48665_49281;
var G__49321 = chunk__48667_49282;
var G__49322 = count__48668_49283;
var G__49323 = (i__48669_49284 + (1));
seq__48665_49281 = G__49320;
chunk__48667_49282 = G__49321;
count__48668_49283 = G__49322;
i__48669_49284 = G__49323;
continue;
} else {
var G__49324 = seq__48665_49281;
var G__49325 = chunk__48667_49282;
var G__49326 = count__48668_49283;
var G__49327 = (i__48669_49284 + (1));
seq__48665_49281 = G__49324;
chunk__48667_49282 = G__49325;
count__48668_49283 = G__49326;
i__48669_49284 = G__49327;
continue;
}
} else {
var temp__5735__auto___49328 = cljs.core.seq(seq__48665_49281);
if(temp__5735__auto___49328){
var seq__48665_49329__$1 = temp__5735__auto___49328;
if(cljs.core.chunked_seq_QMARK_(seq__48665_49329__$1)){
var c__4609__auto___49330 = cljs.core.chunk_first(seq__48665_49329__$1);
var G__49331 = cljs.core.chunk_rest(seq__48665_49329__$1);
var G__49332 = c__4609__auto___49330;
var G__49333 = cljs.core.count(c__4609__auto___49330);
var G__49334 = (0);
seq__48665_49281 = G__49331;
chunk__48667_49282 = G__49332;
count__48668_49283 = G__49333;
i__48669_49284 = G__49334;
continue;
} else {
var child_struct_49335 = cljs.core.first(seq__48665_49329__$1);
if((!((child_struct_49335 == null)))){
if(typeof child_struct_49335 === 'string'){
var text_49336 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_49336),child_struct_49335].join(''));
} else {
var children_49337 = shadow.dom.svg_node(child_struct_49335);
if(cljs.core.seq_QMARK_(children_49337)){
var seq__48728_49338 = cljs.core.seq(children_49337);
var chunk__48730_49339 = null;
var count__48731_49340 = (0);
var i__48732_49341 = (0);
while(true){
if((i__48732_49341 < count__48731_49340)){
var child_49342 = chunk__48730_49339.cljs$core$IIndexed$_nth$arity$2(null,i__48732_49341);
if(cljs.core.truth_(child_49342)){
node.appendChild(child_49342);


var G__49343 = seq__48728_49338;
var G__49344 = chunk__48730_49339;
var G__49345 = count__48731_49340;
var G__49346 = (i__48732_49341 + (1));
seq__48728_49338 = G__49343;
chunk__48730_49339 = G__49344;
count__48731_49340 = G__49345;
i__48732_49341 = G__49346;
continue;
} else {
var G__49347 = seq__48728_49338;
var G__49348 = chunk__48730_49339;
var G__49349 = count__48731_49340;
var G__49350 = (i__48732_49341 + (1));
seq__48728_49338 = G__49347;
chunk__48730_49339 = G__49348;
count__48731_49340 = G__49349;
i__48732_49341 = G__49350;
continue;
}
} else {
var temp__5735__auto___49351__$1 = cljs.core.seq(seq__48728_49338);
if(temp__5735__auto___49351__$1){
var seq__48728_49352__$1 = temp__5735__auto___49351__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48728_49352__$1)){
var c__4609__auto___49353 = cljs.core.chunk_first(seq__48728_49352__$1);
var G__49354 = cljs.core.chunk_rest(seq__48728_49352__$1);
var G__49355 = c__4609__auto___49353;
var G__49356 = cljs.core.count(c__4609__auto___49353);
var G__49357 = (0);
seq__48728_49338 = G__49354;
chunk__48730_49339 = G__49355;
count__48731_49340 = G__49356;
i__48732_49341 = G__49357;
continue;
} else {
var child_49358 = cljs.core.first(seq__48728_49352__$1);
if(cljs.core.truth_(child_49358)){
node.appendChild(child_49358);


var G__49359 = cljs.core.next(seq__48728_49352__$1);
var G__49360 = null;
var G__49361 = (0);
var G__49362 = (0);
seq__48728_49338 = G__49359;
chunk__48730_49339 = G__49360;
count__48731_49340 = G__49361;
i__48732_49341 = G__49362;
continue;
} else {
var G__49363 = cljs.core.next(seq__48728_49352__$1);
var G__49364 = null;
var G__49365 = (0);
var G__49366 = (0);
seq__48728_49338 = G__49363;
chunk__48730_49339 = G__49364;
count__48731_49340 = G__49365;
i__48732_49341 = G__49366;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_49337);
}
}


var G__49367 = cljs.core.next(seq__48665_49329__$1);
var G__49368 = null;
var G__49369 = (0);
var G__49370 = (0);
seq__48665_49281 = G__49367;
chunk__48667_49282 = G__49368;
count__48668_49283 = G__49369;
i__48669_49284 = G__49370;
continue;
} else {
var G__49371 = cljs.core.next(seq__48665_49329__$1);
var G__49372 = null;
var G__49373 = (0);
var G__49374 = (0);
seq__48665_49281 = G__49371;
chunk__48667_49282 = G__49372;
count__48668_49283 = G__49373;
i__48669_49284 = G__49374;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__48747_49375 = shadow.dom._to_svg;
var G__48748_49376 = "string";
var G__48749_49377 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__48747_49375,G__48748_49376,G__48749_49377);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__48760_49378 = shadow.dom._to_svg;
var G__48761_49379 = "null";
var G__48762_49380 = (function (_){
return null;
});
goog.object.set(G__48760_49378,G__48761_49379,G__48762_49380);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___49381 = arguments.length;
var i__4790__auto___49382 = (0);
while(true){
if((i__4790__auto___49382 < len__4789__auto___49381)){
args__4795__auto__.push((arguments[i__4790__auto___49382]));

var G__49383 = (i__4790__auto___49382 + (1));
i__4790__auto___49382 = G__49383;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq48765){
var G__48766 = cljs.core.first(seq48765);
var seq48765__$1 = cljs.core.next(seq48765);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48766,seq48765__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__48772 = arguments.length;
switch (G__48772) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
var G__48773_49397 = shadow.dom.dom_node(el);
var G__48774_49398 = cljs.core.name(event);
var G__48775_49399 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__48773_49397,G__48774_49398,G__48775_49399) : shadow.dom.dom_listen.call(null,G__48773_49397,G__48774_49398,G__48775_49399));

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__46372__auto___49400 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46373__auto__ = (function (){var switch__46215__auto__ = (function (state_48780){
var state_val_48781 = (state_48780[(1)]);
if((state_val_48781 === (1))){
var state_48780__$1 = state_48780;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48780__$1,(2),once_or_cleanup);
} else {
if((state_val_48781 === (2))){
var inst_48777 = (state_48780[(2)]);
var inst_48778 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_48780__$1 = (function (){var statearr_48782 = state_48780;
(statearr_48782[(7)] = inst_48777);

return statearr_48782;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48780__$1,inst_48778);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__46216__auto__ = null;
var shadow$dom$state_machine__46216__auto____0 = (function (){
var statearr_48784 = [null,null,null,null,null,null,null,null];
(statearr_48784[(0)] = shadow$dom$state_machine__46216__auto__);

(statearr_48784[(1)] = (1));

return statearr_48784;
});
var shadow$dom$state_machine__46216__auto____1 = (function (state_48780){
while(true){
var ret_value__46217__auto__ = (function (){try{while(true){
var result__46218__auto__ = switch__46215__auto__(state_48780);
if(cljs.core.keyword_identical_QMARK_(result__46218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46218__auto__;
}
break;
}
}catch (e48786){if((e48786 instanceof Object)){
var ex__46219__auto__ = e48786;
var statearr_48787_49407 = state_48780;
(statearr_48787_49407[(5)] = ex__46219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48780);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48786;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49408 = state_48780;
state_48780 = G__49408;
continue;
} else {
return ret_value__46217__auto__;
}
break;
}
});
shadow$dom$state_machine__46216__auto__ = function(state_48780){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__46216__auto____0.call(this);
case 1:
return shadow$dom$state_machine__46216__auto____1.call(this,state_48780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__46216__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__46216__auto____0;
shadow$dom$state_machine__46216__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__46216__auto____1;
return shadow$dom$state_machine__46216__auto__;
})()
})();
var state__46374__auto__ = (function (){var statearr_48790 = (f__46373__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46373__auto__.cljs$core$IFn$_invoke$arity$0() : f__46373__auto__.call(null));
(statearr_48790[(6)] = c__46372__auto___49400);

return statearr_48790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46374__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
