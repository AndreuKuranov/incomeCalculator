export const difference = (sumIncomes, sumExpenses) => {
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

export const availablePerDay = (sum, percent) => {
  const daysInMonth = () => {
    const number = new Date();
    return new Date(number.getFullYear(), number.getMonth() + 1, 0).getDate();
  };
  return ((sum - (sum * (percent / 100))) / daysInMonth()).toFixed();
};

export const availablePerYear = (sum, percent) => ((sum * (percent / 100)) * 12).toFixed();

export const kFormatter = (num) => (Math.abs(num) > 999 ? `${Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1))}k` : Math.sign(num) * Math.abs(num)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

export const currentDate = () => new Date().toISOString();
