import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './DeleteSave.css';
import Button from './UI/button/Button';
import { deleteIdAction } from '../store/deleteId';

const DeleteSave = () => {
  const dispatch = useDispatch();
  const idSave = useSelector((state) => state.id.id);
  const newUrl = useSelector((state) => state.newUrl.newUrl);

  return (
    (idSave && idSave !== newUrl)
    && (
      <div>
        <Button
          className="delete-save"
          type="button"
          onClick={() => dispatch(deleteIdAction(idSave))}
        >
          <i className="material-icons">delete</i>
        </Button>
      </div>
    )
  );
};

export default DeleteSave;
