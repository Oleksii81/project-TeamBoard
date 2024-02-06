import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BoardItem from './BoardItem';
import { BoardsContainer } from './BoadrdsList.styled';

import { getBoard } from '../../../redux/auth/authSelectors';
 import { createBoard } from '../../../redux/auth/authOperations';

const BoardsList = () => {
     const boards = useSelector(getBoard);
     const dispatch = useDispatch();

     useEffect(() => {
       dispatch(createBoard());
     }, [dispatch]);

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
