import Modal from 'react-modal';
import CreateBoardForm from '../../../../src/components/Sidebar/CreateBoardForm/CreateBoardForm';

const customStyles = {
  content: {
    border: '1px solid rgba(190, 219, 176, 0.5)',
    backgroundColor: '#121212',
    borderRadius: '8px',
    width: '335px',
    height: '433px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0',
  },
};

Modal.setAppElement('#root');

const ModalBord = ({ isOpen, closeModal, onSubmit }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Modal for Board"
    >
      <CreateBoardForm onModalSubmit={onSubmit} closeModalWindow={closeModal} />
    </Modal>
  );
};

export default ModalBord;
