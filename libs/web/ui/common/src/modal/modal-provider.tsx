import {
  createContext,
  type ReactNode,
  useState,
  useCallback,
  useMemo,
} from 'react';
import { Modal, ModalProps } from './modal';

export const ModalContext = createContext<ModalContext>({
  showModal: (Modal: ReactNode) => {
    // do nothing
  },
  closeModal: () => {
    // do nothing
  },
});

interface ModalProviderProps {
  children: ReactNode;
}

export interface ModalContext {
  showModal: (modal: ReactNode, props?: Partial<ModalProps>) => void;
  closeModal: () => void;
}

export function ModalProvider({ children }: ModalProviderProps) {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState<
    { node: ReactNode; props: Partial<ModalProps> } | undefined
  >();

  const showModal = useCallback(
    (Modal: ReactNode, props?: Partial<ModalProps>) => {
      setModal({ node: Modal, props: props ?? {} });
      setTimeout(() => {
        setOpen(true);
      }, 0);
    },
    []
  );

  const closeModal = useCallback(() => {
    setOpen(false);
    setTimeout(() => {
      setModal(undefined);
    }, 200);
  }, []);

  const modalMemo = useMemo<ModalContext>(
    () => ({ showModal, closeModal }),
    [showModal, closeModal]
  );

  return (
    <ModalContext.Provider value={modalMemo}>
      <>
        {modal && (
          <Modal {...(modal?.props ?? {})} open={open}>
            {modal.node}
          </Modal>
        )}

        {children}
      </>
    </ModalContext.Provider>
  );
}
