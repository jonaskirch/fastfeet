import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  padding: 20px;
  background: #fff;
  flex: 1;
`;

export const Form = styled.View``;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 4px;
  font-size: 16px;
  color: #999;
  color: #333;
  height: 300px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 20px;
`;
