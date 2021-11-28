const defaultState = {
  incomes: [],
};

const SAVE_INCOMES = 'SAVE_INCOMES';

export const saveIncomes = (state = defaultState, action) => {
  switch (action.type) {
    case SAVE_INCOMES:
      return { ...state, incomes: action.payload };
    default:
      return state;
  }
};

export const saveIncomesAction = (payload) => ({ type: SAVE_INCOMES, payload });
