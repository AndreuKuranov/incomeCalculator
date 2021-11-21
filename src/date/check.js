/* eslint-disable consistent-return */
import { currentDate } from './date';

export const checkSaveId = (listSave) => {
  for (let i = 0; i < listSave.length; i += 1) {
    if (listSave[i].name === currentDate()) {
      return listSave[i].value;
    }
  }
};

export const checkSave = (listSave) => {
  for (let i = 0; i < listSave.length; i += 1) {
    if (listSave[i].name === currentDate()) {
      return true;
    }
  }
};

export const unique = () => (`${'inquiry'}${Math.floor(Math.random() * 100000)}`);

export const minSave = (listSave, val) => {
  const x = [...listSave].sort((a, b) => a[val].localeCompare(b[val]));
  return x[0].value;
};
