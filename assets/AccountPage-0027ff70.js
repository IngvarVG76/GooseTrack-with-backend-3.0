import{G as $,s as t,f as S,h as A,r as d,e as L,u as P,b as O,d as m,z as T,B as M,j as e,o as V}from"./index-e0698c93.js";import{a as D}from"./index.esm-feb68ad9.js";import{t as q,p as W}from"./index-c935fc00.js";import{E as u}from"./RegisterForm.styled-7d9c9b2d.js";import"./index-927eef9e.js";import"./index.esm-635ec01a.js";import"./index.esm-445340ed.js";function G(i){return $({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M229.19,213c-15.81-27.32-40.63-46.49-69.47-54.62a70,70,0,1,0-63.44,0C67.44,166.5,42.62,185.67,26.81,213a6,6,0,1,0,10.38,6C56.4,185.81,90.34,166,128,166s71.6,19.81,90.81,53a6,6,0,1,0,10.38-6ZM70,96a58,58,0,1,1,58,58A58.07,58.07,0,0,1,70,96Z"}}]})(i)}function H(i){return $({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeMiterlimit:"10",strokeWidth:"32",d:"M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"}},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M352 176L217.6 336 160 272"}}]})(i)}const K=t.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  background-color: ${({theme:i})=>i.colors.secondaryBackground};
  border-radius: 16px;
  padding: 59px 20px 40px;

  @media screen and (max-width: 374px) {
    max-width: 335px;
  }

  @media screen and (max-width: 767px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 704px;
    padding: 40px 175px;
  }

  @media screen and (min-width: 1440px) {
    width: 1087px;
    padding: 60px 164px;
  }
`,Z=t.div`
  position: absolute;
  top: -31px;
  left: 50%;
  transform: translateX(-50%);
  width: 72px;
  height: 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    position: relative;
    transform: none;
    top: 0;
    left: 0;
    width: 124px;
    height: 124px;

    margin-bottom: 20px;
  }
`,_=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: 2px solid #3e85f3;
  overflow: hidden;

  font-size: 8px;
  background-color: ${({theme:i})=>i.colors.avatarBgColor};

  @media screen and (min-width: 768px) {
    width: 124px;
    height: 124px;
  }
`,k=t.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`,X=t(D)`
  position: absolute;
  top: 62px;
  left: 43px;
  /* display: flex;
  justify-content: center;
  align-items: center; */

  width: 14px;
  height: 14px;
  border-radius: 100%;
  border: 0;

  background-color: #ffffff;
  color: #3e85f3;
  font-size: 8px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;

    top: 106px;
    left: 76px;
  }
`,J=t.input`
  display: none;
`,Q=t(G)`
  width: 48px;
  height: 48px;
  color: ${({theme:i})=>i.colors.avatarPlaceholder};

  @media screen and (max-width: 767px) {
    width: 32px;
    height: 32px;
  }
`,Y=t.h2`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: calc(18 / 14);
  text-align: center;
  color: ${({theme:i})=>i.colors.titleAvatar};

  margin-bottom: 4px;
  margin-top: 0;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1;

    margin-bottom: 8px;
  }
`,ee=t.p`
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  line-height: calc(14 / 12);
  color: ${({theme:i})=>i.colors.textAvatar};

  margin-bottom: 40px;
  margin-top: 0;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: calc(18 / 14);
  }
`,ie=t.form`
  display: flex;
  flex-direction: column;

  /* gap: 18px; */
  width: 100%;
  margin: 0 auto;
`,p=t.div`
  /* position: relative; */
  display: flex;
  flex-direction: column;
  gap: 8px;
`,h=t.label`
  width: 100%;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: calc(14 / 12);
  color: ${({theme:i})=>i.colors.labelUserFormTextColor};

  &.valid-input {
    color: #3cbc81;
  }

  &.invalid-input {
    color: #ff0000;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: calc(18 / 14);
  }
`,g=t.input`
  /* width: 100%; */
  /* margin-bottom: 18px; */
  padding: 12px 14px;
  border: ${({theme:i})=>i.colors.borderUserForm};
  border-radius: 8px;

  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14);
  background-color: ${({theme:i})=>i.colors.secondaryBackground};
  color: ${({theme:i})=>i.colors.text};

  &::placeholder {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: calc(18 / 14);
    color: ${({theme:i})=>i.colors.activeArrowColor};

    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: calc(18 / 16);
    }
  }

  &.valid-input {
    border: 1px solid #3cbc81;
  }

  &.invalid-input {
    border: 1px solid #ff0000;
  }

  &:focus,
  &:hover,
  &:active {
    outline: none;
    border: ${({theme:i})=>i.colors.borderInputHover};
  }

  background-color: ${({theme:i})=>i.colors.secondaryBackground};
  @media screen and (min-width: 768px) {
    /* margin-bottom: 24px; */
    padding: 14px 18px;
    font-size: 16px;
    line-height: calc(18 / 16);
  }
`,ae=t(q)`
  width: 100%;
  padding: 12px 14px;
  border: ${({theme:i})=>i.colors.borderUserForm};
  border-radius: 8px;

  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14);
  background-color: ${({theme:i})=>i.colors.secondaryBackground};
  color: ${({theme:i})=>i.colors.text};

  &.valid-input {
    border: 1px solid #3cbc81;
  }

  &.invalid-input {
    border: 1px solid #ff0000;
  }

  &:focus,
  &:hover,
  &:active {
    outline: none;
    border: ${({theme:i})=>i.colors.borderInputHover};
  }

  background-color: ${({theme:i})=>i.colors.secondaryBackground};
  @media screen and (min-width: 768px) {
    /* margin-bottom: 24px; */
    padding: 14px 18px;
    font-size: 16px;
    line-height: calc(18 / 16);
  }
`,te=t(g)`
  margin-bottom: 0;
`,re=t.button`
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  padding: 14px 20px;

  background-color: ${i=>i.disabled?"#ccc":"#3e85f3"};
  color: #ffffff;
  border: none;
  border-radius: 16px;
  cursor: ${i=>i.disabled?"not-allowed":"pointer"};

  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14);

  &:hover,
  &:focus,
  &:active {
    background-color: ${i=>i.disabled?"#ccc":"#2b78ef"};
  }

  @media screen and (max-width: 374px) {
    max-width: 195px;
  }

  @media screen and (min-width: 375px) {
    width: 195px;
  }

  @media screen and (min-width: 768px) {
    width: 262px;
    padding: 15px 20px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 88px;
  }
`,ne=t.div`
  @media screen and (max-width: 1439px) {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    gap: 50px;
  }
`,N=t.div`
  @media screen and (max-width: 1439px) {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    width: 354px;
    gap: 24px;
  }
`,n=t.div`
  position: relative;
  padding-left: 18px;
`,o=t.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;

  &.valid {
    color: #3cbc81;
  }

  &.invalid {
    color: #ff0000;
  }
`,f=t(H)`
  position: absolute;
  right: 12px;
  bottom: 37px;
  width: 18px;
  height: 18px;
  color: #3cbc81;

  @media screen and (min-width: 768px) {
    bottom: 37px;
  }
`,oe=/\+380\d{3}\d{2}\d{2}\d{2}$/,se=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,le=()=>{const{avatarURL:i,birthDay:R,email:C,phone:z,skype:U,userName:x}=S(A),[b,F]=d.useState(i??""),[l,y]=d.useState(""),I=L(),v=d.useRef(),B=d.useRef(),j=d.useRef();d.useEffect(()=>()=>{l&&URL.revokeObjectURL(l)},[l]);const w=()=>{v.current.click()},E=r=>{const c=r.target.files[0];if(l||j.current.click(),F(c),c){const s=URL.createObjectURL(c);y(s),console.log(l)}else y(i)},a=P({initialValues:{avatar:`${b}`,checkBox:!1,userName:`${x??""}`,birthday:`${R}`,email:`${C??""}`,phone:`${z??""}`,skype:`${U??""}`},validationSchema:O({userName:m().min(3,"Username must contain at least 3 characters").max(16,"Username must contain not more than 16 characters").required("Username is required field"),birthday:T().required(),email:m().email("This is an ERROR email").matches(se,"This is an ERROR email").required("Email is required field"),phone:m().matches(oe,"Phone number is not valid"),skype:m().min(3,"Skype must contain at least 3 characters").max(16,"Skype must not have more than 16 characters")}),onSubmit:async(r,c)=>{const s=new FormData;a.initialValues.userName!==r.userName&&s.append("userName",r.userName),a.initialValues.email!==r.email&&s.append("email",r.email),a.initialValues.phone!==r.phone&&s.append("phone",r.phone),a.initialValues.skype!==r.skype&&s.append("skype",r.skype),a.initialValues.birthday!==r.birthday&&s.append("birthDay",r.birthday),b!==""&&s.append("avatarURL",b),console.log(r),I(M(s)),setTimeout(()=>{a.resetForm({values:r})},3e3),c.setSubmitting(!1)}});return console.log(a.values.birthday),e.jsx(K,{children:e.jsxs(ie,{onSubmit:a.handleSubmit,children:[e.jsxs(Z,{children:[e.jsx(_,{onClick:w,children:l?e.jsx(k,{src:l,alt:x}):i?e.jsx(k,{src:i,alt:x}):e.jsx(Q,{})}),e.jsx(X,{onClick:w}),e.jsx(J,{name:"avatar",type:"file",ref:v,accept:"image/*",value:a.values.avatar,onChange:E}),e.jsx("input",{ref:j,type:"checkbox",name:"checkBox",onChange:a.handleChange,checked:a.values.checkBox,style:{display:"none"}})]}),e.jsx(Y,{children:x}),e.jsx(ee,{children:"User"}),e.jsxs(ne,{children:[e.jsxs(N,{children:[e.jsxs(p,{children:[e.jsx(h,{htmlFor:"userName",className:a.touched.userName?a.errors.userName?"invalid-input":"valid-input":"",children:"User Name"}),e.jsx(g,{id:"userName",name:"userName",type:"text",placeholder:"Enter your name",value:a.values.userName,onChange:a.handleChange,onBlur:a.handleBlur,className:a.touched.userName?a.errors.userName?"invalid-input":"valid-input":""}),a.touched.userName?a.errors.userName?e.jsxs(n,{children:[e.jsx(o,{className:"invalid",children:a.errors.userName}),e.jsx(u,{})]}):e.jsxs(n,{children:[e.jsx(o,{className:"valid",children:"This is CORRECT username"}),e.jsx(f,{})]}):null]}),e.jsxs(p,{children:[e.jsx(h,{htmlFor:"birthday",children:"Birthday"}),e.jsx(ae,{id:"birthday",selected:a.values.birthday?W(a.values.birthday):new Date,onChange:r=>{console.log(r),a.setFieldValue("birthday",V(r,"yyyy-MM-dd"))},dateFormat:"dd/MM/yyyy"}),a.touched.birthday?a.errors.birthday?e.jsx(n,{children:e.jsx(o,{className:"invalid",children:a.errors.birthday})}):e.jsx(n,{children:e.jsx(o,{className:"valid",children:"This is CORRECT date"})}):null]}),e.jsxs(p,{children:[e.jsx(h,{htmlFor:"email",children:"Email"}),e.jsx(g,{id:"email",name:"email",type:"text",placeholder:"Enter your email",...a.getFieldProps("email"),className:a.touched.email?a.errors.email?"invalid-input":"valid-input":""}),a.touched.email?a.errors.email?e.jsxs(n,{children:[e.jsx(o,{className:"invalid",children:a.errors.email}),e.jsx(u,{})]}):e.jsxs(n,{children:[e.jsx(o,{className:"valid",children:"This is CORRECT email"}),e.jsx(f,{})]}):null]})]}),e.jsxs(N,{children:[e.jsxs(p,{children:[e.jsx(h,{htmlFor:"phone",children:"Phone"}),e.jsx(g,{id:"phone",name:"phone",type:"text",placeholder:"+380670000000",...a.getFieldProps("phone"),className:a.touched.phone?a.errors.phone?"invalid-input":"valid-input":""}),a.touched.phone?a.errors.phone?e.jsxs(n,{children:[e.jsx(o,{className:"invalid",children:a.errors.phone}),e.jsx(u,{})]}):e.jsxs(n,{children:[e.jsx(o,{className:"valid",style:{color:"transparent"},children:"OK"}),e.jsx(f,{})]}):null]}),e.jsxs(p,{children:[e.jsx(h,{htmlFor:"skype",children:"Skype"}),e.jsx(te,{id:"skype",name:"skype",type:"text",placeholder:"Add a skype number",...a.getFieldProps("skype"),className:a.touched.skype?a.errors.skype?"invalid-input":"valid-input":""}),a.touched.skype?a.errors.skype?e.jsxs(n,{children:[e.jsx(o,{className:"invalid",children:a.errors.skype}),e.jsx(u,{})]}):e.jsxs(n,{children:[e.jsx(o,{className:"valid",style:{color:"transparent"},children:"OK"}),e.jsx(f,{})]}):null]})]})]}),e.jsx(re,{type:"submit",ref:B,disabled:!(a.isValid&&a.dirty)||a.isSubmitting,children:"Save changes"})]})})},fe=()=>e.jsx(le,{});export{fe as default};
