import styled from 'styled-components';
import { /*Formik,*/ Field, /*Form*/ } from 'formik';
export const Container = styled.div`
  height: 522px;
`;

export const TextAddCard = styled.p`
  color: white;
  margin-bottom: 24px;
`;

export const IconCloseModal = styled.button`
  margin: 0;
  padding: 0;
  background: transparent;
  position: absolute;
  border: none;
  right: 14px;
  top: 14px;
  cursor: pointer;
  width: 18px;
  height: 18px;
  fill: none;
  stroke: var(--buttonColor);

  @media (max-width: 768px) {
    left: 335px;
    cursor: auto;
  }
`;

export const SvgForm = styled.svg`
  width: 18px;
  height: 18px;
  position: absolute;
  top: -1px;
  right: -2px;
  @media screen and (max-width: 768px) {
    right: 33px;
    cursor: pointer;
  }
`;

// стили Формика
export const FormCreateCard = styled.form`
  display: inline-block;
  height: 522px;
`;

export const InputCreateCard = styled(Field)`
  border: 1px solid var(--greenGreenBlueColor);
  border-radius: 8px;
  background-color: var(--popupBackground);
  width: 302px;
  height: 49px;
  margin-bottom: 14px;
  padding-left: 15px;
  color: var(--primaryTextColor);

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.02em;
    color: var(--secondaryTextColor);
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    width: 287px;
  }
`;

// export const CommentCreateCard = styled.(Field)`
//   border: 1px solid var(--greenGreenBlueColor);
//   height: 120px;
//   border-radius: 8px;
//   background-color: black;
//   background-color: var(--popupBackground);
//   width: 302px;
//   height: 120px;
//   margin-bottom: 24px;
//   resize: none;
//   padding-left: 15px;
//   padding-top: 14px;
//   color: var(--primaryTextColor);

//   &::placeholder {
//     font-weight: 400;
//     font-size: 14px;
//     letter-spacing: -0.02em;
//     color: var(--secondaryTextColor);
//   }

//   &:focus {
//     outline: none;
//   }

//   @media (max-width: 768px) {
//     width: 287px;
//   }
// `;

export const EditCardLabel = styled.p`
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: var(--popupColor);
  margin-bottom: 4px;
`;

export const EditButton = styled.button`
  width: 302px;
  height: 49px;
  border-radius: 8px;
  background-color: var(--addCardButtonBackground);
  cursor: pointer;
  &:active {
    background-color: var(--createButtonHover);
  }
`;

export const CalendarWrapp = styled.div`
  display: flex;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 40px;
  transition: opacity var(--transition_data);
  &:hover {
    opacity: 0.7;
  }
  &:focus {
    opacity: 0.7;
  }
`;

export const CalendarText = styled.span`
  color: var(--greenGreenBlueColor);
  margin-right: 4px;
`;

export const CalendarArrow = styled.svg`
  width: 18px;
  height: 18px;
  stroke: var(--greenGreenBlueColor);
`;
