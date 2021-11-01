import React, { useState } from 'react';
import MySelect from './UI/select/MySelect';
import './MainMenu.css';
import MyModal from './UI/MyModal/MyModal';
import MyButton from './UI/button/MyButton';

const MainMenu = (props) => {
  const [modal, setModal] = useState(false);
  return (
    <div className={`menu ${props.className}`}>
      <div className="menu__container container">
        <div className="menu__settings">
          <MyButton
            type="button"
            onClick={() => setModal(true)}
          >
            {/* я бы не делал для иконок три строки, они идеально описываются как <i class="material-icons">settings</i> */}
            <span className="material-icons">
              settings
            </span>
          </MyButton>
          <MyModal visible={modal} setVisible={setModal}>
            <MyButton
              type="button"
              onClick={() => setModal(false)}
            >
              <span className="material-icons">
                close
              </span>
            </MyButton>
            <div className="menu__row">
              <div className="menu__icon">
                <span className="material-icons">
                  translate
                </span>
              </div>
              <MySelect
                className="menu__select"
                value={props.locale}
                onChange={props.onChange}
                options={props.options}
              />
            </div>
          </MyModal>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
