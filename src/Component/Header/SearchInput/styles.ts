import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background-color: #fff;
    border-bottom: 3px solid #000;
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.lightColor};
    border: none;
    font-size: ${theme.fonts.sizes.xmedium};
    padding: 15px 30px;
    color: ${theme.colors.darkColor};
    font-weight: 700;

    &:focus {
      outline: 0;
    }
  `}
`;
