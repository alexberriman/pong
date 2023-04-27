import { Story, Meta } from '@storybook/react';
import Heading, { HeadingProps } from './Heading';

export default {
  component: Heading,
  title: 'Components/Heading',
} as Meta;

const Template: Story<HeadingProps> = (args) => (
  <div className="flex flex-col gap-3">
    {['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map((level) => (
      <Heading key={level} {...args} as={level as HeadingProps['as']}>
        {level.toUpperCase()} - Example Heading
      </Heading>
    ))}
  </div>
);

export const BasicUsage = Template.bind({});
BasicUsage.args = {};
