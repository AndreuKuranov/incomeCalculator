import React, { useState, useEffect, useRef } from 'react';
import cn from 'classnames';
import './DownloadsList.css';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PostService from '../API/PostService';
import useFetching from '../hooks/useFetching';
import { getPageCount } from '../date/pages';
import { errorListSave } from '../date/check';
import { useObserver } from '../hooks/useObserver';
import Download from '../components/Download';
import { currentRouteAction } from '../store/route';
import { downloadsIncomesAction, downloadsExpensesAction, percentAction } from '../store/downloads';
import { listSaveAction } from '../store/listSave';
import { newIdAction } from '../store/id';

const DownloadsList = (props) => {
  const [modalInquiry, setModalInquiry] = useState(false);
  const lastElement = useRef();
  const dispatch = useDispatch();
  const { incomeCalculator } = useParams();
  const [totalPage, setTotalPage] = useState(0);
  const [limitPage] = useState(5);
  const [pageNumber, setPageNumber] = useState(1);
  const list = useSelector((state) => state.listSave.listSave);
  const incomes = useSelector((state) => state.sample.incomes);
  const expenses = useSelector((state) => state.sample.expenses);

  useEffect(() => {
    dispatch(downloadsIncomesAction(incomes));
    dispatch(downloadsExpensesAction(expenses));
    dispatch(percentAction('0'));
    dispatch(currentRouteAction(''));
    dispatch(newIdAction(''));
  }, [incomeCalculator]);

  const [fetchingInquiry, isLoadedInquiry, errorInquiry] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    dispatch(listSaveAction([...list, ...response.data.map((item) => ({ name: item.name, value: item.id }))]));
    const totalCount = response.headers['x-total-count'];
    setTotalPage(getPageCount(totalCount, limit));
  });

  useObserver(lastElement, pageNumber < totalPage, isLoadedInquiry, () => {
    setPageNumber(pageNumber + 1);
  });

  useEffect(() => {
    fetchingInquiry(limitPage, pageNumber);
  }, [pageNumber]);
  useEffect(() => {
    if (errorInquiry) {
      setModalInquiry(true);
    }
  }, [errorInquiry]);

  return (
    <div className={cn('downloads__list', props.className)}>
      <div className="downloads-list__container container">
        <h1 className="downloads-list__title">{errorListSave(modalInquiry, isLoadedInquiry)}</h1>
        <div className="downloads-list__column">
          {list.map((item) => (
            <Download
              name={item.name}
              value={item.value}
              key={item.value}
            />
          ))}
          <div className="observer" ref={lastElement} />
        </div>
      </div>
    </div>
  );
};

export default DownloadsList;
