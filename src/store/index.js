/* eslint-disable import/prefer-default-export */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { sample } from './sample';
import { downloads } from './downloads';
import { id } from './id';
import { route } from './route';
import { listSave } from './listSave';
import { textError } from './textError';

const rootReducer = combineReducers({
  sample,
  downloads,
  route,
  id,
  listSave,
  textError,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
