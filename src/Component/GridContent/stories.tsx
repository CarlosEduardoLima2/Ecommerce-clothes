import { Meta, Story } from '@storybook/react/types-6-0';
import { BrowserRouter } from 'react-router-dom';
import { GridContent } from '.';
import { GridContentProps } from '.';
import {data} from '../../api/db'
import { Product } from '../Products/Product';
export default {
  title: 'GridContent',
  component: GridContent,
  args: {
    children: <>
    {data.map(product => (
      <Product 
        title={product.title}
        price={product.price}
        to={product.id}
        image={product.image}
      />
    ))}
    </>,
  },

}as Meta;

export const Template:Story<GridContentProps> = (args) => {
  return (
    <BrowserRouter>
      <div>
        <GridContent {...args} />
      </div>
    </BrowserRouter>
  );
};
