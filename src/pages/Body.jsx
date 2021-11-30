import React from 'react';
import Percent from '../components/Percent';
import Sum from '../components/Sum';
import Calc from '../components/Calc';

const Body = () => (
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

export default Body;
