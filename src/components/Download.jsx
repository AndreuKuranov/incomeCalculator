import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Download.css';
import Select from './UI/select/Select';
import Button from './UI/button/Button';

const Download = (props) => {
  const [id, setId] = useState([]);
  const [selectValue, setSelectValue] = useState('');

  useEffect(async () => {
    const response = await axios.get('http://localhost:3000/inquiry');
    setId(response.data.map((item) => ({ name: item.id, value: item.id })));
  }, [props.toUpdate]);

  async function Dow() {
    if (selectValue.length === 16) {
      const response = await axios.get(`http://localhost:3000/inquiry/${selectValue}`);
      props.setDownloadsIncomes(response.data.incomes);
      props.setDownloadsExpenses(response.data.expenses);
    }
  }

  async function Del() {
    await axios.delete(`http://localhost:3000/inquiry/${selectValue}`);
    props.setToUpdate(-1);
  }

  return (
    <div className="menu__row">
      <Button
        className="delete__button"
        type="button"
        onClick={() => Del()}
      >
        <i className="material-icons">delete</i>
      </Button>
      <Select
        defaultValue="Сохранения"
        onChange={(value) => setSelectValue(value)}
        options={id}
      />
      <Button
        className="download__button"
        type="button"
        onClick={() => Dow()}
      >
        <i className="material-icons">download</i>
      </Button>
    </div>
  );
};

export default Download;
