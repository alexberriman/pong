import { Story, Meta } from '@storybook/react';
import { Dropdown, DropdownType, type DropdownProps } from './dropdown';
import { DocumentDuplicateIcon, PencilIcon } from '@heroicons/react/24/outline';

export default {
  component: Dropdown,
  title: 'Components/Dropdown',
} as Meta;

type TypeMap = {
  [T in DropdownType]: Capitalize<T>;
};

const labels: TypeMap = {
  primary: 'Primary',
  success: 'Success',
  info: 'Info',
  warning: 'Warning',
  danger: 'Danger',
  dark: 'Dark',
  light: 'Light',
};

const Template: Story<DropdownProps> = (args) => (
  <div className="py-8 px-24 flex flex-row gap-2">
    {Object.entries(labels).map(([id, label]) => (
      <Dropdown key={id} {...args} label={label} type={id as DropdownType} />
    ))}
  </div>
);

export const BasicUsage = Template.bind({});
BasicUsage.args = {
  label: 'Options',
  items: [
    { icon: PencilIcon, label: 'Edit' },
    { icon: DocumentDuplicateIcon, label: 'Duplicate' },
  ],
};

export const PositionLeft = Template.bind({});
PositionLeft.args = {
  label: 'Options',
  position: 'left',
  items: [
    { icon: PencilIcon, label: 'Edit' },
    { icon: DocumentDuplicateIcon, label: 'Duplicate' },
  ],
};
