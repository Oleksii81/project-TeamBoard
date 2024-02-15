import { OverlayModal } from './AddAnotherCartBtn.styled';
import AddCard from './AddCard/AddCard';

const AddModalCard = ({ isOpen, closeModal , idColumn}) => {
  return (
    <OverlayModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Modal for Board"
    >
      <AddCard closeModalWindow ={closeModal} idColumn={idColumn} />
    </OverlayModal>
  );
};

export default AddModalCard;
