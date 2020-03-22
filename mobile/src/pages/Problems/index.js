import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { dateFormat } from '~/util/date';
import api from '~/services/api';

import {
  BackgroundHeader,
  Wrapper,
  Container,
  Title,
  List,
  Problem,
  Description,
  Date,
  Loading,
} from './styles';

export default function Problems() {
  const route = useRoute();
  const { deliveryId } = route.params;
  const [loading, setLoading] = useState(false);
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    async function loadProblems() {
      try {
        setLoading(true);
        const resp = await api.get(`/deliveries/${deliveryId}/problems`);
        setProblems(resp.data);
      } catch {
        Alert.alert('Falha', 'Ocorreu uma falha ao listar os problemas');
      } finally {
        setLoading(false);
      }
    }

    loadProblems();
  }, [deliveryId]);

  return (
    <>
      <BackgroundHeader />
      <Wrapper>
        <Container>
          <Title>{`Encomenda ${deliveryId}`}</Title>
          {loading ? (
            <Loading />
          ) : (
            <List
              data={problems}
              keyExtractor={item => String(item.id)}
              renderItem={({ item }) => (
                <Problem>
                  <Description>{item.description}</Description>
                  <Date>{dateFormat(item.created_at)}</Date>
                </Problem>
              )}
            />
          )}
        </Container>
      </Wrapper>
    </>
  );
}
