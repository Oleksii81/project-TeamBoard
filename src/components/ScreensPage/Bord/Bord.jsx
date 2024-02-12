import { AddBoardBtn } from '../../../../src/components/ScreensPage/AddBoardBtn/AddBoardBtn';
import Filter from '../../../../src/components/ScreensPage/Filter/Filter';
import CardList from '../Card/CardList';
import { ContainerMain } from './Bord.styled';

const Bord = ({ onChangeFilter, setFilterByPriority }) => {
  return (
    <>
      <ContainerMain>
        <CardList filterByPriority={null}/>
        <AddBoardBtn />
        <Filter
          onChangeFilter={onChangeFilter}
          setFilterByPriority={setFilterByPriority}
        />
      </ContainerMain>
    </>
  );
};

export default Bord;
