import React from 'react';
import { View } from 'react-native';
import { format, parseISO } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';

import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '~/styles/colors';
import TimeLine from './TimeLine';

import { Container, Header, Title, Footer, Label, Text, Link } from './styles';

const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

export default function DeliveryStatus({ navigation, delivery }) {
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
          <Text>
            {format(
              utcToZonedTime(parseISO(delivery.created_at), timezone),
              'dd/MM/yyyy'
            )}
          </Text>
        </View>
        <View>
          <Label>Cidade</Label>
          <Text>{delivery.recipient.city}</Text>
        </View>
        <Link onPress={() => navigation.navigate('Delivery', { delivery })}>
          Ver detalhes
        </Link>
      </Footer>
    </Container>
  );
}
