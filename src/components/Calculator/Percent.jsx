import React from 'react';
import cn from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import './Percent.css';
import { useTranslation } from 'react-i18next';
import '../../i18next/i18next';
import { percentAction } from '../../store/downloads';
import Range from '../UI/range/Range';

const Percent = (props) => {
  const { t } = useTranslation();
  const percent = useSelector((state) => state.downloads.percent);
  const dispatch = useDispatch();

  return (
    <div className={cn('percent', props.className)}>
      <div className="percent__container container">
        <div className="percent__body">
          <div className="percent__column">
            <h3 className="percent__title text">{t('calc.percent')}</h3>
            <div className="percent__range">
              <Range
                className="percent__input"
                type="range"
                min="0"
                max="100"
                value={percent}
                onChange={(event) => dispatch(percentAction(event.target.value))}
              />
            </div>
            <div className="percent__text text">
              {percent}
              {' '}
              %
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Percent;
