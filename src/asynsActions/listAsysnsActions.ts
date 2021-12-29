import PostService from '../API/PostService';
import { Dispatch } from 'react';
import { listLoadedAction, listErrorAction, listObserverAction } from '../store/list';
import { ListAction } from '../types/listType';

export const listAsynsActions = (
	limit: number,
  page: number,
) => {
	return async (dispatch: Dispatch<ListAction>) => {
		try {
      dispatch(listLoadedAction(true));
			const response = await PostService.getAll(limit, page);
      const totalCount = response.headers['x-total-count'];
			dispatch(listObserverAction(response, totalCount))
      dispatch(listErrorAction(false));
		} catch (e) {
			dispatch(listErrorAction(true));
		} finally {
			dispatch(listLoadedAction(false));
		}
	};
};