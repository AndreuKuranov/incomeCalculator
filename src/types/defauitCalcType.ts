import { IDownloadItem } from "./downloadsType";

export interface DefaultCalcState {
	incomesDefault: IDownloadItem[];
	expensesDefault: IDownloadItem[];
}

export enum DefaultCalcActionTypes {
	INCOMES_DEFAULT = 'INCOMES_DEFAULT',
	EXPENSES_DEFAULT = 'EXPENSES_DEFAULT',
}

interface FetchIncomesDefaultAction {
	type: DefaultCalcActionTypes.INCOMES_DEFAULT;
	payload: IDownloadItem[];
}
interface FetchExpensesDefaultAction {
	type: DefaultCalcActionTypes.EXPENSES_DEFAULT;
	payload: IDownloadItem[];
}

export type DefaultCalcAction = FetchIncomesDefaultAction | FetchExpensesDefaultAction
