import styled from '@emotion/styled';

const FormContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  background-color: var(--white-color);
  border-radius: 16px;
  padding: 59px 20px 40px;

  @media screen and (max-width: 768px) {
    max-width: 335px;
    min-height: 150px;
  }
`;

const AvatarUploader = styled.div`
  position: absolute;
  top: -31px;
  width: 72px;
  height: 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

const AvatarPreview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: 2px solid var(--button-bgd-color);
  overflow: hidden;

  font-size: 8px;
  background-color: #f7f6f9;
`;

const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const AddAvatarBtn = styled.button`
  position: absolute;
  top: 62px;
  left: 43px;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: none;

  background-color: var(--button-bgd-color);
  color: var(--white-color);
`;

const InputFile = styled.input`
  display: none;
`;

const AvatarPlaceholder = styled.span`
  width: 35px;
  color: #dce3e5;
`;

const UserName = styled.h2`
  font-size: 14px;
  font-weight: 700;
  line-height: calc(18 / 14);

  margin-bottom: 4px;
`;

const UserText = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: calc(14 / 12);
  margin-bottom: 40px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  /* gap: 18px; */
  width: 100%;
  margin: 0 auto;
`;

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  width: 100%;
  font-size: 12px;
  font-weight: 400;
  line-height: calc(14 / 12);
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: ${(props) => (props.last ? 0 : '18px')};
  padding: 12px 14px;
  border: 1px solid #1111111a;
  border-radius: 8px;

  ::placeholder {
    font-size: 14px;
    font-weight: 400;
    line-height: calc(18 / 14);
    color: #dce3e5;
  }

  &:focus {
    outline: none;
    border-color: #111111;
  }
`;

const SaveBtn = styled.button`
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  padding: 10px 20px;

  background-color: var(--color-task-low-priority);
  color: #ffffff;
  border: none;
  border-radius: 16px;
  cursor: pointer;

  font-size: 14px;
  font-weight: 500;
  line-height: calc(18 / 14);

  @media screen and (max-width: 374px) {
    max-width: 195px;
  }

  @media screen and (min-width: 375px) { 
    width: 195px;
  }
`;

export {
  FormContainer,
  InputFile,
  AvatarUploader,
  AvatarPreview,
  AvatarImg,
  AddAvatarBtn,
  AvatarPlaceholder,
  UserName,
  UserText,
  Form,
  Label,
  Input,
  InputWrap,
  SaveBtn,
};
