import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MdKeyboardArrowLeft, MdDone } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import api from '~/services/api';
import Button from '~/components/Button';

import { Container, Header, Title } from './styles';

export default function DeliverymanRegister() {
  const [deliveryman, setDeliveryman] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function loadDeliveryman() {
      if (id) {
        console.tron.log('load deliveryman');
        const resp = await api.get(`/deliverymen/${id}`);
        setDeliveryman(resp.data);
      }
    }

    loadDeliveryman();
  }, [id]);

  function handleSubmit(data) {
    console.tron.log('submit');
    console.tron.log(data);
  }
  return (
    <Container>
      <Header>
        <Title>Cadastro de destinatário</Title>
        <div>
          <Button>
            <MdKeyboardArrowLeft color="#FFF" size={18} />
            VOLTAR
          </Button>
          <Button type="submit">
            <MdDone color="#FFF" size={18} />
            SALVAR
          </Button>
        </div>
      </Header>
      <Form initialData={deliveryman} onSubmit={handleSubmit}>
        <label>Nome</label>
        <Input name="name" />
        <label>E-mail</label>
        <Input name="email" type="email" />
        <Button type="submit">
          <MdDone color="#FFF" size={18} />
          SALVAR
        </Button>
      </Form>
    </Container>
  );
}
