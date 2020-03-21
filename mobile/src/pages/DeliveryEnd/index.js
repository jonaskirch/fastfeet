import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';

import {
  Container,
  Form,
  ImageContainer,
  Image,
  ImageButton,
  SubmitButton,
  Loading,
  CameraContainer,
  CameraButton,
} from './styles';

export default function DeliveryEnd() {
  const [loading, setLoading] = useState(false);
  const [uriImg, setUriImg] = useState('');
  const [cameraOn, setCameraOn] = useState(false);
  const route = useRoute();
  const navigation = useNavigation();
  const { deliveryId } = route.params;

  async function handleSubmit() {
    if (uriImg === '') {
      Alert.alert(
        'Foto',
        'Você precisa tirar uma foto da assinatura do destinatário'
      );
      return;
    }
    try {
      setLoading(true);
      const data = new FormData();
      data.append('file', {
        uri: uriImg,
        name: 'DeliveredSignature.jpg',
        type: 'image/*',
      });
      const resp = await api.post('files', data);
      const { id } = resp.data;
      await api.post(`/deliveries/${deliveryId}/end`, {
        date: Date.now(),
        signature_id: id,
      });
      navigation.navigate('Dashboard');
    } catch {
      Alert.alert('Falha', 'Falha ao finalizar entrega');
    } finally {
      setLoading(false);
    }
  }

  const takePicture = async camera => {
    const options = { quality: 0.5, base64: true };
    const data = await camera.takePictureAsync(options);
    setUriImg(data.uri);
    setCameraOn(false);
  };

  return (
    <Container>
      {cameraOn ? (
        <RNCamera
          style={{
            flex: 1,
            alignItems: 'center',
          }}
          type={RNCamera.Constants.Type.back}
          captureAudio={false}
          flashMode={RNCamera.Constants.FlashMode.off}
          androidCameraPermissionOptions={{
            title: 'Permissão para usar a camera',
            message: 'Conceder permissão para usar a camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        >
          {({ camera, status }) => {
            if (status !== 'READY')
              return (
                <Container>
                  <Loading />
                </Container>
              );
            return (
              <CameraContainer>
                <CameraButton onPress={() => takePicture(camera)}>
                  <Icon name="camera" color="#fff" size={52} />
                </CameraButton>
              </CameraContainer>
            );
          }}
        </RNCamera>
      ) : (
        <Form>
          <ImageContainer>
            <Image source={{ uri: uriImg || null }} />
            <ImageButton onPress={() => setCameraOn(true)}>
              <Icon name="photo-camera" color="#fff" size={24} />
            </ImageButton>
          </ImageContainer>
          <SubmitButton loading={loading} onPress={handleSubmit}>
            Enviar
          </SubmitButton>
        </Form>
      )}
    </Container>
  );
}
