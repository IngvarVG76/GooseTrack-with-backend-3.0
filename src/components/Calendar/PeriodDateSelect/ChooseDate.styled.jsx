import styled from 'styled-components';

import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

export const StyledAiOutlineLeft = styled(AiOutlineLeft)`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.toolbarButtonArrowColor};
  &:hover {
    color: ${({ theme }) => theme.colors.activeArrowColor};
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;
export const StyledAiOutlineRight = styled(AiOutlineRight)`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.toolbarButtonArrowColor};
  &:hover {
    color: ${({ theme }) => theme.colors.activeArrowColor};
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const Controllers = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`;

export const Button = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.borderСalendarColor};
  background-color: ${({ theme }) => theme.colors.backgroundCalendar};
  padding: 7px 10px;
  cursor: pointer;

  &:hover svg {
    color: ${({ theme }) => theme.colors.toolbarButtonArrowColorHover};
  }

  @media screen and (min-width: 768px) {
    padding: 8px 10px;
  }
`;

export const ButtonBack = styled(Button)`
  border-radius: 8px 0px 0px 8px;
  border-right: ${(props) => props.$back && 'none; '};
`;
export const ButtonForward = styled(Button)`
  border-radius: 0px 8px 8px 0px;
`;

/* &:hover svg {
    color: ${({ theme }) => theme.colors.toolbarButtonArrowColorHover};
  } */
