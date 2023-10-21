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
  background-color: var(--color-task-low-priority);
  height: ${(props) => props.height}px;
`;

// @media screen and (max-width: 767px) {
//     padding-top: 256px;
//     padding-bottom: 256px;
//       }
//       @media screen and (min-width: 768px) and (max-width: 1399px) {
//         padding-top: 331px;
//         padding-bottom: 330px;
//       }
//       @media screen and (min-width: 1400px) {
//         padding-top: 187px;
//         padding-bottom: 200px;
//       }

const MainText = styled.h1`
  color: var(--white-color);
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
  @media screen and (min-width: 768px) and (max-width: 1399px) {
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
  color: var(--white-color);
  font-weight: 600;
  line-height: 18px;
  font-size: 14px;
  position: relative;

  @media screen and (max-width: 767px) {
    font-size: 12px;
    ine-height: 14px;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: var(--white-color);
  }
  transition: transform 0.2s;

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

  background-color: var(--white-color);
  border-radius: 16px;
  padding: 14px 22px;
  display: flex;
  column-gap: 6px;

  transition: transform 0.2s;

  &:active {
    transform: translateY(3px);
  }
`;
const BtnLoginText = styled.h2`
  font-family: inherit;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: var(--color-task-low-priority);
`;

const LogInIcon = styled(LuLogIn)`
  width: 18px;
  height: 18px;
  color: var(--color-task-low-priority);
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
