import React from 'react';
import {useParams} from 'react-router-dom';
import Pagination from './Pagination';
import Table from './Table';

export default function ContentTable({search = ''}) {
  const {question} = useParams();

  return (
    <div className="content-table-wrapper">
      {question === 'one' ? null : !search ? null : (
        <div className="search-result">
          Search result for: <strong>{search}</strong>
        </div>
      )}
      <Table />
      <Pagination question={question} />
    </div>
  );
}
