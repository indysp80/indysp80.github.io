(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[678],{8385:function(e,t,a){var n="Expected a function",r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt,d="object"==typeof a.g&&a.g&&a.g.Object===Object&&a.g,u="object"==typeof self&&self&&self.Object===Object&&self,l=d||u||Function("return this")(),f=Object.prototype.toString,p=Math.max,m=Math.min,g=function(){return l.Date.now()};function v(e,t,a){var r,i,o,c,s,d,u=0,l=!1,f=!1,v=!0;if("function"!=typeof e)throw new TypeError(n);function h(t){var a=r,n=i;return r=i=void 0,u=t,c=e.apply(n,a)}function y(e){return u=e,s=setTimeout(S,t),l?h(e):c}function x(e){var a=e-d;return void 0===d||a>=t||a<0||f&&e-u>=o}function S(){var e=g();if(x(e))return k(e);s=setTimeout(S,function(e){var a=t-(e-d);return f?m(a,o-(e-u)):a}(e))}function k(e){return s=void 0,v&&r?h(e):(r=i=void 0,c)}function C(){var e=g(),a=x(e);if(r=arguments,i=this,d=e,a){if(void 0===s)return y(d);if(f)return s=setTimeout(S,t),h(d)}return void 0===s&&(s=setTimeout(S,t)),c}return t=w(t)||0,b(a)&&(l=!!a.leading,o=(f="maxWait"in a)?p(w(a.maxWait)||0,t):o,v="trailing"in a?!!a.trailing:v),C.cancel=function(){void 0!==s&&clearTimeout(s),u=0,r=d=i=s=void 0},C.flush=function(){return void 0===s?c:k(g())},C}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function w(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==f.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var a=o.test(e);return a||c.test(e)?s(e.slice(2),a?2:8):i.test(e)?NaN:+e}e.exports=function(e,t,a){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(n);return b(a)&&(r="leading"in a?!!a.leading:r,i="trailing"in a?!!a.trailing:i),v(e,t,{leading:r,maxWait:t,trailing:i})}},3723:function(e,t,a){"use strict";a.d(t,{L:function(){return m},M:function(){return x},P:function(){return y},S:function(){return P},_:function(){return c},a:function(){return o},b:function(){return d},g:function(){return u},h:function(){return s}});var n=a(7294),r=(a(2369),a(5697)),i=a.n(r);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function c(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(a=i[n])>=0||(r[a]=e[a]);return r}var s=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function d(e,t,a,n,r){return void 0===r&&(r={}),o({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:o({},r,{opacity:t?1:0})})}function u(e,t,a,n,r,i,c,s){var d={};i&&(d.backgroundColor=i,"fixed"===a?(d.width=n,d.height=r,d.backgroundColor=i,d.position="relative"):("constrained"===a||"fullWidth"===a)&&(d.position="absolute",d.top=0,d.left=0,d.bottom=0,d.right=0)),c&&(d.objectFit=c),s&&(d.objectPosition=s);var u=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},d)});return u}var l,f=["children"],p=function(e){var t=e.layout,a=e.width,r=e.height;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+r+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(e){var t=e.children,a=c(e,f);return n.createElement(n.Fragment,null,n.createElement(p,o({},a)),t,null)},g=["src","srcSet","loading","alt","shouldLoad"],v=["fallback","sources","shouldLoad"],b=function(e){var t=e.src,a=e.srcSet,r=e.loading,i=e.alt,s=void 0===i?"":i,d=e.shouldLoad,u=c(e,g);return n.createElement("img",o({},u,{decoding:"async",loading:r,src:d?t:void 0,"data-src":d?void 0:t,srcSet:d?a:void 0,"data-srcset":d?void 0:a,alt:s}))},w=function(e){var t=e.fallback,a=e.sources,r=void 0===a?[]:a,i=e.shouldLoad,s=void 0===i||i,d=c(e,v),u=d.sizes||(null==t?void 0:t.sizes),l=n.createElement(b,o({},d,t,{sizes:u,shouldLoad:s}));return r.length?n.createElement("picture",null,r.map((function(e){var t=e.media,a=e.srcSet,r=e.type;return n.createElement("source",{key:t+"-"+r+"-"+a,type:r,media:t,srcSet:s?a:void 0,"data-srcset":s?void 0:a,sizes:u})})),l):l};b.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},w.displayName="Picture",w.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};var h=["fallback"],y=function(e){var t=e.fallback,a=c(e,h);return t?n.createElement(w,o({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",o({},a))};y.displayName="Placeholder",y.propTypes={fallback:r.string,sources:null==(l=w.propTypes)?void 0:l.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};var x=function(e){return n.createElement(n.Fragment,null,n.createElement(w,o({},e)),n.createElement("noscript",null,n.createElement(w,o({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=w.propTypes;var S,k,C=function(e,t,a){for(var n=arguments.length,r=new Array(n>3?n-3:0),o=3;o<n;o++)r[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(r)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},Z={image:i().object.isRequired,alt:C},E=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],M=["style","className"],N=new Set,O=function(e){var t=e.as,r=void 0===t?"div":t,i=e.image,d=e.style,u=e.backgroundColor,l=e.className,f=e.class,p=e.onStartLoad,m=e.onLoad,g=e.onError,v=c(e,E),b=i.width,w=i.height,h=i.layout,y=function(e,t,a){var n={},r="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:n}}(b,w,h),x=y.style,C=y.className,Z=c(y,M),O=(0,n.useRef)(),_=(0,n.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);f&&(l=f);var L=function(e,t,a){var n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(h,b,w);return(0,n.useEffect)((function(){S||(S=Promise.all([a.e(774),a.e(217)]).then(a.bind(a,9217)).then((function(e){var t=e.renderImageToString,a=e.swapPlaceholderImage;return k=t,{renderImageToString:t,swapPlaceholderImage:a}})));var e,t,n=O.current.querySelector("[data-gatsby-image-ssr]");return n&&s()?(n.complete?(null==p||p({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),n.addEventListener("load",(function e(){n.removeEventListener("load",e),null==m||m({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)}))),void N.add(_)):k&&N.has(_)?void 0:(S.then((function(a){var n=a.renderImageToString,r=a.swapPlaceholderImage;O.current&&(O.current.innerHTML=n(o({isLoading:!0,isLoaded:N.has(_),image:i},v)),N.has(_)||(e=requestAnimationFrame((function(){O.current&&(t=r(O.current,_,N,d,p,m,g))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,n.useLayoutEffect)((function(){N.has(_)&&k&&(O.current.innerHTML=k(o({isLoading:N.has(_),isLoaded:N.has(_),image:i},v)),null==p||p({wasCached:!0}),null==m||m({wasCached:!0}))}),[i]),(0,n.createElement)(r,o({},Z,{style:o({},x,d,{backgroundColor:u}),className:C+(l?" "+l:""),ref:O,dangerouslySetInnerHTML:{__html:L},suppressHydrationWarning:!0}))},_=(0,n.memo)((function(e){return e.image?(0,n.createElement)(O,e):null}));_.propTypes=Z,_.displayName="GatsbyImage";var L,T=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],R=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},z=new Set(["fixed","fullWidth","constrained"]),j={src:i().string.isRequired,alt:C,width:R,height:R,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!z.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},P=(L=_,function(e){var t=e.src,a=e.__imageData,r=e.__error,i=c(e,T);return r&&console.warn(r),a?n.createElement(L,o({image:a},i)):(console.warn("Image not loaded",t),null)});P.displayName="StaticImage",P.propTypes=j},2369:function(e){"use strict";var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var a;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,a=!1,n=!1,r=0;r<e.length;r++){var i=e[r];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,r)+"-"+e.slice(r),t=!1,n=a,a=!0,r++):a&&n&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,r-1)+"-"+e.slice(r-1),n=a,a=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,n=a,a=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a)};e.exports=t,e.exports.default=t},4228:function(e,t,a){"use strict";a.r(t),a.d(t,{Head:function(){return ge},default:function(){return ve}});var n=a(7294),r=a(3723),i=a(9122),o=a(7075),c=a(7462),s=a(3366),d=a(5505),u=a(9236),l=a(8379),f=a(6981),p=a(7663),m=a(8400),g=a(9508);function v(e){return(0,m.Z)("MuiPaper",e)}(0,g.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var b=a(5893),w=["className","component","elevation","square","variant"],h=function(e){return((e<1?5.11916*Math.pow(e,2):4.5*Math.log(e+1)+2)/100).toFixed(2)},y=(0,l.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,t[a.variant],!a.square&&t.rounded,"elevation"===a.variant&&t["elevation".concat(a.elevation)]]}})((function(e){var t,a=e.theme,n=e.ownerState;return(0,c.Z)({backgroundColor:(a.vars||a).palette.background.paper,color:(a.vars||a).palette.text.primary,transition:a.transitions.create("box-shadow")},!n.square&&{borderRadius:a.shape.borderRadius},"outlined"===n.variant&&{border:"1px solid ".concat((a.vars||a).palette.divider)},"elevation"===n.variant&&(0,c.Z)({boxShadow:(a.vars||a).shadows[n.elevation]},!a.vars&&"dark"===a.palette.mode&&{backgroundImage:"linear-gradient(".concat((0,p.Fq)("#fff",h(n.elevation)),", ").concat((0,p.Fq)("#fff",h(n.elevation)),")")},a.vars&&{backgroundImage:null==(t=a.vars.overlays)?void 0:t[n.elevation]}))})),x=n.forwardRef((function(e,t){var a=(0,f.Z)({props:e,name:"MuiPaper"}),n=a.className,r=a.component,i=void 0===r?"div":r,o=a.elevation,l=void 0===o?1:o,p=a.square,m=void 0!==p&&p,g=a.variant,h=void 0===g?"elevation":g,x=(0,s.Z)(a,w),S=(0,c.Z)({},a,{component:i,elevation:l,square:m,variant:h}),k=function(e){var t=e.square,a=e.elevation,n=e.variant,r=e.classes,i={root:["root",n,!t&&"rounded","elevation"===n&&"elevation".concat(a)]};return(0,u.Z)(i,v,r)}(S);return(0,b.jsx)(y,(0,c.Z)({as:i,ownerState:S,className:(0,d.Z)(k.root,n),ref:t},x))}));function S(e){return(0,m.Z)("MuiCard",e)}(0,g.Z)("MuiCard",["root"]);var k=["className","raised"],C=(0,l.ZP)(x,{name:"MuiCard",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{overflow:"hidden"}})),Z=n.forwardRef((function(e,t){var a=(0,f.Z)({props:e,name:"MuiCard"}),n=a.className,r=a.raised,i=void 0!==r&&r,o=(0,s.Z)(a,k),l=(0,c.Z)({},a,{raised:i}),p=function(e){var t=e.classes;return(0,u.Z)({root:["root"]},S,t)}(l);return(0,b.jsx)(C,(0,c.Z)({className:(0,d.Z)(p.root,n),elevation:i?8:void 0,ref:t,ownerState:l},o))}));function E(e){return(0,m.Z)("MuiCardMedia",e)}(0,g.Z)("MuiCardMedia",["root","media","img"]);var M=["children","className","component","image","src","style"],N=(0,l.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState,n=a.isMediaComponent,r=a.isImageComponent;return[t.root,n&&t.media,r&&t.img]}})((function(e){var t=e.ownerState;return(0,c.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},t.isMediaComponent&&{width:"100%"},t.isImageComponent&&{objectFit:"cover"})})),O=["video","audio","picture","iframe","img"],_=["picture","img"],L=n.forwardRef((function(e,t){var a=(0,f.Z)({props:e,name:"MuiCardMedia"}),n=a.children,r=a.className,i=a.component,o=void 0===i?"div":i,l=a.image,p=a.src,m=a.style,g=(0,s.Z)(a,M),v=-1!==O.indexOf(o),w=!v&&l?(0,c.Z)({backgroundImage:'url("'.concat(l,'")')},m):m,h=(0,c.Z)({},a,{component:o,isMediaComponent:v,isImageComponent:-1!==_.indexOf(o)}),y=function(e){var t=e.classes,a={root:["root",e.isMediaComponent&&"media",e.isImageComponent&&"img"]};return(0,u.Z)(a,E,t)}(h);return(0,b.jsx)(N,(0,c.Z)({className:(0,d.Z)(y.root,r),as:o,role:!v&&l?"img":void 0,ref:t,style:w,ownerState:h,src:v?l||p:void 0},g,{children:n}))}));function T(e){return(0,m.Z)("MuiCardContent",e)}(0,g.Z)("MuiCardContent",["root"]);var R=["className","component"],z=(0,l.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),j=n.forwardRef((function(e,t){var a=(0,f.Z)({props:e,name:"MuiCardContent"}),n=a.className,r=a.component,i=void 0===r?"div":r,o=(0,s.Z)(a,R),l=(0,c.Z)({},a,{component:i}),p=function(e){var t=e.classes;return(0,u.Z)({root:["root"]},T,t)}(l);return(0,b.jsx)(z,(0,c.Z)({as:i,className:(0,d.Z)(p.root,n),ownerState:l,ref:t},o))}));function P(e){return(0,m.Z)("MuiCardActions",e)}(0,g.Z)("MuiCardActions",["root","spacing"]);var I=["disableSpacing","className"],W=(0,l.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,!a.disableSpacing&&t.spacing]}})((function(e){var t=e.ownerState;return(0,c.Z)({display:"flex",alignItems:"center",padding:8},!t.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),q=n.forwardRef((function(e,t){var a=(0,f.Z)({props:e,name:"MuiCardActions"}),n=a.disableSpacing,r=void 0!==n&&n,i=a.className,o=(0,s.Z)(a,I),l=(0,c.Z)({},a,{disableSpacing:r}),p=function(e){var t=e.classes,a={root:["root",!e.disableSpacing&&"spacing"]};return(0,u.Z)(a,P,t)}(l);return(0,b.jsx)(W,(0,c.Z)({className:(0,d.Z)(p.root,i),ownerState:l,ref:t},o))})),A=function(e){var t=e.data;return n.createElement(Z,{variant:"none",className:"box-infomaniak"},n.createElement(L,{height:"200",alt:"bg"},n.createElement(r.S,{alt:"yeah okay",src:"../images/background.png",__imageData:a(5106)}),n.createElement("div",{className:"box-infomaniak__image"},t.image)),n.createElement(j,{className:"box-infomaniak__content",style:{padding:40}},t.icon,n.createElement("h2",null,t.title),n.createElement("p",null,t.content),n.createElement(i.Link,{className:"pink",to:"/"},n.createElement(i.FormattedMessage,{id:"read_more"})),n.createElement(r.S,{className:"box-infomaniak__arrow",alt:"yeah okay",src:"../images/icons/arrow.svg",__imageData:a(8144)})),n.createElement(q,null))},D=a(9357),H=a(2982),F=a(4942),V=a(2692),G=a(6486),$=a(1579),J=["sx"];function U(e){var t,a=e.sx,n=function(e){var t={systemProps:{},otherProps:{}};return Object.keys(e).forEach((function(a){$.Gc[a]?t.systemProps[a]=e[a]:t.otherProps[a]=e[a]})),t}((0,s.Z)(e,J)),r=n.systemProps,i=n.otherProps;return t=Array.isArray(a)?[r].concat((0,H.Z)(a)):"function"==typeof a?function(){var e=a.apply(void 0,arguments);return(0,G.P)(e)?(0,c.Z)({},r,e):r}:(0,c.Z)({},r,a),(0,c.Z)({},i,{sx:t})}var B=a(7120),Y=a(2251);var K=n.createContext();function Q(e){return(0,m.Z)("MuiGrid",e)}var X=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],ee=(0,g.Z)("MuiGrid",["root","container","item","zeroMinWidth"].concat((0,H.Z)([0,1,2,3,4,5,6,7,8,9,10].map((function(e){return"spacing-xs-".concat(e)}))),(0,H.Z)(["column-reverse","column","row-reverse","row"].map((function(e){return"direction-xs-".concat(e)}))),(0,H.Z)(["nowrap","wrap-reverse","wrap"].map((function(e){return"wrap-xs-".concat(e)}))),(0,H.Z)(X.map((function(e){return"grid-xs-".concat(e)}))),(0,H.Z)(X.map((function(e){return"grid-sm-".concat(e)}))),(0,H.Z)(X.map((function(e){return"grid-md-".concat(e)}))),(0,H.Z)(X.map((function(e){return"grid-lg-".concat(e)}))),(0,H.Z)(X.map((function(e){return"grid-xl-".concat(e)}))))),te=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function ae(e){var t=parseFloat(e);return"".concat(t).concat(String(e).replace(String(t),"")||"px")}function ne(e){var t=e.breakpoints,a=e.values,n="";Object.keys(a).forEach((function(e){""===n&&0!==a[e]&&(n=e)}));var r=Object.keys(t).sort((function(e,a){return t[e]-t[a]}));return r.slice(0,r.indexOf(n))}var re=(0,l.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState,n=a.container,r=a.direction,i=a.item,o=a.spacing,c=a.wrap,s=a.zeroMinWidth,d=a.breakpoints,u=[];n&&(u=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[a["spacing-xs-".concat(String(e))]];var n=[];return t.forEach((function(t){var r=e[t];Number(r)>0&&n.push(a["spacing-".concat(t,"-").concat(String(r))])})),n}(o,d,t));var l=[];return d.forEach((function(e){var n=a[e];n&&l.push(t["grid-".concat(e,"-").concat(String(n))])})),[t.root,n&&t.container,i&&t.item,s&&t.zeroMinWidth].concat((0,H.Z)(u),["row"!==r&&t["direction-xs-".concat(String(r))],"wrap"!==c&&t["wrap-xs-".concat(String(c))]],l)}})((function(e){var t=e.ownerState;return(0,c.Z)({boxSizing:"border-box"},t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},t.item&&{margin:0},t.zeroMinWidth&&{minWidth:0},"wrap"!==t.wrap&&{flexWrap:t.wrap})}),(function(e){var t=e.theme,a=e.ownerState,n=(0,V.P$)({values:a.direction,breakpoints:t.breakpoints.values});return(0,V.k9)({theme:t},n,(function(e){var t={flexDirection:e};return 0===e.indexOf("column")&&(t["& > .".concat(ee.item)]={maxWidth:"none"}),t}))}),(function(e){var t=e.theme,a=e.ownerState,n=a.container,r=a.rowSpacing,i={};if(n&&0!==r){var o,c=(0,V.P$)({values:r,breakpoints:t.breakpoints.values});"object"==typeof c&&(o=ne({breakpoints:t.breakpoints.values,values:c})),i=(0,V.k9)({theme:t},c,(function(e,a){var n,r=t.spacing(e);return"0px"!==r?(0,F.Z)({marginTop:"-".concat(ae(r))},"& > .".concat(ee.item),{paddingTop:ae(r)}):null!=(n=o)&&n.includes(a)?{}:(0,F.Z)({marginTop:0},"& > .".concat(ee.item),{paddingTop:0})}))}return i}),(function(e){var t=e.theme,a=e.ownerState,n=a.container,r=a.columnSpacing,i={};if(n&&0!==r){var o,c=(0,V.P$)({values:r,breakpoints:t.breakpoints.values});"object"==typeof c&&(o=ne({breakpoints:t.breakpoints.values,values:c})),i=(0,V.k9)({theme:t},c,(function(e,a){var n,r=t.spacing(e);return"0px"!==r?(0,F.Z)({width:"calc(100% + ".concat(ae(r),")"),marginLeft:"-".concat(ae(r))},"& > .".concat(ee.item),{paddingLeft:ae(r)}):null!=(n=o)&&n.includes(a)?{}:(0,F.Z)({width:"100%",marginLeft:0},"& > .".concat(ee.item),{paddingLeft:0})}))}return i}),(function(e){var t,a=e.theme,n=e.ownerState;return a.breakpoints.keys.reduce((function(e,r){var i={};if(n[r]&&(t=n[r]),!t)return e;if(!0===t)i={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===t)i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var o=(0,V.P$)({values:n.columns,breakpoints:a.breakpoints.values}),s="object"==typeof o?o[r]:o;if(null==s)return e;var d="".concat(Math.round(t/s*1e8)/1e6,"%"),u={};if(n.container&&n.item&&0!==n.columnSpacing){var l=a.spacing(n.columnSpacing);if("0px"!==l){var f="calc(".concat(d," + ").concat(ae(l),")");u={flexBasis:f,maxWidth:f}}}i=(0,c.Z)({flexBasis:d,flexGrow:0,maxWidth:d},u)}return 0===a.breakpoints.values[r]?Object.assign(e,i):e[a.breakpoints.up(r)]=i,e}),{})}));var ie=function(e){var t=e.classes,a=e.container,n=e.direction,r=e.item,i=e.spacing,o=e.wrap,c=e.zeroMinWidth,s=e.breakpoints,d=[];a&&(d=function(e,t){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return["spacing-xs-".concat(String(e))];var a=[];return t.forEach((function(t){var n=e[t];if(Number(n)>0){var r="spacing-".concat(t,"-").concat(String(n));a.push(r)}})),a}(i,s));var l=[];s.forEach((function(t){var a=e[t];a&&l.push("grid-".concat(t,"-").concat(String(a)))}));var f={root:["root",a&&"container",r&&"item",c&&"zeroMinWidth"].concat((0,H.Z)(d),["row"!==n&&"direction-xs-".concat(String(n)),"wrap"!==o&&"wrap-xs-".concat(String(o))],l)};return(0,u.Z)(f,Q,t)},oe=n.forwardRef((function(e,t){var a=(0,f.Z)({props:e,name:"MuiGrid"}),r=(0,B.Z)(Y.Z).breakpoints,i=U(a),o=i.className,u=i.columns,l=i.columnSpacing,p=i.component,m=void 0===p?"div":p,g=i.container,v=void 0!==g&&g,w=i.direction,h=void 0===w?"row":w,y=i.item,x=void 0!==y&&y,S=i.rowSpacing,k=i.spacing,C=void 0===k?0:k,Z=i.wrap,E=void 0===Z?"wrap":Z,M=i.zeroMinWidth,N=void 0!==M&&M,O=(0,s.Z)(i,te),_=S||C,L=l||C,T=n.useContext(K),R=v?u||12:T,z={},j=(0,c.Z)({},O);r.keys.forEach((function(e){null!=O[e]&&(z[e]=O[e],delete j[e])}));var P=(0,c.Z)({},i,{columns:R,container:v,direction:h,item:x,rowSpacing:_,columnSpacing:L,wrap:E,zeroMinWidth:N,spacing:C},z,{breakpoints:r.keys}),I=ie(P);return(0,b.jsx)(K.Provider,{value:R,children:(0,b.jsx)(re,(0,c.Z)({ownerState:P,className:(0,d.Z)(I.root,o),as:m,ref:t},j))})})),ce=oe,se=a(885),de=a(8385),ue=a.n(de),le="animate__animated",fe="undefined"==typeof window,pe=void 0;fe||(pe=window);var me=function(e){var t=e.offset,a=void 0===t?150:t,r=e.duration,i=void 0===r?1:r,o=e.style,c=e.className,s=e.initiallyVisible,d=void 0!==s&&s,u=e.animateIn,l=e.afterAnimatedIn,f=e.animateOut,p=e.delay,m=void 0===p?0:p,g=e.animatePreScroll,v=void 0===g||g,b=e.afterAnimatedOut,w=e.scrollableParentSelector,h=e.animateOnce,y=void 0!==h&&h,x=e.children,S=(0,n.useState)(le),k=(0,se.Z)(S,2),C=k[0],Z=k[1],E=(0,n.useState)({animationDuration:"".concat(i,"s"),opacity:d?1:0}),M=(0,se.Z)(E,2),N=M[0],O=M[1],_=(0,n.useRef)(null),L=(0,n.useRef)(!1),T=(0,n.useRef)({onScreen:!1,inViewport:!1}),R=(0,n.useRef)(void 0),z=(0,n.useRef)(void 0),j=(0,n.useRef)(pe),P=(0,n.useCallback)((function(e){for(var t=0;e&&void 0!==e.offsetTop&&void 0!==e.clientTop;)t+=e.offsetTop+e.clientTop,e=e.offsetParent;return t}),[]),I=(0,n.useCallback)((function(){return void 0!==j.current.pageYOffset?j.current.pageYOffset:j.current.scrollTop}),[j]),W=(0,n.useCallback)((function(){return void 0!==j.current.innerHeight?j.current.innerHeight:j.current.clientHeight}),[j]),q=(0,n.useCallback)((function(){return I()+a}),[a,I]),A=(0,n.useCallback)((function(){return I()+W()-a}),[a,I,W]),D=(0,n.useCallback)((function(e){return e>=q()&&e<=A()}),[q,A]),H=(0,n.useCallback)((function(e){return e<q()}),[q]),F=(0,n.useCallback)((function(e){return e>A()}),[A]),V=(0,n.useCallback)((function(e,t){return D(e)||D(t)||H(e)&&F(t)}),[D,H,F]),G=(0,n.useCallback)((function(e){return e<I()}),[I]),$=(0,n.useCallback)((function(e){return e>I()+W()}),[I,W]),J=(0,n.useCallback)((function(e,t){return!G(t)&&!$(e)}),[G,$]),U=(0,n.useCallback)((function(){var e=P(_.current)-P(j.current),t=e+_.current.clientHeight;return{inViewport:V(e,t),onScreen:J(e,t)}}),[P,_,V,J,j]),B=(0,n.useCallback)((function(e,t){return e.inViewport!==t.inViewport||e.onScreen!==t.onScreen}),[]),Y=(0,n.useCallback)((function(e,t){R.current=setTimeout((function(){L.current=!0,Z("".concat(le," ").concat(e)),O({animationDuration:"".concat(i,"s")}),z.current=setTimeout(t,1e3*i)}),m)}),[L,m,i]),K=(0,n.useCallback)((function(e){Y(u,(function(){y||(O({animationDuration:"".concat(i,"s"),opacity:1}),L.current=!1);var t=U();e&&e(t)}))}),[L,u,y,i,Y,U]),Q=(0,n.useCallback)((function(e){Y(f,(function(){Z(le),O({animationDuration:"".concat(i,"s"),opacity:0});var t=U();t.inViewport&&u?K(l):L.current=!1,e&&e(t)}))}),[L,Y,u,i,l,K,f,U]),X=(0,n.useCallback)((function(){if(!L.current){var e=T.current,t=U();B(e,t)&&(clearTimeout(R.current),t.onScreen?t.inViewport&&u?K(l):t.onScreen&&e.inViewport&&f&&"1"===_.current.style.opacity&&Q(b):(Z(le),O({animationDuration:"".concat(i,"s"),opacity:d?1:0})),T.current=t)}}),[l,b,u,K,f,i,d,B,Q,U]),ee=(0,n.useMemo)((function(){return ue()((function(){X()}),50)}),[X]);return(0,n.useEffect)((function(){if(!fe){var e=w;return j.current=e?document.querySelector(e):window,j.current&&j.current.addEventListener?j.current.addEventListener("scroll",ee):console.warn("Cannot find element by locator: ".concat(w)),v&&X(),function(){clearTimeout(R.current),clearTimeout(z.current),window&&window.removeEventListener&&window.removeEventListener("scroll",ee)}}}),[X,w,j,ee,v]),n.createElement("div",{ref:_,className:c?"".concat(c," ").concat(C):C,style:Object.assign({},N,o)},x)},ge=function(){return n.createElement(D.Z,{title:"Home"})},ve=function(e){e.serverData;var t=(0,i.useIntl)(),c=[{title:t.formatMessage({id:"card.user.title"}),content:t.formatMessage({id:"card.user.content"}),icon:n.createElement(r.S,{alt:"user",src:"../images/icons/user.svg",__imageData:a(6465)}),image:n.createElement(r.S,{alt:"calendar",src:"../images/users.svg",__imageData:a(2979)})},{title:t.formatMessage({id:"card.team.title"}),content:t.formatMessage({id:"card.team.content"}),icon:n.createElement(r.S,{alt:"team",src:"../images/icons/manage.svg",__imageData:a(1314)}),image:n.createElement(r.S,{alt:"calendar",src:"../images/team.svg",__imageData:a(5133)})},{title:t.formatMessage({id:"card.calendar.title"}),content:t.formatMessage({id:"card.calendar.content"}),icon:n.createElement(r.S,{alt:"calendar",src:"../images/icons/calendar.svg",__imageData:a(8330)}),image:n.createElement(r.S,{alt:"calendar",src:"../images/calendar.svg",__imageData:a(8060)})}];return n.createElement(o.Z,null,n.createElement(D.Z,{title:"Home"}),n.createElement("div",null,n.createElement("h1",{dangerouslySetInnerHTML:{__html:t.formatMessage({id:"title"})}}),n.createElement(ce,{container:!0},c.map((function(e,t){return n.createElement(ce,{key:t,item:!0,md:4,xs:12,p:2},n.createElement(me,{animateIn:"animate__bounceIn"},n.createElement(A,{data:e})))})))))}},6465:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/43d8575c9d2e936669176041edcb64ef/bfcab/user.svg","srcSet":"/static/43d8575c9d2e936669176041edcb64ef/d77ca/user.svg 10w,\\n/static/43d8575c9d2e936669176041edcb64ef/83df1/user.svg 20w,\\n/static/43d8575c9d2e936669176041edcb64ef/bfcab/user.svg 40w","sizes":"(min-width: 40px) 40px, 100vw"},"sources":[{"srcSet":"/static/43d8575c9d2e936669176041edcb64ef/bd5c1/user.webp 10w,\\n/static/43d8575c9d2e936669176041edcb64ef/264f2/user.webp 20w,\\n/static/43d8575c9d2e936669176041edcb64ef/e73fe/user.webp 40w","type":"image/webp","sizes":"(min-width: 40px) 40px, 100vw"}]},"width":40,"height":40}')},5133:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/14b779d5639de64fc22bb7310854deef/5ed85/team.svg","srcSet":"/static/14b779d5639de64fc22bb7310854deef/61a4c/team.svg 58w,\\n/static/14b779d5639de64fc22bb7310854deef/bebd9/team.svg 116w,\\n/static/14b779d5639de64fc22bb7310854deef/5ed85/team.svg 231w","sizes":"(min-width: 231px) 231px, 100vw"},"sources":[{"srcSet":"/static/14b779d5639de64fc22bb7310854deef/30add/team.webp 58w,\\n/static/14b779d5639de64fc22bb7310854deef/7db29/team.webp 116w,\\n/static/14b779d5639de64fc22bb7310854deef/1de70/team.webp 231w","type":"image/webp","sizes":"(min-width: 231px) 231px, 100vw"}]},"width":231,"height":130}')},8060:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/39e02768ed86f010afca2103e0e84d0e/9f38d/calendar.svg","srcSet":"/static/39e02768ed86f010afca2103e0e84d0e/a6a86/calendar.svg 54w,\\n/static/39e02768ed86f010afca2103e0e84d0e/4f28d/calendar.svg 108w,\\n/static/39e02768ed86f010afca2103e0e84d0e/9f38d/calendar.svg 215w","sizes":"(min-width: 215px) 215px, 100vw"},"sources":[{"srcSet":"/static/39e02768ed86f010afca2103e0e84d0e/3de2e/calendar.webp 54w,\\n/static/39e02768ed86f010afca2103e0e84d0e/46d31/calendar.webp 108w,\\n/static/39e02768ed86f010afca2103e0e84d0e/b5936/calendar.webp 215w","type":"image/webp","sizes":"(min-width: 215px) 215px, 100vw"}]},"width":215,"height":192}')},8330:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/74e5d84c950c7c86524d9f78dc07d5d8/bfcab/calendar.svg","srcSet":"/static/74e5d84c950c7c86524d9f78dc07d5d8/d77ca/calendar.svg 10w,\\n/static/74e5d84c950c7c86524d9f78dc07d5d8/83df1/calendar.svg 20w,\\n/static/74e5d84c950c7c86524d9f78dc07d5d8/bfcab/calendar.svg 40w","sizes":"(min-width: 40px) 40px, 100vw"},"sources":[{"srcSet":"/static/74e5d84c950c7c86524d9f78dc07d5d8/bd5c1/calendar.webp 10w,\\n/static/74e5d84c950c7c86524d9f78dc07d5d8/264f2/calendar.webp 20w,\\n/static/74e5d84c950c7c86524d9f78dc07d5d8/e73fe/calendar.webp 40w","type":"image/webp","sizes":"(min-width: 40px) 40px, 100vw"}]},"width":40,"height":40}')},8144:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/aa666cb0d290091a5351a7bc0e5935c6/47e84/arrow.svg","srcSet":"/static/aa666cb0d290091a5351a7bc0e5935c6/bc6c5/arrow.svg 4w,\\n/static/aa666cb0d290091a5351a7bc0e5935c6/4da7d/arrow.svg 7w,\\n/static/aa666cb0d290091a5351a7bc0e5935c6/47e84/arrow.svg 14w","sizes":"(min-width: 14px) 14px, 100vw"},"sources":[{"srcSet":"/static/aa666cb0d290091a5351a7bc0e5935c6/c3fea/arrow.webp 4w,\\n/static/aa666cb0d290091a5351a7bc0e5935c6/cfa5d/arrow.webp 7w,\\n/static/aa666cb0d290091a5351a7bc0e5935c6/6412b/arrow.webp 14w","type":"image/webp","sizes":"(min-width: 14px) 14px, 100vw"}]},"width":14,"height":14}')},1314:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/133340e2b54690ba5e2ca2d4a5b1d5bb/bfcab/manage.svg","srcSet":"/static/133340e2b54690ba5e2ca2d4a5b1d5bb/d77ca/manage.svg 10w,\\n/static/133340e2b54690ba5e2ca2d4a5b1d5bb/83df1/manage.svg 20w,\\n/static/133340e2b54690ba5e2ca2d4a5b1d5bb/bfcab/manage.svg 40w","sizes":"(min-width: 40px) 40px, 100vw"},"sources":[{"srcSet":"/static/133340e2b54690ba5e2ca2d4a5b1d5bb/bd5c1/manage.webp 10w,\\n/static/133340e2b54690ba5e2ca2d4a5b1d5bb/264f2/manage.webp 20w,\\n/static/133340e2b54690ba5e2ca2d4a5b1d5bb/e73fe/manage.webp 40w","type":"image/webp","sizes":"(min-width: 40px) 40px, 100vw"}]},"width":40,"height":40}')},5106:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#e848b8","images":{"fallback":{"src":"/static/cf6412eccae14ae61790e1378d2b4c6a/6d3b5/background.png","srcSet":"/static/cf6412eccae14ae61790e1378d2b4c6a/a159a/background.png 247w,\\n/static/cf6412eccae14ae61790e1378d2b4c6a/0f937/background.png 495w,\\n/static/cf6412eccae14ae61790e1378d2b4c6a/6d3b5/background.png 989w","sizes":"(min-width: 989px) 989px, 100vw"},"sources":[{"srcSet":"/static/cf6412eccae14ae61790e1378d2b4c6a/2d31a/background.webp 247w,\\n/static/cf6412eccae14ae61790e1378d2b4c6a/1dff9/background.webp 495w,\\n/static/cf6412eccae14ae61790e1378d2b4c6a/576dc/background.webp 989w","type":"image/webp","sizes":"(min-width: 989px) 989px, 100vw"}]},"width":989,"height":557}')},2979:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/e9d31489fb634fb503d6ad06a4caff69/f6b29/users.svg","srcSet":"/static/e9d31489fb634fb503d6ad06a4caff69/dfa5c/users.svg 73w,\\n/static/e9d31489fb634fb503d6ad06a4caff69/16b37/users.svg 145w,\\n/static/e9d31489fb634fb503d6ad06a4caff69/f6b29/users.svg 290w","sizes":"(min-width: 290px) 290px, 100vw"},"sources":[{"srcSet":"/static/e9d31489fb634fb503d6ad06a4caff69/557f5/users.webp 73w,\\n/static/e9d31489fb634fb503d6ad06a4caff69/5e240/users.webp 145w,\\n/static/e9d31489fb634fb503d6ad06a4caff69/94b14/users.webp 290w","type":"image/webp","sizes":"(min-width: 290px) 290px, 100vw"}]},"width":290,"height":154}')}}]);
//# sourceMappingURL=component---src-pages-index-js-3a1589af316ebb8513f9.js.map