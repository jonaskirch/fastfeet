import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { Input } from '@rocketseat/unform';
import api from '~/services/api';
import RegisterForm from '~/components/RegisterForm';
import AsyncSelectInput from '~/components/UnForm/AsyncSelectInput';

import { Row } from './styles';

const schema = Yup.object().shape({
  recipient_id: Yup.number()
    .integer()
    .required('O produto é obrigatório'),
  deliveryman_id: Yup.number()
    .integer()
    .required('O produto é obrigatório'),
  product: Yup.string().required('O produto é obrigatório'),
});

export default function DeliveryRegister() {
  const [delivery, setDelivery] = useState(null);
  const [recipientSelect, setRecipientSelect] = useState();
  const [deliverymanSelect, setDeliverymanSelect] = useState();

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function loadDelivery() {
      if (id) {
        const resp = await api.get(`/deliveries/${id}`);
        const { product, recipient, deliveryman } = resp.data;
        setDelivery({
          recipient_id: recipient.id,
          deliveryman_id: deliveryman.id,
          product,
        });
        setRecipientSelect({
          value: recipient.id,
          label: recipient.name,
        });
        setDeliverymanSelect({
          value: deliveryman.id,
          label: deliveryman.name,
        });
      } else {
        setDelivery({});
      }
    }

    loadDelivery();
  }, [id]);

  async function loadRecipients(name) {
    const resp = await api.get('/recipients', { params: { name } });
    const data = resp.data.records.map(recipient => {
      const { id: value, name: label } = recipient;
      return { value, label };
    });
    return data;
  }

  async function loadDeliverymen(name) {
    const resp = await api.get('/deliverymen', { params: { name } });
    const data = resp.data.records.map(deliveryman => {
      const { id: value, name: label } = deliveryman;
      return { value, label };
    });
    return data;
  }

  const loadRecipientsOptions = inputValue =>
    new Promise(resolve => {
      resolve(loadRecipients(inputValue));
    });

  const loadDeliverymenOptions = inputValue =>
    new Promise(resolve => {
      resolve(loadDeliverymen(inputValue));
    });

  async function handleSubmit(data) {
    try {
      if (id) {
        await api.put(`/deliveries/${id}`, data);
      } else {
        await api.post('/deliveries', data);
      }
      history.push('/deliveries');
    } catch {
      toast.error('Falha ao salvar');
    }
  }

  return (
    <RegisterForm
      title={`${id ? 'Edição' : 'Cadastro'} de encomenda`}
      schema={schema}
      initialData={delivery}
      onSubmit={handleSubmit}
      onBack={() => history.push('/deliveries')}
    >
      <Row>
        <div>
          <AsyncSelectInput
            name="recipient_id"
            label="Destinatário"
            value={recipientSelect}
            onChange={newValue => setRecipientSelect(newValue)}
            loadOptions={loadRecipientsOptions}
          />
        </div>
        <div>
          <AsyncSelectInput
            name="deliveryman_id"
            label="Entregador"
            value={deliverymanSelect}
            onChange={newValue => setDeliverymanSelect(newValue)}
            loadOptions={loadDeliverymenOptions}
          />
        </div>
      </Row>
      <Input name="product" label="Nome do produto" />
    </RegisterForm>
  );
}
