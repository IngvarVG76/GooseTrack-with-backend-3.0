import{_ as X,a as x,d as Le,i as He,c as Pe,b as Ae,e as Ee,h as re,f as ee,k as Te,l as Oe,m as Ne,r as h,j as n,n as D,o as he,p as me,q as le,t as U,v as xe,w as fe,x as Ie,y as ge,z as _e,A as ve,B as De,C as Ue,D as Ge,E as We,G,s,F as qe,H as Je,I as Ze,J as Xe,K as Ye,M as Ke,N as Qe,O as et,P as tt,Q as nt}from"./index-f48cbe37.js";import{c as ot}from"./index.esm-2ab99551.js";import{u as it,c as at,a as st}from"./index.esm-78c9fee1.js";import{L as rt,a as lt}from"./index.esm-00ba4f95.js";import{a as ct}from"./index.esm-7be40b02.js";const dt={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:-1,overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"},pt=dt,ut=["sx"],ht=e=>{var t,o;const a={systemProps:{},otherProps:{}},r=(t=e==null||(o=e.theme)==null?void 0:o.unstable_sxConfig)!=null?t:Le;return Object.keys(e).forEach(i=>{r[i]?a.systemProps[i]=e[i]:a.otherProps[i]=e[i]}),a};function mt(e){const{sx:t}=e,o=X(e,ut),{systemProps:a,otherProps:r}=ht(o);let i;return Array.isArray(t)?i=[a,...t]:typeof t=="function"?i=(...d)=>{const m=t(...d);return He(m)?x({},a,m):a}:i=x({},a,t),x({},r,{sx:i})}const xt=Pe(),ft=xt,gt=["component","direction","spacing","divider","children","className","useFlexGap"],vt=Ae(),bt=ft("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function yt(e){return Ee({props:e,name:"MuiStack",defaultTheme:vt})}function wt(e,t){const o=h.Children.toArray(e).filter(Boolean);return o.reduce((a,r,i)=>(a.push(r),i<o.length-1&&a.push(h.cloneElement(t,{key:`separator-${i}`})),a),[])}const jt=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],kt=({ownerState:e,theme:t})=>{let o=x({display:"flex",flexDirection:"column"},re({theme:t},ee({values:e.direction,breakpoints:t.breakpoints.values}),a=>({flexDirection:a})));if(e.spacing){const a=Te(t),r=Object.keys(t.breakpoints.values).reduce((l,p)=>((typeof e.spacing=="object"&&e.spacing[p]!=null||typeof e.direction=="object"&&e.direction[p]!=null)&&(l[p]=!0),l),{}),i=ee({values:e.direction,base:r}),d=ee({values:e.spacing,base:r});typeof i=="object"&&Object.keys(i).forEach((l,p,v)=>{if(!i[l]){const j=p>0?i[v[p-1]]:"column";i[l]=j}}),o=Oe(o,re({theme:t},d,(l,p)=>e.useFlexGap?{gap:le(a,l)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${jt(p?i[p]:e.direction)}`]:le(a,l)}}))}return o=Ne(t.breakpoints,o),o};function Ct(e={}){const{createStyledComponent:t=bt,useThemeProps:o=yt,componentName:a="MuiStack"}=e,r=()=>he({root:["root"]},l=>me(a,l),{}),i=t(kt);return h.forwardRef(function(l,p){const v=o(l),u=mt(v),{component:j="div",direction:w="column",spacing:E=0,divider:k,children:C,className:R,useFlexGap:$=!1}=u,g=X(u,gt),b={direction:w,spacing:E,useFlexGap:$},T=r();return n.jsx(i,x({as:j,ownerState:b,ref:p,className:D(T.root,R)},g,{children:k?wt(C,k):C}))})}const St=Ct({createStyledComponent:U("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>xe({props:e,name:"MuiStack"})}),Ft=St,zt=fe(n.jsx("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),Mt=fe(n.jsx("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder");function Vt(e){return me("MuiRating",e)}const Rt=Ie("MuiRating",["root","sizeSmall","sizeMedium","sizeLarge","readOnly","disabled","focusVisible","visuallyHidden","pristine","label","labelEmptyValueActive","icon","iconEmpty","iconFilled","iconHover","iconFocus","iconActive","decimal"]),_=Rt,$t=["value"],Bt=["className","defaultValue","disabled","emptyIcon","emptyLabelText","getLabelText","highlightSelectedOnly","icon","IconContainerComponent","max","name","onChange","onChangeActive","onMouseLeave","onMouseMove","precision","readOnly","size","value"];function Lt(e,t,o){return e<t?t:e>o?o:e}function Ht(e){const t=e.toString().split(".")[1];return t?t.length:0}function te(e,t){if(e==null)return e;const o=Math.round(e/t)*t;return Number(o.toFixed(Ht(t)))}const Pt=e=>{const{classes:t,size:o,readOnly:a,disabled:r,emptyValueFocused:i,focusVisible:d}=e,m={root:["root",`size${ge(o)}`,r&&"disabled",d&&"focusVisible",a&&"readOnly"],label:["label","pristine"],labelEmptyValue:[i&&"labelEmptyValueActive"],icon:["icon"],iconEmpty:["iconEmpty"],iconFilled:["iconFilled"],iconHover:["iconHover"],iconFocus:["iconFocus"],iconActive:["iconActive"],decimal:["decimal"],visuallyHidden:["visuallyHidden"]};return he(m,Vt,t)},At=U("span",{name:"MuiRating",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{[`& .${_.visuallyHidden}`]:t.visuallyHidden},t.root,t[`size${ge(o.size)}`],o.readOnly&&t.readOnly]}})(({theme:e,ownerState:t})=>x({display:"inline-flex",position:"relative",fontSize:e.typography.pxToRem(24),color:"#faaf00",cursor:"pointer",textAlign:"left",WebkitTapHighlightColor:"transparent",[`&.${_.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${_.focusVisible} .${_.iconActive}`]:{outline:"1px solid #999"},[`& .${_.visuallyHidden}`]:pt},t.size==="small"&&{fontSize:e.typography.pxToRem(18)},t.size==="large"&&{fontSize:e.typography.pxToRem(30)},t.readOnly&&{pointerEvents:"none"})),be=U("label",{name:"MuiRating",slot:"Label",overridesResolver:({ownerState:e},t)=>[t.label,e.emptyValueFocused&&t.labelEmptyValueActive]})(({ownerState:e})=>x({cursor:"inherit"},e.emptyValueFocused&&{top:0,bottom:0,position:"absolute",outline:"1px solid #999",width:"100%"})),Et=U("span",{name:"MuiRating",slot:"Icon",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.icon,o.iconEmpty&&t.iconEmpty,o.iconFilled&&t.iconFilled,o.iconHover&&t.iconHover,o.iconFocus&&t.iconFocus,o.iconActive&&t.iconActive]}})(({theme:e,ownerState:t})=>x({display:"flex",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),pointerEvents:"none"},t.iconActive&&{transform:"scale(1.2)"},t.iconEmpty&&{color:(e.vars||e).palette.action.disabled})),Tt=U("span",{name:"MuiRating",slot:"Decimal",shouldForwardProp:e=>_e(e)&&e!=="iconActive",overridesResolver:(e,t)=>{const{iconActive:o}=e;return[t.decimal,o&&t.iconActive]}})(({iconActive:e})=>x({position:"relative"},e&&{transform:"scale(1.2)"}));function Ot(e){const t=X(e,$t);return n.jsx("span",x({},t))}function ce(e){const{classes:t,disabled:o,emptyIcon:a,focus:r,getLabelText:i,highlightSelectedOnly:d,hover:m,icon:l,IconContainerComponent:p,isActive:v,itemValue:u,labelProps:j,name:w,onBlur:E,onChange:k,onClick:C,onFocus:R,readOnly:$,ownerState:g,ratingValue:b,ratingValueRounded:T}=e,B=d?u===b:u<=b,W=u<=m,L=u<=r,Y=u===T,O=ve(),M=n.jsx(Et,{as:p,value:u,className:D(t.icon,B?t.iconFilled:t.iconEmpty,W&&t.iconHover,L&&t.iconFocus,v&&t.iconActive),ownerState:x({},g,{iconEmpty:!B,iconFilled:B,iconHover:W,iconFocus:L,iconActive:v}),children:a&&!B?a:l});return $?n.jsx("span",x({},j,{children:M})):n.jsxs(h.Fragment,{children:[n.jsxs(be,x({ownerState:x({},g,{emptyValueFocused:void 0}),htmlFor:O},j,{children:[M,n.jsx("span",{className:t.visuallyHidden,children:i(u)})]})),n.jsx("input",{className:t.visuallyHidden,onFocus:R,onBlur:E,onChange:k,onClick:C,disabled:o,value:u,id:O,type:"radio",name:w,checked:Y})]})}const Nt=n.jsx(zt,{fontSize:"inherit"}),It=n.jsx(Mt,{fontSize:"inherit"});function _t(e){return`${e} Star${e!==1?"s":""}`}const Dt=h.forwardRef(function(t,o){const a=xe({name:"MuiRating",props:t}),{className:r,defaultValue:i=null,disabled:d=!1,emptyIcon:m=It,emptyLabelText:l="Empty",getLabelText:p=_t,highlightSelectedOnly:v=!1,icon:u=Nt,IconContainerComponent:j=Ot,max:w=5,name:E,onChange:k,onChangeActive:C,onMouseLeave:R,onMouseMove:$,precision:g=1,readOnly:b=!1,size:T="medium",value:B}=a,W=X(a,Bt),L=ve(E),[Y,O]=De({controlled:B,default:i,name:"Rating"}),M=te(Y,g),we=Ue(),[{hover:S,focus:q},N]=h.useState({hover:-1,focus:-1});let H=M;S!==-1&&(H=S),q!==-1&&(H=q);const{isFocusVisibleRef:oe,onBlur:je,onFocus:ke,ref:Ce}=Ge(),[Se,K]=h.useState(!1),ie=h.useRef(),Fe=We(Ce,ie,o),ze=c=>{$&&$(c);const f=ie.current,{right:y,left:J}=f.getBoundingClientRect(),{width:P}=f.firstChild.getBoundingClientRect();let A;we.direction==="rtl"?A=(y-c.clientX)/(P*w):A=(c.clientX-J)/(P*w);let F=te(w*A+g/2,g);F=Lt(F,g,w),N(V=>V.hover===F&&V.focus===F?V:{hover:F,focus:F}),K(!1),C&&S!==F&&C(c,F)},Me=c=>{R&&R(c);const f=-1;N({hover:f,focus:f}),C&&S!==f&&C(c,f)},ae=c=>{let f=c.target.value===""?null:parseFloat(c.target.value);S!==-1&&(f=S),O(f),k&&k(c,f)},Ve=c=>{c.clientX===0&&c.clientY===0||(N({hover:-1,focus:-1}),O(null),k&&parseFloat(c.target.value)===M&&k(c,null))},Re=c=>{ke(c),oe.current===!0&&K(!0);const f=parseFloat(c.target.value);N(y=>({hover:y.hover,focus:f}))},$e=c=>{if(S!==-1)return;je(c),oe.current===!1&&K(!1);const f=-1;N(y=>({hover:y.hover,focus:f}))},[Be,se]=h.useState(!1),I=x({},a,{defaultValue:i,disabled:d,emptyIcon:m,emptyLabelText:l,emptyValueFocused:Be,focusVisible:Se,getLabelText:p,icon:u,IconContainerComponent:j,max:w,precision:g,readOnly:b,size:T}),z=Pt(I);return n.jsxs(At,x({ref:Fe,onMouseMove:ze,onMouseLeave:Me,className:D(z.root,r,b&&"MuiRating-readOnly"),ownerState:I,role:b?"img":null,"aria-label":b?p(H):null},W,{children:[Array.from(new Array(w)).map((c,f)=>{const y=f+1,J={classes:z,disabled:d,emptyIcon:m,focus:q,getLabelText:p,highlightSelectedOnly:v,hover:S,icon:u,IconContainerComponent:j,name:L,onBlur:$e,onChange:ae,onClick:Ve,onFocus:Re,ratingValue:H,ratingValueRounded:M,readOnly:b,ownerState:I},P=y===Math.ceil(H)&&(S!==-1||q!==-1);if(g<1){const A=Array.from(new Array(1/g));return n.jsx(Tt,{className:D(z.decimal,P&&z.iconActive),ownerState:I,iconActive:P,children:A.map((F,V)=>{const Q=te(y-1+(V+1)*g,g);return n.jsx(ce,x({},J,{isActive:!1,itemValue:Q,labelProps:{style:A.length-1===V?{}:{width:Q===H?`${(V+1)*g*100}%`:"0%",overflow:"hidden",position:"absolute"}}}),Q)})},y)}return n.jsx(ce,x({},J,{isActive:P,itemValue:y}),y)}),!b&&!d&&n.jsxs(be,{className:D(z.label,z.labelEmptyValue),ownerState:I,children:[n.jsx("input",{className:z.visuallyHidden,value:"",id:`${L}-empty`,type:"radio",name:L,checked:M==null,onFocus:()=>se(!0),onBlur:()=>se(!1),onChange:ae}),n.jsx("span",{className:z.visuallyHidden,children:l})]})]}))}),Ut=Dt;function Gt(e){return G({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"}}]})(e)}function Wt(e){return G({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"}}]})(e)}const qt=s.div`
  display: flex;
  align-items: center;
  justify-content: end;
  padding-bottom: 64px;
  @media screen and (min-width: 1440px) {
    padding-bottom: 33px;
    justify-content: space-between;
  }
`,Jt=s.div`
  display: flex;
  align-items: center;
`,Zt=s.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 14px;
  }
`;s.div``;const Xt=s.h2`
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
`,Yt=s.button`
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
`,Kt=s.button`
  font-size: 24px;
  color: #3e85f3;
  border: none;
  font-family: var(--main-font);
  background-color: transparent;

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`,Qt=s.p`
  color: ${({theme:e})=>e.name==="dark-theme"?"#fff":"#343434"};
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 128.571%;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 100%;
  }
`,en=s.img`
  border-radius: 32px;
  border: 1.8px solid #3e85f3;
  width: 32px;
  height: 32px;

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
    border-radius: 44px;
  }
`;var ne={},tn=Je;Object.defineProperty(ne,"__esModule",{value:!0});var ye=ne.default=void 0,nn=tn(qe()),on=n,an=(0,nn.default)((0,on.jsx)("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star");ye=ne.default=an;function sn(e){return G({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"}}]})(e)}const rn=s.div`
  padding: 20px 29px;
  width: 335px;
  max-width: 100%;

  @media screen and (min-width: 768px) {
    padding: 32px;
    width: 468px;
  }
`,ln=s.p`
  color: ${({theme:e})=>e.colors.modalReviewLabel};

  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 116.667%;
  margin-bottom: 8px;
`,cn=s.form`
  position: relative;
  margin-top: 32px;
`,dn=s.span`
  color: ${({theme:e})=>e.colors.modalReviewLabel};
  margin-bottom: 16px;
  display: block;

  font-size: 12px;
  font-weight: 500;
  line-height: 116.667%;
`,pn=s.textarea`
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
`,un=s.p`
  color: #da1414;
  font-size: 12px;
  font-weight: 400;
  line-height: 116.667%;
`,de=s.div`
  margin-top: 14px;

  display: flex;
  align-items: center;
  gap: 8px;
`,pe=s.button`
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
`,ue=s.button`
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
`,hn=s.div`
  position: absolute;
  top: -16px;
  right: 0;

  display: flex;
  align-items: center;
  gap: 8px;
`,mn=s.button`
  cursor: pointer;
  color: ${({["data-edit"]:e})=>e==="true"?"#fff":"#3e85f3"};
  padding: 10px;
  border-radius: 50px;
  background: ${({["data-edit"]:e,theme:t})=>e==="true"?"#3E85F3":t.name==="dark-theme"?"#353647":"#e3f3ff"};
  display: flex;
  border: none;
  font-size: 16px;
`,xn=s.button`
  cursor: pointer;
  color: #ea3d65;
  padding: 10px;
  border-radius: 50px;
  background: rgba(234, 61, 101, 0.2);
  display: flex;
  border: none;
  font-size: 16px;
`,Z="feedback",fn=()=>{var p;const[e,t]=h.useState(()=>{var v;return((v=JSON.parse(window.localStorage.getItem(Z)))==null?void 0:v.rating)??5}),[o,a]=h.useState(!1),[r,i]=h.useState(!1),[d,m]=h.useState({review:((p=JSON.parse(window.localStorage.getItem(Z)))==null?void 0:p.review)??""}),l=it({initialValues:d,validationSchema:at({review:st().max(300,"Must be 300 characters or less").trim().required("Fill in the field! Your feedback is very important to us")}),onSubmit:({review:v})=>{const u=v.trim();a(!0),i(!1),window.localStorage.setItem(Z,JSON.stringify({review:u,rating:e})),m({review:u})}});return n.jsxs(rn,{children:[n.jsx(ln,{children:"Rating"}),n.jsx(Ft,{spacing:1,children:n.jsx(Ut,{name:"text-feedback",value:e,disabled:o,onChange:(v,u)=>{t(u)},precision:.5,emptyIcon:n.jsx(ye,{style:{opacity:.55},fontSize:"inherit"})})}),n.jsxs(cn,{onSubmit:l.handleSubmit,children:[n.jsx("label",{htmlFor:"firstName",children:n.jsx(dn,{children:"Review"})}),n.jsx(pn,{"data-error":l.errors.review,id:"review",name:"review",type:"text",disabled:o,placeholder:"Enter text",onChange:l.handleChange,onBlur:l.onBlur,value:l.values.review}),l.errors.review&&n.jsx(un,{children:l.errors.review}),!o&&d.review===""&&n.jsxs(de,{children:[n.jsx(pe,{type:"submit",children:"Save"}),n.jsx(ue,{type:"button",onClick:()=>l.resetForm(),children:"Cancel"})]}),d.review!==""&&n.jsxs(hn,{children:[n.jsx(mn,{"data-edit":r.toString(),type:"button",onClick:()=>{a(!1),i(!0)},children:n.jsx(rt,{})}),n.jsx(xn,{type:"button",onClick:()=>{window.localStorage.setItem(Z,JSON.stringify({rating:5,review:""})),m({review:""}),a(!1),l.resetForm()},children:n.jsx(sn,{})})]}),r&&d.review!==""&&n.jsxs(de,{children:[n.jsx(pe,{type:"submit",children:"Edit"}),n.jsx(ue,{type:"button",onClick:()=>l.resetForm(),children:"Cancel"})]})]})]})},gn="/GooseTrack-with-backend-3.0/assets/user-c5327e69.jpg",vn=({onClickModal:e,modal:t})=>{const o=Ze(),[a,r]=h.useState(""),i=Xe(l=>l.theme.lightTheme),d=()=>{o(Qe())},{pathname:m}=Ye();return h.useEffect(()=>{switch(m){case"/account":return r("User Profile");case"/statistics":return r("Statistics");case"/calendar":return r("Calendar")}},[m]),n.jsxs(n.Fragment,{children:[n.jsxs(qt,{children:[n.jsx(Xt,{children:a}),n.jsxs(Jt,{children:[n.jsx(Yt,{type:"button",onClick:e,children:"Feedback"}),n.jsxs(Zt,{children:[n.jsx(Kt,{onClick:d,children:i?n.jsx(ot,{}):n.jsx(Wt,{})}),n.jsx(Qt,{children:"User Name"}),n.jsx(en,{src:gn,alt:"Img User",loading:"lazy",width:"32"})]})]})]}),t&&n.jsx(Ke,{onClose:e,children:n.jsx(fn,{})})]})};function bn(e){return G({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M11.5 21h-5.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6"}},{tag:"path",attr:{d:"M16 3v4"}},{tag:"path",attr:{d:"M8 3v4"}},{tag:"path",attr:{d:"M4 11h16"}},{tag:"path",attr:{d:"M15 19l2 2l4 -4"}}]})(e)}function yn(e){return G({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"}},{tag:"path",attr:{d:"M6 21v-2a4 4 0 0 1 4 -4h4"}},{tag:"path",attr:{d:"M15 19l2 2l4 -4"}}]})(e)}const wn=s.aside`
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
  left: ${({["data-isopenmenu"]:e})=>e==="true"?"0":"-100%"};
  z-index: 200;

  @media screen and (min-width: 768px) {
    padding: 32px;
    max-width: 289px;
  }

  @media screen and (min-width: 1440px) {
    left: 0;
  }
`,jn=s.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  backdrop-filter: blur(2px);
`,kn=s.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 32px;
  }
`,Cn=s.img`
  margin-right: 6px;

  @media screen and (min-width: 768px) {
    width: 60px;
  }

  @media screen and (min-width: 1440px) {
    width: 71px;
  }
`,Sn=s.button`
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
`,Fn=s.h3`
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
`,zn=s.p`
  color: ${({theme:e})=>e.colors.modalReviewLabel};
  font-size: 12px;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`,Mn=s.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`,Vn=s.li``,Rn=s(et)`
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
`,$n=s.button`
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
`,Bn="/GooseTrack-with-backend-3.0/assets/goose-b174e7d2.png",Ln=({onClickMenu:e,nav:t})=>{const o=r=>{r.target===r.currentTarget&&e()},a=[{name:"My account",icon:n.jsx(yn,{}),to:"/account"},{name:"Calendar",icon:n.jsx(bn,{}),to:"/calendar"},{name:"Statistics",icon:n.jsx(ct,{}),to:"/statistics"}];return n.jsxs(n.Fragment,{children:[t&&n.jsx(jn,{onClick:o}),n.jsxs(wn,{"data-isopenmenu":t.toString(),children:[n.jsxs("div",{children:[n.jsxs(kn,{children:[n.jsx(Cn,{src:Bn,alt:"gosse",width:"36"}),n.jsx(Fn,{children:"GooseTrack"}),n.jsx(Sn,{type:"button",onClick:e,children:n.jsx(tt,{})})]}),n.jsx(zn,{children:"User Panel"}),n.jsx("nav",{children:n.jsx(Mn,{children:a.map(({name:r,icon:i,to:d})=>n.jsx(Vn,{children:n.jsxs(Rn,{activeclassname:"active",to:d,children:[i,r]})},r))})})]}),n.jsxs($n,{className:"log_out",type:"button",children:["Log out ",n.jsx(lt,{})]})]})]})},Hn=s.div`
  background: ${({theme:e})=>e.colors.primaryBackground};
  height: 100vh;
  position: relative;
  width: 375px;
  margin: 0 auto;
  padding: 24px 20px 0 28px;
  display: flex;
  justify-content: flex-end;

  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-left: 0;
  }
`,Pn=s.header``,An=s.main`
  @media screen and (min-width: 1440px) {
    width: 79.5%;
    padding-left: 32px;
  }
`,En=s.button`
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
`,Dn=()=>{const[e,t]=h.useState(!1),[o,a]=h.useState(!1),r=h.useCallback(()=>{a(!o),o?document.body.style.overflow="auto":document.body.style.overflow="hidden"},[o]),i=h.useCallback(()=>{t(!e),e?document.body.style.overflow="auto":document.body.style.overflow="hidden"},[e]);return n.jsxs(Hn,{children:[n.jsxs(Pn,{children:[n.jsx(En,{type:"button",onClick:i,children:n.jsx(Gt,{})}),n.jsx(Ln,{onClickMenu:i,nav:e})]}),n.jsxs(An,{children:[n.jsx(vn,{onClickModal:r,modal:o}),n.jsx(h.Suspense,{children:n.jsx(nt,{})})]})]})};export{Dn as default};
