import{G as $,s as a,b as E,m as S,r as d,u as L,d as P,e as O,f as x,F as T,H as Z,j as e,v as M}from"./index-e4a589ba.js";import{a as V}from"./index.esm-b8b50da2.js";import{t as D,p as W}from"./index-c249b441.js";import{E as u}from"./RegisterForm.styled-91f382fa.js";import"./index-b12a67d0.js";import"./index.esm-559e471c.js";import"./index.esm-2ae1ad6e.js";function q(i){return $({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M229.19,213c-15.81-27.32-40.63-46.49-69.47-54.62a70,70,0,1,0-63.44,0C67.44,166.5,42.62,185.67,26.81,213a6,6,0,1,0,10.38,6C56.4,185.81,90.34,166,128,166s71.6,19.81,90.81,53a6,6,0,1,0,10.38-6ZM70,96a58,58,0,1,1,58,58A58.07,58.07,0,0,1,70,96Z"}}]})(i)}function H(i){return $({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeMiterlimit:"10",strokeWidth:"32",d:"M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"}},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M352 176L217.6 336 160 272"}}]})(i)}const G=a.div`
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
`,K=a.div`
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
`,_=a.div`
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
`,k=a.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`,X=a(V)`
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
`,J=a.input`
  display: none;
`,Q=a(q)`
  width: 48px;
  height: 48px;
  color: ${({theme:i})=>i.colors.avatarPlaceholder};

  @media screen and (max-width: 767px) {
    width: 32px;
    height: 32px;
  }
`,Y=a.h2`
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
`,ee=a.p`
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
`,ie=a.form`
  display: flex;
  flex-direction: column;

  /* gap: 18px; */
  width: 100%;
  margin: 0 auto;
`,p=a.div`
  /* position: relative; */
  display: flex;
  flex-direction: column;
  gap: 8px;
`,h=a.label`
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
`,g=a.input`
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
`,te=a(D)`
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
`,ae=a(g)`
  margin-bottom: 0;
`,re=a.button`
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
`,ne=a.div`
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
`,N=a.div`
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
`,n=a.div`
  position: relative;
  padding-left: 18px;
`,o=a.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;

  &.valid {
    color: #3cbc81;
  }

  &.invalid {
    color: #ff0000;
  }
`,f=a(H)`
  position: absolute;
  right: 12px;
  bottom: 37px;
  width: 18px;
  height: 18px;
  color: #3cbc81;

  @media screen and (min-width: 768px) {
    bottom: 37px;
  }
`,oe=/^(?:\+\d|[\d\s\-./()]){10,20}$/,se=/^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?$/,le=()=>{const{avatarURL:i,birthDay:R,email:C,phone:z,skype:F,userName:m}=E(S),[b,U]=d.useState(i??""),[l,y]=d.useState(""),A=L(),v=d.useRef(),I=d.useRef(),j=d.useRef();d.useEffect(()=>()=>{l&&URL.revokeObjectURL(l)},[l]);const w=()=>{v.current.click()},B=r=>{const c=r.target.files[0];if(l||j.current.click(),U(c),c){const s=URL.createObjectURL(c);y(s),console.log(l)}else y(i)},t=P({initialValues:{avatar:`${i}`,checkBox:!1,userName:`${m??""}`,birthday:`${R}`,email:`${C??""}`,phone:`${z??""}`,skype:`${F??""}`},validationSchema:O({userName:x().min(3,"Username must contain at least 3 characters").max(16,"Username must contain not more than 16 characters").required("Username is required field"),birthday:T(),email:x().email("This is an ERROR email").matches(se,"This is an ERROR email").required("Email is required field"),phone:x().matches(oe,"Phone number is not valid"),skype:x().min(3,"Skype must contain at least 3 characters").max(16,"Skype must not have more than 16 characters")}),onSubmit:async(r,c)=>{const s=new FormData;t.initialValues.userName!==r.userName&&s.append("userName",r.userName),t.initialValues.email!==r.email&&s.append("email",r.email),t.initialValues.phone!==r.phone&&s.append("phone",r.phone),t.initialValues.skype!==r.skype&&s.append("skype",r.skype),t.initialValues.birthday!==r.birthday&&s.append("birthDay",r.birthday),b!==""&&s.append("avatarURL",b),A(Z(s)),setTimeout(()=>{t.resetForm({values:r,touched:{userName:!0,birthday:!0,email:!0,phone:!0,skype:!0}})},1e3),c.setSubmitting(!1)}});return e.jsx(G,{children:e.jsxs(ie,{onSubmit:t.handleSubmit,children:[e.jsxs(K,{children:[e.jsx(_,{onClick:w,children:l?e.jsx(k,{src:l,alt:m}):i?e.jsx(k,{src:i,alt:m}):e.jsx(Q,{})}),e.jsx(X,{onClick:w}),e.jsx(J,{name:"avatar",type:"file",ref:v,accept:"image/*",onChange:B}),e.jsx("input",{ref:j,type:"checkbox",name:"checkBox",onChange:t.handleChange,checked:t.values.checkBox,style:{display:"none"}})]}),e.jsx(Y,{children:m}),e.jsx(ee,{children:"User"}),e.jsxs(ne,{children:[e.jsxs(N,{children:[e.jsxs(p,{children:[e.jsx(h,{htmlFor:"userName",className:t.touched.userName?t.errors.userName?"invalid-input":"valid-input":"",children:"User Name"}),e.jsx(g,{id:"userName",name:"userName",type:"text",placeholder:"Enter your name",value:t.values.userName,onChange:t.handleChange,onBlur:t.handleBlur,className:t.touched.userName?t.errors.userName?"invalid-input":"valid-input":""}),t.touched.userName?t.errors.userName?e.jsxs(n,{children:[e.jsx(o,{className:"invalid",children:t.errors.userName}),e.jsx(u,{})]}):e.jsxs(n,{children:[e.jsx(o,{className:"valid",children:"This is CORRECT username"}),e.jsx(f,{})]}):null]}),e.jsxs(p,{children:[e.jsx(h,{htmlFor:"birthday",children:"Birthday"}),e.jsx(te,{id:"birthday",selected:t.values.birthday?W(t.values.birthday):new Date,onChange:r=>{t.setFieldValue("birthday",M(r,"yyyy-MM-dd"))},dateFormat:"dd/MM/yyyy",className:t.touched.birthday?t.errors.birthday?"invalid-input":"valid-input":""}),t.touched.birthday?t.errors.birthday?e.jsx(n,{children:e.jsx(o,{className:"invalid",children:t.errors.birthday})}):e.jsx(n,{children:e.jsx(o,{className:"valid",children:"This is CORRECT date"})}):null]}),e.jsxs(p,{children:[e.jsx(h,{htmlFor:"email",children:"Email"}),e.jsx(g,{id:"email",name:"email",type:"text",placeholder:"Enter your email",...t.getFieldProps("email"),className:t.touched.email?t.errors.email?"invalid-input":"valid-input":""}),t.touched.email?t.errors.email?e.jsxs(n,{children:[e.jsx(o,{className:"invalid",children:t.errors.email}),e.jsx(u,{})]}):e.jsxs(n,{children:[e.jsx(o,{className:"valid",children:"This is CORRECT email"}),e.jsx(f,{})]}):null]})]}),e.jsxs(N,{children:[e.jsxs(p,{children:[e.jsx(h,{htmlFor:"phone",children:"Phone"}),e.jsx(g,{id:"phone",name:"phone",type:"tel",placeholder:"38 (067) 000 00 00",...t.getFieldProps("phone"),className:t.touched.phone?t.errors.phone?"invalid-input":"valid-input":""}),t.touched.phone?t.errors.phone?e.jsxs(n,{children:[e.jsx(o,{className:"invalid",children:t.errors.phone}),e.jsx(u,{})]}):e.jsxs(n,{children:[e.jsx(o,{className:"valid",style:{color:"transparent"},children:"OK"}),e.jsx(f,{})]}):null]}),e.jsxs(p,{children:[e.jsx(h,{htmlFor:"skype",children:"Skype"}),e.jsx(ae,{id:"skype",name:"skype",type:"text",placeholder:"Add a skype number",...t.getFieldProps("skype"),className:t.touched.skype?t.errors.skype?"invalid-input":"valid-input":""}),t.touched.skype?t.errors.skype?e.jsxs(n,{children:[e.jsx(o,{className:"invalid",children:t.errors.skype}),e.jsx(u,{})]}):e.jsxs(n,{children:[e.jsx(o,{className:"valid",style:{color:"transparent"},children:"OK"}),e.jsx(f,{})]}):null]})]})]}),e.jsx(re,{type:"submit",ref:I,disabled:!(t.isValid&&t.dirty)||t.isSubmitting,children:"Save changes"})]})})},fe=()=>e.jsx(le,{});export{fe as default};
