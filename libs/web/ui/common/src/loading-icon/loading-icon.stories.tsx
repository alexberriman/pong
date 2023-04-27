import { Story, Meta } from '@storybook/react';
import { LoadingIcon, type LoadingIconProps } from './loading-icon';

export default {
  component: LoadingIcon,
  title: 'Components/LoadingIcon',
} as Meta;

const Template: Story<LoadingIconProps> = (args) => <LoadingIcon {...args} />;

export const BasicUsage = Template.bind({});
BasicUsage.args = {
  className: 'w-14 h-14 text-indigo-600',
};
