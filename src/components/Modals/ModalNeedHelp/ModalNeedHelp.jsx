import ReactModal from 'react-modal';

const stylesModal = {
  content: {
    position: 'fixed',
    inset: '0',
    top: '10%',
    width: '100%',
    height: '100%,',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ' rgba(0, 0, 0, 0.8)',
    zIndex: 120,
  },
};

ReactModal.setAppElement('#root');

const ModalNeedHelp = ({ isOpen, onClose, onSubmit }) => {
  //   const handleSubmit = e => {
  //     e.preventDefault();
  //     if (input1.trim() === '' || input2.trim() === '') {
  //       alert('Пожалуйста, заполните все поля');
  //       return;
  //     }
  //     onSubmit({ input1, input2 });
  //     onClose();
  //   };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={stylesModal}
      contentLabel="Image Modal"
    ></ReactModal>
  );
};
export default ModalNeedHelp;
