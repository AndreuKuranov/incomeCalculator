import React from 'react';
import './BlockInput.css';
import ItemInput from './ItemInput';
import Button from './UI/button/Button';
import translate from '../i18n/translate';

const BlockInput = (props) => (
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
          {translate('reset')}
        </Button>
        <Button
          className="block__button"
          type="button"
        >
          {translate('add field')}
        </Button>
      </div>
    </form>
  </div>
);

export default BlockInput;
