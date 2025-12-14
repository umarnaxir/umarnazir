module.exports=[33354,(a,b,c)=>{"use strict";c._=function(a){return a&&a.__esModule?a:{default:a}}},92434,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"warnOnce",{enumerable:!0,get:function(){return d}});let d=a=>{}},4987,(a,b,c)=>{"use strict";function d({widthInt:a,heightInt:b,blurWidth:c,blurHeight:d,blurDataURL:e,objectFit:f}){let g=c?40*c:a,h=d?40*d:b,i=g&&h?`viewBox='0 0 ${g} ${h}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${i}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${i?"none":"contain"===f?"xMidYMid":"cover"===f?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${e}'/%3E%3C/svg%3E`}Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"getImageBlurSvg",{enumerable:!0,get:function(){return d}})},345,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={VALID_LOADERS:function(){return f},imageConfigDefault:function(){return g}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=["default","imgix","cloudinary","akamai","custom"],g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumRedirects:3,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1}},94915,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"getImgProps",{enumerable:!0,get:function(){return i}}),a.r(92434);let d=a.r(4987),e=a.r(345),f=["-moz-initial","fill","none","scale-down",void 0];function g(a){return void 0!==a.default}function h(a){return void 0===a?a:"number"==typeof a?Number.isFinite(a)?a:NaN:"string"==typeof a&&/^[0-9]+$/.test(a)?parseInt(a,10):NaN}function i({src:a,sizes:b,unoptimized:c=!1,priority:i=!1,preload:j=!1,loading:k,className:l,quality:m,width:n,height:o,fill:p=!1,style:q,overrideSrc:r,onLoad:s,onLoadingComplete:t,placeholder:u="empty",blurDataURL:v,fetchPriority:w,decoding:x="async",layout:y,objectFit:z,objectPosition:A,lazyBoundary:B,lazyRoot:C,...D},E){var F;let G,H,I,{imgConf:J,showAltText:K,blurComplete:L,defaultLoader:M}=E,N=J||e.imageConfigDefault;if("allSizes"in N)G=N;else{let a=[...N.deviceSizes,...N.imageSizes].sort((a,b)=>a-b),b=N.deviceSizes.sort((a,b)=>a-b),c=N.qualities?.sort((a,b)=>a-b);G={...N,allSizes:a,deviceSizes:b,qualities:c}}if(void 0===M)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let O=D.loader||M;delete D.loader,delete D.srcSet;let P="__next_img_default"in O;if(P){if("custom"===G.loader)throw Object.defineProperty(Error(`Image with src "${a}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let a=O;O=b=>{let{config:c,...d}=b;return a(d)}}if(y){"fill"===y&&(p=!0);let a={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[y];a&&(q={...q,...a});let c={responsive:"100vw",fill:"100vw"}[y];c&&!b&&(b=c)}let Q="",R=h(n),S=h(o);if((F=a)&&"object"==typeof F&&(g(F)||void 0!==F.src)){let b=g(a)?a.default:a;if(!b.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(b)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!b.height||!b.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(b)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(H=b.blurWidth,I=b.blurHeight,v=v||b.blurDataURL,Q=b.src,!p)if(R||S){if(R&&!S){let a=R/b.width;S=Math.round(b.height*a)}else if(!R&&S){let a=S/b.height;R=Math.round(b.width*a)}}else R=b.width,S=b.height}let T=!i&&!j&&("lazy"===k||void 0===k);(!(a="string"==typeof a?a:Q)||a.startsWith("data:")||a.startsWith("blob:"))&&(c=!0,T=!1),G.unoptimized&&(c=!0),P&&!G.dangerouslyAllowSVG&&a.split("?",1)[0].endsWith(".svg")&&(c=!0);let U=h(m),V=Object.assign(p?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:z,objectPosition:A}:{},K?{}:{color:"transparent"},q),W=L||"empty"===u?null:"blur"===u?`url("data:image/svg+xml;charset=utf-8,${(0,d.getImageBlurSvg)({widthInt:R,heightInt:S,blurWidth:H,blurHeight:I,blurDataURL:v||"",objectFit:V.objectFit})}")`:`url("${u}")`,X=f.includes(V.objectFit)?"fill"===V.objectFit?"100% 100%":"cover":V.objectFit,Y=W?{backgroundSize:X,backgroundPosition:V.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:W}:{},Z=function({config:a,src:b,unoptimized:c,width:d,quality:e,sizes:f,loader:g}){if(c)return{src:b,srcSet:void 0,sizes:void 0};let{widths:h,kind:i}=function({deviceSizes:a,allSizes:b},c,d){if(d){let c=/(^|\s)(1?\d?\d)vw/g,e=[];for(let a;a=c.exec(d);)e.push(parseInt(a[2]));if(e.length){let c=.01*Math.min(...e);return{widths:b.filter(b=>b>=a[0]*c),kind:"w"}}return{widths:b,kind:"w"}}return"number"!=typeof c?{widths:a,kind:"w"}:{widths:[...new Set([c,2*c].map(a=>b.find(b=>b>=a)||b[b.length-1]))],kind:"x"}}(a,d,f),j=h.length-1;return{sizes:f||"w"!==i?f:"100vw",srcSet:h.map((c,d)=>`${g({config:a,src:b,quality:e,width:c})} ${"w"===i?c:d+1}${i}`).join(", "),src:g({config:a,src:b,quality:e,width:h[j]})}}({config:G,src:a,unoptimized:c,width:R,quality:U,sizes:b,loader:O}),$=T?"lazy":k;return{props:{...D,loading:$,fetchPriority:w,width:R,height:S,decoding:x,className:l,style:{...V,...Y},sizes:Z.sizes,srcSet:Z.srcSet,src:r||Z.src},meta:{unoptimized:c,preload:j||i,placeholder:u,fill:p}}}},46058,(a,b,c)=>{"use strict";function d(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(d=function(a){return a?c:b})(a)}c._=function(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=d(b);if(c&&c.has(a))return c.get(a);var e={__proto__:null},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in a)if("default"!==g&&Object.prototype.hasOwnProperty.call(a,g)){var h=f?Object.getOwnPropertyDescriptor(a,g):null;h&&(h.get||h.set)?Object.defineProperty(e,g,h):e[g]=a[g]}return e.default=a,c&&c.set(a,e),e}},94613,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"default",{enumerable:!0,get:function(){return f}});let d=a.r(72131),e=()=>{};function f(a){let{headManager:b,reduceComponentsToState:c}=a;function f(){if(b&&b.mountedInstances){let a=d.Children.toArray(Array.from(b.mountedInstances).filter(Boolean));b.updateHead(c(a))}}return b?.mountedInstances?.add(a.children),f(),e(()=>(b?.mountedInstances?.add(a.children),()=>{b?.mountedInstances?.delete(a.children)})),e(()=>(b&&(b._pendingUpdate=f),()=>{b&&(b._pendingUpdate=f)})),null}},92966,(a,b,c)=>{"use strict";b.exports=a.r(42602).vendored.contexts.HeadManagerContext},58018,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={default:function(){return p},defaultHead:function(){return l}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(33354),g=a.r(46058),h=a.r(87924),i=g._(a.r(72131)),j=f._(a.r(94613)),k=a.r(92966);function l(){return[(0,h.jsx)("meta",{charSet:"utf-8"},"charset"),(0,h.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function m(a,b){return"string"==typeof b||"number"==typeof b?a:b.type===i.default.Fragment?a.concat(i.default.Children.toArray(b.props.children).reduce((a,b)=>"string"==typeof b||"number"==typeof b?a:a.concat(b),[])):a.concat(b)}a.r(92434);let n=["name","httpEquiv","charSet","itemProp"];function o(a){let b,c,d,e;return a.reduce(m,[]).reverse().concat(l().reverse()).filter((b=new Set,c=new Set,d=new Set,e={},a=>{let f=!0,g=!1;if(a.key&&"number"!=typeof a.key&&a.key.indexOf("$")>0){g=!0;let c=a.key.slice(a.key.indexOf("$")+1);b.has(c)?f=!1:b.add(c)}switch(a.type){case"title":case"base":c.has(a.type)?f=!1:c.add(a.type);break;case"meta":for(let b=0,c=n.length;b<c;b++){let c=n[b];if(a.props.hasOwnProperty(c))if("charSet"===c)d.has(c)?f=!1:d.add(c);else{let b=a.props[c],d=e[c]||new Set;("name"!==c||!g)&&d.has(b)?f=!1:(d.add(b),e[c]=d)}}}return f})).reverse().map((a,b)=>{let c=a.key||b;return i.default.cloneElement(a,{key:c})})}let p=function({children:a}){let b=(0,i.useContext)(k.HeadManagerContext);return(0,h.jsx)(j.default,{reduceComponentsToState:o,headManager:b,children:a})};("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},4486,(a,b,c)=>{"use strict";b.exports=a.r(42602).vendored.contexts.ImageConfigContext},53773,(a,b,c)=>{"use strict";b.exports=a.r(42602).vendored.contexts.RouterContext},35444,(a,b,c)=>{"use strict";function d(a,b){let c=a||75;return b?.qualities?.length?b.qualities.reduce((a,b)=>Math.abs(b-c)<Math.abs(a-c)?b:a,0):c}Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"findClosestQuality",{enumerable:!0,get:function(){return d}})},2305,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"default",{enumerable:!0,get:function(){return f}});let d=a.r(35444);function e({config:a,src:b,width:c,quality:e}){if(b.startsWith("/")&&b.includes("?")&&a.localPatterns?.length===1&&"**"===a.localPatterns[0].pathname&&""===a.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${b}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let f=(0,d.findClosestQuality)(e,a);return`${a.path}?url=${encodeURIComponent(b)}&w=${c}&q=${f}${b.startsWith("/_next/static/media/"),""}`}e.__next_img_default=!0;let f=e},8591,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"useMergedRef",{enumerable:!0,get:function(){return e}});let d=a.r(72131);function e(a,b){let c=(0,d.useRef)(null),e=(0,d.useRef)(null);return(0,d.useCallback)(d=>{if(null===d){let a=c.current;a&&(c.current=null,a());let b=e.current;b&&(e.current=null,b())}else a&&(c.current=f(a,d)),b&&(e.current=f(b,d))},[a,b])}function f(a,b){if("function"!=typeof a)return a.current=b,()=>{a.current=null};{let c=a(b);return"function"==typeof c?c:()=>a(null)}}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},67161,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"Image",{enumerable:!0,get:function(){return u}});let d=a.r(33354),e=a.r(46058),f=a.r(87924),g=e._(a.r(72131)),h=d._(a.r(35112)),i=d._(a.r(58018)),j=a.r(94915),k=a.r(345),l=a.r(4486);a.r(92434);let m=a.r(53773),n=d._(a.r(2305)),o=a.r(8591),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function q(a,b,c,d,e,f,g){let h=a?.src;a&&a["data-loaded-src"]!==h&&(a["data-loaded-src"]=h,("decode"in a?a.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(a.parentElement&&a.isConnected){if("empty"!==b&&e(!0),c?.current){let b=new Event("load");Object.defineProperty(b,"target",{writable:!1,value:a});let d=!1,e=!1;c.current({...b,nativeEvent:b,currentTarget:a,target:a,isDefaultPrevented:()=>d,isPropagationStopped:()=>e,persist:()=>{},preventDefault:()=>{d=!0,b.preventDefault()},stopPropagation:()=>{e=!0,b.stopPropagation()}})}d?.current&&d.current(a)}}))}function r(a){return g.use?{fetchPriority:a}:{fetchpriority:a}}globalThis.__NEXT_IMAGE_IMPORTED=!0;let s=(0,g.forwardRef)(({src:a,srcSet:b,sizes:c,height:d,width:e,decoding:h,className:i,style:j,fetchPriority:k,placeholder:l,loading:m,unoptimized:n,fill:p,onLoadRef:s,onLoadingCompleteRef:t,setBlurComplete:u,setShowAltText:v,sizesInput:w,onLoad:x,onError:y,...z},A)=>{let B=(0,g.useCallback)(a=>{a&&(y&&(a.src=a.src),a.complete&&q(a,l,s,t,u,n,w))},[a,l,s,t,u,y,n,w]),C=(0,o.useMergedRef)(A,B);return(0,f.jsx)("img",{...z,...r(k),loading:m,width:e,height:d,decoding:h,"data-nimg":p?"fill":"1",className:i,style:j,sizes:c,srcSet:b,src:a,ref:C,onLoad:a=>{q(a.currentTarget,l,s,t,u,n,w)},onError:a=>{v(!0),"empty"!==l&&u(!0),y&&y(a)}})});function t({isAppRouter:a,imgAttributes:b}){let c={as:"image",imageSrcSet:b.srcSet,imageSizes:b.sizes,crossOrigin:b.crossOrigin,referrerPolicy:b.referrerPolicy,...r(b.fetchPriority)};return a&&h.default.preload?(h.default.preload(b.src,c),null):(0,f.jsx)(i.default,{children:(0,f.jsx)("link",{rel:"preload",href:b.srcSet?void 0:b.src,...c},"__nimg-"+b.src+b.srcSet+b.sizes)})}let u=(0,g.forwardRef)((a,b)=>{let c=(0,g.useContext)(m.RouterContext),d=(0,g.useContext)(l.ImageConfigContext),e=(0,g.useMemo)(()=>{let a=p||d||k.imageConfigDefault,b=[...a.deviceSizes,...a.imageSizes].sort((a,b)=>a-b),c=a.deviceSizes.sort((a,b)=>a-b),e=a.qualities?.sort((a,b)=>a-b);return{...a,allSizes:b,deviceSizes:c,qualities:e,localPatterns:d?.localPatterns}},[d]),{onLoad:h,onLoadingComplete:i}=a,o=(0,g.useRef)(h);(0,g.useEffect)(()=>{o.current=h},[h]);let q=(0,g.useRef)(i);(0,g.useEffect)(()=>{q.current=i},[i]);let[r,u]=(0,g.useState)(!1),[v,w]=(0,g.useState)(!1),{props:x,meta:y}=(0,j.getImgProps)(a,{defaultLoader:n.default,imgConf:e,blurComplete:r,showAltText:v});return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(s,{...x,unoptimized:y.unoptimized,placeholder:y.placeholder,fill:y.fill,onLoadRef:o,onLoadingCompleteRef:q,setBlurComplete:u,setShowAltText:w,sizesInput:a.sizes,ref:b}),y.preload?(0,f.jsx)(t,{isAppRouter:!c,imgAttributes:x}):null]})});("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},33095,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={default:function(){return k},getImageProps:function(){return j}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(33354),g=a.r(94915),h=a.r(67161),i=f._(a.r(2305));function j(a){let{props:b}=(0,g.getImgProps)(a,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[a,c]of Object.entries(b))void 0===c&&delete b[a];return{props:b}}let k=h.Image},71987,(a,b,c)=>{b.exports=a.r(33095)},30407,(a,b,c)=>{"use strict";var d=Array.isArray,e=Object.keys,f=Object.prototype.hasOwnProperty,g="undefined"!=typeof Element;b.exports=function(a,b){try{return function a(b,c){if(b===c)return!0;if(b&&c&&"object"==typeof b&&"object"==typeof c){var h,i,j,k=d(b),l=d(c);if(k&&l){if((i=b.length)!=c.length)return!1;for(h=i;0!=h--;)if(!a(b[h],c[h]))return!1;return!0}if(k!=l)return!1;var m=b instanceof Date,n=c instanceof Date;if(m!=n)return!1;if(m&&n)return b.getTime()==c.getTime();var o=b instanceof RegExp,p=c instanceof RegExp;if(o!=p)return!1;if(o&&p)return b.toString()==c.toString();var q=e(b);if((i=q.length)!==e(c).length)return!1;for(h=i;0!=h--;)if(!f.call(c,q[h]))return!1;if(g&&b instanceof Element&&c instanceof Element)return b===c;for(h=i;0!=h--;)if(("_owner"!==(j=q[h])||!b.$$typeof)&&!a(b[j],c[j]))return!1;return!0}return b!=b&&c!=c}(a,b)}catch(a){if(a.message&&a.message.match(/stack|recursion/i)||-0x7ff5ffe4===a.number)return console.warn("Warning: react-fast-compare does not handle circular references.",a.name,a.message),!1;throw a}}},13089,(a,b,c)=>{"use strict";var d="function"==typeof Symbol&&Symbol.for,e=d?Symbol.for("react.element"):60103,f=d?Symbol.for("react.portal"):60106,g=d?Symbol.for("react.fragment"):60107,h=d?Symbol.for("react.strict_mode"):60108,i=d?Symbol.for("react.profiler"):60114,j=d?Symbol.for("react.provider"):60109,k=d?Symbol.for("react.context"):60110,l=d?Symbol.for("react.async_mode"):60111,m=d?Symbol.for("react.concurrent_mode"):60111,n=d?Symbol.for("react.forward_ref"):60112,o=d?Symbol.for("react.suspense"):60113,p=d?Symbol.for("react.suspense_list"):60120,q=d?Symbol.for("react.memo"):60115,r=d?Symbol.for("react.lazy"):60116,s=d?Symbol.for("react.block"):60121,t=d?Symbol.for("react.fundamental"):60117,u=d?Symbol.for("react.responder"):60118,v=d?Symbol.for("react.scope"):60119;function w(a){if("object"==typeof a&&null!==a){var b=a.$$typeof;switch(b){case e:switch(a=a.type){case l:case m:case g:case i:case h:case o:return a;default:switch(a=a&&a.$$typeof){case k:case n:case r:case q:case j:return a;default:return b}}case f:return b}}}function x(a){return w(a)===m}c.AsyncMode=l,c.ConcurrentMode=m,c.ContextConsumer=k,c.ContextProvider=j,c.Element=e,c.ForwardRef=n,c.Fragment=g,c.Lazy=r,c.Memo=q,c.Portal=f,c.Profiler=i,c.StrictMode=h,c.Suspense=o,c.isAsyncMode=function(a){return x(a)||w(a)===l},c.isConcurrentMode=x,c.isContextConsumer=function(a){return w(a)===k},c.isContextProvider=function(a){return w(a)===j},c.isElement=function(a){return"object"==typeof a&&null!==a&&a.$$typeof===e},c.isForwardRef=function(a){return w(a)===n},c.isFragment=function(a){return w(a)===g},c.isLazy=function(a){return w(a)===r},c.isMemo=function(a){return w(a)===q},c.isPortal=function(a){return w(a)===f},c.isProfiler=function(a){return w(a)===i},c.isStrictMode=function(a){return w(a)===h},c.isSuspense=function(a){return w(a)===o},c.isValidElementType=function(a){return"string"==typeof a||"function"==typeof a||a===g||a===m||a===i||a===h||a===o||a===p||"object"==typeof a&&null!==a&&(a.$$typeof===r||a.$$typeof===q||a.$$typeof===j||a.$$typeof===k||a.$$typeof===n||a.$$typeof===t||a.$$typeof===u||a.$$typeof===v||a.$$typeof===s)},c.typeOf=w},66539,(a,b,c)=>{"use strict";b.exports=a.r(13089)},32344,(a,b,c)=>{"use strict";var d=a.r(66539),e={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},f={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},g={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},h={};function i(a){return d.isMemo(a)?g:h[a.$$typeof]||e}h[d.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},h[d.Memo]=g;var j=Object.defineProperty,k=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,m=Object.getOwnPropertyDescriptor,n=Object.getPrototypeOf,o=Object.prototype;b.exports=function a(b,c,d){if("string"!=typeof c){if(o){var e=n(c);e&&e!==o&&a(b,e,d)}var g=k(c);l&&(g=g.concat(l(c)));for(var h=i(b),p=i(c),q=0;q<g.length;++q){var r=g[q];if(!f[r]&&!(d&&d[r])&&!(p&&p[r])&&!(h&&h[r])){var s=m(c,r);try{j(b,r,s)}catch(a){}}}}return b}},30514,(a,b,c)=>{"use strict";function d(a){this._maxSize=a,this.clear()}d.prototype.clear=function(){this._size=0,this._values=Object.create(null)},d.prototype.get=function(a){return this._values[a]},d.prototype.set=function(a,b){return this._size>=this._maxSize&&this.clear(),!(a in this._values)&&this._size++,this._values[a]=b};var e=/[^.^\]^[]+|(?=\[\]|\.\.)/g,f=/^\d+$/,g=/^\d/,h=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,i=/^\s*(['"]?)(.*?)(\1)\s*$/,j=new d(512),k=new d(512),l=new d(512);function m(a){return j.get(a)||j.set(a,n(a).map(function(a){return a.replace(i,"$2")}))}function n(a){return a.match(e)||[""]}function o(a){return"string"==typeof a&&a&&-1!==["'",'"'].indexOf(a.charAt(0))}b.exports={Cache:d,split:n,normalizePath:m,setter:function(a){var b=m(a);return k.get(a)||k.set(a,function(a,c){for(var d=0,e=b.length,f=a;d<e-1;){var g=b[d];if("__proto__"===g||"constructor"===g||"prototype"===g)return a;f=f[b[d++]]}f[b[d]]=c})},getter:function(a,b){var c=m(a);return l.get(a)||l.set(a,function(a){for(var d=0,e=c.length;d<e;)if(null==a&&b)return;else a=a[c[d++]];return a})},join:function(a){return a.reduce(function(a,b){return a+(o(b)||f.test(b)?"["+b+"]":(a?".":"")+b)},"")},forEach:function(a,b,c){!function(a,b,c){var d,e,i,j,k=a.length;for(e=0;e<k;e++)(d=a[e])&&(function(a){return!o(a)&&(a.match(g)&&!a.match(f)||h.test(a))}(d)&&(d='"'+d+'"'),i=!(j=o(d))&&/^\d+$/.test(d),b.call(c,d,j,i,e,a))}(Array.isArray(a)?a:n(a),b,c)}}},32107,(a,b,c)=>{let d=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,e=a=>a.match(d)||[],f=a=>a[0].toUpperCase()+a.slice(1),g=(a,b)=>e(a).join(b).toLowerCase(),h=a=>e(a).reduce((a,b)=>`${a}${!a?b.toLowerCase():b[0].toUpperCase()+b.slice(1).toLowerCase()}`,"");b.exports={words:e,upperFirst:f,camelCase:h,pascalCase:a=>f(h(a)),snakeCase:a=>g(a,"_"),kebabCase:a=>g(a,"-"),sentenceCase:a=>f(g(a," ")),titleCase:a=>e(a).map(f).join(" ")}},32340,(a,b,c)=>{function d(a,b){var c=a.length,d=Array(c),e={},f=c,g=function(a){for(var b=new Map,c=0,d=a.length;c<d;c++){var e=a[c];b.has(e[0])||b.set(e[0],new Set),b.has(e[1])||b.set(e[1],new Set),b.get(e[0]).add(e[1])}return b}(b),h=function(a){for(var b=new Map,c=0,d=a.length;c<d;c++)b.set(a[c],c);return b}(a);for(b.forEach(function(a){if(!h.has(a[0])||!h.has(a[1]))throw Error("Unknown node. There is an unknown node in the supplied edges.")});f--;)e[f]||function a(b,f,i){if(i.has(b)){var j;try{j=", node was:"+JSON.stringify(b)}catch(a){j=""}throw Error("Cyclic dependency"+j)}if(!h.has(b))throw Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(b));if(!e[f]){e[f]=!0;var k=g.get(b)||new Set;if(f=(k=Array.from(k)).length){i.add(b);do{var l=k[--f];a(l,h.get(l),i)}while(f)i.delete(b)}d[--c]=b}}(a[f],f,new Set);return d}b.exports=function(a){return d(function(a){for(var b=new Set,c=0,d=a.length;c<d;c++){var e=a[c];b.add(e[0]),b.add(e[1])}return Array.from(b)}(a),a)},b.exports.array=d},60350,a=>{"use strict";let b,c,d;var e,f,g,h=a.i(87924),i=a.i(72131);function j(a,b){void 0===b&&(b={});var c=b.insertAt;if(a&&"undefined"!=typeof document){var d=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css","top"===c&&d.firstChild?d.insertBefore(e,d.firstChild):d.appendChild(e),e.styleSheet?e.styleSheet.cssText=a:e.appendChild(document.createTextNode(a))}}j('.react-loading-indicator-normalize,\n[class$=rli-bounding-box] {\n  font-size: 1rem;\n  display: inline-block;\n  box-sizing: border-box;\n  text-align: unset;\n  isolation: isolate;\n}\n\n.rli-d-i-b {\n  display: inline-block;\n}\n\n.rli-text-format {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 600;\n  width: 90%;\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 0.7em;\n  letter-spacing: 0.5px;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;\n}');var k=function(){return(k=Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++)for(var e in b=arguments[c])Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e]);return a}).apply(this,arguments)};function l(a){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a})(a)}"function"==typeof SuppressedError&&SuppressedError;var m=/^\s+/,n=/\s+$/;function o(a,b){if(b=b||{},(a=a||"")instanceof o)return a;if(!(this instanceof o))return new o(a,b);var c,d,e,f,g,h,i,j,k,p,q,r,s,t,u,v,w,x,y,z,A=(g={r:0,g:0,b:0},h=1,i=null,j=null,k=null,p=!1,q=!1,"string"==typeof(c=a)&&(c=function(a){a=a.replace(m,"").replace(n,"").toLowerCase();var b,c=!1;if(F[a])a=F[a],c=!0;else if("transparent"==a)return{r:0,g:0,b:0,a:0,format:"name"};return(b=R.rgb.exec(a))?{r:b[1],g:b[2],b:b[3]}:(b=R.rgba.exec(a))?{r:b[1],g:b[2],b:b[3],a:b[4]}:(b=R.hsl.exec(a))?{h:b[1],s:b[2],l:b[3]}:(b=R.hsla.exec(a))?{h:b[1],s:b[2],l:b[3],a:b[4]}:(b=R.hsv.exec(a))?{h:b[1],s:b[2],v:b[3]}:(b=R.hsva.exec(a))?{h:b[1],s:b[2],v:b[3],a:b[4]}:(b=R.hex8.exec(a))?{r:K(b[1]),g:K(b[2]),b:K(b[3]),a:K(b[4])/255,format:c?"name":"hex8"}:(b=R.hex6.exec(a))?{r:K(b[1]),g:K(b[2]),b:K(b[3]),format:c?"name":"hex"}:(b=R.hex4.exec(a))?{r:K(b[1]+""+b[1]),g:K(b[2]+""+b[2]),b:K(b[3]+""+b[3]),a:K(b[4]+""+b[4])/255,format:c?"name":"hex8"}:!!(b=R.hex3.exec(a))&&{r:K(b[1]+""+b[1]),g:K(b[2]+""+b[2]),b:K(b[3]+""+b[3]),format:c?"name":"hex"}}(c)),"object"==l(c)&&(S(c.r)&&S(c.g)&&S(c.b)?(d=c.r,e=c.g,f=c.b,g={r:255*I(d,255),g:255*I(e,255),b:255*I(f,255)},p=!0,q="%"===String(c.r).substr(-1)?"prgb":"rgb"):S(c.h)&&S(c.s)&&S(c.v)?(i=M(c.s),j=M(c.v),r=c.h,s=i,t=j,r=6*I(r,360),s=I(s,100),t=I(t,100),u=Math.floor(r),v=r-u,w=t*(1-s),x=t*(1-v*s),y=t*(1-(1-v)*s),g={r:255*[t,x,w,w,y,t][z=u%6],g:255*[y,t,t,x,w,w][z],b:255*[w,w,y,t,t,x][z]},p=!0,q="hsv"):S(c.h)&&S(c.s)&&S(c.l)&&(i=M(c.s),k=M(c.l),g=function(a,b,c){var d,e,f;function g(a,b,c){return c<0&&(c+=1),c>1&&(c-=1),c<1/6?a+6*(b-a)*c:c<.5?b:c<2/3?a+(b-a)*(2/3-c)*6:a}if(a=I(a,360),b=I(b,100),c=I(c,100),0===b)d=e=f=c;else{var h=c<.5?c*(1+b):c+b-c*b,i=2*c-h;d=g(i,h,a+1/3),e=g(i,h,a),f=g(i,h,a-1/3)}return{r:255*d,g:255*e,b:255*f}}(c.h,i,k),p=!0,q="hsl"),c.hasOwnProperty("a")&&(h=c.a)),h=H(h),{ok:p,format:c.format||q,r:Math.min(255,Math.max(g.r,0)),g:Math.min(255,Math.max(g.g,0)),b:Math.min(255,Math.max(g.b,0)),a:h});this._originalInput=a,this._r=A.r,this._g=A.g,this._b=A.b,this._a=A.a,this._roundA=Math.round(100*this._a)/100,this._format=b.format||A.format,this._gradientType=b.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=A.ok}function p(a,b,c){a=I(a,255);var d,e,f=Math.max(a,b=I(b,255),c=I(c,255)),g=Math.min(a,b,c),h=(f+g)/2;if(f==g)d=e=0;else{var i=f-g;switch(e=h>.5?i/(2-f-g):i/(f+g),f){case a:d=(b-c)/i+6*(b<c);break;case b:d=(c-a)/i+2;break;case c:d=(a-b)/i+4}d/=6}return{h:d,s:e,l:h}}function q(a,b,c){a=I(a,255);var d,e,f=Math.max(a,b=I(b,255),c=I(c,255)),g=Math.min(a,b,c),h=f-g;if(e=0===f?0:h/f,f==g)d=0;else{switch(f){case a:d=(b-c)/h+6*(b<c);break;case b:d=(c-a)/h+2;break;case c:d=(a-b)/h+4}d/=6}return{h:d,s:e,v:f}}function r(a,b,c,d){var e=[L(Math.round(a).toString(16)),L(Math.round(b).toString(16)),L(Math.round(c).toString(16))];return d&&e[0].charAt(0)==e[0].charAt(1)&&e[1].charAt(0)==e[1].charAt(1)&&e[2].charAt(0)==e[2].charAt(1)?e[0].charAt(0)+e[1].charAt(0)+e[2].charAt(0):e.join("")}function s(a,b,c,d){return[L(N(d)),L(Math.round(a).toString(16)),L(Math.round(b).toString(16)),L(Math.round(c).toString(16))].join("")}function t(a,b){b=0===b?0:b||10;var c=o(a).toHsl();return c.s-=b/100,c.s=J(c.s),o(c)}function u(a,b){b=0===b?0:b||10;var c=o(a).toHsl();return c.s+=b/100,c.s=J(c.s),o(c)}function v(a){return o(a).desaturate(100)}function w(a,b){b=0===b?0:b||10;var c=o(a).toHsl();return c.l+=b/100,c.l=J(c.l),o(c)}function x(a,b){b=0===b?0:b||10;var c=o(a).toRgb();return c.r=Math.max(0,Math.min(255,c.r-Math.round(-b/100*255))),c.g=Math.max(0,Math.min(255,c.g-Math.round(-b/100*255))),c.b=Math.max(0,Math.min(255,c.b-Math.round(-b/100*255))),o(c)}function y(a,b){b=0===b?0:b||10;var c=o(a).toHsl();return c.l-=b/100,c.l=J(c.l),o(c)}function z(a,b){var c=o(a).toHsl(),d=(c.h+b)%360;return c.h=d<0?360+d:d,o(c)}function A(a){var b=o(a).toHsl();return b.h=(b.h+180)%360,o(b)}function B(a,b){if(isNaN(b)||b<=0)throw Error("Argument to polyad must be a positive number");for(var c=o(a).toHsl(),d=[o(a)],e=360/b,f=1;f<b;f++)d.push(o({h:(c.h+f*e)%360,s:c.s,l:c.l}));return d}function C(a){var b=o(a).toHsl(),c=b.h;return[o(a),o({h:(c+72)%360,s:b.s,l:b.l}),o({h:(c+216)%360,s:b.s,l:b.l})]}function D(a,b,c){b=b||6,c=c||30;var d=o(a).toHsl(),e=360/c,f=[o(a)];for(d.h=(d.h-(e*b>>1)+720)%360;--b;)d.h=(d.h+e)%360,f.push(o(d));return f}function E(a,b){b=b||6;for(var c=o(a).toHsv(),d=c.h,e=c.s,f=c.v,g=[],h=1/b;b--;)g.push(o({h:d,s:e,v:f})),f=(f+h)%1;return g}o.prototype={isDark:function(){return 128>this.getBrightness()},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var a=this.toRgb();return(299*a.r+587*a.g+114*a.b)/1e3},getLuminance:function(){var a,b,c,d=this.toRgb();return a=d.r/255,.2126*(a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4))+.7152*((b=d.g/255)<=.03928?b/12.92:Math.pow((b+.055)/1.055,2.4))+.0722*((c=d.b/255)<=.03928?c/12.92:Math.pow((c+.055)/1.055,2.4))},setAlpha:function(a){return this._a=H(a),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var a=q(this._r,this._g,this._b);return{h:360*a.h,s:a.s,v:a.v,a:this._a}},toHsvString:function(){var a=q(this._r,this._g,this._b),b=Math.round(360*a.h),c=Math.round(100*a.s),d=Math.round(100*a.v);return 1==this._a?"hsv("+b+", "+c+"%, "+d+"%)":"hsva("+b+", "+c+"%, "+d+"%, "+this._roundA+")"},toHsl:function(){var a=p(this._r,this._g,this._b);return{h:360*a.h,s:a.s,l:a.l,a:this._a}},toHslString:function(){var a=p(this._r,this._g,this._b),b=Math.round(360*a.h),c=Math.round(100*a.s),d=Math.round(100*a.l);return 1==this._a?"hsl("+b+", "+c+"%, "+d+"%)":"hsla("+b+", "+c+"%, "+d+"%, "+this._roundA+")"},toHex:function(a){return r(this._r,this._g,this._b,a)},toHexString:function(a){return"#"+this.toHex(a)},toHex8:function(a){var b,c,d,e,f;return b=this._r,c=this._g,d=this._b,e=this._a,f=[L(Math.round(b).toString(16)),L(Math.round(c).toString(16)),L(Math.round(d).toString(16)),L(N(e))],a&&f[0].charAt(0)==f[0].charAt(1)&&f[1].charAt(0)==f[1].charAt(1)&&f[2].charAt(0)==f[2].charAt(1)&&f[3].charAt(0)==f[3].charAt(1)?f[0].charAt(0)+f[1].charAt(0)+f[2].charAt(0)+f[3].charAt(0):f.join("")},toHex8String:function(a){return"#"+this.toHex8(a)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*I(this._r,255))+"%",g:Math.round(100*I(this._g,255))+"%",b:Math.round(100*I(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+Math.round(100*I(this._r,255))+"%, "+Math.round(100*I(this._g,255))+"%, "+Math.round(100*I(this._b,255))+"%)":"rgba("+Math.round(100*I(this._r,255))+"%, "+Math.round(100*I(this._g,255))+"%, "+Math.round(100*I(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(G[r(this._r,this._g,this._b,!0)]||!1)},toFilter:function(a){var b="#"+s(this._r,this._g,this._b,this._a),c=b,d=this._gradientType?"GradientType = 1, ":"";if(a){var e=o(a);c="#"+s(e._r,e._g,e._b,e._a)}return"progid:DXImageTransform.Microsoft.gradient("+d+"startColorstr="+b+",endColorstr="+c+")"},toString:function(a){var b=!!a;a=a||this._format;var c=!1,d=this._a<1&&this._a>=0;return b||!d||"hex"!==a&&"hex6"!==a&&"hex3"!==a&&"hex4"!==a&&"hex8"!==a&&"name"!==a?("rgb"===a&&(c=this.toRgbString()),"prgb"===a&&(c=this.toPercentageRgbString()),"hex"!==a&&"hex6"!==a||(c=this.toHexString()),"hex3"===a&&(c=this.toHexString(!0)),"hex4"===a&&(c=this.toHex8String(!0)),"hex8"===a&&(c=this.toHex8String()),"name"===a&&(c=this.toName()),"hsl"===a&&(c=this.toHslString()),"hsv"===a&&(c=this.toHsvString()),c||this.toHexString()):"name"===a&&0===this._a?this.toName():this.toRgbString()},clone:function(){return o(this.toString())},_applyModification:function(a,b){var c=a.apply(null,[this].concat([].slice.call(b)));return this._r=c._r,this._g=c._g,this._b=c._b,this.setAlpha(c._a),this},lighten:function(){return this._applyModification(w,arguments)},brighten:function(){return this._applyModification(x,arguments)},darken:function(){return this._applyModification(y,arguments)},desaturate:function(){return this._applyModification(t,arguments)},saturate:function(){return this._applyModification(u,arguments)},greyscale:function(){return this._applyModification(v,arguments)},spin:function(){return this._applyModification(z,arguments)},_applyCombination:function(a,b){return a.apply(null,[this].concat([].slice.call(b)))},analogous:function(){return this._applyCombination(D,arguments)},complement:function(){return this._applyCombination(A,arguments)},monochromatic:function(){return this._applyCombination(E,arguments)},splitcomplement:function(){return this._applyCombination(C,arguments)},triad:function(){return this._applyCombination(B,[3])},tetrad:function(){return this._applyCombination(B,[4])}},o.fromRatio=function(a,b){if("object"==l(a)){var c={};for(var d in a)a.hasOwnProperty(d)&&(c[d]="a"===d?a[d]:M(a[d]));a=c}return o(a,b)},o.equals=function(a,b){return!(!a||!b)&&o(a).toRgbString()==o(b).toRgbString()},o.random=function(){return o.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},o.mix=function(a,b,c){c=0===c?0:c||50;var d=o(a).toRgb(),e=o(b).toRgb(),f=c/100;return o({r:(e.r-d.r)*f+d.r,g:(e.g-d.g)*f+d.g,b:(e.b-d.b)*f+d.b,a:(e.a-d.a)*f+d.a})},o.readability=function(a,b){var c=o(a),d=o(b);return(Math.max(c.getLuminance(),d.getLuminance())+.05)/(Math.min(c.getLuminance(),d.getLuminance())+.05)},o.isReadable=function(a,b,c){var d,e,f,g,h,i=o.readability(a,b);switch(h=!1,(e=((d=(d=c)||{level:"AA",size:"small"}).level||"AA").toUpperCase(),f=(d.size||"small").toLowerCase(),"AA"!==e&&"AAA"!==e&&(e="AA"),"small"!==f&&"large"!==f&&(f="small"),g={level:e,size:f}).level+g.size){case"AAsmall":case"AAAlarge":h=i>=4.5;break;case"AAlarge":h=i>=3;break;case"AAAsmall":h=i>=7}return h},o.mostReadable=function(a,b,c){var d,e,f,g,h=null,i=0;e=(c=c||{}).includeFallbackColors,f=c.level,g=c.size;for(var j=0;j<b.length;j++)(d=o.readability(a,b[j]))>i&&(i=d,h=o(b[j]));return o.isReadable(a,h,{level:f,size:g})||!e?h:(c.includeFallbackColors=!1,o.mostReadable(a,["#fff","#000"],c))};var F=o.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},G=o.hexNames=function(a){var b={};for(var c in a)a.hasOwnProperty(c)&&(b[a[c]]=c);return b}(F);function H(a){return(isNaN(a=parseFloat(a))||a<0||a>1)&&(a=1),a}function I(a,b){"string"==typeof(c=a)&&-1!=c.indexOf(".")&&1===parseFloat(c)&&(a="100%");var c,d,e="string"==typeof(d=a)&&-1!=d.indexOf("%");return a=Math.min(b,Math.max(0,parseFloat(a))),e&&(a=parseInt(a*b,10)/100),1e-6>Math.abs(a-b)?1:a%b/parseFloat(b)}function J(a){return Math.min(1,Math.max(0,a))}function K(a){return parseInt(a,16)}function L(a){return 1==a.length?"0"+a:""+a}function M(a){return a<=1&&(a=100*a+"%"),a}function N(a){return Math.round(255*parseFloat(a)).toString(16)}var O,P,Q,R=(P="[\\s|\\(]+("+(O="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+O+")[,|\\s]+("+O+")\\s*\\)?",Q="[\\s|\\(]+("+O+")[,|\\s]+("+O+")[,|\\s]+("+O+")[,|\\s]+("+O+")\\s*\\)?",{CSS_UNIT:new RegExp(O),rgb:RegExp("rgb"+P),rgba:RegExp("rgba"+Q),hsl:RegExp("hsl"+P),hsla:RegExp("hsla"+Q),hsv:RegExp("hsv"+P),hsva:RegExp("hsva"+Q),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function S(a){return!!R.CSS_UNIT.exec(a)}var T=function(a,b){var c=("string"==typeof a?parseInt(a):a)||0;if(c>=-5&&c<=5){var d=parseFloat(b),e=d+-(d/5*c*1);return(0==e||e<=Number.EPSILON)&&(e=.1),{animationPeriod:e+"s"}}return{animationPeriod:b}},U=function(a,b){var c=a||{},d="";switch(b){case"small":d="12px";break;case"medium":d="16px";break;case"large":d="20px";break;default:d=void 0}var e={};if(c.fontSize){var f=c.fontSize;e=function(a,b){var c={};for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&0>b.indexOf(d)&&(c[d]=a[d]);if(null!=a&&"function"==typeof Object.getOwnPropertySymbols){var e=0;for(d=Object.getOwnPropertySymbols(a);e<d.length;e++)0>b.indexOf(d[e])&&Object.prototype.propertyIsEnumerable.call(a,d[e])&&(c[d[e]]=a[d[e]])}return c}(c,["fontSize"]),d=f}return{fontSize:d,styles:e}},V={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},W=function(a){var b=a.className,c=a.text,d=a.textColor,e=a.staticText,f=a.style;return c?i.default.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(b||"").trim(),style:k(k(k({},e&&V),d&&{color:d,mixBlendMode:"unset"}),f&&f)},"string"==typeof c&&c.length?c:"loading"):null},X="rgb(50, 205, 50)";function Y(a){return a&&a.Math===Math&&a}j('.atom-rli-bounding-box {\n  --atom-phase1-rgb: 50, 205, 50;\n  color: rgba(var(--atom-phase1-rgb), 1);\n  font-size: 16px;\n  position: relative;\n  text-align: unset;\n  isolation: isolate;\n}\n.atom-rli-bounding-box .atom-indicator {\n  width: 6em;\n  height: 6em;\n  position: relative;\n  perspective: 6em;\n  overflow: hidden;\n  color: rgba(var(--atom-phase1-rgb), 1);\n  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;\n}\n.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 0.48em;\n  height: 0.48em;\n  margin: auto;\n  border-radius: 50%;\n  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);\n  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7eg;\n}\n.atom-rli-bounding-box .atom-indicator::before {\n  filter: drop-shadow(0px 0px 0.0625em currentColor);\n}\n.atom-rli-bounding-box .atom-indicator .electron-orbit {\n  color: rgba(var(--atom-phase1-rgb), 0.85);\n  border: 0;\n  border-left: 0.4em solid currentColor;\n  box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  width: 4.8em;\n  height: 4.8em;\n  background-color: transparent;\n  border-radius: 50%;\n  transform-style: preserve-3d;\n  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7fj, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gy;\n}\n.atom-rli-bounding-box .atom-indicator .electron-orbit::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  border-radius: 50%;\n  color: rgba(var(--atom-phase1-rgb), 0.18);\n  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7hv;\n  border: 0.125em solid currentColor;\n}\n.atom-rli-bounding-box .atom-indicator .electron-orbit::before {\n  content: "";\n  width: 0.192em;\n  height: 0.192em;\n  position: absolute;\n  border-radius: 50%;\n  top: -0.096em;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: 0 auto;\n  color: rgba(var(--atom-phase1-rgb), 1);\n  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;\n  background-color: currentColor;\n  transform: rotateY(-70deg);\n  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7ew, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;\n}\n.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {\n  --orbit-vector-factor: -1;\n  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));\n}\n.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {\n  --orbit-vector-factor: 1;\n  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));\n}\n.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {\n  --orbit-vector-factor: 0;\n  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));\n  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);\n}\n.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {\n  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);\n}\n.atom-rli-bounding-box .atom-text {\n  color: currentColor;\n  mix-blend-mode: difference;\n  width: unset;\n  display: block;\n}\n\n@property --atom-phase1-rgb {\n  syntax: "<number>#";\n  inherits: true;\n  initial-value: 50, 205, 50;\n}\n@property --atom-phase2-rgb {\n  syntax: "<number>#";\n  inherits: true;\n  initial-value: 50, 205, 50;\n}\n@property --atom-phase3-rgb {\n  syntax: "<number>#";\n  inherits: true;\n  initial-value: 50, 205, 50;\n}\n@property --atom-phase4-rgb {\n  syntax: "<number>#";\n  inherits: true;\n  initial-value: 50, 205, 50;\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 1s;\n}\n@keyframes uxlv7fj {\n  from {\n    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);\n  }\n  to {\n    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);\n  }\n}\n@keyframes uxlv7ew {\n  from {\n    transform: rotateY(-70deg) rotateX(0deg);\n  }\n  to {\n    transform: rotateY(-70deg) rotateX(-360deg);\n  }\n}\n@keyframes uxlv7eg {\n  100%, 0% {\n    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);\n  }\n  20% {\n    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);\n  }\n  25% {\n    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);\n  }\n  45% {\n    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);\n  }\n  50% {\n    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);\n  }\n  70% {\n    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);\n  }\n  75% {\n    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);\n  }\n  95% {\n    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);\n  }\n}\n@keyframes uxlv7gg {\n  100%, 0% {\n    color: rgba(var(--atom-phase1-rgb), 1);\n  }\n  20% {\n    color: rgba(var(--atom-phase1-rgb), 1);\n  }\n  25% {\n    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);\n  }\n  45% {\n    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);\n  }\n  50% {\n    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);\n  }\n  70% {\n    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);\n  }\n  75% {\n    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);\n  }\n  95% {\n    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);\n  }\n}\n@keyframes uxlv7gy {\n  100%, 0% {\n    color: rgba(var(--atom-phase1-rgb), 0.85);\n  }\n  20% {\n    color: rgba(var(--atom-phase1-rgb), 0.85);\n  }\n  25% {\n    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);\n  }\n  45% {\n    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);\n  }\n  50% {\n    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);\n  }\n  70% {\n    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);\n  }\n  75% {\n    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);\n  }\n  95% {\n    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);\n  }\n}\n@keyframes uxlv7hv {\n  100%, 0% {\n    color: rgba(var(--atom-phase1-rgb), 0.18);\n  }\n  20% {\n    color: rgba(var(--atom-phase1-rgb), 0.18);\n  }\n  25% {\n    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);\n  }\n  45% {\n    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);\n  }\n  50% {\n    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);\n  }\n  70% {\n    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);\n  }\n  75% {\n    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);\n  }\n  95% {\n    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);\n  }\n}'),o(X).toRgb(),Array.from({length:4},function(a,b){return"--atom-phase".concat(b+1,"-rgb")}),j('.commet-rli-bounding-box {\n  --commet-phase1-color: rgb(50, 205, 50);\n  font-size: 16px;\n  width: 6.85em;\n  height: 6.85em;\n  overflow: hidden;\n  display: inline-block;\n  box-sizing: border-box;\n  position: relative;\n  isolation: isolate;\n}\n.commet-rli-bounding-box .commet-indicator {\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  box-sizing: border-box;\n  width: 6em;\n  height: 6em;\n  color: var(--commet-phase1-color);\n  display: inline-block;\n  isolation: isolate;\n  position: absolute;\n  z-index: 0;\n  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite uxlv7cp;\n}\n.commet-rli-bounding-box .commet-indicator .commet-box {\n  position: absolute;\n  display: inline-block;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  animation: uxlv7bx var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;\n}\n.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {\n  width: 100%;\n  height: 100%;\n  animation-direction: normal;\n}\n.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {\n  width: 70%;\n  height: 70%;\n  animation-direction: reverse;\n}\n.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  bottom: 0;\n  left: 0;\n  display: inline-block;\n}\n.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {\n  content: "";\n  width: 0.5em;\n  height: 0.5em;\n  border-radius: 50%;\n  background-color: currentColor;\n  position: absolute;\n  top: -0.125em;\n  left: 50%;\n  transform: translateX(-50%);\n  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;\n}\n.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  bottom: 0;\n  left: 0;\n  border-radius: 50%;\n  box-sizing: border-box;\n  border-style: solid;\n}\n.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {\n  border-color: currentColor transparent transparent currentColor;\n  border-width: 0.25em 0.25em 0 0;\n  transform: rotateZ(-45deg);\n}\n.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {\n  border-color: currentColor currentColor transparent transparent;\n  border-width: 0.25em 0 0 0.25em;\n  transform: rotateZ(45deg);\n}\n.commet-rli-bounding-box .commet-text {\n  mix-blend-mode: difference;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: var(--commet-phase1-color);\n}\n\n@property --commet-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --commet-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --commet-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --commet-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 1.2s;\n}\n@keyframes uxlv7bx {\n  to {\n    transform: rotate(1turn);\n  }\n}\n@keyframes uxlv7cp {\n  100%, 0% {\n    color: var(--commet-phase1-color);\n  }\n  20% {\n    color: var(--commet-phase1-color);\n  }\n  25% {\n    color: var(--commet-phase2-color, var(--commet-phase1-color));\n  }\n  45% {\n    color: var(--commet-phase2-color, var(--commet-phase1-color));\n  }\n  50% {\n    color: var(--commet-phase3-color, var(--commet-phase1-color));\n  }\n  70% {\n    color: var(--commet-phase3-color, var(--commet-phase1-color));\n  }\n  75% {\n    color: var(--commet-phase4-color, var(--commet-phase1-color));\n  }\n  95% {\n    color: var(--commet-phase4-color, var(--commet-phase1-color));\n  }\n}'),Array.from({length:4},function(a,b){return"--commet-phase".concat(b+1,"-color")}),j('.OP-annulus-rli-bounding-box {\n  --OP-annulus-phase1-color: rgb(50, 205, 50);\n  font-size: 16px;\n  display: inline-block;\n}\n.OP-annulus-rli-bounding-box .OP-annulus-indicator {\n  width: 5em;\n  height: 5em;\n  color: var(--OP-annulus-phase1-color);\n  display: inline-block;\n  position: relative;\n  z-index: 0;\n}\n.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {\n  animation: uxlv7n7 calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;\n  height: 100%;\n  transform-origin: center center;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\n.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {\n  stroke-dasharray: 1, 125;\n  stroke-dashoffset: 0;\n  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite uxlv7oa, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7p5;\n  stroke-linecap: round;\n}\n.OP-annulus-rli-bounding-box .OP-annulus-text {\n  mix-blend-mode: difference;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: -2;\n}\n\n@property --OP-annulus-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --OP-annulus-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --OP-annulus-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --OP-annulus-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 1.5s;\n}\n@keyframes uxlv7n7 {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes uxlv7oa {\n  0% {\n    stroke-dasharray: 1, 125;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 98, 125;\n    stroke-dashoffset: -35px;\n  }\n  100% {\n    stroke-dasharray: 98, 125;\n    stroke-dashoffset: -124px;\n  }\n}\n@keyframes uxlv7p5 {\n  100%, 0% {\n    stroke: var(--OP-annulus-phase1-color);\n  }\n  22% {\n    stroke: var(--OP-annulus-phase1-color);\n  }\n  25% {\n    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));\n  }\n  42% {\n    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));\n  }\n  50% {\n    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));\n  }\n  72% {\n    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));\n  }\n  75% {\n    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));\n  }\n  97% {\n    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));\n  }\n}'),Array.from({length:4},function(a,b){return"--OP-annulus-phase".concat(b+1,"-color")}),j('.OP-dotted-rli-bounding-box {\n  --OP-dotted-phase1-color: rgb(50, 205, 50);\n  font-size: 16px;\n  box-sizing: border-box;\n  display: inline-block;\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator {\n  width: 5em;\n  height: 5em;\n  color: var(--OP-dotted-phase1-color);\n  display: inline-block;\n  position: relative;\n  z-index: 0;\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {\n  mix-blend-mode: difference;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: -2;\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: currentColor;\n  border-radius: 50%;\n  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite uxlv7nu, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7ol;\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {\n  transform: rotate(0deg);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {\n  transform: rotate(30deg);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {\n  transform: rotate(60deg);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {\n  transform: rotate(90deg);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {\n  transform: rotate(120deg);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {\n  transform: rotate(150deg);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {\n  transform: rotate(180deg);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {\n  transform: rotate(210deg);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {\n  transform: rotate(240deg);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {\n  transform: rotate(270deg);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {\n  transform: rotate(300deg);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {\n  transform: rotate(330deg);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);\n}\n\n@property --OP-dotted-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --OP-dotted-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --OP-dotted-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --OP-dotted-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 1.2s;\n}\n@keyframes uxlv7nu {\n  0%, 39%, 100% {\n    opacity: 0;\n  }\n  40% {\n    opacity: 1;\n  }\n}\n@keyframes uxlv7ol {\n  100%, 0% {\n    background-color: var(--OP-dotted-phase1-color);\n  }\n  22% {\n    background-color: var(--OP-dotted-phase1-color);\n  }\n  25% {\n    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));\n  }\n  47% {\n    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));\n  }\n  50% {\n    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));\n  }\n  72% {\n    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));\n  }\n  75% {\n    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));\n  }\n  97% {\n    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));\n  }\n}'),Y(!1)||Y("object"==typeof self&&self)||Y(a.g)||function(){return this}()||Function("return this")(),Array.from({length:4},function(a,b){return"--OP-dotted-phase".concat(b+1,"-color")}),j('.OP-spokes-rli-bounding-box {\n  --OP-spokes-phase1-color: rgb(50, 205, 50);\n  font-size: 16px;\n  position: relative;\n  color: var(--OP-spokes-phase1-color);\n}\n.OP-spokes-rli-bounding-box .OP-spokes-indicator {\n  width: 4.8em;\n  height: 4.8em;\n  display: block;\n  position: relative;\n}\n.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {\n  position: absolute;\n  height: 1.2em;\n  width: 0.4em;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto auto auto 50%;\n  background-color: var(--OP-spokes-phase1-color);\n  border-radius: 0.24em;\n  opacity: 0;\n  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite uxlv7pw, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7qn;\n  transform-origin: left center;\n}\n.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {\n  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);\n  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);\n}\n.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {\n  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);\n  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);\n}\n.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {\n  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);\n  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);\n}\n.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {\n  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);\n  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);\n}\n.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {\n  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);\n  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);\n}\n.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {\n  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);\n  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);\n}\n.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {\n  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);\n  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);\n}\n.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {\n  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);\n  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);\n}\n.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {\n  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);\n  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);\n}\n.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {\n  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);\n  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);\n}\n.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {\n  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);\n  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);\n}\n.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {\n  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);\n  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);\n}\n.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {\n  mix-blend-mode: difference;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: var(--OP-spokes-phase1-color);\n  z-index: -2;\n}\n\n@property --OP-spokes-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --OP-spokes-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --OP-spokes-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --OP-spokes-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 1.2s;\n}\n@keyframes uxlv7pw {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n@keyframes uxlv7qn {\n  100%, 0% {\n    background-color: var(--OP-spokes-phase1-color);\n  }\n  22% {\n    background-color: var(--OP-spokes-phase1-color);\n  }\n  25% {\n    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));\n  }\n  42% {\n    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));\n  }\n  50% {\n    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));\n  }\n  72% {\n    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));\n  }\n  75% {\n    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));\n  }\n  97% {\n    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));\n  }\n}'),Array.from({length:4},function(a,b){return"--OP-spokes-phase".concat(b+1,"-color")}),j('.OP-annulus-dual-sectors-rli-bounding-box {\n  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);\n  font-size: 16px;\n  box-sizing: border-box;\n  display: inline-block;\n}\n.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {\n  width: 5em;\n  height: 5em;\n  display: inline-block;\n  position: relative;\n  z-index: 0;\n  color: var(--OP-annulus-dual-sectors-phase1-color);\n}\n.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  border-width: 0.34em;\n  border-style: solid;\n  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;\n  background-color: transparent;\n  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite uxlv7ra, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite uxlv7sv;\n}\n.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {\n  mix-blend-mode: difference;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: -2;\n}\n\n@property --OP-annulus-dual-sectors-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --OP-annulus-dual-sectors-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --OP-annulus-dual-sectors-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --OP-annulus-dual-sectors-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 1.2s;\n}\n@keyframes uxlv7ra {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes uxlv7sv {\n  100%, 0% {\n    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;\n  }\n  20% {\n    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;\n  }\n  25% {\n    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;\n  }\n  45% {\n    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;\n  }\n  50% {\n    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;\n  }\n  70% {\n    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;\n  }\n  75% {\n    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;\n  }\n  95% {\n    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;\n  }\n}'),Array.from({length:4},function(a,b){return"--OP-annulus-dual-sectors-phase".concat(b+1,"-color")}),j('.OP-annulus-sector-track-rli-bounding-box {\n  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);\n  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);\n  font-size: 16px;\n  display: inline-block;\n}\n.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {\n  width: 5em;\n  height: 5em;\n  color: var(--OP-annulus-sector-phase1-color);\n  display: inline-block;\n  position: relative;\n  z-index: 0;\n}\n.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {\n  width: 100%;\n  height: 100%;\n  border-width: 0.34em;\n  border-style: solid;\n  border-radius: 50%;\n  box-sizing: border-box;\n  border-color: var(--OP-annulus-track-phase1-color);\n  border-top-color: var(--OP-annulus-sector-phase1-color);\n  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7rl, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7tf;\n}\n.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {\n  mix-blend-mode: difference;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: -2;\n}\n\n@property --OP-annulus-track-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgba(50, 205, 50, 0.22);\n}\n@property --OP-annulus-track-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgba(50, 205, 50, 0.22);\n}\n@property --OP-annulus-track-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgba(50, 205, 50, 0.22);\n}\n@property --OP-annulus-track-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgba(50, 205, 50, 0.22);\n}\n@property --OP-annulus-sector-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --OP-annulus-sector-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --OP-annulus-sector-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --OP-annulus-sector-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 1s;\n}\n@keyframes uxlv7rl {\n  to {\n    transform: rotate(1turn);\n  }\n}\n@keyframes uxlv7tf {\n  100%, 0% {\n    border-color: var(--OP-annulus-track-phase1-color);\n    border-top-color: var(--OP-annulus-sector-phase1-color);\n  }\n  18% {\n    border-color: var(--OP-annulus-track-phase1-color);\n    border-top-color: var(--OP-annulus-sector-phase1-color);\n  }\n  25% {\n    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));\n    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));\n  }\n  43% {\n    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));\n    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));\n  }\n  50% {\n    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));\n    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));\n  }\n  68% {\n    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));\n    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));\n  }\n  75% {\n    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));\n    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));\n  }\n  93% {\n    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));\n    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));\n  }\n}'),Array.from({length:4},function(a,b){return["--OP-annulus-track-phase".concat(b+1,"-color"),"--OP-annulus-sector-phase".concat(b+1,"-color")]}),j('.foursquare-rli-bounding-box {\n  --four-square-phase1-color: rgb(50, 205, 50);\n  font-size: 16px;\n  box-sizing: border-box;\n  color: var(--four-square-phase1-color);\n  display: inline-block;\n  overflow: hidden;\n}\n.foursquare-rli-bounding-box .foursquare-indicator {\n  height: 5.3033008589em;\n  width: 5.3033008589em;\n  position: relative;\n  display: block;\n}\n.foursquare-rli-bounding-box .foursquare-indicator .squares-container {\n  position: absolute;\n  z-index: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  height: 2.5em;\n  width: 2.5em;\n  color: inherit;\n  will-change: color, width, height;\n  transform: rotate(45deg);\n  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7dk, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7es;\n}\n.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {\n  position: absolute;\n  width: 1.25em;\n  height: 1.25em;\n  border-radius: 0.1875em;\n  background-color: currentColor;\n  animation: uxlv7dd var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;\n}\n.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {\n  top: 0;\n  left: 0;\n}\n.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {\n  top: 0;\n  right: 0;\n}\n.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {\n  bottom: 0;\n  left: 0;\n}\n.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {\n  bottom: 0;\n  right: 0;\n}\n\n@property --four-square-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --four-square-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --four-square-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --four-square-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 1s;\n}\n@keyframes uxlv7dk {\n  0% {\n    width: 2.5em;\n    height: 2.5em;\n  }\n  10% {\n    width: 2.5em;\n    height: 2.5em;\n  }\n  50% {\n    width: 3.75em;\n    height: 3.75em;\n  }\n  90% {\n    width: 2.5em;\n    height: 2.5em;\n  }\n  100% {\n    width: 2.5em;\n    height: 2.5em;\n  }\n}\n@keyframes uxlv7dd {\n  0% {\n    transform: rotateZ(0deg);\n  }\n  10% {\n    transform: rotateZ(0deg);\n  }\n  50% {\n    transform: rotateZ(90deg);\n  }\n  90% {\n    transform: rotateZ(90deg);\n  }\n  100% {\n    transform: rotateZ(90deg);\n  }\n}\n@keyframes uxlv7es {\n  100%, 0% {\n    color: var(--four-square-phase1-color);\n  }\n  20% {\n    color: var(--four-square-phase1-color);\n  }\n  25% {\n    color: var(--four-square-phase2-color, var(--four-square-phase1-color));\n  }\n  45% {\n    color: var(--four-square-phase2-color, var(--four-square-phase1-color));\n  }\n  50% {\n    color: var(--four-square-phase3-color, var(--four-square-phase1-color));\n  }\n  70% {\n    color: var(--four-square-phase3-color, var(--four-square-phase1-color));\n  }\n  75% {\n    color: var(--four-square-phase4-color, var(--four-square-phase1-color));\n  }\n  95% {\n    color: var(--four-square-phase4-color, var(--four-square-phase1-color));\n  }\n}'),Array.from({length:4},function(a,b){return"--four-square-phase".concat(b+1,"-color")}),j('.mosaic-rli-bounding-box {\n  --mosaic-phase1-color: rgb(50, 205, 50);\n  box-sizing: border-box;\n  font-size: 16px;\n  color: var(--mosaic-phase1-color);\n}\n.mosaic-rli-bounding-box .mosaic-indicator {\n  width: 5em;\n  height: 5em;\n  color: currentColor;\n  display: grid;\n  gap: 0.125em;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-areas: "a b c" "d e f" "g h i";\n  position: relative;\n  z-index: 0;\n}\n.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {\n  mix-blend-mode: difference;\n  position: absolute;\n  top: 105%;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: -2;\n}\n.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {\n  background-color: var(--mosaic-phase1-color);\n  animation-name: uxlv7i4, uxlv7is;\n  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);\n  animation-timing-function: var(--rli-animation-function, ease-in-out);\n  animation-iteration-count: infinite;\n}\n.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {\n  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);\n  grid-area: a;\n}\n.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {\n  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);\n  grid-area: b;\n}\n.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {\n  grid-area: c;\n  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);\n}\n.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {\n  grid-area: d;\n  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);\n}\n.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {\n  grid-area: e;\n  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);\n}\n.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {\n  grid-area: f;\n  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);\n}\n.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {\n  grid-area: g;\n  animation-delay: 0s;\n}\n.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {\n  grid-area: h;\n  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);\n}\n.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {\n  grid-area: i;\n  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);\n}\n\n@property --mosaic-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --mosaic-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --mosaic-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --mosaic-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 1.5s;\n}\n@keyframes uxlv7i4 {\n  0%, 60%, 100% {\n    transform: scale3D(1, 1, 1);\n  }\n  30% {\n    transform: scale3D(0, 0, 1);\n  }\n}\n@keyframes uxlv7is {\n  100%, 0% {\n    background-color: var(--mosaic-phase1-color);\n  }\n  25% {\n    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));\n  }\n  50% {\n    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));\n  }\n  75% {\n    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));\n  }\n}'),Array.from({length:4},function(a,b){return"--mosaic-phase".concat(b+1,"-color")}),j('.riple-rli-bounding-box {\n  --riple-phase1-color: rgb(50, 205, 50);\n  box-sizing: border-box;\n  font-size: 16px;\n  display: inline-block;\n  color: var(--riple-phase1-color);\n}\n.riple-rli-bounding-box .riple-indicator {\n  display: inline-block;\n  width: 5em;\n  height: 5em;\n  position: relative;\n  z-index: 0;\n}\n.riple-rli-bounding-box .riple-indicator .riple-text {\n  mix-blend-mode: difference;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: -2;\n}\n.riple-rli-bounding-box .riple-indicator .riple {\n  --border-width: 0.25em;\n  position: absolute;\n  border: var(--border-width) solid var(--riple-phase1-color);\n  opacity: 1;\n  border-radius: 50%;\n  will-change: top, right, left, bottom, border-color;\n  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7i1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7io;\n}\n.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {\n  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);\n}\n\n@property --riple-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --riple-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --riple-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --riple-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 1s;\n}\n@keyframes uxlv7i1 {\n  0% {\n    top: calc(50% - var(--border-width));\n    left: calc(50% - var(--border-width));\n    right: calc(50% - var(--border-width));\n    bottom: calc(50% - var(--border-width));\n    opacity: 0;\n  }\n  4.9% {\n    top: calc(50% - var(--border-width));\n    left: calc(50% - var(--border-width));\n    right: calc(50% - var(--border-width));\n    bottom: calc(50% - var(--border-width));\n    opacity: 0;\n  }\n  5% {\n    top: calc(50% - var(--border-width));\n    left: calc(50% - var(--border-width));\n    right: calc(50% - var(--border-width));\n    bottom: calc(50% - var(--border-width));\n    opacity: 1;\n  }\n  100% {\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    opacity: 0;\n  }\n}\n@keyframes uxlv7io {\n  100%, 0% {\n    border-color: var(--riple-phase1-color);\n  }\n  24.9% {\n    border-color: var(--riple-phase1-color);\n  }\n  25% {\n    border-color: var(--riple-phase2-color, var(--riple-phase1-color));\n  }\n  49.9% {\n    border-color: var(--riple-phase2-color, var(--riple-phase1-color));\n  }\n  50% {\n    border-color: var(--riple-phase3-color, var(--riple-phase1-color));\n  }\n  74.9% {\n    border-color: var(--riple-phase3-color, var(--riple-phase1-color));\n  }\n  75% {\n    border-color: var(--riple-phase4-color, var(--riple-phase1-color));\n  }\n  99.9% {\n    border-color: var(--riple-phase4-color, var(--riple-phase1-color));\n  }\n}'),Array.from({length:4},function(a,b){return"--riple-phase".concat(b+1,"-color")}),j('.pulsate-rli-bounding-box {\n  --TD-pulsate-phase1-color: rgb(50, 205, 50);\n  font-size: 16px;\n  display: inline-block;\n  box-sizing: border-box;\n  color: var(--TD-pulsate-phase1-color);\n}\n.pulsate-rli-bounding-box .pulsate-indicator {\n  width: 4.4em;\n  height: 1.1em;\n  text-align: center;\n  position: relative;\n  z-index: 0;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: nowrap;\n  align-items: center;\n}\n.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {\n  width: 1.1em;\n  height: 1.1em;\n  border-radius: 50%;\n  background-color: var(--TD-pulsate-phase1-color);\n  transform: scale(0);\n  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7s0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7to;\n}\n.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {\n  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);\n}\n.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {\n  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);\n}\n.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {\n  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);\n}\n.pulsate-rli-bounding-box .pulsate-text {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 80%;\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 0.6em;\n  letter-spacing: 0.5px;\n  font-family: sans-serif;\n  mix-blend-mode: difference;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: -2;\n}\n\n@property --TD-pulsate-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --TD-pulsate-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --TD-pulsate-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --TD-pulsate-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 1.2s;\n}\n@keyframes uxlv7s0 {\n  0%, 90%, 100% {\n    transform: scale(0);\n  }\n  40% {\n    transform: scale(1);\n  }\n}\n@keyframes uxlv7to {\n  0%, 100% {\n    background-color: var(--TD-pulsate-phase1-color);\n  }\n  24.9% {\n    background-color: var(--TD-pulsate-phase1-color);\n  }\n  25% {\n    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));\n  }\n  49.9% {\n    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));\n  }\n  50% {\n    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));\n  }\n  74.9% {\n    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));\n  }\n  75% {\n    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));\n  }\n  99.9% {\n    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));\n  }\n}'),Array.from({length:4},function(a,b){return"--TD-pulsate-phase".concat(b+1,"-color")}),j('.brick-stack-rli-bounding-box {\n  --TD-brick-stack-phase1-color: rgb(50, 205, 50);\n  box-sizing: border-box;\n  font-size: 16px;\n  display: inline-block;\n  color: var(--TD-brick-stack-phase1-color);\n}\n.brick-stack-rli-bounding-box .brick-stack-indicator {\n  width: 2.8em;\n  height: 2.8em;\n  position: relative;\n  display: block;\n  margin: 0 auto;\n}\n.brick-stack-rli-bounding-box .brick-stack {\n  width: 100%;\n  height: 100%;\n  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;\n  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite uxlv7tu, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite uxlv7us;\n}\n\n@property --TD-brick-stack-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --TD-brick-stack-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --TD-brick-stack-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --TD-brick-stack-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 1s;\n}\n@keyframes uxlv7tu {\n  0% {\n    background-position: 0 0, 0 100%, 100% 100%;\n  }\n  25% {\n    background-position: 100% 0, 0 100%, 100% 100%;\n  }\n  50% {\n    background-position: 100% 0, 0 0, 100% 100%;\n  }\n  75% {\n    background-position: 100% 0, 0 0, 0 100%;\n  }\n  100% {\n    background-position: 100% 100%, 0 0, 0 100%;\n  }\n}\n@keyframes uxlv7us {\n  100%, 0% {\n    color: var(--TD-brick-stack-phase1-color);\n  }\n  20% {\n    color: var(--TD-brick-stack-phase1-color);\n  }\n  25% {\n    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));\n  }\n  45% {\n    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));\n  }\n  50% {\n    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));\n  }\n  70% {\n    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));\n  }\n  75% {\n    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));\n  }\n  95% {\n    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));\n  }\n}'),Array.from({length:4},function(a,b){return"--TD-brick-stack-phase".concat(b+1,"-color")}),j('.bob-rli-bounding-box {\n  --TD-bob-phase1-color: rgb(50, 205, 50);\n  box-sizing: border-box;\n  font-size: 16px;\n  display: inline-block;\n  color: var(--TD-bob-phase1-color);\n}\n.bob-rli-bounding-box .bob-indicator {\n  width: 4.4em;\n  height: 2.2em;\n  position: relative;\n  display: block;\n  margin: 0 auto;\n}\n.bob-rli-bounding-box .bob-indicator .bobbing,\n.bob-rli-bounding-box .bob-indicator .bobbing::before,\n.bob-rli-bounding-box .bob-indicator .bobbing::after {\n  width: 1.1em;\n  height: 100%;\n  display: grid;\n  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite uxlv7u0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite uxlv7vq;\n}\n.bob-rli-bounding-box .bob-indicator .bobbing::before,\n.bob-rli-bounding-box .bob-indicator .bobbing::after {\n  content: "";\n  grid-area: 1/1;\n}\n.bob-rli-bounding-box .bob-indicator .bobbing {\n  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);\n  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;\n}\n.bob-rli-bounding-box .bob-indicator .bobbing::before {\n  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);\n  transform: translateX(150%);\n  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;\n}\n.bob-rli-bounding-box .bob-indicator .bobbing::after {\n  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);\n  transform: translateX(300%);\n  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;\n}\n\n@property --TD-bob-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --TD-bob-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --TD-bob-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --TD-bob-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 1.2s;\n}\n@keyframes uxlv7u0 {\n  100%, 0% {\n    background-position: 50% 50%;\n  }\n  15% {\n    background-position: 50% 10%;\n  }\n  30% {\n    background-position: 50% 100%;\n  }\n  40% {\n    background-position: 50% 0%;\n  }\n  50% {\n    background-position: 50% 90%;\n  }\n  70% {\n    background-position: 50% 10%;\n  }\n  98% {\n    background-position: 50% 50%;\n  }\n}\n@keyframes uxlv7vq {\n  100%, 0% {\n    color: var(--TD-bob-phase1-color);\n  }\n  22% {\n    color: var(--TD-bob-phase1-color);\n  }\n  25% {\n    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));\n  }\n  47% {\n    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));\n  }\n  50% {\n    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));\n  }\n  72% {\n    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));\n  }\n  75% {\n    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));\n  }\n  97% {\n    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));\n  }\n}'),Array.from({length:4},function(a,b){return"--TD-bob-phase".concat(b+1,"-color")}),j('.bounce-rli-bounding-box {\n  --TD-bounce-phase1-color: rgb(50, 205, 50);\n  font-size: 16px;\n  color: var(--TD-bounce-phase1-color);\n  display: inline-block;\n  padding-bottom: 0.25125em;\n}\n.bounce-rli-bounding-box .wrapper {\n  --dot1-delay: 0s;\n  --dot1-x-offset: 0.55em;\n  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);\n  --dot2-x-offset: 2.2em;\n  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);\n  --dot3-x-offset: 3.85em;\n  width: 5.5em;\n  height: 3.125em;\n  position: relative;\n  display: block;\n  margin: 0 auto;\n}\n.bounce-rli-bounding-box .wrapper .group {\n  display: block;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.bounce-rli-bounding-box .wrapper .group .dot {\n  width: 1.1em;\n  height: 1.1em;\n  position: absolute;\n  border-radius: 50%;\n  background-color: var(--TD-bounce-phase1-color);\n  transform-origin: 50%;\n  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7wc, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite uxlv7x6;\n}\n.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {\n  left: var(--dot1-x-offset);\n  animation-delay: var(--dot1-delay), 0s;\n}\n.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {\n  left: var(--dot2-x-offset);\n  animation-delay: var(--dot2-delay), 0s;\n}\n.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {\n  left: var(--dot3-x-offset);\n  animation-delay: var(--dot3-delay), 0s;\n}\n.bounce-rli-bounding-box .wrapper .group .shadow {\n  width: 1.1em;\n  height: 0.22em;\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, 0.5);\n  position: absolute;\n  top: 101%;\n  transform-origin: 50%;\n  z-index: -1;\n  filter: blur(1px);\n  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7ww;\n}\n.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {\n  left: var(--dot1-x-offset);\n  animation-delay: var(--dot1-delay);\n}\n.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {\n  left: var(--dot2-x-offset);\n  animation-delay: var(--dot2-delay);\n}\n.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {\n  left: var(--dot3-x-offset);\n  animation-delay: var(--dot3-delay);\n}\n\n@property --TD-bounce-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --TD-bounce-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --TD-bounce-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --TD-bounce-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 0.5s;\n}\n@keyframes uxlv7wc {\n  0% {\n    top: 0%;\n  }\n  60% {\n    height: 1.25em;\n    border-radius: 50%;\n    transform: scaleX(1);\n  }\n  100% {\n    top: 100%;\n    height: 0.22em;\n    transform: scaleX(1.5);\n    filter: blur(0.4px);\n  }\n}\n@keyframes uxlv7ww {\n  0% {\n    transform: scaleX(0.2);\n    opacity: 0.2;\n  }\n  60% {\n    opacity: 0.4;\n  }\n  100% {\n    transform: scaleX(1.5);\n    opacity: 0.6;\n  }\n}\n@keyframes uxlv7x6 {\n  0%, 100% {\n    background-color: var(--TD-bounce-phase1-color);\n  }\n  20% {\n    background-color: var(--TD-bounce-phase1-color);\n  }\n  25% {\n    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));\n  }\n  45% {\n    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));\n  }\n  50% {\n    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));\n  }\n  70% {\n    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));\n  }\n  75% {\n    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));\n  }\n  95% {\n    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));\n  }\n}'),Array.from({length:4},function(a,b){return"--TD-bounce-phase".concat(b+1,"-color")}),j('.blink-blur-rli-bounding-box {\n  --shape-phase1-color: rgb(50, 205, 50);\n  font-size: 16px;\n  color: var(--shape-phase1-color);\n}\n.blink-blur-rli-bounding-box .blink-blur-indicator {\n  isolation: isolate;\n  display: flex;\n  flex-direction: row;\n  -moz-column-gap: 0.4em;\n       column-gap: 0.4em;\n}\n.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {\n  --x-deg: -20deg;\n  width: 1.8em;\n  height: 2.25em;\n  border-radius: 0.25em;\n  color: inherit;\n  transform: skewX(var(--x-deg));\n  background-color: var(--shape-phase1-color);\n  animation-name: uxlv7id, uxlv7jl;\n  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);\n  animation-timing-function: var(--rli-animation-function, ease-in);\n  animation-iteration-count: infinite;\n}\n.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);\n}\n.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);\n}\n.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);\n}\n.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);\n}\n.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);\n}\n\n@property --shape-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --shape-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --shape-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --shape-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 1.2s;\n}\n@keyframes uxlv7id {\n  100%, 0% {\n    opacity: 0.3;\n    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);\n    transform: skewX(var(--x-deg)) scale(1.2, 1.45);\n  }\n  39% {\n    opacity: 0.8;\n  }\n  40%, 41%, 42% {\n    opacity: 0;\n  }\n  43% {\n    opacity: 0.8;\n  }\n  50% {\n    opacity: 1;\n    filter: blur(0em) drop-shadow(0 0 0em);\n    transform: skewX(var(--x-deg)) scale(1, 1);\n  }\n}\n@keyframes uxlv7jl {\n  100%, 0% {\n    color: var(--shape-phase1-color);\n    background-color: var(--shape-phase1-color);\n  }\n  25% {\n    color: var(--shape-phase2-color, var(--shape-phase1-color));\n    background-color: var(--shape-phase2-color, var(--shape-phase1-color));\n  }\n  50% {\n    color: var(--shape-phase3-color, var(--shape-phase1-color));\n    background-color: var(--shape-phase3-color, var(--shape-phase1-color));\n  }\n  75% {\n    color: var(--shape-phase4-color, var(--shape-phase1-color));\n    background-color: var(--shape-phase4-color, var(--shape-phase1-color));\n  }\n}'),Array.from({length:4},function(a,b){return"--shape-phase".concat(b+1,"-color")}),j('.trophy-spin-rli-bounding-box {\n  --trophySpin-phase1-color: rgb(50, 205, 50);\n  box-sizing: border-box;\n  font-size: 16px;\n  position: relative;\n  isolation: isolate;\n  color: var(--trophySpin-phase1-color);\n}\n.trophy-spin-rli-bounding-box .trophy-spin-indicator {\n  width: 4em;\n  perspective: 1000px;\n  transform-style: preserve-3d;\n  display: block;\n  margin: 0 auto;\n}\n.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {\n  display: block;\n  width: 4em;\n  height: 0.5em;\n  background: var(--trophySpin-phase1-color);\n  animation: uxlv7ki var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, uxlv7l2 calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, uxlv7ly calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;\n}\n.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {\n  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);\n}\n.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {\n  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);\n}\n.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {\n  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);\n}\n.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {\n  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);\n}\n.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {\n  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);\n}\n.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {\n  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);\n}\n.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {\n  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);\n}\n.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {\n  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);\n}\n\n@property --trophySpin-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --trophySpin-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --trophySpin-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --trophySpin-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 2.5s;\n}\n@keyframes uxlv7ki {\n  to {\n    transform: rotateY(1turn) rotateX(-25deg);\n  }\n}\n@keyframes uxlv7l2 {\n  100%, 0% {\n    filter: brightness(1);\n    opacity: 1;\n  }\n  15% {\n    filter: brightness(1);\n  }\n  25% {\n    opacity: 0.96;\n  }\n  30% {\n    filter: brightness(0.92);\n  }\n  50% {\n    filter: brightness(0.7);\n    opacity: 1;\n  }\n  75% {\n    filter: brightness(0.92);\n    opacity: 0.96;\n  }\n  90% {\n    filter: brightness(1);\n  }\n}\n@keyframes uxlv7ly {\n  100%, 0% {\n    background-color: var(--trophySpin-phase1-color);\n  }\n  18% {\n    background-color: var(--trophySpin-phase1-color);\n  }\n  25% {\n    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));\n  }\n  43% {\n    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));\n  }\n  50% {\n    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));\n  }\n  68% {\n    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));\n  }\n  75% {\n    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));\n  }\n  93% {\n    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));\n  }\n}'),Array.from({length:4},function(a,b){return"--trophySpin-phase".concat(b+1,"-color")}),j('.slab-rli-bounding-box {\n  --slab-phase1-color: rgb(50, 205, 50);\n  font-size: 16px;\n  color: var(--slab-phase1-color);\n  position: relative;\n}\n.slab-rli-bounding-box .slab-indicator {\n  position: relative;\n  display: block;\n  width: 7em;\n  height: 4em;\n  margin: 0 auto;\n  overflow: hidden;\n}\n.slab-rli-bounding-box .slab-indicator .slabs-wrapper {\n  width: 4em;\n  height: 4em;\n  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);\n  transform-style: preserve-3d;\n  transform-origin: 50% 100%;\n  display: block;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n}\n.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: var(--slab-phase1-color);\n  opacity: 0;\n  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);\n  transform-origin: 0% 0%;\n  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite uxlv7md, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite uxlv7n0;\n}\n.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {\n  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);\n}\n.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {\n  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);\n}\n.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {\n  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);\n}\n.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {\n  animation-delay: 0s;\n}\n\n@property --slab-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --slab-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --slab-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --slab-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration-unitless {\n  syntax: "<number>";\n  inherits: true;\n  initial-value: 3;\n}\n@keyframes uxlv7md {\n  0% {\n    transform: translateY(0) rotateX(30deg);\n    opacity: 0;\n  }\n  10% {\n    transform: translateY(-40%) rotateX(0deg);\n    opacity: 1;\n  }\n  25% {\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(-400%) rotateX(0deg);\n    opacity: 0;\n  }\n}\n@keyframes uxlv7n0 {\n  100%, 0% {\n    background-color: var(--slab-phase1-color);\n  }\n  24.9% {\n    background-color: var(--slab-phase1-color);\n  }\n  25% {\n    background-color: var(--slab-phase2-color, var(--slab-phase1-color));\n  }\n  49.9% {\n    background-color: var(--slab-phase2-color, var(--slab-phase1-color));\n  }\n  50% {\n    background-color: var(--slab-phase3-color, var(--slab-phase1-color));\n  }\n  74.9% {\n    background-color: var(--slab-phase3-color, var(--slab-phase1-color));\n  }\n  75% {\n    background-color: var(--slab-phase4-color, var(--slab-phase1-color));\n  }\n  99.9% {\n    background-color: var(--slab-phase4-color, var(--slab-phase1-color));\n  }\n}'),Array.from({length:4},function(a,b){return"--slab-phase".concat(b+1,"-color")}),j('.lifeline-rli-bounding-box {\n  --life-line-phase1-color: rgb(50, 205, 50);\n  font-size: 16px;\n  isolation: isolate;\n  color: var(--life-line-phase1-color);\n}\n.lifeline-rli-bounding-box .lifeline-indicator {\n  position: relative;\n  text-align: center;\n}\n.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {\n  stroke-dasharray: 474.7616760254 30.3039367676;\n  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite uxlv7k3, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite uxlv7kg;\n}\n.lifeline-rli-bounding-box .lifeline-text {\n  color: currentColor;\n  mix-blend-mode: difference;\n  width: unset;\n  display: block;\n}\n\n@property --life-line-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --life-line-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --life-line-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --life-line-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 2s;\n}\n@keyframes uxlv7k3 {\n  to {\n    stroke-dashoffset: -1010.1312255859;\n  }\n}\n@keyframes uxlv7kg {\n  100%, 0% {\n    color: var(--life-line-phase1-color);\n  }\n  20% {\n    color: var(--life-line-phase1-color);\n  }\n  25% {\n    color: var(--life-line-phase2-color, var(--life-line-phase1-color));\n  }\n  45% {\n    color: var(--life-line-phase2-color, var(--life-line-phase1-color));\n  }\n  50% {\n    color: var(--life-line-phase3-color, var(--life-line-phase1-color));\n  }\n  70% {\n    color: var(--life-line-phase3-color, var(--life-line-phase1-color));\n  }\n  75% {\n    color: var(--life-line-phase4-color, var(--life-line-phase1-color));\n  }\n  95% {\n    color: var(--life-line-phase4-color, var(--life-line-phase1-color));\n  }\n}');var Z=Array.from({length:4},function(a,b){return"--life-line-phase".concat(b+1,"-color")}),$=function(a){var b,c=U(null==a?void 0:a.style,null==a?void 0:a.size),d=c.styles,e=c.fontSize,f=null==a?void 0:a.easing,g=T(null==a?void 0:a.speedPlus,"2s").animationPeriod,h=function(a){var b={};if(a instanceof Array){for(var c=function(a,b){if(void 0===b&&(b=0),0===a.length)throw Error("Input array cannot be empty!");var c=[];return function a(b,d){return void 0===d&&(d=0),c.push.apply(c,b),c.length<d&&a(c,d),c.slice(0,d)}(a,b)}(a,Z.length),d=0;d<c.length&&!(d>=4);d++)b[Z[d]]=c[d];return b}try{if("string"!=typeof a)throw Error("Color String expected");for(var e=0;e<Z.length;e++)b[Z[e]]=a}catch(c){for(c instanceof Error?console.warn("[".concat(c.message,']: Received "').concat(typeof a,'" instead with value, ').concat(JSON.stringify(a))):console.warn("".concat(JSON.stringify(a)," received in <LifeLine /> indicator cannot be processed. Using default instead!")),e=0;e<Z.length;e++)b[Z[e]]=X}return b}(null!=(b=null==a?void 0:a.color)?b:"");return i.default.createElement("span",{className:"rli-d-i-b lifeline-rli-bounding-box",style:k(k(k(k(k({},e&&{fontSize:e}),g&&{"--rli-animation-duration":g}),f&&{"--rli-animation-function":f}),h),d),role:"status","aria-live":"polite","aria-label":"Loading"},i.default.createElement("span",{className:"rli-d-i-b lifeline-indicator"},i.default.createElement("svg",{width:"14em",height:"6.825000001em",xmlns:"http://www.w3.org/2000/svg",version:"1.2",viewBox:"0 0 350 50",preserveAspectRatio:"xMinYMin meet"},i.default.createElement("path",{className:"rli-lifeline",stroke:"currentColor",fill:"none",strokeLinejoin:"round",strokeWidth:"4px",d:"M-113 70h250q8-30 12-3t5 8 3-7 3 4 6 35 8-55 6 40 8-3s2-11 10-10 1 1 8-10l4 8c6 4 8-6 10-17s2 10 9 11h210"}))),i.default.createElement(W,{staticText:!0,text:null==a?void 0:a.text,textColor:null==a?void 0:a.textColor}))},_=a.i(75716);let aa=_.default.div.withConfig({displayName:"Loader.styles__LoaderContainer",componentId:"sc-c4a451a4-0"})`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:a})=>a.colors.bgPrimary};
  z-index: 9999;
`,ab=()=>(0,h.jsx)(aa,{children:(0,h.jsx)($,{color:"#316fcc",size:"medium",text:"",textColor:""})}),ac=_.keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,ad=_.keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,ae=_.keyframes`
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,af=_.keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,ag=_.keyframes`
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
`,ah=_.default.nav.withConfig({displayName:"NavBar.styles__StyledNavbar",componentId:"sc-eefaf6bf-0"})`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({theme:a})=>a.zIndex.sticky};
  background-color: rgba(10, 10, 10, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${({theme:a})=>a.colors.border};
  padding: ${({theme:a})=>a.spacing.lg} 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background-color: ${({theme:a})=>a.colors.textPrimary};
    opacity: ${({$mobileMenuActive:a})=>+!!a};
    transition: opacity ${({theme:a})=>a.transitions.base};
  }

  @media (max-width: 768px) {
    padding: ${({theme:a})=>a.spacing.md} 0;
  }
`,ai=_.default.div.withConfig({displayName:"NavBar.styles__NavbarContent",componentId:"sc-eefaf6bf-1"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${({theme:a})=>a.spacing.xl};
  position: relative;

  @media (max-width: 768px) {
    padding: 0 ${({theme:a})=>a.spacing.xl};
  }
`,aj=_.default.a.withConfig({displayName:"NavBar.styles__Logo",componentId:"sc-eefaf6bf-2"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyHeading};
  font-size: ${({theme:a})=>a.typography.fontSize.lg};
  font-weight: ${({theme:a})=>a.typography.fontWeight.semibold};
  color: ${({theme:a})=>a.colors.textPrimary};
  transition: color ${({theme:a})=>a.transitions.fast};
  display: flex;
  align-items: center;
  height: 40px;

  &:hover {
    color: ${({theme:a})=>a.colors.accent};
  }

  @media (max-width: 768px) {
    font-size: ${({theme:a})=>a.typography.fontSize.base};
    height: 32px;
  }
`,ak=_.default.div.withConfig({displayName:"NavBar.styles__NavRight",componentId:"sc-eefaf6bf-3"})`
  display: flex;
  align-items: center;
  gap: 0;

  @media (max-width: 768px) {
    display: none;
  }
`,al=_.default.ul.withConfig({displayName:"NavBar.styles__NavLinks",componentId:"sc-eefaf6bf-4"})`
  display: flex;
  align-items: center;
  gap: ${({theme:a})=>a.spacing.xl};
  list-style: none;
  margin: 0;
  padding: 0;
`,am=_.default.a.withConfig({displayName:"NavBar.styles__NavLink",componentId:"sc-eefaf6bf-5"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyBody};
  font-size: ${({theme:a})=>a.typography.fontSize.sm};
  font-weight: ${({theme:a})=>a.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({theme:a})=>a.colors.textPrimary};
  transition: color ${({theme:a})=>a.transitions.fast};

  &:hover {
    color: ${({theme:a})=>a.colors.textSecondary};
  }
`,an=_.default.button.withConfig({displayName:"NavBar.styles__MobileMenuButton",componentId:"sc-eefaf6bf-6"})`
  display: none;
  flex-direction: column;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: ${({theme:a})=>a.spacing.sm};
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  position: relative;
  z-index: 1001;
  align-self: center;

  @media (max-width: 768px) {
    display: ${({$isOpen:a})=>a?"none":"flex"};
  }
`,ao=_.default.span.withConfig({displayName:"NavBar.styles__HamburgerLine",componentId:"sc-eefaf6bf-7"})`
  display: block;
  height: 2px;
  background-color: ${({theme:a})=>a.colors.textPrimary};
  transition: all ${({theme:a})=>a.transitions.base};
  border-radius: 2px;

  ${({$index:a})=>{switch(a){case 0:return _.css`
          width: 12px;
          align-self: flex-end;
        `;case 1:return _.css`
          align-self: flex-end;
          width: 18px;
        `;case 2:return _.css`
          width: 24px;
        `}}}

  ${({$isOpen:a,$index:b})=>a&&_.css`
      ${0===b&&_.css`
        width: 32px;
        transform: rotate(45deg) translate(10px, 10px);
      `}
      ${1===b&&_.css`
        opacity: 0;
        transform: translateX(-10px);
      `}
      ${2===b&&_.css`
        width: 32px;
        transform: rotate(-45deg) translate(10px, -10px);
      `}
    `}
`,ap=_.default.div.withConfig({displayName:"NavBar.styles__MobileMenu",componentId:"sc-eefaf6bf-8"})`
  display: ${({$isOpen:a})=>a?"block":"none"};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  background-color: ${({theme:a})=>a.colors.bgPrimary};
  z-index: 1000;
  padding: ${({theme:a})=>a.spacing.lg} ${({theme:a})=>a.spacing.xl};
  overflow-y: auto;
  animation: ${ad} ${({theme:a})=>a.transitions.slow} ease-out;
`,aq=_.default.div.withConfig({displayName:"NavBar.styles__MobileMenuContent",componentId:"sc-eefaf6bf-9"})`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;
`,ar=_.default.div.withConfig({displayName:"NavBar.styles__MobileMenuHeader",componentId:"sc-eefaf6bf-10"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: ${({theme:a})=>a.spacing.sm};
  padding-bottom: ${({theme:a})=>a.spacing.sm};
`,as=_.default.a.withConfig({displayName:"NavBar.styles__MobileMenuLogo",componentId:"sc-eefaf6bf-11"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyHeading};
  font-size: ${({theme:a})=>a.typography.fontSize.xl};
  font-weight: ${({theme:a})=>a.typography.fontWeight.semibold};
  color: ${({theme:a})=>a.colors.textPrimary};
  text-decoration: none;
  opacity: 0;
  animation: ${af} 0.4s ease-out 0.1s forwards;
`,at=_.default.button.withConfig({displayName:"NavBar.styles__MobileMenuCloseButton",componentId:"sc-eefaf6bf-12"})`
  background: none;
  border: none;
  color: ${({theme:a})=>a.colors.textPrimary};
  font-size: 48px;
  line-height: 1;
  cursor: pointer;
  padding: ${({theme:a})=>a.spacing.xs};
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color ${({theme:a})=>a.transitions.fast};
  opacity: 0;
  animation: ${ag} 0.6s ease-out 0.1s forwards;

  &:hover {
    color: ${({theme:a})=>a.colors.accent};
  }
`,au=_.default.hr.withConfig({displayName:"NavBar.styles__MobileMenuDivider",componentId:"sc-eefaf6bf-13"})`
  border: none;
  border-top: 1px solid ${({theme:a})=>a.colors.border};
  margin: 0;
  margin-bottom: ${({theme:a})=>a.spacing.lg};
  width: 100%;
`,av=_.default.ul.withConfig({displayName:"NavBar.styles__MobileNavLinks",componentId:"sc-eefaf6bf-14"})`
  display: flex;
  flex-direction: column;
  gap: 0;
  list-style: none;
  flex: 1;
  justify-content: flex-start;
`,aw=_.default.li.withConfig({displayName:"NavBar.styles__MobileNavLinkItem",componentId:"sc-eefaf6bf-15"})`
  opacity: 0;
  animation: ${af} 0.4s ease-out forwards;
  animation-delay: ${({$index:a})=>.1+.1*a}s;
`,ax=_.default.a.withConfig({displayName:"NavBar.styles__MobileNavLink",componentId:"sc-eefaf6bf-16"})`
  font-size: ${({theme:a})=>a.typography.fontSize.xl};
  padding: ${({theme:a})=>a.spacing.sm} 0;
  display: block;
  transition: all ${({theme:a})=>a.transitions.base};
  font-family: ${({theme:a})=>a.typography.fontFamilyBody};
  font-weight: ${({theme:a})=>a.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({theme:a})=>a.colors.textPrimary};
  text-decoration: none;

  &:hover {
    color: ${({theme:a})=>a.colors.accent};
    padding-left: ${({theme:a})=>a.spacing.sm};
  }
`,ay=_.default.a.withConfig({displayName:"NavBar.styles__ResumeButton",componentId:"sc-eefaf6bf-17"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyBody};
  background-color: transparent;
  border: 1px solid ${({theme:a})=>a.colors.textPrimary};
  color: ${({theme:a})=>a.colors.textPrimary};
  padding: ${({theme:a})=>a.spacing.xs} ${({theme:a})=>a.spacing.lg};
  font-size: ${({theme:a})=>a.typography.fontSize.sm};
  font-weight: ${({theme:a})=>a.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: ${({theme:a})=>a.borderRadius.sm};
  transition: all ${({theme:a})=>a.transitions.base};
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: ${({theme:a})=>a.spacing.xl};

  &:hover {
    background-color: ${({theme:a})=>a.colors.textPrimary};
    color: ${({theme:a})=>a.colors.bgPrimary};
  }
`,az=_.default.div.withConfig({displayName:"NavBar.styles__ResumeModalOverlay",componentId:"sc-eefaf6bf-18"})`
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
  z-index: ${({theme:a})=>a.zIndex.modal};
  padding: ${({theme:a})=>a.spacing.xl};
  animation: ${ac} 0.2s ease-out;
`,aA=_.default.div.withConfig({displayName:"NavBar.styles__ResumeModal",componentId:"sc-eefaf6bf-19"})`
  background-color: ${({theme:a})=>a.colors.bgSecondary};
  border: 1px solid ${({theme:a})=>a.colors.border};
  border-radius: ${({theme:a})=>a.borderRadius.md};
  padding: ${({theme:a})=>a.spacing["2xl"]};
  padding-top: ${({theme:a})=>a.spacing["3xl"]};
  max-width: 450px;
  width: 100%;
  position: relative;
  animation: ${ae} 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    padding: ${({theme:a})=>a.spacing.xl};
  }
`,aB=_.default.h3.withConfig({displayName:"NavBar.styles__ResumeModalTitle",componentId:"sc-eefaf6bf-20"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyHeading};
  font-size: ${({theme:a})=>a.typography.fontSize.xl};
  font-weight: ${({theme:a})=>a.typography.fontWeight.bold};
  color: ${({theme:a})=>a.colors.textPrimary};
  margin: 0 0 ${({theme:a})=>a.spacing.md} 0;
  line-height: 1.2;
`,aC=_.default.p.withConfig({displayName:"NavBar.styles__ResumeModalText",componentId:"sc-eefaf6bf-21"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyBody};
  font-size: ${({theme:a})=>a.typography.fontSize.base};
  color: ${({theme:a})=>a.colors.textSecondary};
  margin: 0 0 ${({theme:a})=>a.spacing.xl} 0;
  line-height: 1.6;
`,aD=_.default.div.withConfig({displayName:"NavBar.styles__ResumeModalButtons",componentId:"sc-eefaf6bf-22"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:a})=>a.spacing.md};
`,aE=_.default.button.withConfig({displayName:"NavBar.styles__ResumeModalButton",componentId:"sc-eefaf6bf-23"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyBody};
  font-size: ${({theme:a})=>a.typography.fontSize.base};
  font-weight: ${({theme:a})=>a.typography.fontWeight.medium};
  color: ${({theme:a})=>a.colors.textPrimary};
  background-color: transparent;
  border: 1px solid ${({theme:a})=>a.colors.border};
  border-radius: ${({theme:a})=>a.borderRadius.sm};
  padding: ${({theme:a})=>a.spacing.md} ${({theme:a})=>a.spacing.lg};
  cursor: pointer;
  transition: all ${({theme:a})=>a.transitions.base};
  text-align: center;
  width: 100%;

  &:hover {
    background-color: ${({theme:a})=>a.colors.textPrimary};
    color: ${({theme:a})=>a.colors.bgPrimary};
    border-color: ${({theme:a})=>a.colors.textPrimary};
    transform: translateY(-1px);
  }
`,aF=_.default.button.withConfig({displayName:"NavBar.styles__ResumeModalClose",componentId:"sc-eefaf6bf-24"})`
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  border: none;
  color: ${({theme:a})=>a.colors.textSecondary};
  font-size: 28px;
  line-height: 1;
  cursor: pointer;
  padding: ${({theme:a})=>a.spacing.md};
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 ${({theme:a})=>a.borderRadius.md} 0 0;
  transition: all ${({theme:a})=>a.transitions.base};
  font-weight: 300;

  &:hover {
    color: ${({theme:a})=>a.colors.textPrimary};
    background-color: ${({theme:a})=>a.colors.bgTertiary};
  }
`,aG=({name:a,navItems:b=[{label:"Work",href:"#work"},{label:"Experience",href:"#experience"},{label:"About",href:"#about"},{label:"Contact",href:"#contact"}]})=>{let[c,d]=(0,i.useState)(!1),[e,f]=(0,i.useState)(!1);(0,i.useEffect)(()=>(c||e?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[c,e]);let g=()=>{d(!1)},j=a=>{a.preventDefault(),f(!0)},k=()=>{f(!1)};return(0,h.jsxs)(ah,{$mobileMenuActive:c,children:[(0,h.jsxs)(ai,{children:[(0,h.jsx)(aj,{href:"#",children:a}),(0,h.jsxs)(ak,{children:[(0,h.jsx)(al,{children:b.map(a=>(0,h.jsx)("li",{children:(0,h.jsx)(am,{href:a.href,children:a.label})},a.href))}),(0,h.jsx)(ay,{href:"#",onClick:j,children:"Resume"})]}),(0,h.jsxs)(an,{$isOpen:c,onClick:()=>{d(!c)},"aria-label":"Toggle menu",children:[(0,h.jsx)(ao,{$index:0,$isOpen:c}),(0,h.jsx)(ao,{$index:1,$isOpen:c}),(0,h.jsx)(ao,{$index:2,$isOpen:c})]})]}),(0,h.jsx)(ap,{$isOpen:c,onClick:a=>{a.target===a.currentTarget&&g()},children:(0,h.jsxs)(aq,{children:[(0,h.jsxs)(ar,{children:[(0,h.jsx)(as,{href:"#",onClick:g,children:a}),(0,h.jsx)(at,{onClick:g,"aria-label":"Close menu",children:"×"})]}),(0,h.jsx)(au,{}),(0,h.jsxs)(av,{children:[b.map((a,b)=>(0,h.jsx)(aw,{$index:b,children:(0,h.jsx)(ax,{href:a.href,onClick:g,children:a.label})},a.href)),(0,h.jsx)(aw,{$index:b.length,children:(0,h.jsx)(ax,{href:"#",onClick:a=>{a.preventDefault(),g(),j(a)},children:"Resume"})})]})]})}),e&&(0,h.jsx)(az,{onClick:k,children:(0,h.jsxs)(aA,{onClick:a=>a.stopPropagation(),children:[(0,h.jsx)(aB,{children:"Resume Options"}),(0,h.jsx)(aC,{children:"Choose an option:"}),(0,h.jsxs)(aD,{children:[(0,h.jsx)(aE,{onClick:()=>{window.open("/resume/cv.pdf","_blank"),f(!1)},children:"View Resume"}),(0,h.jsx)(aE,{onClick:()=>{let a=document.createElement("a");a.href="/resume/cv.pdf",a.download="Umar_Nazir_Resume.pdf",document.body.appendChild(a),a.click(),document.body.removeChild(a),f(!1)},children:"Download Resume"})]}),(0,h.jsx)(aF,{onClick:k,"aria-label":"Close modal",children:"×"})]})})]})},aH=_.default.div.withConfig({displayName:"HeroContent.styles__HeroText",componentId:"sc-5ac6c28e-0"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:a})=>a.spacing.xl};
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    gap: ${({theme:a})=>a.spacing.md};
  }
`,aI=_.default.p.withConfig({displayName:"HeroContent.styles__Subtitle",componentId:"sc-5ac6c28e-1"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyBody};
  font-size: ${({theme:a})=>a.typography.fontSize.xs};
  font-weight: ${({theme:a})=>a.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({theme:a})=>a.colors.textSecondary};
  margin: 0;
`,aJ=_.default.div.withConfig({displayName:"HeroContent.styles__Title",componentId:"sc-5ac6c28e-2"})`
  display: flex;
  flex-direction: column;
  gap: 0;
  line-height: 1;
  align-items: center;
`,aK=_.default.h2.withConfig({displayName:"HeroContent.styles__Headline",componentId:"sc-5ac6c28e-3"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyHeading};
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: ${({theme:a})=>a.typography.fontWeight.bold};
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: ${({theme:a})=>a.colors.textPrimary};
  margin: 0;
  display: block;
  width: 100%;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: ${({theme:a})=>a.typography.fontSize["4xl"]};
  }

  @media (max-width: 768px) {
    font-size: ${({theme:a})=>a.typography.fontSize["4xl"]};
    line-height: 1.3;
  }
`,aL=_.default.p.withConfig({displayName:"HeroContent.styles__Description",componentId:"sc-5ac6c28e-4"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyBody};
  max-width: 600px;
  color: ${({theme:a})=>a.colors.textSecondary};
  line-height: 1.8;
  font-size: ${({theme:a})=>a.typography.fontSize.base};
  margin: 0;
  text-align: center;

  @media (max-width: 1024px) {
    max-width: 100%;
  }

  @media (max-width: 768px) {
    margin-top: ${({theme:a})=>a.spacing.sm};
    font-size: ${({theme:a})=>a.typography.fontSize.sm};
    line-height: 1.6;
  }
`,aM=({title:a,headline:b,description:c})=>{let d=b.split("\n").filter(a=>""!==a.trim());return(0,h.jsxs)(aH,{children:[(0,h.jsx)(aI,{"data-aos":"fade-up","data-aos-delay":"0",children:a}),(0,h.jsx)(aJ,{children:d.map((a,b)=>(0,h.jsx)(aK,{"data-aos":"fade-up","data-aos-delay":`${100+100*b}`,children:a.trim()},b))}),(0,h.jsx)(aL,{"data-aos":"fade-up","data-aos-delay":"400",children:c})]})},aN=_.keyframes`
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
`,aO=_.default.div.withConfig({displayName:"ScrollIndicator.styles__ScrollIndicatorWrapper",componentId:"sc-fa897f55-0"})`
  position: absolute;
  bottom: ${({theme:a})=>a.spacing["2xl"]};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:a})=>a.spacing.sm};
  color: ${({theme:a})=>a.colors.textSecondary};
  font-size: ${({theme:a})=>a.typography.fontSize.xs};
  text-transform: uppercase;
  letter-spacing: 0.1em;

  @media (max-width: 768px) {
    bottom: ${({theme:a})=>a.spacing.md};
    font-size: 0.65rem;
  }
`,aP=_.default.div.withConfig({displayName:"ScrollIndicator.styles__ScrollLine",componentId:"sc-fa897f55-1"})`
  width: 1px;
  height: 40px;
  background-color: ${({theme:a})=>a.colors.textSecondary};
  animation: ${aN} 2s ease-in-out infinite;

  @media (max-width: 768px) {
    height: 30px;
  }
`,aQ=()=>(0,h.jsxs)(aO,{children:[(0,h.jsx)("span",{children:"SCROLL TO EXPLORE"}),(0,h.jsx)(aP,{})]}),aR=_.default.section.withConfig({displayName:"Hero.styles__StyledHero",componentId:"sc-8af8d994-0"})`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 80px;

  @media (max-width: 768px) {
    padding-top: 60px;
    min-height: 85vh;
    padding-bottom: ${({theme:a})=>a.spacing["2xl"]};
  }
`,aS=_.default.div.withConfig({displayName:"Hero.styles__HeroContentWrapper",componentId:"sc-8af8d994-1"})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${({theme:a})=>a.spacing.xl};

  @media (max-width: 768px) {
    padding: 0 ${({theme:a})=>a.spacing.xl};
  }
`,aT=({title:a,headline:b,description:c})=>(0,h.jsxs)(aR,{children:[(0,h.jsx)(aS,{children:(0,h.jsx)(aM,{title:a,headline:b,description:c})}),(0,h.jsx)(aQ,{})]});var aU=a.i(71476);let aV=a=>{let b=a.replace(/^([A-Z])|[\s-_]+(\w)/g,(a,b,c)=>c?c.toUpperCase():b.toLowerCase());return b.charAt(0).toUpperCase()+b.slice(1)},aW=(...a)=>a.filter((a,b,c)=>!!a&&""!==a.trim()&&c.indexOf(a)===b).join(" ").trim();var aX={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let aY=(0,i.forwardRef)(({color:a="currentColor",size:b=24,strokeWidth:c=2,absoluteStrokeWidth:d,className:e="",children:f,iconNode:g,...h},j)=>(0,i.createElement)("svg",{ref:j,...aX,width:b,height:b,stroke:a,strokeWidth:d?24*Number(c)/Number(b):c,className:aW("lucide",e),...!f&&!(a=>{for(let b in a)if(b.startsWith("aria-")||"role"===b||"title"===b)return!0})(h)&&{"aria-hidden":"true"},...h},[...g.map(([a,b])=>(0,i.createElement)(a,b)),...Array.isArray(f)?f:[f]])),aZ=(a,b)=>{let c=(0,i.forwardRef)(({className:c,...d},e)=>(0,i.createElement)(aY,{ref:e,iconNode:b,className:aW(`lucide-${aV(a).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${a}`,c),...d}));return c.displayName=aV(a),c},a$=aZ("corner-right-down",[["path",{d:"m10 15 5 5 5-5",key:"1hpjnr"}],["path",{d:"M4 4h7a4 4 0 0 1 4 4v12",key:"wcbgct"}]]),a_=aZ("corner-right-up",[["path",{d:"m10 9 5-5 5 5",key:"9ctzwi"}],["path",{d:"M4 20h7a4 4 0 0 0 4-4V4",key:"1plgdj"}]]),a0=_.default.button.withConfig({displayName:"Button.styles__StyledButton",componentId:"sc-d2ac6181-0"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyBody};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:a})=>a.spacing.sm};
  font-weight: ${({theme:a})=>a.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: ${({theme:a})=>a.borderRadius.sm};
  transition: all ${({theme:a})=>a.transitions.base};
  cursor: pointer;
  border: 1px solid transparent;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({$variant:a="primary"})=>{switch(a){case"primary":return _.css`
          background-color: ${({theme:a})=>a.colors.bgSecondary};
          border-color: ${({theme:a})=>a.colors.border};
          color: ${({theme:a})=>a.colors.textPrimary};

          &:hover:not(:disabled) {
            background-color: ${({theme:a})=>a.colors.bgTertiary};
            border-color: ${({theme:a})=>a.colors.textSecondary};
          }
        `;case"secondary":return _.css`
          background-color: transparent;
          border-color: ${({theme:a})=>a.colors.border};
          color: ${({theme:a})=>a.colors.textPrimary};

          &:hover:not(:disabled) {
            border-color: ${({theme:a})=>a.colors.accent};
            color: ${({theme:a})=>a.colors.accent};
          }
        `;case"accent":return _.css`
          background-color: ${({theme:a})=>a.colors.accent};
          color: ${({theme:a})=>a.colors.textPrimary};

          &:hover:not(:disabled) {
            background-color: ${({theme:a})=>a.colors.accentHover};
          }
        `}}}

  ${({$size:a="medium"})=>{switch(a){case"small":return _.css`
          padding: ${({theme:a})=>a.spacing.xs} ${({theme:a})=>a.spacing.md};
          font-size: ${({theme:a})=>a.typography.fontSize.xs};
        `;case"medium":return _.css`
          padding: ${({theme:a})=>a.spacing.sm} ${({theme:a})=>a.spacing.lg};
          font-size: ${({theme:a})=>a.typography.fontSize.sm};
        `;case"large":return _.css`
          padding: ${({theme:a})=>a.spacing.md} ${({theme:a})=>a.spacing.xl};
          font-size: ${({theme:a})=>a.typography.fontSize.base};
        `}}}

  ${({$fullWidth:a})=>a&&_.css`
      width: 100%;
    `}
`,a1=_.default.a.withConfig({displayName:"Button.styles__StyledButtonLink",componentId:"sc-d2ac6181-1"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyBody};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:a})=>a.spacing.sm};
  font-weight: ${({theme:a})=>a.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: ${({theme:a})=>a.borderRadius.sm};
  transition: all ${({theme:a})=>a.transitions.base};
  cursor: pointer;
  border: 1px solid transparent;
  text-decoration: none;

  ${({$variant:a="primary"})=>{switch(a){case"primary":return _.css`
          background-color: ${({theme:a})=>a.colors.bgSecondary};
          border-color: ${({theme:a})=>a.colors.border};
          color: ${({theme:a})=>a.colors.textPrimary};

          &:hover {
            background-color: ${({theme:a})=>a.colors.bgTertiary};
            border-color: ${({theme:a})=>a.colors.textSecondary};
          }
        `;case"secondary":return _.css`
          background-color: transparent;
          border-color: ${({theme:a})=>a.colors.border};
          color: ${({theme:a})=>a.colors.textPrimary};

          &:hover {
            border-color: ${({theme:a})=>a.colors.accent};
            color: ${({theme:a})=>a.colors.accent};
          }
        `;case"accent":return _.css`
          background-color: ${({theme:a})=>a.colors.accent};
          color: ${({theme:a})=>a.colors.textPrimary};

          &:hover {
            background-color: ${({theme:a})=>a.colors.accentHover};
          }
        `}}}

  ${({$size:a="medium"})=>{switch(a){case"small":return _.css`
          padding: ${({theme:a})=>a.spacing.xs} ${({theme:a})=>a.spacing.md};
          font-size: ${({theme:a})=>a.typography.fontSize.xs};
        `;case"medium":return _.css`
          padding: ${({theme:a})=>a.spacing.sm} ${({theme:a})=>a.spacing.lg};
          font-size: ${({theme:a})=>a.typography.fontSize.sm};
        `;case"large":return _.css`
          padding: ${({theme:a})=>a.spacing.md} ${({theme:a})=>a.spacing.xl};
          font-size: ${({theme:a})=>a.typography.fontSize.base};
        `}}}

  ${({$fullWidth:a})=>a&&_.css`
      width: 100%;
    `}
`;i.default.forwardRef(({variant:a="primary",size:b="medium",fullWidth:c=!1,icon:d,iconPosition:e="left",children:f,className:g="",as:i="button",href:j,...k},l)=>{let m=(0,h.jsxs)(h.Fragment,{children:[d&&"left"===e&&(0,h.jsx)(d,{size:16}),f,d&&"right"===e&&(0,h.jsx)(d,{size:16})]});return"a"===i&&j?(0,h.jsx)(a1,{ref:l,$variant:a,$size:b,$fullWidth:c,href:j,className:g,...k,children:m}):(0,h.jsx)(a0,{ref:l,$variant:a,$size:b,$fullWidth:c,className:g,...k,children:m})}).displayName="Button",_.default.div.withConfig({displayName:"Card.styles__StyledCard",componentId:"sc-cb91bbca-0"})`
  background-color: ${({theme:a})=>a.colors.bgSecondary};
  border: 1px solid ${({theme:a})=>a.colors.border};
  border-radius: ${({theme:a})=>a.borderRadius.md};
  padding: ${({theme:a})=>a.spacing.xl};
  transition: all ${({theme:a})=>a.transitions.base};

  &:hover {
    border-color: ${({theme:a})=>a.colors.textSecondary};
    transform: translateY(-2px);
  }

  ${({$interactive:a})=>a&&_.css`
      cursor: pointer;

      &:hover {
        border-color: ${({theme:a})=>a.colors.accent};
      }
    `}
`;let a2=_.default.span.withConfig({displayName:"Tag.styles__StyledTag",componentId:"sc-ea18aa85-0"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyBody};
  display: inline-flex;
  align-items: center;
  padding: ${({theme:a})=>a.spacing.xs} ${({theme:a})=>a.spacing.md};
  font-size: ${({theme:a})=>a.typography.fontSize.xs};
  font-weight: ${({theme:a})=>a.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: ${({theme:a})=>a.borderRadius.sm};
  background-color: ${({theme:a})=>a.colors.bgTertiary};
  color: ${({theme:a})=>a.colors.textSecondary};
  border: 1px solid ${({theme:a})=>a.colors.border};
  transition: all ${({theme:a})=>a.transitions.fast};

  &:hover {
    border-color: ${({theme:a})=>a.colors.textSecondary};
    color: ${({theme:a})=>a.colors.textPrimary};
  }
`,a3=({children:a,className:b=""})=>(0,h.jsx)(a2,{className:b,children:a}),a4=_.default.div.withConfig({displayName:"Input.styles__InputWrapper",componentId:"sc-7de3a321-0"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:a})=>a.spacing.xs};
  width: ${({$fullWidth:a=!0})=>a?"100%":"auto"};
`,a5=_.default.label.withConfig({displayName:"Input.styles__Label",componentId:"sc-7de3a321-1"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyBody};
  font-size: ${({theme:a})=>a.typography.fontSize.xs};
  font-weight: ${({theme:a})=>a.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({theme:a})=>a.colors.textSecondary};
`,a6=_.default.input.withConfig({displayName:"Input.styles__StyledInput",componentId:"sc-7de3a321-2"})`
  width: 100%;
  padding: ${({theme:a})=>a.spacing.md};
  background-color: ${({theme:a})=>a.colors.inputBg};
  border: 1px solid ${({theme:a,$error:b})=>b?"#ef4444":a.colors.inputBorder};
  border-radius: ${({theme:a})=>a.borderRadius.sm};
  color: ${({theme:a})=>a.colors.textPrimary};
  font-size: ${({theme:a})=>a.typography.fontSize.base};
  transition: all ${({theme:a})=>a.transitions.base};
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: ${({theme:a,$error:b})=>b?"#ef4444":a.colors.inputFocus};
    background-color: ${({theme:a})=>a.colors.bgTertiary};
  }

  &::placeholder {
    color: ${({theme:a})=>a.colors.textTertiary};
  }
`,a7=_.default.textarea.withConfig({displayName:"Input.styles__StyledTextarea",componentId:"sc-7de3a321-3"})`
  width: 100%;
  padding: ${({theme:a})=>a.spacing.md};
  background-color: ${({theme:a})=>a.colors.inputBg};
  border: 1px solid ${({theme:a,$error:b})=>b?"#ef4444":a.colors.inputBorder};
  border-radius: ${({theme:a})=>a.borderRadius.sm};
  color: ${({theme:a})=>a.colors.textPrimary};
  font-size: ${({theme:a})=>a.typography.fontSize.base};
  transition: all ${({theme:a})=>a.transitions.base};
  font-family: inherit;
  resize: vertical;
  min-height: 120px;

  &:focus {
    outline: none;
    border-color: ${({theme:a,$error:b})=>b?"#ef4444":a.colors.inputFocus};
    background-color: ${({theme:a})=>a.colors.bgTertiary};
  }

  &::placeholder {
    color: ${({theme:a})=>a.colors.textTertiary};
  }
`,a8=_.default.span.withConfig({displayName:"Input.styles__ErrorMessage",componentId:"sc-7de3a321-4"})`
  font-size: ${({theme:a})=>a.typography.fontSize.xs};
  color: #ef4444;
`,a9=({label:a,error:b,fullWidth:c=!0,className:d="",...e})=>(0,h.jsxs)(a4,{$fullWidth:c,children:[a&&(0,h.jsx)(a5,{children:a}),(0,h.jsx)(a6,{$error:!!b,className:d,...e}),b&&(0,h.jsx)(a8,{children:b})]}),ba=({label:a,error:b,fullWidth:c=!0,className:d="",...e})=>(0,h.jsxs)(a4,{$fullWidth:c,children:[a&&(0,h.jsx)(a5,{children:a}),(0,h.jsx)(a7,{$error:!!b,className:d,...e}),b&&(0,h.jsx)(a8,{children:b})]}),bb=_.default.p.withConfig({displayName:"Text.styles__StyledText",componentId:"sc-10b9dfea-0"})`
  margin: 0;

  ${({$variant:a="body"})=>{switch(a){case"h1":return _.css`
          font-family: ${({theme:a})=>a.typography.fontFamilyHeading};
          font-size: ${({theme:a})=>a.typography.fontSize["6xl"]};
          font-weight: ${({theme:a})=>a.typography.fontWeight.bold};
          line-height: 1.1;
          letter-spacing: -0.02em;

          @media (max-width: 768px) {
            font-size: ${({theme:a})=>a.typography.fontSize["4xl"]};
          }
        `;case"h2":return _.css`
          font-family: ${({theme:a})=>a.typography.fontFamilyHeading};
          font-size: ${({theme:a})=>a.typography.fontSize["5xl"]};
          font-weight: ${({theme:a})=>a.typography.fontWeight.bold};
          line-height: 1.2;
          letter-spacing: -0.01em;

          @media (max-width: 768px) {
            font-size: ${({theme:a})=>a.typography.fontSize["3xl"]};
          }
        `;case"h3":return _.css`
          font-family: ${({theme:a})=>a.typography.fontFamilyHeading};
          font-size: ${({theme:a})=>a.typography.fontSize["4xl"]};
          font-weight: ${({theme:a})=>a.typography.fontWeight.semibold};
          line-height: 1.3;

          @media (max-width: 768px) {
            font-size: ${({theme:a})=>a.typography.fontSize["2xl"]};
          }
        `;case"h4":return _.css`
          font-family: ${({theme:a})=>a.typography.fontFamilyHeading};
          font-size: ${({theme:a})=>a.typography.fontSize["3xl"]};
          font-weight: ${({theme:a})=>a.typography.fontWeight.semibold};
          line-height: 1.4;

          @media (max-width: 768px) {
            font-size: ${({theme:a})=>a.typography.fontSize.xl};
          }
        `;case"h5":return _.css`
          font-family: ${({theme:a})=>a.typography.fontFamilyHeading};
          font-size: ${({theme:a})=>a.typography.fontSize["2xl"]};
          font-weight: ${({theme:a})=>a.typography.fontWeight.semibold};
          line-height: 1.4;
        `;case"h6":return _.css`
          font-family: ${({theme:a})=>a.typography.fontFamilyHeading};
          font-size: ${({theme:a})=>a.typography.fontSize.xl};
          font-weight: ${({theme:a})=>a.typography.fontWeight.semibold};
          line-height: 1.5;
        `;case"body":return _.css`
          font-family: ${({theme:a})=>a.typography.fontFamilyBody};
          font-size: ${({theme:a})=>a.typography.fontSize.base};
          line-height: 1.6;
        `;case"bodyLarge":return _.css`
          font-family: ${({theme:a})=>a.typography.fontFamilyBody};
          font-size: ${({theme:a})=>a.typography.fontSize.lg};
          line-height: 1.6;
        `;case"bodySmall":return _.css`
          font-family: ${({theme:a})=>a.typography.fontFamilyBody};
          font-size: ${({theme:a})=>a.typography.fontSize.sm};
          line-height: 1.5;
        `;case"caption":return _.css`
          font-family: ${({theme:a})=>a.typography.fontFamilyBody};
          font-size: ${({theme:a})=>a.typography.fontSize.xs};
          line-height: 1.4;
        `}}}

  ${({$color:a="primary"})=>{switch(a){case"primary":return _.css`
          color: ${({theme:a})=>a.colors.textPrimary};
        `;case"secondary":return _.css`
          color: ${({theme:a})=>a.colors.textSecondary};
        `;case"tertiary":return _.css`
          color: ${({theme:a})=>a.colors.textTertiary};
        `;case"accent":return _.css`
          color: ${({theme:a})=>a.colors.accent};
        `}}}

  ${({$weight:a})=>{if(!a)return"";switch(a){case"normal":return _.css`
          font-weight: ${({theme:a})=>a.typography.fontWeight.normal};
        `;case"medium":return _.css`
          font-weight: ${({theme:a})=>a.typography.fontWeight.medium};
        `;case"semibold":return _.css`
          font-weight: ${({theme:a})=>a.typography.fontWeight.semibold};
        `;case"bold":return _.css`
          font-weight: ${({theme:a})=>a.typography.fontWeight.bold};
        `}}}
`,bc=({variant:a="body",color:b="primary",weight:c,as:d,children:e,className:f=""})=>{let g=d||("h1"===a||"h2"===a||"h3"===a||"h4"===a||"h5"===a||"h6"===a?a:"p");return(0,h.jsx)(bb,{as:g,$variant:a,$color:b,$weight:c,className:f,children:e})},bd=_.default.div.withConfig({displayName:"Container.styles__StyledContainer",componentId:"sc-ab2069fa-0"})`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${({theme:a})=>a.spacing.xl};

  @media (max-width: 768px) {
    padding: 0 ${({theme:a})=>a.spacing.lg};
  }

  @media (max-width: 640px) {
    padding: 0 ${({theme:a})=>a.spacing.md};
  }
`,be=({children:a,className:b=""})=>(0,h.jsx)(bd,{className:b,children:a}),bf=_.default.section.withConfig({displayName:"Section.styles__StyledSection",componentId:"sc-897389d1-0"})`
  padding: ${({theme:a})=>a.spacing["4xl"]} 0;
  position: relative;

  ${({$size:a="medium"})=>{switch(a){case"small":return _.css`
          padding: ${({theme:a})=>a.spacing["2xl"]} 0;

          @media (max-width: 768px) {
            padding: ${({theme:a})=>a.spacing.lg} 0;
          }
        `;case"large":return _.css`
          padding: ${({theme:a})=>a.spacing["4xl"]} 0;

          @media (max-width: 768px) {
            padding: ${({theme:a})=>a.spacing["2xl"]} 0;
          }
        `;default:return _.css`
          @media (max-width: 768px) {
            padding: ${({theme:a})=>a.spacing["2xl"]} 0;
          }
        `}}}
`,bg=({children:a,size:b="medium",className:c="",id:d})=>(0,h.jsx)(bf,{id:d,$size:b,className:c,children:a}),bh=_.default.div.withConfig({displayName:"WorkHeader.styles__WorkHeaderWrapper",componentId:"sc-45d9ae25-0"})`
  display: flex;
  align-items: center;
  gap: ${({theme:a})=>a.spacing.lg};
  margin-bottom: ${({theme:a})=>a.spacing["4xl"]};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({theme:a})=>a.spacing.sm};
    margin-bottom: ${({theme:a})=>a.spacing.xl};
  }
`,bi=_.default.span.withConfig({displayName:"WorkHeader.styles__SectionNumber",componentId:"sc-45d9ae25-1"})`
  font-size: ${({theme:a})=>a.typography.fontSize["2xl"]};
  font-weight: ${({theme:a})=>a.typography.fontWeight.bold};
  color: ${({theme:a})=>a.colors.textTertiary};
  font-family: ${({theme:a})=>a.typography.fontFamilyMono};

  @media (max-width: 768px) {
    font-size: ${({theme:a})=>a.typography.fontSize.lg};
  }
`,bj=({sectionNumber:a})=>(0,h.jsxs)(bh,{"data-aos":"fade-up",children:[(0,h.jsx)(bi,{children:a}),(0,h.jsx)(bc,{variant:"h2",children:"Work"})]});var bk=a.i(71987);let bl=aZ("external-link",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]),bm=_.default.div.withConfig({displayName:"ProjectCard.styles__ProjectCardWrapper",componentId:"sc-4b02ff16-0"})`
  display: grid;
  grid-template-columns: ${({$isReverse:a})=>a?"1.5fr 1fr":"1fr 1.5fr"};
  gap: ${({theme:a})=>a.spacing["4xl"]};
  align-items: center;
  width: 100%;
  padding: ${({theme:a})=>a.spacing["4xl"]} 0;

  &:hover .project-title {
    color: #60a5fa;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: ${({theme:a})=>a.spacing["2xl"]};
    padding: ${({theme:a})=>a.spacing["2xl"]} 0;
  }
`,bn=_.default.div.withConfig({displayName:"ProjectCard.styles__ProjectInfo",componentId:"sc-4b02ff16-1"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:a})=>a.spacing.md};
  max-width: 100%;
  order: ${({$isReverse:a})=>a?2:1};

  @media (max-width: 1024px) {
    order: 2;
  }
`,bo=_.default.span.withConfig({displayName:"ProjectCard.styles__ProjectNumber",componentId:"sc-4b02ff16-2"})`
  font-size: ${({theme:a})=>a.typography.fontSize.xl};
  font-weight: ${({theme:a})=>a.typography.fontWeight.bold};
  color: ${({theme:a})=>a.colors.textTertiary};
  font-family: ${({theme:a})=>a.typography.fontFamilyMono};
  line-height: 1;
`,bp=_.default.div.withConfig({displayName:"ProjectCard.styles__ProjectMeta",componentId:"sc-4b02ff16-3"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyBody};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:a})=>a.spacing.md};
  font-size: ${({theme:a})=>a.typography.fontSize.xs};
  color: ${({theme:a})=>a.colors.textTertiary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,bq=_.default.div.withConfig({displayName:"ProjectCard.styles__ProjectMetaLeft",componentId:"sc-4b02ff16-4"})`
  display: flex;
  align-items: center;
  gap: ${({theme:a})=>a.spacing.md};
`,br=_.default.span.withConfig({displayName:"ProjectCard.styles__ProjectYear",componentId:"sc-4b02ff16-5"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyMono};
`,bs=_.default.span.withConfig({displayName:"ProjectCard.styles__ProjectCategory",componentId:"sc-4b02ff16-6"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyBody};
  color: ${({theme:a})=>a.colors.textSecondary};
`,bt=_.default.div.withConfig({displayName:"ProjectCard.styles__ProjectTitleWrapper",componentId:"sc-4b02ff16-7"})``,bu=_.default.span.withConfig({displayName:"ProjectCard.styles__ProjectTitle",componentId:"sc-4b02ff16-8"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyHeading};
  color: ${({theme:a})=>a.colors.textPrimary};
  transition: color ${({theme:a})=>a.transitions.base};
  cursor: pointer;
  display: block;
`,bv=_.default.span.withConfig({displayName:"ProjectCard.styles__ProjectDescription",componentId:"sc-4b02ff16-9"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyBody};
  color: ${({theme:a})=>a.colors.textSecondary};
  line-height: 1.8;
`,bw=_.default.div.withConfig({displayName:"ProjectCard.styles__ProjectTags",componentId:"sc-4b02ff16-10"})`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:a})=>a.spacing.sm};
  margin-top: ${({theme:a})=>a.spacing.sm};
`,bx=_.default.a.withConfig({displayName:"ProjectCard.styles__ProjectLink",componentId:"sc-4b02ff16-11"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyBody};
  display: inline-flex;
  align-items: center;
  gap: ${({theme:a})=>a.spacing.xs};
  color: ${({theme:a})=>a.colors.accent};
  font-size: ${({theme:a})=>a.typography.fontSize.sm};
  font-weight: ${({theme:a})=>a.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: ${({theme:a})=>a.spacing.md};
  transition: gap ${({theme:a})=>a.transitions.base};

  &:hover {
    gap: ${({theme:a})=>a.spacing.sm};
  }
`,by=_.default.div.withConfig({displayName:"ProjectCard.styles__ProjectVisual",componentId:"sc-4b02ff16-12"})`
  width: 100%;
  height: 400px;
  border-radius: ${({theme:a})=>a.borderRadius.md};
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  order: ${({$isReverse:a})=>a?1:2};

  @media (max-width: 1024px) {
    height: 350px;
    order: 1;
  }

  @media (max-width: 768px) {
    height: 280px;
  }
`;_.default.div.withConfig({displayName:"ProjectCard.styles__ProjectVisualImg",componentId:"sc-4b02ff16-13"})`
  border-radius: ${({theme:a})=>a.borderRadius.md};
`;let bz=({project:a,index:b})=>{let[c,d]=(0,i.useState)(!1);(0,i.useEffect)(()=>{let a=()=>{d(window.innerWidth<=1024)};return a(),window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[]);let e=b%2==1;return(0,h.jsxs)(bm,{$isReverse:e,...c?{}:{"data-aos":b%2==0?"fade-right":"fade-left","data-aos-delay":100*b},className:"project-card-wrapper",children:[(0,h.jsxs)(bn,{$isReverse:e,children:[(0,h.jsx)(bc,{variant:"h4",as:"span",children:(0,h.jsx)(bo,{children:a.number})}),(0,h.jsx)(bp,{children:(0,h.jsxs)(bq,{children:[(0,h.jsx)(br,{children:a.year}),(0,h.jsx)("span",{children:"•"}),(0,h.jsx)(bs,{children:a.category})]})}),(0,h.jsx)(bt,{children:(0,h.jsx)(bc,{variant:"h3",as:"span",children:(0,h.jsx)(bu,{className:"project-title",children:a.title})})}),(0,h.jsx)(bc,{variant:"body",color:"secondary",as:"span",children:(0,h.jsx)(bv,{children:a.description})}),(0,h.jsx)(bw,{children:a.tags.map(a=>(0,h.jsx)(a3,{children:a},a))}),a.link&&(0,h.jsxs)(bx,{href:a.link,target:"_blank",rel:"noopener noreferrer",children:["Live Link",(0,h.jsx)(bl,{size:16})]})]}),(0,h.jsx)(by,{$isReverse:e,children:(0,h.jsx)(bk.default,{src:a.imageLink||"/images/ml-jobs.png",alt:a.title,fill:!0,style:{objectFit:"cover",borderRadius:"0.5rem"}})})]})},bA=_.default.div.withConfig({displayName:"Work.styles__StyledWork",componentId:"sc-afd42b7-0"})`
  position: relative;
`,bB=_.default.div.withConfig({displayName:"Work.styles__ProjectsList",componentId:"sc-afd42b7-1"})`
  display: flex;
  flex-direction: column;
  gap: 0;
`,bC=_.default.div.withConfig({displayName:"Work.styles__ViewAllButtonContainer",componentId:"sc-afd42b7-2"})`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: ${({theme:a})=>a.spacing.md};
  padding-top: ${({theme:a})=>a.spacing.md};
  width: 100%;

  @media (max-width: 768px) {
    margin-top: ${({theme:a})=>a.spacing.sm};
    padding-top: ${({theme:a})=>a.spacing.sm};
  }
`,bD=_.default.button.withConfig({displayName:"Work.styles__ViewAllButton",componentId:"sc-afd42b7-3"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyBody};
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${({theme:a})=>a.colors.textPrimary};
  color: ${({theme:a})=>a.colors.textPrimary};
  padding: ${({theme:a})=>a.spacing.xs} 0;
  font-size: ${({theme:a})=>a.typography.fontSize.sm};
  font-weight: ${({theme:a})=>a.typography.fontWeight.normal};
  text-transform: none;
  letter-spacing: 0;
  border-radius: 0;
  transition: all ${({theme:a})=>a.transitions.base};
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: ${({theme:a})=>a.spacing.xs};

  &:hover {
    opacity: 0.8;
  }

  svg {
    transition: transform ${({theme:a})=>a.transitions.base};
  }

  &:hover svg {
    transform: translateX(4px);
  }

  @media (max-width: 768px) {
    font-size: ${({theme:a})=>a.typography.fontSize.xs};
    padding: ${({theme:a})=>a.spacing.xs} 0;
  }
`,bE=({sectionNumber:a="01",projects:b})=>{let[c,d]=(0,i.useState)(!1),e=c?b:b.slice(0,5),f=b.length>5;return(0,i.useEffect)(()=>{aU.default.refresh()},[c]),(0,h.jsx)(bg,{id:"work",children:(0,h.jsx)(be,{children:(0,h.jsxs)(bA,{children:[(0,h.jsx)(bj,{sectionNumber:a}),(0,h.jsx)(bB,{children:e.map((a,b)=>(0,h.jsx)(bz,{project:a,index:b},a.id))}),f&&(0,h.jsx)(bC,{children:c?(0,h.jsxs)(bD,{onClick:()=>{d(!1);let a=document.getElementById("work");a&&a.scrollIntoView({behavior:"smooth",block:"start"})},children:["Show Less",(0,h.jsx)(a_,{size:14})]}):(0,h.jsxs)(bD,{onClick:()=>{d(!0)},children:["View All Projects",(0,h.jsx)(a$,{size:14})]})})]})})})},bF=_.default.div.withConfig({displayName:"ExperienceHeader.styles__SectionHeader",componentId:"sc-502ea126-0"})`
  display: flex;
  align-items: center;
  gap: ${({theme:a})=>a.spacing.lg};
  margin-bottom: ${({theme:a})=>a.spacing["4xl"]};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({theme:a})=>a.spacing.md};
  }
`,bG=_.default.span.withConfig({displayName:"ExperienceHeader.styles__SectionNumber",componentId:"sc-502ea126-1"})`
  font-size: ${({theme:a})=>a.typography.fontSize["2xl"]};
  font-weight: ${({theme:a})=>a.typography.fontWeight.bold};
  color: ${({theme:a})=>a.colors.textTertiary};
  font-family: ${({theme:a})=>a.typography.fontFamilyMono};
`,bH=({sectionNumber:a})=>(0,h.jsxs)(bF,{"data-aos":"fade-up",children:[(0,h.jsx)(bG,{children:a}),(0,h.jsx)(bc,{variant:"h2",children:"Experience"})]}),bI=aZ("arrow-right",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),bJ=_.default.div.withConfig({displayName:"ExperienceCard.styles__TimelineItem",componentId:"sc-692b517d-0"})`
  position: relative;
  padding-left: ${({theme:a})=>a.spacing.xl};

  @media (max-width: 768px) {
    padding-left: ${({theme:a})=>a.spacing.sm};
  }
`,bK=_.default.div.withConfig({displayName:"ExperienceCard.styles__TimelineDotWrapper",componentId:"sc-692b517d-1"})`
  position: absolute;
  left: calc(-1 * ${({theme:a})=>a.spacing["4xl"]} - ${({theme:a})=>a.spacing.xl} + 1px - 16px);
  top: 12px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  ${bJ}:hover & {
    transform: scale(1.15);
  }

  @media (max-width: 768px) {
    left: calc(-1 * ${({theme:a})=>a.spacing.xl} - ${({theme:a})=>a.spacing.sm} + 1px - 12px);
    top: 10px;
    width: 24px;
    height: 24px;
  }
`,bL=_.default.div.withConfig({displayName:"ExperienceCard.styles__TimelineDotOuter",componentId:"sc-692b517d-2"})`
  position: absolute;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: transparent;
  border: 2px solid ${({theme:a})=>a.colors.accent};
  z-index: 1;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  ${bJ}:hover & {
    border-color: ${({theme:a})=>a.colors.accentHover};
    transform: scale(1.1);
    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.2);
  }

  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
    border-width: 1.5px;
  }
`,bM=_.default.div.withConfig({displayName:"ExperienceCard.styles__TimelineDot",componentId:"sc-692b517d-3"})`
  position: relative;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({theme:a})=>a.colors.textPrimary};
  z-index: 2;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  ${bJ}:hover & {
    transform: scale(1.15);
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 768px) {
    width: 12px;
    height: 12px;
  }
`,bN=_.default.div.withConfig({displayName:"ExperienceCard.styles__StyledExperienceCard",componentId:"sc-692b517d-4"})`
  background-color: ${({theme:a})=>a.colors.bgSecondary};
  border: 1px solid ${({theme:a})=>a.colors.border};
  border-radius: ${({theme:a})=>a.borderRadius.md};
  padding: ${({theme:a})=>a.spacing.xl};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  width: 100%;
  max-width: 100%;
  cursor: pointer;

  ${bJ}:hover & {
    border-color: ${({theme:a})=>a.colors.accent};
    transform: translateX(8px);
    box-shadow: 0 4px 24px rgba(59, 130, 246, 0.15);
  }

  @media (max-width: 768px) {
    padding: ${({theme:a})=>a.spacing.md};
    border-radius: ${({theme:a})=>a.borderRadius.sm};

    ${bJ}:hover & {
      transform: translateX(4px);
      box-shadow: 0 2px 12px rgba(59, 130, 246, 0.12);
    }
  }
`,bO=_.default.div.withConfig({displayName:"ExperienceCard.styles__CardHeader",componentId:"sc-692b517d-5"})`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  margin-bottom: ${({theme:a})=>a.spacing.sm};
  width: 100%;

  @media (max-width: 768px) {
    justify-content: flex-start;
    margin-bottom: ${({theme:a})=>a.spacing.xs};
  }
`,bP=_.default.div.withConfig({displayName:"ExperienceCard.styles__CardHeaderLeft",componentId:"sc-692b517d-6"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:a})=>a.spacing.xs};
  width: 100%;
  margin-bottom: ${({theme:a})=>a.spacing.md};

  @media (max-width: 768px) {
    gap: ${({theme:a})=>a.spacing.xs};
    margin-bottom: ${({theme:a})=>a.spacing.sm};
  }
`,bQ=_.default.span.withConfig({displayName:"ExperienceCard.styles__CompanyName",componentId:"sc-692b517d-7"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyHeading};
  color: ${({theme:a})=>a.colors.textPrimary};
  line-height: 1.2;
  transition: color 0.3s ease;
  display: block;

  ${bN}:hover & {
    color: #e0e7ff;
  }
`,bR=_.default.span.withConfig({displayName:"ExperienceCard.styles__Role",componentId:"sc-692b517d-8"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyHeading};
  color: ${({theme:a})=>a.colors.textPrimary};
  line-height: 1.3;
  transition: color 0.3s ease;
  display: block;

  ${bN}:hover & {
    color: #60a5fa;
  }
`,bS=_.default.span.withConfig({displayName:"ExperienceCard.styles__LocationType",componentId:"sc-692b517d-9"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyBody};
  font-size: ${({theme:a})=>a.typography.fontSize.sm};
  color: ${({theme:a})=>a.colors.textTertiary};
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: ${({theme:a})=>a.typography.fontSize.xs};
    line-height: 1.4;
  }
`,bT=_.default.span.withConfig({displayName:"ExperienceCard.styles__DateLocation",componentId:"sc-692b517d-10"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyBody};
  font-size: ${({theme:a})=>a.typography.fontSize.sm};
  color: ${({theme:a})=>a.colors.textTertiary};
  text-align: right;
  white-space: nowrap;
  flex-shrink: 0;
  display: block;
  margin-bottom: ${({theme:a})=>a.spacing.sm};

  @media (max-width: 768px) {
    text-align: left;
    font-size: ${({theme:a})=>a.typography.fontSize.xs};
    white-space: normal;
    margin-bottom: ${({theme:a})=>a.spacing.xs};
  }
`,bU=_.default.span.withConfig({displayName:"ExperienceCard.styles__ExperienceDescription",componentId:"sc-692b517d-11"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyBody};
  color: ${({theme:a})=>a.colors.textSecondary};
  line-height: 1.8;
  margin-bottom: ${({theme:a})=>a.spacing.md};
  transition: color 0.3s ease;
  display: block;

  ${bN}:hover & {
    color: #e0e7ff;
  }

  @media (max-width: 768px) {
    font-size: ${({theme:a})=>a.typography.fontSize.sm};
    line-height: 1.6;
    margin-bottom: ${({theme:a})=>a.spacing.sm};
  }
`,bV=_.default.ul.withConfig({displayName:"ExperienceCard.styles__ExperienceList",componentId:"sc-692b517d-12"})`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${({theme:a})=>a.spacing.sm};
  margin-bottom: ${({theme:a})=>a.spacing.md};

  @media (max-width: 768px) {
    gap: ${({theme:a})=>a.spacing.xs};
    margin-bottom: ${({theme:a})=>a.spacing.sm};
  }
`,bW=_.default.li.withConfig({displayName:"ExperienceCard.styles__ExperienceListItem",componentId:"sc-692b517d-13"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyBody};
  display: flex;
  align-items: flex-start;
  gap: ${({theme:a})=>a.spacing.sm};
  color: ${({theme:a})=>a.colors.textSecondary};
  line-height: 1.8;
  transition: color 0.3s ease;

  ${bN}:hover & {
    color: #e0e7ff;
  }

  @media (max-width: 768px) {
    font-size: ${({theme:a})=>a.typography.fontSize.sm};
    line-height: 1.6;
    gap: ${({theme:a})=>a.spacing.xs};
  }
`,bX=_.default.span.withConfig({displayName:"ExperienceCard.styles__ExperienceListArrow",componentId:"sc-692b517d-14"})`
  color: ${({theme:a})=>a.colors.accent};
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
`,bY=_.default.div.withConfig({displayName:"ExperienceCard.styles__ExperienceTags",componentId:"sc-692b517d-15"})`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:a})=>a.spacing.sm};
  margin-top: ${({theme:a})=>a.spacing.sm};

  @media (max-width: 768px) {
    gap: ${({theme:a})=>a.spacing.xs};
    margin-top: ${({theme:a})=>a.spacing.xs};
  }
`,bZ=({experience:a,index:b})=>(0,h.jsxs)(bJ,{"data-aos":"fade-up","data-aos-delay":150*b,children:[(0,h.jsxs)(bK,{children:[(0,h.jsx)(bL,{}),(0,h.jsx)(bM,{})]}),(0,h.jsxs)(bN,{children:[(0,h.jsx)(bO,{children:(0,h.jsx)(bT,{children:a.date})}),(0,h.jsxs)(bP,{children:[(0,h.jsx)(bc,{variant:"h4",as:"span",children:(0,h.jsx)(bQ,{children:a.company})}),(0,h.jsx)(bc,{variant:"h5",as:"span",children:(0,h.jsx)(bR,{children:a.role})}),(0,h.jsx)(bc,{variant:"bodySmall",color:"tertiary",as:"span",children:(0,h.jsxs)(bS,{children:[a.location," • ",a.type]})})]}),(0,h.jsx)(bc,{variant:"body",color:"secondary",as:"span",children:(0,h.jsx)(bU,{children:a.description})}),(0,h.jsx)(bV,{children:a.responsibilities.map((a,b)=>(0,h.jsxs)(bW,{children:[(0,h.jsx)(bX,{children:(0,h.jsx)(bI,{size:16})}),(0,h.jsx)("span",{children:a})]},b))}),(0,h.jsx)(bY,{children:a.tags.map(a=>(0,h.jsx)(a3,{children:a},a))})]})]}),b$=_.default.div.withConfig({displayName:"Experience.styles__StyledExperience",componentId:"sc-bdd512cd-0"})`
  position: relative;
`,b_=_.default.div.withConfig({displayName:"Experience.styles__Timeline",componentId:"sc-bdd512cd-1"})`
  position: relative;
  padding-left: ${({theme:a})=>a.spacing["6xl"]};

  @media (max-width: 768px) {
    padding-left: ${({theme:a})=>a.spacing.xxl};
  }
`,b0=_.default.div.withConfig({displayName:"Experience.styles__TimelineLine",componentId:"sc-bdd512cd-2"})`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: ${({theme:a})=>a.colors.accent};
`,b1=_.default.div.withConfig({displayName:"Experience.styles__TimelineItems",componentId:"sc-bdd512cd-3"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:a})=>a.spacing["4xl"]};

  @media (max-width: 768px) {
    gap: ${({theme:a})=>a.spacing.xl};
  }
`;_.default.hr.withConfig({displayName:"Experience.styles__ExperienceDivider",componentId:"sc-bdd512cd-4"})`
  border: none;
  border-top: 1px solid ${({theme:a})=>a.colors.border};
  margin: 0;
  width: 100%;
`;let b2=({sectionNumber:a="02",experiences:b})=>(0,h.jsx)(bg,{id:"experience",children:(0,h.jsx)(be,{children:(0,h.jsxs)(b$,{children:[(0,h.jsx)(bH,{sectionNumber:a}),(0,h.jsxs)(b_,{children:[(0,h.jsx)(b0,{}),(0,h.jsx)(b1,{children:b.map((a,b)=>(0,h.jsx)(bZ,{experience:a,index:b},a.id))})]})]})})}),b3=_.default.div.withConfig({displayName:"AboutHeader.styles__AboutHeaderWrapper",componentId:"sc-34ec8c66-0"})`
  display: flex;
  align-items: center;
  gap: ${({theme:a})=>a.spacing.lg};
  margin-bottom: ${({theme:a})=>a.spacing.lg};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({theme:a})=>a.spacing.md};
  }
`,b4=_.default.span.withConfig({displayName:"AboutHeader.styles__SectionNumber",componentId:"sc-34ec8c66-1"})`
  font-size: ${({theme:a})=>a.typography.fontSize["4xl"]};
  font-weight: ${({theme:a})=>a.typography.fontWeight.bold};
  color: ${({theme:a})=>a.colors.textTertiary};
  font-family: ${({theme:a})=>a.typography.fontFamilyMono};
`,b5=({sectionNumber:a})=>(0,h.jsxs)(b3,{"data-aos":"fade-up",children:[(0,h.jsx)(b4,{children:a}),(0,h.jsx)(bc,{variant:"h2",children:"About"})]}),b6=_.default.div.withConfig({displayName:"AboutContent.styles__AboutDescription",componentId:"sc-c102d131-0"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyBody};
  color: ${({theme:a})=>a.colors.textSecondary};
  line-height: 1.8;

  p {
    margin-bottom: ${({theme:a})=>a.spacing.md};
    font-size: ${({theme:a})=>a.typography.fontSize.base};
  }

  p:last-child {
    margin-bottom: 0;
  }
`,b7=({content:a})=>(0,h.jsx)(b6,{"data-aos":"fade-right","data-aos-delay":"200",children:"string"==typeof a?a.split("\n\n").map((a,b)=>(0,h.jsx)(bc,{variant:"bodyLarge",color:"secondary",children:a},b)):a}),b8=_.default.div.withConfig({displayName:"About.styles__StyledAbout",componentId:"sc-e1b29e4a-0"})`
  position: relative;
`,b9=_.default.div.withConfig({displayName:"About.styles__AboutContent",componentId:"sc-e1b29e4a-1"})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({theme:a})=>a.spacing["4xl"]};
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: ${({theme:a})=>a.spacing["2xl"]};
  }
`,ca=_.default.div.withConfig({displayName:"About.styles__AboutText",componentId:"sc-e1b29e4a-2"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:a})=>a.spacing.lg};
`,cb=_.default.div.withConfig({displayName:"About.styles__AboutVisual",componentId:"sc-e1b29e4a-3"})`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 1024px) {
    order: -1;
  }
`,cc=_.default.div.withConfig({displayName:"About.styles__AboutImage",componentId:"sc-e1b29e4a-4"})`
  width: 100%;
  max-width: 500px;
  height: 600px;
  border-radius: ${({theme:a})=>a.borderRadius.lg};
  position: relative;
  overflow: hidden;

  @media (max-width: 1024px) {
    max-width: 100%;
    height: 400px;
  }
`,cd=_.default.hr.withConfig({displayName:"About.styles__AboutDivider",componentId:"sc-e1b29e4a-5"})`
  border: none;
  border-top: 1px solid ${({theme:a})=>a.colors.border};
  margin: 0;
  width: 100%;
`,ce=({sectionNumber:a="03",content:b})=>{let[c,d]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{let a=()=>{d(window.innerWidth<=1024)};return a(),window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(bg,{id:"about",children:(0,h.jsx)(be,{children:(0,h.jsx)(b8,{children:(0,h.jsxs)(b9,{children:[(0,h.jsxs)(ca,{children:[(0,h.jsx)(b5,{sectionNumber:a}),(0,h.jsx)(b7,{content:b})]}),(0,h.jsx)(cb,{...c?{}:{"data-aos":"fade-left","data-aos-delay":300},children:(0,h.jsx)(cc,{children:(0,h.jsx)(bk.default,{src:"/images/me.png",alt:"Profile photo",fill:!0,style:{objectFit:"cover",borderRadius:"1rem"}})})})]})})})}),(0,h.jsx)(cd,{})]})},cf=_.default.div.withConfig({displayName:"TechStack.styles__StyledTechStack",componentId:"sc-a293df8e-0"})`
  position: relative;
  background-color: ${({theme:a})=>a.colors.bgPrimary};
  min-height: 100vh;
  padding: ${({theme:a})=>a.spacing["4xl"]} 0;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    padding: ${({theme:a})=>a.spacing["3xl"]} 0;
    min-height: 100vh;
  }
`,cg=_.default.div.withConfig({displayName:"TechStack.styles__TechStackContainer",componentId:"sc-a293df8e-1"})`
  width: 100%;
`,ch=_.default.div.withConfig({displayName:"TechStack.styles__TechStackWrapper",componentId:"sc-a293df8e-2"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:a})=>a.spacing["4xl"]};
  width: 100%;

  @media (max-width: 768px) {
    gap: ${({theme:a})=>a.spacing.xl};
  }
`,ci=_.default.h2.withConfig({displayName:"TechStack.styles__TechStackTitle",componentId:"sc-a293df8e-3"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyHeading};
  font-size: ${({theme:a})=>a.typography.fontSize["4xl"]};
  font-weight: ${({theme:a})=>a.typography.fontWeight.bold};
  color: ${({theme:a})=>a.colors.textPrimary};
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0;

  @media (max-width: 768px) {
    font-size: ${({theme:a})=>a.typography.fontSize["2xl"]};
    letter-spacing: 0.05em;
    line-height: 1.5;
  }
`,cj=_.default.div.withConfig({displayName:"TechStack.styles__TechStackGrid",componentId:"sc-a293df8e-4"})`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: ${({theme:a})=>a.spacing.xl};
  width: 100%;
  max-width: 1200px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: ${({theme:a})=>a.spacing.lg};
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
    gap: ${({theme:a})=>a.spacing.lg};
  }
`,ck=_.default.div.withConfig({displayName:"TechStack.styles__TechItem",componentId:"sc-a293df8e-5"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({theme:a})=>a.spacing.sm};
  transition: all ${({theme:a})=>a.transitions.base};
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
  }

  &:hover svg {
    opacity: 0.8;
  }
`,cl=_.default.div.withConfig({displayName:"TechStack.styles__TechIcon",componentId:"sc-a293df8e-6"})`
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:a})=>a.spacing.xs};

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
`,cm=_.default.span.withConfig({displayName:"TechStack.styles__TechName",componentId:"sc-a293df8e-7"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyBody};
  font-size: ${({theme:a})=>a.typography.fontSize.xs};
  font-weight: ${({theme:a})=>a.typography.fontWeight.medium};
  color: ${({theme:a})=>a.colors.textSecondary};
  text-align: center;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`,cn=_.default.hr.withConfig({displayName:"TechStack.styles__TechStackDivider",componentId:"sc-a293df8e-8"})`
  border: none;
  border-top: 1px solid ${({theme:a})=>a.colors.border};
  margin: 0;
  width: 100%;
`,co=[{name:"HTML",icon:(0,h.jsx)(function(){return(0,h.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,h.jsx)("path",{d:"M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z",fill:"#E44D26"}),(0,h.jsx)("path",{d:"M64 116.8l36.378-10.086 8.559-95.878H64z",fill:"#F16529"}),(0,h.jsx)("path",{d:"M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 40.02l-.061.017-12.629-3.433-.807-9.04H38.896l1.585 17.759 23.256 6.453.063-.017z",fill:"#EBEBEB"}),(0,h.jsx)("path",{d:"M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l23.259-6.439.206-2.325 3.233-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z",fill:"#fff"})]})},{}),category:"Programming Languages"},{name:"CSS",icon:(0,h.jsx)(function(){return(0,h.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,h.jsx)("path",{d:"M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z",fill:"#1572B6"}),(0,h.jsx)("path",{d:"M64.001 117.062l36.559-10.141 8.601-96.354H64.001v106.495z",fill:"#33A9DC"}),(0,h.jsx)("path",{d:"M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429zm0 64.785l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.312 7.851.063-.018z",fill:"#fff"}),(0,h.jsx)("path",{d:"M63.944 51.431v13.967h30.326l-.281 3.154-.631 7.112-.331 3.716h-29.083V93.45h17.096l-.969 10.849-16.127 4.354v14.234l28.369-7.863.207-2.325 2.424-27.171.256-2.824.178-1.992 1.297-14.536.167-1.876z",fill:"#EBEBEB"})]})},{}),category:"Programming Languages"},{name:"JavaScript",icon:(0,h.jsx)(function(){return(0,h.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,h.jsx)("path",{fill:"#F0DB4F",d:"M1.408 1.408h125.184v125.185H1.408z"}),(0,h.jsx)("path",{fill:"#323330",d:"M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.402-3.498 9.163-5.81-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-1.499-6.592-3.308-9.139-6.948l-9.507 5.498c1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"})]})},{}),category:"Programming Languages"},{name:"TypeScript",icon:(0,h.jsx)(function(){return(0,h.jsx)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,h.jsx)("path",{d:"M1.125 0C.502 0 0 .502 0 1.125v125.75c0 .623.502 1.125 1.125 1.125h125.75c.623 0 1.125-.502 1.125-1.125V1.125C128 .502 127.498 0 126.875 0zm17.113 113.752H14.834V47.717H9.552V34.895h26.375v12.822h-5.282v66.035zm34.642-60.184c0-6.314-2.577-10.585-7.732-12.81 2.791-1.396 4.939-3.215 6.446-5.458 1.506-2.243 2.259-4.886 2.259-7.93 0-.78-.063-1.626-.188-2.537-.126-.911-.346-1.929-.66-3.056-.314-1.126-.754-2.435-1.32-3.926-.565-1.492-1.308-3.227-2.229-5.207l-8.45 3.563c.783 1.776 1.389 3.354 1.815 4.733.427 1.38.739 2.696.935 3.95.196 1.252.294 2.478.294 3.674 0 2.405-.466 4.422-1.397 6.052-.932 1.629-2.199 2.681-3.8 3.156v.188c2.199.469 3.856 1.624 4.971 3.465 1.115 1.84 1.673 4.286 1.673 7.337v30.295h-10.738zm52.071 28.46c-1.724 4.053-3.923 7.15-6.597 9.29-2.674 2.141-6.084 3.211-10.229 3.211-2.821 0-5.213-.536-7.176-1.608-1.963-1.072-3.465-2.451-4.506-4.138-1.041-1.687-1.562-3.508-1.562-5.463 0-2.029.467-3.756 1.402-5.18.935-1.425 2.35-2.638 4.246-3.64 1.895-1.001 4.278-1.869 7.149-2.602 2.871-.733 6.24-1.465 10.106-2.196 3.866-.731 7.885-1.669 12.058-2.813v-3.38c0-4.84-1.077-8.277-3.23-10.311-2.155-2.033-5.573-3.05-10.255-3.05-4.624 0-9.547 1.168-14.769 3.506l-3.38-8.826c2.784-1.334 5.872-2.387 9.264-3.156 3.392-.769 6.978-1.154 10.756-1.154 4.996 0 9.194.886 12.594 2.658 3.4 1.772 5.918 4.293 7.556 7.563 1.637 3.27 2.456 7.149 2.456 11.637v44.171h-10.737z",fill:"#007ACC"})})},{}),category:"Programming Languages"},{name:"React",icon:(0,h.jsx)(function(){return(0,h.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,h.jsx)("circle",{cx:"64",cy:"64",r:"11.4",fill:"#61DAFB"}),(0,h.jsx)("path",{d:"M64 19.2c-18.2 0-36.4 3.6-50.1 10.8-6.8 3.6-12 8.4-15.6 14.4-3.6 6-5.4 13.2-5.4 20.4s1.8 14.4 5.4 20.4c3.6 6 8.8 10.8 15.6 14.4 13.7 7.2 31.9 10.8 50.1 10.8s36.4-3.6 50.1-10.8c6.8-3.6 12-8.4 15.6-14.4 3.6-6 5.4-13.2 5.4-20.4s-1.8-14.4-5.4-20.4c-3.6-6-8.8-10.8-15.6-14.4C100.4 22.8 82.2 19.2 64 19.2z",stroke:"#61DAFB",strokeWidth:"2.4",fill:"none"}),(0,h.jsx)("ellipse",{cx:"64",cy:"64",rx:"64",ry:"11.4",stroke:"#61DAFB",strokeWidth:"2.4",fill:"none",transform:"rotate(-60 64 64)"}),(0,h.jsx)("ellipse",{cx:"64",cy:"64",rx:"64",ry:"11.4",stroke:"#61DAFB",strokeWidth:"2.4",fill:"none",transform:"rotate(60 64 64)"})]})},{}),category:"Frameworks & Libraries"},{name:"Next.js",icon:(0,h.jsx)(function(){return(0,h.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,h.jsx)("path",{d:"M64 0L123.712 106.667H4.288L64 0z",fill:"#000"}),(0,h.jsx)("path",{d:"M64 64l45.238 78H18.762L64 64z",fill:"none",stroke:"#fff",strokeWidth:"8"}),(0,h.jsx)("path",{d:"M84 64l20 34.667H64V64h20z",fill:"#fff"})]})},{}),category:"Frameworks & Libraries"},{name:"Node.js",icon:(0,h.jsx)(function(){return(0,h.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,h.jsx)("circle",{cx:"64",cy:"64",r:"60",fill:"#83CD29"}),(0,h.jsx)("path",{d:"M64 20c24.3 0 44 19.7 44 44s-19.7 44-44 44-44-19.7-44-44 19.7-44 44-44z",fill:"#3E863D"}),(0,h.jsx)("text",{x:"64",y:"75",fontSize:"36",fontWeight:"bold",fill:"#fff",textAnchor:"middle",fontFamily:"Arial",children:"N"})]})},{}),category:"Frameworks & Libraries"},{name:"Tailwind CSS",icon:(0,h.jsx)(function(){return(0,h.jsx)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,h.jsx)("path",{d:"M64 32c-17 0-27 8.5-30 25.5 6-8.5 13-11.7 21-9.6 4.6 1.1 7.9 4.3 11.6 7.9 5.7 5.7 12.3 12.3 26.4 12.3 17 0 27-8.5 30-25.5-6 8.5-13 11.7-21 9.6-4.6-1.1-7.9-4.3-11.6-7.9C82.1 44.3 75.5 32 64 32zm-30 39c-17 0-27 8.5-30 25.5 6-8.5 13-11.7 21-9.6 4.6 1.1 7.9 4.3 11.6 7.9 5.7 5.7 12.3 12.3 26.4 12.3 17 0 27-8.5 30-25.5-6 8.5-13 11.7-21 9.6-4.6-1.1-7.9-4.3-11.6-7.9C52.1 83.3 45.5 71 34 71z",fill:"#38BDF8"})})},{}),category:"Frameworks & Libraries"},{name:"Bootstrap",icon:(0,h.jsx)(function(){return(0,h.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,h.jsx)("path",{d:"M28.589 18.993h70.823c5.302 0 9.588 4.295 9.588 9.588v70.823c0 5.302-4.286 9.588-9.588 9.588H28.589c-5.293 0-9.588-4.286-9.588-9.588V28.581c0-5.293 4.295-9.588 9.588-9.588z",fill:"#7952B3"}),(0,h.jsx)("path",{d:"M64 32c8.837 0 16 7.163 16 16v8c5.523 0 10 4.477 10 10s-4.477 10-10 10v10c8.837 0 16 7.163 16 16s-7.163 16-16 16H48c-8.837 0-16-7.163-16-16V48c0-8.837 7.163-16 16-16h16zm-8 16v16h8c2.209 0 4-1.791 4-4s-1.791-4-4-4h-8zm8 32v16h8c2.209 0 4-1.791 4-4s-1.791-4-4-4h-8z",fill:"#fff"})]})},{}),category:"Frameworks & Libraries"},{name:"Styled Components",icon:(0,h.jsx)(function(){return(0,h.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,h.jsx)("circle",{cx:"64",cy:"64",r:"60",fill:"#DB7093"}),(0,h.jsx)("path",{d:"M64 20L84 44H64V64h28v20H44V64h20V44H44L64 20z",fill:"#fff"})]})},{}),category:"Frameworks & Libraries"},{name:"Styled System",icon:(0,h.jsx)(function(){return(0,h.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,h.jsx)("rect",{width:"128",height:"128",rx:"20",fill:"#000"}),(0,h.jsx)("circle",{cx:"64",cy:"64",r:"40",fill:"none",stroke:"#fff",strokeWidth:"4"}),(0,h.jsx)("circle",{cx:"64",cy:"64",r:"25",fill:"none",stroke:"#fff",strokeWidth:"4"}),(0,h.jsx)("circle",{cx:"64",cy:"64",r:"10",fill:"#fff"})]})},{}),category:"Frameworks & Libraries"},{name:"GraphQL",icon:(0,h.jsx)(function(){return(0,h.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,h.jsx)("path",{d:"M20.785 107.871L4 82.784l16.785-25.087h33.569L4 32.61 20.785 7.524h33.569L107.215 95.938H73.646l-13.93-20.785-13.931 20.785H20.785z",fill:"#E10098"}),(0,h.jsx)("path",{d:"M64 20.129L80.785 45.216H47.216L64 20.129zM47.216 82.784h33.569L64 107.871 47.216 82.784z",fill:"#E10098"})]})},{}),category:"Frameworks & Libraries"},{name:"MongoDB",icon:(0,h.jsx)(function(){return(0,h.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,h.jsx)("path",{d:"M88.398 38.352c-2.112-14.378-8.67-26.49-18.304-35.669-.388-.463-1.018-.463-1.406 0C59.053 11.862 52.495 23.974 50.383 38.352c-1.378 9.376-1.035 18.133.734 26.724 2.896 14.138 8.576 27.224 15.789 39.194.388.659 1.413.659 1.801 0 7.213-11.97 12.893-25.056 15.789-39.194 1.769-8.591 2.112-17.348.734-26.724z",fill:"#47A248"}),(0,h.jsx)("path",{d:"M64 100.535c-.388 0-.776-.194-.97-.582-6.715-12.866-12.156-25.761-14.915-39.718-1.769-8.59-2.112-17.348-.734-26.724.582-3.96 1.552-7.727 2.896-11.301.194-.582.776-.97 1.36-.776 6.327 2.112 12.47 3.378 18.42 3.378 5.951 0 12.093-1.266 18.42-3.378.584-.194 1.166.194 1.36.776 1.344 3.574 2.314 7.34 2.896 11.301 1.378 9.376 1.035 18.133-.734 26.724-2.759 13.957-8.2 26.852-14.915 39.718-.194.388-.582.582-.97.582z",fill:"#47A248"})]})},{}),category:"DB & Backend / Deployment"},{name:"MySQL",icon:(0,h.jsx)(function(){return(0,h.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,h.jsx)("path",{d:"M64 20c-24.3 0-44 19.7-44 44v20h88V64c0-24.3-19.7-44-44-44z",fill:"#4479A1"}),(0,h.jsx)("path",{d:"M20 84v20c0 24.3 19.7 44 44 44s44-19.7 44-44V84H20z",fill:"#00758F"}),(0,h.jsx)("circle",{cx:"64",cy:"54",r:"8",fill:"#fff"}),(0,h.jsx)("path",{d:"M52 74h24v4H52zm0 8h24v4H52z",fill:"#fff"})]})},{}),category:"DB & Backend / Deployment"},{name:"Firebase",icon:(0,h.jsx)(function(){return(0,h.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,h.jsx)("path",{d:"M64 20L20 100l44-60-20 20 20-60 20 60-20-20z",fill:"#FFCA28"}),(0,h.jsx)("path",{d:"M84 100l24-80L64 40l20 60z",fill:"#FFA000"}),(0,h.jsx)("path",{d:"M20 100l24-80 20 60-44 20z",fill:"#F57C00"})]})},{}),category:"DB & Backend / Deployment"},{name:"Render",icon:(0,h.jsx)(function(){return(0,h.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,h.jsx)("rect",{width:"128",height:"128",rx:"20",fill:"#46E3B7"}),(0,h.jsx)("path",{d:"M32 40h64v48H32z",fill:"#000"}),(0,h.jsx)("circle",{cx:"48",cy:"64",r:"8",fill:"#46E3B7"}),(0,h.jsx)("circle",{cx:"80",cy:"64",r:"8",fill:"#46E3B7"})]})},{}),category:"DB & Backend / Deployment"},{name:"NameCheap",icon:(0,h.jsx)(function(){return(0,h.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,h.jsx)("rect",{width:"128",height:"128",rx:"20",fill:"#DE3723"}),(0,h.jsx)("text",{x:"64",y:"80",fontSize:"24",fontWeight:"bold",fill:"#fff",textAnchor:"middle",fontFamily:"Arial",children:"NC"})]})},{}),category:"DB & Backend / Deployment"},{name:"Hostinger",icon:(0,h.jsx)(function(){return(0,h.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,h.jsx)("rect",{width:"128",height:"128",rx:"20",fill:"#673DE6"}),(0,h.jsx)("text",{x:"64",y:"80",fontSize:"20",fontWeight:"bold",fill:"#fff",textAnchor:"middle",fontFamily:"Arial",children:"H"})]})},{}),category:"DB & Backend / Deployment"},{name:"Vercel",icon:(0,h.jsx)(function(){return(0,h.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,h.jsx)("rect",{width:"128",height:"128",rx:"20",fill:"#000"}),(0,h.jsx)("path",{d:"M64 20l44 76H20L64 20z",fill:"#fff"})]})},{}),category:"DB & Backend / Deployment"},{name:"Netlify",icon:(0,h.jsx)(function(){return(0,h.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,h.jsx)("rect",{width:"128",height:"128",rx:"20",fill:"#00AD9F"}),(0,h.jsx)("path",{d:"M64 20L20 80h44V60h24v20h24L64 20z",fill:"#fff"})]})},{}),category:"DB & Backend / Deployment"},{name:"Canva",icon:(0,h.jsx)(function(){return(0,h.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,h.jsx)("rect",{width:"128",height:"128",rx:"20",fill:"#00C4CC"}),(0,h.jsx)("circle",{cx:"64",cy:"64",r:"30",fill:"#fff"}),(0,h.jsx)("circle",{cx:"64",cy:"64",r:"20",fill:"#FF5440"})]})},{}),category:"Digital and Creative Skills"},{name:"Figma",icon:(0,h.jsx)(function(){return(0,h.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,h.jsx)("path",{d:"M64 64c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20z",fill:"#0ACF83"}),(0,h.jsx)("path",{d:"M24 104c0-11.046 8.954-20 20-20h20v20c0 11.046-8.954 20-20 20s-20-8.954-20-20z",fill:"#A259FF"}),(0,h.jsx)("path",{d:"M64 24v40H84c11.046 0 20-8.954 20-20S95.046 24 84 24H64z",fill:"#F24E1E"}),(0,h.jsx)("path",{d:"M24 64c0-11.046 8.954-20 20-20h20v40H44c-11.046 0-20-8.954-20-20z",fill:"#FF7262"}),(0,h.jsx)("path",{d:"M24 24c0-11.046 8.954-20 20-20h20v40H44c-11.046 0-20-8.954-20-20z",fill:"#1ABCFE"})]})},{}),category:"Digital and Creative Skills"},{name:"Shopify",icon:(0,h.jsx)(function(){return(0,h.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,h.jsx)("rect",{width:"128",height:"128",rx:"20",fill:"#95BF47"}),(0,h.jsx)("path",{d:"M64 30l-20 10v48l20 10 20-10V40L64 30z",fill:"#fff"}),(0,h.jsx)("circle",{cx:"64",cy:"54",r:"4",fill:"#95BF47"})]})},{}),category:"Digital and Creative Skills"},{name:"WordPress",icon:(0,h.jsx)(function(){return(0,h.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,h.jsx)("circle",{cx:"64",cy:"64",r:"60",fill:"#21759B"}),(0,h.jsx)("path",{d:"M64 24c22.091 0 40 17.909 40 40s-17.909 40-40 40-40-17.909-40-40 17.909-40 40-40z",fill:"#fff"}),(0,h.jsx)("circle",{cx:"64",cy:"64",r:"20",fill:"#21759B"})]})},{}),category:"Digital and Creative Skills"},{name:"SEO",icon:(0,h.jsx)(function(){return(0,h.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,h.jsx)("rect",{width:"128",height:"128",rx:"20",fill:"#4285F4"}),(0,h.jsx)("circle",{cx:"64",cy:"54",r:"16",fill:"#fff"}),(0,h.jsx)("path",{d:"M48 80h32v8H48zm0 12h24v8H48z",fill:"#fff"})]})},{}),category:"Digital and Creative Skills"},{name:"SEO Tools",icon:(0,h.jsx)(function(){return(0,h.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,h.jsx)("rect",{width:"128",height:"128",rx:"20",fill:"#34A853"}),(0,h.jsx)("path",{d:"M40 40h48v48H40z",fill:"#fff"}),(0,h.jsx)("circle",{cx:"64",cy:"64",r:"12",fill:"#34A853"})]})},{}),category:"Digital and Creative Skills"},{name:"Google Analytics",icon:(0,h.jsx)(function(){return(0,h.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,h.jsx)("rect",{width:"128",height:"128",rx:"20",fill:"#F9AB00"}),(0,h.jsx)("path",{d:"M64 20c24.3 0 44 19.7 44 44s-19.7 44-44 44-44-19.7-44-44 19.7-44 44-44z",fill:"#E37400"}),(0,h.jsx)("path",{d:"M44 64h20v20H44V64zm24-12h20v32H68V52zm24 18h12v14h-12V70z",fill:"#fff"}),(0,h.jsx)("circle",{cx:"64",cy:"64",r:"8",fill:"#4285F4"})]})},{}),category:"Digital and Creative Skills"},{name:"Google Tag Manager",icon:(0,h.jsx)(function(){return(0,h.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,h.jsx)("rect",{width:"128",height:"128",rx:"20",fill:"#4285F4"}),(0,h.jsx)("path",{d:"M64 24l20 20-20 20-20-20 20-20z",fill:"#34A853"}),(0,h.jsx)("path",{d:"M84 44l20 20-20 20-20-20 20-20z",fill:"#FBBC04"}),(0,h.jsx)("path",{d:"M44 64l20 20-20 20-20-20 20-20z",fill:"#EA4335"}),(0,h.jsx)("circle",{cx:"64",cy:"64",r:"12",fill:"#fff"}),(0,h.jsx)("text",{x:"64",y:"70",fontSize:"14",fontWeight:"bold",fill:"#4285F4",textAnchor:"middle",fontFamily:"Arial",children:"GTM"})]})},{}),category:"Digital and Creative Skills"},{name:"Google Search Console",icon:(0,h.jsx)(function(){return(0,h.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,h.jsx)("rect",{width:"128",height:"128",rx:"20",fill:"#4285F4"}),(0,h.jsx)("circle",{cx:"64",cy:"64",r:"40",fill:"none",stroke:"#34A853",strokeWidth:"4"}),(0,h.jsx)("circle",{cx:"64",cy:"64",r:"28",fill:"none",stroke:"#FBBC04",strokeWidth:"4"}),(0,h.jsx)("circle",{cx:"64",cy:"64",r:"16",fill:"#EA4335"}),(0,h.jsx)("path",{d:"M64 24v20M64 84v20M24 64h20M84 64h20",stroke:"#fff",strokeWidth:"4",strokeLinecap:"round"})]})},{}),category:"Digital and Creative Skills"},{name:"Semrush",icon:(0,h.jsx)(function(){return(0,h.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,h.jsx)("rect",{width:"128",height:"128",rx:"20",fill:"#FF6C37"}),(0,h.jsx)("path",{d:"M32 40h64v48H32z",fill:"#fff"}),(0,h.jsx)("path",{d:"M40 52h48v4H40zm0 8h40v4H40zm0 8h48v4H40zm0 8h36v4H40z",fill:"#FF6C37"}),(0,h.jsx)("circle",{cx:"96",cy:"60",r:"8",fill:"#FF6C37"})]})},{}),category:"Digital and Creative Skills"},{name:"Git",icon:(0,h.jsx)(function(){return(0,h.jsx)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,h.jsx)("path",{d:"M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0c-2.842-2.844-3.545-7.019-2.105-10.52L68.574 60.58l-.002 27.767c.932.459 1.819 1.028 2.644 1.85a9.677 9.677 0 010 13.683 9.677 9.677 0 01-13.683 0 9.677 9.677 0 010-13.683c.825-.821 1.712-1.39 2.644-1.851V59.733c-.932-.459-1.819-1.028-2.644-1.85a9.677 9.677 0 01-6.844-2.843L36.558 41.568 3.264 74.861c-3.175 3.177-3.175 8.325 0 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858c3.175-3.176 3.175-8.327-.001-11.499z",fill:"#F05032"})})},{}),category:"General & Soft Skills"},{name:"GitHub",icon:(0,h.jsx)(function(){return(0,h.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,h.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.3 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.34-7.125-20.34-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.52-6.705-27.52-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19 4.817-1.338 9.983-2.009 15.115-2.033 5.132.024 10.302.696 15.128 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.262-30.622 41.262-57.294C124.388 32.14 97.35 5.104 64 5.104z",fill:"#181717"}),(0,h.jsx)("path",{d:"M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.189.44.197.69.61.538.91zm2.446 2.729c-.294.267-.871.143-1.232-.28-.396-.42-.47-.984-.172-1.255.298-.266.884-.14 1.24.28.394.426.472.99.164 1.255zm2.382 3.477c-.377.258-.984.028-1.354-.49-.372-.516-.372-1.183.01-1.44.373-.258.977-.03 1.35.488.372.517.372 1.19-.006 1.442zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.266 1.564.23.527.486.686 1.18.33 1.544zm4.5 1.951c-.147.473-.825.69-1.507.49-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.49.683.206 1.13.756.984 1.237zm4.943.361c.015.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.305.88zm4.598-.979c.086.486-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.662z",fill:"#fff"})]})},{}),category:"General & Soft Skills"},{name:"APIs",icon:(0,h.jsx)(function(){return(0,h.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,h.jsx)("rect",{width:"128",height:"128",rx:"20",fill:"#FF6B6B"}),(0,h.jsx)("path",{d:"M32 40h64v48H32z",fill:"#fff"}),(0,h.jsx)("circle",{cx:"48",cy:"64",r:"6",fill:"#FF6B6B"}),(0,h.jsx)("circle",{cx:"64",cy:"64",r:"6",fill:"#FF6B6B"}),(0,h.jsx)("circle",{cx:"80",cy:"64",r:"6",fill:"#FF6B6B"})]})},{}),category:"General & Soft Skills"},{name:"Responsive Design",icon:(0,h.jsx)(function(){return(0,h.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,h.jsx)("rect",{x:"24",y:"32",width:"80",height:"64",rx:"8",fill:"none",stroke:"#4ECDC4",strokeWidth:"4"}),(0,h.jsx)("rect",{x:"32",y:"40",width:"40",height:"48",rx:"4",fill:"#4ECDC4"}),(0,h.jsx)("rect",{x:"80",y:"52",width:"16",height:"24",rx:"2",fill:"#4ECDC4"})]})},{}),category:"General & Soft Skills"},{name:"MS Office",icon:(0,h.jsx)(function(){return(0,h.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,h.jsx)("rect",{width:"128",height:"128",rx:"20",fill:"#EB3C00"}),(0,h.jsx)("path",{d:"M32 32h64v64H32z",fill:"#fff"}),(0,h.jsx)("path",{d:"M40 40h16v48H40zm24 0h16v48H64z",fill:"#EB3C00"})]})},{}),category:"General & Soft Skills"},{name:"Communication",icon:(0,h.jsx)(function(){return(0,h.jsxs)("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,h.jsx)("path",{d:"M64 24c22.091 0 40 17.909 40 40 0 8.837-2.865 17.008-7.727 23.64L104 104l-16.36-7.273C81.008 102.135 72.837 105 64 105c-22.091 0-40-17.909-40-40s17.909-40 40-40z",fill:"#9B59B6"}),(0,h.jsx)("circle",{cx:"52",cy:"64",r:"4",fill:"#fff"}),(0,h.jsx)("circle",{cx:"64",cy:"64",r:"4",fill:"#fff"}),(0,h.jsx)("circle",{cx:"76",cy:"64",r:"4",fill:"#fff"})]})},{}),category:"General & Soft Skills"}],cp=()=>(Array.from(new Set(co.map(a=>a.category))),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(bg,{id:"techstack",children:(0,h.jsx)(be,{children:(0,h.jsx)(cf,{children:(0,h.jsx)(cg,{children:(0,h.jsxs)(ch,{children:[(0,h.jsx)(ci,{"data-aos":"fade-up",children:"TECHNOLOGIES I WORK WITH"}),(0,h.jsx)(cj,{children:co.map((a,b)=>(0,h.jsxs)(ck,{"data-aos":"zoom-in","data-aos-delay":50*b,children:[(0,h.jsx)(cl,{children:a.icon}),(0,h.jsx)(bc,{variant:"bodySmall",as:"span",children:(0,h.jsx)(cm,{children:a.name})})]},b))})]})})})})}),(0,h.jsx)(cn,{})]})),cq=_.default.div.withConfig({displayName:"ContactHeader.styles__ContactHeaderWrapper",componentId:"sc-1b5bfa94-0"})`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
`,cr=_.default.div.withConfig({displayName:"ContactHeader.styles__ContactHeaderContent",componentId:"sc-1b5bfa94-1"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:a})=>a.spacing.xl};
  max-width: 800px;
  text-align: center;
  align-items: center;
  position: relative;
  width: 100%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`,cs=_.default.div.withConfig({displayName:"ContactHeader.styles__ContactTitle",componentId:"sc-1b5bfa94-2"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0;
  line-height: 1.1;
`,ct=_.default.h1.withConfig({displayName:"ContactHeader.styles__Headline",componentId:"sc-1b5bfa94-3"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyHeading};
  font-size: clamp(3rem, 10vw, 4rem);
  font-weight: ${({theme:a})=>a.typography.fontWeight.bold};
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: ${({theme:a})=>a.colors.textPrimary};
  margin: 0;
  display: block;
  width: 100%;
  text-align: center;

  @media (max-width: 768px) {
    font-size: clamp(2rem, 6vw, 3rem);
  }
`,cu=_.default.p.withConfig({displayName:"ContactHeader.styles__ContactDescription",componentId:"sc-1b5bfa94-4"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyBody};
  color: ${({theme:a})=>a.colors.textSecondary};
  line-height: 1.8;
  text-align: center;
  max-width: 600px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`,cv=({sectionNumber:a,headline:b,description:c})=>{let d=b.split("\n").filter(a=>""!==a.trim());return(0,h.jsx)(cq,{"data-aos":"fade-up",children:(0,h.jsxs)(cr,{children:[(0,h.jsx)(cs,{children:d.map((a,b)=>(0,h.jsx)(ct,{"data-aos":"fade-up","data-aos-delay":100*b,children:a.trim()},b))}),(0,h.jsx)(cu,{"data-aos":"fade-up","data-aos-delay":"200",children:c})]})})},cw=aZ("send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);var cx=function(a){var b,c,d;return!!(b=a)&&"object"==typeof b&&(c=a,"[object RegExp]"!==(d=Object.prototype.toString.call(c))&&"[object Date]"!==d&&c.$$typeof!==cy)},cy="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function cz(a,b){return!1!==b.clone&&b.isMergeableObject(a)?cB(Array.isArray(a)?[]:{},a,b):a}function cA(a,b,c){return a.concat(b).map(function(a){return cz(a,c)})}function cB(a,b,c){(c=c||{}).arrayMerge=c.arrayMerge||cA,c.isMergeableObject=c.isMergeableObject||cx;var d,e,f=Array.isArray(b);return f!==Array.isArray(a)?cz(b,c):f?c.arrayMerge(a,b,c):(e={},(d=c).isMergeableObject(a)&&Object.keys(a).forEach(function(b){e[b]=cz(a[b],d)}),Object.keys(b).forEach(function(c){d.isMergeableObject(b[c])&&a[c]?e[c]=cB(a[c],b[c],d):e[c]=cz(b[c],d)}),e)}cB.all=function(a,b){if(!Array.isArray(a))throw Error("first argument should be an array");return a.reduce(function(a,c){return cB(a,c,b)},{})};let cC=cB;var cD=a.g&&a.g.Object===Object&&a.g,cE="object"==typeof self&&self&&self.Object===Object&&self,cF=cD||cE||Function("return this")(),cG=cF.Symbol,cH=Object.prototype,cI=cH.hasOwnProperty,cJ=cH.toString,cK=cG?cG.toStringTag:void 0;let cL=function(a){var b=cI.call(a,cK),c=a[cK];try{a[cK]=void 0;var d=!0}catch(a){}var e=cJ.call(a);return d&&(b?a[cK]=c:delete a[cK]),e};var cM=Object.prototype.toString,cN=cG?cG.toStringTag:void 0;let cO=function(a){return null==a?void 0===a?"[object Undefined]":"[object Null]":cN&&cN in Object(a)?cL(a):cM.call(a)},cP=function(a,b){return function(c){return a(b(c))}};var cQ=cP(Object.getPrototypeOf,Object);let cR=function(a){return null!=a&&"object"==typeof a};var cS=Object.prototype,cT=Function.prototype.toString,cU=cS.hasOwnProperty,cV=cT.call(Object);let cW=function(a){if(!cR(a)||"[object Object]"!=cO(a))return!1;var b=cQ(a);if(null===b)return!0;var c=cU.call(b,"constructor")&&b.constructor;return"function"==typeof c&&c instanceof c&&cT.call(c)==cV},cX=function(a,b){return a===b||a!=a&&b!=b},cY=function(a,b){for(var c=a.length;c--;)if(cX(a[c][0],b))return c;return -1};var cZ=Array.prototype.splice;function c$(a){var b=-1,c=null==a?0:a.length;for(this.clear();++b<c;){var d=a[b];this.set(d[0],d[1])}}c$.prototype.clear=function(){this.__data__=[],this.size=0},c$.prototype.delete=function(a){var b=this.__data__,c=cY(b,a);return!(c<0)&&(c==b.length-1?b.pop():cZ.call(b,c,1),--this.size,!0)},c$.prototype.get=function(a){var b=this.__data__,c=cY(b,a);return c<0?void 0:b[c][1]},c$.prototype.has=function(a){return cY(this.__data__,a)>-1},c$.prototype.set=function(a,b){var c=this.__data__,d=cY(c,a);return d<0?(++this.size,c.push([a,b])):c[d][1]=b,this};let c_=function(a){var b=typeof a;return null!=a&&("object"==b||"function"==b)},c0=function(a){if(!c_(a))return!1;var b=cO(a);return"[object Function]"==b||"[object GeneratorFunction]"==b||"[object AsyncFunction]"==b||"[object Proxy]"==b};var c1=cF["__core-js_shared__"],c2=(e=/[^.]+$/.exec(c1&&c1.keys&&c1.keys.IE_PROTO||""))?"Symbol(src)_1."+e:"",c3=Function.prototype.toString;let c4=function(a){if(null!=a){try{return c3.call(a)}catch(a){}try{return a+""}catch(a){}}return""};var c5=/^\[object .+?Constructor\]$/,c6=Object.prototype,c7=Function.prototype.toString,c8=c6.hasOwnProperty,c9=RegExp("^"+c7.call(c8).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");let da=function(a){return!!c_(a)&&(!c2||!(c2 in a))&&(c0(a)?c9:c5).test(c4(a))},db=function(a,b){var c=null==a?void 0:a[b];return da(c)?c:void 0};var dc=db(cF,"Map"),dd=db(Object,"create"),de=Object.prototype.hasOwnProperty,df=Object.prototype.hasOwnProperty;function dg(a){var b=-1,c=null==a?0:a.length;for(this.clear();++b<c;){var d=a[b];this.set(d[0],d[1])}}dg.prototype.clear=function(){this.__data__=dd?dd(null):{},this.size=0},dg.prototype.delete=function(a){var b=this.has(a)&&delete this.__data__[a];return this.size-=!!b,b},dg.prototype.get=function(a){var b=this.__data__;if(dd){var c=b[a];return"__lodash_hash_undefined__"===c?void 0:c}return de.call(b,a)?b[a]:void 0},dg.prototype.has=function(a){var b=this.__data__;return dd?void 0!==b[a]:df.call(b,a)},dg.prototype.set=function(a,b){var c=this.__data__;return this.size+=+!this.has(a),c[a]=dd&&void 0===b?"__lodash_hash_undefined__":b,this};let dh=function(a){var b=typeof a;return"string"==b||"number"==b||"symbol"==b||"boolean"==b?"__proto__"!==a:null===a},di=function(a,b){var c=a.__data__;return dh(b)?c["string"==typeof b?"string":"hash"]:c.map};function dj(a){var b=-1,c=null==a?0:a.length;for(this.clear();++b<c;){var d=a[b];this.set(d[0],d[1])}}function dk(a){var b=this.__data__=new c$(a);this.size=b.size}dj.prototype.clear=function(){this.size=0,this.__data__={hash:new dg,map:new(dc||c$),string:new dg}},dj.prototype.delete=function(a){var b=di(this,a).delete(a);return this.size-=!!b,b},dj.prototype.get=function(a){return di(this,a).get(a)},dj.prototype.has=function(a){return di(this,a).has(a)},dj.prototype.set=function(a,b){var c=di(this,a),d=c.size;return c.set(a,b),this.size+=+(c.size!=d),this},dk.prototype.clear=function(){this.__data__=new c$,this.size=0},dk.prototype.delete=function(a){var b=this.__data__,c=b.delete(a);return this.size=b.size,c},dk.prototype.get=function(a){return this.__data__.get(a)},dk.prototype.has=function(a){return this.__data__.has(a)},dk.prototype.set=function(a,b){var c=this.__data__;if(c instanceof c$){var d=c.__data__;if(!dc||d.length<199)return d.push([a,b]),this.size=++c.size,this;c=this.__data__=new dj(d)}return c.set(a,b),this.size=c.size,this};let dl=function(a,b){for(var c=-1,d=null==a?0:a.length;++c<d&&!1!==b(a[c],c,a););return a};var dm=function(){try{var a=db(Object,"defineProperty");return a({},"",{}),a}catch(a){}}();let dn=function(a,b,c){"__proto__"==b&&dm?dm(a,b,{configurable:!0,enumerable:!0,value:c,writable:!0}):a[b]=c};var dp=Object.prototype.hasOwnProperty;let dq=function(a,b,c){var d=a[b];dp.call(a,b)&&cX(d,c)&&(void 0!==c||b in a)||dn(a,b,c)},dr=function(a,b,c,d){var e=!c;c||(c={});for(var f=-1,g=b.length;++f<g;){var h=b[f],i=d?d(c[h],a[h],h,c,a):void 0;void 0===i&&(i=a[h]),e?dn(c,h,i):dq(c,h,i)}return c},ds=function(a,b){for(var c=-1,d=Array(a);++c<a;)d[c]=b(c);return d},dt=function(a){return cR(a)&&"[object Arguments]"==cO(a)};var du=Object.prototype,dv=du.hasOwnProperty,dw=du.propertyIsEnumerable,dx=dt(function(){return arguments}())?dt:function(a){return cR(a)&&dv.call(a,"callee")&&!dw.call(a,"callee")},dy=Array.isArray;let dz=function(){return!1};var dA=/^(?:0|[1-9]\d*)$/;let dB=function(a,b){var c=typeof a;return!!(b=null==b?0x1fffffffffffff:b)&&("number"==c||"symbol"!=c&&dA.test(a))&&a>-1&&a%1==0&&a<b},dC=function(a){return"number"==typeof a&&a>-1&&a%1==0&&a<=0x1fffffffffffff};var dD={};dD["[object Float32Array]"]=dD["[object Float64Array]"]=dD["[object Int8Array]"]=dD["[object Int16Array]"]=dD["[object Int32Array]"]=dD["[object Uint8Array]"]=dD["[object Uint8ClampedArray]"]=dD["[object Uint16Array]"]=dD["[object Uint32Array]"]=!0,dD["[object Arguments]"]=dD["[object Array]"]=dD["[object ArrayBuffer]"]=dD["[object Boolean]"]=dD["[object DataView]"]=dD["[object Date]"]=dD["[object Error]"]=dD["[object Function]"]=dD["[object Map]"]=dD["[object Number]"]=dD["[object Object]"]=dD["[object RegExp]"]=dD["[object Set]"]=dD["[object String]"]=dD["[object WeakMap]"]=!1;let dE=function(a){return function(b){return a(b)}};var dF=function(){try{return!1}catch(a){}}(),dG=dF&&dF.isTypedArray,dH=dG?dE(dG):function(a){return cR(a)&&dC(a.length)&&!!dD[cO(a)]},dI=Object.prototype.hasOwnProperty;let dJ=function(a,b){var c=dy(a),d=!c&&dx(a),e=!c&&!d&&dz(a),f=!c&&!d&&!e&&dH(a),g=c||d||e||f,h=g?ds(a.length,String):[],i=h.length;for(var j in a)(b||dI.call(a,j))&&!(g&&("length"==j||e&&("offset"==j||"parent"==j)||f&&("buffer"==j||"byteLength"==j||"byteOffset"==j)||dB(j,i)))&&h.push(j);return h};var dK=Object.prototype;let dL=function(a){var b=a&&a.constructor;return a===("function"==typeof b&&b.prototype||dK)};var dM=cP(Object.keys,Object),dN=Object.prototype.hasOwnProperty;let dO=function(a){if(!dL(a))return dM(a);var b=[];for(var c in Object(a))dN.call(a,c)&&"constructor"!=c&&b.push(c);return b},dP=function(a){return null!=a&&dC(a.length)&&!c0(a)},dQ=function(a){return dP(a)?dJ(a):dO(a)},dR=function(a){var b=[];if(null!=a)for(var c in Object(a))b.push(c);return b};var dS=Object.prototype.hasOwnProperty;let dT=function(a){if(!c_(a))return dR(a);var b=dL(a),c=[];for(var d in a)"constructor"==d&&(b||!dS.call(a,d))||c.push(d);return c},dU=function(a){return dP(a)?dJ(a,!0):dT(a)},dV=function(a,b){if(b)return a.slice();var c=a.length,d=new a.constructor(c);return a.copy(d),d},dW=function(a,b){var c=-1,d=a.length;for(b||(b=Array(d));++c<d;)b[c]=a[c];return b},dX=function(a,b){for(var c=-1,d=null==a?0:a.length,e=0,f=[];++c<d;){var g=a[c];b(g,c,a)&&(f[e++]=g)}return f},dY=function(){return[]};var dZ=Object.prototype.propertyIsEnumerable,d$=Object.getOwnPropertySymbols,d_=d$?function(a){return null==a?[]:dX(d$(a=Object(a)),function(b){return dZ.call(a,b)})}:dY;let d0=function(a,b){for(var c=-1,d=b.length,e=a.length;++c<d;)a[e+c]=b[c];return a};var d1=Object.getOwnPropertySymbols?function(a){for(var b=[];a;)d0(b,d_(a)),a=cQ(a);return b}:dY;let d2=function(a,b,c){var d=b(a);return dy(a)?d:d0(d,c(a))},d3=function(a){return d2(a,dQ,d_)},d4=function(a){return d2(a,dU,d1)};var d5=db(cF,"DataView"),d6=db(cF,"Promise"),d7=db(cF,"Set"),d8=db(cF,"WeakMap"),d9="[object Map]",ea="[object Promise]",eb="[object Set]",ec="[object WeakMap]",ed="[object DataView]",ee=c4(d5),ef=c4(dc),eg=c4(d6),eh=c4(d7),ei=c4(d8),ej=cO;(d5&&ej(new d5(new ArrayBuffer(1)))!=ed||dc&&ej(new dc)!=d9||d6&&ej(d6.resolve())!=ea||d7&&ej(new d7)!=eb||d8&&ej(new d8)!=ec)&&(ej=function(a){var b=cO(a),c="[object Object]"==b?a.constructor:void 0,d=c?c4(c):"";if(d)switch(d){case ee:return ed;case ef:return d9;case eg:return ea;case eh:return eb;case ei:return ec}return b});let ek=ej;var el=Object.prototype.hasOwnProperty;let em=function(a){var b=a.length,c=new a.constructor(b);return b&&"string"==typeof a[0]&&el.call(a,"index")&&(c.index=a.index,c.input=a.input),c};var en=cF.Uint8Array;let eo=function(a){var b=new a.constructor(a.byteLength);return new en(b).set(new en(a)),b},ep=function(a,b){var c=b?eo(a.buffer):a.buffer;return new a.constructor(c,a.byteOffset,a.byteLength)};var eq=/\w*$/;let er=function(a){var b=new a.constructor(a.source,eq.exec(a));return b.lastIndex=a.lastIndex,b};var es=cG?cG.prototype:void 0,et=es?es.valueOf:void 0;let eu=function(a,b){var c=b?eo(a.buffer):a.buffer;return new a.constructor(c,a.byteOffset,a.length)},ev=function(a,b,c){var d=a.constructor;switch(b){case"[object ArrayBuffer]":return eo(a);case"[object Boolean]":case"[object Date]":return new d(+a);case"[object DataView]":return ep(a,c);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return eu(a,c);case"[object Map]":case"[object Set]":return new d;case"[object Number]":case"[object String]":return new d(a);case"[object RegExp]":return er(a);case"[object Symbol]":return et?Object(et.call(a)):{}}};var ew=Object.create,ex=function(){function a(){}return function(b){if(!c_(b))return{};if(ew)return ew(b);a.prototype=b;var c=new a;return a.prototype=void 0,c}}(),ey=dF&&dF.isMap,ez=ey?dE(ey):function(a){return cR(a)&&"[object Map]"==ek(a)},eA=dF&&dF.isSet,eB=eA?dE(eA):function(a){return cR(a)&&"[object Set]"==ek(a)},eC="[object Arguments]",eD="[object Function]",eE="[object Object]",eF={};eF[eC]=eF["[object Array]"]=eF["[object ArrayBuffer]"]=eF["[object DataView]"]=eF["[object Boolean]"]=eF["[object Date]"]=eF["[object Float32Array]"]=eF["[object Float64Array]"]=eF["[object Int8Array]"]=eF["[object Int16Array]"]=eF["[object Int32Array]"]=eF["[object Map]"]=eF["[object Number]"]=eF[eE]=eF["[object RegExp]"]=eF["[object Set]"]=eF["[object String]"]=eF["[object Symbol]"]=eF["[object Uint8Array]"]=eF["[object Uint8ClampedArray]"]=eF["[object Uint16Array]"]=eF["[object Uint32Array]"]=!0,eF["[object Error]"]=eF[eD]=eF["[object WeakMap]"]=!1;let eG=function a(b,c,d,e,f,g){var h,i=1&c,j=2&c,k=4&c;if(d&&(h=f?d(b,e,f,g):d(b)),void 0!==h)return h;if(!c_(b))return b;var l=dy(b);if(l){if(h=em(b),!i)return dW(b,h)}else{var m,n,o,p,q,r=ek(b),s=r==eD||"[object GeneratorFunction]"==r;if(dz(b))return dV(b,i);if(r==eE||r==eC||s&&!f){if(h=j||s||"function"!=typeof(m=b).constructor||dL(m)?{}:ex(cQ(m)),!i)return j?(o=(n=h)&&dr(b,dU(b),n),dr(b,d1(b),o)):(q=(p=h)&&dr(b,dQ(b),p),dr(b,d_(b),q))}else{if(!eF[r])return f?b:{};h=ev(b,r,i)}}g||(g=new dk);var t=g.get(b);if(t)return t;g.set(b,h),eB(b)?b.forEach(function(e){h.add(a(e,c,d,e,b,g))}):ez(b)&&b.forEach(function(e,f){h.set(f,a(e,c,d,f,b,g))});var u=k?j?d4:d3:j?dU:dQ,v=l?void 0:u(b);return dl(v||b,function(e,f){v&&(e=b[f=e]),dq(h,f,a(e,c,d,f,b,g))}),h},eH=function(a){return eG(a,5)};var eI=a.i(30407);let eJ=function(a,b){},eK=function(a){return eG(a,4)},eL=function(a,b){for(var c=-1,d=null==a?0:a.length,e=Array(d);++c<d;)e[c]=b(a[c],c,a);return e},eM=function(a){return"symbol"==typeof a||cR(a)&&"[object Symbol]"==cO(a)};function eN(a,b){if("function"!=typeof a||null!=b&&"function"!=typeof b)throw TypeError("Expected a function");var c=function(){var d=arguments,e=b?b.apply(this,d):d[0],f=c.cache;if(f.has(e))return f.get(e);var g=a.apply(this,d);return c.cache=f.set(e,g)||f,g};return c.cache=new(eN.Cache||dj),c}eN.Cache=dj;var eO=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,eP=/\\(\\)?/g,eQ=(g=(f=eN(function(a){var b=[];return 46===a.charCodeAt(0)&&b.push(""),a.replace(eO,function(a,c,d,e){b.push(d?e.replace(eP,"$1"):c||a)}),b},function(a){return 500===g.size&&g.clear(),a})).cache,f),eR=1/0;let eS=function(a){if("string"==typeof a||eM(a))return a;var b=a+"";return"0"==b&&1/a==-eR?"-0":b};var eT=1/0,eU=cG?cG.prototype:void 0,eV=eU?eU.toString:void 0;let eW=function a(b){if("string"==typeof b)return b;if(dy(b))return eL(b,a)+"";if(eM(b))return eV?eV.call(b):"";var c=b+"";return"0"==c&&1/b==-eT?"-0":c},eX=function(a){return dy(a)?eL(a,eS):eM(a)?[a]:dW(eQ(null==a?"":eW(a)))};function eY(){return(eY=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}a.i(32344);function eZ(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}function e$(a){if(void 0===a)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return a}var e_=(0,i.createContext)(void 0);e_.displayName="FormikContext",e_.Provider,e_.Consumer;var e0=function(a){return Array.isArray(a)&&0===a.length},e1=function(a){return"function"==typeof a},e2=function(a){return null!==a&&"object"==typeof a},e3=function(a){return"[object String]"===Object.prototype.toString.call(a)},e4=function(a){return e2(a)&&e1(a.then)};function e5(a,b,c,d){void 0===d&&(d=0);for(var e=eX(b);a&&d<e.length;)a=a[e[d++]];return d===e.length||a?void 0===a?c:a:c}function e6(a,b,c){for(var d=eK(a),e=d,f=0,g=eX(b);f<g.length-1;f++){var h=g[f],i=e5(a,g.slice(0,f+1));if(i&&(e2(i)||Array.isArray(i)))e=e[h]=eK(i);else{var j=g[f+1];e=e[h]=String(Math.floor(Number(j)))===j&&Number(j)>=0?[]:{}}}return(0===f?a:e)[g[f]]===c?a:(void 0===c?delete e[g[f]]:e[g[f]]=c,0===f&&void 0===c&&delete d[g[f]],d)}var e7={},e8={};function e9(a,b,c){var d=a.slice();return b.forEach(function(b,e){if(void 0===d[e]){var f=!1!==c.clone&&c.isMergeableObject(b);d[e]=f?cC(Array.isArray(b)?[]:{},b,c):b}else c.isMergeableObject(b)?d[e]=cC(a[e],b,c):-1===a.indexOf(b)&&d.push(b)}),d}var fa=i.useEffect;function fb(a){var b=(0,i.useRef)(a);return fa(function(){b.current=a}),(0,i.useCallback)(function(){for(var a=arguments.length,c=Array(a),d=0;d<a;d++)c[d]=arguments[d];return b.current.apply(void 0,c)},[])}(0,i.forwardRef)(function(a,b){var c,d=a.action,e=eZ(a,["action"]),f=((c=(0,i.useContext)(e_))||eJ(!1),c),g=f.handleReset,h=f.handleSubmit;return(0,i.createElement)("form",eY({onSubmit:h,ref:b,onReset:g,action:null!=d?d:"#"},e))}).displayName="Form";var fc=function(a,b,c){var d=fg(a),e=d[b];return d.splice(b,1),d.splice(c,0,e),d},fd=function(a,b,c){var d=fg(a),e=d[b];return d[b]=d[c],d[c]=e,d},fe=function(a,b,c){var d=fg(a);return d.splice(b,0,c),d},ff=function(a,b,c){var d=fg(a);return d[b]=c,d},fg=function(a){if(!a)return[];if(Array.isArray(a))return[].concat(a);var b=Object.keys(a).map(function(a){return parseInt(a)}).reduce(function(a,b){return b>a?b:a},0);return Array.from(eY({},a,{length:b+1}))},fh=function(a,b){var c="function"==typeof a?a:b;return function(a){return Array.isArray(a)||e2(a)?c(fg(a)):a}};(function(a){function b(b){var c;return(c=a.call(this,b)||this).updateArrayField=function(a,b,d){var e=c.props,f=e.name;(0,e.formik.setFormikState)(function(c){var e=fh(d,a),g=fh(b,a),h=e6(c.values,f,a(e5(c.values,f))),i=d?e(e5(c.errors,f)):void 0,j=b?g(e5(c.touched,f)):void 0;return e0(i)&&(i=void 0),e0(j)&&(j=void 0),eY({},c,{values:h,errors:d?e6(c.errors,f,i):c.errors,touched:b?e6(c.touched,f,j):c.touched})})},c.push=function(a){return c.updateArrayField(function(b){return[].concat(fg(b),[eH(a)])},!1,!1)},c.handlePush=function(a){return function(){return c.push(a)}},c.swap=function(a,b){return c.updateArrayField(function(c){return fd(c,a,b)},!0,!0)},c.handleSwap=function(a,b){return function(){return c.swap(a,b)}},c.move=function(a,b){return c.updateArrayField(function(c){return fc(c,a,b)},!0,!0)},c.handleMove=function(a,b){return function(){return c.move(a,b)}},c.insert=function(a,b){return c.updateArrayField(function(c){return fe(c,a,b)},function(b){return fe(b,a,null)},function(b){return fe(b,a,null)})},c.handleInsert=function(a,b){return function(){return c.insert(a,b)}},c.replace=function(a,b){return c.updateArrayField(function(c){return ff(c,a,b)},!1,!1)},c.handleReplace=function(a,b){return function(){return c.replace(a,b)}},c.unshift=function(a){var b=-1;return c.updateArrayField(function(c){var d=c?[a].concat(c):[a];return b=d.length,d},function(a){return a?[null].concat(a):[null]},function(a){return a?[null].concat(a):[null]}),b},c.handleUnshift=function(a){return function(){return c.unshift(a)}},c.handleRemove=function(a){return function(){return c.remove(a)}},c.handlePop=function(){return function(){return c.pop()}},c.remove=c.remove.bind(e$(c)),c.pop=c.pop.bind(e$(c)),c}(c=b).prototype=Object.create((d=a).prototype),c.prototype.constructor=c,c.__proto__=d;var c,d,e=b.prototype;return e.componentDidUpdate=function(a){this.props.validateOnChange&&this.props.formik.validateOnChange&&!(0,eI.default)(e5(a.formik.values,a.name),e5(this.props.formik.values,this.props.name))&&this.props.formik.validateForm(this.props.formik.values)},e.remove=function(a){var b;return this.updateArrayField(function(c){var d=c?fg(c):[];return b||(b=d[a]),e1(d.splice)&&d.splice(a,1),e1(d.every)&&d.every(function(a){return void 0===a})?[]:d},!0,!0),b},e.pop=function(){var a;return this.updateArrayField(function(b){var c=b.slice();return a||(a=c&&c.pop&&c.pop()),c},!0,!0),a},e.render=function(){var a,b={push:this.push,pop:this.pop,swap:this.swap,move:this.move,insert:this.insert,replace:this.replace,unshift:this.unshift,remove:this.remove,handlePush:this.handlePush,handlePop:this.handlePop,handleSwap:this.handleSwap,handleMove:this.handleMove,handleInsert:this.handleInsert,handleReplace:this.handleReplace,handleUnshift:this.handleUnshift,handleRemove:this.handleRemove},c=this.props,d=c.component,e=c.render,f=c.children,g=c.name,h=eZ(c.formik,["validate","validationSchema"]),j=eY({},b,{form:h,name:g});return d?(0,i.createElement)(d,j):e?e(j):f?"function"==typeof f?f(j):(a=f,0===i.Children.count(a))?null:i.Children.only(f):null},b})(i.Component).defaultProps={validateOnChange:!0},i.Component,i.Component;var fi=a.i(6704),fj=a.i(30514),fk=a.i(32107),fl=a.i(32340);let fm=Object.prototype.toString,fn=Error.prototype.toString,fo=RegExp.prototype.toString,fp="undefined"!=typeof Symbol?Symbol.prototype.toString:()=>"",fq=/^Symbol\((.*)\)(.*)$/;function fr(a,b=!1){if(null==a||!0===a||!1===a)return""+a;let c=typeof a;if("number"===c)return a!=+a?"NaN":0===a&&1/a<0?"-0":""+a;if("string"===c)return b?`"${a}"`:a;if("function"===c)return"[Function "+(a.name||"anonymous")+"]";if("symbol"===c)return fp.call(a).replace(fq,"Symbol($1)");let d=fm.call(a).slice(8,-1);return"Date"===d?isNaN(a.getTime())?""+a:a.toISOString(a):"Error"===d||a instanceof Error?"["+fn.call(a)+"]":"RegExp"===d?fo.call(a):null}function fs(a,b){let c=fr(a,b);return null!==c?c:JSON.stringify(a,function(a,c){let d=fr(this[a],b);return null!==d?d:c},2)}function ft(a){return null==a?[]:[].concat(a)}let fu=/\$\{\s*(\w+)\s*\}/g;b=Symbol.toStringTag;class fv{constructor(a,c,d,e){this.name=void 0,this.message=void 0,this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=void 0,this.inner=void 0,this[b]="Error",this.name="ValidationError",this.value=c,this.path=d,this.type=e,this.errors=[],this.inner=[],ft(a).forEach(a=>{if(fw.isError(a)){this.errors.push(...a.errors);let b=a.inner.length?a.inner:[a];this.inner.push(...b)}else this.errors.push(a)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0]}}c=Symbol.hasInstance,d=Symbol.toStringTag;class fw extends Error{static formatError(a,b){let c=b.label||b.path||"this";return(b=Object.assign({},b,{path:c,originalPath:b.path}),"string"==typeof a)?a.replace(fu,(a,c)=>fs(b[c])):"function"==typeof a?a(b):a}static isError(a){return a&&"ValidationError"===a.name}constructor(a,b,c,e,f){const g=new fv(a,b,c,e);if(f)return g;super(),this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=[],this.inner=[],this[d]="Error",this.name=g.name,this.message=g.message,this.type=g.type,this.value=g.value,this.path=g.path,this.errors=g.errors,this.inner=g.inner,Error.captureStackTrace&&Error.captureStackTrace(this,fw)}static[c](a){return fv[Symbol.hasInstance](a)||super[Symbol.hasInstance](a)}}let fx={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:a,type:b,value:c,originalValue:d})=>{let e=null!=d&&d!==c?` (cast from the value \`${fs(d,!0)}\`).`:".";return"mixed"!==b?`${a} must be a \`${b}\` type, but the final value was: \`${fs(c,!0)}\``+e:`${a} must match the configured type. The validated value was: \`${fs(c,!0)}\``+e}},fy={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",datetime:"${path} must be a valid ISO date-time",datetime_precision:"${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",datetime_offset:'${path} must be a valid ISO date-time with UTC "Z" timezone',trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},fz={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},fA={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},fB={isValue:"${path} field must be ${value}"},fC={noUnknown:"${path} field has unspecified keys: ${unknown}",exact:"${path} object contains unknown properties: ${properties}"},fD={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},fE={notType:a=>{let{path:b,value:c,spec:d}=a,e=d.types.length;if(Array.isArray(c)){if(c.length<e)return`${b} tuple value has too few items, expected a length of ${e} but got ${c.length} for value: \`${fs(c,!0)}\``;if(c.length>e)return`${b} tuple value has too many items, expected a length of ${e} but got ${c.length} for value: \`${fs(c,!0)}\``}return fw.formatError(fx.notType,a)}};Object.assign(Object.create(null),{mixed:fx,string:fy,number:fz,date:fA,object:fC,array:fD,boolean:fB,tuple:fE});let fF=a=>a&&a.__isYupSchema__;class fG{static fromOptions(a,b){if(!b.then&&!b.otherwise)throw TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:c,then:d,otherwise:e}=b,f="function"==typeof c?c:(...a)=>a.every(a=>a===c);return new fG(a,(a,b)=>{var c;let g=f(...a)?d:e;return null!=(c=null==g?void 0:g(b))?c:b})}constructor(a,b){this.fn=void 0,this.refs=a,this.refs=a,this.fn=b}resolve(a,b){let c=this.refs.map(a=>a.getValue(null==b?void 0:b.value,null==b?void 0:b.parent,null==b?void 0:b.context)),d=this.fn(c,a,b);if(void 0===d||d===a)return a;if(!fF(d))throw TypeError("conditions must return a schema object");return d.resolve(b)}}class fH{constructor(a,b={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,"string"!=typeof a)throw TypeError("ref must be a string, got: "+a);if(this.key=a.trim(),""===a)throw TypeError("ref must be a non-empty string");this.isContext="$"===this.key[0],this.isValue="."===this.key[0],this.isSibling=!this.isContext&&!this.isValue;let c=this.isContext?"$":this.isValue?".":"";this.path=this.key.slice(c.length),this.getter=this.path&&(0,fj.getter)(this.path,!0),this.map=b.map}getValue(a,b,c){let d=this.isContext?c:this.isValue?a:b;return this.getter&&(d=this.getter(d||{})),this.map&&(d=this.map(d)),d}cast(a,b){return this.getValue(a,null==b?void 0:b.parent,null==b?void 0:b.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(a){return a&&a.__isYupRef}}function fI(a){function b({value:b,path:c="",options:d,originalValue:e,schema:f},g,h){let i,{name:j,test:k,params:l,message:m,skipAbsent:n}=a,{parent:o,context:p,abortEarly:q=f.spec.abortEarly,disableStackTrace:r=f.spec.disableStackTrace}=d,s={value:b,parent:o,context:p};function t(a={}){let d=fJ(Object.assign({value:b,originalValue:e,label:f.spec.label,path:a.path||c,spec:f.spec,disableStackTrace:a.disableStackTrace||r},l,a.params),s),g=new fw(fw.formatError(a.message||m,d),b,d.path,a.type||j,d.disableStackTrace);return g.params=d,g}let u=q?g:h,v={path:c,parent:o,type:j,from:d.from,createError:t,resolve:a=>fK(a,s),options:d,originalValue:e,schema:f},w=a=>{fw.isError(a)?u(a):a?h(null):u(t())},x=a=>{fw.isError(a)?u(a):g(a)};if(n&&null==b)return w(!0);try{var y;if(i=k.call(v,b,v),"function"==typeof(null==(y=i)?void 0:y.then)){if(d.sync)throw Error(`Validation test of type: "${v.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(i).then(w,x)}}catch(a){x(a);return}w(i)}return b.OPTIONS=a,b}function fJ(a,b){if(!a)return a;for(let c of Object.keys(a))a[c]=fK(a[c],b);return a}function fK(a,b){return fH.isRef(a)?a.getValue(b.value,b.parent,b.context):a}fH.prototype.__isYupRef=!0;class fL extends Set{describe(){let a=[];for(let b of this.values())a.push(fH.isRef(b)?b.describe():b);return a}resolveAll(a){let b=[];for(let c of this.values())b.push(a(c));return b}clone(){return new fL(this.values())}merge(a,b){let c=this.clone();return a.forEach(a=>c.add(a)),b.forEach(a=>c.delete(a)),c}}function fM(a,b=new Map){let c;if(fF(a)||!a||"object"!=typeof a)return a;if(b.has(a))return b.get(a);if(a instanceof Date)c=new Date(a.getTime()),b.set(a,c);else if(a instanceof RegExp)c=new RegExp(a),b.set(a,c);else if(Array.isArray(a)){c=Array(a.length),b.set(a,c);for(let d=0;d<a.length;d++)c[d]=fM(a[d],b)}else if(a instanceof Map)for(let[d,e]of(c=new Map,b.set(a,c),a.entries()))c.set(d,fM(e,b));else if(a instanceof Set)for(let d of(c=new Set,b.set(a,c),a))c.add(fM(d,b));else if(a instanceof Object)for(let[d,e]of(c={},b.set(a,c),Object.entries(a)))c[d]=fM(e,b);else throw Error(`Unable to clone ${a}`);return c}function fN(a,b){var c;if(!(null!=(c=a.inner)&&c.length)&&a.errors.length){let c;return c=b?`${b}.${a.path}`:a.path,a.errors.map(a=>({message:a,path:function(a){if(!(null!=a&&a.length))return;let b=[],c="",d=!1,e=!1;for(let f=0;f<a.length;f++){let g=a[f];if("["===g&&!e){c&&(b.push(...c.split(".").filter(Boolean)),c=""),d=!0;continue}if("]"===g&&!e){c&&(/^\d+$/.test(c)?b.push(c):b.push(c.replace(/^"|"$/g,"")),c=""),d=!1;continue}if('"'===g){e=!e;continue}if("."===g&&!d&&!e){c&&(b.push(c),c="");continue}c+=g}return c&&b.push(...c.split(".").filter(Boolean)),b}(c)}))}let d=b?`${b}.${a.path}`:a.path;return a.inner.flatMap(a=>fN(a,d))}class fO{constructor(a){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new fL,this._blacklist=new fL,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(fx.notType)}),this.type=a.type,this._typeCheck=a.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},null==a?void 0:a.spec),this.withMutation(a=>{a.nonNullable()})}get _type(){return this.type}clone(a){if(this._mutate)return a&&Object.assign(this.spec,a),this;let b=Object.create(Object.getPrototypeOf(this));return b.type=this.type,b._typeCheck=this._typeCheck,b._whitelist=this._whitelist.clone(),b._blacklist=this._blacklist.clone(),b.internalTests=Object.assign({},this.internalTests),b.exclusiveTests=Object.assign({},this.exclusiveTests),b.deps=[...this.deps],b.conditions=[...this.conditions],b.tests=[...this.tests],b.transforms=[...this.transforms],b.spec=fM(Object.assign({},this.spec,a)),b}label(a){let b=this.clone();return b.spec.label=a,b}meta(...a){if(0===a.length)return this.spec.meta;let b=this.clone();return b.spec.meta=Object.assign(b.spec.meta||{},a[0]),b}withMutation(a){let b=this._mutate;this._mutate=!0;let c=a(this);return this._mutate=b,c}concat(a){if(!a||a===this)return this;if(a.type!==this.type&&"mixed"!==this.type)throw TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${a.type}`);let b=a.clone(),c=Object.assign({},this.spec,b.spec);return b.spec=c,b.internalTests=Object.assign({},this.internalTests,b.internalTests),b._whitelist=this._whitelist.merge(a._whitelist,a._blacklist),b._blacklist=this._blacklist.merge(a._blacklist,a._whitelist),b.tests=this.tests,b.exclusiveTests=this.exclusiveTests,b.withMutation(b=>{a.tests.forEach(a=>{b.test(a.OPTIONS)})}),b.transforms=[...this.transforms,...b.transforms],b}isType(a){return null==a?!!this.spec.nullable&&null===a||!!this.spec.optional&&void 0===a:this._typeCheck(a)}resolve(a){let b=this;if(b.conditions.length){let c=b.conditions;(b=b.clone()).conditions=[],b=(b=c.reduce((b,c)=>c.resolve(b,a),b)).resolve(a)}return b}resolveOptions(a){var b,c,d,e;return Object.assign({},a,{from:a.from||[],strict:null!=(b=a.strict)?b:this.spec.strict,abortEarly:null!=(c=a.abortEarly)?c:this.spec.abortEarly,recursive:null!=(d=a.recursive)?d:this.spec.recursive,disableStackTrace:null!=(e=a.disableStackTrace)?e:this.spec.disableStackTrace})}cast(a,b={}){let c=this.resolve(Object.assign({},b,{value:a})),d="ignore-optionality"===b.assert,e=c._cast(a,b);if(!1!==b.assert&&!c.isType(e)){if(d&&null==e)return e;let f=fs(a),g=fs(e);throw TypeError(`The value of ${b.path||"field"} could not be cast to a value that satisfies the schema type: "${c.type}". 

attempted value: ${f} 
`+(g!==f?`result of cast: ${g}`:""))}return e}_cast(a,b){let c=void 0===a?a:this.transforms.reduce((c,d)=>d.call(this,c,a,this,b),a);return void 0===c&&(c=this.getDefault(b)),c}_validate(a,b={},c,d){let{path:e,originalValue:f=a,strict:g=this.spec.strict}=b,h=a;g||(h=this._cast(h,Object.assign({assert:!1},b)));let i=[];for(let a of Object.values(this.internalTests))a&&i.push(a);this.runTests({path:e,value:h,originalValue:f,options:b,tests:i},c,a=>{if(a.length)return d(a,h);this.runTests({path:e,value:h,originalValue:f,options:b,tests:this.tests},c,d)})}runTests(a,b,c){let d=!1,{tests:e,value:f,originalValue:g,path:h,options:i}=a,j=a=>{d||(d=!0,b(a,f))},k=a=>{d||(d=!0,c(a,f))},l=e.length,m=[];if(!l)return k([]);let n={value:f,originalValue:g,path:h,options:i,schema:this};for(let a=0;a<e.length;a++)(0,e[a])(n,j,function(a){a&&(Array.isArray(a)?m.push(...a):m.push(a)),--l<=0&&k(m)})}asNestedTest({key:a,index:b,parent:c,parentPath:d,originalParent:e,options:f}){let g=null!=a?a:b;if(null==g)throw TypeError("Must include `key` or `index` for nested validations");let h="number"==typeof g,i=c[g],j=Object.assign({},f,{strict:!0,parent:c,value:i,originalValue:e[g],key:void 0,[h?"index":"key"]:g,path:h||g.includes(".")?`${d||""}[${h?g:`"${g}"`}]`:(d?`${d}.`:"")+a});return(a,b,c)=>this.resolve(j)._validate(i,j,b,c)}validate(a,b){var c;let d=this.resolve(Object.assign({},b,{value:a})),e=null!=(c=null==b?void 0:b.disableStackTrace)?c:d.spec.disableStackTrace;return new Promise((c,f)=>d._validate(a,b,(a,b)=>{fw.isError(a)&&(a.value=b),f(a)},(a,b)=>{a.length?f(new fw(a,b,void 0,void 0,e)):c(b)}))}validateSync(a,b){var c;let d,e=this.resolve(Object.assign({},b,{value:a})),f=null!=(c=null==b?void 0:b.disableStackTrace)?c:e.spec.disableStackTrace;return e._validate(a,Object.assign({},b,{sync:!0}),(a,b)=>{throw fw.isError(a)&&(a.value=b),a},(b,c)=>{if(b.length)throw new fw(b,a,void 0,void 0,f);d=c}),d}isValid(a,b){return this.validate(a,b).then(()=>!0,a=>{if(fw.isError(a))return!1;throw a})}isValidSync(a,b){try{return this.validateSync(a,b),!0}catch(a){if(fw.isError(a))return!1;throw a}}_getDefault(a){let b=this.spec.default;return null==b?b:"function"==typeof b?b.call(this,a):fM(b)}getDefault(a){return this.resolve(a||{})._getDefault(a)}default(a){return 0==arguments.length?this._getDefault():this.clone({default:a})}strict(a=!0){return this.clone({strict:a})}nullability(a,b){let c=this.clone({nullable:a});return c.internalTests.nullable=fI({message:b,name:"nullable",test(a){return null!==a||this.schema.spec.nullable}}),c}optionality(a,b){let c=this.clone({optional:a});return c.internalTests.optionality=fI({message:b,name:"optionality",test(a){return void 0!==a||this.schema.spec.optional}}),c}optional(){return this.optionality(!0)}defined(a=fx.defined){return this.optionality(!1,a)}nullable(){return this.nullability(!0)}nonNullable(a=fx.notNull){return this.nullability(!1,a)}required(a=fx.required){return this.clone().withMutation(b=>b.nonNullable(a).defined(a))}notRequired(){return this.clone().withMutation(a=>a.nullable().optional())}transform(a){let b=this.clone();return b.transforms.push(a),b}test(...a){let b;if(void 0===(b=1===a.length?"function"==typeof a[0]?{test:a[0]}:a[0]:2===a.length?{name:a[0],test:a[1]}:{name:a[0],message:a[1],test:a[2]}).message&&(b.message=fx.default),"function"!=typeof b.test)throw TypeError("`test` is a required parameters");let c=this.clone(),d=fI(b),e=b.exclusive||b.name&&!0===c.exclusiveTests[b.name];if(b.exclusive&&!b.name)throw TypeError("Exclusive tests must provide a unique `name` identifying the test");return b.name&&(c.exclusiveTests[b.name]=!!b.exclusive),c.tests=c.tests.filter(a=>(a.OPTIONS.name!==b.name||!e&&a.OPTIONS.test!==d.OPTIONS.test)&&!0),c.tests.push(d),c}when(a,b){Array.isArray(a)||"string"==typeof a||(b=a,a=".");let c=this.clone(),d=ft(a).map(a=>new fH(a));return d.forEach(a=>{a.isSibling&&c.deps.push(a.key)}),c.conditions.push("function"==typeof b?new fG(d,b):fG.fromOptions(d,b)),c}typeError(a){let b=this.clone();return b.internalTests.typeError=fI({message:a,name:"typeError",skipAbsent:!0,test(a){return!!this.schema._typeCheck(a)||this.createError({params:{type:this.schema.type}})}}),b}oneOf(a,b=fx.oneOf){let c=this.clone();return a.forEach(a=>{c._whitelist.add(a),c._blacklist.delete(a)}),c.internalTests.whiteList=fI({message:b,name:"oneOf",skipAbsent:!0,test(a){let b=this.schema._whitelist,c=b.resolveAll(this.resolve);return!!c.includes(a)||this.createError({params:{values:Array.from(b).join(", "),resolved:c}})}}),c}notOneOf(a,b=fx.notOneOf){let c=this.clone();return a.forEach(a=>{c._blacklist.add(a),c._whitelist.delete(a)}),c.internalTests.blacklist=fI({message:b,name:"notOneOf",test(a){let b=this.schema._blacklist,c=b.resolveAll(this.resolve);return!c.includes(a)||this.createError({params:{values:Array.from(b).join(", "),resolved:c}})}}),c}strip(a=!0){let b=this.clone();return b.spec.strip=a,b}describe(a){let b=(a?this.resolve(a):this).clone(),{label:c,meta:d,optional:e,nullable:f}=b.spec;return{meta:d,label:c,optional:e,nullable:f,default:b.getDefault(a),type:b.type,oneOf:b._whitelist.describe(),notOneOf:b._blacklist.describe(),tests:b.tests.filter((a,b,c)=>c.findIndex(b=>b.OPTIONS.name===a.OPTIONS.name)===b).map(b=>{let c=b.OPTIONS.params&&a?fJ(Object.assign({},b.OPTIONS.params),a):b.OPTIONS.params;return{name:b.OPTIONS.name,params:c}})}}get"~standard"(){let a=this;return{version:1,vendor:"yup",async validate(b){try{return{value:await a.validate(b,{abortEarly:!1})}}catch(a){if(a instanceof fw)return{issues:fN(a)};throw a}}}}}for(let a of(fO.prototype.__isYupSchema__=!0,["validate","validateSync"]))fO.prototype[`${a}At`]=function(b,c,d={}){let{parent:e,parentPath:f,schema:g}=function(a,b,c,d=c){let e,f,g;return b?((0,fj.forEach)(b,(h,i,j)=>{let k=i?h.slice(1,h.length-1):h,l="tuple"===(a=a.resolve({context:d,parent:e,value:c})).type,m=j?parseInt(k,10):0;if(a.innerType||l){if(l&&!j)throw Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${g}" must contain an index to the tuple element, e.g. "${g}[0]"`);if(c&&m>=c.length)throw Error(`Yup.reach cannot resolve an array item at index: ${h}, in the path: ${b}. because there is no value at that index. `);e=c,c=c&&c[m],a=l?a.spec.types[m]:a.innerType}if(!j){if(!a.fields||!a.fields[k])throw Error(`The schema does not contain the path: ${b}. (failed at: ${g} which is a type: "${a.type}")`);e=c,c=c&&c[k],a=a.fields[k]}f=k,g=i?"["+h+"]":"."+h}),{schema:a,parent:e,parentPath:f}):{parent:e,parentPath:b,schema:a}}(this,b,c,d.context);return g[a](e&&e[f],Object.assign({},d,{parent:e,path:b}))};for(let a of["equals","is"])fO.prototype[a]=fO.prototype.oneOf;for(let a of["not","nope"])fO.prototype[a]=fO.prototype.notOneOf;let fP=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function fQ(a){var b,c;let d=fP.exec(a);return d?{year:fR(d[1]),month:fR(d[2],1)-1,day:fR(d[3],1),hour:fR(d[4]),minute:fR(d[5]),second:fR(d[6]),millisecond:d[7]?fR(d[7].substring(0,3)):0,precision:null!=(b=null==(c=d[7])?void 0:c.length)?b:void 0,z:d[8]||void 0,plusMinus:d[9]||void 0,hourOffset:fR(d[10]),minuteOffset:fR(d[11])}:null}function fR(a,b=0){return Number(a)||b}let fS=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,fT=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,fU=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,fV=RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"),fW=a=>null==a||a===a.trim(),fX=({}).toString();function fY(){return new fZ}class fZ extends fO{constructor(){super({type:"string",check:a=>(a instanceof String&&(a=a.valueOf()),"string"==typeof a)}),this.withMutation(()=>{this.transform((a,b)=>{if(!this.spec.coerce||this.isType(a)||Array.isArray(a))return a;let c=null!=a&&a.toString?a.toString():a;return c===fX?a:c})})}required(a){return super.required(a).withMutation(b=>b.test({message:a||fx.required,name:"required",skipAbsent:!0,test:a=>!!a.length}))}notRequired(){return super.notRequired().withMutation(a=>(a.tests=a.tests.filter(a=>"required"!==a.OPTIONS.name),a))}length(a,b=fy.length){return this.test({message:b,name:"length",exclusive:!0,params:{length:a},skipAbsent:!0,test(b){return b.length===this.resolve(a)}})}min(a,b=fy.min){return this.test({message:b,name:"min",exclusive:!0,params:{min:a},skipAbsent:!0,test(b){return b.length>=this.resolve(a)}})}max(a,b=fy.max){return this.test({name:"max",exclusive:!0,message:b,params:{max:a},skipAbsent:!0,test(b){return b.length<=this.resolve(a)}})}matches(a,b){let c,d,e=!1;return b&&("object"==typeof b?{excludeEmptyString:e=!1,message:c,name:d}=b:c=b),this.test({name:d||"matches",message:c||fy.matches,params:{regex:a},skipAbsent:!0,test:b=>""===b&&e||-1!==b.search(a)})}email(a=fy.email){return this.matches(fS,{name:"email",message:a,excludeEmptyString:!0})}url(a=fy.url){return this.matches(fT,{name:"url",message:a,excludeEmptyString:!0})}uuid(a=fy.uuid){return this.matches(fU,{name:"uuid",message:a,excludeEmptyString:!1})}datetime(a){let b,c,d="";return a&&("object"==typeof a?{message:d="",allowOffset:b=!1,precision:c}=a:d=a),this.matches(fV,{name:"datetime",message:d||fy.datetime,excludeEmptyString:!0}).test({name:"datetime_offset",message:d||fy.datetime_offset,params:{allowOffset:b},skipAbsent:!0,test:a=>{if(!a||b)return!0;let c=fQ(a);return!!c&&!!c.z}}).test({name:"datetime_precision",message:d||fy.datetime_precision,params:{precision:c},skipAbsent:!0,test:a=>{if(!a||void 0==c)return!0;let b=fQ(a);return!!b&&b.precision===c}})}ensure(){return this.default("").transform(a=>null===a?"":a)}trim(a=fy.trim){return this.transform(a=>null!=a?a.trim():a).test({message:a,name:"trim",test:fW})}lowercase(a=fy.lowercase){return this.transform(a=>null==a?a:a.toLowerCase()).test({message:a,name:"string_case",exclusive:!0,skipAbsent:!0,test:a=>null==a||a===a.toLowerCase()})}uppercase(a=fy.uppercase){return this.transform(a=>null==a?a:a.toUpperCase()).test({message:a,name:"string_case",exclusive:!0,skipAbsent:!0,test:a=>null==a||a===a.toUpperCase()})}}fY.prototype=fZ.prototype;let f$=new Date("");function f_(){return new f0}class f0 extends fO{constructor(){super({type:"date",check:a=>"[object Date]"===Object.prototype.toString.call(a)&&!isNaN(a.getTime())}),this.withMutation(()=>{this.transform((a,b)=>!this.spec.coerce||this.isType(a)||null===a?a:isNaN(a=function(a){let b=fQ(a);if(!b)return Date.parse?Date.parse(a):NaN;if(void 0===b.z&&void 0===b.plusMinus)return new Date(b.year,b.month,b.day,b.hour,b.minute,b.second,b.millisecond).valueOf();let c=0;return"Z"!==b.z&&void 0!==b.plusMinus&&(c=60*b.hourOffset+b.minuteOffset,"+"===b.plusMinus&&(c=0-c)),Date.UTC(b.year,b.month,b.day,b.hour,b.minute+c,b.second,b.millisecond)}(a))?f0.INVALID_DATE:new Date(a))})}prepareParam(a,b){let c;if(fH.isRef(a))c=a;else{let d=this.cast(a);if(!this._typeCheck(d))throw TypeError(`\`${b}\` must be a Date or a value that can be \`cast()\` to a Date`);c=d}return c}min(a,b=fA.min){let c=this.prepareParam(a,"min");return this.test({message:b,name:"min",exclusive:!0,params:{min:a},skipAbsent:!0,test(a){return a>=this.resolve(c)}})}max(a,b=fA.max){let c=this.prepareParam(a,"max");return this.test({message:b,name:"max",exclusive:!0,params:{max:a},skipAbsent:!0,test(a){return a<=this.resolve(c)}})}}function f1(a,b){let c=1/0;return a.some((a,d)=>{var e;if(null!=(e=b.path)&&e.includes(a))return c=d,!0}),c}function f2(a){return(b,c)=>f1(a,b)-f1(a,c)}f0.INVALID_DATE=f$,f_.prototype=f0.prototype,f_.INVALID_DATE=f$;let f3=(a,b,c)=>{if("string"!=typeof a)return a;let d=a;try{d=JSON.parse(a)}catch(a){}return c.isType(d)?d:a},f4=a=>"[object Object]"===Object.prototype.toString.call(a);function f5(a,b){let c=Object.keys(a.fields);return Object.keys(b).filter(a=>-1===c.indexOf(a))}let f6=f2([]);function f7(a){return new f8(a)}class f8 extends fO{constructor(a){super({type:"object",check:a=>f4(a)||"function"==typeof a}),this.fields=Object.create(null),this._sortErrors=f6,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{a&&this.shape(a)})}_cast(a,b={}){var c;let d=super._cast(a,b);if(void 0===d)return this.getDefault(b);if(!this._typeCheck(d))return d;let e=this.fields,f=null!=(c=b.stripUnknown)?c:this.spec.noUnknown,g=[].concat(this._nodes,Object.keys(d).filter(a=>!this._nodes.includes(a))),h={},i=Object.assign({},b,{parent:h,__validating:b.__validating||!1}),j=!1;for(let a of g){let c=e[a],g=a in d,k=d[a];if(c){let e;i.path=(b.path?`${b.path}.`:"")+a;let f=(c=c.resolve({value:k,context:b.context,parent:h}))instanceof fO?c.spec:void 0,g=null==f?void 0:f.strict;if(null!=f&&f.strip){j=j||a in d;continue}void 0!==(e=b.__validating&&g?k:c.cast(k,i))&&(h[a]=e)}else g&&!f&&(h[a]=k);(g!==a in h||h[a]!==k)&&(j=!0)}return j?h:d}_validate(a,b={},c,d){let{from:e=[],originalValue:f=a,recursive:g=this.spec.recursive}=b;b.from=[{schema:this,value:f},...e],b.__validating=!0,b.originalValue=f,super._validate(a,b,c,(a,e)=>{if(!g||!f4(e))return void d(a,e);f=f||e;let h=[];for(let a of this._nodes){let c=this.fields[a];!c||fH.isRef(c)||h.push(c.asNestedTest({options:b,key:a,parent:e,parentPath:b.path,originalParent:f}))}this.runTests({tests:h,value:e,originalValue:f,options:b},c,b=>{d(b.sort(this._sortErrors).concat(a),e)})})}clone(a){let b=super.clone(a);return b.fields=Object.assign({},this.fields),b._nodes=this._nodes,b._excludedEdges=this._excludedEdges,b._sortErrors=this._sortErrors,b}concat(a){let b=super.concat(a),c=b.fields;for(let[a,b]of Object.entries(this.fields)){let d=c[a];c[a]=void 0===d?b:d}return b.withMutation(b=>b.setFields(c,[...this._excludedEdges,...a._excludedEdges]))}_getDefault(a){if("default"in this.spec)return super._getDefault(a);if(!this._nodes.length)return;let b={};return this._nodes.forEach(c=>{var d;let e=this.fields[c],f=a;null!=(d=f)&&d.value&&(f=Object.assign({},f,{parent:f.value,value:f.value[c]})),b[c]=e&&"getDefault"in e?e.getDefault(f):void 0}),b}setFields(a,b){let c=this.clone();return c.fields=a,c._nodes=function(a,b=[]){let c=[],d=new Set,e=new Set(b.map(([a,b])=>`${a}-${b}`));function f(a,b){let f=(0,fj.split)(a)[0];d.add(f),e.has(`${b}-${f}`)||c.push([b,f])}for(let b of Object.keys(a)){let c=a[b];d.add(b),fH.isRef(c)&&c.isSibling?f(c.path,b):fF(c)&&"deps"in c&&c.deps.forEach(a=>f(a,b))}return fl.default.array(Array.from(d),c).reverse()}(a,b),c._sortErrors=f2(Object.keys(a)),b&&(c._excludedEdges=b),c}shape(a,b=[]){return this.clone().withMutation(c=>{let d=c._excludedEdges;return b.length&&(Array.isArray(b[0])||(b=[b]),d=[...c._excludedEdges,...b]),c.setFields(Object.assign(c.fields,a),d)})}partial(){let a={};for(let[b,c]of Object.entries(this.fields))a[b]="optional"in c&&c.optional instanceof Function?c.optional():c;return this.setFields(a)}deepPartial(){return function a(b){if("fields"in b){let c={};for(let[d,e]of Object.entries(b.fields))c[d]=a(e);return b.setFields(c)}if("array"===b.type){let c=b.optional();return c.innerType&&(c.innerType=a(c.innerType)),c}return"tuple"===b.type?b.optional().clone({types:b.spec.types.map(a)}):"optional"in b?b.optional():b}(this)}pick(a){let b={};for(let c of a)this.fields[c]&&(b[c]=this.fields[c]);return this.setFields(b,this._excludedEdges.filter(([b,c])=>a.includes(b)&&a.includes(c)))}omit(a){let b=[];for(let c of Object.keys(this.fields))a.includes(c)||b.push(c);return this.pick(b)}from(a,b,c){let d=(0,fj.getter)(a,!0);return this.transform(e=>{if(!e)return e;let f=e;return((a,b)=>{let c=[...(0,fj.normalizePath)(b)];if(1===c.length)return c[0]in a;let d=c.pop(),e=(0,fj.getter)((0,fj.join)(c),!0)(a);return!!(e&&d in e)})(e,a)&&(f=Object.assign({},e),c||delete f[a],f[b]=d(e)),f})}json(){return this.transform(f3)}exact(a){return this.test({name:"exact",exclusive:!0,message:a||fC.exact,test(a){if(null==a)return!0;let b=f5(this.schema,a);return 0===b.length||this.createError({params:{properties:b.join(", ")}})}})}stripUnknown(){return this.clone({noUnknown:!0})}noUnknown(a=!0,b=fC.noUnknown){"boolean"!=typeof a&&(b=a,a=!0);let c=this.test({name:"noUnknown",exclusive:!0,message:b,test(b){if(null==b)return!0;let c=f5(this.schema,b);return!a||0===c.length||this.createError({params:{unknown:c.join(", ")}})}});return c.spec.noUnknown=a,c}unknown(a=!0,b=fC.noUnknown){return this.noUnknown(!a,b)}transformKeys(a){return this.transform(b=>{if(!b)return b;let c={};for(let d of Object.keys(b))c[a(d)]=b[d];return c})}camelCase(){return this.transformKeys(fk.camelCase)}snakeCase(){return this.transformKeys(fk.snakeCase)}constantCase(){return this.transformKeys(a=>(0,fk.snakeCase)(a).toUpperCase())}describe(a){let b=(a?this.resolve(a):this).clone(),c=super.describe(a);for(let[e,f]of(c.fields={},Object.entries(b.fields))){var d;let b=a;null!=(d=b)&&d.value&&(b=Object.assign({},b,{parent:b.value,value:b.value[e]})),c.fields[e]=f.describe(b)}return c}}f7.prototype=f8.prototype;let f9={name:"",email:"",message:""},ga=f7({name:fY().required("Name is required").min(2,"Name must be at least 2 characters").max(200,"Name must be less than 200 characters").trim(),email:fY().required("Email is required").email("Please provide a valid email address").max(200,"Email must be less than 200 characters").trim(),message:fY().required("Message is required").min(10,"Message must be at least 10 characters").max(5e3,"Message must be less than 5000 characters").trim()}),gb=_.default.form.withConfig({displayName:"ContactForm.styles__ContactFormWrapper",componentId:"sc-f17c1543-0"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:a})=>a.spacing.lg};
  width: 100%;
  max-width: 800px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`,gc=_.default.div.withConfig({displayName:"ContactForm.styles__FormActions",componentId:"sc-f17c1543-1"})`
  display: flex;
  justify-content: flex-start;
  margin-top: ${({theme:a})=>a.spacing.sm};
`,gd=_.default.button.withConfig({displayName:"ContactForm.styles__SendButton",componentId:"sc-f17c1543-2"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyBody};
  background-color: ${({theme:a})=>a.colors.bgTertiary};
  color: ${({theme:a})=>a.colors.textPrimary};
  border: 1px solid ${({theme:a})=>a.colors.border};
  padding: ${({theme:a})=>a.spacing.sm} ${({theme:a})=>a.spacing.lg};
  font-size: ${({theme:a})=>a.typography.fontSize.sm};
  font-weight: ${({theme:a})=>a.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: ${({theme:a})=>a.borderRadius.sm};
  transition: all ${({theme:a})=>a.transitions.base};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: ${({theme:a})=>a.spacing.xs};

  &:hover:not(:disabled) {
    background-color: ${({theme:a})=>a.colors.textSecondary};
    color: ${({theme:a})=>a.colors.bgPrimary};
    border-color: ${({theme:a})=>a.colors.textSecondary};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,ge=()=>{var a,b,c,d,e,f,g,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,aa,ab,ac,ad;let ae,{formik:af,isSubmitting:ag}=(c=void 0===(b=(a={initialValues:f9,validationSchema:ga,onSubmit:async(a,{setSubmitting:b,resetForm:c})=>{try{let b=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}),d=await b.json();if(!b.ok||!d.success)throw Error(d.message||"Failed to send message");fi.default.success("Message sent successfully! Message received. I'll get back to you shortly."),c()}catch(b){let a=b instanceof Error?b.message:"Failed to send message. Please try again later.";fi.default.error(`Failed to send message: ${a}`)}finally{b(!1)}}}).validateOnChange)||b,e=void 0===(d=a.validateOnBlur)||d,g=void 0!==(f=a.validateOnMount)&&f,j=a.isInitialValid,l=void 0!==(k=a.enableReinitialize)&&k,m=a.onSubmit,n=eZ(a,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),o=eY({validateOnChange:c,validateOnBlur:e,validateOnMount:g,onSubmit:m},n),p=(0,i.useRef)(o.initialValues),q=(0,i.useRef)(o.initialErrors||e7),r=(0,i.useRef)(o.initialTouched||e8),s=(0,i.useRef)(o.initialStatus),t=(0,i.useRef)(!1),u=(0,i.useRef)({}),(0,i.useEffect)(function(){return t.current=!0,function(){t.current=!1}},[]),v=(0,i.useState)(0)[1],x=(w=(0,i.useRef)({values:eH(o.initialValues),errors:eH(o.initialErrors)||e7,touched:eH(o.initialTouched)||e8,status:eH(o.initialStatus),isSubmitting:!1,isValidating:!1,submitCount:0})).current,y=(0,i.useCallback)(function(a){var b=w.current;w.current=function(a,b){switch(b.type){case"SET_VALUES":return eY({},a,{values:b.payload});case"SET_TOUCHED":return eY({},a,{touched:b.payload});case"SET_ERRORS":if((0,eI.default)(a.errors,b.payload))return a;return eY({},a,{errors:b.payload});case"SET_STATUS":return eY({},a,{status:b.payload});case"SET_ISSUBMITTING":return eY({},a,{isSubmitting:b.payload});case"SET_ISVALIDATING":return eY({},a,{isValidating:b.payload});case"SET_FIELD_VALUE":return eY({},a,{values:e6(a.values,b.payload.field,b.payload.value)});case"SET_FIELD_TOUCHED":return eY({},a,{touched:e6(a.touched,b.payload.field,b.payload.value)});case"SET_FIELD_ERROR":return eY({},a,{errors:e6(a.errors,b.payload.field,b.payload.value)});case"RESET_FORM":return eY({},a,b.payload);case"SET_FORMIK_STATE":return b.payload(a);case"SUBMIT_ATTEMPT":return eY({},a,{touched:function a(b,c,d,e){void 0===d&&(d=new WeakMap),void 0===e&&(e={});for(var f=0,g=Object.keys(b);f<g.length;f++){var h=g[f],i=b[h];e2(i)?d.get(i)||(d.set(i,!0),e[h]=Array.isArray(i)?[]:{},a(i,c,d,e[h])):e[h]=c}return e}(a.values,!0),isSubmitting:!0,submitCount:a.submitCount+1});case"SUBMIT_FAILURE":case"SUBMIT_SUCCESS":return eY({},a,{isSubmitting:!1});default:return a}}(b,a),b!==w.current&&v(function(a){return a+1})},[]),z=(0,i.useCallback)(function(a,b){return new Promise(function(c,d){var e=o.validate(a,b);null==e?c(e7):e4(e)?e.then(function(a){c(a||e7)},function(a){d(a)}):c(e)})},[o.validate]),A=(0,i.useCallback)(function(a,b){var c,d,e,f,g=o.validationSchema,h=e1(g)?g(b):g,i=b&&h.validateAt?h.validateAt(b,a):(c=a,d=h,void 0===e&&(e=!1),f=function a(b){var c=Array.isArray(b)?[]:{};for(var d in b)if(Object.prototype.hasOwnProperty.call(b,d)){var e=String(d);!0===Array.isArray(b[e])?c[e]=b[e].map(function(b){return!0===Array.isArray(b)||cW(b)?a(b):""!==b?b:void 0}):cW(b[e])?c[e]=a(b[e]):c[e]=""!==b[e]?b[e]:void 0}return c}(c),d[e?"validateSync":"validate"](f,{abortEarly:!1,context:f}));return new Promise(function(a,b){i.then(function(){a(e7)},function(c){"ValidationError"===c.name?a(function(a){var b={};if(a.inner){if(0===a.inner.length)return e6(b,a.path,a.message);for(var c=a.inner,d=Array.isArray(c),e=0,c=d?c:c[Symbol.iterator]();;){if(d){if(e>=c.length)break;f=c[e++]}else{if((e=c.next()).done)break;f=e.value}var f,g=f;e5(b,g.path)||(b=e6(b,g.path,g.message))}}return b}(c)):b(c)})})},[o.validationSchema]),B=(0,i.useCallback)(function(a,b){return new Promise(function(c){return c(u.current[a].validate(b))})},[]),C=(0,i.useCallback)(function(a){var b=Object.keys(u.current).filter(function(a){return e1(u.current[a].validate)});return Promise.all(b.length>0?b.map(function(b){return B(b,e5(a,b))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")]).then(function(a){return a.reduce(function(a,c,d){return"DO_NOT_DELETE_YOU_WILL_BE_FIRED"===c||c&&(a=e6(a,b[d],c)),a},{})})},[B]),D=(0,i.useCallback)(function(a){return Promise.all([C(a),o.validationSchema?A(a):{},o.validate?z(a):{}]).then(function(a){var b=a[0],c=a[1],d=a[2];return cC.all([b,c,d],{arrayMerge:e9})})},[o.validate,o.validationSchema,C,z,A]),E=fb(function(a){return void 0===a&&(a=x.values),y({type:"SET_ISVALIDATING",payload:!0}),D(a).then(function(a){return t.current&&(y({type:"SET_ISVALIDATING",payload:!1}),y({type:"SET_ERRORS",payload:a})),a})}),(0,i.useEffect)(function(){g&&!0===t.current&&(0,eI.default)(p.current,o.initialValues)&&E(p.current)},[g,E]),F=(0,i.useCallback)(function(a){var b=a&&a.values?a.values:p.current,c=a&&a.errors?a.errors:q.current?q.current:o.initialErrors||{},d=a&&a.touched?a.touched:r.current?r.current:o.initialTouched||{},e=a&&a.status?a.status:s.current?s.current:o.initialStatus;p.current=b,q.current=c,r.current=d,s.current=e;var f=function(){y({type:"RESET_FORM",payload:{isSubmitting:!!a&&!!a.isSubmitting,errors:c,touched:d,status:e,values:b,isValidating:!!a&&!!a.isValidating,submitCount:a&&a.submitCount&&"number"==typeof a.submitCount?a.submitCount:0}})};if(o.onReset){var g=o.onReset(x.values,Y);e4(g)?g.then(f):f()}else f()},[o.initialErrors,o.initialStatus,o.initialTouched,o.onReset]),(0,i.useEffect)(function(){!0===t.current&&!(0,eI.default)(p.current,o.initialValues)&&l&&(p.current=o.initialValues,F(),g&&E(p.current))},[l,o.initialValues,F,g,E]),(0,i.useEffect)(function(){l&&!0===t.current&&!(0,eI.default)(q.current,o.initialErrors)&&(q.current=o.initialErrors||e7,y({type:"SET_ERRORS",payload:o.initialErrors||e7}))},[l,o.initialErrors]),(0,i.useEffect)(function(){l&&!0===t.current&&!(0,eI.default)(r.current,o.initialTouched)&&(r.current=o.initialTouched||e8,y({type:"SET_TOUCHED",payload:o.initialTouched||e8}))},[l,o.initialTouched]),(0,i.useEffect)(function(){l&&!0===t.current&&!(0,eI.default)(s.current,o.initialStatus)&&(s.current=o.initialStatus,y({type:"SET_STATUS",payload:o.initialStatus}))},[l,o.initialStatus,o.initialTouched]),G=fb(function(a){if(u.current[a]&&e1(u.current[a].validate)){var b=e5(x.values,a),c=u.current[a].validate(b);return e4(c)?(y({type:"SET_ISVALIDATING",payload:!0}),c.then(function(a){return a}).then(function(b){y({type:"SET_FIELD_ERROR",payload:{field:a,value:b}}),y({type:"SET_ISVALIDATING",payload:!1})})):(y({type:"SET_FIELD_ERROR",payload:{field:a,value:c}}),Promise.resolve(c))}return o.validationSchema?(y({type:"SET_ISVALIDATING",payload:!0}),A(x.values,a).then(function(a){return a}).then(function(b){y({type:"SET_FIELD_ERROR",payload:{field:a,value:e5(b,a)}}),y({type:"SET_ISVALIDATING",payload:!1})})):Promise.resolve()}),H=(0,i.useCallback)(function(a,b){var c=b.validate;u.current[a]={validate:c}},[]),I=(0,i.useCallback)(function(a){delete u.current[a]},[]),J=fb(function(a,b){return y({type:"SET_TOUCHED",payload:a}),(void 0===b?e:b)?E(x.values):Promise.resolve()}),K=(0,i.useCallback)(function(a){y({type:"SET_ERRORS",payload:a})},[]),L=fb(function(a,b){var d=e1(a)?a(x.values):a;return y({type:"SET_VALUES",payload:d}),(void 0===b?c:b)?E(d):Promise.resolve()}),M=(0,i.useCallback)(function(a,b){y({type:"SET_FIELD_ERROR",payload:{field:a,value:b}})},[]),N=fb(function(a,b,d){var e=e1(b)?b(e5(x.values,a)):b;return y({type:"SET_FIELD_VALUE",payload:{field:a,value:e}}),(void 0===d?c:d)?E(e6(x.values,a,e)):Promise.resolve()}),O=(0,i.useCallback)(function(a,b){var c,d=b,e=a;if(!e3(a)){a.persist&&a.persist();var f=a.target?a.target:a.currentTarget,g=f.type,h=f.name,i=f.id,j=f.value,k=f.checked,l=(f.outerHTML,f.options),m=f.multiple;d=b||h||i,e=/number|range/.test(g)?isNaN(c=parseFloat(j))?"":c:/checkbox/.test(g)?function(a,b,c){if("boolean"==typeof a)return!!b;var d=[],e=!1,f=-1;if(Array.isArray(a))d=a,e=(f=a.indexOf(c))>=0;else if(!c||"true"==c||"false"==c)return!!b;return b&&c&&!e?d.concat(c):e?d.slice(0,f).concat(d.slice(f+1)):d}(e5(x.values,d),k,j):l&&m?Array.from(l).filter(function(a){return a.selected}).map(function(a){return a.value}):j}d&&N(d,e)},[N,x.values]),P=fb(function(a){if(e3(a))return function(b){return O(b,a)};O(a)}),Q=fb(function(a,b,c){return void 0===b&&(b=!0),y({type:"SET_FIELD_TOUCHED",payload:{field:a,value:b}}),(void 0===c?e:c)?E(x.values):Promise.resolve()}),R=(0,i.useCallback)(function(a,b){a.persist&&a.persist();var c=a.target,d=c.name,e=c.id;c.outerHTML,Q(b||d||e,!0)},[Q]),S=fb(function(a){if(e3(a))return function(b){return R(b,a)};R(a)}),T=(0,i.useCallback)(function(a){e1(a)?y({type:"SET_FORMIK_STATE",payload:a}):y({type:"SET_FORMIK_STATE",payload:function(){return a}})},[]),U=(0,i.useCallback)(function(a){y({type:"SET_STATUS",payload:a})},[]),V=(0,i.useCallback)(function(a){y({type:"SET_ISSUBMITTING",payload:a})},[]),W=fb(function(){return y({type:"SUBMIT_ATTEMPT"}),E().then(function(a){var b,c=a instanceof Error;if(!c&&0===Object.keys(a).length){try{if(b=Z(),void 0===b)return}catch(a){throw a}return Promise.resolve(b).then(function(a){return t.current&&y({type:"SUBMIT_SUCCESS"}),a}).catch(function(a){if(t.current)throw y({type:"SUBMIT_FAILURE"}),a})}if(t.current&&(y({type:"SUBMIT_FAILURE"}),c))throw a})}),X=fb(function(a){a&&a.preventDefault&&e1(a.preventDefault)&&a.preventDefault(),a&&a.stopPropagation&&e1(a.stopPropagation)&&a.stopPropagation(),W().catch(function(a){console.warn("Warning: An unhandled error was caught from submitForm()",a)})}),Y={resetForm:F,validateForm:E,validateField:G,setErrors:K,setFieldError:M,setFieldTouched:Q,setFieldValue:N,setStatus:U,setSubmitting:V,setTouched:J,setValues:L,setFormikState:T,submitForm:W},Z=fb(function(){return m(x.values,Y)}),$=fb(function(a){a&&a.preventDefault&&e1(a.preventDefault)&&a.preventDefault(),a&&a.stopPropagation&&e1(a.stopPropagation)&&a.stopPropagation(),F()}),_=(0,i.useCallback)(function(a){return{value:e5(x.values,a),error:e5(x.errors,a),touched:!!e5(x.touched,a),initialValue:e5(p.current,a),initialTouched:!!e5(r.current,a),initialError:e5(q.current,a)}},[x.errors,x.touched,x.values]),aa=(0,i.useCallback)(function(a){return{setValue:function(b,c){return N(a,b,c)},setTouched:function(b,c){return Q(a,b,c)},setError:function(b){return M(a,b)}}},[N,Q,M]),ab=(0,i.useCallback)(function(a){var b=e2(a),c=b?a.name:a,d=e5(x.values,c),e={name:c,value:d,onChange:P,onBlur:S};if(b){var f=a.type,g=a.value,h=a.as,i=a.multiple;"checkbox"===f?void 0===g?e.checked=!!d:(e.checked=!!(Array.isArray(d)&&~d.indexOf(g)),e.value=g):"radio"===f?(e.checked=d===g,e.value=g):"select"===h&&i&&(e.value=e.value||[],e.multiple=!0)}return e},[S,P,x.values]),ac=(0,i.useMemo)(function(){return!(0,eI.default)(p.current,x.values)},[p.current,x.values]),ad=(0,i.useMemo)(function(){return void 0!==j?ac?x.errors&&0===Object.keys(x.errors).length:!1!==j&&e1(j)?j(o):j:x.errors&&0===Object.keys(x.errors).length},[j,ac,x.errors,o]),{formik:ae=eY({},x,{initialValues:p.current,initialErrors:q.current,initialTouched:r.current,initialStatus:s.current,handleBlur:S,handleChange:P,handleReset:$,handleSubmit:X,resetForm:F,setErrors:K,setFormikState:T,setFieldTouched:Q,setFieldValue:N,setFieldError:M,setStatus:U,setSubmitting:V,setTouched:J,setValues:L,submitForm:W,validateForm:E,validateField:G,isValid:ad,dirty:ac,unregisterField:I,registerField:H,getFieldProps:ab,getFieldMeta:_,getFieldHelpers:aa,validateOnBlur:e,validateOnChange:c,validateOnMount:g}),isSubmitting:ae.isSubmitting}),{values:ah,errors:ai,touched:aj,handleChange:ak,handleBlur:al,handleSubmit:am}=af;return(0,h.jsxs)(gb,{onSubmit:am,"data-aos":"fade-up","data-aos-delay":"300",children:[(0,h.jsx)(a9,{label:"NAME",name:"name",value:ah.name,onChange:ak,onBlur:al,error:aj.name&&ai.name?ai.name:void 0,placeholder:""}),(0,h.jsx)(a9,{label:"EMAIL",name:"email",type:"email",value:ah.email,onChange:ak,onBlur:al,error:aj.email&&ai.email?ai.email:void 0,placeholder:""}),(0,h.jsx)(ba,{label:"MESSAGE",name:"message",value:ah.message,onChange:ak,onBlur:al,error:aj.message&&ai.message?ai.message:void 0,placeholder:""}),(0,h.jsx)(gc,{children:(0,h.jsxs)(gd,{type:"submit",disabled:ag,children:[ag?"Sending...":"Send Message",(0,h.jsx)(cw,{size:16})]})})]})},gf=_.default.div.withConfig({displayName:"Contact.styles__StyledContact",componentId:"sc-8b48986e-0"})`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`,gg=_.default.div.withConfig({displayName:"Contact.styles__ContactWrapper",componentId:"sc-8b48986e-1"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:a})=>a.spacing["4xl"]};
  align-items: center;
  width: 100%;
`,gh=_.default.div.withConfig({displayName:"Contact.styles__ContactFormSection",componentId:"sc-8b48986e-2"})`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 800px;

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`,gi=({sectionNumber:a="04",headline:b="Let's Build Something Together",description:c="Open to collaboration on research projects, open-source contributions, healthcare AI initiatives, or consulting opportunities."})=>(0,h.jsx)(bg,{id:"contact",children:(0,h.jsx)(be,{children:(0,h.jsx)(gf,{children:(0,h.jsxs)(gg,{children:[(0,h.jsx)(cv,{sectionNumber:a,headline:b,description:c}),(0,h.jsx)(gh,{children:(0,h.jsx)(ge,{})})]})})})}),gj=_.default.section.withConfig({displayName:"ReachOut.styles__StyledReachOut",componentId:"sc-82657052-0"})`
  position: relative;
  padding: ${({theme:a})=>a.spacing["4xl"]} 0;

  @media (max-width: 768px) {
    padding: ${({theme:a})=>a.spacing["3xl"]} 0;
  }
`,gk=_.default.div.withConfig({displayName:"ReachOut.styles__ReachOutContent",componentId:"sc-82657052-1"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:a})=>a.spacing["3xl"]};
  position: relative;
`,gl=_.default.div.withConfig({displayName:"ReachOut.styles__ReachOutHeaderWrapper",componentId:"sc-82657052-2"})`
  display: flex;
  align-items: center;
  gap: ${({theme:a})=>a.spacing.lg};
  width: 100%;

  @media (max-width: 1024px) {
    gap: ${({theme:a})=>a.spacing.md};
  }
`,gm=_.default.div.withConfig({displayName:"ReachOut.styles__ReachOutLine",componentId:"sc-82657052-3"})`
  flex: 1;
  height: 1px;
  background-color: ${({theme:a})=>a.colors.border};
`,gn=_.default.span.withConfig({displayName:"ReachOut.styles__ReachOutHeader",componentId:"sc-82657052-4"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyBody};
  text-align: center;
  color: ${({theme:a})=>a.colors.textSecondary};
  font-size: ${({theme:a})=>a.typography.fontSize.sm};
  font-weight: ${({theme:a})=>a.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  white-space: nowrap;
  flex-shrink: 0;

  @media (max-width: 1024px) {
    font-size: ${({theme:a})=>a.typography.fontSize.xs};
  }
`,go=_.default.div.withConfig({displayName:"ReachOut.styles__ContactCards",componentId:"sc-82657052-5"})`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({theme:a})=>a.spacing.xl};
  position: relative;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: ${({theme:a})=>a.spacing.lg};
  }
`,gp=_.default.div.withConfig({displayName:"ReachOut.styles__ContactCard",componentId:"sc-82657052-6"})`
  background-color: ${({theme:a})=>a.colors.bgSecondary};
  border: 1px solid ${({theme:a})=>a.colors.border};
  border-radius: ${({theme:a})=>a.borderRadius.md};
  padding: ${({theme:a})=>a.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${({theme:a})=>a.spacing.sm};
  transition: all ${({theme:a})=>a.transitions.base};

  &:hover {
    border-color: ${({theme:a})=>a.colors.textSecondary};
    transform: translateY(-2px);
  }
`,gq=_.default.span.withConfig({displayName:"ReachOut.styles__CardLabel",componentId:"sc-82657052-7"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyBody};
  font-size: ${({theme:a})=>a.typography.fontSize.xs};
  font-weight: ${({theme:a})=>a.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({theme:a})=>a.colors.textSecondary};
`,gr=_.default.span.withConfig({displayName:"ReachOut.styles__CardValue",componentId:"sc-82657052-8"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyBody};
  font-size: ${({theme:a})=>a.typography.fontSize.base};
  color: ${({theme:a})=>a.colors.textPrimary};
  word-break: break-word;
`,gs=_.default.a.withConfig({displayName:"ReachOut.styles__CardLink",componentId:"sc-82657052-9"})`
  color: ${({theme:a})=>a.colors.textPrimary};
  text-decoration: none;
  transition: color ${({theme:a})=>a.transitions.fast};

  &:hover {
    color: ${({theme:a})=>a.colors.accent};
  }
`,gt=({email:a="sd.umarnazir@gmail.com",phone:b="+917051732616",github:c="https://github.com/umarnaxir",linkedin:d="https://www.linkedin.com/in/umar-nazir19/"})=>{let e=[{label:"EMAIL",value:a,href:`mailto:${a}`},{label:"PHONE",value:b,href:`tel:${b}`},{label:"GITHUB",value:"umarnaxir",href:c},{label:"LINKEDIN",value:"Umar Nazir",href:d}];return(0,h.jsx)(gj,{children:(0,h.jsx)(be,{children:(0,h.jsxs)(gk,{children:[(0,h.jsxs)(gl,{"data-aos":"fade-up",children:[(0,h.jsx)(gm,{}),(0,h.jsx)(bc,{variant:"caption",color:"secondary",as:"span",children:(0,h.jsx)(gn,{children:"OR REACH OUT DIRECTLY"})}),(0,h.jsx)(gm,{})]}),(0,h.jsx)(go,{children:e.map((a,b)=>(0,h.jsxs)(gp,{"data-aos":"fade-up","data-aos-delay":100*b,children:[(0,h.jsx)(bc,{variant:"caption",color:"secondary",as:"span",children:(0,h.jsx)(gq,{children:a.label})}),a.href?(0,h.jsx)(gs,{href:a.href,target:"EMAIL"!==a.label?"_blank":void 0,rel:"EMAIL"!==a.label?"noopener noreferrer":void 0,children:(0,h.jsx)(bc,{variant:"body",as:"span",children:(0,h.jsx)(gr,{children:a.value})})}):(0,h.jsx)(bc,{variant:"body",as:"span",children:(0,h.jsx)(gr,{children:a.value})})]},b))})]})})})},gu=_.default.footer.withConfig({displayName:"Footer.styles__StyledFooter",componentId:"sc-d97a5ab1-0"})`
  border-top: 1px solid ${({theme:a})=>a.colors.border};
  padding: ${({theme:a})=>a.spacing.xl} 0;
  background-color: ${({theme:a})=>a.colors.bgPrimary};
`,gv=_.default.div.withConfig({displayName:"Footer.styles__FooterContent",componentId:"sc-d97a5ab1-1"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${({theme:a})=>a.spacing.md};
    text-align: center;
  }
`,gw=_.default.span.withConfig({displayName:"Footer.styles__FooterCopyright",componentId:"sc-d97a5ab1-2"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyBody};
  color: ${({theme:a})=>a.colors.textTertiary};
  font-size: ${({theme:a})=>a.typography.fontSize.xs};
`,gx=_.default.span.withConfig({displayName:"Footer.styles__FooterTagline",componentId:"sc-d97a5ab1-3"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyBody};
  color: ${({theme:a})=>a.colors.textTertiary};
  font-size: ${({theme:a})=>a.typography.fontSize.xs};
`,gy=({name:a})=>{let b=new Date().getFullYear();return(0,h.jsx)(gu,{"data-aos":"fade-up",children:(0,h.jsx)(be,{children:(0,h.jsxs)(gv,{children:[(0,h.jsx)(bc,{variant:"caption",color:"tertiary",as:"span",children:(0,h.jsxs)(gw,{children:["© ",b," ",a]})}),(0,h.jsx)(bc,{variant:"caption",color:"tertiary",as:"span",children:(0,h.jsx)(gx,{children:"Designed & Built with purpose"})})]})})})},gz={personal:{name:"Umar Nazir",title:"SOFTWARE ENGINEER & SEO EXECUTIVE",headline:"Developing\nFuture-Ready\nSoftware",description:"Software Engineer & SEO Executive with 2+ years of experience creating high-performance web applications, optimizing digital presence, and delivering scalable solutions that drive business growth.",email:"sd.umarnazir@gmail.com",phone:"+91 705-173-2616",location:"Baramulla, J&K India",github:"@umarnazir",linkedin:"/in/umarnazir"},projects:[{id:"1",number:"001",year:"2024",category:"AI / ML PLATFORM",title:"AI-Mployed",description:"AI/ML Talent & Career Platform connecting job seekers with opportunities in artificial intelligence and machine learning. Built with React.js and Next.js for optimal performance and user experience.",tags:["REACT","NEXT.JS","TYPESCRIPT","AI/ML","FIREBASE"],link:"https://ml-jobs.com",imageLink:"/images/mljobs.png",visualVariant:"default"},{id:"2",number:"002",year:"2024",category:"TOURISM / BOOKING",title:"NineMash",description:"Tourism & Online Booking Platform for Kashmir region. Enables users to book hotels, tours, and experiences with seamless payment integration and real-time availability.",tags:["REACT","NEXT.JS","STRIPE","MONGODB","SEO"],link:"https://ninemash.com/",imageLink:"/images/ninemash.png",visualVariant:"alt2"},{id:"3",number:"003",year:"2024",category:"LOGISTICS / COURIER",title:"Rush Expected Courier",description:"All Critical Shipments courier service platform. Specialized in handling urgent and time-sensitive deliveries with real-time tracking, priority booking, and customer support integration.",tags:["REACT","NEXT.JS","REAL-TIME TRACKING","FIREBASE"],link:"https://re-courier.com/",imageLink:"/images/re-courier.png",visualVariant:"default"},{id:"4",number:"004",year:"2024",category:"DIGITAL MARKETING / AGENCY",title:"Digitlia",description:"Digital marketing agency specializing in web development and SEO. Showcases services, portfolio, client testimonials, and case studies with integrated contact forms and lead generation features.",tags:["REACT","NEXT.JS","SEO","DIGITAL MARKETING","LEAD GENERATION"],link:"https://digitlia.com/",imageLink:"/images/digitlia.jpeg",visualVariant:"alt"},{id:"5",number:"005",year:"2024",category:"LOGISTICS / E-COMMERCE",title:"EliteExpress Courier",description:"Delivery & Logistics System for managing shipments, tracking packages, and optimizing delivery routes. Features real-time tracking, automated notifications, and comprehensive admin dashboard.",tags:["REACT","NEXT.JS","NODE.JS","MONGODB","FIREBASE"],link:"https://eliteexpressdeliveryservices.com/",imageLink:"/images/eliteexpress.png",visualVariant:"alt"},{id:"6",number:"006",year:"2024",category:"TRAVEL / BOOKING",title:"Kashmir Tickets",description:"Travel & Ticket Booking System for Kashmir region. Comprehensive platform for booking flights, buses, and travel packages with secure payment processing and booking management.",tags:["REACT","NEXT.JS","PAYMENT GATEWAY","MONGODB"],link:"https://kashmirtickets.com/",imageLink:"/images/kashmirtickets.png",visualVariant:"alt"},{id:"7",number:"007",year:"2024",category:"NGO / NON-PROFIT",title:"Kindness Towards Humanity",description:"NGO Website for humanitarian organization. Features donation system, volunteer registration, event management, and impact stories with multi-language support and accessibility features.",tags:["REACT","NEXT.JS","DONATION SYSTEM","ACCESSIBILITY"],link:"https://kindnesstowardshumanity.in/",imageLink:"/images/kindnesstowardshumanity.png",visualVariant:"alt2"},{id:"8",number:"008",year:"2024",category:"ENTERPRISE / HR",title:"Office Management System",description:"HR & Workflow Automation system for managing employee data, attendance, payroll, and workflow processes. Features role-based access control, reporting dashboards, and automated notifications.",tags:["REACT","NODE.JS","MONGODB","AUTOMATION","HR SYSTEM"],link:"https://example.com",imageLink:"/images/office-management.png",visualVariant:"alt"},{id:"9",number:"009",year:"2024",category:"HOSPITALITY / BOOKING",title:"Hotel Sea View",description:"Hospitality Booking Website for hotel reservations. Features room availability, online booking, payment processing, and guest management system with beautiful UI/UX design.",tags:["REACT","NEXT.JS","BOOKING SYSTEM","PAYMENT","UI/UX"],link:"https://thehotelseaview.in/",imageLink:"/images/hotel-sea-view.png",visualVariant:"alt2"},{id:"10",number:"008",year:"2024",category:"HEALTHCARE / PORTFOLIO",title:"Dr. Jibran Bashir",description:"Professional portfolio website for Orthopedic Surgeon featuring appointment booking, patient testimonials, and medical service information with responsive design and SEO optimization.",tags:["REACT","NEXT.JS","TYPESCRIPT","SEO","RESPONSIVE"],link:"https://www.drjibranbashir.com/",imageLink:"/images/dr-jibran-bashir.png",visualVariant:"default"},{id:"11",number:"009",year:"2024",category:"HEALTHCARE / MEDICAL",title:"Altaf Hospital",description:"Healthcare & Medical Services Website for hospital. Includes appointment booking, doctor profiles, department information, and patient portal with secure data handling and HIPAA compliance considerations.",tags:["REACT","NEXT.JS","HEALTHCARE","APPOINTMENT SYSTEM","SECURITY"],link:"https://www.altafhospital.com/",imageLink:"/images/altaf-hospital.png",visualVariant:"default"}],experiences:[{id:"1",company:"Saibbyweb",role:"Software Engineer",date:"Jan 2025 - Present",location:"On-Site",type:"Full-time",description:"Building high-performance React/Next.js applications with focus on SEO optimization, page speed, and exceptional user experience.",responsibilities:["Build high-performance React/Next.js applications","Improve SEO structure, page speed, and user experience","Develop reusable components and optimized UI patterns","Integrate APIs, Firebase services, and backend logic"],tags:["REACT","NEXT.JS","TYPESCRIPT","SEO","FIREBASE","API INTEGRATION"]},{id:"2",company:"NexGen Developers",role:"Founder & CEO",date:"May 2025 - Present",location:"Part-Time",type:"Part-Time",description:"Leading technical development across websites, apps & AI tools. Building custom automation & chatbot systems while managing branding, SEO, client communication & digital strategy.",responsibilities:["Lead technical development across websites, apps & AI tools","Build custom automation & chatbot systems","Manage branding, SEO, client communication & digital strategy","Deliver full-stack software tailored to business growth"],tags:["LEADERSHIP","AI TOOLS","AUTOMATION","CHATBOTS","DIGITAL STRATEGY"]},{id:"3",company:"Harmukh Technologies Pvt Ltd",role:"Software Engineer & SEO Executive",date:"July 2023 - Aug 2025",location:"On-Site",type:"Full-time",description:"Designed and developed responsive websites while improving digital presence through SEO execution and UI/UX enhancements for better conversions.",responsibilities:["Designed and developed responsive websites","Improved digital presence through SEO execution","Provided UI/UX enhancements for better conversions","Collaborated with cross-functional teams"],tags:["REACT","SEO","UI/UX","RESPONSIVE DESIGN","TEAM COLLABORATION"]}],about:"Software Engineer with 2+ years of experience in Software Development, SEO Optimization, and building scalable digital products. Skilled in creating high-performance web applications using React.js, Next.js, TypeScript, and modern UI frameworks.\n\nI specialize in full-stack development, focusing on creating responsive, SEO-optimized websites and applications that deliver exceptional user experiences. My expertise includes integrating APIs, Firebase services, and implementing modern UI patterns that drive conversions and engagement.\n\nActively seeking opportunities to contribute and innovate in a growth-focused environment. When I'm not coding, I work on personal projects, contribute to open-source initiatives, and stay updated with the latest web technologies and SEO best practices.\n\nEducation: B.Tech (Computer Science Engineering) — Government College of Engineering and Technology, Safapora, Ganderbal (GCET Kashmir).",contact:{headline:"Let's Build Something Together",description:"Open to collaboration on web development projects, SEO optimization, full-stack development opportunities, or consulting work. Let's build something amazing together."}},gA=()=>{let{personal:a,projects:b,experiences:c,about:d,contact:e}=gz;return(0,h.jsxs)("main",{children:[(0,h.jsx)(aG,{name:a.name}),(0,h.jsx)(aT,{title:a.title,headline:a.headline,description:a.description}),(0,h.jsx)(bE,{sectionNumber:"01",projects:b}),(0,h.jsx)(b2,{sectionNumber:"02",experiences:c}),(0,h.jsx)(cp,{}),(0,h.jsx)(ce,{sectionNumber:"03",content:d}),(0,h.jsx)(gi,{sectionNumber:"04",headline:e.headline,description:e.description}),(0,h.jsx)(gt,{email:a.email,phone:a.phone,github:"https://github.com/umarnaxir",linkedin:"https://www.linkedin.com/in/umar-nazir19/"}),(0,h.jsx)(gy,{name:a.name})]})};function gB(){let[a,b]=(0,i.useState)(!0);return((0,i.useEffect)(()=>{let a=setTimeout(()=>{b(!1)},2e3);return()=>clearTimeout(a)},[]),a)?(0,h.jsx)(ab,{}):(0,h.jsx)(gA,{})}a.s(["default",()=>gB],60350)}];

//# sourceMappingURL=_5c673e3d._.js.map