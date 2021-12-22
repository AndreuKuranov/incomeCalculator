import React, { FC } from 'react';
import cn from 'classnames';
import './ErrorPage.css';
import '../i18next/i18next';

interface ErrorPageProps {
  className?: string,
}

const ErrorPage: FC<ErrorPageProps> = (props) => {
  return (
    <div className={cn('error-page', props.className)}>
      <div className="error-page__container container">
        <h1 className="error-page__title">Страница не найдена</h1>
      </div>
    </div>
  );
};

export default ErrorPage;
