import{s as i,n,L as u,m as h,j as t,o as d,i as x,r as c,p as f,O as y}from"./index-3912c171.js";import{C as $}from"./ChooseDate-c5fe969c.js";import"./index-b52df4e5.js";import"./index-33aaa618.js";const g=i.div`
  background-color: ${({theme:r})=>r.colors.primaryBackground};
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
`,w=i.div`
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
`,p=n`
  height: 34px;
  display: flex;
  width: 82px;
  align-items: center;
  justify-content: center;
  color: ${r=>r.theme.name==="dark-theme"&r.$primary?"#fff":"#3e85f3"};
  font-weight: 500;
  font-size: 14px;
  line-height: calc(18 / 14);
  border: none;
  background: ${({theme:r})=>r.colors.notActiveCalendarLinkColor};
  /* padding: 8px 16px 8px 16px; */
  cursor: pointer;
  border-radius: ${r=>r.$borderSide?"8px 0px 0px 8px":"0px 8px 8px 0px"};
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,m=i(u)`
  ${p}
  ${r=>{switch(r.$active){case"day":return n`
          background: ${e=>e.$primary&&e.theme.colors.activeCalendarLinkColor};
          border-left: ${e=>e.$primary&&"solid 1px #3e85f333;"};
          cursor: ${e=>e.$primary&&"default;"};
        `;case"month":return n`
          background: ${e=>e.$primary&&e.theme.colors.activeCalendarLinkColor};
          border-right: ${e=>e.$primary&&"solid 1px #3e85f333;"};
          cursor: ${e=>e.$primary&&"default;"};
        `;default:return n`
          ${p}
        `}}}
`,v=i.div`
display:flex;
`,b=({activePage:r})=>{const e=h(),a=()=>r==="month";return t.jsxs(v,{children:[t.jsx(m,{$borderSide:!0,$active:r,$primary:a(),to:`/calendar/month/${d(e,"MMMM-yyyy")}`,children:"Month"}),t.jsx(m,{$active:r,$primary:!a(),to:`/calendar/day/${d(e,"dd-MMMM-yyyy")}`,children:"Day"})]})},j=()=>{const r=x(),e=o=>{let s;return o.map(l=>(r.pathname.includes(l)&&(s=l),s)),s},a=["month","day"];return t.jsxs(w,{children:[t.jsx($,{activePage:e(a)}),t.jsx(b,{activePage:e(a)})]})},D=()=>{const[r]=c.useState(!1),e=f(),a=x();return c.useEffect(()=>{const o=d(new Date,"MMMM-yyyy");if(a.pathname==="/calendar"){e(`/calendar/month/${o}`);return}},[e,a.pathname]),t.jsxs(g,{children:[t.jsx(j,{isActivePage:r}),t.jsx(c.Suspense,{fallback:null,children:t.jsx(y,{})})]})};export{D as default};
