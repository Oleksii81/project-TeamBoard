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
import Loader from 'components/Loader/Loader';
import { deleteCard } from '../../../redux/task/taskOperations';
import ModalCard from '../../Modals/ModalCard/ModalCard';
import CardReplace from '../CardList/CardReplace';

const BoardItem = ({
  card: { title, priority, description, deadline, _id },
  columnId,
}) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, SetIsModalOpen] = useState(false);
  const onClick = () => {
    SetIsModalOpen(!isModalOpen);
  };

  function formatDate(date) {
    if (date === 'no deadline') {
      return date;
    }
    date = Number(date);
    if (!date) {
      return;
    }

    let deadlineTime = new Date(date);
    const year = String(deadlineTime.getFullYear());
    const month = String(deadlineTime.getMonth() + 1).padStart(2, '0');
    const day = String(deadlineTime.getDate()).padStart(2, '0');
    return `${day}/${month}/${year}`;
  }

  function countDays(date) {
    if (date === 'no deadline') {
      return true;
    }
    date = Number(date);
    if (!date) {
      return;
    }

    const dateNow = new Date().getTime();
    const remainingTime = date - dateNow;
    const remDays = Math.floor(remainingTime / 1000 / (24 * 60 * 60));
    return remDays < 1 ? false : true;
  }

  // const handleReplaceCard = () => {
  //   setIsLoading(true);
  //   dispatch(replaceCard({ columnId, _id }))
  //     .unwrap()
  //     .then(() => {
  //       setIsLoading(false);
  //     })
  //     .catch(error => {
  //       console.error(error.message);
  //       setIsLoading(false);
  //     });
  // };

  const handleDeleteCard = () => {
    setIsLoading(true);
    dispatch(deleteCard({ columnId, _id }))
      .unwrap()
      .then(() => {
        setIsLoading(false);
      })
      .catch(error => {
        console.error(error.message);
        setIsLoading(false);
      });
  };

  return (
    <ItemCardContainer>
      {isLoading && <Loader />}
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
          <DetailText>{formatDate(deadline)}</DetailText>
        </div>
        <ButtonContainer>
          <Button className="bell">
            <svg
              width="16"
              height="16"
              visibility={countDays(deadline) ? 'hidden' : ''}
            >
              <use href={`${icons}#icon-bell`}></use>
            </svg>
          </Button>
          {/* <Button onClick={handleReplaceCard}> */}
          <Button>
            <CardReplace columnIdCurent={columnId} idCard={_id} />
          </Button>
          <Button onClick={onClick}>
            <svg width="16" height="16">
              <use href={`${icons}#icon-pencil`}></use>
            </svg>
          </Button>
          <Button onClick={handleDeleteCard}>
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
        title={title}
        description={description}
      />
    </ItemCardContainer>
  );
};

export default BoardItem;
