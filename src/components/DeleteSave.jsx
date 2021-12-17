import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './DeleteSave.css';
import Button from './UI/button/Button';
import { deleteIdAction } from '../store/id';

const DeleteSave = () => {
  const dispatch = useDispatch();
  const currentRoute = useSelector((state) => state.route.currentRoute);
  const newRoute = useSelector((state) => state.route.newRoute);

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
