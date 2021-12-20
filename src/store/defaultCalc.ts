import { DefaultCalcState, DefaultCalcAction, DefaultCalcActionTypes } from "../types/defauitCalcType";
import { IDownloadItem } from "../types/downloadsType";

const defaultState: DefaultCalcState = {
  incomesDefault: [
    { id: 'income1', placeholder: 'calc.salary', value: 0 },
    { id: 'income2', placeholder: 'calc.part-time_job', value: 0 },
    { id: 'income3', placeholder: 'calc.additional_income', value: 0 },
    { id: 'income4', placeholder: 'calc.additional_income', value: 0 },
  ],
  expensesDefault: [
    { id: 'expense1', placeholder: 'calc.HCS', value: 0 },
    { id: 'expense2', placeholder: 'calc.mobile_connection', value: 0 },
    { id: 'expense3', placeholder: 'calc.home_internet', value: 0 },
    { id: 'expense4', placeholder: 'calc.credit', value: 0 },
  ],
};

export const defaultCalc = (state = defaultState, action: DefaultCalcAction): DefaultCalcState => {
  switch (action.type) {
    case DefaultCalcActionTypes.INCOMES_DEFAULT:
      return { ...state, incomesDefault: action.payload };
    case DefaultCalcActionTypes.EXPENSES_DEFAULT:
      return { ...state, expensesDefault: action.payload };
    default:
      return state;
  }
};

export const incomesDefaultAction = (payload: IDownloadItem[]): DefaultCalcAction => ({ type: DefaultCalcActionTypes.INCOMES_DEFAULT, payload });
export const expensesDefaultAction = (payload: IDownloadItem[]): DefaultCalcAction => ({ type: DefaultCalcActionTypes.EXPENSES_DEFAULT, payload });
