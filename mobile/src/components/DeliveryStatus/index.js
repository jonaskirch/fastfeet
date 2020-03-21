import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { dateFormat } from '~/util/date';
import TimeLine from './TimeLine';
import colors from '~/styles/colors';

import {
  Container,
  Header,
  Title,
  Footer,
  Label,
  Text,
  LinkButton,
  LinkText,
} from './styles';

export default function DeliveryStatus({ delivery }) {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <Icon name="local-shipping" color={colors.primary} size={20} />
        <Title>{`Encomenda ${delivery.id}`}</Title>
      </Header>
      <TimeLine status={delivery.status} />
      <Footer>
        <View>
          <Label>Data</Label>
          <Text>{dateFormat(delivery.created_at)}</Text>
        </View>
        <View>
          <Label>Cidade</Label>
          <Text>{delivery.recipient.city}</Text>
        </View>
        <LinkButton
          onPress={() => navigation.navigate('Delivery', { delivery })}
        >
          <LinkText>Ver detalhes</LinkText>
        </LinkButton>
      </Footer>
    </Container>
  );
}

DeliveryStatus.propTypes = {
  delivery: PropTypes.shape({
    id: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    recipient: PropTypes.shape({
      city: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
