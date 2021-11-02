import React from 'react';
import './style/App.css';

import { useTranslation } from 'react-i18next';
import Calc from './components/Calc';
import Header from './components/Header';
import Percent from './components/Percent';
import Sum from './components/Sum';
import Menu from './components/Menu';

import './i18next/i18next';

function App() {
  const { t, i18n } = useTranslation();
  const changleLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const languages = [
    { value: ' ', name: t('calc.choose_language') },
    { value: 'ru', name: 'Русский' },
    { value: 'en', name: 'English' },
    { value: 'de', name: 'Deutsch' },
  ];
  return (
    <div className="main">
      <Menu
        className="main__menu"
        onChange={(value) => changleLanguage(value)}
        options={languages}
      />
      <Header
        className="main__header"
      />
      <Calc
        className="main__calc"
      />
      <Sum
        className="main__sum"
      />
      <Percent
        className="main__percent"
      />
    </div>
  );
}

export default App;
