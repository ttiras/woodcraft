/*! For license information please see 16.73860132.chunk.js.LICENSE.txt */
(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[16],{524:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var o=r.apply(null,n);o&&e.push(o)}else if("object"===i)for(var c in n)a.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},525:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(116),o=a(163);t.a=function(){return r.a.createElement("div",{className:"breadcrumb-area pt-35 pb-35 bg-gray-3"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"breadcrumb-content text-center"},r.a.createElement(o.Breadcrumbs,{separator:r.a.createElement("span",null,"/"),item:i.c,finalItem:"span"}))))}},528:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return u}));var n=a(11),r=a(555),i=a.n(r),o=a(0),c=a.n(o),l=c.a.createContext({});l.Consumer,l.Provider;function s(e,t){var a=Object(o.useContext)(l);return e||a[t]||t}function u(e,t){"string"===typeof t&&(t={prefix:t});var a=e.prototype&&e.prototype.isReactComponent,r=t,o=r.prefix,l=r.forwardRefAs,u=void 0===l?a?"ref":"innerRef":l;return i()((function(t,a){var r=Object(n.a)({},t);r[u]=a;var i=s(r.bsPrefix,o);return c.a.createElement(e,Object(n.a)({},r,{bsPrefix:i}))}),{displayName:"Bootstrap("+(e.displayName||e.name)+")"})}},538:function(e,t,a){"use strict";t.a=!("undefined"===typeof window||!window.document||!window.document.createElement)},543:function(e,t,a){"use strict";function n(e){return e&&e.ownerDocument||document}a.d(t,"a",(function(){return n}))},553:function(e,t,a){"use strict";var n=a(543);function r(e,t){return function(e){var t=Object(n.a)(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var i=/([A-Z])/g;var o=/^ms-/;function c(e){return function(e){return e.replace(i,"-$1").toLowerCase()}(e).replace(o,"-ms-")}var l=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;t.a=function(e,t){var a="",n="";if("string"===typeof t)return e.style.getPropertyValue(c(t))||r(e).getPropertyValue(c(t));Object.keys(t).forEach((function(r){var i=t[r];i||0===i?!function(e){return!(!e||!l.test(e))}(r)?a+=c(r)+": "+i+";":n+=r+"("+i+") ":e.style.removeProperty(c(r))})),n&&(a+="transform: "+n+";"),e.style.cssText+=";"+a}},555:function(e,t,a){"use strict";t.__esModule=!0,t.default=function(e,t){var a=void 0===t?{}:t,n=a.propTypes,i=a.defaultProps,o=a.allowFallback,c=void 0!==o&&o,l=a.displayName,s=void 0===l?e.name||e.displayName:l,u=function(t,a){return e(t,a)};return Object.assign(r.default.forwardRef||!c?r.default.forwardRef(u):function(e){return u(e,null)},{displayName:s,propTypes:n,defaultProps:i})};var n,r=(n=a(0))&&n.__esModule?n:{default:n}},562:function(e,t,a){"use strict";var n=a(18),r=a(0),i=a.n(r),o=a(540),c=a(536),l=a(533),s=function(e){var t=Object(o.a)(e,{activeKey:"onSelect"}),a=t.id,n=t.generateChildId,s=t.onSelect,u=t.activeKey,m=t.transition,d=t.mountOnEnter,f=t.unmountOnExit,p=t.children,v=Object(r.useMemo)((function(){return n||function(e,t){return a?a+"-"+t+"-"+e:null}}),[a,n]),b=Object(r.useMemo)((function(){return{onSelect:s,activeKey:u,transition:m,mountOnEnter:d,unmountOnExit:f,getControlledId:function(e){return v(e,"tabpane")},getControllerId:function(e){return v(e,"tab")}}}),[s,u,m,d,f,v]);return i.a.createElement(c.a.Provider,{value:b},i.a.createElement(l.a.Provider,{value:s},p))},u=a(11),m=a(19),d=a(524),f=a.n(d),p=a(528),v=i.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.as,r=void 0===n?"div":n,o=e.className,c=Object(m.a)(e,["bsPrefix","as","className"]),l=Object(p.b)(a,"tab-content");return i.a.createElement(r,Object(u.a)({ref:t},c,{className:f()(o,l)}))})),b=a(568);var E=i.a.forwardRef((function(e,t){var a=function(e){var t=Object(r.useContext)(c.a);if(!t)return e;var a=t.activeKey,n=t.getControlledId,i=t.getControllerId,o=Object(m.a)(t,["activeKey","getControlledId","getControllerId"]),s=!1!==e.transition&&!1!==o.transition,d=Object(l.b)(e.eventKey);return Object(u.a)({},e,{active:null==e.active&&null!=d?Object(l.b)(a)===d:e.active,id:n(e.eventKey),"aria-labelledby":i(e.eventKey),transition:s&&(e.transition||o.transition||b.a),mountOnEnter:null!=e.mountOnEnter?e.mountOnEnter:o.mountOnEnter,unmountOnExit:null!=e.unmountOnExit?e.unmountOnExit:o.unmountOnExit})}(e),n=a.bsPrefix,o=a.className,s=a.active,d=a.onEnter,v=a.onEntering,E=a.onEntered,g=a.onExit,h=a.onExiting,y=a.onExited,O=a.mountOnEnter,w=a.unmountOnExit,x=a.transition,N=a.as,k=void 0===N?"div":N,j=(a.eventKey,Object(m.a)(a,["bsPrefix","className","active","onEnter","onEntering","onEntered","onExit","onExiting","onExited","mountOnEnter","unmountOnExit","transition","as","eventKey"])),A=Object(p.b)(n,"tab-pane");if(!s&&w)return null;var P=i.a.createElement(k,Object(u.a)({},j,{ref:t,role:"tabpanel","aria-hidden":!s,className:f()(o,A,{active:s})}));return x&&(P=i.a.createElement(x,{in:s,onEnter:d,onEntering:v,onEntered:E,onExit:g,onExiting:h,onExited:y,mountOnEnter:O,unmountOnExit:w},P)),i.a.createElement(c.a.Provider,{value:null},i.a.createElement(l.a.Provider,{value:null},P))}));E.displayName="TabPane";var g=E,h=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")},t}(i.a.Component);h.Container=s,h.Content=v,h.Pane=g;t.a=h},564:function(e,t,a){"use strict";var n=a(538),r=!1,i=!1;try{var o={get passive(){return r=!0},get once(){return i=r=!0}};n.a&&(window.addEventListener("test",o,o),window.removeEventListener("test",o,!0))}catch(c){}t.a=function(e,t,a,n){if(n&&"boolean"!==typeof n&&!i){var o=n.once,c=n.capture,l=a;!i&&o&&(l=a.__once||function e(n){this.removeEventListener(t,e,c),a.call(this,n)},a.__once=l),e.addEventListener(t,l,r?n:c)}e.addEventListener(t,a,n)}},565:function(e,t,a){"use strict";t.a=function(e,t,a,n){var r=n&&"boolean"!==typeof n?n.capture:n;e.removeEventListener(t,a,r),a.__once&&e.removeEventListener(t,a.__once,r)}},566:function(e,t,a){"use strict";var n=a(564),r=a(565);t.a=function(e,t,a,i){return Object(n.a)(e,t,a,i),function(){Object(r.a)(e,t,a,i)}}},567:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=Function.prototype.bind.call(Function.prototype.call,[].slice);function r(e,t){return n(e.querySelectorAll(t))}},568:function(e,t,a){"use strict";var n,r=a(11),i=a(19),o=a(524),c=a.n(o),l=a(573),s=a(0),u=a.n(s),m=a(28),d=a(574),f=((n={})[m.b]="show",n[m.a]="show",n),p=u.a.forwardRef((function(e,t){var a=e.className,n=e.children,o=Object(i.a)(e,["className","children"]),p=Object(s.useCallback)((function(e){Object(d.a)(e),o.onEnter&&o.onEnter(e)}),[o]);return u.a.createElement(m.e,Object(r.a)({ref:t,addEndListener:l.a},o,{onEnter:p}),(function(e,t){return u.a.cloneElement(n,Object(r.a)({},t,{className:c()("fade",a,n.props.className,f[e])}))}))}));p.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},p.displayName="Fade",t.a=p},571:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(0);var r=function(e){var t=Object(n.useRef)(e);return Object(n.useEffect)((function(){t.current=e}),[e]),t};function i(e){var t=r(e);return Object(n.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},573:function(e,t,a){"use strict";var n=a(538),r=a(553),i=a(566),o=n.a&&"ontransitionend"in window;function c(e,t,a){void 0===a&&(a=5);var n=!1,r=setTimeout((function(){n||function(e){var t=document.createEvent("HTMLEvents");t.initEvent("transitionend",!0,!0),e.dispatchEvent(t)}(e)}),t+a),o=Object(i.a)(e,"transitionend",(function(){n=!0}),{once:!0});return function(){clearTimeout(r),o()}}t.a=function(e,t,a){return o?(null==a&&(a=function(e){var t=Object(r.a)(e,"transitionDuration")||"",a=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*a}(e)||0),c(e,a),Object(i.a)(e,"transitionend",t)):c(e,0,0)}},574:function(e,t,a){"use strict";function n(e){e.offsetHeight}a.d(t,"a",(function(){return n}))},611:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return v}));var n=a(118),r=a.n(n),i=a(166),o=a(173),c=a.n(o),l=a(167),s=a(171),u=a.n(s),m=new c.a.auth.GoogleAuthProvider,d=new c.a.auth.FacebookAuthProvider,f=new c.a.auth.TwitterAuthProvider,p=function(){var e=Object(i.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.auth().signInAnonymously().then((function(e){var t=e.user;u.a.post("https://backend.rover.micota.com.tr/claims",{user:t}).then((function(){})).catch((function(e){return e}))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(e){var t;"t"===e&&(t=f),"g"===e&&(t=m),"f"===e&&(t=d),l.a.auth().signInWithPopup(t).then(function(){var e=Object(i.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.user,e.next=3,u.a.post("https://backend.rover.micota.com.tr/claims",{user:a});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){e.code,e.message,e.email;return e.credential}))}},701:function(e,t,a){},853:function(e,t,a){"use strict";a.r(t);var n=a(537),r=a(0),i=a.n(r),o=a(163),c=a(562),l=a(561),s=a(22),u=a(526),m=a(525),d=a(118),f=a.n(d),p=a(166),v=a(93),b=a(541),E=a(116),g=a(611),h=a(171),y=a.n(h);a(701);var O=function(e){var t=e.fire,a=e.history,n=Object(b.a)(),o=n.handleSubmit,c=n.register,l=n.errors,s=Object(r.useState)(null),u=Object(v.a)(s,2),m=u[0],d=u[1],h=Object(r.useState)(!1),O=Object(v.a)(h,2),w=O[0],x=O[1],N=function(){var e=Object(p.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x(!0),!t.target.value){e.next=7;break}return e.next=4,Object(g.b)(t.target.value);case 4:m&&d(m),e.next=10;break;case 7:return e.next=9,Object(g.a)();case 9:m&&d(m);case 10:x(!1),a.goBack();case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return i.a.createElement("div",{className:"login-form-container"},i.a.createElement("div",{id:"cover-spin",className:w?"d-block":""}),i.a.createElement("div",{className:"login-register-form"},i.a.createElement("form",{onSubmit:o((function(e){try{t.auth().signInWithEmailAndPassword(e.email,e.password).then(function(){var e=Object(p.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.user,y.a.post("https://backend.rover.micota.com.tr/claims",{user:n}).then((function(){a.goBack()})).catch((function(e){return d(e.message)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}catch(n){d(n.message)}}))},l.email&&i.a.createElement("div",{className:"alert alert-danger",role:"alert"},l.email.message),i.a.createElement("input",{type:"email",name:"email",placeholder:"Email",ref:c({required:"A\u015fa\u011f\u0131daki alana email adresi girin.",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message:"A\u015fa\u011f\u0131daki alana ge\xe7erli bir email adresi girin."}})}),l.password&&i.a.createElement("div",{className:"alert alert-danger",role:"alert"},l.password.message),i.a.createElement("input",{type:"password",name:"password",placeholder:"\u015eifre",ref:c({required:"A\u015fa\u011f\u0131daki alana \u015fifre girin.",minLength:{value:8,message:"A\u015fa\u011f\u0131daki alana en az 8 karakterden olu\u015fan bir \u015fifre girin."}})}),i.a.createElement("div",{className:"button-box"},i.a.createElement("div",{className:"login-toggle-btn"},i.a.createElement("input",{type:"checkbox"}),i.a.createElement("label",{className:"ml-10"},"Beni hat\u0131rla"),i.a.createElement(E.b,{to:"/reset-password"},"\u015eifremi Unuttum")),i.a.createElement("button",{type:"submit"},i.a.createElement("span",null,"Giri\u015f")),m&&i.a.createElement("div",{className:"alert alert-danger",role:"alert"},"Bilgiler hatal\u0131 veya sunucuda sorun olu\u015ftu.")),i.a.createElement("div",{className:"button-box text-center"},i.a.createElement("h5",{className:"text-divider mb-5"},i.a.createElement("span",null,"YA DA")),i.a.createElement("div",{className:"mb-2"},i.a.createElement("button",{type:"button",value:"t",className:"btn-block",onClick:function(e){return N(e)}},i.a.createElement("span",null,i.a.createElement("i",{className:"fa fa-twitter"})," Twitter Hesab\u0131nla Giri\u015f Yap"))),i.a.createElement("div",{className:"mb-2"},i.a.createElement("button",{type:"button",value:"g",className:"btn-block",onClick:function(e){return N(e)}},i.a.createElement("span",null,i.a.createElement("i",{className:"fa fa-google"})," Google Hesab\u0131nla Giri\u015f Yap"))),i.a.createElement("div",null,i.a.createElement("button",{type:"button",value:"f",className:"btn-block",onClick:function(e){return N(e)}},i.a.createElement("span",null,i.a.createElement("i",{className:"fa fa-facebook"})," Facebook Hesab\u0131nla Giri\u015f Yap")))))))};function w(e){var t=e.fire,a=e.history,n=Object(b.a)(),o=n.handleSubmit,c=n.register,l=n.errors,s=n.watch,u=Object(r.useState)(null),m=Object(v.a)(u,2),d=m[0],E=m[1],g=function(){var e=Object(p.a)(f.a.mark((function e(n){var r,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.auth().createUserWithEmailAndPassword(n.email,n.password);case 3:r=e.sent,i=r.user,y.a.post("https://backend.rover.micota.com.tr/claims",{user:i,name:n.name,surname:n.surname,phone:n.phone}),a.goBack(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),E(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();return i.a.createElement("div",{className:"login-form-container"},i.a.createElement("div",{className:"login-register-form"},i.a.createElement("form",{onSubmit:o(g)},i.a.createElement("div",{className:"billing-info mb-20"},l.name&&i.a.createElement("div",{className:"alert alert-danger small",role:"alert"},l.name.message),i.a.createElement("input",{type:"text",placeholder:"\u0130sim",ref:c({required:"A\u015fa\u011f\u0131daki alana isminizi girin.",pattern:{value:/^[a-zA-Z\u011f\xfc\u015f\xf6\xe7\u0131\u0130\u011e\xdc\u015e\xd6\xc7 ]+$/,message:"Harflerden olu\u015fan ge\xe7erli bir isim girin. "}}),name:"name"})),i.a.createElement("div",{className:"billing-info mb-20"},l.surname&&i.a.createElement("div",{className:"alert alert-danger small",role:"alert"},l.name.message),i.a.createElement("input",{type:"text",placeholder:"Soyisim",ref:c({required:"A\u015fa\u011f\u0131daki alana soyisminizi girin.",pattern:{value:/^[a-zA-Z\u011f\xfc\u015f\xf6\xe7\u0131\u0130\u011e\xdc\u015e\xd6\xc7 ]+$/,message:"Harflerden olu\u015fan ge\xe7erli bir soyisim girin. "}}),name:"surname"})),l.email&&i.a.createElement("div",{className:"alert alert-danger",role:"alert"},l.email.message),i.a.createElement("input",{name:"email",placeholder:"Email",ref:c({required:"A\u015fa\u011f\u0131daki alana email adresi girin.",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message:"A\u015fa\u011f\u0131daki alana ge\xe7erli bir email adresi girin."}})}),l.phone&&i.a.createElement("div",{className:"alert alert-danger small",role:"alert"},l.phone.message),i.a.createElement("div",{className:"billing-info mb-20"},i.a.createElement("input",{type:"tel",placeholder:"Telefon",ref:c({required:"A\u015fa\u011f\u0131daki alana telefon numaras\u0131 giriniz.",pattern:{value:/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/,message:"Telefon numaras\u0131 rakamlardan olu\u015fur."}}),name:"phone"})),l.password&&i.a.createElement("div",{className:"alert alert-danger",role:"alert"},l.password.message),i.a.createElement("input",{type:"password",name:"password",placeholder:"\u015eifre",ref:c({required:"A\u015fa\u011f\u0131daki alana \u015fifre girin.",minLength:{value:8,message:"A\u015fa\u011f\u0131daki alana en az 8 karakterden olu\u015fan bir \u015fifre girin."}})}),l.password2&&i.a.createElement("div",{className:"alert alert-danger",role:"alert"},l.password2.message),i.a.createElement("input",{type:"password",name:"password2",placeholder:"\u015eifreyi tekrar gir",ref:c({validate:function(e){return e===s("password")||"A\u015fa\u011f\u0131daki alana ilk \u015fifreyi do\u011fru giriniz"}})}),i.a.createElement("div",{className:"button-box"},i.a.createElement("button",{type:"submit"},i.a.createElement("span",null,"Kay\u0131t")),d&&i.a.createElement("div",{className:"alert alert-danger",role:"alert"},d)))))}var x=a(167);t.default=Object(s.h)((function(e){var t=e.location,a=Object(n.a)(e,["location"]),s=t.pathname;return i.a.createElement(r.Fragment,null,i.a.createElement(o.BreadcrumbsItem,{to:"/"},"Anasayfa"),i.a.createElement(o.BreadcrumbsItem,{to:""+s},"Giri\u015f Kay\u0131t"),i.a.createElement(u.a,{headerTop:"visible"},i.a.createElement(m.a,null),i.a.createElement("div",{className:"login-register-area pt-100 pb-100"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-7 col-md-12 ml-auto mr-auto"},i.a.createElement("div",{className:"login-register-wrapper"},i.a.createElement(c.a.Container,{defaultActiveKey:"login"},i.a.createElement(l.a,{variant:"pills",className:"login-register-tab-list"},i.a.createElement(l.a.Item,null,i.a.createElement(l.a.Link,{eventKey:"login"},i.a.createElement("h4",null,"Giri\u015f"))),i.a.createElement(l.a.Item,null,i.a.createElement(l.a.Link,{eventKey:"register"},i.a.createElement("h4",null,"Kay\u0131t")))),i.a.createElement(c.a.Content,null,i.a.createElement(c.a.Pane,{eventKey:"login"},i.a.createElement(O,{fire:x.a,history:a.history})),i.a.createElement(c.a.Pane,{eventKey:"register"},i.a.createElement(w,{fire:x.a,history:a.history})))))))))))}))}}]);
//# sourceMappingURL=16.73860132.chunk.js.map