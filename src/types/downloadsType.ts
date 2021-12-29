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
	DOWNLOADS = 'DOWNLOADS',
	DOWNLOADS_INCOMES = 'DOWNLOADS_INCOMES',
	DOWNLOADS_EXPENSES = 'DOWNLOADS_EXPENSES',
	PERCENT = 'PERCENT',
	LOADED = 'LOADED',
	ERROR = 'ERROR',
}

interface FetchDownloadsAction {
	type: DownloadActionTypes.DOWNLOADS;
	payloadIncomes: IDownloadItem[];
	payloadExpenses: IDownloadItem[];
	payloadPercent: number;
}
interface FetchDownloadsIncomesAction {
	type: DownloadActionTypes.DOWNLOADS_INCOMES;
	payload: IDownloadItem[];
}
interface FetchDownloadsExpensesAction {
	type: DownloadActionTypes.DOWNLOADS_EXPENSES;
	payload: IDownloadItem[];
}
interface FetchPercentAction {
	type: DownloadActionTypes.PERCENT;
	payload: number;
}
interface FetchLoadedAction {
	type: DownloadActionTypes.LOADED;
	payload: boolean;
}
interface FetchErrorAction {
	type: DownloadActionTypes.ERROR;
	payload: string;
}

export type DownloadsAction = FetchDownloadsAction | FetchDownloadsIncomesAction | FetchDownloadsExpensesAction | FetchPercentAction | FetchLoadedAction | FetchErrorAction
