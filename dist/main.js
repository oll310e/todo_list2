(()=>{"use strict";var n={890:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --default-text: aliceblue;\n  --dark-text: rgb(6, 6, 6);\n  --header: rgb(40, 40, 40);\n  --menu: rgb(163, 163, 163);\n  --main: rgb(183, 183, 183);\n}\n\n.container {\n  min-height: 100vh;\n  display: grid;\n  grid-template-columns: minmax(125px, 250px) minmax(300px, 1fr);\n  grid-template-rows: 100px 1fr 100px;\n  color: var(--default-text);\n}\n\n/* Header */\nheader {\n  background-color: var(--header);\n  grid-column: 1/3;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 22.5px;\n}\n\nheader > i {\n  font-size: 30px;\n}\n\n/* Menu */\nmenu {\n  background-color: var(--menu);\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 20px;\n  padding: 20px 10%;\n}\n\nmenu > ul.menuTaskList,\nmenu > ul.menuProjectsList {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 100%;\n}\n\nmenu > ul.menuTaskList > li,\nmenu > ul.menuProjectsList > li {\n  display: grid;\n  grid-template-columns: 30px 1fr;\n  gap: 5px;\n  width: 100%;\n  padding: 3px;\n  align-items: center;\n}\n\nmenu > ul.menuTaskList > li > i {\n  text-align: center;\n}\n\nmenu > ul.menuTaskList,\nmenu > ul.menuProjectsList {\n  list-style: none;\n  color: var(--header);\n  font-size: 20px;\n}\n\nmenu > ul.menuTaskList > li:hover,\nmenu > ul.menuProjectsList > li:hover {\n  background-color: grey;\n  border-radius: 3px;\n}\n\n/* Main */\nmain {\n  background-color: var(--main);\n}\n\n/* Footer */\nfooter {\n  background-color: var(--header);\n  grid-column: 1/3;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 20px;\n}\n",""]);const s=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<n.length;u++){var l=[].concat(n[u]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],u=r.base?c[0]+r.base:c[0],l=a[u]||0,d="".concat(u," ").concat(l);a[u]=l+1;var p=t(d),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=o(m,r);r.byIndex=s,e.splice(s,0,{identifier:d,updater:f,references:1})}i.push(d)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=r(n,o),u=0;u<a.length;u++){var l=t(a[u]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{const n=()=>document.querySelector("menu");var e=t(379),r=t.n(e),o=t(795),a=t.n(o),i=t(569),s=t.n(i),c=t(565),u=t.n(c),l=t(216),d=t.n(l),p=t(589),m=t.n(p),f=t(890),v={};v.styleTagTransform=m(),v.setAttributes=u(),v.insert=s().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=d(),r()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals,console.log(n())})()})();