import React, { useState } from 'react';
import cn from 'classnames';
import './Menu.css';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from './UI/modal/Modal';
import Button from './UI/button/Button';
import Language from './Language';
import Save from './Save';
import { saveIdAction } from '../store/saveId';

const Menu = (props) => {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className={cn('menu', props.className)}>
      <div className="menu__container container">
        <div className="menu__settings">

          <Link
            style={{ textDecoration: 'none', padding: '0px 5px 0px 0px' }}
            to="/incomeCalculator"
          >
            <Button
              type="button"
              className="material-icons"
              onClick={() => dispatch(saveIdAction(''))}
            >
              home
            </Button>
          </Link>
          <Link
            style={{ textDecoration: 'none', padding: '0px 5px 0px 0px' }}
            to="/incomeCalculator/new"
          >
            <Button
              type="button"
              className="material-icons"
              onClick={() => dispatch(saveIdAction('new'))}
            >
              calculate
            </Button>
          </Link>

          <Save />
          <Button
            className="material-icons"
            type="button"
            onClick={() => setModal(true)}
          >
            settings
          </Button>
          <Modal
            className="menu__modal"
            visible={modal}
            setVisible={setModal}
          >
            <Button
              className="menu__button material-icons"
              type="button"
              onClick={() => setModal(false)}
            >
              close
            </Button>
            <Language />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Menu;
