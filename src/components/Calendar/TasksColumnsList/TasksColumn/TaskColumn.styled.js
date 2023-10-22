import { styled } from 'styled-components';

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 14px;
  padding-top: 18px;
  padding-right: 18px;
  padding-bottom: 10px;
  min-width: 335px;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.backgroundCalendar};
  border: 1px solid ${({ theme }) => theme.colors.calendarBackground};
  @media screen and (min-width: 768px) {
    min-width: 344px;
  }

  min-height: 165px;

  @media screen and (min-width: 1440px) {
    min-width: 344px;
  }
`;
