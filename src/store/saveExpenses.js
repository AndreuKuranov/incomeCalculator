const defaultState = {
  expenses: [],
};

const SAVE_EXPENSES = 'SAVE_EXPENSES';

export const saveExpenses = (state = defaultState, action) => {
  switch (action.type) {
    case SAVE_EXPENSES:
      return { ...state, expenses: action.payload };
    default:
      return state;
  }
};

export const saveExpensesAction = (payload) => ({ type: SAVE_EXPENSES, payload });
