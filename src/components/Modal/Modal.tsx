import React, { FC, HTMLAttributes, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useAppDispatch, useAppSelector } from '@app/hooks';
import { CSSTransition } from 'react-transition-group';
import classNames from 'classnames';
import { setShowModal } from '@features/reposSlider/slice';
import './Modal.css';

interface ModalProps extends HTMLAttributes<HTMLElement> {
  alignX?: 'center' | 'left' | 'right';
  alignY?: 'center' | 'top' | 'bottom';
}

export const Modal: FC<ModalProps> = ({ alignX = 'center', alignY = 'top', className, children, ...restProps }) => {
  const { showModal } = useAppSelector((state) => state.reposReducer);
  const dispatch = useAppDispatch();
  const onClose = () => {
    dispatch(setShowModal(false));
  };

  useEffect(() => {
    if (showModal) {
      document.documentElement.classList.add('--prevent-scroll');
    }

    return () => {
      document.documentElement.classList.remove('--prevent-scroll');
    };
  }, [showModal]);

  useEffect(() => {
    const documentKeydownListener = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', documentKeydownListener);
    return () => {
      document.removeEventListener('keydown', documentKeydownListener);
    };
  }, [onClose]);

  return createPortal(
    <CSSTransition
      in={showModal}
      unmountOnExit={true}
      mountOnEnter={true}
      timeout={300}
      classNames="modal-wrapper-animation"
    >
      <div
        className={classNames(
          'modal-wrapper',
          `modal-wrapper--alignY-${alignY}`,
          `modal-wrapper--alignX-${alignX}`,
          className
        )}
        onClick={onClose}
        {...restProps}
      >
        <div
          className="modal-wrapper__children"
          onKeyDown={(e) => e.stopPropagation()}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </CSSTransition>,
    document.getElementById('overlay') as HTMLElement
  );
};
