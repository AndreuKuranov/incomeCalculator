/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { textErrorAction } from '../store/textError';
import PostService from '../API/PostService';
import useFetching from '../hooks/useFetching';
import Button from './UI/button/Button';
import Modal from './UI/modal/Modal';
import { deleteIdAction } from '../store/deleteId';
import { listSaveAction } from '../store/listSave';

const DeleteConfirmation = () => {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const deleteId = useSelector((state) => state.deleteId.id);
  const list = useSelector((state) => state.listSave.listSave);
  const idSave = useSelector((state) => state.id.id);
  const newUrl = useSelector((state) => state.newUrl.newUrl);

  const [fetchingDelete, isLoadedDelete, errorDelete] = useFetching(async (id) => {
    await PostService.deleteItem(id);
    dispatch(listSaveAction(list.filter((e) => e.value !== id)));
    if (idSave) {
      navigate(`/incomeCalculator/${newUrl}`);
    }
  });
  useEffect(() => {
    if (errorDelete) {
      dispatch(textErrorAction('Error delete'));
    }
  }, [errorDelete]);

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

  return (
    <Modal
      visible={modal}
      setVisible={() => setModal()}
    >
      <Button
        type="button"
        title="Да"
        onClick={isLoadedDelete ? () => {} : () => onClick(deleteId)}
      >
        Да
      </Button>
      <Button
        title="Нет"
        type="button"
        onClick={() => setModal(false)}
      >
        Нет
      </Button>
    </Modal>
  );
};

export default DeleteConfirmation;
