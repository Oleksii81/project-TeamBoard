import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import BoardItem from './BoardItem';
import { BoardsContainer } from './BoardsList.styled';

import { getBoardSelector } from '../../../redux/auth/authSelectors';
import { updateBoardActive } from '../../../redux/auth/authOperations';

const BoardsList = () => {
  const boards = useSelector(getBoardSelector);

  let reverseBoards = [];
  if (boards) {
    boards.map(board => {
      return reverseBoards.unshift(board);
    });
  }

  const dispatch = useDispatch();

  return (
    <BoardsContainer>
      {boards && boards.length > 0 && (
        <ul>
          {reverseBoards.map(board => (
            <li
              key={board._id}
              onClick={() => dispatch(updateBoardActive(board._id))}
            >
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
