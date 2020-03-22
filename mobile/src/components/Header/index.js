import React from 'react';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, BackButton, Title, Text } from './styles';

export default function Header({ title }) {
  const navigation = useNavigation();

  return (
    <Container>
      <BackButton
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Icon name="chevron-left" size={20} color="#FFF" />
      </BackButton>
      <Title>
        <Text>{title}</Text>
      </Title>
    </Container>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
