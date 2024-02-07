import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BoardItem from './BoardItem';
import { BoardsContainer } from './BoardsList.styled';

import { getBoard } from '../../../redux/auth/authSelectors';
import { createBoard } from '../../../redux/auth/authOperations';

const BoardsList = () => {
  const boards = useSelector(getBoard);
  // const boards = [
  //   { _id: '1', isActive: true, icon: 'project', title: 'Title 1' },
  //   { _id: '2', isActive: false, icon: 'star', title: 'Title 2' },
  //   { _id: '3', isActive: false, icon: 'puzzle', title: 'Title 3' },
  // ];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createBoard());
  }, [dispatch]);

  console.log(boards);

  const handleClickActive = () => {};

  return (
    <BoardsContainer>
      {boards.length > 0 && boards[1] !== null && (
        <ul>
          {boards.map(board => (
            <li key={board._id} onClick={() => handleClickActive(board._id)}>
              <BoardItem
                id={board._id}
                isActive={board.isActive}
                icon={board.icon}
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
