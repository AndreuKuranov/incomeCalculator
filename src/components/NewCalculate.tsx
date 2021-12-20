import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './UI/button/Button';
import { useTypedSelector } from '../hooks/useTypedSelector';

const NewCalculate = () => {
  const navigate = useNavigate();
  const { newRoute } = useTypedSelector((state) => state.route);

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
