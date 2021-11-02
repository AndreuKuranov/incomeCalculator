import React, { useState } from 'react';
import './Percent.css';
import { useTranslation } from 'react-i18next';
import '../i18next/i18next';

const Percent = (props) => {
  const { t } = useTranslation();
  const [percents, setPercents] = useState(0);

  return (
    <div className={`percent ${props.className}`}>
      <div className="percent__container container">
        <div className="percent__body">
          <div className="percent__column">
            <h3 className="percent__title text">{t('calc.percent')}</h3>
            <div className="percent__range">
              <input
                className="percent__input"
                type="range"
                min="0"
                max="100"
                value={percents}
                onChange={(event) => setPercents(event.target.value)}
              />
            </div>
            <div className="percent__text text">
              {percents}
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
