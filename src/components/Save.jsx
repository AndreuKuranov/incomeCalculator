/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from './UI/button/Button';
import PostService from '../API/PostService';
import useFetching from '../hooks/useFetching';
import { saveIdAction } from '../store/saveId';

const Save = () => {
  const dispatch = useDispatch();
  const downloadsIncomes = useSelector((state) => state.dowIn.incomes);
  const downloadsExpenses = useSelector((state) => state.dowEx.expenses);
  const idSave = useSelector((state) => state.id.id);
  const newUrl = useSelector((state) => state.newUrl.newUrl);
  const newId = useSelector((state) => state.newId.newId);
  const navigate = useNavigate();

  const [fetchingSave, isLoadedSave, errorSave] = useFetching(async () => {
    if (idSave && idSave !== newUrl) {
      await PostService.putItem(idSave, downloadsIncomes, downloadsExpenses);
    } else if (idSave === newUrl) {
      await PostService.postItem(downloadsIncomes, downloadsExpenses, newId);
      dispatch(saveIdAction(newId));
      navigate(`/incomeCalculator/${newId}`);
    }
  });

  return (
    <div style={{ margin: '0px 5px 0px 0px' }}>
      <Button
        type="button"
        onClick={isLoadedSave ? () => {} : () => fetchingSave()}
      >
        <i className="material-icons">save</i>
      </Button>
    </div>
  );
};

export default Save;
