import { Story, Meta } from '@storybook/react';
import { Card, type CardProps } from './card';

export default {
  component: Card,
  title: 'Components/Card',
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const BasicUsage = Template.bind({});
BasicUsage.args = {
  image: 'https://dummyimage.com/640x360/eee/aaa',
  title: 'Sample card',
  description: 'Sample description',
};
