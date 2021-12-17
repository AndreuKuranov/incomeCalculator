import React, { useEffect } from 'react';
import cn from 'classnames';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Loader from 'react-loader-spinner';
import BlockInput from './BlockInput';
import './Calc.css';
import '../../i18next/i18next';
import { downloadsIncomesAction, downloadsExpensesAction, percentAction } from '../../store/downloads';
import { currentRouteAction } from '../../store/route';
import { newIdAction } from '../../store/id';
import { listSaveAction } from '../../store/listSave';
import { unique } from '../../date/check';
import { getDownloadsItem } from '../../asynsActions/getDownloadsItem';

const Calc = (props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { invoiceId } = useParams();
  const incomes = useSelector((state) => state.sample.incomes);
  const expenses = useSelector((state) => state.sample.expenses);
  const downloadsIncomes = useSelector((state) => state.downloads.incomes);
  const downloadsExpenses = useSelector((state) => state.downloads.expenses);
  const downloadsLoaded = useSelector((state) => state.downloads.loaded);
  const newRoute = useSelector((state) => state.route.newRoute);
  const additionalField = ['calc.additional_income', 'calc.additional_expenses'];

  useEffect(() => {
    if (invoiceId && invoiceId !== newRoute) {
      dispatch(getDownloadsItem(invoiceId));
    }
    if (invoiceId === newRoute) {
      dispatch(downloadsIncomesAction(incomes));
      dispatch(downloadsExpensesAction(expenses));
      dispatch(percentAction('0'));
      dispatch(currentRouteAction(invoiceId));
      dispatch(newIdAction(unique()));
    }
    dispatch(listSaveAction([]));
  }, [invoiceId]);

  return (
    <div className={cn('calc', props.className)}>
      <div className="calc__container container">
        {
          !downloadsLoaded
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
