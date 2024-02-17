import { useDispatch } from 'react-redux';
import { useState } from 'react';

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

import { deleteCard, replaceCard } from '../../../redux/task/taskOperations';
import ModalCard from '../../Modals/ModalCard/ModalCard';

const BoardItem = ({
  card: { title, priority, description, deadline, _id },
  columnId,
}) => {
  const dispatch = useDispatch();

  const [isModalOpen, SetIsModalOpen] = useState(false);
  const onClick = () => {
    SetIsModalOpen(!isModalOpen);
  };

  const handleCardDelete = () => {
    dispatch(deleteCard({ columnId, _id }));
  };

  function formatDate(date) {
    if (date === 'no deadline') {
      return date;
    }
    date = Number(date);
    if (!date) {
      return;
    }

    let time = new Date(date);
    const year = String(time.getFullYear());
    const month = String(time.getMonth() + 1).padStart(2, '0');
    const day = String(time.getDate()).padStart(2, '0');
    return `${day}/${month}/${year}`;
  }

  deadline = formatDate(deadline);

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
          <Button onClick={() => dispatch(replaceCard({ columnId, _id }))}>
            <svg width="16" height="16">
              <use href={`${icons}#icon-goto`}></use>
            </svg>
          </Button>
          <Button onClick={onClick}>
            <svg width="16" height="16">
              <use href={`${icons}#icon-pencil`}></use>
            </svg>
          </Button>
          <Button onClick={handleCardDelete}>
            <svg width="16" height="16">
              <use href={`${icons}#icon-trash`}></use>
            </svg>
          </Button>
        </ButtonContainer>
      </DetailsContainer>
      <CurrentLine priority={priority} />
      <ModalCard
        id={_id}
        columnId={columnId}
        isOpen={isModalOpen}
        openModal={onClick}
        closeModal={() => SetIsModalOpen(false)}
      />
    </ItemCardContainer>
  );
};

export default BoardItem;
