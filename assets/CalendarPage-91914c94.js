import{s,Z as y,L as v,$ as p,j as r,a0 as o,a1 as w,a2 as M,r as l,a3 as u,a4 as k,N as $,y as j,a5 as C,S as D}from"./index-2b77924f.js";import{t as S,a as A,s as L,b as B}from"./index-79c2553a.js";import{S as z,C as O}from"./StyledDayPicker-15ac4bc5.js";import"./index-7de9c40c.js";const R=s.div`
  background-color: ${({theme:e})=>e.colors.primaryBackground};
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 704px;
  }

  @media screen and (min-width: 1440px) {
    width: 1087px;
  }
`,E=s.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 32px;
  }
`,h=y`
  height: 34px;
  display: flex;
  width: 82px;
  align-items: center;
  justify-content: center;

  color: ${e=>e.theme.name==="dark-theme"&e.$primary?"#fff":"#3e85f3"};
  font-weight: 500;
  font-size: 14px;
  line-height: calc(18 / 14);
  border: none;
  background: ${({theme:e})=>e.colors.notActiveCalendarLinkColor};
  /* padding: 8px 16px 8px 16px; */
  cursor: pointer;
  border-radius: ${e=>e.$borderSide?"8px 0px 0px 8px":"0px 8px 8px 0px"};

  &:hover,
  :focus {
    color: ${e=>e.theme.name==="dark-theme"&e.$primary?"#111111":"#fff"};
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,f=s(v)`
  ${h}
  ${e=>{switch(e.$active){case"day":return y`
          background: ${t=>t.$primary&&t.theme.colors.activeCalendarLinkColor};
          border-left: ${t=>t.$primary&&"solid 1px #3e85f333;"};
          cursor: ${t=>t.$primary&&"default;"};
        `;case"month":return y`
          background: ${t=>t.$primary&&t.theme.colors.activeCalendarLinkColor};
          border-right: ${t=>t.$primary&&"solid 1px #3e85f333;"};
          cursor: ${t=>t.$primary&&"default;"};
        `;default:return y`
          ${h}
        `}}}
`,N=s.div`
  display: flex;
`,P=({activePage:e})=>{const t=p(),a=()=>e==="month";return r.jsxs(N,{children:[r.jsx(f,{$borderSide:!0,$active:e,$primary:a(),to:`/calendar/month/${o(t,"yyyy-MM")}`,children:"Month"}),r.jsx(f,{$active:e,$primary:!a(),to:`/calendar/day/${o(t,"yyyy-MM-dd")}`,children:"Day"})]})},I=s(w)`
  font-size: 16px;
  color: ${({theme:e})=>e.colors.toolbarButtonArrowColor};
  &:hover {
    color: ${({theme:e})=>e.colors.activeArrowColor};
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,W=s(M)`
  font-size: 16px;
  color: ${({theme:e})=>e.colors.toolbarButtonArrowColor};
  &:hover {
    color: ${({theme:e})=>e.colors.activeArrowColor};
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,G=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`,b=s.button`
  border: 1px solid ${({theme:e})=>e.colors.borderСalendarColor};
  background-color: ${({theme:e})=>e.colors.backgroundCalendar};
  padding: 7px 10px;
  cursor: pointer;

  &:hover svg {
    color: ${({theme:e})=>e.colors.toolbarButtonArrowColorHover};
  }

  @media screen and (min-width: 768px) {
    padding: 8px 10px;
  }
`,T=s(b)`
  border-radius: 8px 0px 0px 8px;
  border-right: ${e=>e.$back&&"none; "};
`,F=s(b)`
  border-radius: 0px 8px 8px 0px;
`,H=({activePage:e})=>{const[t,a]=l.useState(p()),c=u(),n=i=>{const m=o(new Date(i),"yyyy-MM-dd");a(i),c(`/calendar/day/${m}`)},d=i=>{switch(i){case"month":return o(p(),"MMMM yyyy");case"day":return o(p(),"d MMM yyyy")}},x=l.forwardRef(function({onClick:m},g){return r.jsx(z,{onClick:m,ref:g,children:d(e)})});return r.jsxs("div",{children:[r.jsx(S,{selected:t,onChange:i=>n(i),customInput:r.jsx(x,{}),calendarStartDay:1,formatWeekDay:i=>i.slice(0,1)}),r.jsx(O,{})]})},U=({activePage:e})=>{const t=u(),a=p(),c=()=>{const d=o(A(a,1),"yyyy-MM"),x=o(k(a,1),"yyyy-MM-dd");switch(e){case"month":t(`/calendar/month/${d}`);break;case"day":t(`/calendar/day/${x}`);break}},n=()=>{const d=o(L(a,1),"yyyy-MM"),x=o(B(a,1),"yyyy-MM-dd");switch(e){case"month":t(`/calendar/month/${d}`);break;case"day":t(`/calendar/day/${x}`);break}};return r.jsxs(G,{children:[r.jsx(H,{activePage:e}),r.jsxs("div",{children:[r.jsx(T,{onClick:()=>n(),children:r.jsx(I,{})}),r.jsx(F,{onClick:()=>c(),children:r.jsx(W,{})})]})]})},Z=()=>{const e=$(),t=c=>{let n;return c.map(d=>(e.pathname.includes(d)&&(n=d),n)),n},a=["month","day"];return r.jsxs(E,{children:[r.jsx(U,{activePage:t(a)}),r.jsx(P,{activePage:t(a)})]})},V=()=>{const[e]=l.useState(!1),t=j(),a=u(),c=$(),n=o(p(),"yyyy-MM");return l.useEffect(()=>{if(c.pathname==="/calendar"){a(`/calendar/month/${n}`);return}},[a,c.pathname,n]),l.useEffect(()=>{t(C(n))},[t,n]),r.jsxs(R,{children:[r.jsx(Z,{isActivePage:e}),r.jsx(l.Suspense,{fallback:null,children:r.jsx(D,{})})]})};export{V as default};
