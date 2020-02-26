import React, { useEffect, useState } from 'react';
import api from '~/services/api';
import { Container } from './styles';

export default function Deliverymen() {
  const [deliverymen, setDeliverymen] = useState([]);

  useEffect(() => {
    async function loadDeliverymen() {
      const resp = await api.get('deliverymen');
      console.tron.log(resp.data);
      setDeliverymen(resp.data);
    }

    loadDeliverymen();
  }, []);

  return <Container>{deliverymen.length}</Container>;
}
