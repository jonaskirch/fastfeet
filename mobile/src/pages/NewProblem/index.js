import React, { useState } from 'react';
import api from '~/services/api';
import { Container, Form, Input, SubmitButton } from './styles';

export default function NewProblem({ navigation, route }) {
  const { deliveryId } = route.params;
  const [problem, setProblem] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    try {
      setLoading(true);
      await api.post(`/deliveries/${deliveryId}/problems`, {
        description: problem,
      });
      navigation.goBack();
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <Form>
        <Input
          placeholder="Inclua aqui o problema que ocorreu na entrega."
          value={problem}
          onChangeText={setProblem}
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
        />
        <SubmitButton loading={loading} onPress={handleSubmit}>
          Enviar
        </SubmitButton>
      </Form>
    </Container>
  );
}
