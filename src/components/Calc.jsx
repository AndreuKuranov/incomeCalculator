/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import cn from 'classnames';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Loader from 'react-loader-spinner';
import useFetching from '../hooks/useFetching';
import PostService from '../API/PostService';
import BlockInput from './BlockInput';
import './Calc.css';
import '../i18next/i18next';
import { downloadsIncomesAction } from '../store/downloadsIncomes';
import { downloadsExpensesAction } from '../store/downloadsExpenses';
import { saveIdAction } from '../store/saveId';
import { newIdAction } from '../store/newId';
import { textErrorAction } from '../store/textError';
import { listSaveAction } from '../store/listSave';
import { unique } from '../date/check';

const Calc = (props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { invoiceId } = useParams();
  const incomes = useSelector((state) => state.incomes.incomes);
  const expenses = useSelector((state) => state.expenses.expenses);
  const downloadsIncomes = useSelector((state) => state.dowIn.incomes);
  const downloadsExpenses = useSelector((state) => state.dowEx.expenses);
  const newUrl = useSelector((state) => state.newUrl.newUrl);
  const additionalField = ['calc.additional_income', 'calc.additional_expenses'];

  const [fetchingDownload, isLoadedDownload, errorDownload] = useFetching(async (id) => {
    const response = await PostService.getItem(id);
    dispatch(downloadsIncomesAction(response.incomes));
    dispatch(downloadsExpensesAction(response.expenses));
    dispatch(saveIdAction(id));
  });

  useEffect(() => {
    if (invoiceId && invoiceId !== newUrl) {
      fetchingDownload(invoiceId);
    }
    if (invoiceId === newUrl) {
      dispatch(downloadsIncomesAction(incomes));
      dispatch(downloadsExpensesAction(expenses));
      dispatch(newIdAction(unique()));
      dispatch(saveIdAction(newUrl));
    }
    dispatch(listSaveAction([]));
  }, [invoiceId]);

  useEffect(() => {
    if (errorDownload) {
      dispatch(textErrorAction('Error downloads'));
    }
  }, [errorDownload]);

  return (
    <div className={cn('calc', props.className)}>
      <div className="calc__container container">
        {
          !isLoadedDownload
            ? (
              <div className="calc__body">
                <BlockInput
                  className="calc__block"
                  title={t('calc.incomes')}
                  values={downloadsIncomes}
                  set={downloadsIncomesAction}
                  id="calc.additional_income"
                  additional={additionalField}
                />
                <BlockInput
                  className="calc__block"
                  title={t('calc.expenses')}
                  values={downloadsExpenses}
                  set={downloadsExpensesAction}
                  id="calc.additional_expenses"
                  additional={additionalField}
                />
              </div>
            )
            : (
              <Loader
                className="calc__loader"
                type="Puff"
                color="#ff4400"
                height={100}
                width={100}
              />
            )
        }
      </div>
    </div>
  );
};

export default Calc;
