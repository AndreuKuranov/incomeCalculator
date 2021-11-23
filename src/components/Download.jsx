import React, { useState, useEffect } from 'react';
import './Download.css';
import Select from './UI/select/Select';
import Button from './UI/button/Button';
import PostService from '../API/PostService';
import useFetching from '../hooks/useFetching';
import Modal from './UI/modal/Modal';

const Download = (props) => {
  const [modal, setModal] = useState(false);
  const [modalInquiry, setModalInquiry] = useState(false);

  const [fetchingInquiry, isLoadedInquiry, errorInquiry] = useFetching(async () => {
    const response = await PostService.getAll();
    props.setListSave(response.map((item) => ({ name: item.name, value: item.id })));
  });
  const [fetchingDownload, isLoadedDownload, errorDownload] = useFetching(async () => {
    if (props.idSave.length >= 7) {
      const response = await PostService.getItem(props.idSave);
      props.setDownloadsIncomes(response.incomes);
      props.setDownloadsExpenses(response.expenses);
    }
  });
  const [fetchingDelete, isLoadedDelete, errorDelete] = useFetching(async () => {
    if (props.idSave.length >= 7) {
      await PostService.deleteItem(props.idSave);
      props.deleteSave(props.idSave);
    }
    props.setIdSave('');
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

  return (
    <div>
      {
        modalInquiry
          ? <div>Сервер не отвечает</div>
          : (
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
                defaultValue={isLoadedInquiry ? 'Идет загрузка...' : 'Сохранения'}
                onChange={(value) => props.setIdSave(value)}
                options={props.listSave}
              />
              <Button
                className="download__button"
                type="button"
                onClick={isLoadedDownload ? () => {} : () => fetchingDownload()}
                style={isLoadedDownload ? { opacity: '0.7' } : {}}
              >
                <i className="material-icons">download</i>
              </Button>
            </div>
          )
      }
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
