import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EllipsisText from 'react-ellipsis-text';

import ModalColumn from 'components/Modals/ModalColumn/ModalColumn';
import ModalConfirm from '../Card/modalConfirm/ModalConfirm';

import { deleteColumn } from 'redux/task/taskOperations';
import { getColumn } from 'redux/task/taskSelectors';
import icons from '../../../images/sprite.svg';
import { BoardItem, IconEdit, IconEditCustom, ProgName } from './Сolumn.styled';

const Column = ({ title, columnId }) => {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const getColumns = useSelector(getColumn);
  const tasksInColumn = getColumns.filter(el => el._id === columnId);

  const handleOpen = () => {
    setShowConfirm(true);
  };

  const handleClose = () => {
    setShowConfirm(false);
  };

  const onOpen = () => {
    setShowModal(true);
  };
  const onClose = () => {
    setShowModal(false);
  };

  const handleDelete = () => {
    dispatch(deleteColumn(columnId));
    setShowConfirm(false);
  };

  return (
    <BoardItem>
      <ProgName>
        <div>
          <EllipsisText text={title} length={'30'} />
        </div>
      </ProgName>
      <IconEditCustom>
        <IconEdit onClick={onOpen}>
          <use href={`${icons}#icon-pencil`}></use>
        </IconEdit>
        <IconEdit onClick={handleOpen}>
          <use href={`${icons}#icon-trash`}></use>
        </IconEdit>
      </IconEditCustom>
      {showModal && (
        <ModalColumn
          onClose={onClose}
          title="Edit column"
          btnName="Edit"
          columnTitle={title}
          column={columnId}
        />
      )}
      {showConfirm && (
        <ModalConfirm
          onClose={handleClose}
          onConfirm={handleDelete}
          title={
            tasksInColumn[0]?.tasks?.length
              ? 'There are tasks inside the column. Are you sure to delete this column?'
              : 'Are you sure?'
          }
        />
      )}
    </BoardItem>
  );
};

export default Column;
