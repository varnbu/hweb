!function(n){var t={};function o(e){if(t[e])return t[e].exports;var r=t[e]={i:e,l:!1,exports:{}};return n[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=n,o.c=t,o.d=function(n,t,e){o.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,t){if(1&t&&(n=o(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)o.d(e,r,function(t){return n[t]}.bind(null,r));return e},o.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(t,"a",t),t},o.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},o.p="",o(o.s=3)}([function(n,t,o){(n.exports=o(1)(!1)).push([n.i,"h1{\r\n    color: red;\r\n}",""])},function(n,t,o){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map(function(t){var o=function(n,t){var o=n[1]||"",e=n[3];if(!e)return o;if(t&&"function"==typeof btoa){var r=function(n){var t=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(o," */")}(e),c=e.sources.map(function(n){return"/*# sourceURL=".concat(e.sourceRoot).concat(n," */")});return[o].concat(c).concat([r]).join("\n")}return[o].join("\n")}(t,n);return t[2]?"@media ".concat(t[2],"{").concat(o,"}"):o}).join("")},t.i=function(n,o){"string"==typeof n&&(n=[[null,n,""]]);for(var e={},r=0;r<this.length;r++){var c=this[r][0];null!=c&&(e[c]=!0)}for(var u=0;u<n.length;u++){var i=n[u];null!=i[0]&&e[i[0]]||(o&&!i[2]?i[2]=o:o&&(i[2]="(".concat(i[2],") and (").concat(o,")")),t.push(i))}},t}},function(n,t,o){},function(n,t,o){"use strict";o.r(t),o(0),o(2),console.log(1),console.log("hello webpack"),console.log("util js"),console.log("say js hot hello util "),fetch("/baidu").then(function(n){console.log(n)})}]);