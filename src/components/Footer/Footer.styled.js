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
font-family: inherit sans-serif;
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
const Team = styled.span`
font-family: inherit sans-serif;
font-style: italic;
text-align: center;
font-weight: 700;
font-size: 38px;
line-height: 42px;
color: #111111B2;

@media screen and (max-width: 590px) {
    font-size: 18px;
line-height: 24px;
} 
@media screen and (min-width: 591px) and (max-width:  767px) {
    font-size: 26px;
line-height: 30px;
} 
`

export {Container, Text, Team}