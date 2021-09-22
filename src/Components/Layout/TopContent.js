import React from 'react';
import Search from './Search';

export default function TopContent({
  question = 'one',
  search = '',
  handleChangeSearch = () => {},
}) {
  return (
    <div className="top-content">
      <h3 className="font-weight-bold text-main-text">
        Question {question === 'one' ? 1 : 2}
      </h3>

      {question !== 'two' ? null : (
        <Search search={search} setSearch={handleChangeSearch} />
      )}
    </div>
  );
}
