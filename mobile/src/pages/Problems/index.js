import React, { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import api from '~/services/api';

import { Container, Title, List, Problem, Description, Date } from './styles';

const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

export default function Problems({ route }) {
  const { deliveryId } = route.params;
  const [loading, setLoading] = useState(false);
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    async function loadProblems() {
      try {
        setLoading(true);
        const resp = await api.get(`/deliveries/${deliveryId}/problems`);
        setProblems(resp.data);
      } finally {
        setLoading(false);
      }
    }

    loadProblems();
  }, [deliveryId]);

  return (
    <Container>
      <Title>{`Encomenda ${deliveryId}`}</Title>
      <List
        data={problems}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Problem>
            <Description>{item.description}</Description>
            <Date>
              {format(
                utcToZonedTime(parseISO(item.created_at), timezone),
                'dd/MM/yyyy'
              )}
            </Date>
          </Problem>
        )}
      />
    </Container>
  );
}
