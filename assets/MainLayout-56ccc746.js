import{r as l,j as t,G as b,s as i,g as G,u as C,b as j,d as U,e as W,f as q,h as A,i as Z,k as Y,l as J,m as K,n as Q,M as X,o as ee,N as te,A as ne,p as oe,O as re}from"./index-e4a589ba.js";import{F as ie}from"./index.esm-559e471c.js";import{_ as P,d as ae,i as se,c as ce,a as le,u as de,h as M,r as w,b as pe,e as ue,m as xe,f as he,g as me,j as fe,k as R,C as ge,l as be,n as ve,s as ye,o as we,p as ke,q as je,t as Ce,v as ze,w as Se,R as Me,x as Re,y as $e}from"./Rating-a7afd2c5.js";import{_ as g}from"./emotion-styled.browser.esm-d2915de5.js";import{B as Fe}from"./index.esm-b8b50da2.js";function _e(...e){return e.reduce((n,r)=>r==null?n:function(...c){n.apply(this,c),r.apply(this,c)},()=>{})}function Be(e,n=166){let r;function o(...c){const a=()=>{e.apply(this,c)};clearTimeout(r),r=setTimeout(a,n)}return o.clear=()=>{clearTimeout(r)},o}function Pe(e,n){return()=>null}function Ee(e,n){var r,o;return l.isValidElement(e)&&n.indexOf((r=e.type.muiName)!=null?r:(o=e.type)==null||(o=o._payload)==null||(o=o.value)==null?void 0:o.muiName)!==-1}function E(e){return e&&e.ownerDocument||document}function Te(e){return E(e).defaultView||window}function Ve(e,n){return()=>null}const Le=typeof window<"u"?l.useLayoutEffect:l.useEffect,T=Le;function Ne(e,n,r,o,c){return null}function Oe(e){const n=l.useRef(e);return T(()=>{n.current=e}),l.useCallback((...r)=>(0,n.current)(...r),[])}const He=["sx"],Ie=e=>{var n,r;const o={systemProps:{},otherProps:{}},c=(n=e==null||(r=e.theme)==null?void 0:r.unstable_sxConfig)!=null?n:ae;return Object.keys(e).forEach(a=>{c[a]?o.systemProps[a]=e[a]:o.otherProps[a]=e[a]}),o};function De(e){const{sx:n}=e,r=P(e,He),{systemProps:o,otherProps:c}=Ie(r);let a;return Array.isArray(n)?a=[o,...n]:typeof n=="function"?a=(...u)=>{const d=n(...u);return se(d)?g({},o,d):o}:a=g({},o,n),g({},c,{sx:a})}const Ge=ce(),Ue=Ge,We=["component","direction","spacing","divider","children","className","useFlexGap"],qe=le(),Ae=Ue("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,n)=>n.root});function Ze(e){return de({props:e,name:"MuiStack",defaultTheme:qe})}function Ye(e,n){const r=l.Children.toArray(e).filter(Boolean);return r.reduce((o,c,a)=>(o.push(c),a<r.length-1&&o.push(l.cloneElement(n,{key:`separator-${a}`})),o),[])}const Je=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],Ke=({ownerState:e,theme:n})=>{let r=g({display:"flex",flexDirection:"column"},M({theme:n},w({values:e.direction,breakpoints:n.breakpoints.values}),o=>({flexDirection:o})));if(e.spacing){const o=pe(n),c=Object.keys(n.breakpoints.values).reduce((p,s)=>((typeof e.spacing=="object"&&e.spacing[s]!=null||typeof e.direction=="object"&&e.direction[s]!=null)&&(p[s]=!0),p),{}),a=w({values:e.direction,base:c}),u=w({values:e.spacing,base:c});typeof a=="object"&&Object.keys(a).forEach((p,s,x)=>{if(!a[p]){const h=s>0?a[x[s-1]]:"column";a[p]=h}}),r=ue(r,M({theme:n},u,(p,s)=>e.useFlexGap?{gap:R(o,p)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${Je(s?a[s]:e.direction)}`]:R(o,p)}}))}return r=xe(n.breakpoints,r),r};function Qe(e={}){const{createStyledComponent:n=Ae,useThemeProps:r=Ze,componentName:o="MuiStack"}=e,c=()=>me({root:["root"]},p=>fe(o,p),{}),a=n(Ke);return l.forwardRef(function(p,s){const x=r(p),f=De(x),{component:h="div",direction:m="column",spacing:v=0,divider:y,children:S,className:N,useFlexGap:O=!1}=f,H=P(f,We),I={direction:m,spacing:v,useFlexGap:O},D=c();return t.jsx(a,g({as:h,ownerState:I,ref:s,className:he(D.root,N)},H,{children:y?Ye(S,y):S}))})}const Xe={configure:e=>{ge.configure(e)}},et=Object.freeze(Object.defineProperty({__proto__:null,capitalize:be,createChainedFunction:_e,createSvgIcon:ve,debounce:Be,deprecatedPropType:Pe,isMuiElement:Ee,ownerDocument:E,ownerWindow:Te,requirePropFactory:Ve,setRef:ye,unstable_ClassNameGenerator:Xe,unstable_useEnhancedEffect:T,unstable_useId:we,unsupportedProp:Ne,useControlled:ke,useEventCallback:Oe,useForkRef:je,useIsFocusVisible:Ce},Symbol.toStringTag,{value:"Module"})),tt=Qe({createStyledComponent:ze("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,n)=>n.root}),useThemeProps:e=>Se({props:e,name:"MuiStack"})}),nt=tt;function ot(e){return b({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"}}]})(e)}function rt(e){return b({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"}}]})(e)}const it=i.div`
  display: flex;
  align-items: center;
  justify-content: end;
  padding-bottom: 64px;
  @media screen and (min-width: 1440px) {
    padding-bottom: 33px;
    justify-content: space-between;
  }
`,at=i.div`
  display: flex;
  align-items: center;
`,st=i.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 14px;
  }
`;i.div``;const ct=i.h2`
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
`,lt=i.button`
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
`,dt=i.button`
  font-size: 24px;
  color: #3e85f3;
  border: none;
  font-family: var(--main-font);
  background-color: transparent;

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`,pt=i.p`
  color: ${({theme:e})=>e.name==="dark-theme"?"#fff":"#343434"};
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 128.571%;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 100%;
  }
`,ut=i.img`
  border-radius: 32px;
  border: 1.8px solid #3e85f3;
  width: 32px;
  height: 32px;

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
    border-radius: 44px;
  }
`;var z={},V={exports:{}};(function(e){function n(r){return r&&r.__esModule?r:{default:r}}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports})(V);var xt=V.exports,k={};const ht=G(et);var $;function mt(){return $||($=1,function(e){"use client";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.createSvgIcon}});var n=ht}(k)),k}var ft=xt;Object.defineProperty(z,"__esModule",{value:!0});var L=z.default=void 0,gt=ft(mt()),bt=t,vt=(0,gt.default)((0,bt.jsx)("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star");L=z.default=vt;function yt(e){return b({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"}}]})(e)}const wt=i.div`
  padding: 20px 29px;
  width: 335px;
  max-width: 100%;

  @media screen and (min-width: 768px) {
    padding: 32px;
    width: 468px;
  }
`,kt=i.p`
  color: ${({theme:e})=>e.colors.modalReviewLabel};

  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 116.667%;
  margin-bottom: 8px;
`,jt=i.form`
  position: relative;
  margin-top: 32px;
`,Ct=i.span`
  color: ${({theme:e})=>e.colors.modalReviewLabel};
  margin-bottom: 16px;
  display: block;

  font-size: 12px;
  font-weight: 500;
  line-height: 116.667%;
`,zt=i.textarea`
  border-radius: 8px;
  background: ${({theme:e})=>e.name==="dark-theme"?"transparent":"#F6F6F6"};
  padding: 12px 14px;
  width: 295px;
  height: 130px;
  max-width: 100%;
  resize: none;
  border: ${({["data-error"]:e,theme:n})=>e?"1px solid red":n.name==="dark-theme"?"1px solid rgba(255, 255, 255, 0.15)":"none"};
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
`,St=i.p`
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
`,B=i.button`
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
`,Mt=i.div`
  position: absolute;
  top: -16px;
  right: 0;

  display: flex;
  align-items: center;
  gap: 8px;
`,Rt=i.button`
  cursor: pointer;
  color: ${({["data-edit"]:e})=>e==="true"?"#fff":"#3e85f3"};
  padding: 10px;
  border-radius: 50px;
  background: ${({["data-edit"]:e,theme:n})=>e==="true"?"#3E85F3":n.name==="dark-theme"?"#353647":"#e3f3ff"};
  display: flex;
  border: none;
  font-size: 16px;
`,$t=i.button`
  cursor: pointer;
  color: #ea3d65;
  padding: 10px;
  border-radius: 50px;
  background: rgba(234, 61, 101, 0.2);
  display: flex;
  border: none;
  font-size: 16px;
`,Ft=e=>e.reviews.reviews,_t=({modal:e,onClickModal:n})=>{const r=C(),o=j(Ft),[c,a]=l.useState(!1),[u,d]=l.useState(!1),p={textReview:(o==null?void 0:o.text)||"",rating:(o==null?void 0:o.rating)||5},s=U({initialValues:p,enableReinitialize:!0,validationSchema:W({textReview:q().max(300,"Must be 300 characters or less").trim().required("Fill in the field! Your feedback is very important to us")}),onSubmit:({textReview:h,rating:m})=>{const v=h.trim(),y=u?A({_id:o._id,text:v,rating:m}):Z({text:v,rating:m});d(!1),n(),r(y)}}),x=l.useCallback(()=>{r(Y())},[r]);l.useEffect(()=>{e&&x()},[e,x]);const f=()=>{r(J(o._id)),a(!0),d(!1),s.setFieldValue("textReview",""),n()};return t.jsxs(wt,{children:[t.jsx(kt,{children:"Rating"}),t.jsx(nt,{spacing:1,children:t.jsx(Me,{name:"text-feedback",value:s.values.rating,onChange:(h,m)=>{s.setFieldValue("rating",m)},precision:.5,emptyIcon:t.jsx(L,{style:{opacity:.55},fontSize:"inherit"})})}),t.jsxs(jt,{onSubmit:s.handleSubmit,children:[t.jsx("label",{htmlFor:"firstName",children:t.jsx(Ct,{children:"Review"})}),t.jsx(zt,{"data-error":s.errors.textReview,id:"textReview",name:"textReview",type:"text",placeholder:"Enter text",onChange:s.handleChange,onBlur:s.onBlur,value:s.values.textReview}),s.errors.textReview&&t.jsx(St,{children:s.errors.textReview}),(c||(o==null?void 0:o.length)===0)&&t.jsxs(F,{children:[t.jsx(_,{type:"submit",onClick:()=>{a(!1)},children:"Save"}),t.jsx(B,{type:"button",onClick:()=>{s.resetForm()},children:"Cancel"})]}),(o==null?void 0:o.length)!==0&&o!==null&&t.jsxs(Mt,{children:[t.jsx(Rt,{"data-edit":u.toString(),type:"button",onClick:()=>{d(!0)},children:t.jsx(Re,{})}),t.jsx($t,{type:"button",onClick:f,children:t.jsx(yt,{})})]}),u&&t.jsxs(F,{children:[t.jsx(_,{type:"submit",children:"Edit"}),t.jsx(B,{type:"button",onClick:()=>{s.resetForm()},children:"Cancel"})]})]})]})},Bt="/GooseTrack-with-backend-3.0/assets/user-c5327e69.jpg",Pt=({onClickModal:e,modal:n})=>{const r=C(),[o,c]=l.useState(""),a=j(s=>s.theme.lightTheme),u=j(K),{pathname:d}=Q();l.useEffect(()=>{switch(d){case"/account":return c("User Profile");case"/statistics":return c("Statistics");case"/calendar":return c("Calendar")}},[d]);const p=()=>{r(ee())};return t.jsxs(t.Fragment,{children:[t.jsxs(it,{children:[t.jsx(ct,{children:o}),t.jsxs(at,{children:[t.jsx(lt,{type:"button",onClick:e,children:"Feedback"}),t.jsxs(st,{children:[t.jsx(dt,{onClick:p,children:a?t.jsx(ie,{}):t.jsx(rt,{})}),t.jsx(pt,{children:u==null?void 0:u.userName}),t.jsx(ut,{src:Bt,alt:"Img User",loading:"lazy",width:"32"})]})]})]}),n&&t.jsx(X,{onClose:e,children:t.jsx(_t,{modal:n,onClickModal:e})})]})};function Et(e){return b({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M11.5 21h-5.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6"}},{tag:"path",attr:{d:"M16 3v4"}},{tag:"path",attr:{d:"M8 3v4"}},{tag:"path",attr:{d:"M4 11h16"}},{tag:"path",attr:{d:"M15 19l2 2l4 -4"}}]})(e)}function Tt(e){return b({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"}},{tag:"path",attr:{d:"M6 21v-2a4 4 0 0 1 4 -4h4"}},{tag:"path",attr:{d:"M15 19l2 2l4 -4"}}]})(e)}const Vt=i.aside`
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
  }
`,Lt=i.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  backdrop-filter: blur(2px);
  z-index: 100;
`,Nt=i.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 32px;
  }
`,Ot=i.img`
  margin-right: 6px;

  @media screen and (min-width: 768px) {
    width: 60px;
  }

  @media screen and (min-width: 1440px) {
    width: 71px;
  }
`,Ht=i.button`
  cursor: pointer;
  margin-left: 25px;
  background-color: transparent;
  display: flex;
  border: none;
  text-align: center;
  font-size: 24px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: ${({theme:e})=>e.colors.arrowColor};
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
`,It=i.h3`
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
`,Ut=i.li``,Wt=i(te)`
  background-color: transparent;
  border: none; //* delate after transfer to the project (change to the NavLink)
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
`,qt=i.button`
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
`,At="/GooseTrack-with-backend-3.0/assets/goose-b174e7d2.png",Zt=({onClickMenu:e,nav:n,setNavOpen:r})=>{const o=C(),c=d=>{d.target===d.currentTarget&&e()},a=[{name:"My account",icon:t.jsx(Tt,{}),to:"/account"},{name:"Calendar",icon:t.jsx(Et,{}),to:"/calendar"},{name:"Statistics",icon:t.jsx(Fe,{}),to:"/statistics"}],u=()=>{r(!1),o(oe())};return t.jsxs(t.Fragment,{children:[n&&t.jsx(Lt,{onClick:c}),t.jsxs(Vt,{"data-isopenmenu":n.toString(),children:[t.jsxs("div",{children:[t.jsxs(Nt,{children:[t.jsx(Ot,{src:At,alt:"gosse",width:"36"}),t.jsx(It,{children:"GooseTrack"}),t.jsx(Ht,{type:"button",onClick:e,children:t.jsx(ne,{})})]}),t.jsx(Dt,{children:"User Panel"}),t.jsx("nav",{children:t.jsx(Gt,{children:a.map(({name:d,icon:p,to:s})=>t.jsx(Ut,{children:t.jsxs(Wt,{activeclassname:"active",to:s,children:[p,d]})},d))})})]}),t.jsxs(qt,{className:"log_out",type:"button",onClick:u,children:["Log out ",t.jsx($e,{})]})]})]})},Yt=i.div`
  background: ${({theme:e})=>e.colors.primaryBackground};
  height: 100vh;
  position: relative;
  max-width: 375px;
  margin: 0 auto;
  padding: 24px 20px 40px 28px;
  display: flex;
  justify-content: flex-end;
  overflow-y: scroll;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 24px 32px 38px 32px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 40px 32px 32px 0;
  }
`,Jt=i.header``,Kt=i.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  @media screen and (min-width: 1440px) {
    width: 79.5%;
    padding-left: 32px;
    flex-grow: 0;
  }
`,Qt=i.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  font-size: 24px;
  font-family: var(--main-font);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
  top: 28px;
  left: 20px;
  color: ${({theme:e})=>e.colors.arrowColor};

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
`,rn=()=>{const[e,n]=l.useState(!1),[r,o]=l.useState(!1),c=l.useCallback(()=>{o(!r),r?document.body.style.overflow="auto":document.body.style.overflow="hidden"},[r]),a=()=>n(!e);return l.useEffect(()=>{e?document.body.style.overflow="hidden":document.body.style.overflow="auto"},[e]),t.jsxs(Yt,{children:[t.jsxs(Jt,{children:[t.jsx(Qt,{type:"button",onClick:a,children:t.jsx(ot,{})}),t.jsx(Zt,{onClickMenu:a,nav:e,setNavOpen:n})]}),t.jsxs(Kt,{children:[t.jsx(Pt,{onClickModal:c,modal:r}),t.jsx(l.Suspense,{children:t.jsx(re,{})})]})]})};export{rn as default};
