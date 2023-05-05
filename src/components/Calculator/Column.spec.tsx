/* eslint-disable no-undef */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Column from './Column';

let container: any = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Column', () => {
  it('renders with or without a name', () => {
    act(() => {
      const fake = {
        title: 'Доступно в месяц',
        value: '1000',
        currency: '₽',
      };

      render(
        <Column
          id='12131231'
          title={fake.title}
          value={fake.value}
          currency={fake.currency}
        />,
        container,
      );
    });

    const header = container.querySelector('h3');
    expect(header.textContent).toBe('Доступно в месяц');
    const sum = container.querySelector('.column__value');
    expect(sum.textContent).toBe('1000 ₽');
  });
});
