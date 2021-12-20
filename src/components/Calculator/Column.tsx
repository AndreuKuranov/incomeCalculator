import React, { FC } from 'react';
import cn from 'classnames';
import './Column.css';

interface ColumnProps {
  className?: string,
  icon: string,
  id: string,
  title: string,
  value: string,
  currency: string,
}

const Column: FC<ColumnProps> = (props) => (
  <div className={cn('column', props.className)}>
    <div className="column__item">
      <div className="column__icon">
        <img className="column__image" src={props.icon} alt={props.id} />
      </div>
      <h3 className="column__title text">{props.title}</h3>
      <div className="column__value text">
        {props.value}
        {' '}
        {props.currency}
      </div>
    </div>
  </div>
);

export default Column;
