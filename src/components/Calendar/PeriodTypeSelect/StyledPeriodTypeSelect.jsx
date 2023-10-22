import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const common = css`
  height: 34px;
  display: flex;
  width: 82px;
  align-items: center;
  justify-content: center;
  color: ${(props) => {
    return (props.theme.name === 'dark-theme') & props.$primary
      ? '#fff'
      : '#3e85f3';
  }};
  font-weight: 500;
  font-size: 14px;
  line-height: calc(18 / 14);
  border: none;
  background: ${({ theme }) => theme.colors.notActiveCalendarLinkColor};
  /* padding: 8px 16px 8px 16px; */
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
          background: ${(props) =>
            props.$primary && props.theme.colors.activeCalendarLinkColor};
          border-left: ${(props) => props.$primary && 'solid 1px #3e85f333;'};
          cursor: ${(props) => props.$primary && 'default;'};
        `;
      case 'month':
        return css`
          background: ${(props) =>
            props.$primary && props.theme.colors.activeCalendarLinkColor};
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

export const LinkWrapper= styled.div`
display:flex;
`