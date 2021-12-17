import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { textErrorAction } from '../../store/textError';
import './DeleteConfirmation.css';
import PostService from '../../API/PostService';
import useFetching from '../../hooks/useFetching';
import Button from '../UI/button/Button';
import Modal from '../UI/modal/Modal';
import { deleteIdAction } from '../../store/id';
import { listSaveAction } from '../../store/listSave';

const DeleteConfirmation = () => {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const deleteId = useSelector((state) => state.id.deleteId);
  const list = useSelector((state) => state.listSave.listSave);
  const currentRoute = useSelector((state) => state.route.currentRoute);
  const newRoute = useSelector((state) => state.route.newRoute);

  const [fetchingDelete, isLoadedDelete, errorDelete] = useFetching(async (id) => {
    await PostService.deleteItem(id);
    dispatch(listSaveAction(list.filter((e) => e.value !== id)));
    if (currentRoute) {
      navigate(`/incomeCalculator/${newRoute}`);
    }
  });

  const onClick = (Id) => {
    fetchingDelete(Id);
    setModal(false);
  };

  useEffect(() => {
    if (deleteId) {
      setModal(true);
    }
  }, [deleteId]);

  useEffect(() => {
    if (!modal) {
      dispatch(deleteIdAction(''));
    }
  }, [modal]);

  useEffect(() => {
    if (errorDelete) {
      dispatch(textErrorAction('Error delete'));
    }
  }, [errorDelete]);

  return (
    <Modal
      visible={modal}
      setVisible={() => setModal()}
    >
      <h3
        className="delete__confirmation-title"
      >
        Вы действительно хотите удалить сохранение?
      </h3>
      <div className="delete__confirmation">
        <Button
          className="delete__confirmation-button"
          type="button"
          title="Да"
          onClick={isLoadedDelete ? () => {} : () => onClick(deleteId)}
        >
          Да
        </Button>
        <Button
          className="delete__confirmation-button"
          title="Нет"
          type="button"
          onClick={() => setModal(false)}
        >
          Нет
        </Button>
      </div>
    </Modal>
  );
};

export default DeleteConfirmation;
