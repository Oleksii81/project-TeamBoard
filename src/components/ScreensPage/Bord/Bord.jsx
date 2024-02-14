import { useSelector } from 'react-redux';
import { AddBoardBtn } from '../../../../src/components/ScreensPage/AddBoardBtn/AddBoardBtn';
import Filter from '../../../../src/components/ScreensPage/Filter/Filter';
// import CardList from '../Card/CardList';
import { ContainerMain } from './Bord.styled';

import { selectBoard } from '../../../../src/redux/task/taskSelectors';
import ColumnsList from '../../../../src/components/ScreensPage/ColumnsList/ColumnsList';
import { BoardName } from '../AddBoardBtn/AddBoardBtn.styled';
import { useParams } from 'react-router-dom';

const Bord = ({ onChangeFilter, setFilterByPriority }) => {
  const boards = useSelector(selectBoard);
  console.log(boards);

  const { idBoard } = useParams();

  const activeBoard = boards.find(board => board._id === idBoard);
  console.log(activeBoard);

  return (
    <>
      <ContainerMain background={activeBoard}>
        <BoardName>{activeBoard.title}</BoardName>

        <ColumnsList activeBoard={activeBoard} />
        <AddBoardBtn />
        <Filter
          onChangeFilter={onChangeFilter}
          setFilterByPriority={setFilterByPriority}
        />
      </ContainerMain>
    </>
  );
};

export default Bord;
