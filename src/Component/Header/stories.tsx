import { Meta, Story } from '@storybook/react/types-6-0';
import { BrowserRouter } from 'react-router-dom';
import { Header } from '.';
export default {
  title: 'Header',
  component: Header,
  args: {
    children: 'Header',
  },
  argTypes: {
    children: { type: 'string' },
  },
}as Meta;

export const Template:Story = (args) => {
  return (
    <BrowserRouter>
      <Header {...args} />
    </BrowserRouter>
  );
};
