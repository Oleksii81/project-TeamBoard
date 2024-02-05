import { FormContainer, StyledLink, StyledLinks } from "./RegisterFormStyled";

const Registration = () => {
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

export default Registration;