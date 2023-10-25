import{G as w,s as a,z as D,K as P,r as l,y as T,A as M,B as V,D as m,ab as Z,ac as W,j as e,a0 as q}from"./index-34812fe8.js";import{a as G,P as K}from"./index.esm-ca0ae046.js";import{t as H,p as _}from"./index-ea259654.js";import{E as u}from"./RegisterForm.styled-fe1a7684.js";import{C as X}from"./StyledDayPicker-b462f471.js";import"./index-5999410b.js";import"./index.esm-089036e9.js";import"./index.esm-1d9ee842.js";function J(i){return w({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeMiterlimit:"10",strokeWidth:"32",d:"M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"}},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M352 176L217.6 336 160 272"}}]})(i)}function Q(i){return w({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"}}]})(i)}function Y(i){return w({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"}}]})(i)}const ee=a.div`
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
`,ie=a.div`
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
`,te=a.div`
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
`,z=a.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`,ae=a(G)`
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
  cursor: pointer;

  background-color: #ffffff;
  color: #3e85f3;
  font-size: 8px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;

    top: 106px;
    left: 76px;
  }
`,re=a.input`
  display: none;
`,ne=a(K)`
  width: 48px;
  height: 48px;
  color: ${({theme:i})=>i.colors.avatarPlaceholder};

  @media screen and (max-width: 767px) {
    width: 32px;
    height: 32px;
  }
`,oe=a.h2`
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
`,se=a.p`
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
`,le=a.form`
  display: flex;
  flex-direction: column;

  /* gap: 18px; */
  width: 100%;
  margin: 0 auto;
`,p=a.div`
  position: relative;
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
`,de=a(H)`
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
`,ce=a(g)`
  margin-bottom: 0;
`,pe=a.button`
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
`,he=a.div`
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
`,I=a.div`
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
`,f=a(J)`
  position: absolute;
  right: 12px;
  bottom: 37px;
  width: 18px;
  height: 18px;
  color: #3cbc81;

  @media screen and (min-width: 768px) {
    bottom: 37px;
  }
`,xe=a(Q)`
  position: absolute;
  top: 40px;
  right: 14px;
  width: 18px;
  height: 18px;
  cursor: pointer;

  color: ${({theme:i})=>i.colors.titleAvatar};
`,me=a(Y)`
  position: absolute;
  top: 40px;
  right: 14px;
  width: 18px;
  height: 18px;
  cursor: pointer;

  color: ${({theme:i})=>i.colors.titleAvatar};
`,ue=/^(?:\+\d|[\d\s\-./()]){10,20}$/,fe=/^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?$/,ge=()=>{const{avatarURL:i,birthDay:A,email:F,phone:U,skype:B,userName:x}=D(P),[j,S]=l.useState(i??""),[d,k]=l.useState(""),[b,y]=l.useState(!1),E=T(),C=l.useRef(),v=l.useRef(),L=l.useRef(),N=l.useRef();l.useEffect(()=>()=>{d&&URL.revokeObjectURL(d)},[d]);const $=()=>{C.current.click()},R=()=>{b||v.current.setOpen(!0),b&&v.current.setOpen(!1)},O=r=>{const c=r.target.files[0];if(d||N.current.click(),S(c),c){const s=URL.createObjectURL(c);k(s)}else k(i)},t=M({initialValues:{avatar:`${i}`,checkBox:!1,userName:`${x??""}`,birthday:`${A}`,email:`${F??""}`,phone:`${U??""}`,skype:`${B??""}`},validationSchema:V({userName:m().min(3,"Username must contain at least 3 characters").max(16,"Username must contain not more than 16 characters").required("Username is required field"),birthday:Z().min(new Date(1923,0,1),"Date is too early").max(new Date,"Date is not valid"),email:m().email("This is an ERROR email").matches(fe,"This is an ERROR email").required("Email is required field"),phone:m().matches(ue,"Phone number is not valid"),skype:m().min(3,"Skype must contain at least 3 characters").max(16,"Skype must not have more than 16 characters")}),onSubmit:async(r,c)=>{const s=new FormData;t.initialValues.userName!==r.userName&&s.append("userName",r.userName),t.initialValues.email!==r.email&&s.append("email",r.email),t.initialValues.phone!==r.phone&&s.append("phone",r.phone),t.initialValues.skype!==r.skype&&s.append("skype",r.skype),t.initialValues.birthday!==r.birthday&&s.append("birthDay",r.birthday),j!==""&&s.append("avatarURL",j),E(W(s)),setTimeout(()=>{t.resetForm({values:r,touched:{userName:!0,birthday:!0,email:!0,phone:!0,skype:!0}})},500),c.setSubmitting(!1)}});return e.jsx(ee,{children:e.jsxs(le,{onSubmit:t.handleSubmit,children:[e.jsxs(ie,{children:[e.jsx(te,{onClick:$,children:d?e.jsx(z,{src:d,alt:x}):i?e.jsx(z,{src:i,alt:x}):e.jsx(ne,{})}),e.jsx(ae,{onClick:$}),e.jsx(re,{name:"avatar",type:"file",ref:C,accept:"image/*",onChange:O}),e.jsx("input",{ref:N,type:"checkbox",name:"checkBox",onChange:t.handleChange,checked:t.values.checkBox,style:{display:"none"}})]}),e.jsx(oe,{children:x}),e.jsx(se,{children:"User"}),e.jsxs(he,{children:[e.jsxs(I,{children:[e.jsxs(p,{children:[e.jsx(h,{htmlFor:"userName",className:t.touched.userName?t.errors.userName?"invalid-input":"valid-input":"",children:"User Name"}),e.jsx(g,{id:"userName",name:"userName",type:"text",placeholder:"Enter your name",value:t.values.userName,onChange:t.handleChange,onBlur:t.handleBlur,className:t.touched.userName?t.errors.userName?"invalid-input":"valid-input":""}),t.touched.userName?t.errors.userName?e.jsxs(n,{children:[e.jsx(o,{className:"invalid",children:t.errors.userName}),e.jsx(u,{})]}):e.jsxs(n,{children:[e.jsx(o,{className:"valid",children:"This is CORRECT username"}),e.jsx(f,{})]}):null]}),e.jsxs(p,{children:[e.jsx(h,{htmlFor:"birthday",children:"Birthday"}),e.jsx(de,{id:"birthday",selected:t.values.birthday?_(t.values.birthday):new Date,onChange:r=>{t.setFieldValue("birthday",q(r,"yyyy-MM-dd"))},onBlur:()=>{t.setFieldTouched("birthday",!0),y(!1)},onCalendarOpen:()=>y(!0),onCalendarClose:()=>y(!1),dateFormat:"dd/MM/yyyy",ref:v,className:t.touched.birthday?t.errors.birthday?"invalid-input":"valid-input":""}),b?e.jsx(me,{onClick:R}):e.jsx(xe,{onClick:R}),t.touched.birthday?t.errors.birthday?e.jsx(n,{children:e.jsx(o,{className:"invalid",children:t.errors.birthday})}):e.jsx(n,{children:e.jsx(o,{className:"valid",children:"This is CORRECT date"})}):null,e.jsx(X,{})]}),e.jsxs(p,{children:[e.jsx(h,{htmlFor:"email",children:"Email"}),e.jsx(g,{id:"email",name:"email",type:"text",placeholder:"Enter your email",...t.getFieldProps("email"),className:t.touched.email?t.errors.email?"invalid-input":"valid-input":""}),t.touched.email?t.errors.email?e.jsxs(n,{children:[e.jsx(o,{className:"invalid",children:t.errors.email}),e.jsx(u,{})]}):e.jsxs(n,{children:[e.jsx(o,{className:"valid",children:"This is CORRECT email"}),e.jsx(f,{})]}):null]})]}),e.jsxs(I,{children:[e.jsxs(p,{children:[e.jsx(h,{htmlFor:"phone",children:"Phone"}),e.jsx(g,{id:"phone",name:"phone",type:"tel",placeholder:"38 (067) 000 00 00",...t.getFieldProps("phone"),className:t.touched.phone?t.errors.phone?"invalid-input":"valid-input":""}),t.touched.phone?t.errors.phone?e.jsxs(n,{children:[e.jsx(o,{className:"invalid",children:t.errors.phone}),e.jsx(u,{})]}):e.jsxs(n,{children:[e.jsx(o,{className:"valid",style:{color:"transparent"},children:"OK"}),e.jsx(f,{})]}):null]}),e.jsxs(p,{children:[e.jsx(h,{htmlFor:"skype",children:"Skype"}),e.jsx(ce,{id:"skype",name:"skype",type:"text",placeholder:"Add a skype number",...t.getFieldProps("skype"),className:t.touched.skype?t.errors.skype?"invalid-input":"valid-input":""}),t.touched.skype?t.errors.skype?e.jsxs(n,{children:[e.jsx(o,{className:"invalid",children:t.errors.skype}),e.jsx(u,{})]}):e.jsxs(n,{children:[e.jsx(o,{className:"valid",style:{color:"transparent"},children:"OK"}),e.jsx(f,{})]}):null]})]})]}),e.jsx(pe,{type:"submit",ref:L,disabled:!(t.isValid&&t.dirty)||t.isSubmitting,children:"Save changes"})]})})},$e=()=>e.jsx(ge,{});export{$e as default};
