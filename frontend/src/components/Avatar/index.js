import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Avatar({ size, imageURL, name }) {
  const initialsName = useMemo(() => {
    const slices = name.toUpperCase().split(' ');
    const initials = slices.reduce((prev, current) => {
      prev += current.substr(0, 1);
      return prev;
    }, '');
    return initials;
  }, [name]);

  return (
    <Container
      size={size}
      fontSize={
        size / (initialsName.length > 1 ? initialsName.length / 1.2 : 2)
      }
    >
      {imageURL ? (
        <img src={imageURL} alt="Avatar" />
      ) : (
        <strong>{initialsName}</strong>
      )}
    </Container>
  );
}

Avatar.propTypes = {
  size: PropTypes.number.isRequired,
  imageURL: PropTypes.string,
  name: PropTypes.string.isRequired,
};

Avatar.defaultProps = {
  imageURL: '',
};
