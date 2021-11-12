import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import BlockInput from './BlockInput';
import './Calc.css';
import '../i18next/i18next';

const Calc = (props) => {
  const { t } = useTranslation();

  const [incomes, setIncomes] = useState([
    { id: 'income1', placeholder: 'calc.salary', value: 0 },
    { id: 'income2', placeholder: 'calc.part-time_job', value: 0 },
    { id: 'income3', placeholder: 'calc.additional_income', value: 0 },
    { id: 'income4', placeholder: 'calc.additional_income', value: 0 },
  ]);
  const [expenses, setExpenses] = useState([
    { id: 'expense1', placeholder: 'calc.HCS', value: 0 },
    { id: 'expense2', placeholder: 'calc.mobile_connection', value: 0 },
    { id: 'expense3', placeholder: 'calc.home_internet', value: 0 },
    { id: 'expense4', placeholder: 'calc.credit', value: 0 },
  ]);

  useEffect(() => {
    props.setSumIncomes(incomes);
    props.setSumExpenses(expenses);
  });

  const additionalField = ['calc.additional_income', 'calc.additional_expenses'];

  return (
    <div className={cn('calc', props.className)}>
      <div className="calc__container container">
        <div className="calc__body">
          <BlockInput
            className="calc__block"
            title={t('calc.incomes')}
            values={incomes}
            set={setIncomes}
            id="calc.additional_income"
            additional={additionalField}
          />
          <BlockInput
            className="calc__block"
            title={t('calc.expenses')}
            values={expenses}
            set={setExpenses}
            id="calc.additional_expenses"
            additional={additionalField}
          />
        </div>
      </div>
    </div>
  );
};

export default Calc;
