import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  ColumnHeaderWrapper,
  ColumnHeaderText,
  ColumnHeaderButton,
  ColumnHeaderIcon,
} from './ColumnHeader.styled';
import icons from '../../../images/sprite.svg';
import { deleteColumn } from '../../../redux/task/taskOperations';
import ModalColumn from 'components/Modals/ModalColumn/ModalColumn';

export const ColumnHeader = ({ id, title, idBoard}) => {
  const [isModalOpen, SetIsModalOpen] = useState(false);

  const onClick = () => {
    SetIsModalOpen(!isModalOpen);
  };
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteColumn({ idBoard: idBoard, id: id }))
    }

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
          <ColumnHeaderButton onClick={handleDelete}>
            <ColumnHeaderIcon>
              <use href={`${icons}#icon-trash`}></use>
            </ColumnHeaderIcon>
          </ColumnHeaderButton>
        </div>
      </ColumnHeaderWrapper>
          <ModalColumn
              id={id}
              idBoard={idBoard}
        isOpen={isModalOpen}
        openModal={onClick}
        closeModal={() => SetIsModalOpen(false)}
      /> 
    </>
  );
};
