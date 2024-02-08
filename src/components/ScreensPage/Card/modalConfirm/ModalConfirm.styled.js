import styled from '@emotion/styled';
import '../../basicStyles/variables.scss';

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const ButtonStyled = styled.button`
  gap: 8px;
  width: 150px;
  height: 49px;
  margin-top: 24px;
  box-sizing: border-box;
  border-radius: 8px;
  border: none;
  background-color: var(--primary-button-color);
  color: var(--shared-button-text-color);
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 14px;
  text-transform: none !important;

  &:hover,
  :focus {
    background-color: var(--secondary-button-color);
  }
`;
