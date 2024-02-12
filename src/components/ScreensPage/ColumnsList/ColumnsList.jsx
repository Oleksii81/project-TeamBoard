import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

// import BoardItem from './BoardItem';
import {} from './ColumnsList.styled';

import { getColumn } from '../../../redux/task/taskSelectors';
// import { updateBoardActive } from '../../../redux/auth/authOperations';
// import Column from '../../../../src/components/ScreensPage/Column/Column';
import { getBoard } from '../../../redux/auth/authSelectors';
import { getBoardId } from '../../../redux/task/taskOperations.js';
import { ColumnHeader } from '../../../../src/components/ScreensPage/ColumnHeader/ColumnHeader';

const ColumnsList = () => {
  // const boards = useSelector(getBoard);
  // const dispatch = useDispatch();
  // console.log(boards);

  // const activeBoard = boards.find(board => board.isActive);
  // console.log(activeBoard);

  // const columns = activeBoard.column;
  // console.log(columns);

  // const getColumnById = () => {
  // dispatch(getBoardId(activeBoard._id));
  const columns = useSelector(getColumn);
  console.log(columns);

  // };
  // const columns = getColumnById();
  // console.log(columns);

  // const columns = dispatch(getBoardId(activeBoard._id));
  // console.log(columns);

  if (columns && columns.length) {
    return (
      <div>
        {
          <ul>
            {columns.map(column => (
              <li key={column._id}>
                {/* <ColumnHeader column={column} /> */}
                <p>{column.title}</p>
              </li>
            ))}
          </ul>
        }
      </div>
    );
  } else {
    return <div>No columns available</div>;
  }
};

export default ColumnsList;
