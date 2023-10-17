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







.weekend {

color: #3e85f3;
}

`;
