import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import './ItemInput.css';
import Input from '../UI/input/Input';
import Button from '../UI/button/Button';
import '../../i18next/i18next';
import useInput from '../../hooks/useInput';

const ItemInput = ({ onChange, onClick, ...props }) => {
  const { t } = useTranslation();
  const classLabel = useInput(props.value, { NumberError: false }, 'floating-label-focus', props.resetLabel, props.setResetLabel);

  return (
    <div className={cn('item', props.className)}>
      <Input
        className="item__input"
        autoсomplete={props.autoсomplete}
        type={props.typeInput}
        value={props.value !== 0 ? props.value : ''}
        onChange={(event) => onChange(props.id, event.target.value)}
        onFocus={(e) => classLabel.onFocus(e)}
        onBlur={(e) => classLabel.onBlur(e)}
      />
      <span className={cn('floating-label', classLabel.classLabelFocus)}>
        {
          !classLabel.NumberError
            ? t(props.placeholder)
            : classLabel.NumError()
        }
      </span>
      <Button
        className="item__button"
        type={props.typeButton}
        title="delete"
        onClick={() => onClick(props.item)}
      >
        {props.icon}
      </Button>
    </div>
  );
};

export default ItemInput;
