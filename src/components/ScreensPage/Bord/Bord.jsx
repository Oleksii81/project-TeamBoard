import { useSelector } from 'react-redux';
import { AddBoardBtn } from '../../../../src/components/ScreensPage/AddBoardBtn/AddBoardBtn';
import Filter from '../../../../src/components/ScreensPage/Filter/Filter';
import { ContainerMain } from './Bord.styled';

import { getBoardBg } from '../../../../src/redux/task/taskSelectors';
import { getBoard } from '../../../redux/auth/authSelectors';
import ColumnsList from '../../../../src/components/ScreensPage/ColumnsList/ColumnsList';

const Bord = ({ onChangeFilter, setFilterByPriority }) => {
  const background = useSelector(getBoardBg);
  const boards = useSelector(getBoard);

  const activeBoard = boards.find(board => board.isActive);
  console.log(activeBoard);
  console.log(background);

  return (
    <>
      <ContainerMain background={activeBoard}>
        {activeBoard && <AddBoardBtn />}
        {activeBoard && (
          <Filter
            onChangeFilter={onChangeFilter}
            setFilterByPriority={setFilterByPriority}
          />
        )}
        {activeBoard && <ColumnsList activeBoard={activeBoard} />}
      </ContainerMain>
    </>
  );
};

export default Bord;
