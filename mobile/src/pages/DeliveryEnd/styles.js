import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Button from '~/components/Button';
import colors from '~/styles/colors';

export const BackgroundHeader = styled.View`
  background: ${colors.primary};
  height: 70px;
`;

export const Wrapper = styled.View`
  background: #fff;
  flex: 1;
`;

export const Container = styled.View`
  top: -70px;
  z-index: 99999;
  margin: 0 20px;
  flex: 1;
`;

export const Form = styled.View`
  flex: 1;
`;

export const ImageContainer = styled.View`
  position: relative;
  align-items: center;
  height: 444px;
`;

export const Image = styled.Image`
  border-radius: 4px;
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
  position: relative;
  align-items: center;
  flex: 1;
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
