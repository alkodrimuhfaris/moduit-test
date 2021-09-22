import React from 'react';
import SvgIcon from '../ComponentLayout/SvgIcon';

export default function Search({search = '', setSearch = (val) => val}) {
  return (
    <div className="search-wrapper">
      <form
        className="search-container"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          className="search"
          type="text"
          placeholder="Search by product name"
          onChange={setSearch}
          value={search}
        />
        <SvgIcon className={['search-icon']} src="/assets/icon/search.svg" />
      </form>
    </div>
  );
}
