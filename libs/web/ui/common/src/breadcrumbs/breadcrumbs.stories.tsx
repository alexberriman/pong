import { Story, Meta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { Breadcrumbs, type BreadcrumbsProps } from './breadcrumbs';

export default {
  component: Breadcrumbs,
  title: 'Components/Breadcrumbs',
} as Meta;

const Template: Story<BreadcrumbsProps> = (args) => (
  <BrowserRouter>
    <Breadcrumbs {...args} />
  </BrowserRouter>
);

export const BasicUsage = Template.bind({});
BasicUsage.args = {
  items: [
    { name: 'Projects', href: '/projects', current: false },
    { name: 'Project Nero', href: '/projects/nero', current: true },
  ],
};
