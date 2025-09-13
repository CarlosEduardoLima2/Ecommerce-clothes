import { SectionContainer } from '../SectionContainer';
import * as Styled from './styles';

export type GridContentProps = {
  children: React.ReactNode;
};

export const GridContent = ({children}:GridContentProps) => {
  return (
    <SectionContainer>
      <Styled.Container>
        {children}
      </Styled.Container>
    </SectionContainer>
    
  );
};
