import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../UI/button/Button';

const Home = () => {
  const navigate = useNavigate();
  const idSave = useSelector((state) => state.id.id);

  return (
    idSave
      && (
        <Button
          type="button"
          title="home"
          onClick={() => navigate('/incomeCalculator')}
        >
          <i className="material-icons">home</i>
        </Button>
      )
  );
};

export default Home;
