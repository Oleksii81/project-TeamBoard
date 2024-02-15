import { Container } from './ScreensPage.styled';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Text from '../../../src/components/ScreensPage/Text/Text';
// import Filter from '../../../src/components/ScreensPage/Filter/Filter';
import Bord from '../../../src/components/ScreensPage/Bord/Bord';
import { getBoard } from '../../../src/redux/auth/authSelectors';
import { useParams } from 'react-router-dom';

const ScreensPage = () => {
  const boards = useSelector(getBoard);

  const { idBoard } = useParams();
  const activeBoard = boards.find(board => board._id === idBoard);

  const [filterByPriority, setFilterByPriority] = useState('');
  // const [cards, setCards] = useState([]);
  const onFilterChange = newFilter => {
    setFilterByPriority(newFilter);
  };

  // const visibleCards = cards.filter(card => card.priority === filterByPriority);

  return (
    <>
      {activeBoard && boards && boards.length > 0 ? (
        <section>
          <Bord
            setFilterByPriority={setFilterByPriority}
            onChangeFilter={onFilterChange}
          />
        </section>
      ) : (
        <section>
          <Container>
            <Text />
          </Container>
        </section>
      )}
    </>
  );
};

export default ScreensPage;
