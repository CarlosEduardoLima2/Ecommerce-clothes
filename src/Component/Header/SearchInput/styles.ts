import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.lightColor};
    border: none;
    font-size: ${theme.fonts.sizes.xsmall};
    padding: 10px 30px;
    color: ${theme.colors.darkColor};
    font-weight: 700;
    border-radius: 4px;

    &:focus {
      outline: 0;
    }
  `}
`;
