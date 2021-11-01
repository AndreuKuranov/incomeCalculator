import React, { useState } from 'react';
import './style/App.css';

import MainCalc from './components/MainCalc';
import MainHeader from './components/MainHeader';
import MainPercent from './components/MainPercent';
import MainSum from './components/MainSum';
import MainMenu from './components/MainMenu';

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
        <MainMenu
          className="main__menu"
          value={locale}
          onChange={(value) => setLocale(value)}
          options={languages}
        />
        <MainHeader
          className="main__header"
        />
        <MainCalc
          className="main__calc"
        />
        <MainSum
          className="main__sum"
        />
        <MainPercent
          className="main__percent"
        />
      </div>
    </I18nProvider>
  );
}

export default App;
