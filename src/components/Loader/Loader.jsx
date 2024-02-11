import { RotatingLines } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderContainer>
      <RotatingLines
        strokeColor="#7c25a1"
        strokeWidth="10"
        animationDuration="0.75"
        width="100"
        visible={true}
      />
    </LoaderContainer>
  );
};

export default Loader;