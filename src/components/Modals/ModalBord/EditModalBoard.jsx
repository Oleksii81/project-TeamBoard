import Modal from 'react-modal';
import EditBoardForm from '../../../../src/components/Sidebar/EditBoardForm/EditBoardForm';
import { ModalCustom } from './ModalBord.styled';

Modal.setAppElement('#root');

const EditModalBord = ({ isOpen, closeModal }) => {
  return (
    <ModalCustom
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Modal for Edit Board"
    >
      <EditBoardForm closeModalWindow={closeModal} />
    </ModalCustom>
  );
};

export default EditModalBord;
