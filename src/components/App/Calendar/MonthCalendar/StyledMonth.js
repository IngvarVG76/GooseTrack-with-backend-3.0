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
    height: 645px;
  }
`;

export const Day = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;

  padding-top: 4px;
  padding-right: 8px;

  border: 1px solid ${({ theme }) => theme.colors.borderСalendarColor};
  span {
    width: 18px;
    height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: 'Inter';
    font-size: 12px;
    font-weight: 700;
    line-height: 1.16;

    color: ${({ theme }) => theme.colors.calendarTextColor};
  }
`;
export const DayToday = styled(Day)`
  span {
    color: #fff;
    background: ${({ theme }) => theme.colors.backgroundButton};
    border-radius: 6px;
  }
`;

export const DayInActive = styled(Day)`
  span {
    color: rgba(220, 227, 229, 0.5);
  }
`;
