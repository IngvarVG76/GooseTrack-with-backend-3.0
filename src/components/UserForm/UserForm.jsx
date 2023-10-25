import { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { format, parseISO } from 'date-fns';
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
  ChevronDownIcon,
  ChevronUpIcon,
} from './UserForm.styled';
import { ErrorIcon } from '../../components/RegisterForm/RegisterForm.styled';
import { CalendarGlobalStyles } from '../DatePicker/StyledDayPicker';

const phoneRegExp = /^(?:\+\d|[\d\s\-./()]){10,20}$/;
const emailRegexp =
  /^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?$/;

const UserForm = () => {
  const { avatarURL, birthDay, email, phone, skype, userName } =
    useSelector(selectUser);

  const [avatar, setAvatar] = useState(avatarURL ?? '');
  const [avatarPreviewURL, setAvatarPreviewURL] = useState('');
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const dispatch = useDispatch();

  const fileInputRef = useRef();
  const dateInputRef = useRef();
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

  const handleDateArrowClick = () => {
    // console.log(dateInputRef.current);
    if (!isCalendarOpen) {
      dateInputRef.current.setOpen(true);
      // setIsCalendarOpen(true);
    }
    if (isCalendarOpen) {
      dateInputRef.current.setOpen(false);
      // setIsCalendarOpen(false);
    }
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
      // console.log(avatarPreviewURL);
    } else {
      setAvatarPreviewURL(avatarURL);
    }
  };

  const formik = useFormik({
    initialValues: {
      avatar: `${avatarURL}`,
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
      userName: Yup.string()
        .min(3, 'Username must contain at least 3 characters')
        .max(16, 'Username must contain not more than 16 characters')
        .required('Username is required field'),
      birthday: Yup.date()
        .min(new Date(1923, 0, 1), 'Date is too early')
        .max(new Date(), 'Date is not valid'),
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

      dispatch(updateUser(formData));

      setTimeout(() => {
        formik.resetForm({
          values: values,
          touched: {
            userName: true,
            birthday: true,
            email: true,
            phone: true,
            skype: true,
          },
        });
      }, 500);

      actions.setSubmitting(false);
    },
  });

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
            // value={formik.values.avatar}
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
              <InputDate
                id="birthday"
                selected={
                  formik.values.birthday
                    ? parseISO(formik.values.birthday)
                    : new Date()
                }
                onChange={(date) => {
                  formik.setFieldValue('birthday', format(date, 'yyyy-MM-dd'));
                }}
                onBlur={() => {
                  formik.setFieldTouched('birthday', true);
                  setIsCalendarOpen(false);
                }}
                // onInputClick={() => setIsCalendarOpen(true)}
                onCalendarOpen={() => setIsCalendarOpen(true)}
                onCalendarClose={() => setIsCalendarOpen(false)}
                dateFormat="dd/MM/yyyy"
                ref={dateInputRef}
                className={
                  formik.touched.birthday
                    ? formik.errors.birthday
                      ? 'invalid-input'
                      : 'valid-input'
                    : ''
                }
              />
              {isCalendarOpen ? (
                <ChevronUpIcon onClick={handleDateArrowClick} />
              ) : (
                <ChevronDownIcon onClick={handleDateArrowClick} />
              )}

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
              <CalendarGlobalStyles />
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
                type="tel"
                placeholder="38 (067) 000 00 00"
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
          disabled={!(formik.isValid && formik.dirty) || formik.isSubmitting}
        >
          Save changes
        </SaveBtn>
      </Form>
    </FormContainer>
  );
};

export default UserForm;
