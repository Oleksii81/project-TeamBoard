import { FormContainer, StyledLink, StyledLinks } from './LoginFormStyled';

const LoginForm = () => {
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
