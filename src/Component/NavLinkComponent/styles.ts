import { NavLink } from 'react-router-dom';
import styled, { css, DefaultTheme } from 'styled-components';
import { NavLinkComponentProps } from '.';

const linkSize = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.fonts.sizes.xsmall};
  `,
  big: (theme: DefaultTheme) => css`
    font-size: ${theme.fonts.sizes.large};
  `
}

const borderFunc = (theme: DefaultTheme) => css`
  border: 2px solid #000;
  border-radius: 30px;
  padding: 10px 20px 9px;
  transition: .3s linear,color .3s linear;


  &:hover, &.active{
    background-color: ${theme.colors.darkColor};
    color: ${theme.colors.lightColor};
  }
`

export const Container = styled(NavLink)<NavLinkComponentProps>`
  ${({theme, size, hasBorder}) => css`
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    color: ${theme.colors.darkColor};
    ${size && linkSize[size](theme)};
    ${hasBorder && borderFunc(theme)}
  `}
`;
