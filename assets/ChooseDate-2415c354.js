import{s as u,v as y,D as v,E as D,r as m,w as p,y as f,p as g,j as o,x as a,F as M}from"./index-4271b554.js";import{S as j,t as A,C as R,a as S,s as z,b}from"./StyledDayPicker-509b2d3b.js";const B=u(v)`
  font-size: 16px;
  color: ${({theme:e})=>e.colors.arrowColor};
  &:hover {
    color: ${({theme:e})=>e.colors.activeArrowColor};
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,L=u(D)`
  font-size: 16px;
  color: ${({theme:e})=>e.colors.arrowColor};
  &:hover {
    color: ${({theme:e})=>e.colors.activeArrowColor};
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,O=u.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`,w=y`
  border: 1px solid ${({theme:e})=>e.colors.borderСalendarColor};
  background-color: ${({theme:e})=>e.colors.backgroundCalendar};
  padding: 7px 10px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    padding: 8px 10px;
  }
`,$=u.button`
  ${w}
  ${e=>{switch(e.$direction){case"back":return y`
          border-radius: 8px 0px 0px 8px;
          border-right: ${s=>s.$back&&"none; "};
        `;case"forward":return y`
          border-radius: 0px 8px 8px 0px;
        `;default:return y`
          ${w}
        `}}}

  &:hover svg {
    color: ${({theme:e})=>e.colors.toolbarButtonArrowColorHover};
  }
`,E=({activePage:e,staticticDate:s,setStaticticDate:i})=>{console.log("staticticDate: ",s);const[r,n]=m.useState(p()),x=f(),h=g(),c=t=>{console.log("date: ",t);const l=a(new Date(t),"dd-MM-yyyy");switch(n(t),h.pathname){case"/calendar":x(`/calendar/day/${l}`);break;case"/statistics":i(l);break}},d=t=>{switch(t){case"month":return a(p(),"MMMM yyyy");case"day":return a(p(),"d MMM yyyy");case"statistics":return a(new Date(s||new Date),"dd MMM yyyy")}},k=m.forwardRef(function({onClick:l},C){return o.jsx(j,{onClick:l,ref:C,children:d(e)})});return o.jsxs("div",{children:[o.jsx(A,{selected:r,onChange:t=>c(t),customInput:o.jsx(k,{}),calendarStartDay:1,formatWeekDay:t=>t.slice(0,1)}),o.jsx(R,{})]})},G=({activePage:e,setStaticticDate:s,staticticDate:i})=>{const r=f(),n=p(),x=()=>{const c=a(S(n,1),"yyyy-MM"),d=a(M(n,1),"yyyy-MM-dd");switch(e){case"month":r(`/calendar/month/${c}`);break;case"day":r(`/calendar/day/${d}`);break;case"statistics":s(a(M(new Date(i),1),"yyyy-MM-dd"));break}},h=()=>{const c=a(z(n,1),"yyyy-MM"),d=a(b(n,1),"yyyy-MM-dd");switch(e){case"month":r(`/calendar/month/${c}`);break;case"day":r(`/calendar/day/${d}`);break;case"statistics":s(a(b(new Date(i),1),"yyyy-MM-dd"));break}};return o.jsxs(O,{children:[o.jsx(E,{setStaticticDate:s,activePage:e}),o.jsxs("div",{children:[o.jsx($,{$direction:"back",$back:!0,onClick:()=>h(),children:o.jsx(B,{})}),o.jsx($,{$direction:"forward",onClick:()=>x(),children:o.jsx(L,{})})]})]})};export{G as C};
