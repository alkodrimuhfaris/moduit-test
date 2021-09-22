import React from 'react';
import {Bars, useLoading} from '@agney/react-loading';
import BodyRow from './BodyRow';
import HeadRow from './HeadRow';

export default function TableContainer({
  changeOrder = () => {},
  order = 'asc',
  showData = [],
  question = 'one',
  success = false,
  loading = false,
  error = false,
}) {
  const {containerProps, indicatorEl} = useLoading({
    loading,
    indicator: <Bars width="50" />,
  });

  return (
    <div className="table-container">
      <HeadRow changeOrder={changeOrder} order={order} />
      {showData.length ? (
        showData.map((val, idx) => (
          <BodyRow key={idx} val={val} idx={idx} question={question} />
        ))
      ) : (
        <div className="w-100 h-50 d-flex align-items-center justify-content-center">
          {success ? (
            <p className="mt-5">There is no data here</p>
          ) : loading ? (
            <section {...containerProps} style={{color: '#034ea1'}}>
              {indicatorEl}
            </section>
          ) : error ? (
            <p className="mt-5">An error has been occured</p>
          ) : (
            <p className="mt-5">An error has been occured</p>
          )}
        </div>
      )}
    </div>
  );
}
