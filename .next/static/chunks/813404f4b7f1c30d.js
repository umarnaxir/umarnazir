(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,88143,(e,t,n)=>{"use strict";function r({widthInt:e,heightInt:t,blurWidth:n,blurHeight:r,blurDataURL:a,objectFit:o}){let i=n?40*n:e,s=r?40*r:t,l=i&&s?`viewBox='0 0 ${i} ${s}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${l}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${l?"none":"contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${a}'/%3E%3C/svg%3E`}Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},87690,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={VALID_LOADERS:function(){return o},imageConfigDefault:function(){return i}};for(var a in r)Object.defineProperty(n,a,{enumerable:!0,get:r[a]});let o=["default","imgix","cloudinary","akamai","custom"],i={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumRedirects:3,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1}},8927,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"getImgProps",{enumerable:!0,get:function(){return l}}),e.r(33525);let r=e.r(88143),a=e.r(87690),o=["-moz-initial","fill","none","scale-down",void 0];function i(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l({src:e,sizes:t,unoptimized:n=!1,priority:l=!1,preload:c=!1,loading:d,className:u,quality:p,width:h,height:f,fill:m=!1,style:g,overrideSrc:b,onLoad:y,onLoadingComplete:v,placeholder:x="empty",blurDataURL:w,fetchPriority:k,decoding:$="async",layout:_,objectFit:j,objectPosition:S,lazyBoundary:O,lazyRoot:C,...P},E){var T;let z,N,A,{imgConf:I,showAltText:F,blurComplete:M,defaultLoader:D}=E,R=I||a.imageConfigDefault;if("allSizes"in R)z=R;else{let e=[...R.deviceSizes,...R.imageSizes].sort((e,t)=>e-t),t=R.deviceSizes.sort((e,t)=>e-t),n=R.qualities?.sort((e,t)=>e-t);z={...R,allSizes:e,deviceSizes:t,qualities:n}}if(void 0===D)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let L=P.loader||D;delete P.loader,delete P.srcSet;let B="__next_img_default"in L;if(B){if("custom"===z.loader)throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=L;L=t=>{let{config:n,...r}=t;return e(r)}}if(_){"fill"===_&&(m=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[_];e&&(g={...g,...e});let n={responsive:"100vw",fill:"100vw"}[_];n&&!t&&(t=n)}let H="",W=s(h),U=s(f);if((T=e)&&"object"==typeof T&&(i(T)||void 0!==T.src)){let t=i(e)?e.default:e;if(!t.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!t.height||!t.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(N=t.blurWidth,A=t.blurHeight,w=w||t.blurDataURL,H=t.src,!m)if(W||U){if(W&&!U){let e=W/t.width;U=Math.round(t.height*e)}else if(!W&&U){let e=U/t.height;W=Math.round(t.width*e)}}else W=t.width,U=t.height}let q=!l&&!c&&("lazy"===d||void 0===d);(!(e="string"==typeof e?e:H)||e.startsWith("data:")||e.startsWith("blob:"))&&(n=!0,q=!1),z.unoptimized&&(n=!0),B&&!z.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(n=!0);let V=s(p),G=Object.assign(m?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:j,objectPosition:S}:{},F?{}:{color:"transparent"},g),X=M||"empty"===x?null:"blur"===x?`url("data:image/svg+xml;charset=utf-8,${(0,r.getImageBlurSvg)({widthInt:W,heightInt:U,blurWidth:N,blurHeight:A,blurDataURL:w||"",objectFit:G.objectFit})}")`:`url("${x}")`,Y=o.includes(G.objectFit)?"fill"===G.objectFit?"100% 100%":"cover":G.objectFit,J=X?{backgroundSize:Y,backgroundPosition:G.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:X}:{},Z=function({config:e,src:t,unoptimized:n,width:r,quality:a,sizes:o,loader:i}){if(n)return{src:t,srcSet:void 0,sizes:void 0};let{widths:s,kind:l}=function({deviceSizes:e,allSizes:t},n,r){if(r){let n=/(^|\s)(1?\d?\d)vw/g,a=[];for(let e;e=n.exec(r);)a.push(parseInt(e[2]));if(a.length){let n=.01*Math.min(...a);return{widths:t.filter(t=>t>=e[0]*n),kind:"w"}}return{widths:t,kind:"w"}}return"number"!=typeof n?{widths:e,kind:"w"}:{widths:[...new Set([n,2*n].map(e=>t.find(t=>t>=e)||t[t.length-1]))],kind:"x"}}(e,r,o),c=s.length-1;return{sizes:o||"w"!==l?o:"100vw",srcSet:s.map((n,r)=>`${i({config:e,src:t,quality:a,width:n})} ${"w"===l?n:r+1}${l}`).join(", "),src:i({config:e,src:t,quality:a,width:s[c]})}}({config:z,src:e,unoptimized:n,width:W,quality:V,sizes:t,loader:L}),K=q?"lazy":d;return{props:{...P,loading:K,fetchPriority:k,width:W,height:U,decoding:$,className:u,style:{...G,...J},sizes:Z.sizes,srcSet:Z.srcSet,src:b||Z.src},meta:{unoptimized:n,preload:c||l,placeholder:x,fill:m}}}},98879,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return s}});let r=e.r(71645),a="undefined"==typeof window,o=a?()=>{}:r.useLayoutEffect,i=a?()=>{}:r.useEffect;function s(e){let{headManager:t,reduceComponentsToState:n}=e;function s(){if(t&&t.mountedInstances){let e=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(e))}}return a&&(t?.mountedInstances?.add(e.children),s()),o(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),o(()=>(t&&(t._pendingUpdate=s),()=>{t&&(t._pendingUpdate=s)})),i(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},25633,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={default:function(){return m},defaultHead:function(){return u}};for(var a in r)Object.defineProperty(n,a,{enumerable:!0,get:r[a]});let o=e.r(55682),i=e.r(90809),s=e.r(43476),l=i._(e.r(71645)),c=o._(e.r(98879)),d=e.r(42732);function u(){return[(0,s.jsx)("meta",{charSet:"utf-8"},"charset"),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(33525);let h=["name","httpEquiv","charSet","itemProp"];function f(e){let t,n,r,a;return e.reduce(p,[]).reverse().concat(u().reverse()).filter((t=new Set,n=new Set,r=new Set,a={},e=>{let o=!0,i=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){i=!0;let n=e.key.slice(e.key.indexOf("$")+1);t.has(n)?o=!1:t.add(n)}switch(e.type){case"title":case"base":n.has(e.type)?o=!1:n.add(e.type);break;case"meta":for(let t=0,n=h.length;t<n;t++){let n=h[t];if(e.props.hasOwnProperty(n))if("charSet"===n)r.has(n)?o=!1:r.add(n);else{let t=e.props[n],r=a[n]||new Set;("name"!==n||!i)&&r.has(t)?o=!1:(r.add(t),a[n]=r)}}}return o})).reverse().map((e,t)=>{let n=e.key||t;return l.default.cloneElement(e,{key:n})})}let m=function({children:e}){let t=(0,l.useContext)(d.HeadManagerContext);return(0,s.jsx)(c.default,{reduceComponentsToState:f,headManager:t,children:e})};("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},18556,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"ImageConfigContext",{enumerable:!0,get:function(){return o}});let r=e.r(55682)._(e.r(71645)),a=e.r(87690),o=r.default.createContext(a.imageConfigDefault)},65856,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"RouterContext",{enumerable:!0,get:function(){return r}});let r=e.r(55682)._(e.r(71645)).default.createContext(null)},70965,(e,t,n)=>{"use strict";function r(e,t){let n=e||75;return t?.qualities?.length?t.qualities.reduce((e,t)=>Math.abs(t-n)<Math.abs(e-n)?t:e,0):n}Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"findClosestQuality",{enumerable:!0,get:function(){return r}})},1948,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o}});let r=e.r(70965);function a({config:e,src:t,width:n,quality:a}){if(t.startsWith("/")&&t.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let o=(0,r.findClosestQuality)(a,e);return`${e.path}?url=${encodeURIComponent(t)}&w=${n}&q=${o}${t.startsWith("/_next/static/media/"),""}`}a.__next_img_default=!0;let o=a},18581,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"useMergedRef",{enumerable:!0,get:function(){return a}});let r=e.r(71645);function a(e,t){let n=(0,r.useRef)(null),a=(0,r.useRef)(null);return(0,r.useCallback)(r=>{if(null===r){let e=n.current;e&&(n.current=null,e());let t=a.current;t&&(a.current=null,t())}else e&&(n.current=o(e,r)),t&&(a.current=o(t,r))},[e,t])}function o(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let n=e(t);return"function"==typeof n?n:()=>e(null)}}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},5500,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"Image",{enumerable:!0,get:function(){return x}});let r=e.r(55682),a=e.r(90809),o=e.r(43476),i=a._(e.r(71645)),s=r._(e.r(74080)),l=r._(e.r(25633)),c=e.r(8927),d=e.r(87690),u=e.r(18556);e.r(33525);let p=e.r(65856),h=r._(e.r(1948)),f=e.r(18581),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function g(e,t,n,r,a,o,i){let s=e?.src;e&&e["data-loaded-src"]!==s&&(e["data-loaded-src"]=s,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&a(!0),n?.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,a=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>a,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{a=!0,t.stopPropagation()}})}r?.current&&r.current(e)}}))}function b(e){return i.use?{fetchPriority:e}:{fetchpriority:e}}"undefined"==typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let y=(0,i.forwardRef)(({src:e,srcSet:t,sizes:n,height:r,width:a,decoding:s,className:l,style:c,fetchPriority:d,placeholder:u,loading:p,unoptimized:h,fill:m,onLoadRef:y,onLoadingCompleteRef:v,setBlurComplete:x,setShowAltText:w,sizesInput:k,onLoad:$,onError:_,...j},S)=>{let O=(0,i.useCallback)(e=>{e&&(_&&(e.src=e.src),e.complete&&g(e,u,y,v,x,h,k))},[e,u,y,v,x,_,h,k]),C=(0,f.useMergedRef)(S,O);return(0,o.jsx)("img",{...j,...b(d),loading:p,width:a,height:r,decoding:s,"data-nimg":m?"fill":"1",className:l,style:c,sizes:n,srcSet:t,src:e,ref:C,onLoad:e=>{g(e.currentTarget,u,y,v,x,h,k)},onError:e=>{w(!0),"empty"!==u&&x(!0),_&&_(e)}})});function v({isAppRouter:e,imgAttributes:t}){let n={as:"image",imageSrcSet:t.srcSet,imageSizes:t.sizes,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,...b(t.fetchPriority)};return e&&s.default.preload?(s.default.preload(t.src,n),null):(0,o.jsx)(l.default,{children:(0,o.jsx)("link",{rel:"preload",href:t.srcSet?void 0:t.src,...n},"__nimg-"+t.src+t.srcSet+t.sizes)})}let x=(0,i.forwardRef)((e,t)=>{let n=(0,i.useContext)(p.RouterContext),r=(0,i.useContext)(u.ImageConfigContext),a=(0,i.useMemo)(()=>{let e=m||r||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t),a=e.qualities?.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n,qualities:a,localPatterns:"undefined"==typeof window?r?.localPatterns:e.localPatterns}},[r]),{onLoad:s,onLoadingComplete:l}=e,f=(0,i.useRef)(s);(0,i.useEffect)(()=>{f.current=s},[s]);let g=(0,i.useRef)(l);(0,i.useEffect)(()=>{g.current=l},[l]);let[b,x]=(0,i.useState)(!1),[w,k]=(0,i.useState)(!1),{props:$,meta:_}=(0,c.getImgProps)(e,{defaultLoader:h.default,imgConf:a,blurComplete:b,showAltText:w});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(y,{...$,unoptimized:_.unoptimized,placeholder:_.placeholder,fill:_.fill,onLoadRef:f,onLoadingCompleteRef:g,setBlurComplete:x,setShowAltText:k,sizesInput:e.sizes,ref:t}),_.preload?(0,o.jsx)(v,{isAppRouter:!n,imgAttributes:$}):null]})});("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},94909,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={default:function(){return d},getImageProps:function(){return c}};for(var a in r)Object.defineProperty(n,a,{enumerable:!0,get:r[a]});let o=e.r(55682),i=e.r(8927),s=e.r(5500),l=o._(e.r(1948));function c(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let d=s.Image},57688,(e,t,n)=>{t.exports=e.r(94909)},32892,(e,t,n)=>{"use strict";var r=Array.isArray,a=Object.keys,o=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;t.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var s,l,c,d=r(t),u=r(n);if(d&&u){if((l=t.length)!=n.length)return!1;for(s=l;0!=s--;)if(!e(t[s],n[s]))return!1;return!0}if(d!=u)return!1;var p=t instanceof Date,h=n instanceof Date;if(p!=h)return!1;if(p&&h)return t.getTime()==n.getTime();var f=t instanceof RegExp,m=n instanceof RegExp;if(f!=m)return!1;if(f&&m)return t.toString()==n.toString();var g=a(t);if((l=g.length)!==a(n).length)return!1;for(s=l;0!=s--;)if(!o.call(n,g[s]))return!1;if(i&&t instanceof Element&&n instanceof Element)return t===n;for(s=l;0!=s--;)if(("_owner"!==(c=g[s])||!t.$$typeof)&&!e(t[c],n[c]))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(e){if(e.message&&e.message.match(/stack|recursion/i)||-0x7ff5ffe4===e.number)return console.warn("Warning: react-fast-compare does not handle circular references.",e.name,e.message),!1;throw e}}},52210,(e,t,n)=>{"use strict";var r="function"==typeof Symbol&&Symbol.for,a=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,s=r?Symbol.for("react.strict_mode"):60108,l=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,d=r?Symbol.for("react.context"):60110,u=r?Symbol.for("react.async_mode"):60111,p=r?Symbol.for("react.concurrent_mode"):60111,h=r?Symbol.for("react.forward_ref"):60112,f=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.suspense_list"):60120,g=r?Symbol.for("react.memo"):60115,b=r?Symbol.for("react.lazy"):60116,y=r?Symbol.for("react.block"):60121,v=r?Symbol.for("react.fundamental"):60117,x=r?Symbol.for("react.responder"):60118,w=r?Symbol.for("react.scope"):60119;function k(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case a:switch(e=e.type){case u:case p:case i:case l:case s:case f:return e;default:switch(e=e&&e.$$typeof){case d:case h:case b:case g:case c:return e;default:return t}}case o:return t}}}function $(e){return k(e)===p}n.AsyncMode=u,n.ConcurrentMode=p,n.ContextConsumer=d,n.ContextProvider=c,n.Element=a,n.ForwardRef=h,n.Fragment=i,n.Lazy=b,n.Memo=g,n.Portal=o,n.Profiler=l,n.StrictMode=s,n.Suspense=f,n.isAsyncMode=function(e){return $(e)||k(e)===u},n.isConcurrentMode=$,n.isContextConsumer=function(e){return k(e)===d},n.isContextProvider=function(e){return k(e)===c},n.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===a},n.isForwardRef=function(e){return k(e)===h},n.isFragment=function(e){return k(e)===i},n.isLazy=function(e){return k(e)===b},n.isMemo=function(e){return k(e)===g},n.isPortal=function(e){return k(e)===o},n.isProfiler=function(e){return k(e)===l},n.isStrictMode=function(e){return k(e)===s},n.isSuspense=function(e){return k(e)===f},n.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===p||e===l||e===s||e===f||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===g||e.$$typeof===c||e.$$typeof===d||e.$$typeof===h||e.$$typeof===v||e.$$typeof===x||e.$$typeof===w||e.$$typeof===y)},n.typeOf=k},79684,(e,t,n)=>{"use strict";t.exports=e.r(52210)},98437,(e,t,n)=>{"use strict";var r=e.r(79684),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function l(e){return r.isMemo(e)?i:s[e.$$typeof]||a}s[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[r.Memo]=i;var c=Object.defineProperty,d=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,f=Object.prototype;t.exports=function e(t,n,r){if("string"!=typeof n){if(f){var a=h(n);a&&a!==f&&e(t,a,r)}var i=d(n);u&&(i=i.concat(u(n)));for(var s=l(t),m=l(n),g=0;g<i.length;++g){var b=i[g];if(!o[b]&&!(r&&r[b])&&!(m&&m[b])&&!(s&&s[b])){var y=p(n,b);try{c(t,b,y)}catch(e){}}}}return t}},37472,(e,t,n)=>{"use strict";function r(e){this._maxSize=e,this.clear()}r.prototype.clear=function(){this._size=0,this._values=Object.create(null)},r.prototype.get=function(e){return this._values[e]},r.prototype.set=function(e,t){return this._size>=this._maxSize&&this.clear(),!(e in this._values)&&this._size++,this._values[e]=t};var a=/[^.^\]^[]+|(?=\[\]|\.\.)/g,o=/^\d+$/,i=/^\d/,s=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,l=/^\s*(['"]?)(.*?)(\1)\s*$/,c=new r(512),d=new r(512),u=new r(512);function p(e){return c.get(e)||c.set(e,h(e).map(function(e){return e.replace(l,"$2")}))}function h(e){return e.match(a)||[""]}function f(e){return"string"==typeof e&&e&&-1!==["'",'"'].indexOf(e.charAt(0))}t.exports={Cache:r,split:h,normalizePath:p,setter:function(e){var t=p(e);return d.get(e)||d.set(e,function(e,n){for(var r=0,a=t.length,o=e;r<a-1;){var i=t[r];if("__proto__"===i||"constructor"===i||"prototype"===i)return e;o=o[t[r++]]}o[t[r]]=n})},getter:function(e,t){var n=p(e);return u.get(e)||u.set(e,function(e){for(var r=0,a=n.length;r<a;)if(null==e&&t)return;else e=e[n[r++]];return e})},join:function(e){return e.reduce(function(e,t){return e+(f(t)||o.test(t)?"["+t+"]":(e?".":"")+t)},"")},forEach:function(e,t,n){!function(e,t,n){var r,a,l,c,d=e.length;for(a=0;a<d;a++)(r=e[a])&&(function(e){return!f(e)&&(e.match(i)&&!e.match(o)||s.test(e))}(r)&&(r='"'+r+'"'),l=!(c=f(r))&&/^\d+$/.test(r),t.call(n,r,c,l,a,e))}(Array.isArray(e)?e:h(e),t,n)}}},3873,(e,t,n)=>{let r=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,a=e=>e.match(r)||[],o=e=>e[0].toUpperCase()+e.slice(1),i=(e,t)=>a(e).join(t).toLowerCase(),s=e=>a(e).reduce((e,t)=>`${e}${!e?t.toLowerCase():t[0].toUpperCase()+t.slice(1).toLowerCase()}`,"");t.exports={words:a,upperFirst:o,camelCase:s,pascalCase:e=>o(s(e)),snakeCase:e=>i(e,"_"),kebabCase:e=>i(e,"-"),sentenceCase:e=>o(i(e," ")),titleCase:e=>a(e).map(o).join(" ")}},1439,(e,t,n)=>{function r(e,t){var n=e.length,r=Array(n),a={},o=n,i=function(e){for(var t=new Map,n=0,r=e.length;n<r;n++){var a=e[n];t.has(a[0])||t.set(a[0],new Set),t.has(a[1])||t.set(a[1],new Set),t.get(a[0]).add(a[1])}return t}(t),s=function(e){for(var t=new Map,n=0,r=e.length;n<r;n++)t.set(e[n],n);return t}(e);for(t.forEach(function(e){if(!s.has(e[0])||!s.has(e[1]))throw Error("Unknown node. There is an unknown node in the supplied edges.")});o--;)a[o]||function e(t,o,l){if(l.has(t)){var c;try{c=", node was:"+JSON.stringify(t)}catch(e){c=""}throw Error("Cyclic dependency"+c)}if(!s.has(t))throw Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(t));if(!a[o]){a[o]=!0;var d=i.get(t)||new Set;if(o=(d=Array.from(d)).length){l.add(t);do{var u=d[--o];e(u,s.get(u),l)}while(o)l.delete(t)}r[--n]=t}}(e[o],o,new Set);return r}t.exports=function(e){return r(function(e){for(var t=new Set,n=0,r=e.length;n<r;n++){var a=e[n];t.add(a[0]),t.add(a[1])}return Array.from(t)}(e),e)},t.exports.array=r},31713,e=>{"use strict";let t,n,r;var a,o,i,s=e.i(43476),l=e.i(71645);function c(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}e.i(47167),c('.react-loading-indicator-normalize,\n[class$=rli-bounding-box] {\n  font-size: 1rem;\n  display: inline-block;\n  box-sizing: border-box;\n  text-align: unset;\n  isolation: isolate;\n}\n\n.rli-d-i-b {\n  display: inline-block;\n}\n\n.rli-text-format {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 600;\n  width: 90%;\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 0.7em;\n  letter-spacing: 0.5px;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;\n}');var d=function(){return(d=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}"function"==typeof SuppressedError&&SuppressedError;var p=/^\s+/,h=/\s+$/;function f(e,t){if(t=t||{},(e=e||"")instanceof f)return e;if(!(this instanceof f))return new f(e,t);var n,r,a,o,i,s,l,c,d,m,g,b,y,v,x,w,k,$,_,j,S=(i={r:0,g:0,b:0},s=1,l=null,c=null,d=null,m=!1,g=!1,"string"==typeof(n=e)&&(n=function(e){e=e.replace(p,"").replace(h,"").toLowerCase();var t,n=!1;if(T[e])e=T[e],n=!0;else if("transparent"==e)return{r:0,g:0,b:0,a:0,format:"name"};return(t=W.rgb.exec(e))?{r:t[1],g:t[2],b:t[3]}:(t=W.rgba.exec(e))?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=W.hsl.exec(e))?{h:t[1],s:t[2],l:t[3]}:(t=W.hsla.exec(e))?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=W.hsv.exec(e))?{h:t[1],s:t[2],v:t[3]}:(t=W.hsva.exec(e))?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=W.hex8.exec(e))?{r:F(t[1]),g:F(t[2]),b:F(t[3]),a:F(t[4])/255,format:n?"name":"hex8"}:(t=W.hex6.exec(e))?{r:F(t[1]),g:F(t[2]),b:F(t[3]),format:n?"name":"hex"}:(t=W.hex4.exec(e))?{r:F(t[1]+""+t[1]),g:F(t[2]+""+t[2]),b:F(t[3]+""+t[3]),a:F(t[4]+""+t[4])/255,format:n?"name":"hex8"}:!!(t=W.hex3.exec(e))&&{r:F(t[1]+""+t[1]),g:F(t[2]+""+t[2]),b:F(t[3]+""+t[3]),format:n?"name":"hex"}}(n)),"object"==u(n)&&(U(n.r)&&U(n.g)&&U(n.b)?(r=n.r,a=n.g,o=n.b,i={r:255*A(r,255),g:255*A(a,255),b:255*A(o,255)},m=!0,g="%"===String(n.r).substr(-1)?"prgb":"rgb"):U(n.h)&&U(n.s)&&U(n.v)?(l=D(n.s),c=D(n.v),b=n.h,y=l,v=c,b=6*A(b,360),y=A(y,100),v=A(v,100),x=Math.floor(b),w=b-x,k=v*(1-y),$=v*(1-w*y),_=v*(1-(1-w)*y),i={r:255*[v,$,k,k,_,v][j=x%6],g:255*[_,v,v,$,k,k][j],b:255*[k,k,_,v,v,$][j]},m=!0,g="hsv"):U(n.h)&&U(n.s)&&U(n.l)&&(l=D(n.s),d=D(n.l),i=function(e,t,n){var r,a,o;function i(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}if(e=A(e,360),t=A(t,100),n=A(n,100),0===t)r=a=o=n;else{var s=n<.5?n*(1+t):n+t-n*t,l=2*n-s;r=i(l,s,e+1/3),a=i(l,s,e),o=i(l,s,e-1/3)}return{r:255*r,g:255*a,b:255*o}}(n.h,l,d),m=!0,g="hsl"),n.hasOwnProperty("a")&&(s=n.a)),s=N(s),{ok:m,format:n.format||g,r:Math.min(255,Math.max(i.r,0)),g:Math.min(255,Math.max(i.g,0)),b:Math.min(255,Math.max(i.b,0)),a:s});this._originalInput=e,this._r=S.r,this._g=S.g,this._b=S.b,this._a=S.a,this._roundA=Math.round(100*this._a)/100,this._format=t.format||S.format,this._gradientType=t.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=S.ok}function m(e,t,n){e=A(e,255);var r,a,o=Math.max(e,t=A(t,255),n=A(n,255)),i=Math.min(e,t,n),s=(o+i)/2;if(o==i)r=a=0;else{var l=o-i;switch(a=s>.5?l/(2-o-i):l/(o+i),o){case e:r=(t-n)/l+6*(t<n);break;case t:r=(n-e)/l+2;break;case n:r=(e-t)/l+4}r/=6}return{h:r,s:a,l:s}}function g(e,t,n){e=A(e,255);var r,a,o=Math.max(e,t=A(t,255),n=A(n,255)),i=Math.min(e,t,n),s=o-i;if(a=0===o?0:s/o,o==i)r=0;else{switch(o){case e:r=(t-n)/s+6*(t<n);break;case t:r=(n-e)/s+2;break;case n:r=(e-t)/s+4}r/=6}return{h:r,s:a,v:o}}function b(e,t,n,r){var a=[M(Math.round(e).toString(16)),M(Math.round(t).toString(16)),M(Math.round(n).toString(16))];return r&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}function y(e,t,n,r){return[M(R(r)),M(Math.round(e).toString(16)),M(Math.round(t).toString(16)),M(Math.round(n).toString(16))].join("")}function v(e,t){t=0===t?0:t||10;var n=f(e).toHsl();return n.s-=t/100,n.s=I(n.s),f(n)}function x(e,t){t=0===t?0:t||10;var n=f(e).toHsl();return n.s+=t/100,n.s=I(n.s),f(n)}function w(e){return f(e).desaturate(100)}function k(e,t){t=0===t?0:t||10;var n=f(e).toHsl();return n.l+=t/100,n.l=I(n.l),f(n)}function $(e,t){t=0===t?0:t||10;var n=f(e).toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(-t/100*255))),n.g=Math.max(0,Math.min(255,n.g-Math.round(-t/100*255))),n.b=Math.max(0,Math.min(255,n.b-Math.round(-t/100*255))),f(n)}function _(e,t){t=0===t?0:t||10;var n=f(e).toHsl();return n.l-=t/100,n.l=I(n.l),f(n)}function j(e,t){var n=f(e).toHsl(),r=(n.h+t)%360;return n.h=r<0?360+r:r,f(n)}function S(e){var t=f(e).toHsl();return t.h=(t.h+180)%360,f(t)}function O(e,t){if(isNaN(t)||t<=0)throw Error("Argument to polyad must be a positive number");for(var n=f(e).toHsl(),r=[f(e)],a=360/t,o=1;o<t;o++)r.push(f({h:(n.h+o*a)%360,s:n.s,l:n.l}));return r}function C(e){var t=f(e).toHsl(),n=t.h;return[f(e),f({h:(n+72)%360,s:t.s,l:t.l}),f({h:(n+216)%360,s:t.s,l:t.l})]}function P(e,t,n){t=t||6,n=n||30;var r=f(e).toHsl(),a=360/n,o=[f(e)];for(r.h=(r.h-(a*t>>1)+720)%360;--t;)r.h=(r.h+a)%360,o.push(f(r));return o}function E(e,t){t=t||6;for(var n=f(e).toHsv(),r=n.h,a=n.s,o=n.v,i=[],s=1/t;t--;)i.push(f({h:r,s:a,v:o})),o=(o+s)%1;return i}f.prototype={isDark:function(){return 128>this.getBrightness()},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,t,n,r=this.toRgb();return e=r.r/255,.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*((t=r.g/255)<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.0722*((n=r.b/255)<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))},setAlpha:function(e){return this._a=N(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=g(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=g(this._r,this._g,this._b),t=Math.round(360*e.h),n=Math.round(100*e.s),r=Math.round(100*e.v);return 1==this._a?"hsv("+t+", "+n+"%, "+r+"%)":"hsva("+t+", "+n+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var e=m(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=m(this._r,this._g,this._b),t=Math.round(360*e.h),n=Math.round(100*e.s),r=Math.round(100*e.l);return 1==this._a?"hsl("+t+", "+n+"%, "+r+"%)":"hsla("+t+", "+n+"%, "+r+"%, "+this._roundA+")"},toHex:function(e){return b(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){var t,n,r,a,o;return t=this._r,n=this._g,r=this._b,a=this._a,o=[M(Math.round(t).toString(16)),M(Math.round(n).toString(16)),M(Math.round(r).toString(16)),M(R(a))],e&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)&&o[3].charAt(0)==o[3].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0):o.join("")},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*A(this._r,255))+"%",g:Math.round(100*A(this._g,255))+"%",b:Math.round(100*A(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+Math.round(100*A(this._r,255))+"%, "+Math.round(100*A(this._g,255))+"%, "+Math.round(100*A(this._b,255))+"%)":"rgba("+Math.round(100*A(this._r,255))+"%, "+Math.round(100*A(this._g,255))+"%, "+Math.round(100*A(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(z[b(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var t="#"+y(this._r,this._g,this._b,this._a),n=t,r=this._gradientType?"GradientType = 1, ":"";if(e){var a=f(e);n="#"+y(a._r,a._g,a._b,a._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+t+",endColorstr="+n+")"},toString:function(e){var t=!!e;e=e||this._format;var n=!1,r=this._a<1&&this._a>=0;return t||!r||"hex"!==e&&"hex6"!==e&&"hex3"!==e&&"hex4"!==e&&"hex8"!==e&&"name"!==e?("rgb"===e&&(n=this.toRgbString()),"prgb"===e&&(n=this.toPercentageRgbString()),"hex"!==e&&"hex6"!==e||(n=this.toHexString()),"hex3"===e&&(n=this.toHexString(!0)),"hex4"===e&&(n=this.toHex8String(!0)),"hex8"===e&&(n=this.toHex8String()),"name"===e&&(n=this.toName()),"hsl"===e&&(n=this.toHslString()),"hsv"===e&&(n=this.toHsvString()),n||this.toHexString()):"name"===e&&0===this._a?this.toName():this.toRgbString()},clone:function(){return f(this.toString())},_applyModification:function(e,t){var n=e.apply(null,[this].concat([].slice.call(t)));return this._r=n._r,this._g=n._g,this._b=n._b,this.setAlpha(n._a),this},lighten:function(){return this._applyModification(k,arguments)},brighten:function(){return this._applyModification($,arguments)},darken:function(){return this._applyModification(_,arguments)},desaturate:function(){return this._applyModification(v,arguments)},saturate:function(){return this._applyModification(x,arguments)},greyscale:function(){return this._applyModification(w,arguments)},spin:function(){return this._applyModification(j,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(P,arguments)},complement:function(){return this._applyCombination(S,arguments)},monochromatic:function(){return this._applyCombination(E,arguments)},splitcomplement:function(){return this._applyCombination(C,arguments)},triad:function(){return this._applyCombination(O,[3])},tetrad:function(){return this._applyCombination(O,[4])}},f.fromRatio=function(e,t){if("object"==u(e)){var n={};for(var r in e)e.hasOwnProperty(r)&&(n[r]="a"===r?e[r]:D(e[r]));e=n}return f(e,t)},f.equals=function(e,t){return!(!e||!t)&&f(e).toRgbString()==f(t).toRgbString()},f.random=function(){return f.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},f.mix=function(e,t,n){n=0===n?0:n||50;var r=f(e).toRgb(),a=f(t).toRgb(),o=n/100;return f({r:(a.r-r.r)*o+r.r,g:(a.g-r.g)*o+r.g,b:(a.b-r.b)*o+r.b,a:(a.a-r.a)*o+r.a})},f.readability=function(e,t){var n=f(e),r=f(t);return(Math.max(n.getLuminance(),r.getLuminance())+.05)/(Math.min(n.getLuminance(),r.getLuminance())+.05)},f.isReadable=function(e,t,n){var r,a,o,i,s,l=f.readability(e,t);switch(s=!1,(a=((r=(r=n)||{level:"AA",size:"small"}).level||"AA").toUpperCase(),o=(r.size||"small").toLowerCase(),"AA"!==a&&"AAA"!==a&&(a="AA"),"small"!==o&&"large"!==o&&(o="small"),i={level:a,size:o}).level+i.size){case"AAsmall":case"AAAlarge":s=l>=4.5;break;case"AAlarge":s=l>=3;break;case"AAAsmall":s=l>=7}return s},f.mostReadable=function(e,t,n){var r,a,o,i,s=null,l=0;a=(n=n||{}).includeFallbackColors,o=n.level,i=n.size;for(var c=0;c<t.length;c++)(r=f.readability(e,t[c]))>l&&(l=r,s=f(t[c]));return f.isReadable(e,s,{level:o,size:i})||!a?s:(n.includeFallbackColors=!1,f.mostReadable(e,["#fff","#000"],n))};var T=f.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},z=f.hexNames=function(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}(T);function N(e){return(isNaN(e=parseFloat(e))||e<0||e>1)&&(e=1),e}function A(e,t){"string"==typeof(n=e)&&-1!=n.indexOf(".")&&1===parseFloat(n)&&(e="100%");var n,r,a="string"==typeof(r=e)&&-1!=r.indexOf("%");return e=Math.min(t,Math.max(0,parseFloat(e))),a&&(e=parseInt(e*t,10)/100),1e-6>Math.abs(e-t)?1:e%t/parseFloat(t)}function I(e){return Math.min(1,Math.max(0,e))}function F(e){return parseInt(e,16)}function M(e){return 1==e.length?"0"+e:""+e}function D(e){return e<=1&&(e=100*e+"%"),e}function R(e){return Math.round(255*parseFloat(e)).toString(16)}var L,B,H,W=(B="[\\s|\\(]+("+(L="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+L+")[,|\\s]+("+L+")\\s*\\)?",H="[\\s|\\(]+("+L+")[,|\\s]+("+L+")[,|\\s]+("+L+")[,|\\s]+("+L+")\\s*\\)?",{CSS_UNIT:new RegExp(L),rgb:RegExp("rgb"+B),rgba:RegExp("rgba"+H),hsl:RegExp("hsl"+B),hsla:RegExp("hsla"+H),hsv:RegExp("hsv"+B),hsva:RegExp("hsva"+H),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function U(e){return!!W.CSS_UNIT.exec(e)}var q=function(e,t){var n=("string"==typeof e?parseInt(e):e)||0;if(n>=-5&&n<=5){var r=parseFloat(t),a=r+-(r/5*n*1);return(0==a||a<=Number.EPSILON)&&(a=.1),{animationPeriod:a+"s"}}return{animationPeriod:t}},V=function(e,t){var n=e||{},r="";switch(t){case"small":r="12px";break;case"medium":r="16px";break;case"large":r="20px";break;default:r=void 0}var a={};if(n.fontSize){var o=n.fontSize;a=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(n,["fontSize"]),r=o}return{fontSize:r,styles:a}},G={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},X=function(e){var t=e.className,n=e.text,r=e.textColor,a=e.staticText,o=e.style;return n?l.default.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(t||"").trim(),style:d(d(d({},a&&G),r&&{color:r,mixBlendMode:"unset"}),o&&o)},"string"==typeof n&&n.length?n:"loading"):null},Y="rgb(50, 205, 50)";function J(e,t){if(void 0===t&&(t=0),0===e.length)throw Error("Input array cannot be empty!");var n=[];return function e(t,r){return void 0===r&&(r=0),n.push.apply(n,t),n.length<r&&e(n,r),n.slice(0,r)}(e,t)}function Z(e){return e&&e.Math===Math&&e}c('.atom-rli-bounding-box {\n  --atom-phase1-rgb: 50, 205, 50;\n  color: rgba(var(--atom-phase1-rgb), 1);\n  font-size: 16px;\n  position: relative;\n  text-align: unset;\n  isolation: isolate;\n}\n.atom-rli-bounding-box .atom-indicator {\n  width: 6em;\n  height: 6em;\n  position: relative;\n  perspective: 6em;\n  overflow: hidden;\n  color: rgba(var(--atom-phase1-rgb), 1);\n  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;\n}\n.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 0.48em;\n  height: 0.48em;\n  margin: auto;\n  border-radius: 50%;\n  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);\n  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7eg;\n}\n.atom-rli-bounding-box .atom-indicator::before {\n  filter: drop-shadow(0px 0px 0.0625em currentColor);\n}\n.atom-rli-bounding-box .atom-indicator .electron-orbit {\n  color: rgba(var(--atom-phase1-rgb), 0.85);\n  border: 0;\n  border-left: 0.4em solid currentColor;\n  box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  width: 4.8em;\n  height: 4.8em;\n  background-color: transparent;\n  border-radius: 50%;\n  transform-style: preserve-3d;\n  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7fj, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gy;\n}\n.atom-rli-bounding-box .atom-indicator .electron-orbit::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  border-radius: 50%;\n  color: rgba(var(--atom-phase1-rgb), 0.18);\n  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7hv;\n  border: 0.125em solid currentColor;\n}\n.atom-rli-bounding-box .atom-indicator .electron-orbit::before {\n  content: "";\n  width: 0.192em;\n  height: 0.192em;\n  position: absolute;\n  border-radius: 50%;\n  top: -0.096em;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: 0 auto;\n  color: rgba(var(--atom-phase1-rgb), 1);\n  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;\n  background-color: currentColor;\n  transform: rotateY(-70deg);\n  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7ew, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;\n}\n.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {\n  --orbit-vector-factor: -1;\n  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));\n}\n.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {\n  --orbit-vector-factor: 1;\n  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));\n}\n.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {\n  --orbit-vector-factor: 0;\n  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));\n  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);\n}\n.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {\n  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);\n}\n.atom-rli-bounding-box .atom-text {\n  color: currentColor;\n  mix-blend-mode: difference;\n  width: unset;\n  display: block;\n}\n\n@property --atom-phase1-rgb {\n  syntax: "<number>#";\n  inherits: true;\n  initial-value: 50, 205, 50;\n}\n@property --atom-phase2-rgb {\n  syntax: "<number>#";\n  inherits: true;\n  initial-value: 50, 205, 50;\n}\n@property --atom-phase3-rgb {\n  syntax: "<number>#";\n  inherits: true;\n  initial-value: 50, 205, 50;\n}\n@property --atom-phase4-rgb {\n  syntax: "<number>#";\n  inherits: true;\n  initial-value: 50, 205, 50;\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 1s;\n}\n@keyframes uxlv7fj {\n  from {\n    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);\n  }\n  to {\n    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);\n  }\n}\n@keyframes uxlv7ew {\n  from {\n    transform: rotateY(-70deg) rotateX(0deg);\n  }\n  to {\n    transform: rotateY(-70deg) rotateX(-360deg);\n  }\n}\n@keyframes uxlv7eg {\n  100%, 0% {\n    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);\n  }\n  20% {\n    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);\n  }\n  25% {\n    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);\n  }\n  45% {\n    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);\n  }\n  50% {\n    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);\n  }\n  70% {\n    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);\n  }\n  75% {\n    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);\n  }\n  95% {\n    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);\n  }\n}\n@keyframes uxlv7gg {\n  100%, 0% {\n    color: rgba(var(--atom-phase1-rgb), 1);\n  }\n  20% {\n    color: rgba(var(--atom-phase1-rgb), 1);\n  }\n  25% {\n    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);\n  }\n  45% {\n    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);\n  }\n  50% {\n    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);\n  }\n  70% {\n    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);\n  }\n  75% {\n    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);\n  }\n  95% {\n    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);\n  }\n}\n@keyframes uxlv7gy {\n  100%, 0% {\n    color: rgba(var(--atom-phase1-rgb), 0.85);\n  }\n  20% {\n    color: rgba(var(--atom-phase1-rgb), 0.85);\n  }\n  25% {\n    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);\n  }\n  45% {\n    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);\n  }\n  50% {\n    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);\n  }\n  70% {\n    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);\n  }\n  75% {\n    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);\n  }\n  95% {\n    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);\n  }\n}\n@keyframes uxlv7hv {\n  100%, 0% {\n    color: rgba(var(--atom-phase1-rgb), 0.18);\n  }\n  20% {\n    color: rgba(var(--atom-phase1-rgb), 0.18);\n  }\n  25% {\n    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);\n  }\n  45% {\n    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);\n  }\n  50% {\n    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);\n  }\n  70% {\n    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);\n  }\n  75% {\n    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);\n  }\n  95% {\n    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);\n  }\n}'),f(Y).toRgb(),Array.from({length:4},function(e,t){return"--atom-phase".concat(t+1,"-rgb")}),c('.commet-rli-bounding-box {\n  --commet-phase1-color: rgb(50, 205, 50);\n  font-size: 16px;\n  width: 6.85em;\n  height: 6.85em;\n  overflow: hidden;\n  display: inline-block;\n  box-sizing: border-box;\n  position: relative;\n  isolation: isolate;\n}\n.commet-rli-bounding-box .commet-indicator {\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  box-sizing: border-box;\n  width: 6em;\n  height: 6em;\n  color: var(--commet-phase1-color);\n  display: inline-block;\n  isolation: isolate;\n  position: absolute;\n  z-index: 0;\n  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite uxlv7cp;\n}\n.commet-rli-bounding-box .commet-indicator .commet-box {\n  position: absolute;\n  display: inline-block;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  animation: uxlv7bx var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;\n}\n.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {\n  width: 100%;\n  height: 100%;\n  animation-direction: normal;\n}\n.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {\n  width: 70%;\n  height: 70%;\n  animation-direction: reverse;\n}\n.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  bottom: 0;\n  left: 0;\n  display: inline-block;\n}\n.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {\n  content: "";\n  width: 0.5em;\n  height: 0.5em;\n  border-radius: 50%;\n  background-color: currentColor;\n  position: absolute;\n  top: -0.125em;\n  left: 50%;\n  transform: translateX(-50%);\n  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;\n}\n.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  bottom: 0;\n  left: 0;\n  border-radius: 50%;\n  box-sizing: border-box;\n  border-style: solid;\n}\n.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {\n  border-color: currentColor transparent transparent currentColor;\n  border-width: 0.25em 0.25em 0 0;\n  transform: rotateZ(-45deg);\n}\n.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {\n  border-color: currentColor currentColor transparent transparent;\n  border-width: 0.25em 0 0 0.25em;\n  transform: rotateZ(45deg);\n}\n.commet-rli-bounding-box .commet-text {\n  mix-blend-mode: difference;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: var(--commet-phase1-color);\n}\n\n@property --commet-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --commet-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --commet-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --commet-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 1.2s;\n}\n@keyframes uxlv7bx {\n  to {\n    transform: rotate(1turn);\n  }\n}\n@keyframes uxlv7cp {\n  100%, 0% {\n    color: var(--commet-phase1-color);\n  }\n  20% {\n    color: var(--commet-phase1-color);\n  }\n  25% {\n    color: var(--commet-phase2-color, var(--commet-phase1-color));\n  }\n  45% {\n    color: var(--commet-phase2-color, var(--commet-phase1-color));\n  }\n  50% {\n    color: var(--commet-phase3-color, var(--commet-phase1-color));\n  }\n  70% {\n    color: var(--commet-phase3-color, var(--commet-phase1-color));\n  }\n  75% {\n    color: var(--commet-phase4-color, var(--commet-phase1-color));\n  }\n  95% {\n    color: var(--commet-phase4-color, var(--commet-phase1-color));\n  }\n}'),Array.from({length:4},function(e,t){return"--commet-phase".concat(t+1,"-color")}),c('.OP-annulus-rli-bounding-box {\n  --OP-annulus-phase1-color: rgb(50, 205, 50);\n  font-size: 16px;\n  display: inline-block;\n}\n.OP-annulus-rli-bounding-box .OP-annulus-indicator {\n  width: 5em;\n  height: 5em;\n  color: var(--OP-annulus-phase1-color);\n  display: inline-block;\n  position: relative;\n  z-index: 0;\n}\n.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {\n  animation: uxlv7n7 calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;\n  height: 100%;\n  transform-origin: center center;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\n.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {\n  stroke-dasharray: 1, 125;\n  stroke-dashoffset: 0;\n  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite uxlv7oa, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7p5;\n  stroke-linecap: round;\n}\n.OP-annulus-rli-bounding-box .OP-annulus-text {\n  mix-blend-mode: difference;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: -2;\n}\n\n@property --OP-annulus-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --OP-annulus-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --OP-annulus-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --OP-annulus-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 1.5s;\n}\n@keyframes uxlv7n7 {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes uxlv7oa {\n  0% {\n    stroke-dasharray: 1, 125;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 98, 125;\n    stroke-dashoffset: -35px;\n  }\n  100% {\n    stroke-dasharray: 98, 125;\n    stroke-dashoffset: -124px;\n  }\n}\n@keyframes uxlv7p5 {\n  100%, 0% {\n    stroke: var(--OP-annulus-phase1-color);\n  }\n  22% {\n    stroke: var(--OP-annulus-phase1-color);\n  }\n  25% {\n    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));\n  }\n  42% {\n    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));\n  }\n  50% {\n    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));\n  }\n  72% {\n    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));\n  }\n  75% {\n    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));\n  }\n  97% {\n    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));\n  }\n}'),Array.from({length:4},function(e,t){return"--OP-annulus-phase".concat(t+1,"-color")}),c('.OP-dotted-rli-bounding-box {\n  --OP-dotted-phase1-color: rgb(50, 205, 50);\n  font-size: 16px;\n  box-sizing: border-box;\n  display: inline-block;\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator {\n  width: 5em;\n  height: 5em;\n  color: var(--OP-dotted-phase1-color);\n  display: inline-block;\n  position: relative;\n  z-index: 0;\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {\n  mix-blend-mode: difference;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: -2;\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: currentColor;\n  border-radius: 50%;\n  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite uxlv7nu, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7ol;\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {\n  transform: rotate(0deg);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {\n  transform: rotate(30deg);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {\n  transform: rotate(60deg);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {\n  transform: rotate(90deg);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {\n  transform: rotate(120deg);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {\n  transform: rotate(150deg);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {\n  transform: rotate(180deg);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {\n  transform: rotate(210deg);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {\n  transform: rotate(240deg);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {\n  transform: rotate(270deg);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {\n  transform: rotate(300deg);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {\n  transform: rotate(330deg);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);\n}\n\n@property --OP-dotted-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --OP-dotted-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --OP-dotted-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --OP-dotted-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 1.2s;\n}\n@keyframes uxlv7nu {\n  0%, 39%, 100% {\n    opacity: 0;\n  }\n  40% {\n    opacity: 1;\n  }\n}\n@keyframes uxlv7ol {\n  100%, 0% {\n    background-color: var(--OP-dotted-phase1-color);\n  }\n  22% {\n    background-color: var(--OP-dotted-phase1-color);\n  }\n  25% {\n    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));\n  }\n  47% {\n    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));\n  }\n  50% {\n    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));\n  }\n  72% {\n    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));\n  }\n  75% {\n    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));\n  }\n  97% {\n    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));\n  }\n}'),Z("object"==typeof window&&window)||Z("object"==typeof self&&self)||Z(e.g)||function(){return this}()||Function("return this")(),Array.from({length:4},function(e,t){return"--OP-dotted-phase".concat(t+1,"-color")}),c('.OP-spokes-rli-bounding-box {\n  --OP-spokes-phase1-color: rgb(50, 205, 50);\n  font-size: 16px;\n  position: relative;\n  color: var(--OP-spokes-phase1-color);\n}\n.OP-spokes-rli-bounding-box .OP-spokes-indicator {\n  width: 4.8em;\n  height: 4.8em;\n  display: block;\n  position: relative;\n}\n.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {\n  position: absolute;\n  height: 1.2em;\n  width: 0.4em;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto auto auto 50%;\n  background-color: var(--OP-spokes-phase1-color);\n  border-radius: 0.24em;\n  opacity: 0;\n  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite uxlv7pw, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7qn;\n  transform-origin: left center;\n}\n.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {\n  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);\n  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);\n}\n.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {\n  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);\n  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);\n}\n.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {\n  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);\n  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);\n}\n.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {\n  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);\n  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);\n}\n.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {\n  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);\n  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);\n}\n.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {\n  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);\n  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);\n}\n.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {\n  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);\n  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);\n}\n.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {\n  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);\n  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);\n}\n.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {\n  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);\n  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);\n}\n.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {\n  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);\n  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);\n}\n.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {\n  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);\n  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);\n}\n.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {\n  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);\n  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);\n}\n.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {\n  mix-blend-mode: difference;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: var(--OP-spokes-phase1-color);\n  z-index: -2;\n}\n\n@property --OP-spokes-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --OP-spokes-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --OP-spokes-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --OP-spokes-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 1.2s;\n}\n@keyframes uxlv7pw {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n@keyframes uxlv7qn {\n  100%, 0% {\n    background-color: var(--OP-spokes-phase1-color);\n  }\n  22% {\n    background-color: var(--OP-spokes-phase1-color);\n  }\n  25% {\n    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));\n  }\n  42% {\n    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));\n  }\n  50% {\n    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));\n  }\n  72% {\n    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));\n  }\n  75% {\n    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));\n  }\n  97% {\n    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));\n  }\n}'),Array.from({length:4},function(e,t){return"--OP-spokes-phase".concat(t+1,"-color")}),c('.OP-annulus-dual-sectors-rli-bounding-box {\n  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);\n  font-size: 16px;\n  box-sizing: border-box;\n  display: inline-block;\n}\n.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {\n  width: 5em;\n  height: 5em;\n  display: inline-block;\n  position: relative;\n  z-index: 0;\n  color: var(--OP-annulus-dual-sectors-phase1-color);\n}\n.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  border-width: 0.34em;\n  border-style: solid;\n  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;\n  background-color: transparent;\n  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite uxlv7ra, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite uxlv7sv;\n}\n.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {\n  mix-blend-mode: difference;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: -2;\n}\n\n@property --OP-annulus-dual-sectors-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --OP-annulus-dual-sectors-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --OP-annulus-dual-sectors-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --OP-annulus-dual-sectors-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 1.2s;\n}\n@keyframes uxlv7ra {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes uxlv7sv {\n  100%, 0% {\n    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;\n  }\n  20% {\n    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;\n  }\n  25% {\n    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;\n  }\n  45% {\n    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;\n  }\n  50% {\n    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;\n  }\n  70% {\n    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;\n  }\n  75% {\n    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;\n  }\n  95% {\n    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;\n  }\n}'),Array.from({length:4},function(e,t){return"--OP-annulus-dual-sectors-phase".concat(t+1,"-color")}),c('.OP-annulus-sector-track-rli-bounding-box {\n  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);\n  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);\n  font-size: 16px;\n  display: inline-block;\n}\n.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {\n  width: 5em;\n  height: 5em;\n  color: var(--OP-annulus-sector-phase1-color);\n  display: inline-block;\n  position: relative;\n  z-index: 0;\n}\n.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {\n  width: 100%;\n  height: 100%;\n  border-width: 0.34em;\n  border-style: solid;\n  border-radius: 50%;\n  box-sizing: border-box;\n  border-color: var(--OP-annulus-track-phase1-color);\n  border-top-color: var(--OP-annulus-sector-phase1-color);\n  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7rl, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7tf;\n}\n.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {\n  mix-blend-mode: difference;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: -2;\n}\n\n@property --OP-annulus-track-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgba(50, 205, 50, 0.22);\n}\n@property --OP-annulus-track-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgba(50, 205, 50, 0.22);\n}\n@property --OP-annulus-track-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgba(50, 205, 50, 0.22);\n}\n@property --OP-annulus-track-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgba(50, 205, 50, 0.22);\n}\n@property --OP-annulus-sector-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --OP-annulus-sector-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --OP-annulus-sector-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --OP-annulus-sector-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 1s;\n}\n@keyframes uxlv7rl {\n  to {\n    transform: rotate(1turn);\n  }\n}\n@keyframes uxlv7tf {\n  100%, 0% {\n    border-color: var(--OP-annulus-track-phase1-color);\n    border-top-color: var(--OP-annulus-sector-phase1-color);\n  }\n  18% {\n    border-color: var(--OP-annulus-track-phase1-color);\n    border-top-color: var(--OP-annulus-sector-phase1-color);\n  }\n  25% {\n    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));\n    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));\n  }\n  43% {\n    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));\n    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));\n  }\n  50% {\n    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));\n    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));\n  }\n  68% {\n    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));\n    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));\n  }\n  75% {\n    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));\n    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));\n  }\n  93% {\n    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));\n    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));\n  }\n}'),Array.from({length:4},function(e,t){return["--OP-annulus-track-phase".concat(t+1,"-color"),"--OP-annulus-sector-phase".concat(t+1,"-color")]}),c('.foursquare-rli-bounding-box {\n  --four-square-phase1-color: rgb(50, 205, 50);\n  font-size: 16px;\n  box-sizing: border-box;\n  color: var(--four-square-phase1-color);\n  display: inline-block;\n  overflow: hidden;\n}\n.foursquare-rli-bounding-box .foursquare-indicator {\n  height: 5.3033008589em;\n  width: 5.3033008589em;\n  position: relative;\n  display: block;\n}\n.foursquare-rli-bounding-box .foursquare-indicator .squares-container {\n  position: absolute;\n  z-index: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  height: 2.5em;\n  width: 2.5em;\n  color: inherit;\n  will-change: color, width, height;\n  transform: rotate(45deg);\n  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7dk, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7es;\n}\n.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {\n  position: absolute;\n  width: 1.25em;\n  height: 1.25em;\n  border-radius: 0.1875em;\n  background-color: currentColor;\n  animation: uxlv7dd var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;\n}\n.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {\n  top: 0;\n  left: 0;\n}\n.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {\n  top: 0;\n  right: 0;\n}\n.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {\n  bottom: 0;\n  left: 0;\n}\n.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {\n  bottom: 0;\n  right: 0;\n}\n\n@property --four-square-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --four-square-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --four-square-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --four-square-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 1s;\n}\n@keyframes uxlv7dk {\n  0% {\n    width: 2.5em;\n    height: 2.5em;\n  }\n  10% {\n    width: 2.5em;\n    height: 2.5em;\n  }\n  50% {\n    width: 3.75em;\n    height: 3.75em;\n  }\n  90% {\n    width: 2.5em;\n    height: 2.5em;\n  }\n  100% {\n    width: 2.5em;\n    height: 2.5em;\n  }\n}\n@keyframes uxlv7dd {\n  0% {\n    transform: rotateZ(0deg);\n  }\n  10% {\n    transform: rotateZ(0deg);\n  }\n  50% {\n    transform: rotateZ(90deg);\n  }\n  90% {\n    transform: rotateZ(90deg);\n  }\n  100% {\n    transform: rotateZ(90deg);\n  }\n}\n@keyframes uxlv7es {\n  100%, 0% {\n    color: var(--four-square-phase1-color);\n  }\n  20% {\n    color: var(--four-square-phase1-color);\n  }\n  25% {\n    color: var(--four-square-phase2-color, var(--four-square-phase1-color));\n  }\n  45% {\n    color: var(--four-square-phase2-color, var(--four-square-phase1-color));\n  }\n  50% {\n    color: var(--four-square-phase3-color, var(--four-square-phase1-color));\n  }\n  70% {\n    color: var(--four-square-phase3-color, var(--four-square-phase1-color));\n  }\n  75% {\n    color: var(--four-square-phase4-color, var(--four-square-phase1-color));\n  }\n  95% {\n    color: var(--four-square-phase4-color, var(--four-square-phase1-color));\n  }\n}'),Array.from({length:4},function(e,t){return"--four-square-phase".concat(t+1,"-color")}),c('.mosaic-rli-bounding-box {\n  --mosaic-phase1-color: rgb(50, 205, 50);\n  box-sizing: border-box;\n  font-size: 16px;\n  color: var(--mosaic-phase1-color);\n}\n.mosaic-rli-bounding-box .mosaic-indicator {\n  width: 5em;\n  height: 5em;\n  color: currentColor;\n  display: grid;\n  gap: 0.125em;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-areas: "a b c" "d e f" "g h i";\n  position: relative;\n  z-index: 0;\n}\n.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {\n  mix-blend-mode: difference;\n  position: absolute;\n  top: 105%;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: -2;\n}\n.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {\n  background-color: var(--mosaic-phase1-color);\n  animation-name: uxlv7i4, uxlv7is;\n  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);\n  animation-timing-function: var(--rli-animation-function, ease-in-out);\n  animation-iteration-count: infinite;\n}\n.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {\n  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);\n  grid-area: a;\n}\n.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {\n  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);\n  grid-area: b;\n}\n.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {\n  grid-area: c;\n  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);\n}\n.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {\n  grid-area: d;\n  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);\n}\n.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {\n  grid-area: e;\n  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);\n}\n.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {\n  grid-area: f;\n  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);\n}\n.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {\n  grid-area: g;\n  animation-delay: 0s;\n}\n.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {\n  grid-area: h;\n  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);\n}\n.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {\n  grid-area: i;\n  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);\n}\n\n@property --mosaic-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --mosaic-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --mosaic-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --mosaic-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 1.5s;\n}\n@keyframes uxlv7i4 {\n  0%, 60%, 100% {\n    transform: scale3D(1, 1, 1);\n  }\n  30% {\n    transform: scale3D(0, 0, 1);\n  }\n}\n@keyframes uxlv7is {\n  100%, 0% {\n    background-color: var(--mosaic-phase1-color);\n  }\n  25% {\n    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));\n  }\n  50% {\n    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));\n  }\n  75% {\n    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));\n  }\n}'),Array.from({length:4},function(e,t){return"--mosaic-phase".concat(t+1,"-color")}),c('.riple-rli-bounding-box {\n  --riple-phase1-color: rgb(50, 205, 50);\n  box-sizing: border-box;\n  font-size: 16px;\n  display: inline-block;\n  color: var(--riple-phase1-color);\n}\n.riple-rli-bounding-box .riple-indicator {\n  display: inline-block;\n  width: 5em;\n  height: 5em;\n  position: relative;\n  z-index: 0;\n}\n.riple-rli-bounding-box .riple-indicator .riple-text {\n  mix-blend-mode: difference;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: -2;\n}\n.riple-rli-bounding-box .riple-indicator .riple {\n  --border-width: 0.25em;\n  position: absolute;\n  border: var(--border-width) solid var(--riple-phase1-color);\n  opacity: 1;\n  border-radius: 50%;\n  will-change: top, right, left, bottom, border-color;\n  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7i1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7io;\n}\n.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {\n  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);\n}\n\n@property --riple-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --riple-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --riple-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --riple-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 1s;\n}\n@keyframes uxlv7i1 {\n  0% {\n    top: calc(50% - var(--border-width));\n    left: calc(50% - var(--border-width));\n    right: calc(50% - var(--border-width));\n    bottom: calc(50% - var(--border-width));\n    opacity: 0;\n  }\n  4.9% {\n    top: calc(50% - var(--border-width));\n    left: calc(50% - var(--border-width));\n    right: calc(50% - var(--border-width));\n    bottom: calc(50% - var(--border-width));\n    opacity: 0;\n  }\n  5% {\n    top: calc(50% - var(--border-width));\n    left: calc(50% - var(--border-width));\n    right: calc(50% - var(--border-width));\n    bottom: calc(50% - var(--border-width));\n    opacity: 1;\n  }\n  100% {\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    opacity: 0;\n  }\n}\n@keyframes uxlv7io {\n  100%, 0% {\n    border-color: var(--riple-phase1-color);\n  }\n  24.9% {\n    border-color: var(--riple-phase1-color);\n  }\n  25% {\n    border-color: var(--riple-phase2-color, var(--riple-phase1-color));\n  }\n  49.9% {\n    border-color: var(--riple-phase2-color, var(--riple-phase1-color));\n  }\n  50% {\n    border-color: var(--riple-phase3-color, var(--riple-phase1-color));\n  }\n  74.9% {\n    border-color: var(--riple-phase3-color, var(--riple-phase1-color));\n  }\n  75% {\n    border-color: var(--riple-phase4-color, var(--riple-phase1-color));\n  }\n  99.9% {\n    border-color: var(--riple-phase4-color, var(--riple-phase1-color));\n  }\n}'),Array.from({length:4},function(e,t){return"--riple-phase".concat(t+1,"-color")}),c('.pulsate-rli-bounding-box {\n  --TD-pulsate-phase1-color: rgb(50, 205, 50);\n  font-size: 16px;\n  display: inline-block;\n  box-sizing: border-box;\n  color: var(--TD-pulsate-phase1-color);\n}\n.pulsate-rli-bounding-box .pulsate-indicator {\n  width: 4.4em;\n  height: 1.1em;\n  text-align: center;\n  position: relative;\n  z-index: 0;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: nowrap;\n  align-items: center;\n}\n.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {\n  width: 1.1em;\n  height: 1.1em;\n  border-radius: 50%;\n  background-color: var(--TD-pulsate-phase1-color);\n  transform: scale(0);\n  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7s0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7to;\n}\n.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {\n  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);\n}\n.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {\n  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);\n}\n.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {\n  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);\n}\n.pulsate-rli-bounding-box .pulsate-text {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 80%;\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 0.6em;\n  letter-spacing: 0.5px;\n  font-family: sans-serif;\n  mix-blend-mode: difference;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: -2;\n}\n\n@property --TD-pulsate-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --TD-pulsate-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --TD-pulsate-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --TD-pulsate-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 1.2s;\n}\n@keyframes uxlv7s0 {\n  0%, 90%, 100% {\n    transform: scale(0);\n  }\n  40% {\n    transform: scale(1);\n  }\n}\n@keyframes uxlv7to {\n  0%, 100% {\n    background-color: var(--TD-pulsate-phase1-color);\n  }\n  24.9% {\n    background-color: var(--TD-pulsate-phase1-color);\n  }\n  25% {\n    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));\n  }\n  49.9% {\n    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));\n  }\n  50% {\n    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));\n  }\n  74.9% {\n    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));\n  }\n  75% {\n    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));\n  }\n  99.9% {\n    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));\n  }\n}');var K=Array.from({length:4},function(e,t){return"--TD-pulsate-phase".concat(t+1,"-color")}),Q=function(e){var t,n=V(null==e?void 0:e.style,null==e?void 0:e.size),r=n.styles,a=n.fontSize,o=null==e?void 0:e.easing,i=q(null==e?void 0:e.speedPlus,"1.2s").animationPeriod,s=function(e){var t={};if(e instanceof Array){for(var n=J(e,K.length),r=0;r<n.length&&!(r>=4);r++)t[K[r]]=n[r];return t}try{if("string"!=typeof e)throw Error("Color String expected");for(var a=0;a<K.length;a++)t[K[a]]=e}catch(n){for(n instanceof Error?console.warn("[".concat(n.message,']: Received "').concat(typeof e,'" instead with value, ').concat(JSON.stringify(e))):console.warn("".concat(JSON.stringify(e),' received in <ThreeDot variant="pulsate" /> indicator cannot be processed. Using default instead!')),a=0;a<K.length;a++)t[K[a]]=Y}return t}(null!=(t=null==e?void 0:e.color)?t:"");return l.default.createElement("span",{className:"rli-d-i-b pulsate-rli-bounding-box",style:d(d(d(d(d({},a&&{fontSize:a}),i&&{"--rli-animation-duration":i}),o&&{"--rli-animation-function":o}),s),r),role:"status","aria-live":"polite","aria-label":"Loading"},l.default.createElement("span",{className:"rli-d-i-b pulsate-indicator"},l.default.createElement("span",{className:"rli-d-i-b pulsate-dot"}),l.default.createElement("span",{className:"rli-d-i-b pulsate-dot"}),l.default.createElement("span",{className:"rli-d-i-b pulsate-dot"})),l.default.createElement(X,{staticText:!0,text:null==e?void 0:e.text,textColor:null==e?void 0:e.textColor}))};c('.brick-stack-rli-bounding-box {\n  --TD-brick-stack-phase1-color: rgb(50, 205, 50);\n  box-sizing: border-box;\n  font-size: 16px;\n  display: inline-block;\n  color: var(--TD-brick-stack-phase1-color);\n}\n.brick-stack-rli-bounding-box .brick-stack-indicator {\n  width: 2.8em;\n  height: 2.8em;\n  position: relative;\n  display: block;\n  margin: 0 auto;\n}\n.brick-stack-rli-bounding-box .brick-stack {\n  width: 100%;\n  height: 100%;\n  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;\n  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite uxlv7tu, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite uxlv7us;\n}\n\n@property --TD-brick-stack-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --TD-brick-stack-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --TD-brick-stack-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --TD-brick-stack-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 1s;\n}\n@keyframes uxlv7tu {\n  0% {\n    background-position: 0 0, 0 100%, 100% 100%;\n  }\n  25% {\n    background-position: 100% 0, 0 100%, 100% 100%;\n  }\n  50% {\n    background-position: 100% 0, 0 0, 100% 100%;\n  }\n  75% {\n    background-position: 100% 0, 0 0, 0 100%;\n  }\n  100% {\n    background-position: 100% 100%, 0 0, 0 100%;\n  }\n}\n@keyframes uxlv7us {\n  100%, 0% {\n    color: var(--TD-brick-stack-phase1-color);\n  }\n  20% {\n    color: var(--TD-brick-stack-phase1-color);\n  }\n  25% {\n    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));\n  }\n  45% {\n    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));\n  }\n  50% {\n    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));\n  }\n  70% {\n    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));\n  }\n  75% {\n    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));\n  }\n  95% {\n    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));\n  }\n}');var ee=Array.from({length:4},function(e,t){return"--TD-brick-stack-phase".concat(t+1,"-color")}),et=function(e){var t,n=V(null==e?void 0:e.style,null==e?void 0:e.size),r=n.styles,a=n.fontSize,o=null==e?void 0:e.easing,i=q(null==e?void 0:e.speedPlus,"1s").animationPeriod,s=function(e){var t={};if(e instanceof Array){for(var n=J(e,ee.length),r=0;r<n.length&&!(r>=4);r++)t[ee[r]]=n[r];return t}try{if("string"!=typeof e)throw Error("Color String expected");for(var a=0;a<ee.length;a++)t[ee[a]]=e}catch(n){for(n instanceof Error?console.warn("[".concat(n.message,']: Received "').concat(typeof e,'" instead with value, ').concat(JSON.stringify(e))):console.warn("".concat(JSON.stringify(e),' received in <ThreeDot variant="brick-stack" /> indicator cannot be processed. Using default instead!')),a=0;a<ee.length;a++)t[ee[a]]=Y}return t}(null!=(t=null==e?void 0:e.color)?t:"");return l.default.createElement("span",{className:"rli-d-i-b brick-stack-rli-bounding-box",style:d(d(d(d(d({},a&&{fontSize:a}),i&&{"--rli-animation-duration":i}),o&&{"--rli-animation-function":o}),s),r),role:"status","aria-live":"polite","aria-label":"Loading"},l.default.createElement("span",{className:"rli-d-i-b brick-stack-indicator"},l.default.createElement("span",{className:"rli-d-i-b brick-stack"})),l.default.createElement(X,{staticText:!0,text:null==e?void 0:e.text,textColor:null==e?void 0:e.textColor}))};c('.bob-rli-bounding-box {\n  --TD-bob-phase1-color: rgb(50, 205, 50);\n  box-sizing: border-box;\n  font-size: 16px;\n  display: inline-block;\n  color: var(--TD-bob-phase1-color);\n}\n.bob-rli-bounding-box .bob-indicator {\n  width: 4.4em;\n  height: 2.2em;\n  position: relative;\n  display: block;\n  margin: 0 auto;\n}\n.bob-rli-bounding-box .bob-indicator .bobbing,\n.bob-rli-bounding-box .bob-indicator .bobbing::before,\n.bob-rli-bounding-box .bob-indicator .bobbing::after {\n  width: 1.1em;\n  height: 100%;\n  display: grid;\n  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite uxlv7u0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite uxlv7vq;\n}\n.bob-rli-bounding-box .bob-indicator .bobbing::before,\n.bob-rli-bounding-box .bob-indicator .bobbing::after {\n  content: "";\n  grid-area: 1/1;\n}\n.bob-rli-bounding-box .bob-indicator .bobbing {\n  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);\n  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;\n}\n.bob-rli-bounding-box .bob-indicator .bobbing::before {\n  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);\n  transform: translateX(150%);\n  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;\n}\n.bob-rli-bounding-box .bob-indicator .bobbing::after {\n  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);\n  transform: translateX(300%);\n  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;\n}\n\n@property --TD-bob-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --TD-bob-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --TD-bob-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --TD-bob-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 1.2s;\n}\n@keyframes uxlv7u0 {\n  100%, 0% {\n    background-position: 50% 50%;\n  }\n  15% {\n    background-position: 50% 10%;\n  }\n  30% {\n    background-position: 50% 100%;\n  }\n  40% {\n    background-position: 50% 0%;\n  }\n  50% {\n    background-position: 50% 90%;\n  }\n  70% {\n    background-position: 50% 10%;\n  }\n  98% {\n    background-position: 50% 50%;\n  }\n}\n@keyframes uxlv7vq {\n  100%, 0% {\n    color: var(--TD-bob-phase1-color);\n  }\n  22% {\n    color: var(--TD-bob-phase1-color);\n  }\n  25% {\n    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));\n  }\n  47% {\n    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));\n  }\n  50% {\n    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));\n  }\n  72% {\n    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));\n  }\n  75% {\n    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));\n  }\n  97% {\n    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));\n  }\n}');var en=Array.from({length:4},function(e,t){return"--TD-bob-phase".concat(t+1,"-color")}),er=function(e){var t,n=V(null==e?void 0:e.style,null==e?void 0:e.size),r=n.styles,a=n.fontSize,o=null==e?void 0:e.easing,i=q(null==e?void 0:e.speedPlus,"1.2s").animationPeriod,s=function(e){var t={};if(e instanceof Array){for(var n=J(e,en.length),r=0;r<n.length&&!(r>=4);r++)t[en[r]]=n[r];return t}try{if("string"!=typeof e)throw Error("Color String expected");for(var a=0;a<en.length;a++)t[en[a]]=e}catch(n){for(n instanceof Error?console.warn("[".concat(n.message,']: Received "').concat(typeof e,'" instead with value, ').concat(JSON.stringify(e))):console.warn("".concat(JSON.stringify(e),' received in <ThreeDot variant="bob" /> indicator cannot be processed. Using default instead!')),a=0;a<en.length;a++)t[en[a]]=Y}return t}(null!=(t=null==e?void 0:e.color)?t:"");return l.default.createElement("span",{className:"rli-d-i-b bob-rli-bounding-box",style:d(d(d(d(d({},a&&{fontSize:a}),i&&{"--rli-animation-duration":i}),o&&{"--rli-animation-function":o}),s),r),role:"status","aria-live":"polite","aria-label":"Loading"},l.default.createElement("span",{className:"bob-indicator"},l.default.createElement("span",{className:"bobbing"})),l.default.createElement(X,{staticText:!0,text:null==e?void 0:e.text,textColor:null==e?void 0:e.textColor}))};c('.bounce-rli-bounding-box {\n  --TD-bounce-phase1-color: rgb(50, 205, 50);\n  font-size: 16px;\n  color: var(--TD-bounce-phase1-color);\n  display: inline-block;\n  padding-bottom: 0.25125em;\n}\n.bounce-rli-bounding-box .wrapper {\n  --dot1-delay: 0s;\n  --dot1-x-offset: 0.55em;\n  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);\n  --dot2-x-offset: 2.2em;\n  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);\n  --dot3-x-offset: 3.85em;\n  width: 5.5em;\n  height: 3.125em;\n  position: relative;\n  display: block;\n  margin: 0 auto;\n}\n.bounce-rli-bounding-box .wrapper .group {\n  display: block;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.bounce-rli-bounding-box .wrapper .group .dot {\n  width: 1.1em;\n  height: 1.1em;\n  position: absolute;\n  border-radius: 50%;\n  background-color: var(--TD-bounce-phase1-color);\n  transform-origin: 50%;\n  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7wc, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite uxlv7x6;\n}\n.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {\n  left: var(--dot1-x-offset);\n  animation-delay: var(--dot1-delay), 0s;\n}\n.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {\n  left: var(--dot2-x-offset);\n  animation-delay: var(--dot2-delay), 0s;\n}\n.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {\n  left: var(--dot3-x-offset);\n  animation-delay: var(--dot3-delay), 0s;\n}\n.bounce-rli-bounding-box .wrapper .group .shadow {\n  width: 1.1em;\n  height: 0.22em;\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, 0.5);\n  position: absolute;\n  top: 101%;\n  transform-origin: 50%;\n  z-index: -1;\n  filter: blur(1px);\n  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7ww;\n}\n.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {\n  left: var(--dot1-x-offset);\n  animation-delay: var(--dot1-delay);\n}\n.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {\n  left: var(--dot2-x-offset);\n  animation-delay: var(--dot2-delay);\n}\n.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {\n  left: var(--dot3-x-offset);\n  animation-delay: var(--dot3-delay);\n}\n\n@property --TD-bounce-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --TD-bounce-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --TD-bounce-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --TD-bounce-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 0.5s;\n}\n@keyframes uxlv7wc {\n  0% {\n    top: 0%;\n  }\n  60% {\n    height: 1.25em;\n    border-radius: 50%;\n    transform: scaleX(1);\n  }\n  100% {\n    top: 100%;\n    height: 0.22em;\n    transform: scaleX(1.5);\n    filter: blur(0.4px);\n  }\n}\n@keyframes uxlv7ww {\n  0% {\n    transform: scaleX(0.2);\n    opacity: 0.2;\n  }\n  60% {\n    opacity: 0.4;\n  }\n  100% {\n    transform: scaleX(1.5);\n    opacity: 0.6;\n  }\n}\n@keyframes uxlv7x6 {\n  0%, 100% {\n    background-color: var(--TD-bounce-phase1-color);\n  }\n  20% {\n    background-color: var(--TD-bounce-phase1-color);\n  }\n  25% {\n    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));\n  }\n  45% {\n    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));\n  }\n  50% {\n    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));\n  }\n  70% {\n    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));\n  }\n  75% {\n    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));\n  }\n  95% {\n    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));\n  }\n}');var ea=Array.from({length:4},function(e,t){return"--TD-bounce-phase".concat(t+1,"-color")}),eo=function(e){var t,n=V(null==e?void 0:e.style,null==e?void 0:e.size),r=n.styles,a=n.fontSize,o=null==e?void 0:e.easing,i=q(null==e?void 0:e.speedPlus,"0.5s").animationPeriod,s=function(e){var t={};if(e instanceof Array){for(var n=J(e,ea.length),r=0;r<n.length&&!(r>=4);r++)t[ea[r]]=n[r];return t}try{if("string"!=typeof e)throw Error("Color String expected");for(var a=0;a<ea.length;a++)t[ea[a]]=e}catch(e){for(a=0;a<ea.length;a++)t[ea[a]]=Y}return t}(null!=(t=null==e?void 0:e.color)?t:"");return l.default.createElement("span",{className:"rli-d-i-b bounce-rli-bounding-box",style:d(d(d(d(d({},a&&{fontSize:a}),i&&{"--rli-animation-duration":i}),o&&{"--rli-animation-function":o}),s),r)},l.default.createElement("span",{className:"wrapper"},l.default.createElement("span",{className:"group"},l.default.createElement("span",{className:"rli-d-i-b dot"}),l.default.createElement("span",{className:"rli-d-i-b dot"}),l.default.createElement("span",{className:"rli-d-i-b dot"})),l.default.createElement("span",{className:"group"},l.default.createElement("span",{className:"rli-d-i-b shadow"}),l.default.createElement("span",{className:"rli-d-i-b shadow"}),l.default.createElement("span",{className:"rli-d-i-b shadow"}))),l.default.createElement(X,{staticText:!0,text:null==e?void 0:e.text,textColor:null==e?void 0:e.textColor,style:{marginTop:"2px"}}))},ei=function(e){var t=Object(e).variant,n=void 0===t?"pulsate":t;return"pulsate"===n?l.default.createElement(Q,d({},e)):"brick-stack"===n?l.default.createElement(et,d({},e)):"bob"===n?l.default.createElement(er,d({},e)):"bounce"===n?l.default.createElement(eo,d({},e)):null};c('.blink-blur-rli-bounding-box {\n  --shape-phase1-color: rgb(50, 205, 50);\n  font-size: 16px;\n  color: var(--shape-phase1-color);\n}\n.blink-blur-rli-bounding-box .blink-blur-indicator {\n  isolation: isolate;\n  display: flex;\n  flex-direction: row;\n  -moz-column-gap: 0.4em;\n       column-gap: 0.4em;\n}\n.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {\n  --x-deg: -20deg;\n  width: 1.8em;\n  height: 2.25em;\n  border-radius: 0.25em;\n  color: inherit;\n  transform: skewX(var(--x-deg));\n  background-color: var(--shape-phase1-color);\n  animation-name: uxlv7id, uxlv7jl;\n  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);\n  animation-timing-function: var(--rli-animation-function, ease-in);\n  animation-iteration-count: infinite;\n}\n.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);\n}\n.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);\n}\n.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);\n}\n.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);\n}\n.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);\n}\n\n@property --shape-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --shape-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --shape-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --shape-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 1.2s;\n}\n@keyframes uxlv7id {\n  100%, 0% {\n    opacity: 0.3;\n    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);\n    transform: skewX(var(--x-deg)) scale(1.2, 1.45);\n  }\n  39% {\n    opacity: 0.8;\n  }\n  40%, 41%, 42% {\n    opacity: 0;\n  }\n  43% {\n    opacity: 0.8;\n  }\n  50% {\n    opacity: 1;\n    filter: blur(0em) drop-shadow(0 0 0em);\n    transform: skewX(var(--x-deg)) scale(1, 1);\n  }\n}\n@keyframes uxlv7jl {\n  100%, 0% {\n    color: var(--shape-phase1-color);\n    background-color: var(--shape-phase1-color);\n  }\n  25% {\n    color: var(--shape-phase2-color, var(--shape-phase1-color));\n    background-color: var(--shape-phase2-color, var(--shape-phase1-color));\n  }\n  50% {\n    color: var(--shape-phase3-color, var(--shape-phase1-color));\n    background-color: var(--shape-phase3-color, var(--shape-phase1-color));\n  }\n  75% {\n    color: var(--shape-phase4-color, var(--shape-phase1-color));\n    background-color: var(--shape-phase4-color, var(--shape-phase1-color));\n  }\n}'),Array.from({length:4},function(e,t){return"--shape-phase".concat(t+1,"-color")}),c('.trophy-spin-rli-bounding-box {\n  --trophySpin-phase1-color: rgb(50, 205, 50);\n  box-sizing: border-box;\n  font-size: 16px;\n  position: relative;\n  isolation: isolate;\n  color: var(--trophySpin-phase1-color);\n}\n.trophy-spin-rli-bounding-box .trophy-spin-indicator {\n  width: 4em;\n  perspective: 1000px;\n  transform-style: preserve-3d;\n  display: block;\n  margin: 0 auto;\n}\n.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {\n  display: block;\n  width: 4em;\n  height: 0.5em;\n  background: var(--trophySpin-phase1-color);\n  animation: uxlv7ki var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, uxlv7l2 calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, uxlv7ly calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;\n}\n.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {\n  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);\n}\n.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {\n  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);\n}\n.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {\n  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);\n}\n.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {\n  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);\n}\n.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {\n  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);\n}\n.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {\n  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);\n}\n.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {\n  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);\n}\n.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {\n  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);\n}\n\n@property --trophySpin-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --trophySpin-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --trophySpin-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --trophySpin-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 2.5s;\n}\n@keyframes uxlv7ki {\n  to {\n    transform: rotateY(1turn) rotateX(-25deg);\n  }\n}\n@keyframes uxlv7l2 {\n  100%, 0% {\n    filter: brightness(1);\n    opacity: 1;\n  }\n  15% {\n    filter: brightness(1);\n  }\n  25% {\n    opacity: 0.96;\n  }\n  30% {\n    filter: brightness(0.92);\n  }\n  50% {\n    filter: brightness(0.7);\n    opacity: 1;\n  }\n  75% {\n    filter: brightness(0.92);\n    opacity: 0.96;\n  }\n  90% {\n    filter: brightness(1);\n  }\n}\n@keyframes uxlv7ly {\n  100%, 0% {\n    background-color: var(--trophySpin-phase1-color);\n  }\n  18% {\n    background-color: var(--trophySpin-phase1-color);\n  }\n  25% {\n    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));\n  }\n  43% {\n    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));\n  }\n  50% {\n    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));\n  }\n  68% {\n    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));\n  }\n  75% {\n    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));\n  }\n  93% {\n    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));\n  }\n}'),Array.from({length:4},function(e,t){return"--trophySpin-phase".concat(t+1,"-color")}),c('.slab-rli-bounding-box {\n  --slab-phase1-color: rgb(50, 205, 50);\n  font-size: 16px;\n  color: var(--slab-phase1-color);\n  position: relative;\n}\n.slab-rli-bounding-box .slab-indicator {\n  position: relative;\n  display: block;\n  width: 7em;\n  height: 4em;\n  margin: 0 auto;\n  overflow: hidden;\n}\n.slab-rli-bounding-box .slab-indicator .slabs-wrapper {\n  width: 4em;\n  height: 4em;\n  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);\n  transform-style: preserve-3d;\n  transform-origin: 50% 100%;\n  display: block;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n}\n.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: var(--slab-phase1-color);\n  opacity: 0;\n  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);\n  transform-origin: 0% 0%;\n  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite uxlv7md, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite uxlv7n0;\n}\n.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {\n  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);\n}\n.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {\n  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);\n}\n.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {\n  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);\n}\n.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {\n  animation-delay: 0s;\n}\n\n@property --slab-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --slab-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --slab-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --slab-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration-unitless {\n  syntax: "<number>";\n  inherits: true;\n  initial-value: 3;\n}\n@keyframes uxlv7md {\n  0% {\n    transform: translateY(0) rotateX(30deg);\n    opacity: 0;\n  }\n  10% {\n    transform: translateY(-40%) rotateX(0deg);\n    opacity: 1;\n  }\n  25% {\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(-400%) rotateX(0deg);\n    opacity: 0;\n  }\n}\n@keyframes uxlv7n0 {\n  100%, 0% {\n    background-color: var(--slab-phase1-color);\n  }\n  24.9% {\n    background-color: var(--slab-phase1-color);\n  }\n  25% {\n    background-color: var(--slab-phase2-color, var(--slab-phase1-color));\n  }\n  49.9% {\n    background-color: var(--slab-phase2-color, var(--slab-phase1-color));\n  }\n  50% {\n    background-color: var(--slab-phase3-color, var(--slab-phase1-color));\n  }\n  74.9% {\n    background-color: var(--slab-phase3-color, var(--slab-phase1-color));\n  }\n  75% {\n    background-color: var(--slab-phase4-color, var(--slab-phase1-color));\n  }\n  99.9% {\n    background-color: var(--slab-phase4-color, var(--slab-phase1-color));\n  }\n}'),Array.from({length:4},function(e,t){return"--slab-phase".concat(t+1,"-color")}),c('.lifeline-rli-bounding-box {\n  --life-line-phase1-color: rgb(50, 205, 50);\n  font-size: 16px;\n  isolation: isolate;\n  color: var(--life-line-phase1-color);\n}\n.lifeline-rli-bounding-box .lifeline-indicator {\n  position: relative;\n  text-align: center;\n}\n.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {\n  stroke-dasharray: 474.7616760254 30.3039367676;\n  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite uxlv7k3, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite uxlv7kg;\n}\n.lifeline-rli-bounding-box .lifeline-text {\n  color: currentColor;\n  mix-blend-mode: difference;\n  width: unset;\n  display: block;\n}\n\n@property --life-line-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --life-line-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --life-line-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --life-line-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 2s;\n}\n@keyframes uxlv7k3 {\n  to {\n    stroke-dashoffset: -1010.1312255859;\n  }\n}\n@keyframes uxlv7kg {\n  100%, 0% {\n    color: var(--life-line-phase1-color);\n  }\n  20% {\n    color: var(--life-line-phase1-color);\n  }\n  25% {\n    color: var(--life-line-phase2-color, var(--life-line-phase1-color));\n  }\n  45% {\n    color: var(--life-line-phase2-color, var(--life-line-phase1-color));\n  }\n  50% {\n    color: var(--life-line-phase3-color, var(--life-line-phase1-color));\n  }\n  70% {\n    color: var(--life-line-phase3-color, var(--life-line-phase1-color));\n  }\n  75% {\n    color: var(--life-line-phase4-color, var(--life-line-phase1-color));\n  }\n  95% {\n    color: var(--life-line-phase4-color, var(--life-line-phase1-color));\n  }\n}'),Array.from({length:4},function(e,t){return"--life-line-phase".concat(t+1,"-color")});var es=e.i(97053);let el=es.default.div.withConfig({displayName:"Loader.styles__LoaderContainer",componentId:"sc-c4a451a4-0"})`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:e})=>e.colors.bgPrimary};
  z-index: 9999;
  overflow: hidden;
`,ec=()=>((0,l.useEffect)(()=>(window.scrollTo(0,0),document.body.style.overflow="hidden",()=>{document.body.style.overflow="unset"}),[]),(0,s.jsx)(el,{children:(0,s.jsx)(ei,{color:"#ffffff",size:"small",text:"",textColor:""})})),ed=e=>{let t=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase());return t.charAt(0).toUpperCase()+t.slice(1)},eu=(...e)=>e.filter((e,t,n)=>!!e&&""!==e.trim()&&n.indexOf(e)===t).join(" ").trim();var ep={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let eh=(0,l.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:a="",children:o,iconNode:i,...s},c)=>(0,l.createElement)("svg",{ref:c,...ep,width:t,height:t,stroke:e,strokeWidth:r?24*Number(n)/Number(t):n,className:eu("lucide",a),...!o&&!(e=>{for(let t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0})(s)&&{"aria-hidden":"true"},...s},[...i.map(([e,t])=>(0,l.createElement)(e,t)),...Array.isArray(o)?o:[o]])),ef=(e,t)=>{let n=(0,l.forwardRef)(({className:n,...r},a)=>(0,l.createElement)(eh,{ref:a,iconNode:t,className:eu(`lucide-${ed(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,n),...r}));return n.displayName=ed(e),n},em=ef("moon",[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]),eg=ef("sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);var eb=e.i(59657);let ey=es.keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,ev=es.keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,ex=es.keyframes`
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,ew=es.keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,ek=es.keyframes`
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
`,e$=es.default.nav.withConfig({displayName:"NavBar.styles__StyledNavbar",componentId:"sc-eefaf6bf-0"})`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: ${({theme:e})=>e.zIndex.sticky};
  background-color: ${({theme:e})=>"dark"===e.mode?"rgba(10, 10, 10, 0.8)":"rgba(255, 255, 255, 0.8)"};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
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
    position: fixed;
    padding: ${({theme:e})=>e.spacing.md} 0;
  }
`,e_=es.default.div.withConfig({displayName:"NavBar.styles__NavbarContent",componentId:"sc-eefaf6bf-1"})`
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
`,ej=es.default.a.withConfig({displayName:"NavBar.styles__Logo",componentId:"sc-eefaf6bf-2"})`
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
`,eS=es.default.div.withConfig({displayName:"NavBar.styles__NavRight",componentId:"sc-eefaf6bf-3"})`
  display: flex;
  align-items: center;
  gap: 0;

  @media (max-width: 768px) {
    display: none;
  }
`,eO=es.default.div.withConfig({displayName:"NavBar.styles__MobileNavRight",componentId:"sc-eefaf6bf-4"})`
  display: none;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};

  @media (max-width: 768px) {
    display: flex;
  }
`,eC=es.default.button.withConfig({displayName:"NavBar.styles__MobileNavThemeToggleButton",componentId:"sc-eefaf6bf-5"})`
  background-color: transparent;
  border: none;
  color: ${({theme:e})=>e.colors.textPrimary};
  padding: ${({theme:e})=>e.spacing.xs};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  transition: all ${({theme:e})=>e.transitions.base};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;

  &:hover {
    background-color: ${({theme:e})=>e.colors.bgSecondary};
    color: ${({theme:e})=>e.colors.accent};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`,eP=es.default.ul.withConfig({displayName:"NavBar.styles__NavLinks",componentId:"sc-eefaf6bf-6"})`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.xl};
  list-style: none;
  margin: 0;
  padding: 0;
`,eE=es.default.a.withConfig({displayName:"NavBar.styles__NavLink",componentId:"sc-eefaf6bf-7"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyHeading};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  text-transform: capitalize;
  letter-spacing: 0.05em;
  color: ${({theme:e})=>e.colors.textPrimary};
  transition: color ${({theme:e})=>e.transitions.fast};

  &:hover {
    color: ${({theme:e})=>e.colors.textSecondary};
  }
`,eT=es.default.button.withConfig({displayName:"NavBar.styles__MobileMenuButton",componentId:"sc-eefaf6bf-8"})`
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
`,ez=es.default.span.withConfig({displayName:"NavBar.styles__HamburgerLine",componentId:"sc-eefaf6bf-9"})`
  display: block;
  height: 2px;
  background-color: ${({theme:e})=>e.colors.textPrimary};
  transition: all ${({theme:e})=>e.transitions.base};
  border-radius: 2px;

  ${({$index:e})=>{switch(e){case 0:return es.css`
          width: 12px;
          align-self: flex-end;
        `;case 1:return es.css`
          align-self: flex-end;
          width: 18px;
        `;case 2:return es.css`
          width: 24px;
        `}}}

  ${({$isOpen:e,$index:t})=>e&&es.css`
      ${0===t&&es.css`
        width: 32px;
        transform: rotate(45deg) translate(10px, 10px);
      `}
      ${1===t&&es.css`
        opacity: 0;
        transform: translateX(-10px);
      `}
      ${2===t&&es.css`
        width: 32px;
        transform: rotate(-45deg) translate(10px, -10px);
      `}
    `}
`,eN=es.default.div.withConfig({displayName:"NavBar.styles__MobileMenu",componentId:"sc-eefaf6bf-10"})`
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
  animation: ${ev} ${({theme:e})=>e.transitions.slow} ease-out;
`,eA=es.default.div.withConfig({displayName:"NavBar.styles__MobileMenuContent",componentId:"sc-eefaf6bf-11"})`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;
`,eI=es.default.div.withConfig({displayName:"NavBar.styles__MobileMenuHeader",componentId:"sc-eefaf6bf-12"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: ${({theme:e})=>e.spacing.sm};
  padding-bottom: ${({theme:e})=>e.spacing.sm};
`,eF=es.default.div.withConfig({displayName:"NavBar.styles__MobileMenuHeaderRight",componentId:"sc-eefaf6bf-13"})`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
`,eM=es.default.a.withConfig({displayName:"NavBar.styles__MobileMenuLogo",componentId:"sc-eefaf6bf-14"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyHeading};
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.textPrimary};
  text-decoration: none;
  opacity: 0;
  animation: ${ew} 0.4s ease-out 0.1s forwards;
`,eD=es.default.button.withConfig({displayName:"NavBar.styles__MobileMenuCloseButton",componentId:"sc-eefaf6bf-15"})`
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
  animation: ${ek} 0.6s ease-out 0.1s forwards;

  &:hover {
    color: ${({theme:e})=>e.colors.accent};
  }
`,eR=es.default.hr.withConfig({displayName:"NavBar.styles__MobileMenuDivider",componentId:"sc-eefaf6bf-16"})`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
  margin: 0;
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  width: 100%;
`,eL=es.default.ul.withConfig({displayName:"NavBar.styles__MobileNavLinks",componentId:"sc-eefaf6bf-17"})`
  display: flex;
  flex-direction: column;
  gap: 0;
  list-style: none;
  flex: 1;
  justify-content: flex-start;
`,eB=es.default.li.withConfig({displayName:"NavBar.styles__MobileNavLinkItem",componentId:"sc-eefaf6bf-18"})`
  opacity: 0;
  animation: ${ew} 0.4s ease-out forwards;
  animation-delay: ${({$index:e})=>.1+.1*e}s;
`,eH=es.default.a.withConfig({displayName:"NavBar.styles__MobileNavLink",componentId:"sc-eefaf6bf-19"})`
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  padding: ${({theme:e})=>e.spacing.sm} 0;
  display: block;
  transition: all ${({theme:e})=>e.transitions.base};
  font-family: ${({theme:e})=>e.typography.fontFamilyHeading};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  text-transform: capitalize;
  letter-spacing: 0.05em;
  color: ${({theme:e})=>e.colors.textPrimary};
  text-decoration: none;

  &:hover {
    color: ${({theme:e})=>e.colors.accent};
    padding-left: ${({theme:e})=>e.spacing.sm};
  }
`,eW=es.default.button.withConfig({displayName:"NavBar.styles__ThemeToggleButton",componentId:"sc-eefaf6bf-20"})`
  background-color: transparent;
  border: none;
  color: ${({theme:e})=>e.colors.textPrimary};
  padding: ${({theme:e})=>e.spacing.xs};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  transition: all ${({theme:e})=>e.transitions.base};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin-left: ${({theme:e})=>e.spacing.lg};

  &:hover {
    background-color: ${({theme:e})=>e.colors.bgSecondary};
    color: ${({theme:e})=>e.colors.accent};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    display: none;
  }
`,eU=es.default.button.withConfig({displayName:"NavBar.styles__MobileThemeToggleButton",componentId:"sc-eefaf6bf-21"})`
  background-color: transparent;
  border: none;
  color: ${({theme:e})=>e.colors.textPrimary};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  transition: all ${({theme:e})=>e.transitions.base};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing.sm};
  font-family: ${({theme:e})=>e.typography.fontFamilyBody};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  
  ${({$isInHeader:e})=>e?es.css`
          padding: ${({theme:e})=>e.spacing.xs};
          width: 40px;
          height: 40px;
          opacity: 0;
          animation: ${ek} 0.6s ease-out 0.15s forwards;
        `:es.css`
          padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.lg};
          width: 100%;
          font-size: ${({theme:e})=>e.typography.fontSize.base};
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-top: ${({theme:e})=>e.spacing.md};
        `}

  &:hover {
    background-color: ${({theme:e})=>e.colors.bgSecondary};
    color: ${({theme:e})=>e.colors.accent};
    transform: ${({$isInHeader:e})=>e?"scale(1.1)":"none"};
  }

  &:active {
    transform: ${({$isInHeader:e})=>e?"scale(0.95)":"none"};
  }
`,eq=es.default.a.withConfig({displayName:"NavBar.styles__ResumeButton",componentId:"sc-eefaf6bf-22"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyBody};
  background-color: transparent;
  border: 1px solid ${({theme:e})=>e.colors.textPrimary};
  color: ${({theme:e})=>e.colors.textPrimary};
  padding: ${({theme:e})=>e.spacing.xs} ${({theme:e})=>e.spacing.lg};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  text-transform: capitalize;
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
`,eV=es.default.div.withConfig({displayName:"NavBar.styles__ResumeModalOverlay",componentId:"sc-eefaf6bf-23"})`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  background-color: ${({theme:e})=>"dark"===e.mode?"rgba(0, 0, 0, 0.8)":"rgba(0, 0, 0, 0.5)"};
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${({theme:e})=>e.zIndex.modal};
  padding: ${({theme:e})=>e.spacing.xl};
  animation: ${ey} 0.2s ease-out;
`,eG=es.default.div.withConfig({displayName:"NavBar.styles__ResumeModal",componentId:"sc-eefaf6bf-24"})`
  background-color: ${({theme:e})=>e.colors.bgSecondary};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: ${({theme:e})=>e.spacing["2xl"]};
  padding-top: ${({theme:e})=>e.spacing["3xl"]};
  max-width: 450px;
  width: 100%;
  position: relative;
  animation: ${ex} 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    padding: ${({theme:e})=>e.spacing.xl};
  }
`,eX=es.default.h3.withConfig({displayName:"NavBar.styles__ResumeModalTitle",componentId:"sc-eefaf6bf-25"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyHeading};
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.textPrimary};
  margin: 0 0 ${({theme:e})=>e.spacing.md} 0;
  line-height: 1.2;
`,eY=es.default.p.withConfig({displayName:"NavBar.styles__ResumeModalText",componentId:"sc-eefaf6bf-26"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyBody};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  color: ${({theme:e})=>e.colors.textSecondary};
  margin: 0 0 ${({theme:e})=>e.spacing.xl} 0;
  line-height: 1.6;
`,eJ=es.default.div.withConfig({displayName:"NavBar.styles__ResumeModalButtons",componentId:"sc-eefaf6bf-27"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.md};
`,eZ=es.default.button.withConfig({displayName:"NavBar.styles__ResumeModalButton",componentId:"sc-eefaf6bf-28"})`
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
`,eK=es.default.button.withConfig({displayName:"NavBar.styles__ResumeModalClose",componentId:"sc-eefaf6bf-29"})`
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
`,eQ=({name:e,navItems:t=[{label:"Work",href:"#work"},{label:"Experience",href:"#experience"},{label:"About",href:"#about"},{label:"Contact",href:"#contact"}]})=>{let{theme:n,toggleTheme:r}=(()=>{let e=(0,l.useContext)(eb.ThemeContext);if(void 0===e)throw Error("useTheme must be used within a ThemeContextProvider");return e})(),[a,o]=(0,l.useState)(!1),[i,c]=(0,l.useState)(!1);(0,l.useEffect)(()=>(a||i?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[a,i]);let d=()=>{o(!1)},u=e=>{e.preventDefault(),c(!0)},p=()=>{c(!1)};return(0,s.jsxs)(e$,{$mobileMenuActive:a,children:[(0,s.jsxs)(e_,{children:[(0,s.jsx)(ej,{href:"#",children:e}),(0,s.jsxs)(eS,{children:[(0,s.jsx)(eP,{children:t.map(e=>(0,s.jsx)("li",{children:(0,s.jsx)(eE,{href:e.href,children:e.label})},e.href))}),(0,s.jsx)(eW,{onClick:r,"aria-label":"dark"===n?"Switch to light mode":"Switch to dark mode",title:"dark"===n?"Switch to light mode":"Switch to dark mode",children:"dark"===n?(0,s.jsx)(eg,{size:20}):(0,s.jsx)(em,{size:20})}),(0,s.jsx)(eq,{href:"#",onClick:u,children:"Resume"})]}),(0,s.jsxs)(eO,{children:[(0,s.jsx)(eC,{onClick:r,"aria-label":"dark"===n?"Switch to light mode":"Switch to dark mode",title:"dark"===n?"Switch to light mode":"Switch to dark mode",children:"dark"===n?(0,s.jsx)(eg,{size:20}):(0,s.jsx)(em,{size:20})}),(0,s.jsxs)(eT,{$isOpen:a,onClick:()=>{o(!a)},"aria-label":"Toggle menu",children:[(0,s.jsx)(ez,{$index:0,$isOpen:a}),(0,s.jsx)(ez,{$index:1,$isOpen:a}),(0,s.jsx)(ez,{$index:2,$isOpen:a})]})]})]}),(0,s.jsx)(eN,{$isOpen:a,onClick:e=>{e.target===e.currentTarget&&d()},children:(0,s.jsxs)(eA,{children:[(0,s.jsxs)(eI,{children:[(0,s.jsx)(eM,{href:"#",onClick:d,children:e}),(0,s.jsxs)(eF,{children:[(0,s.jsx)(eU,{onClick:()=>{r()},"aria-label":"dark"===n?"Switch to light mode":"Switch to dark mode",$isInHeader:!0,children:"dark"===n?(0,s.jsx)(eg,{size:20}):(0,s.jsx)(em,{size:20})}),(0,s.jsx)(eD,{onClick:d,"aria-label":"Close menu",children:"×"})]})]}),(0,s.jsx)(eR,{}),(0,s.jsxs)(eL,{children:[t.map((e,t)=>(0,s.jsx)(eB,{$index:t,children:(0,s.jsx)(eH,{href:e.href,onClick:d,children:e.label})},e.href)),(0,s.jsx)(eB,{$index:t.length,children:(0,s.jsx)(eH,{href:"#",onClick:e=>{e.preventDefault(),d(),u(e)},children:"Resume"})})]}),(0,s.jsxs)(eU,{onClick:()=>{r()},"aria-label":"dark"===n?"Switch to light mode":"Switch to dark mode",$isInMenu:!0,children:["dark"===n?(0,s.jsx)(eg,{size:20}):(0,s.jsx)(em,{size:20}),(0,s.jsx)("span",{children:"dark"===n?"Light Mode":"Dark Mode"})]})]})}),i&&(0,s.jsx)(eV,{onClick:p,children:(0,s.jsxs)(eG,{onClick:e=>e.stopPropagation(),children:[(0,s.jsx)(eX,{children:"Resume Options"}),(0,s.jsx)(eY,{children:"Choose an option:"}),(0,s.jsxs)(eJ,{children:[(0,s.jsx)(eZ,{onClick:()=>{window.open("/resume/umarnazir.pdf","_blank"),c(!1)},children:"View Resume"}),(0,s.jsx)(eZ,{onClick:()=>{let e=document.createElement("a");e.href="/resume/umarnazir.pdf",e.download="umarnazir.pdf",document.body.appendChild(e),e.click(),document.body.removeChild(e),c(!1)},children:"Download Resume"})]}),(0,s.jsx)(eK,{onClick:p,"aria-label":"Close modal",children:"×"})]})})]})},e0=es.default.div.withConfig({displayName:"HeroContent.styles__HeroText",componentId:"sc-5ac6c28e-0"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.xl};
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    gap: ${({theme:e})=>e.spacing.md};
  }
`,e1=es.default.p.withConfig({displayName:"HeroContent.styles__Subtitle",componentId:"sc-5ac6c28e-1"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyBody};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin: 0;
`,e2=es.default.div.withConfig({displayName:"HeroContent.styles__Title",componentId:"sc-5ac6c28e-2"})`
  display: flex;
  flex-direction: column;
  gap: 0;
  line-height: 1;
  align-items: center;
`,e5=es.default.h2.withConfig({displayName:"HeroContent.styles__Headline",componentId:"sc-5ac6c28e-3"})`
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
`,e4=es.default.p.withConfig({displayName:"HeroContent.styles__Description",componentId:"sc-5ac6c28e-4"})`
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
`,e3=({title:e,headline:t,description:n})=>{let r=t.split("\n").filter(e=>""!==e.trim());return(0,s.jsxs)(e0,{children:[(0,s.jsx)(e1,{"data-aos":"fade-up","data-aos-delay":"0",children:e}),(0,s.jsx)(e2,{children:r.map((e,t)=>(0,s.jsx)(e5,{"data-aos":"fade-up","data-aos-delay":`${100+100*t}`,children:e.trim()},t))}),(0,s.jsx)(e4,{"data-aos":"fade-up","data-aos-delay":"400",children:n})]})},e6=es.keyframes`
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
`,e8=es.default.div.withConfig({displayName:"ScrollIndicator.styles__ScrollIndicatorWrapper",componentId:"sc-fa897f55-0"})`
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
`,e7=es.default.div.withConfig({displayName:"ScrollIndicator.styles__ScrollLine",componentId:"sc-fa897f55-1"})`
  width: 1px;
  height: 40px;
  background-color: ${({theme:e})=>e.colors.textSecondary};
  animation: ${e6} 2s ease-in-out infinite;

  @media (max-width: 768px) {
    height: 30px;
  }
`,e9=()=>(0,s.jsxs)(e8,{children:[(0,s.jsx)("span",{children:"SCROLL TO EXPLORE"}),(0,s.jsx)(e7,{})]}),te=es.default.section.withConfig({displayName:"Hero.styles__StyledHero",componentId:"sc-8af8d994-0"})`
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
`,tt=es.default.div.withConfig({displayName:"Hero.styles__HeroContentWrapper",componentId:"sc-8af8d994-1"})`
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
`,tn=({title:e,headline:t,description:n})=>(0,s.jsxs)(te,{children:[(0,s.jsx)(tt,{children:(0,s.jsx)(e3,{title:e,headline:t,description:n})}),(0,s.jsx)(e9,{})]});var tr=e.i(5329);let ta=ef("corner-right-down",[["path",{d:"m10 15 5 5 5-5",key:"1hpjnr"}],["path",{d:"M4 4h7a4 4 0 0 1 4 4v12",key:"wcbgct"}]]),to=ef("corner-right-up",[["path",{d:"m10 9 5-5 5 5",key:"9ctzwi"}],["path",{d:"M4 20h7a4 4 0 0 0 4-4V4",key:"1plgdj"}]]),ti=es.default.button.withConfig({displayName:"Button.styles__StyledButton",componentId:"sc-d2ac6181-0"})`
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

  ${({$variant:e="primary"})=>{switch(e){case"primary":return es.css`
          background-color: ${({theme:e})=>e.colors.bgSecondary};
          border-color: ${({theme:e})=>e.colors.border};
          color: ${({theme:e})=>e.colors.textPrimary};

          &:hover:not(:disabled) {
            background-color: ${({theme:e})=>e.colors.bgTertiary};
            border-color: ${({theme:e})=>e.colors.textSecondary};
          }
        `;case"secondary":return es.css`
          background-color: transparent;
          border-color: ${({theme:e})=>e.colors.border};
          color: ${({theme:e})=>e.colors.textPrimary};

          &:hover:not(:disabled) {
            border-color: ${({theme:e})=>e.colors.accent};
            color: ${({theme:e})=>e.colors.accent};
          }
        `;case"accent":return es.css`
          background-color: ${({theme:e})=>e.colors.accent};
          color: ${({theme:e})=>e.colors.textPrimary};

          &:hover:not(:disabled) {
            background-color: ${({theme:e})=>e.colors.accentHover};
          }
        `}}}

  ${({$size:e="medium"})=>{switch(e){case"small":return es.css`
          padding: ${({theme:e})=>e.spacing.xs} ${({theme:e})=>e.spacing.md};
          font-size: ${({theme:e})=>e.typography.fontSize.xs};
        `;case"medium":return es.css`
          padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.lg};
          font-size: ${({theme:e})=>e.typography.fontSize.sm};
        `;case"large":return es.css`
          padding: ${({theme:e})=>e.spacing.md} ${({theme:e})=>e.spacing.xl};
          font-size: ${({theme:e})=>e.typography.fontSize.base};
        `}}}

  ${({$fullWidth:e})=>e&&es.css`
      width: 100%;
    `}
`,ts=es.default.a.withConfig({displayName:"Button.styles__StyledButtonLink",componentId:"sc-d2ac6181-1"})`
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

  ${({$variant:e="primary"})=>{switch(e){case"primary":return es.css`
          background-color: ${({theme:e})=>e.colors.bgSecondary};
          border-color: ${({theme:e})=>e.colors.border};
          color: ${({theme:e})=>e.colors.textPrimary};

          &:hover {
            background-color: ${({theme:e})=>e.colors.bgTertiary};
            border-color: ${({theme:e})=>e.colors.textSecondary};
          }
        `;case"secondary":return es.css`
          background-color: transparent;
          border-color: ${({theme:e})=>e.colors.border};
          color: ${({theme:e})=>e.colors.textPrimary};

          &:hover {
            border-color: ${({theme:e})=>e.colors.accent};
            color: ${({theme:e})=>e.colors.accent};
          }
        `;case"accent":return es.css`
          background-color: ${({theme:e})=>e.colors.accent};
          color: ${({theme:e})=>e.colors.textPrimary};

          &:hover {
            background-color: ${({theme:e})=>e.colors.accentHover};
          }
        `}}}

  ${({$size:e="medium"})=>{switch(e){case"small":return es.css`
          padding: ${({theme:e})=>e.spacing.xs} ${({theme:e})=>e.spacing.md};
          font-size: ${({theme:e})=>e.typography.fontSize.xs};
        `;case"medium":return es.css`
          padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.lg};
          font-size: ${({theme:e})=>e.typography.fontSize.sm};
        `;case"large":return es.css`
          padding: ${({theme:e})=>e.spacing.md} ${({theme:e})=>e.spacing.xl};
          font-size: ${({theme:e})=>e.typography.fontSize.base};
        `}}}

  ${({$fullWidth:e})=>e&&es.css`
      width: 100%;
    `}
`;l.default.forwardRef(({variant:e="primary",size:t="medium",fullWidth:n=!1,icon:r,iconPosition:a="left",children:o,className:i="",as:l="button",href:c,...d},u)=>{let p=(0,s.jsxs)(s.Fragment,{children:[r&&"left"===a&&(0,s.jsx)(r,{size:16}),o,r&&"right"===a&&(0,s.jsx)(r,{size:16})]});return"a"===l&&c?(0,s.jsx)(ts,{ref:u,$variant:e,$size:t,$fullWidth:n,href:c,className:i,...d,children:p}):(0,s.jsx)(ti,{ref:u,$variant:e,$size:t,$fullWidth:n,className:i,...d,children:p})}).displayName="Button",es.default.div.withConfig({displayName:"Card.styles__StyledCard",componentId:"sc-cb91bbca-0"})`
  background-color: ${({theme:e})=>e.colors.bgSecondary};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: ${({theme:e})=>e.spacing.xl};
  transition: all ${({theme:e})=>e.transitions.base};

  &:hover {
    border-color: ${({theme:e})=>e.colors.textSecondary};
    transform: translateY(-2px);
  }

  ${({$interactive:e})=>e&&es.css`
      cursor: pointer;

      &:hover {
        border-color: ${({theme:e})=>e.colors.accent};
      }
    `}
`;let tl=es.default.span.withConfig({displayName:"Tag.styles__StyledTag",componentId:"sc-ea18aa85-0"})`
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
`,tc=({children:e,className:t=""})=>(0,s.jsx)(tl,{className:t,children:e}),td=es.default.div.withConfig({displayName:"Input.styles__InputWrapper",componentId:"sc-7de3a321-0"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.xs};
  width: ${({$fullWidth:e=!0})=>e?"100%":"auto"};
`,tu=es.default.label.withConfig({displayName:"Input.styles__Label",componentId:"sc-7de3a321-1"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyBody};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({theme:e})=>e.colors.textSecondary};
`,tp=es.default.input.withConfig({displayName:"Input.styles__StyledInput",componentId:"sc-7de3a321-2"})`
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
`,th=es.default.textarea.withConfig({displayName:"Input.styles__StyledTextarea",componentId:"sc-7de3a321-3"})`
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
`,tf=es.default.span.withConfig({displayName:"Input.styles__ErrorMessage",componentId:"sc-7de3a321-4"})`
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: #ef4444;
`,tm=({label:e,error:t,fullWidth:n=!0,className:r="",...a})=>(0,s.jsxs)(td,{$fullWidth:n,children:[e&&(0,s.jsx)(tu,{children:e}),(0,s.jsx)(tp,{$error:!!t,className:r,...a}),t&&(0,s.jsx)(tf,{children:t})]}),tg=({label:e,error:t,fullWidth:n=!0,className:r="",...a})=>(0,s.jsxs)(td,{$fullWidth:n,children:[e&&(0,s.jsx)(tu,{children:e}),(0,s.jsx)(th,{$error:!!t,className:r,...a}),t&&(0,s.jsx)(tf,{children:t})]}),tb=es.default.p.withConfig({displayName:"Text.styles__StyledText",componentId:"sc-10b9dfea-0"})`
  margin: 0;

  ${({$variant:e="body"})=>{switch(e){case"h1":return es.css`
          font-family: ${({theme:e})=>e.typography.fontFamilyHeading};
          font-size: ${({theme:e})=>e.typography.fontSize["6xl"]};
          font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
          line-height: 1.1;
          letter-spacing: -0.02em;

          @media (max-width: 768px) {
            font-size: ${({theme:e})=>e.typography.fontSize["4xl"]};
          }
        `;case"h2":return es.css`
          font-family: ${({theme:e})=>e.typography.fontFamilyHeading};
          font-size: ${({theme:e})=>e.typography.fontSize["5xl"]};
          font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
          line-height: 1.2;
          letter-spacing: -0.01em;

          @media (max-width: 768px) {
            font-size: ${({theme:e})=>e.typography.fontSize["3xl"]};
          }
        `;case"h3":return es.css`
          font-family: ${({theme:e})=>e.typography.fontFamilyHeading};
          font-size: ${({theme:e})=>e.typography.fontSize["4xl"]};
          font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
          line-height: 1.3;

          @media (max-width: 768px) {
            font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
          }
        `;case"h4":return es.css`
          font-family: ${({theme:e})=>e.typography.fontFamilyHeading};
          font-size: ${({theme:e})=>e.typography.fontSize["3xl"]};
          font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
          line-height: 1.4;

          @media (max-width: 768px) {
            font-size: ${({theme:e})=>e.typography.fontSize.xl};
          }
        `;case"h5":return es.css`
          font-family: ${({theme:e})=>e.typography.fontFamilyHeading};
          font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
          font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
          line-height: 1.4;
        `;case"h6":return es.css`
          font-family: ${({theme:e})=>e.typography.fontFamilyHeading};
          font-size: ${({theme:e})=>e.typography.fontSize.xl};
          font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
          line-height: 1.5;
        `;case"body":return es.css`
          font-family: ${({theme:e})=>e.typography.fontFamilyBody};
          font-size: ${({theme:e})=>e.typography.fontSize.base};
          line-height: 1.6;
        `;case"bodyLarge":return es.css`
          font-family: ${({theme:e})=>e.typography.fontFamilyBody};
          font-size: ${({theme:e})=>e.typography.fontSize.lg};
          line-height: 1.6;
        `;case"bodySmall":return es.css`
          font-family: ${({theme:e})=>e.typography.fontFamilyBody};
          font-size: ${({theme:e})=>e.typography.fontSize.sm};
          line-height: 1.5;
        `;case"caption":return es.css`
          font-family: ${({theme:e})=>e.typography.fontFamilyBody};
          font-size: ${({theme:e})=>e.typography.fontSize.xs};
          line-height: 1.4;
        `}}}

  ${({$color:e="primary"})=>{switch(e){case"primary":return es.css`
          color: ${({theme:e})=>e.colors.textPrimary};
        `;case"secondary":return es.css`
          color: ${({theme:e})=>e.colors.textSecondary};
        `;case"tertiary":return es.css`
          color: ${({theme:e})=>e.colors.textTertiary};
        `;case"accent":return es.css`
          color: ${({theme:e})=>e.colors.accent};
        `}}}

  ${({$weight:e})=>{if(!e)return"";switch(e){case"normal":return es.css`
          font-weight: ${({theme:e})=>e.typography.fontWeight.normal};
        `;case"medium":return es.css`
          font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
        `;case"semibold":return es.css`
          font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
        `;case"bold":return es.css`
          font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
        `}}}
`,ty=({variant:e="body",color:t="primary",weight:n,as:r,children:a,className:o=""})=>{let i=r||("h1"===e||"h2"===e||"h3"===e||"h4"===e||"h5"===e||"h6"===e?e:"p");return(0,s.jsx)(tb,{as:i,$variant:e,$color:t,$weight:n,className:o,children:a})},tv=es.default.div.withConfig({displayName:"Container.styles__StyledContainer",componentId:"sc-ab2069fa-0"})`
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
`,tx=({children:e,className:t=""})=>(0,s.jsx)(tv,{className:t,children:e}),tw=es.default.section.withConfig({displayName:"Section.styles__StyledSection",componentId:"sc-897389d1-0"})`
  padding: ${({theme:e})=>e.spacing["4xl"]} 0;
  position: relative;

  ${({$size:e="medium"})=>{switch(e){case"small":return es.css`
          padding: ${({theme:e})=>e.spacing["2xl"]} 0;

          @media (max-width: 768px) {
            padding: ${({theme:e})=>e.spacing.lg} 0;
          }
        `;case"large":return es.css`
          padding: ${({theme:e})=>e.spacing["4xl"]} 0;

          @media (max-width: 768px) {
            padding: ${({theme:e})=>e.spacing["2xl"]} 0;
          }
        `;default:return es.css`
          @media (max-width: 768px) {
            padding: ${({theme:e})=>e.spacing["2xl"]} 0;
          }
        `}}}
`,tk=({children:e,size:t="medium",className:n="",id:r})=>(0,s.jsx)(tw,{id:r,$size:t,className:n,children:e}),t$=es.default.div.withConfig({displayName:"WorkHeader.styles__WorkHeaderWrapper",componentId:"sc-45d9ae25-0"})`
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
`,t_=es.default.span.withConfig({displayName:"WorkHeader.styles__SectionNumber",componentId:"sc-45d9ae25-1"})`
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.textTertiary};
  font-family: ${({theme:e})=>e.typography.fontFamilyMono};

  @media (max-width: 768px) {
    font-size: ${({theme:e})=>e.typography.fontSize.lg};
  }
`,tj=({sectionNumber:e})=>(0,s.jsxs)(t$,{"data-aos":"fade-up",children:[(0,s.jsx)(t_,{children:e}),(0,s.jsx)(ty,{variant:"h2",children:"Work"})]});var tS=e.i(57688);let tO=ef("external-link",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]),tC=es.default.div.withConfig({displayName:"ProjectCard.styles__ProjectCardWrapper",componentId:"sc-4b02ff16-0"})`
  display: grid;
  grid-template-columns: ${({$isReverse:e})=>e?"1.5fr 1fr":"1fr 1.5fr"};
  gap: ${({theme:e})=>e.spacing["4xl"]};
  align-items: center;
  width: 100%;
  padding: ${({theme:e})=>e.spacing["4xl"]} 0;

  &:hover .project-title {
    color: ${({theme:e})=>e.colors.accent};
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: ${({theme:e})=>e.spacing["2xl"]};
    padding: ${({theme:e})=>e.spacing["2xl"]} 0;
  }
`,tP=es.default.div.withConfig({displayName:"ProjectCard.styles__ProjectInfo",componentId:"sc-4b02ff16-1"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.md};
  max-width: 100%;
  order: ${({$isReverse:e})=>e?2:1};

  @media (max-width: 1024px) {
    order: 2;
  }
`,tE=es.default.span.withConfig({displayName:"ProjectCard.styles__ProjectNumber",componentId:"sc-4b02ff16-2"})`
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.textTertiary};
  font-family: ${({theme:e})=>e.typography.fontFamilyMono};
  line-height: 1;
`,tT=es.default.div.withConfig({displayName:"ProjectCard.styles__ProjectMeta",componentId:"sc-4b02ff16-3"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyBody};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing.md};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.textTertiary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,tz=es.default.div.withConfig({displayName:"ProjectCard.styles__ProjectMetaLeft",componentId:"sc-4b02ff16-4"})`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
`,tN=es.default.span.withConfig({displayName:"ProjectCard.styles__ProjectYear",componentId:"sc-4b02ff16-5"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyMono};
`,tA=es.default.span.withConfig({displayName:"ProjectCard.styles__ProjectCategory",componentId:"sc-4b02ff16-6"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyBody};
  color: ${({theme:e})=>e.colors.textSecondary};
`,tI=es.default.div.withConfig({displayName:"ProjectCard.styles__ProjectTitleWrapper",componentId:"sc-4b02ff16-7"})``,tF=es.default.span.withConfig({displayName:"ProjectCard.styles__ProjectTitle",componentId:"sc-4b02ff16-8"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyHeading};
  color: ${({theme:e})=>e.colors.textPrimary};
  transition: color ${({theme:e})=>e.transitions.base};
  cursor: pointer;
  display: block;
`,tM=es.default.span.withConfig({displayName:"ProjectCard.styles__ProjectDescription",componentId:"sc-4b02ff16-9"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyBody};
  color: ${({theme:e})=>e.colors.textSecondary};
  line-height: 1.8;
`,tD=es.default.div.withConfig({displayName:"ProjectCard.styles__ProjectTags",componentId:"sc-4b02ff16-10"})`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing.sm};
  margin-top: ${({theme:e})=>e.spacing.sm};
`,tR=es.default.a.withConfig({displayName:"ProjectCard.styles__ProjectLink",componentId:"sc-4b02ff16-11"})`
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
`,tL=es.default.div.withConfig({displayName:"ProjectCard.styles__ProjectVisual",componentId:"sc-4b02ff16-12"})`
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
`;es.default.div.withConfig({displayName:"ProjectCard.styles__ProjectVisualImg",componentId:"sc-4b02ff16-13"})`
  border-radius: ${({theme:e})=>e.borderRadius.md};
`;let tB=({project:e,index:t})=>{let[n,r]=(0,l.useState)(!1);(0,l.useEffect)(()=>{let e=()=>{r(window.innerWidth<=1024)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);let a=t%2==1;return(0,s.jsxs)(tC,{$isReverse:a,...n?{}:{"data-aos":t%2==0?"fade-right":"fade-left","data-aos-delay":100*t},className:"project-card-wrapper",children:[(0,s.jsxs)(tP,{$isReverse:a,children:[(0,s.jsx)(ty,{variant:"h4",as:"span",children:(0,s.jsx)(tE,{children:e.number})}),(0,s.jsx)(tT,{children:(0,s.jsxs)(tz,{children:[(0,s.jsx)(tN,{children:e.year}),(0,s.jsx)("span",{children:"•"}),(0,s.jsx)(tA,{children:e.category})]})}),(0,s.jsx)(tI,{children:(0,s.jsx)(ty,{variant:"h3",as:"span",children:(0,s.jsx)(tF,{className:"project-title",children:e.title})})}),(0,s.jsx)(ty,{variant:"body",color:"secondary",as:"span",children:(0,s.jsx)(tM,{children:e.description})}),(0,s.jsx)(tD,{children:e.tags.map(e=>(0,s.jsx)(tc,{children:e},e))}),e.link&&(0,s.jsxs)(tR,{href:e.link,target:"_blank",rel:"noopener noreferrer",children:["Live Link",(0,s.jsx)(tO,{size:16})]})]}),(0,s.jsx)(tL,{$isReverse:a,children:(0,s.jsx)(tS.default,{src:e.imageLink||"/images/ml-jobs.png",alt:e.title,fill:!0,style:{objectFit:"cover",borderRadius:"0.5rem"}})})]})},tH=es.default.div.withConfig({displayName:"Work.styles__StyledWork",componentId:"sc-afd42b7-0"})`
  position: relative;
`,tW=es.default.div.withConfig({displayName:"Work.styles__ProjectsList",componentId:"sc-afd42b7-1"})`
  display: flex;
  flex-direction: column;
  gap: 0;
`,tU=es.default.div.withConfig({displayName:"Work.styles__ViewAllButtonContainer",componentId:"sc-afd42b7-2"})`
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
`,tq=es.default.button.withConfig({displayName:"Work.styles__ViewAllButton",componentId:"sc-afd42b7-3"})`
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
`,tV=({sectionNumber:e="01",projects:t})=>{let[n,r]=(0,l.useState)(!1),a=n?t:t.slice(0,5),o=t.length>5;return(0,l.useEffect)(()=>{tr.default.refresh()},[n]),(0,s.jsx)(tk,{id:"work",children:(0,s.jsx)(tx,{children:(0,s.jsxs)(tH,{children:[(0,s.jsx)(tj,{sectionNumber:e}),(0,s.jsx)(tW,{children:a.map((e,t)=>(0,s.jsx)(tB,{project:e,index:t},e.id))}),o&&(0,s.jsx)(tU,{children:n?(0,s.jsxs)(tq,{onClick:()=>{r(!1);let e=document.getElementById("work");e&&e.scrollIntoView({behavior:"smooth",block:"start"})},children:["Show Less",(0,s.jsx)(to,{size:14})]}):(0,s.jsxs)(tq,{onClick:()=>{r(!0)},children:["View All Projects",(0,s.jsx)(ta,{size:14})]})})]})})})},tG=es.default.div.withConfig({displayName:"ExperienceHeader.styles__SectionHeader",componentId:"sc-502ea126-0"})`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.lg};
  margin-bottom: ${({theme:e})=>e.spacing["4xl"]};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({theme:e})=>e.spacing.md};
  }
`,tX=es.default.span.withConfig({displayName:"ExperienceHeader.styles__SectionNumber",componentId:"sc-502ea126-1"})`
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.textTertiary};
  font-family: ${({theme:e})=>e.typography.fontFamilyMono};
`,tY=({sectionNumber:e})=>(0,s.jsxs)(tG,{"data-aos":"fade-up",children:[(0,s.jsx)(tX,{children:e}),(0,s.jsx)(ty,{variant:"h2",children:"Experience"})]}),tJ=ef("arrow-right",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),tZ=es.default.div.withConfig({displayName:"ExperienceCard.styles__TimelineItem",componentId:"sc-692b517d-0"})`
  position: relative;
  padding-left: ${({theme:e})=>e.spacing.xl};

  @media (max-width: 768px) {
    padding-left: ${({theme:e})=>e.spacing.sm};
  }
`,tK=es.default.div.withConfig({displayName:"ExperienceCard.styles__TimelineDotWrapper",componentId:"sc-692b517d-1"})`
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

  ${tZ}:hover & {
    transform: scale(1.15);
  }

  @media (max-width: 768px) {
    left: calc(-1 * ${({theme:e})=>e.spacing.xl} - ${({theme:e})=>e.spacing.sm} + 1px - 12px);
    top: 10px;
    width: 24px;
    height: 24px;
  }
`,tQ=es.default.div.withConfig({displayName:"ExperienceCard.styles__TimelineDotOuter",componentId:"sc-692b517d-2"})`
  position: absolute;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: transparent;
  border: 2px solid ${({theme:e})=>e.colors.accent};
  z-index: 1;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  ${tZ}:hover & {
    border-color: ${({theme:e})=>e.colors.accentHover};
    transform: scale(1.1);
    box-shadow: ${({theme:e})=>(e.mode,`0 0 0 4px ${e.colors.accent}33`)};
  }

  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
    border-width: 1.5px;
  }
`,t0=es.default.div.withConfig({displayName:"ExperienceCard.styles__TimelineDot",componentId:"sc-692b517d-3"})`
  position: relative;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.colors.textPrimary};
  z-index: 2;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  ${tZ}:hover & {
    transform: scale(1.15);
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 768px) {
    width: 12px;
    height: 12px;
  }
`,t1=es.default.div.withConfig({displayName:"ExperienceCard.styles__StyledExperienceCard",componentId:"sc-692b517d-4"})`
  background-color: ${({theme:e})=>e.colors.bgSecondary};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: ${({theme:e})=>e.spacing.xl};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  width: 100%;
  max-width: 100%;
  cursor: pointer;

  ${tZ}:hover & {
    border-color: ${({theme:e})=>e.colors.accent};
    transform: translateX(8px);
    box-shadow: ${({theme:e})=>"dark"===e.mode?`0 4px 24px ${e.colors.accent}26`:`0 4px 24px ${e.colors.accent}20`};
  }

  @media (max-width: 768px) {
    padding: ${({theme:e})=>e.spacing.md};
    border-radius: ${({theme:e})=>e.borderRadius.sm};

    ${tZ}:hover & {
      transform: translateX(4px);
      box-shadow: ${({theme:e})=>"dark"===e.mode?`0 2px 12px ${e.colors.accent}20`:`0 2px 12px ${e.colors.accent}15`};
    }
  }
`,t2=es.default.div.withConfig({displayName:"ExperienceCard.styles__CardHeader",componentId:"sc-692b517d-5"})`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  margin-bottom: ${({theme:e})=>e.spacing.sm};
  width: 100%;

  @media (max-width: 768px) {
    justify-content: flex-start;
    margin-bottom: ${({theme:e})=>e.spacing.xs};
  }
`,t5=es.default.div.withConfig({displayName:"ExperienceCard.styles__CardHeaderLeft",componentId:"sc-692b517d-6"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.xs};
  width: 100%;
  margin-bottom: ${({theme:e})=>e.spacing.md};

  @media (max-width: 768px) {
    gap: ${({theme:e})=>e.spacing.xs};
    margin-bottom: ${({theme:e})=>e.spacing.sm};
  }
`,t4=es.default.span.withConfig({displayName:"ExperienceCard.styles__CompanyName",componentId:"sc-692b517d-7"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyHeading};
  color: ${({theme:e})=>e.colors.textSecondary};
  line-height: 1.2;
  transition: color 0.3s ease;
  display: block;

  ${t1}:hover & {
    color: ${({theme:e})=>"dark"===e.mode?"#e0e7ff":e.colors.textSecondary};
  }
`,t3=es.default.span.withConfig({displayName:"ExperienceCard.styles__Role",componentId:"sc-692b517d-8"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyHeading};
  color: ${({theme:e})=>e.colors.accent};
  line-height: 1.3;
  transition: color 0.3s ease;
  display: block;

  ${t1}:hover & {
    color: ${({theme:e})=>"dark"===e.mode?e.colors.accentHover:e.colors.accent};
  }
`,t6=es.default.span.withConfig({displayName:"ExperienceCard.styles__LocationType",componentId:"sc-692b517d-9"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyBody};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.textTertiary};
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: ${({theme:e})=>e.typography.fontSize.xs};
    line-height: 1.4;
  }
`,t8=es.default.span.withConfig({displayName:"ExperienceCard.styles__DateLocation",componentId:"sc-692b517d-10"})`
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
`,t7=es.default.span.withConfig({displayName:"ExperienceCard.styles__ExperienceDescription",componentId:"sc-692b517d-11"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyBody};
  color: ${({theme:e})=>e.colors.textSecondary};
  line-height: 1.8;
  margin-bottom: ${({theme:e})=>e.spacing.md};
  transition: color 0.3s ease;
  display: block;

  ${t1}:hover & {
    color: ${({theme:e})=>"dark"===e.mode?"#e0e7ff":e.colors.textSecondary};
  }

  @media (max-width: 768px) {
    font-size: ${({theme:e})=>e.typography.fontSize.sm};
    line-height: 1.6;
    margin-bottom: ${({theme:e})=>e.spacing.sm};
  }
`,t9=es.default.ul.withConfig({displayName:"ExperienceCard.styles__ExperienceList",componentId:"sc-692b517d-12"})`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.sm};
  margin-bottom: ${({theme:e})=>e.spacing.md};

  @media (max-width: 768px) {
    gap: ${({theme:e})=>e.spacing.xs};
    margin-bottom: ${({theme:e})=>e.spacing.sm};
  }
`,ne=es.default.li.withConfig({displayName:"ExperienceCard.styles__ExperienceListItem",componentId:"sc-692b517d-13"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyBody};
  display: flex;
  align-items: flex-start;
  gap: ${({theme:e})=>e.spacing.sm};
  color: ${({theme:e})=>e.colors.textSecondary};
  line-height: 1.8;
  transition: color 0.3s ease;

  ${t1}:hover & {
    color: ${({theme:e})=>"dark"===e.mode?"#e0e7ff":e.colors.textSecondary};
  }

  @media (max-width: 768px) {
    font-size: ${({theme:e})=>e.typography.fontSize.sm};
    line-height: 1.6;
    gap: ${({theme:e})=>e.spacing.xs};
  }
`,nt=es.default.span.withConfig({displayName:"ExperienceCard.styles__ExperienceListArrow",componentId:"sc-692b517d-14"})`
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
`,nn=es.default.div.withConfig({displayName:"ExperienceCard.styles__ExperienceTags",componentId:"sc-692b517d-15"})`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing.sm};
  margin-top: ${({theme:e})=>e.spacing.sm};

  @media (max-width: 768px) {
    gap: ${({theme:e})=>e.spacing.xs};
    margin-top: ${({theme:e})=>e.spacing.xs};
  }
`,nr=({experience:e,index:t})=>(0,s.jsxs)(tZ,{"data-aos":"fade-up","data-aos-delay":150*t,children:[(0,s.jsxs)(tK,{children:[(0,s.jsx)(tQ,{}),(0,s.jsx)(t0,{})]}),(0,s.jsxs)(t1,{children:[(0,s.jsx)(t2,{children:(0,s.jsx)(t8,{children:e.date})}),(0,s.jsxs)(t5,{children:[(0,s.jsx)(ty,{variant:"h4",as:"span",children:(0,s.jsx)(t4,{children:e.company})}),(0,s.jsx)(ty,{variant:"h5",as:"span",children:(0,s.jsx)(t3,{children:e.role})}),(0,s.jsx)(ty,{variant:"bodySmall",color:"tertiary",as:"span",children:(0,s.jsxs)(t6,{children:[e.location," • ",e.type]})})]}),(0,s.jsx)(ty,{variant:"body",color:"secondary",as:"span",children:(0,s.jsx)(t7,{children:e.description})}),(0,s.jsx)(t9,{children:e.responsibilities.map((e,t)=>(0,s.jsxs)(ne,{children:[(0,s.jsx)(nt,{children:(0,s.jsx)(tJ,{size:16})}),(0,s.jsx)("span",{children:e})]},t))}),(0,s.jsx)(nn,{children:e.tags.map(e=>(0,s.jsx)(tc,{children:e},e))})]})]}),na=es.default.div.withConfig({displayName:"Experience.styles__StyledExperience",componentId:"sc-bdd512cd-0"})`
  position: relative;
`,no=es.default.div.withConfig({displayName:"Experience.styles__Timeline",componentId:"sc-bdd512cd-1"})`
  position: relative;
  padding-left: ${({theme:e})=>e.spacing["6xl"]};

  @media (max-width: 768px) {
    padding-left: ${({theme:e})=>e.spacing.xxl};
  }
`,ni=es.default.div.withConfig({displayName:"Experience.styles__TimelineLine",componentId:"sc-bdd512cd-2"})`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: ${({theme:e})=>e.colors.accent};
`,ns=es.default.div.withConfig({displayName:"Experience.styles__TimelineItems",componentId:"sc-bdd512cd-3"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing["4xl"]};

  @media (max-width: 768px) {
    gap: ${({theme:e})=>e.spacing.xl};
  }
`;es.default.hr.withConfig({displayName:"Experience.styles__ExperienceDivider",componentId:"sc-bdd512cd-4"})`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
  margin: 0;
  width: 100%;
`;let nl=({sectionNumber:e="02",experiences:t})=>(0,s.jsx)(tk,{id:"experience",children:(0,s.jsx)(tx,{children:(0,s.jsxs)(na,{children:[(0,s.jsx)(tY,{sectionNumber:e}),(0,s.jsxs)(no,{children:[(0,s.jsx)(ni,{}),(0,s.jsx)(ns,{children:t.map((e,t)=>(0,s.jsx)(nr,{experience:e,index:t},e.id))})]})]})})}),nc=es.default.div.withConfig({displayName:"AboutHeader.styles__AboutHeaderWrapper",componentId:"sc-34ec8c66-0"})`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.lg};
  margin-bottom: ${({theme:e})=>e.spacing.lg};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({theme:e})=>e.spacing.md};
  }
`,nd=es.default.span.withConfig({displayName:"AboutHeader.styles__SectionNumber",componentId:"sc-34ec8c66-1"})`
  font-size: ${({theme:e})=>e.typography.fontSize["4xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.textTertiary};
  font-family: ${({theme:e})=>e.typography.fontFamilyMono};
`,nu=({sectionNumber:e})=>(0,s.jsxs)(nc,{"data-aos":"fade-up",children:[(0,s.jsx)(nd,{children:e}),(0,s.jsx)(ty,{variant:"h2",children:"About"})]}),np=es.default.div.withConfig({displayName:"AboutContent.styles__AboutDescription",componentId:"sc-c102d131-0"})`
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
`,nh=({content:e})=>(0,s.jsx)(np,{"data-aos":"fade-right","data-aos-delay":"200",children:"string"==typeof e?e.split("\n\n").map((e,t)=>(0,s.jsx)(ty,{variant:"bodyLarge",color:"secondary",children:e},t)):e}),nf=es.default.div.withConfig({displayName:"About.styles__StyledAbout",componentId:"sc-e1b29e4a-0"})`
  position: relative;
`,nm=es.default.div.withConfig({displayName:"About.styles__AboutContent",componentId:"sc-e1b29e4a-1"})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({theme:e})=>e.spacing["4xl"]};
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: ${({theme:e})=>e.spacing["2xl"]};
  }
`,ng=es.default.div.withConfig({displayName:"About.styles__AboutText",componentId:"sc-e1b29e4a-2"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.lg};
`,nb=es.default.div.withConfig({displayName:"About.styles__AboutVisual",componentId:"sc-e1b29e4a-3"})`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 1024px) {
    order: -1;
  }
`,ny=es.default.div.withConfig({displayName:"About.styles__AboutImage",componentId:"sc-e1b29e4a-4"})`
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
`,nv=es.default.hr.withConfig({displayName:"About.styles__AboutDivider",componentId:"sc-e1b29e4a-5"})`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
  margin: 0;
  width: 100%;
`,nx=({sectionNumber:e="03",content:t})=>{let[n,r]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{let e=()=>{r(window.innerWidth<=1024)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(tk,{id:"about",children:(0,s.jsx)(tx,{children:(0,s.jsx)(nf,{children:(0,s.jsxs)(nm,{children:[(0,s.jsxs)(ng,{children:[(0,s.jsx)(nu,{sectionNumber:e}),(0,s.jsx)(nh,{content:t})]}),(0,s.jsx)(nb,{...n?{}:{"data-aos":"fade-left","data-aos-delay":300},children:(0,s.jsx)(ny,{children:(0,s.jsx)(tS.default,{src:"/images/me.png",alt:"Profile photo",fill:!0,style:{objectFit:"cover",borderRadius:"1rem"}})})})]})})})}),(0,s.jsx)(nv,{})]})},nw=es.default.div.withConfig({displayName:"TechStack.styles__StyledTechStack",componentId:"sc-a293df8e-0"})`
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
`,nk=es.default.div.withConfig({displayName:"TechStack.styles__TechStackContainer",componentId:"sc-a293df8e-1"})`
  width: 100%;
`,n$=es.default.div.withConfig({displayName:"TechStack.styles__TechStackWrapper",componentId:"sc-a293df8e-2"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:e})=>e.spacing["4xl"]};
  width: 100%;

  @media (max-width: 768px) {
    gap: ${({theme:e})=>e.spacing.xl};
  }
`,n_=es.default.h2.withConfig({displayName:"TechStack.styles__TechStackTitle",componentId:"sc-a293df8e-3"})`
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
`,nj=es.default.div.withConfig({displayName:"TechStack.styles__TechStackGrid",componentId:"sc-a293df8e-4"})`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: ${({theme:e})=>e.spacing.xl};
  width: 100%;
  max-width: 1400px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: ${({theme:e})=>e.spacing.lg};
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: ${({theme:e})=>e.spacing.lg};
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${({theme:e})=>e.spacing.md};
  }
`,nS=es.default.div.withConfig({displayName:"TechStack.styles__TechItem",componentId:"sc-a293df8e-5"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing.md};
  transition: all ${({theme:e})=>e.transitions.base};
  cursor: pointer;
  padding: ${({theme:e})=>e.spacing.sm};

  &:hover {
    transform: translateY(-4px);
  }

  &:hover svg {
    transform: scale(1.1);
  }
`,nO=es.default.div.withConfig({displayName:"TechStack.styles__TechIcon",componentId:"sc-a293df8e-6"})`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing.sm};
  color: ${({theme:e})=>e.colors.textPrimary};

  svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
    color: inherit;
  }

  @media (max-width: 1024px) {
    width: 90px;
    height: 90px;
  }

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }

  @media (max-width: 480px) {
    width: 70px;
    height: 70px;
  }
`,nC=es.default.span.withConfig({displayName:"TechStack.styles__TechName",componentId:"sc-a293df8e-7"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyBody};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.colors.textPrimary};
  text-align: center;
  margin: 0;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: ${({theme:e})=>e.typography.fontSize.xs};
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`,nP=es.default.hr.withConfig({displayName:"TechStack.styles__TechStackDivider",componentId:"sc-a293df8e-8"})`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
  margin: 0;
  width: 100%;
`,nE=[{name:"JavaScript",icon:(0,s.jsx)(({className:e})=>(0,s.jsxs)("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:e,xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",fill:"none",stroke:"currentColor",strokeWidth:"2"}),(0,s.jsx)("text",{x:"12",y:"16",fontSize:"10",fontWeight:"bold",textAnchor:"middle",fontFamily:"Arial, sans-serif",children:"JS"})]}),{}),category:"Programming Languages"},{name:"TypeScript",icon:(0,s.jsx)(({className:e})=>(0,s.jsx)("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:e,xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 011.306.34v2.458a3.95 3.95 0 00-.643-.361 5.093 5.093 0 00-.717-.26 5.453 5.453 0 00-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 00-.623.242c-.17.104-.3.229-.393.374a.888.888 0 00-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.375.222.695.473.96.753.264.279.473.598.627.957.154.36.231.768.231 1.226 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 01-1.012 1.085 4.38 4.38 0 01-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 01-2.007-.196 4.789 4.789 0 01-1.64-.557v-2.63a5.74 5.74 0 001.853.553 7.136 7.136 0 001.855.234c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 00.125-.534c0-.287-.092-.532-.277-.736a2.716 2.716 0 00-.753-.537 6.078 6.078 0 00-1.117-.493 7.88 7.88 0 01-1.022-.502 3.717 3.717 0 01-.717-.616 2.26 2.26 0 01-.448-.808c-.1-.33-.15-.696-.15-1.099 0-.518.098-.957.293-1.317a2.974 2.974 0 01.808-1.012 4.338 4.338 0 01-1.206-.776 3.056 3.056 0 01-.777-1.157c-.18-.45-.27-.957-.27-1.523 0-.657.13-1.216.39-1.677.26-.46.612-.82 1.056-1.08.444-.26.954-.403 1.53-.43.36-.018.735-.009 1.125.027zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375V9.938z"})}),{}),category:"Programming Languages"},{name:"React",icon:(0,s.jsx)(({className:e})=>(0,s.jsxs)("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:e,xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("circle",{cx:"12",cy:"12",r:"2"}),(0,s.jsx)("ellipse",{cx:"12",cy:"12",rx:"11",ry:"4.2",fill:"none",stroke:"currentColor",strokeWidth:"1.5"}),(0,s.jsx)("ellipse",{cx:"12",cy:"12",rx:"11",ry:"4.2",fill:"none",stroke:"currentColor",strokeWidth:"1.5",transform:"rotate(-60 12 12)"}),(0,s.jsx)("ellipse",{cx:"12",cy:"12",rx:"11",ry:"4.2",fill:"none",stroke:"currentColor",strokeWidth:"1.5",transform:"rotate(60 12 12)"})]}),{}),category:"Frameworks & Libraries"},{name:"React Native",icon:(0,s.jsx)(({className:e})=>(0,s.jsxs)("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:e,xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("circle",{cx:"12",cy:"12",r:"2",fill:"currentColor"}),(0,s.jsx)("ellipse",{cx:"12",cy:"12",rx:"11",ry:"4.2",fill:"none",stroke:"currentColor",strokeWidth:"1.5"}),(0,s.jsx)("ellipse",{cx:"12",cy:"12",rx:"11",ry:"4.2",fill:"none",stroke:"currentColor",strokeWidth:"1.5",transform:"rotate(-60 12 12)"}),(0,s.jsx)("ellipse",{cx:"12",cy:"12",rx:"11",ry:"4.2",fill:"none",stroke:"currentColor",strokeWidth:"1.5",transform:"rotate(60 12 12)"}),(0,s.jsx)("rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",fill:"none",stroke:"currentColor",strokeWidth:"1.5"})]}),{}),category:"Frameworks & Libraries"},{name:"Next.js",icon:(0,s.jsx)(({className:e})=>(0,s.jsxs)("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:e,xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("path",{d:"M12 2L2 7v10l10 5 10-5V7L12 2zM4 8.5l8 4v9l-8-4v-9zm16 0v9l-8 4v-9l8-4z"}),(0,s.jsx)("path",{d:"M12 4l8 3.5v9L12 20l-8-3.5v-9L12 4z"})]}),{}),category:"Frameworks & Libraries"},{name:"Tailwind CSS",icon:(0,s.jsx)(({className:e})=>(0,s.jsx)("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:e,xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.12 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.15 14.47 6 12 6zm-5 6.5c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.12 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35-1.39-1.39-2.53-2.15-5.59-2.15z"})}),{}),category:"Frameworks & Libraries"},{name:"Styled Components",icon:(0,s.jsx)(({className:e})=>(0,s.jsxs)("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:e,xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",fill:"none",stroke:"currentColor",strokeWidth:"2"}),(0,s.jsx)("rect",{x:"6",y:"7",width:"12",height:"2",rx:"0.5",fill:"currentColor"}),(0,s.jsx)("rect",{x:"6",y:"10",width:"10",height:"2",rx:"0.5",fill:"currentColor"}),(0,s.jsx)("rect",{x:"6",y:"13",width:"8",height:"2",rx:"0.5",fill:"currentColor"}),(0,s.jsx)("rect",{x:"6",y:"16",width:"12",height:"2",rx:"0.5",fill:"currentColor"})]}),{}),category:"Frameworks & Libraries"},{name:"GraphQL",icon:(0,s.jsx)(({className:e})=>(0,s.jsxs)("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:e,xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),(0,s.jsx)("path",{d:"M12 6l-4 6.93h8L12 6z",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M8 12.93h8",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),(0,s.jsx)("path",{d:"M12 18l-4-6.93M12 18l4-6.93",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",fill:"none"}),(0,s.jsx)("circle",{cx:"12",cy:"6",r:"1.5",fill:"currentColor"}),(0,s.jsx)("circle",{cx:"8",cy:"12.93",r:"1.5",fill:"currentColor"}),(0,s.jsx)("circle",{cx:"16",cy:"12.93",r:"1.5",fill:"currentColor"}),(0,s.jsx)("circle",{cx:"12",cy:"18",r:"1.5",fill:"currentColor"})]}),{}),category:"Frameworks & Libraries"},{name:"MongoDB",icon:(0,s.jsx)(({className:e})=>(0,s.jsx)("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:e,xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 3.5 9.5 7 11.5 3.5-2 7-6.25 7-11.5 0-3.87-3.13-7-7-7zm0 2c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5z"})}),{}),category:"DB & Backend / Deployment"},{name:"MySQL",icon:(0,s.jsx)(({className:e})=>(0,s.jsxs)("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:e,xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),(0,s.jsx)("path",{d:"M8 8h8v2H8zm0 3h8v2H8zm0 3h6v2H8z"})]}),{}),category:"DB & Backend / Deployment"},{name:"Firebase",icon:(0,s.jsx)(({className:e})=>(0,s.jsx)("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:e,xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M12 2L4 10l8 8 8-8L12 2zm0 3.5l5.5 5.5L12 16.5 6.5 11 12 5.5z"})}),{}),category:"DB & Backend / Deployment"},{name:"SEO",icon:(0,s.jsx)(({className:e})=>(0,s.jsxs)("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:e,xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("circle",{cx:"10",cy:"10",r:"6",fill:"none",stroke:"currentColor",strokeWidth:"2"}),(0,s.jsx)("path",{d:"M16 16l4 4",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}),{}),category:"Digital and Creative Skills"},{name:"SEO Tools",icon:(0,s.jsx)(({className:e})=>(0,s.jsxs)("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:e,xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",fill:"none",stroke:"currentColor",strokeWidth:"2"}),(0,s.jsx)("circle",{cx:"12",cy:"12",r:"4",fill:"none",stroke:"currentColor",strokeWidth:"1.5"}),(0,s.jsx)("circle",{cx:"12",cy:"12",r:"1.5",fill:"currentColor"})]}),{}),category:"Digital and Creative Skills"},{name:"APIs",icon:(0,s.jsx)(({className:e})=>(0,s.jsxs)("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:e,xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("rect",{x:"4",y:"6",width:"16",height:"12",rx:"2",fill:"none",stroke:"currentColor",strokeWidth:"2"}),(0,s.jsx)("circle",{cx:"8",cy:"12",r:"1.5",fill:"currentColor"}),(0,s.jsx)("circle",{cx:"12",cy:"12",r:"1.5",fill:"currentColor"}),(0,s.jsx)("circle",{cx:"16",cy:"12",r:"1.5",fill:"currentColor"})]}),{}),category:"General & Soft Skills"},{name:"Responsive Design",icon:(0,s.jsx)(({className:e})=>(0,s.jsxs)("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:e,xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("rect",{x:"6",y:"4",width:"12",height:"16",rx:"2",fill:"none",stroke:"currentColor",strokeWidth:"2"}),(0,s.jsx)("rect",{x:"8",y:"6",width:"8",height:"12",rx:"1",fill:"none",stroke:"currentColor",strokeWidth:"1.5"}),(0,s.jsx)("rect",{x:"16",y:"8",width:"4",height:"8",rx:"1",fill:"none",stroke:"currentColor",strokeWidth:"1.5"})]}),{}),category:"General & Soft Skills"}],nT=()=>(Array.from(new Set(nE.map(e=>e.category))),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(tk,{id:"techstack",children:(0,s.jsx)(tx,{children:(0,s.jsx)(nw,{children:(0,s.jsx)(nk,{children:(0,s.jsxs)(n$,{children:[(0,s.jsx)(n_,{"data-aos":"fade-up",children:"TECHNOLOGIES I WORK WITH"}),(0,s.jsx)(nj,{children:nE.map((e,t)=>(0,s.jsxs)(nS,{"data-aos":"zoom-in","data-aos-delay":50*t,children:[(0,s.jsx)(nO,{children:e.icon}),(0,s.jsx)(ty,{variant:"bodySmall",as:"span",children:(0,s.jsx)(nC,{children:e.name})})]},t))})]})})})})}),(0,s.jsx)(nP,{})]})),nz=es.default.div.withConfig({displayName:"ContactHeader.styles__ContactHeaderWrapper",componentId:"sc-1b5bfa94-0"})`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
`,nN=es.default.div.withConfig({displayName:"ContactHeader.styles__ContactHeaderContent",componentId:"sc-1b5bfa94-1"})`
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
`,nA=es.default.div.withConfig({displayName:"ContactHeader.styles__ContactTitle",componentId:"sc-1b5bfa94-2"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0;
  line-height: 1.1;
`,nI=es.default.h1.withConfig({displayName:"ContactHeader.styles__Headline",componentId:"sc-1b5bfa94-3"})`
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
`,nF=es.default.p.withConfig({displayName:"ContactHeader.styles__ContactDescription",componentId:"sc-1b5bfa94-4"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyBody};
  color: ${({theme:e})=>e.colors.textSecondary};
  line-height: 1.8;
  text-align: center;
  max-width: 600px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`,nM=({sectionNumber:e,headline:t,description:n})=>{let r=t.split("\n").filter(e=>""!==e.trim());return(0,s.jsx)(nz,{"data-aos":"fade-up",children:(0,s.jsxs)(nN,{children:[(0,s.jsx)(nA,{children:r.map((e,t)=>(0,s.jsx)(nI,{"data-aos":"fade-up","data-aos-delay":100*t,children:e.trim()},t))}),(0,s.jsx)(nF,{"data-aos":"fade-up","data-aos-delay":"200",children:n})]})})},nD=ef("send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);var nR=function(e){var t,n,r;return!!(t=e)&&"object"==typeof t&&(n=e,"[object RegExp]"!==(r=Object.prototype.toString.call(n))&&"[object Date]"!==r&&n.$$typeof!==nL)},nL="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function nB(e,t){return!1!==t.clone&&t.isMergeableObject(e)?nW(Array.isArray(e)?[]:{},e,t):e}function nH(e,t,n){return e.concat(t).map(function(e){return nB(e,n)})}function nW(e,t,n){(n=n||{}).arrayMerge=n.arrayMerge||nH,n.isMergeableObject=n.isMergeableObject||nR;var r,a,o=Array.isArray(t);return o!==Array.isArray(e)?nB(t,n):o?n.arrayMerge(e,t,n):(a={},(r=n).isMergeableObject(e)&&Object.keys(e).forEach(function(t){a[t]=nB(e[t],r)}),Object.keys(t).forEach(function(n){r.isMergeableObject(t[n])&&e[n]?a[n]=nW(e[n],t[n],r):a[n]=nB(t[n],r)}),a)}nW.all=function(e,t){if(!Array.isArray(e))throw Error("first argument should be an array");return e.reduce(function(e,n){return nW(e,n,t)},{})};let nU=nW;var nq=e.g&&e.g.Object===Object&&e.g,nV="object"==typeof self&&self&&self.Object===Object&&self,nG=nq||nV||Function("return this")(),nX=nG.Symbol,nY=Object.prototype,nJ=nY.hasOwnProperty,nZ=nY.toString,nK=nX?nX.toStringTag:void 0;let nQ=function(e){var t=nJ.call(e,nK),n=e[nK];try{e[nK]=void 0;var r=!0}catch(e){}var a=nZ.call(e);return r&&(t?e[nK]=n:delete e[nK]),a};var n0=Object.prototype.toString,n1=nX?nX.toStringTag:void 0;let n2=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":n1&&n1 in Object(e)?nQ(e):n0.call(e)},n5=function(e,t){return function(n){return e(t(n))}};var n4=n5(Object.getPrototypeOf,Object);let n3=function(e){return null!=e&&"object"==typeof e};var n6=Object.prototype,n8=Function.prototype.toString,n7=n6.hasOwnProperty,n9=n8.call(Object);let re=function(e){if(!n3(e)||"[object Object]"!=n2(e))return!1;var t=n4(e);if(null===t)return!0;var n=n7.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&n8.call(n)==n9},rt=function(e,t){return e===t||e!=e&&t!=t},rn=function(e,t){for(var n=e.length;n--;)if(rt(e[n][0],t))return n;return -1};var rr=Array.prototype.splice;function ra(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ra.prototype.clear=function(){this.__data__=[],this.size=0},ra.prototype.delete=function(e){var t=this.__data__,n=rn(t,e);return!(n<0)&&(n==t.length-1?t.pop():rr.call(t,n,1),--this.size,!0)},ra.prototype.get=function(e){var t=this.__data__,n=rn(t,e);return n<0?void 0:t[n][1]},ra.prototype.has=function(e){return rn(this.__data__,e)>-1},ra.prototype.set=function(e,t){var n=this.__data__,r=rn(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};let ro=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ri=function(e){if(!ro(e))return!1;var t=n2(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t};var rs=nG["__core-js_shared__"],rl=(a=/[^.]+$/.exec(rs&&rs.keys&&rs.keys.IE_PROTO||""))?"Symbol(src)_1."+a:"",rc=Function.prototype.toString;let rd=function(e){if(null!=e){try{return rc.call(e)}catch(e){}try{return e+""}catch(e){}}return""};var ru=/^\[object .+?Constructor\]$/,rp=Object.prototype,rh=Function.prototype.toString,rf=rp.hasOwnProperty,rm=RegExp("^"+rh.call(rf).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");let rg=function(e){return!!ro(e)&&(!rl||!(rl in e))&&(ri(e)?rm:ru).test(rd(e))},rb=function(e,t){var n=null==e?void 0:e[t];return rg(n)?n:void 0};var ry=rb(nG,"Map"),rv=rb(Object,"create"),rx=Object.prototype.hasOwnProperty,rw=Object.prototype.hasOwnProperty;function rk(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}rk.prototype.clear=function(){this.__data__=rv?rv(null):{},this.size=0},rk.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=!!t,t},rk.prototype.get=function(e){var t=this.__data__;if(rv){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return rx.call(t,e)?t[e]:void 0},rk.prototype.has=function(e){var t=this.__data__;return rv?void 0!==t[e]:rw.call(t,e)},rk.prototype.set=function(e,t){var n=this.__data__;return this.size+=+!this.has(e),n[e]=rv&&void 0===t?"__lodash_hash_undefined__":t,this};let r$=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e},r_=function(e,t){var n=e.__data__;return r$(t)?n["string"==typeof t?"string":"hash"]:n.map};function rj(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function rS(e){var t=this.__data__=new ra(e);this.size=t.size}rj.prototype.clear=function(){this.size=0,this.__data__={hash:new rk,map:new(ry||ra),string:new rk}},rj.prototype.delete=function(e){var t=r_(this,e).delete(e);return this.size-=!!t,t},rj.prototype.get=function(e){return r_(this,e).get(e)},rj.prototype.has=function(e){return r_(this,e).has(e)},rj.prototype.set=function(e,t){var n=r_(this,e),r=n.size;return n.set(e,t),this.size+=+(n.size!=r),this},rS.prototype.clear=function(){this.__data__=new ra,this.size=0},rS.prototype.delete=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},rS.prototype.get=function(e){return this.__data__.get(e)},rS.prototype.has=function(e){return this.__data__.has(e)},rS.prototype.set=function(e,t){var n=this.__data__;if(n instanceof ra){var r=n.__data__;if(!ry||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new rj(r)}return n.set(e,t),this.size=n.size,this};let rO=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&!1!==t(e[n],n,e););return e};var rC=function(){try{var e=rb(Object,"defineProperty");return e({},"",{}),e}catch(e){}}();let rP=function(e,t,n){"__proto__"==t&&rC?rC(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n};var rE=Object.prototype.hasOwnProperty;let rT=function(e,t,n){var r=e[t];rE.call(e,t)&&rt(r,n)&&(void 0!==n||t in e)||rP(e,t,n)},rz=function(e,t,n,r){var a=!n;n||(n={});for(var o=-1,i=t.length;++o<i;){var s=t[o],l=r?r(n[s],e[s],s,n,e):void 0;void 0===l&&(l=e[s]),a?rP(n,s,l):rT(n,s,l)}return n},rN=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r},rA=function(e){return n3(e)&&"[object Arguments]"==n2(e)};var rI=Object.prototype,rF=rI.hasOwnProperty,rM=rI.propertyIsEnumerable,rD=rA(function(){return arguments}())?rA:function(e){return n3(e)&&rF.call(e,"callee")&&!rM.call(e,"callee")},rR=Array.isArray;let rL=function(){return!1};var rB=/^(?:0|[1-9]\d*)$/;let rH=function(e,t){var n=typeof e;return!!(t=null==t?0x1fffffffffffff:t)&&("number"==n||"symbol"!=n&&rB.test(e))&&e>-1&&e%1==0&&e<t},rW=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=0x1fffffffffffff};var rU={};rU["[object Float32Array]"]=rU["[object Float64Array]"]=rU["[object Int8Array]"]=rU["[object Int16Array]"]=rU["[object Int32Array]"]=rU["[object Uint8Array]"]=rU["[object Uint8ClampedArray]"]=rU["[object Uint16Array]"]=rU["[object Uint32Array]"]=!0,rU["[object Arguments]"]=rU["[object Array]"]=rU["[object ArrayBuffer]"]=rU["[object Boolean]"]=rU["[object DataView]"]=rU["[object Date]"]=rU["[object Error]"]=rU["[object Function]"]=rU["[object Map]"]=rU["[object Number]"]=rU["[object Object]"]=rU["[object RegExp]"]=rU["[object Set]"]=rU["[object String]"]=rU["[object WeakMap]"]=!1;let rq=function(e){return function(t){return e(t)}};var rV=function(){try{return!1}catch(e){}}(),rG=rV&&rV.isTypedArray,rX=rG?rq(rG):function(e){return n3(e)&&rW(e.length)&&!!rU[n2(e)]},rY=Object.prototype.hasOwnProperty;let rJ=function(e,t){var n=rR(e),r=!n&&rD(e),a=!n&&!r&&rL(e),o=!n&&!r&&!a&&rX(e),i=n||r||a||o,s=i?rN(e.length,String):[],l=s.length;for(var c in e)(t||rY.call(e,c))&&!(i&&("length"==c||a&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||rH(c,l)))&&s.push(c);return s};var rZ=Object.prototype;let rK=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||rZ)};var rQ=n5(Object.keys,Object),r0=Object.prototype.hasOwnProperty;let r1=function(e){if(!rK(e))return rQ(e);var t=[];for(var n in Object(e))r0.call(e,n)&&"constructor"!=n&&t.push(n);return t},r2=function(e){return null!=e&&rW(e.length)&&!ri(e)},r5=function(e){return r2(e)?rJ(e):r1(e)},r4=function(e){var t=[];if(null!=e)for(var n in Object(e))t.push(n);return t};var r3=Object.prototype.hasOwnProperty;let r6=function(e){if(!ro(e))return r4(e);var t=rK(e),n=[];for(var r in e)"constructor"==r&&(t||!r3.call(e,r))||n.push(r);return n},r8=function(e){return r2(e)?rJ(e,!0):r6(e)},r7=function(e,t){if(t)return e.slice();var n=e.length,r=new e.constructor(n);return e.copy(r),r},r9=function(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t},ae=function(e,t){for(var n=-1,r=null==e?0:e.length,a=0,o=[];++n<r;){var i=e[n];t(i,n,e)&&(o[a++]=i)}return o},at=function(){return[]};var an=Object.prototype.propertyIsEnumerable,ar=Object.getOwnPropertySymbols,aa=ar?function(e){return null==e?[]:ae(ar(e=Object(e)),function(t){return an.call(e,t)})}:at;let ao=function(e,t){for(var n=-1,r=t.length,a=e.length;++n<r;)e[a+n]=t[n];return e};var ai=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)ao(t,aa(e)),e=n4(e);return t}:at;let as=function(e,t,n){var r=t(e);return rR(e)?r:ao(r,n(e))},al=function(e){return as(e,r5,aa)},ac=function(e){return as(e,r8,ai)};var ad=rb(nG,"DataView"),au=rb(nG,"Promise"),ap=rb(nG,"Set"),ah=rb(nG,"WeakMap"),af="[object Map]",am="[object Promise]",ag="[object Set]",ab="[object WeakMap]",ay="[object DataView]",av=rd(ad),ax=rd(ry),aw=rd(au),ak=rd(ap),a$=rd(ah),a_=n2;(ad&&a_(new ad(new ArrayBuffer(1)))!=ay||ry&&a_(new ry)!=af||au&&a_(au.resolve())!=am||ap&&a_(new ap)!=ag||ah&&a_(new ah)!=ab)&&(a_=function(e){var t=n2(e),n="[object Object]"==t?e.constructor:void 0,r=n?rd(n):"";if(r)switch(r){case av:return ay;case ax:return af;case aw:return am;case ak:return ag;case a$:return ab}return t});let aj=a_;var aS=Object.prototype.hasOwnProperty;let aO=function(e){var t=e.length,n=new e.constructor(t);return t&&"string"==typeof e[0]&&aS.call(e,"index")&&(n.index=e.index,n.input=e.input),n};var aC=nG.Uint8Array;let aP=function(e){var t=new e.constructor(e.byteLength);return new aC(t).set(new aC(e)),t},aE=function(e,t){var n=t?aP(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)};var aT=/\w*$/;let az=function(e){var t=new e.constructor(e.source,aT.exec(e));return t.lastIndex=e.lastIndex,t};var aN=nX?nX.prototype:void 0,aA=aN?aN.valueOf:void 0;let aI=function(e,t){var n=t?aP(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)},aF=function(e,t,n){var r=e.constructor;switch(t){case"[object ArrayBuffer]":return aP(e);case"[object Boolean]":case"[object Date]":return new r(+e);case"[object DataView]":return aE(e,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return aI(e,n);case"[object Map]":case"[object Set]":return new r;case"[object Number]":case"[object String]":return new r(e);case"[object RegExp]":return az(e);case"[object Symbol]":return aA?Object(aA.call(e)):{}}};var aM=Object.create,aD=function(){function e(){}return function(t){if(!ro(t))return{};if(aM)return aM(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}(),aR=rV&&rV.isMap,aL=aR?rq(aR):function(e){return n3(e)&&"[object Map]"==aj(e)},aB=rV&&rV.isSet,aH=aB?rq(aB):function(e){return n3(e)&&"[object Set]"==aj(e)},aW="[object Arguments]",aU="[object Function]",aq="[object Object]",aV={};aV[aW]=aV["[object Array]"]=aV["[object ArrayBuffer]"]=aV["[object DataView]"]=aV["[object Boolean]"]=aV["[object Date]"]=aV["[object Float32Array]"]=aV["[object Float64Array]"]=aV["[object Int8Array]"]=aV["[object Int16Array]"]=aV["[object Int32Array]"]=aV["[object Map]"]=aV["[object Number]"]=aV[aq]=aV["[object RegExp]"]=aV["[object Set]"]=aV["[object String]"]=aV["[object Symbol]"]=aV["[object Uint8Array]"]=aV["[object Uint8ClampedArray]"]=aV["[object Uint16Array]"]=aV["[object Uint32Array]"]=!0,aV["[object Error]"]=aV[aU]=aV["[object WeakMap]"]=!1;let aG=function e(t,n,r,a,o,i){var s,l=1&n,c=2&n,d=4&n;if(r&&(s=o?r(t,a,o,i):r(t)),void 0!==s)return s;if(!ro(t))return t;var u=rR(t);if(u){if(s=aO(t),!l)return r9(t,s)}else{var p,h,f,m,g,b=aj(t),y=b==aU||"[object GeneratorFunction]"==b;if(rL(t))return r7(t,l);if(b==aq||b==aW||y&&!o){if(s=c||y||"function"!=typeof(p=t).constructor||rK(p)?{}:aD(n4(p)),!l)return c?(f=(h=s)&&rz(t,r8(t),h),rz(t,ai(t),f)):(g=(m=s)&&rz(t,r5(t),m),rz(t,aa(t),g))}else{if(!aV[b])return o?t:{};s=aF(t,b,l)}}i||(i=new rS);var v=i.get(t);if(v)return v;i.set(t,s),aH(t)?t.forEach(function(a){s.add(e(a,n,r,a,t,i))}):aL(t)&&t.forEach(function(a,o){s.set(o,e(a,n,r,o,t,i))});var x=d?c?ac:al:c?r8:r5,w=u?void 0:x(t);return rO(w||t,function(a,o){w&&(a=t[o=a]),rT(s,o,e(a,n,r,o,t,i))}),s},aX=function(e){return aG(e,5)};var aY=e.i(32892);let aJ=function(e,t){},aZ=function(e){return aG(e,4)},aK=function(e,t){for(var n=-1,r=null==e?0:e.length,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a},aQ=function(e){return"symbol"==typeof e||n3(e)&&"[object Symbol]"==n2(e)};function a0(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw TypeError("Expected a function");var n=function(){var r=arguments,a=t?t.apply(this,r):r[0],o=n.cache;if(o.has(a))return o.get(a);var i=e.apply(this,r);return n.cache=o.set(a,i)||o,i};return n.cache=new(a0.Cache||rj),n}a0.Cache=rj;var a1=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a2=/\\(\\)?/g,a5=(i=(o=a0(function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(a1,function(e,n,r,a){t.push(r?a.replace(a2,"$1"):n||e)}),t},function(e){return 500===i.size&&i.clear(),e})).cache,o),a4=1/0;let a3=function(e){if("string"==typeof e||aQ(e))return e;var t=e+"";return"0"==t&&1/e==-a4?"-0":t};var a6=1/0,a8=nX?nX.prototype:void 0,a7=a8?a8.toString:void 0;let a9=function e(t){if("string"==typeof t)return t;if(rR(t))return aK(t,e)+"";if(aQ(t))return a7?a7.call(t):"";var n=t+"";return"0"==n&&1/t==-a6?"-0":n},oe=function(e){return rR(e)?aK(e,a3):aQ(e)?[e]:r9(a5(null==e?"":a9(e)))};function ot(){return(ot=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}e.i(98437);function on(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function or(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var oa=(0,l.createContext)(void 0);oa.displayName="FormikContext",oa.Provider,oa.Consumer;var oo=function(e){return Array.isArray(e)&&0===e.length},oi=function(e){return"function"==typeof e},os=function(e){return null!==e&&"object"==typeof e},ol=function(e){return"[object String]"===Object.prototype.toString.call(e)},oc=function(e){return os(e)&&oi(e.then)};function od(e,t,n,r){void 0===r&&(r=0);for(var a=oe(t);e&&r<a.length;)e=e[a[r++]];return r===a.length||e?void 0===e?n:e:n}function ou(e,t,n){for(var r=aZ(e),a=r,o=0,i=oe(t);o<i.length-1;o++){var s=i[o],l=od(e,i.slice(0,o+1));if(l&&(os(l)||Array.isArray(l)))a=a[s]=aZ(l);else{var c=i[o+1];a=a[s]=String(Math.floor(Number(c)))===c&&Number(c)>=0?[]:{}}}return(0===o?e:a)[i[o]]===n?e:(void 0===n?delete a[i[o]]:a[i[o]]=n,0===o&&void 0===n&&delete r[i[o]],r)}var op={},oh={};function of(e,t,n){var r=e.slice();return t.forEach(function(t,a){if(void 0===r[a]){var o=!1!==n.clone&&n.isMergeableObject(t);r[a]=o?nU(Array.isArray(t)?[]:{},t,n):t}else n.isMergeableObject(t)?r[a]=nU(e[a],t,n):-1===e.indexOf(t)&&r.push(t)}),r}var om="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?l.useLayoutEffect:l.useEffect;function og(e){var t=(0,l.useRef)(e);return om(function(){t.current=e}),(0,l.useCallback)(function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.current.apply(void 0,n)},[])}(0,l.forwardRef)(function(e,t){var n,r=e.action,a=on(e,["action"]),o=((n=(0,l.useContext)(oa))||aJ(!1),n),i=o.handleReset,s=o.handleSubmit;return(0,l.createElement)("form",ot({onSubmit:s,ref:t,onReset:i,action:null!=r?r:"#"},a))}).displayName="Form";var ob=function(e,t,n){var r=ow(e),a=r[t];return r.splice(t,1),r.splice(n,0,a),r},oy=function(e,t,n){var r=ow(e),a=r[t];return r[t]=r[n],r[n]=a,r},ov=function(e,t,n){var r=ow(e);return r.splice(t,0,n),r},ox=function(e,t,n){var r=ow(e);return r[t]=n,r},ow=function(e){if(!e)return[];if(Array.isArray(e))return[].concat(e);var t=Object.keys(e).map(function(e){return parseInt(e)}).reduce(function(e,t){return t>e?t:e},0);return Array.from(ot({},e,{length:t+1}))},ok=function(e,t){var n="function"==typeof e?e:t;return function(e){return Array.isArray(e)||os(e)?n(ow(e)):e}};(function(e){function t(t){var n;return(n=e.call(this,t)||this).updateArrayField=function(e,t,r){var a=n.props,o=a.name;(0,a.formik.setFormikState)(function(n){var a=ok(r,e),i=ok(t,e),s=ou(n.values,o,e(od(n.values,o))),l=r?a(od(n.errors,o)):void 0,c=t?i(od(n.touched,o)):void 0;return oo(l)&&(l=void 0),oo(c)&&(c=void 0),ot({},n,{values:s,errors:r?ou(n.errors,o,l):n.errors,touched:t?ou(n.touched,o,c):n.touched})})},n.push=function(e){return n.updateArrayField(function(t){return[].concat(ow(t),[aX(e)])},!1,!1)},n.handlePush=function(e){return function(){return n.push(e)}},n.swap=function(e,t){return n.updateArrayField(function(n){return oy(n,e,t)},!0,!0)},n.handleSwap=function(e,t){return function(){return n.swap(e,t)}},n.move=function(e,t){return n.updateArrayField(function(n){return ob(n,e,t)},!0,!0)},n.handleMove=function(e,t){return function(){return n.move(e,t)}},n.insert=function(e,t){return n.updateArrayField(function(n){return ov(n,e,t)},function(t){return ov(t,e,null)},function(t){return ov(t,e,null)})},n.handleInsert=function(e,t){return function(){return n.insert(e,t)}},n.replace=function(e,t){return n.updateArrayField(function(n){return ox(n,e,t)},!1,!1)},n.handleReplace=function(e,t){return function(){return n.replace(e,t)}},n.unshift=function(e){var t=-1;return n.updateArrayField(function(n){var r=n?[e].concat(n):[e];return t=r.length,r},function(e){return e?[null].concat(e):[null]},function(e){return e?[null].concat(e):[null]}),t},n.handleUnshift=function(e){return function(){return n.unshift(e)}},n.handleRemove=function(e){return function(){return n.remove(e)}},n.handlePop=function(){return function(){return n.pop()}},n.remove=n.remove.bind(or(n)),n.pop=n.pop.bind(or(n)),n}(n=t).prototype=Object.create((r=e).prototype),n.prototype.constructor=n,n.__proto__=r;var n,r,a=t.prototype;return a.componentDidUpdate=function(e){this.props.validateOnChange&&this.props.formik.validateOnChange&&!(0,aY.default)(od(e.formik.values,e.name),od(this.props.formik.values,this.props.name))&&this.props.formik.validateForm(this.props.formik.values)},a.remove=function(e){var t;return this.updateArrayField(function(n){var r=n?ow(n):[];return t||(t=r[e]),oi(r.splice)&&r.splice(e,1),oi(r.every)&&r.every(function(e){return void 0===e})?[]:r},!0,!0),t},a.pop=function(){var e;return this.updateArrayField(function(t){var n=t.slice();return e||(e=n&&n.pop&&n.pop()),n},!0,!0),e},a.render=function(){var e,t={push:this.push,pop:this.pop,swap:this.swap,move:this.move,insert:this.insert,replace:this.replace,unshift:this.unshift,remove:this.remove,handlePush:this.handlePush,handlePop:this.handlePop,handleSwap:this.handleSwap,handleMove:this.handleMove,handleInsert:this.handleInsert,handleReplace:this.handleReplace,handleUnshift:this.handleUnshift,handleRemove:this.handleRemove},n=this.props,r=n.component,a=n.render,o=n.children,i=n.name,s=on(n.formik,["validate","validationSchema"]),c=ot({},t,{form:s,name:i});return r?(0,l.createElement)(r,c):a?a(c):o?"function"==typeof o?o(c):(e=o,0===l.Children.count(e))?null:l.Children.only(o):null},t})(l.Component).defaultProps={validateOnChange:!0},l.Component,l.Component;var o$=e.i(5766),o_=e.i(37472),oj=e.i(3873),oS=e.i(1439);let oO=Object.prototype.toString,oC=Error.prototype.toString,oP=RegExp.prototype.toString,oE="undefined"!=typeof Symbol?Symbol.prototype.toString:()=>"",oT=/^Symbol\((.*)\)(.*)$/;function oz(e,t=!1){if(null==e||!0===e||!1===e)return""+e;let n=typeof e;if("number"===n)return e!=+e?"NaN":0===e&&1/e<0?"-0":""+e;if("string"===n)return t?`"${e}"`:e;if("function"===n)return"[Function "+(e.name||"anonymous")+"]";if("symbol"===n)return oE.call(e).replace(oT,"Symbol($1)");let r=oO.call(e).slice(8,-1);return"Date"===r?isNaN(e.getTime())?""+e:e.toISOString(e):"Error"===r||e instanceof Error?"["+oC.call(e)+"]":"RegExp"===r?oP.call(e):null}function oN(e,t){let n=oz(e,t);return null!==n?n:JSON.stringify(e,function(e,n){let r=oz(this[e],t);return null!==r?r:n},2)}function oA(e){return null==e?[]:[].concat(e)}let oI=/\$\{\s*(\w+)\s*\}/g;t=Symbol.toStringTag;class oF{constructor(e,n,r,a){this.name=void 0,this.message=void 0,this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=void 0,this.inner=void 0,this[t]="Error",this.name="ValidationError",this.value=n,this.path=r,this.type=a,this.errors=[],this.inner=[],oA(e).forEach(e=>{if(oM.isError(e)){this.errors.push(...e.errors);let t=e.inner.length?e.inner:[e];this.inner.push(...t)}else this.errors.push(e)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0]}}n=Symbol.hasInstance,r=Symbol.toStringTag;class oM extends Error{static formatError(e,t){let n=t.label||t.path||"this";return(t=Object.assign({},t,{path:n,originalPath:t.path}),"string"==typeof e)?e.replace(oI,(e,n)=>oN(t[n])):"function"==typeof e?e(t):e}static isError(e){return e&&"ValidationError"===e.name}constructor(e,t,n,a,o){const i=new oF(e,t,n,a);if(o)return i;super(),this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=[],this.inner=[],this[r]="Error",this.name=i.name,this.message=i.message,this.type=i.type,this.value=i.value,this.path=i.path,this.errors=i.errors,this.inner=i.inner,Error.captureStackTrace&&Error.captureStackTrace(this,oM)}static[n](e){return oF[Symbol.hasInstance](e)||super[Symbol.hasInstance](e)}}let oD={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:e,type:t,value:n,originalValue:r})=>{let a=null!=r&&r!==n?` (cast from the value \`${oN(r,!0)}\`).`:".";return"mixed"!==t?`${e} must be a \`${t}\` type, but the final value was: \`${oN(n,!0)}\``+a:`${e} must match the configured type. The validated value was: \`${oN(n,!0)}\``+a}},oR={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",datetime:"${path} must be a valid ISO date-time",datetime_precision:"${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",datetime_offset:'${path} must be a valid ISO date-time with UTC "Z" timezone',trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},oL={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},oB={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},oH={isValue:"${path} field must be ${value}"},oW={noUnknown:"${path} field has unspecified keys: ${unknown}",exact:"${path} object contains unknown properties: ${properties}"},oU={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},oq={notType:e=>{let{path:t,value:n,spec:r}=e,a=r.types.length;if(Array.isArray(n)){if(n.length<a)return`${t} tuple value has too few items, expected a length of ${a} but got ${n.length} for value: \`${oN(n,!0)}\``;if(n.length>a)return`${t} tuple value has too many items, expected a length of ${a} but got ${n.length} for value: \`${oN(n,!0)}\``}return oM.formatError(oD.notType,e)}};Object.assign(Object.create(null),{mixed:oD,string:oR,number:oL,date:oB,object:oW,array:oU,boolean:oH,tuple:oq});let oV=e=>e&&e.__isYupSchema__;class oG{static fromOptions(e,t){if(!t.then&&!t.otherwise)throw TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:n,then:r,otherwise:a}=t,o="function"==typeof n?n:(...e)=>e.every(e=>e===n);return new oG(e,(e,t)=>{var n;let i=o(...e)?r:a;return null!=(n=null==i?void 0:i(t))?n:t})}constructor(e,t){this.fn=void 0,this.refs=e,this.refs=e,this.fn=t}resolve(e,t){let n=this.refs.map(e=>e.getValue(null==t?void 0:t.value,null==t?void 0:t.parent,null==t?void 0:t.context)),r=this.fn(n,e,t);if(void 0===r||r===e)return e;if(!oV(r))throw TypeError("conditions must return a schema object");return r.resolve(t)}}class oX{constructor(e,t={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,"string"!=typeof e)throw TypeError("ref must be a string, got: "+e);if(this.key=e.trim(),""===e)throw TypeError("ref must be a non-empty string");this.isContext="$"===this.key[0],this.isValue="."===this.key[0],this.isSibling=!this.isContext&&!this.isValue;let n=this.isContext?"$":this.isValue?".":"";this.path=this.key.slice(n.length),this.getter=this.path&&(0,o_.getter)(this.path,!0),this.map=t.map}getValue(e,t,n){let r=this.isContext?n:this.isValue?e:t;return this.getter&&(r=this.getter(r||{})),this.map&&(r=this.map(r)),r}cast(e,t){return this.getValue(e,null==t?void 0:t.parent,null==t?void 0:t.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(e){return e&&e.__isYupRef}}function oY(e){function t({value:t,path:n="",options:r,originalValue:a,schema:o},i,s){let l,{name:c,test:d,params:u,message:p,skipAbsent:h}=e,{parent:f,context:m,abortEarly:g=o.spec.abortEarly,disableStackTrace:b=o.spec.disableStackTrace}=r,y={value:t,parent:f,context:m};function v(e={}){let r=oJ(Object.assign({value:t,originalValue:a,label:o.spec.label,path:e.path||n,spec:o.spec,disableStackTrace:e.disableStackTrace||b},u,e.params),y),i=new oM(oM.formatError(e.message||p,r),t,r.path,e.type||c,r.disableStackTrace);return i.params=r,i}let x=g?i:s,w={path:n,parent:f,type:c,from:r.from,createError:v,resolve:e=>oZ(e,y),options:r,originalValue:a,schema:o},k=e=>{oM.isError(e)?x(e):e?s(null):x(v())},$=e=>{oM.isError(e)?x(e):i(e)};if(h&&null==t)return k(!0);try{var _;if(l=d.call(w,t,w),"function"==typeof(null==(_=l)?void 0:_.then)){if(r.sync)throw Error(`Validation test of type: "${w.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(l).then(k,$)}}catch(e){$(e);return}k(l)}return t.OPTIONS=e,t}function oJ(e,t){if(!e)return e;for(let n of Object.keys(e))e[n]=oZ(e[n],t);return e}function oZ(e,t){return oX.isRef(e)?e.getValue(t.value,t.parent,t.context):e}oX.prototype.__isYupRef=!0;class oK extends Set{describe(){let e=[];for(let t of this.values())e.push(oX.isRef(t)?t.describe():t);return e}resolveAll(e){let t=[];for(let n of this.values())t.push(e(n));return t}clone(){return new oK(this.values())}merge(e,t){let n=this.clone();return e.forEach(e=>n.add(e)),t.forEach(e=>n.delete(e)),n}}function oQ(e,t=new Map){let n;if(oV(e)||!e||"object"!=typeof e)return e;if(t.has(e))return t.get(e);if(e instanceof Date)n=new Date(e.getTime()),t.set(e,n);else if(e instanceof RegExp)n=new RegExp(e),t.set(e,n);else if(Array.isArray(e)){n=Array(e.length),t.set(e,n);for(let r=0;r<e.length;r++)n[r]=oQ(e[r],t)}else if(e instanceof Map)for(let[r,a]of(n=new Map,t.set(e,n),e.entries()))n.set(r,oQ(a,t));else if(e instanceof Set)for(let r of(n=new Set,t.set(e,n),e))n.add(oQ(r,t));else if(e instanceof Object)for(let[r,a]of(n={},t.set(e,n),Object.entries(e)))n[r]=oQ(a,t);else throw Error(`Unable to clone ${e}`);return n}function o0(e,t){var n;if(!(null!=(n=e.inner)&&n.length)&&e.errors.length){let n;return n=t?`${t}.${e.path}`:e.path,e.errors.map(e=>({message:e,path:function(e){if(!(null!=e&&e.length))return;let t=[],n="",r=!1,a=!1;for(let o=0;o<e.length;o++){let i=e[o];if("["===i&&!a){n&&(t.push(...n.split(".").filter(Boolean)),n=""),r=!0;continue}if("]"===i&&!a){n&&(/^\d+$/.test(n)?t.push(n):t.push(n.replace(/^"|"$/g,"")),n=""),r=!1;continue}if('"'===i){a=!a;continue}if("."===i&&!r&&!a){n&&(t.push(n),n="");continue}n+=i}return n&&t.push(...n.split(".").filter(Boolean)),t}(n)}))}let r=t?`${t}.${e.path}`:e.path;return e.inner.flatMap(e=>o0(e,r))}class o1{constructor(e){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new oK,this._blacklist=new oK,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(oD.notType)}),this.type=e.type,this._typeCheck=e.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},null==e?void 0:e.spec),this.withMutation(e=>{e.nonNullable()})}get _type(){return this.type}clone(e){if(this._mutate)return e&&Object.assign(this.spec,e),this;let t=Object.create(Object.getPrototypeOf(this));return t.type=this.type,t._typeCheck=this._typeCheck,t._whitelist=this._whitelist.clone(),t._blacklist=this._blacklist.clone(),t.internalTests=Object.assign({},this.internalTests),t.exclusiveTests=Object.assign({},this.exclusiveTests),t.deps=[...this.deps],t.conditions=[...this.conditions],t.tests=[...this.tests],t.transforms=[...this.transforms],t.spec=oQ(Object.assign({},this.spec,e)),t}label(e){let t=this.clone();return t.spec.label=e,t}meta(...e){if(0===e.length)return this.spec.meta;let t=this.clone();return t.spec.meta=Object.assign(t.spec.meta||{},e[0]),t}withMutation(e){let t=this._mutate;this._mutate=!0;let n=e(this);return this._mutate=t,n}concat(e){if(!e||e===this)return this;if(e.type!==this.type&&"mixed"!==this.type)throw TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${e.type}`);let t=e.clone(),n=Object.assign({},this.spec,t.spec);return t.spec=n,t.internalTests=Object.assign({},this.internalTests,t.internalTests),t._whitelist=this._whitelist.merge(e._whitelist,e._blacklist),t._blacklist=this._blacklist.merge(e._blacklist,e._whitelist),t.tests=this.tests,t.exclusiveTests=this.exclusiveTests,t.withMutation(t=>{e.tests.forEach(e=>{t.test(e.OPTIONS)})}),t.transforms=[...this.transforms,...t.transforms],t}isType(e){return null==e?!!this.spec.nullable&&null===e||!!this.spec.optional&&void 0===e:this._typeCheck(e)}resolve(e){let t=this;if(t.conditions.length){let n=t.conditions;(t=t.clone()).conditions=[],t=(t=n.reduce((t,n)=>n.resolve(t,e),t)).resolve(e)}return t}resolveOptions(e){var t,n,r,a;return Object.assign({},e,{from:e.from||[],strict:null!=(t=e.strict)?t:this.spec.strict,abortEarly:null!=(n=e.abortEarly)?n:this.spec.abortEarly,recursive:null!=(r=e.recursive)?r:this.spec.recursive,disableStackTrace:null!=(a=e.disableStackTrace)?a:this.spec.disableStackTrace})}cast(e,t={}){let n=this.resolve(Object.assign({},t,{value:e})),r="ignore-optionality"===t.assert,a=n._cast(e,t);if(!1!==t.assert&&!n.isType(a)){if(r&&null==a)return a;let o=oN(e),i=oN(a);throw TypeError(`The value of ${t.path||"field"} could not be cast to a value that satisfies the schema type: "${n.type}". 

attempted value: ${o} 
`+(i!==o?`result of cast: ${i}`:""))}return a}_cast(e,t){let n=void 0===e?e:this.transforms.reduce((n,r)=>r.call(this,n,e,this,t),e);return void 0===n&&(n=this.getDefault(t)),n}_validate(e,t={},n,r){let{path:a,originalValue:o=e,strict:i=this.spec.strict}=t,s=e;i||(s=this._cast(s,Object.assign({assert:!1},t)));let l=[];for(let e of Object.values(this.internalTests))e&&l.push(e);this.runTests({path:a,value:s,originalValue:o,options:t,tests:l},n,e=>{if(e.length)return r(e,s);this.runTests({path:a,value:s,originalValue:o,options:t,tests:this.tests},n,r)})}runTests(e,t,n){let r=!1,{tests:a,value:o,originalValue:i,path:s,options:l}=e,c=e=>{r||(r=!0,t(e,o))},d=e=>{r||(r=!0,n(e,o))},u=a.length,p=[];if(!u)return d([]);let h={value:o,originalValue:i,path:s,options:l,schema:this};for(let e=0;e<a.length;e++)(0,a[e])(h,c,function(e){e&&(Array.isArray(e)?p.push(...e):p.push(e)),--u<=0&&d(p)})}asNestedTest({key:e,index:t,parent:n,parentPath:r,originalParent:a,options:o}){let i=null!=e?e:t;if(null==i)throw TypeError("Must include `key` or `index` for nested validations");let s="number"==typeof i,l=n[i],c=Object.assign({},o,{strict:!0,parent:n,value:l,originalValue:a[i],key:void 0,[s?"index":"key"]:i,path:s||i.includes(".")?`${r||""}[${s?i:`"${i}"`}]`:(r?`${r}.`:"")+e});return(e,t,n)=>this.resolve(c)._validate(l,c,t,n)}validate(e,t){var n;let r=this.resolve(Object.assign({},t,{value:e})),a=null!=(n=null==t?void 0:t.disableStackTrace)?n:r.spec.disableStackTrace;return new Promise((n,o)=>r._validate(e,t,(e,t)=>{oM.isError(e)&&(e.value=t),o(e)},(e,t)=>{e.length?o(new oM(e,t,void 0,void 0,a)):n(t)}))}validateSync(e,t){var n;let r,a=this.resolve(Object.assign({},t,{value:e})),o=null!=(n=null==t?void 0:t.disableStackTrace)?n:a.spec.disableStackTrace;return a._validate(e,Object.assign({},t,{sync:!0}),(e,t)=>{throw oM.isError(e)&&(e.value=t),e},(t,n)=>{if(t.length)throw new oM(t,e,void 0,void 0,o);r=n}),r}isValid(e,t){return this.validate(e,t).then(()=>!0,e=>{if(oM.isError(e))return!1;throw e})}isValidSync(e,t){try{return this.validateSync(e,t),!0}catch(e){if(oM.isError(e))return!1;throw e}}_getDefault(e){let t=this.spec.default;return null==t?t:"function"==typeof t?t.call(this,e):oQ(t)}getDefault(e){return this.resolve(e||{})._getDefault(e)}default(e){return 0==arguments.length?this._getDefault():this.clone({default:e})}strict(e=!0){return this.clone({strict:e})}nullability(e,t){let n=this.clone({nullable:e});return n.internalTests.nullable=oY({message:t,name:"nullable",test(e){return null!==e||this.schema.spec.nullable}}),n}optionality(e,t){let n=this.clone({optional:e});return n.internalTests.optionality=oY({message:t,name:"optionality",test(e){return void 0!==e||this.schema.spec.optional}}),n}optional(){return this.optionality(!0)}defined(e=oD.defined){return this.optionality(!1,e)}nullable(){return this.nullability(!0)}nonNullable(e=oD.notNull){return this.nullability(!1,e)}required(e=oD.required){return this.clone().withMutation(t=>t.nonNullable(e).defined(e))}notRequired(){return this.clone().withMutation(e=>e.nullable().optional())}transform(e){let t=this.clone();return t.transforms.push(e),t}test(...e){let t;if(void 0===(t=1===e.length?"function"==typeof e[0]?{test:e[0]}:e[0]:2===e.length?{name:e[0],test:e[1]}:{name:e[0],message:e[1],test:e[2]}).message&&(t.message=oD.default),"function"!=typeof t.test)throw TypeError("`test` is a required parameters");let n=this.clone(),r=oY(t),a=t.exclusive||t.name&&!0===n.exclusiveTests[t.name];if(t.exclusive&&!t.name)throw TypeError("Exclusive tests must provide a unique `name` identifying the test");return t.name&&(n.exclusiveTests[t.name]=!!t.exclusive),n.tests=n.tests.filter(e=>(e.OPTIONS.name!==t.name||!a&&e.OPTIONS.test!==r.OPTIONS.test)&&!0),n.tests.push(r),n}when(e,t){Array.isArray(e)||"string"==typeof e||(t=e,e=".");let n=this.clone(),r=oA(e).map(e=>new oX(e));return r.forEach(e=>{e.isSibling&&n.deps.push(e.key)}),n.conditions.push("function"==typeof t?new oG(r,t):oG.fromOptions(r,t)),n}typeError(e){let t=this.clone();return t.internalTests.typeError=oY({message:e,name:"typeError",skipAbsent:!0,test(e){return!!this.schema._typeCheck(e)||this.createError({params:{type:this.schema.type}})}}),t}oneOf(e,t=oD.oneOf){let n=this.clone();return e.forEach(e=>{n._whitelist.add(e),n._blacklist.delete(e)}),n.internalTests.whiteList=oY({message:t,name:"oneOf",skipAbsent:!0,test(e){let t=this.schema._whitelist,n=t.resolveAll(this.resolve);return!!n.includes(e)||this.createError({params:{values:Array.from(t).join(", "),resolved:n}})}}),n}notOneOf(e,t=oD.notOneOf){let n=this.clone();return e.forEach(e=>{n._blacklist.add(e),n._whitelist.delete(e)}),n.internalTests.blacklist=oY({message:t,name:"notOneOf",test(e){let t=this.schema._blacklist,n=t.resolveAll(this.resolve);return!n.includes(e)||this.createError({params:{values:Array.from(t).join(", "),resolved:n}})}}),n}strip(e=!0){let t=this.clone();return t.spec.strip=e,t}describe(e){let t=(e?this.resolve(e):this).clone(),{label:n,meta:r,optional:a,nullable:o}=t.spec;return{meta:r,label:n,optional:a,nullable:o,default:t.getDefault(e),type:t.type,oneOf:t._whitelist.describe(),notOneOf:t._blacklist.describe(),tests:t.tests.filter((e,t,n)=>n.findIndex(t=>t.OPTIONS.name===e.OPTIONS.name)===t).map(t=>{let n=t.OPTIONS.params&&e?oJ(Object.assign({},t.OPTIONS.params),e):t.OPTIONS.params;return{name:t.OPTIONS.name,params:n}})}}get"~standard"(){let e=this;return{version:1,vendor:"yup",async validate(t){try{return{value:await e.validate(t,{abortEarly:!1})}}catch(e){if(e instanceof oM)return{issues:o0(e)};throw e}}}}}for(let e of(o1.prototype.__isYupSchema__=!0,["validate","validateSync"]))o1.prototype[`${e}At`]=function(t,n,r={}){let{parent:a,parentPath:o,schema:i}=function(e,t,n,r=n){let a,o,i;return t?((0,o_.forEach)(t,(s,l,c)=>{let d=l?s.slice(1,s.length-1):s,u="tuple"===(e=e.resolve({context:r,parent:a,value:n})).type,p=c?parseInt(d,10):0;if(e.innerType||u){if(u&&!c)throw Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${i}" must contain an index to the tuple element, e.g. "${i}[0]"`);if(n&&p>=n.length)throw Error(`Yup.reach cannot resolve an array item at index: ${s}, in the path: ${t}. because there is no value at that index. `);a=n,n=n&&n[p],e=u?e.spec.types[p]:e.innerType}if(!c){if(!e.fields||!e.fields[d])throw Error(`The schema does not contain the path: ${t}. (failed at: ${i} which is a type: "${e.type}")`);a=n,n=n&&n[d],e=e.fields[d]}o=d,i=l?"["+s+"]":"."+s}),{schema:e,parent:a,parentPath:o}):{parent:a,parentPath:t,schema:e}}(this,t,n,r.context);return i[e](a&&a[o],Object.assign({},r,{parent:a,path:t}))};for(let e of["equals","is"])o1.prototype[e]=o1.prototype.oneOf;for(let e of["not","nope"])o1.prototype[e]=o1.prototype.notOneOf;let o2=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function o5(e){var t,n;let r=o2.exec(e);return r?{year:o4(r[1]),month:o4(r[2],1)-1,day:o4(r[3],1),hour:o4(r[4]),minute:o4(r[5]),second:o4(r[6]),millisecond:r[7]?o4(r[7].substring(0,3)):0,precision:null!=(t=null==(n=r[7])?void 0:n.length)?t:void 0,z:r[8]||void 0,plusMinus:r[9]||void 0,hourOffset:o4(r[10]),minuteOffset:o4(r[11])}:null}function o4(e,t=0){return Number(e)||t}let o3=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,o6=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,o8=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,o7=RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"),o9=e=>null==e||e===e.trim(),ie=({}).toString();function it(){return new ir}class ir extends o1{constructor(){super({type:"string",check:e=>(e instanceof String&&(e=e.valueOf()),"string"==typeof e)}),this.withMutation(()=>{this.transform((e,t)=>{if(!this.spec.coerce||this.isType(e)||Array.isArray(e))return e;let n=null!=e&&e.toString?e.toString():e;return n===ie?e:n})})}required(e){return super.required(e).withMutation(t=>t.test({message:e||oD.required,name:"required",skipAbsent:!0,test:e=>!!e.length}))}notRequired(){return super.notRequired().withMutation(e=>(e.tests=e.tests.filter(e=>"required"!==e.OPTIONS.name),e))}length(e,t=oR.length){return this.test({message:t,name:"length",exclusive:!0,params:{length:e},skipAbsent:!0,test(t){return t.length===this.resolve(e)}})}min(e,t=oR.min){return this.test({message:t,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(t){return t.length>=this.resolve(e)}})}max(e,t=oR.max){return this.test({name:"max",exclusive:!0,message:t,params:{max:e},skipAbsent:!0,test(t){return t.length<=this.resolve(e)}})}matches(e,t){let n,r,a=!1;return t&&("object"==typeof t?{excludeEmptyString:a=!1,message:n,name:r}=t:n=t),this.test({name:r||"matches",message:n||oR.matches,params:{regex:e},skipAbsent:!0,test:t=>""===t&&a||-1!==t.search(e)})}email(e=oR.email){return this.matches(o3,{name:"email",message:e,excludeEmptyString:!0})}url(e=oR.url){return this.matches(o6,{name:"url",message:e,excludeEmptyString:!0})}uuid(e=oR.uuid){return this.matches(o8,{name:"uuid",message:e,excludeEmptyString:!1})}datetime(e){let t,n,r="";return e&&("object"==typeof e?{message:r="",allowOffset:t=!1,precision:n}=e:r=e),this.matches(o7,{name:"datetime",message:r||oR.datetime,excludeEmptyString:!0}).test({name:"datetime_offset",message:r||oR.datetime_offset,params:{allowOffset:t},skipAbsent:!0,test:e=>{if(!e||t)return!0;let n=o5(e);return!!n&&!!n.z}}).test({name:"datetime_precision",message:r||oR.datetime_precision,params:{precision:n},skipAbsent:!0,test:e=>{if(!e||void 0==n)return!0;let t=o5(e);return!!t&&t.precision===n}})}ensure(){return this.default("").transform(e=>null===e?"":e)}trim(e=oR.trim){return this.transform(e=>null!=e?e.trim():e).test({message:e,name:"trim",test:o9})}lowercase(e=oR.lowercase){return this.transform(e=>null==e?e:e.toLowerCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:e=>null==e||e===e.toLowerCase()})}uppercase(e=oR.uppercase){return this.transform(e=>null==e?e:e.toUpperCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:e=>null==e||e===e.toUpperCase()})}}it.prototype=ir.prototype;let ia=new Date("");function io(){return new ii}class ii extends o1{constructor(){super({type:"date",check:e=>"[object Date]"===Object.prototype.toString.call(e)&&!isNaN(e.getTime())}),this.withMutation(()=>{this.transform((e,t)=>!this.spec.coerce||this.isType(e)||null===e?e:isNaN(e=function(e){let t=o5(e);if(!t)return Date.parse?Date.parse(e):NaN;if(void 0===t.z&&void 0===t.plusMinus)return new Date(t.year,t.month,t.day,t.hour,t.minute,t.second,t.millisecond).valueOf();let n=0;return"Z"!==t.z&&void 0!==t.plusMinus&&(n=60*t.hourOffset+t.minuteOffset,"+"===t.plusMinus&&(n=0-n)),Date.UTC(t.year,t.month,t.day,t.hour,t.minute+n,t.second,t.millisecond)}(e))?ii.INVALID_DATE:new Date(e))})}prepareParam(e,t){let n;if(oX.isRef(e))n=e;else{let r=this.cast(e);if(!this._typeCheck(r))throw TypeError(`\`${t}\` must be a Date or a value that can be \`cast()\` to a Date`);n=r}return n}min(e,t=oB.min){let n=this.prepareParam(e,"min");return this.test({message:t,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(e){return e>=this.resolve(n)}})}max(e,t=oB.max){let n=this.prepareParam(e,"max");return this.test({message:t,name:"max",exclusive:!0,params:{max:e},skipAbsent:!0,test(e){return e<=this.resolve(n)}})}}function is(e,t){let n=1/0;return e.some((e,r)=>{var a;if(null!=(a=t.path)&&a.includes(e))return n=r,!0}),n}function il(e){return(t,n)=>is(e,t)-is(e,n)}ii.INVALID_DATE=ia,io.prototype=ii.prototype,io.INVALID_DATE=ia;let ic=(e,t,n)=>{if("string"!=typeof e)return e;let r=e;try{r=JSON.parse(e)}catch(e){}return n.isType(r)?r:e},id=e=>"[object Object]"===Object.prototype.toString.call(e);function iu(e,t){let n=Object.keys(e.fields);return Object.keys(t).filter(e=>-1===n.indexOf(e))}let ip=il([]);function ih(e){return new im(e)}class im extends o1{constructor(e){super({type:"object",check:e=>id(e)||"function"==typeof e}),this.fields=Object.create(null),this._sortErrors=ip,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{e&&this.shape(e)})}_cast(e,t={}){var n;let r=super._cast(e,t);if(void 0===r)return this.getDefault(t);if(!this._typeCheck(r))return r;let a=this.fields,o=null!=(n=t.stripUnknown)?n:this.spec.noUnknown,i=[].concat(this._nodes,Object.keys(r).filter(e=>!this._nodes.includes(e))),s={},l=Object.assign({},t,{parent:s,__validating:t.__validating||!1}),c=!1;for(let e of i){let n=a[e],i=e in r,d=r[e];if(n){let a;l.path=(t.path?`${t.path}.`:"")+e;let o=(n=n.resolve({value:d,context:t.context,parent:s}))instanceof o1?n.spec:void 0,i=null==o?void 0:o.strict;if(null!=o&&o.strip){c=c||e in r;continue}void 0!==(a=t.__validating&&i?d:n.cast(d,l))&&(s[e]=a)}else i&&!o&&(s[e]=d);(i!==e in s||s[e]!==d)&&(c=!0)}return c?s:r}_validate(e,t={},n,r){let{from:a=[],originalValue:o=e,recursive:i=this.spec.recursive}=t;t.from=[{schema:this,value:o},...a],t.__validating=!0,t.originalValue=o,super._validate(e,t,n,(e,a)=>{if(!i||!id(a))return void r(e,a);o=o||a;let s=[];for(let e of this._nodes){let n=this.fields[e];!n||oX.isRef(n)||s.push(n.asNestedTest({options:t,key:e,parent:a,parentPath:t.path,originalParent:o}))}this.runTests({tests:s,value:a,originalValue:o,options:t},n,t=>{r(t.sort(this._sortErrors).concat(e),a)})})}clone(e){let t=super.clone(e);return t.fields=Object.assign({},this.fields),t._nodes=this._nodes,t._excludedEdges=this._excludedEdges,t._sortErrors=this._sortErrors,t}concat(e){let t=super.concat(e),n=t.fields;for(let[e,t]of Object.entries(this.fields)){let r=n[e];n[e]=void 0===r?t:r}return t.withMutation(t=>t.setFields(n,[...this._excludedEdges,...e._excludedEdges]))}_getDefault(e){if("default"in this.spec)return super._getDefault(e);if(!this._nodes.length)return;let t={};return this._nodes.forEach(n=>{var r;let a=this.fields[n],o=e;null!=(r=o)&&r.value&&(o=Object.assign({},o,{parent:o.value,value:o.value[n]})),t[n]=a&&"getDefault"in a?a.getDefault(o):void 0}),t}setFields(e,t){let n=this.clone();return n.fields=e,n._nodes=function(e,t=[]){let n=[],r=new Set,a=new Set(t.map(([e,t])=>`${e}-${t}`));function o(e,t){let o=(0,o_.split)(e)[0];r.add(o),a.has(`${t}-${o}`)||n.push([t,o])}for(let t of Object.keys(e)){let n=e[t];r.add(t),oX.isRef(n)&&n.isSibling?o(n.path,t):oV(n)&&"deps"in n&&n.deps.forEach(e=>o(e,t))}return oS.default.array(Array.from(r),n).reverse()}(e,t),n._sortErrors=il(Object.keys(e)),t&&(n._excludedEdges=t),n}shape(e,t=[]){return this.clone().withMutation(n=>{let r=n._excludedEdges;return t.length&&(Array.isArray(t[0])||(t=[t]),r=[...n._excludedEdges,...t]),n.setFields(Object.assign(n.fields,e),r)})}partial(){let e={};for(let[t,n]of Object.entries(this.fields))e[t]="optional"in n&&n.optional instanceof Function?n.optional():n;return this.setFields(e)}deepPartial(){return function e(t){if("fields"in t){let n={};for(let[r,a]of Object.entries(t.fields))n[r]=e(a);return t.setFields(n)}if("array"===t.type){let n=t.optional();return n.innerType&&(n.innerType=e(n.innerType)),n}return"tuple"===t.type?t.optional().clone({types:t.spec.types.map(e)}):"optional"in t?t.optional():t}(this)}pick(e){let t={};for(let n of e)this.fields[n]&&(t[n]=this.fields[n]);return this.setFields(t,this._excludedEdges.filter(([t,n])=>e.includes(t)&&e.includes(n)))}omit(e){let t=[];for(let n of Object.keys(this.fields))e.includes(n)||t.push(n);return this.pick(t)}from(e,t,n){let r=(0,o_.getter)(e,!0);return this.transform(a=>{if(!a)return a;let o=a;return((e,t)=>{let n=[...(0,o_.normalizePath)(t)];if(1===n.length)return n[0]in e;let r=n.pop(),a=(0,o_.getter)((0,o_.join)(n),!0)(e);return!!(a&&r in a)})(a,e)&&(o=Object.assign({},a),n||delete o[e],o[t]=r(a)),o})}json(){return this.transform(ic)}exact(e){return this.test({name:"exact",exclusive:!0,message:e||oW.exact,test(e){if(null==e)return!0;let t=iu(this.schema,e);return 0===t.length||this.createError({params:{properties:t.join(", ")}})}})}stripUnknown(){return this.clone({noUnknown:!0})}noUnknown(e=!0,t=oW.noUnknown){"boolean"!=typeof e&&(t=e,e=!0);let n=this.test({name:"noUnknown",exclusive:!0,message:t,test(t){if(null==t)return!0;let n=iu(this.schema,t);return!e||0===n.length||this.createError({params:{unknown:n.join(", ")}})}});return n.spec.noUnknown=e,n}unknown(e=!0,t=oW.noUnknown){return this.noUnknown(!e,t)}transformKeys(e){return this.transform(t=>{if(!t)return t;let n={};for(let r of Object.keys(t))n[e(r)]=t[r];return n})}camelCase(){return this.transformKeys(oj.camelCase)}snakeCase(){return this.transformKeys(oj.snakeCase)}constantCase(){return this.transformKeys(e=>(0,oj.snakeCase)(e).toUpperCase())}describe(e){let t=(e?this.resolve(e):this).clone(),n=super.describe(e);for(let[a,o]of(n.fields={},Object.entries(t.fields))){var r;let t=e;null!=(r=t)&&r.value&&(t=Object.assign({},t,{parent:t.value,value:t.value[a]})),n.fields[a]=o.describe(t)}return n}}ih.prototype=im.prototype;let ig={name:"",email:"",message:""},ib=ih({name:it().required("Name is required").min(2,"Name must be at least 2 characters").max(200,"Name must be less than 200 characters").trim(),email:it().required("Email is required").email("Please provide a valid email address").max(200,"Email must be less than 200 characters").trim(),message:it().required("Message is required").min(10,"Message must be at least 10 characters").max(5e3,"Message must be less than 5000 characters").trim()}),iy=es.default.form.withConfig({displayName:"ContactForm.styles__ContactFormWrapper",componentId:"sc-f17c1543-0"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.lg};
  width: 100%;
  max-width: 800px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`,iv=es.default.div.withConfig({displayName:"ContactForm.styles__FormActions",componentId:"sc-f17c1543-1"})`
  display: flex;
  justify-content: flex-start;
  margin-top: ${({theme:e})=>e.spacing.sm};
`,ix=es.default.button.withConfig({displayName:"ContactForm.styles__SendButton",componentId:"sc-f17c1543-2"})`
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
`,iw=()=>{var e,t,n,r,a,o,i,c,d,u,p,h,f,m,g,b,y,v,x,w,k,$,_,j,S,O,C,P,E,T,z,N,A,I,F,M,D,R,L,B,H,W,U,q,V,G,X,Y,J,Z,K,Q,ee,et,en,er;let ea,{formik:eo,isSubmitting:ei}=(n=void 0===(t=(e={initialValues:ig,validationSchema:ib,onSubmit:async(e,{setSubmitting:t,resetForm:n})=>{try{let t=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),r=await t.json();if(!t.ok||!r.success)throw Error(r.message||"Failed to send message");o$.default.success("Message sent successfully! I'll get back to you shortly."),n()}catch(t){let e=t instanceof Error?t.message:"Failed to send message. Please try again later.";o$.default.error(`Failed to send message: ${e}`)}finally{t(!1)}}}).validateOnChange)||t,a=void 0===(r=e.validateOnBlur)||r,i=void 0!==(o=e.validateOnMount)&&o,c=e.isInitialValid,u=void 0!==(d=e.enableReinitialize)&&d,p=e.onSubmit,h=on(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),f=ot({validateOnChange:n,validateOnBlur:a,validateOnMount:i,onSubmit:p},h),m=(0,l.useRef)(f.initialValues),g=(0,l.useRef)(f.initialErrors||op),b=(0,l.useRef)(f.initialTouched||oh),y=(0,l.useRef)(f.initialStatus),v=(0,l.useRef)(!1),x=(0,l.useRef)({}),(0,l.useEffect)(function(){return v.current=!0,function(){v.current=!1}},[]),w=(0,l.useState)(0)[1],$=(k=(0,l.useRef)({values:aX(f.initialValues),errors:aX(f.initialErrors)||op,touched:aX(f.initialTouched)||oh,status:aX(f.initialStatus),isSubmitting:!1,isValidating:!1,submitCount:0})).current,_=(0,l.useCallback)(function(e){var t=k.current;k.current=function(e,t){switch(t.type){case"SET_VALUES":return ot({},e,{values:t.payload});case"SET_TOUCHED":return ot({},e,{touched:t.payload});case"SET_ERRORS":if((0,aY.default)(e.errors,t.payload))return e;return ot({},e,{errors:t.payload});case"SET_STATUS":return ot({},e,{status:t.payload});case"SET_ISSUBMITTING":return ot({},e,{isSubmitting:t.payload});case"SET_ISVALIDATING":return ot({},e,{isValidating:t.payload});case"SET_FIELD_VALUE":return ot({},e,{values:ou(e.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return ot({},e,{touched:ou(e.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return ot({},e,{errors:ou(e.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return ot({},e,t.payload);case"SET_FORMIK_STATE":return t.payload(e);case"SUBMIT_ATTEMPT":return ot({},e,{touched:function e(t,n,r,a){void 0===r&&(r=new WeakMap),void 0===a&&(a={});for(var o=0,i=Object.keys(t);o<i.length;o++){var s=i[o],l=t[s];os(l)?r.get(l)||(r.set(l,!0),a[s]=Array.isArray(l)?[]:{},e(l,n,r,a[s])):a[s]=n}return a}(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":case"SUBMIT_SUCCESS":return ot({},e,{isSubmitting:!1});default:return e}}(t,e),t!==k.current&&w(function(e){return e+1})},[]),j=(0,l.useCallback)(function(e,t){return new Promise(function(n,r){var a=f.validate(e,t);null==a?n(op):oc(a)?a.then(function(e){n(e||op)},function(e){r(e)}):n(a)})},[f.validate]),S=(0,l.useCallback)(function(e,t){var n,r,a,o,i=f.validationSchema,s=oi(i)?i(t):i,l=t&&s.validateAt?s.validateAt(t,e):(n=e,r=s,void 0===a&&(a=!1),o=function e(t){var n=Array.isArray(t)?[]:{};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var a=String(r);!0===Array.isArray(t[a])?n[a]=t[a].map(function(t){return!0===Array.isArray(t)||re(t)?e(t):""!==t?t:void 0}):re(t[a])?n[a]=e(t[a]):n[a]=""!==t[a]?t[a]:void 0}return n}(n),r[a?"validateSync":"validate"](o,{abortEarly:!1,context:o}));return new Promise(function(e,t){l.then(function(){e(op)},function(n){"ValidationError"===n.name?e(function(e){var t={};if(e.inner){if(0===e.inner.length)return ou(t,e.path,e.message);for(var n=e.inner,r=Array.isArray(n),a=0,n=r?n:n[Symbol.iterator]();;){if(r){if(a>=n.length)break;o=n[a++]}else{if((a=n.next()).done)break;o=a.value}var o,i=o;od(t,i.path)||(t=ou(t,i.path,i.message))}}return t}(n)):t(n)})})},[f.validationSchema]),O=(0,l.useCallback)(function(e,t){return new Promise(function(n){return n(x.current[e].validate(t))})},[]),C=(0,l.useCallback)(function(e){var t=Object.keys(x.current).filter(function(e){return oi(x.current[e].validate)});return Promise.all(t.length>0?t.map(function(t){return O(t,od(e,t))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")]).then(function(e){return e.reduce(function(e,n,r){return"DO_NOT_DELETE_YOU_WILL_BE_FIRED"===n||n&&(e=ou(e,t[r],n)),e},{})})},[O]),P=(0,l.useCallback)(function(e){return Promise.all([C(e),f.validationSchema?S(e):{},f.validate?j(e):{}]).then(function(e){var t=e[0],n=e[1],r=e[2];return nU.all([t,n,r],{arrayMerge:of})})},[f.validate,f.validationSchema,C,j,S]),E=og(function(e){return void 0===e&&(e=$.values),_({type:"SET_ISVALIDATING",payload:!0}),P(e).then(function(e){return v.current&&(_({type:"SET_ISVALIDATING",payload:!1}),_({type:"SET_ERRORS",payload:e})),e})}),(0,l.useEffect)(function(){i&&!0===v.current&&(0,aY.default)(m.current,f.initialValues)&&E(m.current)},[i,E]),T=(0,l.useCallback)(function(e){var t=e&&e.values?e.values:m.current,n=e&&e.errors?e.errors:g.current?g.current:f.initialErrors||{},r=e&&e.touched?e.touched:b.current?b.current:f.initialTouched||{},a=e&&e.status?e.status:y.current?y.current:f.initialStatus;m.current=t,g.current=n,b.current=r,y.current=a;var o=function(){_({type:"RESET_FORM",payload:{isSubmitting:!!e&&!!e.isSubmitting,errors:n,touched:r,status:a,values:t,isValidating:!!e&&!!e.isValidating,submitCount:e&&e.submitCount&&"number"==typeof e.submitCount?e.submitCount:0}})};if(f.onReset){var i=f.onReset($.values,J);oc(i)?i.then(o):o()}else o()},[f.initialErrors,f.initialStatus,f.initialTouched,f.onReset]),(0,l.useEffect)(function(){!0===v.current&&!(0,aY.default)(m.current,f.initialValues)&&u&&(m.current=f.initialValues,T(),i&&E(m.current))},[u,f.initialValues,T,i,E]),(0,l.useEffect)(function(){u&&!0===v.current&&!(0,aY.default)(g.current,f.initialErrors)&&(g.current=f.initialErrors||op,_({type:"SET_ERRORS",payload:f.initialErrors||op}))},[u,f.initialErrors]),(0,l.useEffect)(function(){u&&!0===v.current&&!(0,aY.default)(b.current,f.initialTouched)&&(b.current=f.initialTouched||oh,_({type:"SET_TOUCHED",payload:f.initialTouched||oh}))},[u,f.initialTouched]),(0,l.useEffect)(function(){u&&!0===v.current&&!(0,aY.default)(y.current,f.initialStatus)&&(y.current=f.initialStatus,_({type:"SET_STATUS",payload:f.initialStatus}))},[u,f.initialStatus,f.initialTouched]),z=og(function(e){if(x.current[e]&&oi(x.current[e].validate)){var t=od($.values,e),n=x.current[e].validate(t);return oc(n)?(_({type:"SET_ISVALIDATING",payload:!0}),n.then(function(e){return e}).then(function(t){_({type:"SET_FIELD_ERROR",payload:{field:e,value:t}}),_({type:"SET_ISVALIDATING",payload:!1})})):(_({type:"SET_FIELD_ERROR",payload:{field:e,value:n}}),Promise.resolve(n))}return f.validationSchema?(_({type:"SET_ISVALIDATING",payload:!0}),S($.values,e).then(function(e){return e}).then(function(t){_({type:"SET_FIELD_ERROR",payload:{field:e,value:od(t,e)}}),_({type:"SET_ISVALIDATING",payload:!1})})):Promise.resolve()}),N=(0,l.useCallback)(function(e,t){var n=t.validate;x.current[e]={validate:n}},[]),A=(0,l.useCallback)(function(e){delete x.current[e]},[]),I=og(function(e,t){return _({type:"SET_TOUCHED",payload:e}),(void 0===t?a:t)?E($.values):Promise.resolve()}),F=(0,l.useCallback)(function(e){_({type:"SET_ERRORS",payload:e})},[]),M=og(function(e,t){var r=oi(e)?e($.values):e;return _({type:"SET_VALUES",payload:r}),(void 0===t?n:t)?E(r):Promise.resolve()}),D=(0,l.useCallback)(function(e,t){_({type:"SET_FIELD_ERROR",payload:{field:e,value:t}})},[]),R=og(function(e,t,r){var a=oi(t)?t(od($.values,e)):t;return _({type:"SET_FIELD_VALUE",payload:{field:e,value:a}}),(void 0===r?n:r)?E(ou($.values,e,a)):Promise.resolve()}),L=(0,l.useCallback)(function(e,t){var n,r=t,a=e;if(!ol(e)){e.persist&&e.persist();var o=e.target?e.target:e.currentTarget,i=o.type,s=o.name,l=o.id,c=o.value,d=o.checked,u=(o.outerHTML,o.options),p=o.multiple;r=t||s||l,a=/number|range/.test(i)?isNaN(n=parseFloat(c))?"":n:/checkbox/.test(i)?function(e,t,n){if("boolean"==typeof e)return!!t;var r=[],a=!1,o=-1;if(Array.isArray(e))r=e,a=(o=e.indexOf(n))>=0;else if(!n||"true"==n||"false"==n)return!!t;return t&&n&&!a?r.concat(n):a?r.slice(0,o).concat(r.slice(o+1)):r}(od($.values,r),d,c):u&&p?Array.from(u).filter(function(e){return e.selected}).map(function(e){return e.value}):c}r&&R(r,a)},[R,$.values]),B=og(function(e){if(ol(e))return function(t){return L(t,e)};L(e)}),H=og(function(e,t,n){return void 0===t&&(t=!0),_({type:"SET_FIELD_TOUCHED",payload:{field:e,value:t}}),(void 0===n?a:n)?E($.values):Promise.resolve()}),W=(0,l.useCallback)(function(e,t){e.persist&&e.persist();var n=e.target,r=n.name,a=n.id;n.outerHTML,H(t||r||a,!0)},[H]),U=og(function(e){if(ol(e))return function(t){return W(t,e)};W(e)}),q=(0,l.useCallback)(function(e){oi(e)?_({type:"SET_FORMIK_STATE",payload:e}):_({type:"SET_FORMIK_STATE",payload:function(){return e}})},[]),V=(0,l.useCallback)(function(e){_({type:"SET_STATUS",payload:e})},[]),G=(0,l.useCallback)(function(e){_({type:"SET_ISSUBMITTING",payload:e})},[]),X=og(function(){return _({type:"SUBMIT_ATTEMPT"}),E().then(function(e){var t,n=e instanceof Error;if(!n&&0===Object.keys(e).length){try{if(t=Z(),void 0===t)return}catch(e){throw e}return Promise.resolve(t).then(function(e){return v.current&&_({type:"SUBMIT_SUCCESS"}),e}).catch(function(e){if(v.current)throw _({type:"SUBMIT_FAILURE"}),e})}if(v.current&&(_({type:"SUBMIT_FAILURE"}),n))throw e})}),Y=og(function(e){e&&e.preventDefault&&oi(e.preventDefault)&&e.preventDefault(),e&&e.stopPropagation&&oi(e.stopPropagation)&&e.stopPropagation(),X().catch(function(e){console.warn("Warning: An unhandled error was caught from submitForm()",e)})}),J={resetForm:T,validateForm:E,validateField:z,setErrors:F,setFieldError:D,setFieldTouched:H,setFieldValue:R,setStatus:V,setSubmitting:G,setTouched:I,setValues:M,setFormikState:q,submitForm:X},Z=og(function(){return p($.values,J)}),K=og(function(e){e&&e.preventDefault&&oi(e.preventDefault)&&e.preventDefault(),e&&e.stopPropagation&&oi(e.stopPropagation)&&e.stopPropagation(),T()}),Q=(0,l.useCallback)(function(e){return{value:od($.values,e),error:od($.errors,e),touched:!!od($.touched,e),initialValue:od(m.current,e),initialTouched:!!od(b.current,e),initialError:od(g.current,e)}},[$.errors,$.touched,$.values]),ee=(0,l.useCallback)(function(e){return{setValue:function(t,n){return R(e,t,n)},setTouched:function(t,n){return H(e,t,n)},setError:function(t){return D(e,t)}}},[R,H,D]),et=(0,l.useCallback)(function(e){var t=os(e),n=t?e.name:e,r=od($.values,n),a={name:n,value:r,onChange:B,onBlur:U};if(t){var o=e.type,i=e.value,s=e.as,l=e.multiple;"checkbox"===o?void 0===i?a.checked=!!r:(a.checked=!!(Array.isArray(r)&&~r.indexOf(i)),a.value=i):"radio"===o?(a.checked=r===i,a.value=i):"select"===s&&l&&(a.value=a.value||[],a.multiple=!0)}return a},[U,B,$.values]),en=(0,l.useMemo)(function(){return!(0,aY.default)(m.current,$.values)},[m.current,$.values]),er=(0,l.useMemo)(function(){return void 0!==c?en?$.errors&&0===Object.keys($.errors).length:!1!==c&&oi(c)?c(f):c:$.errors&&0===Object.keys($.errors).length},[c,en,$.errors,f]),{formik:ea=ot({},$,{initialValues:m.current,initialErrors:g.current,initialTouched:b.current,initialStatus:y.current,handleBlur:U,handleChange:B,handleReset:K,handleSubmit:Y,resetForm:T,setErrors:F,setFormikState:q,setFieldTouched:H,setFieldValue:R,setFieldError:D,setStatus:V,setSubmitting:G,setTouched:I,setValues:M,submitForm:X,validateForm:E,validateField:z,isValid:er,dirty:en,unregisterField:A,registerField:N,getFieldProps:et,getFieldMeta:Q,getFieldHelpers:ee,validateOnBlur:a,validateOnChange:n,validateOnMount:i}),isSubmitting:ea.isSubmitting}),{values:es,errors:el,touched:ec,handleChange:ed,handleBlur:eu,handleSubmit:ep}=eo;return(0,s.jsxs)(iy,{onSubmit:ep,"data-aos":"fade-up","data-aos-delay":"300",children:[(0,s.jsx)(tm,{label:"NAME",name:"name",value:es.name,onChange:ed,onBlur:eu,error:ec.name&&el.name?el.name:void 0,placeholder:""}),(0,s.jsx)(tm,{label:"EMAIL",name:"email",type:"email",value:es.email,onChange:ed,onBlur:eu,error:ec.email&&el.email?el.email:void 0,placeholder:""}),(0,s.jsx)(tg,{label:"MESSAGE",name:"message",value:es.message,onChange:ed,onBlur:eu,error:ec.message&&el.message?el.message:void 0,placeholder:""}),(0,s.jsx)(iv,{children:(0,s.jsxs)(ix,{type:"submit",disabled:ei,children:[ei?"Sending...":"Send Message",(0,s.jsx)(nD,{size:16})]})})]})},ik=es.default.div.withConfig({displayName:"Contact.styles__StyledContact",componentId:"sc-8b48986e-0"})`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`,i$=es.default.div.withConfig({displayName:"Contact.styles__ContactWrapper",componentId:"sc-8b48986e-1"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing["4xl"]};
  align-items: center;
  width: 100%;
`,i_=es.default.div.withConfig({displayName:"Contact.styles__ContactFormSection",componentId:"sc-8b48986e-2"})`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 800px;

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`,ij=({sectionNumber:e="04",headline:t="Let's Build Something Together",description:n="Open to collaboration on research projects, open-source contributions, healthcare AI initiatives, or consulting opportunities."})=>(0,s.jsx)(tk,{id:"contact",children:(0,s.jsx)(tx,{children:(0,s.jsx)(ik,{children:(0,s.jsxs)(i$,{children:[(0,s.jsx)(nM,{sectionNumber:e,headline:t,description:n}),(0,s.jsx)(i_,{children:(0,s.jsx)(iw,{})})]})})})}),iS=es.default.section.withConfig({displayName:"ReachOut.styles__StyledReachOut",componentId:"sc-82657052-0"})`
  position: relative;
  padding: ${({theme:e})=>e.spacing["4xl"]} 0;

  @media (max-width: 768px) {
    padding: ${({theme:e})=>e.spacing["3xl"]} 0;
  }
`,iO=es.default.div.withConfig({displayName:"ReachOut.styles__ReachOutContent",componentId:"sc-82657052-1"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing["3xl"]};
  position: relative;
`,iC=es.default.div.withConfig({displayName:"ReachOut.styles__ReachOutHeaderWrapper",componentId:"sc-82657052-2"})`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.lg};
  width: 100%;

  @media (max-width: 1024px) {
    gap: ${({theme:e})=>e.spacing.md};
  }
`,iP=es.default.div.withConfig({displayName:"ReachOut.styles__ReachOutLine",componentId:"sc-82657052-3"})`
  flex: 1;
  height: 1px;
  background-color: ${({theme:e})=>e.colors.border};
`,iE=es.default.span.withConfig({displayName:"ReachOut.styles__ReachOutHeader",componentId:"sc-82657052-4"})`
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
`,iT=es.default.div.withConfig({displayName:"ReachOut.styles__ContactCards",componentId:"sc-82657052-5"})`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({theme:e})=>e.spacing.xl};
  position: relative;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: ${({theme:e})=>e.spacing.lg};
  }
`,iz=es.default.div.withConfig({displayName:"ReachOut.styles__ContactCard",componentId:"sc-82657052-6"})`
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
`,iN=es.default.span.withConfig({displayName:"ReachOut.styles__CardLabel",componentId:"sc-82657052-7"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyBody};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({theme:e})=>e.colors.textSecondary};
`,iA=es.default.span.withConfig({displayName:"ReachOut.styles__CardValue",componentId:"sc-82657052-8"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyBody};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  color: ${({theme:e})=>e.colors.textPrimary};
  word-break: break-word;
`,iI=es.default.a.withConfig({displayName:"ReachOut.styles__CardLink",componentId:"sc-82657052-9"})`
  color: ${({theme:e})=>e.colors.textPrimary};
  text-decoration: none;
  transition: color ${({theme:e})=>e.transitions.fast};

  &:hover {
    color: ${({theme:e})=>e.colors.accent};
  }
`,iF=({email:e="sd.umarnazir@gmail.com",phone:t="+917051732616",github:n="https://github.com/umarnaxir",linkedin:r="https://www.linkedin.com/in/umar-nazir19/"})=>{let a=[{label:"EMAIL",value:e,href:`mailto:${e}`},{label:"PHONE",value:t,href:`tel:${t}`},{label:"GITHUB",value:"umarnaxir",href:n},{label:"LINKEDIN",value:"Umar Nazir",href:r}];return(0,s.jsx)(iS,{children:(0,s.jsx)(tx,{children:(0,s.jsxs)(iO,{children:[(0,s.jsxs)(iC,{"data-aos":"fade-up",children:[(0,s.jsx)(iP,{}),(0,s.jsx)(ty,{variant:"caption",color:"secondary",as:"span",children:(0,s.jsx)(iE,{children:"OR REACH OUT DIRECTLY"})}),(0,s.jsx)(iP,{})]}),(0,s.jsx)(iT,{children:a.map((e,t)=>(0,s.jsxs)(iz,{"data-aos":"fade-up","data-aos-delay":100*t,children:[(0,s.jsx)(ty,{variant:"caption",color:"secondary",as:"span",children:(0,s.jsx)(iN,{children:e.label})}),e.href?(0,s.jsx)(iI,{href:e.href,target:"EMAIL"!==e.label?"_blank":void 0,rel:"EMAIL"!==e.label?"noopener noreferrer":void 0,children:(0,s.jsx)(ty,{variant:"body",as:"span",children:(0,s.jsx)(iA,{children:e.value})})}):(0,s.jsx)(ty,{variant:"body",as:"span",children:(0,s.jsx)(iA,{children:e.value})})]},t))})]})})})},iM=es.default.footer.withConfig({displayName:"Footer.styles__StyledFooter",componentId:"sc-d97a5ab1-0"})`
  border-top: 1px solid ${({theme:e})=>e.colors.border};
  padding: ${({theme:e})=>e.spacing.xl} 0;
  background-color: ${({theme:e})=>e.colors.bgPrimary};
`,iD=es.default.div.withConfig({displayName:"Footer.styles__FooterContent",componentId:"sc-d97a5ab1-1"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${({theme:e})=>e.spacing.md};
    text-align: center;
  }
`,iR=es.default.span.withConfig({displayName:"Footer.styles__FooterCopyright",componentId:"sc-d97a5ab1-2"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyBody};
  color: ${({theme:e})=>e.colors.textTertiary};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
`,iL=es.default.span.withConfig({displayName:"Footer.styles__FooterTagline",componentId:"sc-d97a5ab1-3"})`
  font-family: ${({theme:e})=>e.typography.fontFamilyBody};
  color: ${({theme:e})=>e.colors.textTertiary};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
`,iB=({name:e})=>{let t=new Date().getFullYear();return(0,s.jsx)(iM,{"data-aos":"fade-up",children:(0,s.jsx)(tx,{children:(0,s.jsxs)(iD,{children:[(0,s.jsx)(ty,{variant:"caption",color:"tertiary",as:"span",children:(0,s.jsxs)(iR,{children:["© ",t," ",e]})}),(0,s.jsx)(ty,{variant:"caption",color:"tertiary",as:"span",children:(0,s.jsx)(iL,{children:"Designed & Built with purpose"})})]})})})},iH={personal:{name:"Umar Nazir",title:"SOFTWARE ENGINEER & SEO EXECUTIVE",headline:"Developing\nFuture-Ready\nSoftware",description:"Software Engineer & SEO Executive with 2+ years of experience creating high-performance web and app applications, optimizing digital presence, and delivering scalable solutions that drive business growth.",email:"sd.umarnazir@gmail.com",phone:"+91 705-173-2616",location:"Baramulla, J&K India",github:"@umarnazir",linkedin:"/in/umarnazir"},projects:[{id:"1",number:"001",year:"2024",category:"AI / ML PLATFORM",title:"AI-Mployed",description:"AI/ML Talent & Career Platform connecting job seekers with opportunities in artificial intelligence and machine learning. Built with React.js and Next.js for optimal performance and user experience.",tags:["NEXT.JS","TYPESCRIPT","AI/ML","MONGODB","NODE.JS","AWS"],link:"https://ml-jobs.com",imageLink:"/images/mljobs.png",visualVariant:"default"},{id:"2",number:"002",year:"2024",category:"TOURISM / BOOKING",title:"NineMash",description:"Tourism & Online Booking Platform for Kashmir region. Enables users to book hotels, tours, and experiences with seamless payment integration and real-time availability.",tags:["NEXT.JS","TYPESCRIPT","MONGODB","SEO","NODE.JS","AWS"],link:"https://ninemash.com/",imageLink:"/images/ninemash.png",visualVariant:"alt2"},{id:"3",number:"003",year:"2024",category:"LOGISTICS / COURIER",title:"Rush Expected Courier",description:"All Critical Shipments courier service platform. Specialized in handling urgent and time-sensitive deliveries with real-time tracking, priority booking, and customer support integration.",tags:["REACT","REAL-TIME TRACKING","FIREBASE","PYTHON"],link:"https://re-courier.com/",imageLink:"/images/re-courier.png",visualVariant:"default"},{id:"4",number:"004",year:"2024",category:"DIGITAL MARKETING / AGENCY",title:"Digitlia",description:"Digital marketing agency specializing in web and app development and SEO. Showcases services, portfolio, client testimonials, and case studies with integrated contact forms and lead generation features.",tags:["REACT","NEXT.JS","SEO","DIGITAL MARKETING","LEAD GENERATION","PYTHON"],link:"https://digitlia.com/",imageLink:"/images/digitlia.jpeg",visualVariant:"alt"},{id:"5",number:"005",year:"2024",category:"LOGISTICS / E-COMMERCE",title:"EliteExpress Courier",description:"Delivery & Logistics System for managing shipments, tracking packages, and optimizing delivery routes. Features real-time tracking, automated notifications, and comprehensive admin dashboard.",tags:["NEXT.JS","NODE.JS","MONGODB"],link:"https://eliteexpressdeliveryservices.com/",imageLink:"/images/eliteexpress.png",visualVariant:"alt"},{id:"6",number:"006",year:"2024",category:"TRAVEL / BOOKING",title:"Kashmir Tickets",description:"Travel & Ticket Booking System for Kashmir region. Comprehensive platform for booking flights, buses, and travel packages with secure payment processing and booking management.",tags:["NEXT.JS","SEO","MONGODB"],link:"https://kashmirtickets.com/",imageLink:"/images/kashmirtickets.png",visualVariant:"alt"},{id:"7",number:"007",year:"2024",category:"NGO / NON-PROFIT",title:"Kindness Towards Humanity",description:"NGO Website for humanitarian organization. Features donation system, volunteer registration, event management, and impact stories with multi-language support and accessibility features.",tags:["REACT","NEXT.JS","DONATION SYSTEM","ACCESSIBILITY"],link:"https://kindnesstowardshumanity.in/",imageLink:"/images/kindnesstowardshumanity.png",visualVariant:"alt2"},{id:"8",number:"008",year:"2024",category:"ENTERPRISE / HR",title:"Office Management System",description:"HR & Workflow Automation system for managing employee data, attendance, payroll, and workflow processes. Features role-based access control, reporting dashboards, and automated notifications.",tags:["REACT","NODE.JS","FIREBASE","MONGODB","AUTOMATION","HR SYSTEM"],link:"https://example.com",imageLink:"/images/office-management.png",visualVariant:"alt"},{id:"9",number:"009",year:"2024",category:"HOSPITALITY / BOOKING",title:"Hotel Sea View",description:"Hospitality Booking Website for hotel reservations. Features room availability, online booking, payment processing, and guest management system with beautiful UI/UX design.",tags:["REACT","NEXT.JS","BOOKING SYSTEM","NODE.JS"],link:"https://thehotelseaview.in/",imageLink:"/images/hotel-sea-view.png",visualVariant:"alt2"},{id:"10",number:"008",year:"2024",category:"HEALTHCARE / PORTFOLIO",title:"Dr. Jibran Bashir",description:"Professional portfolio website for Orthopedic Surgeon featuring appointment booking, patient testimonials, and medical service information with responsive design and SEO optimization.",tags:["NEXT.JS","TYPESCRIPT","SEO","RESPONSIVE","MONGODB","NODE.JS"],link:"https://www.drjibranbashir.com/",imageLink:"/images/dr-jibran-bashir.png",visualVariant:"default"},{id:"11",number:"009",year:"2024",category:"HEALTHCARE / MEDICAL",title:"Altaf Hospital",description:"Healthcare & Medical Services Website for hospital. Includes appointment booking, doctor profiles, department information, and patient portal with secure data handling and HIPAA compliance considerations.",tags:["NEXT.JS","TYPESCRIPT","SEO","RESPONSIVE","MONGODB","NODE.JS"],link:"https://www.altafhospital.com/",imageLink:"/images/altaf-hospital.png",visualVariant:"default"}],experiences:[{id:"1",company:"Saibbyweb",role:"Software Engineer",date:"Jan 2025 - Present",location:"On-Site",type:"Full-time",description:"Building high-performance React/Next.js Websites and React Native Mobile applications with focus on SEO optimization, page speed, and exceptional user experience.",responsibilities:["Build high-performance React/Next.js Web and React Native  Apps","Improve SEO structure, page speed, and user experience","Develop reusable components and optimized UI patterns","Integrate APIs, Firebase services, and backend logic"],tags:["REACT","NEXT.JS","TYPESCRIPT","REACT NATIVE","SEO","DB","API INTEGRATION"]},{id:"2",company:"NexGen Developers",role:"Founder & CEO",date:"May 2025 - Present",location:"Part-Time",type:"Part-Time",description:"Leading technical development across websites, apps & AI tools. Building custom automation & chatbot systems while managing branding, SEO, client communication & digital strategy.",responsibilities:["Lead technical development across websites, apps & AI tools","Build custom automation & chatbot systems","Manage branding, SEO, client communication & digital strategy","Deliver full-stack software tailored to business growth"],tags:["LEADERSHIP","AI TOOLS","AUTOMATION","CHATBOTS","DIGITAL STRATEGY"]},{id:"3",company:"Harmukh Technologies Pvt Ltd",role:"Software Engineer & SEO Executive",date:"July 2023 - Aug 2025",location:"On-Site",type:"Full-time",description:"Designed and developed responsive websites while improving digital presence through SEO execution and UI/UX enhancements for better conversions.",responsibilities:["Designed and developed responsive websites","Improved digital presence through SEO execution","Provided UI/UX enhancements for better conversions","Collaborated with cross-functional teams"],tags:["REACT","SEO","UI/UX","RESPONSIVE DESIGN","TEAM COLLABORATION"]}],about:"Software Engineer with 2+ years of experience in Software Development, SEO Optimization, and building scalable digital products. Skilled in creating high-performance web and app applications using React.js, Next.js, TypeScript, React Native and modern UI frameworks.\n\nI specialize in full-stack development, focusing on creating responsive, SEO-optimized websites and applications that deliver exceptional user experiences. My expertise includes integrating APIs, Firebase services, and implementing modern UI patterns that drive conversions and engagement.\n\nActively seeking opportunities to contribute and innovate in a growth-focused environment. When I'm not coding, I work on personal projects, contribute to open-source initiatives, and stay updated with the latest web and app technologies and SEO best practices.\n\nEducation: B.Tech (Computer Science Engineering) — Government College of Engineering and Technology, Safapora, Ganderbal (GCET Kashmir).",contact:{headline:"Let's Build Something Together",description:"Open to collaboration on web and app development projects, SEO optimization, full-stack development opportunities, or consulting work. Let's build something amazing together."}},iW=()=>{let{personal:e,projects:t,experiences:n,about:r,contact:a}=iH;return(0,s.jsxs)("main",{children:[(0,s.jsx)(eQ,{name:e.name}),(0,s.jsx)(tn,{title:e.title,headline:e.headline,description:e.description}),(0,s.jsx)(tV,{sectionNumber:"01",projects:t}),(0,s.jsx)(nl,{sectionNumber:"02",experiences:n}),(0,s.jsx)(nT,{}),(0,s.jsx)(nx,{sectionNumber:"03",content:r}),(0,s.jsx)(ij,{sectionNumber:"04",headline:a.headline,description:a.description}),(0,s.jsx)(iF,{email:e.email,phone:e.phone,github:"https://github.com/umarnaxir",linkedin:"https://www.linkedin.com/in/umar-nazir19/"}),(0,s.jsx)(iB,{name:e.name})]})};function iU(){let[e,t]=(0,l.useState)(!0);return((0,l.useEffect)(()=>{let e=setTimeout(()=>{t(!1)},2e3);return()=>clearTimeout(e)},[]),e)?(0,s.jsx)(ec,{}):(0,s.jsx)(iW,{})}e.s(["default",()=>iU],31713)}]);