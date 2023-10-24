import{r as d,j as t,G as v,s as i,g as q,u as S,d as z,e as D,f as G,h as W,i as A,k as Z,l as Y,m as J,n as K,o as Q,p as X,M as ee,q as te,N as ne,A as oe,t as re,O as ie}from"./index-77878e25.js";import{F as ae}from"./index.esm-ad895609.js";import{P as se,B as ce}from"./index.esm-2bb4c425.js";import{_ as E,d as de,i as le,c as pe,a as ue,u as xe,h as $,r as j,b as he,e as me,m as fe,f as ge,g as be,j as ve,k as M,C as ye,l as we,n as ke,s as je,o as Ce,p as ze,q as Se,t as Re,v as $e,w as Me,R as Be,x as Fe,y as _e}from"./Rating-0952129e.js";import{_ as b}from"./emotion-styled.browser.esm-d154034d.js";function Pe(...e){return e.reduce((o,r)=>r==null?o:function(...s){o.apply(this,s),r.apply(this,s)},()=>{})}function Ee(e,o=166){let r;function n(...s){const a=()=>{e.apply(this,s)};clearTimeout(r),r=setTimeout(a,o)}return n.clear=()=>{clearTimeout(r)},n}function Le(e,o){return()=>null}function Ve(e,o){var r,n;return d.isValidElement(e)&&o.indexOf((r=e.type.muiName)!=null?r:(n=e.type)==null||(n=n._payload)==null||(n=n.value)==null?void 0:n.muiName)!==-1}function L(e){return e&&e.ownerDocument||document}function Te(e){return L(e).defaultView||window}function Ne(e,o){return()=>null}const Oe=typeof window<"u"?d.useLayoutEffect:d.useEffect,V=Oe;function He(e,o,r,n,s){return null}function Ie(e){const o=d.useRef(e);return V(()=>{o.current=e}),d.useCallback((...r)=>(0,o.current)(...r),[])}const Ue=["sx"],qe=e=>{var o,r;const n={systemProps:{},otherProps:{}},s=(o=e==null||(r=e.theme)==null?void 0:r.unstable_sxConfig)!=null?o:de;return Object.keys(e).forEach(a=>{s[a]?n.systemProps[a]=e[a]:n.otherProps[a]=e[a]}),n};function De(e){const{sx:o}=e,r=E(e,Ue),{systemProps:n,otherProps:s}=qe(r);let a;return Array.isArray(o)?a=[n,...o]:typeof o=="function"?a=(...c)=>{const p=o(...c);return le(p)?b({},n,p):n}:a=b({},n,o),b({},s,{sx:a})}const Ge=pe(),We=Ge,Ae=["component","direction","spacing","divider","children","className","useFlexGap"],Ze=ue(),Ye=We("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>o.root});function Je(e){return xe({props:e,name:"MuiStack",defaultTheme:Ze})}function Ke(e,o){const r=d.Children.toArray(e).filter(Boolean);return r.reduce((n,s,a)=>(n.push(s),a<r.length-1&&n.push(d.cloneElement(o,{key:`separator-${a}`})),n),[])}const Qe=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],Xe=({ownerState:e,theme:o})=>{let r=b({display:"flex",flexDirection:"column"},$({theme:o},j({values:e.direction,breakpoints:o.breakpoints.values}),n=>({flexDirection:n})));if(e.spacing){const n=he(o),s=Object.keys(o.breakpoints.values).reduce((l,u)=>((typeof e.spacing=="object"&&e.spacing[u]!=null||typeof e.direction=="object"&&e.direction[u]!=null)&&(l[u]=!0),l),{}),a=j({values:e.direction,base:s}),c=j({values:e.spacing,base:s});typeof a=="object"&&Object.keys(a).forEach((l,u,f)=>{if(!a[l]){const m=u>0?a[f[u-1]]:"column";a[l]=m}}),r=me(r,$({theme:o},c,(l,u)=>e.useFlexGap?{gap:M(n,l)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${Qe(u?a[u]:e.direction)}`]:M(n,l)}}))}return r=fe(o.breakpoints,r),r};function et(e={}){const{createStyledComponent:o=Ye,useThemeProps:r=Je,componentName:n="MuiStack"}=e,s=()=>be({root:["root"]},l=>ve(n,l),{}),a=o(Xe);return d.forwardRef(function(l,u){const f=r(l),x=De(f),{component:m="div",direction:w="column",spacing:y=0,divider:h,children:g,className:k,useFlexGap:O=!1}=x,H=E(x,Ae),I={direction:w,spacing:y,useFlexGap:O},U=s();return t.jsx(a,b({as:m,ownerState:I,ref:u,className:ge(U.root,k)},H,{children:h?Ke(g,h):g}))})}const tt={configure:e=>{ye.configure(e)}},nt=Object.freeze(Object.defineProperty({__proto__:null,capitalize:we,createChainedFunction:Pe,createSvgIcon:ke,debounce:Ee,deprecatedPropType:Le,isMuiElement:Ve,ownerDocument:L,ownerWindow:Te,requirePropFactory:Ne,setRef:je,unstable_ClassNameGenerator:tt,unstable_useEnhancedEffect:V,unstable_useId:Ce,unsupportedProp:He,useControlled:ze,useEventCallback:Ie,useForkRef:Se,useIsFocusVisible:Re},Symbol.toStringTag,{value:"Module"})),ot=et({createStyledComponent:$e("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>o.root}),useThemeProps:e=>Me({props:e,name:"MuiStack"})}),rt=ot;function it(e){return v({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"}}]})(e)}function at(e){return v({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"}}]})(e)}const st=i.div`
  display: flex;
  align-items: center;
  justify-content: end;
  padding-bottom: 64px;
  @media screen and (min-width: 1440px) {
    padding-bottom: 33px;
    justify-content: space-between;
  }
`,ct=i.div`
  display: flex;
  align-items: center;
`,dt=i.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 14px;
  }
`;i.div``;const lt=i.h2`
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
`,pt=i.button`
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
`,ut=i.button`
  font-size: 24px;
  color: #3e85f3;
  border: none;
  font-family: var(--main-font);
  background-color: transparent;

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`,xt=i.p`
  color: ${({theme:e})=>e.name==="dark-theme"?"#fff":"#343434"};
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 128.571%;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 100%;
  }
`,ht=i.div`
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
`,mt=i(se)`
  width: 32px;
  height: 32px;
  color: ${({theme:e})=>e.colors.avatarPlaceholder};

  @media screen and (max-width: 767px) {
    width: 44px;
    height: 44px;
  }
`;var R={},T={exports:{}};(function(e){function o(r){return r&&r.__esModule?r:{default:r}}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports})(T);var ft=T.exports,C={};const gt=q(nt);var B;function bt(){return B||(B=1,function(e){"use client";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return o.createSvgIcon}});var o=gt}(C)),C}var vt=ft;Object.defineProperty(R,"__esModule",{value:!0});var N=R.default=void 0,yt=vt(bt()),wt=t,kt=(0,yt.default)((0,wt.jsx)("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star");N=R.default=kt;function jt(e){return v({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"}}]})(e)}const Ct=i.div`
  padding: 20px 29px;
  width: 335px;
  max-width: 100%;

  @media screen and (min-width: 768px) {
    padding: 32px;
    width: 468px;
  }
`,zt=i.p`
  color: ${({theme:e})=>e.colors.modalReviewLabel};

  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 116.667%;
  margin-bottom: 8px;
`,St=i.form`
  position: relative;
  margin-top: 32px;
`,Rt=i.span`
  color: ${({theme:e})=>e.colors.modalReviewLabel};
  margin-bottom: 16px;
  display: block;

  font-size: 12px;
  font-weight: 500;
  line-height: 116.667%;
`,$t=i.textarea`
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
`,Mt=i.p`
  color: #da1414;
  font-size: 12px;
  font-weight: 400;
  line-height: 116.667%;
`,F=i.div`
  margin-top: 14px;

  display: flex;
  align-items: center;
  gap: 8px;
`,_=i.button`
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
`,P=i.button`
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
`,Bt=i.div`
  position: absolute;
  top: -16px;
  right: 0;

  display: flex;
  align-items: center;
  gap: 8px;
`,Ft=i.button`
  cursor: pointer;
  color: ${({["data-edit"]:e})=>e==="true"?"#fff":"#3e85f3"};
  padding: 10px;
  border-radius: 50px;
  background: ${({["data-edit"]:e,theme:o})=>e==="true"?"#3E85F3":o.name==="dark-theme"?"#353647":"#e3f3ff"};
  display: flex;
  border: none;
  font-size: 16px;
`,_t=i.button`
  cursor: pointer;
  color: #ea3d65;
  padding: 10px;
  border-radius: 50px;
  background: rgba(234, 61, 101, 0.2);
  display: flex;
  border: none;
  font-size: 16px;
`,Pt=e=>e.reviews.reviews,Et=({modal:e,onClickModal:o})=>{const r=S(),n=z(Pt),[s,a]=d.useState(!1),[c,p]=d.useState(!1),[l,u]=d.useState(!0),f={textReview:(n==null?void 0:n.text)||"",rating:(n==null?void 0:n.rating)||5},x=D({initialValues:f,enableReinitialize:!0,validationSchema:G({textReview:W().max(300,"Must be 300 characters or less").trim().required("Fill in the field! Your feedback is very important to us"),rating:A().required()}),onSubmit:({textReview:y,rating:h})=>{const g=y.trim(),k=c?Z({_id:n._id,text:g,rating:h}):Y({text:g,rating:h});p(!1),o(),r(k)}}),m=d.useCallback(()=>{r(J())},[r]);d.useEffect(()=>{e&&m()},[e,m]);const w=()=>{r(K(n._id)),a(!0),p(!1),x.setFieldValue("textReview",""),o()};return t.jsxs(Ct,{children:[t.jsx(zt,{children:"Rating"}),t.jsx(rt,{spacing:1,children:t.jsx(Be,{disabled:l&&!!(n!=null&&n.text),name:"text-feedback",value:x.values.rating,onChange:(y,h)=>{x.setFieldValue("rating",h)},precision:.5,emptyIcon:t.jsx(N,{style:{opacity:.55},fontSize:"inherit"})})}),t.jsxs(St,{onSubmit:x.handleSubmit,children:[t.jsx("label",{htmlFor:"firstName",children:t.jsx(Rt,{children:"Review"})}),t.jsx($t,{"data-error":x.errors.textReview,id:"textReview",name:"textReview",type:"text",disabled:l&&!!(n!=null&&n.text),placeholder:"Enter text",onChange:x.handleChange,onBlur:x.onBlur,value:x.values.textReview}),x.errors.textReview&&t.jsx(Mt,{children:x.errors.textReview}),(s||!(n!=null&&n.text))&&t.jsxs(F,{children:[t.jsx(_,{type:"submit",onClick:()=>{a(!1)},children:"Save"}),t.jsx(P,{type:"button",onClick:()=>{x.resetForm()},children:"Cancel"})]}),!!(n!=null&&n.text)&&t.jsxs(Bt,{children:[t.jsx(Ft,{"data-edit":c.toString(),type:"button",onClick:()=>{u(!1),p(!0)},children:t.jsx(Fe,{})}),t.jsx(_t,{type:"button",onClick:w,children:t.jsx(jt,{})})]}),c&&t.jsxs(F,{children:[t.jsx(_,{type:"submit",children:"Edit"}),t.jsx(P,{type:"button",onClick:()=>{x.resetForm()},children:"Cancel"})]})]})]})},Lt=({onClickModal:e,modal:o})=>{const r=S(),[n,s]=d.useState(""),a=z(u=>u.theme.lightTheme),c=z(Q),{pathname:p}=X();d.useEffect(()=>{switch(p){case"/account":return s("User Profile");case"/statistics":return s("Statistics");case"/calendar":return s("Calendar")}},[p]);const l=()=>{r(te())};return t.jsxs(t.Fragment,{children:[t.jsxs(st,{children:[t.jsx(lt,{children:n}),t.jsxs(ct,{children:[t.jsx(pt,{type:"button",onClick:e,children:"Feedback"}),t.jsxs(dt,{children:[t.jsx(ut,{onClick:l,children:a?t.jsx(ae,{}):t.jsx(at,{})}),t.jsx(xt,{children:c==null?void 0:c.userName}),t.jsx(ht,{children:c!=null&&c.avatarURL?t.jsx("img",{src:c==null?void 0:c.avatarURL,alt:"Img User",loading:"lazy",width:"32"}):t.jsx(mt,{})})]})]})]}),o&&t.jsx(ee,{onClose:e,children:t.jsx(Et,{modal:o,onClickModal:e})})]})};function Vt(e){return v({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M11.5 21h-5.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6"}},{tag:"path",attr:{d:"M16 3v4"}},{tag:"path",attr:{d:"M8 3v4"}},{tag:"path",attr:{d:"M4 11h16"}},{tag:"path",attr:{d:"M15 19l2 2l4 -4"}}]})(e)}function Tt(e){return v({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"}},{tag:"path",attr:{d:"M6 21v-2a4 4 0 0 1 4 -4h4"}},{tag:"path",attr:{d:"M15 19l2 2l4 -4"}}]})(e)}const Nt=i.aside`
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
`,Ot=i.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  backdrop-filter: blur(2px);
  z-index: 100;
`,Ht=i.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 32px;
  }
`,It=i.img`
  margin-right: 6px;

  @media screen and (min-width: 768px) {
    width: 60px;
  }

  @media screen and (min-width: 1440px) {
    width: 71px;
  }
`,Ut=i.button`
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
`,qt=i.h3`
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
`,Dt=i.p`
  color: ${({theme:e})=>e.colors.modalReviewLabel};
  font-size: 12px;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`,Gt=i.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`,Wt=i.li``,At=i(ne)`
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
`,Zt=i.button`
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
`,Yt="/GooseTrack-with-backend-3.0/assets/goose-b174e7d2.png",Jt=({onClickMenu:e,nav:o,setNavOpen:r})=>{const n=S(),s=p=>{p.target===p.currentTarget&&e()},a=[{name:"My account",icon:t.jsx(Tt,{}),to:"/account"},{name:"Calendar",icon:t.jsx(Vt,{}),to:"/calendar"},{name:"Statistics",icon:t.jsx(ce,{}),to:"/statistics"}],c=()=>{r(!1),n(re())};return t.jsxs(t.Fragment,{children:[o&&t.jsx(Ot,{onClick:s}),t.jsxs(Nt,{"data-isopenmenu":o.toString(),children:[t.jsxs("div",{children:[t.jsxs(Ht,{children:[t.jsx(It,{src:Yt,alt:"gosse",width:"36"}),t.jsx(qt,{children:"GooseTrack"}),t.jsx(Ut,{type:"button",onClick:e,children:t.jsx(oe,{})})]}),t.jsx(Dt,{children:"User Panel"}),t.jsx("nav",{children:t.jsx(Gt,{children:a.map(({name:p,icon:l,to:u})=>t.jsx(Wt,{children:t.jsxs(At,{activeclassname:"active",to:u,children:[l,p]})},p))})})]}),t.jsxs(Zt,{className:"log_out",type:"button",onClick:c,children:["Log out ",t.jsx(_e,{})]})]})]})},Kt=i.div`
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
`,Qt=i.header``,Xt=i.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: max-content;
  @media screen and (min-width: 1440px) {
    width: 79.5%;
    padding-left: 32px;
    flex-grow: 0;
  }
`,en=i.button`
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
`,sn=()=>{const[e,o]=d.useState(!1),[r,n]=d.useState(!1),s=d.useCallback(()=>{n(!r),r?document.body.style.overflow="auto":document.body.style.overflow="hidden"},[r]),a=()=>o(!e);return d.useEffect(()=>{e?document.body.style.overflow="hidden":document.body.style.overflow="auto"},[e]),t.jsxs(Kt,{children:[t.jsxs(Qt,{children:[t.jsx(en,{type:"button",onClick:a,children:t.jsx(it,{})}),t.jsx(Jt,{onClickMenu:a,nav:e,setNavOpen:o})]}),t.jsxs(Xt,{children:[t.jsx(Lt,{onClickModal:s,modal:r}),t.jsx(d.Suspense,{children:t.jsx(ie,{})})]})]})};export{sn as default};
