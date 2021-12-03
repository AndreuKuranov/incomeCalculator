const defaultState = {
  expenses: [
    { id: 'expense1', placeholder: 'calc.HCS', value: 0 },
    { id: 'expense2', placeholder: 'calc.mobile_connection', value: 0 },
    { id: 'expense3', placeholder: 'calc.home_internet', value: 0 },
    { id: 'expense4', placeholder: 'calc.credit', value: 0 },
  ],
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
