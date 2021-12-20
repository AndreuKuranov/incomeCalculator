export interface IListSave {
	value: string,
	name: string,
}

export interface ListState {
	listSave: IListSave[],
  listLoaded: boolean,
  listError: string,
}

export enum ListActionTypes {
	LIST_SAVE = 'LIST_SAVE',
	LIST_LOADED = 'LIST_LOADED',
	LIST_ERROR = 'LIST_ERROR',
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
	payload: string;
}

export type ListAction = FetchListSaveAction | FetchListLoadedAction | FetchListErrorAction
