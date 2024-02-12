import { Container } from './ScreensPage.styled';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Text from '../../../src/components/ScreensPage/Text/Text';
import Filter from '../../../src/components/ScreensPage/Filter/Filter';
import Bord from '../../../src/components/ScreensPage/Bord/Bord';
import { getBoard } from '../../../src/redux/auth/authSelectors';
import { ColumnHeader } from './ColumnHeader/ColumnHeader'; // don't forget to delete

const ScreensPage = () => {
  const boards = useSelector(getBoard);

  const [filterByPriority, setFilterByPriority] = useState('');
  // const [cards, setCards] = useState([]);
  const onFilterChange = newFilter => {
    console.log(newFilter);
    setFilterByPriority(newFilter);
    console.log(filterByPriority);
  };

  // const visibleCards = cards.filter(card => card.priority === filterByPriority);

  return boards && boards.length ? (
    <section>
      <Bord
        setFilterByPriority={setFilterByPriority}
        onChangeFilter={onFilterChange}
      />
    </section>
  ) : (
    <section>
      <Container>
        <Filter
          setFilterByPriority={setFilterByPriority}
          onChangeFilter={onFilterChange}
          />
          <ColumnHeader/> 
        <Text />
      </Container>
    </section>
  );
};

export default ScreensPage;
