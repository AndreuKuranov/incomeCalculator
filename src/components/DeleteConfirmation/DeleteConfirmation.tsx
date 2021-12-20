import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './DeleteConfirmation.css';
import Button from '../UI/button/Button';
import Modal from '../UI/modal/Modal';
import { deleteIdAction } from '../../store/id';
import { deleteAsynsActions } from '../../asynsActions/deleteAsynsActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const DeleteConfirmation = () => {
  const [modal, setModal] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { deleteId } = useTypedSelector((state) => state.id);
  const { listSave }= useTypedSelector((state) => state.listSave);
  const { newRoute, currentRoute } = useTypedSelector((state) => state.route)
  const { loaded } = useTypedSelector((state) => state.downloads);

  const nav = (route: string) => {
    navigate(`/incomeCalculator/${route}`);
  }

  const onClick = (Id: string) => {
    dispatch(deleteAsynsActions(Id, currentRoute, newRoute, listSave, nav));
    setModal(false);
  };

  useEffect(() => {
    if (deleteId) {
      setModal(true);
    }
  }, [deleteId]);

  useEffect(() => {
    if (!modal) {
      dispatch(deleteIdAction(''));
    }
  }, [modal]);

  return (
    <Modal
      visible={modal}
      setVisible={setModal}
    >
      <h3
        className="delete__confirmation-title"
      >
        Вы действительно хотите удалить сохранение?
      </h3>
      <div className="delete__confirmation">
        <Button
          className="delete__confirmation-button"
          type="button"
          title="Да"
          onClick={loaded ? () => {} : () => onClick(deleteId)}
        >
          Да
        </Button>
        <Button
          className="delete__confirmation-button"
          title="Нет"
          type="button"
          onClick={() => setModal(false)}
        >
          Нет
        </Button>
      </div>
    </Modal>
  );
};

export default DeleteConfirmation;
