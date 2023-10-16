import styled from 'styled-components';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddIcon from '@mui/icons-material/Add';

import { Button } from '@mui/base';

export const WrapperTasks = styled.div`
  margin-top: 14px;
  max-height: 432px;
  border-radius: 8px;
  border: 1px;
  gap: 18px;
  padding: 14px 18px;
  background: ${({ theme }) => theme.colors.calendarBackground};
  border: 1px solid ${({ theme }) => theme.colors.borderСalendarColor};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0em;
  color: ${({ theme }) => theme.colors.calendarTextColor};
`;

export const ButtonMUI = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: none;
  padding: 12px 0;
  width: 100%;
  margin-top: 35px;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.colors.backgroundButton};
`;

export const IconAdd = styled(AddCircleOutlineIcon)`
  font-size: 22px !important;
  color: ${({ theme }) => theme.colors.calendarTextColor};
`;

export const ButtonPlus = styled.button`
  padding: 0;
  border: none;
  background-color: inherit;
`;

export const Text = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14);
  letter-spacing: 0em;
  color: ${({ theme }) => theme.colors.textButton};
`;

export const IconBtn = styled(AddIcon)`
  font-size: 14px !important;
  color: ${({ theme }) => theme.colors.textButton};
`;
