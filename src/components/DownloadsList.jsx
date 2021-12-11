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
import Download from './Download';
import { saveIdAction } from '../store/saveId';
import { downloadsIncomesAction } from '../store/downloadsIncomes';
import { downloadsExpensesAction } from '../store/downloadsExpenses';
import { listSaveAction } from '../store/listSave';

const DownloadsList = (props) => {
  const [modalInquiry, setModalInquiry] = useState(false);
  const lastElement = useRef();
  const dispatch = useDispatch();
  const list = useSelector((state) => state.listSave.listSave);
  const [totalPage, setTotalPage] = useState(0);
  const [limitPage] = useState(5);
  const [pageNumber, setPageNumber] = useState(1);
  const incomes = useSelector((state) => state.incomes.incomes);
  const expenses = useSelector((state) => state.expenses.expenses);

  const { incomeCalculator } = useParams();
  useEffect(() => {
    dispatch(downloadsIncomesAction(incomes));
    dispatch(downloadsExpensesAction(expenses));
    dispatch(saveIdAction(''));
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
      <div className="downloads__list__container container">
        <h1 className="downloads__list__title">{errorListSave(modalInquiry, isLoadedInquiry)}</h1>
        <div className="downloads__list__column">
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
