import React, { useState } from 'react';
import { MdMenu } from 'react-icons/md';
import { Container, MenuList, ItemMenu } from './styles';

export function MenuItem({ children }) {
  return <ItemMenu>{children}</ItemMenu>;
}

export default function MenuButton({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Container>
      <MdMenu color="#999" size={20} onClick={() => setMenuOpen(!menuOpen)} />
      <MenuList visible={menuOpen}>{children}</MenuList>
    </Container>
  );
}
