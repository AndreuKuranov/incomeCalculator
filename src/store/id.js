const defaultState = {
  newId: '',
  deleteId: '',
};

const NEW_ID = 'NEW_ID';
const DELETE_ID = 'DELETE_ID';

export const id = (state = defaultState, action) => {
  switch (action.type) {
    case NEW_ID:
      return { ...state, newId: action.payload };
    case DELETE_ID:
      return { ...state, deleteId: action.payload };
    default:
      return state;
  }
};

export const newIdAction = (payload) => ({ type: NEW_ID, payload });
export const deleteIdAction = (payload) => ({ type: DELETE_ID, payload });
