const defaultState = {
  cash: false,
};

const ADD_CASH = 'ADD_CASH';

export const cashReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CASH:
      return { ...state, cash: action.payload };
    default:
      return state;
  }
};

export const addCashAction = (payload) => ({ type: ADD_CASH, payload });
