import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import './Sum.css';
import Column from './Column';
import Month from './month.png';
import Day from './day.png';
import MoneyBox from './money-box.png';
import '../i18next/i18next';

const Sum = (props) => {
  const { t } = useTranslation();
  return (
    <div className={cn('sum', props.className)}>
      <div className="sum__container container">
        <div className="sum__body">
          <Column
            className="sum__column"
            icon={Month}
            title={t('calc.month')}
          />
          <Column
            className="sum__column"
            icon={Day}
            title={t('calc.day')}
          />
          <Column
            className="sum__column"
            icon={MoneyBox}
            title={t('calc.money_box')}
          />
        </div>
      </div>
    </div>
  );
};

export default Sum;
