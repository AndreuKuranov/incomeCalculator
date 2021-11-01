import React from 'react';
import { FormattedMessage } from 'react-intl';

// ого, как и ожидалось, у этой библиотечки переводы скорее побочная работа, а не основная, возьми react-i18n
// переводы куда труднее чем просто взять текст и транслировать, ещё есть задачи вставить значение внутрь переводимой строки
// ещё хуже это делать переводы числительных
// Например: У вас 3 яблока, У вас нет яблок, У вас одно яблоко || You have 3 apples, You don't have apples, You have one apple
const translate = (id, value = {}) => <FormattedMessage id={id} values={{ ...value }} />;

export default translate;
