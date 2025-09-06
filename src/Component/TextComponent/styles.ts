import styled, { css, DefaultTheme } from 'styled-components';
import { TextComponentProps } from '.';

const titleCase = (uppercase: boolean) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

const background = (theme: DefaultTheme) => css`
  background-color: ${theme.colors.secondaryColor};
  width: fit-content;
  width: -webkit-fit-content;
  font-size: ${theme.fonts.sizes.small};
  font-weight: 700;
  padding: 12px 20px 10px;
  font-style: normal;
  border-radius: ${theme.fonts.sizes.xsmall};
`

export const Container = styled.div<TextComponentProps>`
  ${({ theme, uppercase, hasBackground }) => css`
    color: ${theme.colors.darkColor};
    font-style: italic;
    ${uppercase && titleCase(uppercase)};
    ${hasBackground && background(theme)}
  `}
`;
