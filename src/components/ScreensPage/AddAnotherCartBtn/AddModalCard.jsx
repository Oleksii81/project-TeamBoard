import CreateCardForm from './CreateCardForm/CreateCardForm';
import { OverlayModal } from './AddAnotherCartBtn.styled';
import AddCard from './AddCard/AddCard';

const AddModalCard = ({ isOpen, closeModal }) => {
  return (
    <OverlayModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Modal for Board"
    >
      <AddCard closeModalWindow ={closeModal} />
    </OverlayModal>
  );
};

export default AddModalCard;
