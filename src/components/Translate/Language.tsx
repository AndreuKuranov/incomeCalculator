import React from 'react';
import { useTranslation } from 'react-i18next';
import './Language.css';
import Select from '../UI/select/Select';
import '../../i18next/i18next';
import { defaultName } from '../../date/check';
import { LanguagesType } from '../../types/types';

const Language = () => {
  const { i18n } = useTranslation();
  const changleLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  const languages: LanguagesType[] = [
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
        defaultName={defaultName(languages, i18n)}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => changleLanguage(e.target.value)}
        options={languages}
        defaultValue={i18n.resolvedLanguage}
      />
    </div>
  );
};

export default Language;
