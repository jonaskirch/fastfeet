import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  padding: 20px;
  background: #fff;
  flex: 1;
`;

export const Form = styled.View``;

export const Avatar = styled.Image`
  height: 136px;
  width: 136px;
  background: #ccc;
  border-radius: 68px;
  align-self: center;
  margin: 20px 0;
`;

export const Label = styled.Text`
  font-size: 12px;
  color: #666;
`;

export const Text = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #444;
  margin-bottom: 15px;
`;

export const SubmitButton = styled(Button).attrs({
  color: '#E74040',
})`
  margin-top: 15px;
`;
