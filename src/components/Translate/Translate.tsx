import React, { useState } from 'react';
import Modal from '../UI/modal/Modal';
import Button from '../UI/button/Button';
import Language from './Language';

const Translate = () => {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <div>
      <Button
        type="button"
        title="translate"
        onClick={() => setModal(true)}
      >
        <i className="material-icons">translate</i>
      </Button>
      <Modal
        className="menu__modal"
        visible={modal}
        setVisible={setModal}
      >
        <Language />
      </Modal>
    </div>
  );
};

export default Translate;
