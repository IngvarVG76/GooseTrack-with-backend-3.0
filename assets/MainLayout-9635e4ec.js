import{_ as M,b as m,d as _,i as I,e as D,f as G,u as W,h as j,k as v,l as U,m as A,n as q,r as x,j as t,o as Z,p as J,q as K,t as C,v as Y,w as Q,s as o,x as X,y as ee,z as te,A as F,B as z,C as ne,D as oe,E as re,N as ie,F as ae,O as se}from"./index-bf85abb0.js";import{G as f}from"./iconBase-79609535.js";import{u as ce,c as de,a as le,F as pe}from"./index.esm-09be9a82.js";import{A as L}from"./index.esm-2ac39116.js";import{R as xe,a as he,b as ue}from"./index.esm-414bc1f6.js";import{B as me}from"./index.esm-e2c3aa81.js";const fe=["sx"],ge=e=>{var n,a;const r={systemProps:{},otherProps:{}},c=(n=e==null||(a=e.theme)==null?void 0:a.unstable_sxConfig)!=null?n:_;return Object.keys(e).forEach(i=>{c[i]?r.systemProps[i]=e[i]:r.otherProps[i]=e[i]}),r};function be(e){const{sx:n}=e,a=M(e,fe),{systemProps:r,otherProps:c}=ge(a);let i;return Array.isArray(n)?i=[r,...n]:typeof n=="function"?i=(...p)=>{const l=n(...p);return I(l)?m({},r,l):r}:i=m({},r,n),m({},c,{sx:i})}const ve=D(),we=ve,ye=["component","direction","spacing","divider","children","className","useFlexGap"],ke=G(),je=we("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,n)=>n.root});function Ce(e){return W({props:e,name:"MuiStack",defaultTheme:ke})}function ze(e,n){const a=x.Children.toArray(e).filter(Boolean);return a.reduce((r,c,i)=>(r.push(c),i<a.length-1&&r.push(x.cloneElement(n,{key:`separator-${i}`})),r),[])}const Se=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],Be=({ownerState:e,theme:n})=>{let a=m({display:"flex",flexDirection:"column"},j({theme:n},v({values:e.direction,breakpoints:n.breakpoints.values}),r=>({flexDirection:r})));if(e.spacing){const r=U(n),c=Object.keys(n.breakpoints.values).reduce((s,d)=>((typeof e.spacing=="object"&&e.spacing[d]!=null||typeof e.direction=="object"&&e.direction[d]!=null)&&(s[d]=!0),s),{}),i=v({values:e.direction,base:c}),p=v({values:e.spacing,base:c});typeof i=="object"&&Object.keys(i).forEach((s,d,h)=>{if(!i[s]){const b=d>0?i[h[d-1]]:"column";i[s]=b}}),a=A(a,j({theme:n},p,(s,d)=>e.useFlexGap?{gap:C(r,s)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${Se(d?i[d]:e.direction)}`]:C(r,s)}}))}return a=q(n.breakpoints,a),a};function $e(e={}){const{createStyledComponent:n=je,useThemeProps:a=Ce,componentName:r="MuiStack"}=e,c=()=>J({root:["root"]},s=>K(r,s),{}),i=n(Be);return x.forwardRef(function(s,d){const h=a(s),u=be(h),{component:b="div",direction:T="column",spacing:V=0,divider:y,children:k,className:E,useFlexGap:O=!1}=u,H=M(u,ye),R={direction:T,spacing:V,useFlexGap:O},N=c();return t.jsx(i,m({as:b,ownerState:R,ref:d,className:Z(N.root,E)},H,{children:y?ze(k,y):k}))})}const Me=$e({createStyledComponent:Y("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,n)=>n.root}),useThemeProps:e=>Q({props:e,name:"MuiStack"})}),Fe=Me;function Le(e){return f({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"}}]})(e)}function Pe(e){return f({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"}}]})(e)}const Te=o.div`
  display: flex;
  align-items: center;
  justify-content: end;
  padding-bottom: 64px;
  @media screen and (min-width: 1440px) {
    padding-bottom: 33px;
    justify-content: space-between;
  }
`,Ve=o.div`
  display: flex;
  align-items: center;
`,Ee=o.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 14px;
  }
`;o.div``;const Oe=o.h2`
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
`,He=o.button`
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
`,Re=o.button`
  font-size: 24px;
  color: #3e85f3;
  border: none;
  font-family: var(--main-font);
  background-color: transparent;

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`,Ne=o.p`
  color: ${({theme:e})=>e.name==="dark-theme"?"#fff":"#343434"};
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 128.571%;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 100%;
  }
`,_e=o.img`
  border-radius: 32px;
  border: 1.8px solid #3e85f3;
  width: 32px;
  height: 32px;

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
    border-radius: 44px;
  }
`,Ie=o.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  backdrop-filter: blur(2px);
  z-index: 1200;
`,De=o.div`
  position: relative;
  background-color: ${({theme:e})=>e.colors.formaBackground};
  border-radius: 8px;
  border: 1px solid ${({theme:e})=>e.colors.borderСalendarColor};

  box-shadow: 0px 4px 57px 0px rgba(17, 17, 17, 0.05);
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  display: flex;
  justify-content: center;
`,Ge=o.button`
  position: absolute;
  top: 18px;
  right: 18px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  font-size: 24px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: ${({theme:e})=>e.name==="dark-theme"?"#fff":"#111"};
  &:hover,
  :focus {
    color: #3e85f3;
  }
`,We=document.getElementById("modal"),Ue=({children:e,onClose:n})=>{const a=r=>{r.currentTarget===r.target&&n()};return x.useEffect(()=>{const r=c=>{c.code==="Escape"&&n()};return window.addEventListener("keydown",r),()=>{window.removeEventListener("keydown",r)}},[n]),X.createPortal(t.jsx(Ie,{onClick:a,children:t.jsxs(De,{children:[t.jsx(Ge,{type:"button",onClick:n,children:t.jsx(L,{})}),e]})}),We)};var w={},Ae=te;Object.defineProperty(w,"__esModule",{value:!0});var P=w.default=void 0,qe=Ae(ee()),Ze=t,Je=(0,qe.default)((0,Ze.jsx)("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star");P=w.default=Je;function Ke(e){return f({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"}}]})(e)}const Ye=o.div`
  padding: 20px 29px;
  width: 335px;
  max-width: 100%;

  @media screen and (min-width: 768px) {
    padding: 32px;
    width: 468px;
  }
`,Qe=o.p`
  color: ${({theme:e})=>e.colors.modalReviewLabel};

  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 116.667%;
  margin-bottom: 8px;
`,Xe=o.form`
  position: relative;
  margin-top: 32px;
`,et=o.span`
  color: ${({theme:e})=>e.colors.modalReviewLabel};
  margin-bottom: 16px;
  display: block;

  font-size: 12px;
  font-weight: 500;
  line-height: 116.667%;
`,tt=o.textarea`
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
`,nt=o.p`
  color: #da1414;
  font-size: 12px;
  font-weight: 400;
  line-height: 116.667%;
`,S=o.div`
  margin-top: 14px;

  display: flex;
  align-items: center;
  gap: 8px;
`,B=o.button`
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
`,$=o.button`
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
`,ot=o.div`
  position: absolute;
  top: -16px;
  right: 0;

  display: flex;
  align-items: center;
  gap: 8px;
`,rt=o.button`
  cursor: pointer;
  color: ${({["data-edit"]:e})=>e==="true"?"#fff":"#3e85f3"};
  padding: 10px;
  border-radius: 50px;
  background: ${({["data-edit"]:e,theme:n})=>e==="true"?"#3E85F3":n.name==="dark-theme"?"#353647":"#e3f3ff"};
  display: flex;
  border: none;
  font-size: 16px;
`,it=o.button`
  cursor: pointer;
  color: #ea3d65;
  padding: 10px;
  border-radius: 50px;
  background: rgba(234, 61, 101, 0.2);
  display: flex;
  border: none;
  font-size: 16px;
`,g="feedback",at=()=>{var d;const[e,n]=x.useState(()=>{var h;return((h=JSON.parse(window.localStorage.getItem(g)))==null?void 0:h.rating)??5}),[a,r]=x.useState(!1),[c,i]=x.useState(!1),[p,l]=x.useState({review:((d=JSON.parse(window.localStorage.getItem(g)))==null?void 0:d.review)??""}),s=ce({initialValues:p,validationSchema:de({review:le().max(300,"Must be 300 characters or less").trim().required("Fill in the field! Your feedback is very important to us")}),onSubmit:({review:h})=>{const u=h.trim();r(!0),i(!1),window.localStorage.setItem(g,JSON.stringify({review:u,rating:e})),l({review:u})}});return t.jsxs(Ye,{children:[t.jsx(Qe,{children:"Rating"}),t.jsx(Fe,{spacing:1,children:t.jsx(xe,{name:"text-feedback",value:e,disabled:a,onChange:(h,u)=>{n(u)},precision:.5,emptyIcon:t.jsx(P,{style:{opacity:.55},fontSize:"inherit"})})}),t.jsxs(Xe,{onSubmit:s.handleSubmit,children:[t.jsx("label",{htmlFor:"firstName",children:t.jsx(et,{children:"Review"})}),t.jsx(tt,{"data-error":s.errors.review,id:"review",name:"review",type:"text",disabled:a,placeholder:"Enter text",onChange:s.handleChange,onBlur:s.onBlur,value:s.values.review}),s.errors.review&&t.jsx(nt,{children:s.errors.review}),!a&&p.review===""&&t.jsxs(S,{children:[t.jsx(B,{type:"submit",children:"Save"}),t.jsx($,{type:"button",onClick:()=>s.resetForm(),children:"Cancel"})]}),p.review!==""&&t.jsxs(ot,{children:[t.jsx(rt,{"data-edit":c.toString(),type:"button",onClick:()=>{r(!1),i(!0)},children:t.jsx(he,{})}),t.jsx(it,{type:"button",onClick:()=>{window.localStorage.setItem(g,JSON.stringify({rating:5,review:""})),l({review:""}),r(!1),s.resetForm()},children:t.jsx(Ke,{})})]}),c&&p.review!==""&&t.jsxs(S,{children:[t.jsx(B,{type:"submit",children:"Edit"}),t.jsx($,{type:"button",onClick:()=>s.resetForm(),children:"Cancel"})]})]})]})},st="/GooseTrack-with-backend-3.0/assets/user-c5327e69.jpg",ct=({onClickModal:e,modal:n})=>{const a=F(),[r,c]=x.useState(""),i=z(d=>d.theme.lightTheme),p=z(ne),{pathname:l}=oe();x.useEffect(()=>{switch(l){case"/account":return c("User Profile");case"/statistics":return c("Statistics");case"/calendar":return c("Calendar")}},[l]);const s=()=>{a(re())};return t.jsxs(t.Fragment,{children:[t.jsxs(Te,{children:[t.jsx(Oe,{children:r}),t.jsxs(Ve,{children:[t.jsx(He,{type:"button",onClick:e,children:"Feedback"}),t.jsxs(Ee,{children:[t.jsx(Re,{onClick:s,children:i?t.jsx(pe,{}):t.jsx(Pe,{})}),t.jsx(Ne,{children:p==null?void 0:p.userName}),t.jsx(_e,{src:st,alt:"Img User",loading:"lazy",width:"32"})]})]})]}),n&&t.jsx(Ue,{onClose:e,children:t.jsx(at,{})})]})};function dt(e){return f({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M11.5 21h-5.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6"}},{tag:"path",attr:{d:"M16 3v4"}},{tag:"path",attr:{d:"M8 3v4"}},{tag:"path",attr:{d:"M4 11h16"}},{tag:"path",attr:{d:"M15 19l2 2l4 -4"}}]})(e)}function lt(e){return f({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"}},{tag:"path",attr:{d:"M6 21v-2a4 4 0 0 1 4 -4h4"}},{tag:"path",attr:{d:"M15 19l2 2l4 -4"}}]})(e)}const pt=o.aside`
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
`,xt=o.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  backdrop-filter: blur(2px);
  z-index: 100;
`,ht=o.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 32px;
  }
`,ut=o.img`
  margin-right: 6px;

  @media screen and (min-width: 768px) {
    width: 60px;
  }

  @media screen and (min-width: 1440px) {
    width: 71px;
  }
`,mt=o.button`
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
`,ft=o.h3`
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
`,gt=o.p`
  color: ${({theme:e})=>e.colors.modalReviewLabel};
  font-size: 12px;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`,bt=o.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`,vt=o.li``,wt=o(ie)`
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
`,yt=o.button`
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
`,kt="/GooseTrack-with-backend-3.0/assets/goose-b174e7d2.png",jt=({onClickMenu:e,nav:n,setNavOpen:a})=>{const r=F(),c=l=>{l.target===l.currentTarget&&e()},i=[{name:"My account",icon:t.jsx(lt,{}),to:"/account"},{name:"Calendar",icon:t.jsx(dt,{}),to:"/calendar"},{name:"Statistics",icon:t.jsx(me,{}),to:"/statistics"}],p=()=>{a(!1),r(ae())};return t.jsxs(t.Fragment,{children:[n&&t.jsx(xt,{onClick:c}),t.jsxs(pt,{"data-isopenmenu":n.toString(),children:[t.jsxs("div",{children:[t.jsxs(ht,{children:[t.jsx(ut,{src:kt,alt:"gosse",width:"36"}),t.jsx(ft,{children:"GooseTrack"}),t.jsx(mt,{type:"button",onClick:e,children:t.jsx(L,{})})]}),t.jsx(gt,{children:"User Panel"}),t.jsx("nav",{children:t.jsx(bt,{children:i.map(({name:l,icon:s,to:d})=>t.jsx(vt,{children:t.jsxs(wt,{activeclassname:"active",to:d,children:[s,l]})},l))})})]}),t.jsxs(yt,{className:"log_out",type:"button",onClick:p,children:["Log out ",t.jsx(ue,{})]})]})]})},Ct=o.div`
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
`,zt=o.header``,St=o.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  @media screen and (min-width: 1440px) {
    width: 79.5%;
    padding-left: 32px;
    flex-grow: 0;
  }
`,Bt=o.button`
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
`,Vt=()=>{const[e,n]=x.useState(!1),[a,r]=x.useState(!1),c=x.useCallback(()=>{r(!a),a?document.body.style.overflow="auto":document.body.style.overflow="hidden"},[a]),i=()=>n(!e);return x.useEffect(()=>{e?document.body.style.overflow="hidden":document.body.style.overflow="auto"},[e]),t.jsxs(Ct,{children:[t.jsxs(zt,{children:[t.jsx(Bt,{type:"button",onClick:i,children:t.jsx(Le,{})}),t.jsx(jt,{onClickMenu:i,nav:e,setNavOpen:n})]}),t.jsxs(St,{children:[t.jsx(ct,{onClickModal:c,modal:a}),t.jsx(x.Suspense,{children:t.jsx(se,{})})]})]})};export{Vt as default};
