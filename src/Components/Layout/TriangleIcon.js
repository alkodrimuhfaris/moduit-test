import React from 'react';

export default function TriangleIcon({deg = 0}) {
  return (
    <div className={`icon-triangle deg-${deg}`}>
      <div className="triangle" />
    </div>
  );
}
