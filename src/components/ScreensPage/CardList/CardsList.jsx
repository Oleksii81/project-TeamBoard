// import { useSelector } from 'react-redux';

import CardItem from './CardItem';
import { CardsContainer } from './CardsList.styled';

// import { getCarddSelector } from '../../../redux/task/taskSelectors';

const CadrsList = () => {
  //   const cards = useSelector();
  // const cards = [
  //   {
  //     id: '1',
  //     title: 'Title1',
  //     description: 'description1',
  //     priority: 'priority',
  //     deadline: 'deadline',
  //   },
  //   {
  //     id: '2',
  //     title: 'Title2',
  //     description: 'description2',
  //     priority: 'priority',
  //     deadline: 'deadline',
  //   },
  // ];

  return (
    <CardsContainer>
      {cards && cards.length > 0 && (
        <ul>
          {cards.map(card => (
            <li key={card._id}>
              <CardItem
                id={card._id}
                title={card.title}
                description={card.description}
                priority={card.priority}
                deadline={card.deadline}
              />
            </li>
          ))}
        </ul>
      )}
    </CardsContainer>
  );
};

export default CadrsList;
