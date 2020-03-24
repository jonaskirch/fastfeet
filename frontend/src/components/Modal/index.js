import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Container } from './styles';

export default function Modal({ onCloseRequest, children }) {
  return (
    <Wrapper onClick={onCloseRequest}>
      <Container>{children}</Container>
    </Wrapper>
  );
}

Modal.propTypes = {
  onCloseRequest: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
