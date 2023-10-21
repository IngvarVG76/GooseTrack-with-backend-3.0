import{s as t,L as i}from"./index-69b83466.js";import{f as o}from"./index.esm-4e0c65ff.js";import{M as n}from"./index.esm-9da440ef.js";import{c as e}from"./index.esm-bccab6e9.js";const s=t.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
  min-width: 100%;
  background: #dcebf7;
`,c=t.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
`,x=t.h1`
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
`,l=t.div`
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
`,h=t.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  background: var(--main-background-color);
`,f=t.li`
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
`,m=t.div`
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
`,g=t.button`
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
`,u=t.span`
  white-space: nowrap;
  color: #fff;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.29;
  letter-spacing: -0.28px;
`,b=t(o)`
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  color: #fff;
`,w=t.button`
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
`,v=t.button`
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
`,y=t.label`
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
`,k=t.input`
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
`,I=t.div`
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
`;t(i)`
  color: var(--accent-color);
  font-size: 16px;
  line-height: 14px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;const z=t(e)`
  position: absolute;
  right: 12px;
  bottom: 22px;
  width: 18px;
  height: 18px;
  color: #3cbc81;

  @media screen and (min-width: 768px) {
    bottom: 27px;
  }
`,L=t(n)`
  position: absolute;
  right: 12px;
  bottom: 37px;
  width: 18px;
  height: 18px;
  color: #ff0000;

  @media screen and (min-width: 768px) {
    bottom: 41px;
  }
`,C=t.div`
  position: relative;
`,j=t.div`
  display: none;
  position: absolute;
  bottom: 0;
  left: 49px;

  @media screen and (min-width: 1440px) {
    display: block;
  }
`;export{g as B,s as C,L as E,x as F,l as I,y as L,j as P,c as S,h as a,f as b,k as c,C as d,I as e,z as f,m as g,w as h,u as i,b as j,v as k};