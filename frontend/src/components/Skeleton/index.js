import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Skeleton({ width, height, radius, margin }) {
  return (
    <Container width={width} height={height} radius={radius} margin={margin} />
  );
}

Skeleton.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  radius: PropTypes.string,
  margin: PropTypes.string,
};

Skeleton.defaultProps = {
  width: '100%',
  height: '100%',
  radius: '0',
  margin: '0',
};
