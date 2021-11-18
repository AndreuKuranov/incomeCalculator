import React, { useState } from 'react';
import cn from 'classnames';
import './Menu.css';
import Modal from './UI/modal/Modal';
import Button from './UI/button/Button';
import Language from './Language';
import Download from './Download';
import Save from './Save';

const Menu = (props) => {
  const [modal, setModal] = useState(false);

  return (
    <div className={cn('menu', props.className)}>
      <div className="menu__container container">
        <div className="menu__settings">
          <Save
            sumIncomes={props.sumIncomes}
            sumExpenses={props.sumExpenses}
            setToUpdate={props.setToUpdate}
          />
          <Button
            type="button"
            onClick={() => setModal(true)}
          >
            <i className="material-icons">settings</i>
          </Button>
          <Modal
            className="menu__modal"
            visible={modal}
            setVisible={setModal}
          >
            <Button
              className="menu__button"
              type="button"
              onClick={() => setModal(false)}
            >
              <i className="material-icons">close</i>
            </Button>
            <Language />
            <Download
              toUpdate={props.toUpdate}
              setToUpdate={props.setToUpdate}
              setDownloadsIncomes={props.setDownloadsIncomes}
              setDownloadsExpenses={props.setDownloadsExpenses}
            />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Menu;
