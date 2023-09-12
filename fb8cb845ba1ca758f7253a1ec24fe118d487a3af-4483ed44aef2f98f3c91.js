"use strict";(self.webpackChunkcareerquests=self.webpackChunkcareerquests||[]).push([[487],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,s=/[_.\- ]+/,l=new RegExp("^"+s.source),o=new RegExp(s.source+n.source,"gu"),i=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const s=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):s(e);return e!==s(e)&&(e=((e,r,n)=>{let s=!1,l=!1,o=!1;for(let i=0;i<e.length;i++){const c=e[i];s&&t.test(c)?(e=e.slice(0,i)+"-"+e.slice(i),s=!1,o=l,l=!0,i++):l&&o&&a.test(c)?(e=e.slice(0,i-1)+"-"+e.slice(i-1),o=l,l=!1,s=!0):(s=r(c)===c&&n(c)!==c,o=l,l=n(c)===c&&r(c)!==c)}return e})(e,s,c)),e=e.replace(l,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,s):s(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(o.lastIndex=0,i.lastIndex=0,e.replace(o,((e,a)=>t(a))).replace(i,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{G:function(){return O},L:function(){return h},M:function(){return k},P:function(){return x},_:function(){return o},a:function(){return l},b:function(){return d},c:function(){return c},g:function(){return m},h:function(){return i}});var r=a(7294),n=(a(3204),a(5697)),s=a.n(n);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t.indexOf(a=s[r])>=0||(n[a]=e[a]);return n}const i=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const c=e=>{var t;return(e=>{var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function u(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function d(e,t,a,r,n){return void 0===n&&(n={}),l({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:l({},n,{opacity:t?1:0})})}function m(e,t,a,r,n,s,o,i){const c={};s&&(c.backgroundColor=s,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=s,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),i&&(c.objectPosition=i);const u=l({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:l({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const p=["children"],g=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},h=function(e){let{children:t}=e,a=o(e,p);return r.createElement(r.Fragment,null,r.createElement(g,l({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],y=["fallback","sources","shouldLoad"],v=function(e){let{src:t,srcSet:a,loading:n,alt:s="",shouldLoad:i}=e,c=o(e,f);return r.createElement("img",l({},c,{decoding:"async",loading:n,src:i?t:void 0,"data-src":i?void 0:t,srcSet:i?a:void 0,"data-srcset":i?void 0:a,alt:s}))},b=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,s=o(e,y);const i=s.sizes||(null==t?void 0:t.sizes),c=r.createElement(v,l({},s,t,{sizes:i,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return r.createElement("source",{key:t+"-"+s+"-"+a,type:s,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:i})})),c):c};var w;v.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},b.displayName="Picture",b.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const E=["fallback"],x=function(e){let{fallback:t}=e,a=o(e,E);return t?r.createElement(b,l({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",l({},a))};x.displayName="Placeholder",x.propTypes={fallback:n.string,sources:null==(w=b.propTypes)?void 0:w.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const k=function(e){return r.createElement(r.Fragment,null,r.createElement(b,l({},e)),r.createElement("noscript",null,r.createElement(b,l({},e,{shouldLoad:!0}))))};k.displayName="MainImage",k.propTypes=b.propTypes;const L=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],N=["style","className"],C=e=>e.replace(/\n/g,""),S=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),l=3;l<r;l++)n[l-3]=arguments[l];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},I={image:s().object.isRequired,alt:S},j=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],T=["style","className"],A=new Set;let M,R;const q=function(e){let{as:t="div",image:n,style:s,backgroundColor:c,className:d,class:m,onStartLoad:p,onLoad:g,onError:h}=e,f=o(e,j);const{width:y,height:v,layout:b}=n,w=u(y,v,b),{style:E,className:x}=w,k=o(w,T),L=(0,r.useRef)(),N=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);m&&(d=m);const C=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(b,y,v);return(0,r.useEffect)((()=>{M||(M=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return R=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=L.current.querySelector("[data-gatsby-image-ssr]");if(e&&i())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void A.add(N);if(R&&A.has(N))return;let t,r;return M.then((e=>{let{renderImageToString:a,swapPlaceholderImage:o}=e;L.current&&(L.current.innerHTML=a(l({isLoading:!0,isLoaded:A.has(N),image:n},f)),A.has(N)||(t=requestAnimationFrame((()=>{L.current&&(r=o(L.current,N,A,s,p,g,h))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{A.has(N)&&R&&(L.current.innerHTML=R(l({isLoading:A.has(N),isLoaded:A.has(N),image:n},f)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[n]),(0,r.createElement)(t,l({},k,{style:l({},E,s,{backgroundColor:c}),className:x+(d?" "+d:""),ref:L,dangerouslySetInnerHTML:{__html:C},suppressHydrationWarning:!0}))},O=(0,r.memo)((function(e){return e.image?(0,r.createElement)(q,e):null}));O.propTypes=I,O.displayName="GatsbyImage";const W=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function _(e){return function(t){let{src:a,__imageData:n,__error:s}=t,i=o(t,W);return s&&console.warn(s),n?r.createElement(e,l({image:n},i)):(console.warn("Image not loaded",a),null)}}const z=_((function(e){let{as:t="div",className:a,class:n,style:s,image:i,loading:c="lazy",imgClassName:p,imgStyle:g,backgroundColor:f,objectFit:y,objectPosition:v}=e,b=o(e,L);if(!i)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),g=l({objectFit:y,objectPosition:v,backgroundColor:f},g);const{width:w,height:E,layout:S,images:I,placeholder:j,backgroundColor:T}=i,A=u(w,E,S),{style:M,className:R}=A,q=o(A,N),O={fallback:void 0,sources:[]};return I.fallback&&(O.fallback=l({},I.fallback,{srcSet:I.fallback.srcSet?C(I.fallback.srcSet):void 0})),I.sources&&(O.sources=I.sources.map((e=>l({},e,{srcSet:C(e.srcSet)})))),r.createElement(t,l({},q,{style:l({},M,s,{backgroundColor:f}),className:R+(a?" "+a:"")}),r.createElement(h,{layout:S,width:w,height:E},r.createElement(x,l({},m(j,!1,S,w,E,T,y,v))),r.createElement(k,l({"data-gatsby-image-ssr":"",className:p},b,d("eager"===c,!1,O,c,g)))))})),P=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},H=new Set(["fixed","fullWidth","constrained"]),V={src:s().string.isRequired,alt:S,width:P,height:P,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!H.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};z.displayName="StaticImage",z.propTypes=V;const B=_(O);B.displayName="StaticImage",B.propTypes=V},1977:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(7294);var n=function(){return r.createElement("footer",{className:"fixed bottom-0 bg-white w-screen p-4 drop-shadow-[0px_-3px_4px_rgba(255,255,255,1)]"},r.createElement("div",{className:"text-center"},r.createElement("p",null,"Copyright © 2023, All Rights Reserved")))},s=a(1883);var l=function(){const{0:e,1:t}=(0,r.useState)(!1);return r.createElement("nav",{className:"bg-gray-100 shadow-md"},r.createElement("div",{className:"max-w-6xl mx-auto px-4"},r.createElement("div",{className:"flex justify-between"},r.createElement("div",{className:"hidden md:flex items-center space-x-1"},r.createElement(s.Link,{to:"/#",className:"py-5 px-3 text-gray-700 hover:text-blue-700"},"Home"),r.createElement(s.Link,{to:"/about",className:"py-5 px-3 text-gray-700 hover:text-blue-700"},"About")),r.createElement("div",null,r.createElement(s.Link,{to:"/#",className:"flex flex-col items-center py-4 px-2 text-sky-800"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-7 h-7 mr-1 text-blue-400"},r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"})),r.createElement("span",{className:"font-black"},"CAREER QUESTS"))),r.createElement("div",{className:"hidden md:flex items-center space-x-1"},r.createElement(s.Link,{to:"/#",className:"py-5 px-3"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-6 h-6 text-blue-400"},r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"}))),r.createElement(s.Link,{to:"/#",className:"py-5 px-3"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-6 h-6 text-blue-400"},r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"})))),r.createElement("div",{className:"md:hidden flex items-center"},r.createElement("button",{className:"hamburger",onClick:()=>{t(!e)}},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-6 h-6 text-blue-400 hover:text-blue-700"},r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})))))),r.createElement("div",{className:e?"p-5 text-center expanded":"hidden"},r.createElement("div",{className:"flex items-center justify-center space-x-1 w-20 m-auto border-b-2 border-t-2"},r.createElement(s.Link,{to:"/#",className:"py-5 px-3 border-r-2"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-6 h-6 text-blue-400"},r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"}))),r.createElement(s.Link,{to:"/#",className:"py-5 px-3"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-6 h-6 text-blue-400"},r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"})))),r.createElement("div",{className:"flex items-center justify-center flex-col space-x-1"},r.createElement(s.Link,{to:"/#",className:"block py-2 px-4 text-sm hover:bg-gray-200 border-b-2"},"Home"),r.createElement(s.Link,{to:"/about",className:"block py-2 px-4 text-sm hover:bg-gray-200 border-b-2"},"About"))))};var o=e=>{let{children:t}=e;return r.createElement("div",{className:"font-body"},r.createElement(l,null),r.createElement("main",null,t),r.createElement(n,null))}},5595:function(e,t,a){a.d(t,{H:function(){return s}});var r=a(7294),n=a(1883);const s=e=>{let{title:t,description:a,pathname:s,children:l}=e;const{title:o,description:i,image:c,siteUrl:u}=(0,n.useStaticQuery)("1946181227").site.siteMetadata,d={title:t||o,description:a||i,image:""+u+c,url:""+u+(s||"")};return r.createElement(r.Fragment,null,r.createElement("title",null,d.title),r.createElement("meta",{name:"description",content:d.description}),r.createElement("meta",{name:"image",content:d.image}),l)}},1151:function(e,t,a){a.d(t,{ah:function(){return s}});var r=a(7294);const n=r.createContext({});function s(e){const t=r.useContext(n);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);
//# sourceMappingURL=fb8cb845ba1ca758f7253a1ec24fe118d487a3af-4483ed44aef2f98f3c91.js.map