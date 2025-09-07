import { Meta, Story } from '@storybook/react/types-6-0';
import { BrowserRouter } from 'react-router-dom';
import { Button } from '.';
import { ButtonProps } from '.';
export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Button',
  },
  argTypes: {
    children: { type: 'string' },
  },
}as Meta;

export const Template:Story<ButtonProps> = (args) => {
  return (
    <BrowserRouter>
      <Button {...args} />
    </BrowserRouter>
  );
};
