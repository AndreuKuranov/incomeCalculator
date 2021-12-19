import React, { useEffect, useState } from 'react';
import './ModalError.css';
import { useSelector, useDispatch } from 'react-redux';
import { textErrorAction } from '../../store/textError';
import { errorAction } from '../../store/downloads';
import Modal from '../UI/modal/Modal';

const ModalError = () => {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const textError = useSelector((state) => state.textError.text);
  const downloadsError = useSelector((state) => state.downloads.error);

  useEffect(() => {
    if (textError || downloadsError) {
      setModal(true);
    }
  }, [textError, downloadsError]);

  useEffect(() => {
    if (!modal) {
      dispatch(textErrorAction(''));
      dispatch(errorAction(''));
    }
  }, [modal]);

  return (
    <Modal
      className="modal__error"
      visible={modal}
      setVisible={() => setModal()}
    >
      <div>{textError || downloadsError}</div>
    </Modal>
  );
};

export default ModalError;
