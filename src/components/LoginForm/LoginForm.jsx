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
} from './LoginForm.styled';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useCallback, useState } from 'react';
import img from '../../images/auth_goose/login-elements.png';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { selectToken } from '../../redux/auth/selectors';

const emailRegexp =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

const validationSchema = yup.object({
  email: yup
    .string()
    .matches(emailRegexp, `This is an ERROR email`)
    .required(`Email required`),
  password: yup
    .string()
    .min(6, 'Password must contain at least 6 characters')
    .required(`Password required`),
});

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const authenticated = useSelector(selectToken);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = useCallback(
    async ({ email, password }) => {
      try {
        dispatch(logIn({ email, password }));

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
              <FormName>Log In</FormName>
              <InputList>
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
                    placeholder="Your email"
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
                      placeholder="Your password"
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
                    <ShowHideButton
                      type="button"
                      onClick={() => setShowPassword((show) => !show)}
                    >
                      {showPassword ? <FiEyeOff /> : <FiEye />}
                    </ShowHideButton>
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
                <ButtonText>Log in</ButtonText>
                <ItemIcon />
              </Button>
            </InputGroupe>
          </StyledForm>
          <LinksContainer type="button" onClick={() => navigate('/register')}>
            Sing Up
          </LinksContainer>
        </div>
        <PictureWrapper>
          <picture>
            <img loading="lazy" src={img} alt="Goose login" width={368} />
          </picture>
        </PictureWrapper>
      </Container>
    </>
  );
};

export default LoginForm;
