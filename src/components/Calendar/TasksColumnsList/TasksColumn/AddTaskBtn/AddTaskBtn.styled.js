import { styled } from 'styled-components';
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: none;
  padding: 12px 0;
  width: 100%;
  margin-top: 35px;
  margin-bottom: 20px;
  border: ${({ theme }) => theme.colors.borderdAddBtn};
  background-color: ${({ theme }) => theme.colors.backgraundAddBtn};
`;

export const Span = styled.span`
  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14);
  letter-spacing: 0em;
  color: ${({ theme }) => theme.colors.colorAddBtn};
`;
export const Icon = styled.svg`
  width: 20px;
  height: 20px;
  stroke: ${({ theme }) => theme.colors.calendarTextColor};
`;
