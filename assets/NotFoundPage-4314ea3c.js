import{a as ee,r as v,B as te,L as ne,a9 as se,aa as re,ab as oe,ac as ae,ad as ie,ae as ce,af as pe,ag as ue,ah as le,ai as fe,aj as de,ak as ge,j as F}from"./index-cad7a3d6.js";import{_ as me,n as A}from"./emotion-styled.browser.esm-aca50a5b.js";var he={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0};const xe=ee(he);var be=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function W(t){var e={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},n=t.match(/<\/?([^\s]+?)[/\s>]/);if(n&&(e.name=n[1],(xe[n[1]]||t.charAt(t.length-2)==="/")&&(e.voidElement=!0),e.name.startsWith("!--"))){var o=t.indexOf("-->");return{type:"comment",comment:o!==-1?t.slice(4,o):""}}for(var p=new RegExp(be),s=null;(s=p.exec(t))!==null;)if(s[0].trim())if(s[1]){var a=s[1].trim(),l=[a,""];a.indexOf("=")>-1&&(l=a.split("=")),e.attrs[l[0]]=l[1],p.lastIndex--}else s[2]&&(e.attrs[s[2]]=s[3].trim().substring(1,s[3].length-1));return e}var ye=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,we=/^\s*$/,ve=Object.create(null);function J(t,e){switch(e.type){case"text":return t+e.content;case"tag":return t+="<"+e.name+(e.attrs?function(n){var o=[];for(var p in n)o.push(p+'="'+n[p]+'"');return o.length?" "+o.join(" "):""}(e.attrs):"")+(e.voidElement?"/>":">"),e.voidElement?t:t+e.children.reduce(J,"")+"</"+e.name+">";case"comment":return t+"<!--"+e.comment+"-->"}}var Ne={parse:function(t,e){e||(e={}),e.components||(e.components=ve);var n,o=[],p=[],s=-1,a=!1;if(t.indexOf("<")!==0){var l=t.indexOf("<");o.push({type:"text",content:l===-1?t:t.substring(0,l)})}return t.replace(ye,function(m,i){if(a){if(m!=="</"+n.name+">")return;a=!1}var h,$=m.charAt(1)!=="/",j=m.startsWith("<!--"),y=i+m.length,w=t.charAt(y);if(j){var x=W(m);return s<0?(o.push(x),o):((h=p[s]).children.push(x),o)}if($&&(s++,(n=W(m)).type==="tag"&&e.components[n.name]&&(n.type="component",a=!0),n.voidElement||a||!w||w==="<"||n.children.push({type:"text",content:t.slice(y,t.indexOf("<",y))}),s===0&&o.push(n),(h=p[s-1])&&h.children.push(n),p[s]=n),(!$||n.voidElement)&&(s>-1&&(n.voidElement||n.name===m.slice(2,-1))&&(s--,n=s===-1?o:p[s]),!a&&w!=="<"&&w)){h=s===-1?o:p[s].children;var u=t.indexOf("<",y),f=t.slice(y,u===-1?void 0:u);we.test(f)&&(f=" "),(u>-1&&s+h.length>=0||f!==" ")&&h.push({type:"text",content:f})}}),o},stringify:function(t){return t.reduce(function(e,n){return e+J("",n)},"")}};function z(){if(console&&console.warn){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];typeof e[0]=="string"&&(e[0]=`react-i18next:: ${e[0]}`),console.warn(...e)}}const V={};function B(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];typeof e[0]=="string"&&V[e[0]]||(typeof e[0]=="string"&&(V[e[0]]=new Date),z(...e))}const Y=(t,e)=>()=>{if(t.isInitialized)e();else{const n=()=>{setTimeout(()=>{t.off("initialized",n)},0),e()};t.on("initialized",n)}};function U(t,e,n){t.loadNamespaces(e,Y(t,n))}function M(t,e,n,o){typeof n=="string"&&(n=[n]),n.forEach(p=>{t.options.ns.indexOf(p)<0&&t.options.ns.push(p)}),t.loadLanguages(e,Y(t,o))}function $e(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const o=e.languages[0],p=e.options?e.options.fallbackLng:!1,s=e.languages[e.languages.length-1];if(o.toLowerCase()==="cimode")return!0;const a=(l,m)=>{const i=e.services.backendConnector.state[`${l}|${m}`];return i===-1||i===2};return n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!a(e.isLanguageChangingTo,t)?!1:!!(e.hasResourceBundle(o,t)||!e.services.backendConnector.backend||e.options.resources&&!e.options.partialBundledLanguages||a(o,t)&&(!p||a(s,t)))}function Fe(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return!e.languages||!e.languages.length?(B("i18n.languages were undefined or empty",e.languages),!0):e.options.ignoreJSONStructure!==void 0?e.hasLoadedNamespace(t,{lng:n.lng,precheck:(p,s)=>{if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&p.services.backendConnector.backend&&p.isLanguageChangingTo&&!s(p.isLanguageChangingTo,t))return!1}}):$e(t,e,n)}const Ee=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,je={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},ke=t=>je[t],Te=t=>t.replace(Ee,ke);let Ce={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:Te};function X(){return Ce}let Se;function R(){return Se}function D(t,e){if(!t)return!1;const n=t.props?t.props.children:t.children;return e?n.length>0:!!n}function K(t){if(!t)return[];const e=t.props?t.props.children:t.children;return t.props&&t.props.i18nIsDynamicList?P(e):e}function Pe(t){return Object.prototype.toString.call(t)!=="[object Array]"?!1:t.every(e=>v.isValidElement(e))}function P(t){return Array.isArray(t)?t:[t]}function Ae(t,e){const n={...e};return n.props=Object.assign(t.props,e.props),n}function Z(t,e){if(!t)return"";let n="";const o=P(t),p=e.transSupportBasicHtmlNodes&&e.transKeepBasicHtmlNodesFor?e.transKeepBasicHtmlNodesFor:[];return o.forEach((s,a)=>{if(typeof s=="string")n+=`${s}`;else if(v.isValidElement(s)){const l=Object.keys(s.props).length,m=p.indexOf(s.type)>-1,i=s.props.children;if(!i&&m&&l===0)n+=`<${s.type}/>`;else if(!i&&(!m||l!==0))n+=`<${a}></${a}>`;else if(s.props.i18nIsDynamicList)n+=`<${a}></${a}>`;else if(m&&l===1&&typeof i=="string")n+=`<${s.type}>${i}</${s.type}>`;else{const h=Z(i,e);n+=`<${a}>${h}</${a}>`}}else if(s===null)z("Trans: the passed in value is invalid - seems you passed in a null child.");else if(typeof s=="object"){const{format:l,...m}=s,i=Object.keys(m);if(i.length===1){const h=l?`${i[0]}, ${l}`:i[0];n+=`{{${h}}}`}else z("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",s)}else z("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",s)}),n}function Ie(t,e,n,o,p,s){if(e==="")return[];const a=o.transKeepBasicHtmlNodesFor||[],l=e&&new RegExp(a.map(u=>`<${u}`).join("|")).test(e);if(!t&&!l&&!s)return[e];const m={};function i(u){P(u).forEach(c=>{typeof c!="string"&&(D(c)?i(K(c)):typeof c=="object"&&!v.isValidElement(c)&&Object.assign(m,c))})}i(t);const h=Ne.parse(`<0>${e}</0>`),$={...m,...p};function j(u,f,c){const g=K(u),b=w(g,f.children,c);return Pe(g)&&b.length===0||u.props&&u.props.i18nIsDynamicList?g:b}function y(u,f,c,g,b){u.dummy?(u.children=f,c.push(v.cloneElement(u,{key:g},b?void 0:f))):c.push(...v.Children.map([u],d=>{const r={...d.props};return delete r.i18nIsDynamicList,te.createElement(d.type,me({},r,{key:g,ref:d.ref},b?{}:{children:f}))}))}function w(u,f,c){const g=P(u);return P(f).reduce((d,r,T)=>{const C=r.children&&r.children[0]&&r.children[0].content&&n.services.interpolator.interpolate(r.children[0].content,$,n.language);if(r.type==="tag"){let k=g[parseInt(r.name,10)];c.length===1&&!k&&(k=c[0][r.name]),k||(k={});const N=Object.keys(r.attrs).length!==0?Ae({props:r.attrs},k):k,S=v.isValidElement(N),H=S&&D(r,!0)&&!r.voidElement,Q=l&&typeof N=="object"&&N.dummy&&!S,_=typeof t=="object"&&t!==null&&Object.hasOwnProperty.call(t,r.name);if(typeof N=="string"){const E=n.services.interpolator.interpolate(N,$,n.language);d.push(E)}else if(D(N)||H){const E=j(N,r,c);y(N,E,d,T)}else if(Q){const E=w(g,r.children,c);y(N,E,d,T)}else if(Number.isNaN(parseFloat(r.name)))if(_){const E=j(N,r,c);y(N,E,d,T,r.voidElement)}else if(o.transSupportBasicHtmlNodes&&a.indexOf(r.name)>-1)if(r.voidElement)d.push(v.createElement(r.name,{key:`${r.name}-${T}`}));else{const E=w(g,r.children,c);d.push(v.createElement(r.name,{key:`${r.name}-${T}`},E))}else if(r.voidElement)d.push(`<${r.name} />`);else{const E=w(g,r.children,c);d.push(`<${r.name}>${E}</${r.name}>`)}else if(typeof N=="object"&&!S){const E=r.children[0]?C:null;E&&d.push(E)}else y(N,C,d,T,r.children.length!==1||!C)}else if(r.type==="text"){const k=o.transWrapTextNodes,N=s?o.unescape(n.services.interpolator.interpolate(r.content,$,n.language)):n.services.interpolator.interpolate(r.content,$,n.language);k?d.push(v.createElement(k,{key:`${r.name}-${T}`},N)):d.push(N)}return d},[])}const x=w([{dummy:!0,children:t||[]}],h,P(t||[]));return K(x[0])}function Le(t){let{children:e,count:n,parent:o,i18nKey:p,context:s,tOptions:a={},values:l,defaults:m,components:i,ns:h,i18n:$,t:j,shouldUnescape:y,...w}=t;const x=$||R();if(!x)return B("You will need to pass in an i18next instance by using i18nextReactModule"),e;const u=j||x.t.bind(x)||(H=>H);s&&(a.context=s);const f={...X(),...x.options&&x.options.react};let c=h||u.ns||x.options&&x.options.defaultNS;c=typeof c=="string"?[c]:c||["translation"];const g=Z(e,f),b=m||g||f.transEmptyNodeValue||p,{hashTransKey:d}=f,r=p||(d?d(g||b):g||b);x.options&&x.options.interpolation&&x.options.interpolation.defaultVariables&&(l=l&&Object.keys(l).length>0?{...l,...x.options.interpolation.defaultVariables}:{...x.options.interpolation.defaultVariables});const T=l?a.interpolation:{interpolation:{...a.interpolation,prefix:"#$?",suffix:"?$#"}},C={...a,count:n,...l,...T,defaultValue:b,ns:c},k=r?u(r,C):b,N=Ie(i||e,k,x,f,C,y),S=o!==void 0?o:f.defaultTransParent;return S?v.createElement(S,w,N):N}const G=v.createContext();class Oe{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(n=>{this.usedNamespaces[n]||(this.usedNamespaces[n]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}function ze(t){let{children:e,count:n,parent:o,i18nKey:p,context:s,tOptions:a={},values:l,defaults:m,components:i,ns:h,i18n:$,t:j,shouldUnescape:y,...w}=t;const{i18n:x,defaultNS:u}=v.useContext(G)||{},f=$||x||R(),c=j||f&&f.t.bind(f);return Le({children:e,count:n,parent:o,i18nKey:p,context:s,tOptions:a,values:l,defaults:m,components:i,ns:h||c&&c.ns||u||f&&f.options&&f.options.defaultNS,i18n:f,t:j,shouldUnescape:y,...w})}const Be=(t,e)=>{const n=v.useRef();return v.useEffect(()=>{n.current=e?n.current:t},[t,e]),n.current};function He(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{i18n:n}=e,{i18n:o,defaultNS:p}=v.useContext(G)||{},s=n||o||R();if(s&&!s.reportNamespaces&&(s.reportNamespaces=new Oe),!s){B("You will need to pass in an i18next instance by using initReactI18next");const g=(d,r)=>typeof r=="string"?r:r&&typeof r=="object"&&typeof r.defaultValue=="string"?r.defaultValue:Array.isArray(d)?d[d.length-1]:d,b=[g,{},!1];return b.t=g,b.i18n={},b.ready=!1,b}s.options.react&&s.options.react.wait!==void 0&&B("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const a={...X(),...s.options.react,...e},{useSuspense:l,keyPrefix:m}=a;let i=t||p||s.options&&s.options.defaultNS;i=typeof i=="string"?[i]:i||["translation"],s.reportNamespaces.addUsedNamespaces&&s.reportNamespaces.addUsedNamespaces(i);const h=(s.isInitialized||s.initializedStoreOnce)&&i.every(g=>Fe(g,s,a));function $(){return s.getFixedT(e.lng||null,a.nsMode==="fallback"?i:i[0],m)}const[j,y]=v.useState($);let w=i.join();e.lng&&(w=`${e.lng}${w}`);const x=Be(w),u=v.useRef(!0);v.useEffect(()=>{const{bindI18n:g,bindI18nStore:b}=a;u.current=!0,!h&&!l&&(e.lng?M(s,e.lng,i,()=>{u.current&&y($)}):U(s,i,()=>{u.current&&y($)})),h&&x&&x!==w&&u.current&&y($);function d(){u.current&&y($)}return g&&s&&s.on(g,d),b&&s&&s.store.on(b,d),()=>{u.current=!1,g&&s&&g.split(" ").forEach(r=>s.off(r,d)),b&&s&&b.split(" ").forEach(r=>s.store.off(r,d))}},[s,w]);const f=v.useRef(!0);v.useEffect(()=>{u.current&&!f.current&&y($),f.current=!1},[s,m]);const c=[j,s,h];if(c.t=j,c.i18n=s,c.ready=h,h||!h&&!l)return c;throw new Promise(g=>{e.lng?M(s,e.lng,i,()=>g()):U(s,i,()=>g())})}const De=A.div`
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
  color: #3E85F3;
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
`,Ue={phone:{notFoundPhonepng:se,notFoundPhonepng2x:re,notFoundPhonewebp:oe,notFoundPhonewebp2x:ae},tablet:{notFoundTabletpng:ie,notFoundTabletpng2x:ce,notFoundTabletwebp:pe,notFoundTabletwebp2x:ue},desktop:{notFoundDesktoppng:le,notFoundDesktoppng2x:fe,notFoundDesktopwebp:de,notFoundDesktopwebp2x:ge}},{phone:I,tablet:L,desktop:O}=Ue,Me=()=>{const{t}=He();return F.jsxs(De,{children:[F.jsxs(Ke,{children:[F.jsx(q,{children:"4"}),F.jsxs(Re,{children:[F.jsx("source",{type:"image/webp",media:"(max-width: 767px)",srcSet:`${I.notFoundPhonewebp} 1x, ${I.notFoundPhonewebp2x} 2x`}),F.jsx("source",{type:"image/webp",media:"(max-width: 1439px)",srcSet:`${L.notFoundTabletwebp} 1x, ${L.notFoundTabletwebp2x} 2x`}),F.jsx("source",{type:"image/webp",media:"(min-width: 1440px)",srcSet:`${O.notFoundDesktopwebp} 1x, ${O.notFoundDesktopwebp2x} 2x`}),F.jsx("source",{type:"image/png",media:"(max-width: 767px)",srcSet:`${I.notFoundPhonepng} 1x, ${I.notFoundPhonepng2x} 2x`}),F.jsx("source",{type:"image/png",media:"(max-width: 1439pxpx)",srcSet:`${L.notFoundTabletpng} 1x, ${L.notFoundTabletpng2x} 2x`}),F.jsx("source",{type:"image/png",media:"(min-width: 1440px)",srcSet:`${O.notFoundDesktoppng} 1x, ${O.notFoundDesktoppng2x} 2x`}),F.jsx("img",{src:`${I.notFoundPhonepng}`,alt:"ErrorImage"})]}),F.jsx(q,{children:"4"})]}),F.jsx(We,{children:F.jsx(ze,{i18nKey:"notfound.text",children:"We’re sorry, the page you requested could not be found. Please go back to the homepage."})}),F.jsx(Ve,{to:"/",children:t("Back to home")})]})};function Ye(){return F.jsx(Me,{})}export{Ye as default};
