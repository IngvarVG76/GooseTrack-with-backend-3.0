import { styled } from 'styled-components';
const viewport = {
  mob: '@media screen and (max-width: 767px)',
  tab: '@media screen and (min-width: 768px)',
  desk: '@media screen and (min-width: 1440px)',
};
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0em;
  color: ${({ theme }) => theme.colors.calendarTextColor};
  @media screen and (min-width: 768px) {
    font-size: 20px;
    font-weight: 700;
    line-height: calc(24 / 20);
  }
`;

export const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
`;

export const IconPlus = styled.svg`
  width: 24px;
  height: 24px;
  fill: white;
  stroke: black;
  fill: ${({ theme }) => theme.colors.backgroundCalendar};
  stroke: ${({ theme }) => theme.colors.text};
  cursor: pointer;
`;
