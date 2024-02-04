import styled from 'styled-components';

export const Heading = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;
  /* color: rgba(255, 255, 255, 0.5); */
  color: black;
  margin-bottom: 8px;
`;

export const Container = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 40px;
`;

export const Text = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  /* color: #fff; */
  color: black;
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 36px;
  border-radius: 6px;
  border: none;
  background-color: rgba(190, 219, 176, 1);
  cursor: pointer;
  transition: background-color 250ms ease-in-out;

  &:hover {
    background-color: rgba(157, 200, 136, 1);
  }

  svg {
    fill: none;
    stroke: black;
  }
`;
