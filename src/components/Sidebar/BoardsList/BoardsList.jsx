import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import BoardItem from './BoardItem';
import { BoardsContainer } from './BoardsList.styled';

import { getBoardSelector } from '../../../redux/auth/authSelectors';

import { getBoardApi } from '../../../services/backApi';

const BoardsList = () => {
  const boards = useSelector(getBoardSelector);
  console.log(boards);

  useEffect(() => {}, []);

  const handleClickActive = id => getBoardApi(id);

  return (
    <BoardsContainer>
      {boards !== undefined && boards.length > 0 && (
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
