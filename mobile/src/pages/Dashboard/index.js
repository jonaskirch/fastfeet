import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
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
  FilterButton,
  FilterText,
  List,
  Loading,
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
      } catch {
        Alert.alert('Falha', 'Ocorreu uma falha ao listar as entregas');
      } finally {
        setLoading(false);
      }
    }

    loadDeliveries();
  }, [deliveredFilter, profile.id]);

  function handleLogout() {
    Alert.alert(
      'Logout',
      'Tem certeza que deseja desconectar?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        { text: 'OK', onPress: () => dispatch(signOut()) },
      ],
      { cancelable: true }
    );
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
        <FilterButton onPress={() => setDeliveredFilter(false)}>
          <FilterText active={!deliveredFilter}>Pendentes</FilterText>
        </FilterButton>
        <FilterButton onPress={() => setDeliveredFilter(false)}>
          <FilterText
            active={deliveredFilter}
            onPress={() => setDeliveredFilter(true)}
          >
            Entregues
          </FilterText>
        </FilterButton>
      </Toolbar>

      {loading ? (
        <Loading />
      ) : (
        <List
          data={deliveries}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <DeliveryStatus delivery={item} navigation={navigation} />
          )}
        />
      )}
    </Container>
  );
}
