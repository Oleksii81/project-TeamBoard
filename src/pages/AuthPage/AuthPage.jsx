import { Container } from "pages/WelcomePage/WelcomePageStyle";
import { useParams } from "react-router-dom";
import Registration from "./Registration";
import LoginForm from "./LoginForm";


const AuthPage = () => {
    const { id } = useParams();

    return (
      <Container>
        {id === 'register' && <Registration />}
        {id === 'login' && <LoginForm />}
      </Container>
    );
}

export default AuthPage;