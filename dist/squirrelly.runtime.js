!function(n,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Sqrl=e():n.Sqrl=e()}("undefined"!=typeof self?self:this,function(){return function(n){var e={};function t(r){if(e[r])return e[r].exports;var u=e[r]={i:r,l:!1,exports:{}};return n[r].call(u.exports,u,u.exports,t),u.l=!0,u.exports}return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var u in n)t.d(r,u,function(e){return n[e]}.bind(null,u));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){"use strict";t.r(e);var r={};t.r(r),t.d(r,"__express",function(){return S}),t.d(r,"H",function(){return b}),t.d(r,"Compile",function(){return x}),t.d(r,"defineFilter",function(){return _}),t.d(r,"defineHelper",function(){return m}),t.d(r,"defineNativeHelper",function(){return w}),t.d(r,"definePartial",function(){return j}),t.d(r,"Render",function(){return O}),t.d(r,"F",function(){return u}),t.d(r,"setDefaultFilters",function(){return f}),t.d(r,"autoEscaping",function(){return c}),t.d(r,"defaultTags",function(){return p});var u={e:function(n){var e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};var t=String(n);return/[&<>"'/]/.test(t)?t.replace(/[&<>"'/]/g,function(n){return e[n]}):t}},i={},o={start:"",end:""};function f(n){if("clear"===n)i={};else for(var e in n)n.hasOwnProperty(e)&&(i[e]=n[e]);!function(){for(var n in o={start:"",end:""},i)i.hasOwnProperty(n)&&i[n]&&(o.start+="Sqrl.F."+n+"(",o.end+=")")}()}function c(n){return!!n}var d=/{{ *?(?:(?:(?:(?:([a-zA-Z_$][\w]* *?(?:[^\s\w($][^\n]*)*?))|(?:@(?:([\w$]+:|(?:\.\.\/)+))? *(.+?) *))(?: *?(\| *?[\w$]+? *?)+?)?)|(?:([a-zA-Z_$][\w]*) *?\(([^\n]*)\) *?([\w]*))|(?:\/ *?([a-zA-Z_$][\w]*))|(?:# *?([a-zA-Z_$][\w]*))|(?:([a-zA-Z_$][\w]*) *?\(([^\n]*)\) *?\/)) *?}}/g,a={s:"{{",e:"}}"},l=d,s=a;function p(n){v(n),d=l,a=s}function v(n){var e=n.slice(0,n.indexOf(",")).trim(),t=n.slice(n.indexOf(",")+1).trim(),r=e+l.source.slice(s.s.length,0-s.e.length)+t,u=l.lastIndex;s={s:e,e:t},(l=RegExp(r,"g")).lastIndex=u}var y={},g={};var x={},b={};function _(n,e){u[n]=e}function m(n,e){b[n]=e}function w(n,e){y[n]=e}function O(n,e){return"function"==typeof n?n(e,r):"string"==typeof n?x(n)(e,r):void 0}function j(n,e){g[n]=e}var S=function(n,e,t){fs.readFile(n,function(n,r){if(n)return t(n);var u=r.toString(),i=O(x(u),e);return t(null,i)})};t.d(e,"__express",function(){return S}),t.d(e,"H",function(){return b}),t.d(e,"Compile",function(){return x}),t.d(e,"defineFilter",function(){return _}),t.d(e,"defineHelper",function(){return m}),t.d(e,"defineNativeHelper",function(){return w}),t.d(e,"definePartial",function(){return j}),t.d(e,"Render",function(){return O}),t.d(e,"F",function(){return u}),t.d(e,"setDefaultFilters",function(){return f}),t.d(e,"autoEscaping",function(){return c}),t.d(e,"defaultTags",function(){return p})}])});
//# sourceMappingURL=squirrelly.runtime.js.map