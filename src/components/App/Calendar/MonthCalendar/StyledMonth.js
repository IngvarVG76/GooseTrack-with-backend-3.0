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
  }
`;
export const DayToday = styled(Day)`
  span {
    color: #fff;
    background: #3e85f3;
  }
`;
export const DayWeekend = styled(Day)`
  span {
    color: blue;
  }
`;
export const DayInActive = styled(Day)`
  span {
    color: grey;
  }
`;

export const DayNumber = styled.span`
  height: 26px;
  width: 27px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 700;
  font-size: 16px;
  border-radius: 8px;
`;
