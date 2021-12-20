import {
  loadedAction, errorAction,
} from '../store/downloads';
import { listSaveAction } from '../store/listSave';
import PostService from '../API/PostService';
import { DownloadsAction } from '../types/downloadsType';
import { Dispatch } from 'react';
import { IListSave, ListAction } from '../types/listSaveType';

export const deleteAsynsActions = (id: string, currentRoute: string, newRoute: string, list: IListSave[], nav: any) => {
  return async (dispatch: Dispatch<DownloadsAction | ListAction>) => {
    try {
      dispatch(loadedAction(true));
      await PostService.deleteItem(id);
      dispatch(listSaveAction(list.filter((e: { value: string }) => e.value !== id)));
      if (currentRoute) {
        nav(newRoute)
      }
    } catch (e) {
      dispatch(errorAction('delete error'));
    } finally {
      setTimeout(() => {
        dispatch(loadedAction(false));
      }, 500);
    }
  };
};
