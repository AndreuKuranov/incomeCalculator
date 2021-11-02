import React from 'react';
import './ItemInput.css';
import Input from './UI/input/Input';
import Button from './UI/button/Button';

const ItemInput = (props) => (
  <div className={`item ${props.className}`}>
    <Input
      className="item__input"
      autoсomplete="off"
      type="number"
      step="100"
      placeholder={props.placeholder}
      id={props.id}
    />
    <Button
      className="item__button"
      type="button"
    >
      <i className="material-icons">delete</i>
    </Button>
  </div>
);

export default ItemInput;
