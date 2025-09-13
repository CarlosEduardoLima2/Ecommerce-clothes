import { Meta, Story } from '@storybook/react/types-6-0';
import { BrowserRouter } from 'react-router-dom';
import { Product } from '.';
import { ProductProps } from '.';
import { mock } from '../mock'; 
export default {
  title: 'Product',
  component: Product,
  args: {
    ...mock
  },
  argTypes: {
    children: { type: 'string' },
  },
}as Meta;

export const Template:Story<ProductProps> = (args) => {
  return (
    <BrowserRouter>
      <div>
        <Product {...args} />
      </div>
    </BrowserRouter>
  );
};
