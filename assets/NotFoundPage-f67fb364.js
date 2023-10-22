import{a as ee,r as w,H as te,L as ne,a1 as se,a2 as re,a3 as oe,a4 as ae,a5 as ie,a6 as ce,a7 as ue,a8 as pe,a9 as le,aa as de,ab as fe,ac as ge,j as F}from"./index-44cea068.js";import{_ as me,n as A}from"./emotion-styled.browser.esm-97ad99c8.js";var he={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0};const xe=ee(he);var be=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function W(t){var e={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},n=t.match(/<\/?([^\s]+?)[/\s>]/);if(n&&(e.name=n[1],(xe[n[1]]||t.charAt(t.length-2)==="/")&&(e.voidElement=!0),e.name.startsWith("!--"))){var o=t.indexOf("-->");return{type:"comment",comment:o!==-1?t.slice(4,o):""}}for(var u=new RegExp(be),s=null;(s=u.exec(t))!==null;)if(s[0].trim())if(s[1]){var a=s[1].trim(),l=[a,""];a.indexOf("=")>-1&&(l=a.split("=")),e.attrs[l[0]]=l[1],u.lastIndex--}else s[2]&&(e.attrs[s[2]]=s[3].trim().substring(1,s[3].length-1));return e}var ye=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,ve=/^\s*$/,we=Object.create(null);function J(t,e){switch(e.type){case"text":return t+e.content;case"tag":return t+="<"+e.name+(e.attrs?function(n){var o=[];for(var u in n)o.push(u+'="'+n[u]+'"');return o.length?" "+o.join(" "):""}(e.attrs):"")+(e.voidElement?"/>":">"),e.voidElement?t:t+e.children.reduce(J,"")+"</"+e.name+">";case"comment":return t+"<!--"+e.comment+"-->"}}var Ne={parse:function(t,e){e||(e={}),e.components||(e.components=we);var n,o=[],u=[],s=-1,a=!1;if(t.indexOf("<")!==0){var l=t.indexOf("<");o.push({type:"text",content:l===-1?t:t.substring(0,l)})}return t.replace(ye,function(m,i){if(a){if(m!=="</"+n.name+">")return;a=!1}var h,$=m.charAt(1)!=="/",E=m.startsWith("<!--"),y=i+m.length,v=t.charAt(y);if(E){var x=W(m);return s<0?(o.push(x),o):((h=u[s]).children.push(x),o)}if($&&(s++,(n=W(m)).type==="tag"&&e.components[n.name]&&(n.type="component",a=!0),n.voidElement||a||!v||v==="<"||n.children.push({type:"text",content:t.slice(y,t.indexOf("<",y))}),s===0&&o.push(n),(h=u[s-1])&&h.children.push(n),u[s]=n),(!$||n.voidElement)&&(s>-1&&(n.voidElement||n.name===m.slice(2,-1))&&(s--,n=s===-1?o:u[s]),!a&&v!=="<"&&v)){h=s===-1?o:u[s].children;var p=t.indexOf("<",y),d=t.slice(y,p===-1?void 0:p);ve.test(d)&&(d=" "),(p>-1&&s+h.length>=0||d!==" ")&&h.push({type:"text",content:d})}}),o},stringify:function(t){return t.reduce(function(e,n){return e+J("",n)},"")}};function z(){if(console&&console.warn){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];typeof e[0]=="string"&&(e[0]=`react-i18next:: ${e[0]}`),console.warn(...e)}}const V={};function H(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];typeof e[0]=="string"&&V[e[0]]||(typeof e[0]=="string"&&(V[e[0]]=new Date),z(...e))}const Y=(t,e)=>()=>{if(t.isInitialized)e();else{const n=()=>{setTimeout(()=>{t.off("initialized",n)},0),e()};t.on("initialized",n)}};function U(t,e,n){t.loadNamespaces(e,Y(t,n))}function M(t,e,n,o){typeof n=="string"&&(n=[n]),n.forEach(u=>{t.options.ns.indexOf(u)<0&&t.options.ns.push(u)}),t.loadLanguages(e,Y(t,o))}function $e(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const o=e.languages[0],u=e.options?e.options.fallbackLng:!1,s=e.languages[e.languages.length-1];if(o.toLowerCase()==="cimode")return!0;const a=(l,m)=>{const i=e.services.backendConnector.state[`${l}|${m}`];return i===-1||i===2};return n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!a(e.isLanguageChangingTo,t)?!1:!!(e.hasResourceBundle(o,t)||!e.services.backendConnector.backend||e.options.resources&&!e.options.partialBundledLanguages||a(o,t)&&(!u||a(s,t)))}function Fe(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return!e.languages||!e.languages.length?(H("i18n.languages were undefined or empty",e.languages),!0):e.options.ignoreJSONStructure!==void 0?e.hasLoadedNamespace(t,{lng:n.lng,precheck:(u,s)=>{if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&u.services.backendConnector.backend&&u.isLanguageChangingTo&&!s(u.isLanguageChangingTo,t))return!1}}):$e(t,e,n)}const je=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,Ee={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},ke=t=>Ee[t],Te=t=>t.replace(je,ke);let Ce={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:Te};function X(){return Ce}let Se;function R(){return Se}function D(t,e){if(!t)return!1;const n=t.props?t.props.children:t.children;return e?n.length>0:!!n}function K(t){if(!t)return[];const e=t.props?t.props.children:t.children;return t.props&&t.props.i18nIsDynamicList?P(e):e}function Pe(t){return Object.prototype.toString.call(t)!=="[object Array]"?!1:t.every(e=>w.isValidElement(e))}function P(t){return Array.isArray(t)?t:[t]}function Ae(t,e){const n={...e};return n.props=Object.assign(t.props,e.props),n}function Z(t,e){if(!t)return"";let n="";const o=P(t),u=e.transSupportBasicHtmlNodes&&e.transKeepBasicHtmlNodesFor?e.transKeepBasicHtmlNodesFor:[];return o.forEach((s,a)=>{if(typeof s=="string")n+=`${s}`;else if(w.isValidElement(s)){const l=Object.keys(s.props).length,m=u.indexOf(s.type)>-1,i=s.props.children;if(!i&&m&&l===0)n+=`<${s.type}/>`;else if(!i&&(!m||l!==0))n+=`<${a}></${a}>`;else if(s.props.i18nIsDynamicList)n+=`<${a}></${a}>`;else if(m&&l===1&&typeof i=="string")n+=`<${s.type}>${i}</${s.type}>`;else{const h=Z(i,e);n+=`<${a}>${h}</${a}>`}}else if(s===null)z("Trans: the passed in value is invalid - seems you passed in a null child.");else if(typeof s=="object"){const{format:l,...m}=s,i=Object.keys(m);if(i.length===1){const h=l?`${i[0]}, ${l}`:i[0];n+=`{{${h}}}`}else z("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",s)}else z("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",s)}),n}function Ie(t,e,n,o,u,s){if(e==="")return[];const a=o.transKeepBasicHtmlNodesFor||[],l=e&&new RegExp(a.map(p=>`<${p}`).join("|")).test(e);if(!t&&!l&&!s)return[e];const m={};function i(p){P(p).forEach(c=>{typeof c!="string"&&(D(c)?i(K(c)):typeof c=="object"&&!w.isValidElement(c)&&Object.assign(m,c))})}i(t);const h=Ne.parse(`<0>${e}</0>`),$={...m,...u};function E(p,d,c){const g=K(p),b=v(g,d.children,c);return Pe(g)&&b.length===0||p.props&&p.props.i18nIsDynamicList?g:b}function y(p,d,c,g,b){p.dummy?(p.children=d,c.push(w.cloneElement(p,{key:g},b?void 0:d))):c.push(...w.Children.map([p],f=>{const r={...f.props};return delete r.i18nIsDynamicList,te.createElement(f.type,me({},r,{key:g,ref:f.ref},b?{}:{children:d}))}))}function v(p,d,c){const g=P(p);return P(d).reduce((f,r,T)=>{const C=r.children&&r.children[0]&&r.children[0].content&&n.services.interpolator.interpolate(r.children[0].content,$,n.language);if(r.type==="tag"){let k=g[parseInt(r.name,10)];c.length===1&&!k&&(k=c[0][r.name]),k||(k={});const N=Object.keys(r.attrs).length!==0?Ae({props:r.attrs},k):k,S=w.isValidElement(N),B=S&&D(r,!0)&&!r.voidElement,Q=l&&typeof N=="object"&&N.dummy&&!S,_=typeof t=="object"&&t!==null&&Object.hasOwnProperty.call(t,r.name);if(typeof N=="string"){const j=n.services.interpolator.interpolate(N,$,n.language);f.push(j)}else if(D(N)||B){const j=E(N,r,c);y(N,j,f,T)}else if(Q){const j=v(g,r.children,c);y(N,j,f,T)}else if(Number.isNaN(parseFloat(r.name)))if(_){const j=E(N,r,c);y(N,j,f,T,r.voidElement)}else if(o.transSupportBasicHtmlNodes&&a.indexOf(r.name)>-1)if(r.voidElement)f.push(w.createElement(r.name,{key:`${r.name}-${T}`}));else{const j=v(g,r.children,c);f.push(w.createElement(r.name,{key:`${r.name}-${T}`},j))}else if(r.voidElement)f.push(`<${r.name} />`);else{const j=v(g,r.children,c);f.push(`<${r.name}>${j}</${r.name}>`)}else if(typeof N=="object"&&!S){const j=r.children[0]?C:null;j&&f.push(j)}else y(N,C,f,T,r.children.length!==1||!C)}else if(r.type==="text"){const k=o.transWrapTextNodes,N=s?o.unescape(n.services.interpolator.interpolate(r.content,$,n.language)):n.services.interpolator.interpolate(r.content,$,n.language);k?f.push(w.createElement(k,{key:`${r.name}-${T}`},N)):f.push(N)}return f},[])}const x=v([{dummy:!0,children:t||[]}],h,P(t||[]));return K(x[0])}function Le(t){let{children:e,count:n,parent:o,i18nKey:u,context:s,tOptions:a={},values:l,defaults:m,components:i,ns:h,i18n:$,t:E,shouldUnescape:y,...v}=t;const x=$||R();if(!x)return H("You will need to pass in an i18next instance by using i18nextReactModule"),e;const p=E||x.t.bind(x)||(B=>B);s&&(a.context=s);const d={...X(),...x.options&&x.options.react};let c=h||p.ns||x.options&&x.options.defaultNS;c=typeof c=="string"?[c]:c||["translation"];const g=Z(e,d),b=m||g||d.transEmptyNodeValue||u,{hashTransKey:f}=d,r=u||(f?f(g||b):g||b);x.options&&x.options.interpolation&&x.options.interpolation.defaultVariables&&(l=l&&Object.keys(l).length>0?{...l,...x.options.interpolation.defaultVariables}:{...x.options.interpolation.defaultVariables});const T=l?a.interpolation:{interpolation:{...a.interpolation,prefix:"#$?",suffix:"?$#"}},C={...a,count:n,...l,...T,defaultValue:b,ns:c},k=r?p(r,C):b,N=Ie(i||e,k,x,d,C,y),S=o!==void 0?o:d.defaultTransParent;return S?w.createElement(S,v,N):N}const G=w.createContext();class Oe{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(n=>{this.usedNamespaces[n]||(this.usedNamespaces[n]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}function ze(t){let{children:e,count:n,parent:o,i18nKey:u,context:s,tOptions:a={},values:l,defaults:m,components:i,ns:h,i18n:$,t:E,shouldUnescape:y,...v}=t;const{i18n:x,defaultNS:p}=w.useContext(G)||{},d=$||x||R(),c=E||d&&d.t.bind(d);return Le({children:e,count:n,parent:o,i18nKey:u,context:s,tOptions:a,values:l,defaults:m,components:i,ns:h||c&&c.ns||p||d&&d.options&&d.options.defaultNS,i18n:d,t:E,shouldUnescape:y,...v})}const He=(t,e)=>{const n=w.useRef();return w.useEffect(()=>{n.current=e?n.current:t},[t,e]),n.current};function Be(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{i18n:n}=e,{i18n:o,defaultNS:u}=w.useContext(G)||{},s=n||o||R();if(s&&!s.reportNamespaces&&(s.reportNamespaces=new Oe),!s){H("You will need to pass in an i18next instance by using initReactI18next");const g=(f,r)=>typeof r=="string"?r:r&&typeof r=="object"&&typeof r.defaultValue=="string"?r.defaultValue:Array.isArray(f)?f[f.length-1]:f,b=[g,{},!1];return b.t=g,b.i18n={},b.ready=!1,b}s.options.react&&s.options.react.wait!==void 0&&H("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const a={...X(),...s.options.react,...e},{useSuspense:l,keyPrefix:m}=a;let i=t||u||s.options&&s.options.defaultNS;i=typeof i=="string"?[i]:i||["translation"],s.reportNamespaces.addUsedNamespaces&&s.reportNamespaces.addUsedNamespaces(i);const h=(s.isInitialized||s.initializedStoreOnce)&&i.every(g=>Fe(g,s,a));function $(){return s.getFixedT(e.lng||null,a.nsMode==="fallback"?i:i[0],m)}const[E,y]=w.useState($);let v=i.join();e.lng&&(v=`${e.lng}${v}`);const x=He(v),p=w.useRef(!0);w.useEffect(()=>{const{bindI18n:g,bindI18nStore:b}=a;p.current=!0,!h&&!l&&(e.lng?M(s,e.lng,i,()=>{p.current&&y($)}):U(s,i,()=>{p.current&&y($)})),h&&x&&x!==v&&p.current&&y($);function f(){p.current&&y($)}return g&&s&&s.on(g,f),b&&s&&s.store.on(b,f),()=>{p.current=!1,g&&s&&g.split(" ").forEach(r=>s.off(r,f)),b&&s&&b.split(" ").forEach(r=>s.store.off(r,f))}},[s,v]);const d=w.useRef(!0);w.useEffect(()=>{p.current&&!d.current&&y($),d.current=!1},[s,m]);const c=[E,s,h];if(c.t=E,c.i18n=s,c.ready=h,h||!h&&!l)return c;throw new Promise(g=>{e.lng?M(s,e.lng,i,()=>g()):U(s,i,()=>g())})}const De=A.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;

  background-color: var(--outlet-background-color);
  text-align: center;
  min-height: 100vh;
`,Ke=A.div`
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
`,Re=A.picture`
  margin: 0 -30px;

  @media screen and (min-width: 768px) {
    margin: 0 -60px;
  }
`,q=A.span`
  color: var(--logo-text);
  font-size: 100px;
  font-weight: 700;
  line-height: 1.5;

  @media screen and (min-width: 768px) {
    font-size: 200px;
    line-height: 1.25;
  }
`,We=A.p`
  margin: 0 auto;
  color: var(--label-text-color);
  font-size: 14px;
  line-height: 1.29;
  font-weight: 500;
  max-width: 281px;

  @media screen and (min-width: 768px) {
    max-width: 387px;
  }
`,Ve=A(ne)`
  background-color: var(--accent-background-color);
  color: var(--btn-text-color);
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
  }

  @media screen and (min-width: 768px) {
    padding: 16px 48px;
    font-size: 18px;
    line-height: 1.333;
    margin-top: 32px;
  }
`,Ue={phone:{notFoundPhonepng:se,notFoundPhonepng2x:re,notFoundPhonewebp:oe,notFoundPhonewebp2x:ae},tablet:{notFoundTabletpng:ie,notFoundTabletpng2x:ce,notFoundTabletwebp:ue,notFoundTabletwebp2x:pe},desktop:{notFoundDesktoppng:le,notFoundDesktoppng2x:de,notFoundDesktopwebp:fe,notFoundDesktopwebp2x:ge}},{phone:I,tablet:L,desktop:O}=Ue,Me=()=>{const{t}=Be();return F.jsxs(De,{children:[F.jsxs(Ke,{children:[F.jsx(q,{children:"4"}),F.jsxs(Re,{children:[F.jsx("source",{type:"image/webp",media:"(max-width: 767px)",srcSet:`${I.notFoundPhonewebp} 1x, ${I.notFoundPhonewebp2x} 2x`}),F.jsx("source",{type:"image/webp",media:"(max-width: 1439px)",srcSet:`${L.notFoundTabletwebp} 1x, ${L.notFoundTabletwebp2x} 2x`}),F.jsx("source",{type:"image/webp",media:"(min-width: 1440px)",srcSet:`${O.notFoundDesktopwebp} 1x, ${O.notFoundDesktopwebp2x} 2x`}),F.jsx("source",{type:"image/png",media:"(max-width: 767px)",srcSet:`${I.notFoundPhonepng} 1x, ${I.notFoundPhonepng2x} 2x`}),F.jsx("source",{type:"image/png",media:"(max-width: 1439pxpx)",srcSet:`${L.notFoundTabletpng} 1x, ${L.notFoundTabletpng2x} 2x`}),F.jsx("source",{type:"image/png",media:"(min-width: 1440px)",srcSet:`${O.notFoundDesktoppng} 1x, ${O.notFoundDesktoppng2x} 2x`}),F.jsx("img",{src:`${I.notFoundPhonepng}`,alt:"ErrorImage"})]}),F.jsx(q,{children:"4"})]}),F.jsx(We,{children:F.jsx(ze,{i18nKey:"notfound.text",children:"We’re sorry, the page you requested could not be found. Please go back to the homepage."})}),F.jsx(Ve,{to:"/",children:t("notfound.back")})]})};function Ye(){return F.jsx(Me,{})}export{Ye as default};
