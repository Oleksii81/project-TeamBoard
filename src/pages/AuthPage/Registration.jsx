import { Form, Formik } from "formik";
import { EmailErrorMessage, FormContainer, Input, NameErrorMessage, PassErrorMessage, StyledButton, StyledFilds, StyledLink, StyledLinks, StyledSvg } from "./RegisterFormStyled";
import sprite from "../../images/sprite.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/authOperations";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const schema = yup.object().shape({
  userName: yup
    .string()
    .min(2, 'Name is too short!')
    .max(32, 'Name is too long!')
    .required('Name is req!'),
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
    .matches(/^[a-zA-Z0-9]+$/, {
      message:
        'Password must contain Latin letters and numbers, without spaces in different case, from 8 to 64 characters',
      excludeEmptyString: true,
    })
    .required('Password is required'),
});

const Registration = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  
  const onPassVisible = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async(values, {resetForm}) => {
    
    const newUser = {...values}
    const response = await dispatch(register(newUser))

    if (response.error) {
      toast.error(response.payload)
    } else {
      navigate('/auth/login');
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
          userName: '',
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
                type="text"
                name="userName"
                placeholder="Enter your name"
                pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                value={values.userName || ''}
                onChange={handleChange('userName')}
              />
              <NameErrorMessage name="userName" component="div" />
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
                placeholder="Create your password"
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
            <StyledButton type="submit">Register Now</StyledButton>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};

export default Registration;