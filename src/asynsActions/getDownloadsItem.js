/* eslint-disable import/prefer-default-export */
import {
  downloadsIncomesAction, downloadsExpensesAction, percentAction, downloadsLoadedAction, downloadsErrorAction,
} from '../store/downloads';
import { currentRouteAction } from '../store/route';
import PostService from '../API/PostService';

export const getDownloadsItem = (id) => {
  return async (dispatch) => {
    try {
      dispatch(downloadsLoadedAction(true));
      const response = await PostService.getItem(id);
      setTimeout(() => {
        dispatch(downloadsIncomesAction(response.incomes));
        dispatch(downloadsExpensesAction(response.expenses));
        dispatch(percentAction(response.percent));
        dispatch(currentRouteAction(id));
      }, 700);
    } catch (e) {
      dispatch(downloadsErrorAction('downloads error'));
    } finally {
      setTimeout(() => {
        dispatch(downloadsLoadedAction(false));
      }, 700);
    }
  };
};
