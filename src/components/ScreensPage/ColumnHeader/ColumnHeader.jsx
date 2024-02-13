import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  ColumnHeaderWrapper,
  ColumnHeaderText,
  ColumnHeaderButton,
  ColumnHeaderIcon,
} from './ColumnHeader.styled';
import icons from '../../../images/sprite.svg';
import ModalCard from 'components/Modals/ModalCard/ModalCard';
import { deleteColumn } from '../../../redux/task/taskOperations';

export const ColumnHeader = ({ id, title }) => {
  const [isModalOpen, SetIsModalOpen] = useState(false);

  const onClick = () => {
    SetIsModalOpen(!isModalOpen);
  };
  const dispatch = useDispatch();

  return (
    <>
      <ColumnHeaderWrapper>
        <ColumnHeaderText>{title}</ColumnHeaderText>
        <div>
          <ColumnHeaderButton onClick={onClick}>
            <ColumnHeaderIcon>
              <use href={`${icons}#icon-pencil`}></use>
            </ColumnHeaderIcon>
          </ColumnHeaderButton>
          <ColumnHeaderButton onClick={() => dispatch(deleteColumn(id))}>
            <ColumnHeaderIcon>
              <use href={`${icons}#icon-trash`}></use>
            </ColumnHeaderIcon>
          </ColumnHeaderButton>
        </div>
      </ColumnHeaderWrapper>
      <ModalCard
        isOpen={isModalOpen}
        openModal={onClick}
        closeModal={() => SetIsModalOpen(false)}
      />
    </>
  );
};
