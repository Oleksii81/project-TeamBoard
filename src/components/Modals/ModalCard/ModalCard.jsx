import Modal from 'react-modal';
import EditColumn from 'components/ScreensPage/ColumnHeader/EditModal/EditColumn';
import { ModalCustom } from './ModalCard.styled';

Modal.setAppElement('#root');

const ModalCard = ({ isOpen, closeModal, id }) => {
  return (
    <ModalCustom
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Modal for Edit Board"
    >
      <EditColumn id={id} closeModalWindow={closeModal} />
    </ModalCustom>
  );
};

export default ModalCard;
