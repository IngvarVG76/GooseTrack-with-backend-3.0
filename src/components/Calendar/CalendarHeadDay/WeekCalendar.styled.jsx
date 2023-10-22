import styled from 'styled-components';

export const DayHigherWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: space-around;
  padding: 14px 18px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.secondaryBackground};
  border: 1px solid ${({ theme }) => theme.colors.borderСalendarColor};
`;

export const DayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

export const WeekNames = styled.span`
  display: flex;
  flex-direction: column;
  gap: 10px;

  font-family: 'Inter';
  font-weight: 600;
  font-size: 16px;
  line-height: calc(18 / 16);
  color: ${({ theme }) => theme.colors.calendarTextColorToday};
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: calc(18 / 14);
  }
`;

export const WeekNumber = styled.button`
  font-weight: 700;
  font-size: 12px;
  line-height: calc(14 / 12);
  color: ${({ theme }) => theme.colors.calendarTextColor};

  padding: 4px 6px;
  border-radius: 8px;
  background-color: inherit;
  border: none;
  background-color: ${(props) =>
    props.$active && props.theme.colors.calendarActiveDay};
  color: ${(props) =>
    !props.$active ? props.theme.colors.calendarTextColor : ' #fff'};
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: calc(18 / 16);
  }
`;
