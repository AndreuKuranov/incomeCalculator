import React from 'react';
import Percent from '../components/Calculator/Percent';
import Sum from '../components/Calculator/Sum';
import Calc from '../components/Calculator/Calc';

const Body = () => {
  return (
    <div>
      <Calc
        className="main__calc"
      />
      <Sum
        className="main__sum"
      />
      <Percent
        className="main__percent"
      />
    </div>
  );
};

export default Body;
