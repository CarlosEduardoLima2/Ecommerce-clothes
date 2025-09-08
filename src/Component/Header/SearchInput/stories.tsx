import { Meta, Story } from '@storybook/react/types-6-0';
import { SearchInput } from '.';
import {  } from '.';
export default {
  title: 'SearchInput',
  component: SearchInput,
  args: {
    children: 'SearchInput',
  },
  argTypes: {
    children: { type: 'string' },
  },
}as Meta;

export const Template:Story = (args) => {
  return (
    <div>
      <SearchInput {...args} />
    </div>
  );
};
