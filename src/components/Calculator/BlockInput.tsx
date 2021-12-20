import React, { useState, FC } from 'react';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import './BlockInput.css';
import ItemInput from './ItemInput';
import Button from '../UI/button/Button';
import '../../i18next/i18next';
import { placeholder, resetValueCalc } from '../../date/check';
import { DownloadsAction, IDownloadItem } from '../../types/downloadsType';

interface BlockInputProps {
  className?: string,
  title: string,
  values: IDownloadItem[],
  setDownloadsAction: (payload: IDownloadItem[]) => DownloadsAction,
  id: string,
  additional: string[],
}

const BlockInput: FC<BlockInputProps> = ({ setDownloadsAction, ...props}) => {
  const { t } = useTranslation();
  const [resetLabel, setResetLabel] = useState<boolean>(false);
  const dispatch = useDispatch();

  const calc = (Id: string, val: number) => {
    dispatch(setDownloadsAction(props.values.map((item) => (item.id !== Id ? item : { ...item, value: +val }))));
  };

  const addDelete = (item: IDownloadItem) => {
    dispatch(setDownloadsAction(props.values.filter((e) => e.id !== item.id)));
  };

  const newInput = () => {
    dispatch(setDownloadsAction([...props.values, { id: String(Date.now()), placeholder: placeholder(props.additional, props.id), value: 0 }]));
  };

  const reset = () => {
    dispatch(setDownloadsAction(resetValueCalc(props.values)));
    setResetLabel(true);
  };

  return (
    <div className={cn('block', props.className)}>
      <h2 className="block__title">{props.title}</h2>
      <form className="block__form">
        {props.values.map((item) => (
          <ItemInput
            className="block__item"
            autoсomplete="off"
            typeInput="number"
            id={item.id}
            placeholder={item.placeholder}
            onChange={(Id, val) => calc(Id, val)}
            key={item.id}
            value={item.value}
            typeButton="button"
            icon={<i className="material-icons">delete</i>}
            onClick={() => addDelete(item)}
            resetLabel={resetLabel}
            setResetLabel={setResetLabel}
          />
        ))}
        <div className="block__buttons">
          <Button
            className="block__button"
            type="reset"
            onClick={reset}
          >
            {t('calc.reset')}
          </Button>
          <Button
            className="block__button"
            type="button"
            onClick={newInput}
          >
            {t('calc.add_field')}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BlockInput;
