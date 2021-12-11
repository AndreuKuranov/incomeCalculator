import React from 'react';
import cn from 'classnames';
import cl from './Modal.module.css';
import Button from '../button/Button';

const Modal = ({
  children, visible, setVisible, ...props
}) => {
  const rootClasses = [cl.myModal];

  if (visible) {
    rootClasses.push(cl.active);
  }

  return (
    <div
      className={cn(rootClasses, props.className)}
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
        <Button
          className={cl.myModalBtn}
          title="close"
          type="button"
          onClick={() => setVisible(false)}
        >
          <i className="material-icons">close</i>
        </Button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
