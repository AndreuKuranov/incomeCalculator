/* eslint-disable import/prefer-default-export */
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { saveId } from './saveId';
import { downloadsIncomes } from './downloadsIncomes';
import { downloadsExpenses } from './downloadsExpenses';
import { saveIncomes } from './saveIncomes';
import { saveExpenses } from './saveExpenses';
import { percent } from './percent';
import { newId } from './newId';
import { newUrlCalc } from './newUrlCalc';

const rootReducer = combineReducers({
  id: saveId,
  dowIn: downloadsIncomes,
  dowEx: downloadsExpenses,
  saveIn: saveIncomes,
  saveEx: saveExpenses,
  per: percent,
  newId,
  newUrl: newUrlCalc,
});

export const store = createStore(rootReducer, composeWithDevTools());
