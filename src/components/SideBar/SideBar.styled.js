import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const WrapperSideBar = styled.aside`
  background-color: ${({ theme }) => theme.colors.sideBar};
  padding: 24px 20px;
  max-width: 225px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: left 250ms cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
  top: 0;
  left: ${({ ['data-isopenmenu']: isOpenMenu }) => {
    if (isOpenMenu === 'true') {
      return '0';
    }
    return '-100vh';
  }};
  z-index: 200;

  @media screen and (min-width: 768px) {
    padding: 32px;
    max-width: 289px;
  }

  @media screen and (min-width: 1440px) {
    left: 0;
    border-bottom-right-radius: 10px;
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  backdrop-filter: blur(2px);
  z-index: 100;
`;

export const WrapperGosse = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 32px;
  }
`;

export const ImageGosse = styled.img`
  margin-right: 6px;

  @media screen and (min-width: 768px) {
    width: 60px;
  }

  @media screen and (min-width: 1440px) {
    width: 71px;
  }
`;

export const ButtonClose = styled.button`
  cursor: pointer;
  margin-left: 25px;
  background-color: transparent;
  display: flex;
  border: none;
  text-align: center;
  font-size: 24px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: ${({ theme }) => theme.colors.colorBtnClose};
  &:hover,
  :focus {
    color: #3e85f3;
  }

  @media screen and (min-width: 768px) {
    font-size: 31px;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.gooseColor};
  text-shadow:
    0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 137.5%;

  @media screen and (min-width: 768px) {
    line-height: 150%;
  }

  @media screen and (min-width: 1440px) {
    font-size: 24px;
    line-height: 100%;
  }
`;

export const Panel = styled.p`
  color: ${({ theme }) => theme.colors.modalReviewLabel};
  font-size: 12px;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`;

export const Item = styled.li``;

export const Link = styled(NavLink)`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.textNav};
  min-width: 185px;
  max-width: 100%;
  padding: 10px 0 10px 14px;

  font-size: 16px;
  font-family: var(--main-font);
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  gap: 8px;

  &.active {
    color: ${({ theme }) => theme.colors.activeTextColorBtn};
    background-color: ${({ theme }) => theme.colors.activeNavBackground};
    border-radius: 8px;
  }

  @media screen and (min-width: 768px) {
    gap: 10px;
    min-width: 225px;
    padding: 16px 0 16px 20px;
  }

  @media screen and (min-width: 1440px) {
    gap: 16px;
    min-width: 241px;
  }
`;

export const LogOut = styled.button`
  max-width: 131px;
  padding: 14px 28px;
  cursor: pointer;
  border: none; //* delate after transfer to the project (change to the NavLink)
  border-radius: 16px;
  background-color: #3e85f3;
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);

  color: #fff;
  font-family: var(--main-font);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 128.571%;
  letter-spacing: -0.28px;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  :focus {
    background-color: #2b78ef;
  }

  @media screen and (min-width: 768px) {
    max-width: 141px;
    font-size: 18px;
    line-height: 133.333%;
    padding: 18px 23px;
    gap: 11px;
  }
`;
