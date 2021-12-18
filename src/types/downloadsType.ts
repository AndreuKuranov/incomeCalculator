export interface IDownloadItem {
	id: string;
	placeholder: string;
	value: number;
}

export interface DownloadState {
	incomes: IDownloadItem[];
	expenses: IDownloadItem[];
	percent: number;
	loaded: boolean;
	error: string;
}

export enum DownloadActionTypes {
	DOWNLOADS_INCOMES = 'DOWNLOADS_INCOMES',
	DOWNLOADS_EXPENSES = 'DOWNLOADS_EXPENSES',
	PERCENT = 'PERCENT',
	DOWNLOADS_LOADED = 'DOWNLOADS_LOADED',
	DOWNLOADS_ERROR = 'DOWNLOADS_ERROR',
}

interface FetchDownloadsIncomesAction {
	type: DownloadActionTypes.DOWNLOADS_INCOMES;
	payload: IDownloadItem[];
}
interface FetchDownloadsExpensesAction {
	type: DownloadActionTypes.DOWNLOADS_EXPENSES;
	payload: IDownloadItem[];
}
interface FetchDownloadsPercentAction {
	type: DownloadActionTypes.PERCENT;
	payload: number;
}
interface FetchDownloadsLoadedAction {
	type: DownloadActionTypes.DOWNLOADS_LOADED;
	payload: boolean;
}
interface FetchDownloadsErrorAction {
	type: DownloadActionTypes.DOWNLOADS_ERROR;
	payload: string;
}

export type DownloadsAction = FetchDownloadsIncomesAction | FetchDownloadsExpensesAction | FetchDownloadsPercentAction | FetchDownloadsLoadedAction | FetchDownloadsErrorAction
