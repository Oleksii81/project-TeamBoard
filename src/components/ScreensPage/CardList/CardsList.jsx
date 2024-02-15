import { useSelector } from 'react-redux';

import CardItem from './CardItem';
import { CardContainer } from './CardsList.styled';
import { getColumn } from '../../../redux/task/taskSelectors';

// import { getCarddSelector } from '../../../src/redux/task/taskSelectors';

const CardList = ({ filterByPriority }) => {
  const columns = useSelector(getColumn);
  console.log(columns);

  return (
    <CardContainer>
      <ul>
        {columns &&
          columns.length > 0 &&
          columns.map(el =>
            el?.cards?.length === 0
              ? 'Tasks list is empty'
              : el?.cards
                  // .filter(task => task.priority === filterByPriority)
                  .map(task => (
                    <li key={task._id}>
                      <CardItem key={task._id} task={task} columnID={el._id} />
                    </li>
                  ))
          )}
      </ul>
    </CardContainer>
  );
};

// const CadrsList = ({ columnId }) => {
//   // console.log(columnId);
//   // const cards = useSelector(getCarddSelector);
//   // console.log(cards);

//   const cards = [
//     // {
//     //   _id: '1',
//     //   title: 'The Watch Spot Design',
//     //   description: 'description1',
//     //   priority: 'Low',
//     //   deadline: '12/05/2023',
//     // },
//     // {
//     //   _id: '2',
//     //   title: 'Research and Analysis',
//     //   description: 'description2',
//     //   priority: 'Medium',
//     //   deadline: '12/05/2023',
//     // },
//     // {
//     //   _id: '3',
//     //   title: 'Concept Development',
//     //   description: 'description3',
//     //   priority: 'Without',
//     //   deadline: '12/05/2023',
//     // },
//   ];

//   return (
//     <CardsContainer>
//       {
//         <ul>
//           {cards.map(card => (
//             <li key={card._id}>
//               <CardItem
//                 columnId={columnId}
//                 id={card._id}
//                 title={card.title}
//                 description={card.description}
//                 priority={card.priority}
//                 deadline={card.deadline}
//               />
//             </li>
//           ))}
//         </ul>
//       }
//     </CardsContainer>
//   );
// };

export default CardList;
