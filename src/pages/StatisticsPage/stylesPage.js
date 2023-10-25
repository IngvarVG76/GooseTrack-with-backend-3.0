import styled from 'styled-components';

export const WrapperPage = styled.div`
  background: ${({ theme }) => theme.colors.secondaryBackground};
  border-radius: 16px;
  padding-top: 28px;
  padding-left: 14px;
  padding-right: 14px;
  padding-bottom: 135px;
  width: 100vw;
  @media (min-width: 375px) {
    max-width: 335px;
  }
  @media (min-width: 768px) {
    max-width: 704px;
    padding-top: 132px;
    padding-bottom: 224px;
    padding-left: 32px;
    padding-right: 32px;
  }
  @media (min-width: 1440px) {
    max-width: 1087px;
    padding-top: 134px;
    padding-bottom: 104px;
    padding-left: 113px;
    padding-right: 113px;
  }
`;

export const LegendWrapp = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 20px;
  @media (min-width: 768px) {
    gap: 20px;
    margin-top: 0;
    margin-right: 32px;
  }
  @media (min-width: 1440px) {
    gap: 20px;
    margin-top: 0;
    margin-right: 32px;
  }
`;

export const Legend = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.calendarTextColor};
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
  @media (min-width: 768px) {
    font-size: 16px;
  }
  @media (min-width: 1440px) {
    font-size: 16px;
  }
`;

export const BarComponents = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding-left: 32px;
  }
`;
