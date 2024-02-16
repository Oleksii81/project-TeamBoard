import {
  ButtonAddCard,
  MyPath,
  Btnsquare,
  MySvg,
  Text,
} from './AddAnotherCartBtn.styled';
import AddModalCard from './AddModalCard';
import { useState } from 'react';

const AddAnotherCartBtn = ({ idColumn }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <ButtonAddCard type="button" onClick={openModal}>
        <Btnsquare>
          <MySvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <MyPath d="M31 12h-11v-11c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v11h-11c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h11v11c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-11h11c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1z" />
          </MySvg>
        </Btnsquare>
        <Text>Add another card</Text>
      </ButtonAddCard>
      <AddModalCard
        isOpen={isOpen}
        openModal={openModal}
        closeModal={closeModal}
        idColumn={idColumn}
      />
    </>
  );
};

export default AddAnotherCartBtn;
