import { LogoComponent, TaskPro } from './BordList.styled';
import icons from '../../../images/sprite.svg';

const BordList = () => {
  return (
    <LogoComponent>
      <svg width="32" height="32">
        <use href={`${icons}#icon-logo`}></use>
      </svg>

      <TaskPro>Task Pro</TaskPro>
    </LogoComponent>
  );
};

export default BordList;
