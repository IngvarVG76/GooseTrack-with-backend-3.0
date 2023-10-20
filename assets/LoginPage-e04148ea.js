import{s as o,L as y,r as l,c as k,d as z,u as I,a as C,j as e,l as E}from"./index-a362ad41.js";import{F,c as S,a as c,u as L,b as N,d as B}from"./index.esm-1f5e5245.js";import{I as P,M as $}from"./index.esm-d2539d07.js";const R=o.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
  min-width: 100%;
  background: #dcebf7;
`,q=o.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
`,O=o.h1`
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
`,T=o.div`
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
`,W=o.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  background: var(--main-background-color);
`,p=o.li`
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
`,G=o.div`
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
`,Y=o.button`
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
`,D=o.span`
  white-space: nowrap;
  color: #fff;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.29;
  letter-spacing: -0.28px;
`,M=o(F)`
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  color: #fff;
`,_=o.button`
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
`,H=o.button`
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
`,x=o.label`
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
`,h=o.input`
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
`;o(y)`
  color: var(--accent-color);
  font-size: 16px;
  line-height: 14px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;const m=o(P)`
  position: absolute;
  right: 12px;
  bottom: 22px;
  width: 18px;
  height: 18px;
  color: #3cbc81;

  @media screen and (min-width: 768px) {
    bottom: 27px;
  }
`,u=o($)`
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
`,U=o.div`
  display: none;
  position: absolute;
  bottom: 19px;
  right: 60px;

  width: 368px;

  @media screen and (min-width: 1440px) {
    display: block;
  }
`,V="/GooseTrack-with-backend-3.0/assets/login-elements-f1320a72.png",A=()=>{const[s,g]=l.useState(!1),d=k(z),f=I(),r=C(),w=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,b=S({email:c().matches(w,"This is an ERROR email").required("Email required"),password:c().min(6,"Password must contain at least 6 characters").required("Password required")}),i=L({initialValues:{email:"",password:""},validationSchema:b,onSubmit:async({email:a,password:v})=>{try{f(E({email:a,password:v}))}catch(j){console.log(j.message)}}});return l.useEffect(()=>{d&&r("/calendar")},[d,r]),e.jsx(e.Fragment,{children:e.jsxs(R,{children:[e.jsxs("div",{children:[e.jsx(q,{onSubmit:i.handleSubmit,children:e.jsxs(T,{children:[e.jsx(O,{children:"Log In"}),e.jsxs(W,{children:[e.jsxs(p,{$isemail:"email",children:[e.jsx(x,{htmlFor:"email",className:i.touched.email?i.errors.email?"invalid-input":"valid-input":"",children:"Email"}),e.jsx(h,{type:"email",id:"email",name:"email",autoComplete:"true",value:i.values.email,placeholder:"Your email",onChange:i.handleChange,onBlur:i.handleBlur,className:i.touched.email?i.errors.email?"invalid-input":"valid-input":""}),i.touched.email?i.errors.email?e.jsxs(t,{children:[e.jsx(n,{className:"invalid",children:i.errors.email}),e.jsx(u,{})]}):e.jsxs(t,{children:[e.jsx(n,{className:"valid",children:i.errors.email}),e.jsx(m,{})]}):null]}),e.jsxs(p,{$ispassword:"password",children:[e.jsx(x,{htmlFor:"password",className:i.touched.password?i.errors.password?"invalid-input":"valid-input":"",children:"Password"}),e.jsxs(G,{children:[e.jsx(h,{type:s?"text":"password",id:"password",name:"password",autoComplete:"current-password",placeholder:"Your password",value:i.values.password,onChange:i.handleChange,onBlur:i.handleBlur,className:i.touched.password?i.errors.password?"invalid-input":"valid-input":""}),!i.errors.password&&e.jsx(_,{type:"button",onClick:()=>g(a=>!a),children:s?e.jsx(N,{}):e.jsx(B,{})})]}),i.touched.password?i.errors.password?e.jsxs(t,{children:[e.jsx(n,{className:"invalid",children:i.errors.password}),e.jsx(u,{})]}):e.jsxs(t,{children:[e.jsx(n,{className:"valid",children:i.errors.password}),e.jsx(m,{})]}):null]})]}),e.jsxs(Y,{type:"submit",children:[e.jsx(D,{children:"Log in"}),e.jsx(M,{})]})]})}),e.jsx(H,{type:"button",onClick:()=>r("/register"),children:"Sing Up"})]}),e.jsx(U,{children:e.jsx("picture",{children:e.jsx("img",{loading:"lazy",src:V,alt:"Goose login",width:368})})})]})})},X=()=>e.jsx(e.Fragment,{children:e.jsx(A,{})});export{X as default};
