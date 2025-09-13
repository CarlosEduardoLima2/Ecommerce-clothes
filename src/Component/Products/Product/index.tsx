import * as Styled from './styles';

export interface ProductProps {
  to: any,
  image: string,
  title: string,
  price: number,
  newProduct?: boolean
};

export const Product = ({to, image, title, price, newProduct = false}:ProductProps) => {
  return (
    <Styled.Container to={to}>
      <Styled.ImageContainer>
        <Styled.Image src={image} alt={title}/>
      </Styled.ImageContainer>
      <Styled.Content>
        <Styled.ContentText>
          {newProduct && <Styled.NewProduct>New!</Styled.NewProduct>}
          <div>
            <Styled.Title>{title}</Styled.Title>
          </div>
        </Styled.ContentText>
        <Styled.Price>${price}</Styled.Price>
      </Styled.Content>
    </Styled.Container>
  );
};
