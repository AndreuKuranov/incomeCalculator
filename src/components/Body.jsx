import React, { useState } from 'react';
import Percent from './Percent';
import Sum from './Sum';
import Calc from './Calc';
import Save from './Save';

const Body = (props) => {
  const [sumIncomes, setSumIncomes] = useState(0);
  const [sumExpenses, setSumExpenses] = useState(0);
  const [percent, setPercent] = useState(0);

  return (
    <div>
      <Calc
        className="main__calc"
        downloadsIncomes={props.downloadsIncomes}
        downloadsExpenses={props.downloadsExpenses}
        setSumIncomes={setSumIncomes}
        setSumExpenses={setSumExpenses}
      />
      <Sum
        className="main__sum"
        sumIncomes={sumIncomes}
        sumExpenses={sumExpenses}
        percent={percent}
      />
      <Percent
        className="main__percent"
        percent={percent}
        setPercent={setPercent}
      />
      <Save
        sumIncomes={sumIncomes}
        sumExpenses={sumExpenses}
        setToUpdate={props.setToUpdate}
      />
    </div>
  );
};

export default Body;
