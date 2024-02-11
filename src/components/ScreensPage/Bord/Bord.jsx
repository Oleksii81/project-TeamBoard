import { AddBoardBtn } from '../../../../src/components/ScreensPage/AddBoardBtn/AddBoardBtn';
import Filter from '../../../../src/components/ScreensPage/Filter/Filter';
import { ContainerMain } from './Bord.styled';

const Bord = ({ onChangeFilter, setFilterByPriority }) => {
  return (
    <>
      <ContainerMain>
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
