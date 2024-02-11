import Modal from 'react-modal';

import AddColumnForm from '../../../../src/components/ScreensPage/AddColumnForm/AddColumnForm';

import { ModalCustom } from './ModalAddColumn.styled';

Modal.setAppElement('#root');

const ModalAddColumn = ({ isOpen, closeModal }) => {
  return (
    <ModalCustom
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Modal for Columns"
    >
      <AddColumnForm closeModalWindow={closeModal} />
    </ModalCustom>
  );
};

export default ModalAddColumn;
