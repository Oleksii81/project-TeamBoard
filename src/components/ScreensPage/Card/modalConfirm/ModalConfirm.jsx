import Modal from 'components/Modal/Modal';
import ModalTitle from 'components/ModalTitle/ModalTitle';
import { Wrapper, ButtonStyled } from './ModalConfirm.styled';

const ModalConfirm = ({ onConfirm, onClose, title = 'Are you sure?' }) => {
  const handleConfirm = () => {
    onConfirm();
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <ModalTitle>{title}</ModalTitle>
      <Wrapper>
        <ButtonStyled type="button" onClick={handleConfirm}>
          Yes
        </ButtonStyled>
        <ButtonStyled type="button" onClick={handleClose}>
          No
        </ButtonStyled>
      </Wrapper>
    </Modal>
  );
};

export default ModalConfirm;
