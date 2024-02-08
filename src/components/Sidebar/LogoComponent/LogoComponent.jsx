import {
  LogoComponentStyled,
  TaskPro,
  LogoPath,
  LogoPathCentral,
} from './LogoComponent.styled';
// import icons from '../../../images/sprite.svg';

const LogoComponent = () => {
  return (
    <LogoComponentStyled>
      {/*  Провсяквипадок. свг зі Sprite.svg
      <svg width="32" height="32" style={svgStyles}>
        <use href={`${icons}#icon-logo `}></use>
      </svg> 
      */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
      >
        <LogoPath d="M24 0h-16c-4.418 0-8 3.582-8 8v0 16c0 4.418 3.582 8 8 8v0h16c4.418 0 8-3.582 8-8v0-16c0-4.418-3.582-8-8-8v0z"></LogoPath>
        <LogoPathCentral d="M13.331 23.027c0.245-1.272 0.453-2.61 0.747-3.949 0.145-0.7-0.031-1-0.814-0.946-0.784 0.054-1.657 0.027-2.49 0-0.833-0.026-0.982-0.446-0.502-1.044 2.362-2.918 4.752-5.8 7.133-8.673 0.267-0.326 0.575-0.558 1.014-0.313 0.44 0.246 0.349 0.55 0.276 0.915-0.262 1.339-0.48 2.677-0.77 3.989-0.149 0.678 0.046 0.919 0.752 0.892 0.318-0.017 0.69-0.027 1.064-0.027s0.746 0.010 1.116 0.029l-0.052-0.002c0.403 0 0.932-0.21 1.14 0.34 0.209 0.548-0.23 0.78-0.452 1.106-1.327 1.642-2.227 2.729-3.135 3.81l0.383-0.468c-1.361 1.624-2.712 3.242-4.052 4.854-0.262 0.317-0.556 0.571-1.005 0.41-0.448-0.16-0.353-0.54-0.353-0.923z"></LogoPathCentral>
      </svg>

      <TaskPro>Task Pro</TaskPro>
    </LogoComponentStyled>
  );
};

export default LogoComponent;