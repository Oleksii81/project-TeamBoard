import image from '../../images/Image 1.png';
import icon from '../../images/icon.svg';
import { StyledWelcomePage, WelcomeButton } from './WelcomePageStyle';


const WelcomePage = () => {
    return (
      <StyledWelcomePage>
        <img src={image} alt="Icon" />
        <h1>Task Pro</h1>
        <img src={icon} alt="Icon" />
        <p>
          Supercharge your productivity and take control of your tasks with Task
          Pro - Don't wait, start achieving your goals now!
        </p>
        <WelcomeButton type="button">Registration</WelcomeButton>
        <WelcomeButton type="button">Log In</WelcomeButton>
      </StyledWelcomePage>
    );
};

export default WelcomePage;