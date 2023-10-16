import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const common = css`
  color: #3e85f3;
  font-weight: 500;
  font-size: 14;
  line-height: calc(18 / 14);
  border: none;
  background-color: #e3f3ff;
  padding: 8px 16px 8px 16px;
  cursor: pointer;
  border-radius: ${(props) =>
    props.$borderSide ? '8px 0px 0px 8px' : '0px 8px 8px 0px'};
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const StyledLink = styled(Link)`
  ${common}
  ${(props) => {
    switch (props.$active) {
      case 'day':
        return css`
          background: ${(props) => props.$primary && '#3E85F333'};
          border-left: ${(props) => props.$primary && 'solid 1px #3e85f333;'};
          cursor: ${(props) => props.$primary && 'default;'};
        `;
      case 'month':
        return css`
          background: ${(props) => props.$primary && '#3E85F333'};
          border-right: ${(props) => props.$primary && 'solid 1px #3e85f333;'};
          cursor: ${(props) => props.$primary && 'default;'};
        `;
      default:
        return css`
          ${common}
        `;
    }
  }}
`;
