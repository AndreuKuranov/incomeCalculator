import React, { useState } from 'react';
import Select from './UI/select/Select';
import './Menu.css';
import Modal from './UI/modal/Modal';
import Button from './UI/button/Button';

const Menu = (props) => {
  const [modal, setModal] = useState(false);
  return (
    <div className={`menu ${props.className}`}>
      <div className="menu__container container">
        <div className="menu__settings">
          <Button
            type="button"
            onClick={() => setModal(true)}
          >
            <i className="material-icons">settings</i>
          </Button>
          <Modal visible={modal} setVisible={setModal}>
            <Button
              type="button"
              onClick={() => setModal(false)}
            >
              <i className="material-icons">close</i>
            </Button>
            <div className="menu__row">
              <div className="menu__icon">
                <i className="material-icons">translate</i>
              </div>
              <Select
                className="menu__select"
                value={props.locale}
                onChange={props.onChange}
                options={props.options}
              />
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Menu;
