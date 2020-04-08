import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Container } from './styles';

export default function Modal({ onCloseRequest, children }) {
  return (
    <Wrapper
      onClick={e => {
        if (e.target === e.currentTarget) {
          onCloseRequest();
        }
      }}
      onKeyDown={e => {
        if (e.key === 'Escape') onCloseRequest();
      }}
      tabIndex="0"
    >
      <Container>{children}</Container>
    </Wrapper>
  );
}

Modal.propTypes = {
  onCloseRequest: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
