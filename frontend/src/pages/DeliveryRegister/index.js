import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import api from '~/services/api';
import RegisterForm from '~/components/RegisterForm';
import Input from '~/components/UnForm/Input';
import AsyncSelectInput from '~/components/UnForm/AsyncSelectInput';

import { Row } from './styles';

const schema = Yup.object().shape({
  recipient_id: Yup.number()
    .integer()
    .required('O destinatário é obrigatório'),
  deliveryman_id: Yup.number()
    .integer()
    .required('O entregador é obrigatório'),
  product: Yup.string().required('O produto é obrigatório'),
});

export default function DeliveryRegister() {
  const [delivery, setDelivery] = useState(null);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function loadDelivery() {
      if (id) {
        const resp = await api.get(`/deliveries/${id}`);
        setDelivery(resp.data);
      } else {
        setDelivery({});
      }
    }

    loadDelivery();
  }, [id]);

  async function loadRecipients(name) {
    const resp = await api.get('/recipients', { params: { name } });
    return resp.data.records;
  }

  async function loadDeliverymen(name) {
    const resp = await api.get('/deliverymen', { params: { name } });
    return resp.data.records;
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

  if (!delivery) return null;

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
            getOptionLabel={option => option.name}
            getOptionValue={option => option.id}
            defaultValue={delivery.recipient}
            loadOptions={loadRecipientsOptions}
          />
        </div>
        <div>
          <AsyncSelectInput
            name="deliveryman_id"
            label="Entregador"
            getOptionLabel={option => option.name}
            getOptionValue={option => option.id}
            defaultValue={delivery.deliveryman}
            loadOptions={loadDeliverymenOptions}
          />
        </div>
      </Row>
      <Input name="product" label="Nome do produto" />
    </RegisterForm>
  );
}
