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
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 4px;
  padding-right: 8px;

  border: 1px solid ${({ theme }) => theme.colors.borderСalendarColor};
`;
export const DayNumberRegular = styled.p`
  width: 27px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: end;
  font-size: 12px;
  font-weight: 700;
  line-height: 1.16;

  color: ${({ theme }) => theme.colors.calendarTextColor};
`;

export const DayNumberToday = styled(DayNumberRegular)`
  background: ${({ theme }) => theme.colors.backgroundButton};
  color: ${({ theme }) => theme.colors.calendarActivNumber};
  border-radius: 6px;
`;

export const DayNumberInActive = styled(DayNumberRegular)`
  color: rgba(220, 227, 229, 0.5);
`;

export const TextWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  padding: 4px 5px;
  border-radius: 8px;
  width: 90%;
  margin: 2px;
  background: ${(props) => props.$priority === 'LOW' && '#CEEEFD'};
  background: ${(props) => props.$priority === 'MEDIUM' && '#FCF0D4'};
  background-color: ${(props) => props.$priority === 'HIGH' && '#FFD2DD'};

  @media screen and (min-width: 768px) {
    width: 95%;
    margin-right: 5px;
  }
`;

export const Text = styled.p`
  font-size: 10px;
  font-weight: 700;
  line-height: calc(14 / 10);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props) => props.$priority === 'LOW' && '#3E85F3'};
  color: ${(props) => props.$priority === 'MEDIUM' && '#F3B249'};
  color: ${(props) => props.$priority === 'HIGH' && '#EA3D65'};
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: calc(18 / 14);
  }
`;
