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
  downloads,
  sample,
  route,
  id,
  listSave,
  textError,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof rootReducer>
