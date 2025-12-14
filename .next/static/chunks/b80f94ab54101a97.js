(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,88143,(e,t,n)=>{"use strict";function r({widthInt:e,heightInt:t,blurWidth:n,blurHeight:r,blurDataURL:a,objectFit:o}){let i=n?40*n:e,s=r?40*r:t,l=i&&s?`viewBox='0 0 ${i} ${s}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${l}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${l?"none":"contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${a}'/%3E%3C/svg%3E`}Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},87690,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={VALID_LOADERS:function(){return o},imageConfigDefault:function(){return i}};for(var a in r)Object.defineProperty(n,a,{enumerable:!0,get:r[a]});let o=["default","imgix","cloudinary","akamai","custom"],i={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumRedirects:3,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1}},8927,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"getImgProps",{enumerable:!0,get:function(){return l}}),e.r(33525);let r=e.r(88143),a=e.r(87690),o=["-moz-initial","fill","none","scale-down",void 0];function i(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l({src:e,sizes:t,unoptimized:n=!1,priority:l=!1,preload:c=!1,loading:d,className:u,quality:p,width:h,height:f,fill:m=!1,style:g,overrideSrc:b,onLoad:y,onLoadingComplete:x,placeholder:v="empty",blurDataURL:w,fetchPriority:k,decoding:j="async",layout:_,objectFit:$,objectPosition:S,lazyBoundary:O,lazyRoot:C,...E},P){var T;let z,A,F,{imgConf:I,showAltText:N,blurComplete:M,defaultLoader:D}=P,R=I||a.imageConfigDefault;if("allSizes"in R)z=R;else{let e=[...R.deviceSizes,...R.imageSizes].sort((e,t)=>e-t),t=R.deviceSizes.sort((e,t)=>e-t),n=R.qualities?.sort((e,t)=>e-t);z={...R,allSizes:e,deviceSizes:t,qualities:n}}if(void 0===D)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let B=E.loader||D;delete E.loader,delete E.srcSet;let L="__next_img_default"in B;if(L){if("custom"===z.loader)throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=B;B=t=>{let{config:n,...r}=t;return e(r)}}if(_){"fill"===_&&(m=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[_];e&&(g={...g,...e});let n={responsive:"100vw",fill:"100vw"}[_];n&&!t&&(t=n)}let H="",V=s(h),U=s(f);if((T=e)&&"object"==typeof T&&(i(T)||void 0!==T.src)){let t=i(e)?e.default:e;if(!t.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!t.height||!t.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(A=t.blurWidth,F=t.blurHeight,w=w||t.blurDataURL,H=t.src,!m)if(V||U){if(V&&!U){let e=V/t.width;U=Math.round(t.height*e)}else if(!V&&U){let e=U/t.height;V=Math.round(t.width*e)}}else V=t.width,U=t.height}let W=!l&&!c&&("lazy"===d||void 0===d);(!(e="string"==typeof e?e:H)||e.startsWith("data:")||e.startsWith("blob:"))&&(n=!0,W=!1),z.unoptimized&&(n=!0),L&&!z.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(n=!0);let q=s(p),G=Object.assign(m?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:$,objectPosition:S}:{},N?{}:{color:"transparent"},g),X=M||"empty"===v?null:"blur"===v?`url("data:image/svg+xml;charset=utf-8,${(0,r.getImageBlurSvg)({widthInt:V,heightInt:U,blurWidth:A,blurHeight:F,blurDataURL:w||"",objectFit:G.objectFit})}")`:`url("${v}")`,Y=o.includes(G.objectFit)?"fill"===G.objectFit?"100% 100%":"cover":G.objectFit,Z=X?{backgroundSize:Y,backgroundPosition:G.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:X}:{},J=function({config:e,src:t,unoptimized:n,width:r,quality:a,sizes:o,loader:i}){if(n)return{src:t,srcSet:void 0,sizes:void 0};let{widths:s,kind:l}=function({deviceSizes:e,allSizes:t},n,r){if(r){let n=/(^|\s)(1?\d?\d)vw/g,a=[];for(let e;e=n.exec(r);)a.push(parseInt(e[2]));if(a.length){let n=.01*Math.min(...a);return{widths:t.filter(t=>t>=e[0]*n),kind:"w"}}return{widths:t,kind:"w"}}return"number"!=typeof n?{widths:e,kind:"w"}:{widths:[...new Set([n,2*n].map(e=>t.find(t=>t>=e)||t[t.length-1]))],kind:"x"}}(e,r,o),c=s.length-1;return{sizes:o||"w"!==l?o:"100vw",srcSet:s.map((n,r)=>`${i({config:e,src:t,quality:a,width:n})} ${"w"===l?n:r+1}${l}`).join(", "),src:i({config:e,src:t,quality:a,width:s[c]})}}({config:z,src:e,unoptimized:n,width:V,quality:q,sizes:t,loader:B}),K=W?"lazy":d;return{props:{...E,loading:K,fetchPriority:k,width:V,height:U,decoding:j,className:u,style:{...G,...Z},sizes:J.sizes,srcSet:J.srcSet,src:b||J.src},meta:{unoptimized:n,preload:c||l,placeholder:v,fill:m}}}},98879,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return s}});let r=e.r(71645),a="undefined"==typeof window,o=a?()=>{}:r.useLayoutEffect,i=a?()=>{}:r.useEffect;function s(e){let{headManager:t,reduceComponentsToState:n}=e;function s(){if(t&&t.mountedInstances){let e=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(e))}}return a&&(t?.mountedInstances?.add(e.children),s()),o(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),o(()=>(t&&(t._pendingUpdate=s),()=>{t&&(t._pendingUpdate=s)})),i(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},25633,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={default:function(){return m},defaultHead:function(){return u}};for(var a in r)Object.defineProperty(n,a,{enumerable:!0,get:r[a]});let o=e.r(55682),i=e.r(90809),s=e.r(43476),l=i._(e.r(71645)),c=o._(e.r(98879)),d=e.r(42732);function u(){return[(0,s.jsx)("meta",{charSet:"utf-8"},"charset"),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(33525);let h=["name","httpEquiv","charSet","itemProp"];function f(e){let t,n,r,a;return e.reduce(p,[]).reverse().concat(u().reverse()).filter((t=new Set,n=new Set,r=new Set,a={},e=>{let o=!0,i=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){i=!0;let n=e.key.slice(e.key.indexOf("$")+1);t.has(n)?o=!1:t.add(n)}switch(e.type){case"title":case"base":n.has(e.type)?o=!1:n.add(e.type);break;case"meta":for(let t=0,n=h.length;t<n;t++){let n=h[t];if(e.props.hasOwnProperty(n))if("charSet"===n)r.has(n)?o=!1:r.add(n);else{let t=e.props[n],r=a[n]||new Set;("name"!==n||!i)&&r.has(t)?o=!1:(r.add(t),a[n]=r)}}}return o})).reverse().map((e,t)=>{let n=e.key||t;return l.default.cloneElement(e,{key:n})})}let m=function({children:e}){let t=(0,l.useContext)(d.HeadManagerContext);return(0,s.jsx)(c.default,{reduceComponentsToState:f,headManager:t,children:e})};("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},18556,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"ImageConfigContext",{enumerable:!0,get:function(){return o}});let r=e.r(55682)._(e.r(71645)),a=e.r(87690),o=r.default.createContext(a.imageConfigDefault)},65856,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"RouterContext",{enumerable:!0,get:function(){return r}});let r=e.r(55682)._(e.r(71645)).default.createContext(null)},70965,(e,t,n)=>{"use strict";function r(e,t){let n=e||75;return t?.qualities?.length?t.qualities.reduce((e,t)=>Math.abs(t-n)<Math.abs(e-n)?t:e,0):n}Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"findClosestQuality",{enumerable:!0,get:function(){return r}})},1948,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o}});let r=e.r(70965);function a({config:e,src:t,width:n,quality:a}){if(t.startsWith("/")&&t.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let o=(0,r.findClosestQuality)(a,e);return`${e.path}?url=${encodeURIComponent(t)}&w=${n}&q=${o}${t.startsWith("/_next/static/media/"),""}`}a.__next_img_default=!0;let o=a},18581,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"useMergedRef",{enumerable:!0,get:function(){return a}});let r=e.r(71645);function a(e,t){let n=(0,r.useRef)(null),a=(0,r.useRef)(null);return(0,r.useCallback)(r=>{if(null===r){let e=n.current;e&&(n.current=null,e());let t=a.current;t&&(a.current=null,t())}else e&&(n.current=o(e,r)),t&&(a.current=o(t,r))},[e,t])}function o(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let n=e(t);return"function"==typeof n?n:()=>e(null)}}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},5500,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"Image",{enumerable:!0,get:function(){return v}});let r=e.r(55682),a=e.r(90809),o=e.r(43476),i=a._(e.r(71645)),s=r._(e.r(74080)),l=r._(e.r(25633)),c=e.r(8927),d=e.r(87690),u=e.r(18556);e.r(33525);let p=e.r(65856),h=r._(e.r(1948)),f=e.r(18581),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function g(e,t,n,r,a,o,i){let s=e?.src;e&&e["data-loaded-src"]!==s&&(e["data-loaded-src"]=s,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&a(!0),n?.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,a=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>a,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{a=!0,t.stopPropagation()}})}r?.current&&r.current(e)}}))}function b(e){return i.use?{fetchPriority:e}:{fetchpriority:e}}"undefined"==typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let y=(0,i.forwardRef)(({src:e,srcSet:t,sizes:n,height:r,width:a,decoding:s,className:l,style:c,fetchPriority:d,placeholder:u,loading:p,unoptimized:h,fill:m,onLoadRef:y,onLoadingCompleteRef:x,setBlurComplete:v,setShowAltText:w,sizesInput:k,onLoad:j,onError:_,...$},S)=>{let O=(0,i.useCallback)(e=>{e&&(_&&(e.src=e.src),e.complete&&g(e,u,y,x,v,h,k))},[e,u,y,x,v,_,h,k]),C=(0,f.useMergedRef)(S,O);return(0,o.jsx)("img",{...$,...b(d),loading:p,width:a,height:r,decoding:s,"data-nimg":m?"fill":"1",className:l,style:c,sizes:n,srcSet:t,src:e,ref:C,onLoad:e=>{g(e.currentTarget,u,y,x,v,h,k)},onError:e=>{w(!0),"empty"!==u&&v(!0),_&&_(e)}})});function x({isAppRouter:e,imgAttributes:t}){let n={as:"image",imageSrcSet:t.srcSet,imageSizes:t.sizes,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,...b(t.fetchPriority)};return e&&s.default.preload?(s.default.preload(t.src,n),null):(0,o.jsx)(l.default,{children:(0,o.jsx)("link",{rel:"preload",href:t.srcSet?void 0:t.src,...n},"__nimg-"+t.src+t.srcSet+t.sizes)})}let v=(0,i.forwardRef)((e,t)=>{let n=(0,i.useContext)(p.RouterContext),r=(0,i.useContext)(u.ImageConfigContext),a=(0,i.useMemo)(()=>{let e=m||r||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t),a=e.qualities?.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n,qualities:a,localPatterns:"undefined"==typeof window?r?.localPatterns:e.localPatterns}},[r]),{onLoad:s,onLoadingComplete:l}=e,f=(0,i.useRef)(s);(0,i.useEffect)(()=>{f.current=s},[s]);let g=(0,i.useRef)(l);(0,i.useEffect)(()=>{g.current=l},[l]);let[b,v]=(0,i.useState)(!1),[w,k]=(0,i.useState)(!1),{props:j,meta:_}=(0,c.getImgProps)(e,{defaultLoader:h.default,imgConf:a,blurComplete:b,showAltText:w});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(y,{...j,unoptimized:_.unoptimized,placeholder:_.placeholder,fill:_.fill,onLoadRef:f,onLoadingCompleteRef:g,setBlurComplete:v,setShowAltText:k,sizesInput:e.sizes,ref:t}),_.preload?(0,o.jsx)(x,{isAppRouter:!n,imgAttributes:j}):null]})});("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},94909,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={default:function(){return d},getImageProps:function(){return c}};for(var a in r)Object.defineProperty(n,a,{enumerable:!0,get:r[a]});let o=e.r(55682),i=e.r(8927),s=e.r(5500),l=o._(e.r(1948));function c(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let d=s.Image},57688,(e,t,n)=>{t.exports=e.r(94909)},32892,(e,t,n)=>{"use strict";var r=Array.isArray,a=Object.keys,o=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;t.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var s,l,c,d=r(t),u=r(n);if(d&&u){if((l=t.length)!=n.length)return!1;for(s=l;0!=s--;)if(!e(t[s],n[s]))return!1;return!0}if(d!=u)return!1;var p=t instanceof Date,h=n instanceof Date;if(p!=h)return!1;if(p&&h)return t.getTime()==n.getTime();var f=t instanceof RegExp,m=n instanceof RegExp;if(f!=m)return!1;if(f&&m)return t.toString()==n.toString();var g=a(t);if((l=g.length)!==a(n).length)return!1;for(s=l;0!=s--;)if(!o.call(n,g[s]))return!1;if(i&&t instanceof Element&&n instanceof Element)return t===n;for(s=l;0!=s--;)if(("_owner"!==(c=g[s])||!t.$$typeof)&&!e(t[c],n[c]))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(e){if(e.message&&e.message.match(/stack|recursion/i)||-0x7ff5ffe4===e.number)return console.warn("Warning: react-fast-compare does not handle circular references.",e.name,e.message),!1;throw e}}},52210,(e,t,n)=>{"use strict";var r="function"==typeof Symbol&&Symbol.for,a=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,s=r?Symbol.for("react.strict_mode"):60108,l=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,d=r?Symbol.for("react.context"):60110,u=r?Symbol.for("react.async_mode"):60111,p=r?Symbol.for("react.concurrent_mode"):60111,h=r?Symbol.for("react.forward_ref"):60112,f=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.suspense_list"):60120,g=r?Symbol.for("react.memo"):60115,b=r?Symbol.for("react.lazy"):60116,y=r?Symbol.for("react.block"):60121,x=r?Symbol.for("react.fundamental"):60117,v=r?Symbol.for("react.responder"):60118,w=r?Symbol.for("react.scope"):60119;function k(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case a:switch(e=e.type){case u:case p:case i:case l:case s:case f:return e;default:switch(e=e&&e.$$typeof){case d:case h:case b:case g:case c:return e;default:return t}}case o:return t}}}function j(e){return k(e)===p}n.AsyncMode=u,n.ConcurrentMode=p,n.ContextConsumer=d,n.ContextProvider=c,n.Element=a,n.ForwardRef=h,n.Fragment=i,n.Lazy=b,n.Memo=g,n.Portal=o,n.Profiler=l,n.StrictMode=s,n.Suspense=f,n.isAsyncMode=function(e){return j(e)||k(e)===u},n.isConcurrentMode=j,n.isContextConsumer=function(e){return k(e)===d},n.isContextProvider=function(e){return k(e)===c},n.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===a},n.isForwardRef=function(e){return k(e)===h},n.isFragment=function(e){return k(e)===i},n.isLazy=function(e){return k(e)===b},n.isMemo=function(e){return k(e)===g},n.isPortal=function(e){return k(e)===o},n.isProfiler=function(e){return k(e)===l},n.isStrictMode=function(e){return k(e)===s},n.isSuspense=function(e){return k(e)===f},n.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===p||e===l||e===s||e===f||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===g||e.$$typeof===c||e.$$typeof===d||e.$$typeof===h||e.$$typeof===x||e.$$typeof===v||e.$$typeof===w||e.$$typeof===y)},n.typeOf=k},79684,(e,t,n)=>{"use strict";t.exports=e.r(52210)},98437,(e,t,n)=>{"use strict";var r=e.r(79684),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function l(e){return r.isMemo(e)?i:s[e.$$typeof]||a}s[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[r.Memo]=i;var c=Object.defineProperty,d=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,f=Object.prototype;t.exports=function e(t,n,r){if("string"!=typeof n){if(f){var a=h(n);a&&a!==f&&e(t,a,r)}var i=d(n);u&&(i=i.concat(u(n)));for(var s=l(t),m=l(n),g=0;g<i.length;++g){var b=i[g];if(!o[b]&&!(r&&r[b])&&!(m&&m[b])&&!(s&&s[b])){var y=p(n,b);try{c(t,b,y)}catch(e){}}}}return t}},37472,(e,t,n)=>{"use strict";function r(e){this._maxSize=e,this.clear()}r.prototype.clear=function(){this._size=0,this._values=Object.create(null)},r.prototype.get=function(e){return this._values[e]},r.prototype.set=function(e,t){return this._size>=this._maxSize&&this.clear(),!(e in this._values)&&this._size++,this._values[e]=t};var a=/[^.^\]^[]+|(?=\[\]|\.\.)/g,o=/^\d+$/,i=/^\d/,s=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,l=/^\s*(['"]?)(.*?)(\1)\s*$/,c=new r(512),d=new r(512),u=new r(512);function p(e){return c.get(e)||c.set(e,h(e).map(function(e){return e.replace(l,"$2")}))}function h(e){return e.match(a)||[""]}function f(e){return"string"==typeof e&&e&&-1!==["'",'"'].indexOf(e.charAt(0))}t.exports={Cache:r,split:h,normalizePath:p,setter:function(e){var t=p(e);return d.get(e)||d.set(e,function(e,n){for(var r=0,a=t.length,o=e;r<a-1;){var i=t[r];if("__proto__"===i||"constructor"===i||"prototype"===i)return e;o=o[t[r++]]}o[t[r]]=n})},getter:function(e,t){var n=p(e);return u.get(e)||u.set(e,function(e){for(var r=0,a=n.length;r<a;)if(null==e&&t)return;else e=e[n[r++]];return e})},join:function(e){return e.reduce(function(e,t){return e+(f(t)||o.test(t)?"["+t+"]":(e?".":"")+t)},"")},forEach:function(e,t,n){!function(e,t,n){var r,a,l,c,d=e.length;for(a=0;a<d;a++)(r=e[a])&&(function(e){return!f(e)&&(e.match(i)&&!e.match(o)||s.test(e))}(r)&&(r='"'+r+'"'),l=!(c=f(r))&&/^\d+$/.test(r),t.call(n,r,c,l,a,e))}(Array.isArray(e)?e:h(e),t,n)}}},3873,(e,t,n)=>{let r=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,a=e=>e.match(r)||[],o=e=>e[0].toUpperCase()+e.slice(1),i=(e,t)=>a(e).join(t).toLowerCase(),s=e=>a(e).reduce((e,t)=>`${e}${!e?t.toLowerCase():t[0].toUpperCase()+t.slice(1).toLowerCase()}`,"");t.exports={words:a,upperFirst:o,camelCase:s,pascalCase:e=>o(s(e)),snakeCase:e=>i(e,"_"),kebabCase:e=>i(e,"-"),sentenceCase:e=>o(i(e," ")),titleCase:e=>a(e).map(o).join(" ")}},1439,(e,t,n)=>{function r(e,t){var n=e.length,r=Array(n),a={},o=n,i=function(e){for(var t=new Map,n=0,r=e.length;n<r;n++){var a=e[n];t.has(a[0])||t.set(a[0],new Set),t.has(a[1])||t.set(a[1],new Set),t.get(a[0]).add(a[1])}return t}(t),s=function(e){for(var t=new Map,n=0,r=e.length;n<r;n++)t.set(e[n],n);return t}(e);for(t.forEach(function(e){if(!s.has(e[0])||!s.has(e[1]))throw Error("Unknown node. There is an unknown node in the supplied edges.")});o--;)a[o]||function e(t,o,l){if(l.has(t)){var c;try{c=", node was:"+JSON.stringify(t)}catch(e){c=""}throw Error("Cyclic dependency"+c)}if(!s.has(t))throw Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(t));if(!a[o]){a[o]=!0;var d=i.get(t)||new Set;if(o=(d=Array.from(d)).length){l.add(t);do{var u=d[--o];e(u,s.get(u),l)}while(o)l.delete(t)}r[--n]=t}}(e[o],o,new Set);return r}t.exports=function(e){return r(function(e){for(var t=new Set,n=0,r=e.length;n<r;n++){var a=e[n];t.add(a[0]),t.add(a[1])}return Array.from(t)}(e),e)},t.exports.array=r},31713,e=>{"use strict";let t,n,r;var a,o,i,s=e.i(43476),l=e.i(71645);function c(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}e.i(47167),c('.react-loading-indicator-normalize,\n[class$=rli-bounding-box] {\n  font-size: 1rem;\n  display: inline-block;\n  box-sizing: border-box;\n  text-align: unset;\n  isolation: isolate;\n}\n\n.rli-d-i-b {\n  display: inline-block;\n}\n\n.rli-text-format {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 600;\n  width: 90%;\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 0.7em;\n  letter-spacing: 0.5px;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;\n}');var d=function(){return(d=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}"function"==typeof SuppressedError&&SuppressedError;var p=/^\s+/,h=/\s+$/;function f(e,t){if(t=t||{},(e=e||"")instanceof f)return e;if(!(this instanceof f))return new f(e,t);var n,r,a,o,i,s,l,c,d,m,g,b,y,x,v,w,k,j,_,$,S=(i={r:0,g:0,b:0},s=1,l=null,c=null,d=null,m=!1,g=!1,"string"==typeof(n=e)&&(n=function(e){e=e.replace(p,"").replace(h,"").toLowerCase();var t,n=!1;if(T[e])e=T[e],n=!0;else if("transparent"==e)return{r:0,g:0,b:0,a:0,format:"name"};return(t=V.rgb.exec(e))?{r:t[1],g:t[2],b:t[3]}:(t=V.rgba.exec(e))?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=V.hsl.exec(e))?{h:t[1],s:t[2],l:t[3]}:(t=V.hsla.exec(e))?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=V.hsv.exec(e))?{h:t[1],s:t[2],v:t[3]}:(t=V.hsva.exec(e))?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=V.hex8.exec(e))?{r:N(t[1]),g:N(t[2]),b:N(t[3]),a:N(t[4])/255,format:n?"name":"hex8"}:(t=V.hex6.exec(e))?{r:N(t[1]),g:N(t[2]),b:N(t[3]),format:n?"name":"hex"}:(t=V.hex4.exec(e))?{r:N(t[1]+""+t[1]),g:N(t[2]+""+t[2]),b:N(t[3]+""+t[3]),a:N(t[4]+""+t[4])/255,format:n?"name":"hex8"}:!!(t=V.hex3.exec(e))&&{r:N(t[1]+""+t[1]),g:N(t[2]+""+t[2]),b:N(t[3]+""+t[3]),format:n?"name":"hex"}}(n)),"object"==u(n)&&(U(n.r)&&U(n.g)&&U(n.b)?(r=n.r,a=n.g,o=n.b,i={r:255*F(r,255),g:255*F(a,255),b:255*F(o,255)},m=!0,g="%"===String(n.r).substr(-1)?"prgb":"rgb"):U(n.h)&&U(n.s)&&U(n.v)?(l=D(n.s),c=D(n.v),b=n.h,y=l,x=c,b=6*F(b,360),y=F(y,100),x=F(x,100),v=Math.floor(b),w=b-v,k=x*(1-y),j=x*(1-w*y),_=x*(1-(1-w)*y),i={r:255*[x,j,k,k,_,x][$=v%6],g:255*[_,x,x,j,k,k][$],b:255*[k,k,_,x,x,j][$]},m=!0,g="hsv"):U(n.h)&&U(n.s)&&U(n.l)&&(l=D(n.s),d=D(n.l),i=function(e,t,n){var r,a,o;function i(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}if(e=F(e,360),t=F(t,100),n=F(n,100),0===t)r=a=o=n;else{var s=n<.5?n*(1+t):n+t-n*t,l=2*n-s;r=i(l,s,e+1/3),a=i(l,s,e),o=i(l,s,e-1/3)}return{r:255*r,g:255*a,b:255*o}}(n.h,l,d),m=!0,g="hsl"),n.hasOwnProperty("a")&&(s=n.a)),s=A(s),{ok:m,format:n.format||g,r:Math.min(255,Math.max(i.r,0)),g:Math.min(255,Math.max(i.g,0)),b:Math.min(255,Math.max(i.b,0)),a:s});this._originalInput=e,this._r=S.r,this._g=S.g,this._b=S.b,this._a=S.a,this._roundA=Math.round(100*this._a)/100,this._format=t.format||S.format,this._gradientType=t.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=S.ok}function m(e,t,n){e=F(e,255);var r,a,o=Math.max(e,t=F(t,255),n=F(n,255)),i=Math.min(e,t,n),s=(o+i)/2;if(o==i)r=a=0;else{var l=o-i;switch(a=s>.5?l/(2-o-i):l/(o+i),o){case e:r=(t-n)/l+6*(t<n);break;case t:r=(n-e)/l+2;break;case n:r=(e-t)/l+4}r/=6}return{h:r,s:a,l:s}}function g(e,t,n){e=F(e,255);var r,a,o=Math.max(e,t=F(t,255),n=F(n,255)),i=Math.min(e,t,n),s=o-i;if(a=0===o?0:s/o,o==i)r=0;else{switch(o){case e:r=(t-n)/s+6*(t<n);break;case t:r=(n-e)/s+2;break;case n:r=(e-t)/s+4}r/=6}return{h:r,s:a,v:o}}function b(e,t,n,r){var a=[M(Math.round(e).toString(16)),M(Math.round(t).toString(16)),M(Math.round(n).toString(16))];return r&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}function y(e,t,n,r){return[M(R(r)),M(Math.round(e).toString(16)),M(Math.round(t).toString(16)),M(Math.round(n).toString(16))].join("")}function x(e,t){t=0===t?0:t||10;var n=f(e).toHsl();return n.s-=t/100,n.s=I(n.s),f(n)}function v(e,t){t=0===t?0:t||10;var n=f(e).toHsl();return n.s+=t/100,n.s=I(n.s),f(n)}function w(e){return f(e).desaturate(100)}function k(e,t){t=0===t?0:t||10;var n=f(e).toHsl();return n.l+=t/100,n.l=I(n.l),f(n)}function j(e,t){t=0===t?0:t||10;var n=f(e).toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(-t/100*255))),n.g=Math.max(0,Math.min(255,n.g-Math.round(-t/100*255))),n.b=Math.max(0,Math.min(255,n.b-Math.round(-t/100*255))),f(n)}function _(e,t){t=0===t?0:t||10;var n=f(e).toHsl();return n.l-=t/100,n.l=I(n.l),f(n)}function $(e,t){var n=f(e).toHsl(),r=(n.h+t)%360;return n.h=r<0?360+r:r,f(n)}function S(e){var t=f(e).toHsl();return t.h=(t.h+180)%360,f(t)}function O(e,t){if(isNaN(t)||t<=0)throw Error("Argument to polyad must be a positive number");for(var n=f(e).toHsl(),r=[f(e)],a=360/t,o=1;o<t;o++)r.push(f({h:(n.h+o*a)%360,s:n.s,l:n.l}));return r}function C(e){var t=f(e).toHsl(),n=t.h;return[f(e),f({h:(n+72)%360,s:t.s,l:t.l}),f({h:(n+216)%360,s:t.s,l:t.l})]}function E(e,t,n){t=t||6,n=n||30;var r=f(e).toHsl(),a=360/n,o=[f(e)];for(r.h=(r.h-(a*t>>1)+720)%360;--t;)r.h=(r.h+a)%360,o.push(f(r));return o}function P(e,t){t=t||6;for(var n=f(e).toHsv(),r=n.h,a=n.s,o=n.v,i=[],s=1/t;t--;)i.push(f({h:r,s:a,v:o})),o=(o+s)%1;return i}f.prototype={isDark:function(){return 128>this.getBrightness()},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,t,n,r=this.toRgb();return e=r.r/255,.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*((t=r.g/255)<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.0722*((n=r.b/255)<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))},setAlpha:function(e){return this._a=A(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=g(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=g(this._r,this._g,this._b),t=Math.round(360*e.h),n=Math.round(100*e.s),r=Math.round(100*e.v);return 1==this._a?"hsv("+t+", "+n+"%, "+r+"%)":"hsva("+t+", "+n+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var e=m(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=m(this._r,this._g,this._b),t=Math.round(360*e.h),n=Math.round(100*e.s),r=Math.round(100*e.l);return 1==this._a?"hsl("+t+", "+n+"%, "+r+"%)":"hsla("+t+", "+n+"%, "+r+"%, "+this._roundA+")"},toHex:function(e){return b(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){var t,n,r,a,o;return t=this._r,n=this._g,r=this._b,a=this._a,o=[M(Math.round(t).toString(16)),M(Math.round(n).toString(16)),M(Math.round(r).toString(16)),M(R(a))],e&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)&&o[3].charAt(0)==o[3].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0):o.join("")},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*F(this._r,255))+"%",g:Math.round(100*F(this._g,255))+"%",b:Math.round(100*F(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+Math.round(100*F(this._r,255))+"%, "+Math.round(100*F(this._g,255))+"%, "+Math.round(100*F(this._b,255))+"%)":"rgba("+Math.round(100*F(this._r,255))+"%, "+Math.round(100*F(this._g,255))+"%, "+Math.round(100*F(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(z[b(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var t="#"+y(this._r,this._g,this._b,this._a),n=t,r=this._gradientType?"GradientType = 1, ":"";if(e){var a=f(e);n="#"+y(a._r,a._g,a._b,a._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+t+",endColorstr="+n+")"},toString:function(e){var t=!!e;e=e||this._format;var n=!1,r=this._a<1&&this._a>=0;return t||!r||"hex"!==e&&"hex6"!==e&&"hex3"!==e&&"hex4"!==e&&"hex8"!==e&&"name"!==e?("rgb"===e&&(n=this.toRgbString()),"prgb"===e&&(n=this.toPercentageRgbString()),"hex"!==e&&"hex6"!==e||(n=this.toHexString()),"hex3"===e&&(n=this.toHexString(!0)),"hex4"===e&&(n=this.toHex8String(!0)),"hex8"===e&&(n=this.toHex8String()),"name"===e&&(n=this.toName()),"hsl"===e&&(n=this.toHslString()),"hsv"===e&&(n=this.toHsvString()),n||this.toHexString()):"name"===e&&0===this._a?this.toName():this.toRgbString()},clone:function(){return f(this.toString())},_applyModification:function(e,t){var n=e.apply(null,[this].concat([].slice.call(t)));return this._r=n._r,this._g=n._g,this._b=n._b,this.setAlpha(n._a),this},lighten:function(){return this._applyModification(k,arguments)},brighten:function(){return this._applyModification(j,arguments)},darken:function(){return this._applyModification(_,arguments)},desaturate:function(){return this._applyModification(x,arguments)},saturate:function(){return this._applyModification(v,arguments)},greyscale:function(){return this._applyModification(w,arguments)},spin:function(){return this._applyModification($,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(E,arguments)},complement:function(){return this._applyCombination(S,arguments)},monochromatic:function(){return this._applyCombination(P,arguments)},splitcomplement:function(){return this._applyCombination(C,arguments)},triad:function(){return this._applyCombination(O,[3])},tetrad:function(){return this._applyCombination(O,[4])}},f.fromRatio=function(e,t){if("object"==u(e)){var n={};for(var r in e)e.hasOwnProperty(r)&&(n[r]="a"===r?e[r]:D(e[r]));e=n}return f(e,t)},f.equals=function(e,t){return!(!e||!t)&&f(e).toRgbString()==f(t).toRgbString()},f.random=function(){return f.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},f.mix=function(e,t,n){n=0===n?0:n||50;var r=f(e).toRgb(),a=f(t).toRgb(),o=n/100;return f({r:(a.r-r.r)*o+r.r,g:(a.g-r.g)*o+r.g,b:(a.b-r.b)*o+r.b,a:(a.a-r.a)*o+r.a})},f.readability=function(e,t){var n=f(e),r=f(t);return(Math.max(n.getLuminance(),r.getLuminance())+.05)/(Math.min(n.getLuminance(),r.getLuminance())+.05)},f.isReadable=function(e,t,n){var r,a,o,i,s,l=f.readability(e,t);switch(s=!1,(a=((r=(r=n)||{level:"AA",size:"small"}).level||"AA").toUpperCase(),o=(r.size||"small").toLowerCase(),"AA"!==a&&"AAA"!==a&&(a="AA"),"small"!==o&&"large"!==o&&(o="small"),i={level:a,size:o}).level+i.size){case"AAsmall":case"AAAlarge":s=l>=4.5;break;case"AAlarge":s=l>=3;break;case"AAAsmall":s=l>=7}return s},f.mostReadable=function(e,t,n){var r,a,o,i,s=null,l=0;a=(n=n||{}).includeFallbackColors,o=n.level,i=n.size;for(var c=0;c<t.length;c++)(r=f.readability(e,t[c]))>l&&(l=r,s=f(t[c]));return f.isReadable(e,s,{level:o,size:i})||!a?s:(n.includeFallbackColors=!1,f.mostReadable(e,["#fff","#000"],n))};var T=f.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},z=f.hexNames=function(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}(T);function A(e){return(isNaN(e=parseFloat(e))||e<0||e>1)&&(e=1),e}function F(e,t){"string"==typeof(n=e)&&-1!=n.indexOf(".")&&1===parseFloat(n)&&(e="100%");var n,r,a="string"==typeof(r=e)&&-1!=r.indexOf("%");return e=Math.min(t,Math.max(0,parseFloat(e))),a&&(e=parseInt(e*t,10)/100),1e-6>Math.abs(e-t)?1:e%t/parseFloat(t)}function I(e){return Math.min(1,Math.max(0,e))}function N(e){return parseInt(e,16)}function M(e){return 1==e.length?"0"+e:""+e}function D(e){return e<=1&&(e=100*e+"%"),e}function R(e){return Math.round(255*parseFloat(e)).toString(16)}var B,L,H,V=(L="[\\s|\\(]+("+(B="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+B+")[,|\\s]+("+B+")\\s*\\)?",H="[\\s|\\(]+("+B+")[,|\\s]+("+B+")[,|\\s]+("+B+")[,|\\s]+("+B+")\\s*\\)?",{CSS_UNIT:new RegExp(B),rgb:RegExp("rgb"+L),rgba:RegExp("rgba"+H),hsl:RegExp("hsl"+L),hsla:RegExp("hsla"+H),hsv:RegExp("hsv"+L),hsva:RegExp("hsva"+H),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function U(e){return!!V.CSS_UNIT.exec(e)}var W=function(e,t){var n=("string"==typeof e?parseInt(e):e)||0;if(n>=-5&&n<=5){var r=parseFloat(t),a=r+-(r/5*n*1);return(0==a||a<=Number.EPSILON)&&(a=.1),{animationPeriod:a+"s"}}return{animationPeriod:t}},q=function(e,t){var n=e||{},r="";switch(t){case"small":r="12px";break;case"medium":r="16px";break;case"large":r="20px";break;default:r=void 0}var a={};if(n.fontSize){var o=n.fontSize;a=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(n,["fontSize"]),r=o}return{fontSize:r,styles:a}},G={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},X=function(e){var t=e.className,n=e.text,r=e.textColor,a=e.staticText,o=e.style;return n?l.default.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(t||"").trim(),style:d(d(d({},a&&G),r&&{color:r,mixBlendMode:"unset"}),o&&o)},"string"==typeof n&&n.length?n:"loading"):null},Y="rgb(50, 205, 50)";function Z(e){return e&&e.Math===Math&&e}c('.atom-rli-bounding-box {\n  --atom-phase1-rgb: 50, 205, 50;\n  color: rgba(var(--atom-phase1-rgb), 1);\n  font-size: 16px;\n  position: relative;\n  text-align: unset;\n  isolation: isolate;\n}\n.atom-rli-bounding-box .atom-indicator {\n  width: 6em;\n  height: 6em;\n  position: relative;\n  perspective: 6em;\n  overflow: hidden;\n  color: rgba(var(--atom-phase1-rgb), 1);\n  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;\n}\n.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 0.48em;\n  height: 0.48em;\n  margin: auto;\n  border-radius: 50%;\n  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);\n  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7eg;\n}\n.atom-rli-bounding-box .atom-indicator::before {\n  filter: drop-shadow(0px 0px 0.0625em currentColor);\n}\n.atom-rli-bounding-box .atom-indicator .electron-orbit {\n  color: rgba(var(--atom-phase1-rgb), 0.85);\n  border: 0;\n  border-left: 0.4em solid currentColor;\n  box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  width: 4.8em;\n  height: 4.8em;\n  background-color: transparent;\n  border-radius: 50%;\n  transform-style: preserve-3d;\n  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7fj, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gy;\n}\n.atom-rli-bounding-box .atom-indicator .electron-orbit::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  border-radius: 50%;\n  color: rgba(var(--atom-phase1-rgb), 0.18);\n  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7hv;\n  border: 0.125em solid currentColor;\n}\n.atom-rli-bounding-box .atom-indicator .electron-orbit::before {\n  content: "";\n  width: 0.192em;\n  height: 0.192em;\n  position: absolute;\n  border-radius: 50%;\n  top: -0.096em;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: 0 auto;\n  color: rgba(var(--atom-phase1-rgb), 1);\n  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;\n  background-color: currentColor;\n  transform: rotateY(-70deg);\n  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7ew, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;\n}\n.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {\n  --orbit-vector-factor: -1;\n  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));\n}\n.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {\n  --orbit-vector-factor: 1;\n  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));\n}\n.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {\n  --orbit-vector-factor: 0;\n  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));\n  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);\n}\n.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {\n  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);\n}\n.atom-rli-bounding-box .atom-text {\n  color: currentColor;\n  mix-blend-mode: difference;\n  width: unset;\n  display: block;\n}\n\n@property --atom-phase1-rgb {\n  syntax: "<number>#";\n  inherits: true;\n  initial-value: 50, 205, 50;\n}\n@property --atom-phase2-rgb {\n  syntax: "<number>#";\n  inherits: true;\n  initial-value: 50, 205, 50;\n}\n@property --atom-phase3-rgb {\n  syntax: "<number>#";\n  inherits: true;\n  initial-value: 50, 205, 50;\n}\n@property --atom-phase4-rgb {\n  syntax: "<number>#";\n  inherits: true;\n  initial-value: 50, 205, 50;\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 1s;\n}\n@keyframes uxlv7fj {\n  from {\n    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);\n  }\n  to {\n    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);\n  }\n}\n@keyframes uxlv7ew {\n  from {\n    transform: rotateY(-70deg) rotateX(0deg);\n  }\n  to {\n    transform: rotateY(-70deg) rotateX(-360deg);\n  }\n}\n@keyframes uxlv7eg {\n  100%, 0% {\n    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);\n  }\n  20% {\n    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);\n  }\n  25% {\n    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);\n  }\n  45% {\n    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);\n  }\n  50% {\n    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);\n  }\n  70% {\n    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);\n  }\n  75% {\n    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);\n  }\n  95% {\n    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);\n  }\n}\n@keyframes uxlv7gg {\n  100%, 0% {\n    color: rgba(var(--atom-phase1-rgb), 1);\n  }\n  20% {\n    color: rgba(var(--atom-phase1-rgb), 1);\n  }\n  25% {\n    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);\n  }\n  45% {\n    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);\n  }\n  50% {\n    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);\n  }\n  70% {\n    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);\n  }\n  75% {\n    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);\n  }\n  95% {\n    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);\n  }\n}\n@keyframes uxlv7gy {\n  100%, 0% {\n    color: rgba(var(--atom-phase1-rgb), 0.85);\n  }\n  20% {\n    color: rgba(var(--atom-phase1-rgb), 0.85);\n  }\n  25% {\n    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);\n  }\n  45% {\n    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);\n  }\n  50% {\n    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);\n  }\n  70% {\n    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);\n  }\n  75% {\n    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);\n  }\n  95% {\n    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);\n  }\n}\n@keyframes uxlv7hv {\n  100%, 0% {\n    color: rgba(var(--atom-phase1-rgb), 0.18);\n  }\n  20% {\n    color: rgba(var(--atom-phase1-rgb), 0.18);\n  }\n  25% {\n    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);\n  }\n  45% {\n    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);\n  }\n  50% {\n    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);\n  }\n  70% {\n    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);\n  }\n  75% {\n    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);\n  }\n  95% {\n    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);\n  }\n}'),f(Y).toRgb(),Array.from({length:4},function(e,t){return"--atom-phase".concat(t+1,"-rgb")}),c('.commet-rli-bounding-box {\n  --commet-phase1-color: rgb(50, 205, 50);\n  font-size: 16px;\n  width: 6.85em;\n  height: 6.85em;\n  overflow: hidden;\n  display: inline-block;\n  box-sizing: border-box;\n  position: relative;\n  isolation: isolate;\n}\n.commet-rli-bounding-box .commet-indicator {\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  box-sizing: border-box;\n  width: 6em;\n  height: 6em;\n  color: var(--commet-phase1-color);\n  display: inline-block;\n  isolation: isolate;\n  position: absolute;\n  z-index: 0;\n  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite uxlv7cp;\n}\n.commet-rli-bounding-box .commet-indicator .commet-box {\n  position: absolute;\n  display: inline-block;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  animation: uxlv7bx var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;\n}\n.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {\n  width: 100%;\n  height: 100%;\n  animation-direction: normal;\n}\n.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {\n  width: 70%;\n  height: 70%;\n  animation-direction: reverse;\n}\n.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  bottom: 0;\n  left: 0;\n  display: inline-block;\n}\n.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {\n  content: "";\n  width: 0.5em;\n  height: 0.5em;\n  border-radius: 50%;\n  background-color: currentColor;\n  position: absolute;\n  top: -0.125em;\n  left: 50%;\n  transform: translateX(-50%);\n  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;\n}\n.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  bottom: 0;\n  left: 0;\n  border-radius: 50%;\n  box-sizing: border-box;\n  border-style: solid;\n}\n.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {\n  border-color: currentColor transparent transparent currentColor;\n  border-width: 0.25em 0.25em 0 0;\n  transform: rotateZ(-45deg);\n}\n.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {\n  border-color: currentColor currentColor transparent transparent;\n  border-width: 0.25em 0 0 0.25em;\n  transform: rotateZ(45deg);\n}\n.commet-rli-bounding-box .commet-text {\n  mix-blend-mode: difference;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: var(--commet-phase1-color);\n}\n\n@property --commet-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --commet-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --commet-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --commet-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 1.2s;\n}\n@keyframes uxlv7bx {\n  to {\n    transform: rotate(1turn);\n  }\n}\n@keyframes uxlv7cp {\n  100%, 0% {\n    color: var(--commet-phase1-color);\n  }\n  20% {\n    color: var(--commet-phase1-color);\n  }\n  25% {\n    color: var(--commet-phase2-color, var(--commet-phase1-color));\n  }\n  45% {\n    color: var(--commet-phase2-color, var(--commet-phase1-color));\n  }\n  50% {\n    color: var(--commet-phase3-color, var(--commet-phase1-color));\n  }\n  70% {\n    color: var(--commet-phase3-color, var(--commet-phase1-color));\n  }\n  75% {\n    color: var(--commet-phase4-color, var(--commet-phase1-color));\n  }\n  95% {\n    color: var(--commet-phase4-color, var(--commet-phase1-color));\n  }\n}'),Array.from({length:4},function(e,t){return"--commet-phase".concat(t+1,"-color")}),c('.OP-annulus-rli-bounding-box {\n  --OP-annulus-phase1-color: rgb(50, 205, 50);\n  font-size: 16px;\n  display: inline-block;\n}\n.OP-annulus-rli-bounding-box .OP-annulus-indicator {\n  width: 5em;\n  height: 5em;\n  color: var(--OP-annulus-phase1-color);\n  display: inline-block;\n  position: relative;\n  z-index: 0;\n}\n.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {\n  animation: uxlv7n7 calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;\n  height: 100%;\n  transform-origin: center center;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\n.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {\n  stroke-dasharray: 1, 125;\n  stroke-dashoffset: 0;\n  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite uxlv7oa, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7p5;\n  stroke-linecap: round;\n}\n.OP-annulus-rli-bounding-box .OP-annulus-text {\n  mix-blend-mode: difference;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: -2;\n}\n\n@property --OP-annulus-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --OP-annulus-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --OP-annulus-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --OP-annulus-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 1.5s;\n}\n@keyframes uxlv7n7 {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes uxlv7oa {\n  0% {\n    stroke-dasharray: 1, 125;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 98, 125;\n    stroke-dashoffset: -35px;\n  }\n  100% {\n    stroke-dasharray: 98, 125;\n    stroke-dashoffset: -124px;\n  }\n}\n@keyframes uxlv7p5 {\n  100%, 0% {\n    stroke: var(--OP-annulus-phase1-color);\n  }\n  22% {\n    stroke: var(--OP-annulus-phase1-color);\n  }\n  25% {\n    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));\n  }\n  42% {\n    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));\n  }\n  50% {\n    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));\n  }\n  72% {\n    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));\n  }\n  75% {\n    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));\n  }\n  97% {\n    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));\n  }\n}'),Array.from({length:4},function(e,t){return"--OP-annulus-phase".concat(t+1,"-color")}),c('.OP-dotted-rli-bounding-box {\n  --OP-dotted-phase1-color: rgb(50, 205, 50);\n  font-size: 16px;\n  box-sizing: border-box;\n  display: inline-block;\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator {\n  width: 5em;\n  height: 5em;\n  color: var(--OP-dotted-phase1-color);\n  display: inline-block;\n  position: relative;\n  z-index: 0;\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {\n  mix-blend-mode: difference;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: -2;\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: currentColor;\n  border-radius: 50%;\n  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite uxlv7nu, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7ol;\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {\n  transform: rotate(0deg);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {\n  transform: rotate(30deg);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {\n  transform: rotate(60deg);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {\n  transform: rotate(90deg);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {\n  transform: rotate(120deg);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {\n  transform: rotate(150deg);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {\n  transform: rotate(180deg);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {\n  transform: rotate(210deg);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {\n  transform: rotate(240deg);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {\n  transform: rotate(270deg);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {\n  transform: rotate(300deg);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {\n  transform: rotate(330deg);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);\n}\n\n@property --OP-dotted-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --OP-dotted-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --OP-dotted-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --OP-dotted-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 1.2s;\n}\n@keyframes uxlv7nu {\n  0%, 39%, 100% {\n    opacity: 0;\n  }\n  40% {\n    opacity: 1;\n  }\n}\n@keyframes uxlv7ol {\n  100%, 0% {\n    background-color: var(--OP-dotted-phase1-color);\n  }\n  22% {\n    background-color: var(--OP-dotted-phase1-color);\n  }\n  25% {\n    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));\n  }\n  47% {\n    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));\n  }\n  50% {\n    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));\n  }\n  72% {\n    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));\n  }\n  75% {\n    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));\n  }\n  97% {\n    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));\n  }\n}'),Z("object"==typeof window&&window)||Z("object"==typeof self&&self)||Z(e.g)||function(){return this}()||Function("return this")(),Array.from({length:4},function(e,t){return"--OP-dotted-phase".concat(t+1,"-color")}),c('.OP-spokes-rli-bounding-box {\n  --OP-spokes-phase1-color: rgb(50, 205, 50);\n  font-size: 16px;\n  position: relative;\n  color: var(--OP-spokes-phase1-color);\n}\n.OP-spokes-rli-bounding-box .OP-spokes-indicator {\n  width: 4.8em;\n  height: 4.8em;\n  display: block;\n  position: relative;\n}\n.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {\n  position: absolute;\n  height: 1.2em;\n  width: 0.4em;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto auto auto 50%;\n  background-color: var(--OP-spokes-phase1-color);\n  border-radius: 0.24em;\n  opacity: 0;\n  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite uxlv7pw, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7qn;\n  transform-origin: left center;\n}\n.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {\n  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);\n  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);\n}\n.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {\n  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);\n  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);\n}\n.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {\n  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);\n  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);\n}\n.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {\n  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);\n  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);\n}\n.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {\n  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);\n  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);\n}\n.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {\n  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);\n  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);\n}\n.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {\n  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);\n  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);\n}\n.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {\n  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);\n  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);\n}\n.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {\n  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);\n  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);\n}\n.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {\n  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);\n  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);\n}\n.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {\n  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);\n  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);\n}\n.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {\n  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);\n  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);\n}\n.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {\n  mix-blend-mode: difference;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: var(--OP-spokes-phase1-color);\n  z-index: -2;\n}\n\n@property --OP-spokes-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --OP-spokes-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --OP-spokes-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --OP-spokes-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 1.2s;\n}\n@keyframes uxlv7pw {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n@keyframes uxlv7qn {\n  100%, 0% {\n    background-color: var(--OP-spokes-phase1-color);\n  }\n  22% {\n    background-color: var(--OP-spokes-phase1-color);\n  }\n  25% {\n    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));\n  }\n  42% {\n    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));\n  }\n  50% {\n    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));\n  }\n  72% {\n    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));\n  }\n  75% {\n    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));\n  }\n  97% {\n    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));\n  }\n}'),Array.from({length:4},function(e,t){return"--OP-spokes-phase".concat(t+1,"-color")}),c('.OP-annulus-dual-sectors-rli-bounding-box {\n  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);\n  font-size: 16px;\n  box-sizing: border-box;\n  display: inline-block;\n}\n.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {\n  width: 5em;\n  height: 5em;\n  display: inline-block;\n  position: relative;\n  z-index: 0;\n  color: var(--OP-annulus-dual-sectors-phase1-color);\n}\n.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  border-width: 0.34em;\n  border-style: solid;\n  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;\n  background-color: transparent;\n  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite uxlv7ra, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite uxlv7sv;\n}\n.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {\n  mix-blend-mode: difference;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: -2;\n}\n\n@property --OP-annulus-dual-sectors-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --OP-annulus-dual-sectors-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --OP-annulus-dual-sectors-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --OP-annulus-dual-sectors-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 1.2s;\n}\n@keyframes uxlv7ra {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes uxlv7sv {\n  100%, 0% {\n    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;\n  }\n  20% {\n    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;\n  }\n  25% {\n    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;\n  }\n  45% {\n    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;\n  }\n  50% {\n    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;\n  }\n  70% {\n    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;\n  }\n  75% {\n    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;\n  }\n  95% {\n    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;\n  }\n}'),Array.from({length:4},function(e,t){return"--OP-annulus-dual-sectors-phase".concat(t+1,"-color")}),c('.OP-annulus-sector-track-rli-bounding-box {\n  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);\n  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);\n  font-size: 16px;\n  display: inline-block;\n}\n.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {\n  width: 5em;\n  height: 5em;\n  color: var(--OP-annulus-sector-phase1-color);\n  display: inline-block;\n  position: relative;\n  z-index: 0;\n}\n.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {\n  width: 100%;\n  height: 100%;\n  border-width: 0.34em;\n  border-style: solid;\n  border-radius: 50%;\n  box-sizing: border-box;\n  border-color: var(--OP-annulus-track-phase1-color);\n  border-top-color: var(--OP-annulus-sector-phase1-color);\n  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7rl, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7tf;\n}\n.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {\n  mix-blend-mode: difference;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: -2;\n}\n\n@property --OP-annulus-track-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgba(50, 205, 50, 0.22);\n}\n@property --OP-annulus-track-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgba(50, 205, 50, 0.22);\n}\n@property --OP-annulus-track-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgba(50, 205, 50, 0.22);\n}\n@property --OP-annulus-track-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgba(50, 205, 50, 0.22);\n}\n@property --OP-annulus-sector-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --OP-annulus-sector-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --OP-annulus-sector-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --OP-annulus-sector-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 1s;\n}\n@keyframes uxlv7rl {\n  to {\n    transform: rotate(1turn);\n  }\n}\n@keyframes uxlv7tf {\n  100%, 0% {\n    border-color: var(--OP-annulus-track-phase1-color);\n    border-top-color: var(--OP-annulus-sector-phase1-color);\n  }\n  18% {\n    border-color: var(--OP-annulus-track-phase1-color);\n    border-top-color: var(--OP-annulus-sector-phase1-color);\n  }\n  25% {\n    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));\n    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));\n  }\n  43% {\n    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));\n    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));\n  }\n  50% {\n    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));\n    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));\n  }\n  68% {\n    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));\n    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));\n  }\n  75% {\n    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));\n    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));\n  }\n  93% {\n    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));\n    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));\n  }\n}'),Array.from({length:4},function(e,t){return["--OP-annulus-track-phase".concat(t+1,"-color"),"--OP-annulus-sector-phase".concat(t+1,"-color")]}),c('.foursquare-rli-bounding-box {\n  --four-square-phase1-color: rgb(50, 205, 50);\n  font-size: 16px;\n  box-sizing: border-box;\n  color: var(--four-square-phase1-color);\n  display: inline-block;\n  overflow: hidden;\n}\n.foursquare-rli-bounding-box .foursquare-indicator {\n  height: 5.3033008589em;\n  width: 5.3033008589em;\n  position: relative;\n  display: block;\n}\n.foursquare-rli-bounding-box .foursquare-indicator .squares-container {\n  position: absolute;\n  z-index: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  height: 2.5em;\n  width: 2.5em;\n  color: inherit;\n  will-change: color, width, height;\n  transform: rotate(45deg);\n  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7dk, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7es;\n}\n.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {\n  position: absolute;\n  width: 1.25em;\n  height: 1.25em;\n  border-radius: 0.1875em;\n  background-color: currentColor;\n  animation: uxlv7dd var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;\n}\n.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {\n  top: 0;\n  left: 0;\n}\n.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {\n  top: 0;\n  right: 0;\n}\n.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {\n  bottom: 0;\n  left: 0;\n}\n.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {\n  bottom: 0;\n  right: 0;\n}\n\n@property --four-square-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --four-square-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --four-square-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --four-square-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 1s;\n}\n@keyframes uxlv7dk {\n  0% {\n    width: 2.5em;\n    height: 2.5em;\n  }\n  10% {\n    width: 2.5em;\n    height: 2.5em;\n  }\n  50% {\n    width: 3.75em;\n    height: 3.75em;\n  }\n  90% {\n    width: 2.5em;\n    height: 2.5em;\n  }\n  100% {\n    width: 2.5em;\n    height: 2.5em;\n  }\n}\n@keyframes uxlv7dd {\n  0% {\n    transform: rotateZ(0deg);\n  }\n  10% {\n    transform: rotateZ(0deg);\n  }\n  50% {\n    transform: rotateZ(90deg);\n  }\n  90% {\n    transform: rotateZ(90deg);\n  }\n  100% {\n    transform: rotateZ(90deg);\n  }\n}\n@keyframes uxlv7es {\n  100%, 0% {\n    color: var(--four-square-phase1-color);\n  }\n  20% {\n    color: var(--four-square-phase1-color);\n  }\n  25% {\n    color: var(--four-square-phase2-color, var(--four-square-phase1-color));\n  }\n  45% {\n    color: var(--four-square-phase2-color, var(--four-square-phase1-color));\n  }\n  50% {\n    color: var(--four-square-phase3-color, var(--four-square-phase1-color));\n  }\n  70% {\n    color: var(--four-square-phase3-color, var(--four-square-phase1-color));\n  }\n  75% {\n    color: var(--four-square-phase4-color, var(--four-square-phase1-color));\n  }\n  95% {\n    color: var(--four-square-phase4-color, var(--four-square-phase1-color));\n  }\n}'),Array.from({length:4},function(e,t){return"--four-square-phase".concat(t+1,"-color")}),c('.mosaic-rli-bounding-box {\n  --mosaic-phase1-color: rgb(50, 205, 50);\n  box-sizing: border-box;\n  font-size: 16px;\n  color: var(--mosaic-phase1-color);\n}\n.mosaic-rli-bounding-box .mosaic-indicator {\n  width: 5em;\n  height: 5em;\n  color: currentColor;\n  display: grid;\n  gap: 0.125em;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-areas: "a b c" "d e f" "g h i";\n  position: relative;\n  z-index: 0;\n}\n.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {\n  mix-blend-mode: difference;\n  position: absolute;\n  top: 105%;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: -2;\n}\n.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {\n  background-color: var(--mosaic-phase1-color);\n  animation-name: uxlv7i4, uxlv7is;\n  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);\n  animation-timing-function: var(--rli-animation-function, ease-in-out);\n  animation-iteration-count: infinite;\n}\n.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {\n  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);\n  grid-area: a;\n}\n.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {\n  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);\n  grid-area: b;\n}\n.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {\n  grid-area: c;\n  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);\n}\n.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {\n  grid-area: d;\n  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);\n}\n.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {\n  grid-area: e;\n  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);\n}\n.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {\n  grid-area: f;\n  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);\n}\n.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {\n  grid-area: g;\n  animation-delay: 0s;\n}\n.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {\n  grid-area: h;\n  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);\n}\n.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {\n  grid-area: i;\n  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);\n}\n\n@property --mosaic-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --mosaic-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --mosaic-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --mosaic-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 1.5s;\n}\n@keyframes uxlv7i4 {\n  0%, 60%, 100% {\n    transform: scale3D(1, 1, 1);\n  }\n  30% {\n    transform: scale3D(0, 0, 1);\n  }\n}\n@keyframes uxlv7is {\n  100%, 0% {\n    background-color: var(--mosaic-phase1-color);\n  }\n  25% {\n    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));\n  }\n  50% {\n    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));\n  }\n  75% {\n    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));\n  }\n}'),Array.from({length:4},function(e,t){return"--mosaic-phase".concat(t+1,"-color")}),c('.riple-rli-bounding-box {\n  --riple-phase1-color: rgb(50, 205, 50);\n  box-sizing: border-box;\n  font-size: 16px;\n  display: inline-block;\n  color: var(--riple-phase1-color);\n}\n.riple-rli-bounding-box .riple-indicator {\n  display: inline-block;\n  width: 5em;\n  height: 5em;\n  position: relative;\n  z-index: 0;\n}\n.riple-rli-bounding-box .riple-indicator .riple-text {\n  mix-blend-mode: difference;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: -2;\n}\n.riple-rli-bounding-box .riple-indicator .riple {\n  --border-width: 0.25em;\n  position: absolute;\n  border: var(--border-width) solid var(--riple-phase1-color);\n  opacity: 1;\n  border-radius: 50%;\n  will-change: top, right, left, bottom, border-color;\n  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7i1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7io;\n}\n.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {\n  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);\n}\n\n@property --riple-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --riple-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --riple-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --riple-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 1s;\n}\n@keyframes uxlv7i1 {\n  0% {\n    top: calc(50% - var(--border-width));\n    left: calc(50% - var(--border-width));\n    right: calc(50% - var(--border-width));\n    bottom: calc(50% - var(--border-width));\n    opacity: 0;\n  }\n  4.9% {\n    top: calc(50% - var(--border-width));\n    left: calc(50% - var(--border-width));\n    right: calc(50% - var(--border-width));\n    bottom: calc(50% - var(--border-width));\n    opacity: 0;\n  }\n  5% {\n    top: calc(50% - var(--border-width));\n    left: calc(50% - var(--border-width));\n    right: calc(50% - var(--border-width));\n    bottom: calc(50% - var(--border-width));\n    opacity: 1;\n  }\n  100% {\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    opacity: 0;\n  }\n}\n@keyframes uxlv7io {\n  100%, 0% {\n    border-color: var(--riple-phase1-color);\n  }\n  24.9% {\n    border-color: var(--riple-phase1-color);\n  }\n  25% {\n    border-color: var(--riple-phase2-color, var(--riple-phase1-color));\n  }\n  49.9% {\n    border-color: var(--riple-phase2-color, var(--riple-phase1-color));\n  }\n  50% {\n    border-color: var(--riple-phase3-color, var(--riple-phase1-color));\n  }\n  74.9% {\n    border-color: var(--riple-phase3-color, var(--riple-phase1-color));\n  }\n  75% {\n    border-color: var(--riple-phase4-color, var(--riple-phase1-color));\n  }\n  99.9% {\n    border-color: var(--riple-phase4-color, var(--riple-phase1-color));\n  }\n}'),Array.from({length:4},function(e,t){return"--riple-phase".concat(t+1,"-color")}),c('.pulsate-rli-bounding-box {\n  --TD-pulsate-phase1-color: rgb(50, 205, 50);\n  font-size: 16px;\n  display: inline-block;\n  box-sizing: border-box;\n  color: var(--TD-pulsate-phase1-color);\n}\n.pulsate-rli-bounding-box .pulsate-indicator {\n  width: 4.4em;\n  height: 1.1em;\n  text-align: center;\n  position: relative;\n  z-index: 0;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: nowrap;\n  align-items: center;\n}\n.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {\n  width: 1.1em;\n  height: 1.1em;\n  border-radius: 50%;\n  background-color: var(--TD-pulsate-phase1-color);\n  transform: scale(0);\n  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7s0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7to;\n}\n.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {\n  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);\n}\n.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {\n  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);\n}\n.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {\n  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);\n}\n.pulsate-rli-bounding-box .pulsate-text {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 80%;\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 0.6em;\n  letter-spacing: 0.5px;\n  font-family: sans-serif;\n  mix-blend-mode: difference;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: -2;\n}\n\n@property --TD-pulsate-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --TD-pulsate-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --TD-pulsate-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --TD-pulsate-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 1.2s;\n}\n@keyframes uxlv7s0 {\n  0%, 90%, 100% {\n    transform: scale(0);\n  }\n  40% {\n    transform: scale(1);\n  }\n}\n@keyframes uxlv7to {\n  0%, 100% {\n    background-color: var(--TD-pulsate-phase1-color);\n  }\n  24.9% {\n    background-color: var(--TD-pulsate-phase1-color);\n  }\n  25% {\n    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));\n  }\n  49.9% {\n    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));\n  }\n  50% {\n    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));\n  }\n  74.9% {\n    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));\n  }\n  75% {\n    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));\n  }\n  99.9% {\n    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));\n  }\n}'),Array.from({length:4},function(e,t){return"--TD-pulsate-phase".concat(t+1,"-color")}),c('.brick-stack-rli-bounding-box {\n  --TD-brick-stack-phase1-color: rgb(50, 205, 50);\n  box-sizing: border-box;\n  font-size: 16px;\n  display: inline-block;\n  color: var(--TD-brick-stack-phase1-color);\n}\n.brick-stack-rli-bounding-box .brick-stack-indicator {\n  width: 2.8em;\n  height: 2.8em;\n  position: relative;\n  display: block;\n  margin: 0 auto;\n}\n.brick-stack-rli-bounding-box .brick-stack {\n  width: 100%;\n  height: 100%;\n  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;\n  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite uxlv7tu, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite uxlv7us;\n}\n\n@property --TD-brick-stack-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --TD-brick-stack-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --TD-brick-stack-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --TD-brick-stack-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 1s;\n}\n@keyframes uxlv7tu {\n  0% {\n    background-position: 0 0, 0 100%, 100% 100%;\n  }\n  25% {\n    background-position: 100% 0, 0 100%, 100% 100%;\n  }\n  50% {\n    background-position: 100% 0, 0 0, 100% 100%;\n  }\n  75% {\n    background-position: 100% 0, 0 0, 0 100%;\n  }\n  100% {\n    background-position: 100% 100%, 0 0, 0 100%;\n  }\n}\n@keyframes uxlv7us {\n  100%, 0% {\n    color: var(--TD-brick-stack-phase1-color);\n  }\n  20% {\n    color: var(--TD-brick-stack-phase1-color);\n  }\n  25% {\n    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));\n  }\n  45% {\n    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));\n  }\n  50% {\n    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));\n  }\n  70% {\n    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));\n  }\n  75% {\n    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));\n  }\n  95% {\n    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));\n  }\n}'),Array.from({length:4},function(e,t){return"--TD-brick-stack-phase".concat(t+1,"-color")}),c('.bob-rli-bounding-box {\n  --TD-bob-phase1-color: rgb(50, 205, 50);\n  box-sizing: border-box;\n  font-size: 16px;\n  display: inline-block;\n  color: var(--TD-bob-phase1-color);\n}\n.bob-rli-bounding-box .bob-indicator {\n  width: 4.4em;\n  height: 2.2em;\n  position: relative;\n  display: block;\n  margin: 0 auto;\n}\n.bob-rli-bounding-box .bob-indicator .bobbing,\n.bob-rli-bounding-box .bob-indicator .bobbing::before,\n.bob-rli-bounding-box .bob-indicator .bobbing::after {\n  width: 1.1em;\n  height: 100%;\n  display: grid;\n  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite uxlv7u0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite uxlv7vq;\n}\n.bob-rli-bounding-box .bob-indicator .bobbing::before,\n.bob-rli-bounding-box .bob-indicator .bobbing::after {\n  content: "";\n  grid-area: 1/1;\n}\n.bob-rli-bounding-box .bob-indicator .bobbing {\n  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);\n  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;\n}\n.bob-rli-bounding-box .bob-indicator .bobbing::before {\n  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);\n  transform: translateX(150%);\n  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;\n}\n.bob-rli-bounding-box .bob-indicator .bobbing::after {\n  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);\n  transform: translateX(300%);\n  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;\n}\n\n@property --TD-bob-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --TD-bob-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --TD-bob-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --TD-bob-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 1.2s;\n}\n@keyframes uxlv7u0 {\n  100%, 0% {\n    background-position: 50% 50%;\n  }\n  15% {\n    background-position: 50% 10%;\n  }\n  30% {\n    background-position: 50% 100%;\n  }\n  40% {\n    background-position: 50% 0%;\n  }\n  50% {\n    background-position: 50% 90%;\n  }\n  70% {\n    background-position: 50% 10%;\n  }\n  98% {\n    background-position: 50% 50%;\n  }\n}\n@keyframes uxlv7vq {\n  100%, 0% {\n    color: var(--TD-bob-phase1-color);\n  }\n  22% {\n    color: var(--TD-bob-phase1-color);\n  }\n  25% {\n    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));\n  }\n  47% {\n    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));\n  }\n  50% {\n    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));\n  }\n  72% {\n    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));\n  }\n  75% {\n    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));\n  }\n  97% {\n    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));\n  }\n}'),Array.from({length:4},function(e,t){return"--TD-bob-phase".concat(t+1,"-color")}),c('.bounce-rli-bounding-box {\n  --TD-bounce-phase1-color: rgb(50, 205, 50);\n  font-size: 16px;\n  color: var(--TD-bounce-phase1-color);\n  display: inline-block;\n  padding-bottom: 0.25125em;\n}\n.bounce-rli-bounding-box .wrapper {\n  --dot1-delay: 0s;\n  --dot1-x-offset: 0.55em;\n  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);\n  --dot2-x-offset: 2.2em;\n  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);\n  --dot3-x-offset: 3.85em;\n  width: 5.5em;\n  height: 3.125em;\n  position: relative;\n  display: block;\n  margin: 0 auto;\n}\n.bounce-rli-bounding-box .wrapper .group {\n  display: block;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.bounce-rli-bounding-box .wrapper .group .dot {\n  width: 1.1em;\n  height: 1.1em;\n  position: absolute;\n  border-radius: 50%;\n  background-color: var(--TD-bounce-phase1-color);\n  transform-origin: 50%;\n  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7wc, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite uxlv7x6;\n}\n.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {\n  left: var(--dot1-x-offset);\n  animation-delay: var(--dot1-delay), 0s;\n}\n.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {\n  left: var(--dot2-x-offset);\n  animation-delay: var(--dot2-delay), 0s;\n}\n.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {\n  left: var(--dot3-x-offset);\n  animation-delay: var(--dot3-delay), 0s;\n}\n.bounce-rli-bounding-box .wrapper .group .shadow {\n  width: 1.1em;\n  height: 0.22em;\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, 0.5);\n  position: absolute;\n  top: 101%;\n  transform-origin: 50%;\n  z-index: -1;\n  filter: blur(1px);\n  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7ww;\n}\n.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {\n  left: var(--dot1-x-offset);\n  animation-delay: var(--dot1-delay);\n}\n.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {\n  left: var(--dot2-x-offset);\n  animation-delay: var(--dot2-delay);\n}\n.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {\n  left: var(--dot3-x-offset);\n  animation-delay: var(--dot3-delay);\n}\n\n@property --TD-bounce-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --TD-bounce-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --TD-bounce-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --TD-bounce-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 0.5s;\n}\n@keyframes uxlv7wc {\n  0% {\n    top: 0%;\n  }\n  60% {\n    height: 1.25em;\n    border-radius: 50%;\n    transform: scaleX(1);\n  }\n  100% {\n    top: 100%;\n    height: 0.22em;\n    transform: scaleX(1.5);\n    filter: blur(0.4px);\n  }\n}\n@keyframes uxlv7ww {\n  0% {\n    transform: scaleX(0.2);\n    opacity: 0.2;\n  }\n  60% {\n    opacity: 0.4;\n  }\n  100% {\n    transform: scaleX(1.5);\n    opacity: 0.6;\n  }\n}\n@keyframes uxlv7x6 {\n  0%, 100% {\n    background-color: var(--TD-bounce-phase1-color);\n  }\n  20% {\n    background-color: var(--TD-bounce-phase1-color);\n  }\n  25% {\n    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));\n  }\n  45% {\n    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));\n  }\n  50% {\n    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));\n  }\n  70% {\n    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));\n  }\n  75% {\n    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));\n  }\n  95% {\n    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));\n  }\n}'),Array.from({length:4},function(e,t){return"--TD-bounce-phase".concat(t+1,"-color")}),c('.blink-blur-rli-bounding-box {\n  --shape-phase1-color: rgb(50, 205, 50);\n  font-size: 16px;\n  color: var(--shape-phase1-color);\n}\n.blink-blur-rli-bounding-box .blink-blur-indicator {\n  isolation: isolate;\n  display: flex;\n  flex-direction: row;\n  -moz-column-gap: 0.4em;\n       column-gap: 0.4em;\n}\n.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {\n  --x-deg: -20deg;\n  width: 1.8em;\n  height: 2.25em;\n  border-radius: 0.25em;\n  color: inherit;\n  transform: skewX(var(--x-deg));\n  background-color: var(--shape-phase1-color);\n  animation-name: uxlv7id, uxlv7jl;\n  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);\n  animation-timing-function: var(--rli-animation-function, ease-in);\n  animation-iteration-count: infinite;\n}\n.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);\n}\n.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);\n}\n.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);\n}\n.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);\n}\n.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);\n}\n\n@property --shape-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --shape-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --shape-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --shape-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 1.2s;\n}\n@keyframes uxlv7id {\n  100%, 0% {\n    opacity: 0.3;\n    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);\n    transform: skewX(var(--x-deg)) scale(1.2, 1.45);\n  }\n  39% {\n    opacity: 0.8;\n  }\n  40%, 41%, 42% {\n    opacity: 0;\n  }\n  43% {\n    opacity: 0.8;\n  }\n  50% {\n    opacity: 1;\n    filter: blur(0em) drop-shadow(0 0 0em);\n    transform: skewX(var(--x-deg)) scale(1, 1);\n  }\n}\n@keyframes uxlv7jl {\n  100%, 0% {\n    color: var(--shape-phase1-color);\n    background-color: var(--shape-phase1-color);\n  }\n  25% {\n    color: var(--shape-phase2-color, var(--shape-phase1-color));\n    background-color: var(--shape-phase2-color, var(--shape-phase1-color));\n  }\n  50% {\n    color: var(--shape-phase3-color, var(--shape-phase1-color));\n    background-color: var(--shape-phase3-color, var(--shape-phase1-color));\n  }\n  75% {\n    color: var(--shape-phase4-color, var(--shape-phase1-color));\n    background-color: var(--shape-phase4-color, var(--shape-phase1-color));\n  }\n}'),Array.from({length:4},function(e,t){return"--shape-phase".concat(t+1,"-color")}),c('.trophy-spin-rli-bounding-box {\n  --trophySpin-phase1-color: rgb(50, 205, 50);\n  box-sizing: border-box;\n  font-size: 16px;\n  position: relative;\n  isolation: isolate;\n  color: var(--trophySpin-phase1-color);\n}\n.trophy-spin-rli-bounding-box .trophy-spin-indicator {\n  width: 4em;\n  perspective: 1000px;\n  transform-style: preserve-3d;\n  display: block;\n  margin: 0 auto;\n}\n.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {\n  display: block;\n  width: 4em;\n  height: 0.5em;\n  background: var(--trophySpin-phase1-color);\n  animation: uxlv7ki var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, uxlv7l2 calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, uxlv7ly calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;\n}\n.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {\n  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);\n}\n.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {\n  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);\n}\n.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {\n  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);\n}\n.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {\n  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);\n}\n.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {\n  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);\n}\n.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {\n  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);\n}\n.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {\n  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);\n}\n.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {\n  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);\n}\n\n@property --trophySpin-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --trophySpin-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --trophySpin-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --trophySpin-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 2.5s;\n}\n@keyframes uxlv7ki {\n  to {\n    transform: rotateY(1turn) rotateX(-25deg);\n  }\n}\n@keyframes uxlv7l2 {\n  100%, 0% {\n    filter: brightness(1);\n    opacity: 1;\n  }\n  15% {\n    filter: brightness(1);\n  }\n  25% {\n    opacity: 0.96;\n  }\n  30% {\n    filter: brightness(0.92);\n  }\n  50% {\n    filter: brightness(0.7);\n    opacity: 1;\n  }\n  75% {\n    filter: brightness(0.92);\n    opacity: 0.96;\n  }\n  90% {\n    filter: brightness(1);\n  }\n}\n@keyframes uxlv7ly {\n  100%, 0% {\n    background-color: var(--trophySpin-phase1-color);\n  }\n  18% {\n    background-color: var(--trophySpin-phase1-color);\n  }\n  25% {\n    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));\n  }\n  43% {\n    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));\n  }\n  50% {\n    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));\n  }\n  68% {\n    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));\n  }\n  75% {\n    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));\n  }\n  93% {\n    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));\n  }\n}'),Array.from({length:4},function(e,t){return"--trophySpin-phase".concat(t+1,"-color")}),c('.slab-rli-bounding-box {\n  --slab-phase1-color: rgb(50, 205, 50);\n  font-size: 16px;\n  color: var(--slab-phase1-color);\n  position: relative;\n}\n.slab-rli-bounding-box .slab-indicator {\n  position: relative;\n  display: block;\n  width: 7em;\n  height: 4em;\n  margin: 0 auto;\n  overflow: hidden;\n}\n.slab-rli-bounding-box .slab-indicator .slabs-wrapper {\n  width: 4em;\n  height: 4em;\n  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);\n  transform-style: preserve-3d;\n  transform-origin: 50% 100%;\n  display: block;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n}\n.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: var(--slab-phase1-color);\n  opacity: 0;\n  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);\n  transform-origin: 0% 0%;\n  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite uxlv7md, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite uxlv7n0;\n}\n.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {\n  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);\n}\n.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {\n  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);\n}\n.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {\n  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);\n}\n.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {\n  animation-delay: 0s;\n}\n\n@property --slab-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --slab-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --slab-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --slab-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration-unitless {\n  syntax: "<number>";\n  inherits: true;\n  initial-value: 3;\n}\n@keyframes uxlv7md {\n  0% {\n    transform: translateY(0) rotateX(30deg);\n    opacity: 0;\n  }\n  10% {\n    transform: translateY(-40%) rotateX(0deg);\n    opacity: 1;\n  }\n  25% {\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(-400%) rotateX(0deg);\n    opacity: 0;\n  }\n}\n@keyframes uxlv7n0 {\n  100%, 0% {\n    background-color: var(--slab-phase1-color);\n  }\n  24.9% {\n    background-color: var(--slab-phase1-color);\n  }\n  25% {\n    background-color: var(--slab-phase2-color, var(--slab-phase1-color));\n  }\n  49.9% {\n    background-color: var(--slab-phase2-color, var(--slab-phase1-color));\n  }\n  50% {\n    background-color: var(--slab-phase3-color, var(--slab-phase1-color));\n  }\n  74.9% {\n    background-color: var(--slab-phase3-color, var(--slab-phase1-color));\n  }\n  75% {\n    background-color: var(--slab-phase4-color, var(--slab-phase1-color));\n  }\n  99.9% {\n    background-color: var(--slab-phase4-color, var(--slab-phase1-color));\n  }\n}'),Array.from({length:4},function(e,t){return"--slab-phase".concat(t+1,"-color")}),c('.lifeline-rli-bounding-box {\n  --life-line-phase1-color: rgb(50, 205, 50);\n  font-size: 16px;\n  isolation: isolate;\n  color: var(--life-line-phase1-color);\n}\n.lifeline-rli-bounding-box .lifeline-indicator {\n  position: relative;\n  text-align: center;\n}\n.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {\n  stroke-dasharray: 474.7616760254 30.3039367676;\n  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite uxlv7k3, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite uxlv7kg;\n}\n.lifeline-rli-bounding-box .lifeline-text {\n  color: currentColor;\n  mix-blend-mode: difference;\n  width: unset;\n  display: block;\n}\n\n@property --life-line-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --life-line-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --life-line-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --life-line-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 2s;\n}\n@keyframes uxlv7k3 {\n  to {\n    stroke-dashoffset: -1010.1312255859;\n  }\n}\n@keyframes uxlv7kg {\n  100%, 0% {\n    color: var(--life-line-phase1-color);\n  }\n  20% {\n    color: var(--life-line-phase1-color);\n  }\n  25% {\n    color: var(--life-line-phase2-color, var(--life-line-phase1-color));\n  }\n  45% {\n    color: var(--life-line-phase2-color, var(--life-line-phase1-color));\n  }\n  50% {\n    color: var(--life-line-phase3-color, var(--life-line-phase1-color));\n  }\n  70% {\n    color: var(--life-line-phase3-color, var(--life-line-phase1-color));\n  }\n  75% {\n    color: var(--life-line-phase4-color, var(--life-line-phase1-color));\n  }\n  95% {\n    color: var(--life-line-phase4-color, var(--life-line-phase1-color));\n  }\n}');var J=Array.from({length:4},function(e,t){return"--life-line-phase".concat(t+1,"-color")}),K=function(e){var t,n=q(null==e?void 0:e.style,null==e?void 0:e.size),r=n.styles,a=n.fontSize,o=null==e?void 0:e.easing,i=W(null==e?void 0:e.speedPlus,"2s").animationPeriod,s=function(e){var t={};if(e instanceof Array){for(var n=function(e,t){if(void 0===t&&(t=0),0===e.length)throw Error("Input array cannot be empty!");var n=[];return function e(t,r){return void 0===r&&(r=0),n.push.apply(n,t),n.length<r&&e(n,r),n.slice(0,r)}(e,t)}(e,J.length),r=0;r<n.length&&!(r>=4);r++)t[J[r]]=n[r];return t}try{if("string"!=typeof e)throw Error("Color String expected");for(var a=0;a<J.length;a++)t[J[a]]=e}catch(n){for(n instanceof Error?console.warn("[".concat(n.message,']: Received "').concat(typeof e,'" instead with value, ').concat(JSON.stringify(e))):console.warn("".concat(JSON.stringify(e)," received in <LifeLine /> indicator cannot be processed. Using default instead!")),a=0;a<J.length;a++)t[J[a]]=Y}return t}(null!=(t=null==e?void 0:e.color)?t:"");return l.default.createElement("span",{className:"rli-d-i-b lifeline-rli-bounding-box",style:d(d(d(d(d({},a&&{fontSize:a}),i&&{"--rli-animation-duration":i}),o&&{"--rli-animation-function":o}),s),r),role:"status","aria-live":"polite","aria-label":"Loading"},l.default.createElement("span",{className:"rli-d-i-b lifeline-indicator"},l.default.createElement("svg",{width:"14em",height:"6.825000001em",xmlns:"http://www.w3.org/2000/svg",version:"1.2",viewBox:"0 0 350 50",preserveAspectRatio:"xMinYMin meet"},l.default.createElement("path",{className:"rli-lifeline",stroke:"currentColor",fill:"none",strokeLinejoin:"round",strokeWidth:"4px",d:"M-113 70h250q8-30 12-3t5 8 3-7 3 4 6 35 8-55 6 40 8-3s2-11 10-10 1 1 8-10l4 8c6 4 8-6 10-17s2 10 9 11h210"}))),l.default.createElement(X,{staticText:!0,text:null==e?void 0:e.text,textColor:null==e?void 0:e.textColor}))},Q=e.i(97053);let ee=Q.default.div.withConfig({displayName:"Loader.styles__LoaderContainer",componentId:"sc-c4a451a4-0"})`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:e})=>e.colors.bgPrimary};
  z-index: 9999;
`,et=()=>(0,s.jsx)(ee,{children:(0,s.jsx)(K,{color:"#316fcc",size:"medium",text:"",textColor:""})}),en=Q.keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,er=Q.keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,ea=Q.keyframes`
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,eo=Q.keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,ei=Q.keyframes`
  0% {
    opacity: 0;
    transform: rotate(-180deg) scale(0.5);
  }
  50% {
    opacity: 1;
    transform: rotate(10deg) scale(1.1);
  }
  100% {
    opacity: 1;
    transform: rotate(0deg) scale(1);
  }
`,es=Q.default.nav.withConfig({displayName:"NavBar.styles__StyledNavbar",componentId:"sc-eefaf6bf-0"})`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({theme:e})=>e.zIndex.sticky};
  background-color: rgba(10, 10, 10, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  padding: ${({theme:e})=>e.spacing.lg} 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background-color: ${({theme:e})=>e.colors.textPrimary};
    opacity: ${({$mobileMenuActive:e})=>+!!e};
    transition: opacity ${({theme:e})=>e.transitions.base};
  }

  @media (max-width: 768px) {
    padding: ${({theme:e})=>e.spacing.md} 0;
  }
`,el=Q.default.div.withConfig({displayName:"NavBar.styles__NavbarContent",componentId:"sc-eefaf6bf-1"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.spacing.xl};
  position: relative;

  @media (max-width: 768px) {
    padding: 0 ${({theme:e})=>e.spacing.xl};
  }
`,ec=Q.default.a.withConfig({displayName:"NavBar.styles__Logo",componentId:"sc-eefaf6bf-2"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyHeading};
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.textPrimary};
  transition: color ${({theme:e})=>e.transitions.fast};
  display: flex;
  align-items: center;
  height: 40px;

  &:hover {
    color: ${({theme:e})=>e.colors.accent};
  }

  @media (max-width: 768px) {
    font-size: ${({theme:e})=>e.typography.fontSize.base};
    height: 32px;
  }
`,ed=Q.default.div.withConfig({displayName:"NavBar.styles__NavRight",componentId:"sc-eefaf6bf-3"})`
  display: flex;
  align-items: center;
  gap: 0;

  @media (max-width: 768px) {
    display: none;
  }
`,eu=Q.default.ul.withConfig({displayName:"NavBar.styles__NavLinks",componentId:"sc-eefaf6bf-4"})`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.xl};
  list-style: none;
  margin: 0;
  padding: 0;
`,ep=Q.default.a.withConfig({displayName:"NavBar.styles__NavLink",componentId:"sc-eefaf6bf-5"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyBody};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({theme:e})=>e.colors.textPrimary};
  transition: color ${({theme:e})=>e.transitions.fast};

  &:hover {
    color: ${({theme:e})=>e.colors.textSecondary};
  }
`,eh=Q.default.button.withConfig({displayName:"NavBar.styles__MobileMenuButton",componentId:"sc-eefaf6bf-6"})`
  display: none;
  flex-direction: column;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: ${({theme:e})=>e.spacing.sm};
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  position: relative;
  z-index: 1001;
  align-self: center;

  @media (max-width: 768px) {
    display: ${({$isOpen:e})=>e?"none":"flex"};
  }
`,ef=Q.default.span.withConfig({displayName:"NavBar.styles__HamburgerLine",componentId:"sc-eefaf6bf-7"})`
  display: block;
  height: 2px;
  background-color: ${({theme:e})=>e.colors.textPrimary};
  transition: all ${({theme:e})=>e.transitions.base};
  border-radius: 2px;

  ${({$index:e})=>{switch(e){case 0:return Q.css`
          width: 12px;
          align-self: flex-end;
        `;case 1:return Q.css`
          align-self: flex-end;
          width: 18px;
        `;case 2:return Q.css`
          width: 24px;
        `}}}

  ${({$isOpen:e,$index:t})=>e&&Q.css`
      ${0===t&&Q.css`
        width: 32px;
        transform: rotate(45deg) translate(10px, 10px);
      `}
      ${1===t&&Q.css`
        opacity: 0;
        transform: translateX(-10px);
      `}
      ${2===t&&Q.css`
        width: 32px;
        transform: rotate(-45deg) translate(10px, -10px);
      `}
    `}
`,em=Q.default.div.withConfig({displayName:"NavBar.styles__MobileMenu",componentId:"sc-eefaf6bf-8"})`
  display: ${({$isOpen:e})=>e?"block":"none"};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  background-color: ${({theme:e})=>e.colors.bgPrimary};
  z-index: 1000;
  padding: ${({theme:e})=>e.spacing.lg} ${({theme:e})=>e.spacing.xl};
  overflow-y: auto;
  animation: ${er} ${({theme:e})=>e.transitions.slow} ease-out;
`,eg=Q.default.div.withConfig({displayName:"NavBar.styles__MobileMenuContent",componentId:"sc-eefaf6bf-9"})`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;
`,eb=Q.default.div.withConfig({displayName:"NavBar.styles__MobileMenuHeader",componentId:"sc-eefaf6bf-10"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: ${({theme:e})=>e.spacing.sm};
  padding-bottom: ${({theme:e})=>e.spacing.sm};
`,ey=Q.default.a.withConfig({displayName:"NavBar.styles__MobileMenuLogo",componentId:"sc-eefaf6bf-11"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyHeading};
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.textPrimary};
  text-decoration: none;
  opacity: 0;
  animation: ${eo} 0.4s ease-out 0.1s forwards;
`,ex=Q.default.button.withConfig({displayName:"NavBar.styles__MobileMenuCloseButton",componentId:"sc-eefaf6bf-12"})`
  background: none;
  border: none;
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: 48px;
  line-height: 1;
  cursor: pointer;
  padding: ${({theme:e})=>e.spacing.xs};
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color ${({theme:e})=>e.transitions.fast};
  opacity: 0;
  animation: ${ei} 0.6s ease-out 0.1s forwards;

  &:hover {
    color: ${({theme:e})=>e.colors.accent};
  }
`,ev=Q.default.hr.withConfig({displayName:"NavBar.styles__MobileMenuDivider",componentId:"sc-eefaf6bf-13"})`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
  margin: 0;
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  width: 100%;
`,ew=Q.default.ul.withConfig({displayName:"NavBar.styles__MobileNavLinks",componentId:"sc-eefaf6bf-14"})`
  display: flex;
  flex-direction: column;
  gap: 0;
  list-style: none;
  flex: 1;
  justify-content: flex-start;
`,ek=Q.default.li.withConfig({displayName:"NavBar.styles__MobileNavLinkItem",componentId:"sc-eefaf6bf-15"})`
  opacity: 0;
  animation: ${eo} 0.4s ease-out forwards;
  animation-delay: ${({$index:e})=>.1+.1*e}s;
`,ej=Q.default.a.withConfig({displayName:"NavBar.styles__MobileNavLink",componentId:"sc-eefaf6bf-16"})`
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  padding: ${({theme:e})=>e.spacing.sm} 0;
  display: block;
  transition: all ${({theme:e})=>e.transitions.base};
  font-family: ${({theme:e})=>e.typography.fontFamilyBody};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({theme:e})=>e.colors.textPrimary};
  text-decoration: none;

  &:hover {
    color: ${({theme:e})=>e.colors.accent};
    padding-left: ${({theme:e})=>e.spacing.sm};
  }
`,e_=Q.default.a.withConfig({displayName:"NavBar.styles__ResumeButton",componentId:"sc-eefaf6bf-17"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyBody};
  background-color: transparent;
  border: 1px solid ${({theme:e})=>e.colors.textPrimary};
  color: ${({theme:e})=>e.colors.textPrimary};
  padding: ${({theme:e})=>e.spacing.xs} ${({theme:e})=>e.spacing.lg};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  transition: all ${({theme:e})=>e.transitions.base};
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: ${({theme:e})=>e.spacing.xl};

  &:hover {
    background-color: ${({theme:e})=>e.colors.textPrimary};
    color: ${({theme:e})=>e.colors.bgPrimary};
  }
`,e$=Q.default.div.withConfig({displayName:"NavBar.styles__ResumeModalOverlay",componentId:"sc-eefaf6bf-18"})`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${({theme:e})=>e.zIndex.modal};
  padding: ${({theme:e})=>e.spacing.xl};
  animation: ${en} 0.2s ease-out;
`,eS=Q.default.div.withConfig({displayName:"NavBar.styles__ResumeModal",componentId:"sc-eefaf6bf-19"})`
  background-color: ${({theme:e})=>e.colors.bgSecondary};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: ${({theme:e})=>e.spacing["2xl"]};
  padding-top: ${({theme:e})=>e.spacing["3xl"]};
  max-width: 450px;
  width: 100%;
  position: relative;
  animation: ${ea} 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    padding: ${({theme:e})=>e.spacing.xl};
  }
`,eO=Q.default.h3.withConfig({displayName:"NavBar.styles__ResumeModalTitle",componentId:"sc-eefaf6bf-20"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyHeading};
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.textPrimary};
  margin: 0 0 ${({theme:e})=>e.spacing.md} 0;
  line-height: 1.2;
`,eC=Q.default.p.withConfig({displayName:"NavBar.styles__ResumeModalText",componentId:"sc-eefaf6bf-21"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyBody};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  color: ${({theme:e})=>e.colors.textSecondary};
  margin: 0 0 ${({theme:e})=>e.spacing.xl} 0;
  line-height: 1.6;
`,eE=Q.default.div.withConfig({displayName:"NavBar.styles__ResumeModalButtons",componentId:"sc-eefaf6bf-22"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.md};
`,eP=Q.default.button.withConfig({displayName:"NavBar.styles__ResumeModalButton",componentId:"sc-eefaf6bf-23"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyBody};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.colors.textPrimary};
  background-color: transparent;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  padding: ${({theme:e})=>e.spacing.md} ${({theme:e})=>e.spacing.lg};
  cursor: pointer;
  transition: all ${({theme:e})=>e.transitions.base};
  text-align: center;
  width: 100%;

  &:hover {
    background-color: ${({theme:e})=>e.colors.textPrimary};
    color: ${({theme:e})=>e.colors.bgPrimary};
    border-color: ${({theme:e})=>e.colors.textPrimary};
    transform: translateY(-1px);
  }
`,eT=Q.default.button.withConfig({displayName:"NavBar.styles__ResumeModalClose",componentId:"sc-eefaf6bf-24"})`
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  border: none;
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 28px;
  line-height: 1;
  cursor: pointer;
  padding: ${({theme:e})=>e.spacing.md};
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 ${({theme:e})=>e.borderRadius.md} 0 0;
  transition: all ${({theme:e})=>e.transitions.base};
  font-weight: 300;

  &:hover {
    color: ${({theme:e})=>e.colors.textPrimary};
    background-color: ${({theme:e})=>e.colors.bgTertiary};
  }
`,ez=({name:e,navItems:t=[{label:"Work",href:"#work"},{label:"Experience",href:"#experience"},{label:"About",href:"#about"},{label:"Contact",href:"#contact"}]})=>{let[n,r]=(0,l.useState)(!1),[a,o]=(0,l.useState)(!1);(0,l.useEffect)(()=>(n||a?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[n,a]);let i=()=>{r(!1)},c=e=>{e.preventDefault(),o(!0)},d=()=>{o(!1)};return(0,s.jsxs)(es,{$mobileMenuActive:n,children:[(0,s.jsxs)(el,{children:[(0,s.jsx)(ec,{href:"#",children:e}),(0,s.jsxs)(ed,{children:[(0,s.jsx)(eu,{children:t.map(e=>(0,s.jsx)("li",{children:(0,s.jsx)(ep,{href:e.href,children:e.label})},e.href))}),(0,s.jsx)(e_,{href:"#",onClick:c,children:"Resume"})]}),(0,s.jsxs)(eh,{$isOpen:n,onClick:()=>{r(!n)},"aria-label":"Toggle menu",children:[(0,s.jsx)(ef,{$index:0,$isOpen:n}),(0,s.jsx)(ef,{$index:1,$isOpen:n}),(0,s.jsx)(ef,{$index:2,$isOpen:n})]})]}),(0,s.jsx)(em,{$isOpen:n,onClick:e=>{e.target===e.currentTarget&&i()},children:(0,s.jsxs)(eg,{children:[(0,s.jsxs)(eb,{children:[(0,s.jsx)(ey,{href:"#",onClick:i,children:e}),(0,s.jsx)(ex,{onClick:i,"aria-label":"Close menu",children:"×"})]}),(0,s.jsx)(ev,{}),(0,s.jsxs)(ew,{children:[t.map((e,t)=>(0,s.jsx)(ek,{$index:t,children:(0,s.jsx)(ej,{href:e.href,onClick:i,children:e.label})},e.href)),(0,s.jsx)(ek,{$index:t.length,children:(0,s.jsx)(ej,{href:"#",onClick:e=>{e.preventDefault(),i(),c(e)},children:"Resume"})})]})]})}),a&&(0,s.jsx)(e$,{onClick:d,children:(0,s.jsxs)(eS,{onClick:e=>e.stopPropagation(),children:[(0,s.jsx)(eO,{children:"Resume Options"}),(0,s.jsx)(eC,{children:"Choose an option:"}),(0,s.jsxs)(eE,{children:[(0,s.jsx)(eP,{onClick:()=>{window.open("/resume/cv.pdf","_blank"),o(!1)},children:"View Resume"}),(0,s.jsx)(eP,{onClick:()=>{let e=document.createElement("a");e.href="/resume/cv.pdf",e.download="Umar_Nazir_Resume.pdf",document.body.appendChild(e),e.click(),document.body.removeChild(e),o(!1)},children:"Download Resume"})]}),(0,s.jsx)(eT,{onClick:d,"aria-label":"Close modal",children:"×"})]})})]})},eA=Q.default.div.withConfig({displayName:"HeroContent.styles__HeroText",componentId:"sc-5ac6c28e-0"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.xl};
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    gap: ${({theme:e})=>e.spacing.md};
  }
`,eF=Q.default.p.withConfig({displayName:"HeroContent.styles__Subtitle",componentId:"sc-5ac6c28e-1"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyBody};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin: 0;
`,eI=Q.default.div.withConfig({displayName:"HeroContent.styles__Title",componentId:"sc-5ac6c28e-2"})`
  display: flex;
  flex-direction: column;
  gap: 0;
  line-height: 1;
  align-items: center;
`,eN=Q.default.h2.withConfig({displayName:"HeroContent.styles__Headline",componentId:"sc-5ac6c28e-3"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyHeading};
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.colors.textPrimary};
  margin: 0;
  display: block;
  width: 100%;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: ${({theme:e})=>e.typography.fontSize["4xl"]};
  }

  @media (max-width: 768px) {
    font-size: ${({theme:e})=>e.typography.fontSize["4xl"]};
    line-height: 1.3;
  }
`,eM=Q.default.p.withConfig({displayName:"HeroContent.styles__Description",componentId:"sc-5ac6c28e-4"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyBody};
  max-width: 600px;
  color: ${({theme:e})=>e.colors.textSecondary};
  line-height: 1.8;
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  margin: 0;
  text-align: center;

  @media (max-width: 1024px) {
    max-width: 100%;
  }

  @media (max-width: 768px) {
    margin-top: ${({theme:e})=>e.spacing.sm};
    font-size: ${({theme:e})=>e.typography.fontSize.sm};
    line-height: 1.6;
  }
`,eD=({title:e,headline:t,description:n})=>{let r=t.split("\n").filter(e=>""!==e.trim());return(0,s.jsxs)(eA,{children:[(0,s.jsx)(eF,{"data-aos":"fade-up","data-aos-delay":"0",children:e}),(0,s.jsx)(eI,{children:r.map((e,t)=>(0,s.jsx)(eN,{"data-aos":"fade-up","data-aos-delay":`${100+100*t}`,children:e.trim()},t))}),(0,s.jsx)(eM,{"data-aos":"fade-up","data-aos-delay":"400",children:n})]})},eR=Q.keyframes`
  0% {
    height: 0;
    opacity: 0;
  }
  50% {
    height: 40px;
    opacity: 1;
  }
  100% {
    height: 0;
    opacity: 0;
  }
`,eB=Q.default.div.withConfig({displayName:"ScrollIndicator.styles__ScrollIndicatorWrapper",componentId:"sc-fa897f55-0"})`
  position: absolute;
  bottom: ${({theme:e})=>e.spacing["2xl"]};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  text-transform: uppercase;
  letter-spacing: 0.1em;

  @media (max-width: 768px) {
    bottom: ${({theme:e})=>e.spacing.md};
    font-size: 0.65rem;
  }
`,eL=Q.default.div.withConfig({displayName:"ScrollIndicator.styles__ScrollLine",componentId:"sc-fa897f55-1"})`
  width: 1px;
  height: 40px;
  background-color: ${({theme:e})=>e.colors.textSecondary};
  animation: ${eR} 2s ease-in-out infinite;

  @media (max-width: 768px) {
    height: 30px;
  }
`,eH=()=>(0,s.jsxs)(eB,{children:[(0,s.jsx)("span",{children:"SCROLL TO EXPLORE"}),(0,s.jsx)(eL,{})]}),eV=Q.default.section.withConfig({displayName:"Hero.styles__StyledHero",componentId:"sc-8af8d994-0"})`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 80px;

  @media (max-width: 768px) {
    padding-top: 60px;
    min-height: 85vh;
    padding-bottom: ${({theme:e})=>e.spacing["2xl"]};
  }
`,eU=Q.default.div.withConfig({displayName:"Hero.styles__HeroContentWrapper",componentId:"sc-8af8d994-1"})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.spacing.xl};

  @media (max-width: 768px) {
    padding: 0 ${({theme:e})=>e.spacing.xl};
  }
`,eW=({title:e,headline:t,description:n})=>(0,s.jsxs)(eV,{children:[(0,s.jsx)(eU,{children:(0,s.jsx)(eD,{title:e,headline:t,description:n})}),(0,s.jsx)(eH,{})]});var eq=e.i(5329);let eG=e=>{let t=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase());return t.charAt(0).toUpperCase()+t.slice(1)},eX=(...e)=>e.filter((e,t,n)=>!!e&&""!==e.trim()&&n.indexOf(e)===t).join(" ").trim();var eY={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let eZ=(0,l.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:a="",children:o,iconNode:i,...s},c)=>(0,l.createElement)("svg",{ref:c,...eY,width:t,height:t,stroke:e,strokeWidth:r?24*Number(n)/Number(t):n,className:eX("lucide",a),...!o&&!(e=>{for(let t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0})(s)&&{"aria-hidden":"true"},...s},[...i.map(([e,t])=>(0,l.createElement)(e,t)),...Array.isArray(o)?o:[o]])),eJ=(e,t)=>{let n=(0,l.forwardRef)(({className:n,...r},a)=>(0,l.createElement)(eZ,{ref:a,iconNode:t,className:eX(`lucide-${eG(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,n),...r}));return n.displayName=eG(e),n},eK=eJ("corner-right-down",[["path",{d:"m10 15 5 5 5-5",key:"1hpjnr"}],["path",{d:"M4 4h7a4 4 0 0 1 4 4v12",key:"wcbgct"}]]),eQ=eJ("corner-right-up",[["path",{d:"m10 9 5-5 5 5",key:"9ctzwi"}],["path",{d:"M4 20h7a4 4 0 0 0 4-4V4",key:"1plgdj"}]]),e0=Q.default.button.withConfig({displayName:"Button.styles__StyledButton",componentId:"sc-d2ac6181-0"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyBody};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  transition: all ${({theme:e})=>e.transitions.base};
  cursor: pointer;
  border: 1px solid transparent;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({$variant:e="primary"})=>{switch(e){case"primary":return Q.css`
          background-color: ${({theme:e})=>e.colors.bgSecondary};
          border-color: ${({theme:e})=>e.colors.border};
          color: ${({theme:e})=>e.colors.textPrimary};

          &:hover:not(:disabled) {
            background-color: ${({theme:e})=>e.colors.bgTertiary};
            border-color: ${({theme:e})=>e.colors.textSecondary};
          }
        `;case"secondary":return Q.css`
          background-color: transparent;
          border-color: ${({theme:e})=>e.colors.border};
          color: ${({theme:e})=>e.colors.textPrimary};

          &:hover:not(:disabled) {
            border-color: ${({theme:e})=>e.colors.accent};
            color: ${({theme:e})=>e.colors.accent};
          }
        `;case"accent":return Q.css`
          background-color: ${({theme:e})=>e.colors.accent};
          color: ${({theme:e})=>e.colors.textPrimary};

          &:hover:not(:disabled) {
            background-color: ${({theme:e})=>e.colors.accentHover};
          }
        `}}}

  ${({$size:e="medium"})=>{switch(e){case"small":return Q.css`
          padding: ${({theme:e})=>e.spacing.xs} ${({theme:e})=>e.spacing.md};
          font-size: ${({theme:e})=>e.typography.fontSize.xs};
        `;case"medium":return Q.css`
          padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.lg};
          font-size: ${({theme:e})=>e.typography.fontSize.sm};
        `;case"large":return Q.css`
          padding: ${({theme:e})=>e.spacing.md} ${({theme:e})=>e.spacing.xl};
          font-size: ${({theme:e})=>e.typography.fontSize.base};
        `}}}

  ${({$fullWidth:e})=>e&&Q.css`
      width: 100%;
    `}
`,e1=Q.default.a.withConfig({displayName:"Button.styles__StyledButtonLink",componentId:"sc-d2ac6181-1"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyBody};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  transition: all ${({theme:e})=>e.transitions.base};
  cursor: pointer;
  border: 1px solid transparent;
  text-decoration: none;

  ${({$variant:e="primary"})=>{switch(e){case"primary":return Q.css`
          background-color: ${({theme:e})=>e.colors.bgSecondary};
          border-color: ${({theme:e})=>e.colors.border};
          color: ${({theme:e})=>e.colors.textPrimary};

          &:hover {
            background-color: ${({theme:e})=>e.colors.bgTertiary};
            border-color: ${({theme:e})=>e.colors.textSecondary};
          }
        `;case"secondary":return Q.css`
          background-color: transparent;
          border-color: ${({theme:e})=>e.colors.border};
          color: ${({theme:e})=>e.colors.textPrimary};

          &:hover {
            border-color: ${({theme:e})=>e.colors.accent};
            color: ${({theme:e})=>e.colors.accent};
          }
        `;case"accent":return Q.css`
          background-color: ${({theme:e})=>e.colors.accent};
          color: ${({theme:e})=>e.colors.textPrimary};

          &:hover {
            background-color: ${({theme:e})=>e.colors.accentHover};
          }
        `}}}

  ${({$size:e="medium"})=>{switch(e){case"small":return Q.css`
          padding: ${({theme:e})=>e.spacing.xs} ${({theme:e})=>e.spacing.md};
          font-size: ${({theme:e})=>e.typography.fontSize.xs};
        `;case"medium":return Q.css`
          padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.lg};
          font-size: ${({theme:e})=>e.typography.fontSize.sm};
        `;case"large":return Q.css`
          padding: ${({theme:e})=>e.spacing.md} ${({theme:e})=>e.spacing.xl};
          font-size: ${({theme:e})=>e.typography.fontSize.base};
        `}}}

  ${({$fullWidth:e})=>e&&Q.css`
      width: 100%;
    `}
`;l.default.forwardRef(({variant:e="primary",size:t="medium",fullWidth:n=!1,icon:r,iconPosition:a="left",children:o,className:i="",as:l="button",href:c,...d},u)=>{let p=(0,s.jsxs)(s.Fragment,{children:[r&&"left"===a&&(0,s.jsx)(r,{size:16}),o,r&&"right"===a&&(0,s.jsx)(r,{size:16})]});return"a"===l&&c?(0,s.jsx)(e1,{ref:u,$variant:e,$size:t,$fullWidth:n,href:c,className:i,...d,children:p}):(0,s.jsx)(e0,{ref:u,$variant:e,$size:t,$fullWidth:n,className:i,...d,children:p})}).displayName="Button",Q.default.div.withConfig({displayName:"Card.styles__StyledCard",componentId:"sc-cb91bbca-0"})`
  background-color: ${({theme:e})=>e.colors.bgSecondary};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: ${({theme:e})=>e.spacing.xl};
  transition: all ${({theme:e})=>e.transitions.base};

  &:hover {
    border-color: ${({theme:e})=>e.colors.textSecondary};
    transform: translateY(-2px);
  }

  ${({$interactive:e})=>e&&Q.css`
      cursor: pointer;

      &:hover {
        border-color: ${({theme:e})=>e.colors.accent};
      }
    `}
`;let e2=Q.default.span.withConfig({displayName:"Tag.styles__StyledTag",componentId:"sc-ea18aa85-0"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyBody};
  display: inline-flex;
  align-items: center;
  padding: ${({theme:e})=>e.spacing.xs} ${({theme:e})=>e.spacing.md};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  background-color: ${({theme:e})=>e.colors.bgTertiary};
  color: ${({theme:e})=>e.colors.textSecondary};
  border: 1px solid ${({theme:e})=>e.colors.border};
  transition: all ${({theme:e})=>e.transitions.fast};

  &:hover {
    border-color: ${({theme:e})=>e.colors.textSecondary};
    color: ${({theme:e})=>e.colors.textPrimary};
  }
`,e5=({children:e,className:t=""})=>(0,s.jsx)(e2,{className:t,children:e}),e4=Q.default.div.withConfig({displayName:"Input.styles__InputWrapper",componentId:"sc-7de3a321-0"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.xs};
  width: ${({$fullWidth:e=!0})=>e?"100%":"auto"};
`,e3=Q.default.label.withConfig({displayName:"Input.styles__Label",componentId:"sc-7de3a321-1"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyBody};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({theme:e})=>e.colors.textSecondary};
`,e6=Q.default.input.withConfig({displayName:"Input.styles__StyledInput",componentId:"sc-7de3a321-2"})`
  width: 100%;
  padding: ${({theme:e})=>e.spacing.md};
  background-color: ${({theme:e})=>e.colors.inputBg};
  border: 1px solid ${({theme:e,$error:t})=>t?"#ef4444":e.colors.inputBorder};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  transition: all ${({theme:e})=>e.transitions.base};
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: ${({theme:e,$error:t})=>t?"#ef4444":e.colors.inputFocus};
    background-color: ${({theme:e})=>e.colors.bgTertiary};
  }

  &::placeholder {
    color: ${({theme:e})=>e.colors.textTertiary};
  }
`,e8=Q.default.textarea.withConfig({displayName:"Input.styles__StyledTextarea",componentId:"sc-7de3a321-3"})`
  width: 100%;
  padding: ${({theme:e})=>e.spacing.md};
  background-color: ${({theme:e})=>e.colors.inputBg};
  border: 1px solid ${({theme:e,$error:t})=>t?"#ef4444":e.colors.inputBorder};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  transition: all ${({theme:e})=>e.transitions.base};
  font-family: inherit;
  resize: vertical;
  min-height: 120px;

  &:focus {
    outline: none;
    border-color: ${({theme:e,$error:t})=>t?"#ef4444":e.colors.inputFocus};
    background-color: ${({theme:e})=>e.colors.bgTertiary};
  }

  &::placeholder {
    color: ${({theme:e})=>e.colors.textTertiary};
  }
`,e7=Q.default.span.withConfig({displayName:"Input.styles__ErrorMessage",componentId:"sc-7de3a321-4"})`
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: #ef4444;
`,e9=({label:e,error:t,fullWidth:n=!0,className:r="",...a})=>(0,s.jsxs)(e4,{$fullWidth:n,children:[e&&(0,s.jsx)(e3,{children:e}),(0,s.jsx)(e6,{$error:!!t,className:r,...a}),t&&(0,s.jsx)(e7,{children:t})]}),te=({label:e,error:t,fullWidth:n=!0,className:r="",...a})=>(0,s.jsxs)(e4,{$fullWidth:n,children:[e&&(0,s.jsx)(e3,{children:e}),(0,s.jsx)(e8,{$error:!!t,className:r,...a}),t&&(0,s.jsx)(e7,{children:t})]}),tt=Q.default.p.withConfig({displayName:"Text.styles__StyledText",componentId:"sc-10b9dfea-0"})`
  margin: 0;

  ${({$variant:e="body"})=>{switch(e){case"h1":return Q.css`
          font-family: ${({theme:e})=>e.typography.fontFamilyHeading};
          font-size: ${({theme:e})=>e.typography.fontSize["6xl"]};
          font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
          line-height: 1.1;
          letter-spacing: -0.02em;

          @media (max-width: 768px) {
            font-size: ${({theme:e})=>e.typography.fontSize["4xl"]};
          }
        `;case"h2":return Q.css`
          font-family: ${({theme:e})=>e.typography.fontFamilyHeading};
          font-size: ${({theme:e})=>e.typography.fontSize["5xl"]};
          font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
          line-height: 1.2;
          letter-spacing: -0.01em;

          @media (max-width: 768px) {
            font-size: ${({theme:e})=>e.typography.fontSize["3xl"]};
          }
        `;case"h3":return Q.css`
          font-family: ${({theme:e})=>e.typography.fontFamilyHeading};
          font-size: ${({theme:e})=>e.typography.fontSize["4xl"]};
          font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
          line-height: 1.3;

          @media (max-width: 768px) {
            font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
          }
        `;case"h4":return Q.css`
          font-family: ${({theme:e})=>e.typography.fontFamilyHeading};
          font-size: ${({theme:e})=>e.typography.fontSize["3xl"]};
          font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
          line-height: 1.4;

          @media (max-width: 768px) {
            font-size: ${({theme:e})=>e.typography.fontSize.xl};
          }
        `;case"h5":return Q.css`
          font-family: ${({theme:e})=>e.typography.fontFamilyHeading};
          font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
          font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
          line-height: 1.4;
        `;case"h6":return Q.css`
          font-family: ${({theme:e})=>e.typography.fontFamilyHeading};
          font-size: ${({theme:e})=>e.typography.fontSize.xl};
          font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
          line-height: 1.5;
        `;case"body":return Q.css`
          font-family: ${({theme:e})=>e.typography.fontFamilyBody};
          font-size: ${({theme:e})=>e.typography.fontSize.base};
          line-height: 1.6;
        `;case"bodyLarge":return Q.css`
          font-family: ${({theme:e})=>e.typography.fontFamilyBody};
          font-size: ${({theme:e})=>e.typography.fontSize.lg};
          line-height: 1.6;
        `;case"bodySmall":return Q.css`
          font-family: ${({theme:e})=>e.typography.fontFamilyBody};
          font-size: ${({theme:e})=>e.typography.fontSize.sm};
          line-height: 1.5;
        `;case"caption":return Q.css`
          font-family: ${({theme:e})=>e.typography.fontFamilyBody};
          font-size: ${({theme:e})=>e.typography.fontSize.xs};
          line-height: 1.4;
        `}}}

  ${({$color:e="primary"})=>{switch(e){case"primary":return Q.css`
          color: ${({theme:e})=>e.colors.textPrimary};
        `;case"secondary":return Q.css`
          color: ${({theme:e})=>e.colors.textSecondary};
        `;case"tertiary":return Q.css`
          color: ${({theme:e})=>e.colors.textTertiary};
        `;case"accent":return Q.css`
          color: ${({theme:e})=>e.colors.accent};
        `}}}

  ${({$weight:e})=>{if(!e)return"";switch(e){case"normal":return Q.css`
          font-weight: ${({theme:e})=>e.typography.fontWeight.normal};
        `;case"medium":return Q.css`
          font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
        `;case"semibold":return Q.css`
          font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
        `;case"bold":return Q.css`
          font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
        `}}}
`,tn=({variant:e="body",color:t="primary",weight:n,as:r,children:a,className:o=""})=>{let i=r||("h1"===e||"h2"===e||"h3"===e||"h4"===e||"h5"===e||"h6"===e?e:"p");return(0,s.jsx)(tt,{as:i,$variant:e,$color:t,$weight:n,className:o,children:a})},tr=Q.default.div.withConfig({displayName:"Container.styles__StyledContainer",componentId:"sc-ab2069fa-0"})`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.spacing.xl};

  @media (max-width: 768px) {
    padding: 0 ${({theme:e})=>e.spacing.lg};
  }

  @media (max-width: 640px) {
    padding: 0 ${({theme:e})=>e.spacing.md};
  }
`,ta=({children:e,className:t=""})=>(0,s.jsx)(tr,{className:t,children:e}),to=Q.default.section.withConfig({displayName:"Section.styles__StyledSection",componentId:"sc-897389d1-0"})`
  padding: ${({theme:e})=>e.spacing["4xl"]} 0;
  position: relative;

  ${({$size:e="medium"})=>{switch(e){case"small":return Q.css`
          padding: ${({theme:e})=>e.spacing["2xl"]} 0;

          @media (max-width: 768px) {
            padding: ${({theme:e})=>e.spacing.lg} 0;
          }
        `;case"large":return Q.css`
          padding: ${({theme:e})=>e.spacing["4xl"]} 0;

          @media (max-width: 768px) {
            padding: ${({theme:e})=>e.spacing["2xl"]} 0;
          }
        `;default:return Q.css`
          @media (max-width: 768px) {
            padding: ${({theme:e})=>e.spacing["2xl"]} 0;
          }
        `}}}
`,ti=({children:e,size:t="medium",className:n="",id:r})=>(0,s.jsx)(to,{id:r,$size:t,className:n,children:e}),ts=Q.default.div.withConfig({displayName:"WorkHeader.styles__WorkHeaderWrapper",componentId:"sc-45d9ae25-0"})`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.lg};
  margin-bottom: ${({theme:e})=>e.spacing["4xl"]};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({theme:e})=>e.spacing.sm};
    margin-bottom: ${({theme:e})=>e.spacing.xl};
  }
`,tl=Q.default.span.withConfig({displayName:"WorkHeader.styles__SectionNumber",componentId:"sc-45d9ae25-1"})`
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.textTertiary};
  font-family: ${({theme:e})=>e.typography.fontFamilyMono};

  @media (max-width: 768px) {
    font-size: ${({theme:e})=>e.typography.fontSize.lg};
  }
`,tc=({sectionNumber:e})=>(0,s.jsxs)(ts,{"data-aos":"fade-up",children:[(0,s.jsx)(tl,{children:e}),(0,s.jsx)(tn,{variant:"h2",children:"Work"})]});var td=e.i(57688);let tu=eJ("external-link",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]),tp=Q.default.div.withConfig({displayName:"ProjectCard.styles__ProjectCardWrapper",componentId:"sc-4b02ff16-0"})`
  display: grid;
  grid-template-columns: ${({$isReverse:e})=>e?"1.5fr 1fr":"1fr 1.5fr"};
  gap: ${({theme:e})=>e.spacing["4xl"]};
  align-items: center;
  width: 100%;
  padding: ${({theme:e})=>e.spacing["4xl"]} 0;

  &:hover .project-title {
    color: #60a5fa;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: ${({theme:e})=>e.spacing["2xl"]};
    padding: ${({theme:e})=>e.spacing["2xl"]} 0;
  }
`,th=Q.default.div.withConfig({displayName:"ProjectCard.styles__ProjectInfo",componentId:"sc-4b02ff16-1"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.md};
  max-width: 100%;
  order: ${({$isReverse:e})=>e?2:1};

  @media (max-width: 1024px) {
    order: 2;
  }
`,tf=Q.default.span.withConfig({displayName:"ProjectCard.styles__ProjectNumber",componentId:"sc-4b02ff16-2"})`
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.textTertiary};
  font-family: ${({theme:e})=>e.typography.fontFamilyMono};
  line-height: 1;
`,tm=Q.default.div.withConfig({displayName:"ProjectCard.styles__ProjectMeta",componentId:"sc-4b02ff16-3"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyBody};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing.md};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.textTertiary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,tg=Q.default.div.withConfig({displayName:"ProjectCard.styles__ProjectMetaLeft",componentId:"sc-4b02ff16-4"})`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
`,tb=Q.default.span.withConfig({displayName:"ProjectCard.styles__ProjectYear",componentId:"sc-4b02ff16-5"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyMono};
`,ty=Q.default.span.withConfig({displayName:"ProjectCard.styles__ProjectCategory",componentId:"sc-4b02ff16-6"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyBody};
  color: ${({theme:e})=>e.colors.textSecondary};
`,tx=Q.default.div.withConfig({displayName:"ProjectCard.styles__ProjectTitleWrapper",componentId:"sc-4b02ff16-7"})``,tv=Q.default.span.withConfig({displayName:"ProjectCard.styles__ProjectTitle",componentId:"sc-4b02ff16-8"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyHeading};
  color: ${({theme:e})=>e.colors.textPrimary};
  transition: color ${({theme:e})=>e.transitions.base};
  cursor: pointer;
  display: block;
`,tw=Q.default.span.withConfig({displayName:"ProjectCard.styles__ProjectDescription",componentId:"sc-4b02ff16-9"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyBody};
  color: ${({theme:e})=>e.colors.textSecondary};
  line-height: 1.8;
`,tk=Q.default.div.withConfig({displayName:"ProjectCard.styles__ProjectTags",componentId:"sc-4b02ff16-10"})`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing.sm};
  margin-top: ${({theme:e})=>e.spacing.sm};
`,tj=Q.default.a.withConfig({displayName:"ProjectCard.styles__ProjectLink",componentId:"sc-4b02ff16-11"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyBody};
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.xs};
  color: ${({theme:e})=>e.colors.accent};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: ${({theme:e})=>e.spacing.md};
  transition: gap ${({theme:e})=>e.transitions.base};

  &:hover {
    gap: ${({theme:e})=>e.spacing.sm};
  }
`,t_=Q.default.div.withConfig({displayName:"ProjectCard.styles__ProjectVisual",componentId:"sc-4b02ff16-12"})`
  width: 100%;
  height: 400px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  order: ${({$isReverse:e})=>e?1:2};

  @media (max-width: 1024px) {
    height: 350px;
    order: 1;
  }

  @media (max-width: 768px) {
    height: 280px;
  }
`;Q.default.div.withConfig({displayName:"ProjectCard.styles__ProjectVisualImg",componentId:"sc-4b02ff16-13"})`
  border-radius: ${({theme:e})=>e.borderRadius.md};
`;let t$=({project:e,index:t})=>{let[n,r]=(0,l.useState)(!1);(0,l.useEffect)(()=>{let e=()=>{r(window.innerWidth<=1024)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);let a=t%2==1;return(0,s.jsxs)(tp,{$isReverse:a,...n?{}:{"data-aos":t%2==0?"fade-right":"fade-left","data-aos-delay":100*t},className:"project-card-wrapper",children:[(0,s.jsxs)(th,{$isReverse:a,children:[(0,s.jsx)(tn,{variant:"h4",as:"span",children:(0,s.jsx)(tf,{children:e.number})}),(0,s.jsx)(tm,{children:(0,s.jsxs)(tg,{children:[(0,s.jsx)(tb,{children:e.year}),(0,s.jsx)("span",{children:"•"}),(0,s.jsx)(ty,{children:e.category})]})}),(0,s.jsx)(tx,{children:(0,s.jsx)(tn,{variant:"h3",as:"span",children:(0,s.jsx)(tv,{className:"project-title",children:e.title})})}),(0,s.jsx)(tn,{variant:"body",color:"secondary",as:"span",children:(0,s.jsx)(tw,{children:e.description})}),(0,s.jsx)(tk,{children:e.tags.map(e=>(0,s.jsx)(e5,{children:e},e))}),e.link&&(0,s.jsxs)(tj,{href:e.link,target:"_blank",rel:"noopener noreferrer",children:["Live Link",(0,s.jsx)(tu,{size:16})]})]}),(0,s.jsx)(t_,{$isReverse:a,children:(0,s.jsx)(td.default,{src:e.imageLink||"/images/ml-jobs.png",alt:e.title,fill:!0,style:{objectFit:"cover",borderRadius:"0.5rem"}})})]})},tS=Q.default.div.withConfig({displayName:"Work.styles__StyledWork",componentId:"sc-afd42b7-0"})`
  position: relative;
`,tO=Q.default.div.withConfig({displayName:"Work.styles__ProjectsList",componentId:"sc-afd42b7-1"})`
  display: flex;
  flex-direction: column;
  gap: 0;
`,tC=Q.default.div.withConfig({displayName:"Work.styles__ViewAllButtonContainer",componentId:"sc-afd42b7-2"})`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: ${({theme:e})=>e.spacing.md};
  padding-top: ${({theme:e})=>e.spacing.md};
  width: 100%;

  @media (max-width: 768px) {
    margin-top: ${({theme:e})=>e.spacing.sm};
    padding-top: ${({theme:e})=>e.spacing.sm};
  }
`,tE=Q.default.button.withConfig({displayName:"Work.styles__ViewAllButton",componentId:"sc-afd42b7-3"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyBody};
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${({theme:e})=>e.colors.textPrimary};
  color: ${({theme:e})=>e.colors.textPrimary};
  padding: ${({theme:e})=>e.spacing.xs} 0;
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.normal};
  text-transform: none;
  letter-spacing: 0;
  border-radius: 0;
  transition: all ${({theme:e})=>e.transitions.base};
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.xs};

  &:hover {
    opacity: 0.8;
  }

  svg {
    transition: transform ${({theme:e})=>e.transitions.base};
  }

  &:hover svg {
    transform: translateX(4px);
  }

  @media (max-width: 768px) {
    font-size: ${({theme:e})=>e.typography.fontSize.xs};
    padding: ${({theme:e})=>e.spacing.xs} 0;
  }
`,tP=({sectionNumber:e="01",projects:t})=>{let[n,r]=(0,l.useState)(!1),a=n?t:t.slice(0,5),o=t.length>5;return(0,l.useEffect)(()=>{eq.default.refresh()},[n]),(0,s.jsx)(ti,{id:"work",children:(0,s.jsx)(ta,{children:(0,s.jsxs)(tS,{children:[(0,s.jsx)(tc,{sectionNumber:e}),(0,s.jsx)(tO,{children:a.map((e,t)=>(0,s.jsx)(t$,{project:e,index:t},e.id))}),o&&(0,s.jsx)(tC,{children:n?(0,s.jsxs)(tE,{onClick:()=>{r(!1);let e=document.getElementById("work");e&&e.scrollIntoView({behavior:"smooth",block:"start"})},children:["Show Less",(0,s.jsx)(eQ,{size:14})]}):(0,s.jsxs)(tE,{onClick:()=>{r(!0)},children:["View All Projects",(0,s.jsx)(eK,{size:14})]})})]})})})},tT=Q.default.div.withConfig({displayName:"ExperienceHeader.styles__SectionHeader",componentId:"sc-502ea126-0"})`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.lg};
  margin-bottom: ${({theme:e})=>e.spacing["4xl"]};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({theme:e})=>e.spacing.md};
  }
`,tz=Q.default.span.withConfig({displayName:"ExperienceHeader.styles__SectionNumber",componentId:"sc-502ea126-1"})`
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.textTertiary};
  font-family: ${({theme:e})=>e.typography.fontFamilyMono};
`,tA=({sectionNumber:e})=>(0,s.jsxs)(tT,{"data-aos":"fade-up",children:[(0,s.jsx)(tz,{children:e}),(0,s.jsx)(tn,{variant:"h2",children:"Experience"})]}),tF=eJ("arrow-right",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),tI=Q.default.div.withConfig({displayName:"ExperienceCard.styles__TimelineItem",componentId:"sc-692b517d-0"})`
  position: relative;
  padding-left: ${({theme:e})=>e.spacing.xl};

  @media (max-width: 768px) {
    padding-left: ${({theme:e})=>e.spacing.sm};
  }
`,tN=Q.default.div.withConfig({displayName:"ExperienceCard.styles__TimelineDotWrapper",componentId:"sc-692b517d-1"})`
  position: absolute;
  left: calc(-1 * ${({theme:e})=>e.spacing["4xl"]} - ${({theme:e})=>e.spacing.xl} + 1px - 16px);
  top: 12px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  ${tI}:hover & {
    transform: scale(1.15);
  }

  @media (max-width: 768px) {
    left: calc(-1 * ${({theme:e})=>e.spacing.xl} - ${({theme:e})=>e.spacing.sm} + 1px - 12px);
    top: 10px;
    width: 24px;
    height: 24px;
  }
`,tM=Q.default.div.withConfig({displayName:"ExperienceCard.styles__TimelineDotOuter",componentId:"sc-692b517d-2"})`
  position: absolute;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: transparent;
  border: 2px solid ${({theme:e})=>e.colors.accent};
  z-index: 1;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  ${tI}:hover & {
    border-color: ${({theme:e})=>e.colors.accentHover};
    transform: scale(1.1);
    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.2);
  }

  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
    border-width: 1.5px;
  }
`,tD=Q.default.div.withConfig({displayName:"ExperienceCard.styles__TimelineDot",componentId:"sc-692b517d-3"})`
  position: relative;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.colors.textPrimary};
  z-index: 2;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  ${tI}:hover & {
    transform: scale(1.15);
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 768px) {
    width: 12px;
    height: 12px;
  }
`,tR=Q.default.div.withConfig({displayName:"ExperienceCard.styles__StyledExperienceCard",componentId:"sc-692b517d-4"})`
  background-color: ${({theme:e})=>e.colors.bgSecondary};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: ${({theme:e})=>e.spacing.xl};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  width: 100%;
  max-width: 100%;
  cursor: pointer;

  ${tI}:hover & {
    border-color: ${({theme:e})=>e.colors.accent};
    transform: translateX(8px);
    box-shadow: 0 4px 24px rgba(59, 130, 246, 0.15);
  }

  @media (max-width: 768px) {
    padding: ${({theme:e})=>e.spacing.md};
    border-radius: ${({theme:e})=>e.borderRadius.sm};

    ${tI}:hover & {
      transform: translateX(4px);
      box-shadow: 0 2px 12px rgba(59, 130, 246, 0.12);
    }
  }
`,tB=Q.default.div.withConfig({displayName:"ExperienceCard.styles__CardHeader",componentId:"sc-692b517d-5"})`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  margin-bottom: ${({theme:e})=>e.spacing.sm};
  width: 100%;

  @media (max-width: 768px) {
    justify-content: flex-start;
    margin-bottom: ${({theme:e})=>e.spacing.xs};
  }
`,tL=Q.default.div.withConfig({displayName:"ExperienceCard.styles__CardHeaderLeft",componentId:"sc-692b517d-6"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.xs};
  width: 100%;
  margin-bottom: ${({theme:e})=>e.spacing.md};

  @media (max-width: 768px) {
    gap: ${({theme:e})=>e.spacing.xs};
    margin-bottom: ${({theme:e})=>e.spacing.sm};
  }
`,tH=Q.default.span.withConfig({displayName:"ExperienceCard.styles__CompanyName",componentId:"sc-692b517d-7"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyHeading};
  color: ${({theme:e})=>e.colors.textPrimary};
  line-height: 1.2;
  transition: color 0.3s ease;
  display: block;

  ${tR}:hover & {
    color: #e0e7ff;
  }
`,tV=Q.default.span.withConfig({displayName:"ExperienceCard.styles__Role",componentId:"sc-692b517d-8"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyHeading};
  color: ${({theme:e})=>e.colors.textPrimary};
  line-height: 1.3;
  transition: color 0.3s ease;
  display: block;

  ${tR}:hover & {
    color: #60a5fa;
  }
`,tU=Q.default.span.withConfig({displayName:"ExperienceCard.styles__LocationType",componentId:"sc-692b517d-9"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyBody};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.textTertiary};
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: ${({theme:e})=>e.typography.fontSize.xs};
    line-height: 1.4;
  }
`,tW=Q.default.span.withConfig({displayName:"ExperienceCard.styles__DateLocation",componentId:"sc-692b517d-10"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyBody};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.textTertiary};
  text-align: right;
  white-space: nowrap;
  flex-shrink: 0;
  display: block;
  margin-bottom: ${({theme:e})=>e.spacing.sm};

  @media (max-width: 768px) {
    text-align: left;
    font-size: ${({theme:e})=>e.typography.fontSize.xs};
    white-space: normal;
    margin-bottom: ${({theme:e})=>e.spacing.xs};
  }
`,tq=Q.default.span.withConfig({displayName:"ExperienceCard.styles__ExperienceDescription",componentId:"sc-692b517d-11"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyBody};
  color: ${({theme:e})=>e.colors.textSecondary};
  line-height: 1.8;
  margin-bottom: ${({theme:e})=>e.spacing.md};
  transition: color 0.3s ease;
  display: block;

  ${tR}:hover & {
    color: #e0e7ff;
  }

  @media (max-width: 768px) {
    font-size: ${({theme:e})=>e.typography.fontSize.sm};
    line-height: 1.6;
    margin-bottom: ${({theme:e})=>e.spacing.sm};
  }
`,tG=Q.default.ul.withConfig({displayName:"ExperienceCard.styles__ExperienceList",componentId:"sc-692b517d-12"})`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.sm};
  margin-bottom: ${({theme:e})=>e.spacing.md};

  @media (max-width: 768px) {
    gap: ${({theme:e})=>e.spacing.xs};
    margin-bottom: ${({theme:e})=>e.spacing.sm};
  }
`,tX=Q.default.li.withConfig({displayName:"ExperienceCard.styles__ExperienceListItem",componentId:"sc-692b517d-13"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyBody};
  display: flex;
  align-items: flex-start;
  gap: ${({theme:e})=>e.spacing.sm};
  color: ${({theme:e})=>e.colors.textSecondary};
  line-height: 1.8;
  transition: color 0.3s ease;

  ${tR}:hover & {
    color: #e0e7ff;
  }

  @media (max-width: 768px) {
    font-size: ${({theme:e})=>e.typography.fontSize.sm};
    line-height: 1.6;
    gap: ${({theme:e})=>e.spacing.xs};
  }
`,tY=Q.default.span.withConfig({displayName:"ExperienceCard.styles__ExperienceListArrow",componentId:"sc-692b517d-14"})`
  color: ${({theme:e})=>e.colors.accent};
  margin-top: 6px;
  flex-shrink: 0;
  transition: color 0.3s ease;
  display: inline-flex;
  align-items: center;

  svg {
    color: inherit;
  }

  @media (max-width: 768px) {
    margin-top: 4px;
  }
`,tZ=Q.default.div.withConfig({displayName:"ExperienceCard.styles__ExperienceTags",componentId:"sc-692b517d-15"})`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing.sm};
  margin-top: ${({theme:e})=>e.spacing.sm};

  @media (max-width: 768px) {
    gap: ${({theme:e})=>e.spacing.xs};
    margin-top: ${({theme:e})=>e.spacing.xs};
  }
`,tJ=({experience:e,index:t})=>(0,s.jsxs)(tI,{"data-aos":"fade-up","data-aos-delay":150*t,children:[(0,s.jsxs)(tN,{children:[(0,s.jsx)(tM,{}),(0,s.jsx)(tD,{})]}),(0,s.jsxs)(tR,{children:[(0,s.jsx)(tB,{children:(0,s.jsx)(tW,{children:e.date})}),(0,s.jsxs)(tL,{children:[(0,s.jsx)(tn,{variant:"h4",as:"span",children:(0,s.jsx)(tH,{children:e.company})}),(0,s.jsx)(tn,{variant:"h5",as:"span",children:(0,s.jsx)(tV,{children:e.role})}),(0,s.jsx)(tn,{variant:"bodySmall",color:"tertiary",as:"span",children:(0,s.jsxs)(tU,{children:[e.location," • ",e.type]})})]}),(0,s.jsx)(tn,{variant:"body",color:"secondary",as:"span",children:(0,s.jsx)(tq,{children:e.description})}),(0,s.jsx)(tG,{children:e.responsibilities.map((e,t)=>(0,s.jsxs)(tX,{children:[(0,s.jsx)(tY,{children:(0,s.jsx)(tF,{size:16})}),(0,s.jsx)("span",{children:e})]},t))}),(0,s.jsx)(tZ,{children:e.tags.map(e=>(0,s.jsx)(e5,{children:e},e))})]})]}),tK=Q.default.div.withConfig({displayName:"Experience.styles__StyledExperience",componentId:"sc-bdd512cd-0"})`
  position: relative;
`,tQ=Q.default.div.withConfig({displayName:"Experience.styles__Timeline",componentId:"sc-bdd512cd-1"})`
  position: relative;
  padding-left: ${({theme:e})=>e.spacing["6xl"]};

  @media (max-width: 768px) {
    padding-left: ${({theme:e})=>e.spacing.xxl};
  }
`,t0=Q.default.div.withConfig({displayName:"Experience.styles__TimelineLine",componentId:"sc-bdd512cd-2"})`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: ${({theme:e})=>e.colors.accent};
`,t1=Q.default.div.withConfig({displayName:"Experience.styles__TimelineItems",componentId:"sc-bdd512cd-3"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing["4xl"]};

  @media (max-width: 768px) {
    gap: ${({theme:e})=>e.spacing.xl};
  }
`;Q.default.hr.withConfig({displayName:"Experience.styles__ExperienceDivider",componentId:"sc-bdd512cd-4"})`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
  margin: 0;
  width: 100%;
`;let t2=({sectionNumber:e="02",experiences:t})=>(0,s.jsx)(ti,{id:"experience",children:(0,s.jsx)(ta,{children:(0,s.jsxs)(tK,{children:[(0,s.jsx)(tA,{sectionNumber:e}),(0,s.jsxs)(tQ,{children:[(0,s.jsx)(t0,{}),(0,s.jsx)(t1,{children:t.map((e,t)=>(0,s.jsx)(tJ,{experience:e,index:t},e.id))})]})]})})}),t5=Q.default.div.withConfig({displayName:"AboutHeader.styles__AboutHeaderWrapper",componentId:"sc-34ec8c66-0"})`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.lg};
  margin-bottom: ${({theme:e})=>e.spacing.lg};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({theme:e})=>e.spacing.md};
  }
`,t4=Q.default.span.withConfig({displayName:"AboutHeader.styles__SectionNumber",componentId:"sc-34ec8c66-1"})`
  font-size: ${({theme:e})=>e.typography.fontSize["4xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.textTertiary};
  font-family: ${({theme:e})=>e.typography.fontFamilyMono};
`,t3=({sectionNumber:e})=>(0,s.jsxs)(t5,{"data-aos":"fade-up",children:[(0,s.jsx)(t4,{children:e}),(0,s.jsx)(tn,{variant:"h2",children:"About"})]}),t6=Q.default.div.withConfig({displayName:"AboutContent.styles__AboutDescription",componentId:"sc-c102d131-0"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyBody};
  color: ${({theme:e})=>e.colors.textSecondary};
  line-height: 1.8;

  p {
    margin-bottom: ${({theme:e})=>e.spacing.md};
    font-size: ${({theme:e})=>e.typography.fontSize.base};
  }

  p:last-child {
    margin-bottom: 0;
  }
`,t8=({content:e})=>(0,s.jsx)(t6,{"data-aos":"fade-right","data-aos-delay":"200",children:"string"==typeof e?e.split("\n\n").map((e,t)=>(0,s.jsx)(tn,{variant:"bodyLarge",color:"secondary",children:e},t)):e}),t7=Q.default.div.withConfig({displayName:"About.styles__StyledAbout",componentId:"sc-e1b29e4a-0"})`
  position: relative;
`,t9=Q.default.div.withConfig({displayName:"About.styles__AboutContent",componentId:"sc-e1b29e4a-1"})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({theme:e})=>e.spacing["4xl"]};
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: ${({theme:e})=>e.spacing["2xl"]};
  }
`,ne=Q.default.div.withConfig({displayName:"About.styles__AboutText",componentId:"sc-e1b29e4a-2"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.lg};
`,nt=Q.default.div.withConfig({displayName:"About.styles__AboutVisual",componentId:"sc-e1b29e4a-3"})`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 1024px) {
    order: -1;
  }
`,nn=Q.default.div.withConfig({displayName:"About.styles__AboutImage",componentId:"sc-e1b29e4a-4"})`
  width: 100%;
  max-width: 500px;
  height: 600px;
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  position: relative;
  overflow: hidden;

  @media (max-width: 1024px) {
    max-width: 100%;
    height: 400px;
  }
`,nr=Q.default.hr.withConfig({displayName:"About.styles__AboutDivider",componentId:"sc-e1b29e4a-5"})`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
  margin: 0;
  width: 100%;
`,na=({sectionNumber:e="03",content:t})=>{let[n,r]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{let e=()=>{r(window.innerWidth<=1024)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(ti,{id:"about",children:(0,s.jsx)(ta,{children:(0,s.jsx)(t7,{children:(0,s.jsxs)(t9,{children:[(0,s.jsxs)(ne,{children:[(0,s.jsx)(t3,{sectionNumber:e}),(0,s.jsx)(t8,{content:t})]}),(0,s.jsx)(nt,{...n?{}:{"data-aos":"fade-left","data-aos-delay":300},children:(0,s.jsx)(nn,{children:(0,s.jsx)(td.default,{src:"/images/me.png",alt:"Profile photo",fill:!0,style:{objectFit:"cover",borderRadius:"1rem"}})})})]})})})}),(0,s.jsx)(nr,{})]})},no=Q.default.div.withConfig({displayName:"TechStack.styles__StyledTechStack",componentId:"sc-a293df8e-0"})`
  position: relative;
  background-color: ${({theme:e})=>e.colors.bgPrimary};
  min-height: 100vh;
  padding: ${({theme:e})=>e.spacing["4xl"]} 0;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    padding: ${({theme:e})=>e.spacing["3xl"]} 0;
    min-height: 100vh;
  }
`,ni=Q.default.div.withConfig({displayName:"TechStack.styles__TechStackContainer",componentId:"sc-a293df8e-1"})`
  width: 100%;
`,ns=Q.default.div.withConfig({displayName:"TechStack.styles__TechStackWrapper",componentId:"sc-a293df8e-2"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:e})=>e.spacing["4xl"]};
  width: 100%;

  @media (max-width: 768px) {
    gap: ${({theme:e})=>e.spacing.xl};
  }
`,nl=Q.default.h2.withConfig({displayName:"TechStack.styles__TechStackTitle",componentId:"sc-a293df8e-3"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyHeading};
  font-size: ${({theme:e})=>e.typography.fontSize["4xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.textPrimary};
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0;

  @media (max-width: 768px) {
    font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
    letter-spacing: 0.05em;
    line-height: 1.5;
  }
`,nc=Q.default.div.withConfig({displayName:"TechStack.styles__TechStackGrid",componentId:"sc-a293df8e-4"})`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: ${({theme:e})=>e.spacing.xl};
  width: 100%;
  max-width: 1200px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: ${({theme:e})=>e.spacing.lg};
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
    gap: ${({theme:e})=>e.spacing.lg};
  }
`,nd=Q.default.div.withConfig({displayName:"TechStack.styles__TechItem",componentId:"sc-a293df8e-5"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing.sm};
  transition: all ${({theme:e})=>e.transitions.base};
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
  }

  &:hover svg {
    opacity: 0.8;
  }
`,nu=Q.default.div.withConfig({displayName:"TechStack.styles__TechIcon",componentId:"sc-a293df8e-6"})`
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing.xs};

  svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 1024px) {
    width: 70px;
    height: 70px;
  }

  @media (max-width: 768px) {
    width: 64px;
    height: 64px;
  }
`,np=Q.default.span.withConfig({displayName:"TechStack.styles__TechName",componentId:"sc-a293df8e-7"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyBody};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.colors.textSecondary};
  text-align: center;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`,nh=Q.default.hr.withConfig({displayName:"TechStack.styles__TechStackDivider",componentId:"sc-a293df8e-8"})`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
  margin: 0;
  width: 100%;
`,nf=[{name:"HTML",icon:(0,s.jsx)(function(){return(0,s.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("path",{d:"M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z",fill:"#E44D26"}),(0,s.jsx)("path",{d:"M64 116.8l36.378-10.086 8.559-95.878H64z",fill:"#F16529"}),(0,s.jsx)("path",{d:"M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 40.02l-.061.017-12.629-3.433-.807-9.04H38.896l1.585 17.759 23.256 6.453.063-.017z",fill:"#EBEBEB"}),(0,s.jsx)("path",{d:"M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l23.259-6.439.206-2.325 3.233-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z",fill:"#fff"})]})},{}),category:"Programming Languages"},{name:"CSS",icon:(0,s.jsx)(function(){return(0,s.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("path",{d:"M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z",fill:"#1572B6"}),(0,s.jsx)("path",{d:"M64.001 117.062l36.559-10.141 8.601-96.354H64.001v106.495z",fill:"#33A9DC"}),(0,s.jsx)("path",{d:"M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429zm0 64.785l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.312 7.851.063-.018z",fill:"#fff"}),(0,s.jsx)("path",{d:"M63.944 51.431v13.967h30.326l-.281 3.154-.631 7.112-.331 3.716h-29.083V93.45h17.096l-.969 10.849-16.127 4.354v14.234l28.369-7.863.207-2.325 2.424-27.171.256-2.824.178-1.992 1.297-14.536.167-1.876z",fill:"#EBEBEB"})]})},{}),category:"Programming Languages"},{name:"JavaScript",icon:(0,s.jsx)(function(){return(0,s.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("path",{fill:"#F0DB4F",d:"M1.408 1.408h125.184v125.185H1.408z"}),(0,s.jsx)("path",{fill:"#323330",d:"M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.402-3.498 9.163-5.81-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-1.499-6.592-3.308-9.139-6.948l-9.507 5.498c1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"})]})},{}),category:"Programming Languages"},{name:"TypeScript",icon:(0,s.jsx)(function(){return(0,s.jsx)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M1.125 0C.502 0 0 .502 0 1.125v125.75c0 .623.502 1.125 1.125 1.125h125.75c.623 0 1.125-.502 1.125-1.125V1.125C128 .502 127.498 0 126.875 0zm17.113 113.752H14.834V47.717H9.552V34.895h26.375v12.822h-5.282v66.035zm34.642-60.184c0-6.314-2.577-10.585-7.732-12.81 2.791-1.396 4.939-3.215 6.446-5.458 1.506-2.243 2.259-4.886 2.259-7.93 0-.78-.063-1.626-.188-2.537-.126-.911-.346-1.929-.66-3.056-.314-1.126-.754-2.435-1.32-3.926-.565-1.492-1.308-3.227-2.229-5.207l-8.45 3.563c.783 1.776 1.389 3.354 1.815 4.733.427 1.38.739 2.696.935 3.95.196 1.252.294 2.478.294 3.674 0 2.405-.466 4.422-1.397 6.052-.932 1.629-2.199 2.681-3.8 3.156v.188c2.199.469 3.856 1.624 4.971 3.465 1.115 1.84 1.673 4.286 1.673 7.337v30.295h-10.738zm52.071 28.46c-1.724 4.053-3.923 7.15-6.597 9.29-2.674 2.141-6.084 3.211-10.229 3.211-2.821 0-5.213-.536-7.176-1.608-1.963-1.072-3.465-2.451-4.506-4.138-1.041-1.687-1.562-3.508-1.562-5.463 0-2.029.467-3.756 1.402-5.18.935-1.425 2.35-2.638 4.246-3.64 1.895-1.001 4.278-1.869 7.149-2.602 2.871-.733 6.24-1.465 10.106-2.196 3.866-.731 7.885-1.669 12.058-2.813v-3.38c0-4.84-1.077-8.277-3.23-10.311-2.155-2.033-5.573-3.05-10.255-3.05-4.624 0-9.547 1.168-14.769 3.506l-3.38-8.826c2.784-1.334 5.872-2.387 9.264-3.156 3.392-.769 6.978-1.154 10.756-1.154 4.996 0 9.194.886 12.594 2.658 3.4 1.772 5.918 4.293 7.556 7.563 1.637 3.27 2.456 7.149 2.456 11.637v44.171h-10.737z",fill:"#007ACC"})})},{}),category:"Programming Languages"},{name:"React",icon:(0,s.jsx)(function(){return(0,s.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("circle",{cx:"64",cy:"64",r:"11.4",fill:"#61DAFB"}),(0,s.jsx)("path",{d:"M64 19.2c-18.2 0-36.4 3.6-50.1 10.8-6.8 3.6-12 8.4-15.6 14.4-3.6 6-5.4 13.2-5.4 20.4s1.8 14.4 5.4 20.4c3.6 6 8.8 10.8 15.6 14.4 13.7 7.2 31.9 10.8 50.1 10.8s36.4-3.6 50.1-10.8c6.8-3.6 12-8.4 15.6-14.4 3.6-6 5.4-13.2 5.4-20.4s-1.8-14.4-5.4-20.4c-3.6-6-8.8-10.8-15.6-14.4C100.4 22.8 82.2 19.2 64 19.2z",stroke:"#61DAFB",strokeWidth:"2.4",fill:"none"}),(0,s.jsx)("ellipse",{cx:"64",cy:"64",rx:"64",ry:"11.4",stroke:"#61DAFB",strokeWidth:"2.4",fill:"none",transform:"rotate(-60 64 64)"}),(0,s.jsx)("ellipse",{cx:"64",cy:"64",rx:"64",ry:"11.4",stroke:"#61DAFB",strokeWidth:"2.4",fill:"none",transform:"rotate(60 64 64)"})]})},{}),category:"Frameworks & Libraries"},{name:"Next.js",icon:(0,s.jsx)(function(){return(0,s.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("path",{d:"M64 0L123.712 106.667H4.288L64 0z",fill:"#000"}),(0,s.jsx)("path",{d:"M64 64l45.238 78H18.762L64 64z",fill:"none",stroke:"#fff",strokeWidth:"8"}),(0,s.jsx)("path",{d:"M84 64l20 34.667H64V64h20z",fill:"#fff"})]})},{}),category:"Frameworks & Libraries"},{name:"Node.js",icon:(0,s.jsx)(function(){return(0,s.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("circle",{cx:"64",cy:"64",r:"60",fill:"#83CD29"}),(0,s.jsx)("path",{d:"M64 20c24.3 0 44 19.7 44 44s-19.7 44-44 44-44-19.7-44-44 19.7-44 44-44z",fill:"#3E863D"}),(0,s.jsx)("text",{x:"64",y:"75",fontSize:"36",fontWeight:"bold",fill:"#fff",textAnchor:"middle",fontFamily:"Arial",children:"N"})]})},{}),category:"Frameworks & Libraries"},{name:"Tailwind CSS",icon:(0,s.jsx)(function(){return(0,s.jsx)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M64 32c-17 0-27 8.5-30 25.5 6-8.5 13-11.7 21-9.6 4.6 1.1 7.9 4.3 11.6 7.9 5.7 5.7 12.3 12.3 26.4 12.3 17 0 27-8.5 30-25.5-6 8.5-13 11.7-21 9.6-4.6-1.1-7.9-4.3-11.6-7.9C82.1 44.3 75.5 32 64 32zm-30 39c-17 0-27 8.5-30 25.5 6-8.5 13-11.7 21-9.6 4.6 1.1 7.9 4.3 11.6 7.9 5.7 5.7 12.3 12.3 26.4 12.3 17 0 27-8.5 30-25.5-6 8.5-13 11.7-21 9.6-4.6-1.1-7.9-4.3-11.6-7.9C52.1 83.3 45.5 71 34 71z",fill:"#38BDF8"})})},{}),category:"Frameworks & Libraries"},{name:"Bootstrap",icon:(0,s.jsx)(function(){return(0,s.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("path",{d:"M28.589 18.993h70.823c5.302 0 9.588 4.295 9.588 9.588v70.823c0 5.302-4.286 9.588-9.588 9.588H28.589c-5.293 0-9.588-4.286-9.588-9.588V28.581c0-5.293 4.295-9.588 9.588-9.588z",fill:"#7952B3"}),(0,s.jsx)("path",{d:"M64 32c8.837 0 16 7.163 16 16v8c5.523 0 10 4.477 10 10s-4.477 10-10 10v10c8.837 0 16 7.163 16 16s-7.163 16-16 16H48c-8.837 0-16-7.163-16-16V48c0-8.837 7.163-16 16-16h16zm-8 16v16h8c2.209 0 4-1.791 4-4s-1.791-4-4-4h-8zm8 32v16h8c2.209 0 4-1.791 4-4s-1.791-4-4-4h-8z",fill:"#fff"})]})},{}),category:"Frameworks & Libraries"},{name:"Styled Components",icon:(0,s.jsx)(function(){return(0,s.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("circle",{cx:"64",cy:"64",r:"60",fill:"#DB7093"}),(0,s.jsx)("path",{d:"M64 20L84 44H64V64h28v20H44V64h20V44H44L64 20z",fill:"#fff"})]})},{}),category:"Frameworks & Libraries"},{name:"Styled System",icon:(0,s.jsx)(function(){return(0,s.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("rect",{width:"128",height:"128",rx:"20",fill:"#000"}),(0,s.jsx)("circle",{cx:"64",cy:"64",r:"40",fill:"none",stroke:"#fff",strokeWidth:"4"}),(0,s.jsx)("circle",{cx:"64",cy:"64",r:"25",fill:"none",stroke:"#fff",strokeWidth:"4"}),(0,s.jsx)("circle",{cx:"64",cy:"64",r:"10",fill:"#fff"})]})},{}),category:"Frameworks & Libraries"},{name:"GraphQL",icon:(0,s.jsx)(function(){return(0,s.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("path",{d:"M20.785 107.871L4 82.784l16.785-25.087h33.569L4 32.61 20.785 7.524h33.569L107.215 95.938H73.646l-13.93-20.785-13.931 20.785H20.785z",fill:"#E10098"}),(0,s.jsx)("path",{d:"M64 20.129L80.785 45.216H47.216L64 20.129zM47.216 82.784h33.569L64 107.871 47.216 82.784z",fill:"#E10098"})]})},{}),category:"Frameworks & Libraries"},{name:"MongoDB",icon:(0,s.jsx)(function(){return(0,s.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("path",{d:"M88.398 38.352c-2.112-14.378-8.67-26.49-18.304-35.669-.388-.463-1.018-.463-1.406 0C59.053 11.862 52.495 23.974 50.383 38.352c-1.378 9.376-1.035 18.133.734 26.724 2.896 14.138 8.576 27.224 15.789 39.194.388.659 1.413.659 1.801 0 7.213-11.97 12.893-25.056 15.789-39.194 1.769-8.591 2.112-17.348.734-26.724z",fill:"#47A248"}),(0,s.jsx)("path",{d:"M64 100.535c-.388 0-.776-.194-.97-.582-6.715-12.866-12.156-25.761-14.915-39.718-1.769-8.59-2.112-17.348-.734-26.724.582-3.96 1.552-7.727 2.896-11.301.194-.582.776-.97 1.36-.776 6.327 2.112 12.47 3.378 18.42 3.378 5.951 0 12.093-1.266 18.42-3.378.584-.194 1.166.194 1.36.776 1.344 3.574 2.314 7.34 2.896 11.301 1.378 9.376 1.035 18.133-.734 26.724-2.759 13.957-8.2 26.852-14.915 39.718-.194.388-.582.582-.97.582z",fill:"#47A248"})]})},{}),category:"DB & Backend / Deployment"},{name:"MySQL",icon:(0,s.jsx)(function(){return(0,s.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("path",{d:"M64 20c-24.3 0-44 19.7-44 44v20h88V64c0-24.3-19.7-44-44-44z",fill:"#4479A1"}),(0,s.jsx)("path",{d:"M20 84v20c0 24.3 19.7 44 44 44s44-19.7 44-44V84H20z",fill:"#00758F"}),(0,s.jsx)("circle",{cx:"64",cy:"54",r:"8",fill:"#fff"}),(0,s.jsx)("path",{d:"M52 74h24v4H52zm0 8h24v4H52z",fill:"#fff"})]})},{}),category:"DB & Backend / Deployment"},{name:"Firebase",icon:(0,s.jsx)(function(){return(0,s.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("path",{d:"M64 20L20 100l44-60-20 20 20-60 20 60-20-20z",fill:"#FFCA28"}),(0,s.jsx)("path",{d:"M84 100l24-80L64 40l20 60z",fill:"#FFA000"}),(0,s.jsx)("path",{d:"M20 100l24-80 20 60-44 20z",fill:"#F57C00"})]})},{}),category:"DB & Backend / Deployment"},{name:"Render",icon:(0,s.jsx)(function(){return(0,s.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("rect",{width:"128",height:"128",rx:"20",fill:"#46E3B7"}),(0,s.jsx)("path",{d:"M32 40h64v48H32z",fill:"#000"}),(0,s.jsx)("circle",{cx:"48",cy:"64",r:"8",fill:"#46E3B7"}),(0,s.jsx)("circle",{cx:"80",cy:"64",r:"8",fill:"#46E3B7"})]})},{}),category:"DB & Backend / Deployment"},{name:"NameCheap",icon:(0,s.jsx)(function(){return(0,s.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("rect",{width:"128",height:"128",rx:"20",fill:"#DE3723"}),(0,s.jsx)("text",{x:"64",y:"80",fontSize:"24",fontWeight:"bold",fill:"#fff",textAnchor:"middle",fontFamily:"Arial",children:"NC"})]})},{}),category:"DB & Backend / Deployment"},{name:"Hostinger",icon:(0,s.jsx)(function(){return(0,s.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("rect",{width:"128",height:"128",rx:"20",fill:"#673DE6"}),(0,s.jsx)("text",{x:"64",y:"80",fontSize:"20",fontWeight:"bold",fill:"#fff",textAnchor:"middle",fontFamily:"Arial",children:"H"})]})},{}),category:"DB & Backend / Deployment"},{name:"Vercel",icon:(0,s.jsx)(function(){return(0,s.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("rect",{width:"128",height:"128",rx:"20",fill:"#000"}),(0,s.jsx)("path",{d:"M64 20l44 76H20L64 20z",fill:"#fff"})]})},{}),category:"DB & Backend / Deployment"},{name:"Netlify",icon:(0,s.jsx)(function(){return(0,s.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("rect",{width:"128",height:"128",rx:"20",fill:"#00AD9F"}),(0,s.jsx)("path",{d:"M64 20L20 80h44V60h24v20h24L64 20z",fill:"#fff"})]})},{}),category:"DB & Backend / Deployment"},{name:"Canva",icon:(0,s.jsx)(function(){return(0,s.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("rect",{width:"128",height:"128",rx:"20",fill:"#00C4CC"}),(0,s.jsx)("circle",{cx:"64",cy:"64",r:"30",fill:"#fff"}),(0,s.jsx)("circle",{cx:"64",cy:"64",r:"20",fill:"#FF5440"})]})},{}),category:"Digital and Creative Skills"},{name:"Figma",icon:(0,s.jsx)(function(){return(0,s.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("path",{d:"M64 64c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20z",fill:"#0ACF83"}),(0,s.jsx)("path",{d:"M24 104c0-11.046 8.954-20 20-20h20v20c0 11.046-8.954 20-20 20s-20-8.954-20-20z",fill:"#A259FF"}),(0,s.jsx)("path",{d:"M64 24v40H84c11.046 0 20-8.954 20-20S95.046 24 84 24H64z",fill:"#F24E1E"}),(0,s.jsx)("path",{d:"M24 64c0-11.046 8.954-20 20-20h20v40H44c-11.046 0-20-8.954-20-20z",fill:"#FF7262"}),(0,s.jsx)("path",{d:"M24 24c0-11.046 8.954-20 20-20h20v40H44c-11.046 0-20-8.954-20-20z",fill:"#1ABCFE"})]})},{}),category:"Digital and Creative Skills"},{name:"Shopify",icon:(0,s.jsx)(function(){return(0,s.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("rect",{width:"128",height:"128",rx:"20",fill:"#95BF47"}),(0,s.jsx)("path",{d:"M64 30l-20 10v48l20 10 20-10V40L64 30z",fill:"#fff"}),(0,s.jsx)("circle",{cx:"64",cy:"54",r:"4",fill:"#95BF47"})]})},{}),category:"Digital and Creative Skills"},{name:"WordPress",icon:(0,s.jsx)(function(){return(0,s.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("circle",{cx:"64",cy:"64",r:"60",fill:"#21759B"}),(0,s.jsx)("path",{d:"M64 24c22.091 0 40 17.909 40 40s-17.909 40-40 40-40-17.909-40-40 17.909-40 40-40z",fill:"#fff"}),(0,s.jsx)("circle",{cx:"64",cy:"64",r:"20",fill:"#21759B"})]})},{}),category:"Digital and Creative Skills"},{name:"SEO",icon:(0,s.jsx)(function(){return(0,s.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("rect",{width:"128",height:"128",rx:"20",fill:"#4285F4"}),(0,s.jsx)("circle",{cx:"64",cy:"54",r:"16",fill:"#fff"}),(0,s.jsx)("path",{d:"M48 80h32v8H48zm0 12h24v8H48z",fill:"#fff"})]})},{}),category:"Digital and Creative Skills"},{name:"SEO Tools",icon:(0,s.jsx)(function(){return(0,s.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("rect",{width:"128",height:"128",rx:"20",fill:"#34A853"}),(0,s.jsx)("path",{d:"M40 40h48v48H40z",fill:"#fff"}),(0,s.jsx)("circle",{cx:"64",cy:"64",r:"12",fill:"#34A853"})]})},{}),category:"Digital and Creative Skills"},{name:"Google Analytics",icon:(0,s.jsx)(function(){return(0,s.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("rect",{width:"128",height:"128",rx:"20",fill:"#F9AB00"}),(0,s.jsx)("path",{d:"M64 20c24.3 0 44 19.7 44 44s-19.7 44-44 44-44-19.7-44-44 19.7-44 44-44z",fill:"#E37400"}),(0,s.jsx)("path",{d:"M44 64h20v20H44V64zm24-12h20v32H68V52zm24 18h12v14h-12V70z",fill:"#fff"}),(0,s.jsx)("circle",{cx:"64",cy:"64",r:"8",fill:"#4285F4"})]})},{}),category:"Digital and Creative Skills"},{name:"Google Tag Manager",icon:(0,s.jsx)(function(){return(0,s.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("rect",{width:"128",height:"128",rx:"20",fill:"#4285F4"}),(0,s.jsx)("path",{d:"M64 24l20 20-20 20-20-20 20-20z",fill:"#34A853"}),(0,s.jsx)("path",{d:"M84 44l20 20-20 20-20-20 20-20z",fill:"#FBBC04"}),(0,s.jsx)("path",{d:"M44 64l20 20-20 20-20-20 20-20z",fill:"#EA4335"}),(0,s.jsx)("circle",{cx:"64",cy:"64",r:"12",fill:"#fff"}),(0,s.jsx)("text",{x:"64",y:"70",fontSize:"14",fontWeight:"bold",fill:"#4285F4",textAnchor:"middle",fontFamily:"Arial",children:"GTM"})]})},{}),category:"Digital and Creative Skills"},{name:"Google Search Console",icon:(0,s.jsx)(function(){return(0,s.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("rect",{width:"128",height:"128",rx:"20",fill:"#4285F4"}),(0,s.jsx)("circle",{cx:"64",cy:"64",r:"40",fill:"none",stroke:"#34A853",strokeWidth:"4"}),(0,s.jsx)("circle",{cx:"64",cy:"64",r:"28",fill:"none",stroke:"#FBBC04",strokeWidth:"4"}),(0,s.jsx)("circle",{cx:"64",cy:"64",r:"16",fill:"#EA4335"}),(0,s.jsx)("path",{d:"M64 24v20M64 84v20M24 64h20M84 64h20",stroke:"#fff",strokeWidth:"4",strokeLinecap:"round"})]})},{}),category:"Digital and Creative Skills"},{name:"Semrush",icon:(0,s.jsx)(function(){return(0,s.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("rect",{width:"128",height:"128",rx:"20",fill:"#FF6C37"}),(0,s.jsx)("path",{d:"M32 40h64v48H32z",fill:"#fff"}),(0,s.jsx)("path",{d:"M40 52h48v4H40zm0 8h40v4H40zm0 8h48v4H40zm0 8h36v4H40z",fill:"#FF6C37"}),(0,s.jsx)("circle",{cx:"96",cy:"60",r:"8",fill:"#FF6C37"})]})},{}),category:"Digital and Creative Skills"},{name:"Git",icon:(0,s.jsx)(function(){return(0,s.jsx)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0c-2.842-2.844-3.545-7.019-2.105-10.52L68.574 60.58l-.002 27.767c.932.459 1.819 1.028 2.644 1.85a9.677 9.677 0 010 13.683 9.677 9.677 0 01-13.683 0 9.677 9.677 0 010-13.683c.825-.821 1.712-1.39 2.644-1.851V59.733c-.932-.459-1.819-1.028-2.644-1.85a9.677 9.677 0 01-6.844-2.843L36.558 41.568 3.264 74.861c-3.175 3.177-3.175 8.325 0 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858c3.175-3.176 3.175-8.327-.001-11.499z",fill:"#F05032"})})},{}),category:"General & Soft Skills"},{name:"GitHub",icon:(0,s.jsx)(function(){return(0,s.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.3 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.34-7.125-20.34-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.52-6.705-27.52-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19 4.817-1.338 9.983-2.009 15.115-2.033 5.132.024 10.302.696 15.128 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.262-30.622 41.262-57.294C124.388 32.14 97.35 5.104 64 5.104z",fill:"#181717"}),(0,s.jsx)("path",{d:"M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.189.44.197.69.61.538.91zm2.446 2.729c-.294.267-.871.143-1.232-.28-.396-.42-.47-.984-.172-1.255.298-.266.884-.14 1.24.28.394.426.472.99.164 1.255zm2.382 3.477c-.377.258-.984.028-1.354-.49-.372-.516-.372-1.183.01-1.44.373-.258.977-.03 1.35.488.372.517.372 1.19-.006 1.442zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.266 1.564.23.527.486.686 1.18.33 1.544zm4.5 1.951c-.147.473-.825.69-1.507.49-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.49.683.206 1.13.756.984 1.237zm4.943.361c.015.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.305.88zm4.598-.979c.086.486-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.662z",fill:"#fff"})]})},{}),category:"General & Soft Skills"},{name:"APIs",icon:(0,s.jsx)(function(){return(0,s.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("rect",{width:"128",height:"128",rx:"20",fill:"#FF6B6B"}),(0,s.jsx)("path",{d:"M32 40h64v48H32z",fill:"#fff"}),(0,s.jsx)("circle",{cx:"48",cy:"64",r:"6",fill:"#FF6B6B"}),(0,s.jsx)("circle",{cx:"64",cy:"64",r:"6",fill:"#FF6B6B"}),(0,s.jsx)("circle",{cx:"80",cy:"64",r:"6",fill:"#FF6B6B"})]})},{}),category:"General & Soft Skills"},{name:"Responsive Design",icon:(0,s.jsx)(function(){return(0,s.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("rect",{x:"24",y:"32",width:"80",height:"64",rx:"8",fill:"none",stroke:"#4ECDC4",strokeWidth:"4"}),(0,s.jsx)("rect",{x:"32",y:"40",width:"40",height:"48",rx:"4",fill:"#4ECDC4"}),(0,s.jsx)("rect",{x:"80",y:"52",width:"16",height:"24",rx:"2",fill:"#4ECDC4"})]})},{}),category:"General & Soft Skills"},{name:"MS Office",icon:(0,s.jsx)(function(){return(0,s.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("rect",{width:"128",height:"128",rx:"20",fill:"#EB3C00"}),(0,s.jsx)("path",{d:"M32 32h64v64H32z",fill:"#fff"}),(0,s.jsx)("path",{d:"M40 40h16v48H40zm24 0h16v48H64z",fill:"#EB3C00"})]})},{}),category:"General & Soft Skills"},{name:"Communication",icon:(0,s.jsx)(function(){return(0,s.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("path",{d:"M64 24c22.091 0 40 17.909 40 40 0 8.837-2.865 17.008-7.727 23.64L104 104l-16.36-7.273C81.008 102.135 72.837 105 64 105c-22.091 0-40-17.909-40-40s17.909-40 40-40z",fill:"#9B59B6"}),(0,s.jsx)("circle",{cx:"52",cy:"64",r:"4",fill:"#fff"}),(0,s.jsx)("circle",{cx:"64",cy:"64",r:"4",fill:"#fff"}),(0,s.jsx)("circle",{cx:"76",cy:"64",r:"4",fill:"#fff"})]})},{}),category:"General & Soft Skills"}],nm=()=>(Array.from(new Set(nf.map(e=>e.category))),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(ti,{id:"techstack",children:(0,s.jsx)(ta,{children:(0,s.jsx)(no,{children:(0,s.jsx)(ni,{children:(0,s.jsxs)(ns,{children:[(0,s.jsx)(nl,{"data-aos":"fade-up",children:"TECHNOLOGIES I WORK WITH"}),(0,s.jsx)(nc,{children:nf.map((e,t)=>(0,s.jsxs)(nd,{"data-aos":"zoom-in","data-aos-delay":50*t,children:[(0,s.jsx)(nu,{children:e.icon}),(0,s.jsx)(tn,{variant:"bodySmall",as:"span",children:(0,s.jsx)(np,{children:e.name})})]},t))})]})})})})}),(0,s.jsx)(nh,{})]})),ng=Q.default.div.withConfig({displayName:"ContactHeader.styles__ContactHeaderWrapper",componentId:"sc-1b5bfa94-0"})`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
`,nb=Q.default.div.withConfig({displayName:"ContactHeader.styles__ContactHeaderContent",componentId:"sc-1b5bfa94-1"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.xl};
  max-width: 800px;
  text-align: center;
  align-items: center;
  position: relative;
  width: 100%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`,ny=Q.default.div.withConfig({displayName:"ContactHeader.styles__ContactTitle",componentId:"sc-1b5bfa94-2"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0;
  line-height: 1.1;
`,nx=Q.default.h1.withConfig({displayName:"ContactHeader.styles__Headline",componentId:"sc-1b5bfa94-3"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyHeading};
  font-size: clamp(3rem, 10vw, 4rem);
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.colors.textPrimary};
  margin: 0;
  display: block;
  width: 100%;
  text-align: center;

  @media (max-width: 768px) {
    font-size: clamp(2rem, 6vw, 3rem);
  }
`,nv=Q.default.p.withConfig({displayName:"ContactHeader.styles__ContactDescription",componentId:"sc-1b5bfa94-4"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyBody};
  color: ${({theme:e})=>e.colors.textSecondary};
  line-height: 1.8;
  text-align: center;
  max-width: 600px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`,nw=({sectionNumber:e,headline:t,description:n})=>{let r=t.split("\n").filter(e=>""!==e.trim());return(0,s.jsx)(ng,{"data-aos":"fade-up",children:(0,s.jsxs)(nb,{children:[(0,s.jsx)(ny,{children:r.map((e,t)=>(0,s.jsx)(nx,{"data-aos":"fade-up","data-aos-delay":100*t,children:e.trim()},t))}),(0,s.jsx)(nv,{"data-aos":"fade-up","data-aos-delay":"200",children:n})]})})},nk=eJ("send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);var nj=function(e){var t,n,r;return!!(t=e)&&"object"==typeof t&&(n=e,"[object RegExp]"!==(r=Object.prototype.toString.call(n))&&"[object Date]"!==r&&n.$$typeof!==n_)},n_="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function n$(e,t){return!1!==t.clone&&t.isMergeableObject(e)?nO(Array.isArray(e)?[]:{},e,t):e}function nS(e,t,n){return e.concat(t).map(function(e){return n$(e,n)})}function nO(e,t,n){(n=n||{}).arrayMerge=n.arrayMerge||nS,n.isMergeableObject=n.isMergeableObject||nj;var r,a,o=Array.isArray(t);return o!==Array.isArray(e)?n$(t,n):o?n.arrayMerge(e,t,n):(a={},(r=n).isMergeableObject(e)&&Object.keys(e).forEach(function(t){a[t]=n$(e[t],r)}),Object.keys(t).forEach(function(n){r.isMergeableObject(t[n])&&e[n]?a[n]=nO(e[n],t[n],r):a[n]=n$(t[n],r)}),a)}nO.all=function(e,t){if(!Array.isArray(e))throw Error("first argument should be an array");return e.reduce(function(e,n){return nO(e,n,t)},{})};let nC=nO;var nE=e.g&&e.g.Object===Object&&e.g,nP="object"==typeof self&&self&&self.Object===Object&&self,nT=nE||nP||Function("return this")(),nz=nT.Symbol,nA=Object.prototype,nF=nA.hasOwnProperty,nI=nA.toString,nN=nz?nz.toStringTag:void 0;let nM=function(e){var t=nF.call(e,nN),n=e[nN];try{e[nN]=void 0;var r=!0}catch(e){}var a=nI.call(e);return r&&(t?e[nN]=n:delete e[nN]),a};var nD=Object.prototype.toString,nR=nz?nz.toStringTag:void 0;let nB=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":nR&&nR in Object(e)?nM(e):nD.call(e)},nL=function(e,t){return function(n){return e(t(n))}};var nH=nL(Object.getPrototypeOf,Object);let nV=function(e){return null!=e&&"object"==typeof e};var nU=Object.prototype,nW=Function.prototype.toString,nq=nU.hasOwnProperty,nG=nW.call(Object);let nX=function(e){if(!nV(e)||"[object Object]"!=nB(e))return!1;var t=nH(e);if(null===t)return!0;var n=nq.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&nW.call(n)==nG},nY=function(e,t){return e===t||e!=e&&t!=t},nZ=function(e,t){for(var n=e.length;n--;)if(nY(e[n][0],t))return n;return -1};var nJ=Array.prototype.splice;function nK(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}nK.prototype.clear=function(){this.__data__=[],this.size=0},nK.prototype.delete=function(e){var t=this.__data__,n=nZ(t,e);return!(n<0)&&(n==t.length-1?t.pop():nJ.call(t,n,1),--this.size,!0)},nK.prototype.get=function(e){var t=this.__data__,n=nZ(t,e);return n<0?void 0:t[n][1]},nK.prototype.has=function(e){return nZ(this.__data__,e)>-1},nK.prototype.set=function(e,t){var n=this.__data__,r=nZ(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};let nQ=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},n0=function(e){if(!nQ(e))return!1;var t=nB(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t};var n1=nT["__core-js_shared__"],n2=(a=/[^.]+$/.exec(n1&&n1.keys&&n1.keys.IE_PROTO||""))?"Symbol(src)_1."+a:"",n5=Function.prototype.toString;let n4=function(e){if(null!=e){try{return n5.call(e)}catch(e){}try{return e+""}catch(e){}}return""};var n3=/^\[object .+?Constructor\]$/,n6=Object.prototype,n8=Function.prototype.toString,n7=n6.hasOwnProperty,n9=RegExp("^"+n8.call(n7).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");let re=function(e){return!!nQ(e)&&(!n2||!(n2 in e))&&(n0(e)?n9:n3).test(n4(e))},rt=function(e,t){var n=null==e?void 0:e[t];return re(n)?n:void 0};var rn=rt(nT,"Map"),rr=rt(Object,"create"),ra=Object.prototype.hasOwnProperty,ro=Object.prototype.hasOwnProperty;function ri(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ri.prototype.clear=function(){this.__data__=rr?rr(null):{},this.size=0},ri.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=!!t,t},ri.prototype.get=function(e){var t=this.__data__;if(rr){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return ra.call(t,e)?t[e]:void 0},ri.prototype.has=function(e){var t=this.__data__;return rr?void 0!==t[e]:ro.call(t,e)},ri.prototype.set=function(e,t){var n=this.__data__;return this.size+=+!this.has(e),n[e]=rr&&void 0===t?"__lodash_hash_undefined__":t,this};let rs=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e},rl=function(e,t){var n=e.__data__;return rs(t)?n["string"==typeof t?"string":"hash"]:n.map};function rc(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function rd(e){var t=this.__data__=new nK(e);this.size=t.size}rc.prototype.clear=function(){this.size=0,this.__data__={hash:new ri,map:new(rn||nK),string:new ri}},rc.prototype.delete=function(e){var t=rl(this,e).delete(e);return this.size-=!!t,t},rc.prototype.get=function(e){return rl(this,e).get(e)},rc.prototype.has=function(e){return rl(this,e).has(e)},rc.prototype.set=function(e,t){var n=rl(this,e),r=n.size;return n.set(e,t),this.size+=+(n.size!=r),this},rd.prototype.clear=function(){this.__data__=new nK,this.size=0},rd.prototype.delete=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},rd.prototype.get=function(e){return this.__data__.get(e)},rd.prototype.has=function(e){return this.__data__.has(e)},rd.prototype.set=function(e,t){var n=this.__data__;if(n instanceof nK){var r=n.__data__;if(!rn||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new rc(r)}return n.set(e,t),this.size=n.size,this};let ru=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&!1!==t(e[n],n,e););return e};var rp=function(){try{var e=rt(Object,"defineProperty");return e({},"",{}),e}catch(e){}}();let rh=function(e,t,n){"__proto__"==t&&rp?rp(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n};var rf=Object.prototype.hasOwnProperty;let rm=function(e,t,n){var r=e[t];rf.call(e,t)&&nY(r,n)&&(void 0!==n||t in e)||rh(e,t,n)},rg=function(e,t,n,r){var a=!n;n||(n={});for(var o=-1,i=t.length;++o<i;){var s=t[o],l=r?r(n[s],e[s],s,n,e):void 0;void 0===l&&(l=e[s]),a?rh(n,s,l):rm(n,s,l)}return n},rb=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r},ry=function(e){return nV(e)&&"[object Arguments]"==nB(e)};var rx=Object.prototype,rv=rx.hasOwnProperty,rw=rx.propertyIsEnumerable,rk=ry(function(){return arguments}())?ry:function(e){return nV(e)&&rv.call(e,"callee")&&!rw.call(e,"callee")},rj=Array.isArray;let r_=function(){return!1};var r$=/^(?:0|[1-9]\d*)$/;let rS=function(e,t){var n=typeof e;return!!(t=null==t?0x1fffffffffffff:t)&&("number"==n||"symbol"!=n&&r$.test(e))&&e>-1&&e%1==0&&e<t},rO=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=0x1fffffffffffff};var rC={};rC["[object Float32Array]"]=rC["[object Float64Array]"]=rC["[object Int8Array]"]=rC["[object Int16Array]"]=rC["[object Int32Array]"]=rC["[object Uint8Array]"]=rC["[object Uint8ClampedArray]"]=rC["[object Uint16Array]"]=rC["[object Uint32Array]"]=!0,rC["[object Arguments]"]=rC["[object Array]"]=rC["[object ArrayBuffer]"]=rC["[object Boolean]"]=rC["[object DataView]"]=rC["[object Date]"]=rC["[object Error]"]=rC["[object Function]"]=rC["[object Map]"]=rC["[object Number]"]=rC["[object Object]"]=rC["[object RegExp]"]=rC["[object Set]"]=rC["[object String]"]=rC["[object WeakMap]"]=!1;let rE=function(e){return function(t){return e(t)}};var rP=function(){try{return!1}catch(e){}}(),rT=rP&&rP.isTypedArray,rz=rT?rE(rT):function(e){return nV(e)&&rO(e.length)&&!!rC[nB(e)]},rA=Object.prototype.hasOwnProperty;let rF=function(e,t){var n=rj(e),r=!n&&rk(e),a=!n&&!r&&r_(e),o=!n&&!r&&!a&&rz(e),i=n||r||a||o,s=i?rb(e.length,String):[],l=s.length;for(var c in e)(t||rA.call(e,c))&&!(i&&("length"==c||a&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||rS(c,l)))&&s.push(c);return s};var rI=Object.prototype;let rN=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||rI)};var rM=nL(Object.keys,Object),rD=Object.prototype.hasOwnProperty;let rR=function(e){if(!rN(e))return rM(e);var t=[];for(var n in Object(e))rD.call(e,n)&&"constructor"!=n&&t.push(n);return t},rB=function(e){return null!=e&&rO(e.length)&&!n0(e)},rL=function(e){return rB(e)?rF(e):rR(e)},rH=function(e){var t=[];if(null!=e)for(var n in Object(e))t.push(n);return t};var rV=Object.prototype.hasOwnProperty;let rU=function(e){if(!nQ(e))return rH(e);var t=rN(e),n=[];for(var r in e)"constructor"==r&&(t||!rV.call(e,r))||n.push(r);return n},rW=function(e){return rB(e)?rF(e,!0):rU(e)},rq=function(e,t){if(t)return e.slice();var n=e.length,r=new e.constructor(n);return e.copy(r),r},rG=function(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t},rX=function(e,t){for(var n=-1,r=null==e?0:e.length,a=0,o=[];++n<r;){var i=e[n];t(i,n,e)&&(o[a++]=i)}return o},rY=function(){return[]};var rZ=Object.prototype.propertyIsEnumerable,rJ=Object.getOwnPropertySymbols,rK=rJ?function(e){return null==e?[]:rX(rJ(e=Object(e)),function(t){return rZ.call(e,t)})}:rY;let rQ=function(e,t){for(var n=-1,r=t.length,a=e.length;++n<r;)e[a+n]=t[n];return e};var r0=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)rQ(t,rK(e)),e=nH(e);return t}:rY;let r1=function(e,t,n){var r=t(e);return rj(e)?r:rQ(r,n(e))},r2=function(e){return r1(e,rL,rK)},r5=function(e){return r1(e,rW,r0)};var r4=rt(nT,"DataView"),r3=rt(nT,"Promise"),r6=rt(nT,"Set"),r8=rt(nT,"WeakMap"),r7="[object Map]",r9="[object Promise]",ae="[object Set]",at="[object WeakMap]",an="[object DataView]",ar=n4(r4),aa=n4(rn),ao=n4(r3),ai=n4(r6),as=n4(r8),al=nB;(r4&&al(new r4(new ArrayBuffer(1)))!=an||rn&&al(new rn)!=r7||r3&&al(r3.resolve())!=r9||r6&&al(new r6)!=ae||r8&&al(new r8)!=at)&&(al=function(e){var t=nB(e),n="[object Object]"==t?e.constructor:void 0,r=n?n4(n):"";if(r)switch(r){case ar:return an;case aa:return r7;case ao:return r9;case ai:return ae;case as:return at}return t});let ac=al;var ad=Object.prototype.hasOwnProperty;let au=function(e){var t=e.length,n=new e.constructor(t);return t&&"string"==typeof e[0]&&ad.call(e,"index")&&(n.index=e.index,n.input=e.input),n};var ap=nT.Uint8Array;let ah=function(e){var t=new e.constructor(e.byteLength);return new ap(t).set(new ap(e)),t},af=function(e,t){var n=t?ah(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)};var am=/\w*$/;let ag=function(e){var t=new e.constructor(e.source,am.exec(e));return t.lastIndex=e.lastIndex,t};var ab=nz?nz.prototype:void 0,ay=ab?ab.valueOf:void 0;let ax=function(e,t){var n=t?ah(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)},av=function(e,t,n){var r=e.constructor;switch(t){case"[object ArrayBuffer]":return ah(e);case"[object Boolean]":case"[object Date]":return new r(+e);case"[object DataView]":return af(e,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return ax(e,n);case"[object Map]":case"[object Set]":return new r;case"[object Number]":case"[object String]":return new r(e);case"[object RegExp]":return ag(e);case"[object Symbol]":return ay?Object(ay.call(e)):{}}};var aw=Object.create,ak=function(){function e(){}return function(t){if(!nQ(t))return{};if(aw)return aw(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}(),aj=rP&&rP.isMap,a_=aj?rE(aj):function(e){return nV(e)&&"[object Map]"==ac(e)},a$=rP&&rP.isSet,aS=a$?rE(a$):function(e){return nV(e)&&"[object Set]"==ac(e)},aO="[object Arguments]",aC="[object Function]",aE="[object Object]",aP={};aP[aO]=aP["[object Array]"]=aP["[object ArrayBuffer]"]=aP["[object DataView]"]=aP["[object Boolean]"]=aP["[object Date]"]=aP["[object Float32Array]"]=aP["[object Float64Array]"]=aP["[object Int8Array]"]=aP["[object Int16Array]"]=aP["[object Int32Array]"]=aP["[object Map]"]=aP["[object Number]"]=aP[aE]=aP["[object RegExp]"]=aP["[object Set]"]=aP["[object String]"]=aP["[object Symbol]"]=aP["[object Uint8Array]"]=aP["[object Uint8ClampedArray]"]=aP["[object Uint16Array]"]=aP["[object Uint32Array]"]=!0,aP["[object Error]"]=aP[aC]=aP["[object WeakMap]"]=!1;let aT=function e(t,n,r,a,o,i){var s,l=1&n,c=2&n,d=4&n;if(r&&(s=o?r(t,a,o,i):r(t)),void 0!==s)return s;if(!nQ(t))return t;var u=rj(t);if(u){if(s=au(t),!l)return rG(t,s)}else{var p,h,f,m,g,b=ac(t),y=b==aC||"[object GeneratorFunction]"==b;if(r_(t))return rq(t,l);if(b==aE||b==aO||y&&!o){if(s=c||y||"function"!=typeof(p=t).constructor||rN(p)?{}:ak(nH(p)),!l)return c?(f=(h=s)&&rg(t,rW(t),h),rg(t,r0(t),f)):(g=(m=s)&&rg(t,rL(t),m),rg(t,rK(t),g))}else{if(!aP[b])return o?t:{};s=av(t,b,l)}}i||(i=new rd);var x=i.get(t);if(x)return x;i.set(t,s),aS(t)?t.forEach(function(a){s.add(e(a,n,r,a,t,i))}):a_(t)&&t.forEach(function(a,o){s.set(o,e(a,n,r,o,t,i))});var v=d?c?r5:r2:c?rW:rL,w=u?void 0:v(t);return ru(w||t,function(a,o){w&&(a=t[o=a]),rm(s,o,e(a,n,r,o,t,i))}),s},az=function(e){return aT(e,5)};var aA=e.i(32892);let aF=function(e,t){},aI=function(e){return aT(e,4)},aN=function(e,t){for(var n=-1,r=null==e?0:e.length,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a},aM=function(e){return"symbol"==typeof e||nV(e)&&"[object Symbol]"==nB(e)};function aD(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw TypeError("Expected a function");var n=function(){var r=arguments,a=t?t.apply(this,r):r[0],o=n.cache;if(o.has(a))return o.get(a);var i=e.apply(this,r);return n.cache=o.set(a,i)||o,i};return n.cache=new(aD.Cache||rc),n}aD.Cache=rc;var aR=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,aB=/\\(\\)?/g,aL=(i=(o=aD(function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(aR,function(e,n,r,a){t.push(r?a.replace(aB,"$1"):n||e)}),t},function(e){return 500===i.size&&i.clear(),e})).cache,o),aH=1/0;let aV=function(e){if("string"==typeof e||aM(e))return e;var t=e+"";return"0"==t&&1/e==-aH?"-0":t};var aU=1/0,aW=nz?nz.prototype:void 0,aq=aW?aW.toString:void 0;let aG=function e(t){if("string"==typeof t)return t;if(rj(t))return aN(t,e)+"";if(aM(t))return aq?aq.call(t):"";var n=t+"";return"0"==n&&1/t==-aU?"-0":n},aX=function(e){return rj(e)?aN(e,aV):aM(e)?[e]:rG(aL(null==e?"":aG(e)))};function aY(){return(aY=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}e.i(98437);function aZ(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function aJ(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var aK=(0,l.createContext)(void 0);aK.displayName="FormikContext",aK.Provider,aK.Consumer;var aQ=function(e){return Array.isArray(e)&&0===e.length},a0=function(e){return"function"==typeof e},a1=function(e){return null!==e&&"object"==typeof e},a2=function(e){return"[object String]"===Object.prototype.toString.call(e)},a5=function(e){return a1(e)&&a0(e.then)};function a4(e,t,n,r){void 0===r&&(r=0);for(var a=aX(t);e&&r<a.length;)e=e[a[r++]];return r===a.length||e?void 0===e?n:e:n}function a3(e,t,n){for(var r=aI(e),a=r,o=0,i=aX(t);o<i.length-1;o++){var s=i[o],l=a4(e,i.slice(0,o+1));if(l&&(a1(l)||Array.isArray(l)))a=a[s]=aI(l);else{var c=i[o+1];a=a[s]=String(Math.floor(Number(c)))===c&&Number(c)>=0?[]:{}}}return(0===o?e:a)[i[o]]===n?e:(void 0===n?delete a[i[o]]:a[i[o]]=n,0===o&&void 0===n&&delete r[i[o]],r)}var a6={},a8={};function a7(e,t,n){var r=e.slice();return t.forEach(function(t,a){if(void 0===r[a]){var o=!1!==n.clone&&n.isMergeableObject(t);r[a]=o?nC(Array.isArray(t)?[]:{},t,n):t}else n.isMergeableObject(t)?r[a]=nC(e[a],t,n):-1===e.indexOf(t)&&r.push(t)}),r}var a9="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?l.useLayoutEffect:l.useEffect;function oe(e){var t=(0,l.useRef)(e);return a9(function(){t.current=e}),(0,l.useCallback)(function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.current.apply(void 0,n)},[])}(0,l.forwardRef)(function(e,t){var n,r=e.action,a=aZ(e,["action"]),o=((n=(0,l.useContext)(aK))||aF(!1),n),i=o.handleReset,s=o.handleSubmit;return(0,l.createElement)("form",aY({onSubmit:s,ref:t,onReset:i,action:null!=r?r:"#"},a))}).displayName="Form";var ot=function(e,t,n){var r=oo(e),a=r[t];return r.splice(t,1),r.splice(n,0,a),r},on=function(e,t,n){var r=oo(e),a=r[t];return r[t]=r[n],r[n]=a,r},or=function(e,t,n){var r=oo(e);return r.splice(t,0,n),r},oa=function(e,t,n){var r=oo(e);return r[t]=n,r},oo=function(e){if(!e)return[];if(Array.isArray(e))return[].concat(e);var t=Object.keys(e).map(function(e){return parseInt(e)}).reduce(function(e,t){return t>e?t:e},0);return Array.from(aY({},e,{length:t+1}))},oi=function(e,t){var n="function"==typeof e?e:t;return function(e){return Array.isArray(e)||a1(e)?n(oo(e)):e}};(function(e){function t(t){var n;return(n=e.call(this,t)||this).updateArrayField=function(e,t,r){var a=n.props,o=a.name;(0,a.formik.setFormikState)(function(n){var a=oi(r,e),i=oi(t,e),s=a3(n.values,o,e(a4(n.values,o))),l=r?a(a4(n.errors,o)):void 0,c=t?i(a4(n.touched,o)):void 0;return aQ(l)&&(l=void 0),aQ(c)&&(c=void 0),aY({},n,{values:s,errors:r?a3(n.errors,o,l):n.errors,touched:t?a3(n.touched,o,c):n.touched})})},n.push=function(e){return n.updateArrayField(function(t){return[].concat(oo(t),[az(e)])},!1,!1)},n.handlePush=function(e){return function(){return n.push(e)}},n.swap=function(e,t){return n.updateArrayField(function(n){return on(n,e,t)},!0,!0)},n.handleSwap=function(e,t){return function(){return n.swap(e,t)}},n.move=function(e,t){return n.updateArrayField(function(n){return ot(n,e,t)},!0,!0)},n.handleMove=function(e,t){return function(){return n.move(e,t)}},n.insert=function(e,t){return n.updateArrayField(function(n){return or(n,e,t)},function(t){return or(t,e,null)},function(t){return or(t,e,null)})},n.handleInsert=function(e,t){return function(){return n.insert(e,t)}},n.replace=function(e,t){return n.updateArrayField(function(n){return oa(n,e,t)},!1,!1)},n.handleReplace=function(e,t){return function(){return n.replace(e,t)}},n.unshift=function(e){var t=-1;return n.updateArrayField(function(n){var r=n?[e].concat(n):[e];return t=r.length,r},function(e){return e?[null].concat(e):[null]},function(e){return e?[null].concat(e):[null]}),t},n.handleUnshift=function(e){return function(){return n.unshift(e)}},n.handleRemove=function(e){return function(){return n.remove(e)}},n.handlePop=function(){return function(){return n.pop()}},n.remove=n.remove.bind(aJ(n)),n.pop=n.pop.bind(aJ(n)),n}(n=t).prototype=Object.create((r=e).prototype),n.prototype.constructor=n,n.__proto__=r;var n,r,a=t.prototype;return a.componentDidUpdate=function(e){this.props.validateOnChange&&this.props.formik.validateOnChange&&!(0,aA.default)(a4(e.formik.values,e.name),a4(this.props.formik.values,this.props.name))&&this.props.formik.validateForm(this.props.formik.values)},a.remove=function(e){var t;return this.updateArrayField(function(n){var r=n?oo(n):[];return t||(t=r[e]),a0(r.splice)&&r.splice(e,1),a0(r.every)&&r.every(function(e){return void 0===e})?[]:r},!0,!0),t},a.pop=function(){var e;return this.updateArrayField(function(t){var n=t.slice();return e||(e=n&&n.pop&&n.pop()),n},!0,!0),e},a.render=function(){var e,t={push:this.push,pop:this.pop,swap:this.swap,move:this.move,insert:this.insert,replace:this.replace,unshift:this.unshift,remove:this.remove,handlePush:this.handlePush,handlePop:this.handlePop,handleSwap:this.handleSwap,handleMove:this.handleMove,handleInsert:this.handleInsert,handleReplace:this.handleReplace,handleUnshift:this.handleUnshift,handleRemove:this.handleRemove},n=this.props,r=n.component,a=n.render,o=n.children,i=n.name,s=aZ(n.formik,["validate","validationSchema"]),c=aY({},t,{form:s,name:i});return r?(0,l.createElement)(r,c):a?a(c):o?"function"==typeof o?o(c):(e=o,0===l.Children.count(e))?null:l.Children.only(o):null},t})(l.Component).defaultProps={validateOnChange:!0},l.Component,l.Component;var os=e.i(5766),ol=e.i(37472),oc=e.i(3873),od=e.i(1439);let ou=Object.prototype.toString,op=Error.prototype.toString,oh=RegExp.prototype.toString,of="undefined"!=typeof Symbol?Symbol.prototype.toString:()=>"",om=/^Symbol\((.*)\)(.*)$/;function og(e,t=!1){if(null==e||!0===e||!1===e)return""+e;let n=typeof e;if("number"===n)return e!=+e?"NaN":0===e&&1/e<0?"-0":""+e;if("string"===n)return t?`"${e}"`:e;if("function"===n)return"[Function "+(e.name||"anonymous")+"]";if("symbol"===n)return of.call(e).replace(om,"Symbol($1)");let r=ou.call(e).slice(8,-1);return"Date"===r?isNaN(e.getTime())?""+e:e.toISOString(e):"Error"===r||e instanceof Error?"["+op.call(e)+"]":"RegExp"===r?oh.call(e):null}function ob(e,t){let n=og(e,t);return null!==n?n:JSON.stringify(e,function(e,n){let r=og(this[e],t);return null!==r?r:n},2)}function oy(e){return null==e?[]:[].concat(e)}let ox=/\$\{\s*(\w+)\s*\}/g;t=Symbol.toStringTag;class ov{constructor(e,n,r,a){this.name=void 0,this.message=void 0,this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=void 0,this.inner=void 0,this[t]="Error",this.name="ValidationError",this.value=n,this.path=r,this.type=a,this.errors=[],this.inner=[],oy(e).forEach(e=>{if(ow.isError(e)){this.errors.push(...e.errors);let t=e.inner.length?e.inner:[e];this.inner.push(...t)}else this.errors.push(e)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0]}}n=Symbol.hasInstance,r=Symbol.toStringTag;class ow extends Error{static formatError(e,t){let n=t.label||t.path||"this";return(t=Object.assign({},t,{path:n,originalPath:t.path}),"string"==typeof e)?e.replace(ox,(e,n)=>ob(t[n])):"function"==typeof e?e(t):e}static isError(e){return e&&"ValidationError"===e.name}constructor(e,t,n,a,o){const i=new ov(e,t,n,a);if(o)return i;super(),this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=[],this.inner=[],this[r]="Error",this.name=i.name,this.message=i.message,this.type=i.type,this.value=i.value,this.path=i.path,this.errors=i.errors,this.inner=i.inner,Error.captureStackTrace&&Error.captureStackTrace(this,ow)}static[n](e){return ov[Symbol.hasInstance](e)||super[Symbol.hasInstance](e)}}let ok={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:e,type:t,value:n,originalValue:r})=>{let a=null!=r&&r!==n?` (cast from the value \`${ob(r,!0)}\`).`:".";return"mixed"!==t?`${e} must be a \`${t}\` type, but the final value was: \`${ob(n,!0)}\``+a:`${e} must match the configured type. The validated value was: \`${ob(n,!0)}\``+a}},oj={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",datetime:"${path} must be a valid ISO date-time",datetime_precision:"${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",datetime_offset:'${path} must be a valid ISO date-time with UTC "Z" timezone',trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},o_={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},o$={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},oS={isValue:"${path} field must be ${value}"},oO={noUnknown:"${path} field has unspecified keys: ${unknown}",exact:"${path} object contains unknown properties: ${properties}"},oC={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},oE={notType:e=>{let{path:t,value:n,spec:r}=e,a=r.types.length;if(Array.isArray(n)){if(n.length<a)return`${t} tuple value has too few items, expected a length of ${a} but got ${n.length} for value: \`${ob(n,!0)}\``;if(n.length>a)return`${t} tuple value has too many items, expected a length of ${a} but got ${n.length} for value: \`${ob(n,!0)}\``}return ow.formatError(ok.notType,e)}};Object.assign(Object.create(null),{mixed:ok,string:oj,number:o_,date:o$,object:oO,array:oC,boolean:oS,tuple:oE});let oP=e=>e&&e.__isYupSchema__;class oT{static fromOptions(e,t){if(!t.then&&!t.otherwise)throw TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:n,then:r,otherwise:a}=t,o="function"==typeof n?n:(...e)=>e.every(e=>e===n);return new oT(e,(e,t)=>{var n;let i=o(...e)?r:a;return null!=(n=null==i?void 0:i(t))?n:t})}constructor(e,t){this.fn=void 0,this.refs=e,this.refs=e,this.fn=t}resolve(e,t){let n=this.refs.map(e=>e.getValue(null==t?void 0:t.value,null==t?void 0:t.parent,null==t?void 0:t.context)),r=this.fn(n,e,t);if(void 0===r||r===e)return e;if(!oP(r))throw TypeError("conditions must return a schema object");return r.resolve(t)}}class oz{constructor(e,t={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,"string"!=typeof e)throw TypeError("ref must be a string, got: "+e);if(this.key=e.trim(),""===e)throw TypeError("ref must be a non-empty string");this.isContext="$"===this.key[0],this.isValue="."===this.key[0],this.isSibling=!this.isContext&&!this.isValue;let n=this.isContext?"$":this.isValue?".":"";this.path=this.key.slice(n.length),this.getter=this.path&&(0,ol.getter)(this.path,!0),this.map=t.map}getValue(e,t,n){let r=this.isContext?n:this.isValue?e:t;return this.getter&&(r=this.getter(r||{})),this.map&&(r=this.map(r)),r}cast(e,t){return this.getValue(e,null==t?void 0:t.parent,null==t?void 0:t.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(e){return e&&e.__isYupRef}}function oA(e){function t({value:t,path:n="",options:r,originalValue:a,schema:o},i,s){let l,{name:c,test:d,params:u,message:p,skipAbsent:h}=e,{parent:f,context:m,abortEarly:g=o.spec.abortEarly,disableStackTrace:b=o.spec.disableStackTrace}=r,y={value:t,parent:f,context:m};function x(e={}){let r=oF(Object.assign({value:t,originalValue:a,label:o.spec.label,path:e.path||n,spec:o.spec,disableStackTrace:e.disableStackTrace||b},u,e.params),y),i=new ow(ow.formatError(e.message||p,r),t,r.path,e.type||c,r.disableStackTrace);return i.params=r,i}let v=g?i:s,w={path:n,parent:f,type:c,from:r.from,createError:x,resolve:e=>oI(e,y),options:r,originalValue:a,schema:o},k=e=>{ow.isError(e)?v(e):e?s(null):v(x())},j=e=>{ow.isError(e)?v(e):i(e)};if(h&&null==t)return k(!0);try{var _;if(l=d.call(w,t,w),"function"==typeof(null==(_=l)?void 0:_.then)){if(r.sync)throw Error(`Validation test of type: "${w.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(l).then(k,j)}}catch(e){j(e);return}k(l)}return t.OPTIONS=e,t}function oF(e,t){if(!e)return e;for(let n of Object.keys(e))e[n]=oI(e[n],t);return e}function oI(e,t){return oz.isRef(e)?e.getValue(t.value,t.parent,t.context):e}oz.prototype.__isYupRef=!0;class oN extends Set{describe(){let e=[];for(let t of this.values())e.push(oz.isRef(t)?t.describe():t);return e}resolveAll(e){let t=[];for(let n of this.values())t.push(e(n));return t}clone(){return new oN(this.values())}merge(e,t){let n=this.clone();return e.forEach(e=>n.add(e)),t.forEach(e=>n.delete(e)),n}}function oM(e,t=new Map){let n;if(oP(e)||!e||"object"!=typeof e)return e;if(t.has(e))return t.get(e);if(e instanceof Date)n=new Date(e.getTime()),t.set(e,n);else if(e instanceof RegExp)n=new RegExp(e),t.set(e,n);else if(Array.isArray(e)){n=Array(e.length),t.set(e,n);for(let r=0;r<e.length;r++)n[r]=oM(e[r],t)}else if(e instanceof Map)for(let[r,a]of(n=new Map,t.set(e,n),e.entries()))n.set(r,oM(a,t));else if(e instanceof Set)for(let r of(n=new Set,t.set(e,n),e))n.add(oM(r,t));else if(e instanceof Object)for(let[r,a]of(n={},t.set(e,n),Object.entries(e)))n[r]=oM(a,t);else throw Error(`Unable to clone ${e}`);return n}function oD(e,t){var n;if(!(null!=(n=e.inner)&&n.length)&&e.errors.length){let n;return n=t?`${t}.${e.path}`:e.path,e.errors.map(e=>({message:e,path:function(e){if(!(null!=e&&e.length))return;let t=[],n="",r=!1,a=!1;for(let o=0;o<e.length;o++){let i=e[o];if("["===i&&!a){n&&(t.push(...n.split(".").filter(Boolean)),n=""),r=!0;continue}if("]"===i&&!a){n&&(/^\d+$/.test(n)?t.push(n):t.push(n.replace(/^"|"$/g,"")),n=""),r=!1;continue}if('"'===i){a=!a;continue}if("."===i&&!r&&!a){n&&(t.push(n),n="");continue}n+=i}return n&&t.push(...n.split(".").filter(Boolean)),t}(n)}))}let r=t?`${t}.${e.path}`:e.path;return e.inner.flatMap(e=>oD(e,r))}class oR{constructor(e){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new oN,this._blacklist=new oN,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(ok.notType)}),this.type=e.type,this._typeCheck=e.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},null==e?void 0:e.spec),this.withMutation(e=>{e.nonNullable()})}get _type(){return this.type}clone(e){if(this._mutate)return e&&Object.assign(this.spec,e),this;let t=Object.create(Object.getPrototypeOf(this));return t.type=this.type,t._typeCheck=this._typeCheck,t._whitelist=this._whitelist.clone(),t._blacklist=this._blacklist.clone(),t.internalTests=Object.assign({},this.internalTests),t.exclusiveTests=Object.assign({},this.exclusiveTests),t.deps=[...this.deps],t.conditions=[...this.conditions],t.tests=[...this.tests],t.transforms=[...this.transforms],t.spec=oM(Object.assign({},this.spec,e)),t}label(e){let t=this.clone();return t.spec.label=e,t}meta(...e){if(0===e.length)return this.spec.meta;let t=this.clone();return t.spec.meta=Object.assign(t.spec.meta||{},e[0]),t}withMutation(e){let t=this._mutate;this._mutate=!0;let n=e(this);return this._mutate=t,n}concat(e){if(!e||e===this)return this;if(e.type!==this.type&&"mixed"!==this.type)throw TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${e.type}`);let t=e.clone(),n=Object.assign({},this.spec,t.spec);return t.spec=n,t.internalTests=Object.assign({},this.internalTests,t.internalTests),t._whitelist=this._whitelist.merge(e._whitelist,e._blacklist),t._blacklist=this._blacklist.merge(e._blacklist,e._whitelist),t.tests=this.tests,t.exclusiveTests=this.exclusiveTests,t.withMutation(t=>{e.tests.forEach(e=>{t.test(e.OPTIONS)})}),t.transforms=[...this.transforms,...t.transforms],t}isType(e){return null==e?!!this.spec.nullable&&null===e||!!this.spec.optional&&void 0===e:this._typeCheck(e)}resolve(e){let t=this;if(t.conditions.length){let n=t.conditions;(t=t.clone()).conditions=[],t=(t=n.reduce((t,n)=>n.resolve(t,e),t)).resolve(e)}return t}resolveOptions(e){var t,n,r,a;return Object.assign({},e,{from:e.from||[],strict:null!=(t=e.strict)?t:this.spec.strict,abortEarly:null!=(n=e.abortEarly)?n:this.spec.abortEarly,recursive:null!=(r=e.recursive)?r:this.spec.recursive,disableStackTrace:null!=(a=e.disableStackTrace)?a:this.spec.disableStackTrace})}cast(e,t={}){let n=this.resolve(Object.assign({},t,{value:e})),r="ignore-optionality"===t.assert,a=n._cast(e,t);if(!1!==t.assert&&!n.isType(a)){if(r&&null==a)return a;let o=ob(e),i=ob(a);throw TypeError(`The value of ${t.path||"field"} could not be cast to a value that satisfies the schema type: "${n.type}". 

attempted value: ${o} 
`+(i!==o?`result of cast: ${i}`:""))}return a}_cast(e,t){let n=void 0===e?e:this.transforms.reduce((n,r)=>r.call(this,n,e,this,t),e);return void 0===n&&(n=this.getDefault(t)),n}_validate(e,t={},n,r){let{path:a,originalValue:o=e,strict:i=this.spec.strict}=t,s=e;i||(s=this._cast(s,Object.assign({assert:!1},t)));let l=[];for(let e of Object.values(this.internalTests))e&&l.push(e);this.runTests({path:a,value:s,originalValue:o,options:t,tests:l},n,e=>{if(e.length)return r(e,s);this.runTests({path:a,value:s,originalValue:o,options:t,tests:this.tests},n,r)})}runTests(e,t,n){let r=!1,{tests:a,value:o,originalValue:i,path:s,options:l}=e,c=e=>{r||(r=!0,t(e,o))},d=e=>{r||(r=!0,n(e,o))},u=a.length,p=[];if(!u)return d([]);let h={value:o,originalValue:i,path:s,options:l,schema:this};for(let e=0;e<a.length;e++)(0,a[e])(h,c,function(e){e&&(Array.isArray(e)?p.push(...e):p.push(e)),--u<=0&&d(p)})}asNestedTest({key:e,index:t,parent:n,parentPath:r,originalParent:a,options:o}){let i=null!=e?e:t;if(null==i)throw TypeError("Must include `key` or `index` for nested validations");let s="number"==typeof i,l=n[i],c=Object.assign({},o,{strict:!0,parent:n,value:l,originalValue:a[i],key:void 0,[s?"index":"key"]:i,path:s||i.includes(".")?`${r||""}[${s?i:`"${i}"`}]`:(r?`${r}.`:"")+e});return(e,t,n)=>this.resolve(c)._validate(l,c,t,n)}validate(e,t){var n;let r=this.resolve(Object.assign({},t,{value:e})),a=null!=(n=null==t?void 0:t.disableStackTrace)?n:r.spec.disableStackTrace;return new Promise((n,o)=>r._validate(e,t,(e,t)=>{ow.isError(e)&&(e.value=t),o(e)},(e,t)=>{e.length?o(new ow(e,t,void 0,void 0,a)):n(t)}))}validateSync(e,t){var n;let r,a=this.resolve(Object.assign({},t,{value:e})),o=null!=(n=null==t?void 0:t.disableStackTrace)?n:a.spec.disableStackTrace;return a._validate(e,Object.assign({},t,{sync:!0}),(e,t)=>{throw ow.isError(e)&&(e.value=t),e},(t,n)=>{if(t.length)throw new ow(t,e,void 0,void 0,o);r=n}),r}isValid(e,t){return this.validate(e,t).then(()=>!0,e=>{if(ow.isError(e))return!1;throw e})}isValidSync(e,t){try{return this.validateSync(e,t),!0}catch(e){if(ow.isError(e))return!1;throw e}}_getDefault(e){let t=this.spec.default;return null==t?t:"function"==typeof t?t.call(this,e):oM(t)}getDefault(e){return this.resolve(e||{})._getDefault(e)}default(e){return 0==arguments.length?this._getDefault():this.clone({default:e})}strict(e=!0){return this.clone({strict:e})}nullability(e,t){let n=this.clone({nullable:e});return n.internalTests.nullable=oA({message:t,name:"nullable",test(e){return null!==e||this.schema.spec.nullable}}),n}optionality(e,t){let n=this.clone({optional:e});return n.internalTests.optionality=oA({message:t,name:"optionality",test(e){return void 0!==e||this.schema.spec.optional}}),n}optional(){return this.optionality(!0)}defined(e=ok.defined){return this.optionality(!1,e)}nullable(){return this.nullability(!0)}nonNullable(e=ok.notNull){return this.nullability(!1,e)}required(e=ok.required){return this.clone().withMutation(t=>t.nonNullable(e).defined(e))}notRequired(){return this.clone().withMutation(e=>e.nullable().optional())}transform(e){let t=this.clone();return t.transforms.push(e),t}test(...e){let t;if(void 0===(t=1===e.length?"function"==typeof e[0]?{test:e[0]}:e[0]:2===e.length?{name:e[0],test:e[1]}:{name:e[0],message:e[1],test:e[2]}).message&&(t.message=ok.default),"function"!=typeof t.test)throw TypeError("`test` is a required parameters");let n=this.clone(),r=oA(t),a=t.exclusive||t.name&&!0===n.exclusiveTests[t.name];if(t.exclusive&&!t.name)throw TypeError("Exclusive tests must provide a unique `name` identifying the test");return t.name&&(n.exclusiveTests[t.name]=!!t.exclusive),n.tests=n.tests.filter(e=>(e.OPTIONS.name!==t.name||!a&&e.OPTIONS.test!==r.OPTIONS.test)&&!0),n.tests.push(r),n}when(e,t){Array.isArray(e)||"string"==typeof e||(t=e,e=".");let n=this.clone(),r=oy(e).map(e=>new oz(e));return r.forEach(e=>{e.isSibling&&n.deps.push(e.key)}),n.conditions.push("function"==typeof t?new oT(r,t):oT.fromOptions(r,t)),n}typeError(e){let t=this.clone();return t.internalTests.typeError=oA({message:e,name:"typeError",skipAbsent:!0,test(e){return!!this.schema._typeCheck(e)||this.createError({params:{type:this.schema.type}})}}),t}oneOf(e,t=ok.oneOf){let n=this.clone();return e.forEach(e=>{n._whitelist.add(e),n._blacklist.delete(e)}),n.internalTests.whiteList=oA({message:t,name:"oneOf",skipAbsent:!0,test(e){let t=this.schema._whitelist,n=t.resolveAll(this.resolve);return!!n.includes(e)||this.createError({params:{values:Array.from(t).join(", "),resolved:n}})}}),n}notOneOf(e,t=ok.notOneOf){let n=this.clone();return e.forEach(e=>{n._blacklist.add(e),n._whitelist.delete(e)}),n.internalTests.blacklist=oA({message:t,name:"notOneOf",test(e){let t=this.schema._blacklist,n=t.resolveAll(this.resolve);return!n.includes(e)||this.createError({params:{values:Array.from(t).join(", "),resolved:n}})}}),n}strip(e=!0){let t=this.clone();return t.spec.strip=e,t}describe(e){let t=(e?this.resolve(e):this).clone(),{label:n,meta:r,optional:a,nullable:o}=t.spec;return{meta:r,label:n,optional:a,nullable:o,default:t.getDefault(e),type:t.type,oneOf:t._whitelist.describe(),notOneOf:t._blacklist.describe(),tests:t.tests.filter((e,t,n)=>n.findIndex(t=>t.OPTIONS.name===e.OPTIONS.name)===t).map(t=>{let n=t.OPTIONS.params&&e?oF(Object.assign({},t.OPTIONS.params),e):t.OPTIONS.params;return{name:t.OPTIONS.name,params:n}})}}get"~standard"(){let e=this;return{version:1,vendor:"yup",async validate(t){try{return{value:await e.validate(t,{abortEarly:!1})}}catch(e){if(e instanceof ow)return{issues:oD(e)};throw e}}}}}for(let e of(oR.prototype.__isYupSchema__=!0,["validate","validateSync"]))oR.prototype[`${e}At`]=function(t,n,r={}){let{parent:a,parentPath:o,schema:i}=function(e,t,n,r=n){let a,o,i;return t?((0,ol.forEach)(t,(s,l,c)=>{let d=l?s.slice(1,s.length-1):s,u="tuple"===(e=e.resolve({context:r,parent:a,value:n})).type,p=c?parseInt(d,10):0;if(e.innerType||u){if(u&&!c)throw Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${i}" must contain an index to the tuple element, e.g. "${i}[0]"`);if(n&&p>=n.length)throw Error(`Yup.reach cannot resolve an array item at index: ${s}, in the path: ${t}. because there is no value at that index. `);a=n,n=n&&n[p],e=u?e.spec.types[p]:e.innerType}if(!c){if(!e.fields||!e.fields[d])throw Error(`The schema does not contain the path: ${t}. (failed at: ${i} which is a type: "${e.type}")`);a=n,n=n&&n[d],e=e.fields[d]}o=d,i=l?"["+s+"]":"."+s}),{schema:e,parent:a,parentPath:o}):{parent:a,parentPath:t,schema:e}}(this,t,n,r.context);return i[e](a&&a[o],Object.assign({},r,{parent:a,path:t}))};for(let e of["equals","is"])oR.prototype[e]=oR.prototype.oneOf;for(let e of["not","nope"])oR.prototype[e]=oR.prototype.notOneOf;let oB=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function oL(e){var t,n;let r=oB.exec(e);return r?{year:oH(r[1]),month:oH(r[2],1)-1,day:oH(r[3],1),hour:oH(r[4]),minute:oH(r[5]),second:oH(r[6]),millisecond:r[7]?oH(r[7].substring(0,3)):0,precision:null!=(t=null==(n=r[7])?void 0:n.length)?t:void 0,z:r[8]||void 0,plusMinus:r[9]||void 0,hourOffset:oH(r[10]),minuteOffset:oH(r[11])}:null}function oH(e,t=0){return Number(e)||t}let oV=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,oU=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,oW=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,oq=RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"),oG=e=>null==e||e===e.trim(),oX=({}).toString();function oY(){return new oZ}class oZ extends oR{constructor(){super({type:"string",check:e=>(e instanceof String&&(e=e.valueOf()),"string"==typeof e)}),this.withMutation(()=>{this.transform((e,t)=>{if(!this.spec.coerce||this.isType(e)||Array.isArray(e))return e;let n=null!=e&&e.toString?e.toString():e;return n===oX?e:n})})}required(e){return super.required(e).withMutation(t=>t.test({message:e||ok.required,name:"required",skipAbsent:!0,test:e=>!!e.length}))}notRequired(){return super.notRequired().withMutation(e=>(e.tests=e.tests.filter(e=>"required"!==e.OPTIONS.name),e))}length(e,t=oj.length){return this.test({message:t,name:"length",exclusive:!0,params:{length:e},skipAbsent:!0,test(t){return t.length===this.resolve(e)}})}min(e,t=oj.min){return this.test({message:t,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(t){return t.length>=this.resolve(e)}})}max(e,t=oj.max){return this.test({name:"max",exclusive:!0,message:t,params:{max:e},skipAbsent:!0,test(t){return t.length<=this.resolve(e)}})}matches(e,t){let n,r,a=!1;return t&&("object"==typeof t?{excludeEmptyString:a=!1,message:n,name:r}=t:n=t),this.test({name:r||"matches",message:n||oj.matches,params:{regex:e},skipAbsent:!0,test:t=>""===t&&a||-1!==t.search(e)})}email(e=oj.email){return this.matches(oV,{name:"email",message:e,excludeEmptyString:!0})}url(e=oj.url){return this.matches(oU,{name:"url",message:e,excludeEmptyString:!0})}uuid(e=oj.uuid){return this.matches(oW,{name:"uuid",message:e,excludeEmptyString:!1})}datetime(e){let t,n,r="";return e&&("object"==typeof e?{message:r="",allowOffset:t=!1,precision:n}=e:r=e),this.matches(oq,{name:"datetime",message:r||oj.datetime,excludeEmptyString:!0}).test({name:"datetime_offset",message:r||oj.datetime_offset,params:{allowOffset:t},skipAbsent:!0,test:e=>{if(!e||t)return!0;let n=oL(e);return!!n&&!!n.z}}).test({name:"datetime_precision",message:r||oj.datetime_precision,params:{precision:n},skipAbsent:!0,test:e=>{if(!e||void 0==n)return!0;let t=oL(e);return!!t&&t.precision===n}})}ensure(){return this.default("").transform(e=>null===e?"":e)}trim(e=oj.trim){return this.transform(e=>null!=e?e.trim():e).test({message:e,name:"trim",test:oG})}lowercase(e=oj.lowercase){return this.transform(e=>null==e?e:e.toLowerCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:e=>null==e||e===e.toLowerCase()})}uppercase(e=oj.uppercase){return this.transform(e=>null==e?e:e.toUpperCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:e=>null==e||e===e.toUpperCase()})}}oY.prototype=oZ.prototype;let oJ=new Date("");function oK(){return new oQ}class oQ extends oR{constructor(){super({type:"date",check:e=>"[object Date]"===Object.prototype.toString.call(e)&&!isNaN(e.getTime())}),this.withMutation(()=>{this.transform((e,t)=>!this.spec.coerce||this.isType(e)||null===e?e:isNaN(e=function(e){let t=oL(e);if(!t)return Date.parse?Date.parse(e):NaN;if(void 0===t.z&&void 0===t.plusMinus)return new Date(t.year,t.month,t.day,t.hour,t.minute,t.second,t.millisecond).valueOf();let n=0;return"Z"!==t.z&&void 0!==t.plusMinus&&(n=60*t.hourOffset+t.minuteOffset,"+"===t.plusMinus&&(n=0-n)),Date.UTC(t.year,t.month,t.day,t.hour,t.minute+n,t.second,t.millisecond)}(e))?oQ.INVALID_DATE:new Date(e))})}prepareParam(e,t){let n;if(oz.isRef(e))n=e;else{let r=this.cast(e);if(!this._typeCheck(r))throw TypeError(`\`${t}\` must be a Date or a value that can be \`cast()\` to a Date`);n=r}return n}min(e,t=o$.min){let n=this.prepareParam(e,"min");return this.test({message:t,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(e){return e>=this.resolve(n)}})}max(e,t=o$.max){let n=this.prepareParam(e,"max");return this.test({message:t,name:"max",exclusive:!0,params:{max:e},skipAbsent:!0,test(e){return e<=this.resolve(n)}})}}function o0(e,t){let n=1/0;return e.some((e,r)=>{var a;if(null!=(a=t.path)&&a.includes(e))return n=r,!0}),n}function o1(e){return(t,n)=>o0(e,t)-o0(e,n)}oQ.INVALID_DATE=oJ,oK.prototype=oQ.prototype,oK.INVALID_DATE=oJ;let o2=(e,t,n)=>{if("string"!=typeof e)return e;let r=e;try{r=JSON.parse(e)}catch(e){}return n.isType(r)?r:e},o5=e=>"[object Object]"===Object.prototype.toString.call(e);function o4(e,t){let n=Object.keys(e.fields);return Object.keys(t).filter(e=>-1===n.indexOf(e))}let o3=o1([]);function o6(e){return new o8(e)}class o8 extends oR{constructor(e){super({type:"object",check:e=>o5(e)||"function"==typeof e}),this.fields=Object.create(null),this._sortErrors=o3,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{e&&this.shape(e)})}_cast(e,t={}){var n;let r=super._cast(e,t);if(void 0===r)return this.getDefault(t);if(!this._typeCheck(r))return r;let a=this.fields,o=null!=(n=t.stripUnknown)?n:this.spec.noUnknown,i=[].concat(this._nodes,Object.keys(r).filter(e=>!this._nodes.includes(e))),s={},l=Object.assign({},t,{parent:s,__validating:t.__validating||!1}),c=!1;for(let e of i){let n=a[e],i=e in r,d=r[e];if(n){let a;l.path=(t.path?`${t.path}.`:"")+e;let o=(n=n.resolve({value:d,context:t.context,parent:s}))instanceof oR?n.spec:void 0,i=null==o?void 0:o.strict;if(null!=o&&o.strip){c=c||e in r;continue}void 0!==(a=t.__validating&&i?d:n.cast(d,l))&&(s[e]=a)}else i&&!o&&(s[e]=d);(i!==e in s||s[e]!==d)&&(c=!0)}return c?s:r}_validate(e,t={},n,r){let{from:a=[],originalValue:o=e,recursive:i=this.spec.recursive}=t;t.from=[{schema:this,value:o},...a],t.__validating=!0,t.originalValue=o,super._validate(e,t,n,(e,a)=>{if(!i||!o5(a))return void r(e,a);o=o||a;let s=[];for(let e of this._nodes){let n=this.fields[e];!n||oz.isRef(n)||s.push(n.asNestedTest({options:t,key:e,parent:a,parentPath:t.path,originalParent:o}))}this.runTests({tests:s,value:a,originalValue:o,options:t},n,t=>{r(t.sort(this._sortErrors).concat(e),a)})})}clone(e){let t=super.clone(e);return t.fields=Object.assign({},this.fields),t._nodes=this._nodes,t._excludedEdges=this._excludedEdges,t._sortErrors=this._sortErrors,t}concat(e){let t=super.concat(e),n=t.fields;for(let[e,t]of Object.entries(this.fields)){let r=n[e];n[e]=void 0===r?t:r}return t.withMutation(t=>t.setFields(n,[...this._excludedEdges,...e._excludedEdges]))}_getDefault(e){if("default"in this.spec)return super._getDefault(e);if(!this._nodes.length)return;let t={};return this._nodes.forEach(n=>{var r;let a=this.fields[n],o=e;null!=(r=o)&&r.value&&(o=Object.assign({},o,{parent:o.value,value:o.value[n]})),t[n]=a&&"getDefault"in a?a.getDefault(o):void 0}),t}setFields(e,t){let n=this.clone();return n.fields=e,n._nodes=function(e,t=[]){let n=[],r=new Set,a=new Set(t.map(([e,t])=>`${e}-${t}`));function o(e,t){let o=(0,ol.split)(e)[0];r.add(o),a.has(`${t}-${o}`)||n.push([t,o])}for(let t of Object.keys(e)){let n=e[t];r.add(t),oz.isRef(n)&&n.isSibling?o(n.path,t):oP(n)&&"deps"in n&&n.deps.forEach(e=>o(e,t))}return od.default.array(Array.from(r),n).reverse()}(e,t),n._sortErrors=o1(Object.keys(e)),t&&(n._excludedEdges=t),n}shape(e,t=[]){return this.clone().withMutation(n=>{let r=n._excludedEdges;return t.length&&(Array.isArray(t[0])||(t=[t]),r=[...n._excludedEdges,...t]),n.setFields(Object.assign(n.fields,e),r)})}partial(){let e={};for(let[t,n]of Object.entries(this.fields))e[t]="optional"in n&&n.optional instanceof Function?n.optional():n;return this.setFields(e)}deepPartial(){return function e(t){if("fields"in t){let n={};for(let[r,a]of Object.entries(t.fields))n[r]=e(a);return t.setFields(n)}if("array"===t.type){let n=t.optional();return n.innerType&&(n.innerType=e(n.innerType)),n}return"tuple"===t.type?t.optional().clone({types:t.spec.types.map(e)}):"optional"in t?t.optional():t}(this)}pick(e){let t={};for(let n of e)this.fields[n]&&(t[n]=this.fields[n]);return this.setFields(t,this._excludedEdges.filter(([t,n])=>e.includes(t)&&e.includes(n)))}omit(e){let t=[];for(let n of Object.keys(this.fields))e.includes(n)||t.push(n);return this.pick(t)}from(e,t,n){let r=(0,ol.getter)(e,!0);return this.transform(a=>{if(!a)return a;let o=a;return((e,t)=>{let n=[...(0,ol.normalizePath)(t)];if(1===n.length)return n[0]in e;let r=n.pop(),a=(0,ol.getter)((0,ol.join)(n),!0)(e);return!!(a&&r in a)})(a,e)&&(o=Object.assign({},a),n||delete o[e],o[t]=r(a)),o})}json(){return this.transform(o2)}exact(e){return this.test({name:"exact",exclusive:!0,message:e||oO.exact,test(e){if(null==e)return!0;let t=o4(this.schema,e);return 0===t.length||this.createError({params:{properties:t.join(", ")}})}})}stripUnknown(){return this.clone({noUnknown:!0})}noUnknown(e=!0,t=oO.noUnknown){"boolean"!=typeof e&&(t=e,e=!0);let n=this.test({name:"noUnknown",exclusive:!0,message:t,test(t){if(null==t)return!0;let n=o4(this.schema,t);return!e||0===n.length||this.createError({params:{unknown:n.join(", ")}})}});return n.spec.noUnknown=e,n}unknown(e=!0,t=oO.noUnknown){return this.noUnknown(!e,t)}transformKeys(e){return this.transform(t=>{if(!t)return t;let n={};for(let r of Object.keys(t))n[e(r)]=t[r];return n})}camelCase(){return this.transformKeys(oc.camelCase)}snakeCase(){return this.transformKeys(oc.snakeCase)}constantCase(){return this.transformKeys(e=>(0,oc.snakeCase)(e).toUpperCase())}describe(e){let t=(e?this.resolve(e):this).clone(),n=super.describe(e);for(let[a,o]of(n.fields={},Object.entries(t.fields))){var r;let t=e;null!=(r=t)&&r.value&&(t=Object.assign({},t,{parent:t.value,value:t.value[a]})),n.fields[a]=o.describe(t)}return n}}o6.prototype=o8.prototype;let o7={name:"",email:"",message:""},o9=o6({name:oY().required("Name is required").min(2,"Name must be at least 2 characters").max(200,"Name must be less than 200 characters").trim(),email:oY().required("Email is required").email("Please provide a valid email address").max(200,"Email must be less than 200 characters").trim(),message:oY().required("Message is required").min(10,"Message must be at least 10 characters").max(5e3,"Message must be less than 5000 characters").trim()}),ie=Q.default.form.withConfig({displayName:"ContactForm.styles__ContactFormWrapper",componentId:"sc-f17c1543-0"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.lg};
  width: 100%;
  max-width: 800px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`,it=Q.default.div.withConfig({displayName:"ContactForm.styles__FormActions",componentId:"sc-f17c1543-1"})`
  display: flex;
  justify-content: flex-start;
  margin-top: ${({theme:e})=>e.spacing.sm};
`,ir=Q.default.button.withConfig({displayName:"ContactForm.styles__SendButton",componentId:"sc-f17c1543-2"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyBody};
  background-color: ${({theme:e})=>e.colors.bgTertiary};
  color: ${({theme:e})=>e.colors.textPrimary};
  border: 1px solid ${({theme:e})=>e.colors.border};
  padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.lg};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  transition: all ${({theme:e})=>e.transitions.base};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.xs};

  &:hover:not(:disabled) {
    background-color: ${({theme:e})=>e.colors.textSecondary};
    color: ${({theme:e})=>e.colors.bgPrimary};
    border-color: ${({theme:e})=>e.colors.textSecondary};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,ia=()=>{var e,t,n,r,a,o,i,c,d,u,p,h,f,m,g,b,y,x,v,w,k,j,_,$,S,O,C,E,P,T,z,A,F,I,N,M,D,R,B,L,H,V,U,W,q,G,X,Y,Z,J,K,Q,ee,et,en,er;let ea,{formik:eo,isSubmitting:ei}=(n=void 0===(t=(e={initialValues:o7,validationSchema:o9,onSubmit:async(e,{setSubmitting:t,resetForm:n})=>{try{let t=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),r=await t.json();if(!t.ok||!r.success)throw Error(r.message||"Failed to send message");os.default.success("Message sent successfully! Message received. I'll get back to you shortly."),n()}catch(t){let e=t instanceof Error?t.message:"Failed to send message. Please try again later.";os.default.error(`Failed to send message: ${e}`)}finally{t(!1)}}}).validateOnChange)||t,a=void 0===(r=e.validateOnBlur)||r,i=void 0!==(o=e.validateOnMount)&&o,c=e.isInitialValid,u=void 0!==(d=e.enableReinitialize)&&d,p=e.onSubmit,h=aZ(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),f=aY({validateOnChange:n,validateOnBlur:a,validateOnMount:i,onSubmit:p},h),m=(0,l.useRef)(f.initialValues),g=(0,l.useRef)(f.initialErrors||a6),b=(0,l.useRef)(f.initialTouched||a8),y=(0,l.useRef)(f.initialStatus),x=(0,l.useRef)(!1),v=(0,l.useRef)({}),(0,l.useEffect)(function(){return x.current=!0,function(){x.current=!1}},[]),w=(0,l.useState)(0)[1],j=(k=(0,l.useRef)({values:az(f.initialValues),errors:az(f.initialErrors)||a6,touched:az(f.initialTouched)||a8,status:az(f.initialStatus),isSubmitting:!1,isValidating:!1,submitCount:0})).current,_=(0,l.useCallback)(function(e){var t=k.current;k.current=function(e,t){switch(t.type){case"SET_VALUES":return aY({},e,{values:t.payload});case"SET_TOUCHED":return aY({},e,{touched:t.payload});case"SET_ERRORS":if((0,aA.default)(e.errors,t.payload))return e;return aY({},e,{errors:t.payload});case"SET_STATUS":return aY({},e,{status:t.payload});case"SET_ISSUBMITTING":return aY({},e,{isSubmitting:t.payload});case"SET_ISVALIDATING":return aY({},e,{isValidating:t.payload});case"SET_FIELD_VALUE":return aY({},e,{values:a3(e.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return aY({},e,{touched:a3(e.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return aY({},e,{errors:a3(e.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return aY({},e,t.payload);case"SET_FORMIK_STATE":return t.payload(e);case"SUBMIT_ATTEMPT":return aY({},e,{touched:function e(t,n,r,a){void 0===r&&(r=new WeakMap),void 0===a&&(a={});for(var o=0,i=Object.keys(t);o<i.length;o++){var s=i[o],l=t[s];a1(l)?r.get(l)||(r.set(l,!0),a[s]=Array.isArray(l)?[]:{},e(l,n,r,a[s])):a[s]=n}return a}(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":case"SUBMIT_SUCCESS":return aY({},e,{isSubmitting:!1});default:return e}}(t,e),t!==k.current&&w(function(e){return e+1})},[]),$=(0,l.useCallback)(function(e,t){return new Promise(function(n,r){var a=f.validate(e,t);null==a?n(a6):a5(a)?a.then(function(e){n(e||a6)},function(e){r(e)}):n(a)})},[f.validate]),S=(0,l.useCallback)(function(e,t){var n,r,a,o,i=f.validationSchema,s=a0(i)?i(t):i,l=t&&s.validateAt?s.validateAt(t,e):(n=e,r=s,void 0===a&&(a=!1),o=function e(t){var n=Array.isArray(t)?[]:{};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var a=String(r);!0===Array.isArray(t[a])?n[a]=t[a].map(function(t){return!0===Array.isArray(t)||nX(t)?e(t):""!==t?t:void 0}):nX(t[a])?n[a]=e(t[a]):n[a]=""!==t[a]?t[a]:void 0}return n}(n),r[a?"validateSync":"validate"](o,{abortEarly:!1,context:o}));return new Promise(function(e,t){l.then(function(){e(a6)},function(n){"ValidationError"===n.name?e(function(e){var t={};if(e.inner){if(0===e.inner.length)return a3(t,e.path,e.message);for(var n=e.inner,r=Array.isArray(n),a=0,n=r?n:n[Symbol.iterator]();;){if(r){if(a>=n.length)break;o=n[a++]}else{if((a=n.next()).done)break;o=a.value}var o,i=o;a4(t,i.path)||(t=a3(t,i.path,i.message))}}return t}(n)):t(n)})})},[f.validationSchema]),O=(0,l.useCallback)(function(e,t){return new Promise(function(n){return n(v.current[e].validate(t))})},[]),C=(0,l.useCallback)(function(e){var t=Object.keys(v.current).filter(function(e){return a0(v.current[e].validate)});return Promise.all(t.length>0?t.map(function(t){return O(t,a4(e,t))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")]).then(function(e){return e.reduce(function(e,n,r){return"DO_NOT_DELETE_YOU_WILL_BE_FIRED"===n||n&&(e=a3(e,t[r],n)),e},{})})},[O]),E=(0,l.useCallback)(function(e){return Promise.all([C(e),f.validationSchema?S(e):{},f.validate?$(e):{}]).then(function(e){var t=e[0],n=e[1],r=e[2];return nC.all([t,n,r],{arrayMerge:a7})})},[f.validate,f.validationSchema,C,$,S]),P=oe(function(e){return void 0===e&&(e=j.values),_({type:"SET_ISVALIDATING",payload:!0}),E(e).then(function(e){return x.current&&(_({type:"SET_ISVALIDATING",payload:!1}),_({type:"SET_ERRORS",payload:e})),e})}),(0,l.useEffect)(function(){i&&!0===x.current&&(0,aA.default)(m.current,f.initialValues)&&P(m.current)},[i,P]),T=(0,l.useCallback)(function(e){var t=e&&e.values?e.values:m.current,n=e&&e.errors?e.errors:g.current?g.current:f.initialErrors||{},r=e&&e.touched?e.touched:b.current?b.current:f.initialTouched||{},a=e&&e.status?e.status:y.current?y.current:f.initialStatus;m.current=t,g.current=n,b.current=r,y.current=a;var o=function(){_({type:"RESET_FORM",payload:{isSubmitting:!!e&&!!e.isSubmitting,errors:n,touched:r,status:a,values:t,isValidating:!!e&&!!e.isValidating,submitCount:e&&e.submitCount&&"number"==typeof e.submitCount?e.submitCount:0}})};if(f.onReset){var i=f.onReset(j.values,Z);a5(i)?i.then(o):o()}else o()},[f.initialErrors,f.initialStatus,f.initialTouched,f.onReset]),(0,l.useEffect)(function(){!0===x.current&&!(0,aA.default)(m.current,f.initialValues)&&u&&(m.current=f.initialValues,T(),i&&P(m.current))},[u,f.initialValues,T,i,P]),(0,l.useEffect)(function(){u&&!0===x.current&&!(0,aA.default)(g.current,f.initialErrors)&&(g.current=f.initialErrors||a6,_({type:"SET_ERRORS",payload:f.initialErrors||a6}))},[u,f.initialErrors]),(0,l.useEffect)(function(){u&&!0===x.current&&!(0,aA.default)(b.current,f.initialTouched)&&(b.current=f.initialTouched||a8,_({type:"SET_TOUCHED",payload:f.initialTouched||a8}))},[u,f.initialTouched]),(0,l.useEffect)(function(){u&&!0===x.current&&!(0,aA.default)(y.current,f.initialStatus)&&(y.current=f.initialStatus,_({type:"SET_STATUS",payload:f.initialStatus}))},[u,f.initialStatus,f.initialTouched]),z=oe(function(e){if(v.current[e]&&a0(v.current[e].validate)){var t=a4(j.values,e),n=v.current[e].validate(t);return a5(n)?(_({type:"SET_ISVALIDATING",payload:!0}),n.then(function(e){return e}).then(function(t){_({type:"SET_FIELD_ERROR",payload:{field:e,value:t}}),_({type:"SET_ISVALIDATING",payload:!1})})):(_({type:"SET_FIELD_ERROR",payload:{field:e,value:n}}),Promise.resolve(n))}return f.validationSchema?(_({type:"SET_ISVALIDATING",payload:!0}),S(j.values,e).then(function(e){return e}).then(function(t){_({type:"SET_FIELD_ERROR",payload:{field:e,value:a4(t,e)}}),_({type:"SET_ISVALIDATING",payload:!1})})):Promise.resolve()}),A=(0,l.useCallback)(function(e,t){var n=t.validate;v.current[e]={validate:n}},[]),F=(0,l.useCallback)(function(e){delete v.current[e]},[]),I=oe(function(e,t){return _({type:"SET_TOUCHED",payload:e}),(void 0===t?a:t)?P(j.values):Promise.resolve()}),N=(0,l.useCallback)(function(e){_({type:"SET_ERRORS",payload:e})},[]),M=oe(function(e,t){var r=a0(e)?e(j.values):e;return _({type:"SET_VALUES",payload:r}),(void 0===t?n:t)?P(r):Promise.resolve()}),D=(0,l.useCallback)(function(e,t){_({type:"SET_FIELD_ERROR",payload:{field:e,value:t}})},[]),R=oe(function(e,t,r){var a=a0(t)?t(a4(j.values,e)):t;return _({type:"SET_FIELD_VALUE",payload:{field:e,value:a}}),(void 0===r?n:r)?P(a3(j.values,e,a)):Promise.resolve()}),B=(0,l.useCallback)(function(e,t){var n,r=t,a=e;if(!a2(e)){e.persist&&e.persist();var o=e.target?e.target:e.currentTarget,i=o.type,s=o.name,l=o.id,c=o.value,d=o.checked,u=(o.outerHTML,o.options),p=o.multiple;r=t||s||l,a=/number|range/.test(i)?isNaN(n=parseFloat(c))?"":n:/checkbox/.test(i)?function(e,t,n){if("boolean"==typeof e)return!!t;var r=[],a=!1,o=-1;if(Array.isArray(e))r=e,a=(o=e.indexOf(n))>=0;else if(!n||"true"==n||"false"==n)return!!t;return t&&n&&!a?r.concat(n):a?r.slice(0,o).concat(r.slice(o+1)):r}(a4(j.values,r),d,c):u&&p?Array.from(u).filter(function(e){return e.selected}).map(function(e){return e.value}):c}r&&R(r,a)},[R,j.values]),L=oe(function(e){if(a2(e))return function(t){return B(t,e)};B(e)}),H=oe(function(e,t,n){return void 0===t&&(t=!0),_({type:"SET_FIELD_TOUCHED",payload:{field:e,value:t}}),(void 0===n?a:n)?P(j.values):Promise.resolve()}),V=(0,l.useCallback)(function(e,t){e.persist&&e.persist();var n=e.target,r=n.name,a=n.id;n.outerHTML,H(t||r||a,!0)},[H]),U=oe(function(e){if(a2(e))return function(t){return V(t,e)};V(e)}),W=(0,l.useCallback)(function(e){a0(e)?_({type:"SET_FORMIK_STATE",payload:e}):_({type:"SET_FORMIK_STATE",payload:function(){return e}})},[]),q=(0,l.useCallback)(function(e){_({type:"SET_STATUS",payload:e})},[]),G=(0,l.useCallback)(function(e){_({type:"SET_ISSUBMITTING",payload:e})},[]),X=oe(function(){return _({type:"SUBMIT_ATTEMPT"}),P().then(function(e){var t,n=e instanceof Error;if(!n&&0===Object.keys(e).length){try{if(t=J(),void 0===t)return}catch(e){throw e}return Promise.resolve(t).then(function(e){return x.current&&_({type:"SUBMIT_SUCCESS"}),e}).catch(function(e){if(x.current)throw _({type:"SUBMIT_FAILURE"}),e})}if(x.current&&(_({type:"SUBMIT_FAILURE"}),n))throw e})}),Y=oe(function(e){e&&e.preventDefault&&a0(e.preventDefault)&&e.preventDefault(),e&&e.stopPropagation&&a0(e.stopPropagation)&&e.stopPropagation(),X().catch(function(e){console.warn("Warning: An unhandled error was caught from submitForm()",e)})}),Z={resetForm:T,validateForm:P,validateField:z,setErrors:N,setFieldError:D,setFieldTouched:H,setFieldValue:R,setStatus:q,setSubmitting:G,setTouched:I,setValues:M,setFormikState:W,submitForm:X},J=oe(function(){return p(j.values,Z)}),K=oe(function(e){e&&e.preventDefault&&a0(e.preventDefault)&&e.preventDefault(),e&&e.stopPropagation&&a0(e.stopPropagation)&&e.stopPropagation(),T()}),Q=(0,l.useCallback)(function(e){return{value:a4(j.values,e),error:a4(j.errors,e),touched:!!a4(j.touched,e),initialValue:a4(m.current,e),initialTouched:!!a4(b.current,e),initialError:a4(g.current,e)}},[j.errors,j.touched,j.values]),ee=(0,l.useCallback)(function(e){return{setValue:function(t,n){return R(e,t,n)},setTouched:function(t,n){return H(e,t,n)},setError:function(t){return D(e,t)}}},[R,H,D]),et=(0,l.useCallback)(function(e){var t=a1(e),n=t?e.name:e,r=a4(j.values,n),a={name:n,value:r,onChange:L,onBlur:U};if(t){var o=e.type,i=e.value,s=e.as,l=e.multiple;"checkbox"===o?void 0===i?a.checked=!!r:(a.checked=!!(Array.isArray(r)&&~r.indexOf(i)),a.value=i):"radio"===o?(a.checked=r===i,a.value=i):"select"===s&&l&&(a.value=a.value||[],a.multiple=!0)}return a},[U,L,j.values]),en=(0,l.useMemo)(function(){return!(0,aA.default)(m.current,j.values)},[m.current,j.values]),er=(0,l.useMemo)(function(){return void 0!==c?en?j.errors&&0===Object.keys(j.errors).length:!1!==c&&a0(c)?c(f):c:j.errors&&0===Object.keys(j.errors).length},[c,en,j.errors,f]),{formik:ea=aY({},j,{initialValues:m.current,initialErrors:g.current,initialTouched:b.current,initialStatus:y.current,handleBlur:U,handleChange:L,handleReset:K,handleSubmit:Y,resetForm:T,setErrors:N,setFormikState:W,setFieldTouched:H,setFieldValue:R,setFieldError:D,setStatus:q,setSubmitting:G,setTouched:I,setValues:M,submitForm:X,validateForm:P,validateField:z,isValid:er,dirty:en,unregisterField:F,registerField:A,getFieldProps:et,getFieldMeta:Q,getFieldHelpers:ee,validateOnBlur:a,validateOnChange:n,validateOnMount:i}),isSubmitting:ea.isSubmitting}),{values:es,errors:el,touched:ec,handleChange:ed,handleBlur:eu,handleSubmit:ep}=eo;return(0,s.jsxs)(ie,{onSubmit:ep,"data-aos":"fade-up","data-aos-delay":"300",children:[(0,s.jsx)(e9,{label:"NAME",name:"name",value:es.name,onChange:ed,onBlur:eu,error:ec.name&&el.name?el.name:void 0,placeholder:""}),(0,s.jsx)(e9,{label:"EMAIL",name:"email",type:"email",value:es.email,onChange:ed,onBlur:eu,error:ec.email&&el.email?el.email:void 0,placeholder:""}),(0,s.jsx)(te,{label:"MESSAGE",name:"message",value:es.message,onChange:ed,onBlur:eu,error:ec.message&&el.message?el.message:void 0,placeholder:""}),(0,s.jsx)(it,{children:(0,s.jsxs)(ir,{type:"submit",disabled:ei,children:[ei?"Sending...":"Send Message",(0,s.jsx)(nk,{size:16})]})})]})},io=Q.default.div.withConfig({displayName:"Contact.styles__StyledContact",componentId:"sc-8b48986e-0"})`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`,ii=Q.default.div.withConfig({displayName:"Contact.styles__ContactWrapper",componentId:"sc-8b48986e-1"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing["4xl"]};
  align-items: center;
  width: 100%;
`,is=Q.default.div.withConfig({displayName:"Contact.styles__ContactFormSection",componentId:"sc-8b48986e-2"})`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 800px;

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`,il=({sectionNumber:e="04",headline:t="Let's Build Something Together",description:n="Open to collaboration on research projects, open-source contributions, healthcare AI initiatives, or consulting opportunities."})=>(0,s.jsx)(ti,{id:"contact",children:(0,s.jsx)(ta,{children:(0,s.jsx)(io,{children:(0,s.jsxs)(ii,{children:[(0,s.jsx)(nw,{sectionNumber:e,headline:t,description:n}),(0,s.jsx)(is,{children:(0,s.jsx)(ia,{})})]})})})}),ic=Q.default.section.withConfig({displayName:"ReachOut.styles__StyledReachOut",componentId:"sc-82657052-0"})`
  position: relative;
  padding: ${({theme:e})=>e.spacing["4xl"]} 0;

  @media (max-width: 768px) {
    padding: ${({theme:e})=>e.spacing["3xl"]} 0;
  }
`,id=Q.default.div.withConfig({displayName:"ReachOut.styles__ReachOutContent",componentId:"sc-82657052-1"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing["3xl"]};
  position: relative;
`,iu=Q.default.div.withConfig({displayName:"ReachOut.styles__ReachOutHeaderWrapper",componentId:"sc-82657052-2"})`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.lg};
  width: 100%;

  @media (max-width: 1024px) {
    gap: ${({theme:e})=>e.spacing.md};
  }
`,ip=Q.default.div.withConfig({displayName:"ReachOut.styles__ReachOutLine",componentId:"sc-82657052-3"})`
  flex: 1;
  height: 1px;
  background-color: ${({theme:e})=>e.colors.border};
`,ih=Q.default.span.withConfig({displayName:"ReachOut.styles__ReachOutHeader",componentId:"sc-82657052-4"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyBody};
  text-align: center;
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  white-space: nowrap;
  flex-shrink: 0;

  @media (max-width: 1024px) {
    font-size: ${({theme:e})=>e.typography.fontSize.xs};
  }
`,im=Q.default.div.withConfig({displayName:"ReachOut.styles__ContactCards",componentId:"sc-82657052-5"})`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({theme:e})=>e.spacing.xl};
  position: relative;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: ${({theme:e})=>e.spacing.lg};
  }
`,ig=Q.default.div.withConfig({displayName:"ReachOut.styles__ContactCard",componentId:"sc-82657052-6"})`
  background-color: ${({theme:e})=>e.colors.bgSecondary};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: ${({theme:e})=>e.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.sm};
  transition: all ${({theme:e})=>e.transitions.base};

  &:hover {
    border-color: ${({theme:e})=>e.colors.textSecondary};
    transform: translateY(-2px);
  }
`,ib=Q.default.span.withConfig({displayName:"ReachOut.styles__CardLabel",componentId:"sc-82657052-7"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyBody};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({theme:e})=>e.colors.textSecondary};
`,iy=Q.default.span.withConfig({displayName:"ReachOut.styles__CardValue",componentId:"sc-82657052-8"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyBody};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  color: ${({theme:e})=>e.colors.textPrimary};
  word-break: break-word;
`,ix=Q.default.a.withConfig({displayName:"ReachOut.styles__CardLink",componentId:"sc-82657052-9"})`
  color: ${({theme:e})=>e.colors.textPrimary};
  text-decoration: none;
  transition: color ${({theme:e})=>e.transitions.fast};

  &:hover {
    color: ${({theme:e})=>e.colors.accent};
  }
`,iv=({email:e="sd.umarnazir@gmail.com",phone:t="+917051732616",github:n="https://github.com/umarnaxir",linkedin:r="https://www.linkedin.com/in/umar-nazir19/"})=>{let a=[{label:"EMAIL",value:e,href:`mailto:${e}`},{label:"PHONE",value:t,href:`tel:${t}`},{label:"GITHUB",value:"umarnaxir",href:n},{label:"LINKEDIN",value:"Umar Nazir",href:r}];return(0,s.jsx)(ic,{children:(0,s.jsx)(ta,{children:(0,s.jsxs)(id,{children:[(0,s.jsxs)(iu,{"data-aos":"fade-up",children:[(0,s.jsx)(ip,{}),(0,s.jsx)(tn,{variant:"caption",color:"secondary",as:"span",children:(0,s.jsx)(ih,{children:"OR REACH OUT DIRECTLY"})}),(0,s.jsx)(ip,{})]}),(0,s.jsx)(im,{children:a.map((e,t)=>(0,s.jsxs)(ig,{"data-aos":"fade-up","data-aos-delay":100*t,children:[(0,s.jsx)(tn,{variant:"caption",color:"secondary",as:"span",children:(0,s.jsx)(ib,{children:e.label})}),e.href?(0,s.jsx)(ix,{href:e.href,target:"EMAIL"!==e.label?"_blank":void 0,rel:"EMAIL"!==e.label?"noopener noreferrer":void 0,children:(0,s.jsx)(tn,{variant:"body",as:"span",children:(0,s.jsx)(iy,{children:e.value})})}):(0,s.jsx)(tn,{variant:"body",as:"span",children:(0,s.jsx)(iy,{children:e.value})})]},t))})]})})})},iw=Q.default.footer.withConfig({displayName:"Footer.styles__StyledFooter",componentId:"sc-d97a5ab1-0"})`
  border-top: 1px solid ${({theme:e})=>e.colors.border};
  padding: ${({theme:e})=>e.spacing.xl} 0;
  background-color: ${({theme:e})=>e.colors.bgPrimary};
`,ik=Q.default.div.withConfig({displayName:"Footer.styles__FooterContent",componentId:"sc-d97a5ab1-1"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${({theme:e})=>e.spacing.md};
    text-align: center;
  }
`,ij=Q.default.span.withConfig({displayName:"Footer.styles__FooterCopyright",componentId:"sc-d97a5ab1-2"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyBody};
  color: ${({theme:e})=>e.colors.textTertiary};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
`,i_=Q.default.span.withConfig({displayName:"Footer.styles__FooterTagline",componentId:"sc-d97a5ab1-3"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyBody};
  color: ${({theme:e})=>e.colors.textTertiary};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
`,i$=({name:e})=>{let t=new Date().getFullYear();return(0,s.jsx)(iw,{"data-aos":"fade-up",children:(0,s.jsx)(ta,{children:(0,s.jsxs)(ik,{children:[(0,s.jsx)(tn,{variant:"caption",color:"tertiary",as:"span",children:(0,s.jsxs)(ij,{children:["© ",t," ",e]})}),(0,s.jsx)(tn,{variant:"caption",color:"tertiary",as:"span",children:(0,s.jsx)(i_,{children:"Designed & Built with purpose"})})]})})})},iS={personal:{name:"Umar Nazir",title:"SOFTWARE ENGINEER & SEO EXECUTIVE",headline:"Developing\nFuture-Ready\nSoftware",description:"Software Engineer & SEO Executive with 2+ years of experience creating high-performance web applications, optimizing digital presence, and delivering scalable solutions that drive business growth.",email:"sd.umarnazir@gmail.com",phone:"+91 705-173-2616",location:"Baramulla, J&K India",github:"@umarnazir",linkedin:"/in/umarnazir"},projects:[{id:"1",number:"001",year:"2024",category:"AI / ML PLATFORM",title:"AI-Mployed",description:"AI/ML Talent & Career Platform connecting job seekers with opportunities in artificial intelligence and machine learning. Built with React.js and Next.js for optimal performance and user experience.",tags:["REACT","NEXT.JS","TYPESCRIPT","AI/ML","FIREBASE"],link:"https://ml-jobs.com",imageLink:"/images/mljobs.png",visualVariant:"default"},{id:"2",number:"002",year:"2024",category:"TOURISM / BOOKING",title:"NineMash",description:"Tourism & Online Booking Platform for Kashmir region. Enables users to book hotels, tours, and experiences with seamless payment integration and real-time availability.",tags:["REACT","NEXT.JS","STRIPE","MONGODB","SEO"],link:"https://ninemash.com/",imageLink:"/images/ninemash.png",visualVariant:"alt2"},{id:"3",number:"003",year:"2024",category:"LOGISTICS / COURIER",title:"Rush Expected Courier",description:"All Critical Shipments courier service platform. Specialized in handling urgent and time-sensitive deliveries with real-time tracking, priority booking, and customer support integration.",tags:["REACT","NEXT.JS","REAL-TIME TRACKING","FIREBASE"],link:"https://re-courier.com/",imageLink:"/images/re-courier.png",visualVariant:"default"},{id:"4",number:"004",year:"2024",category:"DIGITAL MARKETING / AGENCY",title:"Digitlia",description:"Digital marketing agency specializing in web development and SEO. Showcases services, portfolio, client testimonials, and case studies with integrated contact forms and lead generation features.",tags:["REACT","NEXT.JS","SEO","DIGITAL MARKETING","LEAD GENERATION"],link:"https://digitlia.com/",imageLink:"/images/digitlia.jpeg",visualVariant:"alt"},{id:"5",number:"005",year:"2024",category:"LOGISTICS / E-COMMERCE",title:"EliteExpress Courier",description:"Delivery & Logistics System for managing shipments, tracking packages, and optimizing delivery routes. Features real-time tracking, automated notifications, and comprehensive admin dashboard.",tags:["REACT","NEXT.JS","NODE.JS","MONGODB","FIREBASE"],link:"https://eliteexpressdeliveryservices.com/",imageLink:"/images/eliteexpress.png",visualVariant:"alt"},{id:"6",number:"006",year:"2024",category:"TRAVEL / BOOKING",title:"Kashmir Tickets",description:"Travel & Ticket Booking System for Kashmir region. Comprehensive platform for booking flights, buses, and travel packages with secure payment processing and booking management.",tags:["REACT","NEXT.JS","PAYMENT GATEWAY","MONGODB"],link:"https://kashmirtickets.com/",imageLink:"/images/kashmirtickets.png",visualVariant:"alt"},{id:"7",number:"007",year:"2024",category:"NGO / NON-PROFIT",title:"Kindness Towards Humanity",description:"NGO Website for humanitarian organization. Features donation system, volunteer registration, event management, and impact stories with multi-language support and accessibility features.",tags:["REACT","NEXT.JS","DONATION SYSTEM","ACCESSIBILITY"],link:"https://kindnesstowardshumanity.in/",imageLink:"/images/kindnesstowardshumanity.png",visualVariant:"alt2"},{id:"8",number:"008",year:"2024",category:"ENTERPRISE / HR",title:"Office Management System",description:"HR & Workflow Automation system for managing employee data, attendance, payroll, and workflow processes. Features role-based access control, reporting dashboards, and automated notifications.",tags:["REACT","NODE.JS","MONGODB","AUTOMATION","HR SYSTEM"],link:"https://example.com",imageLink:"/images/office-management.png",visualVariant:"alt"},{id:"9",number:"009",year:"2024",category:"HOSPITALITY / BOOKING",title:"Hotel Sea View",description:"Hospitality Booking Website for hotel reservations. Features room availability, online booking, payment processing, and guest management system with beautiful UI/UX design.",tags:["REACT","NEXT.JS","BOOKING SYSTEM","PAYMENT","UI/UX"],link:"https://thehotelseaview.in/",imageLink:"/images/hotel-sea-view.png",visualVariant:"alt2"},{id:"10",number:"008",year:"2024",category:"HEALTHCARE / PORTFOLIO",title:"Dr. Jibran Bashir",description:"Professional portfolio website for Orthopedic Surgeon featuring appointment booking, patient testimonials, and medical service information with responsive design and SEO optimization.",tags:["REACT","NEXT.JS","TYPESCRIPT","SEO","RESPONSIVE"],link:"https://www.drjibranbashir.com/",imageLink:"/images/dr-jibran-bashir.png",visualVariant:"default"},{id:"11",number:"009",year:"2024",category:"HEALTHCARE / MEDICAL",title:"Altaf Hospital",description:"Healthcare & Medical Services Website for hospital. Includes appointment booking, doctor profiles, department information, and patient portal with secure data handling and HIPAA compliance considerations.",tags:["REACT","NEXT.JS","HEALTHCARE","APPOINTMENT SYSTEM","SECURITY"],link:"https://www.altafhospital.com/",imageLink:"/images/altaf-hospital.png",visualVariant:"default"}],experiences:[{id:"1",company:"Saibbyweb",role:"Software Engineer",date:"Jan 2025 - Present",location:"On-Site",type:"Full-time",description:"Building high-performance React/Next.js applications with focus on SEO optimization, page speed, and exceptional user experience.",responsibilities:["Build high-performance React/Next.js applications","Improve SEO structure, page speed, and user experience","Develop reusable components and optimized UI patterns","Integrate APIs, Firebase services, and backend logic"],tags:["REACT","NEXT.JS","TYPESCRIPT","SEO","FIREBASE","API INTEGRATION"]},{id:"2",company:"NexGen Developers",role:"Founder & CEO",date:"May 2025 - Present",location:"Part-Time",type:"Part-Time",description:"Leading technical development across websites, apps & AI tools. Building custom automation & chatbot systems while managing branding, SEO, client communication & digital strategy.",responsibilities:["Lead technical development across websites, apps & AI tools","Build custom automation & chatbot systems","Manage branding, SEO, client communication & digital strategy","Deliver full-stack software tailored to business growth"],tags:["LEADERSHIP","AI TOOLS","AUTOMATION","CHATBOTS","DIGITAL STRATEGY"]},{id:"3",company:"Harmukh Technologies Pvt Ltd",role:"Software Engineer & SEO Executive",date:"July 2023 - Aug 2025",location:"On-Site",type:"Full-time",description:"Designed and developed responsive websites while improving digital presence through SEO execution and UI/UX enhancements for better conversions.",responsibilities:["Designed and developed responsive websites","Improved digital presence through SEO execution","Provided UI/UX enhancements for better conversions","Collaborated with cross-functional teams"],tags:["REACT","SEO","UI/UX","RESPONSIVE DESIGN","TEAM COLLABORATION"]}],about:"Software Engineer with 2+ years of experience in Software Development, SEO Optimization, and building scalable digital products. Skilled in creating high-performance web applications using React.js, Next.js, TypeScript, and modern UI frameworks.\n\nI specialize in full-stack development, focusing on creating responsive, SEO-optimized websites and applications that deliver exceptional user experiences. My expertise includes integrating APIs, Firebase services, and implementing modern UI patterns that drive conversions and engagement.\n\nActively seeking opportunities to contribute and innovate in a growth-focused environment. When I'm not coding, I work on personal projects, contribute to open-source initiatives, and stay updated with the latest web technologies and SEO best practices.\n\nEducation: B.Tech (Computer Science Engineering) — Government College of Engineering and Technology, Safapora, Ganderbal (GCET Kashmir).",contact:{headline:"Let's Build Something Together",description:"Open to collaboration on web development projects, SEO optimization, full-stack development opportunities, or consulting work. Let's build something amazing together."}},iO=()=>{let{personal:e,projects:t,experiences:n,about:r,contact:a}=iS;return(0,s.jsxs)("main",{children:[(0,s.jsx)(ez,{name:e.name}),(0,s.jsx)(eW,{title:e.title,headline:e.headline,description:e.description}),(0,s.jsx)(tP,{sectionNumber:"01",projects:t}),(0,s.jsx)(t2,{sectionNumber:"02",experiences:n}),(0,s.jsx)(nm,{}),(0,s.jsx)(na,{sectionNumber:"03",content:r}),(0,s.jsx)(il,{sectionNumber:"04",headline:a.headline,description:a.description}),(0,s.jsx)(iv,{email:e.email,phone:e.phone,github:"https://github.com/umarnaxir",linkedin:"https://www.linkedin.com/in/umar-nazir19/"}),(0,s.jsx)(i$,{name:e.name})]})};function iC(){let[e,t]=(0,l.useState)(!0);return((0,l.useEffect)(()=>{let e=setTimeout(()=>{t(!1)},2e3);return()=>clearTimeout(e)},[]),e)?(0,s.jsx)(et,{}):(0,s.jsx)(iO,{})}e.s(["default",()=>iC],31713)}]);