import React, { useState, useEffect } from 'react';
import './Download.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Select from './UI/select/Select';
import Button from './UI/button/Button';
import PostService from '../API/PostService';
import useFetching from '../hooks/useFetching';
import Modal from './UI/modal/Modal';
import { saveIdAction } from '../store/saveId';
import { downloadsIncomesAction } from '../store/downloadsIncomes';
import { downloadsExpensesAction } from '../store/downloadsExpenses';

const Download = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [modalInquiry, setModalInquiry] = useState(false);

  const [listSave, setListSave] = useState([]);
  const [idSave, setIdSave] = useState('');
  const [fetchingInquiry, isLoadedInquiry, errorInquiry] = useFetching(async () => {
    const response = await PostService.getAll();
    setListSave(response.map((item) => ({ name: item.name, value: item.id })));
  });
  const [fetchingDownload, isLoadedDownload, errorDownload] = useFetching(async () => {
    if (idSave.length >= 7) {
      const response = await PostService.getItem(idSave);
      dispatch(downloadsIncomesAction(response.incomes));
      dispatch(downloadsExpensesAction(response.expenses));
      dispatch(saveIdAction(idSave));
    }
  });
  const [fetchingDelete, isLoadedDelete, errorDelete] = useFetching(async () => {
    if (idSave.length >= 7) {
      await PostService.deleteItem(idSave);
    }
    setIdSave('');
  });

  useEffect(() => {
    fetchingInquiry();
  }, []);

  useEffect(() => {
    if (errorDownload || errorDelete) {
      setModal(true);
    }
  }, [errorDownload, errorDelete]);

  useEffect(() => {
    if (errorInquiry) {
      setModalInquiry(true);
    }
  }, [errorInquiry]);

  const errorListSave = (inquiry, loaded) => {
    if (inquiry) {
      return 'Сервер не отвечает';
    } if (loaded) {
      return 'Идет загрузка...';
    }
    return 'Сохранения';
  };

  return (
    <div>
      <div className="menu__row">
        <Button
          className="delete__button"
          type="button"
          onClick={isLoadedDelete ? () => {} : () => fetchingDelete()}
          style={isLoadedDelete ? { opacity: '0.7' } : {}}
        >
          <i className="material-icons">delete</i>
        </Button>
        <Select
          defaultValue={errorListSave(modalInquiry, isLoadedInquiry)}
          onChange={(value) => setIdSave(value)}
          options={listSave}
        />
        <Link style={{ textDecoration: 'none' }} to={`/incomeCalculator/${idSave}`}>
          <Button
            className="download__button material-icons"
            type="button"
            onClick={isLoadedDownload ? () => {} : () => fetchingDownload()}
            style={isLoadedDownload ? { opacity: '0.7' } : {}}
          >
            download
          </Button>
        </Link>
      </div>
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

export default Download;
