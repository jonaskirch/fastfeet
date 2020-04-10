import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import api from '~/services/api';
import AvatarInput from '~/components/UnForm/AvatarInput';
import Input from '~/components/UnForm/Input';
import RegisterForm from '~/components/RegisterForm';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  avatar_id: Yup.number().integer(),
});

export default function DeliverymanRegister() {
  const [deliveryman, setDeliveryman] = useState(null);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function loadDeliveryman() {
      if (id) {
        const resp = await api.get(`/deliverymen/${id}`);
        setDeliveryman(resp.data);
      } else {
        setDeliveryman({});
      }
    }

    loadDeliveryman();
  }, [id]);

  async function handleSubmit(data) {
    try {
      if (id) {
        await api.put(`/deliverymen/${id}`, data);
      } else {
        await api.post('/deliverymen', data);
      }
      history.goBack('/deliverymen');
    } catch {
      toast.error('Falha ao salvar');
    }
  }

  return (
    <RegisterForm
      title={`${id ? 'Edição' : 'Cadastro'} de entregador`}
      initialData={deliveryman}
      schema={schema}
      onSubmit={handleSubmit}
      onBack={() => history.push('/deliverymen')}
    >
      <AvatarInput name="avatar_id" />
      <Input name="name" label="Nome" />
      <Input name="email" label="E-mail" type="email" />
    </RegisterForm>
  );
}
