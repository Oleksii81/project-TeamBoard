import styled from 'styled-components';
import { StyledBtn } from 'components/shared/Buttons/LigthBtn.styled';

export const StyledModal = styled.div`
  width: 335px;
  padding: 24px 24px;
  border-radius: 8px;
  background-color: #fcfcfc;
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
  margin-bottom: 25px;
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
    stroke: black;
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
  color: #161616;
  background-color: transparent;
  border: 1px solid #bedbb0;
  border-radius: 8px;
  opacity: 0.8;

  @media screen and (min-width: 768px) {
    margin-bottom: 14px;
  }

  &:focus {
    outline: 1px solid #9dc888;
  }
`;

export const StyledBtnEdit = styled.button`
  width: 24px;
  height: 24px;
  padding: 0;
  background-color: transparent;
  border: none;
  border-radius: 8px;
  position: absolute;
  top: 17px;
  right: 19px;
`;

export const StyledBtnSave = styled(StyledBtn)`
  width: 100%;
  padding: 18px 96px;
  font-family: 'Poppins-600', sans-serif;
  line-height: 18px;
  color: #161616;
  background-color: #bedbb0;
  &:hover,
  &:focus {
    background-color: #9dc888;
    color: #161616;
  }
`;

export const Ellipse222 = styled.div`
  pointer-events: none;
  z-index: -1;
  width: 283.617px;
  height: 306.702px;
  border-radius: 306.702px;
  background: rgba(188, 230, 210, 0.4);
  filter: blur(104.8543701171875px);

  position: absolute;
  top: -153px;
  left: -84px;
`;

export const Ellipse224 = styled.div`
  pointer-events: none;
  z-index: -1;
  width: 362px;
  height: 358px;
  border-radius: 362px;
  background: rgba(64, 112, 205, 0.5);
  filter: blur(104.8543701171875px);

  position: absolute;
  bottom: -271px;
  right: -304px;
`;
