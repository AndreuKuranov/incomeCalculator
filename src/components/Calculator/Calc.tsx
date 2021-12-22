import React, { useEffect, FC } from 'react';
import cn from 'classnames';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import BlockInput from './BlockInput';
import './Calc.css';
import '../../i18next/i18next';
import { downloadsIncomesAction, downloadsExpensesAction, percentAction } from '../../store/downloads';
import { currentRouteAction } from '../../store/route';
import { newIdAction } from '../../store/id';
import { listSaveAction, totalPageAction, pageNumberAction } from '../../store/listSave';
import { unique } from '../../date/check';
import { downloadsAsynsActions } from '../../asynsActions/downloadsAsynsActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Loaders from '../Loaders';

interface CalcProps {
  className?: string,
}

const Calc: FC<CalcProps> = (props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { invoiceId } = useParams<string>();
  const { incomesDefault, expensesDefault } = useTypedSelector((state) => state.defaultCalc);
  const { incomes, expenses, loaded }= useTypedSelector((state) => state.downloads);
  const { newRoute } = useTypedSelector((state) => state.route);
  const additionalField = ['calc.additional_income', 'calc.additional_expenses'];

  useEffect(() => {
    if (invoiceId && invoiceId !== newRoute) {
      dispatch(downloadsAsynsActions(invoiceId));
    }
    if (invoiceId === newRoute) {
      dispatch(downloadsIncomesAction(incomesDefault));
      dispatch(downloadsExpensesAction(expensesDefault));
      dispatch(percentAction(0));
      dispatch(currentRouteAction(invoiceId));
      dispatch(newIdAction(unique()));
    }
    dispatch(listSaveAction([]));
    dispatch(totalPageAction(0));
    dispatch(pageNumberAction(1));
  }, [invoiceId]);

  return (
    <div className={cn('calc', props.className)}>
      <div className="calc__container container">
        {
          !loaded
            ? (
              <div className="calc__body">
                <BlockInput
                  className="calc__block"
                  title={t('calc.incomes')}
                  values={incomes}
                  setDownloadsAction={downloadsIncomesAction}
                  id="calc.additional_income"
                  additional={additionalField}
                />
                <BlockInput
                  className="calc__block"
                  title={t('calc.expenses')}
                  values={expenses}
                  setDownloadsAction={downloadsExpensesAction}
                  id="calc.additional_expenses"
                  additional={additionalField}
                />
              </div>
            )
            : (
              <Loaders 
                className="calc__loader"
              />
            )
        }
      </div>
    </div>
  );
};

export default Calc;
