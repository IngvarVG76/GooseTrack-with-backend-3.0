import{s,v as x,C as M,D as $,E as j,r as u,w as y,y as _,p as C,j as t,x as a,F as g}from"./index-8e4dcb0b.js";import{t as D,a as z,s as A,b as m}from"./index-142ee2a4.js";const I=s(M)`
  font-size: 16px;
  color: ${({theme:e})=>e.colors.arrowColor};
  &:hover {
    color: ${({theme:e})=>e.colors.activeArrowColor};
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,R=s($)`
  font-size: 16px;
  color: ${({theme:e})=>e.colors.arrowColor};
  &:hover {
    color: ${({theme:e})=>e.colors.activeArrowColor};
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,B=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`,b=x`
  border: 1px solid ${({theme:e})=>e.colors.borderСalendarColor};
  background-color: ${({theme:e})=>e.colors.backgroundCalendar};
  padding: 7px 10px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    padding: 8px 10px;
  }
`,k=s.button`
  ${b}
  ${e=>{switch(e.$direction){case"back":return x`
          border-radius: 8px 0px 0px 8px;
          border-right: ${o=>o.$back&&"none; "};
        `;case"forward":return x`
          border-radius: 0px 8px 8px 0px;
        `;default:return x`
          ${b}
        `}}}

  &:hover svg {
    color: ${({theme:e})=>e.colors.toolbarButtonArrowColorHover};
  }
`,L=s.button`
  width: 145px;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 700;
  line-height: calc(18 / 14);

  color: #ffffff;
  background: #3e85f3;
  border: none;
  border-radius: 8px;
  text-transform: uppercase;
  align-items: center;
  /* 
  margin-bottom: 18px; */
`,O=j`
  .react-datepicker__wrapper {
    position: relative;
  }
  .react-datepicker {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-1%, 0%);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 327px;
    height: 354px;
    padding: 9px 18px;
  background-color: #3e85f3;
    font-family: Inter;
    border-radius: 16px;
  }
  .react-datepicker__month-container {
    float: inherit;
    box-sizing: border-box;
  }
  .react-datepicker__header {
    position: relative;
    background-color: #3e85f3;
  }
  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 8px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  }
  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-bottom: 0px;
    padding: 0;
  }
  .react-datepicker__day react-datepicker__day--018.react-datepicker__day--selected react-datepicker__day--today{
    outline: none;
    border: none;
}
  .react-datepicker__current-month {
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    text-align: center;
    color: white;
  }
  .react-datepicker__day-name {
    margin: 0;
   padding: 8px 8px;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
    text-align: center;
    color: white;
  }
  .react-datepicker__navigation {
    margin-top: 24px;
    color: white;
  }
  .react-datepicker__navigation--previous {
    left: 7px;
    width: 18px;
    height: 18px;
  }
  .react-datepicker__navigation--next {
    right: 7px;
    width: 18px;
    height: 18px;
  }
  .react-datepicker__navigation-icon::before:hover:focus {
    border-color: white;
  }
  .react-datepicker__week {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
  }
  .react-datepicker__day {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    margin: 0;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    color: white;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    text-align: center;
  }
  .react-datepicker__month {
    display: flex;
    gap: 7px;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 16px;
    margin: 0;
  }
  .react-datepicker__day--selected {
    background-color:white;
    color:#3e85f3;
    font-size: 14px;
  }
  .react-datepicker__day--selected:hover {
    border-radius: 50%;
  background-color:white;
  }
  .react-datepicker__day:hover {
    border-radius: 50%;
    background-color:white;
    color:#3e85f3;
  }
  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color:white;
    color:#3e85f3;
  }
  .react-datepicker__day--weekend {
    opacity: 50%;
  }
.react-datepicker__day--outside-month {
    background-color: transparent;
    pointer-events: none;
    opacity: 0;
  }
  .react-datepicker__view-calendar-icon input {
    padding: 6px 10px 5px 13px;
  }
  .react-datepicker__triangle {
    visibility: hidden;
  }
`,S=({activePage:e,staticticDate:o,setStaticticDate:p})=>{console.log("staticticDate: ",o);const[n,i]=u.useState(y()),h=_(),f=C(),c=r=>{console.log("date: ",r);const l=a(new Date(r),"dd-MM-yyyy");switch(i(r),f.pathname){case"/calendar":h(`/calendar/day/${l}`);break;case"/statistics":p(l);break}},d=r=>{switch(r){case"month":return a(y(),"MMMM yyyy");case"day":return a(y(),"d MMM yyyy");case"statistics":return a(new Date(o||new Date),"dd MMM yyyy")}},w=u.forwardRef(function({onClick:l},v){return t.jsx(L,{onClick:l,ref:v,children:d(e)})});return t.jsxs("div",{children:[t.jsx(D,{selected:n,onChange:r=>c(r),customInput:t.jsx(w,{}),calendarStartDay:1,formatWeekDay:r=>r.slice(0,1)}),t.jsx(O,{})]})},G=({activePage:e,setStaticticDate:o,staticticDate:p})=>{const n=_(),i=y(),h=()=>{const c=a(z(i,1),"yyyy-MM"),d=a(g(i,1),"yyyy-MM-dd");switch(e){case"month":n(`/calendar/month/${c}`);break;case"day":n(`/calendar/day/${d}`);break;case"statistics":o(a(g(new Date(p),1),"yyyy-MM-dd"));break}},f=()=>{const c=a(A(i,1),"yyyy-MM"),d=a(m(i,1),"yyyy-MM-dd");switch(e){case"month":n(`/calendar/month/${c}`);break;case"day":n(`/calendar/day/${d}`);break;case"statistics":o(a(m(new Date(p),1),"yyyy-MM-dd"));break}};return t.jsxs(B,{children:[t.jsx(S,{setStaticticDate:o,activePage:e}),t.jsxs("div",{children:[t.jsx(k,{$direction:"back",$back:!0,onClick:()=>f(),children:t.jsx(I,{})}),t.jsx(k,{$direction:"forward",onClick:()=>h(),children:t.jsx(R,{})})]})]})};export{G as C};
