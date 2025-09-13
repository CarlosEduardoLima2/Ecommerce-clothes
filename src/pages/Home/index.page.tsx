import { Banner } from '../../Component/Banner';
import { Products } from '../../Component/Products';
import * as Styled from './styles';

const Home = () => {
  return (
    <Styled.Container>
      <Banner />
      <Products />
    </Styled.Container>
  );
};

export default Home