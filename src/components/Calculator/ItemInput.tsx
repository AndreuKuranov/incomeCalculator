import React, { FC } from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import './ItemInput.css';
import Input from '../UI/input/Input';
import Button from '../UI/button/Button';
import '../../i18next/i18next';
import useInput from '../../hooks/useInput';
import { EventType } from '../../types/types';

interface ItemInputProps {
  className?: string,
  autoсomplete?: string,
  typeInput: 'number',
  id: string,
  placeholder: string,
  onChange: (id: string, value: number) => void,
  value: number,
  typeButton: 'button',
  icon: any,
  onClick: () => void,
  resetLabel: boolean,
  setResetLabel: any,
}

const ItemInput: FC<ItemInputProps> = ({ onChange, onClick, ...props }) => {
  const { t } = useTranslation();
  const classLabel = useInput(props.value, { NumberError: false }, 'floating-label-focus', props.resetLabel, props.setResetLabel);

  return (
    <div className={cn('item', props.className)}>
      <Input
        className="item__input"
        autoсomplete={props.autoсomplete}
        type={props.typeInput}
        value={props.value !== 0 ? props.value : ''}
        onChange={(e: EventType) => onChange(props.id, e.target.value)}
        onFocus={() => classLabel.onFocus()}
        onBlur={(e: React.FocusEvent<HTMLInputElement>) => classLabel.onBlur(e)}
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
        onClick={onClick}
      >
        {props.icon}
      </Button>
    </div>
  );
};

export default ItemInput;
