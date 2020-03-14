import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';
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

export default function Dashboard({ navigation }) {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);
  const [deliveries, setDeliveries] = useState([]);
  const [deliveredFilter, setDeliveredFilter] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadDeliveries() {
      try {
        setLoading(true);
        const resp = await api.get(
          `/deliverymen/${profile.id}/${
            deliveredFilter ? 'delivered' : 'deliveries'
          }`
        );
        setDeliveries(resp.data);
      } finally {
        setLoading(false);
      }
    }

    loadDeliveries();
  }, [deliveredFilter, profile.id]);

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <User>
        <Avatar source={{ uri: profile.avatar && profile.avatar.url }} />
        <Welcome>
          <WelcomeText>Bem vindo de volta,</WelcomeText>
          <WelcomeUserName>{profile.name}</WelcomeUserName>
        </Welcome>
        <ExitButton onPress={handleLogout}>
          <Icon name="exit-to-app" color="#E74040" size={20} />
        </ExitButton>
      </User>

      <Toolbar>
        <Title>Entregas</Title>
        <ExitButton>
          <FilterText
            active={!deliveredFilter}
            onPress={() => setDeliveredFilter(false)}
          >
            Pendentes
          </FilterText>
        </ExitButton>
        <ExitButton>
          <FilterText
            active={deliveredFilter}
            onPress={() => setDeliveredFilter(true)}
          >
            Entregues
          </FilterText>
        </ExitButton>
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
