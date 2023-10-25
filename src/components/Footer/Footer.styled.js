import styled from 'styled-components';


const Container = styled.div`
margin-top: 24px;
height: 74px;
background-color: #DCEBF7;
display: flex;
justify-content: center;
text-align: center;
@media screen and (max-width: 767px) {
    height: 54px;
    margin-top: 16px;
      }
      @media screen and (min-width: 768px) and (max-width: 1399px) {
 
      }
      @media screen and (min-width: 1440px) {

      }
`
const Text = styled.h3`
margin-top: auto;
margin-bottom: auto;
/* font-family: inherit, sans-serif; */
text-align: center;
font-weight: 700;
font-size: 30px;
line-height: 32px;
color:  #3E85F3;
@media screen and (max-width: 590px) {
font-size: 16px;
line-height: 22px;
} 

@media screen and (min-width: 591px) and (max-width:  767px) {
    font-size: 24px;
line-height: 28px;
} 
`

const TeamBtn = styled.button`
border: none;
background: none;
margin: 0;
padding: 0;
font: inherit;
text-align: inherit;
cursor: pointer;
margin-left: 10px;
color: #111111B2;
font-family: 'Inter';
  font-weight: 600;
  line-height: 18px;
  font-size: 14px;
  position: relative;
  transition: border-color 0.3s box-shadow 0.3s transform 0.2s;

  font-size: 38px;
line-height: 42px;
    @media screen and (max-width: 590px) {
        font-size: 18px;
    line-height: 24px;
    margin-left: 5px;
    } 
    @media screen and (min-width: 591px) and (max-width:  767px) {
        font-size: 26px;
    line-height: 30px;
    margin-left: 5px;
    } 
  &:hover {
    box-shadow: 0 0 25px 10px #F0F7FC;
    background-color: #F0F7FC;
    border-radius: 16px;
  }
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color:  #111111B2;
  }

  &:active {
    transform: translateY(3px);
  }
`

export {Container, Text, TeamBtn}