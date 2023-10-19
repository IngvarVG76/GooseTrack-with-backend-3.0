import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiMoon } from 'react-icons/fi';
import { BiSun } from 'react-icons/bi';
import {
  ButtonFeedback,
  ButtonMoon,
  Image,
  Name,
  Title,
  WrapperHeader,
  Wrapper,
  WrapperUser,
} from './Header.styled';
import { ModalComponent } from '../Modal/Modal';
import { FeedbackForm } from '../FeedbackForm/FeedbackForm';
import user from '../../images/mainLayout/user.jpg';
import { changeTheme } from '../../styles/Theme/themeSlice';
import { selectUser } from '../../redux/auth/selectors';

export const Header = ({ onClickModal, modal }) => {
  const dispatch = useDispatch();
  const [namePage, setNamePage] = useState('');
  const theme = useSelector((state) => state.theme.lightTheme);
  const userData = useSelector(selectUser);

  const handelThemeChange = () => {
    dispatch(changeTheme());
  };
  const { pathname } = useLocation();

  useEffect(() => {
    switch (pathname) {
      case '/account':
        return setNamePage('User Profile');
      case '/statistics':
        return setNamePage('Statistics');
      case '/calendar':
        return setNamePage('Calendar');

      default:
        break;
    }
  }, [pathname]);

  return (
    <>
      <WrapperHeader>
        <Title>{namePage}</Title>
        <Wrapper>
          <ButtonFeedback type="button" onClick={onClickModal}>
            Feedback
          </ButtonFeedback>
          <WrapperUser>
            <ButtonMoon onClick={handelThemeChange}>
              {!theme ? <BiSun /> : <FiMoon />}
            </ButtonMoon>
            <Name>{userData?.userName}</Name>
            <Image src={user} alt="Img User" loading="lazy" width="32" />
          </WrapperUser>
        </Wrapper>
      </WrapperHeader>
      {modal && (
        <ModalComponent onClose={onClickModal}>
          <FeedbackForm />
        </ModalComponent>
      )}
    </>
  );
};
