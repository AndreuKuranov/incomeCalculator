import React, { useEffect, useRef, FC } from 'react';
import cn from 'classnames';
import './DownloadsList.css';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { errorListSave } from '../date/check';
import { useObserver } from '../hooks/useObserver';
import Download from '../components/Download';
import { currentRouteAction } from '../store/route';
import { downloadsIncomesAction, downloadsExpensesAction, percentAction } from '../store/downloads';
import { pageNumberAction} from '../store/listSave';
import { newIdAction } from '../store/id';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { listSaveAsynsActions } from '../asynsActions/listSaveAsysnsActions';

interface DownloadsListProps {
  className?: string,
}

const DownloadsList: FC<DownloadsListProps> = (props) => {
  const dispatch = useDispatch();
  const lastElement = useRef<any>();
  const { incomeCalculator } = useParams<string>();
  const { listSave, listLoaded, listError, totalPage, limitPage, pageNumber } = useTypedSelector((state) => state.listSave);
  const { incomesDefault, expensesDefault } = useTypedSelector((state) => state.defaultCalc);

  useEffect(() => {
    dispatch(downloadsIncomesAction(incomesDefault));
    dispatch(downloadsExpensesAction(expensesDefault));
    dispatch(percentAction(0));
    dispatch(currentRouteAction(''));
    dispatch(newIdAction(''));
  }, [incomeCalculator]);

  useObserver(
    lastElement,
    pageNumber < totalPage,
    listLoaded,
    () => { dispatch(pageNumberAction(pageNumber + 1)); }
  );

  useEffect(() => {
    dispatch(listSaveAsynsActions(limitPage, pageNumber, listSave));
  }, [pageNumber]);

  return (
    <div className={cn('downloads__list', props.className)}>
      <div className="downloads-list__container container">
        <h1 className="downloads-list__title">{errorListSave(listError, listLoaded)}</h1>
        <div className="downloads-list__column">
          {listSave.map((item) => (
            <Download
              name={item.name}
              value={item.value}
              key={item.value}
            />
          ))}
          <div className="observer" ref={lastElement} />
        </div>
      </div>
    </div>
  );
};

export default DownloadsList;
