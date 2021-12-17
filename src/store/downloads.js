const defaultState = {
  incomes: [],
  expenses: [],
  percent: '0',
  loaded: false,
  error: '',
};

const DOWNLOADS_INCOMES = 'DOWNLOADS_INCOMES';
const DOWNLOADS_EXPENSES = 'DOWNLOADS_EXPENSES';
const PERCENT = 'PERCENT';
const DOWNLOADS_LOADED = 'DOWNLOADS_LOADED';
const DOWNLOADS_ERROR = 'DOWNLOADS_ERROR';

export const downloads = (state = defaultState, action) => {
  switch (action.type) {
    case DOWNLOADS_INCOMES:
      return { ...state, incomes: action.payload };
    case DOWNLOADS_EXPENSES:
      return { ...state, expenses: action.payload };
    case PERCENT:
      return { ...state, percent: action.payload };
    case DOWNLOADS_LOADED:
      return { ...state, loaded: action.payload };
    case DOWNLOADS_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export const downloadsIncomesAction = (payload) => ({ type: DOWNLOADS_INCOMES, payload });
export const downloadsExpensesAction = (payload) => ({ type: DOWNLOADS_EXPENSES, payload });
export const percentAction = (payload) => ({ type: PERCENT, payload });
export const downloadsLoadedAction = (payload) => ({ type: DOWNLOADS_LOADED, payload });
export const downloadsErrorAction = (payload) => ({ type: DOWNLOADS_ERROR, payload });
