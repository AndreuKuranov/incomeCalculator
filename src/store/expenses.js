const defaultState = {
  expenses: [
    { id: 'expense1', placeholder: 'calc.HCS', value: 0 },
    { id: 'expense2', placeholder: 'calc.mobile_connection', value: 0 },
    { id: 'expense3', placeholder: 'calc.home_internet', value: 0 },
    { id: 'expense4', placeholder: 'calc.credit', value: 0 },
  ],
};

const EXPENSES = 'EXPENSES';

export const expenses = (state = defaultState, action) => {
  switch (action.type) {
    case EXPENSES:
      return { ...state, expenses: action.payload };
    default:
      return state;
  }
};

export const expensesAction = (payload) => ({ type: EXPENSES, payload });
