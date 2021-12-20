import React, { useEffect, useState } from 'react';
import './ModalError.css';
import { useDispatch } from 'react-redux';
import { errorAction } from '../../store/downloads';
import Modal from '../UI/modal/Modal';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const ModalError = () => {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const downloadsError = useTypedSelector((state) => state.downloads.error);

  useEffect(() => {
    if (downloadsError) {
      setModal(true);
    }
  }, [downloadsError]);

  useEffect(() => {
    if (!modal) {
      dispatch(errorAction(''));
    }
  }, [modal]);

  return (
    <Modal
      className="modal__error"
      visible={modal}
      setVisible={() => setModal()}
    >
      <div>{downloadsError}</div>
    </Modal>
  );
};

export default ModalError;
