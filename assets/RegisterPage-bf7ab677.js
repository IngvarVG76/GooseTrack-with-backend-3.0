import{s as r,L as j,r as y,u as N,a as k,j as e,b as z}from"./index-8fde7cad.js";import{c as I,a as s,u as C}from"./index.esm-2ad88820.js";import{F as E,a as F,b as S}from"./index.esm-28f63278.js";import{I as B,M as $}from"./index.esm-70ecb190.js";const L=r.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
  min-width: 100%;
  background: #dcebf7;
`,P=r.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
`,R=r.h1`
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
`,q=r.div`
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
`,O=r.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  background: var(--main-background-color);
`,t=r.li`
  display: flex;
  flex-direction: column;

  Input::placeholder {
    color: var(--secondary-text-color);
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    background-color: var(--main-background-color);
  }
  @media (min-width: 768px) {
    font-size: 16px;
  }
`,W=r.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  position: relative;
  Input::placeholder {
    color: var(--secondary-text-color);
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    background-color: var(--main-background-color);
  }
`,G=r.button`
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

  :hover {
    color: var(--active-btn-color);
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  }

  @media screen and (min-width: 375px) {
    width: 287px;
    padding: 14px 103px;
  }

  @media screen and (min-width: 768px) {
    width: 400px;
    padding: 16px 152px;
  }
`,T=r.span`
  white-space: nowrap;
  color: #fff;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.29;
  letter-spacing: -0.28px;
`,D=r(E)`
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  color: #fff;
`,M=r.button`
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
`,U=r.button`
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
`,l=r.label`
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
`,d=r.input`
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
`,a=r.div`
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
`;r(j)`
  color: var(--accent-color);
  font-size: 16px;
  line-height: 14px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;const c=r(B)`
  position: absolute;
  right: 12px;
  bottom: 22px;
  width: 18px;
  height: 18px;
  color: #3cbc81;

  @media screen and (min-width: 768px) {
    bottom: 27px;
  }
`,p=r($)`
  position: absolute;
  right: 12px;
  bottom: 37px;
  width: 18px;
  height: 18px;
  color: #ff0000;

  @media screen and (min-width: 768px) {
    bottom: 41px;
  }
`,n=r.div`
  position: relative;
`,_=r.div`
  display: none;
  position: absolute;
  bottom: 0;
  left: 49px;

  @media screen and (min-width: 1440px) {
    display: block;
  }
`,H="/GooseTrack-with-backend-3.0/assets/signup-elements-4feefdc5.png",V=()=>{const[x,m]=y.useState(!1),u=N(),h=k(),g=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,f=I({userName:s().min(3,"Name must contain at least 3 characters").required("Name required"),email:s().matches(g,"This is an ERROR email").required("Email required"),password:s().min(6,"Password must contain at least 6 characters").required("Password required")}),i=C({initialValues:{userName:"",email:"",password:""},validationSchema:f,onSubmit:async({userName:o,email:b,password:w})=>{try{u(z({userName:o,email:b,password:w}))}catch(v){console.log(v.message)}}});return e.jsx(e.Fragment,{children:e.jsxs(L,{children:[e.jsxs("div",{children:[e.jsx(P,{onSubmit:i.handleSubmit,children:e.jsxs(q,{children:[e.jsx(R,{children:"Sign Up"}),e.jsxs(O,{children:[e.jsxs(t,{$isusername:"userName",children:[e.jsx(l,{htmlFor:"userName",className:i.touched.userName?i.errors.userName?"invalid-input":"valid-input":"",children:"Name"}),e.jsx(d,{type:"text",id:"userName",name:"userName",autoComplete:"true",value:i.values.userName,placeholder:"Enter your name",onChange:i.handleChange,onBlur:i.handleBlur,className:i.touched.userName?i.errors.userName?"invalid-input":"valid-input":""}),i.touched.userName?i.errors.userName?e.jsxs(n,{children:[e.jsx(a,{className:"invalid",children:i.errors.userName}),e.jsx(p,{})]}):e.jsxs(n,{children:[e.jsx(a,{className:"valid",children:i.errors.userName}),e.jsx(c,{})]}):null]}),e.jsxs(t,{$isemail:"email",children:[e.jsx(l,{htmlFor:"email",className:i.touched.email?i.errors.email?"invalid-input":"valid-input":"",children:"Email"}),e.jsx(d,{type:"email",id:"email",name:"email",autoComplete:"true",value:i.values.email,placeholder:"Enter your email",onChange:i.handleChange,onBlur:i.handleBlur,className:i.touched.email?i.errors.email?"invalid-input":"valid-input":""}),i.touched.email?i.errors.email?e.jsxs(n,{children:[e.jsx(a,{className:"invalid",children:i.errors.email}),e.jsx(p,{})]}):e.jsxs(n,{children:[e.jsx(a,{className:"valid",children:i.errors.email}),e.jsx(c,{})]}):null]}),e.jsxs(t,{$ispassword:"password",children:[e.jsx(l,{htmlFor:"password",className:i.touched.password?i.errors.password?"invalid-input":"valid-input":"",children:"Password"}),e.jsxs(W,{children:[e.jsx(d,{type:x?"text":"password",id:"password",name:"password",autoComplete:"current-password",placeholder:"Enter your password",value:i.values.password,onChange:i.handleChange,onBlur:i.handleBlur,className:i.touched.password?i.errors.password?"invalid-input":"valid-input":""}),!i.errors.password&&e.jsx(M,{type:"button",onClick:()=>m(o=>!o),children:x?e.jsx(F,{}):e.jsx(S,{})})]}),i.touched.password?i.errors.password?e.jsxs(n,{children:[e.jsx(a,{className:"invalid",children:i.errors.password}),e.jsx(p,{})]}):e.jsxs(n,{children:[e.jsx(a,{className:"valid",children:i.errors.password}),e.jsx(c,{})]}):null]})]}),e.jsxs(G,{type:"submit",children:[e.jsx(T,{children:"Sign Up"}),e.jsx(D,{})]})]})}),e.jsx(U,{type:"button",onClick:()=>h("/login"),children:"Log In"})]}),e.jsx(_,{children:e.jsx("picture",{children:e.jsx("img",{loading:"lazy",src:H,alt:"Goose register",width:400})})})]})})},Q=()=>e.jsx(e.Fragment,{children:e.jsx(V,{})});export{Q as default};
