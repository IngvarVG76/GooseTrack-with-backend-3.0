import{s as c,v as s,L as h,w as x,j as r,x as d,p as u,r as o,u as f,y,z as $,O as g}from"./index-cad7a3d6.js";import{C as w}from"./ChooseDate-0da9e6fe.js";import"./index-abe6e224.js";import"./index-9179246b.js";const v=c.div`
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
`,b=c.div`
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
`,l=s`
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
`,m=c(h)`
  ${l}
  ${t=>{switch(t.$active){case"day":return s`
          background: ${e=>e.$primary&&e.theme.colors.activeCalendarLinkColor};
          border-left: ${e=>e.$primary&&"solid 1px #3e85f333;"};
          cursor: ${e=>e.$primary&&"default;"};
        `;case"month":return s`
          background: ${e=>e.$primary&&e.theme.colors.activeCalendarLinkColor};
          border-right: ${e=>e.$primary&&"solid 1px #3e85f333;"};
          cursor: ${e=>e.$primary&&"default;"};
        `;default:return s`
          ${l}
        `}}}
`,j=c.div`
display:flex;
`,k=({activePage:t})=>{const e=x(),a=()=>t==="month";return r.jsxs(j,{children:[r.jsx(m,{$borderSide:!0,$active:t,$primary:a(),to:`/calendar/month/${d(e,"yyyy-MM")}`,children:"Month"}),r.jsx(m,{$active:t,$primary:!a(),to:`/calendar/day/${d(e,"yyyy-MM-dd")}`,children:"Day"})]})},C=()=>{const t=u(),e=i=>{let n;return i.map(p=>(t.pathname.includes(p)&&(n=p),n)),n},a=["month","day"];return r.jsxs(b,{children:[r.jsx(w,{activePage:e(a)}),r.jsx(k,{activePage:e(a)})]})},E=()=>{const[t]=o.useState(!1),e=f(),a=y(),i=u(),n=d(x(),"yyyy-MM");return o.useEffect(()=>{if(i.pathname==="/calendar"){a(`/calendar/month/${n}`);return}},[a,i.pathname,n]),o.useEffect(()=>{e($(n))},[e,n]),r.jsxs(v,{children:[r.jsx(C,{isActivePage:t}),r.jsx(o.Suspense,{fallback:null,children:r.jsx(g,{})})]})};export{E as default};
