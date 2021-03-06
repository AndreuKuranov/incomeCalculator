import { IDownloadItem } from "../types/downloadsType";

export const difference = (sumIncomes: IDownloadItem[], sumExpenses: IDownloadItem[]) => {
  let x = 0;
  let y = 0;
  for (let i = 0; i < sumIncomes.length; i += 1) {
    x += sumIncomes[i].value;
  }
  for (let i = 0; i < sumExpenses.length; i += 1) {
    y += sumExpenses[i].value;
  }
  return (x - y).toFixed();
};

export const daysInMonth = () => {
  const number = new Date();
  return new Date(number.getFullYear(), number.getMonth() + 1, 0).getDate();
};

export const availablePerDay = (sum: string, percent: number) => {
  return ((+sum - (+sum * (percent / 100))) / daysInMonth()).toFixed();
};

export const availablePerYear = (sum: string, percent: number) => ((+sum * (percent / 100)) * 12).toFixed();

export const currentDate = () => new Date().toISOString();

export const spendAMonth = (sum: string, percent: number) => {
  return ((+sum - (+sum * (percent / 100)))).toFixed();
}

export const hoardAMonth = (sum: string, percent: number) => {
  return (((+sum * (percent / 100)))).toFixed();
}

export const nFormatter = (num: any) => {
  const si = [
    { value: 1, symbol: '' },
    { value: 1E3, symbol: 'k' },
    { value: 1E6, symbol: 'M' },
    { value: 1E9, symbol: 'G' },
    { value: 1E12, symbol: 'T' },
    { value: 1E15, symbol: 'P' },
    { value: 1E18, symbol: 'E' },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  let i: any;
  for (i = si.length - 1; i > 0; i -= 1) {
    if (num >= si[i].value) {
      break;
    }
  }
  return (num / si[i].value).toFixed(1).replace(rx, '$1') + si[i].symbol;
};
