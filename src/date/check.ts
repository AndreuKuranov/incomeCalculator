import { IDownloadItem } from '../types/downloadsType';
import { IListSave } from '../types/listType';
import { LanguagesType } from '../types/types';
import { currentDate } from './date';

export const checkSaveId = (listSave: IListSave[]) => {
  for (let i = 0; i < listSave.length; i += 1) {
    if (listSave[i].name === currentDate()) {
      return listSave[i].id;
    }
  }
};

export const checkSave = (listSave: IListSave[]) => {
  for (let i = 0; i < listSave.length; i += 1) {
    if (listSave[i].name === currentDate()) {
      return true;
    }
  }
};

export const unique = () => (`${'inquiry'}${Math.floor(Math.random() * 100000)}`);

export const minSave = (listSave: IListSave[], val: string) => {
  const x = [...listSave].sort((a, b) => a[val].localeCompare(b[val]));
  return x[0].id;
};

export const placeholder = (additional: any, id: string) => {
  for (let i = 0; i < additional.length; i += 1) {
    if (additional[i] === id) {
      return additional[i];
    }
  }
};

export const errorListSave = (inquiry: boolean, loaded: boolean) => {
  if (inquiry) {
    return 'Сохранений не найдено';
  } if (loaded) {
    return 'Идет загрузка...';
  }
  return 'Сохранения';
};

export const resetValueCalc = (calcValue: IDownloadItem[]) => {
  return calcValue.map((item) => ({ ...item, value: 0 }));
};

export const defaultName = (language: LanguagesType[], i18: any) => {
  for (let i = 0; i < language.length; i += 1) {
    if (language[i].value === i18.resolvedLanguage) {
      return language[i].name;
    }
  }
};
