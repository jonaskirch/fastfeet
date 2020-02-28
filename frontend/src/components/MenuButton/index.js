import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MdMoreHoriz } from 'react-icons/md';
import { Container, MenuList, Item } from './styles';

export function MenuItem({ children }) {
  return <Item>{children}</Item>;
}

export default function MenuButton({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Container>
      <MdMoreHoriz
        color="#999"
        size={20}
        onClick={() => setMenuOpen(!menuOpen)}
      />
      <MenuList visible={menuOpen}>{children}</MenuList>
    </Container>
  );
}

MenuItem.propTypes = {
  children: PropTypes.node.isRequired,
};

MenuButton.propTypes = {
  children: PropTypes.node.isRequired,
};