// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

import BoardItem from './BoardItem';
import { BoardsContainer } from './BoadrdsList.styled';

// import { selectBoards } from 'redux/selectors';
// import { fetchBoards } from 'redux/operations';

const BoardsList = () => {
  //   const boards = useSelector(selectBoards);
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(fetchBoards());
  //   }, [dispatch]);

  return (
    <BoardsContainer>
      {boards.length > 0 && (
        <ul>
          {boards.map(board => (
            <li key={board._id}>
              <BoardItem id={board._id} icon={board.icon} title={board.title} />
            </li>
          ))}
        </ul>
      )}
    </BoardsContainer>
  );
};

export default BoardsList;
