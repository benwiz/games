goog.provide('crinkle.component');
goog.require('cljs.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
goog.require('goog.object');
crinkle.component.react_createElement_STAR_ = module$node_modules$react$index.createElement;
crinkle.component.react_Fragment_STAR_ = module$node_modules$react$index.Fragment;
crinkle.component.create_element_raw_props_STAR__dev = (function crinkle$component$create_element_raw_props_STAR__dev(base_e,props){
var e = goog.object.clone(base_e);
(e.props = props);

(e._self = base_e._self);

(e._source = base_e._source);

Object.freeze(e);

return e;
});
crinkle.component.create_element_raw_props_STAR__prod = (function crinkle$component$create_element_raw_props_STAR__prod(base_e,props){
(base_e.props = props);

return base_e;
});
/**
 * @param {*} base-e
 * @param {*} props
 * @return {*}
 */
crinkle.component.create_element_raw_props_STAR_ = ((Object.isFrozen(module$node_modules$react$index.createElement("span")))?crinkle.component.create_element_raw_props_STAR__dev:crinkle.component.create_element_raw_props_STAR__prod);
/**
 * Like React.createElement, but keeps key and ref distinct from other props,
 *   allowing props to be opaque.
 * 
 *   Does not support children or defaultProps; it should only be used on
 *   crinkle components which expect to get a cljs object as their props.
 */
crinkle.component.create_element_raw_props = (function crinkle$component$create_element_raw_props(type,props,key,ref){
var fake_props = (((((!((key == null)))) || ((!((ref == null))))))?({"key": key, "ref": ref}):null);
var base_e = module$node_modules$react$index.createElement(type,fake_props);
return (crinkle.component.create_element_raw_props_STAR_.cljs$core$IFn$_invoke$arity$2 ? crinkle.component.create_element_raw_props_STAR_.cljs$core$IFn$_invoke$arity$2(base_e,props) : crinkle.component.create_element_raw_props_STAR_.call(null,base_e,props));
});
/**
 * Return an element factory for component that uses `create-element-raw-props`
 *   to create the element. The factory accepts three args: props, key, and ref
 */
crinkle.component.element_factory_raw_props = (function crinkle$component$element_factory_raw_props(component){
return (function (props,key,ref){
return crinkle.component.create_element_raw_props(component,props,key,ref);
});
});
crinkle.component.js_props_iter = (function crinkle$component$js_props_iter(it){
var o = ({});
while(true){
if(it.hasNext()){
var e_48343 = it.next();
var G__48290_48344 = o;
var G__48291_48345 = e_48343.cljs$core$IMapEntry$_key$arity$1(null).cljs$core$INamed$_name$arity$1(null);
var G__48292_48346 = e_48343.cljs$core$IMapEntry$_val$arity$1(null);
goog.object.set(G__48290_48344,G__48291_48345,G__48292_48346);

continue;
} else {
}
break;
}

return o;
});
crinkle.component.js_props_rkv = (function crinkle$component$js_props_rkv(m){
return cljs.core.reduce_kv((function (o,k,v){
var G__48295_48351 = o;
var G__48296_48352 = k.cljs$core$INamed$_name$arity$1(null);
var G__48297_48353 = v;
goog.object.set(G__48295_48351,G__48296_48352,G__48297_48353);

return o;
}),({}),m);
});
crinkle.component.js_props_rm = (function crinkle$component$js_props_rm(m){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (o,e){
var G__48298_48354 = o;
var G__48299_48355 = e.cljs$core$IMapEntry$_key$arity$1(null).cljs$core$INamed$_name$arity$1(null);
var G__48300_48356 = e.cljs$core$IMapEntry$_val$arity$1(null);
goog.object.set(G__48298_48354,G__48299_48355,G__48300_48356);

return o;
}),({}),m);
});
/**
 * Takes an object which is (possibly) a ClojureScript map. If the value is a
 *   ClojureScript map, convert it to a JS object shallowly. Otherwise, return the
 *   argument unchanged.
 * 
 *   Used to convert maps to js before passing to react components that
 *   expect raw js objects.
 */
crinkle.component.js_props = (function crinkle$component$js_props(obj){
if((obj == null)){
return null;
} else {
if(cljs.core.map_QMARK_(obj)){
if(cljs.core.iterable_QMARK_(obj)){
return crinkle.component.js_props_iter(cljs.core.iter(obj));
} else {
if((((!((obj == null))))?(((((obj.cljs$lang$protocol_mask$partition0$ & (1048576))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IKVReduce$))))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IKVReduce,obj):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IKVReduce,obj))){
return crinkle.component.js_props_rkv(obj);
} else {
return crinkle.component.js_props_rm(obj);

}
}
} else {
return obj;

}
}
});
/**
 * Memoizes a component function; like React.memo, except the default comparison
 *   function is clojure's =
 */
crinkle.component.memo = (function crinkle$component$memo(var_args){
var G__48312 = arguments.length;
switch (G__48312) {
case 1:
return crinkle.component.memo.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return crinkle.component.memo.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(crinkle.component.memo.cljs$core$IFn$_invoke$arity$1 = (function (component){
return module$node_modules$react$index.memo(component,cljs.core._EQ_);
}));

(crinkle.component.memo.cljs$core$IFn$_invoke$arity$2 = (function (component,equal_QMARK_){
return module$node_modules$react$index.memo(component,equal_QMARK_);
}));

(crinkle.component.memo.cljs$lang$maxFixedArity = 2);

/**
 * Returns an element factory for a render function that expects opaque props.
 *   Will memoize the render function.
 * 
 *   The factory provides an optional second argument that may contain :key or :ref.
 */
crinkle.component.crinkle_factory = (function crinkle$component$crinkle_factory(renderfn){
var mr = crinkle.component.memo.cljs$core$IFn$_invoke$arity$1(renderfn);
return (function() {
var G__48358 = null;
var G__48358__1 = (function (props){
return crinkle.component.create_element_raw_props(mr,props,null,null);
});
var G__48358__2 = (function (props,p__48320){
var map__48322 = p__48320;
var map__48322__$1 = (((((!((map__48322 == null))))?(((((map__48322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48322):map__48322);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48322__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48322__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return crinkle.component.create_element_raw_props(mr,props,key,ref);
});
G__48358 = function(props,p__48320){
switch(arguments.length){
case 1:
return G__48358__1.call(this,props);
case 2:
return G__48358__2.call(this,props,p__48320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__48358.cljs$core$IFn$_invoke$arity$1 = G__48358__1;
G__48358.cljs$core$IFn$_invoke$arity$2 = G__48358__2;
return G__48358;
})()
});
/**
 * Takes a value and a comparison function. Returns an equivalent (but not
 *   necessarily identical) value. The comparison function must be hook-static.
 *   The comparison function must take an old and new object and return true if
 *   they are equal and false if they are not.
 * 
 *   The identity of the returned object will only change on subsequent renders
 *   if the comparison function returns false; otherwise it will return the
 *   equivalent object from a previous render so that hooks that look for
 *   deps array changes will not detect a change.
 * 
 *   This function exists because useMemo, useEffect & company do not accept a
 *   custom comparator, so immutable equal-but-not-identical values retrigger
 *   these hooks unnecessarily. Use this hook on values you intend to include
 *   in a deps array.
 * 
 *   Example use:
 * 
 *   (let [v (useEquiv v =)
 *         m (react/useMemo #(some-expensive-fn v) #js[v])]
 *     ,,,)
 * 
 *   Note the comparison function runs during the render phase, so keep it fast.
 * 
 *   See also `useEquivDeps`, `use=`, `use=deps`.
 */
crinkle.component.useEquiv = (function crinkle$component$useEquiv(value,equal_QMARK_){
var vref = module$node_modules$react$index.useRef(value);
var oldv = vref.current;
if((equal_QMARK_.cljs$core$IFn$_invoke$arity$2 ? equal_QMARK_.cljs$core$IFn$_invoke$arity$2(value,oldv) : equal_QMARK_.call(null,value,oldv))){
module$node_modules$react$index.useEffect(goog.nullFunction);

return oldv;
} else {
var G__48333_48374 = (function (){
(vref.current = value);

return (void 0);
});
module$node_modules$react$index.useEffect(G__48333_48374);

return value;
}
});
/**
 * Like `useEquiv`, but with a hardcoded cljs = comparison function
 */
crinkle.component.use_EQ_ = (function crinkle$component$use_EQ_(value){
var vref = module$node_modules$react$index.useRef(value);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,vref.current)){
module$node_modules$react$index.useEffect(goog.nullFunction);

return vref.current;
} else {
var G__48337_48380 = (function (){
(vref.current = value);

return (void 0);
});
module$node_modules$react$index.useEffect(G__48337_48380);

return value;
}
});
/**
 * Accept a deps array and mutate and return it with the result of running
 *   each value through useEquiv.
 * 
 *   See also `use=deps`
 * 
 *   This is a more efficient and convenient version of:
 * 
 *    (into-array (map #(useEquiv % comparisonfn) #js[dep1, dep2])
 */
crinkle.component.useEquivDeps = (function crinkle$component$useEquivDeps(deps,equal_QMARK_){
var i = (deps.length - (1));
while(true){
if((i >= (0))){
(deps[i] = crinkle.component.useEquiv((deps[i]),equal_QMARK_));

var G__48385 = (i - (1));
i = G__48385;
continue;
} else {
return deps;
}
break;
}
});
/**
 * Like `useEquivDeps`, but with a hardcoded cljs = comparison function
 */
crinkle.component.use_EQ_deps = (function crinkle$component$use_EQ_deps(deps){
var i = (deps.length - (1));
while(true){
if((i >= (0))){
(deps[i] = crinkle.component.use_EQ_((deps[i])));

var G__48388 = (i - (1));
i = G__48388;
continue;
} else {
return deps;
}
break;
}
});

//# sourceMappingURL=crinkle.component.js.map
