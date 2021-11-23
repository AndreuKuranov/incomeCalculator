import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import './ItemInput.css';
import Input from './UI/input/Input';
import Button from './UI/button/Button';
import '../i18next/i18next';

const ItemInput = ({ onChange, onClick, ...props }) => {
  const { t } = useTranslation();
  const [classLabelFocus, setClassLabelFocus] = useState('');

  const onFocus = () => {
    setClassLabelFocus('floating-label-focus');
  };
  const onBlur = () => {
    if (!props.value) {
      setClassLabelFocus('');
    }
  };

  useEffect(() => {
    if (props.value) {
      setClassLabelFocus('floating-label-focus');
    }
  }, [props.value]);

  useEffect(() => {
    if (props.resetLabel) {
      setClassLabelFocus('');
      props.setResetLabel(false);
    }
  }, [props.resetLabel]);

  return (
    <div className={cn('item', props.className)}>
      <Input
        className="item__input"
        autoсomplete={props.autoсomplete}
        type={props.typeInput}
        value={props.value !== 0 ? props.value : ''}
        onChange={(event) => onChange(props.id, event.target.value)}
        onFocus={() => onFocus()}
        onBlur={() => onBlur()}
      />
      <span className={cn('floating-label', classLabelFocus)}>
        {t(props.placeholder)}
      </span>
      <Button
        className="item__button"
        type={props.typeButton}
        onClick={() => onClick(props.item)}
      >
        {props.icon}
      </Button>
    </div>
  );
};

export default ItemInput;
