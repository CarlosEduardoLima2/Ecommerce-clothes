import { Meta, Story } from '@storybook/react/types-6-0';
import { Footer } from '.';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    children: 'Footer',
  },
  argTypes: {
    children: { type: 'string' },
  },
}as Meta;

export const Template:Story = (args) => {
  return (
    <BrowserRouter>
      <Footer {...args} />
    </BrowserRouter>
  );
};
