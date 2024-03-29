import { useState } from 'react';
import ModalBord from '../../../../src/components/Modals/ModalBord/ModalBord';
import { MainText, ButtonCreate, TextContainer } from './Text.styled';

const Text = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <TextContainer>
      <MainText>
        Before starting your project, it is essential
        <ButtonCreate type="button" onClick={openModal}>
          to create a board
        </ButtonCreate>
        to visualize and track all the necessary tasks and milestones. This
        board serves as a powerful tool to organize the workflow and ensure
        effective collaboration among team members.
      </MainText>
      <ModalBord
        isOpen={isOpen}
        openModal={openModal}
        closeModal={closeModal}
      />
    </TextContainer>
  );
};

export default Text;
