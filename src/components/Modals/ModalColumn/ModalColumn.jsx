import Modal from 'react-modal';
import EditColumn from '../../ScreensPage/Column/EditColumn';
import { ModalCustom } from '../ModalCard/ModalCard.styled';

Modal.setAppElement('#root');

const ModalColumn = ({ isOpen, closeModal, id, idBoard, title }) => {
  return (
    <ModalCustom
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Modal for Edit Column"
    >
      <EditColumn
        id={id}
        closeModalWindow={closeModal}
        idBoard={idBoard}
        title={title}
      />
    </ModalCustom>
  );
};

export default ModalColumn;
