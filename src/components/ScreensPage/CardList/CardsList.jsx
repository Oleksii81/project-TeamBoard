import { useSelector } from 'react-redux';
import CardItem from './CardItem';
import { CardContainer } from './CardsList.styled';
import { getColumn } from '../../../redux/task/taskSelectors';

const CardList = ({ columnId, selectedValue }) => {
  console.log(selectedValue);
  const columns = useSelector(getColumn);
  const item = columns.find(column => column._id === columnId);

  return (
    <CardContainer>
      <ul>
        {columns.length > 0 &&
          item.cards
            .filter(card => card?.priority.includes(selectedValue))
            .map(card => (
              <li key={card._id}>
                <CardItem card={card} columnId={columnId} />
              </li>
            ))}
      </ul>
    </CardContainer>
  );
};

export default CardList;
