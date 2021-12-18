import { DownloadState, DownloadActionTypes, DownloadsAction, IDownloadItem } from "../types/downloadsType"

const defaultState: DownloadState = {
  incomes: [],
  expenses: [],
  percent: 0,
  loaded: false,
  error: '',
};

export const downloads = (state = defaultState, action: DownloadsAction): DownloadState => {
  switch (action.type) {
    case DownloadActionTypes.DOWNLOADS_INCOMES:
      return { ...state, incomes: action.payload };
    case DownloadActionTypes.DOWNLOADS_EXPENSES:
      return { ...state, expenses: action.payload };
    case DownloadActionTypes.PERCENT:
      return { ...state, percent: action.payload };
    case DownloadActionTypes.DOWNLOADS_LOADED:
      return { ...state, loaded: action.payload };
    case DownloadActionTypes.DOWNLOADS_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export const downloadsIncomesAction = (payload: IDownloadItem[]) => ({ type: DownloadActionTypes.DOWNLOADS_INCOMES, payload });
export const downloadsExpensesAction = (payload: IDownloadItem[]) => ({ type: DownloadActionTypes.DOWNLOADS_EXPENSES, payload });
export const percentAction = (payload: number) => ({ type: DownloadActionTypes.PERCENT, payload });
export const downloadsLoadedAction = (payload: boolean) => ({ type: DownloadActionTypes.DOWNLOADS_LOADED, payload });
export const downloadsErrorAction = (payload: string) => ({ type: DownloadActionTypes.DOWNLOADS_ERROR, payload });
