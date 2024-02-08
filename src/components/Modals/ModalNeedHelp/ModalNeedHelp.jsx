import ReactModal from 'react-modal';

import FormNeedHelp from '../../Sidebar/NeedHelp/FormNeedHelp';
import { OverlayModal } from './ModalNeedHelp.styled';

ReactModal.setAppElement('#root');

const ModalNeedHelp = ({ isOpen, onClose }) => {
 
  return (
     
    <OverlayModal
      isOpen={isOpen}
      onRequestClose={onClose}
    >
      <FormNeedHelp closeModal={onClose}/>
      </OverlayModal>
  );
  };


export default ModalNeedHelp;