import{s as r,L as f,r as w,u as b,j as e}from"./index-f48cbe37.js";import{c as v,a as t,u as j}from"./index.esm-78c9fee1.js";import{F as y,a as N,b as k}from"./index.esm-2ab99551.js";import{I as z,M as I}from"./index.esm-112b77b1.js";const C=r.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
  min-width: 100%;
  background: #dcebf7;
`,E=r.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
`,F=r.h1`
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
`,S=r.div`
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
`,B=r.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  background: var(--main-background-color);
`,s=r.li`
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
`,$=r.div`
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
`,L=r.button`
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
`,P=r.span`
  white-space: nowrap;
  color: #fff;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.29;
  letter-spacing: -0.28px;
`,R=r(y)`
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  color: #fff;
`,q=r.button`
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
`,O=r.button`
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
`,n=r.div`
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
`;r(f)`
  color: var(--accent-color);
  font-size: 16px;
  line-height: 14px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;const c=r(z)`
  position: absolute;
  right: 12px;
  bottom: 22px;
  width: 18px;
  height: 18px;
  color: #3cbc81;

  @media screen and (min-width: 768px) {
    bottom: 27px;
  }
`,p=r(I)`
  position: absolute;
  right: 12px;
  bottom: 37px;
  width: 18px;
  height: 18px;
  color: #ff0000;

  @media screen and (min-width: 768px) {
    bottom: 41px;
  }
`,a=r.div`
  position: relative;
`,W=r.div`
  display: none;
  position: absolute;
  bottom: 0;
  left: 49px;

  @media screen and (min-width: 1440px) {
    display: block;
  }
`,G="/GooseTrack-with-backend-3.0/assets/signup-elements-4feefdc5.png",T=()=>{const[x,m]=w.useState(!1),u=b(),h=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,g=v({userName:t().min(3,"Name must contain at least 3 characters").required("Name required"),email:t().matches(h,"This is an ERROR email").required("Email required"),password:t().min(6,"Password must contain at least 6 characters").required("Password required")}),i=j({initialValues:{userName:"",email:"",password:""},validationSchema:g,onSubmit:o=>{console.log("values: ",o)}});return e.jsx(e.Fragment,{children:e.jsxs(C,{children:[e.jsxs("div",{children:[e.jsx(E,{onSubmit:i.handleSubmit,children:e.jsxs(S,{children:[e.jsx(F,{children:"Sign Up"}),e.jsxs(B,{children:[e.jsxs(s,{$isusername:"userName",children:[e.jsx(l,{htmlFor:"userName",className:i.touched.userName?i.errors.userName?"invalid-input":"valid-input":"",children:"Name"}),e.jsx(d,{type:"text",id:"userName",name:"userName",autoComplete:"true",value:i.values.userName,placeholder:"Enter your name",onChange:i.handleChange,onBlur:i.handleBlur,className:i.touched.userName?i.errors.userName?"invalid-input":"valid-input":""}),i.touched.userName?i.errors.userName?e.jsxs(a,{children:[e.jsx(n,{className:"invalid",children:i.errors.userName}),e.jsx(p,{})]}):e.jsxs(a,{children:[e.jsx(n,{className:"valid",children:i.errors.userName}),e.jsx(c,{})]}):null]}),e.jsxs(s,{$isemail:"email",children:[e.jsx(l,{htmlFor:"email",className:i.touched.email?i.errors.email?"invalid-input":"valid-input":"",children:"Email"}),e.jsx(d,{type:"email",id:"email",name:"email",autoComplete:"true",value:i.values.email,placeholder:"Enter your email",onChange:i.handleChange,onBlur:i.handleBlur,className:i.touched.email?i.errors.email?"invalid-input":"valid-input":""}),i.touched.email?i.errors.email?e.jsxs(a,{children:[e.jsx(n,{className:"invalid",children:i.errors.email}),e.jsx(p,{})]}):e.jsxs(a,{children:[e.jsx(n,{className:"valid",children:i.errors.email}),e.jsx(c,{})]}):null]}),e.jsxs(s,{$ispassword:"password",children:[e.jsx(l,{htmlFor:"password",className:i.touched.password?i.errors.password?"invalid-input":"valid-input":"",children:"Password"}),e.jsxs($,{children:[e.jsx(d,{type:x?"text":"password",id:"password",name:"password",autoComplete:"current-password",placeholder:"Enter your password",value:i.values.password,onChange:i.handleChange,onBlur:i.handleBlur,className:i.touched.password?i.errors.password?"invalid-input":"valid-input":""}),!i.errors.password&&e.jsx(q,{type:"button",onClick:()=>m(o=>!o),children:x?e.jsx(N,{}):e.jsx(k,{})})]}),i.touched.password?i.errors.password?e.jsxs(a,{children:[e.jsx(n,{className:"invalid",children:i.errors.password}),e.jsx(p,{})]}):e.jsxs(a,{children:[e.jsx(n,{className:"valid",children:i.errors.password}),e.jsx(c,{})]}):null]})]}),e.jsxs(L,{type:"submit",children:[e.jsx(P,{children:"Sign Up"}),e.jsx(R,{})]})]})}),e.jsx(O,{type:"button",onClick:()=>u("/login"),children:"Log In"})]}),e.jsx(W,{children:e.jsx("picture",{children:e.jsx("img",{loading:"lazy",src:G,alt:"Goose register",width:400})})})]})})},H=()=>e.jsx(e.Fragment,{children:e.jsx(T,{})});export{H as default};
