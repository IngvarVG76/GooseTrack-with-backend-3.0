import styled from 'styled-components';

export const ChartContainer = styled.div`
  margin: 0 auto;
  width: auto;
  border-radius: 20px;
  border: 0.8px solid #e3f3ff;
  border-color: ${({ theme }) => theme.colors.borderColor};
  padding-bottom: 40px;
  margin-top: 40px;
  padding-left: 14px;
  padding-right: 11px;
  @media (min-width: 768px) {
    border-radius: 29px;
    padding-bottom: 32px;
    padding-left: 32px;
    padding-right: 32px;
  }
  @media (min-width: 1440px) {
    padding-bottom: 40px;
    padding-left: 40px;
    padding-right: 40px;
  }
`;

export const Taskstitle = styled.h3`
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textColorTasksChart};
  margin-bottom: 30px;
  margin-top: 40px;
  line-height: 1.5;
  @media (min-width: 768px) {
    margin-top: 32px;
  }
  @media (min-width: 1440px) {
    margin-top: 40px;
    margin-bottom: 24px;
  }
`;
