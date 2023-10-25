import{s,v as y,L as v,w as p,j as r,x as o,y as w,z as M,r as l,B as u,C as k,p as $,u as C,D as j,O as D}from"./index-af9f270b.js";import{t as A,a as S,s as B,b as L}from"./index-1e175251.js";import{S as z,C as O}from"./StyledDayPicker-0974339c.js";import"./index-53e5ac49.js";const R=s.div`
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
`,P=s.div`
  display: flex;
`,I=({activePage:e})=>{const t=p(),n=()=>e==="month";return r.jsxs(P,{children:[r.jsx(f,{$borderSide:!0,$active:e,$primary:n(),to:`/calendar/month/${o(t,"yyyy-MM")}`,children:"Month"}),r.jsx(f,{$active:e,$primary:!n(),to:`/calendar/day/${o(t,"yyyy-MM-dd")}`,children:"Day"})]})},N=s(w)`
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
`,H=({activePage:e})=>{const[t,n]=l.useState(p()),c=u(),a=i=>{const m=o(new Date(i),"yyyy-MM-dd");n(i),c(`/calendar/day/${m}`)},d=i=>{switch(i){case"month":return o(p(),"MMMM yyyy");case"day":return o(p(),"d MMM yyyy")}},x=l.forwardRef(function({onClick:m},g){return r.jsx(z,{onClick:m,ref:g,children:d(e)})});return r.jsxs("div",{children:[r.jsx(A,{selected:t,onChange:i=>a(i),customInput:r.jsx(x,{}),calendarStartDay:1,formatWeekDay:i=>i.slice(0,1)}),r.jsx(O,{})]})},U=({activePage:e})=>{const t=u(),n=p(),c=()=>{const d=o(S(n,1),"yyyy-MM"),x=o(k(n,1),"yyyy-MM-dd");switch(e){case"month":t(`/calendar/month/${d}`);break;case"day":t(`/calendar/day/${x}`);break}},a=()=>{const d=o(B(n,1),"yyyy-MM"),x=o(L(n,1),"yyyy-MM-dd");switch(e){case"month":t(`/calendar/month/${d}`);break;case"day":t(`/calendar/day/${x}`);break}};return r.jsxs(G,{children:[r.jsx(H,{activePage:e}),r.jsxs("div",{children:[r.jsx(T,{onClick:()=>a(),children:r.jsx(N,{})}),r.jsx(F,{onClick:()=>c(),children:r.jsx(W,{})})]})]})},q=()=>{const e=$(),t=c=>{let a;return c.map(d=>(e.pathname.includes(d)&&(a=d),a)),a},n=["month","day"];return r.jsxs(E,{children:[r.jsx(U,{activePage:t(n)}),r.jsx(I,{activePage:t(n)})]})},X=()=>{const[e]=l.useState(!1),t=C(),n=u(),c=$(),a=o(p(),"yyyy-MM");return l.useEffect(()=>{if(c.pathname==="/calendar"){n(`/calendar/month/${a}`);return}},[n,c.pathname,a]),l.useEffect(()=>{t(j(a))},[t,a]),r.jsxs(R,{children:[r.jsx(q,{isActivePage:e}),r.jsx(l.Suspense,{fallback:null,children:r.jsx(D,{})})]})};export{X as default};
