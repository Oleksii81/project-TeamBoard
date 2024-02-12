import { useSelector } from 'react-redux';

// import BoardItem from './BoardItem';
import {} from './ColumnsList.styled';

import { getColumn } from '../../../../src/redux/task/taskSelectors';
// import { updateBoardActive } from '../../../redux/auth/authOperations';
// import Column from '../../../../src/components/ScreensPage/Column/Column';
import { getBoard } from '../../../redux/auth/authSelectors';
import { getBoardId } from '../../../redux/task/taskOperations.js';

const ColumnsList = () => {
  // const boards = useSelector(getBoard);
  // console.log(boards);

  // const activeBoard = boards.find(board => board.isActive);

  // const columns = activeBoard.column;
  // console.log(columns);
  const columns = useSelector(getColumn);
  // const getColumnById = async () => {
  //   return getBoardId(activeBoard._id);
  // };
  // const columns = getColumnById();
  // console.log(columns);

  if (columns && columns.length) {
    return (
      <div>
        {
          <ul>
            {columns.map(column => (
              <li key={column._id}>
                <p>{column.title}</p>
                {/* <Column/> */}
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
