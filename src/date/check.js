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
