/* eslint-disable no-unused-vars */
import React from 'react';
import PostService from '../API/PostService';
import useFetching from '../hooks/useFetching';
import Button from './UI/button/Button';

const DeleteSave = (props) => {
  const [fetchingDelete, isLoadedDelete, errorDelete] = useFetching(async (id) => {
    await PostService.deleteItem(id);
    props.setListSave(props.listSave.filter((e) => e.value !== id));
  });

  return (
    <div>
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

export default DeleteSave;
