import React from 'react';

import { MdAdd } from 'react-icons/md';
import { Container } from './styles';

import Button from '~/components/Button';

export default function Delivery() {
  return (
    <Container>
      <Button>
        <MdAdd color="#FFF" size={18} />
        CADASTRAR
      </Button>
    </Container>
  );
}
