const defaultState = {
  id: '',
};

const SAVE_ID = 'SAVE_ID';

export const saveId = (state = defaultState, action) => {
  switch (action.type) {
    case SAVE_ID:
      return { ...state, id: action.payload };
    default:
      return state;
  }
};

export const saveIdAction = (payload) => ({ type: SAVE_ID, payload });
