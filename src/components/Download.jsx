/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './UI/button/Button';

const Download = (props) => {
  const navigate = useNavigate();

  return (
    <div className="downloads__list__row download" key={props.value}>
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
        className="delete__button material-icons"
        type="button"
        title="delete"
        onClick={props.isLoadedDelete ? () => {} : () => props.fetchingDelete(props.value)}
      >
        <i className="material-icons">delete</i>
      </Button>
    </div>
  );
};

export default Download;
