import React from 'react';

import { Container, Form, Input, SubmitButton } from './styles';

export default function NewProblem() {
  return (
    <Container>
      <Form>
        <Input placeholder="Inclua aqui o problema que ocorreu na entrega." />
        <SubmitButton>Enviar</SubmitButton>
      </Form>
    </Container>
  );
}
