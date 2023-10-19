import{G as b,s as i,r as f,j as e}from"./index-8fde7cad.js";import{u as v,c as j,a as d,b as k}from"./index.esm-2ad88820.js";import{B as $}from"./index.esm-52e904e0.js";import{p as F}from"./index-9ff8745b.js";function I(t){return b({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M229.19,213c-15.81-27.32-40.63-46.49-69.47-54.62a70,70,0,1,0-63.44,0C67.44,166.5,42.62,185.67,26.81,213a6,6,0,1,0,10.38,6C56.4,185.81,90.34,166,128,166s71.6,19.81,90.81,53a6,6,0,1,0,10.38-6ZM70,96a58,58,0,1,1,58,58A58.07,58.07,0,0,1,70,96Z"}}]})(t)}const A=i.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  background-color: ${({theme:t})=>t.colors.secondaryBackground};
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
`,N=i.div`
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
`,S=i.div`
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
  background-color: ${({theme:t})=>t.colors.avatarBgColor};

  @media screen and (min-width: 768px) {
    width: 124px;
    height: 124px;
  }
`,C=i.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`,z=i($)`
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
`,P=i.input`
  display: none;
`,U=i(I)`
  width: 48px;
  height: 48px;
  color: ${({theme:t})=>t.colors.avatarPlaceholder};

  @media screen and (max-width: 767px) {
    width: 32px;
    height: 32px;
  }
`,B=i.h2`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: calc(18 / 14);
  text-align: center;
  color: ${({theme:t})=>t.colors.titleAvatar};

  margin-bottom: 4px;
  margin-top: 0;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1;

    margin-bottom: 8px;
  }
`,D=i.p`
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  line-height: calc(14 / 12);
  color: ${({theme:t})=>t.colors.textAvatar};

  margin-bottom: 40px;
  margin-top: 0;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: calc(18 / 14);
  }
`,E=i.form`
  display: flex;
  flex-direction: column;

  /* gap: 18px; */
  width: 100%;
  margin: 0 auto;
`,l=i.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,c=i.label`
  width: 100%;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: calc(14 / 12);
  color: ${({theme:t})=>t.colors.labelUserFormTextColor};

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: calc(18 / 14);
  }
`,p=i.input`
  /* width: 100%; */
  margin-bottom: 18px;
  padding: 12px 14px;
  border: ${({theme:t})=>t.colors.borderUserForm};
  border-radius: 8px;

  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14);
  background-color: ${({theme:t})=>t.colors.secondaryBackground};
  color: ${({theme:t})=>t.colors.text};

  &::placeholder {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: calc(18 / 14);
    color: ${({theme:t})=>t.colors.activeArrowColor};

    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: calc(18 / 16);
    }
  }

  &:focus {
    outline: none;
    border: ${({theme:t})=>t.colors.borderInputHover};
  }

  &:hover {
    border: ${({theme:t})=>t.colors.borderInputHover};
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
    padding: 14px 18px;
    font-size: 16px;
    line-height: calc(18 / 16);
  }
`,M=i(p)`
  margin-bottom: 0;
`,R=i.button`
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
`,q=i.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 50px;
  }
`,u=i.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    width: 354px;
  }
`,L=/\+380\d{3}\d{2}\d{2}\d{2}$/,T=["image/jpeg","image/png"],W=()=>{const[t,g]=f.useState(null),o={userName:"Nadiia Doe",birthday:"",email:"nadiia@gmail.com",phone:"",skype:""};function y(n){const a=String(n.getDate()).padStart(2,"0"),s=String(n.getMonth()+1).padStart(2,"0");return`${String(n.getFullYear())}-${s}-${a}`}const h=f.useRef(),m=()=>{h.current.click()},w=n=>{const a=n.target.files[0];if(a){const s=new FileReader;s.onload=x=>{g(x.target.result)},s.readAsDataURL(a)}},r=v({initialValues:{avatar:"",userName:`${o.userName}`,birthday:`${y(new Date)}`,email:`${o.email}`,phone:`${o.phone}`,skype:`${o.skype}`},validationSchema:j({avatar:d().oneOf(T,"Invalid file type"),userName:d().max(16,"Username must not have more than 16 characters").required("Username is required field"),birthday:k().transform(function(n,a){return this.isType(n)?n:F(a,"dd.MM.yyyy",new Date)}).typeError("please enter a valid date").required().min("1969-11-13","Date is too early"),email:d().email("Invalid email address").required("Username is required field"),phone:d().matches(L,"Phone number is not valid"),skype:d().max(16,"Skype must not have more than 16 characters")}),onSubmit:n=>{alert(JSON.stringify(n,null,2))}});return e.jsx(A,{children:e.jsxs(E,{onSubmit:r.handleSubmit,children:[e.jsxs(N,{children:[e.jsx(S,{onClick:m,children:t?e.jsx(C,{src:t,alt:"Avatar"}):e.jsx(U,{})}),e.jsx(z,{onClick:m}),e.jsx(P,{name:"avatar",type:"file",ref:h,accept:"image/*",onChange:w})]}),e.jsx(B,{children:o.userName}),e.jsx(D,{children:"User"}),e.jsxs(q,{children:[e.jsxs(u,{children:[e.jsxs(l,{children:[e.jsx(c,{htmlFor:"userName",children:"User Name"}),e.jsx(p,{id:"userName",name:"userName",type:"text",placeholder:"Enter your name",...r.getFieldProps("userName")})]}),r.touched.userName&&r.errors.userName?e.jsx("div",{children:r.errors.userName}):null,e.jsxs(l,{children:[e.jsx(c,{htmlFor:"birthday",children:"Birthday"}),e.jsx(p,{id:"birthday",name:"birthday",type:"date",...r.getFieldProps("birthday")})]}),e.jsxs(l,{children:[e.jsx(c,{htmlFor:"email",children:"Email"}),e.jsx(p,{id:"email",name:"email",type:"text",placeholder:"Enter your email",...r.getFieldProps("email")}),r.touched.email&&r.errors.email?e.jsx("div",{children:r.errors.email}):null]})]}),e.jsxs(u,{children:[e.jsxs(l,{children:[e.jsx(c,{htmlFor:"phone",children:"Phone"}),e.jsx(p,{id:"phone",name:"phone",type:"text",placeholder:"+380670000000",...r.getFieldProps("phone")}),r.touched.phone&&r.errors.phone?e.jsx("div",{children:r.errors.phone}):null]}),e.jsxs(l,{children:[e.jsx(c,{htmlFor:"skype",children:"Skype"}),e.jsx(M,{id:"skype",name:"skype",type:"text",placeholder:"Add a skype number",...r.getFieldProps("skype")}),r.touched.skype&&r.errors.skype?e.jsx("div",{children:r.errors.skype}):null]})]})]}),e.jsx(R,{type:"submit",children:"Save changes"})]})})},J=()=>e.jsx(W,{});export{J as default};
