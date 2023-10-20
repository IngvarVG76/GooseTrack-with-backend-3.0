import{G as k,s as t,r as y,j as e}from"./index-d2031c57.js";import{u as C,c as $,a as c,e as R}from"./index.esm-2ce1095c.js";import{B as z}from"./index.esm-6b16c0a4.js";import{a as F}from"./index.esm-443d7976.js";import{e as x}from"./RegisterForm.styled-871289c4.js";import{p as I}from"./index-f1b16607.js";function E(a){return k({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M229.19,213c-15.81-27.32-40.63-46.49-69.47-54.62a70,70,0,1,0-63.44,0C67.44,166.5,42.62,185.67,26.81,213a6,6,0,1,0,10.38,6C56.4,185.81,90.34,166,128,166s71.6,19.81,90.81,53a6,6,0,1,0,10.38-6ZM70,96a58,58,0,1,1,58,58A58.07,58.07,0,0,1,70,96Z"}}]})(a)}const S=t.div`
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
`,A=t.div`
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
`,T=t.div`
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
`,P=t.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`,U=t(z)`
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
`,B=t.input`
  display: none;
`,O=t(E)`
  width: 48px;
  height: 48px;
  color: ${({theme:a})=>a.colors.avatarPlaceholder};

  @media screen and (max-width: 767px) {
    width: 32px;
    height: 32px;
  }
`,D=t.h2`
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
`,M=t.p`
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
`,q=t.form`
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
`,L=t(m)`
  margin-bottom: 0;
`,W=t.button`
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  padding: 14px 20px;

  background-color: #3e85f3;
  color: #ffffff;
  border: none;
  border-radius: 16px;
  cursor: pointer;

  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14);

  &:hover {
    background-color: #2b78ef;
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

  @media screen and (min-width: 768px) {
    margin-top: 88px;
  }
`,G=t.div`
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
`,j=t.div`
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
`,u=t(F)`
  position: absolute;
  right: 12px;
  bottom: 37px;
  width: 18px;
  height: 18px;
  color: #3cbc81;

  @media screen and (min-width: 768px) {
    bottom: 27px;
  }
`,Z=/\+380\d{3}\d{2}\d{2}\d{2}$/,_=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,H=["image/jpeg","image/png"],J=()=>{const[a,b]=y.useState(null),l={userName:"Nadiia Doe",birthday:"",email:"nadiia@gmail.com",phone:"",skype:""};function w(r){const o=String(r.getDate()).padStart(2,"0"),d=String(r.getMonth()+1).padStart(2,"0");return`${String(r.getFullYear())}-${d}-${o}`}const f=y.useRef(),g=()=>{f.current.click()},N=r=>{const o=r.target.files[0];if(o){const d=new FileReader;d.onload=v=>{b(v.target.result)},d.readAsDataURL(o)}},i=C({initialValues:{avatar:"",userName:`${l.userName}`,birthday:`${w(new Date)}`,email:`${l.email}`,phone:`${l.phone}`,skype:`${l.skype}`},validationSchema:$({avatar:c().oneOf(H,"Invalid file type"),userName:c().min(3,"Username must contain at least 3 characters").max(16,"Username must contain not more than 16 characters").required("Username Name is required field"),birthday:R().transform(function(r,o){return this.isType(r)?r:I(o,"dd.MM.yyyy",new Date)}).typeError("Please enter a valid date").min("1969-11-13","Date is too early").max("2024-01-01","Date is not valid").required(),email:c().email("This is an ERROR email").matches(_,"This is an ERROR email").required("Email is required field"),phone:c().matches(Z,"Phone number is not valid"),skype:c().min(3,"Skype must contain at least 3 characters").max(16,"Skype must not have more than 16 characters")}),onSubmit:r=>{alert(JSON.stringify(r,null,2))}});return e.jsx(S,{children:e.jsxs(q,{onSubmit:i.handleSubmit,children:[e.jsxs(A,{children:[e.jsx(T,{onClick:g,children:a?e.jsx(P,{src:a,alt:"Avatar"}):e.jsx(O,{})}),e.jsx(U,{onClick:g}),e.jsx(B,{name:"avatar",type:"file",ref:f,accept:"image/*",onChange:N})]}),e.jsx(D,{children:l.userName}),e.jsx(M,{children:"User"}),e.jsxs(G,{children:[e.jsxs(j,{children:[e.jsxs(p,{children:[e.jsx(h,{htmlFor:"userName",className:i.touched.userName?i.errors.userName?"invalid-input":"valid-input":"",children:"User Name"}),e.jsx(m,{id:"userName",name:"userName",type:"text",placeholder:"Enter your name",...i.getFieldProps("userName"),className:i.touched.userName?i.errors.userName?"invalid-input":"valid-input":""}),i.touched.userName?i.errors.userName?e.jsxs(n,{children:[e.jsx(s,{className:"invalid",children:i.errors.userName}),e.jsx(x,{})]}):e.jsxs(n,{children:[e.jsx(s,{className:"valid",children:"This is CORRECT username"}),e.jsx(u,{})]}):null]}),e.jsxs(p,{children:[e.jsx(h,{htmlFor:"birthday",children:"Birthday"}),e.jsx(m,{id:"birthday",name:"birthday",type:"date",...i.getFieldProps("birthday"),className:i.touched.birthday?i.errors.birthday?"invalid-input":"valid-input":""}),i.touched.birthday?i.errors.birthday?e.jsx(n,{children:e.jsx(s,{className:"invalid",children:i.errors.birthday})}):e.jsx(n,{children:e.jsx(s,{className:"valid",children:"This is CORRECT date"})}):null]}),e.jsxs(p,{children:[e.jsx(h,{htmlFor:"email",children:"Email"}),e.jsx(m,{id:"email",name:"email",type:"text",placeholder:"Enter your email",...i.getFieldProps("email"),className:i.touched.email?i.errors.email?"invalid-input":"valid-input":""}),i.touched.email?i.errors.email?e.jsxs(n,{children:[e.jsx(s,{className:"invalid",children:i.errors.email}),e.jsx(x,{})]}):e.jsxs(n,{children:[e.jsx(s,{className:"valid",children:"This is CORRECT email"}),e.jsx(u,{})]}):null]})]}),e.jsxs(j,{children:[e.jsxs(p,{children:[e.jsx(h,{htmlFor:"phone",children:"Phone"}),e.jsx(m,{id:"phone",name:"phone",type:"text",placeholder:"+380670000000",...i.getFieldProps("phone"),className:i.touched.phone?i.errors.phone?"invalid-input":"valid-input":""}),i.touched.phone?i.errors.phone?e.jsxs(n,{children:[e.jsx(s,{className:"invalid",children:i.errors.phone}),e.jsx(x,{})]}):e.jsxs(n,{children:[e.jsx(s,{className:"valid",children:"This is CORRECT phone"}),e.jsx(u,{})]}):null]}),e.jsxs(p,{children:[e.jsx(h,{htmlFor:"skype",children:"Skype"}),e.jsx(L,{id:"skype",name:"skype",type:"text",placeholder:"Add a skype number",...i.getFieldProps("skype"),className:i.touched.skype?i.errors.skype?"invalid-input":"valid-input":""}),i.touched.skype?i.errors.skype?e.jsxs(n,{children:[e.jsx(s,{className:"invalid",children:i.errors.skype}),e.jsx(x,{})]}):e.jsxs(n,{children:[e.jsx(s,{className:"valid",children:"This is CORRECT skype"}),e.jsx(u,{})]}):null]})]})]}),e.jsx(W,{type:"submit",children:"Save changes"})]})})},ie=()=>e.jsx(J,{});export{ie as default};
