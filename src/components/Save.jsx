/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Button from './UI/button/Button';
import PostService from '../API/PostService';
import useFetching from '../hooks/useFetching';
import Modal from './UI/modal/Modal';
import { unique } from '../date/check';

const Save = () => {
  const [modal, setModal] = useState(false);
  const saveIncomes = useSelector((state) => state.saveIn.incomes);
  const saveExpenses = useSelector((state) => state.saveEx.expenses);
  const idSave = useSelector((state) => state.id.id);
  const [newSave] = useState('new');

  const [fetchingSave, isLoadedSave, errorSave] = useFetching(async () => {
    if (idSave && idSave !== newSave) {
      await PostService.putItem(idSave, saveIncomes, saveExpenses);
    } else if (idSave === newSave) {
      const newId = unique();
      await PostService.postItem(saveIncomes, saveExpenses, newId);
    }
  });

  useEffect(() => {
    if (errorSave) {
      setModal(true);
    }
  }, [errorSave]);

  return (
    <div style={{ margin: '0px 5px 0px 0px' }}>
      <Button
        type="button"
        onClick={isLoadedSave ? () => {} : () => fetchingSave()}
        style={isLoadedSave ? { opacity: '0.7' } : {}}
      >
        <i className="material-icons">save</i>
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

export default Save;
