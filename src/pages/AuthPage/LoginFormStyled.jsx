import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLinks = styled.div`
  padding-top: 40px;
  margin-left: 40px;
`;
export const StyledLink = styled(NavLink)`
  color: rgba(255, 255, 255, 0.3);
  text-decoration: none;
  margin-left: 14px;

  &.active {
    color: #fff;
  }
`;
export const FormContainer = styled.div`
  margin-left: auto;
  margin-right: auto;

  border-radius: 8px;
  width: 424px;
  height: 332px;
  background: #151515;
`;
