import React from 'react';
import { useTranslation } from 'react-i18next';
import BlockInput from './BlockInput';
import './Calc.css';
import '../i18next/i18next';

const Calc = (props) => {
  const { t } = useTranslation();
  const incomes = [
    { id: 'income1', placeholder: t('calc.salary'), value: 0 },
    { id: 'income2', placeholder: t('calc.part-time_job'), value: 0 },
    { id: 'income3', placeholder: t('calc.additional_income'), value: 0 },
    { id: 'income4', placeholder: t('calc.additional_income'), value: 0 },
  ];

  const expenses = [
    { id: 'expense1', placeholder: t('calc.HCS'), value: 0 },
    { id: 'expense2', placeholder: t('calc.mobile_connection'), value: 0 },
    { id: 'expense3', placeholder: t('calc.home_internet'), value: 0 },
    { id: 'expense4', placeholder: t('calc.credit'), value: 0 },
  ];

  return (
    <div className={`calc ${props.className}`}>
      <div className="calc__container container">
        <div className="calc__body">
          <BlockInput
            className="calc__block"
            title={t('calc.incomes')}
            values={incomes}
          />
          <BlockInput
            className="calc__block"
            title={t('calc.expenses')}
            values={expenses}
          />
        </div>
      </div>
    </div>
  );
};

export default Calc;
