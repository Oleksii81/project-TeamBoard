import { useState } from 'react';
import {
  ColumnHeaderWrapper,
  ColumnHeaderText,
  ColumnHeaderButton,
  ColumnHeaderIcon,
} from './ColumnHeader.styled';
import icons from '../../../images/sprite.svg';
import ModalCard from 'components/Modals/ModalCard/ModalCard';

export const ColumnHeader = ({ column }) => {
  const [isModalOpen, SetIsModalOpen] = useState(false);
  const { title } = column;

  const onClick = () => {
    SetIsModalOpen(!isModalOpen);
  };
  const deleteColumns = () => {
    console.log('delete');
  };

  return (
    <>
      <ColumnHeaderWrapper>
        <ColumnHeaderText>{title}</ColumnHeaderText>

        <ColumnHeaderButton onClick={onClick}>
          <ColumnHeaderIcon>
            <use href={`${icons}#icon-pencil`}></use>
          </ColumnHeaderIcon>
        </ColumnHeaderButton>
        <ColumnHeaderButton onClick={deleteColumns}>
          <ColumnHeaderIcon>
            <use href={`${icons}#icon-trash`}></use>
          </ColumnHeaderIcon>
        </ColumnHeaderButton>
      </ColumnHeaderWrapper>
      <ModalCard
        isOpen={isModalOpen}
        openModal={onClick}
        closeModal={() => SetIsModalOpen(false)}
      />
    </>
  );
};
