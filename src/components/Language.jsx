import React from 'react';
import { useTranslation } from 'react-i18next';
import Select from './UI/select/Select';
import '../i18next/i18next';

const Language = () => {
  const { t, i18n } = useTranslation();
  const changleLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  const languages = [
    { value: 'ru', name: 'Русский' },
    { value: 'en', name: 'English' },
    { value: 'de', name: 'Deutsch' },
  ];
  return (
    <div className="menu__row">
      <div className="menu__icon">
        <i className="material-icons">translate</i>
      </div>
      <Select
        className="menu__select"
        defaultValue={t('calc.choose_language')}
        onChange={(value) => changleLanguage(value)}
        options={languages}
      />
    </div>
  );
};

export default Language;
