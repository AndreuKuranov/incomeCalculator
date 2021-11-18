import React from 'react';
import axios from 'axios';
import Button from './UI/button/Button';

const Save = (props) => {
  async function save() {
    await axios.post('http://localhost:3000/inquiry', { incomes: props.sumIncomes, expenses: props.sumExpenses, id: new Date().toISOString().slice(0, 16) })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    props.setToUpdate(+1);
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
