import { Story, Meta } from '@storybook/react';
import { Badge, type BadgeProps } from './badge';

export default {
  component: Badge,
  title: 'Components/Badge',
} as Meta;

type BadgeMap = {
  [T in BadgeProps['type']]: Capitalize<T>;
};

const badges: BadgeMap = {
  primary: 'Primary',
  success: 'Success',
  info: 'Info',
  warning: 'Warning',
  danger: 'Danger',
  dark: 'Dark',
  light: 'Light',
};

const Template: Story<BadgeProps> = (args) => (
  <div className="flex flex-row gap-3">
    {Object.entries(badges).map(([id, label]) => (
      <Badge key={id} {...args} type={id as BadgeProps['type']}>
        {label}
      </Badge>
    ))}
  </div>
);

export const BasicUsage = Template.bind({});
BasicUsage.args = {};

export const WithDot = Template.bind({});
WithDot.args = { withDot: true };

export const Rounded = Template.bind({});
Rounded.args = { rounded: true };
