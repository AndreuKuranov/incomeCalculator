import React from 'react';
import { useTranslation } from 'react-i18next';
import './BlockInput.css';
import ItemInput from './ItemInput';
import Button from './UI/button/Button';
import '../i18next/i18next';

const BlockInput = (props) => {
  const { t } = useTranslation();
  return (
    <div className={`block ${props.className}`}>
      <h2 className="block__title">{props.title}</h2>
      <form className="block__form">
        {props.values.map((value) => (
          <ItemInput
            className="block__item"
            id={value.id}
            placeholder={value.placeholder}
            key={value.id}
          />
        ))}
        <div className="block__buttons">
          <Button
            className="block__button"
            type="reset"
          >
            {t('calc.reset')}
          </Button>
          <Button
            className="block__button"
            type="button"
          >
            {t('calc.add_field')}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BlockInput;
