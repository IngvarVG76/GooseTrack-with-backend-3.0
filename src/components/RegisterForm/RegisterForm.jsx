import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  Container,
  StyledForm,
  InputGroupe,
  InputWrapper,
  Button,
  ButtonText,
  ItemIcon,
  Label,
  Input,
  ShowHideButton,
  InputWrapperWithIcon,
  InputList,
  Error,
  ErrorIcon,
  ContainerErrorIcon,
  SuccessIcon,
  FormName,
  PictureWrapper,
  LinksContainer,
} from './RegisterForm.styled';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useState } from 'react';
import img from '../../images/auth_goose/signup-elements.png';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { selectToken } from '../../redux/auth/selectors';

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const authenticated = useSelector(selectToken);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emailRegexp =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  const validationSchema = yup.object({
    userName: yup
      .string()
      .min(3, 'Name must contain at least 3 characters')
      .required(`Name required`),
    email: yup
      .string()
      .matches(emailRegexp, `This is an ERROR email`)
      .required(`Email required`),
    password: yup
      .string()
      .min(6, 'Password must contain at least 6 characters')
      .required(`Password required`),
  });

  const onSubmit = useCallback(
    async ({ userName, email, password }) => {
      try {
        dispatch(register({ userName, email, password }));

        if (authenticated) {
          navigate('/calendar');
        }
      } catch (error) {
        console.log(error.message);
      }
    },
    [dispatch, navigate, authenticated],
  );

  const formik = useFormik({
    initialValues: {
      userName: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit,
  });

  return (
    <>
      <Container>
        <div>
          <StyledForm onSubmit={formik.handleSubmit}>
            <InputGroupe>
              <FormName>Sign Up</FormName>
              <InputList>
                <InputWrapper $isusername={'userName'}>
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
                    Name
                  </Label>
                  <Input
                    type="text"
                    id="userName"
                    name="userName"
                    autoComplete="true"
                    value={formik.values.userName}
                    placeholder="Enter your name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
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
                        <Error className="invalid">
                          {formik.errors.userName}
                        </Error>
                        <ErrorIcon />
                      </ContainerErrorIcon>
                    ) : (
                      <ContainerErrorIcon>
                        <Error className="valid">
                          {formik.errors.userName}
                        </Error>
                        <SuccessIcon />
                      </ContainerErrorIcon>
                    )
                  ) : null}
                </InputWrapper>
                <InputWrapper $isemail={'email'}>
                  <Label
                    htmlFor="email"
                    className={
                      formik.touched.email
                        ? formik.errors.email
                          ? 'invalid-input'
                          : 'valid-input'
                        : ''
                    }
                  >
                    Email
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="true"
                    value={formik.values.email}
                    placeholder="Enter your email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
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
                        <Error className="valid">{formik.errors.email}</Error>
                        <SuccessIcon />
                      </ContainerErrorIcon>
                    )
                  ) : null}
                </InputWrapper>
                <InputWrapper $ispassword={'password'}>
                  <Label
                    htmlFor="password"
                    className={
                      formik.touched.password
                        ? formik.errors.password
                          ? 'invalid-input'
                          : 'valid-input'
                        : ''
                    }
                  >
                    Password
                  </Label>
                  <InputWrapperWithIcon>
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      autoComplete="current-password"
                      placeholder="Enter your password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={
                        formik.touched.password
                          ? formik.errors.password
                            ? 'invalid-input'
                            : 'valid-input'
                          : ''
                      }
                    />
                    {!formik.errors.password && (
                      <ShowHideButton
                        type="button"
                        onClick={() => setShowPassword((show) => !show)}
                      >
                        {showPassword ? <FiEyeOff /> : <FiEye />}
                      </ShowHideButton>
                    )}
                  </InputWrapperWithIcon>
                  {formik.touched.password ? (
                    formik.errors.password ? (
                      <ContainerErrorIcon>
                        <Error className="invalid">
                          {formik.errors.password}
                        </Error>
                        <ErrorIcon />
                      </ContainerErrorIcon>
                    ) : (
                      <ContainerErrorIcon>
                        <Error className="valid">
                          {formik.errors.password}
                        </Error>
                        <SuccessIcon />
                      </ContainerErrorIcon>
                    )
                  ) : null}
                </InputWrapper>
              </InputList>
              <Button type="submit">
                <ButtonText>Sign Up</ButtonText>
                <ItemIcon />
              </Button>
            </InputGroupe>
          </StyledForm>
          <LinksContainer type="button" onClick={() => navigate('/login')}>
            Log In
          </LinksContainer>
        </div>
        <PictureWrapper>
          <picture>
            <img loading="lazy" src={img} alt="Goose register" width={400} />
          </picture>
        </PictureWrapper>
      </Container>
    </>
  );
};

export default RegisterForm;
