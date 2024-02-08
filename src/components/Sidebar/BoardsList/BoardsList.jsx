import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BoardItem from './BoardItem';
import { BoardsContainer } from './BoardsList.styled';

import { getBoardSelector } from '../../../redux/auth/authSelectors';
import { updateBoardActive } from '../../../redux/auth/authOperations';

const BoardsList = () => {
  const boards = useSelector(getBoardSelector);
  console.log(boards);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch();
  }, [dispatch]);

  const handleClickActive = id => {
    console.log(id);
    dispatch(updateBoardActive(id, true));
  };

  return (
    <BoardsContainer>
      {boards.length > 0 && (
        <ul>
          {boards.map(board => (
            <li key={board._id} onClick={() => handleClickActive(board._id)}>
              <BoardItem
                id={board._id}
                isActive={board.isActive}
                icon={board.icnboard}
                title={board.title}
              />
            </li>
          ))}
        </ul>
      )}
    </BoardsContainer>
  );
};

export default BoardsList;
