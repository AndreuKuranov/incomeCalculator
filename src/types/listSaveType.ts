export interface IListSave {
	value: string,
	name: string,
}

export interface ListState {
	listSave: IListSave[],
  listLoaded: boolean,
  listError: boolean,
	totalPage: number,
	limitPage: number,
	pageNumber: number,
}

export enum ListActionTypes {
	LIST_SAVE = 'LIST_SAVE',
	LIST_LOADED = 'LIST_LOADED',
	LIST_ERROR = 'LIST_ERROR',
	TOTAL_PAGE = 'TOTAL_PAGE',
	LIMITL_PAGE = 'LIMITL_PAGE',
	PAGE_NUMBER = 'PAGE_NUMBER',
}

interface FetchListSaveAction {
	type: ListActionTypes.LIST_SAVE;
	payload: IListSave[];
}
interface FetchListLoadedAction {
	type: ListActionTypes.LIST_LOADED;
	payload: boolean;
}
interface FetchListErrorAction {
	type: ListActionTypes.LIST_ERROR;
	payload: boolean;
}
interface FetchTotalPageAction {
	type: ListActionTypes.TOTAL_PAGE;
	payload: number;
}
interface FetchLimitPageAction {
	type: ListActionTypes.LIMITL_PAGE;
	payload: number;
}
interface FetchPageNumberAction {
	type: ListActionTypes.PAGE_NUMBER;
	payload: number;
}

export type ListAction = FetchListSaveAction | FetchListLoadedAction | FetchListErrorAction | FetchTotalPageAction | FetchLimitPageAction | FetchPageNumberAction
