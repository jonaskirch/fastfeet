import React from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { dateFormat } from '~/util/date';
import { signOut } from '~/store/modules/auth/actions';

import { Container, Form, Avatar, Label, Text, SubmitButton } from './styles';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSubmit() {
    Alert.alert(
      'Logout',
      'Tem certeza que deseja sair?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        { text: 'OK', onPress: () => dispatch(signOut()) },
      ],
      { cancelable: true }
    );
  }

  return (
    <Container>
      <Form>
        <Avatar source={{ uri: profile.avatar && profile.avatar.url }} />
        <Label>Nome completo</Label>
        <Text>{profile.name}</Text>
        <Label>Email</Label>
        <Text>{profile.email}</Text>
        <Label>Data de cadastro</Label>
        <Text>{dateFormat(profile.created_at)}</Text>
        <SubmitButton onPress={handleSubmit}>Logout</SubmitButton>
      </Form>
    </Container>
  );
}
