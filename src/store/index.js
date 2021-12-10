/* eslint-disable import/prefer-default-export */
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { saveId } from './saveId';
import { incomes } from './incomes';
import { expenses } from './expenses';
import { downloadsIncomes } from './downloadsIncomes';
import { downloadsExpenses } from './downloadsExpenses';
import { percent } from './percent';
import { newId } from './newId';
import { newUrlCalc } from './newUrlCalc';
import { listSave } from './listSave';
import { textError } from './textError';

const rootReducer = combineReducers({
  incomes,
  expenses,
  id: saveId,
  dowIn: downloadsIncomes,
  dowEx: downloadsExpenses,
  per: percent,
  newId,
  newUrl: newUrlCalc,
  listSave,
  textError,
});

export const store = createStore(rootReducer, composeWithDevTools());
