import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './UI/button/Button';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Button
      type="button"
      title="home"
      onClick={() => navigate('/incomeCalculator')}
    >
      <i className="material-icons">home</i>
    </Button>
  );
};

export default Home;
