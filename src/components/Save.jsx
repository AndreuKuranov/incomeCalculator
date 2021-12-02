/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from './UI/button/Button';
import PostService from '../API/PostService';
import useFetching from '../hooks/useFetching';
import Modal from './UI/modal/Modal';
import { saveIdAction } from '../store/saveId';

const Save = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const saveIncomes = useSelector((state) => state.saveIn.incomes);
  const saveExpenses = useSelector((state) => state.saveEx.expenses);
  const idSave = useSelector((state) => state.id.id);
  const newUrl = useSelector((state) => state.newUrl.newUrl);
  const newId = useSelector((state) => state.newId.newId);

  const [fetchingSave, isLoadedSave, errorSave] = useFetching(async () => {
    if (idSave && idSave !== newUrl) {
      await PostService.putItem(idSave, saveIncomes, saveExpenses);
    } else if (idSave === newUrl) {
      await PostService.postItem(saveIncomes, saveExpenses, newId);
      dispatch(saveIdAction(newId));
    }
  });

  useEffect(() => {
    if (errorSave) {
      setModal(true);
    }
  }, [errorSave]);

  return (
    <div style={{ margin: '0px 5px 0px 0px' }}>
      <Link style={{ textDecoration: 'none' }} to={`/incomeCalculator/${idSave === newUrl ? newId : idSave}`}>
        <Button
          type="button"
          onClick={isLoadedSave ? () => {} : () => fetchingSave()}
          style={isLoadedSave ? { opacity: '0.7' } : {}}
        >
          <i className="material-icons">save</i>
        </Button>
      </Link>
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
