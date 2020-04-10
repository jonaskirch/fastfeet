import React from 'react';
import PropTypes from 'prop-types';
import {
  MdFirstPage,
  MdChevronLeft,
  MdChevronRight,
  MdLastPage,
} from 'react-icons/md';
import { Container, Button } from './styles';

export default function Paginator({
  activePage,
  totalRecords,
  limitPage,
  onChange,
}) {
  const totalPages = Math.ceil(totalRecords / limitPage);
  // calculate pages of exibition in paginator bar (max 5 pages, current page in middle)
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
          <Button onClick={() => onChange(1)} disabled={activePage === 1}>
            <MdFirstPage size={20} />
          </Button>
        </li>

        <li>
          <Button
            onClick={() => onChange(activePage - 1)}
            disabled={activePage === 1}
          >
            <MdChevronLeft size={20} />
          </Button>
        </li>

        {pages.map(page => (
          <li key={page}>
            <Button
              onClick={e => onChange(parseInt(e.target.innerText, 10))}
              active={activePage === page}
            >
              {page}
            </Button>
          </li>
        ))}

        <li>
          <Button
            onClick={() => onChange(activePage + 1)}
            disabled={activePage >= totalPages}
          >
            <MdChevronRight size={20} />
          </Button>
        </li>

        <li>
          <Button
            onClick={() => onChange(totalPages)}
            disabled={activePage >= totalPages}
          >
            <MdLastPage size={20} />
          </Button>
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
