import{r as x,b as E,a2 as f,u as I,w as S,e as b,f as l,a3 as F,d as k,j as e}from"./index-b6d546e0.js";import{C as B,S as z,I as P,F as $,a as R,b as t,L as o,c as d,d as a,e as r,E as c,f as u,g as q,h as L,B as T,i as W,j as G,k as O,P as U}from"./RegisterForm.styled-6dea09e6.js";import{a as _,b as D}from"./index.esm-431715db.js";import"./index.esm-d3540705.js";const H="/GooseTrack-with-backend-3.0/assets/signup-elements-4feefdc5.png",V=()=>{const[m,j]=x.useState(!1),h=E(f),p=I(),i=S(),N=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,w=b({userName:l().min(3,"Name must contain at least 3 characters").required("Name required"),email:l().matches(N,"This is an ERROR email").required("Email required"),password:l().min(6,"Password must contain at least 6 characters").required("Password required")}),g=x.useCallback(async({userName:n,email:v,password:C})=>{try{p(F({userName:n,email:v,password:C})),h&&i("/calendar")}catch(y){console.log(y.message)}},[p,i,h]),s=k({initialValues:{userName:"",email:"",password:""},validationSchema:w,onSubmit:g});return e.jsx(e.Fragment,{children:e.jsxs(B,{children:[e.jsxs("div",{children:[e.jsx(z,{onSubmit:s.handleSubmit,children:e.jsxs(P,{children:[e.jsx($,{children:"Sign Up"}),e.jsxs(R,{children:[e.jsxs(t,{$isusername:"userName",children:[e.jsx(o,{htmlFor:"userName",className:s.touched.userName?s.errors.userName?"invalid-input":"valid-input":"",children:"Name"}),e.jsx(d,{type:"text",id:"userName",name:"userName",autoComplete:"true",value:s.values.userName,placeholder:"Enter your name",onChange:s.handleChange,onBlur:s.handleBlur,className:s.touched.userName?s.errors.userName?"invalid-input":"valid-input":""}),s.touched.userName?s.errors.userName?e.jsxs(a,{children:[e.jsx(r,{className:"invalid",children:s.errors.userName}),e.jsx(c,{})]}):e.jsxs(a,{children:[e.jsx(r,{className:"valid",children:s.errors.userName}),e.jsx(u,{})]}):null]}),e.jsxs(t,{$isemail:"email",children:[e.jsx(o,{htmlFor:"email",className:s.touched.email?s.errors.email?"invalid-input":"valid-input":"",children:"Email"}),e.jsx(d,{type:"email",id:"email",name:"email",autoComplete:"true",value:s.values.email,placeholder:"Enter your email",onChange:s.handleChange,onBlur:s.handleBlur,className:s.touched.email?s.errors.email?"invalid-input":"valid-input":""}),s.touched.email?s.errors.email?e.jsxs(a,{children:[e.jsx(r,{className:"invalid",children:s.errors.email}),e.jsx(c,{})]}):e.jsxs(a,{children:[e.jsx(r,{className:"valid",children:s.errors.email}),e.jsx(u,{})]}):null]}),e.jsxs(t,{$ispassword:"password",children:[e.jsx(o,{htmlFor:"password",className:s.touched.password?s.errors.password?"invalid-input":"valid-input":"",children:"Password"}),e.jsxs(q,{children:[e.jsx(d,{type:m?"text":"password",id:"password",name:"password",autoComplete:"current-password",placeholder:"Enter your password",value:s.values.password,onChange:s.handleChange,onBlur:s.handleBlur,className:s.touched.password?s.errors.password?"invalid-input":"valid-input":""}),e.jsx(L,{type:"button",onClick:()=>j(n=>!n),children:m?e.jsx(_,{}):e.jsx(D,{})})]}),s.touched.password?s.errors.password?e.jsxs(a,{children:[e.jsx(r,{className:"invalid",children:s.errors.password}),e.jsx(c,{})]}):e.jsxs(a,{children:[e.jsx(r,{className:"valid",children:s.errors.password}),e.jsx(u,{})]}):null]})]}),e.jsxs(T,{type:"submit",children:[e.jsx(W,{children:"Sign Up"}),e.jsx(G,{})]})]})}),e.jsx(O,{type:"button",onClick:()=>i("/login"),children:"Log In"})]}),e.jsx(U,{children:e.jsx("picture",{children:e.jsx("img",{loading:"lazy",src:H,alt:"Goose register",width:400})})})]})})},Q=()=>e.jsx(e.Fragment,{children:e.jsx(V,{})});export{Q as default};
