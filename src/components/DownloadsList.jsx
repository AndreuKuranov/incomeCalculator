/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import cn from 'classnames';
import './DownloadsList.css';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PostService from '../API/PostService';
import useFetching from '../hooks/useFetching';
import { getPageCount } from '../date/pages';
import { errorListSave } from '../date/check';
import { useObserver } from '../hooks/useObserver';
import Download from './Download';
import { saveIdAction } from '../store/saveId';
import { textErrorAction } from '../store/textError';

const DownloadsList = (props) => {
  const [modalInquiry, setModalInquiry] = useState(false);
  const lastElement = useRef();
  const dispatch = useDispatch();
  const [listSave, setListSave] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [limitPage] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);

  const { incomeCalculator } = useParams();
  useEffect(() => {
    dispatch(saveIdAction(''));
  }, [incomeCalculator]);

  const [fetchingInquiry, isLoadedInquiry, errorInquiry] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    setListSave([...listSave, ...response.data.map((item) => ({ name: item.name, value: item.id }))]);
    const totalCount = response.headers['x-total-count'];
    setTotalPage(getPageCount(totalCount, limit));
  });
  const [fetchingDelete, isLoadedDelete, errorDelete] = useFetching(async (id) => {
    await PostService.deleteItem(id);
    setListSave(listSave.filter((e) => e.value !== id));
  });

  useObserver(lastElement, pageNumber < totalPage, isLoadedInquiry, () => {
    setPageNumber(pageNumber + 1);
  });

  useEffect(() => {
    const ac = new AbortController();
    fetchingInquiry(limitPage, pageNumber);
    return () => ac.abort();
  }, [pageNumber]);
  useEffect(() => {
    if (errorInquiry) {
      setModalInquiry(true);
    }
  }, [errorInquiry]);

  useEffect(() => {
    if (errorDelete) {
      dispatch(textErrorAction('Error delete'));
    }
  }, [errorDelete]);

  return (
    <div className={cn('downloads__list', props.className)}>
      <div className="downloads__list__container container">
        <h1 className="downloads__list__title">{errorListSave(modalInquiry, isLoadedInquiry)}</h1>
        <div className="downloads__list__column">
          {listSave.map((item) => (
            <Download
              name={item.name}
              value={item.value}
              key={item.value}
              fetchingDelete={fetchingDelete}
              isLoadedDelete={isLoadedDelete}
            />
          ))}
          <div ref={lastElement} />
        </div>
      </div>
    </div>
  );
};

export default DownloadsList;
