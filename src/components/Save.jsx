/* eslint-disable consistent-return */
/* eslint-disable for-direction */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState } from 'react';
import axios from 'axios';
import Button from './UI/button/Button';

const Save = (props) => {
  const currentDate = () => new Date().toISOString().slice(0, 16);

  const checkSave = (listSave) => {
    for (let i = 0; i < listSave.length; i += 1) {
      if (listSave[i].value === currentDate()) {
        return true;
      }
    }
  };

  async function save() {
    if (checkSave(props.listSave) === true) {
      await axios.put(`http://localhost:3000/inquiry/${currentDate()}`, { incomes: props.saveIncomes, expenses: props.saveExpenses });
    } else {
      await axios.post('http://localhost:3000/inquiry', { incomes: props.saveIncomes, expenses: props.saveExpenses, id: currentDate() });
    }
    props.setToUpdate(true);
  }

  return (
    <div style={{ padding: '0px 5px 0px 0px' }}>
      <Button
        type="button"
        onClick={() => save()}
      >
        <i className="material-icons">save</i>
      </Button>
    </div>
  );
};

export default Save;
