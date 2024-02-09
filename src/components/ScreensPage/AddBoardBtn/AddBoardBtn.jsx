import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { getBoard } from '../../../redux/auth/authSelectors';
import icons from '../../../../src/images/sprite.svg';
import ModalAddColumn from '../../../../src/components/Modals/ModalAddColumn/ModalAddColumn';

import { BoardName, ColumnAddBtn, SvgDiv } from './AddBoardBtn.styled';

export const AddBoardBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const boards = useSelector(getBoard);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <BoardName>
        {/* {boards.title} */}
        Title
      </BoardName>

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
