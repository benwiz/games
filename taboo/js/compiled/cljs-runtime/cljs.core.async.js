goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__46452 = arguments.length;
switch (G__46452) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46453 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46453 = (function (f,blockable,meta46454){
this.f = f;
this.blockable = blockable;
this.meta46454 = meta46454;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46453.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46455,meta46454__$1){
var self__ = this;
var _46455__$1 = this;
return (new cljs.core.async.t_cljs$core$async46453(self__.f,self__.blockable,meta46454__$1));
}));

(cljs.core.async.t_cljs$core$async46453.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46455){
var self__ = this;
var _46455__$1 = this;
return self__.meta46454;
}));

(cljs.core.async.t_cljs$core$async46453.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46453.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46453.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async46453.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async46453.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta46454","meta46454",1007336536,null)], null);
}));

(cljs.core.async.t_cljs$core$async46453.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46453.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46453");

(cljs.core.async.t_cljs$core$async46453.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46453");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46453.
 */
cljs.core.async.__GT_t_cljs$core$async46453 = (function cljs$core$async$__GT_t_cljs$core$async46453(f__$1,blockable__$1,meta46454){
return (new cljs.core.async.t_cljs$core$async46453(f__$1,blockable__$1,meta46454));
});

}

return (new cljs.core.async.t_cljs$core$async46453(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__46458 = arguments.length;
switch (G__46458) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__46460 = arguments.length;
switch (G__46460) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__46462 = arguments.length;
switch (G__46462) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_47918 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47918) : fn1.call(null,val_47918));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47918) : fn1.call(null,val_47918));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__46464 = arguments.length;
switch (G__46464) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___47932 = n;
var x_47933 = (0);
while(true){
if((x_47933 < n__4666__auto___47932)){
(a[x_47933] = x_47933);

var G__47935 = (x_47933 + (1));
x_47933 = G__47935;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46465 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46465 = (function (flag,meta46466){
this.flag = flag;
this.meta46466 = meta46466;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46465.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46467,meta46466__$1){
var self__ = this;
var _46467__$1 = this;
return (new cljs.core.async.t_cljs$core$async46465(self__.flag,meta46466__$1));
}));

(cljs.core.async.t_cljs$core$async46465.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46467){
var self__ = this;
var _46467__$1 = this;
return self__.meta46466;
}));

(cljs.core.async.t_cljs$core$async46465.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46465.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async46465.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46465.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async46465.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta46466","meta46466",1467675684,null)], null);
}));

(cljs.core.async.t_cljs$core$async46465.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46465.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46465");

(cljs.core.async.t_cljs$core$async46465.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46465");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46465.
 */
cljs.core.async.__GT_t_cljs$core$async46465 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async46465(flag__$1,meta46466){
return (new cljs.core.async.t_cljs$core$async46465(flag__$1,meta46466));
});

}

return (new cljs.core.async.t_cljs$core$async46465(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46468 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46468 = (function (flag,cb,meta46469){
this.flag = flag;
this.cb = cb;
this.meta46469 = meta46469;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46468.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46470,meta46469__$1){
var self__ = this;
var _46470__$1 = this;
return (new cljs.core.async.t_cljs$core$async46468(self__.flag,self__.cb,meta46469__$1));
}));

(cljs.core.async.t_cljs$core$async46468.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46470){
var self__ = this;
var _46470__$1 = this;
return self__.meta46469;
}));

(cljs.core.async.t_cljs$core$async46468.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46468.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async46468.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46468.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async46468.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta46469","meta46469",-955419739,null)], null);
}));

(cljs.core.async.t_cljs$core$async46468.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46468.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46468");

(cljs.core.async.t_cljs$core$async46468.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46468");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46468.
 */
cljs.core.async.__GT_t_cljs$core$async46468 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async46468(flag__$1,cb__$1,meta46469){
return (new cljs.core.async.t_cljs$core$async46468(flag__$1,cb__$1,meta46469));
});

}

return (new cljs.core.async.t_cljs$core$async46468(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46471_SHARP_){
var G__46473 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46471_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__46473) : fret.call(null,G__46473));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46472_SHARP_){
var G__46474 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46472_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__46474) : fret.call(null,G__46474));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__47964 = (i + (1));
i = G__47964;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47970 = arguments.length;
var i__4790__auto___47971 = (0);
while(true){
if((i__4790__auto___47971 < len__4789__auto___47970)){
args__4795__auto__.push((arguments[i__4790__auto___47971]));

var G__47972 = (i__4790__auto___47971 + (1));
i__4790__auto___47971 = G__47972;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__46477){
var map__46478 = p__46477;
var map__46478__$1 = (((((!((map__46478 == null))))?(((((map__46478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46478):map__46478);
var opts = map__46478__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq46475){
var G__46476 = cljs.core.first(seq46475);
var seq46475__$1 = cljs.core.next(seq46475);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46476,seq46475__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__46481 = arguments.length;
switch (G__46481) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__46372__auto___47987 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46373__auto__ = (function (){var switch__46215__auto__ = (function (state_46505){
var state_val_46506 = (state_46505[(1)]);
if((state_val_46506 === (7))){
var inst_46501 = (state_46505[(2)]);
var state_46505__$1 = state_46505;
var statearr_46507_47988 = state_46505__$1;
(statearr_46507_47988[(2)] = inst_46501);

(statearr_46507_47988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46506 === (1))){
var state_46505__$1 = state_46505;
var statearr_46508_47989 = state_46505__$1;
(statearr_46508_47989[(2)] = null);

(statearr_46508_47989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46506 === (4))){
var inst_46484 = (state_46505[(7)]);
var inst_46484__$1 = (state_46505[(2)]);
var inst_46485 = (inst_46484__$1 == null);
var state_46505__$1 = (function (){var statearr_46509 = state_46505;
(statearr_46509[(7)] = inst_46484__$1);

return statearr_46509;
})();
if(cljs.core.truth_(inst_46485)){
var statearr_46510_47992 = state_46505__$1;
(statearr_46510_47992[(1)] = (5));

} else {
var statearr_46511_47993 = state_46505__$1;
(statearr_46511_47993[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46506 === (13))){
var state_46505__$1 = state_46505;
var statearr_46512_47994 = state_46505__$1;
(statearr_46512_47994[(2)] = null);

(statearr_46512_47994[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46506 === (6))){
var inst_46484 = (state_46505[(7)]);
var state_46505__$1 = state_46505;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46505__$1,(11),to,inst_46484);
} else {
if((state_val_46506 === (3))){
var inst_46503 = (state_46505[(2)]);
var state_46505__$1 = state_46505;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46505__$1,inst_46503);
} else {
if((state_val_46506 === (12))){
var state_46505__$1 = state_46505;
var statearr_46513_47995 = state_46505__$1;
(statearr_46513_47995[(2)] = null);

(statearr_46513_47995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46506 === (2))){
var state_46505__$1 = state_46505;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46505__$1,(4),from);
} else {
if((state_val_46506 === (11))){
var inst_46494 = (state_46505[(2)]);
var state_46505__$1 = state_46505;
if(cljs.core.truth_(inst_46494)){
var statearr_46514_47996 = state_46505__$1;
(statearr_46514_47996[(1)] = (12));

} else {
var statearr_46515_47997 = state_46505__$1;
(statearr_46515_47997[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46506 === (9))){
var state_46505__$1 = state_46505;
var statearr_46516_47998 = state_46505__$1;
(statearr_46516_47998[(2)] = null);

(statearr_46516_47998[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46506 === (5))){
var state_46505__$1 = state_46505;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46517_47999 = state_46505__$1;
(statearr_46517_47999[(1)] = (8));

} else {
var statearr_46518_48000 = state_46505__$1;
(statearr_46518_48000[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46506 === (14))){
var inst_46499 = (state_46505[(2)]);
var state_46505__$1 = state_46505;
var statearr_46519_48001 = state_46505__$1;
(statearr_46519_48001[(2)] = inst_46499);

(statearr_46519_48001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46506 === (10))){
var inst_46491 = (state_46505[(2)]);
var state_46505__$1 = state_46505;
var statearr_46520_48002 = state_46505__$1;
(statearr_46520_48002[(2)] = inst_46491);

(statearr_46520_48002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46506 === (8))){
var inst_46488 = cljs.core.async.close_BANG_(to);
var state_46505__$1 = state_46505;
var statearr_46521_48003 = state_46505__$1;
(statearr_46521_48003[(2)] = inst_46488);

(statearr_46521_48003[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46216__auto__ = null;
var cljs$core$async$state_machine__46216__auto____0 = (function (){
var statearr_46522 = [null,null,null,null,null,null,null,null];
(statearr_46522[(0)] = cljs$core$async$state_machine__46216__auto__);

(statearr_46522[(1)] = (1));

return statearr_46522;
});
var cljs$core$async$state_machine__46216__auto____1 = (function (state_46505){
while(true){
var ret_value__46217__auto__ = (function (){try{while(true){
var result__46218__auto__ = switch__46215__auto__(state_46505);
if(cljs.core.keyword_identical_QMARK_(result__46218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46218__auto__;
}
break;
}
}catch (e46523){if((e46523 instanceof Object)){
var ex__46219__auto__ = e46523;
var statearr_46524_48005 = state_46505;
(statearr_46524_48005[(5)] = ex__46219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46523;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48012 = state_46505;
state_46505 = G__48012;
continue;
} else {
return ret_value__46217__auto__;
}
break;
}
});
cljs$core$async$state_machine__46216__auto__ = function(state_46505){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46216__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46216__auto____1.call(this,state_46505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46216__auto____0;
cljs$core$async$state_machine__46216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46216__auto____1;
return cljs$core$async$state_machine__46216__auto__;
})()
})();
var state__46374__auto__ = (function (){var statearr_46525 = (f__46373__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46373__auto__.cljs$core$IFn$_invoke$arity$0() : f__46373__auto__.call(null));
(statearr_46525[(6)] = c__46372__auto___47987);

return statearr_46525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46374__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__46526){
var vec__46527 = p__46526;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46527,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46527,(1),null);
var job = vec__46527;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__46372__auto___48017 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46373__auto__ = (function (){var switch__46215__auto__ = (function (state_46534){
var state_val_46535 = (state_46534[(1)]);
if((state_val_46535 === (1))){
var state_46534__$1 = state_46534;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46534__$1,(2),res,v);
} else {
if((state_val_46535 === (2))){
var inst_46531 = (state_46534[(2)]);
var inst_46532 = cljs.core.async.close_BANG_(res);
var state_46534__$1 = (function (){var statearr_46536 = state_46534;
(statearr_46536[(7)] = inst_46531);

return statearr_46536;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46534__$1,inst_46532);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46216__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46216__auto____0 = (function (){
var statearr_46537 = [null,null,null,null,null,null,null,null];
(statearr_46537[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46216__auto__);

(statearr_46537[(1)] = (1));

return statearr_46537;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46216__auto____1 = (function (state_46534){
while(true){
var ret_value__46217__auto__ = (function (){try{while(true){
var result__46218__auto__ = switch__46215__auto__(state_46534);
if(cljs.core.keyword_identical_QMARK_(result__46218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46218__auto__;
}
break;
}
}catch (e46538){if((e46538 instanceof Object)){
var ex__46219__auto__ = e46538;
var statearr_46539_48021 = state_46534;
(statearr_46539_48021[(5)] = ex__46219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46534);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46538;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48022 = state_46534;
state_46534 = G__48022;
continue;
} else {
return ret_value__46217__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46216__auto__ = function(state_46534){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46216__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46216__auto____1.call(this,state_46534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46216__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46216__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46216__auto__;
})()
})();
var state__46374__auto__ = (function (){var statearr_46540 = (f__46373__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46373__auto__.cljs$core$IFn$_invoke$arity$0() : f__46373__auto__.call(null));
(statearr_46540[(6)] = c__46372__auto___48017);

return statearr_46540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46374__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__46541){
var vec__46542 = p__46541;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46542,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46542,(1),null);
var job = vec__46542;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___48028 = n;
var __48029 = (0);
while(true){
if((__48029 < n__4666__auto___48028)){
var G__46545_48030 = type;
var G__46545_48031__$1 = (((G__46545_48030 instanceof cljs.core.Keyword))?G__46545_48030.fqn:null);
switch (G__46545_48031__$1) {
case "compute":
var c__46372__auto___48034 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__48029,c__46372__auto___48034,G__46545_48030,G__46545_48031__$1,n__4666__auto___48028,jobs,results,process,async){
return (function (){
var f__46373__auto__ = (function (){var switch__46215__auto__ = ((function (__48029,c__46372__auto___48034,G__46545_48030,G__46545_48031__$1,n__4666__auto___48028,jobs,results,process,async){
return (function (state_46558){
var state_val_46559 = (state_46558[(1)]);
if((state_val_46559 === (1))){
var state_46558__$1 = state_46558;
var statearr_46560_48037 = state_46558__$1;
(statearr_46560_48037[(2)] = null);

(statearr_46560_48037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46559 === (2))){
var state_46558__$1 = state_46558;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46558__$1,(4),jobs);
} else {
if((state_val_46559 === (3))){
var inst_46556 = (state_46558[(2)]);
var state_46558__$1 = state_46558;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46558__$1,inst_46556);
} else {
if((state_val_46559 === (4))){
var inst_46548 = (state_46558[(2)]);
var inst_46549 = process(inst_46548);
var state_46558__$1 = state_46558;
if(cljs.core.truth_(inst_46549)){
var statearr_46561_48043 = state_46558__$1;
(statearr_46561_48043[(1)] = (5));

} else {
var statearr_46562_48044 = state_46558__$1;
(statearr_46562_48044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46559 === (5))){
var state_46558__$1 = state_46558;
var statearr_46563_48047 = state_46558__$1;
(statearr_46563_48047[(2)] = null);

(statearr_46563_48047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46559 === (6))){
var state_46558__$1 = state_46558;
var statearr_46564_48048 = state_46558__$1;
(statearr_46564_48048[(2)] = null);

(statearr_46564_48048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46559 === (7))){
var inst_46554 = (state_46558[(2)]);
var state_46558__$1 = state_46558;
var statearr_46565_48051 = state_46558__$1;
(statearr_46565_48051[(2)] = inst_46554);

(statearr_46565_48051[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__48029,c__46372__auto___48034,G__46545_48030,G__46545_48031__$1,n__4666__auto___48028,jobs,results,process,async))
;
return ((function (__48029,switch__46215__auto__,c__46372__auto___48034,G__46545_48030,G__46545_48031__$1,n__4666__auto___48028,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46216__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46216__auto____0 = (function (){
var statearr_46566 = [null,null,null,null,null,null,null];
(statearr_46566[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46216__auto__);

(statearr_46566[(1)] = (1));

return statearr_46566;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46216__auto____1 = (function (state_46558){
while(true){
var ret_value__46217__auto__ = (function (){try{while(true){
var result__46218__auto__ = switch__46215__auto__(state_46558);
if(cljs.core.keyword_identical_QMARK_(result__46218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46218__auto__;
}
break;
}
}catch (e46567){if((e46567 instanceof Object)){
var ex__46219__auto__ = e46567;
var statearr_46568_48056 = state_46558;
(statearr_46568_48056[(5)] = ex__46219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46567;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48057 = state_46558;
state_46558 = G__48057;
continue;
} else {
return ret_value__46217__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46216__auto__ = function(state_46558){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46216__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46216__auto____1.call(this,state_46558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46216__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46216__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46216__auto__;
})()
;})(__48029,switch__46215__auto__,c__46372__auto___48034,G__46545_48030,G__46545_48031__$1,n__4666__auto___48028,jobs,results,process,async))
})();
var state__46374__auto__ = (function (){var statearr_46569 = (f__46373__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46373__auto__.cljs$core$IFn$_invoke$arity$0() : f__46373__auto__.call(null));
(statearr_46569[(6)] = c__46372__auto___48034);

return statearr_46569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46374__auto__);
});})(__48029,c__46372__auto___48034,G__46545_48030,G__46545_48031__$1,n__4666__auto___48028,jobs,results,process,async))
);


break;
case "async":
var c__46372__auto___48060 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__48029,c__46372__auto___48060,G__46545_48030,G__46545_48031__$1,n__4666__auto___48028,jobs,results,process,async){
return (function (){
var f__46373__auto__ = (function (){var switch__46215__auto__ = ((function (__48029,c__46372__auto___48060,G__46545_48030,G__46545_48031__$1,n__4666__auto___48028,jobs,results,process,async){
return (function (state_46582){
var state_val_46583 = (state_46582[(1)]);
if((state_val_46583 === (1))){
var state_46582__$1 = state_46582;
var statearr_46584_48061 = state_46582__$1;
(statearr_46584_48061[(2)] = null);

(statearr_46584_48061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46583 === (2))){
var state_46582__$1 = state_46582;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46582__$1,(4),jobs);
} else {
if((state_val_46583 === (3))){
var inst_46580 = (state_46582[(2)]);
var state_46582__$1 = state_46582;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46582__$1,inst_46580);
} else {
if((state_val_46583 === (4))){
var inst_46572 = (state_46582[(2)]);
var inst_46573 = async(inst_46572);
var state_46582__$1 = state_46582;
if(cljs.core.truth_(inst_46573)){
var statearr_46585_48063 = state_46582__$1;
(statearr_46585_48063[(1)] = (5));

} else {
var statearr_46586_48064 = state_46582__$1;
(statearr_46586_48064[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46583 === (5))){
var state_46582__$1 = state_46582;
var statearr_46587_48065 = state_46582__$1;
(statearr_46587_48065[(2)] = null);

(statearr_46587_48065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46583 === (6))){
var state_46582__$1 = state_46582;
var statearr_46588_48066 = state_46582__$1;
(statearr_46588_48066[(2)] = null);

(statearr_46588_48066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46583 === (7))){
var inst_46578 = (state_46582[(2)]);
var state_46582__$1 = state_46582;
var statearr_46589_48067 = state_46582__$1;
(statearr_46589_48067[(2)] = inst_46578);

(statearr_46589_48067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__48029,c__46372__auto___48060,G__46545_48030,G__46545_48031__$1,n__4666__auto___48028,jobs,results,process,async))
;
return ((function (__48029,switch__46215__auto__,c__46372__auto___48060,G__46545_48030,G__46545_48031__$1,n__4666__auto___48028,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46216__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46216__auto____0 = (function (){
var statearr_46590 = [null,null,null,null,null,null,null];
(statearr_46590[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46216__auto__);

(statearr_46590[(1)] = (1));

return statearr_46590;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46216__auto____1 = (function (state_46582){
while(true){
var ret_value__46217__auto__ = (function (){try{while(true){
var result__46218__auto__ = switch__46215__auto__(state_46582);
if(cljs.core.keyword_identical_QMARK_(result__46218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46218__auto__;
}
break;
}
}catch (e46591){if((e46591 instanceof Object)){
var ex__46219__auto__ = e46591;
var statearr_46592_48075 = state_46582;
(statearr_46592_48075[(5)] = ex__46219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46582);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46591;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48076 = state_46582;
state_46582 = G__48076;
continue;
} else {
return ret_value__46217__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46216__auto__ = function(state_46582){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46216__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46216__auto____1.call(this,state_46582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46216__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46216__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46216__auto__;
})()
;})(__48029,switch__46215__auto__,c__46372__auto___48060,G__46545_48030,G__46545_48031__$1,n__4666__auto___48028,jobs,results,process,async))
})();
var state__46374__auto__ = (function (){var statearr_46593 = (f__46373__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46373__auto__.cljs$core$IFn$_invoke$arity$0() : f__46373__auto__.call(null));
(statearr_46593[(6)] = c__46372__auto___48060);

return statearr_46593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46374__auto__);
});})(__48029,c__46372__auto___48060,G__46545_48030,G__46545_48031__$1,n__4666__auto___48028,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46545_48031__$1)].join('')));

}

var G__48080 = (__48029 + (1));
__48029 = G__48080;
continue;
} else {
}
break;
}

var c__46372__auto___48084 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46373__auto__ = (function (){var switch__46215__auto__ = (function (state_46615){
var state_val_46616 = (state_46615[(1)]);
if((state_val_46616 === (7))){
var inst_46611 = (state_46615[(2)]);
var state_46615__$1 = state_46615;
var statearr_46617_48085 = state_46615__$1;
(statearr_46617_48085[(2)] = inst_46611);

(statearr_46617_48085[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46616 === (1))){
var state_46615__$1 = state_46615;
var statearr_46618_48089 = state_46615__$1;
(statearr_46618_48089[(2)] = null);

(statearr_46618_48089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46616 === (4))){
var inst_46596 = (state_46615[(7)]);
var inst_46596__$1 = (state_46615[(2)]);
var inst_46597 = (inst_46596__$1 == null);
var state_46615__$1 = (function (){var statearr_46619 = state_46615;
(statearr_46619[(7)] = inst_46596__$1);

return statearr_46619;
})();
if(cljs.core.truth_(inst_46597)){
var statearr_46620_48090 = state_46615__$1;
(statearr_46620_48090[(1)] = (5));

} else {
var statearr_46621_48092 = state_46615__$1;
(statearr_46621_48092[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46616 === (6))){
var inst_46601 = (state_46615[(8)]);
var inst_46596 = (state_46615[(7)]);
var inst_46601__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_46602 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46603 = [inst_46596,inst_46601__$1];
var inst_46604 = (new cljs.core.PersistentVector(null,2,(5),inst_46602,inst_46603,null));
var state_46615__$1 = (function (){var statearr_46622 = state_46615;
(statearr_46622[(8)] = inst_46601__$1);

return statearr_46622;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46615__$1,(8),jobs,inst_46604);
} else {
if((state_val_46616 === (3))){
var inst_46613 = (state_46615[(2)]);
var state_46615__$1 = state_46615;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46615__$1,inst_46613);
} else {
if((state_val_46616 === (2))){
var state_46615__$1 = state_46615;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46615__$1,(4),from);
} else {
if((state_val_46616 === (9))){
var inst_46608 = (state_46615[(2)]);
var state_46615__$1 = (function (){var statearr_46623 = state_46615;
(statearr_46623[(9)] = inst_46608);

return statearr_46623;
})();
var statearr_46624_48097 = state_46615__$1;
(statearr_46624_48097[(2)] = null);

(statearr_46624_48097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46616 === (5))){
var inst_46599 = cljs.core.async.close_BANG_(jobs);
var state_46615__$1 = state_46615;
var statearr_46625_48098 = state_46615__$1;
(statearr_46625_48098[(2)] = inst_46599);

(statearr_46625_48098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46616 === (8))){
var inst_46601 = (state_46615[(8)]);
var inst_46606 = (state_46615[(2)]);
var state_46615__$1 = (function (){var statearr_46626 = state_46615;
(statearr_46626[(10)] = inst_46606);

return statearr_46626;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46615__$1,(9),results,inst_46601);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46216__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46216__auto____0 = (function (){
var statearr_46627 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46627[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46216__auto__);

(statearr_46627[(1)] = (1));

return statearr_46627;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46216__auto____1 = (function (state_46615){
while(true){
var ret_value__46217__auto__ = (function (){try{while(true){
var result__46218__auto__ = switch__46215__auto__(state_46615);
if(cljs.core.keyword_identical_QMARK_(result__46218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46218__auto__;
}
break;
}
}catch (e46628){if((e46628 instanceof Object)){
var ex__46219__auto__ = e46628;
var statearr_46629_48109 = state_46615;
(statearr_46629_48109[(5)] = ex__46219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46615);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46628;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48113 = state_46615;
state_46615 = G__48113;
continue;
} else {
return ret_value__46217__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46216__auto__ = function(state_46615){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46216__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46216__auto____1.call(this,state_46615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46216__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46216__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46216__auto__;
})()
})();
var state__46374__auto__ = (function (){var statearr_46630 = (f__46373__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46373__auto__.cljs$core$IFn$_invoke$arity$0() : f__46373__auto__.call(null));
(statearr_46630[(6)] = c__46372__auto___48084);

return statearr_46630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46374__auto__);
}));


var c__46372__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46373__auto__ = (function (){var switch__46215__auto__ = (function (state_46668){
var state_val_46669 = (state_46668[(1)]);
if((state_val_46669 === (7))){
var inst_46664 = (state_46668[(2)]);
var state_46668__$1 = state_46668;
var statearr_46670_48120 = state_46668__$1;
(statearr_46670_48120[(2)] = inst_46664);

(statearr_46670_48120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46669 === (20))){
var state_46668__$1 = state_46668;
var statearr_46671_48121 = state_46668__$1;
(statearr_46671_48121[(2)] = null);

(statearr_46671_48121[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46669 === (1))){
var state_46668__$1 = state_46668;
var statearr_46672_48126 = state_46668__$1;
(statearr_46672_48126[(2)] = null);

(statearr_46672_48126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46669 === (4))){
var inst_46633 = (state_46668[(7)]);
var inst_46633__$1 = (state_46668[(2)]);
var inst_46634 = (inst_46633__$1 == null);
var state_46668__$1 = (function (){var statearr_46673 = state_46668;
(statearr_46673[(7)] = inst_46633__$1);

return statearr_46673;
})();
if(cljs.core.truth_(inst_46634)){
var statearr_46674_48133 = state_46668__$1;
(statearr_46674_48133[(1)] = (5));

} else {
var statearr_46675_48134 = state_46668__$1;
(statearr_46675_48134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46669 === (15))){
var inst_46646 = (state_46668[(8)]);
var state_46668__$1 = state_46668;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46668__$1,(18),to,inst_46646);
} else {
if((state_val_46669 === (21))){
var inst_46659 = (state_46668[(2)]);
var state_46668__$1 = state_46668;
var statearr_46676_48141 = state_46668__$1;
(statearr_46676_48141[(2)] = inst_46659);

(statearr_46676_48141[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46669 === (13))){
var inst_46661 = (state_46668[(2)]);
var state_46668__$1 = (function (){var statearr_46677 = state_46668;
(statearr_46677[(9)] = inst_46661);

return statearr_46677;
})();
var statearr_46678_48148 = state_46668__$1;
(statearr_46678_48148[(2)] = null);

(statearr_46678_48148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46669 === (6))){
var inst_46633 = (state_46668[(7)]);
var state_46668__$1 = state_46668;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46668__$1,(11),inst_46633);
} else {
if((state_val_46669 === (17))){
var inst_46654 = (state_46668[(2)]);
var state_46668__$1 = state_46668;
if(cljs.core.truth_(inst_46654)){
var statearr_46679_48149 = state_46668__$1;
(statearr_46679_48149[(1)] = (19));

} else {
var statearr_46680_48153 = state_46668__$1;
(statearr_46680_48153[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46669 === (3))){
var inst_46666 = (state_46668[(2)]);
var state_46668__$1 = state_46668;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46668__$1,inst_46666);
} else {
if((state_val_46669 === (12))){
var inst_46643 = (state_46668[(10)]);
var state_46668__$1 = state_46668;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46668__$1,(14),inst_46643);
} else {
if((state_val_46669 === (2))){
var state_46668__$1 = state_46668;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46668__$1,(4),results);
} else {
if((state_val_46669 === (19))){
var state_46668__$1 = state_46668;
var statearr_46681_48157 = state_46668__$1;
(statearr_46681_48157[(2)] = null);

(statearr_46681_48157[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46669 === (11))){
var inst_46643 = (state_46668[(2)]);
var state_46668__$1 = (function (){var statearr_46682 = state_46668;
(statearr_46682[(10)] = inst_46643);

return statearr_46682;
})();
var statearr_46683_48161 = state_46668__$1;
(statearr_46683_48161[(2)] = null);

(statearr_46683_48161[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46669 === (9))){
var state_46668__$1 = state_46668;
var statearr_46684_48162 = state_46668__$1;
(statearr_46684_48162[(2)] = null);

(statearr_46684_48162[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46669 === (5))){
var state_46668__$1 = state_46668;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46685_48165 = state_46668__$1;
(statearr_46685_48165[(1)] = (8));

} else {
var statearr_46686_48166 = state_46668__$1;
(statearr_46686_48166[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46669 === (14))){
var inst_46646 = (state_46668[(8)]);
var inst_46646__$1 = (state_46668[(2)]);
var inst_46647 = (inst_46646__$1 == null);
var inst_46648 = cljs.core.not(inst_46647);
var state_46668__$1 = (function (){var statearr_46687 = state_46668;
(statearr_46687[(8)] = inst_46646__$1);

return statearr_46687;
})();
if(inst_46648){
var statearr_46688_48169 = state_46668__$1;
(statearr_46688_48169[(1)] = (15));

} else {
var statearr_46689_48170 = state_46668__$1;
(statearr_46689_48170[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46669 === (16))){
var state_46668__$1 = state_46668;
var statearr_46690_48171 = state_46668__$1;
(statearr_46690_48171[(2)] = false);

(statearr_46690_48171[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46669 === (10))){
var inst_46640 = (state_46668[(2)]);
var state_46668__$1 = state_46668;
var statearr_46691_48172 = state_46668__$1;
(statearr_46691_48172[(2)] = inst_46640);

(statearr_46691_48172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46669 === (18))){
var inst_46651 = (state_46668[(2)]);
var state_46668__$1 = state_46668;
var statearr_46692_48173 = state_46668__$1;
(statearr_46692_48173[(2)] = inst_46651);

(statearr_46692_48173[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46669 === (8))){
var inst_46637 = cljs.core.async.close_BANG_(to);
var state_46668__$1 = state_46668;
var statearr_46693_48179 = state_46668__$1;
(statearr_46693_48179[(2)] = inst_46637);

(statearr_46693_48179[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46216__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46216__auto____0 = (function (){
var statearr_46694 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46694[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46216__auto__);

(statearr_46694[(1)] = (1));

return statearr_46694;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46216__auto____1 = (function (state_46668){
while(true){
var ret_value__46217__auto__ = (function (){try{while(true){
var result__46218__auto__ = switch__46215__auto__(state_46668);
if(cljs.core.keyword_identical_QMARK_(result__46218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46218__auto__;
}
break;
}
}catch (e46695){if((e46695 instanceof Object)){
var ex__46219__auto__ = e46695;
var statearr_46696_48181 = state_46668;
(statearr_46696_48181[(5)] = ex__46219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46695;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48183 = state_46668;
state_46668 = G__48183;
continue;
} else {
return ret_value__46217__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46216__auto__ = function(state_46668){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46216__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46216__auto____1.call(this,state_46668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46216__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46216__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46216__auto__;
})()
})();
var state__46374__auto__ = (function (){var statearr_46697 = (f__46373__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46373__auto__.cljs$core$IFn$_invoke$arity$0() : f__46373__auto__.call(null));
(statearr_46697[(6)] = c__46372__auto__);

return statearr_46697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46374__auto__);
}));

return c__46372__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__46699 = arguments.length;
switch (G__46699) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__46701 = arguments.length;
switch (G__46701) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__46703 = arguments.length;
switch (G__46703) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__46372__auto___48209 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46373__auto__ = (function (){var switch__46215__auto__ = (function (state_46729){
var state_val_46730 = (state_46729[(1)]);
if((state_val_46730 === (7))){
var inst_46725 = (state_46729[(2)]);
var state_46729__$1 = state_46729;
var statearr_46731_48212 = state_46729__$1;
(statearr_46731_48212[(2)] = inst_46725);

(statearr_46731_48212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (1))){
var state_46729__$1 = state_46729;
var statearr_46732_48217 = state_46729__$1;
(statearr_46732_48217[(2)] = null);

(statearr_46732_48217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (4))){
var inst_46706 = (state_46729[(7)]);
var inst_46706__$1 = (state_46729[(2)]);
var inst_46707 = (inst_46706__$1 == null);
var state_46729__$1 = (function (){var statearr_46733 = state_46729;
(statearr_46733[(7)] = inst_46706__$1);

return statearr_46733;
})();
if(cljs.core.truth_(inst_46707)){
var statearr_46734_48220 = state_46729__$1;
(statearr_46734_48220[(1)] = (5));

} else {
var statearr_46735_48222 = state_46729__$1;
(statearr_46735_48222[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (13))){
var state_46729__$1 = state_46729;
var statearr_46736_48223 = state_46729__$1;
(statearr_46736_48223[(2)] = null);

(statearr_46736_48223[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (6))){
var inst_46706 = (state_46729[(7)]);
var inst_46712 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46706) : p.call(null,inst_46706));
var state_46729__$1 = state_46729;
if(cljs.core.truth_(inst_46712)){
var statearr_46737_48233 = state_46729__$1;
(statearr_46737_48233[(1)] = (9));

} else {
var statearr_46738_48234 = state_46729__$1;
(statearr_46738_48234[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (3))){
var inst_46727 = (state_46729[(2)]);
var state_46729__$1 = state_46729;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46729__$1,inst_46727);
} else {
if((state_val_46730 === (12))){
var state_46729__$1 = state_46729;
var statearr_46739_48243 = state_46729__$1;
(statearr_46739_48243[(2)] = null);

(statearr_46739_48243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (2))){
var state_46729__$1 = state_46729;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46729__$1,(4),ch);
} else {
if((state_val_46730 === (11))){
var inst_46706 = (state_46729[(7)]);
var inst_46716 = (state_46729[(2)]);
var state_46729__$1 = state_46729;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46729__$1,(8),inst_46716,inst_46706);
} else {
if((state_val_46730 === (9))){
var state_46729__$1 = state_46729;
var statearr_46740_48245 = state_46729__$1;
(statearr_46740_48245[(2)] = tc);

(statearr_46740_48245[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (5))){
var inst_46709 = cljs.core.async.close_BANG_(tc);
var inst_46710 = cljs.core.async.close_BANG_(fc);
var state_46729__$1 = (function (){var statearr_46741 = state_46729;
(statearr_46741[(8)] = inst_46709);

return statearr_46741;
})();
var statearr_46742_48250 = state_46729__$1;
(statearr_46742_48250[(2)] = inst_46710);

(statearr_46742_48250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (14))){
var inst_46723 = (state_46729[(2)]);
var state_46729__$1 = state_46729;
var statearr_46743_48251 = state_46729__$1;
(statearr_46743_48251[(2)] = inst_46723);

(statearr_46743_48251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (10))){
var state_46729__$1 = state_46729;
var statearr_46744_48253 = state_46729__$1;
(statearr_46744_48253[(2)] = fc);

(statearr_46744_48253[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (8))){
var inst_46718 = (state_46729[(2)]);
var state_46729__$1 = state_46729;
if(cljs.core.truth_(inst_46718)){
var statearr_46745_48254 = state_46729__$1;
(statearr_46745_48254[(1)] = (12));

} else {
var statearr_46746_48255 = state_46729__$1;
(statearr_46746_48255[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46216__auto__ = null;
var cljs$core$async$state_machine__46216__auto____0 = (function (){
var statearr_46747 = [null,null,null,null,null,null,null,null,null];
(statearr_46747[(0)] = cljs$core$async$state_machine__46216__auto__);

(statearr_46747[(1)] = (1));

return statearr_46747;
});
var cljs$core$async$state_machine__46216__auto____1 = (function (state_46729){
while(true){
var ret_value__46217__auto__ = (function (){try{while(true){
var result__46218__auto__ = switch__46215__auto__(state_46729);
if(cljs.core.keyword_identical_QMARK_(result__46218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46218__auto__;
}
break;
}
}catch (e46748){if((e46748 instanceof Object)){
var ex__46219__auto__ = e46748;
var statearr_46749_48266 = state_46729;
(statearr_46749_48266[(5)] = ex__46219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46748;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48267 = state_46729;
state_46729 = G__48267;
continue;
} else {
return ret_value__46217__auto__;
}
break;
}
});
cljs$core$async$state_machine__46216__auto__ = function(state_46729){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46216__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46216__auto____1.call(this,state_46729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46216__auto____0;
cljs$core$async$state_machine__46216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46216__auto____1;
return cljs$core$async$state_machine__46216__auto__;
})()
})();
var state__46374__auto__ = (function (){var statearr_46750 = (f__46373__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46373__auto__.cljs$core$IFn$_invoke$arity$0() : f__46373__auto__.call(null));
(statearr_46750[(6)] = c__46372__auto___48209);

return statearr_46750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46374__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__46372__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46373__auto__ = (function (){var switch__46215__auto__ = (function (state_46771){
var state_val_46772 = (state_46771[(1)]);
if((state_val_46772 === (7))){
var inst_46767 = (state_46771[(2)]);
var state_46771__$1 = state_46771;
var statearr_46773_48268 = state_46771__$1;
(statearr_46773_48268[(2)] = inst_46767);

(statearr_46773_48268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46772 === (1))){
var inst_46751 = init;
var state_46771__$1 = (function (){var statearr_46774 = state_46771;
(statearr_46774[(7)] = inst_46751);

return statearr_46774;
})();
var statearr_46775_48275 = state_46771__$1;
(statearr_46775_48275[(2)] = null);

(statearr_46775_48275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46772 === (4))){
var inst_46754 = (state_46771[(8)]);
var inst_46754__$1 = (state_46771[(2)]);
var inst_46755 = (inst_46754__$1 == null);
var state_46771__$1 = (function (){var statearr_46776 = state_46771;
(statearr_46776[(8)] = inst_46754__$1);

return statearr_46776;
})();
if(cljs.core.truth_(inst_46755)){
var statearr_46777_48276 = state_46771__$1;
(statearr_46777_48276[(1)] = (5));

} else {
var statearr_46778_48277 = state_46771__$1;
(statearr_46778_48277[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46772 === (6))){
var inst_46754 = (state_46771[(8)]);
var inst_46758 = (state_46771[(9)]);
var inst_46751 = (state_46771[(7)]);
var inst_46758__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_46751,inst_46754) : f.call(null,inst_46751,inst_46754));
var inst_46759 = cljs.core.reduced_QMARK_(inst_46758__$1);
var state_46771__$1 = (function (){var statearr_46779 = state_46771;
(statearr_46779[(9)] = inst_46758__$1);

return statearr_46779;
})();
if(inst_46759){
var statearr_46780_48278 = state_46771__$1;
(statearr_46780_48278[(1)] = (8));

} else {
var statearr_46781_48279 = state_46771__$1;
(statearr_46781_48279[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46772 === (3))){
var inst_46769 = (state_46771[(2)]);
var state_46771__$1 = state_46771;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46771__$1,inst_46769);
} else {
if((state_val_46772 === (2))){
var state_46771__$1 = state_46771;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46771__$1,(4),ch);
} else {
if((state_val_46772 === (9))){
var inst_46758 = (state_46771[(9)]);
var inst_46751 = inst_46758;
var state_46771__$1 = (function (){var statearr_46782 = state_46771;
(statearr_46782[(7)] = inst_46751);

return statearr_46782;
})();
var statearr_46783_48286 = state_46771__$1;
(statearr_46783_48286[(2)] = null);

(statearr_46783_48286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46772 === (5))){
var inst_46751 = (state_46771[(7)]);
var state_46771__$1 = state_46771;
var statearr_46784_48287 = state_46771__$1;
(statearr_46784_48287[(2)] = inst_46751);

(statearr_46784_48287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46772 === (10))){
var inst_46765 = (state_46771[(2)]);
var state_46771__$1 = state_46771;
var statearr_46785_48288 = state_46771__$1;
(statearr_46785_48288[(2)] = inst_46765);

(statearr_46785_48288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46772 === (8))){
var inst_46758 = (state_46771[(9)]);
var inst_46761 = cljs.core.deref(inst_46758);
var state_46771__$1 = state_46771;
var statearr_46786_48289 = state_46771__$1;
(statearr_46786_48289[(2)] = inst_46761);

(statearr_46786_48289[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__46216__auto__ = null;
var cljs$core$async$reduce_$_state_machine__46216__auto____0 = (function (){
var statearr_46787 = [null,null,null,null,null,null,null,null,null,null];
(statearr_46787[(0)] = cljs$core$async$reduce_$_state_machine__46216__auto__);

(statearr_46787[(1)] = (1));

return statearr_46787;
});
var cljs$core$async$reduce_$_state_machine__46216__auto____1 = (function (state_46771){
while(true){
var ret_value__46217__auto__ = (function (){try{while(true){
var result__46218__auto__ = switch__46215__auto__(state_46771);
if(cljs.core.keyword_identical_QMARK_(result__46218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46218__auto__;
}
break;
}
}catch (e46788){if((e46788 instanceof Object)){
var ex__46219__auto__ = e46788;
var statearr_46789_48293 = state_46771;
(statearr_46789_48293[(5)] = ex__46219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46788;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48294 = state_46771;
state_46771 = G__48294;
continue;
} else {
return ret_value__46217__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__46216__auto__ = function(state_46771){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__46216__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__46216__auto____1.call(this,state_46771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__46216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__46216__auto____0;
cljs$core$async$reduce_$_state_machine__46216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__46216__auto____1;
return cljs$core$async$reduce_$_state_machine__46216__auto__;
})()
})();
var state__46374__auto__ = (function (){var statearr_46790 = (f__46373__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46373__auto__.cljs$core$IFn$_invoke$arity$0() : f__46373__auto__.call(null));
(statearr_46790[(6)] = c__46372__auto__);

return statearr_46790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46374__auto__);
}));

return c__46372__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__46372__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46373__auto__ = (function (){var switch__46215__auto__ = (function (state_46796){
var state_val_46797 = (state_46796[(1)]);
if((state_val_46797 === (1))){
var inst_46791 = cljs.core.async.reduce(f__$1,init,ch);
var state_46796__$1 = state_46796;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46796__$1,(2),inst_46791);
} else {
if((state_val_46797 === (2))){
var inst_46793 = (state_46796[(2)]);
var inst_46794 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_46793) : f__$1.call(null,inst_46793));
var state_46796__$1 = state_46796;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46796__$1,inst_46794);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__46216__auto__ = null;
var cljs$core$async$transduce_$_state_machine__46216__auto____0 = (function (){
var statearr_46798 = [null,null,null,null,null,null,null];
(statearr_46798[(0)] = cljs$core$async$transduce_$_state_machine__46216__auto__);

(statearr_46798[(1)] = (1));

return statearr_46798;
});
var cljs$core$async$transduce_$_state_machine__46216__auto____1 = (function (state_46796){
while(true){
var ret_value__46217__auto__ = (function (){try{while(true){
var result__46218__auto__ = switch__46215__auto__(state_46796);
if(cljs.core.keyword_identical_QMARK_(result__46218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46218__auto__;
}
break;
}
}catch (e46799){if((e46799 instanceof Object)){
var ex__46219__auto__ = e46799;
var statearr_46800_48303 = state_46796;
(statearr_46800_48303[(5)] = ex__46219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46796);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46799;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48308 = state_46796;
state_46796 = G__48308;
continue;
} else {
return ret_value__46217__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__46216__auto__ = function(state_46796){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__46216__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__46216__auto____1.call(this,state_46796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__46216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__46216__auto____0;
cljs$core$async$transduce_$_state_machine__46216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__46216__auto____1;
return cljs$core$async$transduce_$_state_machine__46216__auto__;
})()
})();
var state__46374__auto__ = (function (){var statearr_46801 = (f__46373__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46373__auto__.cljs$core$IFn$_invoke$arity$0() : f__46373__auto__.call(null));
(statearr_46801[(6)] = c__46372__auto__);

return statearr_46801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46374__auto__);
}));

return c__46372__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__46803 = arguments.length;
switch (G__46803) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__46372__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46373__auto__ = (function (){var switch__46215__auto__ = (function (state_46828){
var state_val_46829 = (state_46828[(1)]);
if((state_val_46829 === (7))){
var inst_46810 = (state_46828[(2)]);
var state_46828__$1 = state_46828;
var statearr_46830_48313 = state_46828__$1;
(statearr_46830_48313[(2)] = inst_46810);

(statearr_46830_48313[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46829 === (1))){
var inst_46804 = cljs.core.seq(coll);
var inst_46805 = inst_46804;
var state_46828__$1 = (function (){var statearr_46831 = state_46828;
(statearr_46831[(7)] = inst_46805);

return statearr_46831;
})();
var statearr_46832_48314 = state_46828__$1;
(statearr_46832_48314[(2)] = null);

(statearr_46832_48314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46829 === (4))){
var inst_46805 = (state_46828[(7)]);
var inst_46808 = cljs.core.first(inst_46805);
var state_46828__$1 = state_46828;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46828__$1,(7),ch,inst_46808);
} else {
if((state_val_46829 === (13))){
var inst_46822 = (state_46828[(2)]);
var state_46828__$1 = state_46828;
var statearr_46833_48315 = state_46828__$1;
(statearr_46833_48315[(2)] = inst_46822);

(statearr_46833_48315[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46829 === (6))){
var inst_46813 = (state_46828[(2)]);
var state_46828__$1 = state_46828;
if(cljs.core.truth_(inst_46813)){
var statearr_46834_48318 = state_46828__$1;
(statearr_46834_48318[(1)] = (8));

} else {
var statearr_46835_48319 = state_46828__$1;
(statearr_46835_48319[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46829 === (3))){
var inst_46826 = (state_46828[(2)]);
var state_46828__$1 = state_46828;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46828__$1,inst_46826);
} else {
if((state_val_46829 === (12))){
var state_46828__$1 = state_46828;
var statearr_46836_48325 = state_46828__$1;
(statearr_46836_48325[(2)] = null);

(statearr_46836_48325[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46829 === (2))){
var inst_46805 = (state_46828[(7)]);
var state_46828__$1 = state_46828;
if(cljs.core.truth_(inst_46805)){
var statearr_46837_48326 = state_46828__$1;
(statearr_46837_48326[(1)] = (4));

} else {
var statearr_46838_48327 = state_46828__$1;
(statearr_46838_48327[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46829 === (11))){
var inst_46819 = cljs.core.async.close_BANG_(ch);
var state_46828__$1 = state_46828;
var statearr_46839_48328 = state_46828__$1;
(statearr_46839_48328[(2)] = inst_46819);

(statearr_46839_48328[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46829 === (9))){
var state_46828__$1 = state_46828;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46840_48330 = state_46828__$1;
(statearr_46840_48330[(1)] = (11));

} else {
var statearr_46841_48332 = state_46828__$1;
(statearr_46841_48332[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46829 === (5))){
var inst_46805 = (state_46828[(7)]);
var state_46828__$1 = state_46828;
var statearr_46842_48334 = state_46828__$1;
(statearr_46842_48334[(2)] = inst_46805);

(statearr_46842_48334[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46829 === (10))){
var inst_46824 = (state_46828[(2)]);
var state_46828__$1 = state_46828;
var statearr_46843_48335 = state_46828__$1;
(statearr_46843_48335[(2)] = inst_46824);

(statearr_46843_48335[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46829 === (8))){
var inst_46805 = (state_46828[(7)]);
var inst_46815 = cljs.core.next(inst_46805);
var inst_46805__$1 = inst_46815;
var state_46828__$1 = (function (){var statearr_46844 = state_46828;
(statearr_46844[(7)] = inst_46805__$1);

return statearr_46844;
})();
var statearr_46845_48336 = state_46828__$1;
(statearr_46845_48336[(2)] = null);

(statearr_46845_48336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46216__auto__ = null;
var cljs$core$async$state_machine__46216__auto____0 = (function (){
var statearr_46846 = [null,null,null,null,null,null,null,null];
(statearr_46846[(0)] = cljs$core$async$state_machine__46216__auto__);

(statearr_46846[(1)] = (1));

return statearr_46846;
});
var cljs$core$async$state_machine__46216__auto____1 = (function (state_46828){
while(true){
var ret_value__46217__auto__ = (function (){try{while(true){
var result__46218__auto__ = switch__46215__auto__(state_46828);
if(cljs.core.keyword_identical_QMARK_(result__46218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46218__auto__;
}
break;
}
}catch (e46847){if((e46847 instanceof Object)){
var ex__46219__auto__ = e46847;
var statearr_46848_48338 = state_46828;
(statearr_46848_48338[(5)] = ex__46219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46847;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48340 = state_46828;
state_46828 = G__48340;
continue;
} else {
return ret_value__46217__auto__;
}
break;
}
});
cljs$core$async$state_machine__46216__auto__ = function(state_46828){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46216__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46216__auto____1.call(this,state_46828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46216__auto____0;
cljs$core$async$state_machine__46216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46216__auto____1;
return cljs$core$async$state_machine__46216__auto__;
})()
})();
var state__46374__auto__ = (function (){var statearr_46849 = (f__46373__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46373__auto__.cljs$core$IFn$_invoke$arity$0() : f__46373__auto__.call(null));
(statearr_46849[(6)] = c__46372__auto__);

return statearr_46849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46374__auto__);
}));

return c__46372__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46850 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46850 = (function (ch,cs,meta46851){
this.ch = ch;
this.cs = cs;
this.meta46851 = meta46851;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46850.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46852,meta46851__$1){
var self__ = this;
var _46852__$1 = this;
return (new cljs.core.async.t_cljs$core$async46850(self__.ch,self__.cs,meta46851__$1));
}));

(cljs.core.async.t_cljs$core$async46850.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46852){
var self__ = this;
var _46852__$1 = this;
return self__.meta46851;
}));

(cljs.core.async.t_cljs$core$async46850.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46850.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async46850.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46850.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async46850.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async46850.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async46850.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta46851","meta46851",-201124494,null)], null);
}));

(cljs.core.async.t_cljs$core$async46850.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46850.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46850");

(cljs.core.async.t_cljs$core$async46850.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46850");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46850.
 */
cljs.core.async.__GT_t_cljs$core$async46850 = (function cljs$core$async$mult_$___GT_t_cljs$core$async46850(ch__$1,cs__$1,meta46851){
return (new cljs.core.async.t_cljs$core$async46850(ch__$1,cs__$1,meta46851));
});

}

return (new cljs.core.async.t_cljs$core$async46850(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__46372__auto___48366 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46373__auto__ = (function (){var switch__46215__auto__ = (function (state_46987){
var state_val_46988 = (state_46987[(1)]);
if((state_val_46988 === (7))){
var inst_46983 = (state_46987[(2)]);
var state_46987__$1 = state_46987;
var statearr_46989_48370 = state_46987__$1;
(statearr_46989_48370[(2)] = inst_46983);

(statearr_46989_48370[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46988 === (20))){
var inst_46886 = (state_46987[(7)]);
var inst_46898 = cljs.core.first(inst_46886);
var inst_46899 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46898,(0),null);
var inst_46900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46898,(1),null);
var state_46987__$1 = (function (){var statearr_46990 = state_46987;
(statearr_46990[(8)] = inst_46899);

return statearr_46990;
})();
if(cljs.core.truth_(inst_46900)){
var statearr_46991_48375 = state_46987__$1;
(statearr_46991_48375[(1)] = (22));

} else {
var statearr_46992_48379 = state_46987__$1;
(statearr_46992_48379[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46988 === (27))){
var inst_46928 = (state_46987[(9)]);
var inst_46930 = (state_46987[(10)]);
var inst_46855 = (state_46987[(11)]);
var inst_46935 = (state_46987[(12)]);
var inst_46935__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_46928,inst_46930);
var inst_46936 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_46935__$1,inst_46855,done);
var state_46987__$1 = (function (){var statearr_46993 = state_46987;
(statearr_46993[(12)] = inst_46935__$1);

return statearr_46993;
})();
if(cljs.core.truth_(inst_46936)){
var statearr_46994_48386 = state_46987__$1;
(statearr_46994_48386[(1)] = (30));

} else {
var statearr_46995_48387 = state_46987__$1;
(statearr_46995_48387[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46988 === (1))){
var state_46987__$1 = state_46987;
var statearr_46996_48389 = state_46987__$1;
(statearr_46996_48389[(2)] = null);

(statearr_46996_48389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46988 === (24))){
var inst_46886 = (state_46987[(7)]);
var inst_46905 = (state_46987[(2)]);
var inst_46906 = cljs.core.next(inst_46886);
var inst_46864 = inst_46906;
var inst_46865 = null;
var inst_46866 = (0);
var inst_46867 = (0);
var state_46987__$1 = (function (){var statearr_46997 = state_46987;
(statearr_46997[(13)] = inst_46864);

(statearr_46997[(14)] = inst_46905);

(statearr_46997[(15)] = inst_46866);

(statearr_46997[(16)] = inst_46865);

(statearr_46997[(17)] = inst_46867);

return statearr_46997;
})();
var statearr_46998_48391 = state_46987__$1;
(statearr_46998_48391[(2)] = null);

(statearr_46998_48391[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46988 === (39))){
var state_46987__$1 = state_46987;
var statearr_47002_48393 = state_46987__$1;
(statearr_47002_48393[(2)] = null);

(statearr_47002_48393[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46988 === (4))){
var inst_46855 = (state_46987[(11)]);
var inst_46855__$1 = (state_46987[(2)]);
var inst_46856 = (inst_46855__$1 == null);
var state_46987__$1 = (function (){var statearr_47003 = state_46987;
(statearr_47003[(11)] = inst_46855__$1);

return statearr_47003;
})();
if(cljs.core.truth_(inst_46856)){
var statearr_47004_48396 = state_46987__$1;
(statearr_47004_48396[(1)] = (5));

} else {
var statearr_47005_48397 = state_46987__$1;
(statearr_47005_48397[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46988 === (15))){
var inst_46864 = (state_46987[(13)]);
var inst_46866 = (state_46987[(15)]);
var inst_46865 = (state_46987[(16)]);
var inst_46867 = (state_46987[(17)]);
var inst_46882 = (state_46987[(2)]);
var inst_46883 = (inst_46867 + (1));
var tmp46999 = inst_46864;
var tmp47000 = inst_46866;
var tmp47001 = inst_46865;
var inst_46864__$1 = tmp46999;
var inst_46865__$1 = tmp47001;
var inst_46866__$1 = tmp47000;
var inst_46867__$1 = inst_46883;
var state_46987__$1 = (function (){var statearr_47006 = state_46987;
(statearr_47006[(18)] = inst_46882);

(statearr_47006[(13)] = inst_46864__$1);

(statearr_47006[(15)] = inst_46866__$1);

(statearr_47006[(16)] = inst_46865__$1);

(statearr_47006[(17)] = inst_46867__$1);

return statearr_47006;
})();
var statearr_47007_48403 = state_46987__$1;
(statearr_47007_48403[(2)] = null);

(statearr_47007_48403[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46988 === (21))){
var inst_46909 = (state_46987[(2)]);
var state_46987__$1 = state_46987;
var statearr_47011_48405 = state_46987__$1;
(statearr_47011_48405[(2)] = inst_46909);

(statearr_47011_48405[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46988 === (31))){
var inst_46935 = (state_46987[(12)]);
var inst_46939 = done(null);
var inst_46940 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_46935);
var state_46987__$1 = (function (){var statearr_47012 = state_46987;
(statearr_47012[(19)] = inst_46939);

return statearr_47012;
})();
var statearr_47013_48408 = state_46987__$1;
(statearr_47013_48408[(2)] = inst_46940);

(statearr_47013_48408[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46988 === (32))){
var inst_46928 = (state_46987[(9)]);
var inst_46929 = (state_46987[(20)]);
var inst_46930 = (state_46987[(10)]);
var inst_46927 = (state_46987[(21)]);
var inst_46942 = (state_46987[(2)]);
var inst_46943 = (inst_46930 + (1));
var tmp47008 = inst_46928;
var tmp47009 = inst_46929;
var tmp47010 = inst_46927;
var inst_46927__$1 = tmp47010;
var inst_46928__$1 = tmp47008;
var inst_46929__$1 = tmp47009;
var inst_46930__$1 = inst_46943;
var state_46987__$1 = (function (){var statearr_47014 = state_46987;
(statearr_47014[(9)] = inst_46928__$1);

(statearr_47014[(20)] = inst_46929__$1);

(statearr_47014[(10)] = inst_46930__$1);

(statearr_47014[(21)] = inst_46927__$1);

(statearr_47014[(22)] = inst_46942);

return statearr_47014;
})();
var statearr_47015_48409 = state_46987__$1;
(statearr_47015_48409[(2)] = null);

(statearr_47015_48409[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46988 === (40))){
var inst_46955 = (state_46987[(23)]);
var inst_46959 = done(null);
var inst_46960 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_46955);
var state_46987__$1 = (function (){var statearr_47016 = state_46987;
(statearr_47016[(24)] = inst_46959);

return statearr_47016;
})();
var statearr_47017_48414 = state_46987__$1;
(statearr_47017_48414[(2)] = inst_46960);

(statearr_47017_48414[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46988 === (33))){
var inst_46946 = (state_46987[(25)]);
var inst_46948 = cljs.core.chunked_seq_QMARK_(inst_46946);
var state_46987__$1 = state_46987;
if(inst_46948){
var statearr_47018_48415 = state_46987__$1;
(statearr_47018_48415[(1)] = (36));

} else {
var statearr_47019_48416 = state_46987__$1;
(statearr_47019_48416[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46988 === (13))){
var inst_46876 = (state_46987[(26)]);
var inst_46879 = cljs.core.async.close_BANG_(inst_46876);
var state_46987__$1 = state_46987;
var statearr_47020_48417 = state_46987__$1;
(statearr_47020_48417[(2)] = inst_46879);

(statearr_47020_48417[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46988 === (22))){
var inst_46899 = (state_46987[(8)]);
var inst_46902 = cljs.core.async.close_BANG_(inst_46899);
var state_46987__$1 = state_46987;
var statearr_47021_48418 = state_46987__$1;
(statearr_47021_48418[(2)] = inst_46902);

(statearr_47021_48418[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46988 === (36))){
var inst_46946 = (state_46987[(25)]);
var inst_46950 = cljs.core.chunk_first(inst_46946);
var inst_46951 = cljs.core.chunk_rest(inst_46946);
var inst_46952 = cljs.core.count(inst_46950);
var inst_46927 = inst_46951;
var inst_46928 = inst_46950;
var inst_46929 = inst_46952;
var inst_46930 = (0);
var state_46987__$1 = (function (){var statearr_47022 = state_46987;
(statearr_47022[(9)] = inst_46928);

(statearr_47022[(20)] = inst_46929);

(statearr_47022[(10)] = inst_46930);

(statearr_47022[(21)] = inst_46927);

return statearr_47022;
})();
var statearr_47023_48424 = state_46987__$1;
(statearr_47023_48424[(2)] = null);

(statearr_47023_48424[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46988 === (41))){
var inst_46946 = (state_46987[(25)]);
var inst_46962 = (state_46987[(2)]);
var inst_46963 = cljs.core.next(inst_46946);
var inst_46927 = inst_46963;
var inst_46928 = null;
var inst_46929 = (0);
var inst_46930 = (0);
var state_46987__$1 = (function (){var statearr_47024 = state_46987;
(statearr_47024[(9)] = inst_46928);

(statearr_47024[(20)] = inst_46929);

(statearr_47024[(10)] = inst_46930);

(statearr_47024[(21)] = inst_46927);

(statearr_47024[(27)] = inst_46962);

return statearr_47024;
})();
var statearr_47025_48426 = state_46987__$1;
(statearr_47025_48426[(2)] = null);

(statearr_47025_48426[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46988 === (43))){
var state_46987__$1 = state_46987;
var statearr_47026_48431 = state_46987__$1;
(statearr_47026_48431[(2)] = null);

(statearr_47026_48431[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46988 === (29))){
var inst_46971 = (state_46987[(2)]);
var state_46987__$1 = state_46987;
var statearr_47027_48432 = state_46987__$1;
(statearr_47027_48432[(2)] = inst_46971);

(statearr_47027_48432[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46988 === (44))){
var inst_46980 = (state_46987[(2)]);
var state_46987__$1 = (function (){var statearr_47028 = state_46987;
(statearr_47028[(28)] = inst_46980);

return statearr_47028;
})();
var statearr_47029_48433 = state_46987__$1;
(statearr_47029_48433[(2)] = null);

(statearr_47029_48433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46988 === (6))){
var inst_46919 = (state_46987[(29)]);
var inst_46918 = cljs.core.deref(cs);
var inst_46919__$1 = cljs.core.keys(inst_46918);
var inst_46920 = cljs.core.count(inst_46919__$1);
var inst_46921 = cljs.core.reset_BANG_(dctr,inst_46920);
var inst_46926 = cljs.core.seq(inst_46919__$1);
var inst_46927 = inst_46926;
var inst_46928 = null;
var inst_46929 = (0);
var inst_46930 = (0);
var state_46987__$1 = (function (){var statearr_47030 = state_46987;
(statearr_47030[(9)] = inst_46928);

(statearr_47030[(20)] = inst_46929);

(statearr_47030[(10)] = inst_46930);

(statearr_47030[(29)] = inst_46919__$1);

(statearr_47030[(21)] = inst_46927);

(statearr_47030[(30)] = inst_46921);

return statearr_47030;
})();
var statearr_47031_48436 = state_46987__$1;
(statearr_47031_48436[(2)] = null);

(statearr_47031_48436[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46988 === (28))){
var inst_46946 = (state_46987[(25)]);
var inst_46927 = (state_46987[(21)]);
var inst_46946__$1 = cljs.core.seq(inst_46927);
var state_46987__$1 = (function (){var statearr_47032 = state_46987;
(statearr_47032[(25)] = inst_46946__$1);

return statearr_47032;
})();
if(inst_46946__$1){
var statearr_47033_48437 = state_46987__$1;
(statearr_47033_48437[(1)] = (33));

} else {
var statearr_47034_48438 = state_46987__$1;
(statearr_47034_48438[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46988 === (25))){
var inst_46929 = (state_46987[(20)]);
var inst_46930 = (state_46987[(10)]);
var inst_46932 = (inst_46930 < inst_46929);
var inst_46933 = inst_46932;
var state_46987__$1 = state_46987;
if(cljs.core.truth_(inst_46933)){
var statearr_47035_48439 = state_46987__$1;
(statearr_47035_48439[(1)] = (27));

} else {
var statearr_47036_48440 = state_46987__$1;
(statearr_47036_48440[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46988 === (34))){
var state_46987__$1 = state_46987;
var statearr_47037_48441 = state_46987__$1;
(statearr_47037_48441[(2)] = null);

(statearr_47037_48441[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46988 === (17))){
var state_46987__$1 = state_46987;
var statearr_47038_48442 = state_46987__$1;
(statearr_47038_48442[(2)] = null);

(statearr_47038_48442[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46988 === (3))){
var inst_46985 = (state_46987[(2)]);
var state_46987__$1 = state_46987;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46987__$1,inst_46985);
} else {
if((state_val_46988 === (12))){
var inst_46914 = (state_46987[(2)]);
var state_46987__$1 = state_46987;
var statearr_47039_48443 = state_46987__$1;
(statearr_47039_48443[(2)] = inst_46914);

(statearr_47039_48443[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46988 === (2))){
var state_46987__$1 = state_46987;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46987__$1,(4),ch);
} else {
if((state_val_46988 === (23))){
var state_46987__$1 = state_46987;
var statearr_47040_48444 = state_46987__$1;
(statearr_47040_48444[(2)] = null);

(statearr_47040_48444[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46988 === (35))){
var inst_46969 = (state_46987[(2)]);
var state_46987__$1 = state_46987;
var statearr_47041_48445 = state_46987__$1;
(statearr_47041_48445[(2)] = inst_46969);

(statearr_47041_48445[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46988 === (19))){
var inst_46886 = (state_46987[(7)]);
var inst_46890 = cljs.core.chunk_first(inst_46886);
var inst_46891 = cljs.core.chunk_rest(inst_46886);
var inst_46892 = cljs.core.count(inst_46890);
var inst_46864 = inst_46891;
var inst_46865 = inst_46890;
var inst_46866 = inst_46892;
var inst_46867 = (0);
var state_46987__$1 = (function (){var statearr_47042 = state_46987;
(statearr_47042[(13)] = inst_46864);

(statearr_47042[(15)] = inst_46866);

(statearr_47042[(16)] = inst_46865);

(statearr_47042[(17)] = inst_46867);

return statearr_47042;
})();
var statearr_47043_48449 = state_46987__$1;
(statearr_47043_48449[(2)] = null);

(statearr_47043_48449[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46988 === (11))){
var inst_46864 = (state_46987[(13)]);
var inst_46886 = (state_46987[(7)]);
var inst_46886__$1 = cljs.core.seq(inst_46864);
var state_46987__$1 = (function (){var statearr_47044 = state_46987;
(statearr_47044[(7)] = inst_46886__$1);

return statearr_47044;
})();
if(inst_46886__$1){
var statearr_47045_48450 = state_46987__$1;
(statearr_47045_48450[(1)] = (16));

} else {
var statearr_47046_48451 = state_46987__$1;
(statearr_47046_48451[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46988 === (9))){
var inst_46916 = (state_46987[(2)]);
var state_46987__$1 = state_46987;
var statearr_47047_48452 = state_46987__$1;
(statearr_47047_48452[(2)] = inst_46916);

(statearr_47047_48452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46988 === (5))){
var inst_46862 = cljs.core.deref(cs);
var inst_46863 = cljs.core.seq(inst_46862);
var inst_46864 = inst_46863;
var inst_46865 = null;
var inst_46866 = (0);
var inst_46867 = (0);
var state_46987__$1 = (function (){var statearr_47048 = state_46987;
(statearr_47048[(13)] = inst_46864);

(statearr_47048[(15)] = inst_46866);

(statearr_47048[(16)] = inst_46865);

(statearr_47048[(17)] = inst_46867);

return statearr_47048;
})();
var statearr_47049_48453 = state_46987__$1;
(statearr_47049_48453[(2)] = null);

(statearr_47049_48453[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46988 === (14))){
var state_46987__$1 = state_46987;
var statearr_47050_48454 = state_46987__$1;
(statearr_47050_48454[(2)] = null);

(statearr_47050_48454[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46988 === (45))){
var inst_46977 = (state_46987[(2)]);
var state_46987__$1 = state_46987;
var statearr_47051_48455 = state_46987__$1;
(statearr_47051_48455[(2)] = inst_46977);

(statearr_47051_48455[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46988 === (26))){
var inst_46919 = (state_46987[(29)]);
var inst_46973 = (state_46987[(2)]);
var inst_46974 = cljs.core.seq(inst_46919);
var state_46987__$1 = (function (){var statearr_47052 = state_46987;
(statearr_47052[(31)] = inst_46973);

return statearr_47052;
})();
if(inst_46974){
var statearr_47053_48456 = state_46987__$1;
(statearr_47053_48456[(1)] = (42));

} else {
var statearr_47054_48457 = state_46987__$1;
(statearr_47054_48457[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46988 === (16))){
var inst_46886 = (state_46987[(7)]);
var inst_46888 = cljs.core.chunked_seq_QMARK_(inst_46886);
var state_46987__$1 = state_46987;
if(inst_46888){
var statearr_47055_48461 = state_46987__$1;
(statearr_47055_48461[(1)] = (19));

} else {
var statearr_47056_48464 = state_46987__$1;
(statearr_47056_48464[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46988 === (38))){
var inst_46966 = (state_46987[(2)]);
var state_46987__$1 = state_46987;
var statearr_47057_48467 = state_46987__$1;
(statearr_47057_48467[(2)] = inst_46966);

(statearr_47057_48467[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46988 === (30))){
var state_46987__$1 = state_46987;
var statearr_47058_48468 = state_46987__$1;
(statearr_47058_48468[(2)] = null);

(statearr_47058_48468[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46988 === (10))){
var inst_46865 = (state_46987[(16)]);
var inst_46867 = (state_46987[(17)]);
var inst_46875 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_46865,inst_46867);
var inst_46876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46875,(0),null);
var inst_46877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46875,(1),null);
var state_46987__$1 = (function (){var statearr_47059 = state_46987;
(statearr_47059[(26)] = inst_46876);

return statearr_47059;
})();
if(cljs.core.truth_(inst_46877)){
var statearr_47060_48469 = state_46987__$1;
(statearr_47060_48469[(1)] = (13));

} else {
var statearr_47061_48470 = state_46987__$1;
(statearr_47061_48470[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46988 === (18))){
var inst_46912 = (state_46987[(2)]);
var state_46987__$1 = state_46987;
var statearr_47062_48472 = state_46987__$1;
(statearr_47062_48472[(2)] = inst_46912);

(statearr_47062_48472[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46988 === (42))){
var state_46987__$1 = state_46987;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46987__$1,(45),dchan);
} else {
if((state_val_46988 === (37))){
var inst_46946 = (state_46987[(25)]);
var inst_46955 = (state_46987[(23)]);
var inst_46855 = (state_46987[(11)]);
var inst_46955__$1 = cljs.core.first(inst_46946);
var inst_46956 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_46955__$1,inst_46855,done);
var state_46987__$1 = (function (){var statearr_47063 = state_46987;
(statearr_47063[(23)] = inst_46955__$1);

return statearr_47063;
})();
if(cljs.core.truth_(inst_46956)){
var statearr_47064_48474 = state_46987__$1;
(statearr_47064_48474[(1)] = (39));

} else {
var statearr_47065_48475 = state_46987__$1;
(statearr_47065_48475[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46988 === (8))){
var inst_46866 = (state_46987[(15)]);
var inst_46867 = (state_46987[(17)]);
var inst_46869 = (inst_46867 < inst_46866);
var inst_46870 = inst_46869;
var state_46987__$1 = state_46987;
if(cljs.core.truth_(inst_46870)){
var statearr_47066_48476 = state_46987__$1;
(statearr_47066_48476[(1)] = (10));

} else {
var statearr_47067_48477 = state_46987__$1;
(statearr_47067_48477[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__46216__auto__ = null;
var cljs$core$async$mult_$_state_machine__46216__auto____0 = (function (){
var statearr_47068 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47068[(0)] = cljs$core$async$mult_$_state_machine__46216__auto__);

(statearr_47068[(1)] = (1));

return statearr_47068;
});
var cljs$core$async$mult_$_state_machine__46216__auto____1 = (function (state_46987){
while(true){
var ret_value__46217__auto__ = (function (){try{while(true){
var result__46218__auto__ = switch__46215__auto__(state_46987);
if(cljs.core.keyword_identical_QMARK_(result__46218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46218__auto__;
}
break;
}
}catch (e47069){if((e47069 instanceof Object)){
var ex__46219__auto__ = e47069;
var statearr_47070_48478 = state_46987;
(statearr_47070_48478[(5)] = ex__46219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46987);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47069;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48479 = state_46987;
state_46987 = G__48479;
continue;
} else {
return ret_value__46217__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__46216__auto__ = function(state_46987){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__46216__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__46216__auto____1.call(this,state_46987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__46216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__46216__auto____0;
cljs$core$async$mult_$_state_machine__46216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__46216__auto____1;
return cljs$core$async$mult_$_state_machine__46216__auto__;
})()
})();
var state__46374__auto__ = (function (){var statearr_47071 = (f__46373__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46373__auto__.cljs$core$IFn$_invoke$arity$0() : f__46373__auto__.call(null));
(statearr_47071[(6)] = c__46372__auto___48366);

return statearr_47071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46374__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__47073 = arguments.length;
switch (G__47073) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___48494 = arguments.length;
var i__4790__auto___48495 = (0);
while(true){
if((i__4790__auto___48495 < len__4789__auto___48494)){
args__4795__auto__.push((arguments[i__4790__auto___48495]));

var G__48496 = (i__4790__auto___48495 + (1));
i__4790__auto___48495 = G__48496;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__47078){
var map__47079 = p__47078;
var map__47079__$1 = (((((!((map__47079 == null))))?(((((map__47079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47079):map__47079);
var opts = map__47079__$1;
var statearr_47081_48499 = state;
(statearr_47081_48499[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_47082_48502 = state;
(statearr_47082_48502[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_47083_48504 = state;
(statearr_47083_48504[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq47074){
var G__47075 = cljs.core.first(seq47074);
var seq47074__$1 = cljs.core.next(seq47074);
var G__47076 = cljs.core.first(seq47074__$1);
var seq47074__$2 = cljs.core.next(seq47074__$1);
var G__47077 = cljs.core.first(seq47074__$2);
var seq47074__$3 = cljs.core.next(seq47074__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47075,G__47076,G__47077,seq47074__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47084 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47084 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta47085){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta47085 = meta47085;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47084.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47086,meta47085__$1){
var self__ = this;
var _47086__$1 = this;
return (new cljs.core.async.t_cljs$core$async47084(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta47085__$1));
}));

(cljs.core.async.t_cljs$core$async47084.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47086){
var self__ = this;
var _47086__$1 = this;
return self__.meta47085;
}));

(cljs.core.async.t_cljs$core$async47084.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47084.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async47084.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47084.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47084.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47084.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47084.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47084.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47084.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta47085","meta47085",-631489233,null)], null);
}));

(cljs.core.async.t_cljs$core$async47084.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47084.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47084");

(cljs.core.async.t_cljs$core$async47084.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47084");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47084.
 */
cljs.core.async.__GT_t_cljs$core$async47084 = (function cljs$core$async$mix_$___GT_t_cljs$core$async47084(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47085){
return (new cljs.core.async.t_cljs$core$async47084(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47085));
});

}

return (new cljs.core.async.t_cljs$core$async47084(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46372__auto___48510 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46373__auto__ = (function (){var switch__46215__auto__ = (function (state_47188){
var state_val_47189 = (state_47188[(1)]);
if((state_val_47189 === (7))){
var inst_47103 = (state_47188[(2)]);
var state_47188__$1 = state_47188;
var statearr_47190_48511 = state_47188__$1;
(statearr_47190_48511[(2)] = inst_47103);

(statearr_47190_48511[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47189 === (20))){
var inst_47115 = (state_47188[(7)]);
var state_47188__$1 = state_47188;
var statearr_47191_48512 = state_47188__$1;
(statearr_47191_48512[(2)] = inst_47115);

(statearr_47191_48512[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47189 === (27))){
var state_47188__$1 = state_47188;
var statearr_47192_48513 = state_47188__$1;
(statearr_47192_48513[(2)] = null);

(statearr_47192_48513[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47189 === (1))){
var inst_47090 = (state_47188[(8)]);
var inst_47090__$1 = calc_state();
var inst_47092 = (inst_47090__$1 == null);
var inst_47093 = cljs.core.not(inst_47092);
var state_47188__$1 = (function (){var statearr_47193 = state_47188;
(statearr_47193[(8)] = inst_47090__$1);

return statearr_47193;
})();
if(inst_47093){
var statearr_47194_48514 = state_47188__$1;
(statearr_47194_48514[(1)] = (2));

} else {
var statearr_47195_48515 = state_47188__$1;
(statearr_47195_48515[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47189 === (24))){
var inst_47139 = (state_47188[(9)]);
var inst_47162 = (state_47188[(10)]);
var inst_47148 = (state_47188[(11)]);
var inst_47162__$1 = (inst_47139.cljs$core$IFn$_invoke$arity$1 ? inst_47139.cljs$core$IFn$_invoke$arity$1(inst_47148) : inst_47139.call(null,inst_47148));
var state_47188__$1 = (function (){var statearr_47196 = state_47188;
(statearr_47196[(10)] = inst_47162__$1);

return statearr_47196;
})();
if(cljs.core.truth_(inst_47162__$1)){
var statearr_47197_48516 = state_47188__$1;
(statearr_47197_48516[(1)] = (29));

} else {
var statearr_47198_48517 = state_47188__$1;
(statearr_47198_48517[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47189 === (4))){
var inst_47106 = (state_47188[(2)]);
var state_47188__$1 = state_47188;
if(cljs.core.truth_(inst_47106)){
var statearr_47199_48521 = state_47188__$1;
(statearr_47199_48521[(1)] = (8));

} else {
var statearr_47200_48524 = state_47188__$1;
(statearr_47200_48524[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47189 === (15))){
var inst_47133 = (state_47188[(2)]);
var state_47188__$1 = state_47188;
if(cljs.core.truth_(inst_47133)){
var statearr_47201_48527 = state_47188__$1;
(statearr_47201_48527[(1)] = (19));

} else {
var statearr_47202_48528 = state_47188__$1;
(statearr_47202_48528[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47189 === (21))){
var inst_47138 = (state_47188[(12)]);
var inst_47138__$1 = (state_47188[(2)]);
var inst_47139 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47138__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47140 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47138__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47141 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47138__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_47188__$1 = (function (){var statearr_47203 = state_47188;
(statearr_47203[(13)] = inst_47140);

(statearr_47203[(9)] = inst_47139);

(statearr_47203[(12)] = inst_47138__$1);

return statearr_47203;
})();
return cljs.core.async.ioc_alts_BANG_(state_47188__$1,(22),inst_47141);
} else {
if((state_val_47189 === (31))){
var inst_47170 = (state_47188[(2)]);
var state_47188__$1 = state_47188;
if(cljs.core.truth_(inst_47170)){
var statearr_47204_48529 = state_47188__$1;
(statearr_47204_48529[(1)] = (32));

} else {
var statearr_47205_48530 = state_47188__$1;
(statearr_47205_48530[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47189 === (32))){
var inst_47147 = (state_47188[(14)]);
var state_47188__$1 = state_47188;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47188__$1,(35),out,inst_47147);
} else {
if((state_val_47189 === (33))){
var inst_47138 = (state_47188[(12)]);
var inst_47115 = inst_47138;
var state_47188__$1 = (function (){var statearr_47206 = state_47188;
(statearr_47206[(7)] = inst_47115);

return statearr_47206;
})();
var statearr_47207_48531 = state_47188__$1;
(statearr_47207_48531[(2)] = null);

(statearr_47207_48531[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47189 === (13))){
var inst_47115 = (state_47188[(7)]);
var inst_47122 = inst_47115.cljs$lang$protocol_mask$partition0$;
var inst_47123 = (inst_47122 & (64));
var inst_47124 = inst_47115.cljs$core$ISeq$;
var inst_47125 = (cljs.core.PROTOCOL_SENTINEL === inst_47124);
var inst_47126 = ((inst_47123) || (inst_47125));
var state_47188__$1 = state_47188;
if(cljs.core.truth_(inst_47126)){
var statearr_47208_48532 = state_47188__$1;
(statearr_47208_48532[(1)] = (16));

} else {
var statearr_47209_48533 = state_47188__$1;
(statearr_47209_48533[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47189 === (22))){
var inst_47148 = (state_47188[(11)]);
var inst_47147 = (state_47188[(14)]);
var inst_47146 = (state_47188[(2)]);
var inst_47147__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47146,(0),null);
var inst_47148__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47146,(1),null);
var inst_47149 = (inst_47147__$1 == null);
var inst_47150 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47148__$1,change);
var inst_47151 = ((inst_47149) || (inst_47150));
var state_47188__$1 = (function (){var statearr_47210 = state_47188;
(statearr_47210[(11)] = inst_47148__$1);

(statearr_47210[(14)] = inst_47147__$1);

return statearr_47210;
})();
if(cljs.core.truth_(inst_47151)){
var statearr_47211_48534 = state_47188__$1;
(statearr_47211_48534[(1)] = (23));

} else {
var statearr_47212_48535 = state_47188__$1;
(statearr_47212_48535[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47189 === (36))){
var inst_47138 = (state_47188[(12)]);
var inst_47115 = inst_47138;
var state_47188__$1 = (function (){var statearr_47213 = state_47188;
(statearr_47213[(7)] = inst_47115);

return statearr_47213;
})();
var statearr_47214_48536 = state_47188__$1;
(statearr_47214_48536[(2)] = null);

(statearr_47214_48536[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47189 === (29))){
var inst_47162 = (state_47188[(10)]);
var state_47188__$1 = state_47188;
var statearr_47215_48537 = state_47188__$1;
(statearr_47215_48537[(2)] = inst_47162);

(statearr_47215_48537[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47189 === (6))){
var state_47188__$1 = state_47188;
var statearr_47216_48539 = state_47188__$1;
(statearr_47216_48539[(2)] = false);

(statearr_47216_48539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47189 === (28))){
var inst_47158 = (state_47188[(2)]);
var inst_47159 = calc_state();
var inst_47115 = inst_47159;
var state_47188__$1 = (function (){var statearr_47217 = state_47188;
(statearr_47217[(15)] = inst_47158);

(statearr_47217[(7)] = inst_47115);

return statearr_47217;
})();
var statearr_47218_48540 = state_47188__$1;
(statearr_47218_48540[(2)] = null);

(statearr_47218_48540[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47189 === (25))){
var inst_47184 = (state_47188[(2)]);
var state_47188__$1 = state_47188;
var statearr_47219_48542 = state_47188__$1;
(statearr_47219_48542[(2)] = inst_47184);

(statearr_47219_48542[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47189 === (34))){
var inst_47182 = (state_47188[(2)]);
var state_47188__$1 = state_47188;
var statearr_47220_48543 = state_47188__$1;
(statearr_47220_48543[(2)] = inst_47182);

(statearr_47220_48543[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47189 === (17))){
var state_47188__$1 = state_47188;
var statearr_47221_48544 = state_47188__$1;
(statearr_47221_48544[(2)] = false);

(statearr_47221_48544[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47189 === (3))){
var state_47188__$1 = state_47188;
var statearr_47222_48545 = state_47188__$1;
(statearr_47222_48545[(2)] = false);

(statearr_47222_48545[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47189 === (12))){
var inst_47186 = (state_47188[(2)]);
var state_47188__$1 = state_47188;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47188__$1,inst_47186);
} else {
if((state_val_47189 === (2))){
var inst_47090 = (state_47188[(8)]);
var inst_47095 = inst_47090.cljs$lang$protocol_mask$partition0$;
var inst_47096 = (inst_47095 & (64));
var inst_47097 = inst_47090.cljs$core$ISeq$;
var inst_47098 = (cljs.core.PROTOCOL_SENTINEL === inst_47097);
var inst_47099 = ((inst_47096) || (inst_47098));
var state_47188__$1 = state_47188;
if(cljs.core.truth_(inst_47099)){
var statearr_47223_48548 = state_47188__$1;
(statearr_47223_48548[(1)] = (5));

} else {
var statearr_47224_48549 = state_47188__$1;
(statearr_47224_48549[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47189 === (23))){
var inst_47147 = (state_47188[(14)]);
var inst_47153 = (inst_47147 == null);
var state_47188__$1 = state_47188;
if(cljs.core.truth_(inst_47153)){
var statearr_47225_48550 = state_47188__$1;
(statearr_47225_48550[(1)] = (26));

} else {
var statearr_47226_48551 = state_47188__$1;
(statearr_47226_48551[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47189 === (35))){
var inst_47173 = (state_47188[(2)]);
var state_47188__$1 = state_47188;
if(cljs.core.truth_(inst_47173)){
var statearr_47227_48553 = state_47188__$1;
(statearr_47227_48553[(1)] = (36));

} else {
var statearr_47228_48554 = state_47188__$1;
(statearr_47228_48554[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47189 === (19))){
var inst_47115 = (state_47188[(7)]);
var inst_47135 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_47115);
var state_47188__$1 = state_47188;
var statearr_47229_48555 = state_47188__$1;
(statearr_47229_48555[(2)] = inst_47135);

(statearr_47229_48555[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47189 === (11))){
var inst_47115 = (state_47188[(7)]);
var inst_47119 = (inst_47115 == null);
var inst_47120 = cljs.core.not(inst_47119);
var state_47188__$1 = state_47188;
if(inst_47120){
var statearr_47230_48556 = state_47188__$1;
(statearr_47230_48556[(1)] = (13));

} else {
var statearr_47231_48558 = state_47188__$1;
(statearr_47231_48558[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47189 === (9))){
var inst_47090 = (state_47188[(8)]);
var state_47188__$1 = state_47188;
var statearr_47232_48559 = state_47188__$1;
(statearr_47232_48559[(2)] = inst_47090);

(statearr_47232_48559[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47189 === (5))){
var state_47188__$1 = state_47188;
var statearr_47233_48561 = state_47188__$1;
(statearr_47233_48561[(2)] = true);

(statearr_47233_48561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47189 === (14))){
var state_47188__$1 = state_47188;
var statearr_47234_48562 = state_47188__$1;
(statearr_47234_48562[(2)] = false);

(statearr_47234_48562[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47189 === (26))){
var inst_47148 = (state_47188[(11)]);
var inst_47155 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_47148);
var state_47188__$1 = state_47188;
var statearr_47235_48563 = state_47188__$1;
(statearr_47235_48563[(2)] = inst_47155);

(statearr_47235_48563[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47189 === (16))){
var state_47188__$1 = state_47188;
var statearr_47236_48564 = state_47188__$1;
(statearr_47236_48564[(2)] = true);

(statearr_47236_48564[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47189 === (38))){
var inst_47178 = (state_47188[(2)]);
var state_47188__$1 = state_47188;
var statearr_47237_48565 = state_47188__$1;
(statearr_47237_48565[(2)] = inst_47178);

(statearr_47237_48565[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47189 === (30))){
var inst_47140 = (state_47188[(13)]);
var inst_47139 = (state_47188[(9)]);
var inst_47148 = (state_47188[(11)]);
var inst_47165 = cljs.core.empty_QMARK_(inst_47139);
var inst_47166 = (inst_47140.cljs$core$IFn$_invoke$arity$1 ? inst_47140.cljs$core$IFn$_invoke$arity$1(inst_47148) : inst_47140.call(null,inst_47148));
var inst_47167 = cljs.core.not(inst_47166);
var inst_47168 = ((inst_47165) && (inst_47167));
var state_47188__$1 = state_47188;
var statearr_47238_48570 = state_47188__$1;
(statearr_47238_48570[(2)] = inst_47168);

(statearr_47238_48570[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47189 === (10))){
var inst_47090 = (state_47188[(8)]);
var inst_47111 = (state_47188[(2)]);
var inst_47112 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47111,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47113 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47111,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47114 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47111,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_47115 = inst_47090;
var state_47188__$1 = (function (){var statearr_47239 = state_47188;
(statearr_47239[(16)] = inst_47112);

(statearr_47239[(17)] = inst_47114);

(statearr_47239[(7)] = inst_47115);

(statearr_47239[(18)] = inst_47113);

return statearr_47239;
})();
var statearr_47240_48571 = state_47188__$1;
(statearr_47240_48571[(2)] = null);

(statearr_47240_48571[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47189 === (18))){
var inst_47130 = (state_47188[(2)]);
var state_47188__$1 = state_47188;
var statearr_47241_48572 = state_47188__$1;
(statearr_47241_48572[(2)] = inst_47130);

(statearr_47241_48572[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47189 === (37))){
var state_47188__$1 = state_47188;
var statearr_47242_48575 = state_47188__$1;
(statearr_47242_48575[(2)] = null);

(statearr_47242_48575[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47189 === (8))){
var inst_47090 = (state_47188[(8)]);
var inst_47108 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_47090);
var state_47188__$1 = state_47188;
var statearr_47243_48576 = state_47188__$1;
(statearr_47243_48576[(2)] = inst_47108);

(statearr_47243_48576[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__46216__auto__ = null;
var cljs$core$async$mix_$_state_machine__46216__auto____0 = (function (){
var statearr_47244 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47244[(0)] = cljs$core$async$mix_$_state_machine__46216__auto__);

(statearr_47244[(1)] = (1));

return statearr_47244;
});
var cljs$core$async$mix_$_state_machine__46216__auto____1 = (function (state_47188){
while(true){
var ret_value__46217__auto__ = (function (){try{while(true){
var result__46218__auto__ = switch__46215__auto__(state_47188);
if(cljs.core.keyword_identical_QMARK_(result__46218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46218__auto__;
}
break;
}
}catch (e47245){if((e47245 instanceof Object)){
var ex__46219__auto__ = e47245;
var statearr_47246_48582 = state_47188;
(statearr_47246_48582[(5)] = ex__46219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47188);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47245;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48583 = state_47188;
state_47188 = G__48583;
continue;
} else {
return ret_value__46217__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__46216__auto__ = function(state_47188){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__46216__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__46216__auto____1.call(this,state_47188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__46216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__46216__auto____0;
cljs$core$async$mix_$_state_machine__46216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__46216__auto____1;
return cljs$core$async$mix_$_state_machine__46216__auto__;
})()
})();
var state__46374__auto__ = (function (){var statearr_47247 = (f__46373__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46373__auto__.cljs$core$IFn$_invoke$arity$0() : f__46373__auto__.call(null));
(statearr_47247[(6)] = c__46372__auto___48510);

return statearr_47247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46374__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__47249 = arguments.length;
switch (G__47249) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__47252 = arguments.length;
switch (G__47252) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__47250_SHARP_){
if(cljs.core.truth_((p1__47250_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__47250_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__47250_SHARP_.call(null,topic)))){
return p1__47250_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__47250_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47253 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47253 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta47254){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta47254 = meta47254;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47253.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47255,meta47254__$1){
var self__ = this;
var _47255__$1 = this;
return (new cljs.core.async.t_cljs$core$async47253(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta47254__$1));
}));

(cljs.core.async.t_cljs$core$async47253.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47255){
var self__ = this;
var _47255__$1 = this;
return self__.meta47254;
}));

(cljs.core.async.t_cljs$core$async47253.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47253.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async47253.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47253.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async47253.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async47253.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async47253.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async47253.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta47254","meta47254",-961545623,null)], null);
}));

(cljs.core.async.t_cljs$core$async47253.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47253.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47253");

(cljs.core.async.t_cljs$core$async47253.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47253");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47253.
 */
cljs.core.async.__GT_t_cljs$core$async47253 = (function cljs$core$async$__GT_t_cljs$core$async47253(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47254){
return (new cljs.core.async.t_cljs$core$async47253(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47254));
});

}

return (new cljs.core.async.t_cljs$core$async47253(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46372__auto___48606 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46373__auto__ = (function (){var switch__46215__auto__ = (function (state_47327){
var state_val_47328 = (state_47327[(1)]);
if((state_val_47328 === (7))){
var inst_47323 = (state_47327[(2)]);
var state_47327__$1 = state_47327;
var statearr_47329_48607 = state_47327__$1;
(statearr_47329_48607[(2)] = inst_47323);

(statearr_47329_48607[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47328 === (20))){
var state_47327__$1 = state_47327;
var statearr_47330_48608 = state_47327__$1;
(statearr_47330_48608[(2)] = null);

(statearr_47330_48608[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47328 === (1))){
var state_47327__$1 = state_47327;
var statearr_47331_48610 = state_47327__$1;
(statearr_47331_48610[(2)] = null);

(statearr_47331_48610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47328 === (24))){
var inst_47306 = (state_47327[(7)]);
var inst_47315 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_47306);
var state_47327__$1 = state_47327;
var statearr_47332_48611 = state_47327__$1;
(statearr_47332_48611[(2)] = inst_47315);

(statearr_47332_48611[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47328 === (4))){
var inst_47258 = (state_47327[(8)]);
var inst_47258__$1 = (state_47327[(2)]);
var inst_47259 = (inst_47258__$1 == null);
var state_47327__$1 = (function (){var statearr_47333 = state_47327;
(statearr_47333[(8)] = inst_47258__$1);

return statearr_47333;
})();
if(cljs.core.truth_(inst_47259)){
var statearr_47334_48612 = state_47327__$1;
(statearr_47334_48612[(1)] = (5));

} else {
var statearr_47335_48613 = state_47327__$1;
(statearr_47335_48613[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47328 === (15))){
var inst_47300 = (state_47327[(2)]);
var state_47327__$1 = state_47327;
var statearr_47336_48614 = state_47327__$1;
(statearr_47336_48614[(2)] = inst_47300);

(statearr_47336_48614[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47328 === (21))){
var inst_47320 = (state_47327[(2)]);
var state_47327__$1 = (function (){var statearr_47337 = state_47327;
(statearr_47337[(9)] = inst_47320);

return statearr_47337;
})();
var statearr_47338_48615 = state_47327__$1;
(statearr_47338_48615[(2)] = null);

(statearr_47338_48615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47328 === (13))){
var inst_47282 = (state_47327[(10)]);
var inst_47284 = cljs.core.chunked_seq_QMARK_(inst_47282);
var state_47327__$1 = state_47327;
if(inst_47284){
var statearr_47339_48616 = state_47327__$1;
(statearr_47339_48616[(1)] = (16));

} else {
var statearr_47340_48617 = state_47327__$1;
(statearr_47340_48617[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47328 === (22))){
var inst_47312 = (state_47327[(2)]);
var state_47327__$1 = state_47327;
if(cljs.core.truth_(inst_47312)){
var statearr_47341_48618 = state_47327__$1;
(statearr_47341_48618[(1)] = (23));

} else {
var statearr_47342_48619 = state_47327__$1;
(statearr_47342_48619[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47328 === (6))){
var inst_47258 = (state_47327[(8)]);
var inst_47308 = (state_47327[(11)]);
var inst_47306 = (state_47327[(7)]);
var inst_47306__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_47258) : topic_fn.call(null,inst_47258));
var inst_47307 = cljs.core.deref(mults);
var inst_47308__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47307,inst_47306__$1);
var state_47327__$1 = (function (){var statearr_47343 = state_47327;
(statearr_47343[(11)] = inst_47308__$1);

(statearr_47343[(7)] = inst_47306__$1);

return statearr_47343;
})();
if(cljs.core.truth_(inst_47308__$1)){
var statearr_47344_48621 = state_47327__$1;
(statearr_47344_48621[(1)] = (19));

} else {
var statearr_47345_48622 = state_47327__$1;
(statearr_47345_48622[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47328 === (25))){
var inst_47317 = (state_47327[(2)]);
var state_47327__$1 = state_47327;
var statearr_47346_48624 = state_47327__$1;
(statearr_47346_48624[(2)] = inst_47317);

(statearr_47346_48624[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47328 === (17))){
var inst_47282 = (state_47327[(10)]);
var inst_47291 = cljs.core.first(inst_47282);
var inst_47292 = cljs.core.async.muxch_STAR_(inst_47291);
var inst_47293 = cljs.core.async.close_BANG_(inst_47292);
var inst_47294 = cljs.core.next(inst_47282);
var inst_47268 = inst_47294;
var inst_47269 = null;
var inst_47270 = (0);
var inst_47271 = (0);
var state_47327__$1 = (function (){var statearr_47347 = state_47327;
(statearr_47347[(12)] = inst_47271);

(statearr_47347[(13)] = inst_47270);

(statearr_47347[(14)] = inst_47293);

(statearr_47347[(15)] = inst_47268);

(statearr_47347[(16)] = inst_47269);

return statearr_47347;
})();
var statearr_47348_48625 = state_47327__$1;
(statearr_47348_48625[(2)] = null);

(statearr_47348_48625[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47328 === (3))){
var inst_47325 = (state_47327[(2)]);
var state_47327__$1 = state_47327;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47327__$1,inst_47325);
} else {
if((state_val_47328 === (12))){
var inst_47302 = (state_47327[(2)]);
var state_47327__$1 = state_47327;
var statearr_47349_48629 = state_47327__$1;
(statearr_47349_48629[(2)] = inst_47302);

(statearr_47349_48629[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47328 === (2))){
var state_47327__$1 = state_47327;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47327__$1,(4),ch);
} else {
if((state_val_47328 === (23))){
var state_47327__$1 = state_47327;
var statearr_47350_48630 = state_47327__$1;
(statearr_47350_48630[(2)] = null);

(statearr_47350_48630[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47328 === (19))){
var inst_47258 = (state_47327[(8)]);
var inst_47308 = (state_47327[(11)]);
var inst_47310 = cljs.core.async.muxch_STAR_(inst_47308);
var state_47327__$1 = state_47327;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47327__$1,(22),inst_47310,inst_47258);
} else {
if((state_val_47328 === (11))){
var inst_47282 = (state_47327[(10)]);
var inst_47268 = (state_47327[(15)]);
var inst_47282__$1 = cljs.core.seq(inst_47268);
var state_47327__$1 = (function (){var statearr_47351 = state_47327;
(statearr_47351[(10)] = inst_47282__$1);

return statearr_47351;
})();
if(inst_47282__$1){
var statearr_47352_48638 = state_47327__$1;
(statearr_47352_48638[(1)] = (13));

} else {
var statearr_47353_48639 = state_47327__$1;
(statearr_47353_48639[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47328 === (9))){
var inst_47304 = (state_47327[(2)]);
var state_47327__$1 = state_47327;
var statearr_47354_48640 = state_47327__$1;
(statearr_47354_48640[(2)] = inst_47304);

(statearr_47354_48640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47328 === (5))){
var inst_47265 = cljs.core.deref(mults);
var inst_47266 = cljs.core.vals(inst_47265);
var inst_47267 = cljs.core.seq(inst_47266);
var inst_47268 = inst_47267;
var inst_47269 = null;
var inst_47270 = (0);
var inst_47271 = (0);
var state_47327__$1 = (function (){var statearr_47355 = state_47327;
(statearr_47355[(12)] = inst_47271);

(statearr_47355[(13)] = inst_47270);

(statearr_47355[(15)] = inst_47268);

(statearr_47355[(16)] = inst_47269);

return statearr_47355;
})();
var statearr_47356_48641 = state_47327__$1;
(statearr_47356_48641[(2)] = null);

(statearr_47356_48641[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47328 === (14))){
var state_47327__$1 = state_47327;
var statearr_47360_48642 = state_47327__$1;
(statearr_47360_48642[(2)] = null);

(statearr_47360_48642[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47328 === (16))){
var inst_47282 = (state_47327[(10)]);
var inst_47286 = cljs.core.chunk_first(inst_47282);
var inst_47287 = cljs.core.chunk_rest(inst_47282);
var inst_47288 = cljs.core.count(inst_47286);
var inst_47268 = inst_47287;
var inst_47269 = inst_47286;
var inst_47270 = inst_47288;
var inst_47271 = (0);
var state_47327__$1 = (function (){var statearr_47361 = state_47327;
(statearr_47361[(12)] = inst_47271);

(statearr_47361[(13)] = inst_47270);

(statearr_47361[(15)] = inst_47268);

(statearr_47361[(16)] = inst_47269);

return statearr_47361;
})();
var statearr_47362_48646 = state_47327__$1;
(statearr_47362_48646[(2)] = null);

(statearr_47362_48646[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47328 === (10))){
var inst_47271 = (state_47327[(12)]);
var inst_47270 = (state_47327[(13)]);
var inst_47268 = (state_47327[(15)]);
var inst_47269 = (state_47327[(16)]);
var inst_47276 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_47269,inst_47271);
var inst_47277 = cljs.core.async.muxch_STAR_(inst_47276);
var inst_47278 = cljs.core.async.close_BANG_(inst_47277);
var inst_47279 = (inst_47271 + (1));
var tmp47357 = inst_47270;
var tmp47358 = inst_47268;
var tmp47359 = inst_47269;
var inst_47268__$1 = tmp47358;
var inst_47269__$1 = tmp47359;
var inst_47270__$1 = tmp47357;
var inst_47271__$1 = inst_47279;
var state_47327__$1 = (function (){var statearr_47363 = state_47327;
(statearr_47363[(12)] = inst_47271__$1);

(statearr_47363[(13)] = inst_47270__$1);

(statearr_47363[(17)] = inst_47278);

(statearr_47363[(15)] = inst_47268__$1);

(statearr_47363[(16)] = inst_47269__$1);

return statearr_47363;
})();
var statearr_47364_48650 = state_47327__$1;
(statearr_47364_48650[(2)] = null);

(statearr_47364_48650[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47328 === (18))){
var inst_47297 = (state_47327[(2)]);
var state_47327__$1 = state_47327;
var statearr_47365_48651 = state_47327__$1;
(statearr_47365_48651[(2)] = inst_47297);

(statearr_47365_48651[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47328 === (8))){
var inst_47271 = (state_47327[(12)]);
var inst_47270 = (state_47327[(13)]);
var inst_47273 = (inst_47271 < inst_47270);
var inst_47274 = inst_47273;
var state_47327__$1 = state_47327;
if(cljs.core.truth_(inst_47274)){
var statearr_47366_48652 = state_47327__$1;
(statearr_47366_48652[(1)] = (10));

} else {
var statearr_47367_48653 = state_47327__$1;
(statearr_47367_48653[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46216__auto__ = null;
var cljs$core$async$state_machine__46216__auto____0 = (function (){
var statearr_47368 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47368[(0)] = cljs$core$async$state_machine__46216__auto__);

(statearr_47368[(1)] = (1));

return statearr_47368;
});
var cljs$core$async$state_machine__46216__auto____1 = (function (state_47327){
while(true){
var ret_value__46217__auto__ = (function (){try{while(true){
var result__46218__auto__ = switch__46215__auto__(state_47327);
if(cljs.core.keyword_identical_QMARK_(result__46218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46218__auto__;
}
break;
}
}catch (e47369){if((e47369 instanceof Object)){
var ex__46219__auto__ = e47369;
var statearr_47370_48657 = state_47327;
(statearr_47370_48657[(5)] = ex__46219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47327);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47369;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48658 = state_47327;
state_47327 = G__48658;
continue;
} else {
return ret_value__46217__auto__;
}
break;
}
});
cljs$core$async$state_machine__46216__auto__ = function(state_47327){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46216__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46216__auto____1.call(this,state_47327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46216__auto____0;
cljs$core$async$state_machine__46216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46216__auto____1;
return cljs$core$async$state_machine__46216__auto__;
})()
})();
var state__46374__auto__ = (function (){var statearr_47371 = (f__46373__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46373__auto__.cljs$core$IFn$_invoke$arity$0() : f__46373__auto__.call(null));
(statearr_47371[(6)] = c__46372__auto___48606);

return statearr_47371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46374__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__47373 = arguments.length;
switch (G__47373) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__47375 = arguments.length;
switch (G__47375) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__47377 = arguments.length;
switch (G__47377) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__46372__auto___48678 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46373__auto__ = (function (){var switch__46215__auto__ = (function (state_47416){
var state_val_47417 = (state_47416[(1)]);
if((state_val_47417 === (7))){
var state_47416__$1 = state_47416;
var statearr_47418_48679 = state_47416__$1;
(statearr_47418_48679[(2)] = null);

(statearr_47418_48679[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47417 === (1))){
var state_47416__$1 = state_47416;
var statearr_47419_48680 = state_47416__$1;
(statearr_47419_48680[(2)] = null);

(statearr_47419_48680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47417 === (4))){
var inst_47380 = (state_47416[(7)]);
var inst_47382 = (inst_47380 < cnt);
var state_47416__$1 = state_47416;
if(cljs.core.truth_(inst_47382)){
var statearr_47420_48681 = state_47416__$1;
(statearr_47420_48681[(1)] = (6));

} else {
var statearr_47421_48682 = state_47416__$1;
(statearr_47421_48682[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47417 === (15))){
var inst_47412 = (state_47416[(2)]);
var state_47416__$1 = state_47416;
var statearr_47422_48685 = state_47416__$1;
(statearr_47422_48685[(2)] = inst_47412);

(statearr_47422_48685[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47417 === (13))){
var inst_47405 = cljs.core.async.close_BANG_(out);
var state_47416__$1 = state_47416;
var statearr_47423_48686 = state_47416__$1;
(statearr_47423_48686[(2)] = inst_47405);

(statearr_47423_48686[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47417 === (6))){
var state_47416__$1 = state_47416;
var statearr_47424_48688 = state_47416__$1;
(statearr_47424_48688[(2)] = null);

(statearr_47424_48688[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47417 === (3))){
var inst_47414 = (state_47416[(2)]);
var state_47416__$1 = state_47416;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47416__$1,inst_47414);
} else {
if((state_val_47417 === (12))){
var inst_47402 = (state_47416[(8)]);
var inst_47402__$1 = (state_47416[(2)]);
var inst_47403 = cljs.core.some(cljs.core.nil_QMARK_,inst_47402__$1);
var state_47416__$1 = (function (){var statearr_47425 = state_47416;
(statearr_47425[(8)] = inst_47402__$1);

return statearr_47425;
})();
if(cljs.core.truth_(inst_47403)){
var statearr_47426_48689 = state_47416__$1;
(statearr_47426_48689[(1)] = (13));

} else {
var statearr_47427_48690 = state_47416__$1;
(statearr_47427_48690[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47417 === (2))){
var inst_47379 = cljs.core.reset_BANG_(dctr,cnt);
var inst_47380 = (0);
var state_47416__$1 = (function (){var statearr_47428 = state_47416;
(statearr_47428[(9)] = inst_47379);

(statearr_47428[(7)] = inst_47380);

return statearr_47428;
})();
var statearr_47429_48691 = state_47416__$1;
(statearr_47429_48691[(2)] = null);

(statearr_47429_48691[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47417 === (11))){
var inst_47380 = (state_47416[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_47416,(10),Object,null,(9));
var inst_47389 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_47380) : chs__$1.call(null,inst_47380));
var inst_47390 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_47380) : done.call(null,inst_47380));
var inst_47391 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_47389,inst_47390);
var state_47416__$1 = state_47416;
var statearr_47430_48693 = state_47416__$1;
(statearr_47430_48693[(2)] = inst_47391);


cljs.core.async.impl.ioc_helpers.process_exception(state_47416__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47417 === (9))){
var inst_47380 = (state_47416[(7)]);
var inst_47393 = (state_47416[(2)]);
var inst_47394 = (inst_47380 + (1));
var inst_47380__$1 = inst_47394;
var state_47416__$1 = (function (){var statearr_47431 = state_47416;
(statearr_47431[(10)] = inst_47393);

(statearr_47431[(7)] = inst_47380__$1);

return statearr_47431;
})();
var statearr_47432_48694 = state_47416__$1;
(statearr_47432_48694[(2)] = null);

(statearr_47432_48694[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47417 === (5))){
var inst_47400 = (state_47416[(2)]);
var state_47416__$1 = (function (){var statearr_47433 = state_47416;
(statearr_47433[(11)] = inst_47400);

return statearr_47433;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47416__$1,(12),dchan);
} else {
if((state_val_47417 === (14))){
var inst_47402 = (state_47416[(8)]);
var inst_47407 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_47402);
var state_47416__$1 = state_47416;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47416__$1,(16),out,inst_47407);
} else {
if((state_val_47417 === (16))){
var inst_47409 = (state_47416[(2)]);
var state_47416__$1 = (function (){var statearr_47434 = state_47416;
(statearr_47434[(12)] = inst_47409);

return statearr_47434;
})();
var statearr_47435_48701 = state_47416__$1;
(statearr_47435_48701[(2)] = null);

(statearr_47435_48701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47417 === (10))){
var inst_47384 = (state_47416[(2)]);
var inst_47385 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_47416__$1 = (function (){var statearr_47436 = state_47416;
(statearr_47436[(13)] = inst_47384);

return statearr_47436;
})();
var statearr_47437_48702 = state_47416__$1;
(statearr_47437_48702[(2)] = inst_47385);


cljs.core.async.impl.ioc_helpers.process_exception(state_47416__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47417 === (8))){
var inst_47398 = (state_47416[(2)]);
var state_47416__$1 = state_47416;
var statearr_47438_48703 = state_47416__$1;
(statearr_47438_48703[(2)] = inst_47398);

(statearr_47438_48703[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46216__auto__ = null;
var cljs$core$async$state_machine__46216__auto____0 = (function (){
var statearr_47439 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47439[(0)] = cljs$core$async$state_machine__46216__auto__);

(statearr_47439[(1)] = (1));

return statearr_47439;
});
var cljs$core$async$state_machine__46216__auto____1 = (function (state_47416){
while(true){
var ret_value__46217__auto__ = (function (){try{while(true){
var result__46218__auto__ = switch__46215__auto__(state_47416);
if(cljs.core.keyword_identical_QMARK_(result__46218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46218__auto__;
}
break;
}
}catch (e47440){if((e47440 instanceof Object)){
var ex__46219__auto__ = e47440;
var statearr_47441_48704 = state_47416;
(statearr_47441_48704[(5)] = ex__46219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47416);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47440;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48705 = state_47416;
state_47416 = G__48705;
continue;
} else {
return ret_value__46217__auto__;
}
break;
}
});
cljs$core$async$state_machine__46216__auto__ = function(state_47416){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46216__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46216__auto____1.call(this,state_47416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46216__auto____0;
cljs$core$async$state_machine__46216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46216__auto____1;
return cljs$core$async$state_machine__46216__auto__;
})()
})();
var state__46374__auto__ = (function (){var statearr_47442 = (f__46373__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46373__auto__.cljs$core$IFn$_invoke$arity$0() : f__46373__auto__.call(null));
(statearr_47442[(6)] = c__46372__auto___48678);

return statearr_47442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46374__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__47445 = arguments.length;
switch (G__47445) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46372__auto___48707 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46373__auto__ = (function (){var switch__46215__auto__ = (function (state_47477){
var state_val_47478 = (state_47477[(1)]);
if((state_val_47478 === (7))){
var inst_47456 = (state_47477[(7)]);
var inst_47457 = (state_47477[(8)]);
var inst_47456__$1 = (state_47477[(2)]);
var inst_47457__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47456__$1,(0),null);
var inst_47458 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47456__$1,(1),null);
var inst_47459 = (inst_47457__$1 == null);
var state_47477__$1 = (function (){var statearr_47479 = state_47477;
(statearr_47479[(7)] = inst_47456__$1);

(statearr_47479[(9)] = inst_47458);

(statearr_47479[(8)] = inst_47457__$1);

return statearr_47479;
})();
if(cljs.core.truth_(inst_47459)){
var statearr_47480_48708 = state_47477__$1;
(statearr_47480_48708[(1)] = (8));

} else {
var statearr_47481_48709 = state_47477__$1;
(statearr_47481_48709[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47478 === (1))){
var inst_47446 = cljs.core.vec(chs);
var inst_47447 = inst_47446;
var state_47477__$1 = (function (){var statearr_47482 = state_47477;
(statearr_47482[(10)] = inst_47447);

return statearr_47482;
})();
var statearr_47483_48716 = state_47477__$1;
(statearr_47483_48716[(2)] = null);

(statearr_47483_48716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47478 === (4))){
var inst_47447 = (state_47477[(10)]);
var state_47477__$1 = state_47477;
return cljs.core.async.ioc_alts_BANG_(state_47477__$1,(7),inst_47447);
} else {
if((state_val_47478 === (6))){
var inst_47473 = (state_47477[(2)]);
var state_47477__$1 = state_47477;
var statearr_47484_48717 = state_47477__$1;
(statearr_47484_48717[(2)] = inst_47473);

(statearr_47484_48717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47478 === (3))){
var inst_47475 = (state_47477[(2)]);
var state_47477__$1 = state_47477;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47477__$1,inst_47475);
} else {
if((state_val_47478 === (2))){
var inst_47447 = (state_47477[(10)]);
var inst_47449 = cljs.core.count(inst_47447);
var inst_47450 = (inst_47449 > (0));
var state_47477__$1 = state_47477;
if(cljs.core.truth_(inst_47450)){
var statearr_47486_48718 = state_47477__$1;
(statearr_47486_48718[(1)] = (4));

} else {
var statearr_47487_48719 = state_47477__$1;
(statearr_47487_48719[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47478 === (11))){
var inst_47447 = (state_47477[(10)]);
var inst_47466 = (state_47477[(2)]);
var tmp47485 = inst_47447;
var inst_47447__$1 = tmp47485;
var state_47477__$1 = (function (){var statearr_47488 = state_47477;
(statearr_47488[(11)] = inst_47466);

(statearr_47488[(10)] = inst_47447__$1);

return statearr_47488;
})();
var statearr_47489_48720 = state_47477__$1;
(statearr_47489_48720[(2)] = null);

(statearr_47489_48720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47478 === (9))){
var inst_47457 = (state_47477[(8)]);
var state_47477__$1 = state_47477;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47477__$1,(11),out,inst_47457);
} else {
if((state_val_47478 === (5))){
var inst_47471 = cljs.core.async.close_BANG_(out);
var state_47477__$1 = state_47477;
var statearr_47490_48721 = state_47477__$1;
(statearr_47490_48721[(2)] = inst_47471);

(statearr_47490_48721[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47478 === (10))){
var inst_47469 = (state_47477[(2)]);
var state_47477__$1 = state_47477;
var statearr_47491_48722 = state_47477__$1;
(statearr_47491_48722[(2)] = inst_47469);

(statearr_47491_48722[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47478 === (8))){
var inst_47456 = (state_47477[(7)]);
var inst_47458 = (state_47477[(9)]);
var inst_47457 = (state_47477[(8)]);
var inst_47447 = (state_47477[(10)]);
var inst_47461 = (function (){var cs = inst_47447;
var vec__47452 = inst_47456;
var v = inst_47457;
var c = inst_47458;
return (function (p1__47443_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__47443_SHARP_);
});
})();
var inst_47462 = cljs.core.filterv(inst_47461,inst_47447);
var inst_47447__$1 = inst_47462;
var state_47477__$1 = (function (){var statearr_47492 = state_47477;
(statearr_47492[(10)] = inst_47447__$1);

return statearr_47492;
})();
var statearr_47493_48723 = state_47477__$1;
(statearr_47493_48723[(2)] = null);

(statearr_47493_48723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46216__auto__ = null;
var cljs$core$async$state_machine__46216__auto____0 = (function (){
var statearr_47494 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47494[(0)] = cljs$core$async$state_machine__46216__auto__);

(statearr_47494[(1)] = (1));

return statearr_47494;
});
var cljs$core$async$state_machine__46216__auto____1 = (function (state_47477){
while(true){
var ret_value__46217__auto__ = (function (){try{while(true){
var result__46218__auto__ = switch__46215__auto__(state_47477);
if(cljs.core.keyword_identical_QMARK_(result__46218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46218__auto__;
}
break;
}
}catch (e47495){if((e47495 instanceof Object)){
var ex__46219__auto__ = e47495;
var statearr_47496_48726 = state_47477;
(statearr_47496_48726[(5)] = ex__46219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47495;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48727 = state_47477;
state_47477 = G__48727;
continue;
} else {
return ret_value__46217__auto__;
}
break;
}
});
cljs$core$async$state_machine__46216__auto__ = function(state_47477){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46216__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46216__auto____1.call(this,state_47477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46216__auto____0;
cljs$core$async$state_machine__46216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46216__auto____1;
return cljs$core$async$state_machine__46216__auto__;
})()
})();
var state__46374__auto__ = (function (){var statearr_47497 = (f__46373__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46373__auto__.cljs$core$IFn$_invoke$arity$0() : f__46373__auto__.call(null));
(statearr_47497[(6)] = c__46372__auto___48707);

return statearr_47497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46374__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__47499 = arguments.length;
switch (G__47499) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46372__auto___48739 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46373__auto__ = (function (){var switch__46215__auto__ = (function (state_47523){
var state_val_47524 = (state_47523[(1)]);
if((state_val_47524 === (7))){
var inst_47505 = (state_47523[(7)]);
var inst_47505__$1 = (state_47523[(2)]);
var inst_47506 = (inst_47505__$1 == null);
var inst_47507 = cljs.core.not(inst_47506);
var state_47523__$1 = (function (){var statearr_47525 = state_47523;
(statearr_47525[(7)] = inst_47505__$1);

return statearr_47525;
})();
if(inst_47507){
var statearr_47526_48740 = state_47523__$1;
(statearr_47526_48740[(1)] = (8));

} else {
var statearr_47527_48741 = state_47523__$1;
(statearr_47527_48741[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47524 === (1))){
var inst_47500 = (0);
var state_47523__$1 = (function (){var statearr_47528 = state_47523;
(statearr_47528[(8)] = inst_47500);

return statearr_47528;
})();
var statearr_47529_48742 = state_47523__$1;
(statearr_47529_48742[(2)] = null);

(statearr_47529_48742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47524 === (4))){
var state_47523__$1 = state_47523;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47523__$1,(7),ch);
} else {
if((state_val_47524 === (6))){
var inst_47518 = (state_47523[(2)]);
var state_47523__$1 = state_47523;
var statearr_47530_48743 = state_47523__$1;
(statearr_47530_48743[(2)] = inst_47518);

(statearr_47530_48743[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47524 === (3))){
var inst_47520 = (state_47523[(2)]);
var inst_47521 = cljs.core.async.close_BANG_(out);
var state_47523__$1 = (function (){var statearr_47531 = state_47523;
(statearr_47531[(9)] = inst_47520);

return statearr_47531;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47523__$1,inst_47521);
} else {
if((state_val_47524 === (2))){
var inst_47500 = (state_47523[(8)]);
var inst_47502 = (inst_47500 < n);
var state_47523__$1 = state_47523;
if(cljs.core.truth_(inst_47502)){
var statearr_47532_48745 = state_47523__$1;
(statearr_47532_48745[(1)] = (4));

} else {
var statearr_47533_48746 = state_47523__$1;
(statearr_47533_48746[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47524 === (11))){
var inst_47500 = (state_47523[(8)]);
var inst_47510 = (state_47523[(2)]);
var inst_47511 = (inst_47500 + (1));
var inst_47500__$1 = inst_47511;
var state_47523__$1 = (function (){var statearr_47534 = state_47523;
(statearr_47534[(8)] = inst_47500__$1);

(statearr_47534[(10)] = inst_47510);

return statearr_47534;
})();
var statearr_47535_48750 = state_47523__$1;
(statearr_47535_48750[(2)] = null);

(statearr_47535_48750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47524 === (9))){
var state_47523__$1 = state_47523;
var statearr_47536_48751 = state_47523__$1;
(statearr_47536_48751[(2)] = null);

(statearr_47536_48751[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47524 === (5))){
var state_47523__$1 = state_47523;
var statearr_47537_48753 = state_47523__$1;
(statearr_47537_48753[(2)] = null);

(statearr_47537_48753[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47524 === (10))){
var inst_47515 = (state_47523[(2)]);
var state_47523__$1 = state_47523;
var statearr_47538_48754 = state_47523__$1;
(statearr_47538_48754[(2)] = inst_47515);

(statearr_47538_48754[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47524 === (8))){
var inst_47505 = (state_47523[(7)]);
var state_47523__$1 = state_47523;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47523__$1,(11),out,inst_47505);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46216__auto__ = null;
var cljs$core$async$state_machine__46216__auto____0 = (function (){
var statearr_47539 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47539[(0)] = cljs$core$async$state_machine__46216__auto__);

(statearr_47539[(1)] = (1));

return statearr_47539;
});
var cljs$core$async$state_machine__46216__auto____1 = (function (state_47523){
while(true){
var ret_value__46217__auto__ = (function (){try{while(true){
var result__46218__auto__ = switch__46215__auto__(state_47523);
if(cljs.core.keyword_identical_QMARK_(result__46218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46218__auto__;
}
break;
}
}catch (e47540){if((e47540 instanceof Object)){
var ex__46219__auto__ = e47540;
var statearr_47541_48759 = state_47523;
(statearr_47541_48759[(5)] = ex__46219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47540;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48763 = state_47523;
state_47523 = G__48763;
continue;
} else {
return ret_value__46217__auto__;
}
break;
}
});
cljs$core$async$state_machine__46216__auto__ = function(state_47523){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46216__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46216__auto____1.call(this,state_47523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46216__auto____0;
cljs$core$async$state_machine__46216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46216__auto____1;
return cljs$core$async$state_machine__46216__auto__;
})()
})();
var state__46374__auto__ = (function (){var statearr_47542 = (f__46373__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46373__auto__.cljs$core$IFn$_invoke$arity$0() : f__46373__auto__.call(null));
(statearr_47542[(6)] = c__46372__auto___48739);

return statearr_47542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46374__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47544 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47544 = (function (f,ch,meta47545){
this.f = f;
this.ch = ch;
this.meta47545 = meta47545;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47546,meta47545__$1){
var self__ = this;
var _47546__$1 = this;
return (new cljs.core.async.t_cljs$core$async47544(self__.f,self__.ch,meta47545__$1));
}));

(cljs.core.async.t_cljs$core$async47544.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47546){
var self__ = this;
var _47546__$1 = this;
return self__.meta47545;
}));

(cljs.core.async.t_cljs$core$async47544.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47544.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47544.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47544.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47544.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47547 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47547 = (function (f,ch,meta47545,_,fn1,meta47548){
this.f = f;
this.ch = ch;
this.meta47545 = meta47545;
this._ = _;
this.fn1 = fn1;
this.meta47548 = meta47548;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47547.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47549,meta47548__$1){
var self__ = this;
var _47549__$1 = this;
return (new cljs.core.async.t_cljs$core$async47547(self__.f,self__.ch,self__.meta47545,self__._,self__.fn1,meta47548__$1));
}));

(cljs.core.async.t_cljs$core$async47547.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47549){
var self__ = this;
var _47549__$1 = this;
return self__.meta47548;
}));

(cljs.core.async.t_cljs$core$async47547.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47547.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async47547.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47547.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__47543_SHARP_){
var G__47550 = (((p1__47543_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__47543_SHARP_) : self__.f.call(null,p1__47543_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__47550) : f1.call(null,G__47550));
});
}));

(cljs.core.async.t_cljs$core$async47547.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47545","meta47545",-2002645161,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async47544","cljs.core.async/t_cljs$core$async47544",1494612920,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta47548","meta47548",970398835,null)], null);
}));

(cljs.core.async.t_cljs$core$async47547.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47547.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47547");

(cljs.core.async.t_cljs$core$async47547.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47547");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47547.
 */
cljs.core.async.__GT_t_cljs$core$async47547 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47547(f__$1,ch__$1,meta47545__$1,___$2,fn1__$1,meta47548){
return (new cljs.core.async.t_cljs$core$async47547(f__$1,ch__$1,meta47545__$1,___$2,fn1__$1,meta47548));
});

}

return (new cljs.core.async.t_cljs$core$async47547(self__.f,self__.ch,self__.meta47545,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__47551 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__47551) : self__.f.call(null,G__47551));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async47544.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47544.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async47544.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47545","meta47545",-2002645161,null)], null);
}));

(cljs.core.async.t_cljs$core$async47544.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47544.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47544");

(cljs.core.async.t_cljs$core$async47544.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47544");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47544.
 */
cljs.core.async.__GT_t_cljs$core$async47544 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47544(f__$1,ch__$1,meta47545){
return (new cljs.core.async.t_cljs$core$async47544(f__$1,ch__$1,meta47545));
});

}

return (new cljs.core.async.t_cljs$core$async47544(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47552 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47552 = (function (f,ch,meta47553){
this.f = f;
this.ch = ch;
this.meta47553 = meta47553;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47552.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47554,meta47553__$1){
var self__ = this;
var _47554__$1 = this;
return (new cljs.core.async.t_cljs$core$async47552(self__.f,self__.ch,meta47553__$1));
}));

(cljs.core.async.t_cljs$core$async47552.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47554){
var self__ = this;
var _47554__$1 = this;
return self__.meta47553;
}));

(cljs.core.async.t_cljs$core$async47552.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47552.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47552.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47552.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async47552.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47552.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async47552.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47553","meta47553",997145395,null)], null);
}));

(cljs.core.async.t_cljs$core$async47552.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47552.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47552");

(cljs.core.async.t_cljs$core$async47552.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47552");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47552.
 */
cljs.core.async.__GT_t_cljs$core$async47552 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async47552(f__$1,ch__$1,meta47553){
return (new cljs.core.async.t_cljs$core$async47552(f__$1,ch__$1,meta47553));
});

}

return (new cljs.core.async.t_cljs$core$async47552(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47555 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47555 = (function (p,ch,meta47556){
this.p = p;
this.ch = ch;
this.meta47556 = meta47556;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47555.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47557,meta47556__$1){
var self__ = this;
var _47557__$1 = this;
return (new cljs.core.async.t_cljs$core$async47555(self__.p,self__.ch,meta47556__$1));
}));

(cljs.core.async.t_cljs$core$async47555.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47557){
var self__ = this;
var _47557__$1 = this;
return self__.meta47556;
}));

(cljs.core.async.t_cljs$core$async47555.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47555.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47555.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47555.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47555.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async47555.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47555.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async47555.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47556","meta47556",-1200002317,null)], null);
}));

(cljs.core.async.t_cljs$core$async47555.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47555.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47555");

(cljs.core.async.t_cljs$core$async47555.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47555");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47555.
 */
cljs.core.async.__GT_t_cljs$core$async47555 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async47555(p__$1,ch__$1,meta47556){
return (new cljs.core.async.t_cljs$core$async47555(p__$1,ch__$1,meta47556));
});

}

return (new cljs.core.async.t_cljs$core$async47555(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__47559 = arguments.length;
switch (G__47559) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46372__auto___48785 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46373__auto__ = (function (){var switch__46215__auto__ = (function (state_47580){
var state_val_47581 = (state_47580[(1)]);
if((state_val_47581 === (7))){
var inst_47576 = (state_47580[(2)]);
var state_47580__$1 = state_47580;
var statearr_47582_48788 = state_47580__$1;
(statearr_47582_48788[(2)] = inst_47576);

(statearr_47582_48788[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47581 === (1))){
var state_47580__$1 = state_47580;
var statearr_47583_48789 = state_47580__$1;
(statearr_47583_48789[(2)] = null);

(statearr_47583_48789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47581 === (4))){
var inst_47562 = (state_47580[(7)]);
var inst_47562__$1 = (state_47580[(2)]);
var inst_47563 = (inst_47562__$1 == null);
var state_47580__$1 = (function (){var statearr_47584 = state_47580;
(statearr_47584[(7)] = inst_47562__$1);

return statearr_47584;
})();
if(cljs.core.truth_(inst_47563)){
var statearr_47585_48791 = state_47580__$1;
(statearr_47585_48791[(1)] = (5));

} else {
var statearr_47586_48792 = state_47580__$1;
(statearr_47586_48792[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47581 === (6))){
var inst_47562 = (state_47580[(7)]);
var inst_47567 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_47562) : p.call(null,inst_47562));
var state_47580__$1 = state_47580;
if(cljs.core.truth_(inst_47567)){
var statearr_47587_48793 = state_47580__$1;
(statearr_47587_48793[(1)] = (8));

} else {
var statearr_47588_48794 = state_47580__$1;
(statearr_47588_48794[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47581 === (3))){
var inst_47578 = (state_47580[(2)]);
var state_47580__$1 = state_47580;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47580__$1,inst_47578);
} else {
if((state_val_47581 === (2))){
var state_47580__$1 = state_47580;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47580__$1,(4),ch);
} else {
if((state_val_47581 === (11))){
var inst_47570 = (state_47580[(2)]);
var state_47580__$1 = state_47580;
var statearr_47589_48795 = state_47580__$1;
(statearr_47589_48795[(2)] = inst_47570);

(statearr_47589_48795[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47581 === (9))){
var state_47580__$1 = state_47580;
var statearr_47590_48796 = state_47580__$1;
(statearr_47590_48796[(2)] = null);

(statearr_47590_48796[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47581 === (5))){
var inst_47565 = cljs.core.async.close_BANG_(out);
var state_47580__$1 = state_47580;
var statearr_47591_48797 = state_47580__$1;
(statearr_47591_48797[(2)] = inst_47565);

(statearr_47591_48797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47581 === (10))){
var inst_47573 = (state_47580[(2)]);
var state_47580__$1 = (function (){var statearr_47592 = state_47580;
(statearr_47592[(8)] = inst_47573);

return statearr_47592;
})();
var statearr_47593_48798 = state_47580__$1;
(statearr_47593_48798[(2)] = null);

(statearr_47593_48798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47581 === (8))){
var inst_47562 = (state_47580[(7)]);
var state_47580__$1 = state_47580;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47580__$1,(11),out,inst_47562);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46216__auto__ = null;
var cljs$core$async$state_machine__46216__auto____0 = (function (){
var statearr_47594 = [null,null,null,null,null,null,null,null,null];
(statearr_47594[(0)] = cljs$core$async$state_machine__46216__auto__);

(statearr_47594[(1)] = (1));

return statearr_47594;
});
var cljs$core$async$state_machine__46216__auto____1 = (function (state_47580){
while(true){
var ret_value__46217__auto__ = (function (){try{while(true){
var result__46218__auto__ = switch__46215__auto__(state_47580);
if(cljs.core.keyword_identical_QMARK_(result__46218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46218__auto__;
}
break;
}
}catch (e47595){if((e47595 instanceof Object)){
var ex__46219__auto__ = e47595;
var statearr_47596_48799 = state_47580;
(statearr_47596_48799[(5)] = ex__46219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47580);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47595;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48800 = state_47580;
state_47580 = G__48800;
continue;
} else {
return ret_value__46217__auto__;
}
break;
}
});
cljs$core$async$state_machine__46216__auto__ = function(state_47580){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46216__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46216__auto____1.call(this,state_47580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46216__auto____0;
cljs$core$async$state_machine__46216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46216__auto____1;
return cljs$core$async$state_machine__46216__auto__;
})()
})();
var state__46374__auto__ = (function (){var statearr_47597 = (f__46373__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46373__auto__.cljs$core$IFn$_invoke$arity$0() : f__46373__auto__.call(null));
(statearr_47597[(6)] = c__46372__auto___48785);

return statearr_47597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46374__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__47599 = arguments.length;
switch (G__47599) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__46372__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46373__auto__ = (function (){var switch__46215__auto__ = (function (state_47661){
var state_val_47662 = (state_47661[(1)]);
if((state_val_47662 === (7))){
var inst_47657 = (state_47661[(2)]);
var state_47661__$1 = state_47661;
var statearr_47663_48802 = state_47661__$1;
(statearr_47663_48802[(2)] = inst_47657);

(statearr_47663_48802[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47662 === (20))){
var inst_47627 = (state_47661[(7)]);
var inst_47638 = (state_47661[(2)]);
var inst_47639 = cljs.core.next(inst_47627);
var inst_47613 = inst_47639;
var inst_47614 = null;
var inst_47615 = (0);
var inst_47616 = (0);
var state_47661__$1 = (function (){var statearr_47664 = state_47661;
(statearr_47664[(8)] = inst_47614);

(statearr_47664[(9)] = inst_47613);

(statearr_47664[(10)] = inst_47616);

(statearr_47664[(11)] = inst_47638);

(statearr_47664[(12)] = inst_47615);

return statearr_47664;
})();
var statearr_47665_48804 = state_47661__$1;
(statearr_47665_48804[(2)] = null);

(statearr_47665_48804[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47662 === (1))){
var state_47661__$1 = state_47661;
var statearr_47666_48805 = state_47661__$1;
(statearr_47666_48805[(2)] = null);

(statearr_47666_48805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47662 === (4))){
var inst_47602 = (state_47661[(13)]);
var inst_47602__$1 = (state_47661[(2)]);
var inst_47603 = (inst_47602__$1 == null);
var state_47661__$1 = (function (){var statearr_47667 = state_47661;
(statearr_47667[(13)] = inst_47602__$1);

return statearr_47667;
})();
if(cljs.core.truth_(inst_47603)){
var statearr_47668_48807 = state_47661__$1;
(statearr_47668_48807[(1)] = (5));

} else {
var statearr_47669_48808 = state_47661__$1;
(statearr_47669_48808[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47662 === (15))){
var state_47661__$1 = state_47661;
var statearr_47673_48809 = state_47661__$1;
(statearr_47673_48809[(2)] = null);

(statearr_47673_48809[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47662 === (21))){
var state_47661__$1 = state_47661;
var statearr_47674_48811 = state_47661__$1;
(statearr_47674_48811[(2)] = null);

(statearr_47674_48811[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47662 === (13))){
var inst_47614 = (state_47661[(8)]);
var inst_47613 = (state_47661[(9)]);
var inst_47616 = (state_47661[(10)]);
var inst_47615 = (state_47661[(12)]);
var inst_47623 = (state_47661[(2)]);
var inst_47624 = (inst_47616 + (1));
var tmp47670 = inst_47614;
var tmp47671 = inst_47613;
var tmp47672 = inst_47615;
var inst_47613__$1 = tmp47671;
var inst_47614__$1 = tmp47670;
var inst_47615__$1 = tmp47672;
var inst_47616__$1 = inst_47624;
var state_47661__$1 = (function (){var statearr_47675 = state_47661;
(statearr_47675[(8)] = inst_47614__$1);

(statearr_47675[(9)] = inst_47613__$1);

(statearr_47675[(10)] = inst_47616__$1);

(statearr_47675[(14)] = inst_47623);

(statearr_47675[(12)] = inst_47615__$1);

return statearr_47675;
})();
var statearr_47676_48813 = state_47661__$1;
(statearr_47676_48813[(2)] = null);

(statearr_47676_48813[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47662 === (22))){
var state_47661__$1 = state_47661;
var statearr_47677_48814 = state_47661__$1;
(statearr_47677_48814[(2)] = null);

(statearr_47677_48814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47662 === (6))){
var inst_47602 = (state_47661[(13)]);
var inst_47611 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47602) : f.call(null,inst_47602));
var inst_47612 = cljs.core.seq(inst_47611);
var inst_47613 = inst_47612;
var inst_47614 = null;
var inst_47615 = (0);
var inst_47616 = (0);
var state_47661__$1 = (function (){var statearr_47678 = state_47661;
(statearr_47678[(8)] = inst_47614);

(statearr_47678[(9)] = inst_47613);

(statearr_47678[(10)] = inst_47616);

(statearr_47678[(12)] = inst_47615);

return statearr_47678;
})();
var statearr_47679_48816 = state_47661__$1;
(statearr_47679_48816[(2)] = null);

(statearr_47679_48816[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47662 === (17))){
var inst_47627 = (state_47661[(7)]);
var inst_47631 = cljs.core.chunk_first(inst_47627);
var inst_47632 = cljs.core.chunk_rest(inst_47627);
var inst_47633 = cljs.core.count(inst_47631);
var inst_47613 = inst_47632;
var inst_47614 = inst_47631;
var inst_47615 = inst_47633;
var inst_47616 = (0);
var state_47661__$1 = (function (){var statearr_47680 = state_47661;
(statearr_47680[(8)] = inst_47614);

(statearr_47680[(9)] = inst_47613);

(statearr_47680[(10)] = inst_47616);

(statearr_47680[(12)] = inst_47615);

return statearr_47680;
})();
var statearr_47681_48821 = state_47661__$1;
(statearr_47681_48821[(2)] = null);

(statearr_47681_48821[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47662 === (3))){
var inst_47659 = (state_47661[(2)]);
var state_47661__$1 = state_47661;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47661__$1,inst_47659);
} else {
if((state_val_47662 === (12))){
var inst_47647 = (state_47661[(2)]);
var state_47661__$1 = state_47661;
var statearr_47682_48824 = state_47661__$1;
(statearr_47682_48824[(2)] = inst_47647);

(statearr_47682_48824[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47662 === (2))){
var state_47661__$1 = state_47661;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47661__$1,(4),in$);
} else {
if((state_val_47662 === (23))){
var inst_47655 = (state_47661[(2)]);
var state_47661__$1 = state_47661;
var statearr_47683_48825 = state_47661__$1;
(statearr_47683_48825[(2)] = inst_47655);

(statearr_47683_48825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47662 === (19))){
var inst_47642 = (state_47661[(2)]);
var state_47661__$1 = state_47661;
var statearr_47684_48826 = state_47661__$1;
(statearr_47684_48826[(2)] = inst_47642);

(statearr_47684_48826[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47662 === (11))){
var inst_47627 = (state_47661[(7)]);
var inst_47613 = (state_47661[(9)]);
var inst_47627__$1 = cljs.core.seq(inst_47613);
var state_47661__$1 = (function (){var statearr_47685 = state_47661;
(statearr_47685[(7)] = inst_47627__$1);

return statearr_47685;
})();
if(inst_47627__$1){
var statearr_47686_48827 = state_47661__$1;
(statearr_47686_48827[(1)] = (14));

} else {
var statearr_47687_48828 = state_47661__$1;
(statearr_47687_48828[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47662 === (9))){
var inst_47649 = (state_47661[(2)]);
var inst_47650 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_47661__$1 = (function (){var statearr_47688 = state_47661;
(statearr_47688[(15)] = inst_47649);

return statearr_47688;
})();
if(cljs.core.truth_(inst_47650)){
var statearr_47689_48829 = state_47661__$1;
(statearr_47689_48829[(1)] = (21));

} else {
var statearr_47690_48830 = state_47661__$1;
(statearr_47690_48830[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47662 === (5))){
var inst_47605 = cljs.core.async.close_BANG_(out);
var state_47661__$1 = state_47661;
var statearr_47691_48838 = state_47661__$1;
(statearr_47691_48838[(2)] = inst_47605);

(statearr_47691_48838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47662 === (14))){
var inst_47627 = (state_47661[(7)]);
var inst_47629 = cljs.core.chunked_seq_QMARK_(inst_47627);
var state_47661__$1 = state_47661;
if(inst_47629){
var statearr_47692_48843 = state_47661__$1;
(statearr_47692_48843[(1)] = (17));

} else {
var statearr_47693_48845 = state_47661__$1;
(statearr_47693_48845[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47662 === (16))){
var inst_47645 = (state_47661[(2)]);
var state_47661__$1 = state_47661;
var statearr_47694_48854 = state_47661__$1;
(statearr_47694_48854[(2)] = inst_47645);

(statearr_47694_48854[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47662 === (10))){
var inst_47614 = (state_47661[(8)]);
var inst_47616 = (state_47661[(10)]);
var inst_47621 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_47614,inst_47616);
var state_47661__$1 = state_47661;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47661__$1,(13),out,inst_47621);
} else {
if((state_val_47662 === (18))){
var inst_47627 = (state_47661[(7)]);
var inst_47636 = cljs.core.first(inst_47627);
var state_47661__$1 = state_47661;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47661__$1,(20),out,inst_47636);
} else {
if((state_val_47662 === (8))){
var inst_47616 = (state_47661[(10)]);
var inst_47615 = (state_47661[(12)]);
var inst_47618 = (inst_47616 < inst_47615);
var inst_47619 = inst_47618;
var state_47661__$1 = state_47661;
if(cljs.core.truth_(inst_47619)){
var statearr_47695_48870 = state_47661__$1;
(statearr_47695_48870[(1)] = (10));

} else {
var statearr_47696_48874 = state_47661__$1;
(statearr_47696_48874[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__46216__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__46216__auto____0 = (function (){
var statearr_47697 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47697[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__46216__auto__);

(statearr_47697[(1)] = (1));

return statearr_47697;
});
var cljs$core$async$mapcat_STAR__$_state_machine__46216__auto____1 = (function (state_47661){
while(true){
var ret_value__46217__auto__ = (function (){try{while(true){
var result__46218__auto__ = switch__46215__auto__(state_47661);
if(cljs.core.keyword_identical_QMARK_(result__46218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46218__auto__;
}
break;
}
}catch (e47698){if((e47698 instanceof Object)){
var ex__46219__auto__ = e47698;
var statearr_47699_48877 = state_47661;
(statearr_47699_48877[(5)] = ex__46219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47698;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48881 = state_47661;
state_47661 = G__48881;
continue;
} else {
return ret_value__46217__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__46216__auto__ = function(state_47661){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__46216__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__46216__auto____1.call(this,state_47661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__46216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__46216__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__46216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__46216__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__46216__auto__;
})()
})();
var state__46374__auto__ = (function (){var statearr_47700 = (f__46373__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46373__auto__.cljs$core$IFn$_invoke$arity$0() : f__46373__auto__.call(null));
(statearr_47700[(6)] = c__46372__auto__);

return statearr_47700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46374__auto__);
}));

return c__46372__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__47702 = arguments.length;
switch (G__47702) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__47704 = arguments.length;
switch (G__47704) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__47706 = arguments.length;
switch (G__47706) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46372__auto___48908 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46373__auto__ = (function (){var switch__46215__auto__ = (function (state_47730){
var state_val_47731 = (state_47730[(1)]);
if((state_val_47731 === (7))){
var inst_47725 = (state_47730[(2)]);
var state_47730__$1 = state_47730;
var statearr_47732_48913 = state_47730__$1;
(statearr_47732_48913[(2)] = inst_47725);

(statearr_47732_48913[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47731 === (1))){
var inst_47707 = null;
var state_47730__$1 = (function (){var statearr_47733 = state_47730;
(statearr_47733[(7)] = inst_47707);

return statearr_47733;
})();
var statearr_47734_48918 = state_47730__$1;
(statearr_47734_48918[(2)] = null);

(statearr_47734_48918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47731 === (4))){
var inst_47710 = (state_47730[(8)]);
var inst_47710__$1 = (state_47730[(2)]);
var inst_47711 = (inst_47710__$1 == null);
var inst_47712 = cljs.core.not(inst_47711);
var state_47730__$1 = (function (){var statearr_47735 = state_47730;
(statearr_47735[(8)] = inst_47710__$1);

return statearr_47735;
})();
if(inst_47712){
var statearr_47736_48926 = state_47730__$1;
(statearr_47736_48926[(1)] = (5));

} else {
var statearr_47737_48927 = state_47730__$1;
(statearr_47737_48927[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47731 === (6))){
var state_47730__$1 = state_47730;
var statearr_47738_48932 = state_47730__$1;
(statearr_47738_48932[(2)] = null);

(statearr_47738_48932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47731 === (3))){
var inst_47727 = (state_47730[(2)]);
var inst_47728 = cljs.core.async.close_BANG_(out);
var state_47730__$1 = (function (){var statearr_47739 = state_47730;
(statearr_47739[(9)] = inst_47727);

return statearr_47739;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47730__$1,inst_47728);
} else {
if((state_val_47731 === (2))){
var state_47730__$1 = state_47730;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47730__$1,(4),ch);
} else {
if((state_val_47731 === (11))){
var inst_47710 = (state_47730[(8)]);
var inst_47719 = (state_47730[(2)]);
var inst_47707 = inst_47710;
var state_47730__$1 = (function (){var statearr_47740 = state_47730;
(statearr_47740[(10)] = inst_47719);

(statearr_47740[(7)] = inst_47707);

return statearr_47740;
})();
var statearr_47741_48937 = state_47730__$1;
(statearr_47741_48937[(2)] = null);

(statearr_47741_48937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47731 === (9))){
var inst_47710 = (state_47730[(8)]);
var state_47730__$1 = state_47730;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47730__$1,(11),out,inst_47710);
} else {
if((state_val_47731 === (5))){
var inst_47710 = (state_47730[(8)]);
var inst_47707 = (state_47730[(7)]);
var inst_47714 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47710,inst_47707);
var state_47730__$1 = state_47730;
if(inst_47714){
var statearr_47743_48941 = state_47730__$1;
(statearr_47743_48941[(1)] = (8));

} else {
var statearr_47744_48942 = state_47730__$1;
(statearr_47744_48942[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47731 === (10))){
var inst_47722 = (state_47730[(2)]);
var state_47730__$1 = state_47730;
var statearr_47745_48944 = state_47730__$1;
(statearr_47745_48944[(2)] = inst_47722);

(statearr_47745_48944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47731 === (8))){
var inst_47707 = (state_47730[(7)]);
var tmp47742 = inst_47707;
var inst_47707__$1 = tmp47742;
var state_47730__$1 = (function (){var statearr_47746 = state_47730;
(statearr_47746[(7)] = inst_47707__$1);

return statearr_47746;
})();
var statearr_47747_48947 = state_47730__$1;
(statearr_47747_48947[(2)] = null);

(statearr_47747_48947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46216__auto__ = null;
var cljs$core$async$state_machine__46216__auto____0 = (function (){
var statearr_47748 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47748[(0)] = cljs$core$async$state_machine__46216__auto__);

(statearr_47748[(1)] = (1));

return statearr_47748;
});
var cljs$core$async$state_machine__46216__auto____1 = (function (state_47730){
while(true){
var ret_value__46217__auto__ = (function (){try{while(true){
var result__46218__auto__ = switch__46215__auto__(state_47730);
if(cljs.core.keyword_identical_QMARK_(result__46218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46218__auto__;
}
break;
}
}catch (e47749){if((e47749 instanceof Object)){
var ex__46219__auto__ = e47749;
var statearr_47750_48950 = state_47730;
(statearr_47750_48950[(5)] = ex__46219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47749;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48952 = state_47730;
state_47730 = G__48952;
continue;
} else {
return ret_value__46217__auto__;
}
break;
}
});
cljs$core$async$state_machine__46216__auto__ = function(state_47730){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46216__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46216__auto____1.call(this,state_47730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46216__auto____0;
cljs$core$async$state_machine__46216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46216__auto____1;
return cljs$core$async$state_machine__46216__auto__;
})()
})();
var state__46374__auto__ = (function (){var statearr_47751 = (f__46373__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46373__auto__.cljs$core$IFn$_invoke$arity$0() : f__46373__auto__.call(null));
(statearr_47751[(6)] = c__46372__auto___48908);

return statearr_47751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46374__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__47753 = arguments.length;
switch (G__47753) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46372__auto___48957 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46373__auto__ = (function (){var switch__46215__auto__ = (function (state_47791){
var state_val_47792 = (state_47791[(1)]);
if((state_val_47792 === (7))){
var inst_47787 = (state_47791[(2)]);
var state_47791__$1 = state_47791;
var statearr_47793_48959 = state_47791__$1;
(statearr_47793_48959[(2)] = inst_47787);

(statearr_47793_48959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47792 === (1))){
var inst_47754 = (new Array(n));
var inst_47755 = inst_47754;
var inst_47756 = (0);
var state_47791__$1 = (function (){var statearr_47794 = state_47791;
(statearr_47794[(7)] = inst_47756);

(statearr_47794[(8)] = inst_47755);

return statearr_47794;
})();
var statearr_47795_48967 = state_47791__$1;
(statearr_47795_48967[(2)] = null);

(statearr_47795_48967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47792 === (4))){
var inst_47759 = (state_47791[(9)]);
var inst_47759__$1 = (state_47791[(2)]);
var inst_47760 = (inst_47759__$1 == null);
var inst_47761 = cljs.core.not(inst_47760);
var state_47791__$1 = (function (){var statearr_47796 = state_47791;
(statearr_47796[(9)] = inst_47759__$1);

return statearr_47796;
})();
if(inst_47761){
var statearr_47797_48969 = state_47791__$1;
(statearr_47797_48969[(1)] = (5));

} else {
var statearr_47798_48970 = state_47791__$1;
(statearr_47798_48970[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47792 === (15))){
var inst_47781 = (state_47791[(2)]);
var state_47791__$1 = state_47791;
var statearr_47799_48972 = state_47791__$1;
(statearr_47799_48972[(2)] = inst_47781);

(statearr_47799_48972[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47792 === (13))){
var state_47791__$1 = state_47791;
var statearr_47800_48973 = state_47791__$1;
(statearr_47800_48973[(2)] = null);

(statearr_47800_48973[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47792 === (6))){
var inst_47756 = (state_47791[(7)]);
var inst_47777 = (inst_47756 > (0));
var state_47791__$1 = state_47791;
if(cljs.core.truth_(inst_47777)){
var statearr_47801_48978 = state_47791__$1;
(statearr_47801_48978[(1)] = (12));

} else {
var statearr_47802_48979 = state_47791__$1;
(statearr_47802_48979[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47792 === (3))){
var inst_47789 = (state_47791[(2)]);
var state_47791__$1 = state_47791;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47791__$1,inst_47789);
} else {
if((state_val_47792 === (12))){
var inst_47755 = (state_47791[(8)]);
var inst_47779 = cljs.core.vec(inst_47755);
var state_47791__$1 = state_47791;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47791__$1,(15),out,inst_47779);
} else {
if((state_val_47792 === (2))){
var state_47791__$1 = state_47791;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47791__$1,(4),ch);
} else {
if((state_val_47792 === (11))){
var inst_47771 = (state_47791[(2)]);
var inst_47772 = (new Array(n));
var inst_47755 = inst_47772;
var inst_47756 = (0);
var state_47791__$1 = (function (){var statearr_47803 = state_47791;
(statearr_47803[(7)] = inst_47756);

(statearr_47803[(10)] = inst_47771);

(statearr_47803[(8)] = inst_47755);

return statearr_47803;
})();
var statearr_47804_48984 = state_47791__$1;
(statearr_47804_48984[(2)] = null);

(statearr_47804_48984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47792 === (9))){
var inst_47755 = (state_47791[(8)]);
var inst_47769 = cljs.core.vec(inst_47755);
var state_47791__$1 = state_47791;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47791__$1,(11),out,inst_47769);
} else {
if((state_val_47792 === (5))){
var inst_47759 = (state_47791[(9)]);
var inst_47756 = (state_47791[(7)]);
var inst_47755 = (state_47791[(8)]);
var inst_47764 = (state_47791[(11)]);
var inst_47763 = (inst_47755[inst_47756] = inst_47759);
var inst_47764__$1 = (inst_47756 + (1));
var inst_47765 = (inst_47764__$1 < n);
var state_47791__$1 = (function (){var statearr_47805 = state_47791;
(statearr_47805[(12)] = inst_47763);

(statearr_47805[(11)] = inst_47764__$1);

return statearr_47805;
})();
if(cljs.core.truth_(inst_47765)){
var statearr_47806_48999 = state_47791__$1;
(statearr_47806_48999[(1)] = (8));

} else {
var statearr_47807_49004 = state_47791__$1;
(statearr_47807_49004[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47792 === (14))){
var inst_47784 = (state_47791[(2)]);
var inst_47785 = cljs.core.async.close_BANG_(out);
var state_47791__$1 = (function (){var statearr_47809 = state_47791;
(statearr_47809[(13)] = inst_47784);

return statearr_47809;
})();
var statearr_47810_49013 = state_47791__$1;
(statearr_47810_49013[(2)] = inst_47785);

(statearr_47810_49013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47792 === (10))){
var inst_47775 = (state_47791[(2)]);
var state_47791__$1 = state_47791;
var statearr_47811_49015 = state_47791__$1;
(statearr_47811_49015[(2)] = inst_47775);

(statearr_47811_49015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47792 === (8))){
var inst_47755 = (state_47791[(8)]);
var inst_47764 = (state_47791[(11)]);
var tmp47808 = inst_47755;
var inst_47755__$1 = tmp47808;
var inst_47756 = inst_47764;
var state_47791__$1 = (function (){var statearr_47812 = state_47791;
(statearr_47812[(7)] = inst_47756);

(statearr_47812[(8)] = inst_47755__$1);

return statearr_47812;
})();
var statearr_47813_49032 = state_47791__$1;
(statearr_47813_49032[(2)] = null);

(statearr_47813_49032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46216__auto__ = null;
var cljs$core$async$state_machine__46216__auto____0 = (function (){
var statearr_47814 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47814[(0)] = cljs$core$async$state_machine__46216__auto__);

(statearr_47814[(1)] = (1));

return statearr_47814;
});
var cljs$core$async$state_machine__46216__auto____1 = (function (state_47791){
while(true){
var ret_value__46217__auto__ = (function (){try{while(true){
var result__46218__auto__ = switch__46215__auto__(state_47791);
if(cljs.core.keyword_identical_QMARK_(result__46218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46218__auto__;
}
break;
}
}catch (e47815){if((e47815 instanceof Object)){
var ex__46219__auto__ = e47815;
var statearr_47816_49046 = state_47791;
(statearr_47816_49046[(5)] = ex__46219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47815;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49048 = state_47791;
state_47791 = G__49048;
continue;
} else {
return ret_value__46217__auto__;
}
break;
}
});
cljs$core$async$state_machine__46216__auto__ = function(state_47791){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46216__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46216__auto____1.call(this,state_47791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46216__auto____0;
cljs$core$async$state_machine__46216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46216__auto____1;
return cljs$core$async$state_machine__46216__auto__;
})()
})();
var state__46374__auto__ = (function (){var statearr_47817 = (f__46373__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46373__auto__.cljs$core$IFn$_invoke$arity$0() : f__46373__auto__.call(null));
(statearr_47817[(6)] = c__46372__auto___48957);

return statearr_47817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46374__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__47819 = arguments.length;
switch (G__47819) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46372__auto___49074 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46373__auto__ = (function (){var switch__46215__auto__ = (function (state_47861){
var state_val_47862 = (state_47861[(1)]);
if((state_val_47862 === (7))){
var inst_47857 = (state_47861[(2)]);
var state_47861__$1 = state_47861;
var statearr_47863_49079 = state_47861__$1;
(statearr_47863_49079[(2)] = inst_47857);

(statearr_47863_49079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47862 === (1))){
var inst_47820 = [];
var inst_47821 = inst_47820;
var inst_47822 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_47861__$1 = (function (){var statearr_47864 = state_47861;
(statearr_47864[(7)] = inst_47822);

(statearr_47864[(8)] = inst_47821);

return statearr_47864;
})();
var statearr_47865_49084 = state_47861__$1;
(statearr_47865_49084[(2)] = null);

(statearr_47865_49084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47862 === (4))){
var inst_47825 = (state_47861[(9)]);
var inst_47825__$1 = (state_47861[(2)]);
var inst_47826 = (inst_47825__$1 == null);
var inst_47827 = cljs.core.not(inst_47826);
var state_47861__$1 = (function (){var statearr_47866 = state_47861;
(statearr_47866[(9)] = inst_47825__$1);

return statearr_47866;
})();
if(inst_47827){
var statearr_47867_49085 = state_47861__$1;
(statearr_47867_49085[(1)] = (5));

} else {
var statearr_47868_49086 = state_47861__$1;
(statearr_47868_49086[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47862 === (15))){
var inst_47851 = (state_47861[(2)]);
var state_47861__$1 = state_47861;
var statearr_47869_49087 = state_47861__$1;
(statearr_47869_49087[(2)] = inst_47851);

(statearr_47869_49087[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47862 === (13))){
var state_47861__$1 = state_47861;
var statearr_47870_49088 = state_47861__$1;
(statearr_47870_49088[(2)] = null);

(statearr_47870_49088[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47862 === (6))){
var inst_47821 = (state_47861[(8)]);
var inst_47846 = inst_47821.length;
var inst_47847 = (inst_47846 > (0));
var state_47861__$1 = state_47861;
if(cljs.core.truth_(inst_47847)){
var statearr_47871_49093 = state_47861__$1;
(statearr_47871_49093[(1)] = (12));

} else {
var statearr_47872_49094 = state_47861__$1;
(statearr_47872_49094[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47862 === (3))){
var inst_47859 = (state_47861[(2)]);
var state_47861__$1 = state_47861;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47861__$1,inst_47859);
} else {
if((state_val_47862 === (12))){
var inst_47821 = (state_47861[(8)]);
var inst_47849 = cljs.core.vec(inst_47821);
var state_47861__$1 = state_47861;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47861__$1,(15),out,inst_47849);
} else {
if((state_val_47862 === (2))){
var state_47861__$1 = state_47861;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47861__$1,(4),ch);
} else {
if((state_val_47862 === (11))){
var inst_47825 = (state_47861[(9)]);
var inst_47829 = (state_47861[(10)]);
var inst_47839 = (state_47861[(2)]);
var inst_47840 = [];
var inst_47841 = inst_47840.push(inst_47825);
var inst_47821 = inst_47840;
var inst_47822 = inst_47829;
var state_47861__$1 = (function (){var statearr_47873 = state_47861;
(statearr_47873[(7)] = inst_47822);

(statearr_47873[(11)] = inst_47841);

(statearr_47873[(12)] = inst_47839);

(statearr_47873[(8)] = inst_47821);

return statearr_47873;
})();
var statearr_47874_49107 = state_47861__$1;
(statearr_47874_49107[(2)] = null);

(statearr_47874_49107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47862 === (9))){
var inst_47821 = (state_47861[(8)]);
var inst_47837 = cljs.core.vec(inst_47821);
var state_47861__$1 = state_47861;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47861__$1,(11),out,inst_47837);
} else {
if((state_val_47862 === (5))){
var inst_47822 = (state_47861[(7)]);
var inst_47825 = (state_47861[(9)]);
var inst_47829 = (state_47861[(10)]);
var inst_47829__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47825) : f.call(null,inst_47825));
var inst_47830 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47829__$1,inst_47822);
var inst_47831 = cljs.core.keyword_identical_QMARK_(inst_47822,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_47832 = ((inst_47830) || (inst_47831));
var state_47861__$1 = (function (){var statearr_47875 = state_47861;
(statearr_47875[(10)] = inst_47829__$1);

return statearr_47875;
})();
if(cljs.core.truth_(inst_47832)){
var statearr_47876_49109 = state_47861__$1;
(statearr_47876_49109[(1)] = (8));

} else {
var statearr_47877_49110 = state_47861__$1;
(statearr_47877_49110[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47862 === (14))){
var inst_47854 = (state_47861[(2)]);
var inst_47855 = cljs.core.async.close_BANG_(out);
var state_47861__$1 = (function (){var statearr_47879 = state_47861;
(statearr_47879[(13)] = inst_47854);

return statearr_47879;
})();
var statearr_47880_49114 = state_47861__$1;
(statearr_47880_49114[(2)] = inst_47855);

(statearr_47880_49114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47862 === (10))){
var inst_47844 = (state_47861[(2)]);
var state_47861__$1 = state_47861;
var statearr_47881_49116 = state_47861__$1;
(statearr_47881_49116[(2)] = inst_47844);

(statearr_47881_49116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47862 === (8))){
var inst_47825 = (state_47861[(9)]);
var inst_47821 = (state_47861[(8)]);
var inst_47829 = (state_47861[(10)]);
var inst_47834 = inst_47821.push(inst_47825);
var tmp47878 = inst_47821;
var inst_47821__$1 = tmp47878;
var inst_47822 = inst_47829;
var state_47861__$1 = (function (){var statearr_47882 = state_47861;
(statearr_47882[(14)] = inst_47834);

(statearr_47882[(7)] = inst_47822);

(statearr_47882[(8)] = inst_47821__$1);

return statearr_47882;
})();
var statearr_47883_49117 = state_47861__$1;
(statearr_47883_49117[(2)] = null);

(statearr_47883_49117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46216__auto__ = null;
var cljs$core$async$state_machine__46216__auto____0 = (function (){
var statearr_47884 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47884[(0)] = cljs$core$async$state_machine__46216__auto__);

(statearr_47884[(1)] = (1));

return statearr_47884;
});
var cljs$core$async$state_machine__46216__auto____1 = (function (state_47861){
while(true){
var ret_value__46217__auto__ = (function (){try{while(true){
var result__46218__auto__ = switch__46215__auto__(state_47861);
if(cljs.core.keyword_identical_QMARK_(result__46218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46218__auto__;
}
break;
}
}catch (e47885){if((e47885 instanceof Object)){
var ex__46219__auto__ = e47885;
var statearr_47886_49118 = state_47861;
(statearr_47886_49118[(5)] = ex__46219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47861);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47885;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49124 = state_47861;
state_47861 = G__49124;
continue;
} else {
return ret_value__46217__auto__;
}
break;
}
});
cljs$core$async$state_machine__46216__auto__ = function(state_47861){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46216__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46216__auto____1.call(this,state_47861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46216__auto____0;
cljs$core$async$state_machine__46216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46216__auto____1;
return cljs$core$async$state_machine__46216__auto__;
})()
})();
var state__46374__auto__ = (function (){var statearr_47887 = (f__46373__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46373__auto__.cljs$core$IFn$_invoke$arity$0() : f__46373__auto__.call(null));
(statearr_47887[(6)] = c__46372__auto___49074);

return statearr_47887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46374__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
