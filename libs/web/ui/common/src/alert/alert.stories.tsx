import { Story, Meta } from '@storybook/react';
import { Alert, type AlertProps } from './alert';

export default {
  component: Alert,
  title: 'Components/Alert',
} as Meta;

const Template: Story<AlertProps> = (args) => <Alert {...args} />;

export const BasicUsage = Template.bind({});
BasicUsage.args = {
  type: 'warning',
  title: 'Attention needed',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.',
};
