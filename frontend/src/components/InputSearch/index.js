import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { MdSearch } from 'react-icons/md';

import colors from '~/styles/colors';
import { Container, Input } from './styles';

export default function InputSearch({ onSearch, placeholder }) {
  const inputRef = useRef(null);
  const [active, setActive] = useState(false);

  function setFocusSearch() {
    inputRef.current.focus();
  }

  function handleSearch(e) {
    if (e.key === 'Enter') {
      const find = e.target.value;
      onSearch(find);
      // e.target.value = '';
    }
  }

  return (
    <Container active={active} onClick={setFocusSearch}>
      <MdSearch color={active ? colors.primary : '#ddd'} size={24} />

      <Input
        active={active}
        ref={inputRef}
        autoComplete="off"
        placeholder={placeholder}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        onKeyDown={e => handleSearch(e)}
      />
    </Container>
  );
}

InputSearch.propTypes = {
  onSearch: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};
