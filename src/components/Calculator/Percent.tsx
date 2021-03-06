import React, { FC } from 'react';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import './Percent.css';
import { useTranslation } from 'react-i18next';
import '../../i18next/i18next';
import { percentAction } from '../../store/downloads';
import Range from '../UI/range/Range';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { EventType } from '../../types/types';

interface PercentProps {
  className?: string,
}

const Percent: FC<PercentProps> = (props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { percent } = useTypedSelector((state) => state.downloads);

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
                onChange={(e: EventType) => dispatch(percentAction(e.target.value))}
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
