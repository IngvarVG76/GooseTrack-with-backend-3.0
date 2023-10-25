import{r as d,j as t,G as v,s as i,g as Z,u as S,d as A,e as q,f as D,h as Y,i as K,k as Q,l as X,m as $,n as J,o as _,p as ee,M as te,q as ne,N as oe,A as re,t as ie,O as se}from"./index-af9f270b.js";import{F as ae}from"./index.esm-02f5f7f5.js";import{P as ce,B as de}from"./index.esm-02e79aee.js";import{_ as P,d as le,i as pe,c as ue,a as xe,u as he,h as B,r as k,b as me,e as fe,m as ge,f as be,g as ve,j as we,k as F,C as je,l as ye,n as ke,s as Ce,o as Ae,p as Se,q as Re,t as Be,v as Fe,w as ze,R as Me,x as Ne,y as Te}from"./Rating-5363fbfa.js";import{_ as b}from"./emotion-styled.browser.esm-9a36c4c0.js";function Ee(...e){return e.reduce((o,r)=>r==null?o:function(...a){o.apply(this,a),r.apply(this,a)},()=>{})}function Pe(e,o=166){let r;function n(...a){const s=()=>{e.apply(this,a)};clearTimeout(r),r=setTimeout(s,o)}return n.clear=()=>{clearTimeout(r)},n}function Le(e,o){return()=>null}function Oe(e,o){var r,n;return d.isValidElement(e)&&o.indexOf((r=e.type.muiName)!=null?r:(n=e.type)==null||(n=n._payload)==null||(n=n.value)==null?void 0:n.muiName)!==-1}function L(e){return e&&e.ownerDocument||document}function Ve(e){return L(e).defaultView||window}function Ge(e,o){return()=>null}const He=typeof window<"u"?d.useLayoutEffect:d.useEffect,O=He;function We(e,o,r,n,a){return null}function Ue(e){const o=d.useRef(e);return O(()=>{o.current=e}),d.useCallback((...r)=>(0,o.current)(...r),[])}const Ie=["sx"],Ze=e=>{var o,r;const n={systemProps:{},otherProps:{}},a=(o=e==null||(r=e.theme)==null?void 0:r.unstable_sxConfig)!=null?o:le;return Object.keys(e).forEach(s=>{a[s]?n.systemProps[s]=e[s]:n.otherProps[s]=e[s]}),n};function qe(e){const{sx:o}=e,r=P(e,Ie),{systemProps:n,otherProps:a}=Ze(r);let s;return Array.isArray(o)?s=[n,...o]:typeof o=="function"?s=(...c)=>{const l=o(...c);return pe(l)?b({},n,l):n}:s=b({},n,o),b({},a,{sx:s})}const De=ue(),Ye=De,Ke=["component","direction","spacing","divider","children","className","useFlexGap"],Qe=xe(),Xe=Ye("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>o.root});function $e(e){return he({props:e,name:"MuiStack",defaultTheme:Qe})}function Je(e,o){const r=d.Children.toArray(e).filter(Boolean);return r.reduce((n,a,s)=>(n.push(a),s<r.length-1&&n.push(d.cloneElement(o,{key:`separator-${s}`})),n),[])}const _e=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],et=({ownerState:e,theme:o})=>{let r=b({display:"flex",flexDirection:"column"},B({theme:o},k({values:e.direction,breakpoints:o.breakpoints.values}),n=>({flexDirection:n})));if(e.spacing){const n=me(o),a=Object.keys(o.breakpoints.values).reduce((p,u)=>((typeof e.spacing=="object"&&e.spacing[u]!=null||typeof e.direction=="object"&&e.direction[u]!=null)&&(p[u]=!0),p),{}),s=k({values:e.direction,base:a}),c=k({values:e.spacing,base:a});typeof s=="object"&&Object.keys(s).forEach((p,u,f)=>{if(!s[p]){const m=u>0?s[f[u-1]]:"column";s[p]=m}}),r=fe(r,B({theme:o},c,(p,u)=>e.useFlexGap?{gap:F(n,p)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${_e(u?s[u]:e.direction)}`]:F(n,p)}}))}return r=ge(o.breakpoints,r),r};function tt(e={}){const{createStyledComponent:o=Xe,useThemeProps:r=$e,componentName:n="MuiStack"}=e,a=()=>ve({root:["root"]},p=>we(n,p),{}),s=o(et);return d.forwardRef(function(p,u){const f=r(p),x=qe(f),{component:m="div",direction:j="column",spacing:w=0,divider:h,children:g,className:y,useFlexGap:H=!1}=x,W=P(x,Ke),U={direction:j,spacing:w,useFlexGap:H},I=a();return t.jsx(s,b({as:m,ownerState:U,ref:u,className:be(I.root,y)},W,{children:h?Je(g,h):g}))})}const nt={configure:e=>{je.configure(e)}},ot=Object.freeze(Object.defineProperty({__proto__:null,capitalize:ye,createChainedFunction:Ee,createSvgIcon:ke,debounce:Pe,deprecatedPropType:Le,isMuiElement:Oe,ownerDocument:L,ownerWindow:Ve,requirePropFactory:Ge,setRef:Ce,unstable_ClassNameGenerator:nt,unstable_useEnhancedEffect:O,unstable_useId:Ae,unsupportedProp:We,useControlled:Se,useEventCallback:Ue,useForkRef:Re,useIsFocusVisible:Be},Symbol.toStringTag,{value:"Module"})),rt=tt({createStyledComponent:Fe("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>o.root}),useThemeProps:e=>ze({props:e,name:"MuiStack"})}),it=rt;function st(e){return v({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"}}]})(e)}function at(e){return v({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"}}]})(e)}const ct="data:image/png;base64,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",dt=i.div`
  display: flex;
  align-items: center;
  justify-content: end;
  padding-bottom: 64px;
  @media screen and (min-width: 1440px) {
    padding-bottom: 33px;
    justify-content: space-between;
  }
`,lt=i.div`
  display: flex;
  align-items: center;
`,pt=i.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 14px;
  }
`;i.div``;const z=i.h2`
  display: none;

  @media screen and (min-width: 1440px) {
    display: block;
    color: ${({theme:e})=>e.name==="dark-theme"?"#fff":"#111"};

    text-shadow:
      0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
      0px 47px 355px rgba(0, 0, 0, 0.07);
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
  }
`,ut=i.button`
  cursor: pointer;
  padding: 8px 20px;
  font-family: var(--main-font);
  border-radius: 10px;
  background: ${({theme:e})=>e.colors.backgroundButton};
  border: none;

  color: ${({theme:e})=>e.colors.textButton};
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 133.333%;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  margin-right: 18px;

  &:hover,
  :focus {
    background-color: #2b78ef;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 128.571%;
    padding: 12px 32px;
    margin-right: 24px;
  }
`,xt=i.button`
  font-size: 24px;
  color: #3e85f3;
  border: none;
  font-family: var(--main-font);
  background-color: transparent;

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`,ht=i.p`
  color: ${({theme:e})=>e.name==="dark-theme"?"#fff":"#343434"};
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 128.571%;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 100%;
  }
`,mt=i.div`
  border-radius: 32px;
  border: 1.8px solid #3e85f3;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
    border-radius: 44px;
  }
`,ft=i(ce)`
  width: 32px;
  height: 32px;
  color: ${({theme:e})=>e.colors.avatarPlaceholder};

  @media screen and (max-width: 767px) {
    width: 44px;
    height: 44px;
  }
`,gt=i.div`
  display: flex;
`,bt=i.p`
  font-size: 14px;
  line-height: 1.3;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};

  span {
    color: #3e85f3;
  }
`;var R={},V={exports:{}};(function(e){function o(r){return r&&r.__esModule?r:{default:r}}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports})(V);var vt=V.exports,C={};const wt=Z(ot);var M;function jt(){return M||(M=1,function(e){"use client";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return o.createSvgIcon}});var o=wt}(C)),C}var yt=vt;Object.defineProperty(R,"__esModule",{value:!0});var G=R.default=void 0,kt=yt(jt()),Ct=t,At=(0,kt.default)((0,Ct.jsx)("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star");G=R.default=At;function St(e){return v({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"}}]})(e)}const Rt=i.div`
  padding: 20px 29px;
  width: 335px;
  max-width: 100%;

  @media screen and (min-width: 768px) {
    padding: 32px;
    width: 468px;
  }
`,Bt=i.p`
  color: ${({theme:e})=>e.colors.modalReviewLabel};

  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 116.667%;
  margin-bottom: 8px;
`,Ft=i.form`
  position: relative;
  margin-top: 32px;
`,zt=i.span`
  color: ${({theme:e})=>e.colors.modalReviewLabel};
  margin-bottom: 16px;
  display: block;

  font-size: 12px;
  font-weight: 500;
  line-height: 116.667%;
`,Mt=i.textarea`
  border-radius: 8px;
  background: ${({theme:e})=>e.name==="dark-theme"?"transparent":"#F6F6F6"};
  padding: 12px 14px;
  width: 295px;
  height: 130px;
  max-width: 100%;
  resize: none;
  border: ${({["data-error"]:e,theme:o})=>e?"1px solid red":o.name==="dark-theme"?"1px solid rgba(255, 255, 255, 0.15)":"none"};
  outline: none;

  &::placeholder {
    color: ${({theme:e})=>e.name!=="dark-theme"?"#343434":"#FFF"};
  }
  color: ${({theme:e})=>e.name!=="dark-theme"?"#343434":"#FFF"};
  font-size: 14px;
  font-weight: 600;
  line-height: 128.571%;

  @media screen and (min-width: 768px) {
    padding: 14px;
    width: 404px;
  }
`,Nt=i.p`
  color: #da1414;
  font-size: 12px;
  font-weight: 400;
  line-height: 116.667%;
`,N=i.div`
  margin-top: 14px;

  display: flex;
  align-items: center;
  gap: 8px;
`,T=i.button`
  cursor: pointer;
  width: 144px;
  max-width: 100%;
  font-family: var(--main-font);
  display: flex;
  justify-content: center;
  padding: 13px 0 13px 0;
  border: none;

  color: #fff;
  border-radius: 8px;
  background: #3e85f3;

  @media screen and (min-width: 768px) {
    width: 198px;
  }
`,E=i.button`
  cursor: pointer;
  width: 144px;
  max-width: 100%;
  display: flex;
  justify-content: center;
  padding: 13px 0 13px 0;
  border: none;

  color: ${({theme:e})=>e.name==="dark-theme"?"#fff":"#343434"};
  font-family: var(--main-font);
  border-radius: 8px;
  background: ${({theme:e})=>e.name==="dark-theme"?"#21222C":"#e5edfa"};
  @media screen and (min-width: 768px) {
    width: 198px;
  }
`,Tt=i.div`
  position: absolute;
  top: -16px;
  right: 0;

  display: flex;
  align-items: center;
  gap: 8px;
`,Et=i.button`
  cursor: pointer;
  color: ${({["data-edit"]:e})=>e==="true"?"#fff":"#3e85f3"};
  padding: 10px;
  border-radius: 50px;
  background: ${({["data-edit"]:e,theme:o})=>e==="true"?"#3E85F3":o.name==="dark-theme"?"#353647":"#e3f3ff"};
  display: flex;
  border: none;
  font-size: 16px;
`,Pt=i.button`
  cursor: pointer;
  color: #ea3d65;
  padding: 10px;
  border-radius: 50px;
  background: rgba(234, 61, 101, 0.2);
  display: flex;
  border: none;
  font-size: 16px;
`,Lt=e=>e.reviews.reviews,Ot=({modal:e,onClickModal:o})=>{const r=S(),n=A(Lt),[a,s]=d.useState(!1),[c,l]=d.useState(!1),[p,u]=d.useState(!0),f={textReview:(n==null?void 0:n.text)||"",rating:(n==null?void 0:n.rating)||5},x=q({initialValues:f,enableReinitialize:!0,validationSchema:D({textReview:Y().max(300,"Must be 300 characters or less").trim().required("Fill in the field! Your feedback is very important to us"),rating:K().required()}),onSubmit:({textReview:w,rating:h})=>{const g=w.trim(),y=c?Q({_id:n._id,text:g,rating:h}):X({text:g,rating:h});l(!1),o(),r(y)}}),m=d.useCallback(()=>{r($())},[r]);d.useEffect(()=>{e&&m()},[e,m]);const j=()=>{r(J(n._id)),s(!0),l(!1),x.setFieldValue("textReview",""),o()};return t.jsxs(Rt,{children:[t.jsx(Bt,{children:"Rating"}),t.jsx(it,{spacing:1,children:t.jsx(Me,{disabled:p&&!!(n!=null&&n.text),name:"text-feedback",value:x.values.rating,onChange:(w,h)=>{x.setFieldValue("rating",h)},precision:.5,emptyIcon:t.jsx(G,{style:{opacity:.55},fontSize:"inherit"})})}),t.jsxs(Ft,{onSubmit:x.handleSubmit,children:[t.jsx("label",{htmlFor:"firstName",children:t.jsx(zt,{children:"Review"})}),t.jsx(Mt,{"data-error":x.errors.textReview,id:"textReview",name:"textReview",type:"text",disabled:p&&!!(n!=null&&n.text),placeholder:"Enter text",onChange:x.handleChange,onBlur:x.onBlur,value:x.values.textReview}),x.errors.textReview&&t.jsx(Nt,{children:x.errors.textReview}),(a||!(n!=null&&n.text))&&t.jsxs(N,{children:[t.jsx(T,{type:"submit",onClick:()=>{s(!1)},children:"Save"}),t.jsx(E,{type:"button",onClick:()=>{x.resetForm()},children:"Cancel"})]}),!!(n!=null&&n.text)&&t.jsxs(Tt,{children:[t.jsx(Et,{"data-edit":c.toString(),type:"button",onClick:()=>{u(!1),l(!0)},children:t.jsx(Ne,{})}),t.jsx(Pt,{type:"button",onClick:j,children:t.jsx(St,{})})]}),c&&t.jsxs(N,{children:[t.jsx(T,{type:"submit",children:"Edit"}),t.jsx(E,{type:"button",onClick:()=>{x.resetForm()},children:"Cancel"})]})]})]})},Vt=({onClickModal:e,modal:o})=>{const r=S(),[n,a]=d.useState(""),s=A(u=>u.theme.lightTheme),c=A(_),{pathname:l}=ee();d.useEffect(()=>{switch(l){case"/account":return a("User Profile");case"/statistics":return a("Statistics");default:a("Calendar");break}},[l]);const p=()=>{r(ne())};return t.jsxs(t.Fragment,{children:[t.jsxs(dt,{children:[l.includes("/day")?t.jsxs(gt,{children:[t.jsx("img",{src:ct,alt:"company logo"}),t.jsxs("div",{children:[t.jsx(z,{children:"Calendar"}),t.jsxs(bt,{children:[t.jsx("span",{children:"Let go"})," of the past and focus on the present!"]})]})]}):t.jsx(z,{children:n}),t.jsxs(lt,{children:[t.jsx(ut,{type:"button",onClick:e,children:"Feedback"}),t.jsxs(pt,{children:[t.jsx(xt,{onClick:p,children:s?t.jsx(ae,{}):t.jsx(at,{})}),t.jsx(ht,{children:c==null?void 0:c.userName}),t.jsx(mt,{children:c!=null&&c.avatarURL?t.jsx("img",{src:c==null?void 0:c.avatarURL,alt:"Img User",loading:"lazy",width:"32"}):t.jsx(ft,{})})]})]})]}),o&&t.jsx(te,{onClose:e,children:t.jsx(Ot,{modal:o,onClickModal:e})})]})};function Gt(e){return v({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M11.5 21h-5.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6"}},{tag:"path",attr:{d:"M16 3v4"}},{tag:"path",attr:{d:"M8 3v4"}},{tag:"path",attr:{d:"M4 11h16"}},{tag:"path",attr:{d:"M15 19l2 2l4 -4"}}]})(e)}function Ht(e){return v({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"}},{tag:"path",attr:{d:"M6 21v-2a4 4 0 0 1 4 -4h4"}},{tag:"path",attr:{d:"M15 19l2 2l4 -4"}}]})(e)}const Wt=i.aside`
  background-color: ${({theme:e})=>e.colors.sideBar};
  padding: 24px 20px;
  max-width: 225px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: left 250ms cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
  top: 0;
  left: ${({["data-isopenmenu"]:e})=>e==="true"?"0":"-100vh"};
  z-index: 200;

  @media screen and (min-width: 768px) {
    padding: 32px;
    max-width: 289px;
  }

  @media screen and (min-width: 1440px) {
    left: 0;
    border-bottom-right-radius: 10px;
  }
`,Ut=i.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  backdrop-filter: blur(2px);
  z-index: 100;
`,It=i.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 32px;
  }
`,Zt=i.img`
  margin-right: 6px;

  @media screen and (min-width: 768px) {
    width: 60px;
  }

  @media screen and (min-width: 1440px) {
    width: 71px;
  }
`,qt=i.button`
  cursor: pointer;
  margin-left: 25px;
  background-color: transparent;
  display: flex;
  border: none;
  text-align: center;
  font-size: 24px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: ${({theme:e})=>e.colors.colorBtnClose};
  &:hover,
  :focus {
    color: #3e85f3;
  }

  @media screen and (min-width: 768px) {
    font-size: 31px;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`,Dt=i.h3`
  color: ${({theme:e})=>e.colors.gooseColor};
  text-shadow:
    0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 137.5%;

  @media screen and (min-width: 768px) {
    line-height: 150%;
  }

  @media screen and (min-width: 1440px) {
    font-size: 24px;
    line-height: 100%;
  }
`,Yt=i.p`
  color: ${({theme:e})=>e.colors.modalReviewLabel};
  font-size: 12px;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`,Kt=i.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`,Qt=i.li``,Xt=i(oe)`
  background-color: transparent;
  border: none;
  color: ${({theme:e})=>e.colors.textNav};
  min-width: 185px;
  max-width: 100%;
  padding: 10px 0 10px 14px;

  font-size: 16px;
  font-family: var(--main-font);
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  gap: 8px;

  &.active {
    color: ${({theme:e})=>e.colors.activeTextColorBtn};
    background-color: ${({theme:e})=>e.colors.activeNavBackground};
    border-radius: 8px;
  }

  @media screen and (min-width: 768px) {
    gap: 10px;
    min-width: 225px;
    padding: 16px 0 16px 20px;
  }

  @media screen and (min-width: 1440px) {
    gap: 16px;
    min-width: 241px;
  }
`,$t=i.button`
  max-width: 131px;
  padding: 14px 28px;
  cursor: pointer;
  border: none; //* delate after transfer to the project (change to the NavLink)
  border-radius: 16px;
  background-color: #3e85f3;
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);

  color: #fff;
  font-family: var(--main-font);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 128.571%;
  letter-spacing: -0.28px;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  :focus {
    background-color: #2b78ef;
  }

  @media screen and (min-width: 768px) {
    max-width: 141px;
    font-size: 18px;
    line-height: 133.333%;
    padding: 18px 23px;
    gap: 11px;
  }
`,Jt="/GooseTrack-with-backend-3.0/assets/goose-b174e7d2.png",_t=({onClickMenu:e,nav:o,setNavOpen:r})=>{const n=S(),a=l=>{l.target===l.currentTarget&&e()},s=[{name:"My account",icon:t.jsx(Ht,{}),to:"/account"},{name:"Calendar",icon:t.jsx(Gt,{}),to:"/calendar"},{name:"Statistics",icon:t.jsx(de,{}),to:"/statistics"}],c=()=>{r(!1),n(ie())};return t.jsxs(t.Fragment,{children:[o&&t.jsx(Ut,{onClick:a}),t.jsxs(Wt,{"data-isopenmenu":o.toString(),children:[t.jsxs("div",{children:[t.jsxs(It,{children:[t.jsx(Zt,{src:Jt,alt:"gosse",width:"36"}),t.jsx(Dt,{children:"GooseTrack"}),t.jsx(qt,{type:"button",onClick:e,children:t.jsx(re,{})})]}),t.jsx(Yt,{children:"User Panel"}),t.jsx("nav",{children:t.jsx(Kt,{children:s.map(({name:l,icon:p,to:u})=>t.jsx(Qt,{children:t.jsxs(Xt,{activeclassname:"active",to:u,children:[p,l]})},l))})})]}),t.jsxs($t,{className:"log_out",type:"button",onClick:c,children:["Log out ",t.jsx(Te,{})]})]})]})},en=i.div`
  background: ${({theme:e})=>e.colors.primaryBackground};
  height: 100vh;
  position: relative;
  max-width: 375px;
  margin: 0 auto;
  padding: 24px 20px 40px 28px;
  display: flex;
  justify-content: center;
  overflow-y: scroll;
  overflow-x: hidden;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 24px 32px 38px 32px;
  }
  @media screen and (min-width: 1440px) {
    justify-content: flex-end;
    max-width: 1440px;
    padding: 40px 32px 32px 0;
  }
`,tn=i.header``,nn=i.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: max-content;
  @media screen and (min-width: 1440px) {
    width: 79.5%;
    padding-left: 32px;
    flex-grow: 0;
  }
`,on=i.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  font-size: 24px;
  font-family: var(--main-font);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
  top: 28px;
  left: 20px;
  color: ${({theme:e})=>e.colors.colorBtnClose};

  &:hover,
  :focus {
    color: #3e85f3;
  }

  @media screen and (min-width: 768px) {
    font-size: 34px;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`,ln=()=>{const[e,o]=d.useState(!1),[r,n]=d.useState(!1),a=d.useCallback(()=>{n(!r),r?document.body.style.overflow="auto":document.body.style.overflow="hidden"},[r]),s=()=>o(!e);return d.useEffect(()=>{e?document.body.style.overflow="hidden":document.body.style.overflow="auto"},[e]),t.jsxs(en,{children:[t.jsxs(tn,{children:[t.jsx(on,{type:"button",onClick:s,children:t.jsx(st,{})}),t.jsx(_t,{onClickMenu:s,nav:e,setNavOpen:o})]}),t.jsxs(nn,{children:[t.jsx(Vt,{onClickModal:a,modal:r}),t.jsx(d.Suspense,{children:t.jsx(se,{})})]})]})};export{ln as default};
