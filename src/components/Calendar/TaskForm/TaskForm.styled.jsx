import styled from 'styled-components';
import { Field } from 'formik';

export const FormContainer = styled.div`
  position: relative;
  width: 303px;
  padding: 48px 18px 40px;
  border-radius: 8px;
  border: ${({ theme }) => theme.colors.borderCalendar};
  background-color: ${({ theme }) => theme.colors.backgrouTaskModalndColor};
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);
  border: 0px solid rgba(255, 255, 255, 0.15);
  @media screen and (min-width: 768px) {
    width: 396px;
    padding: 40px 28px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const CloseIcon = styled.svg`
  width: 24px;
  height: 24px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: ${({ theme }) => theme.colors.modalReviewLabel};
  font-family: 'Inter';
  font-size: 12px;
  line-height: calc(14 / 12);
`;

export const TitleField = styled(Field)`
  width: 267px;
  height: 42px;
  flex-shrink: 0;
  padding: 12px 14px;
  margin-bottom: 16px;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.colors.borderСalendarColor};
  background-color: ${({ theme }) => theme.colors.backgroundTaskFormInput};
  color: ${({ theme }) => theme.colors.calendarTextColor};
  font-family: 'Inter';
  font-size: 14px;
  line-height: calc(18 / 14);
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 340px;
    height: 46px;
    padding: 14px 18px;
    margin-bottom: 18px;
  }
  &::placeholder {
    opacity: 1;
    color: ${({ theme }) => theme.colors.calendarTextColor};
    font-size: 14px;
    font-family: 'Inter';
    line-height: calc(18 / 14);
  }
`;

export const FieldContainer = styled.div`
  display: flex;
  gap: 14px;
`;

export const TimeField = styled(Field)`
  width: 126px;
  height: 42px;
  flex-shrink: 0;
  padding: 12px 14px;
  margin-bottom: 16px;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.colors.borderСalendarColor};
  background-color: ${({ theme }) => theme.colors.backgroundTaskFormInput};
  color: ${({ theme }) => theme.colors.calendarTextColor};
  font-family: 'Inter';
  font-size: 14px;
  line-height: calc(18 / 14);
  &::-webkit-calendar-picker-indicator {
    opacity: 0;
    cursor: pointer;
    width: 35px;
  }
  @media screen and (min-width: 768px) {
    width: 163px;
    height: 46px;
    padding: 14px 18px;
    margin-bottom: 32px;
    &::-webkit-calendar-picker-indicator {
      width: 60px;
    }
  }
`;

export const PriorityContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 32px;
`;

export const PriorityLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${({ theme }) => theme.colors.calendarTextColor};
  font-family: 'Inter';
  font-size: 12px;
  line-height: calc(14 / 12);
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: calc(18 / 14);
  }
`;

export const PriorityField = styled(Field)`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
`;

export const Blue = styled.svg`
  width: 12px;
  height: 12px;
`;

export const BlueLine = styled.svg`
  width: 12px;
  height: 12px;
`;

export const Orange = styled.svg`
  width: 12px;
  height: 12px;
`;

export const OrangeLine = styled.svg`
  width: 12px;
  height: 12px;
`;

export const Red = styled.svg`
  width: 12px;
  height: 12px;
`;

export const RedLine = styled.svg`
  width: 12px;
  height: 12px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 14px;
`;

export const ActionButton = styled.button`
  display: flex;
  width: 135px;
  height: 42px;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: none;
  background: #3e85f3;
  color: #fff;
  text-align: center;
  font-family: 'Inter';
  font-size: 14px;
  line-height: calc(18 / 14);

  transition: background-color 250ms linear;

  &:hover,
  &:focus {
    background-color: #2b78ef;
  }

  @media screen and (min-width: 768px) {
    width: 182px;
    height: 48px;
    padding: 10px 20px;
  }
`;

export const AddIcon = styled.svg`
  width: 20px;
  height: 20px;
`;

export const EditIcon = styled.svg`
  width: 18px;
  height: 18px;
`;

export const CancelButton = styled.button`
  width: 118px;
  height: 42px;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: none;
  background: #efefef;
  color: #111;
  text-align: center;
  font-family: 'Inter';
  font-size: 14px;
  line-height: calc(18 / 14);

  transition: background-color 250ms linear;

  &:hover,
  &:focus {
    background-color: #e7e3e3;
  }

  @media screen and (min-width: 768px) {
    width: 144px;
    height: 48px;
  }
`;
