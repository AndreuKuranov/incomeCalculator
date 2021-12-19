import {
  downloadsIncomesAction, downloadsExpensesAction, percentAction, loadedAction, errorAction,
} from '../store/downloads';
import { currentRouteAction } from '../store/route';
import PostService from '../API/PostService';
import { DownloadsAction, DownloadState } from '../types/downloadsType';
import { Dispatch } from 'react';

export const downloadsAsynsActions = (id: string) => {
  return async (dispatch: Dispatch<DownloadsAction | any>) => {
    try {
      dispatch(loadedAction(true));
      const response: DownloadState = await PostService.getItem(id);
      setTimeout(() => {
        dispatch(downloadsIncomesAction(response.incomes));
        dispatch(downloadsExpensesAction(response.expenses));
        dispatch(percentAction(response.percent));
        dispatch(currentRouteAction(id));
      }, 500);
    } catch (e) {
      dispatch(errorAction('downloads error'));
    } finally {
      setTimeout(() => {
        dispatch(loadedAction(false));
      }, 500);
    }
  };
};
