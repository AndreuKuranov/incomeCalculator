import React from 'react';
import cn from 'classnames';
import './Pagination.css';
import Button from './UI/button/Button';
import { getPagesArray } from '../date/pages';

const Pagination = ({
  totalPage, page, changePage, limit, ...props
}) => {
  const pagesArray = getPagesArray(totalPage);
  return (
    <div className={cn(props.className, 'page')}>
      {pagesArray.map((p) => (
        <Button
          className={page === p ? 'page__button page__active' : 'page__button'}
          type="button"
          onClick={() => changePage(limit, p)}
          key={p}
        >
          {p}
        </Button>
      ))}
    </div>
  );
};

export default Pagination;
