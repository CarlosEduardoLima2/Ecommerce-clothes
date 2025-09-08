import { Meta, Story } from '@storybook/react/types-6-0';
import { SearchButton } from '.';
import { SearchButtonProps } from '.';
export default {
  title: 'SearchButton',
  component: SearchButton,
  args: {
    children: 'SearchButton',
  },
  argTypes: {
    children: { type: 'string' },
  },
}as Meta;

export const Template:Story<SearchButtonProps> = (args) => {
  return (
    <div>
      <SearchButton {...args} />
    </div>
  );
};
