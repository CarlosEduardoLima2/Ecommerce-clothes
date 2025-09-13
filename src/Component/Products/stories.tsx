import { Meta, Story } from '@storybook/react/types-6-0';
import { Products } from '.';

export default {
  title: 'Products',
  component: Products,
}as Meta;

export const Template:Story = (args) => {
  return (
    <div>
      <Products {...args} />
    </div>
  );
};
