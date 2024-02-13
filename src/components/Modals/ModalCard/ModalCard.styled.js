import styled from 'styled-components';
import Modal from 'react-modal';

export const ModalCustom = styled(Modal)`
  position: relative;
  border: 1px solid var(--modalGorizontalBorderColor);
  border-radius: 8px;
  background-color: var(--cardItem);
  border-radius: 8px;
  width: 335px;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  padding: 24px;
  z-index: 1000;

  @media screen and (min-width: 768px) {
    width: 350px;
  }
`;