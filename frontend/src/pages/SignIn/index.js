import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';

import Button from '~/components/Button';

import logo from '~/assets/logo.png';
// import { Container } from './styles';

export default function SignIn() {
  const [loading, setLoading] = useState(false);
  function handleSubmit() {}

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form onSubmit={handleSubmit}>
        <label>SEU E-MAIL</label>
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <label>SUA SENHA</label>
        <Input name="password" type="password" placeholder="Sua senha" />

        <Button type="submit">
          {loading ? 'Carregando...' : 'Entrar no sistema'}
        </Button>
      </Form>
    </>
  );
}
