/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import './BlockInput.css';
import ItemInput from './ItemInput';
import Button from './UI/button/Button';
import '../i18next/i18next';

const BlockInput = ({ additional, ...props }) => {
  const { t } = useTranslation();
  const [resetLabel, setResetLabel] = useState(false);

  const calc = (Id, val) => {
    props.set(props.values.map((item) => (item.id !== Id ? item : { ...item, value: +val })));
  };

  const addDelete = (item) => {
    props.set(props.values.filter((e) => e.id !== item.id));
  };

  const newInput = () => {
    const placeholder = () => {
      for (let i = 0; i < additional.length; i += 1) {
        if (additional[i] === props.id) {
          return additional[i];
        }
      }
    };
    props.set([...props.values, { id: Date.now(), placeholder: placeholder(), value: 0 }]);
  };

  const reset = () => {
    props.set(props.values.map((item) => ({ ...item, value: 0 })));
    setResetLabel(true);
  };

  return (
    <div className={cn('block', props.className)}>
      <h2 className="block__title">{props.title}</h2>
      <form className="block__form">
        {props.values.map((item) => (
          <ItemInput
            className="block__item"
            autoсomplete="off"
            typeInput="number"
            id={item.id}
            placeholder={item.placeholder}
            onChange={(Id, val) => calc(Id, val)}
            key={item.id}
            value={item.value}
            typeButton="button"
            icon={<i className="material-icons">delete</i>}
            onClick={() => addDelete(item)}
            resetLabel={resetLabel}
            setResetLabel={setResetLabel}
          />
        ))}
        <div className="block__buttons">
          <Button
            className="block__button"
            type="reset"
            onClick={reset}
          >
            {t('calc.reset')}
          </Button>
          <Button
            className="block__button"
            type="button"
            onClick={newInput}
          >
            {t('calc.add_field')}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BlockInput;
