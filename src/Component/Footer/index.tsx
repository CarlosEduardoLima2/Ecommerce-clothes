// import { NavLinkComponent } from '../NavLinkComponent';
import { Heading } from '../Heading';
import { NavLinkComponent } from '../NavLinkComponent';
import { SectionContainer } from '../SectionContainer';
import { TextComponent } from '../TextComponent';
import * as Styled from './styles';

export const Footer = () => {
  return (
    <Styled.Container>
      <SectionContainer>
        <Styled.Info>
          <Styled.DataContainer>
            <TextComponent>(75) 999-9999</TextComponent>
            <TextComponent>Facebook</TextComponent>
            <Styled.InfoText>Rua São Paulo</Styled.InfoText>
            <Styled.Icons></Styled.Icons>
          </Styled.DataContainer>
          <Styled.About>
            <Heading as='h3' size='small'>Ecommerce</Heading>
            <TextComponent>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ipsa neque illo, laudantium ipsam accusamus esse quo, architecto hic et necessitatibus minus tempore sapiente deleniti? Est doloremque rem autem saepe.</TextComponent>
          </Styled.About>
          <Styled.LinksContainer>
            <NavLinkComponent to='/'>Home</NavLinkComponent>
            <NavLinkComponent to='/'>Shop</NavLinkComponent>
            <NavLinkComponent to='/'>About</NavLinkComponent>
          </Styled.LinksContainer>
        </Styled.Info>
      </SectionContainer>
    </Styled.Container>
  );
};
