import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 29px;
  width: 335px;
  max-width: 100%;

  @media screen and (min-width: 768px) {
    padding: 32px;
    width: 468px;
  }
`;

export const Title = styled.p`
  color: rgba(52, 52, 52, 0.8);

  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 116.667%;
  margin-bottom: 8px;
`;

export const Form = styled.form`
  position: relative;
  margin-top: 32px;
`;

export const Span = styled.span`
  color: rgba(52, 52, 52, 0.8);
  margin-bottom: 16px;
  display: block;

  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  line-height: 116.667%;
`;

export const TextArea = styled.textarea`
  border-radius: 8px;
  background: #f6f6f6;
  padding: 12px 14px;
  width: 295px;
  height: 130px;
  max-width: 100%;
  resize: none;
  border: ${({ ['data-error']: error }) => {
    return error ? '1px solid red' : 'none';
  }};
  outline: none;

  color: #343434;
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 128.571%;

  @media screen and (min-width: 768px) {
    padding: 14px;
    width: 404px;
  }
`;

export const ErrorText = styled.p`
  color: #da1414;
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 116.667%;
`;

export const WrapperButton = styled.div`
  margin-top: 14px;

  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ButtonSave = styled.button`
  cursor: pointer;
  width: 144px;
  max-width: 100%;
  display: flex;
  justify-content: center;
  padding: 13px 0 13px 0;
  border: none;

  color: #fff;
  border-radius: 8px;
  background: #3e85f3;

  @media screen and (min-width: 768px) {
    width: 198px;
  }
`;

export const ButtonCancel = styled.button`
  cursor: pointer;
  width: 144px;
  max-width: 100%;
  display: flex;
  justify-content: center;
  padding: 13px 0 13px 0;
  border: none;

  color: #343434;
  border-radius: 8px;
  background: #e5edfa;
  @media screen and (min-width: 768px) {
    width: 198px;
  }
`;

export const WrapperButtonEdit = styled.div`
  position: absolute;
  top: -16px;
  right: 0;

  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ButtonEdit = styled.button`
  cursor: pointer;
  color: ${({ ['data-edit']: edit }) => (edit === 'true' ? '#fff' : '#3e85f3')};
  padding: 10px;
  border-radius: 50px;
  background: ${({ ['data-edit']: edit }) =>
    edit === 'true' ? '#3E85F3' : '#e3f3ff'};
  display: flex;
  border: none;
  font-size: 16px;
`;

export const ButtonDelete = styled.button`
  cursor: pointer;
  color: #ea3d65;
  padding: 10px;
  border-radius: 50px;
  background: rgba(234, 61, 101, 0.2);
  display: flex;
  border: none;
  font-size: 16px;
`;
