import { createGlobalStyle, styled } from 'styled-components';
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const StyledButton = styled.button`
  width: 142px;
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
`;

export const CalendarGlobalStyles = createGlobalStyle`
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
`;


// DATEPICKER

// .react-datepicker__wrapper {
//     position: relative;
//   }

//   .react-datepicker__input-container {
//     > input {
//       width: 100%;
//     }
//   }

//   .react-datepicker {
//     position: absolute;
//     width: 328px;
//  display:flex;
//  justify-content:center;
//     left: 50%;
//     top: 50%;
//     transform: translate(-1%, 0%);
//     font-family: "InterRegular";

//     border-radius: 16px;
//     background-color: #3E85F3;
//     border: none;

//     @media (min-width: 768px) {

//       width: 373px;
//     }
//   }

//   .react-datepicker__header {
//     background:  #3e85f3;
//     border-top-right-radius: 16px;
//     border-top-left-radius: 16px;
//     // position: relative;
//     margin-bottom: 10px;

//   }

//   .react-datepicker__current-month {
//   height:32px;
//     display:flex;
//     justify-content:center;
//     align-items:center;
// padding-top:9px;
//     font-family: "Inter";
//     font-size: 20px;
//     font-weight: 600;
//     line-height: calc(24/20);

//     color: #fff;

//   }

//   .react-datepicker__day-names {

//     display: flex;
//     align-items: center;
//     width: 322px;

//     justify-content: space-evenly;

//     @media (min-width: 768px) {

//     }
//   }

//   .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
//     border-top-right-radius: 16px;
//     border-bottom: 0px;
//     padding: 0;
//   }

//   .react-datepicker__day-name {
//     width:48px;
//     height:48px;
//     display:flex;
//     justify-content:center;
//     align-items:center;
//     font-family: "InterSemiBold";
//     font-weight: 600;
//     font-size: 14px;
//     line-height: 18px;
//     letter-spacing: 0em;
//     text-align: center;
//     margin: 0;
//     color: #fff;

//     @media (min-width: 768px) {
//       font-size: 18px;
//       line-height: 24px;
//     }
//   }

//   .react-datepicker__navigation {
//     margin-top: 7px;

//     @media (min-width: 768px) {
//       margin-top: 9px;
//     }
//   }

//   .react-datepicker__navigation--previous {
//     left: 7px;

//     @media (min-width: 768px) {
//       left: 17px;
//     }
//   }

//   .react-datepicker__navigation--next {
//     right: 7px;

//     @media (min-width: 768px) {
//       right: 17px;
//     }
//   }

//   .react-datepicker__navigation-icon::before {
//     display: inline-block;
//     border-color: #fff;

//     @media (max-width: 767px) {
//       border-width: 1.5px 1.5px 0 0;
//       height: 9px;
//       width: 9px;
//     }

//     @media (min-width: 768px) {
//       margin-top: -2px;
//       height: 9px;
//       width: 9px;
//     }
//   }

//   .react-datepicker__week {
//     display: flex;
//     justify-content: space-evenly
//    }

//   .react-datepicker__day {
//     font-family: "Inter";
//     display:flex;
//     justify-content:center;
//     align-items:center;
//     font-size: 14px;
//     font-weight: 400;
//     letter-spacing: 0em;
//     text-align: center;

//     color: #fff;
//     width: 48px;
//       height: 48px;
//     margin: 0;
//     border-radius: 50%;
//     text-align: center;
//     line-height: 18px;

//     @media (min-width: 768px) {
//       font-size: 18px;
//       line-height: 24px;

//     }
//   }

//   .react-datepicker__day--weekend{
//     color:rgba(255,255,255,0.5)
//   }
//   .react-datepicker__month{
//     display: flex;
//     width: 322px;

//     flex-direction: column;
//     justify-content: space-evenly;
//     padding-bottom: 19px;
//     border-top: 1px solid #ffffff33;
//     margin: 0;
//     @media (min-width: 768px) {

//     }
//   }

//   .react-datepicker__day--selected {
//     background-color: #fff;
//     color: #3E85F3;
//     font-size: 14px;

//     @media (min-width: 768px) {
//       font-size: 18px;
//     }
//   }

//   .react-datepicker__day--selected:hover {
//     border-radius: 50%;
//     background-color: #3E85F3;
//   }

//   .react-datepicker__day:hover,
//   .react-datepicker__day--keyboard-selected {
//     border-radius: 50%;
//     background-color: #3E85F3;
//     cursor: pointer;
//   }

//   .react-datepicker__day--outside-month {
//     color: #3E85F3;
//     background-color: transparent;
//     pointer-events: none;
//     opacity: 0;
//   }

/* .react-datepicker__view-calendar-icon input {
    padding: 6px 10px 5px 13px;
  }

  .react-datepicker__triangle,
  .react-datepicker__aria-live {
    display: none;
  }  */
