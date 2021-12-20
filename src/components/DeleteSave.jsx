import React from 'react';
import { useDispatch } from 'react-redux';
import './DeleteSave.css';
import Button from './UI/button/Button';
import { deleteIdAction } from '../store/id';
import { useTypedSelector } from '../hooks/useTypedSelector';

const DeleteSave = () => {
  const dispatch = useDispatch();
  const { newRoute, currentRoute } = useTypedSelector((state) => state.route)

  return (
    (currentRoute && currentRoute !== newRoute)
    && (
      <div>
        <Button
          className="delete-save"
          type="button"
          title="delete"
          onClick={() => dispatch(deleteIdAction(currentRoute))}
        >
          <i className="material-icons">delete</i>
        </Button>
      </div>
    )
  );
};

export default DeleteSave;
