import React from 'react';
import PropTypes from 'prop-types';

import { Container, Line, Point, Legend, Label } from './styles';

export default function TimeLine({ status }) {
  return (
    <>
      <Container>
        <Line />
        <Point marker />
        <Point marker={status === 'RETIRADA' || status === 'ENTREGUE'} />
        <Point marker={status === 'ENTREGUE'} />
      </Container>
      <Legend>
        <Label>Aguardando Retirada</Label>
        <Label>Retirada</Label>
        <Label>Entregue</Label>
      </Legend>
    </>
  );
}

TimeLine.propTypes = {
  status: PropTypes.string.isRequired,
};
