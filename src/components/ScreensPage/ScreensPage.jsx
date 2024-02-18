import { Container } from './ScreensPage.styled';
import { useSelector } from 'react-redux';
import Text from '../../../src/components/ScreensPage/Text/Text';
import Bord from '../../../src/components/ScreensPage/Bord/Bord';
import { getBoard } from '../../../src/redux/auth/authSelectors';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { isRefreshing } from '../../redux/auth/authSelectors';
import { isLoading } from '../../redux/task/taskSelectors';

const ScreensPage = () => {
  const boards = useSelector(getBoard);

  const { idBoard } = useParams();
  const activeBoard = boards.find(board => board._id === idBoard);

  const spinner = useSelector(isLoading);
  const isRefresh = useSelector(isRefreshing);
  return isRefresh || spinner ? (
    <Loader />
  ) : (
    <>
      {activeBoard && boards && boards.length > 0 ? (
        <section>
          <Bord />
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
