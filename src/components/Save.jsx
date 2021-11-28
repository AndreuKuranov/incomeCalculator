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

  const [fetchingSave, isLoadedSave, errorSave] = useFetching(async () => {
    const newId = unique();
    await PostService.postItem(saveIncomes, saveExpenses, newId);
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
