/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import cn from 'classnames';
import './DownloadsList.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PostService from '../API/PostService';
import useFetching from '../hooks/useFetching';
import { getPageCount } from '../date/pages';
import { errorListSave, resetValueCalc } from '../date/check';
import { useObserver } from '../hooks/useObserver';
import Download from './Download';
import { saveIdAction } from '../store/saveId';
import { downloadsIncomesAction } from '../store/downloadsIncomes';
import { downloadsExpensesAction } from '../store/downloadsExpenses';

const DownloadsList = (props) => {
  const [modalInquiry, setModalInquiry] = useState(false);
  const [listSave, setListSave] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [limitPage] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const incomes = useSelector((state) => state.incomes.incomes);
  const expenses = useSelector((state) => state.expenses.expenses);
  const lastElement = useRef();
  const dispatch = useDispatch();

  const { incomeCalculator } = useParams();
  useEffect(() => {
    dispatch(saveIdAction(''));
    dispatch(downloadsIncomesAction(incomes));
    dispatch(downloadsExpensesAction(expenses));
  }, [incomeCalculator]);

  const [fetchingInquiry, isLoadedInquiry, errorInquiry] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    setListSave([...listSave, ...response.data.map((item) => ({ name: item.name, value: item.id }))]);
    const totalCount = response.headers['x-total-count'];
    setTotalPage(getPageCount(totalCount, limit));
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
              setListSave={setListSave}
              listSave={listSave}
            />
          ))}
          <div ref={lastElement} />
        </div>
      </div>
    </div>
  );
};

export default DownloadsList;
