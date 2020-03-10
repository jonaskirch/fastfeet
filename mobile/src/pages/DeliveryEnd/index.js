import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Form,
  ImageContainer,
  Image,
  ImageButton,
  SubmitButton,
} from './styles';

export default function DeliveryEnd() {
  return (
    <Container>
      <Form>
        <ImageContainer>
          <Image />
          <ImageButton>
            <Icon name="photo-camera" color="#fff" size={24} />
          </ImageButton>
        </ImageContainer>
        <SubmitButton>Enviar</SubmitButton>
      </Form>
    </Container>
  );
}
