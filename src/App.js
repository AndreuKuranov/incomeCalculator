import React, { useState } from 'react';
import './style/App.css';

import MainCalc from './components/MainCalc';
import MainHeader from './components/MainHeader';
import MainPercent from './components/MainPercent';
import MainSum from './components/MainSum';

import { I18nProvider, LOCALES } from './i18n';

function App() {

  const [locale, setLocale] = useState(LOCALES.RUSSIAN);

  return (
    <I18nProvider locale={locale}>
      <div className='main'>
        <div className='main__menu menu'>
          <div className='menu__container container'>
            <select
              value={locale}
              onChange={event => setLocale(event.target.value)}
            >
              <option value={LOCALES.RUSSIAN}>Russian</option>
              <option value={LOCALES.ENGLISH}>English</option>
              <option value={LOCALES.GERMAN}>German</option>
            </select>
          </div>
        </div>
        <MainHeader
          className='main__header'
        />
        <MainCalc
          className='main__calc'
        />
        <MainSum
          className='main__sum'
        />
        <MainPercent
          className='main__percent'
        />
      </div>
    </I18nProvider>
  );
}

export default App;
