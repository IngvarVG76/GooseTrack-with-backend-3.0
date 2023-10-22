import { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { format, parseISO } from 'date-fns';
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { selectUser } from '../../redux/auth/selectors';
import { updateUser } from '../../redux/auth/operations';

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
  InputDate,
  SaveBtn,
  FieldsWrap,
  ColumnWrap,
  LastInput,
  ContainerErrorIcon,
  Error,
  SuccessIcon,
} from './UserForm.styled';
import { ErrorIcon } from '../../components/RegisterForm/RegisterForm.styled';
// import AccountDatepicker from '../AccountDatePicker/AccountDatePicker';

const phoneRegExp = /\+380\d{3}\d{2}\d{2}\d{2}$/;
const emailRegexp =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
// const avaliableMimeType = ['image/jpeg', 'image/png'];

const UserForm = () => {
  const { avatarURL, birthDay, email, phone, skype, userName } =
    useSelector(selectUser);

  const [avatar, setAvatar] = useState(avatarURL ?? '');
  const [avatarPreviewURL, setAvatarPreviewURL] = useState('');
  // const [newUserName, setNewUserName] = useState(userName ?? '');
  // const [newBirthDay, setNewBirthDay] = useState(
  //   birthDay || format(new Date(), 'yyyy-MM-dd'),
  // );
  // const [newEmail, setNewEmail] = useState(email ?? '');
  // const [newPhone, setNewPhone] = useState(phone ?? '');
  // const [newSkype, setNewSkype] = useState(skype ?? '');

  const dispatch = useDispatch();

  const fileInputRef = useRef();
  const submitBtnRef = useRef();
  const fakeInputRef = useRef();

  useEffect(() => {
    return () => {
      if (avatarPreviewURL) {
        URL.revokeObjectURL(avatarPreviewURL);
      }
    };
  }, [avatarPreviewURL]);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (!avatarPreviewURL) {
      fakeInputRef.current.click();
    }
    setAvatar(file);
    if (file) {
      const previewURL = URL.createObjectURL(file);
      setAvatarPreviewURL(previewURL);
      console.log(avatarPreviewURL);
    } else {
      setAvatarPreviewURL(avatarURL);
    }
  };

  // const handleAvatarChange = (e) => {
  //   console.log(e.target.value);
  //   const file = e.target.files[0];

  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       setAvatar(e.target.result);
  //     };
  //     console.log(e.target.value)
  //     reader.readAsDataURL(file);
  //   }
  // };

  const formik = useFormik({
    initialValues: {
      // avatar: `${avatar}`,
      // userName: `${newUserName}`,
      // birthday: `${newBirthDay}`,
      // email: `${newEmail}`,
      // phone: `${newPhone}`,
      // skype: `${newSkype}`,
      avatar: `${avatar}`,
      checkBox: false,
      userName: `${userName ?? ''}`,
      birthday: `${birthDay}`,
      email: `${email ?? ''}`,
      phone: `${phone ?? ''}`,
      skype: `${skype ?? ''}`,
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
      // avatar: Yup.string().oneOf(avaliableMimeType, 'Invalid file type'),
      userName: Yup.string()
        .min(3, 'Username must contain at least 3 characters')
        .max(16, 'Username must contain not more than 16 characters')
        .required('Username is required field'),
      birthday: Yup.date()
        // .transform(function (value, originalValue) {
        //   if (this.isType(value)) {
        //     return value;
        //   }
        //   const result = parse(originalValue, 'dd/MM/yyyy', new Date());
        //   return result;
        // })
        // .typeError('Please enter a valid date')
        // .min('1969-11-13', 'Date is too early')
        // .max(new Date(), 'Date is not valid')
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
    onSubmit: async (values, actions) => {
      const formData = new FormData();

      if (formik.initialValues.userName !== values.userName) {
        formData.append('userName', values.userName);
      }
      if (formik.initialValues.email !== values.email) {
        formData.append('email', values.email);
      }
      if (formik.initialValues.phone !== values.phone) {
        formData.append('phone', values.phone);
      }
      if (formik.initialValues.skype !== values.skype) {
        formData.append('skype', values.skype);
      }
      if (formik.initialValues.birthday !== values.birthday) {
        formData.append('birthDay', values.birthday);
      }
      if (avatar !== '') {
        formData.append('avatarURL', avatar);
      }

      console.log(values);

      dispatch(updateUser(formData));

      setTimeout(() => {
        formik.resetForm({ values: values });
      }, 3000);

      actions.setSubmitting(false);

      // alert(JSON.stringify(values, null, 2));
      // formik.setSubmitting(false);
    },
  });

  console.log(formik.values.birthday);

  // formik.touched = {};

  return (
    <FormContainer>
      <Form onSubmit={formik.handleSubmit}>
        <AvatarUploader>
          <AvatarPreview onClick={handleButtonClick}>
            {/* {avatar ? (
              <AvatarImg src={avatar} alt="Avatar" />
            ) : (
              <AvatarPlaceholder />
            )} */}
            {avatarPreviewURL ? (
              <AvatarImg src={avatarPreviewURL} alt={userName} />
            ) : avatarURL ? (
              <AvatarImg src={avatarURL} alt={userName} />
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
            value={formik.values.avatar}
            onChange={handleAvatarChange}
          />
          <input
            ref={fakeInputRef}
            type="checkbox"
            name="checkBox"
            onChange={formik.handleChange}
            checked={formik.values.checkBox}
            style={{ display: 'none' }}
          />
        </AvatarUploader>
        <UserName>{userName}</UserName>
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
                value={formik.values.userName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                // {...formik.getFieldProps('userName')}
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
              {/* <Input
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
              /> */}
              <InputDate
                id="birthday"
                selected={
                  formik.values.birthday
                    ? parseISO(formik.values.birthday)
                    : new Date()
                }
                onChange={(date) => {
                  console.log(date);
                  formik.setFieldValue('birthday', format(date, 'yyyy-MM-dd'));
                }}
                dateFormat="dd/MM/yyyy"
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
                    <Error className="valid" style={{ color: 'transparent' }}>
                      OK
                    </Error>
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
                    <Error className="valid" style={{ color: 'transparent' }}>
                      OK
                    </Error>
                    <SuccessIcon />
                  </ContainerErrorIcon>
                )
              ) : null}
            </InputWrap>
          </ColumnWrap>
        </FieldsWrap>
        <SaveBtn
          type="submit"
          ref={submitBtnRef}
          // disabled={verify()}
          disabled={!(formik.isValid && formik.dirty) || formik.isSubmitting}
        >
          Save changes
        </SaveBtn>
      </Form>
    </FormContainer>
  );
};

export default UserForm;
