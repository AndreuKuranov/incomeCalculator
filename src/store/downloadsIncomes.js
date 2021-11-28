const defaultState = {
  incomes: [],
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
