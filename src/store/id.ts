import { IdAction, IdState, IdActionTypes } from "../types/idType";

const defaultState: IdState = {
  newId: '',
  deleteId: '',
};

export const id = (state = defaultState, action: IdAction): IdState => {
  switch (action.type) {
    case IdActionTypes.NEW_ID:
      return { ...state, newId: action.payload };
    case IdActionTypes.DELETE_ID:
      return { ...state, deleteId: action.payload };
    default:
      return state;
  }
};

export const newIdAction = (payload: string): IdAction => ({ type: IdActionTypes.NEW_ID, payload });
export const deleteIdAction = (payload: string): IdAction => ({ type: IdActionTypes.DELETE_ID, payload });
