import { useDispatch } from 'react-redux';
import { useState } from 'react';

import {
  ItemContainer,
  Title,
  ButtonContainer,
  CurrentLine,
  Button,
  Icon,
} from './BoardsList.styled';

import icons from '../../../images/sprite.svg';

import { deleteBoard } from '../../../redux/auth/authOperations';
import EditModalBord from 'components/Modals/ModalBord/EditModalBoard';

const BoardItem = ({ id, isActive, icon, title }) => {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <ItemContainer className={isActive ? 'activeBoard' : ''}>
      <Icon className={isActive ? 'activeBoardIcon' : ''}>
        <svg width="18" height="18">
          <use href={`${icons}#${icon}`}></use>
        </svg>
      </Icon>
      <Title className={isActive ? 'activeBoardTitle' : ''}>{title}</Title>
      <ButtonContainer>
        <Button
          className={isActive ? 'activeBoardButton' : ''}
          onClick={() => openModal()}
        >
          <svg width="16" height="16">
            <use href={`${icons}#icon-pencil`}></use>
          </svg>
        </Button>
        <Button
          className={isActive ? 'activeBoardButton' : ''}
          onClick={() => dispatch(deleteBoard(id))}
        >
          <svg width="16" height="16">
            <use href={`${icons}#icon-trash`}></use>
          </svg>
        </Button>
      </ButtonContainer>
      <CurrentLine className={isActive ? 'activeLine' : ''} />
      <EditModalBord
        id={id}
        isOpen={isOpen}
        openModal={openModal}
        closeModal={() => setIsOpen(false)}
      />
    </ItemContainer>
  );
};

export default BoardItem;
