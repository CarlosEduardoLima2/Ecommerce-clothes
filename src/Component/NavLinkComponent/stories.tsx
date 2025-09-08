import { Meta, Story } from '@storybook/react/types-6-0';
import { BrowserRouter } from 'react-router-dom';
import { NavLinkComponent } from '.';
import { NavLinkComponentProps } from '.';
export default {
  title: 'NavLink',
  component: NavLinkComponent,
  args: {
    children: 'NavLink',
  },
  argTypes: {
    children: { type: 'string' },
  },
}as Meta;

export const Template:Story<NavLinkComponentProps> = (args) => {
  return (
    <BrowserRouter>
      <NavLinkComponent {...args} />
    </BrowserRouter>
  );
};
