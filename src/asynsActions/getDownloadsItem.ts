import {
  downloadsIncomesAction, downloadsExpensesAction, percentAction, downloadsLoadedAction, downloadsErrorAction,
} from '../store/downloads';
import { currentRouteAction } from '../store/route';
import PostService from '../API/PostService';

export const getDownloadsItem = (id: string) => {
  return async (dispatch: any) => {
    try {
      dispatch(downloadsLoadedAction(true));
      const response = await PostService.getItem(id);
      setTimeout(() => {
        dispatch(downloadsIncomesAction(response.incomes));
        dispatch(downloadsExpensesAction(response.expenses));
        dispatch(percentAction(response.percent));
        dispatch(currentRouteAction(id));
      }, 500);
    } catch (e) {
      dispatch(downloadsErrorAction('downloads error'));
    } finally {
      setTimeout(() => {
        dispatch(downloadsLoadedAction(false));
      }, 500);
    }
  };
};
