import React, { FC } from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import './Result.css';
import Column from './Column';
import Spend from '../../image/spend.png';
import Safe from '../../image/safe.png';
import '../../i18next/i18next';
import {
  difference, spendAMonth, nFormatter, hoardAMonth,
} from '../../date/date';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { ResultsType } from '../../types/types';

interface ResultProps {
  className?: string,
}

const Result: FC<ResultProps> = (props) => {
  const { t } = useTranslation();
  const { incomes, expenses, percent }= useTypedSelector((state) => state.downloads);

  const monthMoney = difference(incomes, expenses);
  const spendMoney = spendAMonth(monthMoney, percent);
  const hoardMonth = hoardAMonth(monthMoney, percent);

  const results: ResultsType[] = [
    {
      id: 'Month', icon: Spend, title: 'Тратим в месяц', value: nFormatter(spendMoney),
    },
    {
      id: 'Day', icon: Safe, title: 'Откладываем в месяц', value: nFormatter(hoardMonth),
    },
  ];

  return (
    <div className={cn('result', props.className)}>
      <div className="result__container container">
        <div className="result__body">
          {results.map((result) => (
            <Column
              className="result__column"
              icon={result.icon}
              title={result.title}
              value={result.value}
              id={result.id}
              currency={t('calc.currency')}
              key={result.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Result;