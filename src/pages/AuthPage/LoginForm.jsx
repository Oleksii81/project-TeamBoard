import { Form, Formik } from 'formik';
import { FormContainer, Input, StyledButton, StyledFilds, StyledLink, StyledLinks, StyledSvg } from './LoginFormStyled';
import sprite from '../../images/sprite.svg';
import { useState } from 'react';
import { login } from '../../redux/auth/authOperations';
import * as yup from 'yup';
// import { useDispatch } from 'react-redux';

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

const LoginForm = () => {
  // const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const onPassVisible = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget.elements;

    // dispatch(
      login({
        email: form.email.value,
        password: form.password.value,
      })
    // )
    form.reset();
   };
  
  return (
    <FormContainer>
      <StyledLinks>
        <StyledLink to="/auth/register">Registration</StyledLink>
        <StyledLink to="/auth/login">Log In</StyledLink>
      </StyledLinks>

      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form>
          <StyledFilds>
            <Input type="email" name="email" placeholder="Enter your email" required />
            <Input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Confirm a password"
              required
            />

            <StyledSvg onClick={onPassVisible}>
              {showPassword ? (
                <svg width={18} height={18}>
                  <use stroke="gray" href={`${sprite}#icon-eye`} />
                </svg>
              ) : (
                <svg width={18} height={18}>
                  <use href={`${sprite}#icon-eye-hiden`} />
                </svg>
              )}
            </StyledSvg>
          </StyledFilds>
          <StyledButton type="submit">Log In Now</StyledButton>
        </Form>
      </Formik>
    </FormContainer>
  );
};

export default LoginForm;
