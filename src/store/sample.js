const defaultState = {
  incomes: [
    { id: 'income1', placeholder: 'calc.salary', value: 0 },
    { id: 'income2', placeholder: 'calc.part-time_job', value: 0 },
    { id: 'income3', placeholder: 'calc.additional_income', value: 0 },
    { id: 'income4', placeholder: 'calc.additional_income', value: 0 },
  ],
  expenses: [
    { id: 'expense1', placeholder: 'calc.HCS', value: 0 },
    { id: 'expense2', placeholder: 'calc.mobile_connection', value: 0 },
    { id: 'expense3', placeholder: 'calc.home_internet', value: 0 },
    { id: 'expense4', placeholder: 'calc.credit', value: 0 },
  ],
};

const INCOMES = 'INCOMES';
const EXPENSES = 'EXPENSES';

export const sample = (state = defaultState, action) => {
  switch (action.type) {
    case INCOMES:
      return { ...state, incomes: action.payload };
    case EXPENSES:
      return { ...state, expenses: action.payload };
    default:
      return state;
  }
};

export const incomesAction = (payload) => ({ type: INCOMES, payload });
export const expensesAction = (payload) => ({ type: EXPENSES, payload });
