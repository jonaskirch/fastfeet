import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { Container, AvatarImage, AvatarName, Name } from './styles';

export default function Avatar({ size, imageUri, name }) {
  const initialsName = useMemo(() => {
    const slices = name.toUpperCase().split(' ');
    const initials = slices.reduce((prev, current) => {
      prev += current.substr(0, 1);
      return prev;
    }, '');
    return initials;
  }, [name]);

  return (
    <Container>
      {imageUri ? (
        <AvatarImage size={size} source={{ uri: imageUri }} />
      ) : (
        <AvatarName size={size}>
          <Name size={size / initialsName.length}>{initialsName}</Name>
        </AvatarName>
      )}
    </Container>
  );
}

Avatar.propTypes = {
  size: PropTypes.number.isRequired,
  imageUri: PropTypes.string,
  name: PropTypes.string.isRequired,
};

Avatar.defaultProps = {
  imageUri: '',
};
