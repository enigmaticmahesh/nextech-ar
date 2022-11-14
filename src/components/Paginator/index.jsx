import React from 'react';

const pageLinks = [...new Array(11)];

export default function Paginator({ perPage, photos, page, setPage }) {
  const totalPages = Math.floor(photos.length / perPage);

  const getOffset = () => {
    if (page <= 5) {
      return 0;
    }

    if (page >= totalPages - 5) {
      return totalPages - 11;
    }

    return page - 5;
  };

  return (
    <div className="d-flex justify-content-center mt-4">
      <div aria-label="Page navigation example">
        <ul className="pagination">
          {page > 5 ? (
            <li className="page-item">
              <span onClick={() => setPage(0)} className="page-link">
                First
              </span>
            </li>
          ) : null}
          {pageLinks.map((pageLink, index) => (
            <li
              key={index}
              className={
                page === index + getOffset() ? 'page-item active' : 'page-item'
              }
              onClick={() => setPage(index + getOffset())}
            >
              <span className="page-link">{index + getOffset() + 1}</span>
            </li>
          ))}
          {page < totalPages - 6 ? (
            <li className="page-item">
              <span
                onClick={() => setPage(totalPages - 1)}
                className="page-link"
              >
                Last
              </span>
            </li>
          ) : null}
        </ul>
      </div>
    </div>
  );
}
