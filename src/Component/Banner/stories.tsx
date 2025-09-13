import { Meta, Story } from '@storybook/react/types-6-0';
import { BrowserRouter } from 'react-router-dom';
import { Banner } from '.';
export default {
  title: 'Banner',
  component: Banner,
  args: {
    children: 'Banner',
  },
  argTypes: {
    children: { type: 'string' },
  },
}as Meta;

export const Template:Story = (args) => {
  return (
    <BrowserRouter>
      <Banner {...args} />
    </BrowserRouter>
  );
};
