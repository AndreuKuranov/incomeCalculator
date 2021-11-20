/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import './Download.css';
import Select from './UI/select/Select';
import Button from './UI/button/Button';
import PostService from '../API/PostService';
import useFetching from '../hooks/useFetching';

const Download = (props) => {
  const [fetchingInquiry, isLoadedInquiry, errorInquiry] = useFetching(async () => {
    const response = await PostService.getAll();
    props.setListSave(response.map((item) => ({ name: item.id, value: item.id })));
    props.setToUpdate(false);
  });
  const [fetchingDownload, isLoadedDownload, errorDownload] = useFetching(async () => {
    const response = await PostService.getItem(props.idSave);
    if (props.idSave.length === 16) {
      props.setDownloadsIncomes(response.incomes);
      props.setDownloadsExpenses(response.expenses);
    }
  });
  const [fetchingDelete, isLoadedDelete, errorDelete] = useFetching(async () => {
    await PostService.deleteItem(props.idSave);
    props.setToUpdate(true);
  });

  useEffect(() => {
    fetchingInquiry();
  }, [props.toUpdate]);

  return (
    <div>
      {
        errorInquiry
          ? <div>Сервер не отвечает</div>
          : (
            <div className="menu__row">

              <div>
                {
                  isLoadedDelete
                    ? (
                      <Button
                        className="delete__button"
                        type="button"
                        style={{ opacity: '0.7' }}
                      >
                        <i className="material-icons">delete</i>
                      </Button>
                    )
                    : (
                      <Button
                        className="delete__button"
                        type="button"
                        onClick={() => fetchingDelete()}
                      >
                        <i className="material-icons">delete</i>
                      </Button>
                    )
                }
              </div>

              {isLoadedInquiry
                ? <div>Идет загрузка...</div>
                : (
                  <Select
                    defaultValue="Сохранения"
                    onChange={(value) => props.setIdSave(value)}
                    options={props.listSave}
                  />
                )}

              <div>
                {
                  isLoadedDownload
                    ? (
                      <Button
                        className="download__button"
                        type="button"
                        style={{ opacity: '0.7' }}
                      >
                        <i className="material-icons">download</i>
                      </Button>
                    )
                    : (
                      <Button
                        className="download__button"
                        type="button"
                        onClick={() => fetchingDownload()}
                      >
                        <i className="material-icons">download</i>
                      </Button>
                    )
                }
              </div>

            </div>
          )
      }
    </div>
  );
};

export default Download;
