import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiMoon } from 'react-icons/fi';
import { BiSun } from 'react-icons/bi';
import GooseCalendarImg from '../../assets/GooseCalendarImg.png';
import {
  ButtonFeedback,
  ButtonMoon,
  Image,
  Name,
  Title,
  WrapperHeader,
  Wrapper,
  WrapperUser,
  AvatarPlaceholder,
  TitleWrapper,
  StyledSlogan,
} from './Header.styled';
import { ModalComponent } from '../Modal/Modal';
import { FeedbackForm } from '../FeedbackForm/FeedbackForm';
import { changeTheme } from '../../styles/Theme/themeSlice';
import { selectUser } from '../../redux/auth/selectors';

export const Header = ({ onClickModal, modal }) => {
  const dispatch = useDispatch();
  const [namePage, setNamePage] = useState('');
  const theme = useSelector((state) => state.theme.lightTheme);
  const userData = useSelector(selectUser);
  const { pathname } = useLocation();

  useEffect(() => {
    switch (pathname) {
      case '/account':
        return setNamePage('User Profile');
      case '/statistics':
        return setNamePage('Statistics');
      // case '/calendar':
      //   return setNamePage('Calendar');

      default:
        setNamePage('Calendar');
        break;
    }
  }, [pathname]);

  const handelThemeChange = () => {
    dispatch(changeTheme());
  };

  return (
    <>
      <WrapperHeader>
        {pathname.includes('/day') ? (
          <TitleWrapper>
            <img src={GooseCalendarImg} alt="company logo" />
            <div>
              <Title>Calendar</Title>

              <StyledSlogan>
                <span>Let go</span> of the past and focus on the present!
              </StyledSlogan>
            </div>
          </TitleWrapper>
        ) : (
          <Title>{namePage}</Title>
        )}

        <Wrapper>
          <ButtonFeedback type="button" onClick={onClickModal}>
            Feedback
          </ButtonFeedback>
          <WrapperUser>
            <ButtonMoon onClick={handelThemeChange}>
              {!theme ? <BiSun /> : <FiMoon />}
            </ButtonMoon>
            <Name>{userData?.userName}</Name>
            <Image>
              {userData?.avatarURL ? (
                <img
                  src={userData?.avatarURL}
                  alt="Img User"
                  loading="lazy"
                  width="32"
                />
              ) : (
                <AvatarPlaceholder />
              )}
            </Image>
          </WrapperUser>
        </Wrapper>
      </WrapperHeader>
      {modal && (
        <ModalComponent onClose={onClickModal}>
          <FeedbackForm modal={modal} onClickModal={onClickModal} />
        </ModalComponent>
      )}
    </>
  );
};
