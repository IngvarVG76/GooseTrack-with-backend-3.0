import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 body{

  background: ${(props) => props.theme.colors.mainBackgroundColor};


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


.day {
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;

  padding-top: 4px;
  padding-right: 8px;
  border: 1px solid rgba(220, 227, 229, 0.8);
}

.today span {
  color: #fff;
  background: #3e85f3;
}

.weekNames {
  font-size: 16px;
  font-weight: 600;
  line-height: 1.13;
  text-transform: uppercase;
  color: #343434;
  cursor: default;
}

.inactiveDay {
  color: #9e9e9e;
}

.navIcon {
  width: 20px;
  height: 20px;
  padding: 8px;
  cursor: pointer;
}

.navIcon:hover {
  border-radius: 50%;
  background: #efefee;
}

.todayButton {
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  padding: 8px 16px;
  cursor: pointer;
  margin-right: 8px;
}

.todayButton:hover {
  background: #efefef;
}

.weekList {
  width: 1087px;
  height: 68px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  align-items: center;
  box-sizing: border-box;
  border: 1px solid grey;
  border-radius: 8px;
  list-style: none;
}
.dayOfWeek {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Inter';
  font-size: 16px;
  font-weight: 600;
  line-height: 1.13;

  color: #282626;
  cursor: default;
}

.weekNames {
  text-transform: uppercase;
}
.selectedDay {
  color: #fff;
  background: #3e85f3;
}

`;
