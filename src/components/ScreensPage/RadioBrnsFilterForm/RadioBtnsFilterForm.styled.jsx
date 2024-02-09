import { Form } from 'formik';
import styled from 'styled-components';

export const FormFilter = styled(Form)`
  width: 252px;
  height: 131px;
  position: absolute;
  top: 79px;
  left: 24px;
`;

export const FormHeadersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
`;

export const Header = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: #fff;
`;

export const IconsHeader = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;
  text-decoration: underline;
  color: rgba(255, 255, 255, 0.5);
  transition: 250ms opacity ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

const onSettingColor = props => {
  switch (props.priority) {
    case 'without-priority':
      return 'rgba(255, 255, 255, 0.3)';
    case 'low':
      return 'rgb(143, 161, 208)';
    case 'medium':
      return 'rgb(224, 156, 181)';
    case 'high':
      return 'rgb(190, 219, 176)';
    default:
      return null;
  }
};

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 8px;

  & input {
    background-color: ${onSettingColor};
    margin-right: 8px;
  }
`;