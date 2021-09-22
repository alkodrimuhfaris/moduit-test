import React from 'react';
import Content from 'dangerously-set-html-content';

export default function BodyRow({question, val, idx}) {
  const {title, id, category, description, tags} = val;
  return (
    <div key={idx} className="row no-gutters table-body">
      <div className="col-3 product-name">
        {question === 'one' ? <p>{title}</p> : <Content html={title} />}
      </div>
      <div className="col-2">
        <p className="center">N{id}</p>
      </div>
      <div className="col-2">
        <p className="center">{category}</p>
      </div>
      <div className="col-3">
        <p className="center">{description}</p>
      </div>
      <div className="col-2">
        {!tags ? (
          <p className="m-0 text-center">no tags</p>
        ) : (
          <ul className="tags">
            {tags.map((tag, idxTag) => (
              <li key={idxTag}>
                <span>{tag}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
