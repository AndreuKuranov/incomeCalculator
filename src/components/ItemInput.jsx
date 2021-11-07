import React from 'react';
import { useTranslation } from 'react-i18next';
import './ItemInput.css';
import Input from './UI/input/Input';
import Button from './UI/button/Button';
import '../i18next/i18next';

const ItemInput = ({ onChange, onClick, ...props }) => {
  const { t } = useTranslation();
  return (
    <div className={`item ${props.className}`}>
      <Input
        className="item__input"
        autoсomplete={props.autoсomplete}
        type={props.typeInput}
        placeholder={t(props.placeholder)}
        id={props.id}
        onChange={(event) => onChange(props.id, event.target.value)}
      />
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
