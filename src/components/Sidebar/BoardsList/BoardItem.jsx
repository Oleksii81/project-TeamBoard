import { useDispatch } from 'react-redux';

import {
  ItemContainer,
  Title,
  ButtonContainer,
  // CurrentLine,
  Button,
  Icon,
} from './BoardsList.styled';

import icons from '../../../images/sprite.svg';

import { editBoard, deleteBoard } from '../../../redux/auth/authOperations';

const BoardItem = ({ id, isActive, icon, title }) => {
  const dispatch = useDispatch();
  const handleEditContact = id => dispatch(editBoard(id));
  const handleDeleteContact = id => dispatch(deleteBoard(id));

  return (
    <ItemContainer className={isActive ? 'activeBoard' : ''}>
      <Icon className={isActive ? 'activeBoard' : ''}>
        <svg width="18" height="18">
          <use href={`${icons}#icon-${icon}`}></use>
        </svg>
      </Icon>
      <Title className={isActive ? 'activeBoard' : ''}>{title}</Title>
      <ButtonContainer>
        <Button
          className={isActive ? 'activeBoard' : ''}
          onClick={() => handleEditContact(id)}
        >
          <svg width="16" height="16">
            <use href={`${icons}#icon-pencil`}></use>
          </svg>
        </Button>
        <Button
          className={isActive ? 'activeBoard' : ''}
          onClick={() => handleDeleteContact(id)}
        >
          <svg width="16" height="16">
            <use href={`${icons}#icon-trash`}></use>
          </svg>
        </Button>
      </ButtonContainer>
      {/* <CurrentLine /> */}
    </ItemContainer>
  );
};

export default BoardItem;
