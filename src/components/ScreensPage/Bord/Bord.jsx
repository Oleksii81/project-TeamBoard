// import { useEffect } from 'react';
// import sprite from '../../../images/sprite.svg';
// import {
//   BackdropStyled,
//   ModalWindowStyled,
//   CloseBtnStyled,
//   IconStyled,
// } from './Bord.styled';

// const Bord = ({ children, onClose, custom }) => {
//   const handleClose = e => {
//     e.stopPropagation();
//     onClose();
//   };

//   const onCloseBackdrop = e => {
//     if (e.target === e.currentTarget) {
//       e.stopPropagation();
//       onClose();
//     }
//   };

//   function onCloseEscape(e) {
//     if (e.key === 'Escape') {
//       e.stopPropagation();
//       onClose();
//     }
//   }

//   useEffect(() => {
//     window.addEventListener('keydown', onCloseEscape);
//     return () => {
//       window.removeEventListener('keydown', onCloseEscape);
//     };
//   });

//   return (
//     <BackdropStyled onClick={onCloseBackdrop}>
//       <ModalWindowStyled custom={custom ? true : false}>
//         <CloseBtnStyled onClick={handleClose}>
//           <IconStyled width={18} height={18}>
//             <use href={`${sprite}#icon-close`}></use>
//           </IconStyled>
//         </CloseBtnStyled>
//         {children}
//       </ModalWindowStyled>
//     </BackdropStyled>
//   );
// };

// export default Bord;

import { AddBoardBtn } from '../../../../src/components/ScreensPage/AddBoardBtn/AddBoardBtn';
import Filter from '../../../../src/components/ScreensPage/Filter/Filter';
import { ContainerMain } from './Bord.styled';

const Bord = () =>
  // { setFilterByPriority, onChangeFilter }
  {
    return (
      <>
        <ContainerMain>
          <AddBoardBtn />
          <Filter
          // onChangeFilter={onChangeFilter}
          // setFilterByPriority={setFilterByPriority}
          />
        </ContainerMain>
      </>
    );
  };

export default Bord;
