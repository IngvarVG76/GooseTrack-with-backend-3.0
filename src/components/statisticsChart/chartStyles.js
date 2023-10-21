import styled from 'styled-components';

export const ChartContainer = styled.div`
  margin: 0 auto;
  width: auto;
  border-radius: 20px;
  border: 0.8px solid #e3f3ff;
  border-color: ${({ theme }) => theme.colors.borderColor};
  padding-bottom: 40px;
  margin-top: 40px;
`;

export const Taskstitle = styled.h3`
  margin-left: 14px;
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textColorTasksChart};
  margin-bottom: 30px;
  margin-top: 40px;
  line-height: 1.5;
`;
