import ReactModal from 'react-modal';
import FormNeedHelp from '../../Sidebar/NeedHelp/FormNeedHelp';

const stylesModal = {
  content: {
    position: 'fixed',
    inset: '0',
    top: '0',
    width: '100%',
    height: '100%,',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'var(--helpBgColor)',
    backgroundColor: 'var(--helpBgColor)',
    zIndex: 120,
  },
};

ReactModal.setAppElement('#root');

const ModalNeedHelp = ({ isOpen, onClose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={stylesModal}
      contentLabel="Image Modal"
    >
      <FormNeedHelp closeModal={onClose} />
    </ReactModal>
  );
};

export default ModalNeedHelp;
