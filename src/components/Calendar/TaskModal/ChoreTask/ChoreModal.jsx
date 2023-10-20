import { useEffect } from 'react';
import { Modal, ButtonClose, Overlay } from './ChoreModal.styled';
import { AiOutlineClose } from 'react-icons/ai';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal');

export const ModalComponent = ({ children, onClose }) => {
  const onClickOverlay = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <Overlay onClick={onClickOverlay}>
      <Modal>
        <ButtonClose type="button" onClick={onClose}>
          <AiOutlineClose />
        </ButtonClose>
        {children}
      </Modal>
    </Overlay>,
    modalRoot,
  );
};
