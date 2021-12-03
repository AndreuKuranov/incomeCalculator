import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PostService from '../API/PostService';
import useFetching from '../hooks/useFetching';
import Button from './UI/button/Button';
import Modal from './UI/modal/Modal';
import { downloadsIncomesAction } from '../store/downloadsIncomes';
import { downloadsExpensesAction } from '../store/downloadsExpenses';
import { saveIdAction } from '../store/saveId';

const Downloads = (props) => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);

  const [fetchingDownload, isLoadedDownload, errorDownload] = useFetching(async (id) => {
    const response = await PostService.getItem(id);
    dispatch(downloadsIncomesAction(response.incomes));
    dispatch(downloadsExpensesAction(response.expenses));
    dispatch(saveIdAction(id));
  });

  useEffect(() => {
    if (errorDownload) {
      setModal(true);
    }
  }, [errorDownload]);

  return (
    <div>
      <Link
        className="text_decoration"
        to={`/incomeCalculator/${props.value}`}
      >
        <Button
          className="download__button"
          type="button"
          onClick={isLoadedDownload ? () => {} : () => fetchingDownload(props.value)}
          style={isLoadedDownload ? { opacity: '0.7' } : {}}
        >
          <i className="material-icons">download</i>
        </Button>
      </Link>
      <Modal
        className="menu__modal"
        visible={modal}
        setVisible={setModal}
      >
        <div>Ошибка</div>
      </Modal>
    </div>
  );
};

export default Downloads;
