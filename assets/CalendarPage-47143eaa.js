import{s as d,v as i,L as C,w as x,j as r,x as c,y as j,z as D,r as p,B as f,p as $,C as S,u as L,D as A,O as z}from"./index-dde49c36.js";import{t as B,a as O,s as R,b as E}from"./index-a77ac051.js";import{S as P,C as I}from"./StyledDayPicker-026f9cab.js";import"./index-a67bf080.js";const N=d.div`
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
`,W=d.div`
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
`,b=i`
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
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,w=d(C)`
  ${b}
  ${e=>{switch(e.$active){case"day":return i`
          background: ${t=>t.$primary&&t.theme.colors.activeCalendarLinkColor};
          border-left: ${t=>t.$primary&&"solid 1px #3e85f333;"};
          cursor: ${t=>t.$primary&&"default;"};
        `;case"month":return i`
          background: ${t=>t.$primary&&t.theme.colors.activeCalendarLinkColor};
          border-right: ${t=>t.$primary&&"solid 1px #3e85f333;"};
          cursor: ${t=>t.$primary&&"default;"};
        `;default:return i`
          ${b}
        `}}}
`,G=d.div`
display:flex;
`,T=({activePage:e})=>{const t=x(),n=()=>e==="month";return r.jsxs(G,{children:[r.jsx(w,{$borderSide:!0,$active:e,$primary:n(),to:`/calendar/month/${c(t,"yyyy-MM")}`,children:"Month"}),r.jsx(w,{$active:e,$primary:!n(),to:`/calendar/day/${c(t,"yyyy-MM-dd")}`,children:"Day"})]})},H=d(j)`
  font-size: 16px;
  color: ${({theme:e})=>e.colors.arrowColor};
  &:hover {
    color: ${({theme:e})=>e.colors.activeArrowColor};
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,U=d(D)`
  font-size: 16px;
  color: ${({theme:e})=>e.colors.arrowColor};
  &:hover {
    color: ${({theme:e})=>e.colors.activeArrowColor};
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,q=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`,g=i`
  border: 1px solid ${({theme:e})=>e.colors.borderСalendarColor};
  background-color: ${({theme:e})=>e.colors.backgroundCalendar};
  padding: 7px 10px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    padding: 8px 10px;
  }
`,v=d.button`
  ${g}
  ${e=>{switch(e.$direction){case"back":return i`
          border-radius: 8px 0px 0px 8px;
          border-right: ${t=>t.$back&&"none; "};
        `;case"forward":return i`
          border-radius: 0px 8px 8px 0px;
        `;default:return i`
          ${g}
        `}}}

  &:hover svg {
    color: ${({theme:e})=>e.colors.toolbarButtonArrowColorHover};
  }
`,F=({activePage:e,staticticDate:t,setStaticticDate:n})=>{console.log("staticticDate: ",t);const[o,a]=p.useState(x()),l=f(),h=$(),y=s=>{console.log("date: ",s);const u=c(new Date(s),"dd-MM-yyyy");switch(a(s),h.pathname){case"/calendar":l(`/calendar/day/${u}`);break;case"/statistics":n(u);break}},m=s=>{switch(s){case"month":return c(x(),"MMMM yyyy");case"day":return c(x(),"d MMM yyyy")}},k=p.forwardRef(function({onClick:u},M){return r.jsx(P,{onClick:u,ref:M,children:m(e)})});return r.jsxs("div",{children:[r.jsx(B,{selected:o,onChange:s=>y(s),customInput:r.jsx(k,{}),calendarStartDay:1,formatWeekDay:s=>s.slice(0,1)}),r.jsx(I,{})]})},J=({activePage:e,setStaticticDate:t,staticticDate:n})=>{const o=f(),a=x(),l=()=>{const y=c(O(a,1),"yyyy-MM"),m=c(S(a,1),"yyyy-MM-dd");switch(e){case"month":o(`/calendar/month/${y}`);break;case"day":o(`/calendar/day/${m}`);break}},h=()=>{const y=c(R(a,1),"yyyy-MM"),m=c(E(a,1),"yyyy-MM-dd");switch(e){case"month":o(`/calendar/month/${y}`);break;case"day":o(`/calendar/day/${m}`);break}};return r.jsxs(q,{children:[r.jsx(F,{setStaticticDate:t,activePage:e}),r.jsxs("div",{children:[r.jsx(v,{$direction:"back",$back:!0,onClick:()=>h(),children:r.jsx(H,{})}),r.jsx(v,{$direction:"forward",onClick:()=>l(),children:r.jsx(U,{})})]})]})},K=()=>{const e=$(),t=o=>{let a;return o.map(l=>(e.pathname.includes(l)&&(a=l),a)),a},n=["month","day"];return r.jsxs(W,{children:[r.jsx(J,{activePage:t(n)}),r.jsx(T,{activePage:t(n)})]})},Z=()=>{const[e]=p.useState(!1),t=L(),n=f(),o=$(),a=c(x(),"yyyy-MM");return p.useEffect(()=>{if(o.pathname==="/calendar"){n(`/calendar/month/${a}`);return}},[n,o.pathname,a]),p.useEffect(()=>{t(A(a))},[t,a]),r.jsxs(N,{children:[r.jsx(K,{isActivePage:e}),r.jsx(p.Suspense,{fallback:null,children:r.jsx(z,{})})]})};export{Z as default};
