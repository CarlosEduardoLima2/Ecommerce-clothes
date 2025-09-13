import { useContext } from 'react';
import { ProductContext } from '../../store/context/ProductProvider/context';
import { GridContent } from '../GridContent';
import { Product } from './Product';
import * as Styled from './styles';

interface productProps {
  id: any,
  image: string,
  title: string,
  price: number,
}

export const Products = () => {

  const {product}:any = useContext(ProductContext);

  
  if(!product) return null;
  
  return (
    <Styled.Container>
      <GridContent>
        {product.map(({id, title, price, image}: productProps) => (
          <Product key={id} to={id} title={title} price={price} image={image}/>
        ))}
      </GridContent>
    </Styled.Container>
  );
};
