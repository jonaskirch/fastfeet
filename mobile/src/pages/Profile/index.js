import React from 'react';

import { Container, Avatar, Label, Text, Button } from './styles';

export default function Profile() {
  return (
    <Container>
      <Avatar />
      <Label>Nome completo</Label>
      <Text>Gaspar Antunes</Text>
      <Label>Email</Label>
      <Text>example@rocketseat.com.br</Text>
      <Label>Data de cadastro</Label>
      <Text>10/01/2020</Text>
      <Button>Logout</Button>
    </Container>
  );
}
