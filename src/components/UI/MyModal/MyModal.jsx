// так не делают, ты должен соблюдать линт, а не отключать его везде
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react';
import cl from './MyModal.module.css';

// почему только у этого компонента такой префикс? в реакте не принято использовать префикс
const MyModal = ({ children, visible, setVisible }) => {
  const rootClasses = [cl.myModal];

  if (visible) {
    rootClasses.push(cl.active);
  }

  return (
    // есть стандартная либа для конкатенации классов https://www.npmjs.com/package/classnames
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default MyModal;
