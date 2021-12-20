import React, { FC } from 'react';
import cn from 'classnames';
import './Menu.css';
import Save from '../Save';
import DeleteSave from '../DeleteSave';
import Home from '../Home';
import NewCalculate from '../NewCalculate';
import Translate from '../Translate/Translate';

interface MenuProps {
  className?: string,
}

const Menu: FC<MenuProps> = (props) => {
  return (
    <div className={cn('menu', props.className)}>
      <div className="menu__container container">
        <div className="menu__settings">
          <div className="menu__row-button">
            <Home />
            <Save />
            <DeleteSave />
          </div>
          <div className="menu__row-button menu__row-button-right">
            <NewCalculate />
            <Translate />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
