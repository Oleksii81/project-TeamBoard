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
    backgroundColor: ' rgba(0, 0, 0, 0.4)',
    zIndex: 120,
  },
};

ReactModal.setAppElement('#root');

const ModalNeedHelp = ({ isOpen, onClose, onSubmit }) => {
  // const dispatch = useDispatch();

  // const handleSubmit = evt => {
  //   evt.preventDefault();
  //   const form = evt.currentTarget;
  //   dispatch();
  // };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={stylesModal}
      contentLabel="Image Modal"
    >
      <ModalContainerHelp>
        <ModalTitleHelp>Need help</ModalTitleHelp>
        <IconHelp onClick={onClose}>
          <use href={`${icons}#icon-close`}></use>
        </IconHelp>
        <FormHelp>
          <InputHelp
            type="email"
            name="email"
            required
            placeholder="Email address"
          />
          <CommentHelp
            type="comment"
            name="comment"
            required
            placeholder="Comment"
          />
          <BtnSendHelp>Send</BtnSendHelp>
        </FormHelp>
      </ModalContainerHelp>
    </ReactModal>
  );
};


export default ModalNeedHelp;