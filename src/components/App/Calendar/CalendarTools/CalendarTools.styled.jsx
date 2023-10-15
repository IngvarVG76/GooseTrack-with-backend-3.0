import styled, { css } from 'styled-components';

const commonButton = css`
  color: #3e85f3;
  font-weight: 500;
  font-size: 14;
  line-height: calc(18 / 14);
  border: none;
  background-color: #e3f3ff;
  padding: 8px 16px 8px 16px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const Button = styled.button`
  ${commonButton}
  ${props => {
    switch (props.$active) {
      case 'day':
        return css`
          border-radius: 0px 8px 8px 0px;
          background: ${props => props.$primary && '#3E85F333'};
          border-left: ${props => props.$primary && 'solid 1px #3e85f333;'};
          cursor: ${props => props.$primary && 'default;'};
        `;
      case 'month':
        return css`
          border-radius: 8px 0px 0px 8px;
          background: ${props => props.$primary && '#3E85F333'};
          border-right: ${props => props.$primary && 'solid 1px #3e85f333;'};
          cursor: ${props => props.$primary && 'default;'};
        `;
      default:
        return css`
          ${commonButton}
        `;
    }
  }}
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 82px;
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
    /* width: 1087px; */
  }
`;
