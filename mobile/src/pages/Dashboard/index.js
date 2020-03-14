import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { signOut } from '~/store/modules/auth/actions';
import DeliveryStatus from '~/components/DeliveryStatus';

import {
  Container,
  User,
  Avatar,
  Welcome,
  WelcomeText,
  WelcomeUserName,
  ExitButton,
  Toolbar,
  Title,
  FilterText,
  List,
} from './styles';

const deliveries = [
  {
    status: 'PENDENTE',
    id: 6,
    created_at: '2020-02-29T18:40:44.909Z',
    recipient: {
      city: 'Lajeado',
    },
  },
  {
    status: 'RETIRADA',
    id: 5,
    created_at: '2020-02-29T18:27:56.922Z',
    recipient: {
      city: 'Lajeado',
    },
  },
];

export default function Dashboard({ navigation }) {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <User>
        <Avatar />
        <Welcome>
          <WelcomeText>Bem vindo de volta,</WelcomeText>
          <WelcomeUserName>Gaspar Antunes</WelcomeUserName>
        </Welcome>
        <ExitButton onPress={handleLogout}>
          <Icon name="exit-to-app" color="#E74040" size={20} />
        </ExitButton>
      </User>

      <Toolbar>
        <Title>Entregas</Title>
        <FilterText active>Pendentes</FilterText>
        <FilterText>Entregues</FilterText>
      </Toolbar>

      <List
        data={deliveries}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <DeliveryStatus delivery={item} navigation={navigation} />
        )}
      />
    </Container>
  );
}
