import{s as c,q as s,B as g,C as m,D as b,t as h,w as y,n as _,r as k,j as r,v as n,E as w}from"./index-e4a589ba.js";import{t as v,a as $,s as j,b as C}from"./index-c249b441.js";const M=c(g)`
  font-size: 16px;
  color: ${({theme:e})=>e.colors.arrowColor};
  &:hover {
    color: ${({theme:e})=>e.colors.activeArrowColor};
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,D=c(m)`
  font-size: 16px;
  color: ${({theme:e})=>e.colors.arrowColor};
  &:hover {
    color: ${({theme:e})=>e.colors.activeArrowColor};
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,z=c.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`,l=s`
  border: 1px solid ${({theme:e})=>e.colors.borderСalendarColor};
  background-color: ${({theme:e})=>e.colors.backgroundCalendar};
  padding: 7px 10px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    padding: 8px 10px;
  }
`,x=c.button`
  ${l}
  ${e=>{switch(e.$direction){case"back":return s`
          border-radius: 8px 0px 0px 8px;
          border-right: ${o=>o.$back&&"none; "};
        `;case"forward":return s`
          border-radius: 0px 8px 8px 0px;
        `;default:return s`
          ${l}
        `}}}

  &:hover svg {
    color: ${({theme:e})=>e.colors.toolbarButtonArrowColorHover};
  }
`,A=c.button`
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
`,I=b`
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
`,B=({activePage:e})=>{const o=h(),a=y(),d=_(),p=t=>{switch(t=n(new Date(t),"dd-MM-yyyy"),console.log("location.pathname: ",d.pathname),d.pathname){case"/calendar":a(`/calendar/day/${t}`);break;case"/statistics":a(`/statistics/${t}`);break}},i=k.forwardRef(function({value:R,onClick:f},u){return r.jsx(A,{onClick:f,ref:u,children:e==="month"?n(o,"yyyy-MM"):n(o," yyyy-MM-dd")})});return r.jsxs("div",{children:[r.jsx(v,{selected:o,onChange:t=>p(t),customInput:r.jsx(i,{}),calendarStartDay:1,formatWeekDay:t=>t.slice(0,1)}),r.jsx(I,{})]})},O=({activePage:e})=>{const o=y(),a=h(),d=()=>{const i=n($(a,1),"yyyy-MM"),t=n(w(a,1),"yyyy-MM-dd");o(e==="month"?`/calendar/month/${i}`:`/calendar/day/${t}`)},p=()=>{const i=n(j(a,1),"yyyy-MM"),t=n(C(a,1),"yyyy-MM-dd");o(e==="month"?`/calendar/month/${i}`:`/calendar/day/${t}`)};return r.jsxs(z,{children:[r.jsx(B,{activePage:e}),r.jsxs("div",{children:[r.jsx(x,{$direction:"back",$back:!0,onClick:()=>p(),children:r.jsx(M,{})}),r.jsx(x,{$direction:"forward",onClick:()=>d(),children:r.jsx(D,{})})]})]})};export{O as C};
