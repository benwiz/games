goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__44769){
var map__44771 = p__44769;
var map__44771__$1 = (((((!((map__44771 == null))))?(((((map__44771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44771):map__44771);
var m = map__44771__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44771__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44771__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__44780_45076 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__44781_45077 = null;
var count__44782_45078 = (0);
var i__44783_45079 = (0);
while(true){
if((i__44783_45079 < count__44782_45078)){
var f_45080 = chunk__44781_45077.cljs$core$IIndexed$_nth$arity$2(null,i__44783_45079);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45080], 0));


var G__45081 = seq__44780_45076;
var G__45082 = chunk__44781_45077;
var G__45083 = count__44782_45078;
var G__45084 = (i__44783_45079 + (1));
seq__44780_45076 = G__45081;
chunk__44781_45077 = G__45082;
count__44782_45078 = G__45083;
i__44783_45079 = G__45084;
continue;
} else {
var temp__5735__auto___45087 = cljs.core.seq(seq__44780_45076);
if(temp__5735__auto___45087){
var seq__44780_45088__$1 = temp__5735__auto___45087;
if(cljs.core.chunked_seq_QMARK_(seq__44780_45088__$1)){
var c__4609__auto___45089 = cljs.core.chunk_first(seq__44780_45088__$1);
var G__45090 = cljs.core.chunk_rest(seq__44780_45088__$1);
var G__45091 = c__4609__auto___45089;
var G__45092 = cljs.core.count(c__4609__auto___45089);
var G__45093 = (0);
seq__44780_45076 = G__45090;
chunk__44781_45077 = G__45091;
count__44782_45078 = G__45092;
i__44783_45079 = G__45093;
continue;
} else {
var f_45096 = cljs.core.first(seq__44780_45088__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45096], 0));


var G__45097 = cljs.core.next(seq__44780_45088__$1);
var G__45098 = null;
var G__45099 = (0);
var G__45100 = (0);
seq__44780_45076 = G__45097;
chunk__44781_45077 = G__45098;
count__44782_45078 = G__45099;
i__44783_45079 = G__45100;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_45105 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_45105], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_45105)))?cljs.core.second(arglists_45105):arglists_45105)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__44791_45113 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__44792_45114 = null;
var count__44793_45115 = (0);
var i__44794_45116 = (0);
while(true){
if((i__44794_45116 < count__44793_45115)){
var vec__44816_45118 = chunk__44792_45114.cljs$core$IIndexed$_nth$arity$2(null,i__44794_45116);
var name_45119 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44816_45118,(0),null);
var map__44819_45120 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44816_45118,(1),null);
var map__44819_45121__$1 = (((((!((map__44819_45120 == null))))?(((((map__44819_45120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44819_45120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44819_45120):map__44819_45120);
var doc_45122 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44819_45121__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45123 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44819_45121__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45119], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45123], 0));

if(cljs.core.truth_(doc_45122)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45122], 0));
} else {
}


var G__45139 = seq__44791_45113;
var G__45140 = chunk__44792_45114;
var G__45141 = count__44793_45115;
var G__45142 = (i__44794_45116 + (1));
seq__44791_45113 = G__45139;
chunk__44792_45114 = G__45140;
count__44793_45115 = G__45141;
i__44794_45116 = G__45142;
continue;
} else {
var temp__5735__auto___45144 = cljs.core.seq(seq__44791_45113);
if(temp__5735__auto___45144){
var seq__44791_45146__$1 = temp__5735__auto___45144;
if(cljs.core.chunked_seq_QMARK_(seq__44791_45146__$1)){
var c__4609__auto___45149 = cljs.core.chunk_first(seq__44791_45146__$1);
var G__45150 = cljs.core.chunk_rest(seq__44791_45146__$1);
var G__45151 = c__4609__auto___45149;
var G__45152 = cljs.core.count(c__4609__auto___45149);
var G__45153 = (0);
seq__44791_45113 = G__45150;
chunk__44792_45114 = G__45151;
count__44793_45115 = G__45152;
i__44794_45116 = G__45153;
continue;
} else {
var vec__44830_45156 = cljs.core.first(seq__44791_45146__$1);
var name_45157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44830_45156,(0),null);
var map__44833_45158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44830_45156,(1),null);
var map__44833_45159__$1 = (((((!((map__44833_45158 == null))))?(((((map__44833_45158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44833_45158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44833_45158):map__44833_45158);
var doc_45160 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44833_45159__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45161 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44833_45159__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45157], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45161], 0));

if(cljs.core.truth_(doc_45160)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45160], 0));
} else {
}


var G__45168 = cljs.core.next(seq__44791_45146__$1);
var G__45169 = null;
var G__45170 = (0);
var G__45171 = (0);
seq__44791_45113 = G__45168;
chunk__44792_45114 = G__45169;
count__44793_45115 = G__45170;
i__44794_45116 = G__45171;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__44838 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__44839 = null;
var count__44840 = (0);
var i__44841 = (0);
while(true){
if((i__44841 < count__44840)){
var role = chunk__44839.cljs$core$IIndexed$_nth$arity$2(null,i__44841);
var temp__5735__auto___45174__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45174__$1)){
var spec_45175 = temp__5735__auto___45174__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45175)], 0));
} else {
}


var G__45176 = seq__44838;
var G__45177 = chunk__44839;
var G__45178 = count__44840;
var G__45179 = (i__44841 + (1));
seq__44838 = G__45176;
chunk__44839 = G__45177;
count__44840 = G__45178;
i__44841 = G__45179;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__44838);
if(temp__5735__auto____$1){
var seq__44838__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__44838__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__44838__$1);
var G__45182 = cljs.core.chunk_rest(seq__44838__$1);
var G__45183 = c__4609__auto__;
var G__45184 = cljs.core.count(c__4609__auto__);
var G__45185 = (0);
seq__44838 = G__45182;
chunk__44839 = G__45183;
count__44840 = G__45184;
i__44841 = G__45185;
continue;
} else {
var role = cljs.core.first(seq__44838__$1);
var temp__5735__auto___45187__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45187__$2)){
var spec_45188 = temp__5735__auto___45187__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45188)], 0));
} else {
}


var G__45190 = cljs.core.next(seq__44838__$1);
var G__45191 = null;
var G__45192 = (0);
var G__45193 = (0);
seq__44838 = G__45190;
chunk__44839 = G__45191;
count__44840 = G__45192;
i__44841 = G__45193;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__45194 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__45195 = cljs.core.ex_cause(t);
via = G__45194;
t = G__45195;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__44886 = datafied_throwable;
var map__44886__$1 = (((((!((map__44886 == null))))?(((((map__44886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44886):map__44886);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44886__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44886__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44886__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__44887 = cljs.core.last(via);
var map__44887__$1 = (((((!((map__44887 == null))))?(((((map__44887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44887):map__44887);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44887__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44887__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44887__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__44888 = data;
var map__44888__$1 = (((((!((map__44888 == null))))?(((((map__44888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44888):map__44888);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44888__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44888__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44888__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__44889 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__44889__$1 = (((((!((map__44889 == null))))?(((((map__44889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44889):map__44889);
var top_data = map__44889__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44889__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__44901 = phase;
var G__44901__$1 = (((G__44901 instanceof cljs.core.Keyword))?G__44901.fqn:null);
switch (G__44901__$1) {
case "read-source":
var map__44903 = data;
var map__44903__$1 = (((((!((map__44903 == null))))?(((((map__44903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44903):map__44903);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44903__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44903__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__44923 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__44923__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44923,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__44923);
var G__44923__$2 = (cljs.core.truth_((function (){var fexpr__44927 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__44927.cljs$core$IFn$_invoke$arity$1 ? fexpr__44927.cljs$core$IFn$_invoke$arity$1(source) : fexpr__44927.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__44923__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__44923__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44923__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__44923__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__44929 = top_data;
var G__44929__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44929,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__44929);
var G__44929__$2 = (cljs.core.truth_((function (){var fexpr__44930 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__44930.cljs$core$IFn$_invoke$arity$1 ? fexpr__44930.cljs$core$IFn$_invoke$arity$1(source) : fexpr__44930.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__44929__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__44929__$1);
var G__44929__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44929__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__44929__$2);
var G__44929__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44929__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__44929__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44929__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__44929__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__44933 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44933,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44933,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44933,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44933,(3),null);
var G__44936 = top_data;
var G__44936__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44936,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__44936);
var G__44936__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44936__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__44936__$1);
var G__44936__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44936__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__44936__$2);
var G__44936__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44936__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__44936__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44936__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__44936__$4;
}

break;
case "execution":
var vec__44945 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44945,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44945,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44945,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44945,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__44882_SHARP_){
var or__4185__auto__ = (p1__44882_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__44951 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__44951.cljs$core$IFn$_invoke$arity$1 ? fexpr__44951.cljs$core$IFn$_invoke$arity$1(p1__44882_SHARP_) : fexpr__44951.call(null,p1__44882_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__44960 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__44960__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44960,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__44960);
var G__44960__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44960__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__44960__$1);
var G__44960__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44960__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__44960__$2);
var G__44960__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44960__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__44960__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44960__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__44960__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44901__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__44974){
var map__44976 = p__44974;
var map__44976__$1 = (((((!((map__44976 == null))))?(((((map__44976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44976):map__44976);
var triage_data = map__44976__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44976__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44976__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44976__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44976__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44976__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44976__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44976__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44976__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__44999 = phase;
var G__44999__$1 = (((G__44999 instanceof cljs.core.Keyword))?G__44999.fqn:null);
switch (G__44999__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__45002 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__45003 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45004 = loc;
var G__45005 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45011_45246 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45012_45247 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45013_45248 = true;
var _STAR_print_fn_STAR__temp_val__45014_45249 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45013_45248);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45014_45249);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44966_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__44966_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45012_45247);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45011_45246);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45002,G__45003,G__45004,G__45005) : format.call(null,G__45002,G__45003,G__45004,G__45005));

break;
case "macroexpansion":
var G__45016 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__45017 = cause_type;
var G__45018 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45019 = loc;
var G__45020 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45016,G__45017,G__45018,G__45019,G__45020) : format.call(null,G__45016,G__45017,G__45018,G__45019,G__45020));

break;
case "compile-syntax-check":
var G__45022 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__45023 = cause_type;
var G__45024 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45025 = loc;
var G__45026 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45022,G__45023,G__45024,G__45025,G__45026) : format.call(null,G__45022,G__45023,G__45024,G__45025,G__45026));

break;
case "compilation":
var G__45027 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__45028 = cause_type;
var G__45029 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45030 = loc;
var G__45031 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45027,G__45028,G__45029,G__45030,G__45031) : format.call(null,G__45027,G__45028,G__45029,G__45030,G__45031));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__45034 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__45035 = symbol;
var G__45036 = loc;
var G__45037 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45040_45256 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45041_45257 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45043_45258 = true;
var _STAR_print_fn_STAR__temp_val__45044_45259 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45043_45258);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45044_45259);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44968_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__44968_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45041_45257);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45040_45256);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45034,G__45035,G__45036,G__45037) : format.call(null,G__45034,G__45035,G__45036,G__45037));
} else {
var G__45051 = "Execution error%s at %s(%s).\n%s\n";
var G__45052 = cause_type;
var G__45053 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45054 = loc;
var G__45055 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45051,G__45052,G__45053,G__45054,G__45055) : format.call(null,G__45051,G__45052,G__45053,G__45054,G__45055));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44999__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
