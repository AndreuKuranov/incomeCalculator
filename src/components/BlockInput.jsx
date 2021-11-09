import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import './BlockInput.css';
import ItemInput from './ItemInput';
import Button from './UI/button/Button';
import '../i18next/i18next';

const BlockInput = ({ ...props }) => {
  const { t } = useTranslation();

  const calc = (Id, val) => {
    props.set(props.values.map((item) => (item.id !== Id ? item : { ...item, value: +val })));
  };

  const addDelete = (item) => {
    props.set(props.values.filter((e) => e.id !== item.id));
  };

  const newInput = () => {
    const placeholder = () => (props.additional.map((item) => (item !== props.id ? ' ' : item)));
    props.set([...props.values, { id: Date.now(), placeholder: placeholder(), value: 0 }]);
  };

  const discharge = () => {
    props.set(props.values.map((item) => ({ ...item, value: 0 })));
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
            typeButton="button"
            icon={<i className="material-icons">delete</i>}
            onClick={() => addDelete(item)}
          />
        ))}
        <div className="block__buttons">
          <Button
            className="block__button"
            type="reset"
            onClick={discharge}
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
