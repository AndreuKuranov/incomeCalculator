const defaultState = {
  listSave: [],
};

const LIST_SAVE = 'LIST_SAVE';

export const listSave = (state = defaultState, action) => {
  switch (action.type) {
    case LIST_SAVE:
      return { ...state, listSave: action.payload };
    default:
      return state;
  }
};

export const listSaveAction = (payload) => ({ type: LIST_SAVE, payload });
