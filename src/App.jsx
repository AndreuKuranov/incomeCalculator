import React, { useState } from 'react';
import './style/App.css';

import MainCalc from './components/MainCalc';
import MainHeader from './components/MainHeader';
import MainPercent from './components/MainPercent';
import MainSum from './components/MainSum';
import MySelect from './components/UI/select/MySelect';

import { I18nProvider, LOCALES } from './i18n';

function App() {
  const [locale, setLocale] = useState(LOCALES.RUSSIAN);
  return (
    <I18nProvider locale={locale}>
      <div className="main">
        <div className="main__menu menu">
          <div className="menu__container container">
            <MySelect
              value={locale}
              onChange={(value) => setLocale(value)}
              options={[
                { value: LOCALES.RUSSIAN, name: 'Русский' },
                { value: LOCALES.ENGLISH, name: 'English' },
                { value: LOCALES.GERMAN, name: 'Deutsch' },
              ]}
            />
          </div>
        </div>
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
