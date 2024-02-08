import { Container } from './ScreensPage.styled';
import Text from '../../../src/components/ScreensPage/Text/Text';
import Filter from '../../../src/components/ScreensPage/Filter/Filter';

const ScreensPage = () => {
  return (
    <section>
      <Container>
        <Filter />
        <Text />
      </Container>
    </section>
  );
};

export default ScreensPage;
