import styled from 'styled-components';


const Container = styled.div`
  margin-top: 24px;
  height: 74px;
  background-color: #DCEBF7;
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
  min-width: 320px;
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
  text-align: center;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color:  ${({ theme }) => theme.colors.textColorLowTask};;
@media screen and (max-width: 590px) {
  font-size: 10px;
} 

@media screen and (min-width: 591px) and (max-width:  767px) {
font-size: 12px;
} 

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`

const TeamBtn = styled.a`
  transition: color var(--animation);
  text-decoration: underline;
  cursor: pointer;
  color: var(--task-high-color);


  &:hover {
   color: var(--title-text-main-color);
   text-decoration: underline;
  };

`;

export { Container, Text, TeamBtn }