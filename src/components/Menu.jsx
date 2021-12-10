import React, { useState } from 'react';
import cn from 'classnames';
import './Menu.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Modal from './UI/modal/Modal';
import Button from './UI/button/Button';
import Language from './Language';
import Save from './Save';

const Menu = (props) => {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const newUrl = useSelector((state) => state.newUrl.newUrl);

  return (
    <div className={cn('menu', props.className)}>
      <div className="menu__container container">
        <div className="menu__settings">
          <Button
            type="button"
            title="home"
            onClick={() => navigate('/incomeCalculator')}
          >
            <i className="material-icons">home</i>
          </Button>
          <Button
            type="button"
            title="calculate"
            onClick={() => navigate(`/incomeCalculator/${newUrl}`)}
          >
            <i className="material-icons">calculate</i>
          </Button>
          <Save />
          <Button
            type="button"
            title="settings"
            onClick={() => setModal(true)}
          >
            <i className="material-icons">settings</i>
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
  );
};

export default Menu;
