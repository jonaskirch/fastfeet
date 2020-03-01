import React from 'react';

import { Wrapper, Container } from './styles';

export default function Modal({ onCloseRequest, children }) {
  return (
    <Wrapper onClick={onCloseRequest}>
      <Container>{children}</Container>
    </Wrapper>
  );
}
