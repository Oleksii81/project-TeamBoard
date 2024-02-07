import styled from 'styled-components';

export const StyledBtn = styled.button`
  min-width: 132px;
  padding: 14px 40px;
  font-family: 'Manrope-600', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.28;
  text-align: center;
  color: blue;
  background: red;
  border-radius: 8px;
  border: 2px solid transparent;
  outline: transparent;

  &:hover {
    color: orange;
    background: yellow;
    border: 2px solid rgba(243, 243, 243, 0.2);
    transition: grey;
  }

  &:focus,
  &:active {
    border: 2px solid rgba(64, 112, 205, 0.5);
  }
`;
