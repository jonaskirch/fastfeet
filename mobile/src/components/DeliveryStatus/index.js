import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '~/styles/colors';
import TimeLine from './TimeLine';

import { Container, Header, Title, Footer, Label, Text, Link } from './styles';

export default function DeliveryStatus({ delivery }) {
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
          <Text>10/10/2020</Text>
        </View>
        <View>
          <Label>Cidade</Label>
          <Text>{delivery.recipient.city}</Text>
        </View>
        <Link>Ver detalhes</Link>
      </Footer>
    </Container>
  );
}
