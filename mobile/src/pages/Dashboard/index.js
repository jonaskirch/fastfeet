import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import GestureRecognizer from 'react-native-swipe-gestures';
import api from '~/services/api';
import { signOut } from '~/store/modules/auth/actions';
import Avatar from '~/components/Avatar';
import DeliveryStatus from '~/components/DeliveryStatus';

import {
  Container,
  User,
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

export default function Dashboard() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);
  const [deliveries, setDeliveries] = useState([]);
  const [deliveredFilter, setDeliveredFilter] = useState(false);
  const [page, setPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);
  const [loading, setLoading] = useState(false);
  const isFocused = useIsFocused();

  async function loadDeliveries() {
    try {
      setLoading(true);
      const resp = await api.get(
        `/deliverymen/${profile.id}/${
          deliveredFilter ? 'delivered' : 'deliveries'
        }`,
        {
          params: { page },
        }
      );
      setTotalRecords(resp.data.total);
      setDeliveries(
        page > 1 ? [...deliveries, resp.data.records] : resp.data.records
      );
    } catch {
      Alert.alert('Falha', 'Ocorreu uma falha ao listar as entregas');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadDeliveries();
  }, [page, deliveredFilter, profile.id]);

  useEffect(() => {
    if (isFocused) {
      loadDeliveries();
    }
  }, [isFocused]);

  function handlePage() {
    if (deliveries.length < totalRecords) setPage(page + 1);
  }

  function handleRefreshList() {
    if (page !== 1) setPage(1);
    else loadDeliveries();
  }

  function handleLogout() {
    Alert.alert(
      'Logout',
      'Tem certeza que deseja sair?',
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
        <Avatar
          size={68}
          imageUri={profile.avatar && profile.avatar.url}
          name={profile.name}
        />
        <Welcome>
          <WelcomeText>Bem vindo de volta,</WelcomeText>
          <WelcomeUserName>{profile.name}</WelcomeUserName>
        </Welcome>
        <ExitButton onPress={handleLogout}>
          <Icon name="exit-to-app" color="#E74040" size={20} />
        </ExitButton>
      </User>

      <GestureRecognizer
        onSwipeRight={() => setDeliveredFilter(false)}
        onSwipeLeft={() => setDeliveredFilter(true)}
        style={{
          flex: 1,
        }}
      >
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
            onEndReachedThreshold={0.2}
            onEndReached={handlePage}
            onRefresh={handleRefreshList}
            refreshing={loading}
            renderItem={({ item }) => <DeliveryStatus delivery={item} />}
          />
        )}
      </GestureRecognizer>
    </Container>
  );
}
