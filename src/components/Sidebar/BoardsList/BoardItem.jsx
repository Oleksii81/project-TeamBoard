import { useDispatch } from 'react-redux';

import {
  ItemContainer,
  Title,
  ButtonContainer,
  CurrentLine,
  Button,
  Icon,
} from './BoardsList.styled';

import icons from '../../../images/sprite.svg';

import {
  // editBoard,
  deleteBoard,
} from '../../../redux/auth/authOperations';

const BoardItem = ({ id, isActive, icon, title }) => {
  const dispatch = useDispatch();

  const handleEditBoard = id => {
    // dispatch(editBoard(id))
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
          onClick={() => handleEditBoard(id)}
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
    </ItemContainer>
  );
};

export default BoardItem;
