import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Button from '~/components/Button';
import colors from '~/styles/colors';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background: #fff;
`;

export const Form = styled.View`
  flex: 1;
`;

export const ImageContainer = styled.View`
  flex: 1;
  background: #ccc;
  border-radius: 4px;
  position: relative;
  align-items: center;
`;

export const Image = styled.Image`
  background: #666;
  align-self: stretch;
  flex: 1;
`;

export const ImageButton = styled(RectButton)`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.5);
  position: absolute;
  bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SubmitButton = styled(Button)`
  margin-top: 10px;
`;

export const Loading = styled.ActivityIndicator.attrs({
  color: colors.primary,
  size: 'large',
})`
  flex: 1;
`;

export const CameraContainer = styled.View`
  flex: 1;
  position: relative;
  align-items: center;
`;

export const CameraButton = styled.TouchableOpacity`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.5);
  position: absolute;
  bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;