import styled from 'styled-components';

export const StyledBtnProfile = styled.button`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 8px;
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;


  @media screen and (min-width: 768px) {
    gap: 14px;
  }
`;

export const StyledImgProfile = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 8%;


`;

export const StyledProfileName = styled.p`
  color: #161616;
  font-family: 'Poppins-500', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;
