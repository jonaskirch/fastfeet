import React from 'react';

import { Container, Title, List, Problem, Description, Date } from './styles';

const problems = [
  {
    id: 1,
    description: 'Destinatário ausente',
    created_at: '10/10/2020',
  },
  {
    id: 2,
    description: 'Destinatário ausente',
    created_at: '10/11/2020',
  },
];

export default function Problems({ route }) {
  const { params } = route;

  return (
    <Container>
      <Title>{`Encomenda ${params.deliveryId}`}</Title>
      <List
        data={problems}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Problem>
            <Description>{item.description}</Description>
            <Date>{item.created_at}</Date>
          </Problem>
        )}
      />
    </Container>
  );
}
