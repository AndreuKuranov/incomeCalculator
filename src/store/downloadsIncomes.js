const defaultState = {
  incomes: [
    { id: 'income1', placeholder: 'calc.salary', value: 0 },
    { id: 'income2', placeholder: 'calc.part-time_job', value: 0 },
    { id: 'income3', placeholder: 'calc.additional_income', value: 0 },
    { id: 'income4', placeholder: 'calc.additional_income', value: 0 },
  ],
};

const DOWNLOADS_INCOMES = 'DOWNLOADS_INCOMES';

export const downloadsIncomes = (state = defaultState, action) => {
  switch (action.type) {
    case DOWNLOADS_INCOMES:
      return { ...state, incomes: action.payload };
    default:
      return state;
  }
};

export const downloadsIncomesAction = (payload) => ({ type: DOWNLOADS_INCOMES, payload });
