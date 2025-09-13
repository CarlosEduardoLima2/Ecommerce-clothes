import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Container = styled(Link)`
  height: 378px;
  text-decoration: none;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`

export const ImageContainer = styled.div`
  border-radius: 35px;
  background-color: #dadad8;
  height: 369px;
  text-align: center;
`
export const Content = styled.div`
  max-width: 100%;
  margin-top: 17px;
  display: flex;
  justify-content: space-between;
`

export const ContentText = styled.div`

`;

export const Price = styled.span`
  ${({theme}) => css`
    text-decoration: none;
    color: ${theme.colors.darkColor};
    font-size: ${theme.fonts.sizes.small};
    font-weight: 400;
    margin-left: 10px;
  `}
`;

export const NewProduct = styled.span`
  ${({theme}) => css`
    color: ${theme.colors.secondaryColor};
    font-weight: 400;
    margin-bottom: 4px;
    font-size: ${theme.fonts.sizes.xxsmall};
  `}
`
export const Title = styled.span`
  ${({theme}) => css`
    font-weight: 700;
    text-decoration: none;
    color: ${theme.colors.darkColor};
    font-size: ${theme.fonts.sizes.xsmall};
  `}
`