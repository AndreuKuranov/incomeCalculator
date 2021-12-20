import { ListState, ListActionTypes, ListAction, IListSave } from "../types/listSaveType";

const defaultState: ListState = {
  listSave: [],
  listLoaded: false,
  listError: '',
};

export const listSave = (state = defaultState, action: ListAction): ListState => {
  switch (action.type) {
    case ListActionTypes.LIST_SAVE:
      return { ...state, listSave: action.payload };
    case ListActionTypes.LIST_LOADED:
      return { ...state, listLoaded: action.payload };
    case ListActionTypes.LIST_ERROR:
      return { ...state, listError: action.payload };
    default:
      return state;
  }
};

export const listSaveAction = (payload: IListSave[]): ListAction => ({ type: ListActionTypes.LIST_SAVE, payload });
export const listLoadedAction = (payload: boolean): ListAction => ({ type: ListActionTypes.LIST_LOADED, payload });
export const listErrorAction = (payload: string): ListAction => ({ type: ListActionTypes.LIST_ERROR, payload });
