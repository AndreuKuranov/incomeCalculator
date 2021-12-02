const defaultState = {
  newId: '',
};

const NEW_ID = 'NEW_ID';

export const newId = (state = defaultState, action) => {
  switch (action.type) {
    case NEW_ID:
      return { ...state, newId: action.payload };
    default:
      return state;
  }
};

export const newIdAction = (payload) => ({ type: NEW_ID, payload });
