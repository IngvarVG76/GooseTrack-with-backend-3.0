import{s as o,L as j,r as c,u as y,a as k,b as z,c as I,l as C,j as e}from"./index-bacafb67.js";import{F,c as E,a as p,u as S,b as L,d as N}from"./index.esm-e0364986.js";import{I as B,M as P}from"./index.esm-80a45ce1.js";import"./iconBase-6eeed84d.js";const $=o.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
  min-width: 100%;
  background: #dcebf7;
`,R=o.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
`,q=o.h1`
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
`,O=o.div`
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
`,T=o.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  background: var(--main-background-color);
`,x=o.li`
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
`,W=o.div`
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
`,G=o.button`
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
`,Y=o.span`
  white-space: nowrap;
  color: #fff;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.29;
  letter-spacing: -0.28px;
`,D=o(F)`
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  color: #fff;
`,M=o.button`
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
`,_=o.button`
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
`,h=o.label`
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
`,m=o.input`
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
`,n=o.div`
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
`;o(j)`
  color: var(--accent-color);
  font-size: 16px;
  line-height: 14px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;const u=o(B)`
  position: absolute;
  right: 12px;
  bottom: 22px;
  width: 18px;
  height: 18px;
  color: #3cbc81;

  @media screen and (min-width: 768px) {
    bottom: 27px;
  }
`,g=o(P)`
  position: absolute;
  right: 12px;
  bottom: 37px;
  width: 18px;
  height: 18px;
  color: #ff0000;

  @media screen and (min-width: 768px) {
    bottom: 41px;
  }
`,t=o.div`
  position: relative;
`,H=o.div`
  display: none;
  position: absolute;
  bottom: 19px;
  right: 60px;

  width: 368px;

  @media screen and (min-width: 1440px) {
    display: block;
  }
`,U="/GooseTrack-with-backend-3.0/assets/login-elements-f1320a72.png",V=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,A=E({email:p().matches(V,"This is an ERROR email").required("Email required"),password:p().min(6,"Password must contain at least 6 characters").required("Password required")}),J=()=>{const[s,f]=c.useState(!1),l=y(k),d=z(),r=I(),b=c.useCallback(async({email:a,password:w})=>{try{d(C({email:a,password:w})),l&&r("/calendar")}catch(v){console.log(v.message)}},[d,r,l]),i=S({initialValues:{email:"",password:""},validationSchema:A,onSubmit:b});return e.jsx(e.Fragment,{children:e.jsxs($,{children:[e.jsxs("div",{children:[e.jsx(R,{onSubmit:i.handleSubmit,children:e.jsxs(O,{children:[e.jsx(q,{children:"Log In"}),e.jsxs(T,{children:[e.jsxs(x,{$isemail:"email",children:[e.jsx(h,{htmlFor:"email",className:i.touched.email?i.errors.email?"invalid-input":"valid-input":"",children:"Email"}),e.jsx(m,{type:"email",id:"email",name:"email",autoComplete:"true",value:i.values.email,placeholder:"Your email",onChange:i.handleChange,onBlur:i.handleBlur,className:i.touched.email?i.errors.email?"invalid-input":"valid-input":""}),i.touched.email?i.errors.email?e.jsxs(t,{children:[e.jsx(n,{className:"invalid",children:i.errors.email}),e.jsx(g,{})]}):e.jsxs(t,{children:[e.jsx(n,{className:"valid",children:i.errors.email}),e.jsx(u,{})]}):null]}),e.jsxs(x,{$ispassword:"password",children:[e.jsx(h,{htmlFor:"password",className:i.touched.password?i.errors.password?"invalid-input":"valid-input":"",children:"Password"}),e.jsxs(W,{children:[e.jsx(m,{type:s?"text":"password",id:"password",name:"password",autoComplete:"current-password",placeholder:"Your password",value:i.values.password,onChange:i.handleChange,onBlur:i.handleBlur,className:i.touched.password?i.errors.password?"invalid-input":"valid-input":""}),!i.errors.password&&e.jsx(M,{type:"button",onClick:()=>f(a=>!a),children:s?e.jsx(L,{}):e.jsx(N,{})})]}),i.touched.password?i.errors.password?e.jsxs(t,{children:[e.jsx(n,{className:"invalid",children:i.errors.password}),e.jsx(g,{})]}):e.jsxs(t,{children:[e.jsx(n,{className:"valid",children:i.errors.password}),e.jsx(u,{})]}):null]})]}),e.jsxs(G,{type:"submit",children:[e.jsx(Y,{children:"Log in"}),e.jsx(D,{})]})]})}),e.jsx(_,{type:"button",onClick:()=>r("/register"),children:"Sing Up"})]}),e.jsx(H,{children:e.jsx("picture",{children:e.jsx("img",{loading:"lazy",src:U,alt:"Goose login",width:368})})})]})})},ee=()=>e.jsx(e.Fragment,{children:e.jsx(J,{})});export{ee as default};
