import CreateCardForm from './CreateCardForm/CreateCardForm';
import { OverlayModal } from './AddAnotherCartBtn.styled';

const AddModalCard = ({ isOpen, closeModal }) => {
  return (
    <OverlayModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Modal for Board"
    >
      <CreateCardForm closeModal={closeModal} />
    </OverlayModal>
  );
};

export default AddModalCard;
