import { useSelector } from 'react-redux';
import { AddBoardBtn } from '../../../../src/components/ScreensPage/AddBoardBtn/AddBoardBtn';
import Filter from '../../../../src/components/ScreensPage/Filter/Filter';
import CardList from '../Card/CardList';
import { ContainerMain } from './Bord.styled';

import { getBoardBg } from '../../../../src/redux/task/taskSelectors';
import { getBoard } from '../../../redux/auth/authSelectors';
import ColumnsList from '../../../../src/components/ScreensPage/ColumnsList/ColumnsList';

const Bord = ({ onChangeFilter, setFilterByPriority }) => {
  const background = useSelector(getBoardBg);
  const boards = useSelector(getBoard);
  console.log(boards);

  const activeBoard = boards.find(board => board.isActive);
  console.log(activeBoard);
  // console.log(background);

  return (
    <>
      {activeBoard && (
        <ContainerMain background={activeBoard}>
          {/* <CardList filterByPriority={null} /> */}
          <AddBoardBtn />
          <Filter
            onChangeFilter={onChangeFilter}
            setFilterByPriority={setFilterByPriority}
          />
          <ColumnsList />
        </ContainerMain>
      )}
    </>
  );
};

export default Bord;
