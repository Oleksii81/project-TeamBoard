import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EllipsisText from 'react-ellipsis-text';

import ModalCard from 'components/Modals/ModalCard';
import ModalProgress from 'components/Modal/ModalProgress';
import ModalConfirm from 'shared/components/modalConfirm/ModalConfirm';

import { deleteCard } from 'redux/task/taskOperations';
import { getColumn } from 'redux/task/taskSelectors';
import sprite from '../../images/sprite.svg';
import {
  Title,
  CardWrapper,
  SubTitle,
  PrioryTitle,
  PriorySubTitle,
  PriorityWrapper,
  Ball,
  DeadlineSubTitle,
  DeadlineTitle,
  Line,
  Icon,
  IconWrapper,
  Bell,
} from './Card.styled';

const Card = ({ task = {}, columnID }) => {
  const dispatch = useDispatch();
  const columns = useSelector(getColumn);

  const [showModal, setShowModal] = useState(false);
  const [showProgressModal, setShowProgressModal] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const {
    title = ' ',
    description = ' ',
    priority = 'Without',
    deadline = '1/1/2024',
    _id = '',
  } = task;

  const today = new Date();
  const formattedDate = formatDate(today); // Output: "05/01/24"
  const deadlineDate = formatDate(new Date(deadline.split('T')[0]));

  const handleDelete = () => {
    dispatch(deleteCard({ _id, columnID }));
    setShowConfirm(false);
  };

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

  const onOpenProgress = () => {
    setShowProgressModal(true);
  };
  const onCloseProgress = () => {
    setShowProgressModal(false);
  };
  const onCloseProgressOut = e => {
    e.stopPropagation();
    if (showProgressModal) {
      setShowProgressModal(false);
    }
  };

  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${day}/${month}/${year}`;
  }

  return (
    <CardWrapper priority={priority}>
      <div onClick={onCloseProgressOut}>
        <Title>
          <EllipsisText text={title} length={'35'} />
        </Title>
        <SubTitle>{description}</SubTitle>

        <Line />
        <PriorityWrapper>
          <div>
            <PrioryTitle>Priority</PrioryTitle>
            <PriorySubTitle>
              <Ball priority={priority} />
              {priority}
            </PriorySubTitle>
          </div>
          <div>
            <DeadlineTitle>Deadline</DeadlineTitle>
            <DeadlineSubTitle>{deadlineDate}</DeadlineSubTitle>
          </div>
          <IconWrapper isEqualDate={deadlineDate === formattedDate}>
            {deadlineDate === formattedDate && (
              <Bell width="16px" height="16px">
                <use xlinkHref={`${sprite}#icon-bell`} />
              </Bell>
            )}

            {columns.length > 1 && (
              <Icon width="16px" height="16px" onClick={onOpenProgress}>
                <use xlinkHref={`${sprite}#icon-goto`} />
              </Icon>
            )}
            <Icon width="16px" height="16px" onClick={onOpen}>
              <use xlinkHref={`${sprite}#icon-pencil`} />
            </Icon>
            {showModal && (
              <ModalCard
                onClose={onClose}
                title="Edit card"
                btnName="Edit"
                cardTitle={title}
                cardDescription={description}
                currentPriority={priority}
                deadline={deadline}
                column={columnID}
                taskId={_id}
              />
            )}
            <Icon width="16px" height="16px" onClick={handleOpen}>
              <use xlinkHref={`${sprite}#icon-trash`} />
            </Icon>
          </IconWrapper>
        </PriorityWrapper>
        {/* {showConfirm && (
          <ModalConfirm onClose={handleClose} onConfirm={handleDelete} />
        )} */}
      </div>
      {showProgressModal && (
        <ModalProgress onCloseProgress={onCloseProgress} id={[_id, columnID]} />
      )}
    </CardWrapper>
  );
};

export default Card;
