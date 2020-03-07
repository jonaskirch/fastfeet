import React, { useState } from 'react';
import logo from '~/assets/logo.png';
import { Container, Image, Form, Input, SubmitButton } from './styles';

export default function SignIn() {
  const { id, setId } = useState('');

  function handleSubmit() {}

  return (
    <Container>
      <Image source={logo} />
      <Form>
        <Input
          keyboardType="number-pad"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Informe seu ID de cadastro"
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          value={id}
          onChangeText={setId}
        />
        <SubmitButton onPress={handleSubmit}>Entrar no sistema</SubmitButton>
      </Form>
    </Container>
  );
}
