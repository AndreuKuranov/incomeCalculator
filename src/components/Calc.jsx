import React, { useEffect } from 'react';
import cn from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import BlockInput from './BlockInput';
import './Calc.css';
import '../i18next/i18next';
import { saveIncomesAction } from '../store/saveIncomes';
import { saveExpensesAction } from '../store/saveExpenses';
import { downloadsIncomesAction } from '../store/downloadsIncomes';
import { downloadsExpensesAction } from '../store/downloadsExpenses';

const Calc = (props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const downloadsIncomes = useSelector((state) => state.dowIn.incomes);
  const downloadsExpenses = useSelector((state) => state.dowEx.expenses);
  const additionalField = ['calc.additional_income', 'calc.additional_expenses'];

  useEffect(() => {
    dispatch(saveIncomesAction(downloadsIncomes));
    dispatch(saveExpensesAction(downloadsExpenses));
  }, [downloadsIncomes, downloadsExpenses]);

  return (
    <div className={cn('calc', props.className)}>
      <div className="calc__container container">
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
      </div>
    </div>
  );
};

export default Calc;
