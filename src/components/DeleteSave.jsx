/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from './UI/button/Button';
import { deleteIdAction } from '../store/deleteId';

const DeleteSave = () => {
  const dispatch = useDispatch();
  const idSave = useSelector((state) => state.id.id);
  return (
    <div>
      <Button
        style={{ backgroundImage: 'linear-gradient(210deg, var(--additional-color-1) 0%, red)' }}
        type="button"
        onClick={() => dispatch(deleteIdAction(idSave))}
      >
        <i className="material-icons">delete</i>
      </Button>
    </div>
  );
};

export default DeleteSave;
