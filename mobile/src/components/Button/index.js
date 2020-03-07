import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import colors from '~/styles/colors';
import { Container, Text } from './styles';

export default function Button({ color, loading, children, ...rest }) {
  return (
    <Container color={color} {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#FFF" />
      ) : (
        <Text>{children}</Text>
      )}
    </Container>
  );
}

Button.propTypes = {
  color: PropTypes.string,
  loading: PropTypes.bool,
  children: PropTypes.string.isRequired,
};

Button.defaultProps = {
  color: colors.primary,
  loading: false,
};
