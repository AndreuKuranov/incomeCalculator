import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { textErrorAction } from '../store/textError';
import Modal from './UI/modal/Modal';

const ModalError = () => {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const textError = useSelector((state) => state.textError.text);

  useEffect(() => {
    if (textError) {
      setModal(true);
    }
  }, [textError]);

  useEffect(() => {
    if (!modal) {
      dispatch(textErrorAction(''));
    }
  }, [modal]);

  return (
    <Modal
      visible={modal}
      setVisible={() => setModal()}
    >
      <div>{textError}</div>
    </Modal>
  );
};

export default ModalError;
