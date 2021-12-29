import { getPageCount } from "../date/pages";
import { ListState, ListActionTypes, ListAction, IListSave } from "../types/listType";

const defaultState: ListState = {
  listSave: [],
  totalPage: 0,
  pageNumber: 1,
  limitPage: 5,
  listLoaded: false,
  listError: false,
};

export const list = (state = defaultState, action: ListAction): ListState => {
  switch (action.type) {
    case ListActionTypes.LIST:
      return { ...state, listSave: action.payloadListSave, totalPage: action.payloadTotalPage, pageNumber: action.payloadPageNumber };
    case ListActionTypes.LIST_OBSERVER:
      return { ...state, 
        listSave: [...state.listSave, ...action.payloadResponse.data.map((item: IListSave) => ({ name: item.name, id: item.id }))], 
        totalPage: getPageCount(action.payloadTotalCount, state.limitPage)
      };
    case ListActionTypes.LIST_DELETE:
      return { ...state, listSave: state.listSave.filter((e: { id: string }) => e.id !== action.payload) };
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

export const listAction = (
  payloadListSave: IListSave[], 
  payloadTotalPage: number, 
  payloadPageNumber: number 
): ListAction => ({ 
  type: ListActionTypes.LIST, payloadListSave, payloadTotalPage, payloadPageNumber 
});
export const listObserverAction = (
  payloadResponse: any, 
  payloadTotalCount: any,
): ListAction => ({ 
  type: ListActionTypes.LIST_OBSERVER, payloadResponse, payloadTotalCount
});
export const listDeleteAction = (payload: string): ListAction => ({ type: ListActionTypes.LIST_DELETE, payload });
export const listSaveAction = (payload: IListSave[]): ListAction => ({ type: ListActionTypes.LIST_SAVE, payload });
export const listLoadedAction = (payload: boolean): ListAction => ({ type: ListActionTypes.LIST_LOADED, payload });
export const listErrorAction = (payload: boolean): ListAction => ({ type: ListActionTypes.LIST_ERROR, payload });
export const totalPageAction = (payload: number): ListAction => ({ type: ListActionTypes.TOTAL_PAGE, payload });
export const limitPageAction = (payload: number): ListAction => ({ type: ListActionTypes.LIMITL_PAGE, payload });
export const pageNumberAction = (payload: number): ListAction => ({ type: ListActionTypes.PAGE_NUMBER, payload });
