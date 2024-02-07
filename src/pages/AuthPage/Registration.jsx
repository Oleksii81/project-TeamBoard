import { Form, Formik } from "formik";
import { FormContainer, Input, StyledButton, StyledFilds, StyledLink, StyledLinks, StyledSvg } from "./RegisterFormStyled";
import sprite from "../../images/sprite.svg";
import { useState } from "react";
// import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/authOperations";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required()
});

const Registration = () => {
  // const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  
  const onPassVisible = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget.elements;
    // dispatch(
      register({
        name: form.name.value,
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
            name: '',
            email: '',
            password: '',
          }}
          onSubmit={handleSubmit}
          validationSchema={schema}
        >
          <Form>
            <StyledFilds>
              <Input
                type="text"
                name="name"
                placeholder="Enter your name"
                pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
              <Input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Create your password"
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
            <StyledButton type="submit">Register Now</StyledButton>
          </Form>
        </Formik>
      </FormContainer>
    );
};

export default Registration;