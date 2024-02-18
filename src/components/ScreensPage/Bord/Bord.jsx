import { useDispatch, useSelector } from 'react-redux';
import { AddBoardBtn } from '../AddColumnBtn/AddColumnBtn';
import Filter from '../../../../src/components/ScreensPage/Filter/Filter';
import { ContainerMain, ContainerForBtnandColumns } from './Bord.styled';

import { selectBoard } from '../../../../src/redux/task/taskSelectors';
import ColumnsList from '../../../../src/components/ScreensPage/ColumnsList/ColumnsList';
import { BoardName } from '../AddColumnBtn/AddColumnBtn.styled';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getActiveBoard } from '../../../redux/task/taskOperations';
import Loader from 'components/Loader/Loader';

const Bord = () => {
  const boards = useSelector(selectBoard);
  const { idBoard } = useParams();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  //Filter logic
  const [selectedValue, setSelectedValue] = useState('');

  const removeFilters = () => {
    setSelectedValue('');
  };

  const onRadioChange = event => {
    const { value } = event.target;
    setSelectedValue(value);
  };
  //filter logic

  const activeBoard = boards.find(board => board._id === idBoard);

  useEffect(() => {
    const fetchBoardData = () => {
      if (idBoard) {
        try {
          setIsLoading(true);
          dispatch(getActiveBoard(idBoard));
        } catch (error) {
          return error.message;
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchBoardData();
  }, [dispatch, idBoard]);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <ContainerMain background={activeBoard}>
        <BoardName>{activeBoard.title}</BoardName>
        <ContainerForBtnandColumns>
          <ColumnsList selectedValue={selectedValue} />
          <AddBoardBtn />
        </ContainerForBtnandColumns>
        <Filter
          onRadioChange={onRadioChange}
          removeFilters={removeFilters}
          selectedValue={selectedValue}
        />
      </ContainerMain>
    </>
  );
};

export default Bord;
