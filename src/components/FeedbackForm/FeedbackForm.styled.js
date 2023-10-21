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
  color: ${({ theme }) => theme.colors.modalReviewLabel};

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
  color: ${({ theme }) => theme.colors.modalReviewLabel};
  margin-bottom: 16px;
  display: block;

  font-size: 12px;
  font-weight: 500;
  line-height: 116.667%;
`;

export const TextArea = styled.textarea`
  border-radius: 8px;
  background: ${({ theme }) =>
    theme.name === 'dark-theme' ? 'transparent' : '#F6F6F6'};
  padding: 12px 14px;
  width: 295px;
  height: 130px;
  max-width: 100%;
  resize: none;
  border: ${({ ['data-error']: error, theme }) => {
    if (error) {
      return '1px solid red';
    } else if (theme.name === 'dark-theme') {
      return '1px solid rgba(255, 255, 255, 0.15)';
    }
    return 'none';
  }};
  outline: none;

  &::placeholder {
    color: ${({ theme }) => (theme.name !== 'dark-theme' ? '#343434' : '#FFF')};
  }
  color: ${({ theme }) => (theme.name !== 'dark-theme' ? '#343434' : '#FFF')};
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
  font-family: var(--main-font);
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

  color: ${({ theme }) => (theme.name === 'dark-theme' ? '#fff' : '#343434')};
  font-family: var(--main-font);
  border-radius: 8px;
  background: ${({ theme }) =>
    theme.name === 'dark-theme' ? '#21222C' : '#e5edfa'};
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
  background: ${({ ['data-edit']: edit, theme }) => {
    if (edit === 'true') {
      return '#3E85F3';
    } else if (theme.name === 'dark-theme') {
      return '#353647';
    }
    return '#e3f3ff';
  }};
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
