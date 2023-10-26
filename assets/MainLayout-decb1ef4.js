import{r as d,d as I,e as Z,u as q,_ as E,h as S,f as y,i as D,k as Y,m as K,l as Q,n as X,j as t,o as $,p as J,q as _,t as B,C as ee,v as te,w as ne,x as oe,G as b,s as r,g as ie,y as A,z as C,A as re,B as ae,D as se,E as de,F as ce,H as le,I as pe,J as ue,K as xe,N as he,M as me,O as fe,P as ge,Q as be,R as ve,S as we}from"./index-5aedd234.js";import{F as je}from"./index.esm-17eef9b8.js";import{P as ye,B as ke}from"./index.esm-d8578426.js";import{c as Ce,s as Ae,u as Re,a as Se,b as Be,d as Fe,R as ze,e as Me,f as Ne}from"./index.esm-7bfe8c2f.js";function Te(...e){return e.reduce((o,i)=>i==null?o:function(...s){o.apply(this,s),i.apply(this,s)},()=>{})}function Ee(e,o=166){let i;function n(...s){const a=()=>{e.apply(this,s)};clearTimeout(i),i=setTimeout(a,o)}return n.clear=()=>{clearTimeout(i)},n}function Le(e,o){return()=>null}function Pe(e,o){var i,n;return d.isValidElement(e)&&o.indexOf((i=e.type.muiName)!=null?i:(n=e.type)==null||(n=n._payload)==null||(n=n.value)==null?void 0:n.muiName)!==-1}function L(e){return e&&e.ownerDocument||document}function Oe(e){return L(e).defaultView||window}function Ve(e,o){return()=>null}const Ge=typeof window<"u"?d.useLayoutEffect:d.useEffect,P=Ge;function He(e,o,i,n,s){return null}function We(e){const o=d.useRef(e);return P(()=>{o.current=e}),d.useCallback((...i)=>(0,o.current)(...i),[])}const Ue=I(),Ie=Ue,Ze=["component","direction","spacing","divider","children","className","useFlexGap"],qe=Z(),De=Ie("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>o.root});function Ye(e){return q({props:e,name:"MuiStack",defaultTheme:qe})}function Ke(e,o){const i=d.Children.toArray(e).filter(Boolean);return i.reduce((n,s,a)=>(n.push(s),a<i.length-1&&n.push(d.cloneElement(o,{key:`separator-${a}`})),n),[])}const Qe=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],Xe=({ownerState:e,theme:o})=>{let i=E({display:"flex",flexDirection:"column"},S({theme:o},y({values:e.direction,breakpoints:o.breakpoints.values}),n=>({flexDirection:n})));if(e.spacing){const n=D(o),s=Object.keys(o.breakpoints.values).reduce((c,p)=>((typeof e.spacing=="object"&&e.spacing[p]!=null||typeof e.direction=="object"&&e.direction[p]!=null)&&(c[p]=!0),c),{}),a=y({values:e.direction,base:s}),l=y({values:e.spacing,base:s});typeof a=="object"&&Object.keys(a).forEach((c,p,f)=>{if(!a[c]){const m=p>0?a[f[p-1]]:"column";a[c]=m}}),i=Y(i,S({theme:o},l,(c,p)=>e.useFlexGap?{gap:B(n,c)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${Qe(p?a[p]:e.direction)}`]:B(n,c)}}))}return i=K(o.breakpoints,i),i};function $e(e={}){const{createStyledComponent:o=De,useThemeProps:i=Ye,componentName:n="MuiStack"}=e,s=()=>J({root:["root"]},c=>_(n,c),{}),a=o(Xe);return d.forwardRef(function(c,p){const f=i(c),x=Q(f),{component:m="div",direction:w="column",spacing:v=0,divider:h,children:g,className:j,useFlexGap:G=!1}=x,H=X(x,Ze),W={direction:w,spacing:v,useFlexGap:G},U=s();return t.jsx(a,E({as:m,ownerState:W,ref:p,className:$(U.root,j)},H,{children:h?Ke(g,h):g}))})}const Je={configure:e=>{ee.configure(e)}},_e=Object.freeze(Object.defineProperty({__proto__:null,capitalize:te,createChainedFunction:Te,createSvgIcon:Ce,debounce:Ee,deprecatedPropType:Le,isMuiElement:Pe,ownerDocument:L,ownerWindow:Oe,requirePropFactory:Ve,setRef:Ae,unstable_ClassNameGenerator:Je,unstable_useEnhancedEffect:P,unstable_useId:Re,unsupportedProp:He,useControlled:Se,useEventCallback:We,useForkRef:Be,useIsFocusVisible:Fe},Symbol.toStringTag,{value:"Module"})),et=$e({createStyledComponent:ne("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>o.root}),useThemeProps:e=>oe({props:e,name:"MuiStack"})}),tt=et;function nt(e){return b({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"}}]})(e)}function ot(e){return b({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"}}]})(e)}const it="data:image/png;base64,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",rt=r.div`
  display: flex;
  align-items: center;
  justify-content: end;
  padding-bottom: 64px;
  @media screen and (min-width: 1440px) {
    padding-bottom: 33px;
    justify-content: space-between;
  }
`,at=r.div`
  display: flex;
  align-items: center;
`,st=r.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 14px;
  }
`;r.div``;const F=r.h2`
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
`,dt=r.button`
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
`,ct=r.button`
  font-size: 24px;
  color: #3e85f3;
  border: none;
  font-family: var(--main-font);
  background-color: transparent;

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`,lt=r.p`
  color: ${({theme:e})=>e.name==="dark-theme"?"#fff":"#343434"};
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 128.571%;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 100%;
  }
`,pt=r.div`
  border-radius: 32px;
  border: 1.8px solid #3e85f3;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
    border-radius: 44px;
  }
`,ut=r.img`
  width: 32px;
  height: auto;

  @media screen and (min-width: 768px) {
    width: 44px;
  }

`,xt=r(ye)`
  width: 32px;
  height: 32px;
  color: ${({theme:e})=>e.colors.avatarPlaceholder};

  @media screen and (max-width: 767px) {
    width: 44px;
    height: 44px;
  }
`,ht=r.div`
  display: none;

  @media screen and (min-width: 1440px) {
    display: flex;
  }
`,mt=r.p`
  font-size: 14px;
  line-height: 1.3;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};

  span {
    color: #3e85f3;
  }
`;var R={},O={exports:{}};(function(e){function o(i){return i&&i.__esModule?i:{default:i}}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports})(O);var ft=O.exports,k={};const gt=ie(_e);var z;function bt(){return z||(z=1,function(e){"use client";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return o.createSvgIcon}});var o=gt}(k)),k}var vt=ft;Object.defineProperty(R,"__esModule",{value:!0});var V=R.default=void 0,wt=vt(bt()),jt=t,yt=(0,wt.default)((0,jt.jsx)("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star");V=R.default=yt;function kt(e){return b({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"}}]})(e)}const Ct=r.div`
  padding: 20px 29px;
  width: 335px;
  max-width: 100%;

  @media screen and (min-width: 768px) {
    padding: 32px;
    width: 468px;
  }
`,At=r.p`
  color: ${({theme:e})=>e.colors.modalReviewLabel};

  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 116.667%;
  margin-bottom: 8px;
`,Rt=r.form`
  position: relative;
  margin-top: 32px;
`,St=r.span`
  color: ${({theme:e})=>e.colors.modalReviewLabel};
  margin-bottom: 16px;
  display: block;

  font-size: 12px;
  font-weight: 500;
  line-height: 116.667%;
`,Bt=r.textarea`
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
`,Ft=r.p`
  color: #da1414;
  font-size: 12px;
  font-weight: 400;
  line-height: 116.667%;
`,M=r.div`
  margin-top: 14px;

  display: flex;
  align-items: center;
  gap: 8px;
`,N=r.button`
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
`,T=r.button`
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
`,zt=r.div`
  position: absolute;
  top: -16px;
  right: 0;

  display: flex;
  align-items: center;
  gap: 8px;
`,Mt=r.button`
  cursor: pointer;
  color: ${({["data-edit"]:e})=>e==="true"?"#fff":"#3e85f3"};
  padding: 10px;
  border-radius: 50px;
  background: ${({["data-edit"]:e,theme:o})=>e==="true"?"#3E85F3":o.name==="dark-theme"?"#353647":"#e3f3ff"};
  display: flex;
  border: none;
  font-size: 16px;
`,Nt=r.button`
  cursor: pointer;
  color: #ea3d65;
  padding: 10px;
  border-radius: 50px;
  background: rgba(234, 61, 101, 0.2);
  display: flex;
  border: none;
  font-size: 16px;
`,Tt=e=>e.reviews.reviews,Et=({modal:e,onClickModal:o})=>{const i=A(),n=C(Tt),[s,a]=d.useState(!1),[l,u]=d.useState(!1),[c,p]=d.useState(!0),f={textReview:(n==null?void 0:n.text)||"",rating:(n==null?void 0:n.rating)||5},x=re({initialValues:f,enableReinitialize:!0,validationSchema:ae({textReview:se().max(300,"Must be 300 characters or less").trim().required("Fill in the field! Your feedback is very important to us"),rating:de().required()}),onSubmit:({textReview:v,rating:h})=>{const g=v.trim(),j=l?ce({_id:n._id,text:g,rating:h}):le({text:g,rating:h});u(!1),o(),i(j)}}),m=d.useCallback(()=>{i(pe())},[i]);d.useEffect(()=>{e&&m()},[e,m]);const w=()=>{i(ue(n._id)),a(!0),u(!1),x.setFieldValue("textReview",""),o()};return t.jsxs(Ct,{children:[t.jsx(At,{children:"Rating"}),t.jsx(tt,{spacing:1,children:t.jsx(ze,{disabled:c&&!!(n!=null&&n.text),name:"text-feedback",value:x.values.rating,onChange:(v,h)=>{x.setFieldValue("rating",h)},precision:.5,emptyIcon:t.jsx(V,{style:{opacity:.55},fontSize:"inherit"})})}),t.jsxs(Rt,{onSubmit:x.handleSubmit,children:[t.jsx("label",{htmlFor:"firstName",children:t.jsx(St,{children:"Review"})}),t.jsx(Bt,{"data-error":x.errors.textReview,id:"textReview",name:"textReview",type:"text",disabled:c&&!!(n!=null&&n.text),placeholder:"Enter text",onChange:x.handleChange,onBlur:x.onBlur,value:x.values.textReview}),x.errors.textReview&&t.jsx(Ft,{children:x.errors.textReview}),(s||!(n!=null&&n.text))&&t.jsxs(M,{children:[t.jsx(N,{type:"submit",onClick:()=>{a(!1)},children:"Save"}),t.jsx(T,{type:"button",onClick:()=>{x.resetForm()},children:"Cancel"})]}),!!(n!=null&&n.text)&&t.jsxs(zt,{children:[t.jsx(Mt,{"data-edit":l.toString(),type:"button",onClick:()=>{p(!1),u(!0)},children:t.jsx(Me,{})}),t.jsx(Nt,{type:"button",onClick:w,children:t.jsx(kt,{})})]}),l&&t.jsxs(M,{children:[t.jsx(N,{type:"submit",children:"Edit"}),t.jsx(T,{type:"button",onClick:()=>{x.resetForm()},children:"Cancel"})]})]})]})},Lt=({onClickModal:e,modal:o})=>{const i=A(),[n,s]=d.useState(""),a=C(p=>p.theme.lightTheme),l=C(xe),{pathname:u}=he();d.useEffect(()=>{switch(u){case"/account":return s("User Profile");case"/statistics":return s("Statistics");default:s("Calendar");break}},[u]);const c=()=>{i(fe())};return t.jsxs(t.Fragment,{children:[t.jsxs(rt,{children:[t.jsx(ht,{children:u.includes("/day")?t.jsxs(t.Fragment,{children:[t.jsx("img",{src:it,alt:"company logo"}),t.jsxs("div",{children:[t.jsx(F,{children:"Calendar"}),t.jsxs(mt,{children:[t.jsx("span",{children:"Let go"})," of the past and focus on the present!"]})]})]}):t.jsx(F,{children:n})}),t.jsxs(at,{children:[t.jsx(dt,{type:"button",onClick:e,children:"Feedback"}),t.jsxs(st,{children:[t.jsx(ct,{onClick:c,children:a?t.jsx(je,{}):t.jsx(ot,{})}),t.jsx(lt,{children:l==null?void 0:l.userName}),t.jsx(pt,{children:l!=null&&l.avatarURL?t.jsx(ut,{src:l==null?void 0:l.avatarURL,alt:"Img User",loading:"lazy",width:"32"}):t.jsx(xt,{})})]})]})]}),o&&t.jsx(me,{onClose:e,children:t.jsx(Et,{modal:o,onClickModal:e})})]})};function Pt(e){return b({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M11.5 21h-5.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6"}},{tag:"path",attr:{d:"M16 3v4"}},{tag:"path",attr:{d:"M8 3v4"}},{tag:"path",attr:{d:"M4 11h16"}},{tag:"path",attr:{d:"M15 19l2 2l4 -4"}}]})(e)}function Ot(e){return b({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"}},{tag:"path",attr:{d:"M6 21v-2a4 4 0 0 1 4 -4h4"}},{tag:"path",attr:{d:"M15 19l2 2l4 -4"}}]})(e)}const Vt=r.aside`
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
`,Gt=r.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  backdrop-filter: blur(2px);
  z-index: 100;
`,Ht=r.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 32px;
  }
`,Wt=r.img`
  margin-right: 6px;

  @media screen and (min-width: 768px) {
    width: 60px;
  }

  @media screen and (min-width: 1440px) {
    width: 71px;
  }
`,Ut=r.button`
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
`,It=r.h3`
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
`,Zt=r.p`
  color: ${({theme:e})=>e.colors.modalReviewLabel};
  font-size: 12px;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`,qt=r.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`,Dt=r.li``,Yt=r(ge)`
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
`,Kt=r.button`
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
`,Qt="/GooseTrack-with-backend-3.0/assets/goose-b174e7d2.png",Xt=({onClickMenu:e,nav:o,setNavOpen:i})=>{const n=A(),s=u=>{u.target===u.currentTarget&&e()},a=[{name:"My account",icon:t.jsx(Ot,{}),to:"/account"},{name:"Calendar",icon:t.jsx(Pt,{}),to:"/calendar"},{name:"Statistics",icon:t.jsx(ke,{}),to:"/statistics"}],l=()=>{i(!1),n(ve())};return t.jsxs(t.Fragment,{children:[o&&t.jsx(Gt,{onClick:s}),t.jsxs(Vt,{"data-isopenmenu":o.toString(),children:[t.jsxs("div",{children:[t.jsxs(Ht,{children:[t.jsx(Wt,{src:Qt,alt:"gosse",width:"36"}),t.jsx(It,{children:"GooseTrack"}),t.jsx(Ut,{type:"button",onClick:e,children:t.jsx(be,{})})]}),t.jsx(Zt,{children:"User Panel"}),t.jsx("nav",{children:t.jsx(qt,{children:a.map(({name:u,icon:c,to:p})=>t.jsx(Dt,{children:t.jsxs(Yt,{activeclassname:"active",to:p,children:[c,u]})},u))})})]}),t.jsxs(Kt,{className:"log_out",type:"button",onClick:l,children:["Log out ",t.jsx(Ne,{})]})]})]})},$t=r.div`
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
`,Jt=r.header``,_t=r.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: max-content;
  @media screen and (min-width: 1440px) {
    width: 79.5%;
    padding-left: 32px;
    flex-grow: 0;
  }
`,en=r.button`
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
`,an=()=>{const[e,o]=d.useState(!1),[i,n]=d.useState(!1),s=d.useCallback(()=>{n(!i),i?document.body.style.overflow="auto":document.body.style.overflow="hidden"},[i]),a=()=>o(!e);return d.useEffect(()=>{e?document.body.style.overflow="hidden":document.body.style.overflow="auto"},[e]),t.jsxs($t,{children:[t.jsxs(Jt,{children:[t.jsx(en,{type:"button",onClick:a,children:t.jsx(nt,{})}),t.jsx(Xt,{onClickMenu:a,nav:e,setNavOpen:o})]}),t.jsxs(_t,{children:[t.jsx(Lt,{onClickModal:s,modal:i}),t.jsx(d.Suspense,{children:t.jsx(we,{})})]})]})};export{an as default};
