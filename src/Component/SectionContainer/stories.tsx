import { Meta, Story } from '@storybook/react/types-6-0';
import { SectionContainer } from '.';
import { SectionContainerProps } from '.';
export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere fuga dolorum id corporis impedit deleniti
          illo, neque voluptatibus, debitis harum, natus quae modi expedita. Cupiditate molestias dignissimos itaque
          officiis nobis.
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: 'string' },
  },
}as Meta;

export const Template:Story<SectionContainerProps> = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
