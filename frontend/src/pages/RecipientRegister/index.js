import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { Input } from '@rocketseat/unform';
import api from '~/services/api';
import RegisterForm from '~/components/RegisterForm';
import MaskInput from '~/components/UnForm/MaskInput';

import { Row } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  street: Yup.string().required('A rua é obrigatória'),
  number: Yup.number().integer(),
  complement: Yup.string(),
  city: Yup.string().required('A cidade é obrigatória'),
  state: Yup.string().required('O estado é obrigatório'),
  zipcode: Yup.string().required('O CEP é obrigatório'),
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
    console.log(data);
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
        <div style={{ flex: 2 }}>
          <Input name="street" label="Rua" />
        </div>
        <div>
          <Input name="number" label="Número" />
        </div>
        <div>
          <Input name="complement" label="Complemento" />
        </div>
      </Row>

      <Row>
        <div>
          <Input name="city" label="Cidade" />
        </div>
        <div>
          <Input name="state" label="Estado" />
        </div>
        <div>
          <MaskInput name="zipcode" label="CEP" mask="99999-999" />
        </div>
      </Row>
    </RegisterForm>
  );
}
