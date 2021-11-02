/* eslint-disable no-console */
import React from 'react';
import './Header.css';

import { useTranslation } from 'react-i18next';
import '../i18next/i18next';

const Header = (props) => {
  const { t } = useTranslation();
  return (
    <div className={`header ${props.className}`}>
      <div className="header__container container">
        <h1 className="header__title">{t('calc.calculator')}</h1>
      </div>
    </div>
  );
};

export default Header;
