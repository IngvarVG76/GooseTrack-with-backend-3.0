import{_ as X,e as x,f as Pe,i as Te,h as Ae,k as Ee,m as Oe,n as re,o as ee,p as Ne,q as Ie,t as _e,r as h,j as n,v as D,w as me,x as xe,y as le,z as U,A as fe,B as ge,C as De,D as ve,E as Ue,F as be,H as Ge,I as We,J as qe,K as Je,G,s,M as Ze,N as Xe,u as ye,c as ce,O as Ye,P as Ke,Q as Qe,R as et,S as tt,T as nt,U as ot,V as it}from"./index-69a27916.js";import{u as at,c as st,a as rt,f as lt}from"./index.esm-1cd2b170.js";import{L as ct,a as dt}from"./index.esm-79cb24b1.js";import{a as pt}from"./index.esm-8ed09298.js";const ut={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:-1,overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"},ht=ut,mt=["sx"],xt=e=>{var t,o;const a={systemProps:{},otherProps:{}},l=(t=e==null||(o=e.theme)==null?void 0:o.unstable_sxConfig)!=null?t:Pe;return Object.keys(e).forEach(i=>{l[i]?a.systemProps[i]=e[i]:a.otherProps[i]=e[i]}),a};function ft(e){const{sx:t}=e,o=X(e,mt),{systemProps:a,otherProps:l}=xt(o);let i;return Array.isArray(t)?i=[a,...t]:typeof t=="function"?i=(...c)=>{const m=t(...c);return Te(m)?x({},a,m):a}:i=x({},a,t),x({},l,{sx:i})}const gt=Ae(),vt=gt,bt=["component","direction","spacing","divider","children","className","useFlexGap"],yt=Ee(),wt=vt("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function jt(e){return Oe({props:e,name:"MuiStack",defaultTheme:yt})}function kt(e,t){const o=h.Children.toArray(e).filter(Boolean);return o.reduce((a,l,i)=>(a.push(l),i<o.length-1&&a.push(h.cloneElement(t,{key:`separator-${i}`})),a),[])}const Ct=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],St=({ownerState:e,theme:t})=>{let o=x({display:"flex",flexDirection:"column"},re({theme:t},ee({values:e.direction,breakpoints:t.breakpoints.values}),a=>({flexDirection:a})));if(e.spacing){const a=Ne(t),l=Object.keys(t.breakpoints.values).reduce((r,d)=>((typeof e.spacing=="object"&&e.spacing[d]!=null||typeof e.direction=="object"&&e.direction[d]!=null)&&(r[d]=!0),r),{}),i=ee({values:e.direction,base:l}),c=ee({values:e.spacing,base:l});typeof i=="object"&&Object.keys(i).forEach((r,d,v)=>{if(!i[r]){const j=d>0?i[v[d-1]]:"column";i[r]=j}}),o=Ie(o,re({theme:t},c,(r,d)=>e.useFlexGap?{gap:le(a,r)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${Ct(d?i[d]:e.direction)}`]:le(a,r)}}))}return o=_e(t.breakpoints,o),o};function Ft(e={}){const{createStyledComponent:t=wt,useThemeProps:o=jt,componentName:a="MuiStack"}=e,l=()=>me({root:["root"]},r=>xe(a,r),{}),i=t(St);return h.forwardRef(function(r,d){const v=o(r),u=ft(v),{component:j="div",direction:w="column",spacing:A=0,divider:k,children:C,className:R,useFlexGap:$=!1}=u,g=X(u,bt),b={direction:w,spacing:A,useFlexGap:$},E=l();return n.jsx(i,x({as:j,ownerState:b,ref:d,className:D(E.root,R)},g,{children:k?kt(C,k):C}))})}const zt=Ft({createStyledComponent:U("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>fe({props:e,name:"MuiStack"})}),Mt=zt,Vt=ge(n.jsx("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),Rt=ge(n.jsx("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder");function $t(e){return xe("MuiRating",e)}const Bt=De("MuiRating",["root","sizeSmall","sizeMedium","sizeLarge","readOnly","disabled","focusVisible","visuallyHidden","pristine","label","labelEmptyValueActive","icon","iconEmpty","iconFilled","iconHover","iconFocus","iconActive","decimal"]),_=Bt,Lt=["value"],Ht=["className","defaultValue","disabled","emptyIcon","emptyLabelText","getLabelText","highlightSelectedOnly","icon","IconContainerComponent","max","name","onChange","onChangeActive","onMouseLeave","onMouseMove","precision","readOnly","size","value"];function Pt(e,t,o){return e<t?t:e>o?o:e}function Tt(e){const t=e.toString().split(".")[1];return t?t.length:0}function te(e,t){if(e==null)return e;const o=Math.round(e/t)*t;return Number(o.toFixed(Tt(t)))}const At=e=>{const{classes:t,size:o,readOnly:a,disabled:l,emptyValueFocused:i,focusVisible:c}=e,m={root:["root",`size${ve(o)}`,l&&"disabled",c&&"focusVisible",a&&"readOnly"],label:["label","pristine"],labelEmptyValue:[i&&"labelEmptyValueActive"],icon:["icon"],iconEmpty:["iconEmpty"],iconFilled:["iconFilled"],iconHover:["iconHover"],iconFocus:["iconFocus"],iconActive:["iconActive"],decimal:["decimal"],visuallyHidden:["visuallyHidden"]};return me(m,$t,t)},Et=U("span",{name:"MuiRating",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{[`& .${_.visuallyHidden}`]:t.visuallyHidden},t.root,t[`size${ve(o.size)}`],o.readOnly&&t.readOnly]}})(({theme:e,ownerState:t})=>x({display:"inline-flex",position:"relative",fontSize:e.typography.pxToRem(24),color:"#faaf00",cursor:"pointer",textAlign:"left",WebkitTapHighlightColor:"transparent",[`&.${_.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${_.focusVisible} .${_.iconActive}`]:{outline:"1px solid #999"},[`& .${_.visuallyHidden}`]:ht},t.size==="small"&&{fontSize:e.typography.pxToRem(18)},t.size==="large"&&{fontSize:e.typography.pxToRem(30)},t.readOnly&&{pointerEvents:"none"})),we=U("label",{name:"MuiRating",slot:"Label",overridesResolver:({ownerState:e},t)=>[t.label,e.emptyValueFocused&&t.labelEmptyValueActive]})(({ownerState:e})=>x({cursor:"inherit"},e.emptyValueFocused&&{top:0,bottom:0,position:"absolute",outline:"1px solid #999",width:"100%"})),Ot=U("span",{name:"MuiRating",slot:"Icon",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.icon,o.iconEmpty&&t.iconEmpty,o.iconFilled&&t.iconFilled,o.iconHover&&t.iconHover,o.iconFocus&&t.iconFocus,o.iconActive&&t.iconActive]}})(({theme:e,ownerState:t})=>x({display:"flex",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),pointerEvents:"none"},t.iconActive&&{transform:"scale(1.2)"},t.iconEmpty&&{color:(e.vars||e).palette.action.disabled})),Nt=U("span",{name:"MuiRating",slot:"Decimal",shouldForwardProp:e=>Ue(e)&&e!=="iconActive",overridesResolver:(e,t)=>{const{iconActive:o}=e;return[t.decimal,o&&t.iconActive]}})(({iconActive:e})=>x({position:"relative"},e&&{transform:"scale(1.2)"}));function It(e){const t=X(e,Lt);return n.jsx("span",x({},t))}function de(e){const{classes:t,disabled:o,emptyIcon:a,focus:l,getLabelText:i,highlightSelectedOnly:c,hover:m,icon:r,IconContainerComponent:d,isActive:v,itemValue:u,labelProps:j,name:w,onBlur:A,onChange:k,onClick:C,onFocus:R,readOnly:$,ownerState:g,ratingValue:b,ratingValueRounded:E}=e,B=c?u===b:u<=b,W=u<=m,L=u<=l,Y=u===E,O=be(),M=n.jsx(Ot,{as:d,value:u,className:D(t.icon,B?t.iconFilled:t.iconEmpty,W&&t.iconHover,L&&t.iconFocus,v&&t.iconActive),ownerState:x({},g,{iconEmpty:!B,iconFilled:B,iconHover:W,iconFocus:L,iconActive:v}),children:a&&!B?a:r});return $?n.jsx("span",x({},j,{children:M})):n.jsxs(h.Fragment,{children:[n.jsxs(we,x({ownerState:x({},g,{emptyValueFocused:void 0}),htmlFor:O},j,{children:[M,n.jsx("span",{className:t.visuallyHidden,children:i(u)})]})),n.jsx("input",{className:t.visuallyHidden,onFocus:R,onBlur:A,onChange:k,onClick:C,disabled:o,value:u,id:O,type:"radio",name:w,checked:Y})]})}const _t=n.jsx(Vt,{fontSize:"inherit"}),Dt=n.jsx(Rt,{fontSize:"inherit"});function Ut(e){return`${e} Star${e!==1?"s":""}`}const Gt=h.forwardRef(function(t,o){const a=fe({name:"MuiRating",props:t}),{className:l,defaultValue:i=null,disabled:c=!1,emptyIcon:m=Dt,emptyLabelText:r="Empty",getLabelText:d=Ut,highlightSelectedOnly:v=!1,icon:u=_t,IconContainerComponent:j=It,max:w=5,name:A,onChange:k,onChangeActive:C,onMouseLeave:R,onMouseMove:$,precision:g=1,readOnly:b=!1,size:E="medium",value:B}=a,W=X(a,Ht),L=be(A),[Y,O]=Ge({controlled:B,default:i,name:"Rating"}),M=te(Y,g),ke=We(),[{hover:S,focus:q},N]=h.useState({hover:-1,focus:-1});let H=M;S!==-1&&(H=S),q!==-1&&(H=q);const{isFocusVisibleRef:oe,onBlur:Ce,onFocus:Se,ref:Fe}=qe(),[ze,K]=h.useState(!1),ie=h.useRef(),Me=Je(Fe,ie,o),Ve=p=>{$&&$(p);const f=ie.current,{right:y,left:J}=f.getBoundingClientRect(),{width:P}=f.firstChild.getBoundingClientRect();let T;ke.direction==="rtl"?T=(y-p.clientX)/(P*w):T=(p.clientX-J)/(P*w);let F=te(w*T+g/2,g);F=Pt(F,g,w),N(V=>V.hover===F&&V.focus===F?V:{hover:F,focus:F}),K(!1),C&&S!==F&&C(p,F)},Re=p=>{R&&R(p);const f=-1;N({hover:f,focus:f}),C&&S!==f&&C(p,f)},ae=p=>{let f=p.target.value===""?null:parseFloat(p.target.value);S!==-1&&(f=S),O(f),k&&k(p,f)},$e=p=>{p.clientX===0&&p.clientY===0||(N({hover:-1,focus:-1}),O(null),k&&parseFloat(p.target.value)===M&&k(p,null))},Be=p=>{Se(p),oe.current===!0&&K(!0);const f=parseFloat(p.target.value);N(y=>({hover:y.hover,focus:f}))},Le=p=>{if(S!==-1)return;Ce(p),oe.current===!1&&K(!1);const f=-1;N(y=>({hover:y.hover,focus:f}))},[He,se]=h.useState(!1),I=x({},a,{defaultValue:i,disabled:c,emptyIcon:m,emptyLabelText:r,emptyValueFocused:He,focusVisible:ze,getLabelText:d,icon:u,IconContainerComponent:j,max:w,precision:g,readOnly:b,size:E}),z=At(I);return n.jsxs(Et,x({ref:Me,onMouseMove:Ve,onMouseLeave:Re,className:D(z.root,l,b&&"MuiRating-readOnly"),ownerState:I,role:b?"img":null,"aria-label":b?d(H):null},W,{children:[Array.from(new Array(w)).map((p,f)=>{const y=f+1,J={classes:z,disabled:c,emptyIcon:m,focus:q,getLabelText:d,highlightSelectedOnly:v,hover:S,icon:u,IconContainerComponent:j,name:L,onBlur:Le,onChange:ae,onClick:$e,onFocus:Be,ratingValue:H,ratingValueRounded:M,readOnly:b,ownerState:I},P=y===Math.ceil(H)&&(S!==-1||q!==-1);if(g<1){const T=Array.from(new Array(1/g));return n.jsx(Nt,{className:D(z.decimal,P&&z.iconActive),ownerState:I,iconActive:P,children:T.map((F,V)=>{const Q=te(y-1+(V+1)*g,g);return n.jsx(de,x({},J,{isActive:!1,itemValue:Q,labelProps:{style:T.length-1===V?{}:{width:Q===H?`${(V+1)*g*100}%`:"0%",overflow:"hidden",position:"absolute"}}}),Q)})},y)}return n.jsx(de,x({},J,{isActive:P,itemValue:y}),y)}),!b&&!c&&n.jsxs(we,{className:D(z.label,z.labelEmptyValue),ownerState:I,children:[n.jsx("input",{className:z.visuallyHidden,value:"",id:`${L}-empty`,type:"radio",name:L,checked:M==null,onFocus:()=>se(!0),onBlur:()=>se(!1),onChange:ae}),n.jsx("span",{className:z.visuallyHidden,children:r})]})]}))}),Wt=Gt;function qt(e){return G({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"}}]})(e)}function Jt(e){return G({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"}}]})(e)}const Zt=s.div`
  display: flex;
  align-items: center;
  justify-content: end;
  padding-bottom: 64px;
  @media screen and (min-width: 1440px) {
    padding-bottom: 33px;
    justify-content: space-between;
  }
`,Xt=s.div`
  display: flex;
  align-items: center;
`,Yt=s.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 14px;
  }
`;s.div``;const Kt=s.h2`
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
`,Qt=s.button`
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
`,en=s.button`
  font-size: 24px;
  color: #3e85f3;
  border: none;
  font-family: var(--main-font);
  background-color: transparent;

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`,tn=s.p`
  color: ${({theme:e})=>e.name==="dark-theme"?"#fff":"#343434"};
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 128.571%;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 100%;
  }
`,nn=s.img`
  border-radius: 32px;
  border: 1.8px solid #3e85f3;
  width: 32px;
  height: 32px;

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
    border-radius: 44px;
  }
`;var ne={},on=Xe;Object.defineProperty(ne,"__esModule",{value:!0});var je=ne.default=void 0,an=on(Ze()),sn=n,rn=(0,an.default)((0,sn.jsx)("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star");je=ne.default=rn;function ln(e){return G({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"}}]})(e)}const cn=s.div`
  padding: 20px 29px;
  width: 335px;
  max-width: 100%;

  @media screen and (min-width: 768px) {
    padding: 32px;
    width: 468px;
  }
`,dn=s.p`
  color: ${({theme:e})=>e.colors.modalReviewLabel};

  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 116.667%;
  margin-bottom: 8px;
`,pn=s.form`
  position: relative;
  margin-top: 32px;
`,un=s.span`
  color: ${({theme:e})=>e.colors.modalReviewLabel};
  margin-bottom: 16px;
  display: block;

  font-size: 12px;
  font-weight: 500;
  line-height: 116.667%;
`,hn=s.textarea`
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
`,mn=s.p`
  color: #da1414;
  font-size: 12px;
  font-weight: 400;
  line-height: 116.667%;
`,pe=s.div`
  margin-top: 14px;

  display: flex;
  align-items: center;
  gap: 8px;
`,ue=s.button`
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
`,he=s.button`
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
`,xn=s.div`
  position: absolute;
  top: -16px;
  right: 0;

  display: flex;
  align-items: center;
  gap: 8px;
`,fn=s.button`
  cursor: pointer;
  color: ${({["data-edit"]:e})=>e==="true"?"#fff":"#3e85f3"};
  padding: 10px;
  border-radius: 50px;
  background: ${({["data-edit"]:e,theme:t})=>e==="true"?"#3E85F3":t.name==="dark-theme"?"#353647":"#e3f3ff"};
  display: flex;
  border: none;
  font-size: 16px;
`,gn=s.button`
  cursor: pointer;
  color: #ea3d65;
  padding: 10px;
  border-radius: 50px;
  background: rgba(234, 61, 101, 0.2);
  display: flex;
  border: none;
  font-size: 16px;
`,Z="feedback",vn=()=>{var d;const[e,t]=h.useState(()=>{var v;return((v=JSON.parse(window.localStorage.getItem(Z)))==null?void 0:v.rating)??5}),[o,a]=h.useState(!1),[l,i]=h.useState(!1),[c,m]=h.useState({review:((d=JSON.parse(window.localStorage.getItem(Z)))==null?void 0:d.review)??""}),r=at({initialValues:c,validationSchema:st({review:rt().max(300,"Must be 300 characters or less").trim().required("Fill in the field! Your feedback is very important to us")}),onSubmit:({review:v})=>{const u=v.trim();a(!0),i(!1),window.localStorage.setItem(Z,JSON.stringify({review:u,rating:e})),m({review:u})}});return n.jsxs(cn,{children:[n.jsx(dn,{children:"Rating"}),n.jsx(Mt,{spacing:1,children:n.jsx(Wt,{name:"text-feedback",value:e,disabled:o,onChange:(v,u)=>{t(u)},precision:.5,emptyIcon:n.jsx(je,{style:{opacity:.55},fontSize:"inherit"})})}),n.jsxs(pn,{onSubmit:r.handleSubmit,children:[n.jsx("label",{htmlFor:"firstName",children:n.jsx(un,{children:"Review"})}),n.jsx(hn,{"data-error":r.errors.review,id:"review",name:"review",type:"text",disabled:o,placeholder:"Enter text",onChange:r.handleChange,onBlur:r.onBlur,value:r.values.review}),r.errors.review&&n.jsx(mn,{children:r.errors.review}),!o&&c.review===""&&n.jsxs(pe,{children:[n.jsx(ue,{type:"submit",children:"Save"}),n.jsx(he,{type:"button",onClick:()=>r.resetForm(),children:"Cancel"})]}),c.review!==""&&n.jsxs(xn,{children:[n.jsx(fn,{"data-edit":l.toString(),type:"button",onClick:()=>{a(!1),i(!0)},children:n.jsx(ct,{})}),n.jsx(gn,{type:"button",onClick:()=>{window.localStorage.setItem(Z,JSON.stringify({rating:5,review:""})),m({review:""}),a(!1),r.resetForm()},children:n.jsx(ln,{})})]}),l&&c.review!==""&&n.jsxs(pe,{children:[n.jsx(ue,{type:"submit",children:"Edit"}),n.jsx(he,{type:"button",onClick:()=>r.resetForm(),children:"Cancel"})]})]})]})},bn="/GooseTrack-with-backend-3.0/assets/user-c5327e69.jpg",yn=({onClickModal:e,modal:t})=>{const o=ye(),[a,l]=h.useState(""),i=ce(d=>d.theme.lightTheme),c=ce(Ye),m=()=>{o(et())},{pathname:r}=Ke();return h.useEffect(()=>{switch(r){case"/account":return l("User Profile");case"/statistics":return l("Statistics");case"/calendar":return l("Calendar")}},[r]),n.jsxs(n.Fragment,{children:[n.jsxs(Zt,{children:[n.jsx(Kt,{children:a}),n.jsxs(Xt,{children:[n.jsx(Qt,{type:"button",onClick:e,children:"Feedback"}),n.jsxs(Yt,{children:[n.jsx(en,{onClick:m,children:i?n.jsx(lt,{}):n.jsx(Jt,{})}),n.jsx(tn,{children:c==null?void 0:c.userName}),n.jsx(nn,{src:bn,alt:"Img User",loading:"lazy",width:"32"})]})]})]}),t&&n.jsx(Qe,{onClose:e,children:n.jsx(vn,{})})]})};function wn(e){return G({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M11.5 21h-5.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6"}},{tag:"path",attr:{d:"M16 3v4"}},{tag:"path",attr:{d:"M8 3v4"}},{tag:"path",attr:{d:"M4 11h16"}},{tag:"path",attr:{d:"M15 19l2 2l4 -4"}}]})(e)}function jn(e){return G({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"}},{tag:"path",attr:{d:"M6 21v-2a4 4 0 0 1 4 -4h4"}},{tag:"path",attr:{d:"M15 19l2 2l4 -4"}}]})(e)}const kn=s.aside`
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
`,Cn=s.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  backdrop-filter: blur(2px);
`,Sn=s.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 32px;
  }
`,Fn=s.img`
  margin-right: 6px;

  @media screen and (min-width: 768px) {
    width: 60px;
  }

  @media screen and (min-width: 1440px) {
    width: 71px;
  }
`,zn=s.button`
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
`,Mn=s.h3`
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
`,Vn=s.p`
  color: ${({theme:e})=>e.colors.modalReviewLabel};
  font-size: 12px;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`,Rn=s.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`,$n=s.li``,Bn=s(tt)`
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
`,Ln=s.button`
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
`,Hn="/GooseTrack-with-backend-3.0/assets/goose-b174e7d2.png",Pn=({onClickMenu:e,nav:t})=>{const o=ye(),a=c=>{c.target===c.currentTarget&&e()},l=[{name:"My account",icon:n.jsx(jn,{}),to:"/account"},{name:"Calendar",icon:n.jsx(wn,{}),to:"/calendar"},{name:"Statistics",icon:n.jsx(pt,{}),to:"/statistics"}],i=()=>{o(ot())};return n.jsxs(n.Fragment,{children:[t&&n.jsx(Cn,{onClick:a}),n.jsxs(kn,{"data-isopenmenu":t.toString(),children:[n.jsxs("div",{children:[n.jsxs(Sn,{children:[n.jsx(Fn,{src:Hn,alt:"gosse",width:"36"}),n.jsx(Mn,{children:"GooseTrack"}),n.jsx(zn,{type:"button",onClick:e,children:n.jsx(nt,{})})]}),n.jsx(Vn,{children:"User Panel"}),n.jsx("nav",{children:n.jsx(Rn,{children:l.map(({name:c,icon:m,to:r})=>n.jsx($n,{children:n.jsxs(Bn,{activeclassname:"active",to:r,children:[m,c]})},c))})})]}),n.jsxs(Ln,{className:"log_out",type:"button",onClick:i,children:["Log out ",n.jsx(dt,{})]})]})]})},Tn=s.div`
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
`,An=s.header``,En=s.main`
  @media screen and (min-width: 1440px) {
    width: 79.5%;
    padding-left: 32px;
  }
`,On=s.button`
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
`,Un=()=>{const[e,t]=h.useState(!1),[o,a]=h.useState(!1),l=h.useCallback(()=>{a(!o),o?document.body.style.overflow="auto":document.body.style.overflow="hidden"},[o]),i=h.useCallback(()=>{t(!e),e?document.body.style.overflow="auto":document.body.style.overflow="hidden"},[e]);return n.jsxs(Tn,{children:[n.jsxs(An,{children:[n.jsx(On,{type:"button",onClick:i,children:n.jsx(qt,{})}),n.jsx(Pn,{onClickMenu:i,nav:e})]}),n.jsxs(En,{children:[n.jsx(yn,{onClickModal:l,modal:o}),n.jsx(h.Suspense,{children:n.jsx(it,{})})]})]})};export{Un as default};
