import{a as ee,r as v,a6 as te,_ as ne,aJ as L,L as se,aK as oe,aL as re,aM as ae,aN as ie,aO as ce,aP as ue,aQ as pe,aR as le,aS as fe,aT as de,aU as ge,aV as me,a7 as he,j as F}from"./index-5aedd234.js";var xe={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0};const be=ee(xe);var ye=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function V(t){var e={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},n=t.match(/<\/?([^\s]+?)[/\s>]/);if(n&&(e.name=n[1],(be[n[1]]||t.charAt(t.length-2)==="/")&&(e.voidElement=!0),e.name.startsWith("!--"))){var r=t.indexOf("-->");return{type:"comment",comment:r!==-1?t.slice(4,r):""}}for(var u=new RegExp(ye),s=null;(s=u.exec(t))!==null;)if(s[0].trim())if(s[1]){var a=s[1].trim(),l=[a,""];a.indexOf("=")>-1&&(l=a.split("=")),e.attrs[l[0]]=l[1],u.lastIndex--}else s[2]&&(e.attrs[s[2]]=s[3].trim().substring(1,s[3].length-1));return e}var we=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,ve=/^\s*$/,Ne=Object.create(null);function q(t,e){switch(e.type){case"text":return t+e.content;case"tag":return t+="<"+e.name+(e.attrs?function(n){var r=[];for(var u in n)r.push(u+'="'+n[u]+'"');return r.length?" "+r.join(" "):""}(e.attrs):"")+(e.voidElement?"/>":">"),e.voidElement?t:t+e.children.reduce(q,"")+"</"+e.name+">";case"comment":return t+"<!--"+e.comment+"-->"}}var $e={parse:function(t,e){e||(e={}),e.components||(e.components=Ne);var n,r=[],u=[],s=-1,a=!1;if(t.indexOf("<")!==0){var l=t.indexOf("<");r.push({type:"text",content:l===-1?t:t.substring(0,l)})}return t.replace(we,function(m,i){if(a){if(m!=="</"+n.name+">")return;a=!1}var h,$=m.charAt(1)!=="/",k=m.startsWith("<!--"),y=i+m.length,w=t.charAt(y);if(k){var x=V(m);return s<0?(r.push(x),r):((h=u[s]).children.push(x),r)}if($&&(s++,(n=V(m)).type==="tag"&&e.components[n.name]&&(n.type="component",a=!0),n.voidElement||a||!w||w==="<"||n.children.push({type:"text",content:t.slice(y,t.indexOf("<",y))}),s===0&&r.push(n),(h=u[s-1])&&h.children.push(n),u[s]=n),(!$||n.voidElement)&&(s>-1&&(n.voidElement||n.name===m.slice(2,-1))&&(s--,n=s===-1?r:u[s]),!a&&w!=="<"&&w)){h=s===-1?r:u[s].children;var p=t.indexOf("<",y),f=t.slice(y,p===-1?void 0:p);ve.test(f)&&(f=" "),(p>-1&&s+h.length>=0||f!==" ")&&h.push({type:"text",content:f})}}),r},stringify:function(t){return t.reduce(function(e,n){return e+q("",n)},"")}};function B(){if(console&&console.warn){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];typeof e[0]=="string"&&(e[0]=`react-i18next:: ${e[0]}`),console.warn(...e)}}const W={};function z(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];typeof e[0]=="string"&&W[e[0]]||(typeof e[0]=="string"&&(W[e[0]]=new Date),B(...e))}const Y=(t,e)=>()=>{if(t.isInitialized)e();else{const n=()=>{setTimeout(()=>{t.off("initialized",n)},0),e()};t.on("initialized",n)}};function U(t,e,n){t.loadNamespaces(e,Y(t,n))}function J(t,e,n,r){typeof n=="string"&&(n=[n]),n.forEach(u=>{t.options.ns.indexOf(u)<0&&t.options.ns.push(u)}),t.loadLanguages(e,Y(t,r))}function Fe(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const r=e.languages[0],u=e.options?e.options.fallbackLng:!1,s=e.languages[e.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const a=(l,m)=>{const i=e.services.backendConnector.state[`${l}|${m}`];return i===-1||i===2};return n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!a(e.isLanguageChangingTo,t)?!1:!!(e.hasResourceBundle(r,t)||!e.services.backendConnector.backend||e.options.resources&&!e.options.partialBundledLanguages||a(r,t)&&(!u||a(s,t)))}function Ee(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return!e.languages||!e.languages.length?(z("i18n.languages were undefined or empty",e.languages),!0):e.options.ignoreJSONStructure!==void 0?e.hasLoadedNamespace(t,{lng:n.lng,precheck:(u,s)=>{if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&u.services.backendConnector.backend&&u.isLanguageChangingTo&&!s(u.isLanguageChangingTo,t))return!1}}):Fe(t,e,n)}const ke=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,je={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},Ce=t=>je[t],Te=t=>t.replace(ke,Ce);let Se={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:Te};function Q(){return Se}let Pe;function R(){return Pe}function D(t,e){if(!t)return!1;const n=t.props?t.props.children:t.children;return e?n.length>0:!!n}function K(t){if(!t)return[];const e=t.props?t.props.children:t.children;return t.props&&t.props.i18nIsDynamicList?P(e):e}function Le(t){return Object.prototype.toString.call(t)!=="[object Array]"?!1:t.every(e=>v.isValidElement(e))}function P(t){return Array.isArray(t)?t:[t]}function Oe(t,e){const n={...e};return n.props=Object.assign(t.props,e.props),n}function X(t,e){if(!t)return"";let n="";const r=P(t),u=e.transSupportBasicHtmlNodes&&e.transKeepBasicHtmlNodesFor?e.transKeepBasicHtmlNodesFor:[];return r.forEach((s,a)=>{if(typeof s=="string")n+=`${s}`;else if(v.isValidElement(s)){const l=Object.keys(s.props).length,m=u.indexOf(s.type)>-1,i=s.props.children;if(!i&&m&&l===0)n+=`<${s.type}/>`;else if(!i&&(!m||l!==0))n+=`<${a}></${a}>`;else if(s.props.i18nIsDynamicList)n+=`<${a}></${a}>`;else if(m&&l===1&&typeof i=="string")n+=`<${s.type}>${i}</${s.type}>`;else{const h=X(i,e);n+=`<${a}>${h}</${a}>`}}else if(s===null)B("Trans: the passed in value is invalid - seems you passed in a null child.");else if(typeof s=="object"){const{format:l,...m}=s,i=Object.keys(m);if(i.length===1){const h=l?`${i[0]}, ${l}`:i[0];n+=`{{${h}}}`}else B("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",s)}else B("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",s)}),n}function Ae(t,e,n,r,u,s){if(e==="")return[];const a=r.transKeepBasicHtmlNodesFor||[],l=e&&new RegExp(a.map(p=>`<${p}`).join("|")).test(e);if(!t&&!l&&!s)return[e];const m={};function i(p){P(p).forEach(c=>{typeof c!="string"&&(D(c)?i(K(c)):typeof c=="object"&&!v.isValidElement(c)&&Object.assign(m,c))})}i(t);const h=$e.parse(`<0>${e}</0>`),$={...m,...u};function k(p,f,c){const g=K(p),b=w(g,f.children,c);return Le(g)&&b.length===0||p.props&&p.props.i18nIsDynamicList?g:b}function y(p,f,c,g,b){p.dummy?(p.children=f,c.push(v.cloneElement(p,{key:g},b?void 0:f))):c.push(...v.Children.map([p],d=>{const o={...d.props};return delete o.i18nIsDynamicList,te.createElement(d.type,ne({},o,{key:g,ref:d.ref},b?{}:{children:f}))}))}function w(p,f,c){const g=P(p);return P(f).reduce((d,o,C)=>{const T=o.children&&o.children[0]&&o.children[0].content&&n.services.interpolator.interpolate(o.children[0].content,$,n.language);if(o.type==="tag"){let j=g[parseInt(o.name,10)];c.length===1&&!j&&(j=c[0][o.name]),j||(j={});const N=Object.keys(o.attrs).length!==0?Oe({props:o.attrs},j):j,S=v.isValidElement(N),H=S&&D(o,!0)&&!o.voidElement,G=l&&typeof N=="object"&&N.dummy&&!S,_=typeof t=="object"&&t!==null&&Object.hasOwnProperty.call(t,o.name);if(typeof N=="string"){const E=n.services.interpolator.interpolate(N,$,n.language);d.push(E)}else if(D(N)||H){const E=k(N,o,c);y(N,E,d,C)}else if(G){const E=w(g,o.children,c);y(N,E,d,C)}else if(Number.isNaN(parseFloat(o.name)))if(_){const E=k(N,o,c);y(N,E,d,C,o.voidElement)}else if(r.transSupportBasicHtmlNodes&&a.indexOf(o.name)>-1)if(o.voidElement)d.push(v.createElement(o.name,{key:`${o.name}-${C}`}));else{const E=w(g,o.children,c);d.push(v.createElement(o.name,{key:`${o.name}-${C}`},E))}else if(o.voidElement)d.push(`<${o.name} />`);else{const E=w(g,o.children,c);d.push(`<${o.name}>${E}</${o.name}>`)}else if(typeof N=="object"&&!S){const E=o.children[0]?T:null;E&&d.push(E)}else y(N,T,d,C,o.children.length!==1||!T)}else if(o.type==="text"){const j=r.transWrapTextNodes,N=s?r.unescape(n.services.interpolator.interpolate(o.content,$,n.language)):n.services.interpolator.interpolate(o.content,$,n.language);j?d.push(v.createElement(j,{key:`${o.name}-${C}`},N)):d.push(N)}return d},[])}const x=w([{dummy:!0,children:t||[]}],h,P(t||[]));return K(x[0])}function Ie(t){let{children:e,count:n,parent:r,i18nKey:u,context:s,tOptions:a={},values:l,defaults:m,components:i,ns:h,i18n:$,t:k,shouldUnescape:y,...w}=t;const x=$||R();if(!x)return z("You will need to pass in an i18next instance by using i18nextReactModule"),e;const p=k||x.t.bind(x)||(H=>H);s&&(a.context=s);const f={...Q(),...x.options&&x.options.react};let c=h||p.ns||x.options&&x.options.defaultNS;c=typeof c=="string"?[c]:c||["translation"];const g=X(e,f),b=m||g||f.transEmptyNodeValue||u,{hashTransKey:d}=f,o=u||(d?d(g||b):g||b);x.options&&x.options.interpolation&&x.options.interpolation.defaultVariables&&(l=l&&Object.keys(l).length>0?{...l,...x.options.interpolation.defaultVariables}:{...x.options.interpolation.defaultVariables});const C=l?a.interpolation:{interpolation:{...a.interpolation,prefix:"#$?",suffix:"?$#"}},T={...a,count:n,...l,...C,defaultValue:b,ns:c},j=o?p(o,T):b,N=Ae(i||e,j,x,f,T,y),S=r!==void 0?r:f.defaultTransParent;return S?v.createElement(S,w,N):N}const Z=v.createContext();class Be{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(n=>{this.usedNamespaces[n]||(this.usedNamespaces[n]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}function ze(t){let{children:e,count:n,parent:r,i18nKey:u,context:s,tOptions:a={},values:l,defaults:m,components:i,ns:h,i18n:$,t:k,shouldUnescape:y,...w}=t;const{i18n:x,defaultNS:p}=v.useContext(Z)||{},f=$||x||R(),c=k||f&&f.t.bind(f);return Ie({children:e,count:n,parent:r,i18nKey:u,context:s,tOptions:a,values:l,defaults:m,components:i,ns:h||c&&c.ns||p||f&&f.options&&f.options.defaultNS,i18n:f,t:k,shouldUnescape:y,...w})}const He=(t,e)=>{const n=v.useRef();return v.useEffect(()=>{n.current=e?n.current:t},[t,e]),n.current};function De(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{i18n:n}=e,{i18n:r,defaultNS:u}=v.useContext(Z)||{},s=n||r||R();if(s&&!s.reportNamespaces&&(s.reportNamespaces=new Be),!s){z("You will need to pass in an i18next instance by using initReactI18next");const g=(d,o)=>typeof o=="string"?o:o&&typeof o=="object"&&typeof o.defaultValue=="string"?o.defaultValue:Array.isArray(d)?d[d.length-1]:d,b=[g,{},!1];return b.t=g,b.i18n={},b.ready=!1,b}s.options.react&&s.options.react.wait!==void 0&&z("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const a={...Q(),...s.options.react,...e},{useSuspense:l,keyPrefix:m}=a;let i=t||u||s.options&&s.options.defaultNS;i=typeof i=="string"?[i]:i||["translation"],s.reportNamespaces.addUsedNamespaces&&s.reportNamespaces.addUsedNamespaces(i);const h=(s.isInitialized||s.initializedStoreOnce)&&i.every(g=>Ee(g,s,a));function $(){return s.getFixedT(e.lng||null,a.nsMode==="fallback"?i:i[0],m)}const[k,y]=v.useState($);let w=i.join();e.lng&&(w=`${e.lng}${w}`);const x=He(w),p=v.useRef(!0);v.useEffect(()=>{const{bindI18n:g,bindI18nStore:b}=a;p.current=!0,!h&&!l&&(e.lng?J(s,e.lng,i,()=>{p.current&&y($)}):U(s,i,()=>{p.current&&y($)})),h&&x&&x!==w&&p.current&&y($);function d(){p.current&&y($)}return g&&s&&s.on(g,d),b&&s&&s.store.on(b,d),()=>{p.current=!1,g&&s&&g.split(" ").forEach(o=>s.off(o,d)),b&&s&&b.split(" ").forEach(o=>s.store.off(o,d))}},[s,w]);const f=v.useRef(!0);v.useEffect(()=>{p.current&&!f.current&&y($),f.current=!1},[s,m]);const c=[k,s,h];if(c.t=k,c.i18n=s,c.ready=h,h||!h&&!l)return c;throw new Promise(g=>{e.lng?J(s,e.lng,i,()=>g()):U(s,i,()=>g())})}const Ke=L.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;

  background-color: var(--outlet-background-color);
  text-align: center;
  min-height: 100vh;
`,Re=L.div`
  display: flex;
  align-items: center;
  margin-bottom: 28px;

  width: 252px;
  height: 150px;

  @media screen and (min-width: 768px) {
    width: 503px;
    height: 250px;
    margin-bottom: 80px;
  }
`,Ve=L.picture`
  margin: 0 -30px;

  @media screen and (min-width: 768px) {
    margin: 0 -60px;
  }
`,M=L.span`
  color: #3E85F3;
  font-size: 100px;
  font-weight: 700;
  line-height: 1.5;

  @media screen and (min-width: 768px) {
    font-size: 200px;
    line-height: 1.25;
  }
`,We=L.p`
  margin: 0 auto;
  color: var(--label-text-color);
  font-size: 14px;
  line-height: 1.29;
  font-weight: 500;
  max-width: 281px;

  @media screen and (min-width: 768px) {
    max-width: 387px;
  }
`,Ue=L(se)`
  background-color: #3E85F3;
  color: #ffffff;
  padding: 14px 32px;
  border-radius: 16px;
  border: none;
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  margin-top: 24px;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.286;
  text-transform: none;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover,
  &:focus {
    background-color: var(--active-btn-color);
    color: #3E85F3;
  }
  
  @media screen and (min-width: 768px) {
    padding: 16px 48px;
    font-size: 18px;
    line-height: 1.333;
    margin-top: 32px;
  }
`,Je={phone:{notFoundPhonepng:oe,notFoundPhonepng2x:re,notFoundPhonewebp:ae,notFoundPhonewebp2x:ie},tablet:{notFoundTabletpng:ce,notFoundTabletpng2x:ue,notFoundTabletwebp:pe,notFoundTabletwebp2x:le},desktop:{notFoundDesktoppng:fe,notFoundDesktoppng2x:de,notFoundDesktopwebp:ge,notFoundDesktopwebp2x:me}},{phone:O,tablet:A,desktop:I}=Je,Me=()=>{const{t}=De(),e=he();return F.jsxs(Ke,{style:{backgroundColor:e.colors.primaryBackground},children:[F.jsxs(Re,{children:[F.jsx(M,{children:"4"}),F.jsxs(Ve,{children:[F.jsx("source",{type:"image/webp",media:"(max-width: 767px)",srcSet:`${O.notFoundPhonewebp} 1x, ${O.notFoundPhonewebp2x} 2x`}),F.jsx("source",{type:"image/webp",media:"(max-width: 1439px)",srcSet:`${A.notFoundTabletwebp} 1x, ${A.notFoundTabletwebp2x} 2x`}),F.jsx("source",{type:"image/webp",media:"(min-width: 1440px)",srcSet:`${I.notFoundDesktopwebp} 1x, ${I.notFoundDesktopwebp2x} 2x`}),F.jsx("source",{type:"image/png",media:"(max-width: 767px)",srcSet:`${O.notFoundPhonepng} 1x, ${O.notFoundPhonepng2x} 2x`}),F.jsx("source",{type:"image/png",media:"(max-width: 1439pxpx)",srcSet:`${A.notFoundTabletpng} 1x, ${A.notFoundTabletpng2x} 2x`}),F.jsx("source",{type:"image/png",media:"(min-width: 1440px)",srcSet:`${I.notFoundDesktoppng} 1x, ${I.notFoundDesktoppng2x} 2x`}),F.jsx("img",{src:`${O.notFoundPhonepng}`,alt:"ErrorImage"})]}),F.jsx(M,{children:"4"})]}),F.jsx(We,{style:{color:e.colors.text},children:F.jsx(ze,{i18nKey:"notfound.text",children:"We’re sorry, the page you requested could not be found. Please go back to the homepage."})}),F.jsx(Ue,{to:"/",style:{backgroundColor:e.backgroundButton,color:e.textButton},children:t("Back to home")})]})};function Ye(){return F.jsx(Me,{})}export{Ye as default};
