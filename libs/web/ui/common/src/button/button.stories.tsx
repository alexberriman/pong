import { Story, Meta } from '@storybook/react';
import { Button, type ButtonProps } from './button';

export default {
  component: Button,
  title: 'Components/Button',
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const BasicUsage = Template.bind({});
BasicUsage.args = {
  children: ['Example button'],
};
