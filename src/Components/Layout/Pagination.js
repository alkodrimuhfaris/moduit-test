import React from 'react';
import Page from './Pagination/Page';
import ShowData from './Pagination/ShowData';

export default function Pagination({question}) {
  return (
    <div className="pagination-wrapper">
      <Page question={question} />
      <ShowData question={question} />
    </div>
  );
}
