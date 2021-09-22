import React from 'react';
import TriangleIcon from '../TriangleIcon';

export default function HeadRow({changeOrder = () => {}, order = 'asc'}) {
  return (
    <div className="row no-gutters table-head">
      <div className="col-3 product-name">
        Product Name
        <button
          onClick={() => changeOrder()}
          type="button"
          className="order-button style-button"
        >
          <TriangleIcon deg={order === 'asc' ? 180 : 0} />
        </button>
      </div>
      <div className="col-2">
        <p className="center">Product Code</p>
      </div>
      <div className="col-2">
        <p className="center">Category</p>
      </div>
      <div className="col-2 col-md-3">
        <p className="center">Description</p>
      </div>
      <div className="col-3 col-md-2">
        <p className="center">Tags</p>
      </div>
    </div>
  );
}
