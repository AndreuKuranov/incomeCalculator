const difference = (sumIncomes, sumExpenses) => {
  let x = 0;
  let y = 0;
  for (let i = 0; i < sumIncomes.length; i += 1) {
    x += sumIncomes[i].value;
  }
  for (let i = 0; i < sumExpenses.length; i += 1) {
    y += sumExpenses[i].value;
  }
  return x - y;
};

export default difference;
