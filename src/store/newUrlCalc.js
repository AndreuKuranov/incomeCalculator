const defaultState = {
  newUrl: 'new',
};

const NEW_URL_CALC = 'NEW_URL_CALC';

export const newUrlCalc = (state = defaultState, action) => {
  switch (action.type) {
    case NEW_URL_CALC:
      return { ...state, newUrl: action.payload };
    default:
      return state;
  }
};

export const newUrlCalcAction = (payload) => ({ type: NEW_URL_CALC, payload });
