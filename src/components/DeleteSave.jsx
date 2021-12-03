/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PostService from '../API/PostService';
import useFetching from '../hooks/useFetching';
import Button from './UI/button/Button';
import Modal from './UI/modal/Modal';

const DeleteSave = (props) => {
  const [modal, setModal] = useState(false);

  const [fetchingDelete, isLoadedDelete, errorDelete] = useFetching(async (id) => {
    await PostService.deleteItem(id);
    props.setListSave(props.listSave.filter((e) => e.value !== id));
  });

  useEffect(() => {
    if (errorDelete) {
      setModal(true);
    }
  }, [errorDelete]);

  return (
    <div>
      <Button
        className="delete__button material-icons"
        type="button"
        onClick={isLoadedDelete ? () => {} : () => fetchingDelete(props.value)}
        style={isLoadedDelete ? { opacity: '0.7' } : {}}
      >
        <i className="material-icons">delete</i>
      </Button>
      <Modal
        className="menu__modal"
        visible={modal}
        setVisible={setModal}
      >
        <div>Ошибка</div>
      </Modal>
    </div>
  );
};

export default DeleteSave;
