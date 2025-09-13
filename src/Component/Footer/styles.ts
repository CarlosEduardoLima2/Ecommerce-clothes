
import styled from 'styled-components';
import {Container as Text} from "../TextComponent/styles"
import {Container as Link} from "../NavLinkComponent/styles"
import { theme } from '../../styles/theme';

export const Container = styled.div`
  background-color: ${theme.colors.primaryColor};
  width: 100%;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media ${theme.media.lteMedium} {
    justify-content: center;
  }
`;

export const DataContainer = styled.div`
  padding: 1.5rem 0;

  ${Text}{
    margin: 1rem 0;
  }
`;

export const Icons = styled.div`

`;
export const InfoText = styled.div`

`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${Link}{
    padding: 0.5rem;
  }
`;

export const About = styled.div`
  max-width: 300px;
  padding: 1rem;
  text-align: center;
  ${Text}{
    margin: 1rem 0;
  }
`;
