goog.provide('taboo.core');
goog.require('cljs.core');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
goog.require('crinkle.component');
goog.require('taboo.view');
cljs.core.enable_console_print_BANG_();
taboo.core.start = (function taboo$core$start(){
var G__55712 = crinkle.component.create_element_raw_props(taboo.view.app,null,null,null);
var G__55713 = document.getElementById("app");
return module$node_modules$react_dom$index.render(G__55712,G__55713);
});
taboo.core.init = (function taboo$core$init(){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["starting up!"], 0));

return taboo.core.start();
});
goog.exportSymbol('taboo.core.init', taboo.core.init);
taboo.core.stop = (function taboo$core$stop(){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["stop"], 0));
});

//# sourceMappingURL=taboo.core.js.map
