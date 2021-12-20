export interface IdState {
	newId: string,
  deleteId: string,
}

export enum IdActionTypes {
	NEW_ID = 'NEW_ID',
  DELETE_ID = 'DELETE_ID',
}

interface FetchNewIdAction {
	type: IdActionTypes.NEW_ID;
	payload: string;
}
interface FetchDeleteIdAction {
	type: IdActionTypes.DELETE_ID;
	payload: string;
}

export type IdAction = FetchNewIdAction | FetchDeleteIdAction