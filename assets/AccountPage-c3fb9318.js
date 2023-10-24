import{G as B,s as t,d as S,o as E,r as d,u as L,e as P,f as T,h as m,H as D,I as O,j as e,x as V}from"./index-86161a4d.js";import{a as Z,P as M}from"./index.esm-63ce88bf.js";import{t as W,p as q,C as G}from"./StyledDayPicker-02ff7c4c.js";import{E as u}from"./RegisterForm.styled-35d31e16.js";import"./index-15c4853b.js";import"./index.esm-e8fdf48c.js";import"./index.esm-2f412c81.js";function H(a){return B({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeMiterlimit:"10",strokeWidth:"32",d:"M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"}},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M352 176L217.6 336 160 272"}}]})(a)}const K=t.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  background-color: ${({theme:a})=>a.colors.secondaryBackground};
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
`,_=t.div`
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
`,X=t.div`
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
  background-color: ${({theme:a})=>a.colors.avatarBgColor};

  @media screen and (min-width: 768px) {
    width: 124px;
    height: 124px;
  }
`,k=t.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`,J=t(Z)`
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
`,Q=t.input`
  display: none;
`,Y=t(M)`
  width: 48px;
  height: 48px;
  color: ${({theme:a})=>a.colors.avatarPlaceholder};

  @media screen and (max-width: 767px) {
    width: 32px;
    height: 32px;
  }
`,ee=t.h2`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: calc(18 / 14);
  text-align: center;
  color: ${({theme:a})=>a.colors.titleAvatar};

  margin-bottom: 4px;
  margin-top: 0;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1;

    margin-bottom: 8px;
  }
`,ie=t.p`
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  line-height: calc(14 / 12);
  color: ${({theme:a})=>a.colors.textAvatar};

  margin-bottom: 40px;
  margin-top: 0;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: calc(18 / 14);
  }
`,ae=t.form`
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
  color: ${({theme:a})=>a.colors.labelUserFormTextColor};

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
  border: ${({theme:a})=>a.colors.borderUserForm};
  border-radius: 8px;

  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14);
  background-color: ${({theme:a})=>a.colors.secondaryBackground};
  color: ${({theme:a})=>a.colors.text};

  &::placeholder {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: calc(18 / 14);
    color: ${({theme:a})=>a.colors.activeArrowColor};

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
    border: ${({theme:a})=>a.colors.borderInputHover};
  }

  background-color: ${({theme:a})=>a.colors.secondaryBackground};
  @media screen and (min-width: 768px) {
    /* margin-bottom: 24px; */
    padding: 14px 18px;
    font-size: 16px;
    line-height: calc(18 / 16);
  }
`,te=t(W)`
  width: 100%;
  padding: 12px 14px;
  border: ${({theme:a})=>a.colors.borderUserForm};
  border-radius: 8px;

  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14);
  background-color: ${({theme:a})=>a.colors.secondaryBackground};
  color: ${({theme:a})=>a.colors.text};

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
    border: ${({theme:a})=>a.colors.borderInputHover};
  }

  background-color: ${({theme:a})=>a.colors.secondaryBackground};
  @media screen and (min-width: 768px) {
    /* margin-bottom: 24px; */
    padding: 14px 18px;
    font-size: 16px;
    line-height: calc(18 / 16);
  }
`,re=t(g)`
  margin-bottom: 0;
`,ne=t.button`
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  padding: 14px 20px;

  background-color: ${a=>a.disabled?"#ccc":"#3e85f3"};
  color: #ffffff;
  border: none;
  border-radius: 16px;
  cursor: ${a=>a.disabled?"not-allowed":"pointer"};

  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14);

  &:hover,
  &:focus,
  &:active {
    background-color: ${a=>a.disabled?"#ccc":"#2b78ef"};
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
`,se=t.div`
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
`,s=t.div`
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
`,oe=/^(?:\+\d|[\d\s\-./()]){10,20}$/,le=/^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?$/,de=()=>{const{avatarURL:a,birthDay:$,email:R,phone:C,skype:z,userName:x}=S(E),[b,F]=d.useState(a??""),[l,y]=d.useState(""),I=L(),v=d.useRef(),U=d.useRef(),j=d.useRef();d.useEffect(()=>()=>{l&&URL.revokeObjectURL(l)},[l]);const w=()=>{v.current.click()},A=r=>{const c=r.target.files[0];if(l||j.current.click(),F(c),c){const o=URL.createObjectURL(c);y(o),console.log(l)}else y(a)},i=P({initialValues:{avatar:`${a}`,checkBox:!1,userName:`${x??""}`,birthday:`${$}`,email:`${R??""}`,phone:`${C??""}`,skype:`${z??""}`},validationSchema:T({userName:m().min(3,"Username must contain at least 3 characters").max(16,"Username must contain not more than 16 characters").required("Username is required field"),birthday:D().min(new Date(1923,0,1),"Date is too early").max(new Date,"Date is not valid"),email:m().email("This is an ERROR email").matches(le,"This is an ERROR email").required("Email is required field"),phone:m().matches(oe,"Phone number is not valid"),skype:m().min(3,"Skype must contain at least 3 characters").max(16,"Skype must not have more than 16 characters")}),onSubmit:async(r,c)=>{const o=new FormData;i.initialValues.userName!==r.userName&&o.append("userName",r.userName),i.initialValues.email!==r.email&&o.append("email",r.email),i.initialValues.phone!==r.phone&&o.append("phone",r.phone),i.initialValues.skype!==r.skype&&o.append("skype",r.skype),i.initialValues.birthday!==r.birthday&&o.append("birthDay",r.birthday),b!==""&&o.append("avatarURL",b),I(O(o)),setTimeout(()=>{i.resetForm({values:r,touched:{userName:!0,birthday:!0,email:!0,phone:!0,skype:!0}})},500),c.setSubmitting(!1)}});return e.jsx(K,{children:e.jsxs(ae,{onSubmit:i.handleSubmit,children:[e.jsxs(_,{children:[e.jsx(X,{onClick:w,children:l?e.jsx(k,{src:l,alt:x}):a?e.jsx(k,{src:a,alt:x}):e.jsx(Y,{})}),e.jsx(J,{onClick:w}),e.jsx(Q,{name:"avatar",type:"file",ref:v,accept:"image/*",onChange:A}),e.jsx("input",{ref:j,type:"checkbox",name:"checkBox",onChange:i.handleChange,checked:i.values.checkBox,style:{display:"none"}})]}),e.jsx(ee,{children:x}),e.jsx(ie,{children:"User"}),e.jsxs(se,{children:[e.jsxs(N,{children:[e.jsxs(p,{children:[e.jsx(h,{htmlFor:"userName",className:i.touched.userName?i.errors.userName?"invalid-input":"valid-input":"",children:"User Name"}),e.jsx(g,{id:"userName",name:"userName",type:"text",placeholder:"Enter your name",value:i.values.userName,onChange:i.handleChange,onBlur:i.handleBlur,className:i.touched.userName?i.errors.userName?"invalid-input":"valid-input":""}),i.touched.userName?i.errors.userName?e.jsxs(n,{children:[e.jsx(s,{className:"invalid",children:i.errors.userName}),e.jsx(u,{})]}):e.jsxs(n,{children:[e.jsx(s,{className:"valid",children:"This is CORRECT username"}),e.jsx(f,{})]}):null]}),e.jsxs(p,{children:[e.jsx(h,{htmlFor:"birthday",children:"Birthday"}),e.jsx(te,{id:"birthday",selected:i.values.birthday?q(i.values.birthday):new Date,onChange:r=>{i.setFieldValue("birthday",V(r,"yyyy-MM-dd"))},onBlur:()=>i.setFieldTouched("birthday",!0),dateFormat:"dd/MM/yyyy",className:i.touched.birthday?i.errors.birthday?"invalid-input":"valid-input":""}),i.touched.birthday?i.errors.birthday?e.jsx(n,{children:e.jsx(s,{className:"invalid",children:i.errors.birthday})}):e.jsx(n,{children:e.jsx(s,{className:"valid",children:"This is CORRECT date"})}):null,e.jsx(G,{})]}),e.jsxs(p,{children:[e.jsx(h,{htmlFor:"email",children:"Email"}),e.jsx(g,{id:"email",name:"email",type:"text",placeholder:"Enter your email",...i.getFieldProps("email"),className:i.touched.email?i.errors.email?"invalid-input":"valid-input":""}),i.touched.email?i.errors.email?e.jsxs(n,{children:[e.jsx(s,{className:"invalid",children:i.errors.email}),e.jsx(u,{})]}):e.jsxs(n,{children:[e.jsx(s,{className:"valid",children:"This is CORRECT email"}),e.jsx(f,{})]}):null]})]}),e.jsxs(N,{children:[e.jsxs(p,{children:[e.jsx(h,{htmlFor:"phone",children:"Phone"}),e.jsx(g,{id:"phone",name:"phone",type:"tel",placeholder:"38 (067) 000 00 00",...i.getFieldProps("phone"),className:i.touched.phone?i.errors.phone?"invalid-input":"valid-input":""}),i.touched.phone?i.errors.phone?e.jsxs(n,{children:[e.jsx(s,{className:"invalid",children:i.errors.phone}),e.jsx(u,{})]}):e.jsxs(n,{children:[e.jsx(s,{className:"valid",style:{color:"transparent"},children:"OK"}),e.jsx(f,{})]}):null]}),e.jsxs(p,{children:[e.jsx(h,{htmlFor:"skype",children:"Skype"}),e.jsx(re,{id:"skype",name:"skype",type:"text",placeholder:"Add a skype number",...i.getFieldProps("skype"),className:i.touched.skype?i.errors.skype?"invalid-input":"valid-input":""}),i.touched.skype?i.errors.skype?e.jsxs(n,{children:[e.jsx(s,{className:"invalid",children:i.errors.skype}),e.jsx(u,{})]}):e.jsxs(n,{children:[e.jsx(s,{className:"valid",style:{color:"transparent"},children:"OK"}),e.jsx(f,{})]}):null]})]})]}),e.jsx(ne,{type:"submit",ref:U,disabled:!(i.isValid&&i.dirty)||i.isSubmitting,children:"Save changes"})]})})},ge=()=>e.jsx(de,{});export{ge as default};
