(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/tab/tab"],{"08c3":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={name:"tab",props:{list:{type:Array,default:[]},tabIndex:{type:Number,default:0}},watch:{tabIndex:function(n,t){this.activeIndex=n}},data:function(){return{activeIndex:0}},methods:{clickTab:function(n,t){this.activeIndex=t,this.$emit("tab",{data:n,index:t})}}};t.default=u},5917:function(n,t,e){"use strict";e.r(t);var u=e("a388"),a=e("bb85");for(var c in a)"default"!==c&&function(n){e.d(t,n,(function(){return a[n]}))}(c);e("c912");var i,o=e("f0c5"),r=Object(o["a"])(a["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],i);t["default"]=r.exports},"8e60":function(n,t,e){},a388:function(n,t,e){"use strict";e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return c})),e.d(t,"a",(function(){return u}));var u={uniIcons:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(e.bind(null,"a193"))}},a=function(){var n=this,t=n.$createElement;n._self._c},c=[]},bb85:function(n,t,e){"use strict";e.r(t);var u=e("08c3"),a=e.n(u);for(var c in u)"default"!==c&&function(n){e.d(t,n,(function(){return u[n]}))}(c);t["default"]=a.a},c912:function(n,t,e){"use strict";var u=e("8e60"),a=e.n(u);a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/tab/tab-create-component',
    {
        'components/tab/tab-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("5917"))
        })
    },
    [['components/tab/tab-create-component']]
]);
