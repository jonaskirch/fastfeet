import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { Input } from '@rocketseat/unform';
import api from '~/services/api';
import RegisterForm from '~/components/RegisterForm';

import { Row } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
});

export default function RecipientRegister() {
  const [recipient, setRecipient] = useState(null);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function loadRecipient() {
      if (id) {
        const resp = await api.get(`/recipients/${id}`);
        setRecipient(resp.data);
      } else {
        setRecipient({});
      }
    }

    loadRecipient();
  }, [id]);

  async function handleSubmit(data) {
    try {
      if (id) {
        await api.put(`/recipients/${id}`, data);
      } else {
        await api.post('/recipients', data);
      }
      history.push('/recipients');
    } catch {
      toast.error('Falha ao salvar');
    }
  }

  return (
    <RegisterForm
      title={`${id ? 'Edição' : 'Cadastro'} de destinatário`}
      initialData={recipient}
      schema={schema}
      onSubmit={handleSubmit}
      onBack={() => history.push('/recipients')}
    >
      <Input name="name" label="Nome" />
      <Row>
        <div>
          <Input name="city" label="Cidade" />
        </div>
        <div>
          <Input name="state" label="Estado" />
        </div>
        <div>
          <Input name="zipcode" label="CEP" />
        </div>
      </Row>
    </RegisterForm>
  );
}
