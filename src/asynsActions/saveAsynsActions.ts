import {
	loadedAction, errorAction,
} from '../store/downloads';
import { currentRouteAction } from '../store/route';
import PostService from '../API/PostService';
import { IDownloadItem } from '../types/downloadsType';
import { DownloadsAction } from '../types/downloadsType';
import { Dispatch } from 'react';

export const saveAsynsActions = (
	currentRoute: string,
	newRoute: string,
	downloadsIncomes: IDownloadItem,
	downloadsExpenses: IDownloadItem,
	percent: number,
	newId: string,
	nev: any,
) => {
	return async (dispatch: Dispatch<DownloadsAction | any>) => {
		try {
			dispatch(loadedAction(true));
			if (currentRoute && currentRoute !== newRoute) {
				await PostService.putItem(currentRoute, downloadsIncomes, downloadsExpenses, percent);
			} else if (currentRoute === newRoute) {
				await PostService.postItem(downloadsIncomes, downloadsExpenses, newId, percent);
				dispatch(currentRouteAction(newId));
				nev(newId);
			}
		} catch (e) {
			dispatch(errorAction('Error save'));
		} finally {
			setTimeout(() => {
				dispatch(loadedAction(false));
			}, 500);
		}
	};
};
