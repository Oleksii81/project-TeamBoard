import Modal from 'react-modal';
import CreateBoardForm from '../../../../src/components/Sidebar/CreateBoardForm/CreateBoardForm';
import { ModalCustom } from './ModalBord.styled';

Modal.setAppElement('#root');

const ModalBord = ({ isOpen, closeModal }) => {
  return (
    <ModalCustom
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Modal for Board"
    >
      <CreateBoardForm closeModalWindow={closeModal} />
    </ModalCustom>
  );
};

export default ModalBord;
