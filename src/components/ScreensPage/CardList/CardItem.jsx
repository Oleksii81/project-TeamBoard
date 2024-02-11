// import { useDispatch } from 'react-redux';
// import { useState } from 'react';

import {
  ItemCardContainer,
  Title,
  Description,
  ButtonContainer,
  Button,
  CurrentLine,
  DetailsContainer,
  Detail,
} from './CardsList.styled';

import icons from '../../../images/sprite.svg';

// import { deleteCard, replaceCard } from '../../../redux/task/taskOperations';
// import EditModalCard from 'components/Modals/ModalBord/EditModalBoard';

const BoardItem = ({ id, title, description, priority, deadline }) => {
  //   const dispatch = useDispatch();

  //   const [isOpen, setIsOpen] = useState(false);

  //   const openModal = () => {
  //     setIsOpen(true);
  //   };

  return (
    <ItemCardContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <DetailsContainer>
        <Detail>Priority</Detail>
        <Detail>Deadline</Detail>
      </DetailsContainer>
      <ButtonContainer>
        <Button
        //   onClick={() => dispatch(replaceCard(id))}
        >
          <svg width="16" height="16">
            <use href={`${icons}#icon-goto`}></use>
          </svg>
        </Button>
        <Button
        //   onClick={() => openModal()}
        >
          <svg width="16" height="16">
            <use href={`${icons}#icon-pencil`}></use>
          </svg>
        </Button>
        <Button
        //   onClick={() => dispatch(deleteCard(id))}
        >
          <svg width="16" height="16">
            <use href={`${icons}#icon-trash`}></use>
          </svg>
        </Button>
      </ButtonContainer>
      <CurrentLine />
      {/* <EditModalCard
        id={id}
        isOpen={isOpen}
        openModal={openModal}
        closeModal={() => setIsOpen(false)}
      /> */}
    </ItemCardContainer>
  );
};

export default BoardItem;
