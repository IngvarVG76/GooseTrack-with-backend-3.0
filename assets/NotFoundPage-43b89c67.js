import{a0 as ee,r as E,a1 as te,a as ne,au as S,L as se,j as F}from"./index-a594829a.js";var oe={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0};const re=ee(oe);var ae=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function X(t){var e={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},n=t.match(/<\/?([^\s]+?)[/\s>]/);if(n&&(e.name=n[1],(re[n[1]]||t.charAt(t.length-2)==="/")&&(e.voidElement=!0),e.name.startsWith("!--"))){var r=t.indexOf("-->");return{type:"comment",comment:r!==-1?t.slice(4,r):""}}for(var p=new RegExp(ae),s=null;(s=p.exec(t))!==null;)if(s[0].trim())if(s[1]){var a=s[1].trim(),l=[a,""];a.indexOf("=")>-1&&(l=a.split("=")),e.attrs[l[0]]=l[1],p.lastIndex--}else s[2]&&(e.attrs[s[2]]=s[3].trim().substring(1,s[3].length-1));return e}var ie=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,ce=/^\s*$/,pe=Object.create(null);function Z(t,e){switch(e.type){case"text":return t+e.content;case"tag":return t+="<"+e.name+(e.attrs?function(n){var r=[];for(var p in n)r.push(p+'="'+n[p]+'"');return r.length?" "+r.join(" "):""}(e.attrs):"")+(e.voidElement?"/>":">"),e.voidElement?t:t+e.children.reduce(Z,"")+"</"+e.name+">";case"comment":return t+"<!--"+e.comment+"-->"}}var ue={parse:function(t,e){e||(e={}),e.components||(e.components=pe);var n,r=[],p=[],s=-1,a=!1;if(t.indexOf("<")!==0){var l=t.indexOf("<");r.push({type:"text",content:l===-1?t:t.substring(0,l)})}return t.replace(ie,function(m,i){if(a){if(m!=="</"+n.name+">")return;a=!1}var h,k=m.charAt(1)!=="/",N=m.startsWith("<!--"),y=i+m.length,w=t.charAt(y);if(N){var x=X(m);return s<0?(r.push(x),r):((h=p[s]).children.push(x),r)}if(k&&(s++,(n=X(m)).type==="tag"&&e.components[n.name]&&(n.type="component",a=!0),n.voidElement||a||!w||w==="<"||n.children.push({type:"text",content:t.slice(y,t.indexOf("<",y))}),s===0&&r.push(n),(h=p[s-1])&&h.children.push(n),p[s]=n),(!k||n.voidElement)&&(s>-1&&(n.voidElement||n.name===m.slice(2,-1))&&(s--,n=s===-1?r:p[s]),!a&&w!=="<"&&w)){h=s===-1?r:p[s].children;var u=t.indexOf("<",y),d=t.slice(y,u===-1?void 0:u);ce.test(d)&&(d=" "),(u>-1&&s+h.length>=0||d!==" ")&&h.push({type:"text",content:d})}}),r},stringify:function(t){return t.reduce(function(e,n){return e+Z("",n)},"")}};function q(){if(console&&console.warn){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];typeof e[0]=="string"&&(e[0]=`react-i18next:: ${e[0]}`),console.warn(...e)}}const H={};function Q(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];typeof e[0]=="string"&&H[e[0]]||(typeof e[0]=="string"&&(H[e[0]]=new Date),q(...e))}const J=(t,e)=>()=>{if(t.isInitialized)e();else{const n=()=>{setTimeout(()=>{t.off("initialized",n)},0),e()};t.on("initialized",n)}};function z(t,e,n){t.loadNamespaces(e,J(t,n))}function D(t,e,n,r){typeof n=="string"&&(n=[n]),n.forEach(p=>{t.options.ns.indexOf(p)<0&&t.options.ns.push(p)}),t.loadLanguages(e,J(t,r))}function le(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const r=e.languages[0],p=e.options?e.options.fallbackLng:!1,s=e.languages[e.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const a=(l,m)=>{const i=e.services.backendConnector.state[`${l}|${m}`];return i===-1||i===2};return n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!a(e.isLanguageChangingTo,t)?!1:!!(e.hasResourceBundle(r,t)||!e.services.backendConnector.backend||e.options.resources&&!e.options.partialBundledLanguages||a(r,t)&&(!p||a(s,t)))}function de(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return!e.languages||!e.languages.length?(Q("i18n.languages were undefined or empty",e.languages),!0):e.options.ignoreJSONStructure!==void 0?e.hasLoadedNamespace(t,{lng:n.lng,precheck:(p,s)=>{if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&p.services.backendConnector.backend&&p.isLanguageChangingTo&&!s(p.isLanguageChangingTo,t))return!1}}):le(t,e,n)}const fe=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,ge={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},me=t=>ge[t],he=t=>t.replace(fe,me);let xe={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:he};function Y(){return xe}let be;function O(){return be}function R(t,e){if(!t)return!1;const n=t.props?t.props.children:t.children;return e?n.length>0:!!n}function W(t){if(!t)return[];const e=t.props?t.props.children:t.children;return t.props&&t.props.i18nIsDynamicList?P(e):e}function ye(t){return Object.prototype.toString.call(t)!=="[object Array]"?!1:t.every(e=>E.isValidElement(e))}function P(t){return Array.isArray(t)?t:[t]}function we(t,e){const n={...e};return n.props=Object.assign(t.props,e.props),n}function $(t,e){if(!t)return"";let n="";const r=P(t),p=e.transSupportBasicHtmlNodes&&e.transKeepBasicHtmlNodesFor?e.transKeepBasicHtmlNodesFor:[];return r.forEach((s,a)=>{if(typeof s=="string")n+=`${s}`;else if(E.isValidElement(s)){const l=Object.keys(s.props).length,m=p.indexOf(s.type)>-1,i=s.props.children;if(!i&&m&&l===0)n+=`<${s.type}/>`;else if(!i&&(!m||l!==0))n+=`<${a}></${a}>`;else if(s.props.i18nIsDynamicList)n+=`<${a}></${a}>`;else if(m&&l===1&&typeof i=="string")n+=`<${s.type}>${i}</${s.type}>`;else{const h=$(i,e);n+=`<${a}>${h}</${a}>`}}else if(s===null)q("Trans: the passed in value is invalid - seems you passed in a null child.");else if(typeof s=="object"){const{format:l,...m}=s,i=Object.keys(m);if(i.length===1){const h=l?`${i[0]}, ${l}`:i[0];n+=`{{${h}}}`}else q("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",s)}else q("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",s)}),n}function Ee(t,e,n,r,p,s){if(e==="")return[];const a=r.transKeepBasicHtmlNodesFor||[],l=e&&new RegExp(a.map(u=>`<${u}`).join("|")).test(e);if(!t&&!l&&!s)return[e];const m={};function i(u){P(u).forEach(c=>{typeof c!="string"&&(R(c)?i(W(c)):typeof c=="object"&&!E.isValidElement(c)&&Object.assign(m,c))})}i(t);const h=ue.parse(`<0>${e}</0>`),k={...m,...p};function N(u,d,c){const g=W(u),b=w(g,d.children,c);return ye(g)&&b.length===0||u.props&&u.props.i18nIsDynamicList?g:b}function y(u,d,c,g,b){u.dummy?(u.children=d,c.push(E.cloneElement(u,{key:g},b?void 0:d))):c.push(...E.Children.map([u],f=>{const o={...f.props};return delete o.i18nIsDynamicList,te.createElement(f.type,ne({},o,{key:g,ref:f.ref},b?{}:{children:d}))}))}function w(u,d,c){const g=P(u);return P(d).reduce((f,o,j)=>{const T=o.children&&o.children[0]&&o.children[0].content&&n.services.interpolator.interpolate(o.children[0].content,k,n.language);if(o.type==="tag"){let C=g[parseInt(o.name,10)];c.length===1&&!C&&(C=c[0][o.name]),C||(C={});const A=Object.keys(o.attrs).length!==0?we({props:o.attrs},C):C,I=E.isValidElement(A),L=I&&R(o,!0)&&!o.voidElement,M=l&&typeof A=="object"&&A.dummy&&!I,_=typeof t=="object"&&t!==null&&Object.hasOwnProperty.call(t,o.name);if(typeof A=="string"){const v=n.services.interpolator.interpolate(A,k,n.language);f.push(v)}else if(R(A)||L){const v=N(A,o,c);y(A,v,f,j)}else if(M){const v=w(g,o.children,c);y(A,v,f,j)}else if(Number.isNaN(parseFloat(o.name)))if(_){const v=N(A,o,c);y(A,v,f,j,o.voidElement)}else if(r.transSupportBasicHtmlNodes&&a.indexOf(o.name)>-1)if(o.voidElement)f.push(E.createElement(o.name,{key:`${o.name}-${j}`}));else{const v=w(g,o.children,c);f.push(E.createElement(o.name,{key:`${o.name}-${j}`},v))}else if(o.voidElement)f.push(`<${o.name} />`);else{const v=w(g,o.children,c);f.push(`<${o.name}>${v}</${o.name}>`)}else if(typeof A=="object"&&!I){const v=o.children[0]?T:null;v&&f.push(v)}else y(A,T,f,j,o.children.length!==1||!T)}else if(o.type==="text"){const C=r.transWrapTextNodes,A=s?r.unescape(n.services.interpolator.interpolate(o.content,k,n.language)):n.services.interpolator.interpolate(o.content,k,n.language);C?f.push(E.createElement(C,{key:`${o.name}-${j}`},A)):f.push(A)}return f},[])}const x=w([{dummy:!0,children:t||[]}],h,P(t||[]));return W(x[0])}function Ae(t){let{children:e,count:n,parent:r,i18nKey:p,context:s,tOptions:a={},values:l,defaults:m,components:i,ns:h,i18n:k,t:N,shouldUnescape:y,...w}=t;const x=k||O();if(!x)return Q("You will need to pass in an i18next instance by using i18nextReactModule"),e;const u=N||x.t.bind(x)||(L=>L);s&&(a.context=s);const d={...Y(),...x.options&&x.options.react};let c=h||u.ns||x.options&&x.options.defaultNS;c=typeof c=="string"?[c]:c||["translation"];const g=$(e,d),b=m||g||d.transEmptyNodeValue||p,{hashTransKey:f}=d,o=p||(f?f(g||b):g||b);x.options&&x.options.interpolation&&x.options.interpolation.defaultVariables&&(l=l&&Object.keys(l).length>0?{...l,...x.options.interpolation.defaultVariables}:{...x.options.interpolation.defaultVariables});const j=l?a.interpolation:{interpolation:{...a.interpolation,prefix:"#$?",suffix:"?$#"}},T={...a,count:n,...l,...j,defaultValue:b,ns:c},C=o?u(o,T):b,A=Ee(i||e,C,x,d,T,y),I=r!==void 0?r:d.defaultTransParent;return I?E.createElement(I,w,A):A}const G=E.createContext();class ke{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(n=>{this.usedNamespaces[n]||(this.usedNamespaces[n]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}function Fe(t){let{children:e,count:n,parent:r,i18nKey:p,context:s,tOptions:a={},values:l,defaults:m,components:i,ns:h,i18n:k,t:N,shouldUnescape:y,...w}=t;const{i18n:x,defaultNS:u}=E.useContext(G)||{},d=k||x||O(),c=N||d&&d.t.bind(d);return Ae({children:e,count:n,parent:r,i18nKey:p,context:s,tOptions:a,values:l,defaults:m,components:i,ns:h||c&&c.ns||u||d&&d.options&&d.options.defaultNS,i18n:d,t:N,shouldUnescape:y,...w})}const ve=(t,e)=>{const n=E.useRef();return E.useEffect(()=>{n.current=e?n.current:t},[t,e]),n.current};function Ne(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{i18n:n}=e,{i18n:r,defaultNS:p}=E.useContext(G)||{},s=n||r||O();if(s&&!s.reportNamespaces&&(s.reportNamespaces=new ke),!s){Q("You will need to pass in an i18next instance by using initReactI18next");const g=(f,o)=>typeof o=="string"?o:o&&typeof o=="object"&&typeof o.defaultValue=="string"?o.defaultValue:Array.isArray(f)?f[f.length-1]:f,b=[g,{},!1];return b.t=g,b.i18n={},b.ready=!1,b}s.options.react&&s.options.react.wait!==void 0&&Q("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const a={...Y(),...s.options.react,...e},{useSuspense:l,keyPrefix:m}=a;let i=t||p||s.options&&s.options.defaultNS;i=typeof i=="string"?[i]:i||["translation"],s.reportNamespaces.addUsedNamespaces&&s.reportNamespaces.addUsedNamespaces(i);const h=(s.isInitialized||s.initializedStoreOnce)&&i.every(g=>de(g,s,a));function k(){return s.getFixedT(e.lng||null,a.nsMode==="fallback"?i:i[0],m)}const[N,y]=E.useState(k);let w=i.join();e.lng&&(w=`${e.lng}${w}`);const x=ve(w),u=E.useRef(!0);E.useEffect(()=>{const{bindI18n:g,bindI18nStore:b}=a;u.current=!0,!h&&!l&&(e.lng?D(s,e.lng,i,()=>{u.current&&y(k)}):z(s,i,()=>{u.current&&y(k)})),h&&x&&x!==w&&u.current&&y(k);function f(){u.current&&y(k)}return g&&s&&s.on(g,f),b&&s&&s.store.on(b,f),()=>{u.current=!1,g&&s&&g.split(" ").forEach(o=>s.off(o,f)),b&&s&&b.split(" ").forEach(o=>s.store.off(o,f))}},[s,w]);const d=E.useRef(!0);E.useEffect(()=>{u.current&&!d.current&&y(k),d.current=!1},[s,m]);const c=[N,s,h];if(c.t=N,c.i18n=s,c.ready=h,h||!h&&!l)return c;throw new Promise(g=>{e.lng?D(s,e.lng,i,()=>g()):z(s,i,()=>g())})}const Ce=S.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;

  background-color: var(--outlet-background-color);
  text-align: center;
  min-height: 100vh;
`,je=S.div`
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
`,Te=S.picture`
  margin: 0 -30px;

  @media screen and (min-width: 768px) {
    margin: 0 -60px;
  }
`,V=S.span`
  color: var(--logo-text);
  font-size: 100px;
  font-weight: 700;
  line-height: 1.5;

  @media screen and (min-width: 768px) {
    font-size: 200px;
    line-height: 1.25;
  }
`,Ie=S.p`
  margin: 0 auto;
  color: var(--label-text-color);
  font-size: 14px;
  line-height: 1.29;
  font-weight: 500;
  max-width: 281px;

  @media screen and (min-width: 768px) {
    max-width: 387px;
  }
`,Pe=S(se)`
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
`,Se="/GooseTrack-with-backend-3.0/assets/phone-3936312e.png",Ke="/GooseTrack-with-backend-3.0/assets/phone2x-ddd01892.png",Ue="data:image/webp;base64,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",Be="/GooseTrack-with-backend-3.0/assets/phone2x-59f50f0d.webp",qe="/GooseTrack-with-backend-3.0/assets/tablet-c19b8c40.png",Qe="/GooseTrack-with-backend-3.0/assets/tablet2x-761d07de.png",Le="/GooseTrack-with-backend-3.0/assets/tablet-685d1a69.webp",Re="/GooseTrack-with-backend-3.0/assets/tablet2x-0fd3aee4.webp",We="/GooseTrack-with-backend-3.0/assets/phone-3936312e.png",Oe="/GooseTrack-with-backend-3.0/assets/desktop2x-77e93c7c.png",Xe="/GooseTrack-with-backend-3.0/assets/desktop-e9bdc5f8.webp",He="/GooseTrack-with-backend-3.0/assets/phone2x-59f50f0d.webp",ze={phone:{notFoundPhonepng:Se,notFoundPhonepng2x:Ke,notFoundPhonewebp:Ue,notFoundPhonewebp2x:Be},tablet:{notFoundTabletpng:qe,notFoundTabletpng2x:Qe,notFoundTabletwebp:Le,notFoundTabletwebp2x:Re},desktop:{notFoundDesktoppng:We,notFoundDesktoppng2x:Oe,notFoundDesktopwebp:Xe,notFoundDesktopwebp2x:He}},{phone:K,tablet:U,desktop:B}=ze,De=()=>{const{t}=Ne();return F.jsxs(Ce,{children:[F.jsxs(je,{children:[F.jsx(V,{children:"4"}),F.jsxs(Te,{children:[F.jsx("source",{type:"image/webp",media:"(max-width: 767px)",srcSet:`${K.notFoundPhonewebp} 1x, ${K.notFoundPhonewebp2x} 2x`}),F.jsx("source",{type:"image/webp",media:"(max-width: 1439px)",srcSet:`${U.notFoundTabletwebp} 1x, ${U.notFoundTabletwebp2x} 2x`}),F.jsx("source",{type:"image/webp",media:"(min-width: 1440px)",srcSet:`${B.notFoundDesktopwebp} 1x, ${B.notFoundDesktopwebp2x} 2x`}),F.jsx("source",{type:"image/png",media:"(max-width: 767px)",srcSet:`${K.notFoundPhonepng} 1x, ${K.notFoundPhonepng2x} 2x`}),F.jsx("source",{type:"image/png",media:"(max-width: 1439pxpx)",srcSet:`${U.notFoundTabletpng} 1x, ${U.notFoundTabletpng2x} 2x`}),F.jsx("source",{type:"image/png",media:"(min-width: 1440px)",srcSet:`${B.notFoundDesktoppng} 1x, ${B.notFoundDesktoppng2x} 2x`}),F.jsx("img",{src:`${K.notFoundPhonepng}`,alt:"ErrorImage"})]}),F.jsx(V,{children:"4"})]}),F.jsx(Ie,{children:F.jsx(Fe,{i18nKey:"notfound.text",children:"We’re sorry, the page you requested could not be found. Please go back to the homepage."})}),F.jsx(Pe,{to:"/",children:t("notfound.back")})]})};function Ze(){return F.jsx(De,{})}export{Ze as default};
