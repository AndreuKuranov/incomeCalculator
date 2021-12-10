const defaultState = {
  text: '',
};

const TEXT_ERROR = 'TEXT_ERROR';

export const textError = (state = defaultState, action) => {
  switch (action.type) {
    case TEXT_ERROR:
      return { ...state, text: action.payload };
    default:
      return state;
  }
};

export const textErrorAction = (payload) => ({ type: TEXT_ERROR, payload });
