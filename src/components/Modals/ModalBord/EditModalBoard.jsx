import Modal from 'react-modal';
import EditBoardForm from '../../Sidebar/EditBoardForm/EditBoardForm';
import { ModalCustom } from './ModalBord.styled';

Modal.setAppElement('#root');

const EditModalBord = ({ isOpen, closeModal, id }) => {
  return (
    <ModalCustom
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Modal for Edit Board"
    >
      <EditBoardForm id={id} closeModalWindow={closeModal} />
    </ModalCustom>
  );
};

export default EditModalBord;
