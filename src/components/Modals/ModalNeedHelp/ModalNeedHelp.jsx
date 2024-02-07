import ReactModal from 'react-modal';
import icons from '../../../images/sprite.svg';

import {
  ModalContainerHelp,
  FormHelp,
  InputHelp,
  ModalTitleHelp,
  CommentHelp,
  BtnSendHelp,
  IconHelp,
} from './ModalNeedHelp.styled';
// import { useDispatch } from 'react-redux';
// import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';

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
