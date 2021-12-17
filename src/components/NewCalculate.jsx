import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from './UI/button/Button';

const NewCalculate = () => {
  const navigate = useNavigate();
  const newRoute = useSelector((state) => state.route.newRoute);

  return (
    <Button
      type="button"
      title="new calculate"
      onClick={() => navigate(`/incomeCalculator/${newRoute}`)}
    >
      <i className="material-icons">calculate</i>
    </Button>
  );
};

export default NewCalculate;
