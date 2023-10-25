import styled from 'styled-components';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { PiUserLight } from 'react-icons/pi';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';
import DatePicker from 'react-datepicker';

const FormContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  border-radius: 16px;
  padding: 59px 20px 40px;

  @media screen and (max-width: 374px) {
    max-width: 335px;
  }

  @media screen and (max-width: 767px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 704px;
    padding: 40px 175px;
  }

  @media screen and (min-width: 1440px) {
    width: 1087px;
    padding: 60px 164px;
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

  @media screen and (min-width: 768px) {
    position: relative;
    transform: none;
    top: 0;
    left: 0;
    width: 124px;
    height: 124px;

    margin-bottom: 20px;
  }
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
  background-color: ${({ theme }) => theme.colors.avatarBgColor};

  @media screen and (min-width: 768px) {
    width: 124px;
    height: 124px;
  }
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
  /* display: flex;
  justify-content: center;
  align-items: center; */

  width: 14px;
  height: 14px;
  border-radius: 100%;
  border: 0;
  cursor: pointer;

  background-color: #ffffff;
  color: #3e85f3;
  font-size: 8px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;

    top: 106px;
    left: 76px;
  }
`;

const InputFile = styled.input`
  display: none;
`;

const AvatarPlaceholder = styled(PiUserLight)`
  width: 48px;
  height: 48px;
  color: ${({ theme }) => theme.colors.avatarPlaceholder};

  @media screen and (max-width: 767px) {
    width: 32px;
    height: 32px;
  }
`;

const UserName = styled.h2`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: calc(18 / 14);
  text-align: center;
  color: ${({ theme }) => theme.colors.titleAvatar};

  margin-bottom: 4px;
  margin-top: 0;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1;

    margin-bottom: 8px;
  }
`;

const UserText = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  line-height: calc(14 / 12);
  color: ${({ theme }) => theme.colors.textAvatar};

  margin-bottom: 40px;
  margin-top: 0;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: calc(18 / 14);
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  /* gap: 18px; */
  width: 100%;
  margin: 0 auto;
`;

const InputWrap = styled.div`
  position: relative;
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
  color: ${({ theme }) => theme.colors.labelUserFormTextColor};

  &.valid-input {
    color: #3cbc81;
  }

  &.invalid-input {
    color: #ff0000;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: calc(18 / 14);
  }
`;

const Input = styled.input`
  /* width: 100%; */
  /* margin-bottom: 18px; */
  padding: 12px 14px;
  border: ${({ theme }) => theme.colors.borderUserForm};
  border-radius: 8px;

  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14);
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  color: ${({ theme }) => theme.colors.text};

  &::placeholder {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: calc(18 / 14);
    color: ${({ theme }) => theme.colors.activeArrowColor};

    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: calc(18 / 16);
    }
  }

  &.valid-input {
    border: 1px solid #3cbc81;
  }

  &.invalid-input {
    border: 1px solid #ff0000;
  }

  &:focus,
  &:hover,
  &:active {
    outline: none;
    border: ${({ theme }) => theme.colors.borderInputHover};
  }

  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  @media screen and (min-width: 768px) {
    /* margin-bottom: 24px; */
    padding: 14px 18px;
    font-size: 16px;
    line-height: calc(18 / 16);
  }
`;

const InputDate = styled(DatePicker)`
  width: 100%;
  padding: 12px 14px;
  border: ${({ theme }) => theme.colors.borderUserForm};
  border-radius: 8px;

  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14);
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  color: ${({ theme }) => theme.colors.text};

  &.valid-input {
    border: 1px solid #3cbc81;
  }

  &.invalid-input {
    border: 1px solid #ff0000;
  }

  &:focus,
  &:hover,
  &:active {
    outline: none;
    border: ${({ theme }) => theme.colors.borderInputHover};
  }

  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  @media screen and (min-width: 768px) {
    /* margin-bottom: 24px; */
    padding: 14px 18px;
    font-size: 16px;
    line-height: calc(18 / 16);
  }
`;

const LastInput = styled(Input)`
  margin-bottom: 0;
`;

const SaveBtn = styled.button`
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  padding: 14px 20px;

  background-color: ${(props) => (props.disabled ? '#ccc' : '#3e85f3')};
  color: #ffffff;
  border: none;
  border-radius: 16px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14);

  &:hover,
  &:focus,
  &:active {
    background-color: ${(props) => (props.disabled ? '#ccc' : '#2b78ef')};
  }

  @media screen and (max-width: 374px) {
    max-width: 195px;
  }

  @media screen and (min-width: 375px) {
    width: 195px;
  }

  @media screen and (min-width: 768px) {
    width: 262px;
    padding: 15px 20px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 88px;
  }
`;

const FieldsWrap = styled.div`
  @media screen and (max-width: 1439px) {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    gap: 50px;
  }
`;

const ColumnWrap = styled.div`
  @media screen and (max-width: 1439px) {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    width: 354px;
    gap: 24px;
  }
`;

const ContainerErrorIcon = styled.div`
  position: relative;
  padding-left: 18px;
`;

const Error = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;

  &.valid {
    color: #3cbc81;
  }

  &.invalid {
    color: #ff0000;
  }
`;

export const SuccessIcon = styled(IoCheckmarkCircleOutline)`
  position: absolute;
  right: 12px;
  bottom: 37px;
  width: 18px;
  height: 18px;
  color: #3cbc81;

  @media screen and (min-width: 768px) {
    bottom: 37px;
  }
`;

const ChevronDownIcon = styled(FaChevronDown)`
  position: absolute;
  top: 40px;
  right: 14px;
  width: 18px;
  height: 18px;
  cursor: pointer;

  color: ${({ theme }) => theme.colors.titleAvatar};
`;

const ChevronUpIcon = styled(FaChevronUp)`
  position: absolute;
  top: 40px;
  right: 14px;
  width: 18px;
  height: 18px;
  cursor: pointer;

  color: ${({ theme }) => theme.colors.titleAvatar};
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
  InputDate,
  SaveBtn,
  FieldsWrap,
  ColumnWrap,
  LastInput,
  ContainerErrorIcon,
  Error,
  ChevronDownIcon,
  ChevronUpIcon,
};
