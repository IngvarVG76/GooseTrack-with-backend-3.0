import{r as d,j as t,G as f,s as i,g as W,u as q,b as U,d as A,e as _,f as C,h as Z,i as J,M as Y,k as K,N as Q,A as X,l as ee,O as te}from"./index-71cf2f0d.js";import{F as ne}from"./index.esm-1db56f84.js";import{_ as P,d as oe,i as re,c as ie,a as ae,u as se,h as S,r as v,b as ce,e as de,m as le,f as pe,g as ue,j as xe,k as z,C as me,l as he,n as fe,s as ge,o as be,p as ve,q as we,t as ye,v as ke,w as je,R as Ce,x as Se,y as ze}from"./Rating-a6227ed7.js";import{_ as h}from"./emotion-styled.browser.esm-02633c83.js";import{B as Me}from"./index.esm-6603ab9d.js";function $e(...e){return e.reduce((n,o)=>o==null?n:function(...s){n.apply(this,s),o.apply(this,s)},()=>{})}function Be(e,n=166){let o;function r(...s){const a=()=>{e.apply(this,s)};clearTimeout(o),o=setTimeout(a,n)}return r.clear=()=>{clearTimeout(o)},r}function Fe(e,n){return()=>null}function _e(e,n){var o,r;return d.isValidElement(e)&&n.indexOf((o=e.type.muiName)!=null?o:(r=e.type)==null||(r=r._payload)==null||(r=r.value)==null?void 0:r.muiName)!==-1}function N(e){return e&&e.ownerDocument||document}function Pe(e){return N(e).defaultView||window}function Ne(e,n){return()=>null}const Ee=typeof window<"u"?d.useLayoutEffect:d.useEffect,E=Ee;function Te(e,n,o,r,s){return null}function Re(e){const n=d.useRef(e);return E(()=>{n.current=e}),d.useCallback((...o)=>(0,n.current)(...o),[])}const Ve=["sx"],Le=e=>{var n,o;const r={systemProps:{},otherProps:{}},s=(n=e==null||(o=e.theme)==null?void 0:o.unstable_sxConfig)!=null?n:oe;return Object.keys(e).forEach(a=>{s[a]?r.systemProps[a]=e[a]:r.otherProps[a]=e[a]}),r};function Oe(e){const{sx:n}=e,o=P(e,Ve),{systemProps:r,otherProps:s}=Le(o);let a;return Array.isArray(n)?a=[r,...n]:typeof n=="function"?a=(...u)=>{const p=n(...u);return re(p)?h({},r,p):r}:a=h({},r,n),h({},s,{sx:a})}const Ie=ie(),He=Ie,De=["component","direction","spacing","divider","children","className","useFlexGap"],Ge=ae(),We=He("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,n)=>n.root});function qe(e){return se({props:e,name:"MuiStack",defaultTheme:Ge})}function Ue(e,n){const o=d.Children.toArray(e).filter(Boolean);return o.reduce((r,s,a)=>(r.push(s),a<o.length-1&&r.push(d.cloneElement(n,{key:`separator-${a}`})),r),[])}const Ae=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],Ze=({ownerState:e,theme:n})=>{let o=h({display:"flex",flexDirection:"column"},S({theme:n},v({values:e.direction,breakpoints:n.breakpoints.values}),r=>({flexDirection:r})));if(e.spacing){const r=ce(n),s=Object.keys(n.breakpoints.values).reduce((c,l)=>((typeof e.spacing=="object"&&e.spacing[l]!=null||typeof e.direction=="object"&&e.direction[l]!=null)&&(c[l]=!0),c),{}),a=v({values:e.direction,base:s}),u=v({values:e.spacing,base:s});typeof a=="object"&&Object.keys(a).forEach((c,l,x)=>{if(!a[c]){const b=l>0?a[x[l-1]]:"column";a[c]=b}}),o=de(o,S({theme:n},u,(c,l)=>e.useFlexGap?{gap:z(r,c)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${Ae(l?a[l]:e.direction)}`]:z(r,c)}}))}return o=le(n.breakpoints,o),o};function Je(e={}){const{createStyledComponent:n=We,useThemeProps:o=qe,componentName:r="MuiStack"}=e,s=()=>ue({root:["root"]},c=>xe(r,c),{}),a=n(Ze);return d.forwardRef(function(c,l){const x=o(c),m=Oe(x),{component:b="div",direction:V="column",spacing:L=0,divider:k,children:j,className:O,useFlexGap:I=!1}=m,H=P(m,De),D={direction:V,spacing:L,useFlexGap:I},G=s();return t.jsx(a,h({as:b,ownerState:D,ref:l,className:pe(G.root,O)},H,{children:k?Ue(j,k):j}))})}const Ye={configure:e=>{me.configure(e)}},Ke=Object.freeze(Object.defineProperty({__proto__:null,capitalize:he,createChainedFunction:$e,createSvgIcon:fe,debounce:Be,deprecatedPropType:Fe,isMuiElement:_e,ownerDocument:N,ownerWindow:Pe,requirePropFactory:Ne,setRef:ge,unstable_ClassNameGenerator:Ye,unstable_useEnhancedEffect:E,unstable_useId:be,unsupportedProp:Te,useControlled:ve,useEventCallback:Re,useForkRef:we,useIsFocusVisible:ye},Symbol.toStringTag,{value:"Module"})),Qe=Je({createStyledComponent:ke("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,n)=>n.root}),useThemeProps:e=>je({props:e,name:"MuiStack"})}),Xe=Qe;function et(e){return f({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"}}]})(e)}function tt(e){return f({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"}}]})(e)}const nt=i.div`
  display: flex;
  align-items: center;
  justify-content: end;
  padding-bottom: 64px;
  @media screen and (min-width: 1440px) {
    padding-bottom: 33px;
    justify-content: space-between;
  }
`,ot=i.div`
  display: flex;
  align-items: center;
`,rt=i.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 14px;
  }
`;i.div``;const it=i.h2`
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
`,at=i.button`
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
`,st=i.button`
  font-size: 24px;
  color: #3e85f3;
  border: none;
  font-family: var(--main-font);
  background-color: transparent;

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`,ct=i.p`
  color: ${({theme:e})=>e.name==="dark-theme"?"#fff":"#343434"};
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 128.571%;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 100%;
  }
`,dt=i.img`
  border-radius: 32px;
  border: 1.8px solid #3e85f3;
  width: 32px;
  height: 32px;

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
    border-radius: 44px;
  }
`;var y={},T={exports:{}};(function(e){function n(o){return o&&o.__esModule?o:{default:o}}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports})(T);var lt=T.exports,w={};const pt=W(Ke);var M;function ut(){return M||(M=1,function(e){"use client";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.createSvgIcon}});var n=pt}(w)),w}var xt=lt;Object.defineProperty(y,"__esModule",{value:!0});var R=y.default=void 0,mt=xt(ut()),ht=t,ft=(0,mt.default)((0,ht.jsx)("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star");R=y.default=ft;function gt(e){return f({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"}}]})(e)}const bt=i.div`
  padding: 20px 29px;
  width: 335px;
  max-width: 100%;

  @media screen and (min-width: 768px) {
    padding: 32px;
    width: 468px;
  }
`,vt=i.p`
  color: ${({theme:e})=>e.colors.modalReviewLabel};

  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 116.667%;
  margin-bottom: 8px;
`,wt=i.form`
  position: relative;
  margin-top: 32px;
`,yt=i.span`
  color: ${({theme:e})=>e.colors.modalReviewLabel};
  margin-bottom: 16px;
  display: block;

  font-size: 12px;
  font-weight: 500;
  line-height: 116.667%;
`,kt=i.textarea`
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
`,jt=i.p`
  color: #da1414;
  font-size: 12px;
  font-weight: 400;
  line-height: 116.667%;
`,$=i.div`
  margin-top: 14px;

  display: flex;
  align-items: center;
  gap: 8px;
`,B=i.button`
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
`,F=i.button`
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
`,Ct=i.div`
  position: absolute;
  top: -16px;
  right: 0;

  display: flex;
  align-items: center;
  gap: 8px;
`,St=i.button`
  cursor: pointer;
  color: ${({["data-edit"]:e})=>e==="true"?"#fff":"#3e85f3"};
  padding: 10px;
  border-radius: 50px;
  background: ${({["data-edit"]:e,theme:n})=>e==="true"?"#3E85F3":n.name==="dark-theme"?"#353647":"#e3f3ff"};
  display: flex;
  border: none;
  font-size: 16px;
`,zt=i.button`
  cursor: pointer;
  color: #ea3d65;
  padding: 10px;
  border-radius: 50px;
  background: rgba(234, 61, 101, 0.2);
  display: flex;
  border: none;
  font-size: 16px;
`,g="feedback",Mt=()=>{var l;const[e,n]=d.useState(()=>{var x;return((x=JSON.parse(window.localStorage.getItem(g)))==null?void 0:x.rating)??5}),[o,r]=d.useState(!1),[s,a]=d.useState(!1),[u,p]=d.useState({review:((l=JSON.parse(window.localStorage.getItem(g)))==null?void 0:l.review)??""}),c=q({initialValues:u,validationSchema:U({review:A().max(300,"Must be 300 characters or less").trim().required("Fill in the field! Your feedback is very important to us")}),onSubmit:({review:x})=>{const m=x.trim();r(!0),a(!1),window.localStorage.setItem(g,JSON.stringify({review:m,rating:e})),p({review:m})}});return t.jsxs(bt,{children:[t.jsx(vt,{children:"Rating"}),t.jsx(Xe,{spacing:1,children:t.jsx(Ce,{name:"text-feedback",value:e,disabled:o,onChange:(x,m)=>{n(m)},precision:.5,emptyIcon:t.jsx(R,{style:{opacity:.55},fontSize:"inherit"})})}),t.jsxs(wt,{onSubmit:c.handleSubmit,children:[t.jsx("label",{htmlFor:"firstName",children:t.jsx(yt,{children:"Review"})}),t.jsx(kt,{"data-error":c.errors.review,id:"review",name:"review",type:"text",disabled:o,placeholder:"Enter text",onChange:c.handleChange,onBlur:c.onBlur,value:c.values.review}),c.errors.review&&t.jsx(jt,{children:c.errors.review}),!o&&u.review===""&&t.jsxs($,{children:[t.jsx(B,{type:"submit",children:"Save"}),t.jsx(F,{type:"button",onClick:()=>c.resetForm(),children:"Cancel"})]}),u.review!==""&&t.jsxs(Ct,{children:[t.jsx(St,{"data-edit":s.toString(),type:"button",onClick:()=>{r(!1),a(!0)},children:t.jsx(Se,{})}),t.jsx(zt,{type:"button",onClick:()=>{window.localStorage.setItem(g,JSON.stringify({rating:5,review:""})),p({review:""}),r(!1),c.resetForm()},children:t.jsx(gt,{})})]}),s&&u.review!==""&&t.jsxs($,{children:[t.jsx(B,{type:"submit",children:"Edit"}),t.jsx(F,{type:"button",onClick:()=>c.resetForm(),children:"Cancel"})]})]})]})},$t="/GooseTrack-with-backend-3.0/assets/user-c5327e69.jpg",Bt=({onClickModal:e,modal:n})=>{const o=_(),[r,s]=d.useState(""),a=C(l=>l.theme.lightTheme),u=C(Z),{pathname:p}=J();d.useEffect(()=>{switch(p){case"/account":return s("User Profile");case"/statistics":return s("Statistics");case"/calendar":return s("Calendar")}},[p]);const c=()=>{o(K())};return t.jsxs(t.Fragment,{children:[t.jsxs(nt,{children:[t.jsx(it,{children:r}),t.jsxs(ot,{children:[t.jsx(at,{type:"button",onClick:e,children:"Feedback"}),t.jsxs(rt,{children:[t.jsx(st,{onClick:c,children:a?t.jsx(ne,{}):t.jsx(tt,{})}),t.jsx(ct,{children:u==null?void 0:u.userName}),t.jsx(dt,{src:$t,alt:"Img User",loading:"lazy",width:"32"})]})]})]}),n&&t.jsx(Y,{onClose:e,children:t.jsx(Mt,{})})]})};function Ft(e){return f({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M11.5 21h-5.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6"}},{tag:"path",attr:{d:"M16 3v4"}},{tag:"path",attr:{d:"M8 3v4"}},{tag:"path",attr:{d:"M4 11h16"}},{tag:"path",attr:{d:"M15 19l2 2l4 -4"}}]})(e)}function _t(e){return f({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"}},{tag:"path",attr:{d:"M6 21v-2a4 4 0 0 1 4 -4h4"}},{tag:"path",attr:{d:"M15 19l2 2l4 -4"}}]})(e)}const Pt=i.aside`
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
`,Nt=i.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  backdrop-filter: blur(2px);
  z-index: 100;
`,Et=i.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 32px;
  }
`,Tt=i.img`
  margin-right: 6px;

  @media screen and (min-width: 768px) {
    width: 60px;
  }

  @media screen and (min-width: 1440px) {
    width: 71px;
  }
`,Rt=i.button`
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
`,Vt=i.h3`
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
`,Lt=i.p`
  color: ${({theme:e})=>e.colors.modalReviewLabel};
  font-size: 12px;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`,Ot=i.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`,It=i.li``,Ht=i(Q)`
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
`,Dt=i.button`
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
`,Gt="/GooseTrack-with-backend-3.0/assets/goose-b174e7d2.png",Wt=({onClickMenu:e,nav:n,setNavOpen:o})=>{const r=_(),s=p=>{p.target===p.currentTarget&&e()},a=[{name:"My account",icon:t.jsx(_t,{}),to:"/account"},{name:"Calendar",icon:t.jsx(Ft,{}),to:"/calendar"},{name:"Statistics",icon:t.jsx(Me,{}),to:"/statistics"}],u=()=>{o(!1),r(ee())};return t.jsxs(t.Fragment,{children:[n&&t.jsx(Nt,{onClick:s}),t.jsxs(Pt,{"data-isopenmenu":n.toString(),children:[t.jsxs("div",{children:[t.jsxs(Et,{children:[t.jsx(Tt,{src:Gt,alt:"gosse",width:"36"}),t.jsx(Vt,{children:"GooseTrack"}),t.jsx(Rt,{type:"button",onClick:e,children:t.jsx(X,{})})]}),t.jsx(Lt,{children:"User Panel"}),t.jsx("nav",{children:t.jsx(Ot,{children:a.map(({name:p,icon:c,to:l})=>t.jsx(It,{children:t.jsxs(Ht,{activeclassname:"active",to:l,children:[c,p]})},p))})})]}),t.jsxs(Dt,{className:"log_out",type:"button",onClick:u,children:["Log out ",t.jsx(ze,{})]})]})]})},qt=i.div`
  background: ${({theme:e})=>e.colors.primaryBackground};
  // height: 100vh;
  position: relative;
  max-width: 375px;
  margin: 0 auto;
  padding: 24px 20px 40px 28px;
  display: flex;
  justify-content: flex-end;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 24px 32px 38px 32px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 40px 32px 32px 0;
  }
`,Ut=i.header``,At=i.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  @media screen and (min-width: 1440px) {
    width: 79.5%;
    padding-left: 32px;
    flex-grow: 0;
  }
`,Zt=i.button`
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
`,en=()=>{const[e,n]=d.useState(!1),[o,r]=d.useState(!1),s=d.useCallback(()=>{r(!o),o?document.body.style.overflow="auto":document.body.style.overflow="hidden"},[o]),a=()=>n(!e);return d.useEffect(()=>{e?document.body.style.overflow="hidden":document.body.style.overflow="auto"},[e]),t.jsxs(qt,{children:[t.jsxs(Ut,{children:[t.jsx(Zt,{type:"button",onClick:a,children:t.jsx(et,{})}),t.jsx(Wt,{onClickMenu:a,nav:e,setNavOpen:n})]}),t.jsxs(At,{children:[t.jsx(Bt,{onClickModal:s,modal:o}),t.jsx(d.Suspense,{children:t.jsx(te,{})})]})]})};export{en as default};
