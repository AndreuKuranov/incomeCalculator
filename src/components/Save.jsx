import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from './UI/button/Button';
import { saveAsynsActions } from '../asynsActions/saveAsynsActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const Save = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const downloadsIncomes = useTypedSelector((state) => state.downloads.incomes);
  const downloadsExpenses = useTypedSelector((state) => state.downloads.expenses);
  const loaded = useTypedSelector((state) => state.downloads.loaded);
  const percent = useTypedSelector((state) => state.downloads.percent);
  const currentRoute = useSelector((state) => state.route.currentRoute);
  const newRoute = useSelector((state) => state.route.newRoute);
  const newId = useSelector((state) => state.id.newId);

  const nav = (id) => {
    navigate(`/incomeCalculator/${id}`);
  }

  return (
    currentRoute
      && (
      <div>
        <Button
          type="button"
          title="save"
          onClick={loaded ? () => {} : () => dispatch(saveAsynsActions(currentRoute, newRoute, downloadsIncomes, downloadsExpenses, percent, newId, nav))}
        >
          <i className="material-icons">save</i>
        </Button>
      </div>
      )
  );
};

export default Save;
