import React, { Fragment } from 'react';
import { IntlProvider } from 'react-intl';

import { LOCALES } from './locales';
import messages from './messages';

// не понял, а где json?
// я немного посмотрел либу, мне она не оч нравится, в соотношении например
// https://react.i18next.com/
// там же в самом начале пример как получать файлы локалей в отдельности
// эта либа тоже подходит, просто придётся городить кастомное решение для загрузки локалей,
// что мне кажется странным
const Provider = ({ children, locale = LOCALES.RUSSIAN }) => (
  <IntlProvider
    locale={locale}
    textComponent={Fragment}
    messages={messages[locale]}
  >
    {children}
  </IntlProvider>
);

export default Provider;
