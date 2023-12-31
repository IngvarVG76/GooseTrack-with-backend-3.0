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
:root {
  /* fonts */
  --main-font: 'Inter', sans-serif;
  --secondary-font: 'Coolvetica', sans-serif;

  /* text */
  --active-btn-calendar-switch: rgba(62, 133, 243, 1);
  --noactive-btn-calendar-switch: rgba(62, 133, 243, 1);
  --title-text-main-color: #111111;
  --secondary-text-color: #616161;
  --accent-color: #3e85f3;
  --active-selection: #e3f3ff;
  --btn-text-color: #ffffff;
  --inactive-btn-text-color: #84828a;
  --calendar-date-color: #343434;
  --calendar-day-color: #343434;
  --accent: #3e85f3;
  --tasks-back-color: rgba(247, 246, 249, 1);
  --input-border-color: #11111126;
  --label-text-color: #111111;
  --text-priority-high-color: #f7f6f9;
  --text-priority-other-color: #f7f6f9;
  --text-404: rgba(17, 17, 17, 0.7);
  --feedback-form-text: rgba(52, 52, 52, 0.8);
  --feedback-form-text-input: #343434;
  --title-sidebar: rgba(52, 52, 52, 0.5);
  --logo-text: #3e85f3;
  --btn-border-color: rgba(220, 227, 229, 0.8);
  --btn-head-color: rgba(230, 237, 239, 0.8);

  /* backgroung */
  --main-background-color: #ffffff;
  --auth-background-color: #dcebf7;
  --outlet-background-color: #f7f6f9;
  --accent-background-color: #3e85f3;
  --input-background-color: #f6f6f6;
  --sidebar-background-color: #ffffff;
  --active-btn-color: #2b78ef;

  /* tasks */
  --task-high-color: #ea3d65;
  --task-med-color: #f3b249;
  --task-low-color: #72c2f8;
  --task-card-color: #dce3e5cc;
  --task-field-color: #f6f6f6;
  --task-cancel-color: #efefef;
  --task-field-text-color: #616161;
  --task-border-color: rgba(220, 227, 229, 0.8);

  /* calendar */
  --priority-high-color: #ffd2dd;
  --priority-med-color: #fcf0d4;
  --priority-low-color: #ceeefd;
  --linear-gradient: rgba(170, 170, 170, 0.8);
  --task-body-linear-top: rgba(247, 246, 249, 1);
  --task-body-linear-bottom: rgba(150, 150, 150, 0.5);
  /* other */

  --scroll-color: #e7e5e5;
  --scroll-background-color: #f2f2f2;
  --frame-border-color: #e1e7e9;
  --modal-close-icon: #111111;
  --modal-edit-icon-fill: #3e85f3;
  --modal-edit-icon-stroke: #ffffff;
  --fill-icon: rgba(52, 52, 52, 0.5);
  --border-statistics: #e3f3ff;
  --calendartable-border-color: rgba(220, 227, 229, 0.8);
  --reviews-border: rgba(17, 17, 17, 0.1);

  /* form */
  --input-bcg-color: #f7f7f7;
  --border-input: #ffffff2f;
  --modal-background-color: #ffffff;
  --modal-input-text-color: #616161;
  --modal-input-lable-color: #343434c5;
  --modal-border-color: 'none';
  --feedack-form-input: #f6f6f6;

  /* animation */
  --animation: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  /* backgroung button */
  --background-button-month: #cae8ff;
  --background-button-day: #e3f3ff;
  --background-button-day-add: #e3f3ff;

  /* calendar */
  --active-selection: #cae8ff;
  --input-text-color: #616161;
  --user-name-color: #343434;
  --calendar-bg-color: #e3f3ff;
  --calendar-border-color: rgba(220, 227, 229, 0.5);
  --background-feedback-form-btn-edit: #e3f3ff;
  --background-feedback-form-btn-delete: rgba(234, 61, 101, 0.2);
  --background-feedack-form-btn-action: #e5edfa;
}

[dark] {
  --tasks-back-color: rgba(247, 246, 249, 1);
  /* text */
  --active-btn-calendar-switch: rgba(255, 255, 255, 1);
  --noactive-btn-calendar-switch: rgba(62, 133, 243, 1);
  --title-text-main-color: #ffffff;
  --secondary-text-color: #ffffff;
  --accent-color: #ffffff;
  --inactive-btn-text-color: #ffffff;
  --active-selection: #3e85f3;
  --calendar-date-color: #ffffff;
  --calendar-day-color: rgba(250, 250, 250, 0.3);
  --task-field-text-color: #ffffff;
  --text-404: rgba(255, 255, 255, 1);
  --input-border-color: #ffffff26;
  --label-text-color: rgba(250, 250, 250, 0.3);
  --text-priority-high-color: #ffffff;
  --text-priority-other-color: #171820;
  --text-404: rgba(255, 255, 255, 1);
  --feedback-form-text-input: #ffffff;
  --feedback-form-text: rgba(250, 250, 250, 0.3);
  --title-sidebar: rgba(250, 250, 250, 0.3);
  --logo-text: #e3f3ff;
  --btn-border-color: rgba(255, 255, 255, 0.15);
  --btn-head-color: rgba(150, 150, 150, 0.7);
  /* backgroung */
  --calendar-bg-color: rgba(33, 34, 44, 1);
  --next-btn-calendar: rgba(255, 255, 255, 0.15);
  --outlet-background-color: #171820;
  --input-background-color: #171820;
  --main-background-color: #21222c;
  --sidebar-background-color: #13151a;
  --task-field-color: #171820;
  --active-btn-color: #2b78ef;
  --task-field-color: #171820;
  --auth-background-color: rgba(255, 255, 255, 0.15);
  /* form */
  --input-bcg-color: #171820;
  --border-input: #ffffff2f;
  --modal-background-color: #171820;
  --modal-input-text-color: #ffffff;
  --modal-input-lable-color: #fafafa52;
  --modal-border-color: rgba(255, 255, 255, 0.15);
  --feedack-form-input: #171820;

  /* tasks */
  --task-border-color: none;
  --task-field-color: #171820;

  /* other */
  --scroll-color: #2d3037;
  --scroll-background-color: #21222c;
  --frame-border-color: #42434c;
  --modal-close-icon: #ffffff;
  --modal-edit-icon-fill: #3e85f3;
  --modal-edit-icon-stroke: #ffffff;
  --fill-icon: #ffffff;
  --border-statistics: rgba(227, 243, 255, 0.15);
  --calendartable-border-color: rgba(255, 255, 255, 0.15);
  /* backgroung button */
  --background-button-month: #3e85f3;
  --background-button-day: #21222c;
  --reviews-border: #42434c;

  /* calendar */
  --input-text-color: #ffffff;
  --user-name-color: #ffffff;
  --calendar-bg-color: #21222c;
  --calendar-border-color: rgba(255, 255, 255, 0.15);
  --linear-gradient: rgba(0, 0, 0, 1);
  --task-body-linear-top: rgba(40, 40, 40, 1);
  --task-body-linear-bottom: rgba(0, 0, 0, 0.5);

  --background-button-day: rgba(33, 34, 44, 1);
  --background-button-day-add: #3e85f3;
  --background-feedback-form-btn-edit: #353647;
  --background-feedback-form-btn-delete: rgba(234, 61, 101, 0.2);
  --background-feedack-form-btn-action: #21222c;
}

 *, *::before, *::after {
  box-sizing: border-box;
 }
 
 body{
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    margin: 0;
    background-color: ${({ theme }) => theme.colors.primaryBackground};


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

::-webkit-scrollbar-track{
  background-color:  ${({ theme }) => theme.colors.modalReviewTextBg};
}
::-webkit-scrollbar-thumb{
  background-color: ${({ theme }) => theme.colors.scrollBg};
  border-radius: 15px;
}

`;
