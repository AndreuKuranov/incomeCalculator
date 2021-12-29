import {
  loadedAction, errorAction,
} from '../store/downloads';
import { listDeleteAction } from '../store/list';
import PostService from '../API/PostService';
import { DownloadsAction } from '../types/downloadsType';
import { Dispatch } from 'react';
import { ListAction } from '../types/listType';

export const deleteAsynsActions = (id: string, currentRoute: string, newRoute: string, nav: any) => {
  return async (dispatch: Dispatch<DownloadsAction | ListAction>) => {
    try {
      dispatch(loadedAction(true));
      await PostService.deleteItem(id);
      dispatch(listDeleteAction(id))
      if (currentRoute) {
        nav(`/incomeCalculator/${newRoute}`)
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
