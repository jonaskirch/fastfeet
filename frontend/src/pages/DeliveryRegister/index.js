import React from 'react';
import { useParams } from 'react-router-dom';

import { Container } from './styles';

export default function DeliveryRegister({ match }) {
  const { id } = useParams();
  console.log(match.params);
  console.log(id);
  return <Container>Delivery Register</Container>;
}
