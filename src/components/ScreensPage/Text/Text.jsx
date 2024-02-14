import { useState } from 'react';
import ModalBord from '../../../../src/components/Modals/ModalBord/ModalBord';
import { MainText, ButtonCreate } from './Text.styled';
// Add another card code
import AddAnotherCartBtn from '../AddAnotherCartBtn/AddAnotherCartBtn';

const Text = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <MainText>
        Before starting your project, it is essential
        <ButtonCreate type="button" onClick={openModal}>
          to create a board
        </ButtonCreate>
        to visualize and track all the necessary tasks and milestones. This
        board serves as a powerful tool to organize the workflow and ensure
        effective collaboration among team members.
      </MainText>
      {/* Add another card code */}
      <AddAnotherCartBtn />
      <ModalBord
        isOpen={isOpen}
        openModal={openModal}
        closeModal={closeModal}
      />
    </>
  );
};

export default Text;
