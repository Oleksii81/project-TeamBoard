// import { useDispatch } from 'react-redux';
// import { useState } from 'react';

import {
  ItemCardContainer,
  Title,
  Description,
  Line,
  ButtonContainer,
  Button,
  DetailsContainer,
  DetailName,
  DetailText,
  DetailCircle,
  DivFlex,
  CurrentLine,
} from './CardsList.styled';

import icons from '../../../images/sprite.svg';

// import { deleteCard, replaceCard } from '../../../redux/task/taskOperations';
// import ModalEditCard from 'components/Modals/ModalCard/ModalEditCard';

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
      <Line />
      <DetailsContainer>
        <div>
          <DetailName>Priority</DetailName>
          <DivFlex>
            <DetailCircle priority={priority} />
            <DetailText>{priority}</DetailText>
          </DivFlex>
        </div>
        <div>
          <DetailName>Deadline</DetailName>
          <DetailText>{deadline}</DetailText>
        </div>
        <ButtonContainer>
          <Button className="bell">
            <svg width="16" height="16">
              <use href={`${icons}#icon-bell`}></use>
            </svg>
          </Button>
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
      </DetailsContainer>
      <CurrentLine priority={priority} />
      {/* <ModalEditCard
        id={id}
        isOpen={isOpen}
        openModal={openModal}
        closeModal={() => setIsOpen(false)}
      /> */}
    </ItemCardContainer>
  );
};

export default BoardItem;
