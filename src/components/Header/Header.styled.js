import styled from 'styled-components';
import { PiUserLight } from 'react-icons/pi';

export const WrapperHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  padding-bottom: 64px;
  @media screen and (min-width: 1440px) {
    padding-bottom: 33px;
    justify-content: space-between;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const WrapperUser = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 14px;
  }
`;

export const WrapperTitle = styled.div``;

export const Title = styled.h2`
  display: none;

  @media screen and (min-width: 1440px) {
    display: block;
    color: ${({ theme }) => (theme.name === 'dark-theme' ? '#fff' : '#111')};

    text-shadow:
      0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
      0px 47px 355px rgba(0, 0, 0, 0.07);
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
  }
`;

export const ButtonFeedback = styled.button`
  cursor: pointer;
  padding: 8px 20px;
  font-family: var(--main-font);
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.backgroundButton};
  border: none;

  color: ${({ theme }) => theme.colors.textButton};
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 133.333%;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  margin-right: 18px;

  &:hover,
  :focus {
    background-color: #2b78ef;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 128.571%;
    padding: 12px 32px;
    margin-right: 24px;
  }
`;

export const ButtonMoon = styled.button`
  font-size: 24px;
  color: #3e85f3;
  border: none;
  font-family: var(--main-font);
  background-color: transparent;

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

export const Name = styled.p`
  color: ${({ theme }) => (theme.name === 'dark-theme' ? '#fff' : '#343434')};
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 128.571%;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 100%;
  }
`;

export const Image = styled.div`
  border-radius: 32px;
  border: 1.8px solid #3e85f3;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
    border-radius: 44px;
  }
`;

export const AvatarPlaceholder = styled(PiUserLight)`
  width: 32px;
  height: 32px;
  color: ${({ theme }) => theme.colors.avatarPlaceholder};

  @media screen and (max-width: 767px) {
    width: 44px;
    height: 44px;
  }
`;
//--calendar/day title with img-----

export const TitleWrapper = styled.div`
  display: flex;
`;

export const StyledSlogan = styled.p`
  font-size: 14px;
  line-height: 1.3;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};

  span {
    color: #3e85f3;
  }
`;
