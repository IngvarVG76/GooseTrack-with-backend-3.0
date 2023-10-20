import{_ as K,i as h,k as Oe,m as Pe,n as Te,o as Ae,p as Ie,q as se,t as ee,v as Ne,w as _e,x as De,r as x,j as n,y as D,z as me,A as he,B as le,C as U,D as fe,E as ge,F as Ue,G as ve,H as Ge,I as be,J as We,K as qe,M as Je,N as Ze,s as r,O as Ke,P as Xe,Q as Ye,b as ye,u as ce,e as Qe,S as et,T as tt,U as nt,V as ot,W as it}from"./index-bacafb67.js";import{G}from"./iconBase-6eeed84d.js";import{u as at,c as rt,a as st,f as lt}from"./index.esm-e0364986.js";import{A as we}from"./index.esm-d70e7414.js";import{L as ct,a as dt}from"./index.esm-f6a3ec43.js";import{a as pt}from"./index.esm-6728e319.js";const ut={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:-1,overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"},xt=ut,mt=["sx"],ht=e=>{var t,o;const i={systemProps:{},otherProps:{}},l=(t=e==null||(o=e.theme)==null?void 0:o.unstable_sxConfig)!=null?t:Oe;return Object.keys(e).forEach(a=>{l[a]?i.systemProps[a]=e[a]:i.otherProps[a]=e[a]}),i};function ft(e){const{sx:t}=e,o=K(e,mt),{systemProps:i,otherProps:l}=ht(o);let a;return Array.isArray(t)?a=[i,...t]:typeof t=="function"?a=(...p)=>{const c=t(...p);return Pe(c)?h({},i,c):i}:a=h({},i,t),h({},l,{sx:a})}const gt=Te(),vt=gt,bt=["component","direction","spacing","divider","children","className","useFlexGap"],yt=Ae(),wt=vt("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function kt(e){return Ie({props:e,name:"MuiStack",defaultTheme:yt})}function jt(e,t){const o=x.Children.toArray(e).filter(Boolean);return o.reduce((i,l,a)=>(i.push(l),a<o.length-1&&i.push(x.cloneElement(t,{key:`separator-${a}`})),i),[])}const Ct=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],St=({ownerState:e,theme:t})=>{let o=h({display:"flex",flexDirection:"column"},se({theme:t},ee({values:e.direction,breakpoints:t.breakpoints.values}),i=>({flexDirection:i})));if(e.spacing){const i=Ne(t),l=Object.keys(t.breakpoints.values).reduce((s,d)=>((typeof e.spacing=="object"&&e.spacing[d]!=null||typeof e.direction=="object"&&e.direction[d]!=null)&&(s[d]=!0),s),{}),a=ee({values:e.direction,base:l}),p=ee({values:e.spacing,base:l});typeof a=="object"&&Object.keys(a).forEach((s,d,v)=>{if(!a[s]){const k=d>0?a[v[d-1]]:"column";a[s]=k}}),o=_e(o,se({theme:t},p,(s,d)=>e.useFlexGap?{gap:le(i,s)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${Ct(d?a[d]:e.direction)}`]:le(i,s)}}))}return o=De(t.breakpoints,o),o};function zt(e={}){const{createStyledComponent:t=wt,useThemeProps:o=kt,componentName:i="MuiStack"}=e,l=()=>me({root:["root"]},s=>he(i,s),{}),a=t(St);return x.forwardRef(function(s,d){const v=o(s),m=ft(v),{component:k="div",direction:w="column",spacing:P=0,divider:j,children:C,className:R,useFlexGap:$=!1}=m,g=K(m,bt),b={direction:w,spacing:P,useFlexGap:$},T=l();return n.jsx(a,h({as:k,ownerState:b,ref:d,className:D(T.root,R)},g,{children:j?jt(C,j):C}))})}const Ft=zt({createStyledComponent:U("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>fe({props:e,name:"MuiStack"})}),Mt=Ft,Vt=ge(n.jsx("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),Rt=ge(n.jsx("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder");function $t(e){return he("MuiRating",e)}const Bt=Ue("MuiRating",["root","sizeSmall","sizeMedium","sizeLarge","readOnly","disabled","focusVisible","visuallyHidden","pristine","label","labelEmptyValueActive","icon","iconEmpty","iconFilled","iconHover","iconFocus","iconActive","decimal"]),_=Bt,Lt=["value"],Ht=["className","defaultValue","disabled","emptyIcon","emptyLabelText","getLabelText","highlightSelectedOnly","icon","IconContainerComponent","max","name","onChange","onChangeActive","onMouseLeave","onMouseMove","precision","readOnly","size","value"];function Et(e,t,o){return e<t?t:e>o?o:e}function Ot(e){const t=e.toString().split(".")[1];return t?t.length:0}function te(e,t){if(e==null)return e;const o=Math.round(e/t)*t;return Number(o.toFixed(Ot(t)))}const Pt=e=>{const{classes:t,size:o,readOnly:i,disabled:l,emptyValueFocused:a,focusVisible:p}=e,c={root:["root",`size${ve(o)}`,l&&"disabled",p&&"focusVisible",i&&"readOnly"],label:["label","pristine"],labelEmptyValue:[a&&"labelEmptyValueActive"],icon:["icon"],iconEmpty:["iconEmpty"],iconFilled:["iconFilled"],iconHover:["iconHover"],iconFocus:["iconFocus"],iconActive:["iconActive"],decimal:["decimal"],visuallyHidden:["visuallyHidden"]};return me(c,$t,t)},Tt=U("span",{name:"MuiRating",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{[`& .${_.visuallyHidden}`]:t.visuallyHidden},t.root,t[`size${ve(o.size)}`],o.readOnly&&t.readOnly]}})(({theme:e,ownerState:t})=>h({display:"inline-flex",position:"relative",fontSize:e.typography.pxToRem(24),color:"#faaf00",cursor:"pointer",textAlign:"left",WebkitTapHighlightColor:"transparent",[`&.${_.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${_.focusVisible} .${_.iconActive}`]:{outline:"1px solid #999"},[`& .${_.visuallyHidden}`]:xt},t.size==="small"&&{fontSize:e.typography.pxToRem(18)},t.size==="large"&&{fontSize:e.typography.pxToRem(30)},t.readOnly&&{pointerEvents:"none"})),ke=U("label",{name:"MuiRating",slot:"Label",overridesResolver:({ownerState:e},t)=>[t.label,e.emptyValueFocused&&t.labelEmptyValueActive]})(({ownerState:e})=>h({cursor:"inherit"},e.emptyValueFocused&&{top:0,bottom:0,position:"absolute",outline:"1px solid #999",width:"100%"})),At=U("span",{name:"MuiRating",slot:"Icon",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.icon,o.iconEmpty&&t.iconEmpty,o.iconFilled&&t.iconFilled,o.iconHover&&t.iconHover,o.iconFocus&&t.iconFocus,o.iconActive&&t.iconActive]}})(({theme:e,ownerState:t})=>h({display:"flex",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),pointerEvents:"none"},t.iconActive&&{transform:"scale(1.2)"},t.iconEmpty&&{color:(e.vars||e).palette.action.disabled})),It=U("span",{name:"MuiRating",slot:"Decimal",shouldForwardProp:e=>Ge(e)&&e!=="iconActive",overridesResolver:(e,t)=>{const{iconActive:o}=e;return[t.decimal,o&&t.iconActive]}})(({iconActive:e})=>h({position:"relative"},e&&{transform:"scale(1.2)"}));function Nt(e){const t=K(e,Lt);return n.jsx("span",h({},t))}function de(e){const{classes:t,disabled:o,emptyIcon:i,focus:l,getLabelText:a,highlightSelectedOnly:p,hover:c,icon:s,IconContainerComponent:d,isActive:v,itemValue:m,labelProps:k,name:w,onBlur:P,onChange:j,onClick:C,onFocus:R,readOnly:$,ownerState:g,ratingValue:b,ratingValueRounded:T}=e,B=p?m===b:m<=b,W=m<=c,L=m<=l,X=m===T,A=be(),M=n.jsx(At,{as:d,value:m,className:D(t.icon,B?t.iconFilled:t.iconEmpty,W&&t.iconHover,L&&t.iconFocus,v&&t.iconActive),ownerState:h({},g,{iconEmpty:!B,iconFilled:B,iconHover:W,iconFocus:L,iconActive:v}),children:i&&!B?i:s});return $?n.jsx("span",h({},k,{children:M})):n.jsxs(x.Fragment,{children:[n.jsxs(ke,h({ownerState:h({},g,{emptyValueFocused:void 0}),htmlFor:A},k,{children:[M,n.jsx("span",{className:t.visuallyHidden,children:a(m)})]})),n.jsx("input",{className:t.visuallyHidden,onFocus:R,onBlur:P,onChange:j,onClick:C,disabled:o,value:m,id:A,type:"radio",name:w,checked:X})]})}const _t=n.jsx(Vt,{fontSize:"inherit"}),Dt=n.jsx(Rt,{fontSize:"inherit"});function Ut(e){return`${e} Star${e!==1?"s":""}`}const Gt=x.forwardRef(function(t,o){const i=fe({name:"MuiRating",props:t}),{className:l,defaultValue:a=null,disabled:p=!1,emptyIcon:c=Dt,emptyLabelText:s="Empty",getLabelText:d=Ut,highlightSelectedOnly:v=!1,icon:m=_t,IconContainerComponent:k=Nt,max:w=5,name:P,onChange:j,onChangeActive:C,onMouseLeave:R,onMouseMove:$,precision:g=1,readOnly:b=!1,size:T="medium",value:B}=i,W=K(i,Ht),L=be(P),[X,A]=We({controlled:B,default:a,name:"Rating"}),M=te(X,g),Ce=qe(),[{hover:S,focus:q},I]=x.useState({hover:-1,focus:-1});let H=M;S!==-1&&(H=S),q!==-1&&(H=q);const{isFocusVisibleRef:oe,onBlur:Se,onFocus:ze,ref:Fe}=Je(),[Me,Y]=x.useState(!1),ie=x.useRef(),Ve=Ze(Fe,ie,o),Re=u=>{$&&$(u);const f=ie.current,{right:y,left:J}=f.getBoundingClientRect(),{width:E}=f.firstChild.getBoundingClientRect();let O;Ce.direction==="rtl"?O=(y-u.clientX)/(E*w):O=(u.clientX-J)/(E*w);let z=te(w*O+g/2,g);z=Et(z,g,w),I(V=>V.hover===z&&V.focus===z?V:{hover:z,focus:z}),Y(!1),C&&S!==z&&C(u,z)},$e=u=>{R&&R(u);const f=-1;I({hover:f,focus:f}),C&&S!==f&&C(u,f)},ae=u=>{let f=u.target.value===""?null:parseFloat(u.target.value);S!==-1&&(f=S),A(f),j&&j(u,f)},Be=u=>{u.clientX===0&&u.clientY===0||(I({hover:-1,focus:-1}),A(null),j&&parseFloat(u.target.value)===M&&j(u,null))},Le=u=>{ze(u),oe.current===!0&&Y(!0);const f=parseFloat(u.target.value);I(y=>({hover:y.hover,focus:f}))},He=u=>{if(S!==-1)return;Se(u),oe.current===!1&&Y(!1);const f=-1;I(y=>({hover:y.hover,focus:f}))},[Ee,re]=x.useState(!1),N=h({},i,{defaultValue:a,disabled:p,emptyIcon:c,emptyLabelText:s,emptyValueFocused:Ee,focusVisible:Me,getLabelText:d,icon:m,IconContainerComponent:k,max:w,precision:g,readOnly:b,size:T}),F=Pt(N);return n.jsxs(Tt,h({ref:Ve,onMouseMove:Re,onMouseLeave:$e,className:D(F.root,l,b&&"MuiRating-readOnly"),ownerState:N,role:b?"img":null,"aria-label":b?d(H):null},W,{children:[Array.from(new Array(w)).map((u,f)=>{const y=f+1,J={classes:F,disabled:p,emptyIcon:c,focus:q,getLabelText:d,highlightSelectedOnly:v,hover:S,icon:m,IconContainerComponent:k,name:L,onBlur:He,onChange:ae,onClick:Be,onFocus:Le,ratingValue:H,ratingValueRounded:M,readOnly:b,ownerState:N},E=y===Math.ceil(H)&&(S!==-1||q!==-1);if(g<1){const O=Array.from(new Array(1/g));return n.jsx(It,{className:D(F.decimal,E&&F.iconActive),ownerState:N,iconActive:E,children:O.map((z,V)=>{const Q=te(y-1+(V+1)*g,g);return n.jsx(de,h({},J,{isActive:!1,itemValue:Q,labelProps:{style:O.length-1===V?{}:{width:Q===H?`${(V+1)*g*100}%`:"0%",overflow:"hidden",position:"absolute"}}}),Q)})},y)}return n.jsx(de,h({},J,{isActive:E,itemValue:y}),y)}),!b&&!p&&n.jsxs(ke,{className:D(F.label,F.labelEmptyValue),ownerState:N,children:[n.jsx("input",{className:F.visuallyHidden,value:"",id:`${L}-empty`,type:"radio",name:L,checked:M==null,onFocus:()=>re(!0),onBlur:()=>re(!1),onChange:ae}),n.jsx("span",{className:F.visuallyHidden,children:s})]})]}))}),Wt=Gt;function qt(e){return G({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"}}]})(e)}function Jt(e){return G({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"}}]})(e)}const Zt=r.div`
  display: flex;
  align-items: center;
  justify-content: end;
  padding-bottom: 64px;
  @media screen and (min-width: 1440px) {
    padding-bottom: 33px;
    justify-content: space-between;
  }
`,Kt=r.div`
  display: flex;
  align-items: center;
`,Xt=r.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 14px;
  }
`;r.div``;const Yt=r.h2`
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
`,Qt=r.button`
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
`,en=r.button`
  font-size: 24px;
  color: #3e85f3;
  border: none;
  font-family: var(--main-font);
  background-color: transparent;

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`,tn=r.p`
  color: ${({theme:e})=>e.name==="dark-theme"?"#fff":"#343434"};
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 128.571%;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 100%;
  }
`,nn=r.img`
  border-radius: 32px;
  border: 1.8px solid #3e85f3;
  width: 32px;
  height: 32px;

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
    border-radius: 44px;
  }
`,on=r.div`
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
`,an=r.div`
  position: relative;
  background-color: ${({theme:e})=>e.colors.formaBackground};
  border-radius: 8px;
  border: 1px solid ${({theme:e})=>e.colors.borderСalendarColor};

  box-shadow: 0px 4px 57px 0px rgba(17, 17, 17, 0.05);
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  display: flex;
  justify-content: center;
`,rn=r.button`
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
`,sn=document.getElementById("modal"),ln=({children:e,onClose:t})=>{const o=i=>{i.currentTarget===i.target&&t()};return x.useEffect(()=>{const i=l=>{l.code==="Escape"&&t()};return window.addEventListener("keydown",i),()=>{window.removeEventListener("keydown",i)}},[t]),Ke.createPortal(n.jsx(on,{onClick:o,children:n.jsxs(an,{children:[n.jsx(rn,{type:"button",onClick:t,children:n.jsx(we,{})}),e]})}),sn)};var ne={},cn=Ye;Object.defineProperty(ne,"__esModule",{value:!0});var je=ne.default=void 0,dn=cn(Xe()),pn=n,un=(0,dn.default)((0,pn.jsx)("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star");je=ne.default=un;function xn(e){return G({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"}}]})(e)}const mn=r.div`
  padding: 20px 29px;
  width: 335px;
  max-width: 100%;

  @media screen and (min-width: 768px) {
    padding: 32px;
    width: 468px;
  }
`,hn=r.p`
  color: ${({theme:e})=>e.colors.modalReviewLabel};

  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 116.667%;
  margin-bottom: 8px;
`,fn=r.form`
  position: relative;
  margin-top: 32px;
`,gn=r.span`
  color: ${({theme:e})=>e.colors.modalReviewLabel};
  margin-bottom: 16px;
  display: block;

  font-size: 12px;
  font-weight: 500;
  line-height: 116.667%;
`,vn=r.textarea`
  border-radius: 8px;
  background: ${({theme:e})=>e.name==="dark-theme"?"transparent":"#F6F6F6"};
  padding: 12px 14px;
  width: 295px;
  height: 130px;
  max-width: 100%;
  resize: none;
  border: ${({["data-error"]:e,theme:t})=>e?"1px solid red":t.name==="dark-theme"?"1px solid rgba(255, 255, 255, 0.15)":"none"};
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
`,bn=r.p`
  color: #da1414;
  font-size: 12px;
  font-weight: 400;
  line-height: 116.667%;
`,pe=r.div`
  margin-top: 14px;

  display: flex;
  align-items: center;
  gap: 8px;
`,ue=r.button`
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
`,xe=r.button`
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
`,yn=r.div`
  position: absolute;
  top: -16px;
  right: 0;

  display: flex;
  align-items: center;
  gap: 8px;
`,wn=r.button`
  cursor: pointer;
  color: ${({["data-edit"]:e})=>e==="true"?"#fff":"#3e85f3"};
  padding: 10px;
  border-radius: 50px;
  background: ${({["data-edit"]:e,theme:t})=>e==="true"?"#3E85F3":t.name==="dark-theme"?"#353647":"#e3f3ff"};
  display: flex;
  border: none;
  font-size: 16px;
`,kn=r.button`
  cursor: pointer;
  color: #ea3d65;
  padding: 10px;
  border-radius: 50px;
  background: rgba(234, 61, 101, 0.2);
  display: flex;
  border: none;
  font-size: 16px;
`,Z="feedback",jn=()=>{var d;const[e,t]=x.useState(()=>{var v;return((v=JSON.parse(window.localStorage.getItem(Z)))==null?void 0:v.rating)??5}),[o,i]=x.useState(!1),[l,a]=x.useState(!1),[p,c]=x.useState({review:((d=JSON.parse(window.localStorage.getItem(Z)))==null?void 0:d.review)??""}),s=at({initialValues:p,validationSchema:rt({review:st().max(300,"Must be 300 characters or less").trim().required("Fill in the field! Your feedback is very important to us")}),onSubmit:({review:v})=>{const m=v.trim();i(!0),a(!1),window.localStorage.setItem(Z,JSON.stringify({review:m,rating:e})),c({review:m})}});return n.jsxs(mn,{children:[n.jsx(hn,{children:"Rating"}),n.jsx(Mt,{spacing:1,children:n.jsx(Wt,{name:"text-feedback",value:e,disabled:o,onChange:(v,m)=>{t(m)},precision:.5,emptyIcon:n.jsx(je,{style:{opacity:.55},fontSize:"inherit"})})}),n.jsxs(fn,{onSubmit:s.handleSubmit,children:[n.jsx("label",{htmlFor:"firstName",children:n.jsx(gn,{children:"Review"})}),n.jsx(vn,{"data-error":s.errors.review,id:"review",name:"review",type:"text",disabled:o,placeholder:"Enter text",onChange:s.handleChange,onBlur:s.onBlur,value:s.values.review}),s.errors.review&&n.jsx(bn,{children:s.errors.review}),!o&&p.review===""&&n.jsxs(pe,{children:[n.jsx(ue,{type:"submit",children:"Save"}),n.jsx(xe,{type:"button",onClick:()=>s.resetForm(),children:"Cancel"})]}),p.review!==""&&n.jsxs(yn,{children:[n.jsx(wn,{"data-edit":l.toString(),type:"button",onClick:()=>{i(!1),a(!0)},children:n.jsx(ct,{})}),n.jsx(kn,{type:"button",onClick:()=>{window.localStorage.setItem(Z,JSON.stringify({rating:5,review:""})),c({review:""}),i(!1),s.resetForm()},children:n.jsx(xn,{})})]}),l&&p.review!==""&&n.jsxs(pe,{children:[n.jsx(ue,{type:"submit",children:"Edit"}),n.jsx(xe,{type:"button",onClick:()=>s.resetForm(),children:"Cancel"})]})]})]})},Cn="/GooseTrack-with-backend-3.0/assets/user-c5327e69.jpg",Sn=({onClickModal:e,modal:t})=>{const o=ye(),[i,l]=x.useState(""),a=ce(d=>d.theme.lightTheme),p=ce(Qe),{pathname:c}=et();x.useEffect(()=>{switch(c){case"/account":return l("User Profile");case"/statistics":return l("Statistics");case"/calendar":return l("Calendar")}},[c]);const s=()=>{o(tt())};return n.jsxs(n.Fragment,{children:[n.jsxs(Zt,{children:[n.jsx(Yt,{children:i}),n.jsxs(Kt,{children:[n.jsx(Qt,{type:"button",onClick:e,children:"Feedback"}),n.jsxs(Xt,{children:[n.jsx(en,{onClick:s,children:a?n.jsx(lt,{}):n.jsx(Jt,{})}),n.jsx(tn,{children:p==null?void 0:p.userName}),n.jsx(nn,{src:Cn,alt:"Img User",loading:"lazy",width:"32"})]})]})]}),t&&n.jsx(ln,{onClose:e,children:n.jsx(jn,{})})]})};function zn(e){return G({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M11.5 21h-5.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6"}},{tag:"path",attr:{d:"M16 3v4"}},{tag:"path",attr:{d:"M8 3v4"}},{tag:"path",attr:{d:"M4 11h16"}},{tag:"path",attr:{d:"M15 19l2 2l4 -4"}}]})(e)}function Fn(e){return G({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"}},{tag:"path",attr:{d:"M6 21v-2a4 4 0 0 1 4 -4h4"}},{tag:"path",attr:{d:"M15 19l2 2l4 -4"}}]})(e)}const Mn=r.aside`
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
`,Vn=r.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  backdrop-filter: blur(2px);
  z-index: 100;
`,Rn=r.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 32px;
  }
`,$n=r.img`
  margin-right: 6px;

  @media screen and (min-width: 768px) {
    width: 60px;
  }

  @media screen and (min-width: 1440px) {
    width: 71px;
  }
`,Bn=r.button`
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
`,Ln=r.h3`
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
`,Hn=r.p`
  color: ${({theme:e})=>e.colors.modalReviewLabel};
  font-size: 12px;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`,En=r.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`,On=r.li``,Pn=r(nt)`
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
`,Tn=r.button`
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
`,An="/GooseTrack-with-backend-3.0/assets/goose-b174e7d2.png",In=({onClickMenu:e,nav:t,setNavOpen:o})=>{const i=ye(),l=c=>{c.target===c.currentTarget&&e()},a=[{name:"My account",icon:n.jsx(Fn,{}),to:"/account"},{name:"Calendar",icon:n.jsx(zn,{}),to:"/calendar"},{name:"Statistics",icon:n.jsx(pt,{}),to:"/statistics"}],p=()=>{o(!1),i(ot())};return n.jsxs(n.Fragment,{children:[t&&n.jsx(Vn,{onClick:l}),n.jsxs(Mn,{"data-isopenmenu":t.toString(),children:[n.jsxs("div",{children:[n.jsxs(Rn,{children:[n.jsx($n,{src:An,alt:"gosse",width:"36"}),n.jsx(Ln,{children:"GooseTrack"}),n.jsx(Bn,{type:"button",onClick:e,children:n.jsx(we,{})})]}),n.jsx(Hn,{children:"User Panel"}),n.jsx("nav",{children:n.jsx(En,{children:a.map(({name:c,icon:s,to:d})=>n.jsx(On,{children:n.jsxs(Pn,{activeclassname:"active",to:d,children:[s,c]})},c))})})]}),n.jsxs(Tn,{className:"log_out",type:"button",onClick:p,children:["Log out ",n.jsx(dt,{})]})]})]})},Nn=r.div`
  background: ${({theme:e})=>e.colors.primaryBackground};
  height: 100vh;
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
`,_n=r.header``,Dn=r.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  @media screen and (min-width: 1440px) {
    width: 79.5%;
    padding-left: 32px;
    flex-grow: 0;
  }
`,Un=r.button`
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
`,Xn=()=>{const[e,t]=x.useState(!1),[o,i]=x.useState(!1),l=x.useCallback(()=>{i(!o),o?document.body.style.overflow="auto":document.body.style.overflow="hidden"},[o]),a=()=>t(!0);return x.useEffect(()=>{e?document.body.style.overflow="hidden":document.body.style.overflow="auto"},[e]),n.jsxs(Nn,{children:[n.jsxs(_n,{children:[n.jsx(Un,{type:"button",onClick:a,children:n.jsx(qt,{})}),n.jsx(In,{onClickMenu:a,nav:e,setNavOpen:t})]}),n.jsxs(Dn,{children:[n.jsx(Sn,{onClickModal:l,modal:o}),n.jsx(x.Suspense,{children:n.jsx(it,{})})]})]})};export{Xn as default};
