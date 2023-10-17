import { createGlobalStyle } from 'styled-components';
// import 'normalize.css';

export const GlobalStyle = createGlobalStyle`
 *, *::before, *::after {
  box-sizing: border-box;
 }
 
 body{

  background: ${(props) => props.theme.colors.mainBackgroundColor};


}

@font-face {
    font-family: 'Inter';
    src: local('Inter'), local('Inter-Black'),
      url('../fonts/Inter-Black.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Inter';
    src: local('Inter'), local('Inter-Bold'),
      url('../fonts/Inter-Bold.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

    @font-face {
    font-family: 'Inter';
    src: local('Inter'), local('Inter-ExtraBold'),
      url('../fonts/Inter-ExtraBold.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

      @font-face {
    font-family: 'Inter';
    src: local('Inter'), local('Inter-ExtraLight'),
      url('../fonts/Inter-ExtraLight.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  } 

      @font-face {
    font-family: 'Inter';
    src: local('Inter'), local('Inter-Light'),
      url('../fonts/Inter-Light.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  } 

        @font-face {
    font-family: 'Inter';
    src: local('Inter'), local('Inter-Medium'),
      url('../fonts/Inter-Medium.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  } 

        @font-face {
    font-family: 'Inter';
    src: local('Inter'), local('Inter-Regular'),
      url('../fonts/Inter-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  } 

          @font-face {
    font-family: 'Inter';
    src: local('Inter'), local('Inter-SemiBold'),
      url('../fonts/Inter-SemiBold.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  } 
  
           @font-face {
    font-family: 'Inter';
    src: local('Inter'), local('Inter-Thin'),
      url('../fonts/Inter-Thin.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  } 

main {
  background: inherit;
}
input,
button,
textarea {
  font-family: inherit;
}

input::-ms-clear {
  display: none;
}
button {
  cursor: pointer;
}
button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
a {
  color: inherit;
}
a,
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
ul ,li {
  list-style: none;
  padding:0;
  margin:0;
}
img {
  vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6,
p{
  font-size: inherit;
  font-weight: 500;
margin:0;
}

img {
  max-width: 100%;
  height: auto;
}




.pageName {
  font-size: 32px;
  font-weight: 700;
  line-height: 1;
  color: #111111;
  text-align: start;
}
.changeMonth {
  margin: 0px 20px;
}

.controllers {
  display: flex;
  align-items: center;
}

.currentMonth {
  width: 131px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 8px;

  font-size: 16px;
  line-height: 1.12;
  font-weight: 700;
  color: #fff;
  background: #3e85f3;
}
.weekContainer {
  width: 1087px;
  height: 46px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  border-radius: 8px;

  list-style: none;
}







// DATEPICKER

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
