import React from 'react';
import Percent from '../components/Percent';
import Sum from '../components/Sum';
import Calc from '../components/Calc';
import Header from '../components/Header';

const Body = () => (
  <div>
    <Header
      className="main__header"
    />
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
