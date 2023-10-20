import styled from 'styled-components';

export const Content = styled.div`
  background: ${({ theme }) => theme.colors.primaryBackground};
  height: 100vh;
  position: relative;
  width: 375px;
  margin: 0 auto;
  padding: 24px 20px 0 28px;
  display: flex;
  justify-content: flex-end;

  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-left: 0;
  }
`;

export const HeaderContainer = styled.header``;

export const Main = styled.main`
  @media screen and (min-width: 1440px) {
    width: 79.5%;
    padding-left: 32px;
  }
`;

export const OpenMenu = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  font-size: 24px;
  font-family: var(--main-font);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
  top: 28px;
  left: 20px;
  color: ${({ theme }) => theme.colors.arrowColor};

  &:hover,
  :focus {
    color: #3e85f3;
  }

  @media screen and (min-width: 768px) {
    font-size: 34px;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;
