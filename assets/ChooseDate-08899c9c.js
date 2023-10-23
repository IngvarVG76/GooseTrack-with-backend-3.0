import{s as d,t as p,B as b,C as _,D as k,v as y,x as f,o as w,r as v,j as r,w as a,E as $}from"./index-4f628461.js";import{t as j,a as C,s as M,b as D}from"./index-e0148580.js";const z=d(b)`
  font-size: 16px;
  color: ${({theme:e})=>e.colors.arrowColor};
  &:hover {
    color: ${({theme:e})=>e.colors.activeArrowColor};
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,A=d(_)`
  font-size: 16px;
  color: ${({theme:e})=>e.colors.arrowColor};
  &:hover {
    color: ${({theme:e})=>e.colors.activeArrowColor};
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,I=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`,x=p`
  border: 1px solid ${({theme:e})=>e.colors.borderСalendarColor};
  background-color: ${({theme:e})=>e.colors.backgroundCalendar};
  padding: 7px 10px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    padding: 8px 10px;
  }
`,h=d.button`
  ${x}
  ${e=>{switch(e.$direction){case"back":return p`
          border-radius: 8px 0px 0px 8px;
          border-right: ${i=>i.$back&&"none; "};
        `;case"forward":return p`
          border-radius: 0px 8px 8px 0px;
        `;default:return p`
          ${x}
        `}}}

  &:hover svg {
    color: ${({theme:e})=>e.colors.toolbarButtonArrowColorHover};
  }
`,B=d.button`
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
`,R=k`
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
`,S=({activePage:e,setStaticticDate:i})=>{const o=y(),n=f(),s=w(),l=t=>{switch(t=a(new Date(t),"dd-MM-yyyy"),console.log("location.pathname: ",s.pathname),s.pathname){case"/calendar":n(`/calendar/day/${t}`);break;case"/statistics":i(t);break}},c=v.forwardRef(function({value:u,onClick:g},m){return console.log("  value: ",u),r.jsx(B,{onClick:g,ref:m,children:e==="month"?a(o,"yyyy-MM"):a(o," yyyy-MM-dd")})});return r.jsxs("div",{children:[r.jsx(j,{selected:o,onChange:t=>l(t),customInput:r.jsx(c,{}),calendarStartDay:1,formatWeekDay:t=>t.slice(0,1)}),r.jsx(R,{})]})},E=({activePage:e,setStaticticDate:i})=>{const o=f(),n=y(),s=()=>{const c=a(C(n,1),"yyyy-MM"),t=a($(n,1),"yyyy-MM-dd");o(e==="month"?`/calendar/month/${c}`:`/calendar/day/${t}`)},l=()=>{const c=a(M(n,1),"yyyy-MM"),t=a(D(n,1),"yyyy-MM-dd");o(e==="month"?`/calendar/month/${c}`:`/calendar/day/${t}`)};return r.jsxs(I,{children:[r.jsx(S,{setStaticticDate:i,activePage:e}),r.jsxs("div",{children:[r.jsx(h,{$direction:"back",$back:!0,onClick:()=>l(),children:r.jsx(z,{})}),r.jsx(h,{$direction:"forward",onClick:()=>s(),children:r.jsx(A,{})})]})]})};export{E as C};
