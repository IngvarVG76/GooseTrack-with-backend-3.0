import styled, { css } from 'styled-components';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

export const StyledAiOutlineLeft = styled(AiOutlineLeft)`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.activeArrowColor};
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const StyledAiOutlineRight = styled(AiOutlineRight)`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.arrowColor};
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

export const CurrentMonth = styled.h3`
  font-weight: 700;
  font-size: 14px;
  line-height: calc(18 / 14);
  letter-spacing: 0em;
  color: #ffffff;
  background-color: #3e85f3;
  padding: 6px 12px 6px 12px;
  border-radius: 8px;
  margin: 0;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 8px 12px 8px 12px;
  }
`;

const commonButton = css`
  border: 1px solid ${({ theme }) => theme.colors.borderСalendarColor};
  background-color: ${({ theme }) => theme.colors.backgroundCalendar};
  padding: 7px 10px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    padding: 8px 10px;
  }
`;

export const Button = styled.button`
  ${commonButton}
  ${(props) => {
    switch (props.$direction) {
      case 'back':
        return css`
          border-radius: 8px 0px 0px 8px;
          border-right: ${(props) => props.$back && 'none; '};
        `;
      case 'forward':
        return css`
          border-radius: 0px 8px 8px 0px;
        `;
      default:
        return css`
          ${commonButton}
        `;
    }
  }}
`;
