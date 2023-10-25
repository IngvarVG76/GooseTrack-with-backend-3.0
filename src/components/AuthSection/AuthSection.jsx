import {
  GooseImg,
  HeaderContainer,
  MainText,
  ButtonContainer,
  BtnSignUp,
  BtnLogIn,
  LogInIcon,
  BtnLoginText,
  MainSpan,
} from './AuthSection.styled';
import gooseDesk from '../../images/main-goose/Desk_mainGoose.png';
import gooseDeskTwoX from '../../images/main-goose/Desk@2x_mainGoose.png';
import gooseDeskThreeX from '../../images/main-goose/Desk@3x_mainGoose.png';
import gooseTab from '../../images/main-goose/Tab_mainGoose.png';
import gooseTabTwoX from '../../images/main-goose/Tab@2x_mainGoose.png';
import gooseTabThreeX from '../../images/main-goose/Tab@3x_mainGoose.png';
import gooseMob from '../../images/main-goose/Mob_mainGoose.png';
import gooseMobTwoX from '../../images/main-goose/Mob@2x_mainGoose.png';
import gooseMobThreeX from '../../images/main-goose/Mob@3x_mainGoose.png';
import { useState, useEffect } from 'react';

export const AuthSection = () => {
  const [screenWidthPx, setScreenWidthPx] = useState(window.innerWidth);
  const [screenRatio, setScreenRatio] = useState(window.devicePixelRatio);
  const [suitableImage, setSuitableImage] = useState(gooseDesk);

  useEffect(() => {
    if (screenWidthPx <= 767) {
      if (screenRatio == 1) {
        setSuitableImage(gooseMob);
      } else if (screenRatio == 2) {
        setSuitableImage(gooseMobTwoX);
      } else {
        setSuitableImage(gooseMobThreeX);
      }
    } else if (screenWidthPx >= 768 && screenWidthPx <= 1399) {
      if (screenRatio == 1) {
        setSuitableImage(gooseTab);
      } else if (screenRatio == 2) {
        setSuitableImage(gooseTabTwoX);
      } else {
        setSuitableImage(gooseTabThreeX);
      }
    } else {
      if (screenRatio == 1) {
        setSuitableImage(gooseDesk);
      } else if (screenRatio == 2) {
        setSuitableImage(gooseDeskTwoX);
      } else {
        setSuitableImage(gooseDeskThreeX);
      }
    }

    const changeScreen = () => {
      setScreenWidthPx(window.innerWidth);
      setScreenRatio(window.devicePixelRatio);
    };
    window.addEventListener('resize', changeScreen);

    return () => {
      window.removeEventListener('resize', changeScreen);
    };
  }, [screenWidthPx, screenRatio]);

  return (
    <>
      <HeaderContainer height={window.innerHeight}>
        <GooseImg src={suitableImage} alt="main-Goose" />
        <MainText>
          G<MainSpan>oo</MainSpan>seTrack
        </MainText>
        <ButtonContainer>
          <BtnSignUp to="/register">Sign up</BtnSignUp>
          <BtnLogIn to="/login">
            <BtnLoginText>Log in</BtnLoginText>
            <LogInIcon />
          </BtnLogIn>
        </ButtonContainer>
      </HeaderContainer>
    </>
  );
};
