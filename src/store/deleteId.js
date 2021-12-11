const defaultState = {
  id: '',
};

const DELETE_ID = 'DELETE_ID';

export const deleteId = (state = defaultState, action) => {
  switch (action.type) {
    case DELETE_ID:
      return { ...state, id: action.payload };
    default:
      return state;
  }
};

export const deleteIdAction = (payload) => ({ type: DELETE_ID, payload });
