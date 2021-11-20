import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import './Menu.css';
import Modal from './UI/modal/Modal';
import Button from './UI/button/Button';
import Language from './Language';
import Download from './Download';
import Save from './Save';

const Menu = (props) => {
  const [modal, setModal] = useState(false);

  const [toUpdate, setToUpdate] = useState(false);
  const [listSave, setListSave] = useState([]);
  const [idSave, setIdSave] = useState('');

  const sortSave = (sort) => {
    setListSave([...listSave].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  useEffect(() => {
    sortSave('name');
  }, [modal, idSave]);

  return (
    <div className={cn('menu', props.className)}>
      <div className="menu__container container">
        <div className="menu__settings">
          <Save
            saveIncomes={props.saveIncomes}
            saveExpenses={props.saveExpenses}
            setToUpdate={setToUpdate}
            listSave={listSave}
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
              toUpdate={toUpdate}
              setToUpdate={setToUpdate}
              setDownloadsIncomes={props.setDownloadsIncomes}
              setDownloadsExpenses={props.setDownloadsExpenses}
              listSave={listSave}
              setListSave={setListSave}
              idSave={idSave}
              setIdSave={setIdSave}
            />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Menu;
