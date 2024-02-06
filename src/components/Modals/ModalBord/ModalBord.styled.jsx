import styled from 'styled-components';
import Modal from 'react-modal';

export const ModalCustom = styled(Modal)`
  position: relative;
  border: 1px solid var(--modalBorderColor);
  background-color: var(--cardItem);
  border-radius: 8px;
  width: 335px;
  height: 433px;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  padding: 0%;

  @media screen and (min-width: 768px) {
    width: 350px;
  }
`;

//     const customStyles = {
//   content: {
//     border: '1px solid rgba(190, 219, 176, 0.5)',
//     backgroundColor: '#121212',
//     borderRadius: '8px',
//     // width: '335px',
//     height: '433px',
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//     padding: '0',
//   }}
// const mediaQueries = {
//   tablet: `@media screen and (min-width: 768px)`,
// };

// customStyles.content.width = '335px'; // Default width
// customStyles.content[mediaQueries.tablet] = '350px'; // Adjust for tablets
// `;
