import {
	loadedAction, errorAction,
} from '../store/downloads';
import { currentRouteAction } from '../store/route';
import PostService from '../API/PostService';
import { IDownloadItem } from '../types/downloadsType';
import { DownloadsAction } from '../types/downloadsType';
import { Dispatch } from 'react';
import { RouteAction } from '../types/routeType';

export const saveAsynsActions = (
	currentRoute: string,
	newRoute: string,
	incomes: IDownloadItem[],
	expenses: IDownloadItem[],
	percent: number,
	newId: string,
	nev: any,
) => {
	return async (dispatch: Dispatch<DownloadsAction | RouteAction>) => {
		try {
			dispatch(loadedAction(true));
			if (currentRoute && currentRoute !== newRoute) {
				await PostService.putItem(currentRoute, incomes, expenses, percent);
			} else if (currentRoute === newRoute) {
				await PostService.postItem(incomes, expenses, newId, percent);
				dispatch(currentRouteAction(newId));
				nev(`/incomeCalculator/${newId}`);
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
