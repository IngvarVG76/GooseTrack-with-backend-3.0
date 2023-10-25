import { Box } from '@mui/material';
import styled from 'styled-components';

export const StyledBoxModalLoader = styled(Box)`
  position: absolute;
  top: 50%;
  right: 50%;
`;
export const StyledBoxTextLoader = styled(Box)`
  display: 'flex';
  justify-content: 'center';
`;

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

  transition: var(--animation);
  &:hover,
  :focus {
    opacity: 0.5;
  }
  cursor: pointer;
`;

export const DayNumberToday = styled(DayNumberRegular)`
  background: ${({ theme }) => theme.colors.backgroundButton};
  color: ${({ theme }) => theme.colors.calendarActivNumber};
  border-radius: 6px;
  transition: var(--animation);
  &:hover,
  :focus {
    opacity: 0.5;
  }
  cursor: pointer;
`;

export const DayNumberInActive = styled(DayNumberRegular)`
  color: rgba(220, 227, 229, 0.5);
  transition: var(--animation);
  &:hover,
  :focus {
    opacity: 0.5;
  }
  cursor: pointer;
`;

export const Wrapper = styled.div`
  position: absolute;
  bottom: 5px;
  width: 100%;
  height: 50%;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 7px;
  }
`;

export const TextWrapper = styled.div`
  margin: 0 2px;
  padding: 4px 5px;
  border-radius: 8px;
  margin-bottom: 2px;
  background: ${(props) => props.$priority === 'LOW' && '#CEEEFD'};
  background: ${(props) => props.$priority === 'MEDIUM' && '#FCF0D4'};
  background-color: ${(props) => props.$priority === 'HIGH' && '#FFD2DD'};

  transition: var(--animation);
  &:hover,
  :focus {
    opacity: 0.5;
  }
  cursor: pointer;
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
