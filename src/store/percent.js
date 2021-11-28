const defaultState = {
  percent: 0,
};

const PERCENT = 'PERCENT';

export const percent = (state = defaultState, action) => {
  switch (action.type) {
    case PERCENT:
      return { ...state, percent: action.payload };
    default:
      return state;
  }
};

export const percentAction = (payload) => ({ type: PERCENT, payload });
