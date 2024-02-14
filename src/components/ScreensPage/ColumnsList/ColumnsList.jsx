// import { useSelector } from 'react-redux';

import { ColumnItem } from './ColumnsList.styled';

import { ColumnHeader } from '../../../../src/components/ScreensPage/ColumnHeader/ColumnHeader';
import CardList from '../CardList/CardsList';
import AddBoardBtn from '../AddBoardBtn/AddBoardBtn';
// import { getColumn } from '../../../redux/task/taskSelectors';

const ColumnsList = ({ activeBoard }) => {
  // const columns = useSelector(getColumn);
  // console.log(columns);

  const columns = [
    {
      _id: '1',
      title: 'Column 1',
      owner: `${activeBoard._id}`,
    },
    {
      _id: '2',
      title: 'Column 2',
      owner: `${activeBoard._id}`,
    },
    {
      _id: '3',
      title: 'Column 3',
      owner: `${activeBoard._id}`,
    },
  ];

  return (
    <ColumnItem>
      {columns &&
        columns.map(column => (
          <li key={column._id}>
            <ColumnHeader columnId={column._id} title={column.title} />
            <CardList columnId={column._id} filterByPriority={null} />
            {/* ??? <AddAnotherCard columnId={column._id} /> ??? */}
            <AddBoardBtn /> {/*для візуалізації кнопки*/}
          </li>
        ))}
    </ColumnItem>
  );
};

export default ColumnsList;
