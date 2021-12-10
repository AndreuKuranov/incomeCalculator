import React, { Suspense } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Sum from './Sum';
import Month from '../image/month.png';
import Day from '../image/day.png';
import MoneyBox from '../image/money-box.png';
import Loader from './Loader';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Sum', () => {
  it('renders', () => {
    act(() => {
      const results = [
        {
          id: 'Month', icon: Month, title: 'calc.month', value: '1',
        },
        {
          id: 'Day', icon: Day, title: 'calc.day', value: '2',
        },
        {
          id: 'MoneyBox', icon: MoneyBox, title: 'calc.money_box', value: '3',
        },
      ];

      render(
        <Suspense fallback={<Loader />}>
          <Sum results={results} />
        </Suspense>,
        container,
      );
    });

    const results = container.querySelectorAll('Column');
    expect(results.length).toBe(3);
  });
});
