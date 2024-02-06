import sprite from '../../images/sprite.svg';
import mainImage from '../../images/Image 1.png'
import { StyledLogo, StyledWelcomePage, Container, StyledLinks, StyledLink } from './WelcomePageStyle';

const WelcomePage = () => {
  return (
    <Container>
      <StyledWelcomePage>
        <img src={mainImage} alt="Icon" />
        <StyledLogo>
          <svg width={48} height={48}>
            <use href={`${sprite}#icon-logo`}></use>
          </svg>
          <h1>Task Pro</h1>
        </StyledLogo>
        <p>
          Supercharge your productivity and take control of your tasks with Task
          Pro - Don't wait, start achieving your goals now!
        </p>
        <StyledLinks>
          <StyledLink to="/auth/register">Registration</StyledLink>
          <StyledLink to="/auth/login">Log In</StyledLink>
        </StyledLinks>
      </StyledWelcomePage>
    </Container>
  );
};

export default WelcomePage;