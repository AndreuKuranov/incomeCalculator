import React, { FC } from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import './Sum.css';
import Column from './Column';
import Month from '../../image/month.png';
import Day from '../../image/day.png';
import MoneyBox from '../../image/money-box.png';
import '../../i18next/i18next';
import {
  difference, availablePerDay, availablePerYear, nFormatter, daysInMonth,
} from '../../date/date';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { ResultsType } from '../../types/types';

interface SumProps {
  className?: string,
}

const Sum: FC<SumProps> = (props) => {
  const { t } = useTranslation();
  const { incomes, expenses, percent }= useTypedSelector((state) => state.downloads);

  const monthMoney = difference(incomes, expenses);
  const dayMoney = availablePerDay(monthMoney, percent, daysInMonth());
  const yearMoney = availablePerYear(monthMoney, percent);

  const results: ResultsType[] = [
    {
      id: 'Month', icon: Month, title: 'calc.month', value: nFormatter(monthMoney),
    },
    {
      id: 'Day', icon: Day, title: 'calc.day', value: nFormatter(dayMoney),
    },
    {
      id: 'MoneyBox', icon: MoneyBox, title: 'calc.money_box', value: nFormatter(yearMoney),
    },
  ];

  return (
    <div className={cn('sum', props.className)}>
      <div className="sum__container container">
        <div className="sum__body">
          {results.map((result) => (
            <Column
              className="sum__column"
              icon={result.icon}
              title={t(result.title)}
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

export default Sum;
