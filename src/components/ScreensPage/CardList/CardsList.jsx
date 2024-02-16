import { useSelector } from 'react-redux';
import CardItem from './CardItem';
import { CardContainer } from './CardsList.styled';
import { getColumn } from '../../../redux/task/taskSelectors';

const CardList = ({ columnId }) => {
  const columns = useSelector(getColumn);
  const item = columns.find(column => column._id === columnId);

  return (
    <CardContainer>
      <ul>
        {columns.length > 0 &&
          item.cards.map(card => (
            <li key={card._id}>
              <CardItem
                id={card._id}
                title={card.title}
                description={card.description}
                priority={card.priority}
                deadline={card.deadline}
                columnId={columnId}
              />
            </li>
          ))}
      </ul>
    </CardContainer>
  );
};

export default CardList;
