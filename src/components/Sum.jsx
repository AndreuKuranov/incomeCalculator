import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import './Sum.css';
import Column from './Column';
import Month from './month.png';
import Day from './day.png';
import MoneyBox from './money-box.png';
import '../i18next/i18next';
import difference from '../date/dateMonth';
import availablePerDay from '../date/dateDay';
import availablePerYear from '../date/dateYear';

const Sum = (props) => {
  const { t } = useTranslation();

  const monthMoney = difference(props.sumIncomes, props.sumExpenses);
  const dayMoney = availablePerDay(monthMoney, props.percent);
  const yearMoney = availablePerYear(monthMoney, props.percent);

  const results = [
    {
      id: 'Month', icon: Month, title: 'calc.month', value: monthMoney,
    },
    {
      id: 'Day', icon: Day, title: 'calc.day', value: dayMoney,
    },
    {
      id: 'MoneyBox', icon: MoneyBox, title: 'calc.money_box', value: yearMoney,
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
              key={result.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sum;
