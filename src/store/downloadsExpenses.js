const defaultState = {
  expenses: [],
};

const DOWNLOADS_EXPENSES = 'DOWNLOADS_EXPENSES';

export const downloadsExpenses = (state = defaultState, action) => {
  switch (action.type) {
    case DOWNLOADS_EXPENSES:
      return { ...state, expenses: action.payload };
    default:
      return state;
  }
};

export const downloadsExpensesAction = (payload) => ({ type: DOWNLOADS_EXPENSES, payload });
