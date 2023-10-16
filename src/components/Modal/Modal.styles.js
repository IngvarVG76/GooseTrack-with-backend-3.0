import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  backdrop-filter: blur(2px);
  z-index: 1200;
`;

export const Modal = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.formaBackground};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.borderСalendarColor};

  box-shadow: 0px 4px 57px 0px rgba(17, 17, 17, 0.05);
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  display: flex;
  justify-content: center;
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  font-size: 24px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: ${({ theme }) => (theme.name === 'dark-theme' ? '#fff' : '#111')};
  &:hover,
  :focus {
    color: #3e85f3;
  }
`;
