import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from './UI/button/Button';
import { saveAsynsActions } from '../asynsActions/saveAsynsActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const Save: any = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { incomes, expenses, loaded, percent } = useTypedSelector((state) => state.downloads);
  const { newRoute, currentRoute } = useTypedSelector((state) => state.route);
  const { newId } = useTypedSelector((state) => state.id);

  return (
    currentRoute
      && (
      <div>
        <Button
          type="button"
          title="save"
          onClick={loaded ? () => {} : () => dispatch(saveAsynsActions(currentRoute, newRoute, incomes, expenses, percent, newId, navigate))}
        >
          <i className="material-icons">save</i>
        </Button>
      </div>
      )
  );
};

export default Save;
