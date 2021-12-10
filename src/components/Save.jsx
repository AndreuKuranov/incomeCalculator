/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from './UI/button/Button';
import PostService from '../API/PostService';
import useFetching from '../hooks/useFetching';
import { saveIdAction } from '../store/saveId';
import { textErrorAction } from '../store/textError';

const Save = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const downloadsIncomes = useSelector((state) => state.dowIn.incomes);
  const downloadsExpenses = useSelector((state) => state.dowEx.expenses);
  const idSave = useSelector((state) => state.id.id);
  const newUrl = useSelector((state) => state.newUrl.newUrl);
  const newId = useSelector((state) => state.newId.newId);

  const [fetchingSave, isLoadedSave, errorSave] = useFetching(async () => {
    if (idSave && idSave !== newUrl) {
      await PostService.putItem(idSave, downloadsIncomes, downloadsExpenses);
    } else if (idSave === newUrl) {
      await PostService.postItem(downloadsIncomes, downloadsExpenses, newId);
      dispatch(saveIdAction(newId));
      navigate(`/incomeCalculator/${newId}`);
    }
  });

  useEffect(() => {
    if (errorSave) {
      dispatch(textErrorAction('Error save'));
    }
  }, [errorSave]);

  return (
    <div>
      <Button
        type="button"
        title="save"
        onClick={isLoadedSave ? () => {} : () => fetchingSave()}
      >
        <i className="material-icons">save</i>
      </Button>
    </div>
  );
};

export default Save;
