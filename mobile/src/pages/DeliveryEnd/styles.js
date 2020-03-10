import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Button from '~/components/Button';

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
  background: #c8e;
  border-radius: 4px;
  position: relative;
  align-items: center;
`;

export const Image = styled.Image`
  background: #666;
  /* flex: 2; */
  /* display: flex; */
  /* height: 200px; */
  /* width: 200px; */
  /* position: absolute; */
  /* top: 0; */
  /* left: 0; */

  /* bottom: 0; */
`;

export const ImageButton = styled(RectButton)`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  background: #666;
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
