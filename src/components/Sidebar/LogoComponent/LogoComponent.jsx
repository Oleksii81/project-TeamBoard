import { LogoComponentStyled, TaskPro } from './LogoComponent.styled';
import icons from '../../../images/sprite.svg';

const LogoComponent = () => {
  return (
    <LogoComponentStyled>
      <svg width="32" height="32">
        <use href={`${icons}#icon-logo`}></use>
      </svg>

      <TaskPro>Task Pro</TaskPro>
    </LogoComponentStyled>
  );
};

export default LogoComponent;
