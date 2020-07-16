(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[31],{523:function(e,t,r){"use strict";r.d(t,"a",(function(){return h})),r.d(t,"b",(function(){return d})),r.d(t,"c",(function(){return b})),r.d(t,"d",(function(){return f}));var s=r(522),a=r(1),i=r(0),n=r(169),o=r(50),u=r(4),c=function(){function e(e,t){this.isMounted=!1,this.previousOptions={},this.context={},this.options={},this.options=e||{},this.context=t||{}}return e.prototype.getOptions=function(){return this.options},e.prototype.setOptions=function(e,t){void 0===t&&(t=!1),t&&!Object(o.a)(this.options,e)&&(this.previousOptions=this.options),this.options=e},e.prototype.unmount=function(){this.isMounted=!1},e.prototype.refreshClient=function(){var e=this.options&&this.options.client||this.context&&this.context.client;Object(u.b)(!!e,2);var t=!1;return e!==this.client&&(t=!0,this.client=e,this.cleanup()),{client:this.client,isNew:t}},e.prototype.verifyDocumentType=function(e,t){var r=Object(s.e)(e);Object(s.d)(t),Object(s.d)(r.type);Object(u.b)(r.type===t,3)},e}(),l=function(e){function t(t){var r=t.options,s=t.context,a=t.onNewData,i=e.call(this,r,s)||this;return i.previousData={},i.currentObservable={},i.runLazy=!1,i.runLazyQuery=function(e){i.cleanup(),i.runLazy=!0,i.lazyOptions=e,i.onNewData()},i.getExecuteResult=function(){var e=i.getQueryResult();return i.startQuerySubscription(),e},i.obsRefetch=function(e){return i.currentObservable.query.refetch(e)},i.obsFetchMore=function(e){return i.currentObservable.query.fetchMore(e)},i.obsUpdateQuery=function(e){return i.currentObservable.query.updateQuery(e)},i.obsStartPolling=function(e){i.currentObservable&&i.currentObservable.query&&i.currentObservable.query.startPolling(e)},i.obsStopPolling=function(){i.currentObservable&&i.currentObservable.query&&i.currentObservable.query.stopPolling()},i.obsSubscribeToMore=function(e){return i.currentObservable.query.subscribeToMore(e)},i.onNewData=a,i}return Object(a.__extends)(t,e),t.prototype.execute=function(){this.refreshClient();var e=this.getOptions(),t=e.skip,r=e.query;return(t||r!==this.previousData.query)&&(this.removeQuerySubscription(),this.previousData.query=r),this.updateObservableQuery(),this.isMounted&&this.startQuerySubscription(),this.getExecuteSsrResult()||this.getExecuteResult()},t.prototype.executeLazy=function(){return this.runLazy?[this.runLazyQuery,this.execute()]:[this.runLazyQuery,{loading:!1,networkStatus:n.b.ready,called:!1,data:void 0}]},t.prototype.fetchData=function(){var e=this.getOptions();if(e.skip||!1===e.ssr)return!1;var t=this.currentObservable.query;return!!t.getCurrentResult().loading&&t.result()},t.prototype.afterExecute=function(e){var t=(void 0===e?{}:e).lazy,r=void 0!==t&&t;return this.isMounted=!0,r&&!this.runLazy||this.handleErrorOrCompleted(),this.previousOptions=this.getOptions(),this.unmount.bind(this)},t.prototype.cleanup=function(){this.removeQuerySubscription(),delete this.currentObservable.query,delete this.previousData.result},t.prototype.getOptions=function(){var t=e.prototype.getOptions.call(this);return this.lazyOptions&&(t.variables=Object(a.__assign)(Object(a.__assign)({},t.variables),this.lazyOptions.variables),t.context=Object(a.__assign)(Object(a.__assign)({},t.context),this.lazyOptions.context)),this.runLazy&&delete t.skip,t},t.prototype.ssrInitiated=function(){return this.context&&this.context.renderPromises},t.prototype.getExecuteSsrResult=function(){var e,t=!1===this.getOptions().ssr,r=this.refreshClient().client.disableNetworkFetches,s=Object(a.__assign)({loading:!0,networkStatus:n.b.loading,called:!0,data:void 0,stale:!1,client:this.client},this.observableQueryFields());return t&&(this.ssrInitiated()||r)?(this.previousData.result=s,s):(this.ssrInitiated()&&(e=this.context.renderPromises.addQueryPromise(this,this.getExecuteResult)||s),e)},t.prototype.prepareObservableQueryOptions=function(){var e=this.getOptions();this.verifyDocumentType(e.query,s.b.Query);var t=e.displayName||"Query";return!this.ssrInitiated()||"network-only"!==e.fetchPolicy&&"cache-and-network"!==e.fetchPolicy||(e.fetchPolicy="cache-first"),Object(a.__assign)(Object(a.__assign)({},e),{displayName:t,context:e.context,metadata:{reactComponent:{displayName:t}}})},t.prototype.initializeObservableQuery=function(){var e,t;if(this.ssrInitiated()&&(this.currentObservable.query=this.context.renderPromises.getSSRObservable(this.getOptions())),!this.currentObservable.query){var r=this.prepareObservableQueryOptions();this.previousData.observableQueryOptions=Object(a.__assign)(Object(a.__assign)({},r),{children:null}),this.currentObservable.query=this.refreshClient().client.watchQuery(Object(a.__assign)({},r)),this.ssrInitiated()&&(null===(t=null===(e=this.context)||void 0===e?void 0:e.renderPromises)||void 0===t||t.registerSSRObservable(this.currentObservable.query,r))}},t.prototype.updateObservableQuery=function(){if(this.currentObservable.query){var e=Object(a.__assign)(Object(a.__assign)({},this.prepareObservableQueryOptions()),{children:null});Object(o.a)(e,this.previousData.observableQueryOptions)||(this.previousData.observableQueryOptions=e,this.currentObservable.query.setOptions(e).catch((function(){})))}else this.initializeObservableQuery()},t.prototype.startQuerySubscription=function(){var e=this;if(!this.currentObservable.subscription&&!this.getOptions().skip){var t=this.currentObservable.query;this.currentObservable.subscription=t.subscribe({next:function(t){var r=t.loading,s=t.networkStatus,a=t.data,i=e.previousData.result;i&&i.loading===r&&i.networkStatus===s&&Object(o.a)(i.data,a)||e.onNewData()},error:function(t){if(e.resubscribeToQuery(),!t.hasOwnProperty("graphQLErrors"))throw t;var r=e.previousData.result;(r&&r.loading||!Object(o.a)(t,e.previousData.error))&&(e.previousData.error=t,e.onNewData())}})}},t.prototype.resubscribeToQuery=function(){this.removeQuerySubscription();var e=this.currentObservable.query.getLastError(),t=this.currentObservable.query.getLastResult();this.currentObservable.query.resetLastResults(),this.startQuerySubscription(),Object.assign(this.currentObservable.query,{lastError:e,lastResult:t})},t.prototype.getQueryResult=function(){var e=this.observableQueryFields(),t=this.getOptions();if(t.skip)e=Object(a.__assign)(Object(a.__assign)({},e),{data:void 0,error:void 0,loading:!1,called:!0});else{var r=this.currentObservable.query.getCurrentResult(),s=r.loading,i=r.partial,o=r.networkStatus,u=r.errors,c=r.error,l=r.data;if(u&&u.length>0&&(c=new n.a({graphQLErrors:u})),e=Object(a.__assign)(Object(a.__assign)({},e),{loading:s,networkStatus:o,error:c,called:!0}),s){var p=this.previousData.result&&this.previousData.result.data;e.data=p&&l?Object(a.__assign)(Object(a.__assign)({},p),l):p||l}else if(c)Object.assign(e,{data:(this.currentObservable.query.getLastResult()||{}).data});else{var b=this.currentObservable.query.options.fetchPolicy;if(t.partialRefetch&&!l&&i&&"cache-only"!==b)return Object.assign(e,{loading:!0,networkStatus:n.b.loading}),e.refetch(),e;e.data=l}}return e.client=this.client,this.previousData.loading=this.previousData.result&&this.previousData.result.loading||!1,this.previousData.result=e,this.currentObservable.query&&this.currentObservable.query.resetQueryStoreErrors(),e},t.prototype.handleErrorOrCompleted=function(){if(this.currentObservable.query&&this.previousData.result){var e=this.previousData.result,t=e.data,r=e.loading,s=e.error;if(!r){var a=this.getOptions(),i=a.query,n=a.variables,u=a.onCompleted,c=a.onError;if(this.previousOptions&&!this.previousData.loading&&Object(o.a)(this.previousOptions.query,i)&&Object(o.a)(this.previousOptions.variables,n))return;u&&!s?u(t):c&&s&&c(s)}}},t.prototype.removeQuerySubscription=function(){this.currentObservable.subscription&&(this.currentObservable.subscription.unsubscribe(),delete this.currentObservable.subscription)},t.prototype.observableQueryFields=function(){return{variables:this.currentObservable.query.variables,refetch:this.obsRefetch,fetchMore:this.obsFetchMore,updateQuery:this.obsUpdateQuery,startPolling:this.obsStartPolling,stopPolling:this.obsStopPolling,subscribeToMore:this.obsSubscribeToMore}},t}(c);function p(e,t,r){void 0===r&&(r=!1);var n=Object(i.useContext)(Object(s.c)()),u=Object(i.useReducer)((function(e){return e+1}),0),c=u[0],p=u[1],b=t?Object(a.__assign)(Object(a.__assign)({},t),{query:e}):{query:e},h=Object(i.useRef)(),m=h.current||new l({options:b,context:n,onNewData:function(){m.ssrInitiated()?p():Promise.resolve().then(p)}});m.setOptions(b),m.context=n,m.ssrInitiated()&&!h.current&&(h.current=m);var d=function(e,t){var r=Object(i.useRef)();return r.current&&Object(o.a)(t,r.current.key)||(r.current={key:t,value:e()}),r.current.value}((function(){return r?m.executeLazy():m.execute()}),{options:Object(a.__assign)(Object(a.__assign)({},b),{onError:void 0,onCompleted:void 0}),context:n,tick:c}),v=r?d[1]:d;return Object(i.useEffect)((function(){return h.current||(h.current=m),function(){return m.cleanup()}}),[]),Object(i.useEffect)((function(){return m.afterExecute({lazy:r})}),[v.loading,v.networkStatus,v.error,v.data]),d}function b(e,t){return p(e,t,!1)}function h(e,t){return p(e,t,!0)}var m=function(e){function t(t){var r=t.options,a=t.context,i=t.result,n=t.setResult,o=e.call(this,r,a)||this;return o.runMutation=function(e){void 0===e&&(e={}),o.onMutationStart();var t=o.generateNewMutationId();return o.mutate(e).then((function(e){return o.onMutationCompleted(e,t),e})).catch((function(e){if(o.onMutationError(e,t),!o.getOptions().onError)throw e}))},o.verifyDocumentType(r.mutation,s.b.Mutation),o.result=i,o.setResult=n,o.mostRecentMutationId=0,o}return Object(a.__extends)(t,e),t.prototype.execute=function(e){return this.isMounted=!0,this.verifyDocumentType(this.getOptions().mutation,s.b.Mutation),e.client=this.refreshClient().client,[this.runMutation,e]},t.prototype.afterExecute=function(){return this.isMounted=!0,this.unmount.bind(this)},t.prototype.cleanup=function(){},t.prototype.mutate=function(e){var t=this.getOptions(),r=t.mutation,s=t.variables,i=t.optimisticResponse,n=t.update,o=t.context,u=void 0===o?{}:o,c=t.awaitRefetchQueries,l=void 0!==c&&c,p=t.fetchPolicy,b=Object(a.__assign)({},e),h=Object.assign({},s,b.variables);return delete b.variables,this.refreshClient().client.mutate(Object(a.__assign)({mutation:r,optimisticResponse:i,refetchQueries:b.refetchQueries||this.getOptions().refetchQueries,awaitRefetchQueries:l,update:n,context:u,fetchPolicy:p,variables:h},b))},t.prototype.onMutationStart=function(){this.result.loading||this.getOptions().ignoreResults||this.updateResult({loading:!0,error:void 0,data:void 0,called:!0})},t.prototype.onMutationCompleted=function(e,t){var r=this.getOptions(),s=r.onCompleted,a=r.ignoreResults,i=e.data,o=e.errors,u=o&&o.length>0?new n.a({graphQLErrors:o}):void 0;this.isMostRecentMutation(t)&&!a&&this.updateResult({called:!0,loading:!1,data:i,error:u}),s&&s(i)},t.prototype.onMutationError=function(e,t){var r=this.getOptions().onError;this.isMostRecentMutation(t)&&this.updateResult({loading:!1,error:e,data:void 0,called:!0}),r&&r(e)},t.prototype.generateNewMutationId=function(){return++this.mostRecentMutationId},t.prototype.isMostRecentMutation=function(e){return this.mostRecentMutationId===e},t.prototype.updateResult=function(e){!this.isMounted||this.previousResult&&Object(o.a)(this.previousResult,e)||(this.setResult(e),this.previousResult=e)},t}(c);function d(e,t){var r=Object(i.useContext)(Object(s.c)()),n=Object(i.useState)({called:!1,loading:!1}),o=n[0],u=n[1],c=t?Object(a.__assign)(Object(a.__assign)({},t),{mutation:e}):{mutation:e},l=Object(i.useRef)();var p=(l.current||(l.current=new m({options:c,context:r,result:o,setResult:u})),l.current);return p.setOptions(c),p.context=r,Object(i.useEffect)((function(){return p.afterExecute()})),p.execute(o)}var v=function(e){function t(t){var r=t.options,s=t.context,a=t.setResult,i=e.call(this,r,s)||this;return i.currentObservable={},i.setResult=a,i.initialize(r),i}return Object(a.__extends)(t,e),t.prototype.execute=function(e){if(!0===this.getOptions().skip)return this.cleanup(),{loading:!1,error:void 0,data:void 0,variables:this.getOptions().variables};var t=e;this.refreshClient().isNew&&(t=this.getLoadingResult());var r=this.getOptions().shouldResubscribe;return"function"===typeof r&&(r=!!r(this.getOptions())),!1!==r&&this.previousOptions&&Object.keys(this.previousOptions).length>0&&(this.previousOptions.subscription!==this.getOptions().subscription||!Object(o.a)(this.previousOptions.variables,this.getOptions().variables)||this.previousOptions.skip!==this.getOptions().skip)&&(this.cleanup(),t=this.getLoadingResult()),this.initialize(this.getOptions()),this.startSubscription(),this.previousOptions=this.getOptions(),Object(a.__assign)(Object(a.__assign)({},t),{variables:this.getOptions().variables})},t.prototype.afterExecute=function(){this.isMounted=!0},t.prototype.cleanup=function(){this.endSubscription(),delete this.currentObservable.query},t.prototype.initialize=function(e){this.currentObservable.query||!0===this.getOptions().skip||(this.currentObservable.query=this.refreshClient().client.subscribe({query:e.subscription,variables:e.variables,fetchPolicy:e.fetchPolicy}))},t.prototype.startSubscription=function(){this.currentObservable.subscription||(this.currentObservable.subscription=this.currentObservable.query.subscribe({next:this.updateCurrentData.bind(this),error:this.updateError.bind(this),complete:this.completeSubscription.bind(this)}))},t.prototype.getLoadingResult=function(){return{loading:!0,error:void 0,data:void 0}},t.prototype.updateResult=function(e){this.isMounted&&this.setResult(e)},t.prototype.updateCurrentData=function(e){var t=this.getOptions().onSubscriptionData;this.updateResult({data:e.data,loading:!1,error:void 0}),t&&t({client:this.refreshClient().client,subscriptionData:e})},t.prototype.updateError=function(e){this.updateResult({error:e,loading:!1})},t.prototype.completeSubscription=function(){var e=this.getOptions().onSubscriptionComplete;e&&e(),this.endSubscription()},t.prototype.endSubscription=function(){this.currentObservable.subscription&&(this.currentObservable.subscription.unsubscribe(),delete this.currentObservable.subscription)},t}(c);function f(e,t){var r=Object(i.useContext)(Object(s.c)()),n=t?Object(a.__assign)(Object(a.__assign)({},t),{subscription:e}):{subscription:e},o=Object(i.useState)({loading:!n.skip,error:void 0,data:void 0}),u=o[0],c=o[1],l=Object(i.useRef)();var p=(l.current||(l.current=new v({options:n,context:r,setResult:c})),l.current);return p.setOptions(n,!0),p.context=r,Object(i.useEffect)((function(){return p.afterExecute()})),Object(i.useEffect)((function(){return p.cleanup.bind(p)}),[]),p.execute(u)}!function(){function e(){this.queryPromises=new Map,this.queryInfoTrie=new Map}e.prototype.registerSSRObservable=function(e,t){this.lookupQueryInfo(t).observable=e},e.prototype.getSSRObservable=function(e){return this.lookupQueryInfo(e).observable},e.prototype.addQueryPromise=function(e,t){return this.lookupQueryInfo(e.getOptions()).seen?t():(this.queryPromises.set(e.getOptions(),new Promise((function(t){t(e.fetchData())}))),null)},e.prototype.hasPromises=function(){return this.queryPromises.size>0},e.prototype.consumeAndAwaitPromises=function(){var e=this,t=[];return this.queryPromises.forEach((function(r,s){e.lookupQueryInfo(s).seen=!0,t.push(r)})),this.queryPromises.clear(),Promise.all(t)},e.prototype.lookupQueryInfo=function(e){var t=this.queryInfoTrie,r=e.query,s=e.variables,a=t.get(r)||new Map;t.has(r)||t.set(r,a);var i=JSON.stringify(s),n=a.get(i)||{seen:!1,observable:null};return a.has(i)||a.set(i,n),n}}()},525:function(e,t,r){"use strict";var s=r(0),a=r.n(s),i=r(116),n=r(163);t.a=function(){return a.a.createElement("div",{className:"breadcrumb-area pt-35 pb-35 bg-gray-3"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"breadcrumb-content text-center"},a.a.createElement(n.Breadcrumbs,{separator:a.a.createElement("span",null,"/"),item:i.c,finalItem:"span"}))))}},853:function(e,t,r){"use strict";r.r(t);var s=r(93),a=r(0),i=r.n(a),n=r(552),o=r(163),u=r(527),c=r(541),l=r(525),p=r(523),b=r(164),h=r(165);function m(){var e=Object(b.a)(["\n  mutation AddMessage($message: [messages_insert_input!]!) {\n    insert_messages(objects: $message)\n    {\n      affected_rows\n    }\n  }\n"]);return m=function(){return e},e}var d=r.n(h)()(m());t.default=function(e){var t=e.location,r=Object(c.a)(),b=r.handleSubmit,h=r.register,m=r.errors,v=Object(a.useState)(!1),f=Object(s.a)(v,2),y=f[0],O=f[1],g=t.pathname,E=Object(p.b)(d,{onCompleted:function(e){O(!0)}}),j=Object(s.a)(E,1)[0];return i.a.createElement(a.Fragment,null,i.a.createElement(n.a,null,i.a.createElement("title",null,"Micota. | \u0130leti\u015fim"),i.a.createElement("meta",{name:"description",content:"Al\u0131\u015fveri\u015f sitemiz micota.com.tr ileti\u015fim bilgilerine bu sayfada ula\u015fabilirsiniz."})),i.a.createElement(o.BreadcrumbsItem,{to:"/"},"Anasayfa"),i.a.createElement(o.BreadcrumbsItem,{to:""+g},"\u0130leti\u015fim"),i.a.createElement(u.a,{headerTop:"visible"},i.a.createElement(l.a,null),i.a.createElement("div",{className:"contact-area pt-100 pb-100"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"custom-row-2"},i.a.createElement("div",{className:"col-lg-4 col-md-5"},i.a.createElement("div",{className:"contact-info-wrap"},i.a.createElement("div",{className:"single-contact-info"},i.a.createElement("div",{className:"contact-icon"},i.a.createElement("i",{className:"fa fa-phone"})),i.a.createElement("div",{className:"contact-info-dec"},i.a.createElement("p",null,"0216 693 13 50"))),i.a.createElement("div",{className:"single-contact-info"},i.a.createElement("div",{className:"contact-icon"},i.a.createElement("i",{className:"fa fa-globe"})),i.a.createElement("div",{className:"contact-info-dec"},i.a.createElement("p",null,i.a.createElement("a",{href:"mailto:hello@micota.com.tr"},"hello@micota.com.tr")))),i.a.createElement("div",{className:"single-contact-info"},i.a.createElement("div",{className:"contact-icon"},i.a.createElement("i",{className:"fa fa-map-marker"})),i.a.createElement("div",{className:"contact-info-dec"},i.a.createElement("p",null,"K\xfc\xe7\xfcksu Mah. Asma Sok. No: 10"),i.a.createElement("p",null,"Kandilli \xdcsk\xfcdar"))),i.a.createElement("div",{className:"single-contact-info"},i.a.createElement("div",{className:"contact-icon"},i.a.createElement("i",{className:"fa fa-whatsapp"})),i.a.createElement("div",{className:"contact-info-dec"},i.a.createElement("p",null,i.a.createElement("a",{href:"https://wa.me/905302225663"},"Whatsapp \u0130leti\u015fim")))),i.a.createElement("div",{className:"contact-social text-center"},i.a.createElement("h3",null,"Takip et"),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("a",{href:"//facebook.com"},i.a.createElement("i",{className:"fa fa-facebook"}))),i.a.createElement("li",null,i.a.createElement("a",{href:"//instagram.com"},i.a.createElement("i",{className:"fa fa-instagram"}))),i.a.createElement("li",null,i.a.createElement("a",{href:"//youtube.com"},i.a.createElement("i",{className:"fa fa-youtube"}))))))),i.a.createElement("div",{className:"col-lg-8 col-md-7"},i.a.createElement("div",{className:"contact-form"},i.a.createElement("div",{className:"contact-title mb-30"},i.a.createElement("h2",null,"Mesaj g\xf6nder")),i.a.createElement("form",{onSubmit:b((function(e,t){j({variables:{message:{name:e.name,email:e.email,subject:e.subject,message:e.message}}}),t.target.reset()})),className:"contact-form-style"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-6"},i.a.createElement("input",{name:"name",placeholder:"\u0130sim*",type:"text",ref:h({required:"\u0130sim bo\u015f b\u0131rak\u0131lamaz.",pattern:{value:/^[a-zA-Z\u011f\xfc\u015f\xf6\xe7\u0131\u0130\u011e\xdc\u015e\xd6\xc7 ]+$/,message:"\u0130sim sadece harflerden olu\u015fur. "}})}),m.name&&i.a.createElement("div",{className:"alert alert-danger small",role:"alert"},m.name.message)),i.a.createElement("div",{className:"col-lg-6"},i.a.createElement("input",{name:"email",placeholder:"Email*",type:"email",ref:h({required:"Email bo\u015f b\u0131rak\u0131lamaz ",pattern:{value:/^\s*[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\s*$/i,message:"Ge\xe7erli bir email girin."}})}),m.email&&i.a.createElement("div",{className:"alert alert-danger small",role:"alert"},m.email.message)),i.a.createElement("div",{className:"col-lg-12"},i.a.createElement("input",{name:"subject",placeholder:"Konu*",type:"text",ref:h({required:"Konu bo\u015f b\u0131rak\u0131lamaz.",pattern:{value:/^[a-zA-Z\u011f\xfc\u015f\xf6\xe7\u0131\u0130\u011e\xdc\u015e\xd6\xc70-9._%+-,;:?()&$@  ]+$/,message:"Ge\xe7ersiz karakterleri siliniz. "}})}),m.subject&&i.a.createElement("div",{className:"alert alert-danger small",role:"alert"},m.subject.message)),i.a.createElement("div",{className:"col-lg-12"},i.a.createElement("textarea",{maxLength:"256",name:"message",placeholder:"Mesaj*",defaultValue:"",ref:h({required:"Mesaj bo\u015f b\u0131rak\u0131lamaz.",pattern:{value:/^[a-zA-Z\u011f\xfc\u015f\xf6\xe7\u0131\u0130\u011e\xdc\u015e\xd6\xc70-9._%+-,;:?()&$@ ]+$/,message:"Ge\xe7ersiz karakterleri siliniz. "}})}),m.message&&i.a.createElement("div",{className:"alert alert-danger small",role:"alert"},m.message.message),i.a.createElement("button",{className:"submit",type:"submit"},"G\xd6NDER")))),y&&i.a.createElement("div",{className:"alert alert-success text-center",role:"alert"},"Mesaj\u0131n\u0131z bize ula\u015ft\u0131",i.a.createElement("i",{className:"fa fa-smile-o mb-3"})," En k\u0131sa s\xfcrede email adresinize cevap g\xf6nderece\u011fiz."))))))))}}}]);
//# sourceMappingURL=31.b9f1f9cd.chunk.js.map