/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PostService from '../API/PostService';
import useFetching from '../hooks/useFetching';
import Button from './UI/button/Button';

const Download = (props) => {
  const navigate = useNavigate();

  const [fetchingDelete, isLoadedDelete, errorDelete] = useFetching(async (id) => {
    await PostService.deleteItem(id);
    props.setListSave(props.listSave.filter((e) => e.value !== id));
  });

  return (
    <div className="downloads__list__row download" key={props.value}>
      <div className="download__title">{props.name}</div>
      <Button
        className="download__button"
        type="button"
        onClick={() => navigate(`/incomeCalculator/${props.value}`)}
      >
        <i className="material-icons">download</i>
      </Button>
      <Button
        className="delete__button material-icons"
        type="button"
        onClick={isLoadedDelete ? () => {} : () => fetchingDelete(props.value)}
      >
        <i className="material-icons">delete</i>
      </Button>
    </div>
  );
};

export default Download;
