import{s as d,q as s,L as u,t as h,j as a,v as c,n as x,r as o,u as f,w as y,x as $,O as g}from"./index-18531515.js";import{C as w}from"./ChooseDate-39c32ba9.js";import"./index-96b84a27.js";import"./index-a0975c39.js";const v=d.div`
  background-color: ${({theme:t})=>t.colors.primaryBackground};
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
`,M=d.div`
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
`,p=s`
  height: 34px;
  display: flex;
  width: 82px;
  align-items: center;
  justify-content: center;
  color: ${t=>t.theme.name==="dark-theme"&t.$primary?"#fff":"#3e85f3"};
  font-weight: 500;
  font-size: 14px;
  line-height: calc(18 / 14);
  border: none;
  background: ${({theme:t})=>t.colors.notActiveCalendarLinkColor};
  /* padding: 8px 16px 8px 16px; */
  cursor: pointer;
  border-radius: ${t=>t.$borderSide?"8px 0px 0px 8px":"0px 8px 8px 0px"};
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,m=d(u)`
  ${p}
  ${t=>{switch(t.$active){case"day":return s`
          background: ${e=>e.$primary&&e.theme.colors.activeCalendarLinkColor};
          border-left: ${e=>e.$primary&&"solid 1px #3e85f333;"};
          cursor: ${e=>e.$primary&&"default;"};
        `;case"month":return s`
          background: ${e=>e.$primary&&e.theme.colors.activeCalendarLinkColor};
          border-right: ${e=>e.$primary&&"solid 1px #3e85f333;"};
          cursor: ${e=>e.$primary&&"default;"};
        `;default:return s`
          ${p}
        `}}}
`,b=d.div`
display:flex;
`,j=({activePage:t})=>{const e=h(),r=()=>t==="month";return a.jsxs(b,{children:[a.jsx(m,{$borderSide:!0,$active:t,$primary:r(),to:`/calendar/month/${c(e,"MMMM-yyyy")}`,children:"Month"}),a.jsx(m,{$active:t,$primary:!r(),to:`/calendar/day/${c(e,"dd-MMMM-yyyy")}`,children:"Day"})]})},k=()=>{const t=x(),e=i=>{let n;return i.map(l=>(t.pathname.includes(l)&&(n=l),n)),n},r=["month","day"];return a.jsxs(M,{children:[a.jsx(w,{activePage:e(r)}),a.jsx(j,{activePage:e(r)})]})},E=()=>{const[t]=o.useState(!1),e=f(),r=y(),i=x();return o.useEffect(()=>{const n=c(new Date,"MMMM-yyyy");if(i.pathname==="/calendar"){r(`/calendar/month/${n}`);return}},[r,i.pathname]),o.useEffect(()=>{const n=c(new Date,"yyyy-MM");e($(n))},[e]),a.jsxs(v,{children:[a.jsx(k,{isActivePage:t}),a.jsx(o.Suspense,{fallback:null,children:a.jsx(g,{})})]})};export{E as default};
