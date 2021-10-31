import React from 'react';
import './ItemInput.css';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';

const ItemInput = (props) => (
  <div className={`item ${props.className}`}>
    <MyInput
      className="item__input"
      autoсomplete="off"
      type="number"
      step="100"
      placeholder={props.placeholder}
      id={props.id}
    />
    <MyButton
      className="item__button"
      type="button"
    >
      <span className="material-icons">delete</span>
    </MyButton>
  </div>
);

export default ItemInput;
