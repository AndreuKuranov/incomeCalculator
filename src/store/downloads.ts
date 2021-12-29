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
    case DownloadActionTypes.DOWNLOADS:
      return { ...state, incomes: action.payloadIncomes, expenses: action.payloadExpenses, percent: Number(action.payloadPercent) };
    case DownloadActionTypes.DOWNLOADS_INCOMES:
      return { ...state, incomes: action.payload };
    case DownloadActionTypes.DOWNLOADS_EXPENSES:
      return { ...state, expenses: action.payload };
    case DownloadActionTypes.PERCENT:
      return { ...state, percent: Number(action.payload) };
    case DownloadActionTypes.LOADED:
      return { ...state, loaded: action.payload };
    case DownloadActionTypes.ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export const downloadsAction = (
  payloadIncomes: IDownloadItem[], 
  payloadExpenses: IDownloadItem[], 
  payloadPercent: number
): DownloadsAction => ({ 
  type: DownloadActionTypes.DOWNLOADS, payloadIncomes, payloadExpenses, payloadPercent 
});
export const downloadsIncomesAction = (payload: IDownloadItem[]): DownloadsAction => ({ type: DownloadActionTypes.DOWNLOADS_INCOMES, payload });
export const downloadsExpensesAction = (payload: IDownloadItem[]): DownloadsAction => ({ type: DownloadActionTypes.DOWNLOADS_EXPENSES, payload });
export const percentAction = (payload: number): DownloadsAction => ({ type: DownloadActionTypes.PERCENT, payload });
export const loadedAction = (payload: boolean): DownloadsAction => ({ type: DownloadActionTypes.LOADED, payload });
export const errorAction = (payload: string): DownloadsAction => ({ type: DownloadActionTypes.ERROR, payload });
