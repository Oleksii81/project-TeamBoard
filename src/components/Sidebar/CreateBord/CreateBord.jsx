import ModalBord from '../../../../src/components/Modals/ModalBord/ModalBord';
import { useState } from 'react';

import { Heading, Button, Text, Container } from './CreateBoard.styled';
import icons from '../../../images/sprite.svg';

const CreateBord = ({onCloseSideBar}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  
  const handleButtonClick = () => {
    const currentWidth = window.innerWidth;


  if (currentWidth <= 1439) {
    openModal();
    onCloseSideBar();
  } else {
    openModal();
  }

  }

  return (
    <>
      <Heading>My boards</Heading>
      <Container>
        <Text>
          Create a <br />
          new board
        </Text>
        <Button onClick={handleButtonClick}>
          <svg width="40px" height="36px">
            <use href={`${icons}#icon-plus`}></use>
          </svg>
        </Button>
      </Container>

      <ModalBord
        isOpen={isOpen}
        openModal={openModal}
        closeModal={() => setIsOpen(false)}
      />
    </>
  );
};

export default CreateBord;
