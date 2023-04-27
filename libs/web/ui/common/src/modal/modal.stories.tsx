import { Story, Meta } from '@storybook/react';
import { useContext } from 'react';
import { Button } from '../button';
import { ModalContext, ModalProvider } from './modal-provider';
import { type ModalProps } from './modal';

export default {
  title: 'Components/Modal',
} as Meta;

const Template: Story<ModalProps> = (args) => {
  return (
    <ModalProvider>
      <ModalExample {...args} />
    </ModalProvider>
  );
};

const ModalExample = (args: ModalProps) => {
  const { closeModal, showModal } = useContext(ModalContext);

  const handleOnClick = () => {
    showModal(<p>lorem ipsum</p>, {
      ...args,
      onClose: closeModal,
    });
  };

  return (
    <Button
      onClick={handleOnClick}
      className="bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
    >
      Show modal
    </Button>
  );
};

export const BasicUsage = Template.bind({});
BasicUsage.args = {};

export const LargeModal = Template.bind({});
LargeModal.args = { className: 'sm:max-w-4xl sm:w-full' };
