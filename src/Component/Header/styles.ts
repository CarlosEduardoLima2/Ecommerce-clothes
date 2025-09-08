import styled, { css } from 'styled-components';

export const Container = styled.header`
  z-index: 6;
  width: 100%;
  background: transparent;
`;

export const Header = styled.div`
  ${({theme}) => css`
    padding: 30px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  `}
  
`;

export const Nav = styled.div`
  display: flex;
  grid-column-gap: 1.2rem;
  align-items: center;
`;

export const Logo = styled.div`

`;

export const Actions = styled.div`

`;
