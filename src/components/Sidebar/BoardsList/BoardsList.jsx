import { useSelector } from 'react-redux';
import BoardItem from './BoardItem';
import { BoardsContainer } from './BoardsList.styled';

import { selectBoard } from '../../../redux/task/taskSelectors';

const BoardsList = () => {
  const boards = useSelector(selectBoard);
  console.log(boards);

  let reverseBoards = [];
  if (boards) {
    boards.map(board => {
      return reverseBoards.unshift(board);
    });
  }

  return (
    <BoardsContainer>
      {boards && boards.length > 0 ? (
        <ul>
          {reverseBoards.map(board => (
            <li key={board._id}>
              <BoardItem
                to={`/home/${board._id}`}
                id={board._id}
                icon={board.icnboard}
                title={board.title}
              />
            </li>
          ))}
        </ul>
      ) : (
        <div style={{ display: 'none' }}></div>
      )}
    </BoardsContainer>
  );
};

export default BoardsList;
