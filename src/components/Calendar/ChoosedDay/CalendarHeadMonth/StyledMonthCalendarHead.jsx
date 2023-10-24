import styled from 'styled-components';

export const StyledWeekNames = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: calc(18 / 16);
  color: ${({ theme }) => theme.colors.calendarTextColor};
  text-transform: uppercase;
  &:nth-child(6n),
  &:nth-child(7n) {
    color: #3e85f3;
  }
`;

export const WrapperWeek = styled.div`
  width: 100vw;
  height: 50px;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(7, 6fr);
  margin-bottom: 14px;

  background: ${({ theme }) => theme.colors.backgroundCalendar};
  border: 1px solid ${({ theme }) => theme.colors.borderСalendarColor};
  border-radius: 8px;

  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 46px;
    margin-bottom: 18px;
  }

  @media screen and (min-width: 1440px) {
    width: 1087px;
    margin-bottom: 15px;
  }
`;
