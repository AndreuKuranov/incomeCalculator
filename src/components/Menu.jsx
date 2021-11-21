import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import './Menu.css';
import Modal from './UI/modal/Modal';
import Button from './UI/button/Button';
import Language from './Language';
import Download from './Download';
import Save from './Save';
import { currentDate } from '../date/date';

const Menu = (props) => {
  const [modal, setModal] = useState(false);

  const [listSave, setListSave] = useState([]);
  const [idSave, setIdSave] = useState('');

  const sortSave = (sort) => {
    setListSave([...listSave].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  useEffect(() => {
    sortSave('name');
  }, [modal, idSave]);

  const deleteSave = (Id) => {
    setListSave(listSave.filter((e) => e.value !== Id));
  };

  const newSave = (Id) => {
    setListSave([...listSave, { name: currentDate(), value: Id }]);
  };

  const updateListSave = (Id) => {
    setListSave(listSave.map((item) => (item.value !== Id ? item : { ...item, name: currentDate() })));
  };

  return (
    <div className={cn('menu', props.className)}>
      <div className="menu__container container">
        <div className="menu__settings">
          <Save
            saveIncomes={props.saveIncomes}
            saveExpenses={props.saveExpenses}
            listSave={listSave}
            newSave={newSave}
            updateListSave={updateListSave}
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
              deleteSave={deleteSave}
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
