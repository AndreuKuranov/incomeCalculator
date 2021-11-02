import React from 'react';
import BlockInput from './BlockInput';
import './Calc.css';
import translate from '../i18n/translate';

const Calc = (props) => {
  const incomes = [
    { id: 'income1', placeholder: 'salary', value: 0 },
    { id: 'income2', placeholder: 'part-time job', value: 0 },
    { id: 'income3', placeholder: 'additional income', value: 0 },
    { id: 'income4', placeholder: 'additional income', value: 0 },
  ];

  const expenses = [
    { id: 'expense1', placeholder: 'HCS', value: 0 },
    { id: 'expense2', placeholder: 'mobile connection', value: 0 },
    { id: 'expense3', placeholder: 'home internet', value: 0 },
    { id: 'expense4', placeholder: 'credit', value: 0 },
  ];

  return (
    <div className={`calc ${props.className}`}>
      <div className="calc__container container">
        <div className="calc__body">
          <BlockInput
            className="calc__block"
            title={translate('incomes')}
            values={incomes}
          />
          <BlockInput
            className="calc__block"
            title={translate('expenses')}
            values={expenses}
          />
        </div>
      </div>
    </div>
  );
};

export default Calc;
