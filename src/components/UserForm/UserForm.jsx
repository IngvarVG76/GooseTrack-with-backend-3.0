import { useRef, useState } from 'react';
import { useFormik } from 'formik';
// import * as Yup from 'yup';

import {
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
} from './UserForm.styled';

const UserForm = () => {
  const [avatar, setAvatar] = useState(null);
  const [birthday, setBirthday] = useState(formatDate(new Date()));

  function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear());

    return `${year}-${month}-${day}`;
  }

  const fileInputRef = useRef();

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatar(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDateChange = (e) => {
    setBirthday(e.target.value);
  };

  const formik = useFormik({
    initialValues: {
      userName: '',
      birthday: '',
      email: '',
      phone: '',
      skype: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <FormContainer>
      <AvatarUploader>
        <AvatarPreview onClick={handleButtonClick}>
          {avatar ? (
            <AvatarImg src={avatar} alt="Avatar" />
          ) : (
            <AvatarPlaceholder>Add your photo</AvatarPlaceholder>
          )}
        </AvatarPreview>
        <AddAvatarBtn onClick={handleButtonClick}>+</AddAvatarBtn>
        <InputFile
          type="file"
          ref={fileInputRef}
          accept="image/*"
          onChange={handleAvatarChange}
        />
      </AvatarUploader>
      <UserName>Vova Plyuto</UserName>
      <UserText>User</UserText>
      <Form onSubmit={formik.handleSubmit}>
        <InputWrap>
          <Label htmlFor="userName">User Name</Label>
          <Input
            id="userName"
            name="userName"
            type="text"
            placeholder="Enter your name"
          />
        </InputWrap>
        <InputWrap>
          <Label htmlFor="birthday">Birthday</Label>
          <Input
            id="birthday"
            name="birthday"
            type="date"
            value={birthday}
            onChange={handleDateChange}
          />
        </InputWrap>
        <InputWrap>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="text"
            placeholder="Enter your email"
          />
        </InputWrap>
        <InputWrap>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            type="text"
            placeholder="Enter your phone"
          />
        </InputWrap>
        <InputWrap>
          <Label htmlFor="skype">Skype</Label>
          <Input
            last
            id="skype"
            name="skype"
            type="text"
            placeholder="Enter your skype"
          />
        </InputWrap>
        <SaveBtn type="submit">Save changes</SaveBtn>
      </Form>
    </FormContainer>
  );
};

export default UserForm;
