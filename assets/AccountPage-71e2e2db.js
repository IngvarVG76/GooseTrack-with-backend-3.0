import{G as B,s as t,c as A,d as P,r as c,u as S,f as L,e as T,j as e}from"./index-013d57a6.js";import{u as O,c as D,a as f,e as V}from"./index.esm-aca3e75f.js";import{B as M}from"./index.esm-0fe51d13.js";import{a as q}from"./index.esm-7eab8fc9.js";import{e as u}from"./RegisterForm.styled-1e495052.js";import{p as W}from"./index-7823a8bf.js";function G(a){return B({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M229.19,213c-15.81-27.32-40.63-46.49-69.47-54.62a70,70,0,1,0-63.44,0C67.44,166.5,42.62,185.67,26.81,213a6,6,0,1,0,10.38,6C56.4,185.81,90.34,166,128,166s71.6,19.81,90.81,53a6,6,0,1,0,10.38-6ZM70,96a58,58,0,1,1,58,58A58.07,58.07,0,0,1,70,96Z"}}]})(a)}const K=t.div`
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
`,H=t(M)`
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
`,X=t.input`
  display: none;
`,J=t(G)`
  width: 48px;
  height: 48px;
  color: ${({theme:a})=>a.colors.avatarPlaceholder};

  @media screen and (max-width: 767px) {
    width: 32px;
    height: 32px;
  }
`,Q=t.h2`
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
`,Y=t.p`
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
`,ee=t.form`
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
`,m=t.input`
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

  @media screen and (min-width: 768px) {
    /* margin-bottom: 24px; */
    padding: 14px 18px;
    font-size: 16px;
    line-height: calc(18 / 16);
  }
`,ie=t(m)`
  margin-bottom: 0;
`,ae=t.button`
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
`,te=t.div`
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
  }
`,s=t.div`
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
`,g=t(q)`
  position: absolute;
  right: 12px;
  bottom: 37px;
  width: 18px;
  height: 18px;
  color: #3cbc81;

  @media screen and (min-width: 768px) {
    bottom: 37px;
  }
`,re=/\+380\d{3}\d{2}\d{2}\d{2}$/,ne=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,se=()=>{const{avatarURL:a,birthDay:R,email:C,phone:$,skype:U,userName:x}=A(P),[y,z]=c.useState(a??""),[l,b]=c.useState(""),F=S(),v=c.useRef(),I=c.useRef(),j=c.useRef();c.useEffect(()=>()=>{l&&URL.revokeObjectURL(l)},[l]);const w=()=>{v.current.click()},E=r=>{const d=r.target.files[0];if(l||j.current.click(),z(d),d){const n=URL.createObjectURL(d);b(n),console.log(l)}else b(a)},i=O({initialValues:{avatar:`${y}`,checkBox:!1,userName:`${x??""}`,birthday:`${R||L(new Date,"yyyy-MM-dd")}`,email:`${C??""}`,phone:`${$??""}`,skype:`${U??""}`},validationSchema:D({userName:f().min(3,"Username must contain at least 3 characters").max(16,"Username must contain not more than 16 characters").required("Username is required field"),birthday:V().transform(function(r,d){return this.isType(r)?r:W(d,"dd.MM.yyyy",new Date)}).typeError("Please enter a valid date").min("1969-11-13","Date is too early").max("2024-01-01","Date is not valid").required(),email:f().email("This is an ERROR email").matches(ne,"This is an ERROR email").required("Email is required field"),phone:f().matches(re,"Phone number is not valid"),skype:f().min(3,"Skype must contain at least 3 characters").max(16,"Skype must not have more than 16 characters")}),onSubmit:async(r,d)=>{const n=new FormData;i.initialValues.userName!==r.userName&&n.append("userName",r.userName),i.initialValues.email!==r.email&&n.append("email",r.email),i.initialValues.phone!==r.phone&&n.append("phone",r.phone),i.initialValues.skype!==r.skype&&n.append("skype",r.skype),i.initialValues.birthday!==r.birthday&&n.append("birthDay",r.birthday),y!==""&&n.append("avatarURL",y),console.log(r),F(T(n)),setTimeout(()=>{i.resetForm({values:r})},3e3),d.setSubmitting(!1)}});return e.jsx(K,{children:e.jsxs(ee,{onSubmit:i.handleSubmit,children:[e.jsxs(Z,{children:[e.jsx(_,{onClick:w,children:l?e.jsx(k,{src:l,alt:x}):a?e.jsx(k,{src:a,alt:x}):e.jsx(J,{})}),e.jsx(H,{onClick:w}),e.jsx(X,{name:"avatar",type:"file",ref:v,accept:"image/*",value:i.values.avatar,onChange:E}),e.jsx("input",{ref:j,type:"checkbox",name:"checkBox",onChange:i.handleChange,checked:i.values.checkBox,style:{display:"none"}})]}),e.jsx(Q,{children:x}),e.jsx(Y,{children:"User"}),e.jsxs(te,{children:[e.jsxs(N,{children:[e.jsxs(p,{children:[e.jsx(h,{htmlFor:"userName",className:i.touched.userName?i.errors.userName?"invalid-input":"valid-input":"",children:"User Name"}),e.jsx(m,{id:"userName",name:"userName",type:"text",placeholder:"Enter your name",value:i.values.userName,onChange:i.handleChange,onBlur:i.handleBlur,className:i.touched.userName?i.errors.userName?"invalid-input":"valid-input":""}),i.touched.userName?i.errors.userName?e.jsxs(s,{children:[e.jsx(o,{className:"invalid",children:i.errors.userName}),e.jsx(u,{})]}):e.jsxs(s,{children:[e.jsx(o,{className:"valid",children:"This is CORRECT username"}),e.jsx(g,{})]}):null]}),e.jsxs(p,{children:[e.jsx(h,{htmlFor:"birthday",children:"Birthday"}),e.jsx(m,{id:"birthday",name:"birthday",type:"date",...i.getFieldProps("birthday"),className:i.touched.birthday?i.errors.birthday?"invalid-input":"valid-input":""}),i.touched.birthday?i.errors.birthday?e.jsx(s,{children:e.jsx(o,{className:"invalid",children:i.errors.birthday})}):e.jsx(s,{children:e.jsx(o,{className:"valid",children:"This is CORRECT date"})}):null]}),e.jsxs(p,{children:[e.jsx(h,{htmlFor:"email",children:"Email"}),e.jsx(m,{id:"email",name:"email",type:"text",placeholder:"Enter your email",...i.getFieldProps("email"),className:i.touched.email?i.errors.email?"invalid-input":"valid-input":""}),i.touched.email?i.errors.email?e.jsxs(s,{children:[e.jsx(o,{className:"invalid",children:i.errors.email}),e.jsx(u,{})]}):e.jsxs(s,{children:[e.jsx(o,{className:"valid",children:"This is CORRECT email"}),e.jsx(g,{})]}):null]})]}),e.jsxs(N,{children:[e.jsxs(p,{children:[e.jsx(h,{htmlFor:"phone",children:"Phone"}),e.jsx(m,{id:"phone",name:"phone",type:"text",placeholder:"+380670000000",...i.getFieldProps("phone"),className:i.touched.phone?i.errors.phone?"invalid-input":"valid-input":""}),i.touched.phone?i.errors.phone?e.jsxs(s,{children:[e.jsx(o,{className:"invalid",children:i.errors.phone}),e.jsx(u,{})]}):e.jsxs(s,{children:[e.jsx(o,{className:"valid",style:{color:"#ffffff"},children:"OK"}),e.jsx(g,{})]}):null]}),e.jsxs(p,{children:[e.jsx(h,{htmlFor:"skype",children:"Skype"}),e.jsx(ie,{id:"skype",name:"skype",type:"text",placeholder:"Add a skype number",...i.getFieldProps("skype"),className:i.touched.skype?i.errors.skype?"invalid-input":"valid-input":""}),i.touched.skype?i.errors.skype?e.jsxs(s,{children:[e.jsx(o,{className:"invalid",children:i.errors.skype}),e.jsx(u,{})]}):e.jsxs(s,{children:[e.jsx(o,{className:"valid",style:{color:"#ffffff"},children:"OK"}),e.jsx(g,{})]}):null]})]})]}),e.jsx(ae,{type:"submit",ref:I,disabled:!(i.isValid&&i.dirty)||i.isSubmitting,children:"Save changes"})]})})},me=()=>e.jsx(se,{});export{me as default};
