import styled from '@emotion/styled';
import { BsFillPlusCircleFill } from "react-icons/bs" 

const FormContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  background-color: #ffffff;
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
  left: 50%;
  transform: translateX(-50%);
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
  border: 2px solid #3e85f3;
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

const AddAvatarBtn = styled(BsFillPlusCircleFill)`
  position: absolute;
  top: 62px;
  left: 43px;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 14px;
  height: 14px;
  border-radius: 100%;
  border: none;

  background-color: #ffffff;
  color: #3e85f3;
  font-size: 8px;
`;

const InputFile = styled.input`
  display: none;
`;

const AvatarPlaceholder = styled.span`
  width: 35px;
  color: #dce3e5;
`;

const UserName = styled.h2`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: calc(18 / 14);
  text-align: center;

  margin-bottom: 4px;
  margin-top: 0;
`;

const UserText = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  line-height: calc(14 / 12);

  margin-bottom: 40px;
  margin-top: 0;
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
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: calc(14 / 12);
`;

const Input = styled.input`
  /* width: 100%; */
  margin-bottom: ${(props) => (props.last ? 0 : '18px')};
  padding: 12px 14px;
  border: 1px solid #1111111a;
  border-radius: 8px;

  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14);
  color: #111111;

  ::placeholder {
    font-family: 'Inter', sans-serif;
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

  background-color: #3e85f3;
  color: #ffffff;
  border: none;
  border-radius: 16px;
  cursor: pointer;

  font-family: 'Inter', sans-serif;
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
