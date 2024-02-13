// import { useSelector } from 'react-redux';

import CardItem from './CardItem';
import { CardsContainer } from './CardsList.styled';

// import { getCarddSelector } from '../../../redux/task/taskSelectors';

const CadrsList = ({ columnId }) => {
  // console.log(columnId);
  // const cards = useSelector();
  // console.log(cards);
  const cards = [
    {
      _id: '1',
      title: 'The Watch Spot Design',
      description: 'description1',
      priority: 'Low',
      deadline: '12/05/2023',
    },
    {
      _id: '2',
      title: 'Research and Analysis',
      description: 'description2',
      priority: 'Medium',
      deadline: '12/05/2023',
    },
    {
      _id: '3',
      title: 'Concept Development',
      description: 'description3',
      priority: 'Without',
      deadline: '12/05/2023',
    },
  ];

  return (
    <CardsContainer>
      {
        <ul>
          {cards &&
            cards.map(card => (
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
      }
    </CardsContainer>
  );
};

export default CadrsList;
