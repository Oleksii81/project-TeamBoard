import { useSelector } from 'react-redux';

import CardItem from './CardItem';
import { CardContainer } from './CardsList.styled';
import { getColumn } from '../../../redux/task/taskSelectors';

const CardList = ({ columnId }) => {
  const columns = useSelector(getColumn);

  return (
    <CardContainer>
      <ul>
        {columns &&
          columns.length > 0 &&
          columns.map(el =>
            el?.cards
              // .filter(task => task.priority === 'low')
              .map(card => (
                <li key={card._id}>
                  <CardItem
                    id={card._id}
                    task={card.title}
                    columnID={columnId}
                  />
                </li>
              ))
          )}
      </ul>
    </CardContainer>
  );
};

export default CardList;
