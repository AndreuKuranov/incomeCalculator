/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import cn from 'classnames';
import './Menu.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from './UI/modal/Modal';
import Button from './UI/button/Button';
import Language from './Language';
import Save from './Save';
import { saveIdAction } from '../store/saveId';
import { downloadsIncomesAction } from '../store/downloadsIncomes';
import { downloadsExpensesAction } from '../store/downloadsExpenses';
import { newIdAction } from '../store/newId';
import { unique, resetValueCalc } from '../date/check';

const Menu = (props) => {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const downloadsIncomes = useSelector((state) => state.dowIn.incomes);
  const downloadsExpenses = useSelector((state) => state.dowEx.expenses);
  const idSave = useSelector((state) => state.id.id);
  const newUrl = useSelector((state) => state.newUrl.newUrl);

  const onClickHome = () => {
    dispatch(saveIdAction(''));
    dispatch(downloadsIncomesAction(resetValueCalc(downloadsIncomes)));
    dispatch(downloadsExpensesAction(resetValueCalc(downloadsExpenses)));
  };

  const onClickCalculate = () => {
    if (idSave !== newUrl) {
      dispatch(downloadsIncomesAction(resetValueCalc(downloadsIncomes)));
      dispatch(downloadsExpensesAction(resetValueCalc(downloadsExpenses)));
      dispatch(saveIdAction(newUrl));
    }
    dispatch(newIdAction(unique()));
  };

  return (
    <div className={cn('menu', props.className)}>
      <div className="menu__container container">
        <div className="menu__settings">

          <Link
            className="text_decoration"
            style={{ padding: '0px 5px 0px 0px' }}
            to="/incomeCalculator"
          >
            <Button
              type="button"
              onClick={() => onClickHome()}
            >
              <i className="material-icons">home</i>
            </Button>
          </Link>
          <Link
            className="text_decoration"
            style={{ padding: '0px 5px 0px 0px' }}
            to={`/incomeCalculator/${newUrl}`}
          >
            <Button
              type="button"
              onClick={() => onClickCalculate()}
            >
              <i className="material-icons">calculate</i>
            </Button>
          </Link>

          <Save />
          <Button
            type="button"
            onClick={() => setModal(true)}
          >
            <i className="material-icons">settings</i>
          </Button>
          <Modal
            className="menu__modal"
            visible={modal}
            setVisible={setModal}
          >
            <Button
              className="menu__button"
              type="button"
              onClick={() => setModal(false)}
            >
              <i className="material-icons">close</i>
            </Button>
            <Language />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Menu;
