import { useDispatch, useSelector } from 'react-redux';
import { AddBoardBtn } from '../AddColumnBtn/AddColumnBtn';
import Filter from '../../../../src/components/ScreensPage/Filter/Filter';
// import CardList from '../Card/CardList';
import { ContainerMain, ContainerForBtnandColumns } from './Bord.styled';

import { selectBoard } from '../../../../src/redux/task/taskSelectors';
import ColumnsList from '../../../../src/components/ScreensPage/ColumnsList/ColumnsList';
import { BoardName } from '../AddColumnBtn/AddColumnBtn.styled';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getActiveBoard } from '../../../redux/task/taskOperations';

const Bord = ({ onChangeFilter, setFilterByPriority }) => {
  const boards = useSelector(selectBoard);
  const { idBoard } = useParams();
  const dispatch = useDispatch();

  const activeBoard = boards.find(board => board._id === idBoard);

  useEffect(() => {
    const fetchBoardData = () => {
      if (idBoard) {
        try {
          dispatch(getActiveBoard(idBoard));
        } catch (error) {
          return error.message;
        }
      }
    };

    fetchBoardData();
  }, [dispatch, idBoard]);

  return (
    <>
      <ContainerMain background={activeBoard}>
        <BoardName>{activeBoard.title}</BoardName>
        <ContainerForBtnandColumns>
          <ColumnsList />
          <AddBoardBtn />
        </ContainerForBtnandColumns>
        <Filter
          onChangeFilter={onChangeFilter}
          setFilterByPriority={setFilterByPriority}
        />
      </ContainerMain>
    </>
  );
};

export default Bord;
