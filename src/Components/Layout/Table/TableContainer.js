import React from 'react';
import BodyRow from './BodyRow';
import HeadRow from './HeadRow';

export default function TableContainer({
  changeOrder = () => {},
  order = 'asc',
  showData = [],
  question = 'one',
}) {
  return (
    <div className="table-container">
      <HeadRow changeOrder={changeOrder} order={order} />
      {showData.map((val, idx) => (
        <BodyRow key={idx} val={val} idx={idx} question={question} />
      ))}
    </div>
  );
}
