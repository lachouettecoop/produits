(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{EyDb:function(e,t,r){e.exports=function(){"use strict";function e(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function t(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function r(r){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?t(Object(a),!0).forEach((function(t){e(r,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(a,e))}))}return r}function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var u,c=e[Symbol.iterator]();!(n=(u=c.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function a(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function o(e){var t,r="algoliasearch-client-js-".concat(e.key),a=function(){return void 0===t&&(t=e.localStorage||window.localStorage),t},o=function(){return JSON.parse(a().getItem(r)||"{}")};return{get:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}};return Promise.resolve().then((function(){var r=JSON.stringify(e),n=o()[r];return Promise.all([n||t(),void 0!==n])})).then((function(e){var t=n(e,2),a=t[0],o=t[1];return Promise.all([a,o||r.miss(a)])})).then((function(e){return n(e,1)[0]}))},set:function(e,t){return Promise.resolve().then((function(){var n=o();return n[JSON.stringify(e)]=t,a().setItem(r,JSON.stringify(n)),t}))},delete:function(e){return Promise.resolve().then((function(){var t=o();delete t[JSON.stringify(e)],a().setItem(r,JSON.stringify(t))}))},clear:function(){return Promise.resolve().then((function(){a().removeItem(r)}))}}}function u(e){var t=a(e.caches),r=t.shift();return void 0===r?{get:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}},a=t();return a.then((function(e){return Promise.all([e,r.miss(e)])})).then((function(e){return n(e,1)[0]}))},set:function(e,t){return Promise.resolve(t)},delete:function(e){return Promise.resolve()},clear:function(){return Promise.resolve()}}:{get:function(e,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}};return r.get(e,n,a).catch((function(){return u({caches:t}).get(e,n,a)}))},set:function(e,n){return r.set(e,n).catch((function(){return u({caches:t}).set(e,n)}))},delete:function(e){return r.delete(e).catch((function(){return u({caches:t}).delete(e)}))},clear:function(){return r.clear().catch((function(){return u({caches:t}).clear()}))}}}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{serializable:!0},t={};return{get:function(r,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}},o=JSON.stringify(r);if(o in t)return Promise.resolve(e.serializable?JSON.parse(t[o]):t[o]);var u=n(),c=a&&a.miss||function(){return Promise.resolve()};return u.then((function(e){return c(e)})).then((function(){return u}))},set:function(r,n){return t[JSON.stringify(r)]=e.serializable?JSON.stringify(n):n,Promise.resolve(n)},delete:function(e){return delete t[JSON.stringify(e)],Promise.resolve()},clear:function(){return t={},Promise.resolve()}}}function s(e){for(var t=e.length-1;t>0;t--){var r=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[r],e[r]=n}return e}function i(e,t){return Object.keys(void 0!==t?t:{}).forEach((function(r){e[r]=t[r](e)})),e}function l(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var a=0;return e.replace(/%s/g,(function(){return encodeURIComponent(r[a++])}))}var f={WithinQueryParameters:0,WithinHeaders:1};function d(e,t){var r=e||{},n=r.data||{};return Object.keys(r).forEach((function(e){-1===["timeout","headers","queryParameters","data","cacheable"].indexOf(e)&&(n[e]=r[e])})),{data:Object.entries(n).length>0?n:void 0,timeout:r.timeout||t,headers:r.headers||{},queryParameters:r.queryParameters||{},cacheable:r.cacheable}}var m={Read:1,Write:2,Any:3},p=1,h=2,v=3;function g(e){return r({},e,{status:arguments.length>1&&void 0!==arguments[1]?arguments[1]:p,lastUpdate:Date.now()})}function y(e){return{protocol:e.protocol||"https",url:e.url,accept:e.accept||m.Any}}var b="GET",O="POST";function P(e,t,n,o){var u=[],c=function(e,t){if(e.method!==b&&(void 0!==e.data||void 0!==t.data)){var n=Array.isArray(e.data)?e.data:r({},e.data,{},t.data);return JSON.stringify(n)}}(n,o),s=function(e,t){var n=r({},e.headers,{},t.headers),a={};return Object.keys(n).forEach((function(e){var t=n[e];a[e.toLowerCase()]=t})),a}(e,o),i=n.method,l=n.method!==b?{}:r({},n.data,{},o.data),f=r({"x-algolia-agent":e.userAgent.value},e.queryParameters,{},l,{},o.queryParameters),d=0,m=function t(r,a){var l=r.pop();if(void 0===l)throw{name:"RetryError",message:"Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",transporterStackTrace:N(u)};var m={data:c,headers:s,method:i,url:j(l,n.path,f),connectTimeout:a(d,e.timeouts.connect),responseTimeout:a(d,o.timeout)},p=function(e){var t={request:m,response:e,host:l,triesLeft:r.length};return u.push(t),t},y={onSucess:function(e){return function(e){try{return JSON.parse(e.content)}catch(t){throw function(e,t){return{name:"DeserializationError",message:e,response:t}}(t.message,e)}}(e)},onRetry:function(n){var o=p(n);return n.isTimedOut&&d++,Promise.all([e.logger.info("Retryable failure",q(o)),e.hostsCache.set(l,g(l,n.isTimedOut?v:h))]).then((function(){return t(r,a)}))},onFail:function(e){throw p(e),function(e,t){var r=e.content,n=e.status,a=r;try{a=JSON.parse(r).message}catch(e){}return function(e,t,r){return{name:"ApiError",message:e,status:t,transporterStackTrace:r}}(a,n,t)}(e,N(u))}};return e.requester.send(m).then((function(e){return function(e,t){return function(e){var t=e.status;return e.isTimedOut||function(e){var t=e.isTimedOut,r=e.status;return!t&&0==~~r}(e)||2!=~~(t/100)&&4!=~~(t/100)}(e)?t.onRetry(e):2==~~(e.status/100)?t.onSucess(e):t.onFail(e)}(e,y)}))};return function(e,t){return Promise.all(t.map((function(t){return e.get(t,(function(){return Promise.resolve(g(t))}))}))).then((function(e){var r=e.filter((function(e){return function(e){return e.status===p||Date.now()-e.lastUpdate>12e4}(e)})),n=e.filter((function(e){return function(e){return e.status===v&&Date.now()-e.lastUpdate<=12e4}(e)})),o=[].concat(a(r),a(n));return{getTimeout:function(e,t){return(0===n.length&&0===e?1:n.length+3+e)*t},statelessHosts:o.length>0?o.map((function(e){return y(e)})):t}}))}(e.hostsCache,t).then((function(e){return m(a(e.statelessHosts).reverse(),e.getTimeout)}))}function w(e){var t={value:"Algolia for JavaScript (".concat(e,")"),add:function(e){var r="; ".concat(e.segment).concat(void 0!==e.version?" (".concat(e.version,")"):"");return-1===t.value.indexOf(r)&&(t.value="".concat(t.value).concat(r)),t}};return t}function j(e,t,r){var n=x(r),a="".concat(e.protocol,"://").concat(e.url,"/").concat("/"===t.charAt(0)?t.substr(1):t);return n.length&&(a+="?".concat(n)),a}function x(e){return Object.keys(e).map((function(t){return l("%s=%s",t,(r=e[t],"[object Object]"===Object.prototype.toString.call(r)||"[object Array]"===Object.prototype.toString.call(r)?JSON.stringify(e[t]):e[t]));var r})).join("&")}function N(e){return e.map((function(e){return q(e)}))}function q(e){var t=e.request.headers["x-algolia-api-key"]?{"x-algolia-api-key":"*****"}:{};return r({},e,{request:r({},e.request,{headers:r({},e.request.headers,{},t)})})}var S=function(e){var t=e.appId,a=function(e,t,r){var n={"x-algolia-api-key":r,"x-algolia-application-id":t};return{headers:function(){return e===f.WithinHeaders?n:{}},queryParameters:function(){return e===f.WithinQueryParameters?n:{}}}}(void 0!==e.authMode?e.authMode:f.WithinHeaders,t,e.apiKey),o=function(e){var t=e.hostsCache,r=e.logger,a=e.requester,o=e.requestsCache,u=e.responsesCache,c=e.timeouts,s=e.userAgent,i=e.hosts,l=e.queryParameters,f={hostsCache:t,logger:r,requester:a,requestsCache:o,responsesCache:u,timeouts:c,userAgent:s,headers:e.headers,queryParameters:l,hosts:i.map((function(e){return y(e)})),read:function(e,t){var r=d(t,f.timeouts.read),a=function(){return P(f,f.hosts.filter((function(e){return 0!=(e.accept&m.Read)})),e,r)};if(!0!==(void 0!==r.cacheable?r.cacheable:e.cacheable))return a();var o={request:e,mappedRequestOptions:r,transporter:{queryParameters:f.queryParameters,headers:f.headers}};return f.responsesCache.get(o,(function(){return f.requestsCache.get(o,(function(){return f.requestsCache.set(o,a()).then((function(e){return Promise.all([f.requestsCache.delete(o),e])}),(function(e){return Promise.all([f.requestsCache.delete(o),Promise.reject(e)])})).then((function(e){var t=n(e,2);return t[0],t[1]}))}))}),{miss:function(e){return f.responsesCache.set(o,e)}})},write:function(e,t){return P(f,f.hosts.filter((function(e){return 0!=(e.accept&m.Write)})),e,d(t,f.timeouts.write))}};return f}(r({hosts:[{url:"".concat(t,"-dsn.algolia.net"),accept:m.Read},{url:"".concat(t,".algolia.net"),accept:m.Write}].concat(s([{url:"".concat(t,"-1.algolianet.com")},{url:"".concat(t,"-2.algolianet.com")},{url:"".concat(t,"-3.algolianet.com")}]))},e,{headers:r({},a.headers(),{},{"content-type":"application/x-www-form-urlencoded"},{},e.headers),queryParameters:r({},a.queryParameters(),{},e.queryParameters)}));return i({transporter:o,appId:t,addAlgoliaAgent:function(e,t){o.userAgent.add({segment:e,version:t})},clearCache:function(){return Promise.all([o.requestsCache.clear(),o.responsesCache.clear()]).then((function(){}))}},e.methods)},T=function(e){return function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={transporter:e.transporter,appId:e.appId,indexName:t};return i(n,r.methods)}},A=function(e){return function(t,n){var a=t.map((function(e){return r({},e,{params:x(e.params||{})})}));return e.transporter.read({method:O,path:"1/indexes/*/queries",data:{requests:a},cacheable:!0},n)}},C=function(e){return function(t,n){return Promise.all(t.map((function(t){var a=t.params,o=a.facetName,u=a.facetQuery,c=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(a,["facetName","facetQuery"]);return T(e)(t.indexName,{methods:{searchForFacetValues:E}}).searchForFacetValues(o,u,r({},n,{},c))})))}},_=function(e){return function(t,r){return e.transporter.read({method:O,path:l("1/indexes/%s/query",e.indexName),data:{query:t},cacheable:!0},r)}},E=function(e){return function(t,r,n){return e.transporter.read({method:O,path:l("1/indexes/%s/facets/%s/query",e.indexName,t),data:{facetQuery:r},cacheable:!0},n)}},I=1,k=2,D=3;function J(e,t,n){var a,s={appId:e,apiKey:t,timeouts:{connect:1,read:2,write:30},requester:{send:function(e){return new Promise((function(t){var r=new XMLHttpRequest;r.open(e.method,e.url,!0),Object.keys(e.headers).forEach((function(t){return r.setRequestHeader(t,e.headers[t])}));var n,a=function(e,n){return setTimeout((function(){r.abort(),t({status:0,content:n,isTimedOut:!0})}),1e3*e)},o=a(e.connectTimeout,"Connection timeout");r.onreadystatechange=function(){r.readyState>r.OPENED&&void 0===n&&(clearTimeout(o),n=a(e.responseTimeout,"Socket timeout"))},r.onerror=function(){0===r.status&&(clearTimeout(o),clearTimeout(n),t({content:r.responseText||"Network request failed",status:r.status,isTimedOut:!1}))},r.onload=function(){clearTimeout(o),clearTimeout(n),t({content:r.responseText,status:r.status,isTimedOut:!1})},r.send(e.data)}))}},logger:(a=D,{debug:function(e,t){return I>=a&&console.debug(e,t),Promise.resolve()},info:function(e,t){return k>=a&&console.info(e,t),Promise.resolve()},error:function(e,t){return console.error(e,t),Promise.resolve()}}),responsesCache:c(),requestsCache:c({serializable:!1}),hostsCache:u({caches:[o({key:"".concat("4.0.3","-").concat(e)}),c()]}),userAgent:w("4.0.3").add({segment:"Browser",version:"lite"}),authMode:f.WithinQueryParameters};return S(r({},s,{},n,{methods:{search:A,searchForFacetValues:C,multipleQueries:A,multipleSearchForFacetValues:C,initIndex:function(e){return function(t){return T(e)(t,{methods:{search:_,searchForFacetValues:E}})}}}}))}return J.version="4.0.3",J}()},IxdU:function(e,t,r){"use strict";r.r(t),r.d(t,"__N_SSG",(function(){return C}));var n=r("wx14"),a=r("rePB"),o=r("q1tI"),u=r.n(o),c=r("Z+eW"),s=r("5Yp1"),i=r("sZxp"),l=r.n(i),f=r("VtrM"),d=r("nOHt"),m=r("YFqc"),p=r.n(m),h=r("Tgqd"),v=r("33Fu"),g=r("EyDb"),y=r.n(g),b=r("MSGb"),O=u.a.createElement;function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){Object(a.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j="ZSB27F96MU",x="991cf78786ea4d6715ea04e33ba9fe10",N=y()(j,x).initIndex("produits"),q=function(e){var t=e.quantite,r=e.nom,n=e.product,a=e.category;return O("li",{className:"flex justify-left items-center mb-4"},O("p",{className:"mr-6 w-24"},O("span",{className:"font-bold"},t||O(l.a,{width:5}))," ","\xd7 ",n&&n.price.toFixed(2)||O(l.a,{width:20}),"\u20ac"),O("div",{className:"text-l leading-none "},O("p",null,r||n&&n.name||O(l.a,{width:450}),n&&""!==n.barCode&&O("span",{className:"text-xs ml-4 text-gray-600"},O(v.a,{className:"inline mr-1"}),n.barCode,O(v.a,{className:"inline ml-1"}))),O("p",{className:"text-xs text-gray-600 mt-1"},a?a.replace("ALIMENTAIRE > ",""):O(l.a,{width:300}))))},S=function(e){return e["categories.lvl6"]||e["categories.lvl5"]||e["categories.lvl4"]||e["categories.lvl3"]||e["categories.lvl2"]||e["categories.lvl1"]},T=function(e){var t=e.produits,r=e.total,a=Object(o.useState)(t||Array.from(Array(20)).map((function(e,t){return{id:t}}))),u=a[0],c=a[1];return Object(o.useEffect)((function(){var e=t&&t.map((function(e){return e.odoo_id}));e&&N.search("",{hitsPerPage:e.length,filters:e.map((function(e){return"__export__.product_template_".concat(e)})).map((function(e){return"objectID:".concat(e)})).join(" OR ")}).then((function(e){return e.hits.map((function(e){var r=e.objectID.replace("__export__.product_template_","");return w(w({},t.find((function(e){return e.odoo_id===r}))),{},{id:r,product:e,category:S(e)})})).sort((function(e,t){return e.category.localeCompare(t.category)}))})).then(c)}),[t]),O("div",{className:"border px-6 py-4 w-full"},O("ul",null,u.map((function(e){return O(q,Object(n.a)({},e,{key:e.id}))}))),O("p",{className:"mt-2 pt-2 text-right border-t text-xs"},"Total annonc\xe9 au Chouettos"," ",O("strong",{className:"text-xl pl-2"},r?r.toFixed(2):O(l.a,{width:50}),"\u20ac")))},A=function(){var e=Object(d.useRouter)().query.id,t=Object(f.c)((function(){return e?"/commandes/".concat(e):null})).data;return O("main",null,O("div",{className:"flex items-center"},O(p.a,{href:"/preparations"},O("a",{className:"no-print w-1/2 hover:underline text-gray-600 hover:text-gray-800 flex items-center"},O("span",{className:"border-2 rounded-full inline-block mr-2 p-1"},O(h.b,null)),"Revenir \xe0 la liste des commandes")),O("div",{className:"w-1/2 text-right"},O("span",{className:"font-bold text-4xl"},"#",e),t&&t.statut&&O("span",{className:"no-print ml-4"},O(b.a,{id:e,currentValue:t.statut})))),O("div",{className:"border-2 my-3 py-3 px-4 clear-both"},O("div",{className:"flex"},O("p",{className:"font-bold w-2/3"},"Nom :"," ",t&&t.chouettos?t.chouettos.nom:O(l.a,{width:150})),O("p",{className:"w-1/3 text-right"},t&&t.created_at?O("a",{href:"/preparation.html?".concat(t.code)},O(c.a,{date:new Date(t.created_at)})):O(l.a,{width:150}))),O("p",{className:"font-bold"},"N\xb0 de t\xe9l\xe9phone :"," ",t&&t.chouettos?t.chouettos.telephone:O(l.a,{width:100})),!t||""!==t.notes&&O("p",{className:"my-2"},O("span",{className:"underline"},"Notes :"),O("br",null),t&&t.notes?O("span",{className:"text-sm",contentEditable:"true",dangerouslySetInnerHTML:{__html:t.notes.replace(/\n/g,"<br />")}}):O(l.a,{count:3}))),O(T,{produits:t&&t.produits,total:t&&t.total}))},C=!0;t.default=function(){return O(s.a,null,O(A,null))}},K1PT:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/preparations/[id]",function(){return r("IxdU")}])}},[["K1PT",0,2,4,1,3]]]);