import React from 'react';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';
import { Container } from './styles';

import Button from '~/components/Button';
import MenuButton, { MenuItem } from '~/components/MenuButton';

export default function Delivery() {
  return (
    <Container>
      <Button>
        <MdAdd color="#FFF" size={18} />
        CADASTRAR
      </Button>

      <MenuButton>
        <MenuItem>
          <MdAdd color="#333" size={18} />
          <Link to="/recipient">Visualizar</Link>
        </MenuItem>
        <MenuItem>
          <MdAdd color="#333" size={18} />
          <Link to="/recipient">Editar</Link>
        </MenuItem>
        <MenuItem>
          <MdAdd color="#333" size={18} />
          <Link to="/recipient">Excluir</Link>
        </MenuItem>
      </MenuButton>
    </Container>
  );
}
