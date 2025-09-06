import { Meta, Story } from '@storybook/react/types-6-0';
import { TextComponent } from '.';
import { TextComponentProps } from '.';
export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: 'TextComponent',
  },
  argTypes: {
    children: { type: 'string' },
  },
}as Meta;

export const Template:Story<TextComponentProps> = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
