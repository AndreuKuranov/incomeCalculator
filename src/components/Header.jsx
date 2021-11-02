import React from 'react';
import './Header.css';
import translate from '../i18n/translate';

const Header = (props) => (
  <div className={`header ${props.className}`}>
    <div className="header__container container">
      <h1 className="header__title">{translate('calculator')}</h1>
    </div>
  </div>
);

export default Header;
