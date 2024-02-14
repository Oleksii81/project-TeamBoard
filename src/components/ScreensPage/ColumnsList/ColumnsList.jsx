import { useSelector } from 'react-redux';
import { ColumnItem } from './ColumnsList.styled';
import { ColumnHeader } from '../../../../src/components/ScreensPage/ColumnHeader/ColumnHeader';
import CardList from '../CardList/CardsList';
import { getColumn, selectBoard } from '../../../redux/task/taskSelectors';
import { useParams } from 'react-router-dom';

const ColumnsList = () => {
  const columns = useSelector(getColumn);
  const boards = useSelector(selectBoard);
  console.log(columns);

  const { idBoard } = useParams();
  const activeBoard = boards.find(board => board._id === idBoard);

  if (activeBoard) {
    return (
      <ColumnItem>
        {columns &&
          columns.length &&
          columns.map(column => (
            <li key={column._id}>
              <ColumnHeader id={column._id} title={column.title} />
              <CardList columnId={column._id} filterByPriority={null} />
              {/* <AddAnotherCard columnId={column._id} /> */}
            </li>
          ))}
      </ColumnItem>
    );
  }
};

export default ColumnsList;
