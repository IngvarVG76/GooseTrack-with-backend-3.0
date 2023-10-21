import styled from 'styled-components';

export const WrapperPage = styled.div`
  background: ${({ theme }) => theme.colors.secondaryBackground};
  border-radius: 16px;
  padding-top: 28px;
  padding-left: 14px;
  padding-right: 14px;
  margin-left: auto;
  margin-right: auto;
`;

export const LegendWrapp = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 20px;
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
`;
