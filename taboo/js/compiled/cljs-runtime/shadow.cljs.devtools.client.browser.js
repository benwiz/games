goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___51103 = arguments.length;
var i__4790__auto___51104 = (0);
while(true){
if((i__4790__auto___51104 < len__4789__auto___51103)){
args__4795__auto__.push((arguments[i__4790__auto___51104]));

var G__51105 = (i__4790__auto___51104 + (1));
i__4790__auto___51104 = G__51105;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq50939){
var G__50940 = cljs.core.first(seq50939);
var seq50939__$1 = cljs.core.next(seq50939);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50940,seq50939__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__50951){
var map__50952 = p__50951;
var map__50952__$1 = (((((!((map__50952 == null))))?(((((map__50952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50952):map__50952);
var src = map__50952__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50952__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50952__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4185__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__50956 = cljs.core.seq(sources);
var chunk__50957 = null;
var count__50958 = (0);
var i__50959 = (0);
while(true){
if((i__50959 < count__50958)){
var map__50965 = chunk__50957.cljs$core$IIndexed$_nth$arity$2(null,i__50959);
var map__50965__$1 = (((((!((map__50965 == null))))?(((((map__50965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50965):map__50965);
var src = map__50965__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50965__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50965__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50965__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50965__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__51106 = seq__50956;
var G__51107 = chunk__50957;
var G__51108 = count__50958;
var G__51109 = (i__50959 + (1));
seq__50956 = G__51106;
chunk__50957 = G__51107;
count__50958 = G__51108;
i__50959 = G__51109;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__50956);
if(temp__5735__auto__){
var seq__50956__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50956__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__50956__$1);
var G__51110 = cljs.core.chunk_rest(seq__50956__$1);
var G__51111 = c__4609__auto__;
var G__51112 = cljs.core.count(c__4609__auto__);
var G__51113 = (0);
seq__50956 = G__51110;
chunk__50957 = G__51111;
count__50958 = G__51112;
i__50959 = G__51113;
continue;
} else {
var map__50969 = cljs.core.first(seq__50956__$1);
var map__50969__$1 = (((((!((map__50969 == null))))?(((((map__50969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50969.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50969):map__50969);
var src = map__50969__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50969__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50969__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50969__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50969__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__51114 = cljs.core.next(seq__50956__$1);
var G__51115 = null;
var G__51116 = (0);
var G__51117 = (0);
seq__50956 = G__51114;
chunk__50957 = G__51115;
count__50958 = G__51116;
i__50959 = G__51117;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__50972 = cljs.core.seq(js_requires);
var chunk__50973 = null;
var count__50974 = (0);
var i__50975 = (0);
while(true){
if((i__50975 < count__50974)){
var js_ns = chunk__50973.cljs$core$IIndexed$_nth$arity$2(null,i__50975);
var require_str_51118 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_51118);


var G__51119 = seq__50972;
var G__51120 = chunk__50973;
var G__51121 = count__50974;
var G__51122 = (i__50975 + (1));
seq__50972 = G__51119;
chunk__50973 = G__51120;
count__50974 = G__51121;
i__50975 = G__51122;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__50972);
if(temp__5735__auto__){
var seq__50972__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50972__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__50972__$1);
var G__51123 = cljs.core.chunk_rest(seq__50972__$1);
var G__51124 = c__4609__auto__;
var G__51125 = cljs.core.count(c__4609__auto__);
var G__51126 = (0);
seq__50972 = G__51123;
chunk__50973 = G__51124;
count__50974 = G__51125;
i__50975 = G__51126;
continue;
} else {
var js_ns = cljs.core.first(seq__50972__$1);
var require_str_51127 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_51127);


var G__51128 = cljs.core.next(seq__50972__$1);
var G__51129 = null;
var G__51130 = (0);
var G__51131 = (0);
seq__50972 = G__51128;
chunk__50973 = G__51129;
count__50974 = G__51130;
i__50975 = G__51131;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__50978 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__50978) : callback.call(null,G__50978));
} else {
var G__50979 = shadow.cljs.devtools.client.env.files_url();
var G__50980 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__50981 = "POST";
var G__50982 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__50983 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__50979,G__50980,G__50981,G__50982,G__50983);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__50985){
var map__50986 = p__50985;
var map__50986__$1 = (((((!((map__50986 == null))))?(((((map__50986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50986):map__50986);
var msg = map__50986__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50986__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50986__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__50988 = info;
var map__50988__$1 = (((((!((map__50988 == null))))?(((((map__50988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50988):map__50988);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50988__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50988__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50990(s__50991){
return (new cljs.core.LazySeq(null,(function (){
var s__50991__$1 = s__50991;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50991__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__50996 = cljs.core.first(xs__6292__auto__);
var map__50996__$1 = (((((!((map__50996 == null))))?(((((map__50996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50996):map__50996);
var src = map__50996__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50996__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50996__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__50991__$1,map__50996,map__50996__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__50988,map__50988__$1,sources,compiled,map__50986,map__50986__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50990_$_iter__50992(s__50993){
return (new cljs.core.LazySeq(null,((function (s__50991__$1,map__50996,map__50996__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__50988,map__50988__$1,sources,compiled,map__50986,map__50986__$1,msg,info,reload_info){
return (function (){
var s__50993__$1 = s__50993;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__50993__$1);
if(temp__5735__auto____$1){
var s__50993__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50993__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__50993__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__50995 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__50994 = (0);
while(true){
if((i__50994 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__50994);
cljs.core.chunk_append(b__50995,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__51132 = (i__50994 + (1));
i__50994 = G__51132;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50995),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50990_$_iter__50992(cljs.core.chunk_rest(s__50993__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50995),null);
}
} else {
var warning = cljs.core.first(s__50993__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50990_$_iter__50992(cljs.core.rest(s__50993__$2)));
}
} else {
return null;
}
break;
}
});})(s__50991__$1,map__50996,map__50996__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__50988,map__50988__$1,sources,compiled,map__50986,map__50986__$1,msg,info,reload_info))
,null,null));
});})(s__50991__$1,map__50996,map__50996__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__50988,map__50988__$1,sources,compiled,map__50986,map__50986__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50990(cljs.core.rest(s__50991__$1)));
} else {
var G__51133 = cljs.core.rest(s__50991__$1);
s__50991__$1 = G__51133;
continue;
}
} else {
var G__51134 = cljs.core.rest(s__50991__$1);
s__50991__$1 = G__51134;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(sources);
})()));
var seq__50998_51135 = cljs.core.seq(warnings);
var chunk__50999_51136 = null;
var count__51000_51137 = (0);
var i__51001_51138 = (0);
while(true){
if((i__51001_51138 < count__51000_51137)){
var map__51006_51139 = chunk__50999_51136.cljs$core$IIndexed$_nth$arity$2(null,i__51001_51138);
var map__51006_51140__$1 = (((((!((map__51006_51139 == null))))?(((((map__51006_51139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51006_51139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51006_51139):map__51006_51139);
var w_51141 = map__51006_51140__$1;
var msg_51142__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51006_51140__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_51143 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51006_51140__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_51144 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51006_51140__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_51145 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51006_51140__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_51145)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_51143),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_51144),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_51142__$1)].join(''));


var G__51146 = seq__50998_51135;
var G__51147 = chunk__50999_51136;
var G__51148 = count__51000_51137;
var G__51149 = (i__51001_51138 + (1));
seq__50998_51135 = G__51146;
chunk__50999_51136 = G__51147;
count__51000_51137 = G__51148;
i__51001_51138 = G__51149;
continue;
} else {
var temp__5735__auto___51150 = cljs.core.seq(seq__50998_51135);
if(temp__5735__auto___51150){
var seq__50998_51151__$1 = temp__5735__auto___51150;
if(cljs.core.chunked_seq_QMARK_(seq__50998_51151__$1)){
var c__4609__auto___51152 = cljs.core.chunk_first(seq__50998_51151__$1);
var G__51153 = cljs.core.chunk_rest(seq__50998_51151__$1);
var G__51154 = c__4609__auto___51152;
var G__51155 = cljs.core.count(c__4609__auto___51152);
var G__51156 = (0);
seq__50998_51135 = G__51153;
chunk__50999_51136 = G__51154;
count__51000_51137 = G__51155;
i__51001_51138 = G__51156;
continue;
} else {
var map__51008_51157 = cljs.core.first(seq__50998_51151__$1);
var map__51008_51158__$1 = (((((!((map__51008_51157 == null))))?(((((map__51008_51157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51008_51157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51008_51157):map__51008_51157);
var w_51159 = map__51008_51158__$1;
var msg_51160__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51008_51158__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_51161 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51008_51158__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_51162 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51008_51158__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_51163 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51008_51158__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_51163)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_51161),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_51162),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_51160__$1)].join(''));


var G__51164 = cljs.core.next(seq__50998_51151__$1);
var G__51165 = null;
var G__51166 = (0);
var G__51167 = (0);
seq__50998_51135 = G__51164;
chunk__50999_51136 = G__51165;
count__51000_51137 = G__51166;
i__51001_51138 = G__51167;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__51011){
var map__51012 = p__51011;
var map__51012__$1 = (((((!((map__51012 == null))))?(((((map__51012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51012):map__51012);
var src = map__51012__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51012__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51012__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__51015){
var map__51016 = p__51015;
var map__51016__$1 = (((((!((map__51016 == null))))?(((((map__51016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51016):map__51016);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51016__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__51018){
var map__51019 = p__51018;
var map__51019__$1 = (((((!((map__51019 == null))))?(((((map__51019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51019):map__51019);
var rc = map__51019__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51019__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__50984_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__50984_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__51021){
var map__51022 = p__51021;
var map__51022__$1 = (((((!((map__51022 == null))))?(((((map__51022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51022):map__51022);
var msg = map__51022__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51022__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__51024 = cljs.core.seq(updates);
var chunk__51026 = null;
var count__51027 = (0);
var i__51028 = (0);
while(true){
if((i__51028 < count__51027)){
var path = chunk__51026.cljs$core$IIndexed$_nth$arity$2(null,i__51028);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__51054_51168 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__51057_51169 = null;
var count__51058_51170 = (0);
var i__51059_51171 = (0);
while(true){
if((i__51059_51171 < count__51058_51170)){
var node_51172 = chunk__51057_51169.cljs$core$IIndexed$_nth$arity$2(null,i__51059_51171);
var path_match_51173 = shadow.cljs.devtools.client.browser.match_paths(node_51172.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51173)){
var new_link_51174 = (function (){var G__51064 = node_51172.cloneNode(true);
G__51064.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51173),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51064;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51173], 0));

goog.dom.insertSiblingAfter(new_link_51174,node_51172);

goog.dom.removeNode(node_51172);


var G__51175 = seq__51054_51168;
var G__51176 = chunk__51057_51169;
var G__51177 = count__51058_51170;
var G__51178 = (i__51059_51171 + (1));
seq__51054_51168 = G__51175;
chunk__51057_51169 = G__51176;
count__51058_51170 = G__51177;
i__51059_51171 = G__51178;
continue;
} else {
var G__51179 = seq__51054_51168;
var G__51180 = chunk__51057_51169;
var G__51181 = count__51058_51170;
var G__51182 = (i__51059_51171 + (1));
seq__51054_51168 = G__51179;
chunk__51057_51169 = G__51180;
count__51058_51170 = G__51181;
i__51059_51171 = G__51182;
continue;
}
} else {
var temp__5735__auto___51183 = cljs.core.seq(seq__51054_51168);
if(temp__5735__auto___51183){
var seq__51054_51184__$1 = temp__5735__auto___51183;
if(cljs.core.chunked_seq_QMARK_(seq__51054_51184__$1)){
var c__4609__auto___51185 = cljs.core.chunk_first(seq__51054_51184__$1);
var G__51186 = cljs.core.chunk_rest(seq__51054_51184__$1);
var G__51187 = c__4609__auto___51185;
var G__51188 = cljs.core.count(c__4609__auto___51185);
var G__51189 = (0);
seq__51054_51168 = G__51186;
chunk__51057_51169 = G__51187;
count__51058_51170 = G__51188;
i__51059_51171 = G__51189;
continue;
} else {
var node_51190 = cljs.core.first(seq__51054_51184__$1);
var path_match_51191 = shadow.cljs.devtools.client.browser.match_paths(node_51190.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51191)){
var new_link_51192 = (function (){var G__51065 = node_51190.cloneNode(true);
G__51065.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51191),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51065;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51191], 0));

goog.dom.insertSiblingAfter(new_link_51192,node_51190);

goog.dom.removeNode(node_51190);


var G__51193 = cljs.core.next(seq__51054_51184__$1);
var G__51194 = null;
var G__51195 = (0);
var G__51196 = (0);
seq__51054_51168 = G__51193;
chunk__51057_51169 = G__51194;
count__51058_51170 = G__51195;
i__51059_51171 = G__51196;
continue;
} else {
var G__51197 = cljs.core.next(seq__51054_51184__$1);
var G__51198 = null;
var G__51199 = (0);
var G__51200 = (0);
seq__51054_51168 = G__51197;
chunk__51057_51169 = G__51198;
count__51058_51170 = G__51199;
i__51059_51171 = G__51200;
continue;
}
}
} else {
}
}
break;
}


var G__51201 = seq__51024;
var G__51202 = chunk__51026;
var G__51203 = count__51027;
var G__51204 = (i__51028 + (1));
seq__51024 = G__51201;
chunk__51026 = G__51202;
count__51027 = G__51203;
i__51028 = G__51204;
continue;
} else {
var G__51205 = seq__51024;
var G__51206 = chunk__51026;
var G__51207 = count__51027;
var G__51208 = (i__51028 + (1));
seq__51024 = G__51205;
chunk__51026 = G__51206;
count__51027 = G__51207;
i__51028 = G__51208;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51024);
if(temp__5735__auto__){
var seq__51024__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51024__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__51024__$1);
var G__51209 = cljs.core.chunk_rest(seq__51024__$1);
var G__51210 = c__4609__auto__;
var G__51211 = cljs.core.count(c__4609__auto__);
var G__51212 = (0);
seq__51024 = G__51209;
chunk__51026 = G__51210;
count__51027 = G__51211;
i__51028 = G__51212;
continue;
} else {
var path = cljs.core.first(seq__51024__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__51066_51213 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__51069_51214 = null;
var count__51070_51215 = (0);
var i__51071_51216 = (0);
while(true){
if((i__51071_51216 < count__51070_51215)){
var node_51217 = chunk__51069_51214.cljs$core$IIndexed$_nth$arity$2(null,i__51071_51216);
var path_match_51218 = shadow.cljs.devtools.client.browser.match_paths(node_51217.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51218)){
var new_link_51219 = (function (){var G__51076 = node_51217.cloneNode(true);
G__51076.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51218),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51076;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51218], 0));

goog.dom.insertSiblingAfter(new_link_51219,node_51217);

goog.dom.removeNode(node_51217);


var G__51220 = seq__51066_51213;
var G__51221 = chunk__51069_51214;
var G__51222 = count__51070_51215;
var G__51223 = (i__51071_51216 + (1));
seq__51066_51213 = G__51220;
chunk__51069_51214 = G__51221;
count__51070_51215 = G__51222;
i__51071_51216 = G__51223;
continue;
} else {
var G__51224 = seq__51066_51213;
var G__51225 = chunk__51069_51214;
var G__51226 = count__51070_51215;
var G__51227 = (i__51071_51216 + (1));
seq__51066_51213 = G__51224;
chunk__51069_51214 = G__51225;
count__51070_51215 = G__51226;
i__51071_51216 = G__51227;
continue;
}
} else {
var temp__5735__auto___51228__$1 = cljs.core.seq(seq__51066_51213);
if(temp__5735__auto___51228__$1){
var seq__51066_51229__$1 = temp__5735__auto___51228__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51066_51229__$1)){
var c__4609__auto___51230 = cljs.core.chunk_first(seq__51066_51229__$1);
var G__51231 = cljs.core.chunk_rest(seq__51066_51229__$1);
var G__51232 = c__4609__auto___51230;
var G__51233 = cljs.core.count(c__4609__auto___51230);
var G__51234 = (0);
seq__51066_51213 = G__51231;
chunk__51069_51214 = G__51232;
count__51070_51215 = G__51233;
i__51071_51216 = G__51234;
continue;
} else {
var node_51235 = cljs.core.first(seq__51066_51229__$1);
var path_match_51236 = shadow.cljs.devtools.client.browser.match_paths(node_51235.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51236)){
var new_link_51237 = (function (){var G__51077 = node_51235.cloneNode(true);
G__51077.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51236),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51077;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51236], 0));

goog.dom.insertSiblingAfter(new_link_51237,node_51235);

goog.dom.removeNode(node_51235);


var G__51238 = cljs.core.next(seq__51066_51229__$1);
var G__51239 = null;
var G__51240 = (0);
var G__51241 = (0);
seq__51066_51213 = G__51238;
chunk__51069_51214 = G__51239;
count__51070_51215 = G__51240;
i__51071_51216 = G__51241;
continue;
} else {
var G__51242 = cljs.core.next(seq__51066_51229__$1);
var G__51243 = null;
var G__51244 = (0);
var G__51245 = (0);
seq__51066_51213 = G__51242;
chunk__51069_51214 = G__51243;
count__51070_51215 = G__51244;
i__51071_51216 = G__51245;
continue;
}
}
} else {
}
}
break;
}


var G__51246 = cljs.core.next(seq__51024__$1);
var G__51247 = null;
var G__51248 = (0);
var G__51249 = (0);
seq__51024 = G__51246;
chunk__51026 = G__51247;
count__51027 = G__51248;
i__51028 = G__51249;
continue;
} else {
var G__51250 = cljs.core.next(seq__51024__$1);
var G__51251 = null;
var G__51252 = (0);
var G__51253 = (0);
seq__51024 = G__51250;
chunk__51026 = G__51251;
count__51027 = G__51252;
i__51028 = G__51253;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__51078){
var map__51079 = p__51078;
var map__51079__$1 = (((((!((map__51079 == null))))?(((((map__51079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51079):map__51079);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51079__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51079__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__51081){
var map__51082 = p__51081;
var map__51082__$1 = (((((!((map__51082 == null))))?(((((map__51082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51082):map__51082);
var msg = map__51082__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51082__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51082__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51082__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51082__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__51084){
var map__51085 = p__51084;
var map__51085__$1 = (((((!((map__51085 == null))))?(((((map__51085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51085):map__51085);
var src = map__51085__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51085__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__51087){
var map__51088 = p__51087;
var map__51088__$1 = (((((!((map__51088 == null))))?(((((map__51088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51088):map__51088);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51088__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51088__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__51090){
var map__51091 = p__51090;
var map__51091__$1 = (((((!((map__51091 == null))))?(((((map__51091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51091):map__51091);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51091__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51091__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__51093){
var map__51094 = p__51093;
var map__51094__$1 = (((((!((map__51094 == null))))?(((((map__51094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51094):map__51094);
var msg = map__51094__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51094__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__51096 = type;
var G__51096__$1 = (((G__51096 instanceof cljs.core.Keyword))?G__51096.fqn:null);
switch (G__51096__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "repl/session-start":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":
return null;

break;
case "client/stale":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
return shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__51097 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__51098 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__51099 = "POST";
var G__51100 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__51101 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__51097,G__51098,G__51099,G__51100,G__51101);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4185__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
}));

(socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e51102){var e = e51102;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___51255 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___51255)){
var s_51256 = temp__5735__auto___51255;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_51256.onclose = (function (e){
return null;
}));

s_51256.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4174__auto__ = document;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4174__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
