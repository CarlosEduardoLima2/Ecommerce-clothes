import { SectionContainer } from '../../SectionContainer';
import * as Styled from './styles';

export const SearchInput = () => {
  return (
    <Styled.Container>
      <SectionContainer>
        <form>
          <Styled.Input placeholder='Search'/>
        </form>
      </SectionContainer>
    </Styled.Container>
  );
};
