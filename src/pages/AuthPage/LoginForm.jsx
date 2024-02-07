import { Form, Formik } from 'formik';
import {
  FormContainer,
  Input,
  StyledButton,
  StyledFilds,
  StyledLink,
  StyledLinks,
  StyledSvg,
} from './LoginFormStyled';
import sprite from '../../images/sprite.svg';
import { useState } from 'react';
import { login } from '../../redux/auth/authOperations';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setToken } from '../../redux/auth/authSelectors';

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const onPassVisible = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (values, { resetForm }) => {
    const currentUser = { ...values };

    const response = await dispatch(login(currentUser, setToken));

    if (response.error) {
      alert(response.payload);
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

      <form action=""></form>
    </FormContainer>
  );
};

export default LoginForm;
