import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import BoardItem from './BoardItem';
import { BoardsContainer } from './BoardsList.styled';

import { getBoardSelector } from '../../../redux/auth/authSelectors';
// import { getBoardApi, patchBoardApi } from '../../../services/backApi';
import {
  getAllBoards,
  updateBoardActive,
} from '../../../redux/auth/authOperations';
import { useDispatch } from 'react-redux';

const BoardsList = () => {
  const boards = useSelector(getBoardSelector);
  console.log(boards);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBoards());
  }, [dispatch]);

  return (
    <BoardsContainer>
      {boards && boards.length > 0 && (
        <ul>
          {boards.map(board => (
            <li key={board._id} onClick={() => updateBoardActive(board._id)}>
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
