import styled from 'styled-components';
import { StyledBtn } from 'components/shared/Buttons/LigthBtn.styled';

export const StyledModal = styled.div`
  width: 335px;
  padding: 24px 24px;
  border-radius: 8px;
  background-color: var(--popupBackground);
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
  margin-bottom: 25px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  @media screen and (min-width: 768px) {
    width: 400 px;
  }
`;

export const StyledBtnClose = styled.button`
  width: 18px;
  height: 18px;
  padding: 0;
  background-color: transparent;
  border: none;
  position: fixed;
  top: 14px;
  right: 14px;
  svg {
    stroke: var(--buttonColor);
  }
`;

export const StyledModalHeader = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const StyledUserFoto = styled.img`
  width: 68px;
  height: 68px;
  margin-bottom: 39px;
  text-align: center;
  border-radius: 8%;

  // @media screen and (min-width: 768px) {
  //   margin-bottom: 66px;
  // }
`;

export const StyledInputAdd = styled.input`
  display: none;
`;

export const StyledSvgWrapper = styled.button`
  width: 24px;
  height: 24px;
  padding: 0;
  background-color: transparent;
  border: none;
  position: absolute;
  top: 98px;
`;

export const StyledModalForm = styled.form`
  width: 100%;
  padding: 0;
  background-color: transparent;
  border: none;
  position: relative;
`;

export const StyledModalInput = styled.input`
  width: 100%;
  margin-bottom: 18px;
  padding: 16px 24px;
  font-family: 'Poppins-400', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  color: var(--primaryTextColor);
  background-color: transparent;
  border: 1px solid var(--greenGreenBlueColor);
  border-radius: 8px;
  opacity: 0.8;

  @media screen and (min-width: 768px) {
    margin-bottom: 14px;
  }

  &:focus {
    outline: 1px solid var(--createButtonHover);
  }
`;

export const StyledBtnEdit = styled.button`
  width: 26px;
  height: 26px;
  padding: 0;
  background-color: transparent;
  border: none;
  border-radius: 8px;
  position: absolute;
  top: 15px;
  right: 12px;
`;

export const StyledBtnSave = styled(StyledBtn)`
  width: 100%;
  padding: 18px 96px;
  font-family: 'Poppins-600', sans-serif;
  line-height: 18px;
  color: var(--addCardButtonColor);
  background-color: var(--addCardButtonBackground);
  &:hover,
  &:focus {
    background-color: var(--btnColorHover);
  }
`;
export const EditProfileText = styled.p`
  font-family: 'Poppins-600', sans-serif;
  line-height: 18px;
  color: var(--buttonColor)
`;
export const StyledErrorMail = styled.p`
  position: absolute;
  top: calc(45% + 5px); /* Расстояние от поля ввода до сообщения об ошибке */
  left: 0;
  color: red;
  font-size: 10px;
`;
export const StyledErrorName = styled.p`
  position: absolute;
  top: calc(19% + 5px); 
  left: 0;
  color: red;
  font-size: 10px;
`;
export const StyledError = styled.p`
  position: absolute;
  top: calc(71% + 5px); 
  left: 0;
  color: red;
  font-size: 10px;
`;
