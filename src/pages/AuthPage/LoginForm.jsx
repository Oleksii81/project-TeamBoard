import { Form, Formik } from 'formik';
import { EmailErrorMessage, FormContainer, Input, PassErrorMessage, StyledButton, StyledFilds, StyledLink, StyledLinks, StyledSvg } from './LoginFormStyled';
import sprite from '../../images/sprite.svg';
import { useState } from 'react';
import { login } from '../../redux/auth/authOperations';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setToken } from '../../redux/auth/authSelectors';
import { toast } from 'react-toastify';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email')
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
      message: 'Email error',
      excludeEmptyString: true,
    })
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(64, 'Password must be no more than 64 characters')
    .matches(/^[a-zA-Z0-9!@#$%^&*]{8,64}/, {
      message:
        'Password must contain Latin letters and numbers, without spaces in different case, from 8 to 64 characters',
      excludeEmptyString: true,
    })
    .required('Password is required'),
});

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const onPassVisible = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (values, {resetForm}) => {
    const currentUser = { ...values };

    const response = await dispatch(login(currentUser, setToken))
    
    if (response.error) {
      toast.error(response.payload);
    } else {
      navigate('/home');
    }
    resetForm();
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
        {({ handleChange, values }) => (
          <Form>
            <StyledFilds>
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={values.email || ''}
                onChange={handleChange('email')}
              />
              <EmailErrorMessage name="email" component="div" />
              <Input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Confirm a password"
                value={values.password || ''}
                onChange={handleChange('password')}
              />
              <PassErrorMessage name="password" component="div" />

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
        )}
      </Formik>
    </FormContainer>
  );
};

export default LoginForm;
