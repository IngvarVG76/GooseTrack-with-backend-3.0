import { styled } from 'styled-components';

const viewport = {
  mob: '@media screen and (max-width: 767px)',
};

export const WeekNames = styled.li`
  list-style: none;
  text-transform: uppercase;
  text-align: center;

  &:nth-last-of-type(-n + 2) {
    color: #3e85f3;
  }
`;

export const WeekNamesContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  padding: 10px 0 10px 0;
  margin: 0 0 14px;
  border-radius: 8px;
  @media screen and (min-width: 1440px) {
    margin-top: 8px;
  }
`;

export const ContainerWeekDay = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14);
  margin-bottom: 4px;

  ${viewport.mob} {
    font-size: 16px;
    line-height: calc(16 / 16);
  }
`;

export const ContainerDateCell = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: calc(18 / 16);
`;

export const WeekDayNum = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 27px;
  height: 22px;
  border-radius: 8px;
`;
