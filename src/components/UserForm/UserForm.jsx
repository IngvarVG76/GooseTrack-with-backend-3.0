import { useRef, useState } from 'react';
// import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { parse } from 'date-fns';

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
  FieldsWrap,
  ColumnWrap,
  LastInput,
  ContainerErrorIcon,
  Error,
  SuccessIcon,
} from './UserForm.styled';

import { ErrorIcon } from '../../components/RegisterForm/RegisterForm.styled';

const phoneRegExp = /\+380\d{3}\d{2}\d{2}\d{2}$/;
const emailRegexp =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

const avaliableMimeType = ['image/jpeg', 'image/png'];

const UserForm = () => {
  const [avatar, setAvatar] = useState(null);
  // const [birthday, setBirthday] = useState(formatDate(new Date()));

  // const userFromBackend = useSelector(state = state.auth.user);

  const user = {
    userName: 'Nadiia Doe',
    birthday: '',
    email: 'nadiia@gmail.com',
    phone: '',
    skype: '',
  };

  // const user = {
  //   userName: '',
  //   birthday: '',
  //   email: '',
  //   phone: '',
  //   skype: '',
  // };

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

  // const handleDateChange = (e) => {
  //   setBirthday(e.target.value);
  // };

  const formik = useFormik({
    initialValues: {
      avatar: '',
      userName: `${user.userName ?? ''}`,
      birthday: `${user.birthday || formatDate(new Date())}`,
      email: `${user.email ?? ''}`,
      phone: `${user.phone ?? ''}`,
      skype: `${user.skype ?? ''}`,
    },
    validationSchema: Yup.object({
      // avatar: Yup.mixed().test(
      //   'fileType',
      //   'Неприпустимий тип файлу',
      //   (value) => {
      //     if (!value) return true;
      //     return ['image/jpeg', 'image/png'].includes(value.type);
      //   },
      // ),
      avatar: Yup.string().oneOf(avaliableMimeType, 'Invalid file type'),
      userName: Yup.string()
        .min(3, 'Username must contain at least 3 characters')
        .max(16, 'Username must contain not more than 16 characters')
        .required('Username Name is required field'),
      birthday: Yup.date()
        .transform(function (value, originalValue) {
          if (this.isType(value)) {
            return value;
          }
          const result = parse(originalValue, 'dd.MM.yyyy', new Date());
          return result;
        })
        .typeError('Please enter a valid date')
        .min('1969-11-13', 'Date is too early')
        .max('2024-01-01', 'Date is not valid')
        .required(),
      email: Yup.string()
        .email(`This is an ERROR email`)
        .matches(emailRegexp, `This is an ERROR email`)
        .required('Email is required field'),
      phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
      skype: Yup.string()
        .min(3, 'Skype must contain at least 3 characters')
        .max(16, 'Skype must not have more than 16 characters'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <FormContainer>
      <Form onSubmit={formik.handleSubmit}>
        <AvatarUploader>
          <AvatarPreview onClick={handleButtonClick}>
            {avatar ? (
              <AvatarImg src={avatar} alt="Avatar" />
            ) : (
              <AvatarPlaceholder />
            )}
          </AvatarPreview>
          <AddAvatarBtn onClick={handleButtonClick}></AddAvatarBtn>
          <InputFile
            name="avatar"
            type="file"
            ref={fileInputRef}
            accept="image/*"
            onChange={handleAvatarChange}
          />
        </AvatarUploader>
        <UserName>{user.userName}</UserName>
        <UserText>User</UserText>
        <FieldsWrap>
          <ColumnWrap>
            <InputWrap>
              <Label
                htmlFor="userName"
                className={
                  formik.touched.userName
                    ? formik.errors.userName
                      ? 'invalid-input'
                      : 'valid-input'
                    : ''
                }
              >
                User Name
              </Label>
              <Input
                id="userName"
                name="userName"
                type="text"
                placeholder="Enter your name"
                {...formik.getFieldProps('userName')}
                className={
                  formik.touched.userName
                    ? formik.errors.userName
                      ? 'invalid-input'
                      : 'valid-input'
                    : ''
                }
              />
              {formik.touched.userName ? (
                formik.errors.userName ? (
                  <ContainerErrorIcon>
                    <Error className="invalid">{formik.errors.userName}</Error>
                    <ErrorIcon />
                  </ContainerErrorIcon>
                ) : (
                  <ContainerErrorIcon>
                    <Error className="valid">This is CORRECT username</Error>
                    <SuccessIcon />
                  </ContainerErrorIcon>
                )
              ) : null}
            </InputWrap>
            <InputWrap>
              <Label htmlFor="birthday">Birthday</Label>
              <Input
                id="birthday"
                name="birthday"
                type="date"
                {...formik.getFieldProps('birthday')}
                className={
                  formik.touched.birthday
                    ? formik.errors.birthday
                      ? 'invalid-input'
                      : 'valid-input'
                    : ''
                }
              />
              {formik.touched.birthday ? (
                formik.errors.birthday ? (
                  <ContainerErrorIcon>
                    <Error className="invalid">{formik.errors.birthday}</Error>
                  </ContainerErrorIcon>
                ) : (
                  <ContainerErrorIcon>
                    <Error className="valid">This is CORRECT date</Error>
                  </ContainerErrorIcon>
                )
              ) : null}
            </InputWrap>
            <InputWrap>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="text"
                placeholder="Enter your email"
                {...formik.getFieldProps('email')}
                className={
                  formik.touched.email
                    ? formik.errors.email
                      ? 'invalid-input'
                      : 'valid-input'
                    : ''
                }
              />
              {formik.touched.email ? (
                formik.errors.email ? (
                  <ContainerErrorIcon>
                    <Error className="invalid">{formik.errors.email}</Error>
                    <ErrorIcon />
                  </ContainerErrorIcon>
                ) : (
                  <ContainerErrorIcon>
                    <Error className="valid">This is CORRECT email</Error>
                    <SuccessIcon />
                  </ContainerErrorIcon>
                )
              ) : null}
            </InputWrap>
          </ColumnWrap>
          <ColumnWrap>
            <InputWrap>
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                type="text"
                placeholder="+380670000000"
                {...formik.getFieldProps('phone')}
                className={
                  formik.touched.phone
                    ? formik.errors.phone
                      ? 'invalid-input'
                      : 'valid-input'
                    : ''
                }
              />
              {formik.touched.phone ? (
                formik.errors.phone ? (
                  <ContainerErrorIcon>
                    <Error className="invalid">{formik.errors.phone}</Error>
                    <ErrorIcon />
                  </ContainerErrorIcon>
                ) : (
                  <ContainerErrorIcon>
                    <Error className="valid">This is CORRECT phone</Error>
                    <SuccessIcon />
                  </ContainerErrorIcon>
                )
              ) : null}
            </InputWrap>
            <InputWrap>
              <Label htmlFor="skype">Skype</Label>
              <LastInput
                id="skype"
                name="skype"
                type="text"
                placeholder="Add a skype number"
                {...formik.getFieldProps('skype')}
                className={
                  formik.touched.skype
                    ? formik.errors.skype
                      ? 'invalid-input'
                      : 'valid-input'
                    : ''
                }
              />
              {formik.touched.skype ? (
                formik.errors.skype ? (
                  <ContainerErrorIcon>
                    <Error className="invalid">{formik.errors.skype}</Error>
                    <ErrorIcon />
                  </ContainerErrorIcon>
                ) : (
                  <ContainerErrorIcon>
                    <Error className="valid">This is CORRECT skype</Error>
                    <SuccessIcon />
                  </ContainerErrorIcon>
                )
              ) : null}
            </InputWrap>
          </ColumnWrap>
        </FieldsWrap>
        <SaveBtn type="submit">Save changes</SaveBtn>
      </Form>
    </FormContainer>
  );
};

export default UserForm;
