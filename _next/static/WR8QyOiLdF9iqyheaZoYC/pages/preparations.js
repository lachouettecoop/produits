(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"2W6z":function(e,t,n){"use strict";var o=function(){};e.exports=o},"2rMq":function(e,t,n){var o;!function(){"use strict";var r=!("undefined"===typeof window||!window.document||!window.document.createElement),a={canUseDOM:r,canUseWorkers:"undefined"!==typeof Worker,canUseEventListeners:r&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:r&&!!window.screen};void 0===(o=function(){return a}.call(t,n,t,e))||(e.exports=o)}()},"2zs7":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.canUseDOM=void 0;var o,r=n("2rMq");var a=((o=r)&&o.__esModule?o:{default:o}).default,s=a.canUseDOM?window.HTMLElement:{};t.canUseDOM=a.canUseDOM;t.default=s},"9rZX":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=n("qFS3"),a=(o=r)&&o.__esModule?o:{default:o};t.default=a.default,e.exports=t.default},Kw9S:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/preparations",function(){return n("oaP0")}])},QEso:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n("q1tI"),l=v(s),u=v(n("17x9")),i=h(n("VKEO")),c=v(n("S1to")),f=h(n("Ye7m")),d=h(n("fbhf")),p=v(n("2zs7")),m=v(n("UIKY"));function h(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function v(e){return e&&e.__esModule?e:{default:e}}n("WkvU");var y={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},b=9,O=27,g=0,C=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setOverlayRef=function(e){n.overlay=e,n.props.overlayRef&&n.props.overlayRef(e)},n.setContentRef=function(e){n.content=e,n.props.contentRef&&n.props.contentRef(e)},n.afterClose=function(){var e=n.props,t=e.appElement,o=e.ariaHideApp,r=e.htmlOpenClassName,a=e.bodyOpenClassName;a&&d.remove(document.body,a),r&&d.remove(document.getElementsByTagName("html")[0],r),o&&g>0&&0===(g-=1)&&f.show(t),n.props.shouldFocusAfterRender&&(n.props.shouldReturnFocusAfterClose?(i.returnFocus(),i.teardownScopedFocus()):i.popWithoutFocus()),n.props.onAfterClose&&n.props.onAfterClose(),m.default.deregister(n)},n.open=function(){n.beforeOpen(),n.state.afterOpen&&n.state.beforeClose?(clearTimeout(n.closeTimer),n.setState({beforeClose:!1})):(n.props.shouldFocusAfterRender&&(i.setupScopedFocus(n.node),i.markForFocusLater()),n.setState({isOpen:!0},(function(){n.setState({afterOpen:!0}),n.props.isOpen&&n.props.onAfterOpen&&n.props.onAfterOpen({overlayEl:n.overlay,contentEl:n.content})})))},n.close=function(){n.props.closeTimeoutMS>0?n.closeWithTimeout():n.closeWithoutTimeout()},n.focusContent=function(){return n.content&&!n.contentHasFocus()&&n.content.focus()},n.closeWithTimeout=function(){var e=Date.now()+n.props.closeTimeoutMS;n.setState({beforeClose:!0,closesAt:e},(function(){n.closeTimer=setTimeout(n.closeWithoutTimeout,n.state.closesAt-Date.now())}))},n.closeWithoutTimeout=function(){n.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},n.afterClose)},n.handleKeyDown=function(e){e.keyCode===b&&(0,c.default)(n.content,e),n.props.shouldCloseOnEsc&&e.keyCode===O&&(e.stopPropagation(),n.requestClose(e))},n.handleOverlayOnClick=function(e){null===n.shouldClose&&(n.shouldClose=!0),n.shouldClose&&n.props.shouldCloseOnOverlayClick&&(n.ownerHandlesClose()?n.requestClose(e):n.focusContent()),n.shouldClose=null},n.handleContentOnMouseUp=function(){n.shouldClose=!1},n.handleOverlayOnMouseDown=function(e){n.props.shouldCloseOnOverlayClick||e.target!=n.overlay||e.preventDefault()},n.handleContentOnClick=function(){n.shouldClose=!1},n.handleContentOnMouseDown=function(){n.shouldClose=!1},n.requestClose=function(e){return n.ownerHandlesClose()&&n.props.onRequestClose(e)},n.ownerHandlesClose=function(){return n.props.onRequestClose},n.shouldBeClosed=function(){return!n.state.isOpen&&!n.state.beforeClose},n.contentHasFocus=function(){return document.activeElement===n.content||n.content.contains(document.activeElement)},n.buildClassName=function(e,t){var o="object"===("undefined"===typeof t?"undefined":r(t))?t:{base:y[e],afterOpen:y[e]+"--after-open",beforeClose:y[e]+"--before-close"},a=o.base;return n.state.afterOpen&&(a=a+" "+o.afterOpen),n.state.beforeClose&&(a=a+" "+o.beforeClose),"string"===typeof t&&t?a+" "+t:a},n.attributesFromObject=function(e,t){return Object.keys(t).reduce((function(n,o){return n[e+"-"+o]=t[o],n}),{})},n.state={afterOpen:!1,beforeClose:!1},n.shouldClose=null,n.moveFromContentToOverlay=null,n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(e,t){this.props.isOpen&&!e.isOpen?this.open():!this.props.isOpen&&e.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!t.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer)}},{key:"beforeOpen",value:function(){var e=this.props,t=e.appElement,n=e.ariaHideApp,o=e.htmlOpenClassName,r=e.bodyOpenClassName;r&&d.add(document.body,r),o&&d.add(document.getElementsByTagName("html")[0],o),n&&(g+=1,f.hide(t)),m.default.register(this)}},{key:"render",value:function(){var e=this.props,t=e.id,n=e.className,r=e.overlayClassName,a=e.defaultStyles,s=n?{}:a.content,u=r?{}:a.overlay;return this.shouldBeClosed()?null:l.default.createElement("div",{ref:this.setOverlayRef,className:this.buildClassName("overlay",r),style:o({},u,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},l.default.createElement("div",o({id:t,ref:this.setContentRef,style:o({},s,this.props.style.content),className:this.buildClassName("content",n),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",this.props.aria||{}),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),this.props.children))}}]),t}(s.Component);C.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},C.propTypes={isOpen:u.default.bool.isRequired,defaultStyles:u.default.shape({content:u.default.object,overlay:u.default.object}),style:u.default.shape({content:u.default.object,overlay:u.default.object}),className:u.default.oneOfType([u.default.string,u.default.object]),overlayClassName:u.default.oneOfType([u.default.string,u.default.object]),bodyOpenClassName:u.default.string,htmlOpenClassName:u.default.string,ariaHideApp:u.default.bool,appElement:u.default.instanceOf(p.default),onAfterOpen:u.default.func,onAfterClose:u.default.func,onRequestClose:u.default.func,closeTimeoutMS:u.default.number,shouldFocusAfterRender:u.default.bool,shouldCloseOnOverlayClick:u.default.bool,shouldReturnFocusAfterClose:u.default.bool,role:u.default.string,contentLabel:u.default.string,aria:u.default.object,data:u.default.object,children:u.default.node,shouldCloseOnEsc:u.default.bool,overlayRef:u.default.func,contentRef:u.default.func,id:u.default.string,testId:u.default.string},t.default=C,e.exports=t.default},S1to:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=(0,a.default)(e);if(!n.length)return void t.preventDefault();var o=void 0,r=t.shiftKey,s=n[0],l=n[n.length-1];if(e===document.activeElement){if(!r)return;o=l}l!==document.activeElement||r||(o=s);s===document.activeElement&&r&&(o=l);if(o)return t.preventDefault(),void o.focus();var u=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);if(null==u||"Chrome"==u[1]||null!=/\biPod\b|\biPad\b/g.exec(navigator.userAgent))return;var i=n.indexOf(document.activeElement);i>-1&&(i+=r?-1:1);if("undefined"===typeof(o=n[i]))return t.preventDefault(),void(o=r?l:s).focus();t.preventDefault(),o.focus()};var o,r=n("ZDLa"),a=(o=r)&&o.__esModule?o:{default:o};e.exports=t.default},TSYQ:function(e,t,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o)&&o.length){var s=r.apply(null,o);s&&e.push(s)}else if("object"===a)for(var l in o)n.call(o,l)&&o[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()},UIKY:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=new function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.register=function(e){-1===t.openInstances.indexOf(e)&&(t.openInstances.push(e),t.emit("register"))},this.deregister=function(e){var n=t.openInstances.indexOf(e);-1!==n&&(t.openInstances.splice(n,1),t.emit("deregister"))},this.subscribe=function(e){t.subscribers.push(e)},this.emit=function(e){t.subscribers.forEach((function(n){return n(e,t.openInstances.slice())}))},this.openInstances=[],this.subscribers=[]};t.default=o,e.exports=t.default},VCL8:function(e,t,n){"use strict";function o(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function r(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!==n&&void 0!==n?n:null}.bind(this))}function a(e,t){try{var n=this.props,o=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,o)}finally{this.props=n,this.state=o}}function s(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!==typeof e.getDerivedStateFromProps&&"function"!==typeof t.getSnapshotBeforeUpdate)return e;var n=null,s=null,l=null;if("function"===typeof t.componentWillMount?n="componentWillMount":"function"===typeof t.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"===typeof t.componentWillReceiveProps?s="componentWillReceiveProps":"function"===typeof t.UNSAFE_componentWillReceiveProps&&(s="UNSAFE_componentWillReceiveProps"),"function"===typeof t.componentWillUpdate?l="componentWillUpdate":"function"===typeof t.UNSAFE_componentWillUpdate&&(l="UNSAFE_componentWillUpdate"),null!==n||null!==s||null!==l){var u=e.displayName||e.name,i="function"===typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+u+" uses "+i+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==s?"\n  "+s:"")+(null!==l?"\n  "+l:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"===typeof e.getDerivedStateFromProps&&(t.componentWillMount=o,t.componentWillReceiveProps=r),"function"===typeof t.getSnapshotBeforeUpdate){if("function"!==typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=a;var c=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var o=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;c.call(this,e,t,o)}}return e}n.r(t),n.d(t,"polyfill",(function(){return s})),o.__suppressDeprecationWarning=!0,r.__suppressDeprecationWarning=!0,a.__suppressDeprecationWarning=!0},VKEO:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handleBlur=i,t.handleFocus=c,t.markForFocusLater=function(){s.push(document.activeElement)},t.returnFocus=function(){var e=null;try{return void(0!==s.length&&(e=s.pop()).focus())}catch(t){console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}},t.popWithoutFocus=function(){s.length>0&&s.pop()},t.setupScopedFocus=function(e){l=e,window.addEventListener?(window.addEventListener("blur",i,!1),document.addEventListener("focus",c,!0)):(window.attachEvent("onBlur",i),document.attachEvent("onFocus",c))},t.teardownScopedFocus=function(){l=null,window.addEventListener?(window.removeEventListener("blur",i),document.removeEventListener("focus",c)):(window.detachEvent("onBlur",i),document.detachEvent("onFocus",c))};var o,r=n("ZDLa"),a=(o=r)&&o.__esModule?o:{default:o};var s=[],l=null,u=!1;function i(){u=!0}function c(){if(u){if(u=!1,!l)return;setTimeout((function(){l.contains(document.activeElement)||((0,a.default)(l)[0]||l).focus()}),0)}}},WkvU:function(e,t,n){"use strict";var o,r=n("UIKY"),a=(o=r)&&o.__esModule?o:{default:o};var s=void 0,l=void 0,u=[];function i(){0!==u.length&&u[u.length-1].focusContent()}a.default.subscribe((function(e,t){s&&l||((s=document.createElement("div")).setAttribute("data-react-modal-body-trap",""),s.style.position="absolute",s.style.opacity="0",s.setAttribute("tabindex","0"),s.addEventListener("focus",i),(l=s.cloneNode()).addEventListener("focus",i)),(u=t).length>0?(document.body.firstChild!==s&&document.body.insertBefore(s,document.body.firstChild),document.body.lastChild!==l&&document.body.appendChild(l)):(s.parentElement&&s.parentElement.removeChild(s),l.parentElement&&l.parentElement.removeChild(l))}))},Ye7m:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.assertNodeList=u,t.setElement=function(e){var t=e;if("string"===typeof t&&s.canUseDOM){var n=document.querySelectorAll(t);u(n,t),t="length"in n?n[0]:n}return l=t||l},t.validateElement=i,t.hide=function(e){i(e)&&(e||l).setAttribute("aria-hidden","true")},t.show=function(e){i(e)&&(e||l).removeAttribute("aria-hidden")},t.documentNotReadyOrSSRTesting=function(){l=null},t.resetForTesting=function(){l=null};var o,r=n("2W6z"),a=(o=r)&&o.__esModule?o:{default:o},s=n("2zs7");var l=null;function u(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function i(e){return!(!e&&!l)||((0,a.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),!1)}},ZDLa:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return[].slice.call(e.querySelectorAll("*"),0).filter(s)};var o=/input|select|textarea|button|object/;function r(e){var t=e.offsetWidth<=0&&e.offsetHeight<=0;if(t&&!e.innerHTML)return!0;var n=window.getComputedStyle(e);return t?"visible"!==n.getPropertyValue("overflow")||e.scrollWidth<=0&&e.scrollHeight<=0:"none"==n.getPropertyValue("display")}function a(e,t){var n=e.nodeName.toLowerCase();return(o.test(n)&&!e.disabled||"a"===n&&e.href||t)&&function(e){for(var t=e;t&&t!==document.body;){if(r(t))return!1;t=t.parentNode}return!0}(e)}function s(e){var t=e.getAttribute("tabindex");null===t&&(t=void 0);var n=isNaN(t);return(n||t>=0)&&a(e,!n)}e.exports=t.default},fbhf:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.dumpClassLists=function(){0};var o={},r={};t.add=function(e,t){return n=e.classList,a="html"==e.nodeName.toLowerCase()?o:r,void t.split(" ").forEach((function(e){!function(e,t){e[t]||(e[t]=0),e[t]+=1}(a,e),n.add(e)}));var n,a},t.remove=function(e,t){return n=e.classList,a="html"==e.nodeName.toLowerCase()?o:r,void t.split(" ").forEach((function(e){!function(e,t){e[t]&&(e[t]-=1)}(a,e),0===a[e]&&n.remove(e)}));var n,a}},oaP0:function(e,t,n){"use strict";n.r(t);var o=n("wx14"),r=n("q1tI"),a=n.n(r),s=n("sZxp"),l=n.n(s),u=n("o0o1"),i=n.n(u);function c(e,t,n,o,r,a,s){try{var l=e[a](s),u=l.value}catch(i){return void n(i)}l.done?t(u):Promise.resolve(u).then(o,r)}var f=["nouvelle","imprimee","preparation","prete","livree"],d=function(e){return{"bg-green-400":"nouvelle"===e,"bg-green-500":"imprimee"===e,"bg-green-600":"preparation"===e,"bg-green-700":"prete"===e,"bg-green-900":"livree"===e}},p=function(e,t){return f.indexOf(e)-f.indexOf(t)},m=n("TSYQ"),h=n.n(m),v=n("Tgqd"),y=n("9rZX"),b=n.n(y),O=n("VtrM"),g=n("5Yp1"),C=a.a.createElement;b.a.setAppElement("#__next");var w=function(e){var t=e.value,n=e.onEdit;return t?C("button",{className:h()("text-white shadow rounded",d(t),"hover:underline"),onClick:function(){return n()},title:"Modifier"},C("span",{className:"pl-2 pr-1 py-1"},t),C(v.c,{className:"ml-1 mr-2 inline"})):C(l.a,{width:100})},x=function(e){var t=e.id,n=e.newStatut,o=e.variant,a=e.onSuccess,s=Object(r.useState)(!1),l=s[0],u=s[1],f=function(){var e,o=(e=i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,Object(g.b)("/commandes/".concat(t),{method:"PUT",body:JSON.stringify({statut:n})});case 3:O.b.keys().filter((function(e){return e.startsWith("/commandes")})).forEach((function(e){return Object(O.d)(e)})),u(!1),a();case 7:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(o,r){var a=e.apply(t,n);function s(e){c(a,o,r,s,l,"next",e)}function l(e){c(a,o,r,s,l,"throw",e)}s(void 0)}))});return function(){return o.apply(this,arguments)}}();return C("button",{className:h()("flex-1 py-4 text-white text-2xl border-4 border-transparent hover:border-gray-800",d(n),{"font-bold":"next"===o}),onClick:f,disabled:l},l?"Modification en cours \u2026":C(r.Fragment,null,"previous"===o&&C(v.d,{className:"inline mr-2"}),C("span",null,n),"next"===o&&C(v.b,{className:"inline ml-2"})))},_=function(e){var t=e.currentValue,n=e.id,o=Object(r.useState)(!1),a=o[0],s=o[1],l=function(e){var t=f.indexOf(e);return t<=0?null:f[t-1]}(t),u=function(e){var t=f.indexOf(e);return-1===t||t+1>f.length-1?null:f[t+1]}(t),i=function(){return s(!1)};return C(r.Fragment,null,C(w,{value:t,onEdit:function(){return s(!0)}}),C(b.a,{isOpen:a,onRequestClose:i},C("div",{className:"flex flex-col justify-between h-full"},C("div",null,C("button",{title:"Fermer",className:"float-right flex flex-col items-center  text-red-600 hover:text-red-700",onClick:i},C(v.e,{className:"text-4xl"}),C("span",{className:"text-xs"},"(Esc)")),C("h2",{className:"text-4xl"},"Modifier le statut de la commande"),C("p",null,"Cet \xe9cran vous permet de modifier le statut de la commande, pour refl\xe9ter son \xe9tat d'avancement durant l'ouverture du Lab."),C("p",null,"Une commande suit un avancement d\xe9fini, aussi"," ",C("strong",null,"seuls les statuts suivants et pr\xe9c\xe9dents sont s\xe9lectionnables ici."))),C("p",{className:h()(d(t),"text-white text-center py-8 flex flex-col")},C("span",{className:"text-4xl font-bold"},t),C("span",{className:""},"Statut actuel")),C("div",null,C("p",{className:"text-center text-gray-500"},"Choisissez le nouveau statut ci-dessous\xa0:"),C("div",{className:"flex items-stretch mt-1"},l&&C(x,{id:n,newStatut:l,variant:"previous",onSuccess:i}),u&&C(x,{id:n,newStatut:u,variant:"next",onSuccess:i}))))))},E=n("Z+eW"),S=n("YFqc"),N=n.n(S),j=a.a.createElement,M=function(e){var t=e.value;return j("span",{className:"text-sm text-gray-600"},t?j(E.a,{date:new Date(t)}):j(l.a,{width:100}))},P=function(e){var t=e.nom_chouettos,n=e.total,o=e.statut,r=e.created_at,a=e.id,s=e.notes,u=e.chouettos;return j("div",{className:"my-4 w-1/2 md:w-1/3 hover:bg-gray-200  relative"},j("div",{className:"absolute top-0 right-0 mt-4 mr-8"},j(_,{currentValue:o,id:a})),j(N.a,{href:a?"/preparations/".concat(a):"#"},j("a",{className:"py-4 px-8 h-full flex flex-col justify-between"},j("div",null,j("p",{className:"text-4xl"},a?"#".concat(a):j(l.a,{width:40})),j(M,{value:r})),j("div",{className:"my-4"},j("p",{className:"text-xl"},t||j(l.a,{width:200})),j("p",{className:"text-gray-600"},"T\xe9l : ",u?u.telephone:j(l.a,{width:200})),""!==s&&j("p",{className:"mt-2 my-4 p-2 border-l border-gray-500 text-sm"},s?j("span",{dangerouslySetInnerHTML:{__html:s.replace(/\n/g,"<br />")}}):j(l.a,{count:3}))),j("p",{className:"text-right text-xl text-gray-600 mt-auto"},n&&n.toFixed(2)||j(l.a,{width:20}),"\u20ac"))))},D=n("rePB"),F=a.a.createElement;function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){Object(D.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k=function(e){var t=e.value,n=e.onChange,o=e.commandes,r=o&&o.reduce((function(e,t){var n=t.statut,o=t.total,r=e[n]||{count:0,total:0};return A(A({},e),{},Object(D.a)({},n,{count:r.count+1,total:r.total+Number(o)}))}),{});return F("div",{className:"mt-4 flex content-center justify-between"},r?Object.keys(r).sort(p).map((function(e){var o=e===t;return F("button",{className:h()("px-4 py-2 text-white font-bold flex flex-col",d(e),{"shadow-md":o,underline:o}),onClick:function(){return n(o?null:e)},key:e},F("span",null,e," \xd7",r[e].count),F("span",{className:"text-xs"},Math.round(r[e].total)," \u20ac"))})):F(l.a,{width:130,height:40,count:5,wrapper:function(e){var t=e.children;return F("span",{className:"mr-4"},t)}}))},T=a.a.createElement,U=function(e){var t=e.commandes,n=t&&t.reduce((function(e,t){return e+t.total}),0);return T("div",{className:"my-4 pb-4 flex flex-col text-center"},T("span",{className:"text-6xl"},Math.round(n)||T(l.a,{width:145})," \u20ac"),T("p",{className:"text-gray-500"},"Total des commandes"))},W=function(){var e=Object(O.c)("/commandes?statut_ne=archivee&_sort=created_at:DESC",{refreshInterval:3e4}).data,t=Object(r.useState)(null),n=t[0],a=t[1];return T(r.Fragment,null,T(U,{commandes:e}),T(k,{value:n,onChange:a,commandes:e}),T("div",{className:"my-4 flex flex-wrap"},e?e.filter((function(e){return!n||e.statut===n})).map((function(e){return T(P,Object(o.a)({key:e.id},e))})):Array.from(Array(10)).map((function(e,t){return T(P,{key:t})}))))};t.default=function(){return T(g.a,null,T("main",null,T("p",null,"Cette page contient toutes les commandes pass\xe9es sur le Drive, notamment \xe0 traiter."),T("p",null,"Elle est utilis\xe9e au Lab, pour aider \xe0 la pr\xe9paration des commandes. La personne qui organise l'activit\xe9 (le ou la GH) peut ainsi avoir un aper\xe7u de l'\xe9tat des commandes en cours et \xe0 venir."),T(W,null)))}},qFS3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.bodyOpenClassName=t.portalClassName=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n("q1tI"),s=m(a),l=m(n("i8i4")),u=m(n("17x9")),i=m(n("QEso")),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n("Ye7m")),f=n("2zs7"),d=m(f),p=n("VCL8");function m(e){return e&&e.__esModule?e:{default:e}}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var v=t.portalClassName="ReactModalPortal",y=t.bodyOpenClassName="ReactModal__Body--open",b=void 0!==l.default.createPortal,O=function(){return b?l.default.createPortal:l.default.unstable_renderSubtreeIntoContainer};function g(e){return e()}var C=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,u=Array(a),c=0;c<a;c++)u[c]=arguments[c];return n=r=h(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r.removePortal=function(){!b&&l.default.unmountComponentAtNode(r.node);var e=g(r.props.parentSelector);e?e.removeChild(r.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},r.portalRef=function(e){r.portal=e},r.renderPortal=function(e){var n=O()(r,s.default.createElement(i.default,o({defaultStyles:t.defaultStyles},e)),r.node);r.portalRef(n)},h(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){f.canUseDOM&&(b||(this.node=document.createElement("div")),this.node.className=this.props.portalClassName,g(this.props.parentSelector).appendChild(this.node),!b&&this.renderPortal(this.props))}},{key:"getSnapshotBeforeUpdate",value:function(e){return{prevParent:g(e.parentSelector),nextParent:g(this.props.parentSelector)}}},{key:"componentDidUpdate",value:function(e,t,n){if(f.canUseDOM){var o=this.props,r=o.isOpen,a=o.portalClassName;e.portalClassName!==a&&(this.node.className=a);var s=n.prevParent,l=n.nextParent;l!==s&&(s.removeChild(this.node),l.appendChild(this.node)),(e.isOpen||r)&&!b&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(f.canUseDOM&&this.node&&this.portal){var e=this.portal.state,t=Date.now(),n=e.isOpen&&this.props.closeTimeoutMS&&(e.closesAt||t+this.props.closeTimeoutMS);n?(e.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,n-t)):this.removePortal()}}},{key:"render",value:function(){return f.canUseDOM&&b?(!this.node&&b&&(this.node=document.createElement("div")),O()(s.default.createElement(i.default,o({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)):null}}],[{key:"setAppElement",value:function(e){c.setElement(e)}}]),t}(a.Component);C.propTypes={isOpen:u.default.bool.isRequired,style:u.default.shape({content:u.default.object,overlay:u.default.object}),portalClassName:u.default.string,bodyOpenClassName:u.default.string,htmlOpenClassName:u.default.string,className:u.default.oneOfType([u.default.string,u.default.shape({base:u.default.string.isRequired,afterOpen:u.default.string.isRequired,beforeClose:u.default.string.isRequired})]),overlayClassName:u.default.oneOfType([u.default.string,u.default.shape({base:u.default.string.isRequired,afterOpen:u.default.string.isRequired,beforeClose:u.default.string.isRequired})]),appElement:u.default.instanceOf(d.default),onAfterOpen:u.default.func,onRequestClose:u.default.func,closeTimeoutMS:u.default.number,ariaHideApp:u.default.bool,shouldFocusAfterRender:u.default.bool,shouldCloseOnOverlayClick:u.default.bool,shouldReturnFocusAfterClose:u.default.bool,parentSelector:u.default.func,aria:u.default.object,data:u.default.object,role:u.default.string,contentLabel:u.default.string,shouldCloseOnEsc:u.default.bool,overlayRef:u.default.func,contentRef:u.default.func},C.defaultProps={isOpen:!1,portalClassName:v,bodyOpenClassName:y,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,parentSelector:function(){return document.body}},C.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}},(0,p.polyfill)(C),t.default=C}},[["Kw9S",0,2,1,3]]]);