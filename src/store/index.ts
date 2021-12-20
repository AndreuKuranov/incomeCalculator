import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { defaultCalc } from './defaultCalc';
import { downloads } from './downloads';
import { id } from './id';
import { route } from './route';
import { listSave } from './listSave';

const rootReducer = combineReducers({
  downloads,
  defaultCalc,
  route,
  id,
  listSave,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof rootReducer>
