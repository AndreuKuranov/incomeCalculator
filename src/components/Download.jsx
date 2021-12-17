import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './Download.css';
import Button from './UI/button/Button';
import { deleteIdAction } from '../store/id';

const Download = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="downloads-list__row download" key={props.value}>
      <div className="download__title">{props.name}</div>
      <Button
        className="download__button"
        type="button"
        title="download"
        onClick={() => navigate(`/incomeCalculator/${props.value}`)}
      >
        <i className="material-icons">download</i>
      </Button>
      <Button
        className="download-delete__button material-icons"
        type="button"
        title="delete"
        onClick={() => dispatch(deleteIdAction(props.value))}
      >
        <i className="material-icons">delete</i>
      </Button>
    </div>
  );
};

export default Download;