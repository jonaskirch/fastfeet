import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { Container } from './styles';

export default function EmptyContainer() {
  return (
    <Container>
      <MdDeleteForever color="#ccc" size={250} />
      <span>Ainda não há registros à exibir</span>
    </Container>
  );
}
