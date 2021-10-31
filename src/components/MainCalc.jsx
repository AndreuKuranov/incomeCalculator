import React from 'react';
import BlockInput from './BlockInput';
import './MainCalc.css';
import translate from '../i18n/translate';

const MainCalc = (props) => {
  const incomes = [
    { id: 'income1', placeholder: 'hello', value: 0 },
    { id: 'income2', placeholder: 'hello', value: 0 },
    { id: 'income3', placeholder: 'hello', value: 0 },
    { id: 'income4', placeholder: 'hello', value: 0 },
  ];

  const expenses = [
    { id: 'expense1', placeholder: 'hello', value: 0 },
    { id: 'expense2', placeholder: 'hello', value: 0 },
    { id: 'expense3', placeholder: 'hello', value: 0 },
    { id: 'expense4', placeholder: 'hello', value: 0 },
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

export default MainCalc;
