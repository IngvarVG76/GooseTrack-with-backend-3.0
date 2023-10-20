import { createGlobalStyle } from 'styled-components';

import InterBlack from '../fonts/Inter-Black.ttf';
import InterBold from '../fonts/Inter-Bold.ttf';
import InterExtraBold from '../fonts/Inter-ExtraBold.ttf';
import InterExtraLight from '../fonts/Inter-ExtraLight.ttf';
import InterLight from '../fonts/Inter-Light.ttf';
import InterMedium from '../fonts/Inter-Medium.ttf';
import InterRegular from '../fonts/Inter-Regular.ttf';
import InterSemiBold from '../fonts/Inter-SemiBold.ttf';
import InterThin from '../fonts/Inter-Thin.ttf';

export const GlobalStyle = createGlobalStyle`
 *, *::before, *::after {
  box-sizing: border-box;
 }
 
 body{
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    background: ${(props) => props.theme.colors.mainBackgroundColor};
    margin: 0;

}

@font-face {
    font-family: 'Inter';
    src: local('Inter'), local('Inter-Black'),
         url(${InterBlack}) format('truetype');
    font-weight: 900; /* Adjust the font-weight accordingly */
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Inter';
    src: local('Inter'), local('Inter-Bold'),
         url(${InterBold}) format('truetype');
    font-weight: 700; /* Adjust the font-weight accordingly */
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Inter';
    src: local('Inter'), local('Inter-ExtraBold'),
         url(${InterExtraBold}) format('truetype');
    font-weight: 800; /* Adjust the font-weight accordingly */
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Inter';
    src: local('Inter'), local('Inter-ExtraLight'),
         url(${InterExtraLight}) format('truetype');
    font-weight: 200; /* Adjust the font-weight accordingly */
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Inter';
    src: local('Inter'), local('Inter-Light'),
         url(${InterLight}) format('truetype');
    font-weight: 300; /* Adjust the font-weight accordingly */
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Inter';
    src: local('Inter'), local('Inter-Medium'),
         url(${InterMedium}) format('truetype');
    font-weight: 500; /* Adjust the font-weight accordingly */
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Inter';
    src: local('Inter'), local('Inter-Regular'),
         url(${InterRegular}) format('truetype');
    font-weight: 400; /* Adjust the font-weight accordingly */
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Inter';
    src: local('Inter'), local('Inter-SemiBold'),
         url(${InterSemiBold}) format('truetype');
    font-weight: 600; /* Adjust the font-weight accordingly */
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Inter';
    src: local('Inter'), local('Inter-Thin'),
         url(${InterThin}) format('truetype');
    font-weight: 100; /* Adjust the font-weight accordingly */
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

`;
