import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { MdMoreHoriz } from 'react-icons/md';
import { Container, Button, MenuList, Item } from './styles';

export function MenuItem({ children }) {
  return <Item>{children}</Item>;
}

export default function MenuButton({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => {
    if (menuOpen) setMenuOpen(false);
  }, [menuOpen]);

  useEffect(() => {
    document.addEventListener('click', closeMenu);

    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, [closeMenu]);

  return (
    <Container>
      <Button onClick={() => setMenuOpen(!menuOpen)}>
        <MdMoreHoriz color="#999" size={20} />
      </Button>
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
