import styled from 'styled-components';

export const Heading = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: var(--popupColor);
  margin-bottom: 8px;
`;

export const Container = styled.div`
  padding: 14px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border-top: 1px solid var(--modalGorizontalBorderColor);
  border-bottom: 1px solid var(--modalGorizontalBorderColor);
  margin-bottom: 40px;
`;

export const Text = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: var(--primaryTextColor);
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 36px;
  border-radius: 6px;
  border: none;
  background-color: var(--createNewBoardIconBgColor);
  cursor: pointer;
  transition: background-color 250ms ease-in-out;

  &:hover {
    background-color: var(--btnColorHover);
  }

  svg {
    fill: none;
    stroke: black;
  }
`;
