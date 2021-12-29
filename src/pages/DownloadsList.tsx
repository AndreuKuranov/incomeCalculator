import React, { useEffect, useRef, FC } from 'react';
import cn from 'classnames';
import './DownloadsList.css';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { errorListSave } from '../date/check';
import { useObserver } from '../hooks/useObserver';
import Download from '../components/Download';
import { currentRouteAction } from '../store/route';
import { downloadsAction } from '../store/downloads';
import { pageNumberAction} from '../store/list';
import { newIdAction } from '../store/id';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { listAsynsActions } from '../asynsActions/listAsysnsActions';

interface DownloadsListProps {
  className?: string,
}

const DownloadsList: FC<DownloadsListProps> = (props) => {
  const dispatch = useDispatch();
  const lastElement = useRef<any>();
  const { incomeCalculator } = useParams<string>();
  const { listSave, listLoaded, listError, totalPage, limitPage, pageNumber } = useTypedSelector((state) => state.list);
  const { incomesDefault, expensesDefault } = useTypedSelector((state) => state.defaultCalc);

  useEffect(() => {
    dispatch(downloadsAction(incomesDefault, expensesDefault, 0));
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
    dispatch(listAsynsActions(limitPage, pageNumber));
  }, [pageNumber]);

  return (
    <div className={cn('downloads__list', props.className)}>
      <div className="downloads-list__container container">
        <h1 className="downloads-list__title">{errorListSave(listError, listLoaded)}</h1>
        <div className="downloads-list__column">
          {listSave.map((item) => (
            <Download
              name={item.name}
              id={item.id}
              key={item.id}
            />
          ))}
          <div className="observer" ref={lastElement} />
        </div>
      </div>
    </div>
  );
};

export default DownloadsList;
