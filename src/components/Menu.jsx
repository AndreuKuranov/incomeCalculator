import React, { useState } from 'react';
import cn from 'classnames';
import './Menu.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Modal from './UI/modal/Modal';
import Button from './UI/button/Button';
import Language from './Language';
import Save from './Save';
import DeleteSave from './DeleteSave';

const Menu = (props) => {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const newUrl = useSelector((state) => state.newUrl.newUrl);
  const idSave = useSelector((state) => state.id.id);

  return (
    <div className={cn('menu', props.className)}>
      <div className="menu__container container">
        <div className="menu__settings">
          <div className="menu__row-button">
            {
              idSave
                && (
                  <Button
                    type="button"
                    title="home"
                    onClick={() => navigate('/incomeCalculator')}
                  >
                    <i className="material-icons">home</i>
                  </Button>
                )
            }
            <Save />
            <DeleteSave />
          </div>
          <div className="menu__row-button menu__row-button-right">
            <Button
              type="button"
              title="calculate"
              onClick={() => navigate(`/incomeCalculator/${newUrl}`)}
            >
              <i className="material-icons">calculate</i>
            </Button>
            <Button
              type="button"
              title="settings"
              onClick={() => setModal(true)}
            >
              <i className="material-icons">translate</i>
            </Button>
            <Modal
              className="menu__modal"
              visible={modal}
              setVisible={setModal}
            >
              <Language />
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
