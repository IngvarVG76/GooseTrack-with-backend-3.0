import { createGlobalStyle } from 'styled-components';
// import 'normalize.css';

export const GlobalStyle = createGlobalStyle`
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












// DATEPICKER

.react-datepicker__wrapper {
    position: relative;
  }



  .react-datepicker__input-container {
    > input {
      width: 100%;
    }
  }

  .react-datepicker {
    position: absolute;
    width: 328px;
 display:flex;
 justify-content:center;
    left: 50%;
    top: 50%;
    transform: translate(-1%, 0%);
    font-family: "InterRegular";

    border-radius: 16px;
    background-color: #3E85F3;
    border: none;
   

    @media (min-width: 768px) {
     
      width: 373px;
    }
  }

 

  .react-datepicker__header {
    background:  #3e85f3;
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
    // position: relative;
    margin-bottom: 10px;

  }

  
  .react-datepicker__current-month {
  height:32px;
    display:flex;
    justify-content:center;
    align-items:center;
padding-top:9px;
    font-family: "Inter";
    font-size: 20px;
    font-weight: 600;
    line-height: calc(24/20);
   
    color: #fff;

   
  }


  .react-datepicker__day-names {
  
    display: flex;
    align-items: center;
    width: 322px;
  

    justify-content: space-evenly;
    

    @media (min-width: 768px) {
   
    }
  }

  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-top-right-radius: 16px;
    border-bottom: 0px;
    padding: 0;
  }

  .react-datepicker__day-name {
    width:48px;
    height:48px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-family: "InterSemiBold";
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: center;
    margin: 0;
    color: #fff;

    @media (min-width: 768px) {
      font-size: 18px;
      line-height: 24px;
    }
  }

  .react-datepicker__navigation {
    margin-top: 7px;

    @media (min-width: 768px) {
      margin-top: 17px;
    }
  }

  .react-datepicker__navigation--previous {
    left: 7px;

    @media (min-width: 768px) {
      left: 17px;
    }
  }

  .react-datepicker__navigation--next {
    right: 7px;

    @media (min-width: 768px) {
      right: 17px;
    }
  }

  .react-datepicker__navigation-icon::before {
    display: inline-block;
    border-color: #fff;

    @media (max-width: 767px) {
      border-width: 2px 2px 0 0;
      height: 9px;
      width: 9px;
    }

    @media (min-width: 768px) {
      margin-top: -2px;
      height: 12px;
      width: 12px;
    }
  }



  .react-datepicker__week {
    display: flex;
    justify-content: space-evenly 
   }

  .react-datepicker__day {
    font-family: "Inter";
    display:flex;
    justify-content:center;
    align-items:center;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0em;
    text-align: center;
  
    color: #fff;
    width: 48px;
      height: 48px;
    margin: 0;
    border-radius: 50%;
    text-align: center;
    line-height: 18px;


    @media (min-width: 768px) {
      font-size: 18px;
      line-height: 24px;
    
   
    }
  }

  .react-datepicker__day--weekend{
    color:rgba(255,255,255,0.5)
  }
  .react-datepicker__month{
    display: flex;
    width: 322px;

    flex-direction: column;
    justify-content: space-evenly;
    padding-bottom: 19px;
    border-top: 1px solid #ffffff33;
    margin: 0;
    @media (min-width: 768px) {
    
    }
  }

  .react-datepicker__day--selected {
    background-color: #fff;
    color: #3E85F3;
    font-size: 14px;

    @media (min-width: 768px) {
      font-size: 18px;
    }
  }

  .react-datepicker__day--selected:hover {
    border-radius: 50%;
    background-color: #3E85F3;
  }

  .react-datepicker__day:hover,
  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color: #3E85F3;
    cursor: pointer;
  }

  .react-datepicker__day--outside-month {
    color: #3E85F3;
    background-color: transparent;
    pointer-events: none;
    opacity: 0;
  }

  /* .react-datepicker__view-calendar-icon input {
    padding: 6px 10px 5px 13px;
  }

  .react-datepicker__triangle,
  .react-datepicker__aria-live {
    display: none;
  }  */
`;
