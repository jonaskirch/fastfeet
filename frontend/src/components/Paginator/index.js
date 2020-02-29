import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Paginator({
  activePage,
  totalRecords,
  limitPage,
  onChange,
}) {
  const totalPages = Math.ceil(totalRecords / limitPage);

  let pages = Array.from(Array(totalPages).keys()).map(x => x + 1);

  const slice = 4;

  if (activePage <= slice) pages = pages.slice(0, slice * 2 + 1);
  else if (activePage >= totalPages - slice)
    pages = pages.slice(totalPages - slice - slice - 1, totalPages);
  else pages = pages.slice(activePage - slice - 1, activePage + slice);

  // if (totalPages <= 1) return null;

  return (
    <Container>
      <ul>
        <li>
          <button
            type="button"
            onClick={() => onChange(1)}
            disabled={activePage === 1}
          >
            {'<<'}
          </button>
        </li>

        <li>
          <button
            type="button"
            onClick={() => onChange(activePage - 1)}
            disabled={activePage === 1}
          >
            {'<'}
          </button>
        </li>

        {pages.map(page => (
          <li key={page}>
            <button
              type="button"
              onClick={e => onChange(parseInt(e.target.innerText, 10))}
              className={activePage === page ? 'active' : ''}
            >
              {page}
            </button>
          </li>
        ))}

        <li>
          <button
            type="button"
            onClick={() => onChange(activePage + 1)}
            disabled={activePage === totalPages}
          >
            {'>'}
          </button>
        </li>

        <li>
          <button
            type="button"
            onClick={() => onChange(totalPages)}
            disabled={activePage === totalPages}
          >
            {'>>'}
          </button>
        </li>
      </ul>
    </Container>
  );
}

Paginator.propTypes = {
  activePage: PropTypes.number.isRequired,
  totalRecords: PropTypes.number.isRequired,
  limitPage: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
