import React, { useState } from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import Select from './UI/select/Select';
import './Menu.css';
import Modal from './UI/modal/Modal';
import Button from './UI/button/Button';
import '../i18next/i18next';

const Menu = (props) => {
  const { t, i18n } = useTranslation();
  const changleLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  const languages = [
    { value: 'ru', name: 'Русский' },
    { value: 'en', name: 'English' },
    { value: 'de', name: 'Deutsch' },
  ];

  const [modal, setModal] = useState(false);
  return (
    <div className={cn('menu', props.className)}>
      <div className="menu__container container">
        <div className="menu__settings">
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
            <div className="menu__row">
              <div className="menu__icon">
                <i className="material-icons">translate</i>
              </div>
              <Select
                className="menu__select"
                value={props.locale}
                defaultValue={t('calc.choose_language')}
                onChange={(value) => changleLanguage(value)}
                options={languages}
              />
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Menu;
