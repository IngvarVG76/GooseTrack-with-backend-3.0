import{s as n,L as v,a5 as y,e as k,f as p,r as c,b as z,a3 as I,u as C,w as E,a6 as F,d as S,j as e}from"./index-ba45f923.js";import{c as L,a as N,b as B}from"./index.esm-af1f3a0d.js";import{M as P}from"./index.esm-316ef8f2.js";const $=n.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
  min-width: 100%;
  background: #dcebf7;
`,R=n.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
`,q=n.h1`
  color: #3e85f3;
  text-shadow:
    0px 9.4px 57px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,O=n.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 32px;

  padding: 40px 24px;
  border-radius: 8px;
  background: var(--main-background-color);

  @media screen and (max-width: 375px) {
    max-width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 480px;
    padding: 40px;
  }
`,T=n.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  background: var(--main-background-color);
`,x=n.li`
  display: flex;
  flex-direction: column;

  Input::placeholder {
    color: #dce3e5;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
  }
  @media (min-width: 768px) {
    font-size: 16px;
  }
`,W=n.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  position: relative;
  Input::placeholder {
    color: #dce3e5;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
  }
`,G=n.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding-top: 14px;
  padding-bottom: 14px;
  gap: 10px;

  border-radius: 16px;
  background: #3e85f3;
  border: none;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 375px) {
    width: 287px;
    padding: 14px 103px;
  }

  @media screen and (min-width: 768px) {
    width: 400px;
    padding: 16px 152px;
  }
`,Y=n.span`
  white-space: nowrap;
  color: #fff;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.29;
  letter-spacing: -0.28px;
`,M=n(L)`
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  color: #fff;
`,_=n.button`
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--title-text-main-color);
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`,A=n.button`
  color: #3e85f3;
  background-color: transparent;
  border: transparent;
  text-shadow:
    0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-size: 18px;
  font-weight: 600;
  line-height: 133.333%;
  text-decoration-line: underline;
  margin: 18px auto 0;
  display: block;

  @media screen and (min-width: 768px) {
    margin: 24px auto 0;
  }
`,h=n.label`
  margin-bottom: 8px;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  color: #111;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
  &.valid-input {
    color: #3cbc81;
  }

  &.invalid-input {
    color: #ff0000;
  }
`,m=n.input`
  display: block;
  width: 100%;
  height: 46px;
  padding: 14px;

  color: #111;
  border-radius: 8px;
  padding: 14px;
  border: 1px solid rgba(220, 227, 229, 0.6);
  outline: none;

  &.valid-input {
    border: 1px solid #3cbc81;
  }

  &.invalid-input {
    border: 1px solid #ff0000;
  }

  &:hover,
  &:focus,
  &:active {
    border: 1px solid #111;
  }

  @media screen and (min-width: 375px) {
    width: 287px;
  }

  @media screen and (min-width: 768px) {
    width: 400px;
    height: 54px;
    padding: 18px;
  }
`,t=n.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  margin-top: 8px;
  margin-left: 18px;

  &.valid {
    color: #3cbc81;
  }

  &.invalid {
    color: #ff0000;
  }
`;n(v)`
  color: var(--accent-color);
  font-size: 16px;
  line-height: 14px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;const u=n(y)`
  position: absolute;
  right: 12px;
  bottom: 22px;
  width: 18px;
  height: 18px;
  color: #3cbc81;

  @media screen and (min-width: 768px) {
    bottom: 27px;
  }
`,g=n(P)`
  position: absolute;
  right: 12px;
  bottom: 37px;
  width: 18px;
  height: 18px;
  color: #ff0000;

  @media screen and (min-width: 768px) {
    bottom: 41px;
  }
`,o=n.div`
  position: relative;
`,D=n.div`
  display: none;
  position: absolute;
  bottom: 19px;
  right: 60px;

  width: 368px;

  @media screen and (min-width: 1440px) {
    display: block;
  }
`,H="/GooseTrack-with-backend-3.0/assets/login-elements-f1320a72.png",U=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,V=k({email:p().matches(U,"This is an ERROR email").required("Email required"),password:p().min(6,"Password must contain at least 6 characters").required("Password required")}),J=()=>{const[s,f]=c.useState(!1),d=z(I),l=C(),a=E(),w=c.useCallback(async({email:r,password:b})=>{try{l(F({email:r,password:b})),d&&a("/calendar")}catch(j){console.log(j.message)}},[l,a,d]),i=S({initialValues:{email:"",password:""},validationSchema:V,onSubmit:w});return e.jsx(e.Fragment,{children:e.jsxs($,{children:[e.jsxs("div",{children:[e.jsx(R,{onSubmit:i.handleSubmit,children:e.jsxs(O,{children:[e.jsx(q,{children:"Log In"}),e.jsxs(T,{children:[e.jsxs(x,{$isemail:"email",children:[e.jsx(h,{htmlFor:"email",className:i.touched.email?i.errors.email?"invalid-input":"valid-input":"",children:"Email"}),e.jsx(m,{type:"email",id:"email",name:"email",autoComplete:"true",value:i.values.email,placeholder:"Your email",onChange:i.handleChange,onBlur:i.handleBlur,className:i.touched.email?i.errors.email?"invalid-input":"valid-input":""}),i.touched.email?i.errors.email?e.jsxs(o,{children:[e.jsx(t,{className:"invalid",children:i.errors.email}),e.jsx(g,{})]}):e.jsxs(o,{children:[e.jsx(t,{className:"valid",children:i.errors.email}),e.jsx(u,{})]}):null]}),e.jsxs(x,{$ispassword:"password",children:[e.jsx(h,{htmlFor:"password",className:i.touched.password?i.errors.password?"invalid-input":"valid-input":"",children:"Password"}),e.jsxs(W,{children:[e.jsx(m,{type:s?"text":"password",id:"password",name:"password",autoComplete:"current-password",placeholder:"Your password",value:i.values.password,onChange:i.handleChange,onBlur:i.handleBlur,className:i.touched.password?i.errors.password?"invalid-input":"valid-input":""}),e.jsx(_,{type:"button",onClick:()=>f(r=>!r),children:s?e.jsx(N,{}):e.jsx(B,{})})]}),i.touched.password?i.errors.password?e.jsxs(o,{children:[e.jsx(t,{className:"invalid",children:i.errors.password}),e.jsx(g,{})]}):e.jsxs(o,{children:[e.jsx(t,{className:"valid",children:i.errors.password}),e.jsx(u,{})]}):null]})]}),e.jsxs(G,{type:"submit",children:[e.jsx(Y,{children:"Log in"}),e.jsx(M,{})]})]})}),e.jsx(A,{type:"button",onClick:()=>a("/register"),children:"Sing Up"})]}),e.jsx(D,{children:e.jsx("picture",{children:e.jsx("img",{loading:"lazy",src:H,alt:"Goose login",width:368})})})]})})},Z=()=>e.jsx(e.Fragment,{children:e.jsx(J,{})});export{Z as default};
