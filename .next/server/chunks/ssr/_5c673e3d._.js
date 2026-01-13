module.exports=[33354,(a,b,c)=>{"use strict";c._=function(a){return a&&a.__esModule?a:{default:a}}},92434,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"warnOnce",{enumerable:!0,get:function(){return d}});let d=a=>{}},4987,(a,b,c)=>{"use strict";function d({widthInt:a,heightInt:b,blurWidth:c,blurHeight:d,blurDataURL:e,objectFit:f}){let g=c?40*c:a,h=d?40*d:b,i=g&&h?`viewBox='0 0 ${g} ${h}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${i}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${i?"none":"contain"===f?"xMidYMid":"cover"===f?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${e}'/%3E%3C/svg%3E`}Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"getImageBlurSvg",{enumerable:!0,get:function(){return d}})},345,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={VALID_LOADERS:function(){return f},imageConfigDefault:function(){return g}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=["default","imgix","cloudinary","akamai","custom"],g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumRedirects:3,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1}},94915,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"getImgProps",{enumerable:!0,get:function(){return i}}),a.r(92434);let d=a.r(4987),e=a.r(345),f=["-moz-initial","fill","none","scale-down",void 0];function g(a){return void 0!==a.default}function h(a){return void 0===a?a:"number"==typeof a?Number.isFinite(a)?a:NaN:"string"==typeof a&&/^[0-9]+$/.test(a)?parseInt(a,10):NaN}function i({src:a,sizes:b,unoptimized:c=!1,priority:i=!1,preload:j=!1,loading:k,className:l,quality:m,width:n,height:o,fill:p=!1,style:q,overrideSrc:r,onLoad:s,onLoadingComplete:t,placeholder:u="empty",blurDataURL:v,fetchPriority:w,decoding:x="async",layout:y,objectFit:z,objectPosition:A,lazyBoundary:B,lazyRoot:C,...D},E){var F;let G,H,I,{imgConf:J,showAltText:K,blurComplete:L,defaultLoader:M}=E,N=J||e.imageConfigDefault;if("allSizes"in N)G=N;else{let a=[...N.deviceSizes,...N.imageSizes].sort((a,b)=>a-b),b=N.deviceSizes.sort((a,b)=>a-b),c=N.qualities?.sort((a,b)=>a-b);G={...N,allSizes:a,deviceSizes:b,qualities:c}}if(void 0===M)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let O=D.loader||M;delete D.loader,delete D.srcSet;let P="__next_img_default"in O;if(P){if("custom"===G.loader)throw Object.defineProperty(Error(`Image with src "${a}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let a=O;O=b=>{let{config:c,...d}=b;return a(d)}}if(y){"fill"===y&&(p=!0);let a={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[y];a&&(q={...q,...a});let c={responsive:"100vw",fill:"100vw"}[y];c&&!b&&(b=c)}let Q="",R=h(n),S=h(o);if((F=a)&&"object"==typeof F&&(g(F)||void 0!==F.src)){let b=g(a)?a.default:a;if(!b.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(b)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!b.height||!b.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(b)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(H=b.blurWidth,I=b.blurHeight,v=v||b.blurDataURL,Q=b.src,!p)if(R||S){if(R&&!S){let a=R/b.width;S=Math.round(b.height*a)}else if(!R&&S){let a=S/b.height;R=Math.round(b.width*a)}}else R=b.width,S=b.height}let T=!i&&!j&&("lazy"===k||void 0===k);(!(a="string"==typeof a?a:Q)||a.startsWith("data:")||a.startsWith("blob:"))&&(c=!0,T=!1),G.unoptimized&&(c=!0),P&&!G.dangerouslyAllowSVG&&a.split("?",1)[0].endsWith(".svg")&&(c=!0);let U=h(m),V=Object.assign(p?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:z,objectPosition:A}:{},K?{}:{color:"transparent"},q),W=L||"empty"===u?null:"blur"===u?`url("data:image/svg+xml;charset=utf-8,${(0,d.getImageBlurSvg)({widthInt:R,heightInt:S,blurWidth:H,blurHeight:I,blurDataURL:v||"",objectFit:V.objectFit})}")`:`url("${u}")`,X=f.includes(V.objectFit)?"fill"===V.objectFit?"100% 100%":"cover":V.objectFit,Y=W?{backgroundSize:X,backgroundPosition:V.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:W}:{},Z=function({config:a,src:b,unoptimized:c,width:d,quality:e,sizes:f,loader:g}){if(c)return{src:b,srcSet:void 0,sizes:void 0};let{widths:h,kind:i}=function({deviceSizes:a,allSizes:b},c,d){if(d){let c=/(^|\s)(1?\d?\d)vw/g,e=[];for(let a;a=c.exec(d);)e.push(parseInt(a[2]));if(e.length){let c=.01*Math.min(...e);return{widths:b.filter(b=>b>=a[0]*c),kind:"w"}}return{widths:b,kind:"w"}}return"number"!=typeof c?{widths:a,kind:"w"}:{widths:[...new Set([c,2*c].map(a=>b.find(b=>b>=a)||b[b.length-1]))],kind:"x"}}(a,d,f),j=h.length-1;return{sizes:f||"w"!==i?f:"100vw",srcSet:h.map((c,d)=>`${g({config:a,src:b,quality:e,width:c})} ${"w"===i?c:d+1}${i}`).join(", "),src:g({config:a,src:b,quality:e,width:h[j]})}}({config:G,src:a,unoptimized:c,width:R,quality:U,sizes:b,loader:O}),$=T?"lazy":k;return{props:{...D,loading:$,fetchPriority:w,width:R,height:S,decoding:x,className:l,style:{...V,...Y},sizes:Z.sizes,srcSet:Z.srcSet,src:r||Z.src},meta:{unoptimized:c,preload:j||i,placeholder:u,fill:p}}}},46058,(a,b,c)=>{"use strict";function d(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(d=function(a){return a?c:b})(a)}c._=function(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=d(b);if(c&&c.has(a))return c.get(a);var e={__proto__:null},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in a)if("default"!==g&&Object.prototype.hasOwnProperty.call(a,g)){var h=f?Object.getOwnPropertyDescriptor(a,g):null;h&&(h.get||h.set)?Object.defineProperty(e,g,h):e[g]=a[g]}return e.default=a,c&&c.set(a,e),e}},94613,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"default",{enumerable:!0,get:function(){return f}});let d=a.r(72131),e=()=>{};function f(a){let{headManager:b,reduceComponentsToState:c}=a;function f(){if(b&&b.mountedInstances){let a=d.Children.toArray(Array.from(b.mountedInstances).filter(Boolean));b.updateHead(c(a))}}return b?.mountedInstances?.add(a.children),f(),e(()=>(b?.mountedInstances?.add(a.children),()=>{b?.mountedInstances?.delete(a.children)})),e(()=>(b&&(b._pendingUpdate=f),()=>{b&&(b._pendingUpdate=f)})),null}},92966,(a,b,c)=>{"use strict";b.exports=a.r(42602).vendored.contexts.HeadManagerContext},58018,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={default:function(){return p},defaultHead:function(){return l}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(33354),g=a.r(46058),h=a.r(87924),i=g._(a.r(72131)),j=f._(a.r(94613)),k=a.r(92966);function l(){return[(0,h.jsx)("meta",{charSet:"utf-8"},"charset"),(0,h.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function m(a,b){return"string"==typeof b||"number"==typeof b?a:b.type===i.default.Fragment?a.concat(i.default.Children.toArray(b.props.children).reduce((a,b)=>"string"==typeof b||"number"==typeof b?a:a.concat(b),[])):a.concat(b)}a.r(92434);let n=["name","httpEquiv","charSet","itemProp"];function o(a){let b,c,d,e;return a.reduce(m,[]).reverse().concat(l().reverse()).filter((b=new Set,c=new Set,d=new Set,e={},a=>{let f=!0,g=!1;if(a.key&&"number"!=typeof a.key&&a.key.indexOf("$")>0){g=!0;let c=a.key.slice(a.key.indexOf("$")+1);b.has(c)?f=!1:b.add(c)}switch(a.type){case"title":case"base":c.has(a.type)?f=!1:c.add(a.type);break;case"meta":for(let b=0,c=n.length;b<c;b++){let c=n[b];if(a.props.hasOwnProperty(c))if("charSet"===c)d.has(c)?f=!1:d.add(c);else{let b=a.props[c],d=e[c]||new Set;("name"!==c||!g)&&d.has(b)?f=!1:(d.add(b),e[c]=d)}}}return f})).reverse().map((a,b)=>{let c=a.key||b;return i.default.cloneElement(a,{key:c})})}let p=function({children:a}){let b=(0,i.useContext)(k.HeadManagerContext);return(0,h.jsx)(j.default,{reduceComponentsToState:o,headManager:b,children:a})};("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},4486,(a,b,c)=>{"use strict";b.exports=a.r(42602).vendored.contexts.ImageConfigContext},53773,(a,b,c)=>{"use strict";b.exports=a.r(42602).vendored.contexts.RouterContext},35444,(a,b,c)=>{"use strict";function d(a,b){let c=a||75;return b?.qualities?.length?b.qualities.reduce((a,b)=>Math.abs(b-c)<Math.abs(a-c)?b:a,0):c}Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"findClosestQuality",{enumerable:!0,get:function(){return d}})},2305,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"default",{enumerable:!0,get:function(){return f}});let d=a.r(35444);function e({config:a,src:b,width:c,quality:e}){if(b.startsWith("/")&&b.includes("?")&&a.localPatterns?.length===1&&"**"===a.localPatterns[0].pathname&&""===a.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${b}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let f=(0,d.findClosestQuality)(e,a);return`${a.path}?url=${encodeURIComponent(b)}&w=${c}&q=${f}${b.startsWith("/_next/static/media/"),""}`}e.__next_img_default=!0;let f=e},8591,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"useMergedRef",{enumerable:!0,get:function(){return e}});let d=a.r(72131);function e(a,b){let c=(0,d.useRef)(null),e=(0,d.useRef)(null);return(0,d.useCallback)(d=>{if(null===d){let a=c.current;a&&(c.current=null,a());let b=e.current;b&&(e.current=null,b())}else a&&(c.current=f(a,d)),b&&(e.current=f(b,d))},[a,b])}function f(a,b){if("function"!=typeof a)return a.current=b,()=>{a.current=null};{let c=a(b);return"function"==typeof c?c:()=>a(null)}}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},67161,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"Image",{enumerable:!0,get:function(){return u}});let d=a.r(33354),e=a.r(46058),f=a.r(87924),g=e._(a.r(72131)),h=d._(a.r(35112)),i=d._(a.r(58018)),j=a.r(94915),k=a.r(345),l=a.r(4486);a.r(92434);let m=a.r(53773),n=d._(a.r(2305)),o=a.r(8591),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function q(a,b,c,d,e,f,g){let h=a?.src;a&&a["data-loaded-src"]!==h&&(a["data-loaded-src"]=h,("decode"in a?a.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(a.parentElement&&a.isConnected){if("empty"!==b&&e(!0),c?.current){let b=new Event("load");Object.defineProperty(b,"target",{writable:!1,value:a});let d=!1,e=!1;c.current({...b,nativeEvent:b,currentTarget:a,target:a,isDefaultPrevented:()=>d,isPropagationStopped:()=>e,persist:()=>{},preventDefault:()=>{d=!0,b.preventDefault()},stopPropagation:()=>{e=!0,b.stopPropagation()}})}d?.current&&d.current(a)}}))}function r(a){return g.use?{fetchPriority:a}:{fetchpriority:a}}globalThis.__NEXT_IMAGE_IMPORTED=!0;let s=(0,g.forwardRef)(({src:a,srcSet:b,sizes:c,height:d,width:e,decoding:h,className:i,style:j,fetchPriority:k,placeholder:l,loading:m,unoptimized:n,fill:p,onLoadRef:s,onLoadingCompleteRef:t,setBlurComplete:u,setShowAltText:v,sizesInput:w,onLoad:x,onError:y,...z},A)=>{let B=(0,g.useCallback)(a=>{a&&(y&&(a.src=a.src),a.complete&&q(a,l,s,t,u,n,w))},[a,l,s,t,u,y,n,w]),C=(0,o.useMergedRef)(A,B);return(0,f.jsx)("img",{...z,...r(k),loading:m,width:e,height:d,decoding:h,"data-nimg":p?"fill":"1",className:i,style:j,sizes:c,srcSet:b,src:a,ref:C,onLoad:a=>{q(a.currentTarget,l,s,t,u,n,w)},onError:a=>{v(!0),"empty"!==l&&u(!0),y&&y(a)}})});function t({isAppRouter:a,imgAttributes:b}){let c={as:"image",imageSrcSet:b.srcSet,imageSizes:b.sizes,crossOrigin:b.crossOrigin,referrerPolicy:b.referrerPolicy,...r(b.fetchPriority)};return a&&h.default.preload?(h.default.preload(b.src,c),null):(0,f.jsx)(i.default,{children:(0,f.jsx)("link",{rel:"preload",href:b.srcSet?void 0:b.src,...c},"__nimg-"+b.src+b.srcSet+b.sizes)})}let u=(0,g.forwardRef)((a,b)=>{let c=(0,g.useContext)(m.RouterContext),d=(0,g.useContext)(l.ImageConfigContext),e=(0,g.useMemo)(()=>{let a=p||d||k.imageConfigDefault,b=[...a.deviceSizes,...a.imageSizes].sort((a,b)=>a-b),c=a.deviceSizes.sort((a,b)=>a-b),e=a.qualities?.sort((a,b)=>a-b);return{...a,allSizes:b,deviceSizes:c,qualities:e,localPatterns:d?.localPatterns}},[d]),{onLoad:h,onLoadingComplete:i}=a,o=(0,g.useRef)(h);(0,g.useEffect)(()=>{o.current=h},[h]);let q=(0,g.useRef)(i);(0,g.useEffect)(()=>{q.current=i},[i]);let[r,u]=(0,g.useState)(!1),[v,w]=(0,g.useState)(!1),{props:x,meta:y}=(0,j.getImgProps)(a,{defaultLoader:n.default,imgConf:e,blurComplete:r,showAltText:v});return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(s,{...x,unoptimized:y.unoptimized,placeholder:y.placeholder,fill:y.fill,onLoadRef:o,onLoadingCompleteRef:q,setBlurComplete:u,setShowAltText:w,sizesInput:a.sizes,ref:b}),y.preload?(0,f.jsx)(t,{isAppRouter:!c,imgAttributes:x}):null]})});("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},33095,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={default:function(){return k},getImageProps:function(){return j}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(33354),g=a.r(94915),h=a.r(67161),i=f._(a.r(2305));function j(a){let{props:b}=(0,g.getImgProps)(a,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[a,c]of Object.entries(b))void 0===c&&delete b[a];return{props:b}}let k=h.Image},71987,(a,b,c)=>{b.exports=a.r(33095)},30407,(a,b,c)=>{"use strict";var d=Array.isArray,e=Object.keys,f=Object.prototype.hasOwnProperty,g="undefined"!=typeof Element;b.exports=function(a,b){try{return function a(b,c){if(b===c)return!0;if(b&&c&&"object"==typeof b&&"object"==typeof c){var h,i,j,k=d(b),l=d(c);if(k&&l){if((i=b.length)!=c.length)return!1;for(h=i;0!=h--;)if(!a(b[h],c[h]))return!1;return!0}if(k!=l)return!1;var m=b instanceof Date,n=c instanceof Date;if(m!=n)return!1;if(m&&n)return b.getTime()==c.getTime();var o=b instanceof RegExp,p=c instanceof RegExp;if(o!=p)return!1;if(o&&p)return b.toString()==c.toString();var q=e(b);if((i=q.length)!==e(c).length)return!1;for(h=i;0!=h--;)if(!f.call(c,q[h]))return!1;if(g&&b instanceof Element&&c instanceof Element)return b===c;for(h=i;0!=h--;)if(("_owner"!==(j=q[h])||!b.$$typeof)&&!a(b[j],c[j]))return!1;return!0}return b!=b&&c!=c}(a,b)}catch(a){if(a.message&&a.message.match(/stack|recursion/i)||-0x7ff5ffe4===a.number)return console.warn("Warning: react-fast-compare does not handle circular references.",a.name,a.message),!1;throw a}}},13089,(a,b,c)=>{"use strict";var d="function"==typeof Symbol&&Symbol.for,e=d?Symbol.for("react.element"):60103,f=d?Symbol.for("react.portal"):60106,g=d?Symbol.for("react.fragment"):60107,h=d?Symbol.for("react.strict_mode"):60108,i=d?Symbol.for("react.profiler"):60114,j=d?Symbol.for("react.provider"):60109,k=d?Symbol.for("react.context"):60110,l=d?Symbol.for("react.async_mode"):60111,m=d?Symbol.for("react.concurrent_mode"):60111,n=d?Symbol.for("react.forward_ref"):60112,o=d?Symbol.for("react.suspense"):60113,p=d?Symbol.for("react.suspense_list"):60120,q=d?Symbol.for("react.memo"):60115,r=d?Symbol.for("react.lazy"):60116,s=d?Symbol.for("react.block"):60121,t=d?Symbol.for("react.fundamental"):60117,u=d?Symbol.for("react.responder"):60118,v=d?Symbol.for("react.scope"):60119;function w(a){if("object"==typeof a&&null!==a){var b=a.$$typeof;switch(b){case e:switch(a=a.type){case l:case m:case g:case i:case h:case o:return a;default:switch(a=a&&a.$$typeof){case k:case n:case r:case q:case j:return a;default:return b}}case f:return b}}}function x(a){return w(a)===m}c.AsyncMode=l,c.ConcurrentMode=m,c.ContextConsumer=k,c.ContextProvider=j,c.Element=e,c.ForwardRef=n,c.Fragment=g,c.Lazy=r,c.Memo=q,c.Portal=f,c.Profiler=i,c.StrictMode=h,c.Suspense=o,c.isAsyncMode=function(a){return x(a)||w(a)===l},c.isConcurrentMode=x,c.isContextConsumer=function(a){return w(a)===k},c.isContextProvider=function(a){return w(a)===j},c.isElement=function(a){return"object"==typeof a&&null!==a&&a.$$typeof===e},c.isForwardRef=function(a){return w(a)===n},c.isFragment=function(a){return w(a)===g},c.isLazy=function(a){return w(a)===r},c.isMemo=function(a){return w(a)===q},c.isPortal=function(a){return w(a)===f},c.isProfiler=function(a){return w(a)===i},c.isStrictMode=function(a){return w(a)===h},c.isSuspense=function(a){return w(a)===o},c.isValidElementType=function(a){return"string"==typeof a||"function"==typeof a||a===g||a===m||a===i||a===h||a===o||a===p||"object"==typeof a&&null!==a&&(a.$$typeof===r||a.$$typeof===q||a.$$typeof===j||a.$$typeof===k||a.$$typeof===n||a.$$typeof===t||a.$$typeof===u||a.$$typeof===v||a.$$typeof===s)},c.typeOf=w},66539,(a,b,c)=>{"use strict";b.exports=a.r(13089)},32344,(a,b,c)=>{"use strict";var d=a.r(66539),e={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},f={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},g={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},h={};function i(a){return d.isMemo(a)?g:h[a.$$typeof]||e}h[d.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},h[d.Memo]=g;var j=Object.defineProperty,k=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,m=Object.getOwnPropertyDescriptor,n=Object.getPrototypeOf,o=Object.prototype;b.exports=function a(b,c,d){if("string"!=typeof c){if(o){var e=n(c);e&&e!==o&&a(b,e,d)}var g=k(c);l&&(g=g.concat(l(c)));for(var h=i(b),p=i(c),q=0;q<g.length;++q){var r=g[q];if(!f[r]&&!(d&&d[r])&&!(p&&p[r])&&!(h&&h[r])){var s=m(c,r);try{j(b,r,s)}catch(a){}}}}return b}},30514,(a,b,c)=>{"use strict";function d(a){this._maxSize=a,this.clear()}d.prototype.clear=function(){this._size=0,this._values=Object.create(null)},d.prototype.get=function(a){return this._values[a]},d.prototype.set=function(a,b){return this._size>=this._maxSize&&this.clear(),!(a in this._values)&&this._size++,this._values[a]=b};var e=/[^.^\]^[]+|(?=\[\]|\.\.)/g,f=/^\d+$/,g=/^\d/,h=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,i=/^\s*(['"]?)(.*?)(\1)\s*$/,j=new d(512),k=new d(512),l=new d(512);function m(a){return j.get(a)||j.set(a,n(a).map(function(a){return a.replace(i,"$2")}))}function n(a){return a.match(e)||[""]}function o(a){return"string"==typeof a&&a&&-1!==["'",'"'].indexOf(a.charAt(0))}b.exports={Cache:d,split:n,normalizePath:m,setter:function(a){var b=m(a);return k.get(a)||k.set(a,function(a,c){for(var d=0,e=b.length,f=a;d<e-1;){var g=b[d];if("__proto__"===g||"constructor"===g||"prototype"===g)return a;f=f[b[d++]]}f[b[d]]=c})},getter:function(a,b){var c=m(a);return l.get(a)||l.set(a,function(a){for(var d=0,e=c.length;d<e;)if(null==a&&b)return;else a=a[c[d++]];return a})},join:function(a){return a.reduce(function(a,b){return a+(o(b)||f.test(b)?"["+b+"]":(a?".":"")+b)},"")},forEach:function(a,b,c){!function(a,b,c){var d,e,i,j,k=a.length;for(e=0;e<k;e++)(d=a[e])&&(function(a){return!o(a)&&(a.match(g)&&!a.match(f)||h.test(a))}(d)&&(d='"'+d+'"'),i=!(j=o(d))&&/^\d+$/.test(d),b.call(c,d,j,i,e,a))}(Array.isArray(a)?a:n(a),b,c)}}},32107,(a,b,c)=>{let d=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,e=a=>a.match(d)||[],f=a=>a[0].toUpperCase()+a.slice(1),g=(a,b)=>e(a).join(b).toLowerCase(),h=a=>e(a).reduce((a,b)=>`${a}${!a?b.toLowerCase():b[0].toUpperCase()+b.slice(1).toLowerCase()}`,"");b.exports={words:e,upperFirst:f,camelCase:h,pascalCase:a=>f(h(a)),snakeCase:a=>g(a,"_"),kebabCase:a=>g(a,"-"),sentenceCase:a=>f(g(a," ")),titleCase:a=>e(a).map(f).join(" ")}},32340,(a,b,c)=>{function d(a,b){var c=a.length,d=Array(c),e={},f=c,g=function(a){for(var b=new Map,c=0,d=a.length;c<d;c++){var e=a[c];b.has(e[0])||b.set(e[0],new Set),b.has(e[1])||b.set(e[1],new Set),b.get(e[0]).add(e[1])}return b}(b),h=function(a){for(var b=new Map,c=0,d=a.length;c<d;c++)b.set(a[c],c);return b}(a);for(b.forEach(function(a){if(!h.has(a[0])||!h.has(a[1]))throw Error("Unknown node. There is an unknown node in the supplied edges.")});f--;)e[f]||function a(b,f,i){if(i.has(b)){var j;try{j=", node was:"+JSON.stringify(b)}catch(a){j=""}throw Error("Cyclic dependency"+j)}if(!h.has(b))throw Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(b));if(!e[f]){e[f]=!0;var k=g.get(b)||new Set;if(f=(k=Array.from(k)).length){i.add(b);do{var l=k[--f];a(l,h.get(l),i)}while(f)i.delete(b)}d[--c]=b}}(a[f],f,new Set);return d}b.exports=function(a){return d(function(a){for(var b=new Set,c=0,d=a.length;c<d;c++){var e=a[c];b.add(e[0]),b.add(e[1])}return Array.from(b)}(a),a)},b.exports.array=d},60350,a=>{"use strict";let b,c,d;var e,f,g,h=a.i(87924),i=a.i(72131);function j(a,b){void 0===b&&(b={});var c=b.insertAt;if(a&&"undefined"!=typeof document){var d=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css","top"===c&&d.firstChild?d.insertBefore(e,d.firstChild):d.appendChild(e),e.styleSheet?e.styleSheet.cssText=a:e.appendChild(document.createTextNode(a))}}j('.react-loading-indicator-normalize,\n[class$=rli-bounding-box] {\n  font-size: 1rem;\n  display: inline-block;\n  box-sizing: border-box;\n  text-align: unset;\n  isolation: isolate;\n}\n\n.rli-d-i-b {\n  display: inline-block;\n}\n\n.rli-text-format {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 600;\n  width: 90%;\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 0.7em;\n  letter-spacing: 0.5px;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;\n}');var k=function(){return(k=Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++)for(var e in b=arguments[c])Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e]);return a}).apply(this,arguments)};function l(a){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a})(a)}"function"==typeof SuppressedError&&SuppressedError;var m=/^\s+/,n=/\s+$/;function o(a,b){if(b=b||{},(a=a||"")instanceof o)return a;if(!(this instanceof o))return new o(a,b);var c,d,e,f,g,h,i,j,k,p,q,r,s,t,u,v,w,x,y,z,A=(g={r:0,g:0,b:0},h=1,i=null,j=null,k=null,p=!1,q=!1,"string"==typeof(c=a)&&(c=function(a){a=a.replace(m,"").replace(n,"").toLowerCase();var b,c=!1;if(F[a])a=F[a],c=!0;else if("transparent"==a)return{r:0,g:0,b:0,a:0,format:"name"};return(b=R.rgb.exec(a))?{r:b[1],g:b[2],b:b[3]}:(b=R.rgba.exec(a))?{r:b[1],g:b[2],b:b[3],a:b[4]}:(b=R.hsl.exec(a))?{h:b[1],s:b[2],l:b[3]}:(b=R.hsla.exec(a))?{h:b[1],s:b[2],l:b[3],a:b[4]}:(b=R.hsv.exec(a))?{h:b[1],s:b[2],v:b[3]}:(b=R.hsva.exec(a))?{h:b[1],s:b[2],v:b[3],a:b[4]}:(b=R.hex8.exec(a))?{r:K(b[1]),g:K(b[2]),b:K(b[3]),a:K(b[4])/255,format:c?"name":"hex8"}:(b=R.hex6.exec(a))?{r:K(b[1]),g:K(b[2]),b:K(b[3]),format:c?"name":"hex"}:(b=R.hex4.exec(a))?{r:K(b[1]+""+b[1]),g:K(b[2]+""+b[2]),b:K(b[3]+""+b[3]),a:K(b[4]+""+b[4])/255,format:c?"name":"hex8"}:!!(b=R.hex3.exec(a))&&{r:K(b[1]+""+b[1]),g:K(b[2]+""+b[2]),b:K(b[3]+""+b[3]),format:c?"name":"hex"}}(c)),"object"==l(c)&&(S(c.r)&&S(c.g)&&S(c.b)?(d=c.r,e=c.g,f=c.b,g={r:255*I(d,255),g:255*I(e,255),b:255*I(f,255)},p=!0,q="%"===String(c.r).substr(-1)?"prgb":"rgb"):S(c.h)&&S(c.s)&&S(c.v)?(i=M(c.s),j=M(c.v),r=c.h,s=i,t=j,r=6*I(r,360),s=I(s,100),t=I(t,100),u=Math.floor(r),v=r-u,w=t*(1-s),x=t*(1-v*s),y=t*(1-(1-v)*s),g={r:255*[t,x,w,w,y,t][z=u%6],g:255*[y,t,t,x,w,w][z],b:255*[w,w,y,t,t,x][z]},p=!0,q="hsv"):S(c.h)&&S(c.s)&&S(c.l)&&(i=M(c.s),k=M(c.l),g=function(a,b,c){var d,e,f;function g(a,b,c){return c<0&&(c+=1),c>1&&(c-=1),c<1/6?a+6*(b-a)*c:c<.5?b:c<2/3?a+(b-a)*(2/3-c)*6:a}if(a=I(a,360),b=I(b,100),c=I(c,100),0===b)d=e=f=c;else{var h=c<.5?c*(1+b):c+b-c*b,i=2*c-h;d=g(i,h,a+1/3),e=g(i,h,a),f=g(i,h,a-1/3)}return{r:255*d,g:255*e,b:255*f}}(c.h,i,k),p=!0,q="hsl"),c.hasOwnProperty("a")&&(h=c.a)),h=H(h),{ok:p,format:c.format||q,r:Math.min(255,Math.max(g.r,0)),g:Math.min(255,Math.max(g.g,0)),b:Math.min(255,Math.max(g.b,0)),a:h});this._originalInput=a,this._r=A.r,this._g=A.g,this._b=A.b,this._a=A.a,this._roundA=Math.round(100*this._a)/100,this._format=b.format||A.format,this._gradientType=b.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=A.ok}function p(a,b,c){a=I(a,255);var d,e,f=Math.max(a,b=I(b,255),c=I(c,255)),g=Math.min(a,b,c),h=(f+g)/2;if(f==g)d=e=0;else{var i=f-g;switch(e=h>.5?i/(2-f-g):i/(f+g),f){case a:d=(b-c)/i+6*(b<c);break;case b:d=(c-a)/i+2;break;case c:d=(a-b)/i+4}d/=6}return{h:d,s:e,l:h}}function q(a,b,c){a=I(a,255);var d,e,f=Math.max(a,b=I(b,255),c=I(c,255)),g=Math.min(a,b,c),h=f-g;if(e=0===f?0:h/f,f==g)d=0;else{switch(f){case a:d=(b-c)/h+6*(b<c);break;case b:d=(c-a)/h+2;break;case c:d=(a-b)/h+4}d/=6}return{h:d,s:e,v:f}}function r(a,b,c,d){var e=[L(Math.round(a).toString(16)),L(Math.round(b).toString(16)),L(Math.round(c).toString(16))];return d&&e[0].charAt(0)==e[0].charAt(1)&&e[1].charAt(0)==e[1].charAt(1)&&e[2].charAt(0)==e[2].charAt(1)?e[0].charAt(0)+e[1].charAt(0)+e[2].charAt(0):e.join("")}function s(a,b,c,d){return[L(N(d)),L(Math.round(a).toString(16)),L(Math.round(b).toString(16)),L(Math.round(c).toString(16))].join("")}function t(a,b){b=0===b?0:b||10;var c=o(a).toHsl();return c.s-=b/100,c.s=J(c.s),o(c)}function u(a,b){b=0===b?0:b||10;var c=o(a).toHsl();return c.s+=b/100,c.s=J(c.s),o(c)}function v(a){return o(a).desaturate(100)}function w(a,b){b=0===b?0:b||10;var c=o(a).toHsl();return c.l+=b/100,c.l=J(c.l),o(c)}function x(a,b){b=0===b?0:b||10;var c=o(a).toRgb();return c.r=Math.max(0,Math.min(255,c.r-Math.round(-b/100*255))),c.g=Math.max(0,Math.min(255,c.g-Math.round(-b/100*255))),c.b=Math.max(0,Math.min(255,c.b-Math.round(-b/100*255))),o(c)}function y(a,b){b=0===b?0:b||10;var c=o(a).toHsl();return c.l-=b/100,c.l=J(c.l),o(c)}function z(a,b){var c=o(a).toHsl(),d=(c.h+b)%360;return c.h=d<0?360+d:d,o(c)}function A(a){var b=o(a).toHsl();return b.h=(b.h+180)%360,o(b)}function B(a,b){if(isNaN(b)||b<=0)throw Error("Argument to polyad must be a positive number");for(var c=o(a).toHsl(),d=[o(a)],e=360/b,f=1;f<b;f++)d.push(o({h:(c.h+f*e)%360,s:c.s,l:c.l}));return d}function C(a){var b=o(a).toHsl(),c=b.h;return[o(a),o({h:(c+72)%360,s:b.s,l:b.l}),o({h:(c+216)%360,s:b.s,l:b.l})]}function D(a,b,c){b=b||6,c=c||30;var d=o(a).toHsl(),e=360/c,f=[o(a)];for(d.h=(d.h-(e*b>>1)+720)%360;--b;)d.h=(d.h+e)%360,f.push(o(d));return f}function E(a,b){b=b||6;for(var c=o(a).toHsv(),d=c.h,e=c.s,f=c.v,g=[],h=1/b;b--;)g.push(o({h:d,s:e,v:f})),f=(f+h)%1;return g}o.prototype={isDark:function(){return 128>this.getBrightness()},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var a=this.toRgb();return(299*a.r+587*a.g+114*a.b)/1e3},getLuminance:function(){var a,b,c,d=this.toRgb();return a=d.r/255,.2126*(a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4))+.7152*((b=d.g/255)<=.03928?b/12.92:Math.pow((b+.055)/1.055,2.4))+.0722*((c=d.b/255)<=.03928?c/12.92:Math.pow((c+.055)/1.055,2.4))},setAlpha:function(a){return this._a=H(a),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var a=q(this._r,this._g,this._b);return{h:360*a.h,s:a.s,v:a.v,a:this._a}},toHsvString:function(){var a=q(this._r,this._g,this._b),b=Math.round(360*a.h),c=Math.round(100*a.s),d=Math.round(100*a.v);return 1==this._a?"hsv("+b+", "+c+"%, "+d+"%)":"hsva("+b+", "+c+"%, "+d+"%, "+this._roundA+")"},toHsl:function(){var a=p(this._r,this._g,this._b);return{h:360*a.h,s:a.s,l:a.l,a:this._a}},toHslString:function(){var a=p(this._r,this._g,this._b),b=Math.round(360*a.h),c=Math.round(100*a.s),d=Math.round(100*a.l);return 1==this._a?"hsl("+b+", "+c+"%, "+d+"%)":"hsla("+b+", "+c+"%, "+d+"%, "+this._roundA+")"},toHex:function(a){return r(this._r,this._g,this._b,a)},toHexString:function(a){return"#"+this.toHex(a)},toHex8:function(a){var b,c,d,e,f;return b=this._r,c=this._g,d=this._b,e=this._a,f=[L(Math.round(b).toString(16)),L(Math.round(c).toString(16)),L(Math.round(d).toString(16)),L(N(e))],a&&f[0].charAt(0)==f[0].charAt(1)&&f[1].charAt(0)==f[1].charAt(1)&&f[2].charAt(0)==f[2].charAt(1)&&f[3].charAt(0)==f[3].charAt(1)?f[0].charAt(0)+f[1].charAt(0)+f[2].charAt(0)+f[3].charAt(0):f.join("")},toHex8String:function(a){return"#"+this.toHex8(a)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*I(this._r,255))+"%",g:Math.round(100*I(this._g,255))+"%",b:Math.round(100*I(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+Math.round(100*I(this._r,255))+"%, "+Math.round(100*I(this._g,255))+"%, "+Math.round(100*I(this._b,255))+"%)":"rgba("+Math.round(100*I(this._r,255))+"%, "+Math.round(100*I(this._g,255))+"%, "+Math.round(100*I(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(G[r(this._r,this._g,this._b,!0)]||!1)},toFilter:function(a){var b="#"+s(this._r,this._g,this._b,this._a),c=b,d=this._gradientType?"GradientType = 1, ":"";if(a){var e=o(a);c="#"+s(e._r,e._g,e._b,e._a)}return"progid:DXImageTransform.Microsoft.gradient("+d+"startColorstr="+b+",endColorstr="+c+")"},toString:function(a){var b=!!a;a=a||this._format;var c=!1,d=this._a<1&&this._a>=0;return b||!d||"hex"!==a&&"hex6"!==a&&"hex3"!==a&&"hex4"!==a&&"hex8"!==a&&"name"!==a?("rgb"===a&&(c=this.toRgbString()),"prgb"===a&&(c=this.toPercentageRgbString()),"hex"!==a&&"hex6"!==a||(c=this.toHexString()),"hex3"===a&&(c=this.toHexString(!0)),"hex4"===a&&(c=this.toHex8String(!0)),"hex8"===a&&(c=this.toHex8String()),"name"===a&&(c=this.toName()),"hsl"===a&&(c=this.toHslString()),"hsv"===a&&(c=this.toHsvString()),c||this.toHexString()):"name"===a&&0===this._a?this.toName():this.toRgbString()},clone:function(){return o(this.toString())},_applyModification:function(a,b){var c=a.apply(null,[this].concat([].slice.call(b)));return this._r=c._r,this._g=c._g,this._b=c._b,this.setAlpha(c._a),this},lighten:function(){return this._applyModification(w,arguments)},brighten:function(){return this._applyModification(x,arguments)},darken:function(){return this._applyModification(y,arguments)},desaturate:function(){return this._applyModification(t,arguments)},saturate:function(){return this._applyModification(u,arguments)},greyscale:function(){return this._applyModification(v,arguments)},spin:function(){return this._applyModification(z,arguments)},_applyCombination:function(a,b){return a.apply(null,[this].concat([].slice.call(b)))},analogous:function(){return this._applyCombination(D,arguments)},complement:function(){return this._applyCombination(A,arguments)},monochromatic:function(){return this._applyCombination(E,arguments)},splitcomplement:function(){return this._applyCombination(C,arguments)},triad:function(){return this._applyCombination(B,[3])},tetrad:function(){return this._applyCombination(B,[4])}},o.fromRatio=function(a,b){if("object"==l(a)){var c={};for(var d in a)a.hasOwnProperty(d)&&(c[d]="a"===d?a[d]:M(a[d]));a=c}return o(a,b)},o.equals=function(a,b){return!(!a||!b)&&o(a).toRgbString()==o(b).toRgbString()},o.random=function(){return o.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},o.mix=function(a,b,c){c=0===c?0:c||50;var d=o(a).toRgb(),e=o(b).toRgb(),f=c/100;return o({r:(e.r-d.r)*f+d.r,g:(e.g-d.g)*f+d.g,b:(e.b-d.b)*f+d.b,a:(e.a-d.a)*f+d.a})},o.readability=function(a,b){var c=o(a),d=o(b);return(Math.max(c.getLuminance(),d.getLuminance())+.05)/(Math.min(c.getLuminance(),d.getLuminance())+.05)},o.isReadable=function(a,b,c){var d,e,f,g,h,i=o.readability(a,b);switch(h=!1,(e=((d=(d=c)||{level:"AA",size:"small"}).level||"AA").toUpperCase(),f=(d.size||"small").toLowerCase(),"AA"!==e&&"AAA"!==e&&(e="AA"),"small"!==f&&"large"!==f&&(f="small"),g={level:e,size:f}).level+g.size){case"AAsmall":case"AAAlarge":h=i>=4.5;break;case"AAlarge":h=i>=3;break;case"AAAsmall":h=i>=7}return h},o.mostReadable=function(a,b,c){var d,e,f,g,h=null,i=0;e=(c=c||{}).includeFallbackColors,f=c.level,g=c.size;for(var j=0;j<b.length;j++)(d=o.readability(a,b[j]))>i&&(i=d,h=o(b[j]));return o.isReadable(a,h,{level:f,size:g})||!e?h:(c.includeFallbackColors=!1,o.mostReadable(a,["#fff","#000"],c))};var F=o.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},G=o.hexNames=function(a){var b={};for(var c in a)a.hasOwnProperty(c)&&(b[a[c]]=c);return b}(F);function H(a){return(isNaN(a=parseFloat(a))||a<0||a>1)&&(a=1),a}function I(a,b){"string"==typeof(c=a)&&-1!=c.indexOf(".")&&1===parseFloat(c)&&(a="100%");var c,d,e="string"==typeof(d=a)&&-1!=d.indexOf("%");return a=Math.min(b,Math.max(0,parseFloat(a))),e&&(a=parseInt(a*b,10)/100),1e-6>Math.abs(a-b)?1:a%b/parseFloat(b)}function J(a){return Math.min(1,Math.max(0,a))}function K(a){return parseInt(a,16)}function L(a){return 1==a.length?"0"+a:""+a}function M(a){return a<=1&&(a=100*a+"%"),a}function N(a){return Math.round(255*parseFloat(a)).toString(16)}var O,P,Q,R=(P="[\\s|\\(]+("+(O="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+O+")[,|\\s]+("+O+")\\s*\\)?",Q="[\\s|\\(]+("+O+")[,|\\s]+("+O+")[,|\\s]+("+O+")[,|\\s]+("+O+")\\s*\\)?",{CSS_UNIT:new RegExp(O),rgb:RegExp("rgb"+P),rgba:RegExp("rgba"+Q),hsl:RegExp("hsl"+P),hsla:RegExp("hsla"+Q),hsv:RegExp("hsv"+P),hsva:RegExp("hsva"+Q),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function S(a){return!!R.CSS_UNIT.exec(a)}var T=function(a,b){var c=("string"==typeof a?parseInt(a):a)||0;if(c>=-5&&c<=5){var d=parseFloat(b),e=d+-(d/5*c*1);return(0==e||e<=Number.EPSILON)&&(e=.1),{animationPeriod:e+"s"}}return{animationPeriod:b}},U=function(a,b){var c=a||{},d="";switch(b){case"small":d="12px";break;case"medium":d="16px";break;case"large":d="20px";break;default:d=void 0}var e={};if(c.fontSize){var f=c.fontSize;e=function(a,b){var c={};for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&0>b.indexOf(d)&&(c[d]=a[d]);if(null!=a&&"function"==typeof Object.getOwnPropertySymbols){var e=0;for(d=Object.getOwnPropertySymbols(a);e<d.length;e++)0>b.indexOf(d[e])&&Object.prototype.propertyIsEnumerable.call(a,d[e])&&(c[d[e]]=a[d[e]])}return c}(c,["fontSize"]),d=f}return{fontSize:d,styles:e}},V={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},W=function(a){var b=a.className,c=a.text,d=a.textColor,e=a.staticText,f=a.style;return c?i.default.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(b||"").trim(),style:k(k(k({},e&&V),d&&{color:d,mixBlendMode:"unset"}),f&&f)},"string"==typeof c&&c.length?c:"loading"):null},X="rgb(50, 205, 50)";function Y(a,b){if(void 0===b&&(b=0),0===a.length)throw Error("Input array cannot be empty!");var c=[];return function a(b,d){return void 0===d&&(d=0),c.push.apply(c,b),c.length<d&&a(c,d),c.slice(0,d)}(a,b)}function Z(a){return a&&a.Math===Math&&a}j('.atom-rli-bounding-box {\n  --atom-phase1-rgb: 50, 205, 50;\n  color: rgba(var(--atom-phase1-rgb), 1);\n  font-size: 16px;\n  position: relative;\n  text-align: unset;\n  isolation: isolate;\n}\n.atom-rli-bounding-box .atom-indicator {\n  width: 6em;\n  height: 6em;\n  position: relative;\n  perspective: 6em;\n  overflow: hidden;\n  color: rgba(var(--atom-phase1-rgb), 1);\n  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;\n}\n.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 0.48em;\n  height: 0.48em;\n  margin: auto;\n  border-radius: 50%;\n  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);\n  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7eg;\n}\n.atom-rli-bounding-box .atom-indicator::before {\n  filter: drop-shadow(0px 0px 0.0625em currentColor);\n}\n.atom-rli-bounding-box .atom-indicator .electron-orbit {\n  color: rgba(var(--atom-phase1-rgb), 0.85);\n  border: 0;\n  border-left: 0.4em solid currentColor;\n  box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  width: 4.8em;\n  height: 4.8em;\n  background-color: transparent;\n  border-radius: 50%;\n  transform-style: preserve-3d;\n  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7fj, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gy;\n}\n.atom-rli-bounding-box .atom-indicator .electron-orbit::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  border-radius: 50%;\n  color: rgba(var(--atom-phase1-rgb), 0.18);\n  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7hv;\n  border: 0.125em solid currentColor;\n}\n.atom-rli-bounding-box .atom-indicator .electron-orbit::before {\n  content: "";\n  width: 0.192em;\n  height: 0.192em;\n  position: absolute;\n  border-radius: 50%;\n  top: -0.096em;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: 0 auto;\n  color: rgba(var(--atom-phase1-rgb), 1);\n  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;\n  background-color: currentColor;\n  transform: rotateY(-70deg);\n  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7ew, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;\n}\n.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {\n  --orbit-vector-factor: -1;\n  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));\n}\n.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {\n  --orbit-vector-factor: 1;\n  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));\n}\n.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {\n  --orbit-vector-factor: 0;\n  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));\n  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);\n}\n.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {\n  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);\n}\n.atom-rli-bounding-box .atom-text {\n  color: currentColor;\n  mix-blend-mode: difference;\n  width: unset;\n  display: block;\n}\n\n@property --atom-phase1-rgb {\n  syntax: "<number>#";\n  inherits: true;\n  initial-value: 50, 205, 50;\n}\n@property --atom-phase2-rgb {\n  syntax: "<number>#";\n  inherits: true;\n  initial-value: 50, 205, 50;\n}\n@property --atom-phase3-rgb {\n  syntax: "<number>#";\n  inherits: true;\n  initial-value: 50, 205, 50;\n}\n@property --atom-phase4-rgb {\n  syntax: "<number>#";\n  inherits: true;\n  initial-value: 50, 205, 50;\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 1s;\n}\n@keyframes uxlv7fj {\n  from {\n    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);\n  }\n  to {\n    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);\n  }\n}\n@keyframes uxlv7ew {\n  from {\n    transform: rotateY(-70deg) rotateX(0deg);\n  }\n  to {\n    transform: rotateY(-70deg) rotateX(-360deg);\n  }\n}\n@keyframes uxlv7eg {\n  100%, 0% {\n    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);\n  }\n  20% {\n    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);\n  }\n  25% {\n    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);\n  }\n  45% {\n    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);\n  }\n  50% {\n    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);\n  }\n  70% {\n    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);\n  }\n  75% {\n    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);\n  }\n  95% {\n    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);\n  }\n}\n@keyframes uxlv7gg {\n  100%, 0% {\n    color: rgba(var(--atom-phase1-rgb), 1);\n  }\n  20% {\n    color: rgba(var(--atom-phase1-rgb), 1);\n  }\n  25% {\n    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);\n  }\n  45% {\n    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);\n  }\n  50% {\n    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);\n  }\n  70% {\n    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);\n  }\n  75% {\n    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);\n  }\n  95% {\n    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);\n  }\n}\n@keyframes uxlv7gy {\n  100%, 0% {\n    color: rgba(var(--atom-phase1-rgb), 0.85);\n  }\n  20% {\n    color: rgba(var(--atom-phase1-rgb), 0.85);\n  }\n  25% {\n    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);\n  }\n  45% {\n    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);\n  }\n  50% {\n    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);\n  }\n  70% {\n    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);\n  }\n  75% {\n    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);\n  }\n  95% {\n    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);\n  }\n}\n@keyframes uxlv7hv {\n  100%, 0% {\n    color: rgba(var(--atom-phase1-rgb), 0.18);\n  }\n  20% {\n    color: rgba(var(--atom-phase1-rgb), 0.18);\n  }\n  25% {\n    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);\n  }\n  45% {\n    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);\n  }\n  50% {\n    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);\n  }\n  70% {\n    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);\n  }\n  75% {\n    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);\n  }\n  95% {\n    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);\n  }\n}'),o(X).toRgb(),Array.from({length:4},function(a,b){return"--atom-phase".concat(b+1,"-rgb")}),j('.commet-rli-bounding-box {\n  --commet-phase1-color: rgb(50, 205, 50);\n  font-size: 16px;\n  width: 6.85em;\n  height: 6.85em;\n  overflow: hidden;\n  display: inline-block;\n  box-sizing: border-box;\n  position: relative;\n  isolation: isolate;\n}\n.commet-rli-bounding-box .commet-indicator {\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  box-sizing: border-box;\n  width: 6em;\n  height: 6em;\n  color: var(--commet-phase1-color);\n  display: inline-block;\n  isolation: isolate;\n  position: absolute;\n  z-index: 0;\n  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite uxlv7cp;\n}\n.commet-rli-bounding-box .commet-indicator .commet-box {\n  position: absolute;\n  display: inline-block;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  animation: uxlv7bx var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;\n}\n.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {\n  width: 100%;\n  height: 100%;\n  animation-direction: normal;\n}\n.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {\n  width: 70%;\n  height: 70%;\n  animation-direction: reverse;\n}\n.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  bottom: 0;\n  left: 0;\n  display: inline-block;\n}\n.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {\n  content: "";\n  width: 0.5em;\n  height: 0.5em;\n  border-radius: 50%;\n  background-color: currentColor;\n  position: absolute;\n  top: -0.125em;\n  left: 50%;\n  transform: translateX(-50%);\n  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;\n}\n.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  bottom: 0;\n  left: 0;\n  border-radius: 50%;\n  box-sizing: border-box;\n  border-style: solid;\n}\n.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {\n  border-color: currentColor transparent transparent currentColor;\n  border-width: 0.25em 0.25em 0 0;\n  transform: rotateZ(-45deg);\n}\n.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {\n  border-color: currentColor currentColor transparent transparent;\n  border-width: 0.25em 0 0 0.25em;\n  transform: rotateZ(45deg);\n}\n.commet-rli-bounding-box .commet-text {\n  mix-blend-mode: difference;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: var(--commet-phase1-color);\n}\n\n@property --commet-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --commet-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --commet-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --commet-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 1.2s;\n}\n@keyframes uxlv7bx {\n  to {\n    transform: rotate(1turn);\n  }\n}\n@keyframes uxlv7cp {\n  100%, 0% {\n    color: var(--commet-phase1-color);\n  }\n  20% {\n    color: var(--commet-phase1-color);\n  }\n  25% {\n    color: var(--commet-phase2-color, var(--commet-phase1-color));\n  }\n  45% {\n    color: var(--commet-phase2-color, var(--commet-phase1-color));\n  }\n  50% {\n    color: var(--commet-phase3-color, var(--commet-phase1-color));\n  }\n  70% {\n    color: var(--commet-phase3-color, var(--commet-phase1-color));\n  }\n  75% {\n    color: var(--commet-phase4-color, var(--commet-phase1-color));\n  }\n  95% {\n    color: var(--commet-phase4-color, var(--commet-phase1-color));\n  }\n}'),Array.from({length:4},function(a,b){return"--commet-phase".concat(b+1,"-color")}),j('.OP-annulus-rli-bounding-box {\n  --OP-annulus-phase1-color: rgb(50, 205, 50);\n  font-size: 16px;\n  display: inline-block;\n}\n.OP-annulus-rli-bounding-box .OP-annulus-indicator {\n  width: 5em;\n  height: 5em;\n  color: var(--OP-annulus-phase1-color);\n  display: inline-block;\n  position: relative;\n  z-index: 0;\n}\n.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {\n  animation: uxlv7n7 calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;\n  height: 100%;\n  transform-origin: center center;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\n.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {\n  stroke-dasharray: 1, 125;\n  stroke-dashoffset: 0;\n  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite uxlv7oa, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7p5;\n  stroke-linecap: round;\n}\n.OP-annulus-rli-bounding-box .OP-annulus-text {\n  mix-blend-mode: difference;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: -2;\n}\n\n@property --OP-annulus-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --OP-annulus-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --OP-annulus-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --OP-annulus-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 1.5s;\n}\n@keyframes uxlv7n7 {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes uxlv7oa {\n  0% {\n    stroke-dasharray: 1, 125;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 98, 125;\n    stroke-dashoffset: -35px;\n  }\n  100% {\n    stroke-dasharray: 98, 125;\n    stroke-dashoffset: -124px;\n  }\n}\n@keyframes uxlv7p5 {\n  100%, 0% {\n    stroke: var(--OP-annulus-phase1-color);\n  }\n  22% {\n    stroke: var(--OP-annulus-phase1-color);\n  }\n  25% {\n    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));\n  }\n  42% {\n    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));\n  }\n  50% {\n    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));\n  }\n  72% {\n    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));\n  }\n  75% {\n    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));\n  }\n  97% {\n    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));\n  }\n}'),Array.from({length:4},function(a,b){return"--OP-annulus-phase".concat(b+1,"-color")}),j('.OP-dotted-rli-bounding-box {\n  --OP-dotted-phase1-color: rgb(50, 205, 50);\n  font-size: 16px;\n  box-sizing: border-box;\n  display: inline-block;\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator {\n  width: 5em;\n  height: 5em;\n  color: var(--OP-dotted-phase1-color);\n  display: inline-block;\n  position: relative;\n  z-index: 0;\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {\n  mix-blend-mode: difference;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: -2;\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: currentColor;\n  border-radius: 50%;\n  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite uxlv7nu, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7ol;\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {\n  transform: rotate(0deg);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {\n  transform: rotate(30deg);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {\n  transform: rotate(60deg);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {\n  transform: rotate(90deg);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {\n  transform: rotate(120deg);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {\n  transform: rotate(150deg);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {\n  transform: rotate(180deg);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {\n  transform: rotate(210deg);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {\n  transform: rotate(240deg);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {\n  transform: rotate(270deg);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {\n  transform: rotate(300deg);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {\n  transform: rotate(330deg);\n}\n.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);\n}\n\n@property --OP-dotted-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --OP-dotted-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --OP-dotted-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --OP-dotted-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 1.2s;\n}\n@keyframes uxlv7nu {\n  0%, 39%, 100% {\n    opacity: 0;\n  }\n  40% {\n    opacity: 1;\n  }\n}\n@keyframes uxlv7ol {\n  100%, 0% {\n    background-color: var(--OP-dotted-phase1-color);\n  }\n  22% {\n    background-color: var(--OP-dotted-phase1-color);\n  }\n  25% {\n    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));\n  }\n  47% {\n    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));\n  }\n  50% {\n    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));\n  }\n  72% {\n    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));\n  }\n  75% {\n    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));\n  }\n  97% {\n    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));\n  }\n}'),Z(!1)||Z("object"==typeof self&&self)||Z(a.g)||function(){return this}()||Function("return this")(),Array.from({length:4},function(a,b){return"--OP-dotted-phase".concat(b+1,"-color")}),j('.OP-spokes-rli-bounding-box {\n  --OP-spokes-phase1-color: rgb(50, 205, 50);\n  font-size: 16px;\n  position: relative;\n  color: var(--OP-spokes-phase1-color);\n}\n.OP-spokes-rli-bounding-box .OP-spokes-indicator {\n  width: 4.8em;\n  height: 4.8em;\n  display: block;\n  position: relative;\n}\n.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {\n  position: absolute;\n  height: 1.2em;\n  width: 0.4em;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto auto auto 50%;\n  background-color: var(--OP-spokes-phase1-color);\n  border-radius: 0.24em;\n  opacity: 0;\n  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite uxlv7pw, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7qn;\n  transform-origin: left center;\n}\n.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {\n  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);\n  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);\n}\n.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {\n  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);\n  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);\n}\n.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {\n  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);\n  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);\n}\n.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {\n  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);\n  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);\n}\n.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {\n  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);\n  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);\n}\n.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {\n  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);\n  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);\n}\n.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {\n  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);\n  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);\n}\n.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {\n  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);\n  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);\n}\n.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {\n  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);\n  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);\n}\n.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {\n  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);\n  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);\n}\n.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {\n  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);\n  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);\n}\n.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {\n  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);\n  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);\n}\n.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {\n  mix-blend-mode: difference;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: var(--OP-spokes-phase1-color);\n  z-index: -2;\n}\n\n@property --OP-spokes-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --OP-spokes-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --OP-spokes-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --OP-spokes-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 1.2s;\n}\n@keyframes uxlv7pw {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n@keyframes uxlv7qn {\n  100%, 0% {\n    background-color: var(--OP-spokes-phase1-color);\n  }\n  22% {\n    background-color: var(--OP-spokes-phase1-color);\n  }\n  25% {\n    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));\n  }\n  42% {\n    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));\n  }\n  50% {\n    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));\n  }\n  72% {\n    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));\n  }\n  75% {\n    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));\n  }\n  97% {\n    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));\n  }\n}'),Array.from({length:4},function(a,b){return"--OP-spokes-phase".concat(b+1,"-color")}),j('.OP-annulus-dual-sectors-rli-bounding-box {\n  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);\n  font-size: 16px;\n  box-sizing: border-box;\n  display: inline-block;\n}\n.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {\n  width: 5em;\n  height: 5em;\n  display: inline-block;\n  position: relative;\n  z-index: 0;\n  color: var(--OP-annulus-dual-sectors-phase1-color);\n}\n.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  border-width: 0.34em;\n  border-style: solid;\n  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;\n  background-color: transparent;\n  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite uxlv7ra, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite uxlv7sv;\n}\n.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {\n  mix-blend-mode: difference;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: -2;\n}\n\n@property --OP-annulus-dual-sectors-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --OP-annulus-dual-sectors-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --OP-annulus-dual-sectors-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --OP-annulus-dual-sectors-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 1.2s;\n}\n@keyframes uxlv7ra {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes uxlv7sv {\n  100%, 0% {\n    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;\n  }\n  20% {\n    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;\n  }\n  25% {\n    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;\n  }\n  45% {\n    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;\n  }\n  50% {\n    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;\n  }\n  70% {\n    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;\n  }\n  75% {\n    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;\n  }\n  95% {\n    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;\n  }\n}'),Array.from({length:4},function(a,b){return"--OP-annulus-dual-sectors-phase".concat(b+1,"-color")}),j('.OP-annulus-sector-track-rli-bounding-box {\n  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);\n  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);\n  font-size: 16px;\n  display: inline-block;\n}\n.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {\n  width: 5em;\n  height: 5em;\n  color: var(--OP-annulus-sector-phase1-color);\n  display: inline-block;\n  position: relative;\n  z-index: 0;\n}\n.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {\n  width: 100%;\n  height: 100%;\n  border-width: 0.34em;\n  border-style: solid;\n  border-radius: 50%;\n  box-sizing: border-box;\n  border-color: var(--OP-annulus-track-phase1-color);\n  border-top-color: var(--OP-annulus-sector-phase1-color);\n  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7rl, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7tf;\n}\n.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {\n  mix-blend-mode: difference;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: -2;\n}\n\n@property --OP-annulus-track-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgba(50, 205, 50, 0.22);\n}\n@property --OP-annulus-track-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgba(50, 205, 50, 0.22);\n}\n@property --OP-annulus-track-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgba(50, 205, 50, 0.22);\n}\n@property --OP-annulus-track-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgba(50, 205, 50, 0.22);\n}\n@property --OP-annulus-sector-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --OP-annulus-sector-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --OP-annulus-sector-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --OP-annulus-sector-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 1s;\n}\n@keyframes uxlv7rl {\n  to {\n    transform: rotate(1turn);\n  }\n}\n@keyframes uxlv7tf {\n  100%, 0% {\n    border-color: var(--OP-annulus-track-phase1-color);\n    border-top-color: var(--OP-annulus-sector-phase1-color);\n  }\n  18% {\n    border-color: var(--OP-annulus-track-phase1-color);\n    border-top-color: var(--OP-annulus-sector-phase1-color);\n  }\n  25% {\n    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));\n    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));\n  }\n  43% {\n    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));\n    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));\n  }\n  50% {\n    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));\n    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));\n  }\n  68% {\n    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));\n    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));\n  }\n  75% {\n    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));\n    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));\n  }\n  93% {\n    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));\n    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));\n  }\n}'),Array.from({length:4},function(a,b){return["--OP-annulus-track-phase".concat(b+1,"-color"),"--OP-annulus-sector-phase".concat(b+1,"-color")]}),j('.foursquare-rli-bounding-box {\n  --four-square-phase1-color: rgb(50, 205, 50);\n  font-size: 16px;\n  box-sizing: border-box;\n  color: var(--four-square-phase1-color);\n  display: inline-block;\n  overflow: hidden;\n}\n.foursquare-rli-bounding-box .foursquare-indicator {\n  height: 5.3033008589em;\n  width: 5.3033008589em;\n  position: relative;\n  display: block;\n}\n.foursquare-rli-bounding-box .foursquare-indicator .squares-container {\n  position: absolute;\n  z-index: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  height: 2.5em;\n  width: 2.5em;\n  color: inherit;\n  will-change: color, width, height;\n  transform: rotate(45deg);\n  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7dk, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7es;\n}\n.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {\n  position: absolute;\n  width: 1.25em;\n  height: 1.25em;\n  border-radius: 0.1875em;\n  background-color: currentColor;\n  animation: uxlv7dd var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;\n}\n.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {\n  top: 0;\n  left: 0;\n}\n.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {\n  top: 0;\n  right: 0;\n}\n.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {\n  bottom: 0;\n  left: 0;\n}\n.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {\n  bottom: 0;\n  right: 0;\n}\n\n@property --four-square-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --four-square-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --four-square-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --four-square-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 1s;\n}\n@keyframes uxlv7dk {\n  0% {\n    width: 2.5em;\n    height: 2.5em;\n  }\n  10% {\n    width: 2.5em;\n    height: 2.5em;\n  }\n  50% {\n    width: 3.75em;\n    height: 3.75em;\n  }\n  90% {\n    width: 2.5em;\n    height: 2.5em;\n  }\n  100% {\n    width: 2.5em;\n    height: 2.5em;\n  }\n}\n@keyframes uxlv7dd {\n  0% {\n    transform: rotateZ(0deg);\n  }\n  10% {\n    transform: rotateZ(0deg);\n  }\n  50% {\n    transform: rotateZ(90deg);\n  }\n  90% {\n    transform: rotateZ(90deg);\n  }\n  100% {\n    transform: rotateZ(90deg);\n  }\n}\n@keyframes uxlv7es {\n  100%, 0% {\n    color: var(--four-square-phase1-color);\n  }\n  20% {\n    color: var(--four-square-phase1-color);\n  }\n  25% {\n    color: var(--four-square-phase2-color, var(--four-square-phase1-color));\n  }\n  45% {\n    color: var(--four-square-phase2-color, var(--four-square-phase1-color));\n  }\n  50% {\n    color: var(--four-square-phase3-color, var(--four-square-phase1-color));\n  }\n  70% {\n    color: var(--four-square-phase3-color, var(--four-square-phase1-color));\n  }\n  75% {\n    color: var(--four-square-phase4-color, var(--four-square-phase1-color));\n  }\n  95% {\n    color: var(--four-square-phase4-color, var(--four-square-phase1-color));\n  }\n}'),Array.from({length:4},function(a,b){return"--four-square-phase".concat(b+1,"-color")}),j('.mosaic-rli-bounding-box {\n  --mosaic-phase1-color: rgb(50, 205, 50);\n  box-sizing: border-box;\n  font-size: 16px;\n  color: var(--mosaic-phase1-color);\n}\n.mosaic-rli-bounding-box .mosaic-indicator {\n  width: 5em;\n  height: 5em;\n  color: currentColor;\n  display: grid;\n  gap: 0.125em;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-areas: "a b c" "d e f" "g h i";\n  position: relative;\n  z-index: 0;\n}\n.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {\n  mix-blend-mode: difference;\n  position: absolute;\n  top: 105%;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: -2;\n}\n.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {\n  background-color: var(--mosaic-phase1-color);\n  animation-name: uxlv7i4, uxlv7is;\n  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);\n  animation-timing-function: var(--rli-animation-function, ease-in-out);\n  animation-iteration-count: infinite;\n}\n.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {\n  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);\n  grid-area: a;\n}\n.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {\n  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);\n  grid-area: b;\n}\n.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {\n  grid-area: c;\n  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);\n}\n.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {\n  grid-area: d;\n  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);\n}\n.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {\n  grid-area: e;\n  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);\n}\n.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {\n  grid-area: f;\n  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);\n}\n.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {\n  grid-area: g;\n  animation-delay: 0s;\n}\n.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {\n  grid-area: h;\n  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);\n}\n.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {\n  grid-area: i;\n  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);\n}\n\n@property --mosaic-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --mosaic-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --mosaic-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --mosaic-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 1.5s;\n}\n@keyframes uxlv7i4 {\n  0%, 60%, 100% {\n    transform: scale3D(1, 1, 1);\n  }\n  30% {\n    transform: scale3D(0, 0, 1);\n  }\n}\n@keyframes uxlv7is {\n  100%, 0% {\n    background-color: var(--mosaic-phase1-color);\n  }\n  25% {\n    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));\n  }\n  50% {\n    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));\n  }\n  75% {\n    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));\n  }\n}'),Array.from({length:4},function(a,b){return"--mosaic-phase".concat(b+1,"-color")}),j('.riple-rli-bounding-box {\n  --riple-phase1-color: rgb(50, 205, 50);\n  box-sizing: border-box;\n  font-size: 16px;\n  display: inline-block;\n  color: var(--riple-phase1-color);\n}\n.riple-rli-bounding-box .riple-indicator {\n  display: inline-block;\n  width: 5em;\n  height: 5em;\n  position: relative;\n  z-index: 0;\n}\n.riple-rli-bounding-box .riple-indicator .riple-text {\n  mix-blend-mode: difference;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: -2;\n}\n.riple-rli-bounding-box .riple-indicator .riple {\n  --border-width: 0.25em;\n  position: absolute;\n  border: var(--border-width) solid var(--riple-phase1-color);\n  opacity: 1;\n  border-radius: 50%;\n  will-change: top, right, left, bottom, border-color;\n  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7i1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7io;\n}\n.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {\n  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);\n}\n\n@property --riple-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --riple-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --riple-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --riple-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 1s;\n}\n@keyframes uxlv7i1 {\n  0% {\n    top: calc(50% - var(--border-width));\n    left: calc(50% - var(--border-width));\n    right: calc(50% - var(--border-width));\n    bottom: calc(50% - var(--border-width));\n    opacity: 0;\n  }\n  4.9% {\n    top: calc(50% - var(--border-width));\n    left: calc(50% - var(--border-width));\n    right: calc(50% - var(--border-width));\n    bottom: calc(50% - var(--border-width));\n    opacity: 0;\n  }\n  5% {\n    top: calc(50% - var(--border-width));\n    left: calc(50% - var(--border-width));\n    right: calc(50% - var(--border-width));\n    bottom: calc(50% - var(--border-width));\n    opacity: 1;\n  }\n  100% {\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    opacity: 0;\n  }\n}\n@keyframes uxlv7io {\n  100%, 0% {\n    border-color: var(--riple-phase1-color);\n  }\n  24.9% {\n    border-color: var(--riple-phase1-color);\n  }\n  25% {\n    border-color: var(--riple-phase2-color, var(--riple-phase1-color));\n  }\n  49.9% {\n    border-color: var(--riple-phase2-color, var(--riple-phase1-color));\n  }\n  50% {\n    border-color: var(--riple-phase3-color, var(--riple-phase1-color));\n  }\n  74.9% {\n    border-color: var(--riple-phase3-color, var(--riple-phase1-color));\n  }\n  75% {\n    border-color: var(--riple-phase4-color, var(--riple-phase1-color));\n  }\n  99.9% {\n    border-color: var(--riple-phase4-color, var(--riple-phase1-color));\n  }\n}'),Array.from({length:4},function(a,b){return"--riple-phase".concat(b+1,"-color")}),j('.pulsate-rli-bounding-box {\n  --TD-pulsate-phase1-color: rgb(50, 205, 50);\n  font-size: 16px;\n  display: inline-block;\n  box-sizing: border-box;\n  color: var(--TD-pulsate-phase1-color);\n}\n.pulsate-rli-bounding-box .pulsate-indicator {\n  width: 4.4em;\n  height: 1.1em;\n  text-align: center;\n  position: relative;\n  z-index: 0;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: nowrap;\n  align-items: center;\n}\n.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {\n  width: 1.1em;\n  height: 1.1em;\n  border-radius: 50%;\n  background-color: var(--TD-pulsate-phase1-color);\n  transform: scale(0);\n  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7s0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7to;\n}\n.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {\n  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);\n}\n.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {\n  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);\n}\n.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {\n  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);\n}\n.pulsate-rli-bounding-box .pulsate-text {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 80%;\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 0.6em;\n  letter-spacing: 0.5px;\n  font-family: sans-serif;\n  mix-blend-mode: difference;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: -2;\n}\n\n@property --TD-pulsate-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --TD-pulsate-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --TD-pulsate-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --TD-pulsate-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 1.2s;\n}\n@keyframes uxlv7s0 {\n  0%, 90%, 100% {\n    transform: scale(0);\n  }\n  40% {\n    transform: scale(1);\n  }\n}\n@keyframes uxlv7to {\n  0%, 100% {\n    background-color: var(--TD-pulsate-phase1-color);\n  }\n  24.9% {\n    background-color: var(--TD-pulsate-phase1-color);\n  }\n  25% {\n    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));\n  }\n  49.9% {\n    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));\n  }\n  50% {\n    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));\n  }\n  74.9% {\n    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));\n  }\n  75% {\n    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));\n  }\n  99.9% {\n    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));\n  }\n}');var $=Array.from({length:4},function(a,b){return"--TD-pulsate-phase".concat(b+1,"-color")}),_=function(a){var b,c=U(null==a?void 0:a.style,null==a?void 0:a.size),d=c.styles,e=c.fontSize,f=null==a?void 0:a.easing,g=T(null==a?void 0:a.speedPlus,"1.2s").animationPeriod,h=function(a){var b={};if(a instanceof Array){for(var c=Y(a,$.length),d=0;d<c.length&&!(d>=4);d++)b[$[d]]=c[d];return b}try{if("string"!=typeof a)throw Error("Color String expected");for(var e=0;e<$.length;e++)b[$[e]]=a}catch(c){for(c instanceof Error?console.warn("[".concat(c.message,']: Received "').concat(typeof a,'" instead with value, ').concat(JSON.stringify(a))):console.warn("".concat(JSON.stringify(a),' received in <ThreeDot variant="pulsate" /> indicator cannot be processed. Using default instead!')),e=0;e<$.length;e++)b[$[e]]=X}return b}(null!=(b=null==a?void 0:a.color)?b:"");return i.default.createElement("span",{className:"rli-d-i-b pulsate-rli-bounding-box",style:k(k(k(k(k({},e&&{fontSize:e}),g&&{"--rli-animation-duration":g}),f&&{"--rli-animation-function":f}),h),d),role:"status","aria-live":"polite","aria-label":"Loading"},i.default.createElement("span",{className:"rli-d-i-b pulsate-indicator"},i.default.createElement("span",{className:"rli-d-i-b pulsate-dot"}),i.default.createElement("span",{className:"rli-d-i-b pulsate-dot"}),i.default.createElement("span",{className:"rli-d-i-b pulsate-dot"})),i.default.createElement(W,{staticText:!0,text:null==a?void 0:a.text,textColor:null==a?void 0:a.textColor}))};j('.brick-stack-rli-bounding-box {\n  --TD-brick-stack-phase1-color: rgb(50, 205, 50);\n  box-sizing: border-box;\n  font-size: 16px;\n  display: inline-block;\n  color: var(--TD-brick-stack-phase1-color);\n}\n.brick-stack-rli-bounding-box .brick-stack-indicator {\n  width: 2.8em;\n  height: 2.8em;\n  position: relative;\n  display: block;\n  margin: 0 auto;\n}\n.brick-stack-rli-bounding-box .brick-stack {\n  width: 100%;\n  height: 100%;\n  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;\n  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite uxlv7tu, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite uxlv7us;\n}\n\n@property --TD-brick-stack-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --TD-brick-stack-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --TD-brick-stack-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --TD-brick-stack-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 1s;\n}\n@keyframes uxlv7tu {\n  0% {\n    background-position: 0 0, 0 100%, 100% 100%;\n  }\n  25% {\n    background-position: 100% 0, 0 100%, 100% 100%;\n  }\n  50% {\n    background-position: 100% 0, 0 0, 100% 100%;\n  }\n  75% {\n    background-position: 100% 0, 0 0, 0 100%;\n  }\n  100% {\n    background-position: 100% 100%, 0 0, 0 100%;\n  }\n}\n@keyframes uxlv7us {\n  100%, 0% {\n    color: var(--TD-brick-stack-phase1-color);\n  }\n  20% {\n    color: var(--TD-brick-stack-phase1-color);\n  }\n  25% {\n    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));\n  }\n  45% {\n    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));\n  }\n  50% {\n    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));\n  }\n  70% {\n    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));\n  }\n  75% {\n    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));\n  }\n  95% {\n    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));\n  }\n}');var aa=Array.from({length:4},function(a,b){return"--TD-brick-stack-phase".concat(b+1,"-color")}),ab=function(a){var b,c=U(null==a?void 0:a.style,null==a?void 0:a.size),d=c.styles,e=c.fontSize,f=null==a?void 0:a.easing,g=T(null==a?void 0:a.speedPlus,"1s").animationPeriod,h=function(a){var b={};if(a instanceof Array){for(var c=Y(a,aa.length),d=0;d<c.length&&!(d>=4);d++)b[aa[d]]=c[d];return b}try{if("string"!=typeof a)throw Error("Color String expected");for(var e=0;e<aa.length;e++)b[aa[e]]=a}catch(c){for(c instanceof Error?console.warn("[".concat(c.message,']: Received "').concat(typeof a,'" instead with value, ').concat(JSON.stringify(a))):console.warn("".concat(JSON.stringify(a),' received in <ThreeDot variant="brick-stack" /> indicator cannot be processed. Using default instead!')),e=0;e<aa.length;e++)b[aa[e]]=X}return b}(null!=(b=null==a?void 0:a.color)?b:"");return i.default.createElement("span",{className:"rli-d-i-b brick-stack-rli-bounding-box",style:k(k(k(k(k({},e&&{fontSize:e}),g&&{"--rli-animation-duration":g}),f&&{"--rli-animation-function":f}),h),d),role:"status","aria-live":"polite","aria-label":"Loading"},i.default.createElement("span",{className:"rli-d-i-b brick-stack-indicator"},i.default.createElement("span",{className:"rli-d-i-b brick-stack"})),i.default.createElement(W,{staticText:!0,text:null==a?void 0:a.text,textColor:null==a?void 0:a.textColor}))};j('.bob-rli-bounding-box {\n  --TD-bob-phase1-color: rgb(50, 205, 50);\n  box-sizing: border-box;\n  font-size: 16px;\n  display: inline-block;\n  color: var(--TD-bob-phase1-color);\n}\n.bob-rli-bounding-box .bob-indicator {\n  width: 4.4em;\n  height: 2.2em;\n  position: relative;\n  display: block;\n  margin: 0 auto;\n}\n.bob-rli-bounding-box .bob-indicator .bobbing,\n.bob-rli-bounding-box .bob-indicator .bobbing::before,\n.bob-rli-bounding-box .bob-indicator .bobbing::after {\n  width: 1.1em;\n  height: 100%;\n  display: grid;\n  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite uxlv7u0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite uxlv7vq;\n}\n.bob-rli-bounding-box .bob-indicator .bobbing::before,\n.bob-rli-bounding-box .bob-indicator .bobbing::after {\n  content: "";\n  grid-area: 1/1;\n}\n.bob-rli-bounding-box .bob-indicator .bobbing {\n  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);\n  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;\n}\n.bob-rli-bounding-box .bob-indicator .bobbing::before {\n  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);\n  transform: translateX(150%);\n  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;\n}\n.bob-rli-bounding-box .bob-indicator .bobbing::after {\n  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);\n  transform: translateX(300%);\n  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;\n}\n\n@property --TD-bob-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --TD-bob-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --TD-bob-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --TD-bob-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 1.2s;\n}\n@keyframes uxlv7u0 {\n  100%, 0% {\n    background-position: 50% 50%;\n  }\n  15% {\n    background-position: 50% 10%;\n  }\n  30% {\n    background-position: 50% 100%;\n  }\n  40% {\n    background-position: 50% 0%;\n  }\n  50% {\n    background-position: 50% 90%;\n  }\n  70% {\n    background-position: 50% 10%;\n  }\n  98% {\n    background-position: 50% 50%;\n  }\n}\n@keyframes uxlv7vq {\n  100%, 0% {\n    color: var(--TD-bob-phase1-color);\n  }\n  22% {\n    color: var(--TD-bob-phase1-color);\n  }\n  25% {\n    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));\n  }\n  47% {\n    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));\n  }\n  50% {\n    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));\n  }\n  72% {\n    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));\n  }\n  75% {\n    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));\n  }\n  97% {\n    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));\n  }\n}');var ac=Array.from({length:4},function(a,b){return"--TD-bob-phase".concat(b+1,"-color")}),ad=function(a){var b,c=U(null==a?void 0:a.style,null==a?void 0:a.size),d=c.styles,e=c.fontSize,f=null==a?void 0:a.easing,g=T(null==a?void 0:a.speedPlus,"1.2s").animationPeriod,h=function(a){var b={};if(a instanceof Array){for(var c=Y(a,ac.length),d=0;d<c.length&&!(d>=4);d++)b[ac[d]]=c[d];return b}try{if("string"!=typeof a)throw Error("Color String expected");for(var e=0;e<ac.length;e++)b[ac[e]]=a}catch(c){for(c instanceof Error?console.warn("[".concat(c.message,']: Received "').concat(typeof a,'" instead with value, ').concat(JSON.stringify(a))):console.warn("".concat(JSON.stringify(a),' received in <ThreeDot variant="bob" /> indicator cannot be processed. Using default instead!')),e=0;e<ac.length;e++)b[ac[e]]=X}return b}(null!=(b=null==a?void 0:a.color)?b:"");return i.default.createElement("span",{className:"rli-d-i-b bob-rli-bounding-box",style:k(k(k(k(k({},e&&{fontSize:e}),g&&{"--rli-animation-duration":g}),f&&{"--rli-animation-function":f}),h),d),role:"status","aria-live":"polite","aria-label":"Loading"},i.default.createElement("span",{className:"bob-indicator"},i.default.createElement("span",{className:"bobbing"})),i.default.createElement(W,{staticText:!0,text:null==a?void 0:a.text,textColor:null==a?void 0:a.textColor}))};j('.bounce-rli-bounding-box {\n  --TD-bounce-phase1-color: rgb(50, 205, 50);\n  font-size: 16px;\n  color: var(--TD-bounce-phase1-color);\n  display: inline-block;\n  padding-bottom: 0.25125em;\n}\n.bounce-rli-bounding-box .wrapper {\n  --dot1-delay: 0s;\n  --dot1-x-offset: 0.55em;\n  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);\n  --dot2-x-offset: 2.2em;\n  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);\n  --dot3-x-offset: 3.85em;\n  width: 5.5em;\n  height: 3.125em;\n  position: relative;\n  display: block;\n  margin: 0 auto;\n}\n.bounce-rli-bounding-box .wrapper .group {\n  display: block;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.bounce-rli-bounding-box .wrapper .group .dot {\n  width: 1.1em;\n  height: 1.1em;\n  position: absolute;\n  border-radius: 50%;\n  background-color: var(--TD-bounce-phase1-color);\n  transform-origin: 50%;\n  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7wc, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite uxlv7x6;\n}\n.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {\n  left: var(--dot1-x-offset);\n  animation-delay: var(--dot1-delay), 0s;\n}\n.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {\n  left: var(--dot2-x-offset);\n  animation-delay: var(--dot2-delay), 0s;\n}\n.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {\n  left: var(--dot3-x-offset);\n  animation-delay: var(--dot3-delay), 0s;\n}\n.bounce-rli-bounding-box .wrapper .group .shadow {\n  width: 1.1em;\n  height: 0.22em;\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, 0.5);\n  position: absolute;\n  top: 101%;\n  transform-origin: 50%;\n  z-index: -1;\n  filter: blur(1px);\n  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7ww;\n}\n.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {\n  left: var(--dot1-x-offset);\n  animation-delay: var(--dot1-delay);\n}\n.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {\n  left: var(--dot2-x-offset);\n  animation-delay: var(--dot2-delay);\n}\n.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {\n  left: var(--dot3-x-offset);\n  animation-delay: var(--dot3-delay);\n}\n\n@property --TD-bounce-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --TD-bounce-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --TD-bounce-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --TD-bounce-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 0.5s;\n}\n@keyframes uxlv7wc {\n  0% {\n    top: 0%;\n  }\n  60% {\n    height: 1.25em;\n    border-radius: 50%;\n    transform: scaleX(1);\n  }\n  100% {\n    top: 100%;\n    height: 0.22em;\n    transform: scaleX(1.5);\n    filter: blur(0.4px);\n  }\n}\n@keyframes uxlv7ww {\n  0% {\n    transform: scaleX(0.2);\n    opacity: 0.2;\n  }\n  60% {\n    opacity: 0.4;\n  }\n  100% {\n    transform: scaleX(1.5);\n    opacity: 0.6;\n  }\n}\n@keyframes uxlv7x6 {\n  0%, 100% {\n    background-color: var(--TD-bounce-phase1-color);\n  }\n  20% {\n    background-color: var(--TD-bounce-phase1-color);\n  }\n  25% {\n    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));\n  }\n  45% {\n    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));\n  }\n  50% {\n    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));\n  }\n  70% {\n    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));\n  }\n  75% {\n    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));\n  }\n  95% {\n    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));\n  }\n}');var ae=Array.from({length:4},function(a,b){return"--TD-bounce-phase".concat(b+1,"-color")}),af=function(a){var b,c=U(null==a?void 0:a.style,null==a?void 0:a.size),d=c.styles,e=c.fontSize,f=null==a?void 0:a.easing,g=T(null==a?void 0:a.speedPlus,"0.5s").animationPeriod,h=function(a){var b={};if(a instanceof Array){for(var c=Y(a,ae.length),d=0;d<c.length&&!(d>=4);d++)b[ae[d]]=c[d];return b}try{if("string"!=typeof a)throw Error("Color String expected");for(var e=0;e<ae.length;e++)b[ae[e]]=a}catch(a){for(e=0;e<ae.length;e++)b[ae[e]]=X}return b}(null!=(b=null==a?void 0:a.color)?b:"");return i.default.createElement("span",{className:"rli-d-i-b bounce-rli-bounding-box",style:k(k(k(k(k({},e&&{fontSize:e}),g&&{"--rli-animation-duration":g}),f&&{"--rli-animation-function":f}),h),d)},i.default.createElement("span",{className:"wrapper"},i.default.createElement("span",{className:"group"},i.default.createElement("span",{className:"rli-d-i-b dot"}),i.default.createElement("span",{className:"rli-d-i-b dot"}),i.default.createElement("span",{className:"rli-d-i-b dot"})),i.default.createElement("span",{className:"group"},i.default.createElement("span",{className:"rli-d-i-b shadow"}),i.default.createElement("span",{className:"rli-d-i-b shadow"}),i.default.createElement("span",{className:"rli-d-i-b shadow"}))),i.default.createElement(W,{staticText:!0,text:null==a?void 0:a.text,textColor:null==a?void 0:a.textColor,style:{marginTop:"2px"}}))},ag=function(a){var b=Object(a).variant,c=void 0===b?"pulsate":b;return"pulsate"===c?i.default.createElement(_,k({},a)):"brick-stack"===c?i.default.createElement(ab,k({},a)):"bob"===c?i.default.createElement(ad,k({},a)):"bounce"===c?i.default.createElement(af,k({},a)):null};j('.blink-blur-rli-bounding-box {\n  --shape-phase1-color: rgb(50, 205, 50);\n  font-size: 16px;\n  color: var(--shape-phase1-color);\n}\n.blink-blur-rli-bounding-box .blink-blur-indicator {\n  isolation: isolate;\n  display: flex;\n  flex-direction: row;\n  -moz-column-gap: 0.4em;\n       column-gap: 0.4em;\n}\n.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {\n  --x-deg: -20deg;\n  width: 1.8em;\n  height: 2.25em;\n  border-radius: 0.25em;\n  color: inherit;\n  transform: skewX(var(--x-deg));\n  background-color: var(--shape-phase1-color);\n  animation-name: uxlv7id, uxlv7jl;\n  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);\n  animation-timing-function: var(--rli-animation-function, ease-in);\n  animation-iteration-count: infinite;\n}\n.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);\n}\n.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);\n}\n.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);\n}\n.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);\n}\n.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {\n  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);\n}\n\n@property --shape-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --shape-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --shape-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --shape-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 1.2s;\n}\n@keyframes uxlv7id {\n  100%, 0% {\n    opacity: 0.3;\n    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);\n    transform: skewX(var(--x-deg)) scale(1.2, 1.45);\n  }\n  39% {\n    opacity: 0.8;\n  }\n  40%, 41%, 42% {\n    opacity: 0;\n  }\n  43% {\n    opacity: 0.8;\n  }\n  50% {\n    opacity: 1;\n    filter: blur(0em) drop-shadow(0 0 0em);\n    transform: skewX(var(--x-deg)) scale(1, 1);\n  }\n}\n@keyframes uxlv7jl {\n  100%, 0% {\n    color: var(--shape-phase1-color);\n    background-color: var(--shape-phase1-color);\n  }\n  25% {\n    color: var(--shape-phase2-color, var(--shape-phase1-color));\n    background-color: var(--shape-phase2-color, var(--shape-phase1-color));\n  }\n  50% {\n    color: var(--shape-phase3-color, var(--shape-phase1-color));\n    background-color: var(--shape-phase3-color, var(--shape-phase1-color));\n  }\n  75% {\n    color: var(--shape-phase4-color, var(--shape-phase1-color));\n    background-color: var(--shape-phase4-color, var(--shape-phase1-color));\n  }\n}'),Array.from({length:4},function(a,b){return"--shape-phase".concat(b+1,"-color")}),j('.trophy-spin-rli-bounding-box {\n  --trophySpin-phase1-color: rgb(50, 205, 50);\n  box-sizing: border-box;\n  font-size: 16px;\n  position: relative;\n  isolation: isolate;\n  color: var(--trophySpin-phase1-color);\n}\n.trophy-spin-rli-bounding-box .trophy-spin-indicator {\n  width: 4em;\n  perspective: 1000px;\n  transform-style: preserve-3d;\n  display: block;\n  margin: 0 auto;\n}\n.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {\n  display: block;\n  width: 4em;\n  height: 0.5em;\n  background: var(--trophySpin-phase1-color);\n  animation: uxlv7ki var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, uxlv7l2 calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, uxlv7ly calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;\n}\n.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {\n  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);\n}\n.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {\n  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);\n}\n.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {\n  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);\n}\n.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {\n  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);\n}\n.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {\n  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);\n}\n.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {\n  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);\n}\n.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {\n  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);\n}\n.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {\n  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);\n}\n\n@property --trophySpin-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --trophySpin-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --trophySpin-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --trophySpin-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 2.5s;\n}\n@keyframes uxlv7ki {\n  to {\n    transform: rotateY(1turn) rotateX(-25deg);\n  }\n}\n@keyframes uxlv7l2 {\n  100%, 0% {\n    filter: brightness(1);\n    opacity: 1;\n  }\n  15% {\n    filter: brightness(1);\n  }\n  25% {\n    opacity: 0.96;\n  }\n  30% {\n    filter: brightness(0.92);\n  }\n  50% {\n    filter: brightness(0.7);\n    opacity: 1;\n  }\n  75% {\n    filter: brightness(0.92);\n    opacity: 0.96;\n  }\n  90% {\n    filter: brightness(1);\n  }\n}\n@keyframes uxlv7ly {\n  100%, 0% {\n    background-color: var(--trophySpin-phase1-color);\n  }\n  18% {\n    background-color: var(--trophySpin-phase1-color);\n  }\n  25% {\n    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));\n  }\n  43% {\n    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));\n  }\n  50% {\n    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));\n  }\n  68% {\n    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));\n  }\n  75% {\n    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));\n  }\n  93% {\n    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));\n  }\n}'),Array.from({length:4},function(a,b){return"--trophySpin-phase".concat(b+1,"-color")}),j('.slab-rli-bounding-box {\n  --slab-phase1-color: rgb(50, 205, 50);\n  font-size: 16px;\n  color: var(--slab-phase1-color);\n  position: relative;\n}\n.slab-rli-bounding-box .slab-indicator {\n  position: relative;\n  display: block;\n  width: 7em;\n  height: 4em;\n  margin: 0 auto;\n  overflow: hidden;\n}\n.slab-rli-bounding-box .slab-indicator .slabs-wrapper {\n  width: 4em;\n  height: 4em;\n  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);\n  transform-style: preserve-3d;\n  transform-origin: 50% 100%;\n  display: block;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n}\n.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: var(--slab-phase1-color);\n  opacity: 0;\n  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);\n  transform-origin: 0% 0%;\n  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite uxlv7md, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite uxlv7n0;\n}\n.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {\n  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);\n}\n.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {\n  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);\n}\n.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {\n  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);\n}\n.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {\n  animation-delay: 0s;\n}\n\n@property --slab-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --slab-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --slab-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --slab-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration-unitless {\n  syntax: "<number>";\n  inherits: true;\n  initial-value: 3;\n}\n@keyframes uxlv7md {\n  0% {\n    transform: translateY(0) rotateX(30deg);\n    opacity: 0;\n  }\n  10% {\n    transform: translateY(-40%) rotateX(0deg);\n    opacity: 1;\n  }\n  25% {\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(-400%) rotateX(0deg);\n    opacity: 0;\n  }\n}\n@keyframes uxlv7n0 {\n  100%, 0% {\n    background-color: var(--slab-phase1-color);\n  }\n  24.9% {\n    background-color: var(--slab-phase1-color);\n  }\n  25% {\n    background-color: var(--slab-phase2-color, var(--slab-phase1-color));\n  }\n  49.9% {\n    background-color: var(--slab-phase2-color, var(--slab-phase1-color));\n  }\n  50% {\n    background-color: var(--slab-phase3-color, var(--slab-phase1-color));\n  }\n  74.9% {\n    background-color: var(--slab-phase3-color, var(--slab-phase1-color));\n  }\n  75% {\n    background-color: var(--slab-phase4-color, var(--slab-phase1-color));\n  }\n  99.9% {\n    background-color: var(--slab-phase4-color, var(--slab-phase1-color));\n  }\n}'),Array.from({length:4},function(a,b){return"--slab-phase".concat(b+1,"-color")}),j('.lifeline-rli-bounding-box {\n  --life-line-phase1-color: rgb(50, 205, 50);\n  font-size: 16px;\n  isolation: isolate;\n  color: var(--life-line-phase1-color);\n}\n.lifeline-rli-bounding-box .lifeline-indicator {\n  position: relative;\n  text-align: center;\n}\n.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {\n  stroke-dasharray: 474.7616760254 30.3039367676;\n  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite uxlv7k3, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite uxlv7kg;\n}\n.lifeline-rli-bounding-box .lifeline-text {\n  color: currentColor;\n  mix-blend-mode: difference;\n  width: unset;\n  display: block;\n}\n\n@property --life-line-phase1-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --life-line-phase2-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --life-line-phase3-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --life-line-phase4-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: rgb(50, 205, 50);\n}\n@property --rli-animation-duration {\n  syntax: "<time>";\n  inherits: true;\n  initial-value: 2s;\n}\n@keyframes uxlv7k3 {\n  to {\n    stroke-dashoffset: -1010.1312255859;\n  }\n}\n@keyframes uxlv7kg {\n  100%, 0% {\n    color: var(--life-line-phase1-color);\n  }\n  20% {\n    color: var(--life-line-phase1-color);\n  }\n  25% {\n    color: var(--life-line-phase2-color, var(--life-line-phase1-color));\n  }\n  45% {\n    color: var(--life-line-phase2-color, var(--life-line-phase1-color));\n  }\n  50% {\n    color: var(--life-line-phase3-color, var(--life-line-phase1-color));\n  }\n  70% {\n    color: var(--life-line-phase3-color, var(--life-line-phase1-color));\n  }\n  75% {\n    color: var(--life-line-phase4-color, var(--life-line-phase1-color));\n  }\n  95% {\n    color: var(--life-line-phase4-color, var(--life-line-phase1-color));\n  }\n}'),Array.from({length:4},function(a,b){return"--life-line-phase".concat(b+1,"-color")});var ah=a.i(75716);let ai=ah.default.div.withConfig({displayName:"Loader.styles__LoaderContainer",componentId:"sc-c4a451a4-0"})`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({$bgColor:a,theme:b})=>a||b?.colors?.bgPrimary||"#0a0a0a"};
  z-index: 9999;
  overflow: hidden;
  margin: 0;
  padding: 0;
`,aj=()=>{if("undefined"!=typeof document){let a=document.documentElement.getAttribute("data-theme");if("light"===a||"dark"===a)return a}return"dark"},ak=a=>({dotColor:"#ffffff",bgColor:"#0a0a0a"}),al=()=>{let[a,b]=(0,i.useState)(()=>ak(aj()));return(0,i.useEffect)(()=>(b(ak(aj())),window.scrollTo(0,0),document.body.style.overflow="hidden",()=>{document.body.style.overflow="unset"}),[]),(0,h.jsx)(ai,{$bgColor:a.bgColor,suppressHydrationWarning:!0,children:(0,h.jsx)("div",{suppressHydrationWarning:!0,children:(0,h.jsx)(ag,{color:a.dotColor,size:"small",text:"",textColor:""})})})},am=a=>{let b=a.replace(/^([A-Z])|[\s-_]+(\w)/g,(a,b,c)=>c?c.toUpperCase():b.toLowerCase());return b.charAt(0).toUpperCase()+b.slice(1)},an=(...a)=>a.filter((a,b,c)=>!!a&&""!==a.trim()&&c.indexOf(a)===b).join(" ").trim();var ao={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let ap=(0,i.forwardRef)(({color:a="currentColor",size:b=24,strokeWidth:c=2,absoluteStrokeWidth:d,className:e="",children:f,iconNode:g,...h},j)=>(0,i.createElement)("svg",{ref:j,...ao,width:b,height:b,stroke:a,strokeWidth:d?24*Number(c)/Number(b):c,className:an("lucide",e),...!f&&!(a=>{for(let b in a)if(b.startsWith("aria-")||"role"===b||"title"===b)return!0})(h)&&{"aria-hidden":"true"},...h},[...g.map(([a,b])=>(0,i.createElement)(a,b)),...Array.isArray(f)?f:[f]])),aq=(a,b)=>{let c=(0,i.forwardRef)(({className:c,...d},e)=>(0,i.createElement)(ap,{ref:e,iconNode:b,className:an(`lucide-${am(a).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${a}`,c),...d}));return c.displayName=am(a),c},ar=aq("moon",[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]),as=aq("sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);var at=a.i(34043);let au=ah.keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,av=ah.keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,aw=ah.keyframes`
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,ax=ah.keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,ay=ah.keyframes`
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
`,az=ah.default.nav.withConfig({displayName:"NavBar.styles__StyledNavbar",componentId:"sc-eefaf6bf-0"})`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: ${({theme:a})=>a.zIndex.sticky};
  background-color: ${({theme:a})=>"dark"===a.mode?"rgba(10, 10, 10, 0.8)":"rgba(255, 255, 255, 0.8)"};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid ${({theme:a})=>a.colors.border};
  padding: ${({theme:a})=>a.spacing.lg} 0;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${({theme:a})=>"dark"===a.mode?"linear-gradient(180deg, rgba(59, 130, 246, 0.05) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255, 107, 53, 0.05) 0%, transparent 100%)"};
    pointer-events: none;
    z-index: -1;
  }

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
    position: fixed;
    padding: ${({theme:a})=>a.spacing.md} 0;
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
  }
`,aA=ah.default.div.withConfig({displayName:"NavBar.styles__NavbarContent",componentId:"sc-eefaf6bf-1"})`
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
`,aB=ah.default.a.withConfig({displayName:"NavBar.styles__Logo",componentId:"sc-eefaf6bf-2"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyHeading};
  font-size: ${({theme:a})=>a.typography.fontSize.xl};
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
    font-size: ${({theme:a})=>a.typography.fontSize.lg};
    height: 36px;
  }
`,aC=ah.default.div.withConfig({displayName:"NavBar.styles__NavRight",componentId:"sc-eefaf6bf-3"})`
  display: flex;
  align-items: center;
  gap: 0;

  @media (max-width: 768px) {
    display: none;
  }
`,aD=ah.default.div.withConfig({displayName:"NavBar.styles__MobileNavRight",componentId:"sc-eefaf6bf-4"})`
  display: none;
  align-items: center;
  gap: ${({theme:a})=>a.spacing.md};

  @media (max-width: 768px) {
    display: flex;
  }
`,aE=ah.default.button.withConfig({displayName:"NavBar.styles__MobileNavThemeToggleButton",componentId:"sc-eefaf6bf-5"})`
  position: relative;
  width: 48px;
  height: 28px;
  background-color: ${({theme:a})=>"dark"===a.mode?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.05)"};
  border: 1px solid ${({theme:a})=>"dark"===a.mode?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"};
  border-radius: 9999px;
  cursor: pointer;
  padding: 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;

  &:hover {
    border-color: ${({theme:a})=>"dark"===a.mode?"rgba(255, 255, 255, 0.2)":"rgba(0, 0, 0, 0.2)"};
    transform: scale(1.05);
  }

  &:active,
  &:focus {
    outline: none;
    border-color: ${({theme:a})=>"dark"===a.mode?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"};
    transform: scale(0.98);
  }

  &:focus-visible {
    outline: none;
  }
`,aF=ah.default.div.withConfig({displayName:"NavBar.styles__MobileNavThemeToggleThumb",componentId:"sc-eefaf6bf-6"})`
  position: absolute;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: ${({$isLight:a})=>a?"#FFD700":"#4A5568"};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(${({$isLight:a})=>a?"20px, -50%":"2px, -50%"});
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  left: 0;
  top: 50%;
  
  svg {
    width: 14px;
    height: 14px;
    color: white;
    transition: opacity 0.2s ease, transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
`,aG=ah.default.ul.withConfig({displayName:"NavBar.styles__NavLinks",componentId:"sc-eefaf6bf-7"})`
  display: flex;
  align-items: center;
  gap: ${({theme:a})=>a.spacing.xl};
  list-style: none;
  margin: 0;
  padding: 0;
`,aH=ah.default.a.withConfig({displayName:"NavBar.styles__NavLink",componentId:"sc-eefaf6bf-8"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyHeading};
  font-size: ${({theme:a})=>a.typography.fontSize.sm};
  font-weight: ${({theme:a})=>a.typography.fontWeight.medium};
  text-transform: capitalize;
  letter-spacing: 0.05em;
  color: ${({theme:a})=>a.colors.textPrimary};
  transition: color ${({theme:a})=>a.transitions.fast};

  &:hover {
    color: ${({theme:a})=>a.colors.textSecondary};
  }
`,aI=ah.default.button.withConfig({displayName:"NavBar.styles__MobileMenuButton",componentId:"sc-eefaf6bf-9"})`
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: ${({theme:a})=>a.spacing.xs};
  justify-content: center;
  align-items: flex-end;
  width: 40px;
  height: 40px;
  position: relative;
  z-index: 1001;
  align-self: center;
  border-radius: 12px;
  transition: all ${({theme:a})=>a.transitions.base} cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
  
  &:hover {
    background-color: ${({theme:a})=>"dark"===a.mode?"rgba(255, 255, 255, 0.05)":"rgba(0, 0, 0, 0.05)"};
    transform: scale(1.1);
    
    span {
      background-color: ${({theme:a})=>a.colors.accent};
      box-shadow: 0 0 8px ${({theme:a})=>a.colors.accent};
    }
  }
  
  &:active,
  &:focus {
    outline: none;
    border: none;
    transform: scale(0.95);
  }

  &:focus-visible {
    outline: none;
  }

  @media (max-width: 768px) {
    display: ${({$isOpen:a})=>a?"none":"flex"};
  }
`,aJ=ah.default.span.withConfig({displayName:"NavBar.styles__HamburgerLine",componentId:"sc-eefaf6bf-10"})`
  display: block;
  height: 3px;
  background-color: ${({theme:a})=>a.colors.textPrimary};
  transition: all ${({theme:a})=>a.transitions.base} cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;

  ${({$index:a})=>{switch(a){case 0:return ah.css`
          width: 14px;
          align-self: flex-end;
          border-radius: 8px 2px 2px 8px;
        `;case 1:return ah.css`
          width: 18px;
          align-self: flex-end;
          border-radius: 8px 2px 2px 8px;
        `;case 2:return ah.css`
          width: 24px;
          align-self: flex-end;
          border-radius: 8px 2px 2px 8px;
        `}}}

  ${({$isOpen:a,$index:b})=>a&&ah.css`
      ${0===b&&ah.css`
        width: 28px;
        transform: rotate(45deg) translate(8px, 8px);
        border-radius: 8px;
      `}
      ${1===b&&ah.css`
        opacity: 0;
        transform: translateX(-10px);
      `}
      ${2===b&&ah.css`
        width: 28px;
        transform: rotate(-45deg) translate(8px, -8px);
        border-radius: 8px;
      `}
    `}
`,aK=ah.default.div.withConfig({displayName:"NavBar.styles__MobileMenu",componentId:"sc-eefaf6bf-11"})`
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
  animation: ${av} ${({theme:a})=>a.transitions.slow} ease-out;
`,aL=ah.default.div.withConfig({displayName:"NavBar.styles__MobileMenuContent",componentId:"sc-eefaf6bf-12"})`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;
`,aM=ah.default.div.withConfig({displayName:"NavBar.styles__MobileMenuHeader",componentId:"sc-eefaf6bf-13"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: ${({theme:a})=>a.spacing.sm};
  padding-bottom: ${({theme:a})=>a.spacing.sm};
`,aN=ah.default.div.withConfig({displayName:"NavBar.styles__MobileMenuHeaderRight",componentId:"sc-eefaf6bf-14"})`
  display: flex;
  align-items: center;
  gap: ${({theme:a})=>a.spacing.sm};
`,aO=ah.default.a.withConfig({displayName:"NavBar.styles__MobileMenuLogo",componentId:"sc-eefaf6bf-15"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyHeading};
  font-size: ${({theme:a})=>a.typography.fontSize["2xl"]};
  font-weight: ${({theme:a})=>a.typography.fontWeight.semibold};
  color: ${({theme:a})=>a.colors.textPrimary};
  text-decoration: none;
  opacity: 0;
  animation: ${ax} 0.4s ease-out 0.1s forwards;
`,aP=ah.default.button.withConfig({displayName:"NavBar.styles__MobileMenuCloseButton",componentId:"sc-eefaf6bf-16"})`
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
  animation: ${ay} 0.6s ease-out 0.1s forwards;

  &:hover {
    color: ${({theme:a})=>a.colors.accent};
  }
`,aQ=ah.default.hr.withConfig({displayName:"NavBar.styles__MobileMenuDivider",componentId:"sc-eefaf6bf-17"})`
  border: none;
  border-top: 1px solid ${({theme:a})=>a.colors.border};
  margin: 0;
  margin-bottom: ${({theme:a})=>a.spacing.lg};
  width: 100%;
`,aR=ah.default.ul.withConfig({displayName:"NavBar.styles__MobileNavLinks",componentId:"sc-eefaf6bf-18"})`
  display: flex;
  flex-direction: column;
  gap: 0;
  list-style: none;
  flex: 1;
  justify-content: flex-start;
`,aS=ah.default.li.withConfig({displayName:"NavBar.styles__MobileNavLinkItem",componentId:"sc-eefaf6bf-19"})`
  opacity: 0;
  animation: ${ax} 0.4s ease-out forwards;
  animation-delay: ${({$index:a})=>.1+.1*a}s;
`,aT=ah.default.a.withConfig({displayName:"NavBar.styles__MobileNavLink",componentId:"sc-eefaf6bf-20"})`
  font-size: ${({theme:a})=>a.typography.fontSize.xl};
  padding: ${({theme:a})=>a.spacing.sm} 0;
  display: block;
  transition: all ${({theme:a})=>a.transitions.base};
  font-family: ${({theme:a})=>a.typography.fontFamilyHeading};
  font-weight: ${({theme:a})=>a.typography.fontWeight.medium};
  text-transform: capitalize;
  letter-spacing: 0.05em;
  color: ${({theme:a})=>a.colors.textPrimary};
  text-decoration: none;

  &:hover {
    color: ${({theme:a})=>a.colors.accent};
    padding-left: ${({theme:a})=>a.spacing.sm};
  }
`,aU=ah.default.a.withConfig({displayName:"NavBar.styles__MobileResumeLink",componentId:"sc-eefaf6bf-21"})`
  font-size: ${({theme:a})=>a.typography.fontSize.xl};
  padding: ${({theme:a})=>a.spacing.sm} 0;
  display: inline-block;
  transition: all ${({theme:a})=>a.transitions.base};
  font-family: ${({theme:a})=>a.typography.fontFamilyHeading};
  font-weight: ${({theme:a})=>a.typography.fontWeight.medium};
  text-transform: capitalize;
  letter-spacing: 0.05em;
  color: ${({theme:a})=>a.colors.textPrimary};
  text-decoration: none;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: ${({theme:a})=>a.spacing.sm};
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${({theme:a})=>a.colors.textPrimary};
    transition: all ${({theme:a})=>a.transitions.base};
  }

  &:hover {
    color: ${({theme:a})=>a.colors.textSecondary};
    padding-left: ${({theme:a})=>a.spacing.sm};
    
    &::after {
      background-color: ${({theme:a})=>a.colors.textSecondary};
    }
  }
`,aV=ah.default.button.withConfig({displayName:"NavBar.styles__ThemeToggleButton",componentId:"sc-eefaf6bf-22"})`
  position: relative;
  width: 56px;
  height: 32px;
  background-color: ${({theme:a})=>"dark"===a.mode?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.05)"};
  border: 1px solid ${({theme:a})=>"dark"===a.mode?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"};
  border-radius: 9999px;
  cursor: pointer;
  padding: 0;
  margin-left: ${({theme:a})=>a.spacing.xl};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-flex;
  align-items: center;
  outline: none;

  &:hover {
    border-color: ${({theme:a})=>"dark"===a.mode?"rgba(255, 255, 255, 0.2)":"rgba(0, 0, 0, 0.2)"};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 768px) {
    display: none;
  }
`,aW=ah.default.div.withConfig({displayName:"NavBar.styles__ThemeToggleThumb",componentId:"sc-eefaf6bf-23"})`
  position: absolute;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: ${({$isLight:a})=>a?"#FFD700":"#4A5568"};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(${({$isLight:a})=>a?"24px, -50%":"2px, -50%"});
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  left: 0;
  top: 50%;
  
  svg {
    width: 16px;
    height: 16px;
    color: white;
    transition: opacity 0.2s ease, transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
`,aX=ah.default.button.withConfig({displayName:"NavBar.styles__MobileThemeToggleButton",componentId:"sc-eefaf6bf-24"})`
  position: relative;
  border: none;
  border-radius: ${({theme:a})=>a.borderRadius.sm};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:a})=>a.spacing.sm};
  font-family: ${({theme:a})=>a.typography.fontFamilyBody};
  font-weight: ${({theme:a})=>a.typography.fontWeight.medium};
  outline: none;
  
  ${({$isInHeader:a})=>a?ah.css`
          width: 48px;
          height: 28px;
          background-color: ${({theme:a})=>"dark"===a.mode?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.05)"};
          border: 1px solid ${({theme:a})=>"dark"===a.mode?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"};
          border-radius: 9999px;
          padding: 0;
          opacity: 0;
          animation: ${ay} 0.6s ease-out 0.15s forwards;
        `:ah.css`
          width: 48px;
          height: 28px;
          background-color: ${({theme:a})=>"dark"===a.mode?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.05)"};
          border: 1px solid ${({theme:a})=>"dark"===a.mode?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"};
          border-radius: 9999px;
          padding: 0;
          margin-top: ${({theme:a})=>a.spacing.md};
        `}

  &:hover {
    ${({$isInHeader:a,theme:b})=>a?ah.css`
            border-color: ${"dark"===b.mode?"rgba(255, 255, 255, 0.2)":"rgba(0, 0, 0, 0.2)"};
            transform: scale(1.05);
          `:ah.css`
            background-color: ${b.colors.bgSecondary};
            color: ${b.colors.accent};
          `}
  }

  &:active {
    transform: ${({$isInHeader:a})=>a?"scale(0.98)":"none"};
  }
`,aY=ah.default.div.withConfig({displayName:"NavBar.styles__MobileThemeToggleThumb",componentId:"sc-eefaf6bf-25"})`
  position: absolute;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: ${({$isLight:a})=>a?"#FFD700":"#4A5568"};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(${({$isLight:a})=>a?"20px, -50%":"2px, -50%"});
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  left: 0;
  top: 50%;
  
  svg {
    width: 14px;
    height: 14px;
    color: white;
    transition: opacity 0.2s ease, transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;ah.default.div.withConfig({displayName:"NavBar.styles__MobileThemeToggleWrapper",componentId:"sc-eefaf6bf-26"})`
  display: flex;
  align-items: center;
  gap: ${({theme:a})=>a.spacing.md};
  margin-top: ${({theme:a})=>a.spacing.md};
`,ah.default.span.withConfig({displayName:"NavBar.styles__MobileThemeToggleLabel",componentId:"sc-eefaf6bf-27"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyBody};
  font-size: ${({theme:a})=>a.typography.fontSize.base};
  font-weight: ${({theme:a})=>a.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({theme:a})=>a.colors.textPrimary};
`;let aZ=ah.default.a.withConfig({displayName:"NavBar.styles__ResumeButton",componentId:"sc-eefaf6bf-28"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyHeading};
  background-color: transparent;
  border: none;
  color: ${({theme:a})=>a.colors.textPrimary};
  padding: 0;
  font-size: ${({theme:a})=>a.typography.fontSize.sm};
  font-weight: ${({theme:a})=>a.typography.fontWeight.medium};
  text-transform: capitalize;
  letter-spacing: 0.05em;
  transition: all ${({theme:a})=>a.transitions.base};
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: ${({theme:a})=>a.spacing.xl};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${({theme:a})=>a.colors.textPrimary};
    transition: all ${({theme:a})=>a.transitions.base};
  }

  &:hover {
    color: ${({theme:a})=>a.colors.textSecondary};
    
    &::after {
      background-color: ${({theme:a})=>a.colors.textSecondary};
    }
  }
`,a$=ah.default.div.withConfig({displayName:"NavBar.styles__ResumeModalOverlay",componentId:"sc-eefaf6bf-29"})`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  background-color: ${({theme:a})=>"dark"===a.mode?"rgba(0, 0, 0, 0.8)":"rgba(0, 0, 0, 0.5)"};
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${({theme:a})=>a.zIndex.modal};
  padding: ${({theme:a})=>a.spacing.xl};
  animation: ${au} 0.2s ease-out;
`,a_=ah.default.div.withConfig({displayName:"NavBar.styles__ResumeModal",componentId:"sc-eefaf6bf-30"})`
  background-color: ${({theme:a})=>a.colors.bgSecondary};
  border: 1px solid ${({theme:a})=>a.colors.border};
  border-radius: ${({theme:a})=>a.borderRadius.md};
  padding: ${({theme:a})=>a.spacing["2xl"]};
  padding-top: ${({theme:a})=>a.spacing["3xl"]};
  max-width: 450px;
  width: 100%;
  position: relative;
  animation: ${aw} 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    padding: ${({theme:a})=>a.spacing.xl};
  }
`,a0=ah.default.h3.withConfig({displayName:"NavBar.styles__ResumeModalTitle",componentId:"sc-eefaf6bf-31"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyHeading};
  font-size: ${({theme:a})=>a.typography.fontSize.xl};
  font-weight: ${({theme:a})=>a.typography.fontWeight.bold};
  color: ${({theme:a})=>a.colors.textPrimary};
  margin: 0 0 ${({theme:a})=>a.spacing.md} 0;
  line-height: 1.2;
`,a1=ah.default.p.withConfig({displayName:"NavBar.styles__ResumeModalText",componentId:"sc-eefaf6bf-32"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyBody};
  font-size: ${({theme:a})=>a.typography.fontSize.base};
  color: ${({theme:a})=>a.colors.textSecondary};
  margin: 0 0 ${({theme:a})=>a.spacing.xl} 0;
  line-height: 1.6;
`,a2=ah.default.div.withConfig({displayName:"NavBar.styles__ResumeModalButtons",componentId:"sc-eefaf6bf-33"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:a})=>a.spacing.md};
`,a3=ah.default.button.withConfig({displayName:"NavBar.styles__ResumeModalButton",componentId:"sc-eefaf6bf-34"})`
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
`,a4=ah.default.button.withConfig({displayName:"NavBar.styles__ResumeModalClose",componentId:"sc-eefaf6bf-35"})`
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
`,a5=({name:a,navItems:b=[{label:"Work",href:"#work"},{label:"Experience",href:"#experience"},{label:"About",href:"#about"},{label:"Contact",href:"#contact"}]})=>{let{theme:c,toggleTheme:d}=(()=>{let a=(0,i.useContext)(at.ThemeContext);if(void 0===a)throw Error("useTheme must be used within a ThemeContextProvider");return a})(),[e,f]=(0,i.useState)(!1),[g,j]=(0,i.useState)(!1);(0,i.useEffect)(()=>(e||g?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[e,g]);let k=()=>{f(!1)},l=a=>{a.preventDefault(),j(!0)},m=()=>{j(!1)};return(0,h.jsxs)(az,{$mobileMenuActive:e,children:[(0,h.jsxs)(aA,{children:[(0,h.jsx)(aB,{href:"#",children:a}),(0,h.jsxs)(aC,{children:[(0,h.jsx)(aG,{children:b.map(a=>(0,h.jsx)("li",{children:(0,h.jsx)(aH,{href:a.href,children:a.label})},a.href))}),(0,h.jsx)(aZ,{href:"#",onClick:l,children:"Resume"}),(0,h.jsx)(aV,{onClick:d,"aria-label":"dark"===c?"Switch to light mode":"Switch to dark mode",title:"dark"===c?"Switch to light mode":"Switch to dark mode",$isLight:"light"===c,children:(0,h.jsx)(aW,{$isLight:"light"===c,children:"light"===c?(0,h.jsx)(as,{size:16}):(0,h.jsx)(ar,{size:16})})})]}),(0,h.jsxs)(aD,{children:[(0,h.jsx)(aE,{onClick:d,"aria-label":"dark"===c?"Switch to light mode":"Switch to dark mode",title:"dark"===c?"Switch to light mode":"Switch to dark mode",$isLight:"light"===c,children:(0,h.jsx)(aF,{$isLight:"light"===c,children:"light"===c?(0,h.jsx)(as,{size:14}):(0,h.jsx)(ar,{size:14})})}),(0,h.jsxs)(aI,{$isOpen:e,onClick:()=>{f(!e)},"aria-label":"Toggle menu",children:[(0,h.jsx)(aJ,{$index:0,$isOpen:e}),(0,h.jsx)(aJ,{$index:1,$isOpen:e}),(0,h.jsx)(aJ,{$index:2,$isOpen:e})]})]})]}),(0,h.jsx)(aK,{$isOpen:e,onClick:a=>{a.target===a.currentTarget&&k()},children:(0,h.jsxs)(aL,{children:[(0,h.jsxs)(aM,{children:[(0,h.jsx)(aO,{href:"#",onClick:k,children:a}),(0,h.jsxs)(aN,{children:[(0,h.jsx)(aX,{onClick:()=>{d()},"aria-label":"dark"===c?"Switch to light mode":"Switch to dark mode",$isInHeader:!0,$isLight:"light"===c,children:(0,h.jsx)(aY,{$isLight:"light"===c,$isInHeader:!0,children:"light"===c?(0,h.jsx)(as,{size:14}):(0,h.jsx)(ar,{size:14})})}),(0,h.jsx)(aP,{onClick:k,"aria-label":"Close menu",children:"×"})]})]}),(0,h.jsx)(aQ,{}),(0,h.jsxs)(aR,{children:[b.map((a,b)=>(0,h.jsx)(aS,{$index:b,children:(0,h.jsx)(aT,{href:a.href,onClick:k,children:a.label})},a.href)),(0,h.jsx)(aS,{$index:b.length,children:(0,h.jsx)(aU,{href:"#",onClick:a=>{a.preventDefault(),k(),l(a)},children:"Resume"})})]})]})}),g&&(0,h.jsx)(a$,{onClick:m,children:(0,h.jsxs)(a_,{onClick:a=>a.stopPropagation(),children:[(0,h.jsx)(a0,{children:"Resume Options"}),(0,h.jsx)(a1,{children:"Choose an option:"}),(0,h.jsxs)(a2,{children:[(0,h.jsx)(a3,{onClick:()=>{window.open("/resume/umarnazir.pdf","_blank"),j(!1)},children:"View Resume"}),(0,h.jsx)(a3,{onClick:()=>{let a=document.createElement("a");a.href="/resume/umarnazir.pdf",a.download="umarnazir.pdf",document.body.appendChild(a),a.click(),document.body.removeChild(a),j(!1)},children:"Download Resume"})]}),(0,h.jsx)(a4,{onClick:m,"aria-label":"Close modal",children:"×"})]})})]})},a6=ah.default.div.withConfig({displayName:"HeroContent.styles__HeroText",componentId:"sc-5ac6c28e-0"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:a})=>a.spacing.xl};
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    gap: ${({theme:a})=>a.spacing.md};
  }
`,a7=ah.default.p.withConfig({displayName:"HeroContent.styles__Subtitle",componentId:"sc-5ac6c28e-1"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyBody};
  font-size: ${({theme:a})=>a.typography.fontSize.xs};
  font-weight: ${({theme:a})=>a.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({theme:a})=>a.colors.textSecondary};
  margin: 0;
`,a8=ah.default.div.withConfig({displayName:"HeroContent.styles__Title",componentId:"sc-5ac6c28e-2"})`
  display: flex;
  flex-direction: column;
  gap: 0;
  line-height: 1;
  align-items: center;
`,a9=ah.default.h2.withConfig({displayName:"HeroContent.styles__Headline",componentId:"sc-5ac6c28e-3"})`
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
`,ba=ah.default.p.withConfig({displayName:"HeroContent.styles__Description",componentId:"sc-5ac6c28e-4"})`
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
`,bb=({title:a,headline:b,description:c})=>{let d=b.split("\n").filter(a=>""!==a.trim());return(0,h.jsxs)(a6,{children:[(0,h.jsx)(a7,{"data-aos":"fade-up","data-aos-delay":"0",children:a}),(0,h.jsx)(a8,{children:d.map((a,b)=>(0,h.jsx)(a9,{"data-aos":"fade-up","data-aos-delay":`${100+100*b}`,children:a.trim()},b))}),(0,h.jsx)(ba,{"data-aos":"fade-up","data-aos-delay":"400",children:c})]})},bc=ah.keyframes`
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
`,bd=ah.default.div.withConfig({displayName:"ScrollIndicator.styles__ScrollIndicatorWrapper",componentId:"sc-fa897f55-0"})`
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
`,be=ah.default.div.withConfig({displayName:"ScrollIndicator.styles__ScrollLine",componentId:"sc-fa897f55-1"})`
  width: 1px;
  height: 40px;
  background-color: ${({theme:a})=>a.colors.textSecondary};
  animation: ${bc} 2s ease-in-out infinite;

  @media (max-width: 768px) {
    height: 30px;
  }
`,bf=()=>(0,h.jsxs)(bd,{children:[(0,h.jsx)("span",{children:"SCROLL TO EXPLORE"}),(0,h.jsx)(be,{})]}),bg=ah.default.section.withConfig({displayName:"Hero.styles__StyledHero",componentId:"sc-8af8d994-0"})`
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
`,bh=ah.default.div.withConfig({displayName:"Hero.styles__HeroContentWrapper",componentId:"sc-8af8d994-1"})`
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
`,bi=({title:a,headline:b,description:c})=>(0,h.jsxs)(bg,{children:[(0,h.jsx)(bh,{children:(0,h.jsx)(bb,{title:a,headline:b,description:c})}),(0,h.jsx)(bf,{})]});var bj=a.i(71476);let bk=aq("corner-right-down",[["path",{d:"m10 15 5 5 5-5",key:"1hpjnr"}],["path",{d:"M4 4h7a4 4 0 0 1 4 4v12",key:"wcbgct"}]]),bl=aq("corner-right-up",[["path",{d:"m10 9 5-5 5 5",key:"9ctzwi"}],["path",{d:"M4 20h7a4 4 0 0 0 4-4V4",key:"1plgdj"}]]),bm=ah.default.button.withConfig({displayName:"Button.styles__StyledButton",componentId:"sc-d2ac6181-0"})`
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

  ${({$variant:a="primary"})=>{switch(a){case"primary":return ah.css`
          background-color: ${({theme:a})=>a.colors.bgSecondary};
          border-color: ${({theme:a})=>a.colors.border};
          color: ${({theme:a})=>a.colors.textPrimary};

          &:hover:not(:disabled) {
            background-color: ${({theme:a})=>a.colors.bgTertiary};
            border-color: ${({theme:a})=>a.colors.textSecondary};
          }
        `;case"secondary":return ah.css`
          background-color: transparent;
          border-color: ${({theme:a})=>a.colors.border};
          color: ${({theme:a})=>a.colors.textPrimary};

          &:hover:not(:disabled) {
            border-color: ${({theme:a})=>a.colors.accent};
            color: ${({theme:a})=>a.colors.accent};
          }
        `;case"accent":return ah.css`
          background-color: ${({theme:a})=>a.colors.accent};
          color: ${({theme:a})=>a.colors.textPrimary};

          &:hover:not(:disabled) {
            background-color: ${({theme:a})=>a.colors.accentHover};
          }
        `}}}

  ${({$size:a="medium"})=>{switch(a){case"small":return ah.css`
          padding: ${({theme:a})=>a.spacing.xs} ${({theme:a})=>a.spacing.md};
          font-size: ${({theme:a})=>a.typography.fontSize.xs};
        `;case"medium":return ah.css`
          padding: ${({theme:a})=>a.spacing.sm} ${({theme:a})=>a.spacing.lg};
          font-size: ${({theme:a})=>a.typography.fontSize.sm};
        `;case"large":return ah.css`
          padding: ${({theme:a})=>a.spacing.md} ${({theme:a})=>a.spacing.xl};
          font-size: ${({theme:a})=>a.typography.fontSize.base};
        `}}}

  ${({$fullWidth:a})=>a&&ah.css`
      width: 100%;
    `}
`,bn=ah.default.a.withConfig({displayName:"Button.styles__StyledButtonLink",componentId:"sc-d2ac6181-1"})`
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

  ${({$variant:a="primary"})=>{switch(a){case"primary":return ah.css`
          background-color: ${({theme:a})=>a.colors.bgSecondary};
          border-color: ${({theme:a})=>a.colors.border};
          color: ${({theme:a})=>a.colors.textPrimary};

          &:hover {
            background-color: ${({theme:a})=>a.colors.bgTertiary};
            border-color: ${({theme:a})=>a.colors.textSecondary};
          }
        `;case"secondary":return ah.css`
          background-color: transparent;
          border-color: ${({theme:a})=>a.colors.border};
          color: ${({theme:a})=>a.colors.textPrimary};

          &:hover {
            border-color: ${({theme:a})=>a.colors.accent};
            color: ${({theme:a})=>a.colors.accent};
          }
        `;case"accent":return ah.css`
          background-color: ${({theme:a})=>a.colors.accent};
          color: ${({theme:a})=>a.colors.textPrimary};

          &:hover {
            background-color: ${({theme:a})=>a.colors.accentHover};
          }
        `}}}

  ${({$size:a="medium"})=>{switch(a){case"small":return ah.css`
          padding: ${({theme:a})=>a.spacing.xs} ${({theme:a})=>a.spacing.md};
          font-size: ${({theme:a})=>a.typography.fontSize.xs};
        `;case"medium":return ah.css`
          padding: ${({theme:a})=>a.spacing.sm} ${({theme:a})=>a.spacing.lg};
          font-size: ${({theme:a})=>a.typography.fontSize.sm};
        `;case"large":return ah.css`
          padding: ${({theme:a})=>a.spacing.md} ${({theme:a})=>a.spacing.xl};
          font-size: ${({theme:a})=>a.typography.fontSize.base};
        `}}}

  ${({$fullWidth:a})=>a&&ah.css`
      width: 100%;
    `}
`;i.default.forwardRef(({variant:a="primary",size:b="medium",fullWidth:c=!1,icon:d,iconPosition:e="left",children:f,className:g="",as:i="button",href:j,...k},l)=>{let m=(0,h.jsxs)(h.Fragment,{children:[d&&"left"===e&&(0,h.jsx)(d,{size:16}),f,d&&"right"===e&&(0,h.jsx)(d,{size:16})]});return"a"===i&&j?(0,h.jsx)(bn,{ref:l,$variant:a,$size:b,$fullWidth:c,href:j,className:g,...k,children:m}):(0,h.jsx)(bm,{ref:l,$variant:a,$size:b,$fullWidth:c,className:g,...k,children:m})}).displayName="Button",ah.default.div.withConfig({displayName:"Card.styles__StyledCard",componentId:"sc-cb91bbca-0"})`
  background-color: ${({theme:a})=>a.colors.bgSecondary};
  border: 1px solid ${({theme:a})=>a.colors.border};
  border-radius: ${({theme:a})=>a.borderRadius.md};
  padding: ${({theme:a})=>a.spacing.xl};
  transition: all ${({theme:a})=>a.transitions.base} ease-out;
  transform-style: preserve-3d;
  transform: translateZ(0);
  will-change: transform;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);

  &:hover {
    border-color: ${({theme:a})=>a.colors.textSecondary};
    transform: translateY(-4px) translateZ(10px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }

  ${({$interactive:a})=>a&&ah.css`
      cursor: pointer;

      &:hover {
        border-color: ${({theme:a})=>a.colors.accent};
        box-shadow: 0 12px 32px ${({theme:a})=>a.colors.accent}20;
      }
    `}
`;let bo=ah.default.span.withConfig({displayName:"Tag.styles__StyledTag",componentId:"sc-ea18aa85-0"})`
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
`,bp=({children:a,className:b=""})=>(0,h.jsx)(bo,{className:b,children:a}),bq=ah.default.div.withConfig({displayName:"Input.styles__InputWrapper",componentId:"sc-7de3a321-0"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:a})=>a.spacing.xs};
  width: ${({$fullWidth:a=!0})=>a?"100%":"auto"};
`,br=ah.default.label.withConfig({displayName:"Input.styles__Label",componentId:"sc-7de3a321-1"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyBody};
  font-size: ${({theme:a})=>a.typography.fontSize.xs};
  font-weight: ${({theme:a})=>a.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({theme:a})=>a.colors.textSecondary};
`,bs=ah.default.input.withConfig({displayName:"Input.styles__StyledInput",componentId:"sc-7de3a321-2"})`
  width: 100%;
  padding: ${({theme:a})=>a.spacing.md};
  background-color: ${({theme:a})=>a.colors.inputBg};
  border: 1px solid ${({theme:a,$error:b})=>b?"#ef4444":a.colors.inputBorder};
  border-radius: ${({theme:a})=>a.borderRadius.sm};
  color: ${({theme:a})=>a.colors.textPrimary};
  font-size: ${({theme:a})=>a.typography.fontSize.base};
  transition: all ${({theme:a})=>a.transitions.base} ease-out;
  font-family: inherit;
  transform-style: preserve-3d;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);

  &:focus {
    outline: none;
    border-color: ${({theme:a,$error:b})=>b?"#ef4444":a.colors.inputFocus};
    background-color: ${({theme:a})=>a.colors.bgTertiary};
    transform: translateZ(5px);
    box-shadow: 0 4px 12px ${({theme:a,$error:b})=>b?"rgba(239, 68, 68, 0.15)":`${a.colors.inputFocus}20`};
  }

  &::placeholder {
    color: ${({theme:a})=>a.colors.textTertiary};
  }
`,bt=ah.default.textarea.withConfig({displayName:"Input.styles__StyledTextarea",componentId:"sc-7de3a321-3"})`
  width: 100%;
  padding: ${({theme:a})=>a.spacing.md};
  background-color: ${({theme:a})=>a.colors.inputBg};
  border: 1px solid ${({theme:a,$error:b})=>b?"#ef4444":a.colors.inputBorder};
  border-radius: ${({theme:a})=>a.borderRadius.sm};
  color: ${({theme:a})=>a.colors.textPrimary};
  font-size: ${({theme:a})=>a.typography.fontSize.base};
  transition: all ${({theme:a})=>a.transitions.base} ease-out;
  font-family: inherit;
  resize: vertical;
  min-height: 120px;
  transform-style: preserve-3d;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);

  &:focus {
    outline: none;
    border-color: ${({theme:a,$error:b})=>b?"#ef4444":a.colors.inputFocus};
    background-color: ${({theme:a})=>a.colors.bgTertiary};
    transform: translateZ(5px);
    box-shadow: 0 4px 12px ${({theme:a,$error:b})=>b?"rgba(239, 68, 68, 0.15)":`${a.colors.inputFocus}20`};
  }

  &::placeholder {
    color: ${({theme:a})=>a.colors.textTertiary};
  }
`,bu=ah.default.span.withConfig({displayName:"Input.styles__ErrorMessage",componentId:"sc-7de3a321-4"})`
  font-size: ${({theme:a})=>a.typography.fontSize.xs};
  color: #ef4444;
`,bv=({label:a,error:b,fullWidth:c=!0,className:d="",...e})=>(0,h.jsxs)(bq,{$fullWidth:c,children:[a&&(0,h.jsx)(br,{children:a}),(0,h.jsx)(bs,{$error:!!b,className:d,...e}),b&&(0,h.jsx)(bu,{children:b})]}),bw=({label:a,error:b,fullWidth:c=!0,className:d="",...e})=>(0,h.jsxs)(bq,{$fullWidth:c,children:[a&&(0,h.jsx)(br,{children:a}),(0,h.jsx)(bt,{$error:!!b,className:d,...e}),b&&(0,h.jsx)(bu,{children:b})]}),bx=ah.default.p.withConfig({displayName:"Text.styles__StyledText",componentId:"sc-10b9dfea-0"})`
  margin: 0;

  ${({$variant:a="body"})=>{switch(a){case"h1":return ah.css`
          font-family: ${({theme:a})=>a.typography.fontFamilyHeading};
          font-size: ${({theme:a})=>a.typography.fontSize["6xl"]};
          font-weight: ${({theme:a})=>a.typography.fontWeight.bold};
          line-height: 1.1;
          letter-spacing: -0.02em;

          @media (max-width: 768px) {
            font-size: ${({theme:a})=>a.typography.fontSize["4xl"]};
          }
        `;case"h2":return ah.css`
          font-family: ${({theme:a})=>a.typography.fontFamilyHeading};
          font-size: ${({theme:a})=>a.typography.fontSize["5xl"]};
          font-weight: ${({theme:a})=>a.typography.fontWeight.bold};
          line-height: 1.2;
          letter-spacing: -0.01em;

          @media (max-width: 768px) {
            font-size: ${({theme:a})=>a.typography.fontSize["3xl"]};
          }
        `;case"h3":return ah.css`
          font-family: ${({theme:a})=>a.typography.fontFamilyHeading};
          font-size: ${({theme:a})=>a.typography.fontSize["4xl"]};
          font-weight: ${({theme:a})=>a.typography.fontWeight.semibold};
          line-height: 1.3;

          @media (max-width: 768px) {
            font-size: ${({theme:a})=>a.typography.fontSize["2xl"]};
          }
        `;case"h4":return ah.css`
          font-family: ${({theme:a})=>a.typography.fontFamilyHeading};
          font-size: ${({theme:a})=>a.typography.fontSize["3xl"]};
          font-weight: ${({theme:a})=>a.typography.fontWeight.semibold};
          line-height: 1.4;

          @media (max-width: 768px) {
            font-size: ${({theme:a})=>a.typography.fontSize.xl};
          }
        `;case"h5":return ah.css`
          font-family: ${({theme:a})=>a.typography.fontFamilyHeading};
          font-size: ${({theme:a})=>a.typography.fontSize["2xl"]};
          font-weight: ${({theme:a})=>a.typography.fontWeight.semibold};
          line-height: 1.4;
        `;case"h6":return ah.css`
          font-family: ${({theme:a})=>a.typography.fontFamilyHeading};
          font-size: ${({theme:a})=>a.typography.fontSize.xl};
          font-weight: ${({theme:a})=>a.typography.fontWeight.semibold};
          line-height: 1.5;
        `;case"body":return ah.css`
          font-family: ${({theme:a})=>a.typography.fontFamilyBody};
          font-size: ${({theme:a})=>a.typography.fontSize.base};
          line-height: 1.6;
        `;case"bodyLarge":return ah.css`
          font-family: ${({theme:a})=>a.typography.fontFamilyBody};
          font-size: ${({theme:a})=>a.typography.fontSize.lg};
          line-height: 1.6;
        `;case"bodySmall":return ah.css`
          font-family: ${({theme:a})=>a.typography.fontFamilyBody};
          font-size: ${({theme:a})=>a.typography.fontSize.sm};
          line-height: 1.5;
        `;case"caption":return ah.css`
          font-family: ${({theme:a})=>a.typography.fontFamilyBody};
          font-size: ${({theme:a})=>a.typography.fontSize.xs};
          line-height: 1.4;
        `}}}

  ${({$color:a="primary"})=>{switch(a){case"primary":return ah.css`
          color: ${({theme:a})=>a.colors.textPrimary};
        `;case"secondary":return ah.css`
          color: ${({theme:a})=>a.colors.textSecondary};
        `;case"tertiary":return ah.css`
          color: ${({theme:a})=>a.colors.textTertiary};
        `;case"accent":return ah.css`
          color: ${({theme:a})=>a.colors.accent};
        `}}}

  ${({$weight:a})=>{if(!a)return"";switch(a){case"normal":return ah.css`
          font-weight: ${({theme:a})=>a.typography.fontWeight.normal};
        `;case"medium":return ah.css`
          font-weight: ${({theme:a})=>a.typography.fontWeight.medium};
        `;case"semibold":return ah.css`
          font-weight: ${({theme:a})=>a.typography.fontWeight.semibold};
        `;case"bold":return ah.css`
          font-weight: ${({theme:a})=>a.typography.fontWeight.bold};
        `}}}
`,by=({variant:a="body",color:b="primary",weight:c,as:d,children:e,className:f=""})=>{let g=d||("h1"===a||"h2"===a||"h3"===a||"h4"===a||"h5"===a||"h6"===a?a:"p");return(0,h.jsx)(bx,{as:g,$variant:a,$color:b,$weight:c,className:f,children:e})},bz=ah.default.div.withConfig({displayName:"Container.styles__StyledContainer",componentId:"sc-ab2069fa-0"})`
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
`,bA=({children:a,className:b=""})=>(0,h.jsx)(bz,{className:b,children:a}),bB=ah.default.section.withConfig({displayName:"Section.styles__StyledSection",componentId:"sc-897389d1-0"})`
  padding: ${({theme:a})=>a.spacing["4xl"]} 0;
  position: relative;
  transform-style: preserve-3d;

  ${({$size:a="medium"})=>{switch(a){case"small":return ah.css`
          padding: ${({theme:a})=>a.spacing["2xl"]} 0;

          @media (max-width: 768px) {
            padding: ${({theme:a})=>a.spacing.lg} 0;
          }
        `;case"large":return ah.css`
          padding: ${({theme:a})=>a.spacing["4xl"]} 0;

          @media (max-width: 768px) {
            padding: ${({theme:a})=>a.spacing["2xl"]} 0;
          }
        `;default:return ah.css`
          @media (max-width: 768px) {
            padding: ${({theme:a})=>a.spacing["2xl"]} 0;
          }
        `}}}
`,bC=({children:a,size:b="medium",className:c="",id:d})=>(0,h.jsx)(bB,{id:d,$size:b,className:c,children:a}),bD=ah.default.div.withConfig({displayName:"WorkHeader.styles__WorkHeaderWrapper",componentId:"sc-45d9ae25-0"})`
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
`,bE=ah.default.span.withConfig({displayName:"WorkHeader.styles__SectionNumber",componentId:"sc-45d9ae25-1"})`
  font-size: ${({theme:a})=>a.typography.fontSize["2xl"]};
  font-weight: ${({theme:a})=>a.typography.fontWeight.bold};
  color: ${({theme:a})=>a.colors.textTertiary};
  font-family: ${({theme:a})=>a.typography.fontFamilyMono};

  @media (max-width: 768px) {
    font-size: ${({theme:a})=>a.typography.fontSize.lg};
  }
`,bF=({sectionNumber:a})=>(0,h.jsxs)(bD,{"data-aos":"fade-up",children:[(0,h.jsx)(bE,{children:a}),(0,h.jsx)(by,{variant:"h2",children:"Work"})]});var bG=a.i(71987);let bH=aq("external-link",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]),bI=ah.default.div.withConfig({displayName:"ProjectCard.styles__ProjectCardWrapper",componentId:"sc-4b02ff16-0"})`
  display: grid;
  grid-template-columns: ${({$isReverse:a})=>a?"1.5fr 1fr":"1fr 1.5fr"};
  gap: ${({theme:a})=>a.spacing["4xl"]};
  align-items: center;
  width: 100%;
  padding: ${({theme:a})=>a.spacing["4xl"]} 0;
  transition: transform ${({theme:a})=>a.transitions.base};

  &:hover .project-title {
    color: ${({theme:a})=>a.colors.accent};
  }

  &:hover .project-visual {
    @media (min-width: 1025px) {
      transform: scale(1.02);
      
      img {
        transform: scale(1.05);
      }
    }
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: ${({theme:a})=>a.spacing["2xl"]};
    padding: ${({theme:a})=>a.spacing["2xl"]} 0;
    
    &:active {
      transform: scale(0.98);
    }
  }
`,bJ=ah.default.div.withConfig({displayName:"ProjectCard.styles__ProjectInfo",componentId:"sc-4b02ff16-1"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:a})=>a.spacing.md};
  max-width: 100%;
  order: ${({$isReverse:a})=>a?2:1};
  transition: opacity ${({theme:a})=>a.transitions.base};

  @media (max-width: 1024px) {
    order: 1;
    animation: fadeInUp 0.6s ease-out;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,bK=ah.default.span.withConfig({displayName:"ProjectCard.styles__ProjectNumber",componentId:"sc-4b02ff16-2"})`
  font-size: ${({theme:a})=>a.typography.fontSize.xl};
  font-weight: ${({theme:a})=>a.typography.fontWeight.bold};
  color: ${({theme:a})=>a.colors.textTertiary};
  font-family: ${({theme:a})=>a.typography.fontFamilyMono};
  line-height: 1;
`,bL=ah.default.div.withConfig({displayName:"ProjectCard.styles__ProjectMeta",componentId:"sc-4b02ff16-3"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyBody};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:a})=>a.spacing.md};
  font-size: ${({theme:a})=>a.typography.fontSize.xs};
  color: ${({theme:a})=>a.colors.textTertiary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,bM=ah.default.div.withConfig({displayName:"ProjectCard.styles__ProjectMetaLeft",componentId:"sc-4b02ff16-4"})`
  display: flex;
  align-items: center;
  gap: ${({theme:a})=>a.spacing.md};
`,bN=ah.default.span.withConfig({displayName:"ProjectCard.styles__ProjectYear",componentId:"sc-4b02ff16-5"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyMono};
`,bO=ah.default.span.withConfig({displayName:"ProjectCard.styles__ProjectCategory",componentId:"sc-4b02ff16-6"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyBody};
  color: ${({theme:a})=>a.colors.textSecondary};
`,bP=ah.default.div.withConfig({displayName:"ProjectCard.styles__ProjectTitleWrapper",componentId:"sc-4b02ff16-7"})``,bQ=ah.default.span.withConfig({displayName:"ProjectCard.styles__ProjectTitle",componentId:"sc-4b02ff16-8"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyHeading};
  color: ${({theme:a})=>a.colors.textPrimary};
  transition: color ${({theme:a})=>a.transitions.base};
  cursor: pointer;
  display: block;
`,bR=ah.default.span.withConfig({displayName:"ProjectCard.styles__ProjectDescription",componentId:"sc-4b02ff16-9"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyBody};
  color: ${({theme:a})=>a.colors.textSecondary};
  line-height: 1.8;
`,bS=ah.default.div.withConfig({displayName:"ProjectCard.styles__ProjectTags",componentId:"sc-4b02ff16-10"})`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:a})=>a.spacing.sm};
  margin-top: ${({theme:a})=>a.spacing.sm};
`,bT=ah.default.a.withConfig({displayName:"ProjectCard.styles__ProjectLink",componentId:"sc-4b02ff16-11"})`
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

  &.project-link-mobile {
    margin-top: ${({theme:a})=>a.spacing.lg};
    animation: fadeInUp 0.6s ease-out 0.4s both;
    order: 3;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,bU=ah.default.div.withConfig({displayName:"ProjectCard.styles__ProjectVisual",componentId:"sc-4b02ff16-12"})`
  width: 100%;
  height: 400px;
  border-radius: ${({theme:a})=>a.borderRadius.md};
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  order: ${({$isReverse:a})=>a?1:2};
  transition: transform ${({theme:a})=>a.transitions.base}, opacity ${({theme:a})=>a.transitions.base};

  img {
    transition: transform ${({theme:a})=>a.transitions.base};
  }

  @media (max-width: 1024px) {
    height: 350px;
    order: 2;
    animation: fadeInUp 0.6s ease-out 0.2s both;
  }

  @media (max-width: 768px) {
    height: 280px;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;ah.default.div.withConfig({displayName:"ProjectCard.styles__ProjectVisualImg",componentId:"sc-4b02ff16-13"})`
  border-radius: ${({theme:a})=>a.borderRadius.md};
`;let bV=({project:a,index:b})=>{let[c,d]=(0,i.useState)(!1);(0,i.useEffect)(()=>{let a=()=>{d(window.innerWidth<=1024)};return a(),window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[]);let e=b%2==1;return(0,h.jsxs)(bI,{$isReverse:e,...c?{}:{"data-aos":b%2==0?"fade-right":"fade-left","data-aos-delay":100*b},className:"project-card-wrapper",children:[(0,h.jsxs)(bJ,{$isReverse:e,children:[(0,h.jsx)(by,{variant:"h4",as:"span",children:(0,h.jsx)(bK,{children:a.number})}),(0,h.jsx)(bL,{children:(0,h.jsxs)(bM,{children:[(0,h.jsx)(bN,{children:a.year}),(0,h.jsx)("span",{children:"•"}),(0,h.jsx)(bO,{children:a.category})]})}),(0,h.jsx)(bP,{children:(0,h.jsx)(by,{variant:"h3",as:"span",children:(0,h.jsx)(bQ,{className:"project-title",children:a.title})})}),(0,h.jsx)(by,{variant:"body",color:"secondary",as:"span",children:(0,h.jsx)(bR,{children:a.description})}),(0,h.jsx)(bS,{children:a.tags.map(a=>(0,h.jsx)(bp,{children:a},a))}),a.link&&!c&&(0,h.jsxs)(bT,{href:a.link,target:"_blank",rel:"noopener noreferrer",className:"project-link-desktop",children:["Live Link",(0,h.jsx)(bH,{size:16})]})]}),(0,h.jsx)(bU,{$isReverse:e,className:"project-visual",children:(0,h.jsx)(bG.default,{src:a.imageLink||"/images/ml-jobs.png",alt:a.title,fill:!0,style:{objectFit:"cover",borderRadius:"0.5rem"}})}),a.link&&c&&(0,h.jsxs)(bT,{href:a.link,target:"_blank",rel:"noopener noreferrer",className:"project-link-mobile",children:["Live Link",(0,h.jsx)(bH,{size:16})]})]})},bW=ah.default.div.withConfig({displayName:"Work.styles__StyledWork",componentId:"sc-afd42b7-0"})`
  position: relative;
`,bX=ah.default.div.withConfig({displayName:"Work.styles__ProjectsList",componentId:"sc-afd42b7-1"})`
  display: flex;
  flex-direction: column;
  gap: 0;
`,bY=ah.default.div.withConfig({displayName:"Work.styles__ViewAllButtonContainer",componentId:"sc-afd42b7-2"})`
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
`,bZ=ah.default.button.withConfig({displayName:"Work.styles__ViewAllButton",componentId:"sc-afd42b7-3"})`
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
`,b$=({sectionNumber:a="01",projects:b})=>{let[c,d]=(0,i.useState)(!1),e=c?b:b.slice(0,5),f=b.length>5;return(0,i.useEffect)(()=>{bj.default.refresh()},[c]),(0,h.jsx)(bC,{id:"work",children:(0,h.jsx)(bA,{children:(0,h.jsxs)(bW,{children:[(0,h.jsx)(bF,{sectionNumber:a}),(0,h.jsx)(bX,{children:e.map((a,b)=>(0,h.jsx)(bV,{project:a,index:b},a.id))}),f&&(0,h.jsx)(bY,{children:c?(0,h.jsxs)(bZ,{onClick:()=>{d(!1);let a=document.getElementById("work");a&&a.scrollIntoView({behavior:"smooth",block:"start"})},children:["Show Less",(0,h.jsx)(bl,{size:14})]}):(0,h.jsxs)(bZ,{onClick:()=>{d(!0)},children:["View All Projects",(0,h.jsx)(bk,{size:14})]})})]})})})},b_=ah.default.div.withConfig({displayName:"ExperienceHeader.styles__SectionHeader",componentId:"sc-502ea126-0"})`
  display: flex;
  align-items: center;
  gap: ${({theme:a})=>a.spacing.lg};
  margin-bottom: ${({theme:a})=>a.spacing["4xl"]};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({theme:a})=>a.spacing.md};
  }
`,b0=ah.default.span.withConfig({displayName:"ExperienceHeader.styles__SectionNumber",componentId:"sc-502ea126-1"})`
  font-size: ${({theme:a})=>a.typography.fontSize["2xl"]};
  font-weight: ${({theme:a})=>a.typography.fontWeight.bold};
  color: ${({theme:a})=>a.colors.textTertiary};
  font-family: ${({theme:a})=>a.typography.fontFamilyMono};
`,b1=({sectionNumber:a})=>(0,h.jsxs)(b_,{"data-aos":"fade-up",children:[(0,h.jsx)(b0,{children:a}),(0,h.jsx)(by,{variant:"h2",children:"Experience"})]}),b2=aq("arrow-right",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),b3=ah.default.div.withConfig({displayName:"ExperienceCard.styles__TimelineItem",componentId:"sc-692b517d-0"})`
  position: relative;
  padding-left: ${({theme:a})=>a.spacing.xl};

  @media (max-width: 768px) {
    padding-left: ${({theme:a})=>a.spacing.sm};
  }
`,b4=ah.default.div.withConfig({displayName:"ExperienceCard.styles__TimelineDotWrapper",componentId:"sc-692b517d-1"})`
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

  ${b3}:hover & {
    transform: scale(1.15);
  }

  @media (max-width: 768px) {
    left: calc(-1 * ${({theme:a})=>a.spacing.xl} - ${({theme:a})=>a.spacing.sm} + 1px - 12px);
    top: 10px;
    width: 24px;
    height: 24px;
  }
`,b5=ah.default.div.withConfig({displayName:"ExperienceCard.styles__TimelineDotOuter",componentId:"sc-692b517d-2"})`
  position: absolute;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: transparent;
  border: 2px solid ${({theme:a})=>a.colors.accent};
  z-index: 1;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  ${b3}:hover & {
    border-color: ${({theme:a})=>a.colors.accentHover};
    transform: scale(1.1);
    box-shadow: ${({theme:a})=>(a.mode,`0 0 0 4px ${a.colors.accent}33`)};
  }

  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
    border-width: 1.5px;
  }
`,b6=ah.default.div.withConfig({displayName:"ExperienceCard.styles__TimelineDot",componentId:"sc-692b517d-3"})`
  position: relative;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({theme:a})=>a.colors.textPrimary};
  z-index: 2;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  ${b3}:hover & {
    transform: scale(1.15);
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 768px) {
    width: 12px;
    height: 12px;
  }
`,b7=ah.default.div.withConfig({displayName:"ExperienceCard.styles__StyledExperienceCard",componentId:"sc-692b517d-4"})`
  background-color: ${({theme:a})=>a.colors.bgSecondary};
  border: 1px solid ${({theme:a})=>a.colors.border};
  border-radius: ${({theme:a})=>a.borderRadius.md};
  padding: ${({theme:a})=>a.spacing.xl};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  width: 100%;
  max-width: 100%;
  cursor: pointer;

  ${b3}:hover & {
    border-color: ${({theme:a})=>a.colors.accent};
    transform: translateX(8px);
    box-shadow: ${({theme:a})=>"dark"===a.mode?`0 4px 24px ${a.colors.accent}26`:`0 4px 24px ${a.colors.accent}20`};
  }

  @media (max-width: 768px) {
    padding: ${({theme:a})=>a.spacing.md};
    border-radius: ${({theme:a})=>a.borderRadius.sm};

    ${b3}:hover & {
      transform: translateX(4px);
      box-shadow: ${({theme:a})=>"dark"===a.mode?`0 2px 12px ${a.colors.accent}20`:`0 2px 12px ${a.colors.accent}15`};
    }
  }
`,b8=ah.default.div.withConfig({displayName:"ExperienceCard.styles__CardHeader",componentId:"sc-692b517d-5"})`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  margin-bottom: ${({theme:a})=>a.spacing.sm};
  width: 100%;

  @media (max-width: 768px) {
    justify-content: flex-start;
    margin-bottom: ${({theme:a})=>a.spacing.xs};
  }
`,b9=ah.default.div.withConfig({displayName:"ExperienceCard.styles__CardHeaderLeft",componentId:"sc-692b517d-6"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:a})=>a.spacing.xs};
  width: 100%;
  margin-bottom: ${({theme:a})=>a.spacing.md};

  @media (max-width: 768px) {
    gap: ${({theme:a})=>a.spacing.xs};
    margin-bottom: ${({theme:a})=>a.spacing.sm};
  }
`,ca=ah.default.span.withConfig({displayName:"ExperienceCard.styles__CompanyName",componentId:"sc-692b517d-7"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyHeading};
  color: ${({theme:a})=>a.colors.textSecondary};
  line-height: 1.2;
  transition: color 0.3s ease;
  display: block;

  ${b7}:hover & {
    color: ${({theme:a})=>"dark"===a.mode?"#e0e7ff":a.colors.textSecondary};
  }
`,cb=ah.default.span.withConfig({displayName:"ExperienceCard.styles__Role",componentId:"sc-692b517d-8"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyHeading};
  color: ${({theme:a})=>a.colors.accent};
  line-height: 1.3;
  transition: color 0.3s ease;
  display: block;

  ${b7}:hover & {
    color: ${({theme:a})=>"dark"===a.mode?a.colors.accentHover:a.colors.accent};
  }
`,cc=ah.default.span.withConfig({displayName:"ExperienceCard.styles__LocationType",componentId:"sc-692b517d-9"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyBody};
  font-size: ${({theme:a})=>a.typography.fontSize.sm};
  color: ${({theme:a})=>a.colors.textTertiary};
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: ${({theme:a})=>a.typography.fontSize.xs};
    line-height: 1.4;
  }
`,cd=ah.default.span.withConfig({displayName:"ExperienceCard.styles__DateLocation",componentId:"sc-692b517d-10"})`
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
`,ce=ah.default.span.withConfig({displayName:"ExperienceCard.styles__ExperienceDescription",componentId:"sc-692b517d-11"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyBody};
  color: ${({theme:a})=>a.colors.textSecondary};
  line-height: 1.8;
  margin-bottom: ${({theme:a})=>a.spacing.md};
  transition: color 0.3s ease;
  display: block;

  ${b7}:hover & {
    color: ${({theme:a})=>"dark"===a.mode?"#e0e7ff":a.colors.textSecondary};
  }

  @media (max-width: 768px) {
    font-size: ${({theme:a})=>a.typography.fontSize.sm};
    line-height: 1.6;
    margin-bottom: ${({theme:a})=>a.spacing.sm};
  }
`,cf=ah.default.ul.withConfig({displayName:"ExperienceCard.styles__ExperienceList",componentId:"sc-692b517d-12"})`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${({theme:a})=>a.spacing.sm};
  margin-bottom: ${({theme:a})=>a.spacing.md};

  @media (max-width: 768px) {
    gap: ${({theme:a})=>a.spacing.xs};
    margin-bottom: ${({theme:a})=>a.spacing.sm};
  }
`,cg=ah.default.li.withConfig({displayName:"ExperienceCard.styles__ExperienceListItem",componentId:"sc-692b517d-13"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyBody};
  display: flex;
  align-items: flex-start;
  gap: ${({theme:a})=>a.spacing.sm};
  color: ${({theme:a})=>a.colors.textSecondary};
  line-height: 1.8;
  transition: color 0.3s ease;

  ${b7}:hover & {
    color: ${({theme:a})=>"dark"===a.mode?"#e0e7ff":a.colors.textSecondary};
  }

  @media (max-width: 768px) {
    font-size: ${({theme:a})=>a.typography.fontSize.sm};
    line-height: 1.6;
    gap: ${({theme:a})=>a.spacing.xs};
  }
`,ch=ah.default.span.withConfig({displayName:"ExperienceCard.styles__ExperienceListArrow",componentId:"sc-692b517d-14"})`
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
`,ci=ah.default.div.withConfig({displayName:"ExperienceCard.styles__ExperienceTags",componentId:"sc-692b517d-15"})`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:a})=>a.spacing.sm};
  margin-top: ${({theme:a})=>a.spacing.sm};

  @media (max-width: 768px) {
    gap: ${({theme:a})=>a.spacing.xs};
    margin-top: ${({theme:a})=>a.spacing.xs};
  }
`,cj=({experience:a,index:b})=>(0,h.jsxs)(b3,{"data-aos":"fade-up","data-aos-delay":150*b,children:[(0,h.jsxs)(b4,{children:[(0,h.jsx)(b5,{}),(0,h.jsx)(b6,{})]}),(0,h.jsxs)(b7,{children:[(0,h.jsx)(b8,{children:(0,h.jsx)(cd,{children:a.date})}),(0,h.jsxs)(b9,{children:[(0,h.jsx)(by,{variant:"h4",as:"span",children:(0,h.jsx)(ca,{children:a.company})}),(0,h.jsx)(by,{variant:"h5",as:"span",children:(0,h.jsx)(cb,{children:a.role})}),(0,h.jsx)(by,{variant:"bodySmall",color:"tertiary",as:"span",children:(0,h.jsxs)(cc,{children:[a.location," • ",a.type]})})]}),(0,h.jsx)(by,{variant:"body",color:"secondary",as:"span",children:(0,h.jsx)(ce,{children:a.description})}),(0,h.jsx)(cf,{children:a.responsibilities.map((a,b)=>(0,h.jsxs)(cg,{children:[(0,h.jsx)(ch,{children:(0,h.jsx)(b2,{size:16})}),(0,h.jsx)("span",{children:a})]},b))}),(0,h.jsx)(ci,{children:a.tags.map(a=>(0,h.jsx)(bp,{children:a},a))})]})]}),ck=ah.default.div.withConfig({displayName:"Experience.styles__StyledExperience",componentId:"sc-bdd512cd-0"})`
  position: relative;
`,cl=ah.default.div.withConfig({displayName:"Experience.styles__Timeline",componentId:"sc-bdd512cd-1"})`
  position: relative;
  padding-left: ${({theme:a})=>a.spacing["6xl"]};

  @media (max-width: 768px) {
    padding-left: ${({theme:a})=>a.spacing.xxl};
  }
`,cm=ah.default.div.withConfig({displayName:"Experience.styles__TimelineLine",componentId:"sc-bdd512cd-2"})`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: ${({theme:a})=>a.colors.accent};
`,cn=ah.default.div.withConfig({displayName:"Experience.styles__TimelineItems",componentId:"sc-bdd512cd-3"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:a})=>a.spacing["4xl"]};

  @media (max-width: 768px) {
    gap: ${({theme:a})=>a.spacing.xl};
  }
`;ah.default.hr.withConfig({displayName:"Experience.styles__ExperienceDivider",componentId:"sc-bdd512cd-4"})`
  border: none;
  border-top: 1px solid ${({theme:a})=>a.colors.border};
  margin: 0;
  width: 100%;
`;let co=({sectionNumber:a="02",experiences:b})=>(0,h.jsx)(bC,{id:"experience",children:(0,h.jsx)(bA,{children:(0,h.jsxs)(ck,{children:[(0,h.jsx)(b1,{sectionNumber:a}),(0,h.jsxs)(cl,{children:[(0,h.jsx)(cm,{}),(0,h.jsx)(cn,{children:b.map((a,b)=>(0,h.jsx)(cj,{experience:a,index:b},a.id))})]})]})})}),cp=ah.default.div.withConfig({displayName:"AboutHeader.styles__AboutHeaderWrapper",componentId:"sc-34ec8c66-0"})`
  display: flex;
  align-items: center;
  gap: ${({theme:a})=>a.spacing.lg};
  margin-bottom: ${({theme:a})=>a.spacing.lg};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({theme:a})=>a.spacing.md};
  }
`,cq=ah.default.span.withConfig({displayName:"AboutHeader.styles__SectionNumber",componentId:"sc-34ec8c66-1"})`
  font-size: ${({theme:a})=>a.typography.fontSize["4xl"]};
  font-weight: ${({theme:a})=>a.typography.fontWeight.bold};
  color: ${({theme:a})=>a.colors.textTertiary};
  font-family: ${({theme:a})=>a.typography.fontFamilyMono};
`,cr=({sectionNumber:a})=>(0,h.jsxs)(cp,{"data-aos":"fade-up",children:[(0,h.jsx)(cq,{children:a}),(0,h.jsx)(by,{variant:"h2",children:"About"})]}),cs=ah.default.div.withConfig({displayName:"AboutContent.styles__AboutDescription",componentId:"sc-c102d131-0"})`
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
`,ct=({content:a})=>(0,h.jsx)(cs,{"data-aos":"fade-right","data-aos-delay":"200",children:"string"==typeof a?a.split("\n\n").map((a,b)=>(0,h.jsx)(by,{variant:"bodyLarge",color:"secondary",children:a},b)):a}),cu=ah.default.div.withConfig({displayName:"About.styles__StyledAbout",componentId:"sc-e1b29e4a-0"})`
  position: relative;
`,cv=ah.default.div.withConfig({displayName:"About.styles__AboutContent",componentId:"sc-e1b29e4a-1"})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({theme:a})=>a.spacing["4xl"]};
  align-items: center;
  transform-style: preserve-3d;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: ${({theme:a})=>a.spacing["2xl"]};
  }
`,cw=ah.default.div.withConfig({displayName:"About.styles__AboutText",componentId:"sc-e1b29e4a-2"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:a})=>a.spacing.lg};
`,cx=ah.default.div.withConfig({displayName:"About.styles__AboutVisual",componentId:"sc-e1b29e4a-3"})`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 1024px) {
    order: 2;
    animation: fadeInUp 0.6s ease-out 0.2s both;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,cy=ah.default.div.withConfig({displayName:"About.styles__AboutImage",componentId:"sc-e1b29e4a-4"})`
  width: 100%;
  max-width: 500px;
  height: 600px;
  border-radius: ${({theme:a})=>a.borderRadius.lg};
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
  transition: transform ${({theme:a})=>a.transitions.slow} ease-out;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);

  &:hover {
    transform: translateZ(20px) rotateY(-2deg) rotateX(2deg);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    height: 450px;
  }
`,cz=ah.default.span.withConfig({displayName:"About.styles__AboutSectionNumber",componentId:"sc-e1b29e4a-5"})`
  font-size: ${({theme:a})=>a.typography.fontSize["4xl"]};
  font-weight: ${({theme:a})=>a.typography.fontWeight.bold};
  color: ${({theme:a})=>a.colors.textTertiary};
  font-family: ${({theme:a})=>a.typography.fontFamilyMono};
  order: 1;
  animation: fadeInUp 0.6s ease-out;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,cA=ah.default.div.withConfig({displayName:"About.styles__AboutTitle",componentId:"sc-e1b29e4a-6"})`
  order: 3;
  animation: fadeInUp 0.6s ease-out 0.4s both;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,cB=ah.default.div.withConfig({displayName:"About.styles__AboutDescriptionWrapper",componentId:"sc-e1b29e4a-7"})`
  order: 4;
  animation: fadeInUp 0.6s ease-out 0.6s both;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,cC=ah.default.hr.withConfig({displayName:"About.styles__AboutDivider",componentId:"sc-e1b29e4a-8"})`
  border: none;
  border-top: 1px solid ${({theme:a})=>a.colors.border};
  margin: 0;
  width: 100%;
`,cD=({sectionNumber:a="03",content:b})=>{let[c,d]=(0,i.useState)(!1);(0,i.useEffect)(()=>{let a=()=>{d(window.innerWidth<=1024)};return a(),window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[]);let e=c?{}:{"data-aos":"fade-left","data-aos-delay":300};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(bC,{id:"about",children:(0,h.jsx)(bA,{children:(0,h.jsx)(cu,{children:(0,h.jsx)(cv,{children:c?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(cz,{children:a}),(0,h.jsx)(cx,{...e,children:(0,h.jsx)(cy,{children:(0,h.jsx)(bG.default,{src:"/images/me.JPG",alt:"Profile photo",fill:!0,style:{objectFit:"cover",borderRadius:"1rem"}})})}),(0,h.jsx)(cA,{children:(0,h.jsx)(by,{variant:"h2",children:"About"})}),(0,h.jsx)(cB,{children:(0,h.jsx)(ct,{content:b})})]}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(cw,{children:[(0,h.jsx)(cr,{sectionNumber:a}),(0,h.jsx)(ct,{content:b})]}),(0,h.jsx)(cx,{...e,children:(0,h.jsx)(cy,{children:(0,h.jsx)(bG.default,{src:"/images/me.JPG",alt:"Profile photo",fill:!0,style:{objectFit:"cover",borderRadius:"1rem"}})})})]})})})})}),(0,h.jsx)(cC,{})]})},cE=ah.default.div.withConfig({displayName:"TechStack.styles__StyledTechStack",componentId:"sc-a293df8e-0"})`
  position: relative;
  background-color: ${({theme:a})=>a.colors.bgPrimary};
  min-height: 100vh;
  padding: ${({theme:a})=>a.spacing["4xl"]} 0;
  display: flex;
  align-items: center;
  transform-style: preserve-3d;
  perspective: 1200px;

  @media (max-width: 768px) {
    padding: ${({theme:a})=>a.spacing["3xl"]} 0;
    min-height: 100vh;
    perspective: 800px;
  }
`,cF=ah.default.div.withConfig({displayName:"TechStack.styles__TechStackContainer",componentId:"sc-a293df8e-1"})`
  width: 100%;
`,cG=ah.default.div.withConfig({displayName:"TechStack.styles__TechStackWrapper",componentId:"sc-a293df8e-2"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:a})=>a.spacing["4xl"]};
  width: 100%;

  @media (max-width: 768px) {
    gap: ${({theme:a})=>a.spacing.xl};
  }
`,cH=ah.default.h2.withConfig({displayName:"TechStack.styles__TechStackTitle",componentId:"sc-a293df8e-3"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyHeading};
  font-size: ${({theme:a})=>a.typography.fontSize["4xl"]};
  font-weight: ${({theme:a})=>a.typography.fontWeight.bold};
  color: ${({theme:a})=>a.colors.textPrimary};
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0;
  transform-style: preserve-3d;
  transform: translateZ(10px);
  transition: transform ${({theme:a})=>a.transitions.slow} ease-out;

  @media (max-width: 768px) {
    font-size: ${({theme:a})=>a.typography.fontSize["2xl"]};
    letter-spacing: 0.05em;
    line-height: 1.5;
  }
`,cI=ah.default.div.withConfig({displayName:"TechStack.styles__TechStackGrid",componentId:"sc-a293df8e-4"})`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: ${({theme:a})=>a.spacing.xl};
  width: 100%;
  max-width: 1400px;
  transform-style: preserve-3d;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: ${({theme:a})=>a.spacing.lg};
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: ${({theme:a})=>a.spacing.lg};
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${({theme:a})=>a.spacing.md};
  }
`,cJ=ah.default.div.withConfig({displayName:"TechStack.styles__TechItem",componentId:"sc-a293df8e-5"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({theme:a})=>a.spacing.md};
  transition: all ${({theme:a})=>a.transitions.base} ease-out;
  cursor: pointer;
  padding: ${({theme:a})=>a.spacing.sm};
  transform-style: preserve-3d;
  position: relative;
  border-radius: ${({theme:a})=>a.borderRadius.md};
  background: ${({theme:a})=>a.colors.bgSecondary};
  border: 1px solid ${({theme:a})=>a.colors.border};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  &::before {
    content: '';
    position: absolute;
    inset: -8px;
    background: ${({theme:a})=>"dark"===a.mode?`linear-gradient(135deg, ${a.colors.accent}15, transparent)`:`linear-gradient(135deg, ${a.colors.accent}20, transparent)`};
    border-radius: ${({theme:a})=>a.borderRadius.md};
    opacity: 0;
    transition: opacity ${({theme:a})=>a.transitions.base} ease-out;
    z-index: -1;
  }

  &:hover {
    transform: translateY(-12px) translateZ(30px) rotateX(8deg);
    border-color: ${({theme:a})=>a.colors.accent};
    box-shadow: 0 16px 48px ${({theme:a})=>a.colors.accent}25;
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover svg {
    transform: scale(1.2) translateZ(15px);
  }
`,cK=ah.default.div.withConfig({displayName:"TechStack.styles__TechIcon",componentId:"sc-a293df8e-6"})`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:a})=>a.spacing.sm};
  color: ${({theme:a})=>a.colors.textPrimary};
  transform-style: preserve-3d;
  transition: transform ${({theme:a})=>a.transitions.base} ease-out;

  svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
    color: inherit;
    transition: transform ${({theme:a})=>a.transitions.base} ease-out,
                filter ${({theme:a})=>a.transitions.base} ease-out;
  }

  ${cJ}:hover & {
    transform: translateZ(15px);
  }

  ${cJ}:hover svg {
    filter: drop-shadow(0 8px 16px ${({theme:a})=>a.colors.accent}30);
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
`,cL=ah.default.span.withConfig({displayName:"TechStack.styles__TechName",componentId:"sc-a293df8e-7"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyBody};
  font-size: ${({theme:a})=>a.typography.fontSize.sm};
  font-weight: ${({theme:a})=>a.typography.fontWeight.medium};
  color: ${({theme:a})=>a.colors.textPrimary};
  text-align: center;
  margin: 0;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: ${({theme:a})=>a.typography.fontSize.xs};
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`,cM=ah.default.hr.withConfig({displayName:"TechStack.styles__TechStackDivider",componentId:"sc-a293df8e-8"})`
  border: none;
  border-top: 1px solid ${({theme:a})=>a.colors.border};
  margin: 0;
  width: 100%;
`,cN=[{name:"JavaScript",icon:(0,h.jsx)(({className:a})=>(0,h.jsxs)("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:a,xmlns:"http://www.w3.org/2000/svg",children:[(0,h.jsx)("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",fill:"none",stroke:"currentColor",strokeWidth:"2"}),(0,h.jsx)("text",{x:"12",y:"16",fontSize:"10",fontWeight:"bold",textAnchor:"middle",fontFamily:"Arial, sans-serif",children:"JS"})]}),{}),category:"Programming Languages"},{name:"TypeScript",icon:(0,h.jsx)(({className:a})=>(0,h.jsx)("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:a,xmlns:"http://www.w3.org/2000/svg",children:(0,h.jsx)("path",{d:"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 011.306.34v2.458a3.95 3.95 0 00-.643-.361 5.093 5.093 0 00-.717-.26 5.453 5.453 0 00-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 00-.623.242c-.17.104-.3.229-.393.374a.888.888 0 00-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.375.222.695.473.96.753.264.279.473.598.627.957.154.36.231.768.231 1.226 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 01-1.012 1.085 4.38 4.38 0 01-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 01-2.007-.196 4.789 4.789 0 01-1.64-.557v-2.63a5.74 5.74 0 001.853.553 7.136 7.136 0 001.855.234c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 00.125-.534c0-.287-.092-.532-.277-.736a2.716 2.716 0 00-.753-.537 6.078 6.078 0 00-1.117-.493 7.88 7.88 0 01-1.022-.502 3.717 3.717 0 01-.717-.616 2.26 2.26 0 01-.448-.808c-.1-.33-.15-.696-.15-1.099 0-.518.098-.957.293-1.317a2.974 2.974 0 01.808-1.012 4.338 4.338 0 01-1.206-.776 3.056 3.056 0 01-.777-1.157c-.18-.45-.27-.957-.27-1.523 0-.657.13-1.216.39-1.677.26-.46.612-.82 1.056-1.08.444-.26.954-.403 1.53-.43.36-.018.735-.009 1.125.027zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375V9.938z"})}),{}),category:"Programming Languages"},{name:"React",icon:(0,h.jsx)(({className:a})=>(0,h.jsxs)("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:a,xmlns:"http://www.w3.org/2000/svg",children:[(0,h.jsx)("circle",{cx:"12",cy:"12",r:"2"}),(0,h.jsx)("ellipse",{cx:"12",cy:"12",rx:"11",ry:"4.2",fill:"none",stroke:"currentColor",strokeWidth:"1.5"}),(0,h.jsx)("ellipse",{cx:"12",cy:"12",rx:"11",ry:"4.2",fill:"none",stroke:"currentColor",strokeWidth:"1.5",transform:"rotate(-60 12 12)"}),(0,h.jsx)("ellipse",{cx:"12",cy:"12",rx:"11",ry:"4.2",fill:"none",stroke:"currentColor",strokeWidth:"1.5",transform:"rotate(60 12 12)"})]}),{}),category:"Frameworks & Libraries"},{name:"React Native",icon:(0,h.jsx)(({className:a})=>(0,h.jsxs)("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:a,xmlns:"http://www.w3.org/2000/svg",children:[(0,h.jsx)("circle",{cx:"12",cy:"12",r:"2",fill:"currentColor"}),(0,h.jsx)("ellipse",{cx:"12",cy:"12",rx:"11",ry:"4.2",fill:"none",stroke:"currentColor",strokeWidth:"1.5"}),(0,h.jsx)("ellipse",{cx:"12",cy:"12",rx:"11",ry:"4.2",fill:"none",stroke:"currentColor",strokeWidth:"1.5",transform:"rotate(-60 12 12)"}),(0,h.jsx)("ellipse",{cx:"12",cy:"12",rx:"11",ry:"4.2",fill:"none",stroke:"currentColor",strokeWidth:"1.5",transform:"rotate(60 12 12)"}),(0,h.jsx)("rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",fill:"none",stroke:"currentColor",strokeWidth:"1.5"})]}),{}),category:"Frameworks & Libraries"},{name:"Next.js",icon:(0,h.jsx)(({className:a})=>(0,h.jsxs)("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:a,xmlns:"http://www.w3.org/2000/svg",children:[(0,h.jsx)("path",{d:"M12 2L2 7v10l10 5 10-5V7L12 2zM4 8.5l8 4v9l-8-4v-9zm16 0v9l-8 4v-9l8-4z"}),(0,h.jsx)("path",{d:"M12 4l8 3.5v9L12 20l-8-3.5v-9L12 4z"})]}),{}),category:"Frameworks & Libraries"},{name:"Tailwind CSS",icon:(0,h.jsx)(({className:a})=>(0,h.jsx)("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:a,xmlns:"http://www.w3.org/2000/svg",children:(0,h.jsx)("path",{d:"M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.12 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.15 14.47 6 12 6zm-5 6.5c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.12 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35-1.39-1.39-2.53-2.15-5.59-2.15z"})}),{}),category:"Frameworks & Libraries"},{name:"Styled Components",icon:(0,h.jsx)(({className:a})=>(0,h.jsxs)("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:a,xmlns:"http://www.w3.org/2000/svg",children:[(0,h.jsx)("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",fill:"none",stroke:"currentColor",strokeWidth:"2"}),(0,h.jsx)("rect",{x:"6",y:"7",width:"12",height:"2",rx:"0.5",fill:"currentColor"}),(0,h.jsx)("rect",{x:"6",y:"10",width:"10",height:"2",rx:"0.5",fill:"currentColor"}),(0,h.jsx)("rect",{x:"6",y:"13",width:"8",height:"2",rx:"0.5",fill:"currentColor"}),(0,h.jsx)("rect",{x:"6",y:"16",width:"12",height:"2",rx:"0.5",fill:"currentColor"})]}),{}),category:"Frameworks & Libraries"},{name:"GraphQL",icon:(0,h.jsx)(({className:a})=>(0,h.jsxs)("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:a,xmlns:"http://www.w3.org/2000/svg",children:[(0,h.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),(0,h.jsx)("path",{d:"M12 6l-4 6.93h8L12 6z",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"}),(0,h.jsx)("path",{d:"M8 12.93h8",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),(0,h.jsx)("path",{d:"M12 18l-4-6.93M12 18l4-6.93",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",fill:"none"}),(0,h.jsx)("circle",{cx:"12",cy:"6",r:"1.5",fill:"currentColor"}),(0,h.jsx)("circle",{cx:"8",cy:"12.93",r:"1.5",fill:"currentColor"}),(0,h.jsx)("circle",{cx:"16",cy:"12.93",r:"1.5",fill:"currentColor"}),(0,h.jsx)("circle",{cx:"12",cy:"18",r:"1.5",fill:"currentColor"})]}),{}),category:"Frameworks & Libraries"},{name:"MongoDB",icon:(0,h.jsx)(({className:a})=>(0,h.jsx)("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:a,xmlns:"http://www.w3.org/2000/svg",children:(0,h.jsx)("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 3.5 9.5 7 11.5 3.5-2 7-6.25 7-11.5 0-3.87-3.13-7-7-7zm0 2c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5z"})}),{}),category:"DB & Backend / Deployment"},{name:"MySQL",icon:(0,h.jsx)(({className:a})=>(0,h.jsxs)("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:a,xmlns:"http://www.w3.org/2000/svg",children:[(0,h.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),(0,h.jsx)("path",{d:"M8 8h8v2H8zm0 3h8v2H8zm0 3h6v2H8z"})]}),{}),category:"DB & Backend / Deployment"},{name:"Firebase",icon:(0,h.jsx)(({className:a})=>(0,h.jsx)("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:a,xmlns:"http://www.w3.org/2000/svg",children:(0,h.jsx)("path",{d:"M12 2L4 10l8 8 8-8L12 2zm0 3.5l5.5 5.5L12 16.5 6.5 11 12 5.5z"})}),{}),category:"DB & Backend / Deployment"},{name:"SEO",icon:(0,h.jsx)(({className:a})=>(0,h.jsxs)("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:a,xmlns:"http://www.w3.org/2000/svg",children:[(0,h.jsx)("circle",{cx:"10",cy:"10",r:"6",fill:"none",stroke:"currentColor",strokeWidth:"2"}),(0,h.jsx)("path",{d:"M16 16l4 4",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}),{}),category:"Digital and Creative Skills"},{name:"SEO Tools",icon:(0,h.jsx)(({className:a})=>(0,h.jsxs)("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:a,xmlns:"http://www.w3.org/2000/svg",children:[(0,h.jsx)("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",fill:"none",stroke:"currentColor",strokeWidth:"2"}),(0,h.jsx)("circle",{cx:"12",cy:"12",r:"4",fill:"none",stroke:"currentColor",strokeWidth:"1.5"}),(0,h.jsx)("circle",{cx:"12",cy:"12",r:"1.5",fill:"currentColor"})]}),{}),category:"Digital and Creative Skills"},{name:"APIs",icon:(0,h.jsx)(({className:a})=>(0,h.jsxs)("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:a,xmlns:"http://www.w3.org/2000/svg",children:[(0,h.jsx)("rect",{x:"4",y:"6",width:"16",height:"12",rx:"2",fill:"none",stroke:"currentColor",strokeWidth:"2"}),(0,h.jsx)("circle",{cx:"8",cy:"12",r:"1.5",fill:"currentColor"}),(0,h.jsx)("circle",{cx:"12",cy:"12",r:"1.5",fill:"currentColor"}),(0,h.jsx)("circle",{cx:"16",cy:"12",r:"1.5",fill:"currentColor"})]}),{}),category:"General & Soft Skills"},{name:"Responsive Design",icon:(0,h.jsx)(({className:a})=>(0,h.jsxs)("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:a,xmlns:"http://www.w3.org/2000/svg",children:[(0,h.jsx)("rect",{x:"6",y:"4",width:"12",height:"16",rx:"2",fill:"none",stroke:"currentColor",strokeWidth:"2"}),(0,h.jsx)("rect",{x:"8",y:"6",width:"8",height:"12",rx:"1",fill:"none",stroke:"currentColor",strokeWidth:"1.5"}),(0,h.jsx)("rect",{x:"16",y:"8",width:"4",height:"8",rx:"1",fill:"none",stroke:"currentColor",strokeWidth:"1.5"})]}),{}),category:"General & Soft Skills"}],cO=()=>(Array.from(new Set(cN.map(a=>a.category))),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(bC,{id:"techstack",children:(0,h.jsx)(bA,{children:(0,h.jsx)(cE,{children:(0,h.jsx)(cF,{children:(0,h.jsxs)(cG,{children:[(0,h.jsx)(cH,{"data-aos":"fade-up",children:"TECHNOLOGIES I WORK WITH"}),(0,h.jsx)(cI,{children:cN.map((a,b)=>(0,h.jsxs)(cJ,{"data-aos":"zoom-in","data-aos-delay":50*b,children:[(0,h.jsx)(cK,{children:a.icon}),(0,h.jsx)(by,{variant:"bodySmall",as:"span",children:(0,h.jsx)(cL,{children:a.name})})]},b))})]})})})})}),(0,h.jsx)(cM,{})]})),cP=ah.default.div.withConfig({displayName:"ContactHeader.styles__ContactHeaderWrapper",componentId:"sc-1b5bfa94-0"})`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
`,cQ=ah.default.div.withConfig({displayName:"ContactHeader.styles__ContactHeaderContent",componentId:"sc-1b5bfa94-1"})`
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
`,cR=ah.default.div.withConfig({displayName:"ContactHeader.styles__ContactTitle",componentId:"sc-1b5bfa94-2"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0;
  line-height: 1.1;
`,cS=ah.default.h1.withConfig({displayName:"ContactHeader.styles__Headline",componentId:"sc-1b5bfa94-3"})`
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
`,cT=ah.default.p.withConfig({displayName:"ContactHeader.styles__ContactDescription",componentId:"sc-1b5bfa94-4"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyBody};
  color: ${({theme:a})=>a.colors.textSecondary};
  line-height: 1.8;
  text-align: center;
  max-width: 600px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`,cU=({sectionNumber:a,headline:b,description:c})=>{let d=b.split("\n").filter(a=>""!==a.trim());return(0,h.jsx)(cP,{"data-aos":"fade-up",children:(0,h.jsxs)(cQ,{children:[(0,h.jsx)(cR,{children:d.map((a,b)=>(0,h.jsx)(cS,{"data-aos":"fade-up","data-aos-delay":100*b,children:a.trim()},b))}),(0,h.jsx)(cT,{"data-aos":"fade-up","data-aos-delay":"200",children:c})]})})},cV=aq("send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);var cW=function(a){var b,c,d;return!!(b=a)&&"object"==typeof b&&(c=a,"[object RegExp]"!==(d=Object.prototype.toString.call(c))&&"[object Date]"!==d&&c.$$typeof!==cX)},cX="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function cY(a,b){return!1!==b.clone&&b.isMergeableObject(a)?c$(Array.isArray(a)?[]:{},a,b):a}function cZ(a,b,c){return a.concat(b).map(function(a){return cY(a,c)})}function c$(a,b,c){(c=c||{}).arrayMerge=c.arrayMerge||cZ,c.isMergeableObject=c.isMergeableObject||cW;var d,e,f=Array.isArray(b);return f!==Array.isArray(a)?cY(b,c):f?c.arrayMerge(a,b,c):(e={},(d=c).isMergeableObject(a)&&Object.keys(a).forEach(function(b){e[b]=cY(a[b],d)}),Object.keys(b).forEach(function(c){d.isMergeableObject(b[c])&&a[c]?e[c]=c$(a[c],b[c],d):e[c]=cY(b[c],d)}),e)}c$.all=function(a,b){if(!Array.isArray(a))throw Error("first argument should be an array");return a.reduce(function(a,c){return c$(a,c,b)},{})};let c_=c$;var c0=a.g&&a.g.Object===Object&&a.g,c1="object"==typeof self&&self&&self.Object===Object&&self,c2=c0||c1||Function("return this")(),c3=c2.Symbol,c4=Object.prototype,c5=c4.hasOwnProperty,c6=c4.toString,c7=c3?c3.toStringTag:void 0;let c8=function(a){var b=c5.call(a,c7),c=a[c7];try{a[c7]=void 0;var d=!0}catch(a){}var e=c6.call(a);return d&&(b?a[c7]=c:delete a[c7]),e};var c9=Object.prototype.toString,da=c3?c3.toStringTag:void 0;let db=function(a){return null==a?void 0===a?"[object Undefined]":"[object Null]":da&&da in Object(a)?c8(a):c9.call(a)},dc=function(a,b){return function(c){return a(b(c))}};var dd=dc(Object.getPrototypeOf,Object);let de=function(a){return null!=a&&"object"==typeof a};var df=Object.prototype,dg=Function.prototype.toString,dh=df.hasOwnProperty,di=dg.call(Object);let dj=function(a){if(!de(a)||"[object Object]"!=db(a))return!1;var b=dd(a);if(null===b)return!0;var c=dh.call(b,"constructor")&&b.constructor;return"function"==typeof c&&c instanceof c&&dg.call(c)==di},dk=function(a,b){return a===b||a!=a&&b!=b},dl=function(a,b){for(var c=a.length;c--;)if(dk(a[c][0],b))return c;return -1};var dm=Array.prototype.splice;function dn(a){var b=-1,c=null==a?0:a.length;for(this.clear();++b<c;){var d=a[b];this.set(d[0],d[1])}}dn.prototype.clear=function(){this.__data__=[],this.size=0},dn.prototype.delete=function(a){var b=this.__data__,c=dl(b,a);return!(c<0)&&(c==b.length-1?b.pop():dm.call(b,c,1),--this.size,!0)},dn.prototype.get=function(a){var b=this.__data__,c=dl(b,a);return c<0?void 0:b[c][1]},dn.prototype.has=function(a){return dl(this.__data__,a)>-1},dn.prototype.set=function(a,b){var c=this.__data__,d=dl(c,a);return d<0?(++this.size,c.push([a,b])):c[d][1]=b,this};let dp=function(a){var b=typeof a;return null!=a&&("object"==b||"function"==b)},dq=function(a){if(!dp(a))return!1;var b=db(a);return"[object Function]"==b||"[object GeneratorFunction]"==b||"[object AsyncFunction]"==b||"[object Proxy]"==b};var dr=c2["__core-js_shared__"],ds=(e=/[^.]+$/.exec(dr&&dr.keys&&dr.keys.IE_PROTO||""))?"Symbol(src)_1."+e:"",dt=Function.prototype.toString;let du=function(a){if(null!=a){try{return dt.call(a)}catch(a){}try{return a+""}catch(a){}}return""};var dv=/^\[object .+?Constructor\]$/,dw=Object.prototype,dx=Function.prototype.toString,dy=dw.hasOwnProperty,dz=RegExp("^"+dx.call(dy).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");let dA=function(a){return!!dp(a)&&(!ds||!(ds in a))&&(dq(a)?dz:dv).test(du(a))},dB=function(a,b){var c=null==a?void 0:a[b];return dA(c)?c:void 0};var dC=dB(c2,"Map"),dD=dB(Object,"create"),dE=Object.prototype.hasOwnProperty,dF=Object.prototype.hasOwnProperty;function dG(a){var b=-1,c=null==a?0:a.length;for(this.clear();++b<c;){var d=a[b];this.set(d[0],d[1])}}dG.prototype.clear=function(){this.__data__=dD?dD(null):{},this.size=0},dG.prototype.delete=function(a){var b=this.has(a)&&delete this.__data__[a];return this.size-=!!b,b},dG.prototype.get=function(a){var b=this.__data__;if(dD){var c=b[a];return"__lodash_hash_undefined__"===c?void 0:c}return dE.call(b,a)?b[a]:void 0},dG.prototype.has=function(a){var b=this.__data__;return dD?void 0!==b[a]:dF.call(b,a)},dG.prototype.set=function(a,b){var c=this.__data__;return this.size+=+!this.has(a),c[a]=dD&&void 0===b?"__lodash_hash_undefined__":b,this};let dH=function(a){var b=typeof a;return"string"==b||"number"==b||"symbol"==b||"boolean"==b?"__proto__"!==a:null===a},dI=function(a,b){var c=a.__data__;return dH(b)?c["string"==typeof b?"string":"hash"]:c.map};function dJ(a){var b=-1,c=null==a?0:a.length;for(this.clear();++b<c;){var d=a[b];this.set(d[0],d[1])}}function dK(a){var b=this.__data__=new dn(a);this.size=b.size}dJ.prototype.clear=function(){this.size=0,this.__data__={hash:new dG,map:new(dC||dn),string:new dG}},dJ.prototype.delete=function(a){var b=dI(this,a).delete(a);return this.size-=!!b,b},dJ.prototype.get=function(a){return dI(this,a).get(a)},dJ.prototype.has=function(a){return dI(this,a).has(a)},dJ.prototype.set=function(a,b){var c=dI(this,a),d=c.size;return c.set(a,b),this.size+=+(c.size!=d),this},dK.prototype.clear=function(){this.__data__=new dn,this.size=0},dK.prototype.delete=function(a){var b=this.__data__,c=b.delete(a);return this.size=b.size,c},dK.prototype.get=function(a){return this.__data__.get(a)},dK.prototype.has=function(a){return this.__data__.has(a)},dK.prototype.set=function(a,b){var c=this.__data__;if(c instanceof dn){var d=c.__data__;if(!dC||d.length<199)return d.push([a,b]),this.size=++c.size,this;c=this.__data__=new dJ(d)}return c.set(a,b),this.size=c.size,this};let dL=function(a,b){for(var c=-1,d=null==a?0:a.length;++c<d&&!1!==b(a[c],c,a););return a};var dM=function(){try{var a=dB(Object,"defineProperty");return a({},"",{}),a}catch(a){}}();let dN=function(a,b,c){"__proto__"==b&&dM?dM(a,b,{configurable:!0,enumerable:!0,value:c,writable:!0}):a[b]=c};var dO=Object.prototype.hasOwnProperty;let dP=function(a,b,c){var d=a[b];dO.call(a,b)&&dk(d,c)&&(void 0!==c||b in a)||dN(a,b,c)},dQ=function(a,b,c,d){var e=!c;c||(c={});for(var f=-1,g=b.length;++f<g;){var h=b[f],i=d?d(c[h],a[h],h,c,a):void 0;void 0===i&&(i=a[h]),e?dN(c,h,i):dP(c,h,i)}return c},dR=function(a,b){for(var c=-1,d=Array(a);++c<a;)d[c]=b(c);return d},dS=function(a){return de(a)&&"[object Arguments]"==db(a)};var dT=Object.prototype,dU=dT.hasOwnProperty,dV=dT.propertyIsEnumerable,dW=dS(function(){return arguments}())?dS:function(a){return de(a)&&dU.call(a,"callee")&&!dV.call(a,"callee")},dX=Array.isArray;let dY=function(){return!1};var dZ=/^(?:0|[1-9]\d*)$/;let d$=function(a,b){var c=typeof a;return!!(b=null==b?0x1fffffffffffff:b)&&("number"==c||"symbol"!=c&&dZ.test(a))&&a>-1&&a%1==0&&a<b},d_=function(a){return"number"==typeof a&&a>-1&&a%1==0&&a<=0x1fffffffffffff};var d0={};d0["[object Float32Array]"]=d0["[object Float64Array]"]=d0["[object Int8Array]"]=d0["[object Int16Array]"]=d0["[object Int32Array]"]=d0["[object Uint8Array]"]=d0["[object Uint8ClampedArray]"]=d0["[object Uint16Array]"]=d0["[object Uint32Array]"]=!0,d0["[object Arguments]"]=d0["[object Array]"]=d0["[object ArrayBuffer]"]=d0["[object Boolean]"]=d0["[object DataView]"]=d0["[object Date]"]=d0["[object Error]"]=d0["[object Function]"]=d0["[object Map]"]=d0["[object Number]"]=d0["[object Object]"]=d0["[object RegExp]"]=d0["[object Set]"]=d0["[object String]"]=d0["[object WeakMap]"]=!1;let d1=function(a){return function(b){return a(b)}};var d2=function(){try{return!1}catch(a){}}(),d3=d2&&d2.isTypedArray,d4=d3?d1(d3):function(a){return de(a)&&d_(a.length)&&!!d0[db(a)]},d5=Object.prototype.hasOwnProperty;let d6=function(a,b){var c=dX(a),d=!c&&dW(a),e=!c&&!d&&dY(a),f=!c&&!d&&!e&&d4(a),g=c||d||e||f,h=g?dR(a.length,String):[],i=h.length;for(var j in a)(b||d5.call(a,j))&&!(g&&("length"==j||e&&("offset"==j||"parent"==j)||f&&("buffer"==j||"byteLength"==j||"byteOffset"==j)||d$(j,i)))&&h.push(j);return h};var d7=Object.prototype;let d8=function(a){var b=a&&a.constructor;return a===("function"==typeof b&&b.prototype||d7)};var d9=dc(Object.keys,Object),ea=Object.prototype.hasOwnProperty;let eb=function(a){if(!d8(a))return d9(a);var b=[];for(var c in Object(a))ea.call(a,c)&&"constructor"!=c&&b.push(c);return b},ec=function(a){return null!=a&&d_(a.length)&&!dq(a)},ed=function(a){return ec(a)?d6(a):eb(a)},ee=function(a){var b=[];if(null!=a)for(var c in Object(a))b.push(c);return b};var ef=Object.prototype.hasOwnProperty;let eg=function(a){if(!dp(a))return ee(a);var b=d8(a),c=[];for(var d in a)"constructor"==d&&(b||!ef.call(a,d))||c.push(d);return c},eh=function(a){return ec(a)?d6(a,!0):eg(a)},ei=function(a,b){if(b)return a.slice();var c=a.length,d=new a.constructor(c);return a.copy(d),d},ej=function(a,b){var c=-1,d=a.length;for(b||(b=Array(d));++c<d;)b[c]=a[c];return b},ek=function(a,b){for(var c=-1,d=null==a?0:a.length,e=0,f=[];++c<d;){var g=a[c];b(g,c,a)&&(f[e++]=g)}return f},el=function(){return[]};var em=Object.prototype.propertyIsEnumerable,en=Object.getOwnPropertySymbols,eo=en?function(a){return null==a?[]:ek(en(a=Object(a)),function(b){return em.call(a,b)})}:el;let ep=function(a,b){for(var c=-1,d=b.length,e=a.length;++c<d;)a[e+c]=b[c];return a};var eq=Object.getOwnPropertySymbols?function(a){for(var b=[];a;)ep(b,eo(a)),a=dd(a);return b}:el;let er=function(a,b,c){var d=b(a);return dX(a)?d:ep(d,c(a))},es=function(a){return er(a,ed,eo)},et=function(a){return er(a,eh,eq)};var eu=dB(c2,"DataView"),ev=dB(c2,"Promise"),ew=dB(c2,"Set"),ex=dB(c2,"WeakMap"),ey="[object Map]",ez="[object Promise]",eA="[object Set]",eB="[object WeakMap]",eC="[object DataView]",eD=du(eu),eE=du(dC),eF=du(ev),eG=du(ew),eH=du(ex),eI=db;(eu&&eI(new eu(new ArrayBuffer(1)))!=eC||dC&&eI(new dC)!=ey||ev&&eI(ev.resolve())!=ez||ew&&eI(new ew)!=eA||ex&&eI(new ex)!=eB)&&(eI=function(a){var b=db(a),c="[object Object]"==b?a.constructor:void 0,d=c?du(c):"";if(d)switch(d){case eD:return eC;case eE:return ey;case eF:return ez;case eG:return eA;case eH:return eB}return b});let eJ=eI;var eK=Object.prototype.hasOwnProperty;let eL=function(a){var b=a.length,c=new a.constructor(b);return b&&"string"==typeof a[0]&&eK.call(a,"index")&&(c.index=a.index,c.input=a.input),c};var eM=c2.Uint8Array;let eN=function(a){var b=new a.constructor(a.byteLength);return new eM(b).set(new eM(a)),b},eO=function(a,b){var c=b?eN(a.buffer):a.buffer;return new a.constructor(c,a.byteOffset,a.byteLength)};var eP=/\w*$/;let eQ=function(a){var b=new a.constructor(a.source,eP.exec(a));return b.lastIndex=a.lastIndex,b};var eR=c3?c3.prototype:void 0,eS=eR?eR.valueOf:void 0;let eT=function(a,b){var c=b?eN(a.buffer):a.buffer;return new a.constructor(c,a.byteOffset,a.length)},eU=function(a,b,c){var d=a.constructor;switch(b){case"[object ArrayBuffer]":return eN(a);case"[object Boolean]":case"[object Date]":return new d(+a);case"[object DataView]":return eO(a,c);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return eT(a,c);case"[object Map]":case"[object Set]":return new d;case"[object Number]":case"[object String]":return new d(a);case"[object RegExp]":return eQ(a);case"[object Symbol]":return eS?Object(eS.call(a)):{}}};var eV=Object.create,eW=function(){function a(){}return function(b){if(!dp(b))return{};if(eV)return eV(b);a.prototype=b;var c=new a;return a.prototype=void 0,c}}(),eX=d2&&d2.isMap,eY=eX?d1(eX):function(a){return de(a)&&"[object Map]"==eJ(a)},eZ=d2&&d2.isSet,e$=eZ?d1(eZ):function(a){return de(a)&&"[object Set]"==eJ(a)},e_="[object Arguments]",e0="[object Function]",e1="[object Object]",e2={};e2[e_]=e2["[object Array]"]=e2["[object ArrayBuffer]"]=e2["[object DataView]"]=e2["[object Boolean]"]=e2["[object Date]"]=e2["[object Float32Array]"]=e2["[object Float64Array]"]=e2["[object Int8Array]"]=e2["[object Int16Array]"]=e2["[object Int32Array]"]=e2["[object Map]"]=e2["[object Number]"]=e2[e1]=e2["[object RegExp]"]=e2["[object Set]"]=e2["[object String]"]=e2["[object Symbol]"]=e2["[object Uint8Array]"]=e2["[object Uint8ClampedArray]"]=e2["[object Uint16Array]"]=e2["[object Uint32Array]"]=!0,e2["[object Error]"]=e2[e0]=e2["[object WeakMap]"]=!1;let e3=function a(b,c,d,e,f,g){var h,i=1&c,j=2&c,k=4&c;if(d&&(h=f?d(b,e,f,g):d(b)),void 0!==h)return h;if(!dp(b))return b;var l=dX(b);if(l){if(h=eL(b),!i)return ej(b,h)}else{var m,n,o,p,q,r=eJ(b),s=r==e0||"[object GeneratorFunction]"==r;if(dY(b))return ei(b,i);if(r==e1||r==e_||s&&!f){if(h=j||s||"function"!=typeof(m=b).constructor||d8(m)?{}:eW(dd(m)),!i)return j?(o=(n=h)&&dQ(b,eh(b),n),dQ(b,eq(b),o)):(q=(p=h)&&dQ(b,ed(b),p),dQ(b,eo(b),q))}else{if(!e2[r])return f?b:{};h=eU(b,r,i)}}g||(g=new dK);var t=g.get(b);if(t)return t;g.set(b,h),e$(b)?b.forEach(function(e){h.add(a(e,c,d,e,b,g))}):eY(b)&&b.forEach(function(e,f){h.set(f,a(e,c,d,f,b,g))});var u=k?j?et:es:j?eh:ed,v=l?void 0:u(b);return dL(v||b,function(e,f){v&&(e=b[f=e]),dP(h,f,a(e,c,d,f,b,g))}),h},e4=function(a){return e3(a,5)};var e5=a.i(30407);let e6=function(a,b){},e7=function(a){return e3(a,4)},e8=function(a,b){for(var c=-1,d=null==a?0:a.length,e=Array(d);++c<d;)e[c]=b(a[c],c,a);return e},e9=function(a){return"symbol"==typeof a||de(a)&&"[object Symbol]"==db(a)};function fa(a,b){if("function"!=typeof a||null!=b&&"function"!=typeof b)throw TypeError("Expected a function");var c=function(){var d=arguments,e=b?b.apply(this,d):d[0],f=c.cache;if(f.has(e))return f.get(e);var g=a.apply(this,d);return c.cache=f.set(e,g)||f,g};return c.cache=new(fa.Cache||dJ),c}fa.Cache=dJ;var fb=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,fc=/\\(\\)?/g,fd=(g=(f=fa(function(a){var b=[];return 46===a.charCodeAt(0)&&b.push(""),a.replace(fb,function(a,c,d,e){b.push(d?e.replace(fc,"$1"):c||a)}),b},function(a){return 500===g.size&&g.clear(),a})).cache,f),fe=1/0;let ff=function(a){if("string"==typeof a||e9(a))return a;var b=a+"";return"0"==b&&1/a==-fe?"-0":b};var fg=1/0,fh=c3?c3.prototype:void 0,fi=fh?fh.toString:void 0;let fj=function a(b){if("string"==typeof b)return b;if(dX(b))return e8(b,a)+"";if(e9(b))return fi?fi.call(b):"";var c=b+"";return"0"==c&&1/b==-fg?"-0":c},fk=function(a){return dX(a)?e8(a,ff):e9(a)?[a]:ej(fd(null==a?"":fj(a)))};function fl(){return(fl=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}a.i(32344);function fm(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}function fn(a){if(void 0===a)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return a}var fo=(0,i.createContext)(void 0);fo.displayName="FormikContext",fo.Provider,fo.Consumer;var fp=function(a){return Array.isArray(a)&&0===a.length},fq=function(a){return"function"==typeof a},fr=function(a){return null!==a&&"object"==typeof a},fs=function(a){return"[object String]"===Object.prototype.toString.call(a)},ft=function(a){return fr(a)&&fq(a.then)};function fu(a,b,c,d){void 0===d&&(d=0);for(var e=fk(b);a&&d<e.length;)a=a[e[d++]];return d===e.length||a?void 0===a?c:a:c}function fv(a,b,c){for(var d=e7(a),e=d,f=0,g=fk(b);f<g.length-1;f++){var h=g[f],i=fu(a,g.slice(0,f+1));if(i&&(fr(i)||Array.isArray(i)))e=e[h]=e7(i);else{var j=g[f+1];e=e[h]=String(Math.floor(Number(j)))===j&&Number(j)>=0?[]:{}}}return(0===f?a:e)[g[f]]===c?a:(void 0===c?delete e[g[f]]:e[g[f]]=c,0===f&&void 0===c&&delete d[g[f]],d)}var fw={},fx={};function fy(a,b,c){var d=a.slice();return b.forEach(function(b,e){if(void 0===d[e]){var f=!1!==c.clone&&c.isMergeableObject(b);d[e]=f?c_(Array.isArray(b)?[]:{},b,c):b}else c.isMergeableObject(b)?d[e]=c_(a[e],b,c):-1===a.indexOf(b)&&d.push(b)}),d}var fz=i.useEffect;function fA(a){var b=(0,i.useRef)(a);return fz(function(){b.current=a}),(0,i.useCallback)(function(){for(var a=arguments.length,c=Array(a),d=0;d<a;d++)c[d]=arguments[d];return b.current.apply(void 0,c)},[])}(0,i.forwardRef)(function(a,b){var c,d=a.action,e=fm(a,["action"]),f=((c=(0,i.useContext)(fo))||e6(!1),c),g=f.handleReset,h=f.handleSubmit;return(0,i.createElement)("form",fl({onSubmit:h,ref:b,onReset:g,action:null!=d?d:"#"},e))}).displayName="Form";var fB=function(a,b,c){var d=fF(a),e=d[b];return d.splice(b,1),d.splice(c,0,e),d},fC=function(a,b,c){var d=fF(a),e=d[b];return d[b]=d[c],d[c]=e,d},fD=function(a,b,c){var d=fF(a);return d.splice(b,0,c),d},fE=function(a,b,c){var d=fF(a);return d[b]=c,d},fF=function(a){if(!a)return[];if(Array.isArray(a))return[].concat(a);var b=Object.keys(a).map(function(a){return parseInt(a)}).reduce(function(a,b){return b>a?b:a},0);return Array.from(fl({},a,{length:b+1}))},fG=function(a,b){var c="function"==typeof a?a:b;return function(a){return Array.isArray(a)||fr(a)?c(fF(a)):a}};(function(a){function b(b){var c;return(c=a.call(this,b)||this).updateArrayField=function(a,b,d){var e=c.props,f=e.name;(0,e.formik.setFormikState)(function(c){var e=fG(d,a),g=fG(b,a),h=fv(c.values,f,a(fu(c.values,f))),i=d?e(fu(c.errors,f)):void 0,j=b?g(fu(c.touched,f)):void 0;return fp(i)&&(i=void 0),fp(j)&&(j=void 0),fl({},c,{values:h,errors:d?fv(c.errors,f,i):c.errors,touched:b?fv(c.touched,f,j):c.touched})})},c.push=function(a){return c.updateArrayField(function(b){return[].concat(fF(b),[e4(a)])},!1,!1)},c.handlePush=function(a){return function(){return c.push(a)}},c.swap=function(a,b){return c.updateArrayField(function(c){return fC(c,a,b)},!0,!0)},c.handleSwap=function(a,b){return function(){return c.swap(a,b)}},c.move=function(a,b){return c.updateArrayField(function(c){return fB(c,a,b)},!0,!0)},c.handleMove=function(a,b){return function(){return c.move(a,b)}},c.insert=function(a,b){return c.updateArrayField(function(c){return fD(c,a,b)},function(b){return fD(b,a,null)},function(b){return fD(b,a,null)})},c.handleInsert=function(a,b){return function(){return c.insert(a,b)}},c.replace=function(a,b){return c.updateArrayField(function(c){return fE(c,a,b)},!1,!1)},c.handleReplace=function(a,b){return function(){return c.replace(a,b)}},c.unshift=function(a){var b=-1;return c.updateArrayField(function(c){var d=c?[a].concat(c):[a];return b=d.length,d},function(a){return a?[null].concat(a):[null]},function(a){return a?[null].concat(a):[null]}),b},c.handleUnshift=function(a){return function(){return c.unshift(a)}},c.handleRemove=function(a){return function(){return c.remove(a)}},c.handlePop=function(){return function(){return c.pop()}},c.remove=c.remove.bind(fn(c)),c.pop=c.pop.bind(fn(c)),c}(c=b).prototype=Object.create((d=a).prototype),c.prototype.constructor=c,c.__proto__=d;var c,d,e=b.prototype;return e.componentDidUpdate=function(a){this.props.validateOnChange&&this.props.formik.validateOnChange&&!(0,e5.default)(fu(a.formik.values,a.name),fu(this.props.formik.values,this.props.name))&&this.props.formik.validateForm(this.props.formik.values)},e.remove=function(a){var b;return this.updateArrayField(function(c){var d=c?fF(c):[];return b||(b=d[a]),fq(d.splice)&&d.splice(a,1),fq(d.every)&&d.every(function(a){return void 0===a})?[]:d},!0,!0),b},e.pop=function(){var a;return this.updateArrayField(function(b){var c=b.slice();return a||(a=c&&c.pop&&c.pop()),c},!0,!0),a},e.render=function(){var a,b={push:this.push,pop:this.pop,swap:this.swap,move:this.move,insert:this.insert,replace:this.replace,unshift:this.unshift,remove:this.remove,handlePush:this.handlePush,handlePop:this.handlePop,handleSwap:this.handleSwap,handleMove:this.handleMove,handleInsert:this.handleInsert,handleReplace:this.handleReplace,handleUnshift:this.handleUnshift,handleRemove:this.handleRemove},c=this.props,d=c.component,e=c.render,f=c.children,g=c.name,h=fm(c.formik,["validate","validationSchema"]),j=fl({},b,{form:h,name:g});return d?(0,i.createElement)(d,j):e?e(j):f?"function"==typeof f?f(j):(a=f,0===i.Children.count(a))?null:i.Children.only(f):null},b})(i.Component).defaultProps={validateOnChange:!0},i.Component,i.Component;var fH=a.i(6704),fI=a.i(30514),fJ=a.i(32107),fK=a.i(32340);let fL=Object.prototype.toString,fM=Error.prototype.toString,fN=RegExp.prototype.toString,fO="undefined"!=typeof Symbol?Symbol.prototype.toString:()=>"",fP=/^Symbol\((.*)\)(.*)$/;function fQ(a,b=!1){if(null==a||!0===a||!1===a)return""+a;let c=typeof a;if("number"===c)return a!=+a?"NaN":0===a&&1/a<0?"-0":""+a;if("string"===c)return b?`"${a}"`:a;if("function"===c)return"[Function "+(a.name||"anonymous")+"]";if("symbol"===c)return fO.call(a).replace(fP,"Symbol($1)");let d=fL.call(a).slice(8,-1);return"Date"===d?isNaN(a.getTime())?""+a:a.toISOString(a):"Error"===d||a instanceof Error?"["+fM.call(a)+"]":"RegExp"===d?fN.call(a):null}function fR(a,b){let c=fQ(a,b);return null!==c?c:JSON.stringify(a,function(a,c){let d=fQ(this[a],b);return null!==d?d:c},2)}function fS(a){return null==a?[]:[].concat(a)}let fT=/\$\{\s*(\w+)\s*\}/g;b=Symbol.toStringTag;class fU{constructor(a,c,d,e){this.name=void 0,this.message=void 0,this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=void 0,this.inner=void 0,this[b]="Error",this.name="ValidationError",this.value=c,this.path=d,this.type=e,this.errors=[],this.inner=[],fS(a).forEach(a=>{if(fV.isError(a)){this.errors.push(...a.errors);let b=a.inner.length?a.inner:[a];this.inner.push(...b)}else this.errors.push(a)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0]}}c=Symbol.hasInstance,d=Symbol.toStringTag;class fV extends Error{static formatError(a,b){let c=b.label||b.path||"this";return(b=Object.assign({},b,{path:c,originalPath:b.path}),"string"==typeof a)?a.replace(fT,(a,c)=>fR(b[c])):"function"==typeof a?a(b):a}static isError(a){return a&&"ValidationError"===a.name}constructor(a,b,c,e,f){const g=new fU(a,b,c,e);if(f)return g;super(),this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=[],this.inner=[],this[d]="Error",this.name=g.name,this.message=g.message,this.type=g.type,this.value=g.value,this.path=g.path,this.errors=g.errors,this.inner=g.inner,Error.captureStackTrace&&Error.captureStackTrace(this,fV)}static[c](a){return fU[Symbol.hasInstance](a)||super[Symbol.hasInstance](a)}}let fW={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:a,type:b,value:c,originalValue:d})=>{let e=null!=d&&d!==c?` (cast from the value \`${fR(d,!0)}\`).`:".";return"mixed"!==b?`${a} must be a \`${b}\` type, but the final value was: \`${fR(c,!0)}\``+e:`${a} must match the configured type. The validated value was: \`${fR(c,!0)}\``+e}},fX={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",datetime:"${path} must be a valid ISO date-time",datetime_precision:"${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",datetime_offset:'${path} must be a valid ISO date-time with UTC "Z" timezone',trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},fY={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},fZ={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},f$={isValue:"${path} field must be ${value}"},f_={noUnknown:"${path} field has unspecified keys: ${unknown}",exact:"${path} object contains unknown properties: ${properties}"},f0={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},f1={notType:a=>{let{path:b,value:c,spec:d}=a,e=d.types.length;if(Array.isArray(c)){if(c.length<e)return`${b} tuple value has too few items, expected a length of ${e} but got ${c.length} for value: \`${fR(c,!0)}\``;if(c.length>e)return`${b} tuple value has too many items, expected a length of ${e} but got ${c.length} for value: \`${fR(c,!0)}\``}return fV.formatError(fW.notType,a)}};Object.assign(Object.create(null),{mixed:fW,string:fX,number:fY,date:fZ,object:f_,array:f0,boolean:f$,tuple:f1});let f2=a=>a&&a.__isYupSchema__;class f3{static fromOptions(a,b){if(!b.then&&!b.otherwise)throw TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:c,then:d,otherwise:e}=b,f="function"==typeof c?c:(...a)=>a.every(a=>a===c);return new f3(a,(a,b)=>{var c;let g=f(...a)?d:e;return null!=(c=null==g?void 0:g(b))?c:b})}constructor(a,b){this.fn=void 0,this.refs=a,this.refs=a,this.fn=b}resolve(a,b){let c=this.refs.map(a=>a.getValue(null==b?void 0:b.value,null==b?void 0:b.parent,null==b?void 0:b.context)),d=this.fn(c,a,b);if(void 0===d||d===a)return a;if(!f2(d))throw TypeError("conditions must return a schema object");return d.resolve(b)}}class f4{constructor(a,b={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,"string"!=typeof a)throw TypeError("ref must be a string, got: "+a);if(this.key=a.trim(),""===a)throw TypeError("ref must be a non-empty string");this.isContext="$"===this.key[0],this.isValue="."===this.key[0],this.isSibling=!this.isContext&&!this.isValue;let c=this.isContext?"$":this.isValue?".":"";this.path=this.key.slice(c.length),this.getter=this.path&&(0,fI.getter)(this.path,!0),this.map=b.map}getValue(a,b,c){let d=this.isContext?c:this.isValue?a:b;return this.getter&&(d=this.getter(d||{})),this.map&&(d=this.map(d)),d}cast(a,b){return this.getValue(a,null==b?void 0:b.parent,null==b?void 0:b.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(a){return a&&a.__isYupRef}}function f5(a){function b({value:b,path:c="",options:d,originalValue:e,schema:f},g,h){let i,{name:j,test:k,params:l,message:m,skipAbsent:n}=a,{parent:o,context:p,abortEarly:q=f.spec.abortEarly,disableStackTrace:r=f.spec.disableStackTrace}=d,s={value:b,parent:o,context:p};function t(a={}){let d=f6(Object.assign({value:b,originalValue:e,label:f.spec.label,path:a.path||c,spec:f.spec,disableStackTrace:a.disableStackTrace||r},l,a.params),s),g=new fV(fV.formatError(a.message||m,d),b,d.path,a.type||j,d.disableStackTrace);return g.params=d,g}let u=q?g:h,v={path:c,parent:o,type:j,from:d.from,createError:t,resolve:a=>f7(a,s),options:d,originalValue:e,schema:f},w=a=>{fV.isError(a)?u(a):a?h(null):u(t())},x=a=>{fV.isError(a)?u(a):g(a)};if(n&&null==b)return w(!0);try{var y;if(i=k.call(v,b,v),"function"==typeof(null==(y=i)?void 0:y.then)){if(d.sync)throw Error(`Validation test of type: "${v.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(i).then(w,x)}}catch(a){x(a);return}w(i)}return b.OPTIONS=a,b}function f6(a,b){if(!a)return a;for(let c of Object.keys(a))a[c]=f7(a[c],b);return a}function f7(a,b){return f4.isRef(a)?a.getValue(b.value,b.parent,b.context):a}f4.prototype.__isYupRef=!0;class f8 extends Set{describe(){let a=[];for(let b of this.values())a.push(f4.isRef(b)?b.describe():b);return a}resolveAll(a){let b=[];for(let c of this.values())b.push(a(c));return b}clone(){return new f8(this.values())}merge(a,b){let c=this.clone();return a.forEach(a=>c.add(a)),b.forEach(a=>c.delete(a)),c}}function f9(a,b=new Map){let c;if(f2(a)||!a||"object"!=typeof a)return a;if(b.has(a))return b.get(a);if(a instanceof Date)c=new Date(a.getTime()),b.set(a,c);else if(a instanceof RegExp)c=new RegExp(a),b.set(a,c);else if(Array.isArray(a)){c=Array(a.length),b.set(a,c);for(let d=0;d<a.length;d++)c[d]=f9(a[d],b)}else if(a instanceof Map)for(let[d,e]of(c=new Map,b.set(a,c),a.entries()))c.set(d,f9(e,b));else if(a instanceof Set)for(let d of(c=new Set,b.set(a,c),a))c.add(f9(d,b));else if(a instanceof Object)for(let[d,e]of(c={},b.set(a,c),Object.entries(a)))c[d]=f9(e,b);else throw Error(`Unable to clone ${a}`);return c}function ga(a,b){var c;if(!(null!=(c=a.inner)&&c.length)&&a.errors.length){let c;return c=b?`${b}.${a.path}`:a.path,a.errors.map(a=>({message:a,path:function(a){if(!(null!=a&&a.length))return;let b=[],c="",d=!1,e=!1;for(let f=0;f<a.length;f++){let g=a[f];if("["===g&&!e){c&&(b.push(...c.split(".").filter(Boolean)),c=""),d=!0;continue}if("]"===g&&!e){c&&(/^\d+$/.test(c)?b.push(c):b.push(c.replace(/^"|"$/g,"")),c=""),d=!1;continue}if('"'===g){e=!e;continue}if("."===g&&!d&&!e){c&&(b.push(c),c="");continue}c+=g}return c&&b.push(...c.split(".").filter(Boolean)),b}(c)}))}let d=b?`${b}.${a.path}`:a.path;return a.inner.flatMap(a=>ga(a,d))}class gb{constructor(a){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new f8,this._blacklist=new f8,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(fW.notType)}),this.type=a.type,this._typeCheck=a.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},null==a?void 0:a.spec),this.withMutation(a=>{a.nonNullable()})}get _type(){return this.type}clone(a){if(this._mutate)return a&&Object.assign(this.spec,a),this;let b=Object.create(Object.getPrototypeOf(this));return b.type=this.type,b._typeCheck=this._typeCheck,b._whitelist=this._whitelist.clone(),b._blacklist=this._blacklist.clone(),b.internalTests=Object.assign({},this.internalTests),b.exclusiveTests=Object.assign({},this.exclusiveTests),b.deps=[...this.deps],b.conditions=[...this.conditions],b.tests=[...this.tests],b.transforms=[...this.transforms],b.spec=f9(Object.assign({},this.spec,a)),b}label(a){let b=this.clone();return b.spec.label=a,b}meta(...a){if(0===a.length)return this.spec.meta;let b=this.clone();return b.spec.meta=Object.assign(b.spec.meta||{},a[0]),b}withMutation(a){let b=this._mutate;this._mutate=!0;let c=a(this);return this._mutate=b,c}concat(a){if(!a||a===this)return this;if(a.type!==this.type&&"mixed"!==this.type)throw TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${a.type}`);let b=a.clone(),c=Object.assign({},this.spec,b.spec);return b.spec=c,b.internalTests=Object.assign({},this.internalTests,b.internalTests),b._whitelist=this._whitelist.merge(a._whitelist,a._blacklist),b._blacklist=this._blacklist.merge(a._blacklist,a._whitelist),b.tests=this.tests,b.exclusiveTests=this.exclusiveTests,b.withMutation(b=>{a.tests.forEach(a=>{b.test(a.OPTIONS)})}),b.transforms=[...this.transforms,...b.transforms],b}isType(a){return null==a?!!this.spec.nullable&&null===a||!!this.spec.optional&&void 0===a:this._typeCheck(a)}resolve(a){let b=this;if(b.conditions.length){let c=b.conditions;(b=b.clone()).conditions=[],b=(b=c.reduce((b,c)=>c.resolve(b,a),b)).resolve(a)}return b}resolveOptions(a){var b,c,d,e;return Object.assign({},a,{from:a.from||[],strict:null!=(b=a.strict)?b:this.spec.strict,abortEarly:null!=(c=a.abortEarly)?c:this.spec.abortEarly,recursive:null!=(d=a.recursive)?d:this.spec.recursive,disableStackTrace:null!=(e=a.disableStackTrace)?e:this.spec.disableStackTrace})}cast(a,b={}){let c=this.resolve(Object.assign({},b,{value:a})),d="ignore-optionality"===b.assert,e=c._cast(a,b);if(!1!==b.assert&&!c.isType(e)){if(d&&null==e)return e;let f=fR(a),g=fR(e);throw TypeError(`The value of ${b.path||"field"} could not be cast to a value that satisfies the schema type: "${c.type}". 

attempted value: ${f} 
`+(g!==f?`result of cast: ${g}`:""))}return e}_cast(a,b){let c=void 0===a?a:this.transforms.reduce((c,d)=>d.call(this,c,a,this,b),a);return void 0===c&&(c=this.getDefault(b)),c}_validate(a,b={},c,d){let{path:e,originalValue:f=a,strict:g=this.spec.strict}=b,h=a;g||(h=this._cast(h,Object.assign({assert:!1},b)));let i=[];for(let a of Object.values(this.internalTests))a&&i.push(a);this.runTests({path:e,value:h,originalValue:f,options:b,tests:i},c,a=>{if(a.length)return d(a,h);this.runTests({path:e,value:h,originalValue:f,options:b,tests:this.tests},c,d)})}runTests(a,b,c){let d=!1,{tests:e,value:f,originalValue:g,path:h,options:i}=a,j=a=>{d||(d=!0,b(a,f))},k=a=>{d||(d=!0,c(a,f))},l=e.length,m=[];if(!l)return k([]);let n={value:f,originalValue:g,path:h,options:i,schema:this};for(let a=0;a<e.length;a++)(0,e[a])(n,j,function(a){a&&(Array.isArray(a)?m.push(...a):m.push(a)),--l<=0&&k(m)})}asNestedTest({key:a,index:b,parent:c,parentPath:d,originalParent:e,options:f}){let g=null!=a?a:b;if(null==g)throw TypeError("Must include `key` or `index` for nested validations");let h="number"==typeof g,i=c[g],j=Object.assign({},f,{strict:!0,parent:c,value:i,originalValue:e[g],key:void 0,[h?"index":"key"]:g,path:h||g.includes(".")?`${d||""}[${h?g:`"${g}"`}]`:(d?`${d}.`:"")+a});return(a,b,c)=>this.resolve(j)._validate(i,j,b,c)}validate(a,b){var c;let d=this.resolve(Object.assign({},b,{value:a})),e=null!=(c=null==b?void 0:b.disableStackTrace)?c:d.spec.disableStackTrace;return new Promise((c,f)=>d._validate(a,b,(a,b)=>{fV.isError(a)&&(a.value=b),f(a)},(a,b)=>{a.length?f(new fV(a,b,void 0,void 0,e)):c(b)}))}validateSync(a,b){var c;let d,e=this.resolve(Object.assign({},b,{value:a})),f=null!=(c=null==b?void 0:b.disableStackTrace)?c:e.spec.disableStackTrace;return e._validate(a,Object.assign({},b,{sync:!0}),(a,b)=>{throw fV.isError(a)&&(a.value=b),a},(b,c)=>{if(b.length)throw new fV(b,a,void 0,void 0,f);d=c}),d}isValid(a,b){return this.validate(a,b).then(()=>!0,a=>{if(fV.isError(a))return!1;throw a})}isValidSync(a,b){try{return this.validateSync(a,b),!0}catch(a){if(fV.isError(a))return!1;throw a}}_getDefault(a){let b=this.spec.default;return null==b?b:"function"==typeof b?b.call(this,a):f9(b)}getDefault(a){return this.resolve(a||{})._getDefault(a)}default(a){return 0==arguments.length?this._getDefault():this.clone({default:a})}strict(a=!0){return this.clone({strict:a})}nullability(a,b){let c=this.clone({nullable:a});return c.internalTests.nullable=f5({message:b,name:"nullable",test(a){return null!==a||this.schema.spec.nullable}}),c}optionality(a,b){let c=this.clone({optional:a});return c.internalTests.optionality=f5({message:b,name:"optionality",test(a){return void 0!==a||this.schema.spec.optional}}),c}optional(){return this.optionality(!0)}defined(a=fW.defined){return this.optionality(!1,a)}nullable(){return this.nullability(!0)}nonNullable(a=fW.notNull){return this.nullability(!1,a)}required(a=fW.required){return this.clone().withMutation(b=>b.nonNullable(a).defined(a))}notRequired(){return this.clone().withMutation(a=>a.nullable().optional())}transform(a){let b=this.clone();return b.transforms.push(a),b}test(...a){let b;if(void 0===(b=1===a.length?"function"==typeof a[0]?{test:a[0]}:a[0]:2===a.length?{name:a[0],test:a[1]}:{name:a[0],message:a[1],test:a[2]}).message&&(b.message=fW.default),"function"!=typeof b.test)throw TypeError("`test` is a required parameters");let c=this.clone(),d=f5(b),e=b.exclusive||b.name&&!0===c.exclusiveTests[b.name];if(b.exclusive&&!b.name)throw TypeError("Exclusive tests must provide a unique `name` identifying the test");return b.name&&(c.exclusiveTests[b.name]=!!b.exclusive),c.tests=c.tests.filter(a=>(a.OPTIONS.name!==b.name||!e&&a.OPTIONS.test!==d.OPTIONS.test)&&!0),c.tests.push(d),c}when(a,b){Array.isArray(a)||"string"==typeof a||(b=a,a=".");let c=this.clone(),d=fS(a).map(a=>new f4(a));return d.forEach(a=>{a.isSibling&&c.deps.push(a.key)}),c.conditions.push("function"==typeof b?new f3(d,b):f3.fromOptions(d,b)),c}typeError(a){let b=this.clone();return b.internalTests.typeError=f5({message:a,name:"typeError",skipAbsent:!0,test(a){return!!this.schema._typeCheck(a)||this.createError({params:{type:this.schema.type}})}}),b}oneOf(a,b=fW.oneOf){let c=this.clone();return a.forEach(a=>{c._whitelist.add(a),c._blacklist.delete(a)}),c.internalTests.whiteList=f5({message:b,name:"oneOf",skipAbsent:!0,test(a){let b=this.schema._whitelist,c=b.resolveAll(this.resolve);return!!c.includes(a)||this.createError({params:{values:Array.from(b).join(", "),resolved:c}})}}),c}notOneOf(a,b=fW.notOneOf){let c=this.clone();return a.forEach(a=>{c._blacklist.add(a),c._whitelist.delete(a)}),c.internalTests.blacklist=f5({message:b,name:"notOneOf",test(a){let b=this.schema._blacklist,c=b.resolveAll(this.resolve);return!c.includes(a)||this.createError({params:{values:Array.from(b).join(", "),resolved:c}})}}),c}strip(a=!0){let b=this.clone();return b.spec.strip=a,b}describe(a){let b=(a?this.resolve(a):this).clone(),{label:c,meta:d,optional:e,nullable:f}=b.spec;return{meta:d,label:c,optional:e,nullable:f,default:b.getDefault(a),type:b.type,oneOf:b._whitelist.describe(),notOneOf:b._blacklist.describe(),tests:b.tests.filter((a,b,c)=>c.findIndex(b=>b.OPTIONS.name===a.OPTIONS.name)===b).map(b=>{let c=b.OPTIONS.params&&a?f6(Object.assign({},b.OPTIONS.params),a):b.OPTIONS.params;return{name:b.OPTIONS.name,params:c}})}}get"~standard"(){let a=this;return{version:1,vendor:"yup",async validate(b){try{return{value:await a.validate(b,{abortEarly:!1})}}catch(a){if(a instanceof fV)return{issues:ga(a)};throw a}}}}}for(let a of(gb.prototype.__isYupSchema__=!0,["validate","validateSync"]))gb.prototype[`${a}At`]=function(b,c,d={}){let{parent:e,parentPath:f,schema:g}=function(a,b,c,d=c){let e,f,g;return b?((0,fI.forEach)(b,(h,i,j)=>{let k=i?h.slice(1,h.length-1):h,l="tuple"===(a=a.resolve({context:d,parent:e,value:c})).type,m=j?parseInt(k,10):0;if(a.innerType||l){if(l&&!j)throw Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${g}" must contain an index to the tuple element, e.g. "${g}[0]"`);if(c&&m>=c.length)throw Error(`Yup.reach cannot resolve an array item at index: ${h}, in the path: ${b}. because there is no value at that index. `);e=c,c=c&&c[m],a=l?a.spec.types[m]:a.innerType}if(!j){if(!a.fields||!a.fields[k])throw Error(`The schema does not contain the path: ${b}. (failed at: ${g} which is a type: "${a.type}")`);e=c,c=c&&c[k],a=a.fields[k]}f=k,g=i?"["+h+"]":"."+h}),{schema:a,parent:e,parentPath:f}):{parent:e,parentPath:b,schema:a}}(this,b,c,d.context);return g[a](e&&e[f],Object.assign({},d,{parent:e,path:b}))};for(let a of["equals","is"])gb.prototype[a]=gb.prototype.oneOf;for(let a of["not","nope"])gb.prototype[a]=gb.prototype.notOneOf;let gc=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function gd(a){var b,c;let d=gc.exec(a);return d?{year:ge(d[1]),month:ge(d[2],1)-1,day:ge(d[3],1),hour:ge(d[4]),minute:ge(d[5]),second:ge(d[6]),millisecond:d[7]?ge(d[7].substring(0,3)):0,precision:null!=(b=null==(c=d[7])?void 0:c.length)?b:void 0,z:d[8]||void 0,plusMinus:d[9]||void 0,hourOffset:ge(d[10]),minuteOffset:ge(d[11])}:null}function ge(a,b=0){return Number(a)||b}let gf=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,gg=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,gh=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,gi=RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"),gj=a=>null==a||a===a.trim(),gk=({}).toString();function gl(){return new gm}class gm extends gb{constructor(){super({type:"string",check:a=>(a instanceof String&&(a=a.valueOf()),"string"==typeof a)}),this.withMutation(()=>{this.transform((a,b)=>{if(!this.spec.coerce||this.isType(a)||Array.isArray(a))return a;let c=null!=a&&a.toString?a.toString():a;return c===gk?a:c})})}required(a){return super.required(a).withMutation(b=>b.test({message:a||fW.required,name:"required",skipAbsent:!0,test:a=>!!a.length}))}notRequired(){return super.notRequired().withMutation(a=>(a.tests=a.tests.filter(a=>"required"!==a.OPTIONS.name),a))}length(a,b=fX.length){return this.test({message:b,name:"length",exclusive:!0,params:{length:a},skipAbsent:!0,test(b){return b.length===this.resolve(a)}})}min(a,b=fX.min){return this.test({message:b,name:"min",exclusive:!0,params:{min:a},skipAbsent:!0,test(b){return b.length>=this.resolve(a)}})}max(a,b=fX.max){return this.test({name:"max",exclusive:!0,message:b,params:{max:a},skipAbsent:!0,test(b){return b.length<=this.resolve(a)}})}matches(a,b){let c,d,e=!1;return b&&("object"==typeof b?{excludeEmptyString:e=!1,message:c,name:d}=b:c=b),this.test({name:d||"matches",message:c||fX.matches,params:{regex:a},skipAbsent:!0,test:b=>""===b&&e||-1!==b.search(a)})}email(a=fX.email){return this.matches(gf,{name:"email",message:a,excludeEmptyString:!0})}url(a=fX.url){return this.matches(gg,{name:"url",message:a,excludeEmptyString:!0})}uuid(a=fX.uuid){return this.matches(gh,{name:"uuid",message:a,excludeEmptyString:!1})}datetime(a){let b,c,d="";return a&&("object"==typeof a?{message:d="",allowOffset:b=!1,precision:c}=a:d=a),this.matches(gi,{name:"datetime",message:d||fX.datetime,excludeEmptyString:!0}).test({name:"datetime_offset",message:d||fX.datetime_offset,params:{allowOffset:b},skipAbsent:!0,test:a=>{if(!a||b)return!0;let c=gd(a);return!!c&&!!c.z}}).test({name:"datetime_precision",message:d||fX.datetime_precision,params:{precision:c},skipAbsent:!0,test:a=>{if(!a||void 0==c)return!0;let b=gd(a);return!!b&&b.precision===c}})}ensure(){return this.default("").transform(a=>null===a?"":a)}trim(a=fX.trim){return this.transform(a=>null!=a?a.trim():a).test({message:a,name:"trim",test:gj})}lowercase(a=fX.lowercase){return this.transform(a=>null==a?a:a.toLowerCase()).test({message:a,name:"string_case",exclusive:!0,skipAbsent:!0,test:a=>null==a||a===a.toLowerCase()})}uppercase(a=fX.uppercase){return this.transform(a=>null==a?a:a.toUpperCase()).test({message:a,name:"string_case",exclusive:!0,skipAbsent:!0,test:a=>null==a||a===a.toUpperCase()})}}gl.prototype=gm.prototype;let gn=new Date("");function go(){return new gp}class gp extends gb{constructor(){super({type:"date",check:a=>"[object Date]"===Object.prototype.toString.call(a)&&!isNaN(a.getTime())}),this.withMutation(()=>{this.transform((a,b)=>!this.spec.coerce||this.isType(a)||null===a?a:isNaN(a=function(a){let b=gd(a);if(!b)return Date.parse?Date.parse(a):NaN;if(void 0===b.z&&void 0===b.plusMinus)return new Date(b.year,b.month,b.day,b.hour,b.minute,b.second,b.millisecond).valueOf();let c=0;return"Z"!==b.z&&void 0!==b.plusMinus&&(c=60*b.hourOffset+b.minuteOffset,"+"===b.plusMinus&&(c=0-c)),Date.UTC(b.year,b.month,b.day,b.hour,b.minute+c,b.second,b.millisecond)}(a))?gp.INVALID_DATE:new Date(a))})}prepareParam(a,b){let c;if(f4.isRef(a))c=a;else{let d=this.cast(a);if(!this._typeCheck(d))throw TypeError(`\`${b}\` must be a Date or a value that can be \`cast()\` to a Date`);c=d}return c}min(a,b=fZ.min){let c=this.prepareParam(a,"min");return this.test({message:b,name:"min",exclusive:!0,params:{min:a},skipAbsent:!0,test(a){return a>=this.resolve(c)}})}max(a,b=fZ.max){let c=this.prepareParam(a,"max");return this.test({message:b,name:"max",exclusive:!0,params:{max:a},skipAbsent:!0,test(a){return a<=this.resolve(c)}})}}function gq(a,b){let c=1/0;return a.some((a,d)=>{var e;if(null!=(e=b.path)&&e.includes(a))return c=d,!0}),c}function gr(a){return(b,c)=>gq(a,b)-gq(a,c)}gp.INVALID_DATE=gn,go.prototype=gp.prototype,go.INVALID_DATE=gn;let gs=(a,b,c)=>{if("string"!=typeof a)return a;let d=a;try{d=JSON.parse(a)}catch(a){}return c.isType(d)?d:a},gt=a=>"[object Object]"===Object.prototype.toString.call(a);function gu(a,b){let c=Object.keys(a.fields);return Object.keys(b).filter(a=>-1===c.indexOf(a))}let gv=gr([]);function gw(a){return new gx(a)}class gx extends gb{constructor(a){super({type:"object",check:a=>gt(a)||"function"==typeof a}),this.fields=Object.create(null),this._sortErrors=gv,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{a&&this.shape(a)})}_cast(a,b={}){var c;let d=super._cast(a,b);if(void 0===d)return this.getDefault(b);if(!this._typeCheck(d))return d;let e=this.fields,f=null!=(c=b.stripUnknown)?c:this.spec.noUnknown,g=[].concat(this._nodes,Object.keys(d).filter(a=>!this._nodes.includes(a))),h={},i=Object.assign({},b,{parent:h,__validating:b.__validating||!1}),j=!1;for(let a of g){let c=e[a],g=a in d,k=d[a];if(c){let e;i.path=(b.path?`${b.path}.`:"")+a;let f=(c=c.resolve({value:k,context:b.context,parent:h}))instanceof gb?c.spec:void 0,g=null==f?void 0:f.strict;if(null!=f&&f.strip){j=j||a in d;continue}void 0!==(e=b.__validating&&g?k:c.cast(k,i))&&(h[a]=e)}else g&&!f&&(h[a]=k);(g!==a in h||h[a]!==k)&&(j=!0)}return j?h:d}_validate(a,b={},c,d){let{from:e=[],originalValue:f=a,recursive:g=this.spec.recursive}=b;b.from=[{schema:this,value:f},...e],b.__validating=!0,b.originalValue=f,super._validate(a,b,c,(a,e)=>{if(!g||!gt(e))return void d(a,e);f=f||e;let h=[];for(let a of this._nodes){let c=this.fields[a];!c||f4.isRef(c)||h.push(c.asNestedTest({options:b,key:a,parent:e,parentPath:b.path,originalParent:f}))}this.runTests({tests:h,value:e,originalValue:f,options:b},c,b=>{d(b.sort(this._sortErrors).concat(a),e)})})}clone(a){let b=super.clone(a);return b.fields=Object.assign({},this.fields),b._nodes=this._nodes,b._excludedEdges=this._excludedEdges,b._sortErrors=this._sortErrors,b}concat(a){let b=super.concat(a),c=b.fields;for(let[a,b]of Object.entries(this.fields)){let d=c[a];c[a]=void 0===d?b:d}return b.withMutation(b=>b.setFields(c,[...this._excludedEdges,...a._excludedEdges]))}_getDefault(a){if("default"in this.spec)return super._getDefault(a);if(!this._nodes.length)return;let b={};return this._nodes.forEach(c=>{var d;let e=this.fields[c],f=a;null!=(d=f)&&d.value&&(f=Object.assign({},f,{parent:f.value,value:f.value[c]})),b[c]=e&&"getDefault"in e?e.getDefault(f):void 0}),b}setFields(a,b){let c=this.clone();return c.fields=a,c._nodes=function(a,b=[]){let c=[],d=new Set,e=new Set(b.map(([a,b])=>`${a}-${b}`));function f(a,b){let f=(0,fI.split)(a)[0];d.add(f),e.has(`${b}-${f}`)||c.push([b,f])}for(let b of Object.keys(a)){let c=a[b];d.add(b),f4.isRef(c)&&c.isSibling?f(c.path,b):f2(c)&&"deps"in c&&c.deps.forEach(a=>f(a,b))}return fK.default.array(Array.from(d),c).reverse()}(a,b),c._sortErrors=gr(Object.keys(a)),b&&(c._excludedEdges=b),c}shape(a,b=[]){return this.clone().withMutation(c=>{let d=c._excludedEdges;return b.length&&(Array.isArray(b[0])||(b=[b]),d=[...c._excludedEdges,...b]),c.setFields(Object.assign(c.fields,a),d)})}partial(){let a={};for(let[b,c]of Object.entries(this.fields))a[b]="optional"in c&&c.optional instanceof Function?c.optional():c;return this.setFields(a)}deepPartial(){return function a(b){if("fields"in b){let c={};for(let[d,e]of Object.entries(b.fields))c[d]=a(e);return b.setFields(c)}if("array"===b.type){let c=b.optional();return c.innerType&&(c.innerType=a(c.innerType)),c}return"tuple"===b.type?b.optional().clone({types:b.spec.types.map(a)}):"optional"in b?b.optional():b}(this)}pick(a){let b={};for(let c of a)this.fields[c]&&(b[c]=this.fields[c]);return this.setFields(b,this._excludedEdges.filter(([b,c])=>a.includes(b)&&a.includes(c)))}omit(a){let b=[];for(let c of Object.keys(this.fields))a.includes(c)||b.push(c);return this.pick(b)}from(a,b,c){let d=(0,fI.getter)(a,!0);return this.transform(e=>{if(!e)return e;let f=e;return((a,b)=>{let c=[...(0,fI.normalizePath)(b)];if(1===c.length)return c[0]in a;let d=c.pop(),e=(0,fI.getter)((0,fI.join)(c),!0)(a);return!!(e&&d in e)})(e,a)&&(f=Object.assign({},e),c||delete f[a],f[b]=d(e)),f})}json(){return this.transform(gs)}exact(a){return this.test({name:"exact",exclusive:!0,message:a||f_.exact,test(a){if(null==a)return!0;let b=gu(this.schema,a);return 0===b.length||this.createError({params:{properties:b.join(", ")}})}})}stripUnknown(){return this.clone({noUnknown:!0})}noUnknown(a=!0,b=f_.noUnknown){"boolean"!=typeof a&&(b=a,a=!0);let c=this.test({name:"noUnknown",exclusive:!0,message:b,test(b){if(null==b)return!0;let c=gu(this.schema,b);return!a||0===c.length||this.createError({params:{unknown:c.join(", ")}})}});return c.spec.noUnknown=a,c}unknown(a=!0,b=f_.noUnknown){return this.noUnknown(!a,b)}transformKeys(a){return this.transform(b=>{if(!b)return b;let c={};for(let d of Object.keys(b))c[a(d)]=b[d];return c})}camelCase(){return this.transformKeys(fJ.camelCase)}snakeCase(){return this.transformKeys(fJ.snakeCase)}constantCase(){return this.transformKeys(a=>(0,fJ.snakeCase)(a).toUpperCase())}describe(a){let b=(a?this.resolve(a):this).clone(),c=super.describe(a);for(let[e,f]of(c.fields={},Object.entries(b.fields))){var d;let b=a;null!=(d=b)&&d.value&&(b=Object.assign({},b,{parent:b.value,value:b.value[e]})),c.fields[e]=f.describe(b)}return c}}gw.prototype=gx.prototype;let gy={name:"",email:"",message:""},gz=gw({name:gl().required("Name is required").min(2,"Name must be at least 2 characters").max(200,"Name must be less than 200 characters").trim(),email:gl().required("Email is required").email("Please provide a valid email address").max(200,"Email must be less than 200 characters").trim(),message:gl().required("Message is required").min(10,"Message must be at least 10 characters").max(5e3,"Message must be less than 5000 characters").trim()}),gA=ah.default.form.withConfig({displayName:"ContactForm.styles__ContactFormWrapper",componentId:"sc-f17c1543-0"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:a})=>a.spacing.lg};
  width: 100%;
  max-width: 800px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`,gB=ah.default.div.withConfig({displayName:"ContactForm.styles__FormActions",componentId:"sc-f17c1543-1"})`
  display: flex;
  justify-content: flex-start;
  margin-top: ${({theme:a})=>a.spacing.sm};
`,gC=ah.default.button.withConfig({displayName:"ContactForm.styles__SendButton",componentId:"sc-f17c1543-2"})`
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
`,gD=()=>{var a,b,c,d,e,f,g,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,aa,ab,ac,ad;let ae,{formik:af,isSubmitting:ag}=(c=void 0===(b=(a={initialValues:gy,validationSchema:gz,onSubmit:async(a,{setSubmitting:b,resetForm:c})=>{try{let b=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}),d=await b.json();if(!b.ok||!d.success)throw Error(d.message||"Failed to send message");fH.default.success("Message sent successfully! I'll get back to you shortly."),c()}catch(b){let a=b instanceof Error?b.message:"Failed to send message. Please try again later.";fH.default.error(`Failed to send message: ${a}`)}finally{b(!1)}}}).validateOnChange)||b,e=void 0===(d=a.validateOnBlur)||d,g=void 0!==(f=a.validateOnMount)&&f,j=a.isInitialValid,l=void 0!==(k=a.enableReinitialize)&&k,m=a.onSubmit,n=fm(a,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),o=fl({validateOnChange:c,validateOnBlur:e,validateOnMount:g,onSubmit:m},n),p=(0,i.useRef)(o.initialValues),q=(0,i.useRef)(o.initialErrors||fw),r=(0,i.useRef)(o.initialTouched||fx),s=(0,i.useRef)(o.initialStatus),t=(0,i.useRef)(!1),u=(0,i.useRef)({}),(0,i.useEffect)(function(){return t.current=!0,function(){t.current=!1}},[]),v=(0,i.useState)(0)[1],x=(w=(0,i.useRef)({values:e4(o.initialValues),errors:e4(o.initialErrors)||fw,touched:e4(o.initialTouched)||fx,status:e4(o.initialStatus),isSubmitting:!1,isValidating:!1,submitCount:0})).current,y=(0,i.useCallback)(function(a){var b=w.current;w.current=function(a,b){switch(b.type){case"SET_VALUES":return fl({},a,{values:b.payload});case"SET_TOUCHED":return fl({},a,{touched:b.payload});case"SET_ERRORS":if((0,e5.default)(a.errors,b.payload))return a;return fl({},a,{errors:b.payload});case"SET_STATUS":return fl({},a,{status:b.payload});case"SET_ISSUBMITTING":return fl({},a,{isSubmitting:b.payload});case"SET_ISVALIDATING":return fl({},a,{isValidating:b.payload});case"SET_FIELD_VALUE":return fl({},a,{values:fv(a.values,b.payload.field,b.payload.value)});case"SET_FIELD_TOUCHED":return fl({},a,{touched:fv(a.touched,b.payload.field,b.payload.value)});case"SET_FIELD_ERROR":return fl({},a,{errors:fv(a.errors,b.payload.field,b.payload.value)});case"RESET_FORM":return fl({},a,b.payload);case"SET_FORMIK_STATE":return b.payload(a);case"SUBMIT_ATTEMPT":return fl({},a,{touched:function a(b,c,d,e){void 0===d&&(d=new WeakMap),void 0===e&&(e={});for(var f=0,g=Object.keys(b);f<g.length;f++){var h=g[f],i=b[h];fr(i)?d.get(i)||(d.set(i,!0),e[h]=Array.isArray(i)?[]:{},a(i,c,d,e[h])):e[h]=c}return e}(a.values,!0),isSubmitting:!0,submitCount:a.submitCount+1});case"SUBMIT_FAILURE":case"SUBMIT_SUCCESS":return fl({},a,{isSubmitting:!1});default:return a}}(b,a),b!==w.current&&v(function(a){return a+1})},[]),z=(0,i.useCallback)(function(a,b){return new Promise(function(c,d){var e=o.validate(a,b);null==e?c(fw):ft(e)?e.then(function(a){c(a||fw)},function(a){d(a)}):c(e)})},[o.validate]),A=(0,i.useCallback)(function(a,b){var c,d,e,f,g=o.validationSchema,h=fq(g)?g(b):g,i=b&&h.validateAt?h.validateAt(b,a):(c=a,d=h,void 0===e&&(e=!1),f=function a(b){var c=Array.isArray(b)?[]:{};for(var d in b)if(Object.prototype.hasOwnProperty.call(b,d)){var e=String(d);!0===Array.isArray(b[e])?c[e]=b[e].map(function(b){return!0===Array.isArray(b)||dj(b)?a(b):""!==b?b:void 0}):dj(b[e])?c[e]=a(b[e]):c[e]=""!==b[e]?b[e]:void 0}return c}(c),d[e?"validateSync":"validate"](f,{abortEarly:!1,context:f}));return new Promise(function(a,b){i.then(function(){a(fw)},function(c){"ValidationError"===c.name?a(function(a){var b={};if(a.inner){if(0===a.inner.length)return fv(b,a.path,a.message);for(var c=a.inner,d=Array.isArray(c),e=0,c=d?c:c[Symbol.iterator]();;){if(d){if(e>=c.length)break;f=c[e++]}else{if((e=c.next()).done)break;f=e.value}var f,g=f;fu(b,g.path)||(b=fv(b,g.path,g.message))}}return b}(c)):b(c)})})},[o.validationSchema]),B=(0,i.useCallback)(function(a,b){return new Promise(function(c){return c(u.current[a].validate(b))})},[]),C=(0,i.useCallback)(function(a){var b=Object.keys(u.current).filter(function(a){return fq(u.current[a].validate)});return Promise.all(b.length>0?b.map(function(b){return B(b,fu(a,b))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")]).then(function(a){return a.reduce(function(a,c,d){return"DO_NOT_DELETE_YOU_WILL_BE_FIRED"===c||c&&(a=fv(a,b[d],c)),a},{})})},[B]),D=(0,i.useCallback)(function(a){return Promise.all([C(a),o.validationSchema?A(a):{},o.validate?z(a):{}]).then(function(a){var b=a[0],c=a[1],d=a[2];return c_.all([b,c,d],{arrayMerge:fy})})},[o.validate,o.validationSchema,C,z,A]),E=fA(function(a){return void 0===a&&(a=x.values),y({type:"SET_ISVALIDATING",payload:!0}),D(a).then(function(a){return t.current&&(y({type:"SET_ISVALIDATING",payload:!1}),y({type:"SET_ERRORS",payload:a})),a})}),(0,i.useEffect)(function(){g&&!0===t.current&&(0,e5.default)(p.current,o.initialValues)&&E(p.current)},[g,E]),F=(0,i.useCallback)(function(a){var b=a&&a.values?a.values:p.current,c=a&&a.errors?a.errors:q.current?q.current:o.initialErrors||{},d=a&&a.touched?a.touched:r.current?r.current:o.initialTouched||{},e=a&&a.status?a.status:s.current?s.current:o.initialStatus;p.current=b,q.current=c,r.current=d,s.current=e;var f=function(){y({type:"RESET_FORM",payload:{isSubmitting:!!a&&!!a.isSubmitting,errors:c,touched:d,status:e,values:b,isValidating:!!a&&!!a.isValidating,submitCount:a&&a.submitCount&&"number"==typeof a.submitCount?a.submitCount:0}})};if(o.onReset){var g=o.onReset(x.values,Y);ft(g)?g.then(f):f()}else f()},[o.initialErrors,o.initialStatus,o.initialTouched,o.onReset]),(0,i.useEffect)(function(){!0===t.current&&!(0,e5.default)(p.current,o.initialValues)&&l&&(p.current=o.initialValues,F(),g&&E(p.current))},[l,o.initialValues,F,g,E]),(0,i.useEffect)(function(){l&&!0===t.current&&!(0,e5.default)(q.current,o.initialErrors)&&(q.current=o.initialErrors||fw,y({type:"SET_ERRORS",payload:o.initialErrors||fw}))},[l,o.initialErrors]),(0,i.useEffect)(function(){l&&!0===t.current&&!(0,e5.default)(r.current,o.initialTouched)&&(r.current=o.initialTouched||fx,y({type:"SET_TOUCHED",payload:o.initialTouched||fx}))},[l,o.initialTouched]),(0,i.useEffect)(function(){l&&!0===t.current&&!(0,e5.default)(s.current,o.initialStatus)&&(s.current=o.initialStatus,y({type:"SET_STATUS",payload:o.initialStatus}))},[l,o.initialStatus,o.initialTouched]),G=fA(function(a){if(u.current[a]&&fq(u.current[a].validate)){var b=fu(x.values,a),c=u.current[a].validate(b);return ft(c)?(y({type:"SET_ISVALIDATING",payload:!0}),c.then(function(a){return a}).then(function(b){y({type:"SET_FIELD_ERROR",payload:{field:a,value:b}}),y({type:"SET_ISVALIDATING",payload:!1})})):(y({type:"SET_FIELD_ERROR",payload:{field:a,value:c}}),Promise.resolve(c))}return o.validationSchema?(y({type:"SET_ISVALIDATING",payload:!0}),A(x.values,a).then(function(a){return a}).then(function(b){y({type:"SET_FIELD_ERROR",payload:{field:a,value:fu(b,a)}}),y({type:"SET_ISVALIDATING",payload:!1})})):Promise.resolve()}),H=(0,i.useCallback)(function(a,b){var c=b.validate;u.current[a]={validate:c}},[]),I=(0,i.useCallback)(function(a){delete u.current[a]},[]),J=fA(function(a,b){return y({type:"SET_TOUCHED",payload:a}),(void 0===b?e:b)?E(x.values):Promise.resolve()}),K=(0,i.useCallback)(function(a){y({type:"SET_ERRORS",payload:a})},[]),L=fA(function(a,b){var d=fq(a)?a(x.values):a;return y({type:"SET_VALUES",payload:d}),(void 0===b?c:b)?E(d):Promise.resolve()}),M=(0,i.useCallback)(function(a,b){y({type:"SET_FIELD_ERROR",payload:{field:a,value:b}})},[]),N=fA(function(a,b,d){var e=fq(b)?b(fu(x.values,a)):b;return y({type:"SET_FIELD_VALUE",payload:{field:a,value:e}}),(void 0===d?c:d)?E(fv(x.values,a,e)):Promise.resolve()}),O=(0,i.useCallback)(function(a,b){var c,d=b,e=a;if(!fs(a)){a.persist&&a.persist();var f=a.target?a.target:a.currentTarget,g=f.type,h=f.name,i=f.id,j=f.value,k=f.checked,l=(f.outerHTML,f.options),m=f.multiple;d=b||h||i,e=/number|range/.test(g)?isNaN(c=parseFloat(j))?"":c:/checkbox/.test(g)?function(a,b,c){if("boolean"==typeof a)return!!b;var d=[],e=!1,f=-1;if(Array.isArray(a))d=a,e=(f=a.indexOf(c))>=0;else if(!c||"true"==c||"false"==c)return!!b;return b&&c&&!e?d.concat(c):e?d.slice(0,f).concat(d.slice(f+1)):d}(fu(x.values,d),k,j):l&&m?Array.from(l).filter(function(a){return a.selected}).map(function(a){return a.value}):j}d&&N(d,e)},[N,x.values]),P=fA(function(a){if(fs(a))return function(b){return O(b,a)};O(a)}),Q=fA(function(a,b,c){return void 0===b&&(b=!0),y({type:"SET_FIELD_TOUCHED",payload:{field:a,value:b}}),(void 0===c?e:c)?E(x.values):Promise.resolve()}),R=(0,i.useCallback)(function(a,b){a.persist&&a.persist();var c=a.target,d=c.name,e=c.id;c.outerHTML,Q(b||d||e,!0)},[Q]),S=fA(function(a){if(fs(a))return function(b){return R(b,a)};R(a)}),T=(0,i.useCallback)(function(a){fq(a)?y({type:"SET_FORMIK_STATE",payload:a}):y({type:"SET_FORMIK_STATE",payload:function(){return a}})},[]),U=(0,i.useCallback)(function(a){y({type:"SET_STATUS",payload:a})},[]),V=(0,i.useCallback)(function(a){y({type:"SET_ISSUBMITTING",payload:a})},[]),W=fA(function(){return y({type:"SUBMIT_ATTEMPT"}),E().then(function(a){var b,c=a instanceof Error;if(!c&&0===Object.keys(a).length){try{if(b=Z(),void 0===b)return}catch(a){throw a}return Promise.resolve(b).then(function(a){return t.current&&y({type:"SUBMIT_SUCCESS"}),a}).catch(function(a){if(t.current)throw y({type:"SUBMIT_FAILURE"}),a})}if(t.current&&(y({type:"SUBMIT_FAILURE"}),c))throw a})}),X=fA(function(a){a&&a.preventDefault&&fq(a.preventDefault)&&a.preventDefault(),a&&a.stopPropagation&&fq(a.stopPropagation)&&a.stopPropagation(),W().catch(function(a){console.warn("Warning: An unhandled error was caught from submitForm()",a)})}),Y={resetForm:F,validateForm:E,validateField:G,setErrors:K,setFieldError:M,setFieldTouched:Q,setFieldValue:N,setStatus:U,setSubmitting:V,setTouched:J,setValues:L,setFormikState:T,submitForm:W},Z=fA(function(){return m(x.values,Y)}),$=fA(function(a){a&&a.preventDefault&&fq(a.preventDefault)&&a.preventDefault(),a&&a.stopPropagation&&fq(a.stopPropagation)&&a.stopPropagation(),F()}),_=(0,i.useCallback)(function(a){return{value:fu(x.values,a),error:fu(x.errors,a),touched:!!fu(x.touched,a),initialValue:fu(p.current,a),initialTouched:!!fu(r.current,a),initialError:fu(q.current,a)}},[x.errors,x.touched,x.values]),aa=(0,i.useCallback)(function(a){return{setValue:function(b,c){return N(a,b,c)},setTouched:function(b,c){return Q(a,b,c)},setError:function(b){return M(a,b)}}},[N,Q,M]),ab=(0,i.useCallback)(function(a){var b=fr(a),c=b?a.name:a,d=fu(x.values,c),e={name:c,value:d,onChange:P,onBlur:S};if(b){var f=a.type,g=a.value,h=a.as,i=a.multiple;"checkbox"===f?void 0===g?e.checked=!!d:(e.checked=!!(Array.isArray(d)&&~d.indexOf(g)),e.value=g):"radio"===f?(e.checked=d===g,e.value=g):"select"===h&&i&&(e.value=e.value||[],e.multiple=!0)}return e},[S,P,x.values]),ac=(0,i.useMemo)(function(){return!(0,e5.default)(p.current,x.values)},[p.current,x.values]),ad=(0,i.useMemo)(function(){return void 0!==j?ac?x.errors&&0===Object.keys(x.errors).length:!1!==j&&fq(j)?j(o):j:x.errors&&0===Object.keys(x.errors).length},[j,ac,x.errors,o]),{formik:ae=fl({},x,{initialValues:p.current,initialErrors:q.current,initialTouched:r.current,initialStatus:s.current,handleBlur:S,handleChange:P,handleReset:$,handleSubmit:X,resetForm:F,setErrors:K,setFormikState:T,setFieldTouched:Q,setFieldValue:N,setFieldError:M,setStatus:U,setSubmitting:V,setTouched:J,setValues:L,submitForm:W,validateForm:E,validateField:G,isValid:ad,dirty:ac,unregisterField:I,registerField:H,getFieldProps:ab,getFieldMeta:_,getFieldHelpers:aa,validateOnBlur:e,validateOnChange:c,validateOnMount:g}),isSubmitting:ae.isSubmitting}),{values:ah,errors:ai,touched:aj,handleChange:ak,handleBlur:al,handleSubmit:am}=af;return(0,h.jsxs)(gA,{onSubmit:am,"data-aos":"fade-up","data-aos-delay":"300",children:[(0,h.jsx)(bv,{label:"NAME",name:"name",value:ah.name,onChange:ak,onBlur:al,error:aj.name&&ai.name?ai.name:void 0,placeholder:""}),(0,h.jsx)(bv,{label:"EMAIL",name:"email",type:"email",value:ah.email,onChange:ak,onBlur:al,error:aj.email&&ai.email?ai.email:void 0,placeholder:""}),(0,h.jsx)(bw,{label:"MESSAGE",name:"message",value:ah.message,onChange:ak,onBlur:al,error:aj.message&&ai.message?ai.message:void 0,placeholder:""}),(0,h.jsx)(gB,{children:(0,h.jsxs)(gC,{type:"submit",disabled:ag,children:[ag?"Sending...":"Send Message",(0,h.jsx)(cV,{size:16})]})})]})},gE=ah.default.div.withConfig({displayName:"Contact.styles__StyledContact",componentId:"sc-8b48986e-0"})`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`,gF=ah.default.div.withConfig({displayName:"Contact.styles__ContactWrapper",componentId:"sc-8b48986e-1"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:a})=>a.spacing["4xl"]};
  align-items: center;
  width: 100%;
`,gG=ah.default.div.withConfig({displayName:"Contact.styles__ContactFormSection",componentId:"sc-8b48986e-2"})`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 800px;
  transform-style: preserve-3d;
  transform: translateZ(0);

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`,gH=({sectionNumber:a="04",headline:b="Let's Build Something Together",description:c="Open to collaboration on research projects, open-source contributions, healthcare AI initiatives, or consulting opportunities."})=>(0,h.jsx)(bC,{id:"contact",children:(0,h.jsx)(bA,{children:(0,h.jsx)(gE,{children:(0,h.jsxs)(gF,{children:[(0,h.jsx)(cU,{sectionNumber:a,headline:b,description:c}),(0,h.jsx)(gG,{children:(0,h.jsx)(gD,{})})]})})})}),gI=ah.default.section.withConfig({displayName:"ReachOut.styles__StyledReachOut",componentId:"sc-82657052-0"})`
  position: relative;
  padding: ${({theme:a})=>a.spacing["4xl"]} 0;

  @media (max-width: 768px) {
    padding: ${({theme:a})=>a.spacing["3xl"]} 0;
  }
`,gJ=ah.default.div.withConfig({displayName:"ReachOut.styles__ReachOutContent",componentId:"sc-82657052-1"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:a})=>a.spacing["3xl"]};
  position: relative;
`,gK=ah.default.div.withConfig({displayName:"ReachOut.styles__ReachOutHeaderWrapper",componentId:"sc-82657052-2"})`
  display: flex;
  align-items: center;
  gap: ${({theme:a})=>a.spacing.lg};
  width: 100%;

  @media (max-width: 1024px) {
    gap: ${({theme:a})=>a.spacing.md};
  }
`,gL=ah.default.div.withConfig({displayName:"ReachOut.styles__ReachOutLine",componentId:"sc-82657052-3"})`
  flex: 1;
  height: 1px;
  background-color: ${({theme:a})=>a.colors.border};
`,gM=ah.default.span.withConfig({displayName:"ReachOut.styles__ReachOutHeader",componentId:"sc-82657052-4"})`
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
`,gN=ah.default.div.withConfig({displayName:"ReachOut.styles__ContactCards",componentId:"sc-82657052-5"})`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({theme:a})=>a.spacing.xl};
  position: relative;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: ${({theme:a})=>a.spacing.lg};
  }
`,gO=ah.default.div.withConfig({displayName:"ReachOut.styles__ContactCard",componentId:"sc-82657052-6"})`
  background-color: ${({theme:a})=>a.colors.bgSecondary};
  border: 1px solid ${({theme:a})=>a.colors.border};
  border-radius: ${({theme:a})=>a.borderRadius.md};
  padding: ${({theme:a})=>a.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${({theme:a})=>a.spacing.sm};
  transition: all ${({theme:a})=>a.transitions.base} ease-out;
  transform-style: preserve-3d;
  transform: translateZ(0);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  will-change: transform;

  &:hover {
    border-color: ${({theme:a})=>a.colors.textSecondary};
    transform: translateY(-6px) translateZ(15px) rotateX(2deg);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
  }
`,gP=ah.default.span.withConfig({displayName:"ReachOut.styles__CardLabel",componentId:"sc-82657052-7"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyBody};
  font-size: ${({theme:a})=>a.typography.fontSize.xs};
  font-weight: ${({theme:a})=>a.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({theme:a})=>a.colors.textSecondary};
`,gQ=ah.default.span.withConfig({displayName:"ReachOut.styles__CardValue",componentId:"sc-82657052-8"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyBody};
  font-size: ${({theme:a})=>a.typography.fontSize.base};
  color: ${({theme:a})=>a.colors.textPrimary};
  word-break: break-word;
`,gR=ah.default.a.withConfig({displayName:"ReachOut.styles__CardLink",componentId:"sc-82657052-9"})`
  color: ${({theme:a})=>a.colors.textPrimary};
  text-decoration: none;
  transition: color ${({theme:a})=>a.transitions.fast};

  &:hover {
    color: ${({theme:a})=>a.colors.accent};
  }
`,gS=({email:a="sd.umarnazir@gmail.com",phone:b="+917051732616",github:c="https://github.com/umarnaxir",linkedin:d="https://www.linkedin.com/in/umar-nazir19/"})=>{let e=[{label:"EMAIL",value:a,href:`mailto:${a}`},{label:"PHONE",value:b,href:`tel:${b}`},{label:"GITHUB",value:"umarnaxir",href:c},{label:"LINKEDIN",value:"Umar Nazir",href:d}];return(0,h.jsx)(gI,{children:(0,h.jsx)(bA,{children:(0,h.jsxs)(gJ,{children:[(0,h.jsxs)(gK,{"data-aos":"fade-up",children:[(0,h.jsx)(gL,{}),(0,h.jsx)(by,{variant:"caption",color:"secondary",as:"span",children:(0,h.jsx)(gM,{children:"OR REACH OUT DIRECTLY"})}),(0,h.jsx)(gL,{})]}),(0,h.jsx)(gN,{children:e.map((a,b)=>(0,h.jsxs)(gO,{"data-aos":"fade-up","data-aos-delay":100*b,children:[(0,h.jsx)(by,{variant:"caption",color:"secondary",as:"span",children:(0,h.jsx)(gP,{children:a.label})}),a.href?(0,h.jsx)(gR,{href:a.href,target:"EMAIL"!==a.label?"_blank":void 0,rel:"EMAIL"!==a.label?"noopener noreferrer":void 0,children:(0,h.jsx)(by,{variant:"body",as:"span",children:(0,h.jsx)(gQ,{children:a.value})})}):(0,h.jsx)(by,{variant:"body",as:"span",children:(0,h.jsx)(gQ,{children:a.value})})]},b))})]})})})},gT=ah.default.footer.withConfig({displayName:"Footer.styles__StyledFooter",componentId:"sc-d97a5ab1-0"})`
  border-top: 1px solid ${({theme:a})=>a.colors.border};
  padding: ${({theme:a})=>a.spacing.xl} 0;
  background-color: ${({theme:a})=>a.colors.bgPrimary};
`,gU=ah.default.div.withConfig({displayName:"Footer.styles__FooterContent",componentId:"sc-d97a5ab1-1"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${({theme:a})=>a.spacing.md};
    text-align: center;
  }
`,gV=ah.default.span.withConfig({displayName:"Footer.styles__FooterCopyright",componentId:"sc-d97a5ab1-2"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyBody};
  color: ${({theme:a})=>a.colors.textTertiary};
  font-size: ${({theme:a})=>a.typography.fontSize.xs};
`,gW=ah.default.span.withConfig({displayName:"Footer.styles__FooterTagline",componentId:"sc-d97a5ab1-3"})`
  font-family: ${({theme:a})=>a.typography.fontFamilyBody};
  color: ${({theme:a})=>a.colors.textTertiary};
  font-size: ${({theme:a})=>a.typography.fontSize.xs};
`,gX=({name:a})=>{let b=new Date().getFullYear();return(0,h.jsx)(gT,{"data-aos":"fade-up",children:(0,h.jsx)(bA,{children:(0,h.jsxs)(gU,{children:[(0,h.jsx)(by,{variant:"caption",color:"tertiary",as:"span",children:(0,h.jsxs)(gV,{children:["© ",b," ",a]})}),(0,h.jsx)(by,{variant:"caption",color:"tertiary",as:"span",children:(0,h.jsx)(gW,{children:"Designed & Built with purpose"})})]})})})};var gY={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},gZ=i.default.createContext&&i.default.createContext(gY),g$=["attr","size","title"];function g_(){return(g_=Object.assign.bind()).apply(this,arguments)}function g0(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function g1(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?g0(Object(c),!0).forEach(function(b){var d,e,f;d=a,e=b,f=c[b],(e=function(a){var b=function(a,b){if("object"!=typeof a||!a)return a;var c=a[Symbol.toPrimitive];if(void 0!==c){var d=c.call(a,b||"default");if("object"!=typeof d)return d;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}(a,"string");return"symbol"==typeof b?b:b+""}(e))in d?Object.defineProperty(d,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):d[e]=f}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):g0(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}function g2(a){var b=b=>{var c,{attr:d,size:e,title:f}=a,g=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c={};for(var d in a)if(Object.prototype.hasOwnProperty.call(a,d)){if(b.indexOf(d)>=0)continue;c[d]=a[d]}return c}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,g$),h=e||b.size||"1em";return b.className&&(c=b.className),a.className&&(c=(c?c+" ":"")+a.className),i.default.createElement("svg",g_({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},b.attr,d,g,{className:c,style:g1(g1({color:a.color||b.color},b.style),a.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),f&&i.default.createElement("title",null,f),a.children)};return void 0!==gZ?i.default.createElement(gZ.Consumer,null,a=>b(a)):b(gY)}function g3(a){var b;return(b={tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"},child:[]}]},a=>i.default.createElement(g2,g_({attr:g1({},b.attr)},a),function a(b){return b&&b.map((b,c)=>i.default.createElement(b.tag,g1({key:c},b.attr),a(b.child)))}(b.child)))(a)}let g4=ah.default.button.withConfig({displayName:"BackToTop.styles__BackToTopButton",componentId:"sc-155ac7de-0"})`
  position: fixed;
  bottom: ${({theme:a})=>a.spacing.xl};
  right: ${({theme:a})=>a.spacing.xl};
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${({theme:a})=>a.colors.accent};
  color: ${({theme:a})=>a.colors.textPrimary};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${({theme:a})=>a.zIndex.fixed};
  transition: background-color ${({theme:a})=>a.transitions.base},
    transform ${({theme:a})=>a.transitions.base};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  &:hover {
    background-color: ${({theme:a})=>a.colors.accentHover};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 768px) {
    bottom: ${({theme:a})=>a.spacing.lg};
    right: ${({theme:a})=>a.spacing.lg};
    width: 44px;
    height: 44px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`,g5=()=>{let[a,b]=(0,i.useState)(!1),[c,d]=(0,i.useState)(!1),e=(0,i.useRef)(null),f=(0,i.useRef)(null);return((0,i.useEffect)(()=>{let a=document.getElementById("techstack"),c=document.getElementById("contact");if(a&&c)return e.current=new IntersectionObserver(a=>{a.forEach(a=>{a.isIntersecting&&(d(!0),f.current||(f.current=new IntersectionObserver(a=>{a.forEach(a=>{b(a.isIntersecting)})},{threshold:.1}),f.current.observe(c)))})},{threshold:.1}),e.current.observe(a),()=>{e.current&&e.current.disconnect(),f.current&&f.current.disconnect()}},[]),c&&a)?(0,h.jsx)(g4,{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},"aria-label":"Back to top",children:(0,h.jsx)(g3,{})}):null},g6={personal:{name:"Umar Nazir",title:"SOFTWARE ENGINEER & SEO EXECUTIVE",headline:"Developing\nFuture-Ready\nSoftware",description:"Software Engineer & SEO Executive with 2+ years of experience creating high-performance Websites and Applications, optimizing digital presence, and delivering scalable solutions that drive business growth.",email:"sd.umarnazir@gmail.com",phone:"+91 705-173-2616",location:"Baramulla, J&K India",github:"@umarnazir",linkedin:"/in/umarnazir"},projects:[{id:"1",number:"001",year:"2024",category:"AI / ML PLATFORM",title:"AI-Mployed",description:"AI/ML Talent & Career Platform connecting job seekers with opportunities in artificial intelligence and machine learning. Built with React.js and Next.js for optimal performance and user experience.",tags:["NEXT.JS","TYPESCRIPT","AI/ML","MONGODB","NODE.JS","AWS"],link:"https://ml-jobs.com",imageLink:"/images/mljobs.png",visualVariant:"default"},{id:"2",number:"002",year:"2024",category:"TOURISM / BOOKING",title:"NineMash",description:"Tourism & Online Booking Platform for Kashmir region. Enables users to book hotels, tours, and experiences with seamless payment integration and real-time availability.",tags:["NEXT.JS","TYPESCRIPT","MONGODB","SEO","NODE.JS","AWS"],link:"https://ninemash.com/",imageLink:"/images/ninemash.png",visualVariant:"alt2"},{id:"3",number:"003",year:"2024",category:"LOGISTICS / COURIER",title:"Rush Expected Courier",description:"All Critical Shipments courier service platform. Specialized in handling urgent and time-sensitive deliveries with real-time tracking, priority booking, and customer support integration.",tags:["REACT","REAL-TIME TRACKING","FIREBASE","PYTHON"],link:"https://re-courier.com/",imageLink:"/images/re-courier.png",visualVariant:"default"},{id:"4",number:"004",year:"2024",category:"DIGITAL MARKETING / AGENCY",title:"Digitlia",description:"Digital marketing agency specializing in web and app development and SEO. Showcases services, portfolio, client testimonials, and case studies with integrated contact forms and lead generation features.",tags:["REACT","NEXT.JS","SEO","DIGITAL MARKETING","LEAD GENERATION","PYTHON"],link:"https://digitlia.com/",imageLink:"/images/digitlia.jpeg",visualVariant:"alt"},{id:"5",number:"005",year:"2024",category:"LOGISTICS / E-COMMERCE",title:"EliteExpress Courier",description:"Delivery & Logistics System for managing shipments, tracking packages, and optimizing delivery routes. Features real-time tracking, automated notifications, and comprehensive admin dashboard.",tags:["NEXT.JS","NODE.JS","MONGODB"],link:"https://eliteexpressdeliveryservices.com/",imageLink:"/images/eliteexpress.png",visualVariant:"alt"},{id:"6",number:"006",year:"2024",category:"TRAVEL / BOOKING",title:"Kashmir Tickets",description:"Travel & Ticket Booking System for Kashmir region. Comprehensive platform for booking flights, buses, and travel packages with secure payment processing and booking management.",tags:["NEXT.JS","SEO","MONGODB"],link:"https://kashmirtickets.com/",imageLink:"/images/kashmirtickets.png",visualVariant:"alt"},{id:"7",number:"007",year:"2024",category:"NGO / NON-PROFIT",title:"Kindness Towards Humanity",description:"NGO Website for humanitarian organization. Features donation system, volunteer registration, event management, and impact stories with multi-language support and accessibility features.",tags:["REACT","NEXT.JS","DONATION SYSTEM","ACCESSIBILITY"],link:"https://kindnesstowardshumanity.in/",imageLink:"/images/kindnesstowardshumanity.png",visualVariant:"alt2"},{id:"8",number:"008",year:"2024",category:"ENTERPRISE / HR",title:"Office Management System",description:"HR & Workflow Automation system for managing employee data, attendance, payroll, and workflow processes. Features role-based access control, reporting dashboards, and automated notifications.",tags:["REACT","NODE.JS","FIREBASE","MONGODB","AUTOMATION","HR SYSTEM"],link:"https://example.com",imageLink:"/images/office-management.png",visualVariant:"alt"},{id:"9",number:"009",year:"2024",category:"HOSPITALITY / BOOKING",title:"Hotel Sea View",description:"Hospitality Booking Website for hotel reservations. Features room availability, online booking, payment processing, and guest management system with beautiful UI/UX design.",tags:["REACT","NEXT.JS","BOOKING SYSTEM","NODE.JS"],link:"https://thehotelseaview.in/",imageLink:"/images/hotel-sea-view.png",visualVariant:"alt2"},{id:"10",number:"008",year:"2024",category:"HEALTHCARE / PORTFOLIO",title:"Dr. Jibran Bashir",description:"Professional portfolio website for Orthopedic Surgeon featuring appointment booking, patient testimonials, and medical service information with responsive design and SEO optimization.",tags:["NEXT.JS","TYPESCRIPT","SEO","RESPONSIVE","MONGODB","NODE.JS"],link:"https://www.drjibranbashir.com/",imageLink:"/images/dr-jibran-bashir.png",visualVariant:"default"},{id:"11",number:"009",year:"2024",category:"HEALTHCARE / MEDICAL",title:"Altaf Hospital",description:"Healthcare & Medical Services Website for hospital. Includes appointment booking, doctor profiles, department information, and patient portal with secure data handling and HIPAA compliance considerations.",tags:["NEXT.JS","TYPESCRIPT","SEO","RESPONSIVE","MONGODB","NODE.JS"],link:"https://www.altafhospital.com/",imageLink:"/images/altaf-hospital.png",visualVariant:"default"}],experiences:[{id:"1",company:"Saibbyweb",role:"Software Engineer",date:"Jan 2025 - Present",location:"On-Site",type:"Full-time",description:"Building high-performance React/Next.js Websites and React Native Mobile applications with focus on SEO optimization, page speed, and exceptional user experience.",responsibilities:["Build high-performance React/Next.js Web and React Native  Apps","Improve SEO structure, page speed, and user experience","Develop reusable components and optimized UI patterns","Integrate APIs, Firebase services, and backend logic"],tags:["REACT","NEXT.JS","TYPESCRIPT","REACT NATIVE","SEO","DB","API INTEGRATION"]},{id:"2",company:"NexGen Developers",role:"Founder & CEO",date:"May 2025 - Present",location:"Part-Time",type:"Part-Time",description:"Leading technical development across websites, apps & AI tools. Building custom automation & chatbot systems while managing branding, SEO, client communication & digital strategy.",responsibilities:["Lead technical development across websites, apps & AI tools","Build custom automation & chatbot systems","Manage branding, SEO, client communication & digital strategy","Deliver full-stack software tailored to business growth"],tags:["LEADERSHIP","AI TOOLS","AUTOMATION","CHATBOTS","DIGITAL STRATEGY"]},{id:"3",company:"Harmukh Technologies Pvt Ltd",role:"Software Engineer & SEO Executive",date:"July 2023 - Aug 2025",location:"On-Site",type:"Full-time",description:"Designed and developed responsive websites while improving digital presence through SEO execution and UI/UX enhancements for better conversions.",responsibilities:["Designed and developed responsive websites","Improved digital presence through SEO execution","Provided UI/UX enhancements for better conversions","Collaborated with cross-functional teams"],tags:["REACT","SEO","UI/UX","RESPONSIVE DESIGN","TEAM COLLABORATION"]}],about:"Software Engineer with 2+ years of experience in Software Development, SEO Optimization, and building scalable digital products. Skilled in creating high-performance web and apps using React.js, Next.js, TypeScript, React Native and modern UI frameworks.\n\nI specialize in full-stack development, focusing on creating responsive, SEO-optimized websites and applications that deliver exceptional user experiences. My expertise includes integrating APIs, Firebase services, and implementing modern UI patterns that drive conversions and engagement.\n\nActively seeking opportunities to contribute and innovate in a growth-focused environment. When I'm not coding, I work on personal projects, contribute to open-source initiatives, and stay updated with the latest web and app technologies and SEO best practices.\n\nEducation: B.Tech (Computer Science Engineering) — Government College of Engineering and Technology, Safapora, Ganderbal (GCET Kashmir).",contact:{headline:"Let's Build Something Together",description:"Open to collaboration on web and app development projects, SEO optimization, full-stack development opportunities, or consulting work. Let's build something amazing together."}},g7=()=>{let{personal:a,projects:b,experiences:c,about:d,contact:e}=g6;return(0,h.jsxs)("main",{children:[(0,h.jsx)(a5,{name:a.name}),(0,h.jsx)(bi,{title:a.title,headline:a.headline,description:a.description}),(0,h.jsx)(b$,{sectionNumber:"01",projects:b}),(0,h.jsx)(co,{sectionNumber:"02",experiences:c}),(0,h.jsx)(cO,{}),(0,h.jsx)(cD,{sectionNumber:"03",content:d}),(0,h.jsx)(gH,{sectionNumber:"04",headline:e.headline,description:e.description}),(0,h.jsx)(gS,{email:a.email,phone:a.phone,github:"https://github.com/umarnaxir",linkedin:"https://www.linkedin.com/in/umar-nazir19/"}),(0,h.jsx)(gX,{name:a.name}),(0,h.jsx)(g5,{})]})};function g8(){let[a,b]=(0,i.useState)(!0);return((0,i.useEffect)(()=>{let a=setTimeout(()=>{b(!1)},2e3);return()=>clearTimeout(a)},[]),a)?(0,h.jsx)(al,{}):(0,h.jsx)(g7,{})}a.s(["default",()=>g8],60350)}];

//# sourceMappingURL=_5c673e3d._.js.map