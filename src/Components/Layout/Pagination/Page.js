import React from 'react';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import paginationFunction from '../../../Helpers/paginationFunction';
import TriangleIcon from '../TriangleIcon';

export default function Page({question}) {
  const history = useHistory();
  const [pages, setPages] = React.useState([1, 2, 3, 4, 5]);
  const {page: currentPage, maxPage} = useSelector((state) =>
    question === 'one' ? state.question1 : state.question2,
  );
  const [prevElipsis, setPrevElipsis] = React.useState(false);
  const [nextElipsis, setNextElipsis] = React.useState(false);

  React.useEffect(() => {
    paginationFunction({
      maxPage,
      currentPage,
      setPages,
      setPrevElipsis,
      setNextElipsis,
    });
  }, [currentPage, maxPage]);

  return (
    <section className="pagination d-flex align-items-center justify-content-center">
      <span className={currentPage === 1 ? 'disable' : ''}>
        <button
          disabled={currentPage === 1}
          type="button"
          className="pagination-item"
          onClick={() =>
            history.push({
              search: `?page=${currentPage - 1}`,
            })
          }
        >
          <span>
            <TriangleIcon deg={270} />
          </span>
        </button>
      </span>

      {!prevElipsis ? null : (
        <span className="disable">
          <button type="button" disabled className="pagination-item">
            <span>...</span>
          </button>
        </span>
      )}

      {pages.map((val, idx) => (
        <span key={idx} className={currentPage === val ? 'current' : ''}>
          <button
            disabled={currentPage === val}
            type="button"
            className="pagination-item"
            onClick={() =>
              history.push({
                search: `?page=${val}`,
              })
            }
          >
            <span>{val}</span>
          </button>
        </span>
      ))}

      {!nextElipsis ? null : (
        <span className="disable">
          <button type="button" disabled className="pagination-item">
            <span>...</span>
          </button>
        </span>
      )}

      <span className={currentPage === maxPage ? 'disable' : ''}>
        <button
          disabled={currentPage === maxPage}
          type="button"
          className="pagination-item"
          onClick={() =>
            history.push({
              search: `?page=${currentPage + 1}`,
            })
          }
        >
          <span>
            <TriangleIcon deg={90} />
          </span>
        </button>
      </span>
    </section>
  );
}
