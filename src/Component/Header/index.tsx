// import { SetStateAction, useState } from 'react';
import { useState } from 'react';
import { NavLinkComponent } from '../NavLinkComponent';
import { SectionContainer } from '../SectionContainer';
import { SearchButton } from './SearchButton';
import { SearchInput } from './SearchInput';
import * as Styled from './styles';

export const Header = () => {
  const [inputSearch, setInputSearch] = useState(false)

  const handleClick = () => {
    setInputSearch(!inputSearch)
  }

  return (
    <Styled.Container>
      <SectionContainer>
        <Styled.Header>
          <Styled.Logo>
            <NavLinkComponent to='/' size='big'>E-commerce</NavLinkComponent>
          </Styled.Logo>
          <Styled.Nav>
            <Styled.NavInput>{inputSearch && <SearchInput />}</Styled.NavInput>
            <SearchButton handleClick={handleClick}/>
            <NavLinkComponent to="/shop" size='small'>shop</NavLinkComponent>
            <NavLinkComponent to="/about" size='small'>about</NavLinkComponent>
          </Styled.Nav>
        </Styled.Header>
       
      </SectionContainer>
    </Styled.Container>
    
  );
};
