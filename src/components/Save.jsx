import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from './UI/button/Button';
import PostService from '../API/PostService';
import useFetching from '../hooks/useFetching';
import { currentRouteAction } from '../store/route';
import { textErrorAction } from '../store/textError';

const Save = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const downloadsIncomes = useSelector((state) => state.downloads.incomes);
  const downloadsExpenses = useSelector((state) => state.downloads.expenses);
  const percent = useSelector((state) => state.downloads.percent);
  const currentRoute = useSelector((state) => state.route.currentRoute);
  const newRoute = useSelector((state) => state.route.newRoute);
  const newId = useSelector((state) => state.id.newId);

  const [fetchingSave, isLoadedSave, errorSave] = useFetching(async () => {
    if (currentRoute && currentRoute !== newRoute) {
      await PostService.putItem(currentRoute, downloadsIncomes, downloadsExpenses, percent);
    } else if (currentRoute === newRoute) {
      await PostService.postItem(downloadsIncomes, downloadsExpenses, newId, percent);
      dispatch(currentRouteAction(newId));
      navigate(`/incomeCalculator/${newId}`);
    }
  });

  useEffect(() => {
    if (errorSave) {
      dispatch(textErrorAction('Error save'));
    }
  }, [errorSave]);

  return (
    currentRoute
      && (
      <div>
        <Button
          type="button"
          title="save"
          onClick={isLoadedSave ? () => {} : () => fetchingSave()}
        >
          <i className="material-icons">save</i>
        </Button>
      </div>
      )
  );
};

export default Save;
