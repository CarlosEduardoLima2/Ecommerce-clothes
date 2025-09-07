
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled(NavLink)`
  ${({theme}) => css`
    padding: 10px 60px;
    border-radius: 8px;
    color: ${theme.colors.lightColor};
    background-color: ${theme.colors.darkColor};
    text-decoration: none;
    transition: .3s ease-in;

    &:hover{
      border: none;
      background: #363636;
    }
  `}
    
`;
