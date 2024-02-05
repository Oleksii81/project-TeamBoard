// // import { useDispatch } from 'react-redux';

// import {
//   ItemContainer,
//   Title,
//   ButtonContainer,
//   CurrentLine,
// } from './BoardItem.styled';

// // import { editContact } from 'redux/operations';
// // import { deleteContact } from 'redux/operations';

// const BoardItem = ({ id, icon, title }) => {
//   // const dispatch = useDispatch();
//   // const handleEditContact = id => dispatch(editContact(id));
//   // const handleDeleteContact = id => dispatch(deleteContact(id));

//   return (
//     <ItemContainer>
//       <svg width="18" height="18">
//         <use href={`#icon-${icon}`}></use>
//       </svg>

//       <Title>{title}</Title>
//       <ButtonContainer>
//         <button onClick={() => handleEditContact(id)}>
//           <svg width="16" height="16" stroke="white" stroke-opacity="0.5">
//             <use href={'#icon-pencil'}></use>
//           </svg>
//         </button>
//         <button onClick={() => handleDeleteContact(id)}>
//           <svg width="16" height="16" stroke="white" stroke-opacity="0.5">
//             <use href={'#icon-trash'}></use>
//           </svg>
//         </button>
//       </ButtonContainer>
//       <CurrentLine />
//     </ItemContainer>
//   );
// };

// export default BoardItem;
