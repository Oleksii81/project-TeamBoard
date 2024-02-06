import { Form, Formik } from "formik";
import { FormContainer, Input, StyledButton, StyledFilds, StyledLink, StyledLinks, StyledSvg } from "./RegisterFormStyled";
import sprite from "../../images/sprite.svg";
import { useState } from "react";

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  
  const onPassVisible = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (values, action) => { };
  
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
        >
          <Form>
            <StyledFilds>
              <Input type="text" name="name" placeholder="Enter your name" />
              <Input type="email" name="email" placeholder="Enter your email" />
              <Input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Create your password"
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
            <StyledButton type="button">Register Now</StyledButton>
          </Form>
        </Formik>
      </FormContainer>
    );
};

export default Registration;