import { useSelector } from 'react-redux';
import BoardItem from './BoardItem';
import { BoardsContainer } from './BoardsList.styled';
// import { getBoardSelector } from '../../../redux/auth/authSelectors';
// import { useParams } from 'react-router-dom';
import { selectBoard } from '../../../redux/task/taskSelectors';

const BoardsList = () => {
  // const { idBoard } = useParams();
  const boards = useSelector(selectBoard);
  console.log(boards);

  // const activeBoard = boards.find(board => board._id === idBoard);
  // const boards = useSelector(getBoardSelector);

  let reverseBoards = [];
  if (boards) {
    boards.map(board => {
      return reverseBoards.unshift(board);
    });
  }

  return (
    <BoardsContainer>
      {boards && boards.length > 0 && (
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
      )}
    </BoardsContainer>
  );
};

export default BoardsList;
