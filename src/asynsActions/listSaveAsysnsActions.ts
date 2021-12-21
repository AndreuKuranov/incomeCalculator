import PostService from '../API/PostService';
import { Dispatch } from 'react';
import { listSaveAction, totalPageAction, listLoadedAction, listErrorAction } from '../store/listSave';
import { getPageCount } from '../date/pages';
import { IListSave, ListAction } from '../types/listSaveType';

export const listSaveAsynsActions = (
	limit: number,
  page: number,
  listSave: IListSave[],
) => {
	return async (dispatch: Dispatch<ListAction>) => {
		try {
      dispatch(listLoadedAction(true));
			const response = await PostService.getAll(limit, page);
      dispatch(listSaveAction([...listSave, ...response.data.map((item: {name: string, id: string}) => ({ name: item.name, value: item.id }))]));
      const totalCount = response.headers['x-total-count'];
      dispatch(totalPageAction(getPageCount(totalCount, limit)));
      dispatch(listErrorAction(false));
		} catch (e) {
			dispatch(listErrorAction(true));
		} finally {
			dispatch(listLoadedAction(false));
		}
	};
};