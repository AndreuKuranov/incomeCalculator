/* eslint-disable no-sequences */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './Downloads.css';
import PostService from '../API/PostService';
import useFetching from '../hooks/useFetching';
import Button from './UI/button/Button';
import Modal from './UI/modal/Modal';
import { downloadsIncomesAction } from '../store/downloadsIncomes';
import { downloadsExpensesAction } from '../store/downloadsExpenses';

const Downloads = (props) => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [modalInquiry, setModalInquiry] = useState(false);
  const [listSave, setListSave] = useState([]);
  const [idSave, setIdSave] = useState('');

  const [fetchingInquiry, isLoadedInquiry, errorInquiry] = useFetching(async () => {
    const response = await PostService.getAll();
    setListSave(response.map((item) => ({ name: item.name, value: item.id })));
  });
  const [fetchingDownload, isLoadedDownload, errorDownload] = useFetching(async (id) => {
    const response = await PostService.getItem(id);
    dispatch(downloadsIncomesAction(response.incomes));
    dispatch(downloadsExpensesAction(response.expenses));
  });
  const [fetchingDelete, isLoadedDelete, errorDelete] = useFetching(async (id) => {
    await PostService.deleteItem(id);
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
      return 'Сохранений не найдено';
    } if (loaded) {
      return 'Идет загрузка...';
    }
    return 'Сохранения';
  };

  return (
    <div className={cn('downloads__list', props.className)}>
      <div className="downloads__list__container container">
        <h1 className="downloads__list__title">{errorListSave(modalInquiry, isLoadedInquiry)}</h1>
        <div className="downloads__list__column">
          {listSave.map((item) => (
            <div className="downloads__list__row download" key={item.value}>
              <div className="download__title">{item.name}</div>
              <Link style={{ textDecoration: 'none' }} to={`/incomeCalculator/${item.value}`}>
                <Button
                  className="download__button material-icons"
                  type="button"
                  onClick={isLoadedDownload ? () => {} : () => fetchingDownload(item.value)}
                  style={isLoadedDownload ? { opacity: '0.7' } : {}}
                >
                  download
                </Button>
              </Link>
              <Button
                className="delete__button material-icons"
                type="button"
                onClick={isLoadedDelete ? () => {} : () => fetchingDelete(item.value)}
                style={isLoadedDelete ? { opacity: '0.7' } : {}}
              >
                delete
              </Button>
            </div>
          ))}
          <Modal
            className="menu__modal"
            visible={modal}
            setVisible={setModal}
          >
            <div>Ошибка</div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Downloads;
