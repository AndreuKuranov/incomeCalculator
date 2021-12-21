import { ListState, ListActionTypes, ListAction, IListSave } from "../types/listSaveType";

const defaultState: ListState = {
  listSave: [],
  listLoaded: false,
  listError: false,
  totalPage: 0,
	limitPage: 5,
	pageNumber: 1,
};

export const listSave = (state = defaultState, action: ListAction): ListState => {
  switch (action.type) {
    case ListActionTypes.LIST_SAVE:
      return { ...state, listSave: action.payload };
    case ListActionTypes.LIST_LOADED:
      return { ...state, listLoaded: action.payload };
    case ListActionTypes.LIST_ERROR:
      return { ...state, listError: action.payload };
    case ListActionTypes.TOTAL_PAGE:
      return { ...state, totalPage: action.payload };
    case ListActionTypes.LIMITL_PAGE:
      return { ...state, limitPage: action.payload };
    case ListActionTypes.PAGE_NUMBER:
      return { ...state, pageNumber: action.payload };
    default:
      return state;
  }
};

export const listSaveAction = (payload: IListSave[]): ListAction => ({ type: ListActionTypes.LIST_SAVE, payload });
export const listLoadedAction = (payload: boolean): ListAction => ({ type: ListActionTypes.LIST_LOADED, payload });
export const listErrorAction = (payload: boolean): ListAction => ({ type: ListActionTypes.LIST_ERROR, payload });
export const totalPageAction = (payload: number): ListAction => ({ type: ListActionTypes.TOTAL_PAGE, payload });
export const limitPageAction = (payload: number): ListAction => ({ type: ListActionTypes.LIMITL_PAGE, payload });
export const pageNumberAction = (payload: number): ListAction => ({ type: ListActionTypes.PAGE_NUMBER, payload });
