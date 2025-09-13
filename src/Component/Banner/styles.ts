import styled, { css } from 'styled-components';
import {Container as TextComponent} from '../TextComponent/styles'
import {Container as Heading} from '../Heading/styles'


export const Container = styled.section`
  ${({theme}) => css`
    width: 100%;
    height: 100vh;
    background-color: ${theme.colors.primaryColor};

    @media (max-width: 880px){
    height: 100%;
    }
  `}
`;

export const Content = styled.div`
  ${({theme}) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    gap: 2rem;

    .swiper-slide {
      display: flex;
      justify-content: center;
      background: #fff;
      background: transparent;
      align-items: center;


      div{
        margin: 30px 0;
      }

      ${TextComponent}{
        display: block;
        max-width: 500px;
        margin: 15px 0;
        font-size: 0.8rem;
      }

    }

    @media (max-width: 460px) {
      flex-wrap: wrap;
    }
    
  `}
`;

export const Text = styled.section`
  
`;
export const Image = styled.div`
  ${({theme}) => css`
    max-width: 350px;
    max-height: 600px;
    img{
      object-fit: cover;
      object-position: center;
      height: 100%;
    }

    @media (max-width: 880px){
      img{
        width: 80%;
        height: 80%;
      }
    }
  `}
`;