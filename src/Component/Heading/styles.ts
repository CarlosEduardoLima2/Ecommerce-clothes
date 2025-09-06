import styled, { css, DefaultTheme } from 'styled-components';
import { HeadingProps } from '.';

const titleSize = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.fonts.sizes.xsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.fonts.sizes.medium};
  `,
  big: (theme: DefaultTheme) => css`
    font-size: ${theme.fonts.sizes.xlarge};
    ${mediaFont(theme)};
  `,
};

const titleCase = (uppercase: boolean) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

const mediaFont = (theme: DefaultTheme) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.fonts.sizes.medium};
  }
`

export const Container = styled.h1<HeadingProps>`
  ${({ theme, size, uppercase }) => css`
    color: ${theme.colors.darkColor};
    font-family: ${theme.fonts.family.secondaryFont};
    ${size && titleSize[size](theme)}
    ${uppercase && titleCase(uppercase)}

  `}
`;
