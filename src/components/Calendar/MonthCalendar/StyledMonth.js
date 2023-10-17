import styled from 'styled-components';

export const CalendarContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(7, 6fr);
  background: ${({ theme }) => theme.colors.backgroundCalendar};
  border: 1px solid ${({ theme }) => theme.colors.borderСalendarColor};
  border-radius: 8px;

  @media screen and (min-width: 375px) {
    width: 335px;
    height: 470px;
  }

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 720px;
  }

  @media screen and (min-width: 1440px) {
    width: 1087px;
    height: 625px;
  }
`;

export const Day = styled.div`
  cursor: pointer;

  display: flex;
  flex-direction: column;
  padding-top: 4px;
  padding-right: 8px;

  border: 1px solid ${({ theme }) => theme.colors.borderСalendarColor};
`;
export const DayNumberRegular = styled.p`
  width: 18px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: end;

  font-family: 'Inter';
  font-size: 12px;
  font-weight: 700;
  line-height: 1.16;

  color: ${({ theme }) => theme.colors.calendarTextColor};
`;

export const DayNumberToday = styled(DayNumberRegular)`
  background: ${({ theme }) => theme.colors.backgroundButton};
  color: ${({ theme }) => theme.colors.calendarTextColorToday};
  border-radius: 6px;
`;

export const DayNumberInActive = styled(DayNumberRegular)`
  color: rgba(220, 227, 229, 0.5);
`;

export const StyledWeekNames = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: calc(18 / 16);
  color: #343434;
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
