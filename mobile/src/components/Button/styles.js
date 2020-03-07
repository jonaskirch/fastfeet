import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 45px;
  background: ${props => props.color};
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;
