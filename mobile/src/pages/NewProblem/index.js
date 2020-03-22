import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import api from '~/services/api';
import {
  BackgroundHeader,
  Wrapper,
  Container,
  Form,
  Input,
  SubmitButton,
} from './styles';

export default function NewProblem() {
  const navigation = useNavigation();
  const route = useRoute();
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
    } catch {
      Alert.alert('Falha', 'Ocorreu uma falha ao inserir o problema');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <BackgroundHeader />
      <Wrapper>
        <Container>
          <Form>
            <Input
              placeholder="Inclua aqui o problema que ocorreu na entrega."
              value={problem}
              onChangeText={setProblem}
            />
            <SubmitButton loading={loading} onPress={handleSubmit}>
              Enviar
            </SubmitButton>
          </Form>
        </Container>
      </Wrapper>
    </>
  );
}
