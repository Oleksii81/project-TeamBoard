import { useState } from 'react';
import icons from '../../../images/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { getColumn } from '../../../redux/task/taskSelectors';
import { replaceCard } from '../../../redux/task/taskOperations';
import {
  ListColumn,
  ListContainer,
  ListFlex,
  Title,
} from './CardReplace.styled';

const CardReplace = ({ columnIdCurent, idCard }) => {
  const [list, setList] = useState(false);
  const dispatch = useDispatch();

  const columns = useSelector(getColumn);

  const handleColumnChange = id => {
    console.log(columnIdCurent, idCard, id);
    dispatch(
      replaceCard({
        currentIdColumn: columnIdCurent,
        cardId: idCard,
        nextIdColumn: id,
      })
    );
    setList(false);
  };

  const toogleList = () => {
    setList(!list);
  };

  return (
    <>
      <svg width="16" height="16" onClick={toogleList}>
        <use href={`${icons}#icon-goto`}></use>
      </svg>
      <ListContainer>
        {list && (
          <ListColumn>
            {columns.map(column => (
              <ListFlex
                key={column._id}
                onClick={() => handleColumnChange(column._id)}
              >
                <Title
                  className={column._id === columnIdCurent ? 'active' : ''}
                >
                  {column.title}
                </Title>
                <svg
                  width="16"
                  height="16"
                  stroke={
                    column._id === columnIdCurent
                      ? 'var(--greenGreenBlueColor)'
                      : ''
                  }
                >
                  <use href={`${icons}#icon-goto`}></use>
                </svg>
              </ListFlex>
            ))}
          </ListColumn>
        )}
      </ListContainer>
    </>
  );
};

export default CardReplace;
