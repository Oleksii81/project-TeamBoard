import { Field, Form, Formik } from "formik";
import { FormContainer, StyledLink, StyledLinks } from "./RegisterFormStyled";

const Registration = () => {
    return (
      <FormContainer>
        <StyledLinks>
          <StyledLink to="/auth/register">Registration</StyledLink>
          <StyledLink to="/auth/login">Log In</StyledLink>
        </StyledLinks>
        <Formik>
          <Form>
            <div>
              <Field type="text" name="Enter your name" />
              <Field type="email" name="Enter your email" />
              <Field type="password" name="Create your password" />
            </div>
            <button type="button">Register Now</button>
          </Form>
        </Formik>
      </FormContainer>
    );
};

export default Registration;