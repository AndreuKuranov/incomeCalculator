import React, { useState } from 'react';
import './style/App.css';

import Calc from './components/Calc';
import Header from './components/Header';
import Percent from './components/Percent';
import Sum from './components/Sum';
import Menu from './components/Menu';

import { I18nProvider, LOCALES } from './i18n';

function App() {
  const [locale, setLocale] = useState(LOCALES.RUSSIAN);
  const languages = [
    { value: LOCALES.RUSSIAN, name: 'Русский' },
    { value: LOCALES.ENGLISH, name: 'English' },
    { value: LOCALES.GERMAN, name: 'Deutsch' },
  ];

  return (
    <I18nProvider locale={locale}>
      <div className="main">
        <Menu
          className="main__menu"
          value={locale}
          onChange={(value) => setLocale(value)}
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
    </I18nProvider>
  );
}

export default App;
