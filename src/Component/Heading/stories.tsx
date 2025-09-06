import { Meta, Story } from '@storybook/react/types-6-0';
import { Heading } from '.';
import { HeadingProps } from '.';
export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Heading',
  },
  argTypes: {
    children: { type: 'string' },
  },
}as Meta;

export const Template:Story<HeadingProps> = (args) => {
  return (
    <div>
      <Heading {...args} />
    </div>
  );
};
