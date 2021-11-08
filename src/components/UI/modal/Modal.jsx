import React from 'react';
import cn from 'classnames';
import cl from './Modal.module.css';

const Modal = ({ children, visible, setVisible }) => {
  const rootClasses = [cl.myModal];

  if (visible) {
    rootClasses.push(cl.active);
  }

  return (
    <div
      className={cn(rootClasses)}
      onClick={() => setVisible(false)}
      aria-hidden="true"
      role="button"
      tabIndex="0"
    >
      <div
        className={cl.myModalContent}
        onClick={(e) => e.stopPropagation()}
        aria-hidden="true"
        role="button"
        tabIndex="0"
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
