import { useState } from 'react';

import icons from '../../../../src/images/sprite.svg';
import ModalAddColumn from '../../Modals/ModalAddColumn/ModalAddColumn';

import { ColumnAddBtn, SvgDiv } from './AddColumnBtn.styled';

export const AddBoardBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <ColumnAddBtn type="button" onClick={openModal}>
        <SvgDiv>
          <svg>
            <use href={`${icons}#icon-plus`}></use>
          </svg>
        </SvgDiv>
        Add another column
      </ColumnAddBtn>

      <ModalAddColumn
        isOpen={isOpen}
        openModal={openModal}
        closeModal={() => setIsOpen(false)}
      />
    </>
  );
};

export default AddBoardBtn;
