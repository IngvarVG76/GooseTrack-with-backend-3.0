import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LuLogIn } from 'react-icons/lu';


const GooseImg = styled.img`
  width: 150px;
  height: 149px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media screen and (max-width: 767px) {
    width: 142px;
    height: 142px;
  }
`;
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #3E85F3;
  height: ${(props) => props.height}px;
`;


const MainText = styled.h1`
  color: #FFFFFF;
  font-style: italic;
  font-weight: 700;
  font-size: 120px;
  line-height: 150px;
  margin-bottom: 40px;

  @media screen and (max-width: 767px) {
    font-size: 44px;
    line-height: 48px;
    margin-bottom: 32px;
  }
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    font-size: 100px;
    line-height: 130px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 16px;
  align-items: center;

  @media screen and (max-width: 767px) {
    flex-direction: column-reverse;
    row-gap: 16px;
  }
`;
const BtnSignUp = styled(Link)`
  color: #FFFFFF;
  font-weight: 600;
  line-height: 18px;
  font-size: 14px;
  position: relative;
  transition: border-color 0.3s, box-shadow 0.3s transform 0.2s; 
  @media screen and (max-width: 767px) {
    font-size: 12px;
    ine-height: 14px;
  }
  &:hover {
    border-color: #0056b3; 
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    border-radius: 16px;
    background-color: #6FA2FF
  }
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: #FFFFFF;
  }

  &:active {
    transform: translateY(3px);
  }
`;

const BtnLogIn = styled(Link)`
  border: none;
  background: none;
  margin: 0;
  padding: 0;
  font: inherit;
  color: inherit;
  text-align: inherit;
  cursor: pointer;
  background-color: #FFFFFF;
  border-radius: 16px;
  padding: 14px 22px;
  display: flex;
  column-gap: 6px;

  transition: transform 0.2s;

  &:active {
    transform: translateY(3px);
  }
  &:hover {
    border-color: #0056b3; 
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  }
`;
const BtnLoginText = styled.h2`
  font-family: inherit;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #3E85F3;
`;

const LogInIcon = styled(LuLogIn)`
  width: 18px;
  height: 18px;
  color: #3E85F3;
`;

export {
  GooseImg,
  HeaderContainer,
  MainText,
  ButtonContainer,
  BtnSignUp,
  BtnLogIn,
  LogInIcon,
  BtnLoginText,
};
