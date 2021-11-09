import React, { useState } from 'react';
import Percent from './Percent';
import Sum from './Sum';
import Calc from './Calc';

const Body = () => {
  const [incomes, setIncomes] = useState([
    { id: 'income1', placeholder: 'calc.salary', value: 0 },
    { id: 'income2', placeholder: 'calc.part-time_job', value: 0 },
    { id: 'income3', placeholder: 'calc.additional_income', value: 0 },
    { id: 'income4', placeholder: 'calc.additional_income', value: 0 },
  ]);
  const [expenses, setExpenses] = useState([
    { id: 'expense1', placeholder: 'calc.HCS', value: 0 },
    { id: 'expense2', placeholder: 'calc.mobile_connection', value: 0 },
    { id: 'expense3', placeholder: 'calc.home_internet', value: 0 },
    { id: 'expense4', placeholder: 'calc.credit', value: 0 },
  ]);
  const [percents, setPercents] = useState(0);

  const sum = () => {
    let x = 0;
    let y = 0;
    for (let i = 0; i < incomes.length; i += 1) {
      x += incomes[i].value;
    }
    for (let i = 0; i < expenses.length; i += 1) {
      y += expenses[i].value;
    }
    return x - y;
  };

  const daysInMonth = () => {
    const number = new Date();
    return new Date(number.getFullYear(), number.getMonth() + 1, 0).getDate();
  };
  const availablePerDay = () => ((sum() - (sum() * (percents / 100))) / daysInMonth()).toFixed();

  const availablePerYear = () => ((sum() * (percents / 100)) * 12).toFixed();

  return (
    <div>
      <Calc
        className="main__calc"
        incomes={incomes}
        setIncomes={setIncomes}
        expenses={expenses}
        setExpenses={setExpenses}
      />
      <Sum
        className="main__sum"
        sum={sum()}
        availablePerDay={availablePerDay()}
        availablePerYear={availablePerYear()}
      />
      <Percent
        className="main__percent"
        value={percents}
        set={setPercents}
      />
    </div>
  );
};

export default Body;
