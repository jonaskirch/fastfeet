import React from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { format, parseISO } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import { signOut } from '~/store/modules/auth/actions';

import { Container, Form, Avatar, Label, Text, SubmitButton } from './styles';

const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSubmit() {
    Alert.alert(
      'Logout',
      'Tem certeza que deseja desconectar?',
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
        <Text>
          {format(
            utcToZonedTime(parseISO(profile.created_at), timezone),
            'dd/MM/yyyy'
          )}
        </Text>
        <SubmitButton onPress={handleSubmit}>Logout</SubmitButton>
      </Form>
    </Container>
  );
}
