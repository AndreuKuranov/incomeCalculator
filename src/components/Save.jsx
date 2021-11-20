import React, { useState, useEffect } from 'react';
import Button from './UI/button/Button';
import PostService from '../API/PostService';
import useFetching from '../hooks/useFetching';
import Modal from './UI/modal/Modal';
import { checkSaveId, checkSave } from '../date/check';

const Save = (props) => {
  const [modal, setModal] = useState(false);

  const [fetchingSave, isLoadedSave, errorSave] = useFetching(async () => {
    if (props.listSave.length >= 5 && checkSave(props.listSave) !== true) {
      await PostService.putItem(props.listSave[0].value, props.saveIncomes, props.saveExpenses);
    } else if (checkSave(props.listSave)) {
      const saveId = checkSaveId(props.listSave);
      await PostService.putItem(saveId, props.saveIncomes, props.saveExpenses);
    } else {
      await PostService.postItem(props.saveIncomes, props.saveExpenses);
    }
    props.setToUpdate(true);
  });

  useEffect(() => {
    if (errorSave) {
      setModal(true);
    }
  }, [errorSave]);

  return (
    <div style={{ padding: '0px 5px 0px 0px' }}>
      <Button
        type="button"
        onClick={isLoadedSave ? () => {} : () => fetchingSave()}
        style={isLoadedSave ? { opacity: '0.7' } : {}}
      >
        <i className="material-icons">save</i>
      </Button>
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

export default Save;
