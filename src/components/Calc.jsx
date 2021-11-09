import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import BlockInput from './BlockInput';
import './Calc.css';
import '../i18next/i18next';

const Calc = (props) => {
  const { t } = useTranslation();

  const additionalField = ['calc.additional_income', 'calc.additional_expenses'];

  return (
    <div className={cn('calc', props.className)}>
      <div className="calc__container container">
        <div className="calc__body">
          <BlockInput
            className="calc__block"
            title={t('calc.incomes')}
            values={props.incomes}
            set={props.setIncomes}
            id="calc.additional_income"
            additional={additionalField}
          />
          <BlockInput
            className="calc__block"
            title={t('calc.expenses')}
            values={props.expenses}
            set={props.setExpenses}
            id="calc.additional_expenses"
            additional={additionalField}
          />
        </div>
      </div>
    </div>
  );
};

export default Calc;
