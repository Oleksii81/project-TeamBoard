import Modal from 'react-modal';
import EditCard from 'components/ScreensPage/ColumnHeader/EditModal/EditCard';
import { ModalCustom } from './ModalCard.styled';

Modal.setAppElement('#root');

const ModalCard = ({ isOpen, closeModal, id, columnId}) => {
  return (
    <ModalCustom
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Modal for Edit Board"
    >
      <EditCard id={id} closeModalWindow={closeModal} columnId = {columnId} />
    </ModalCustom>
  );
};

export default ModalCard;
