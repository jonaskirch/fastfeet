import styled from 'styled-components/native';
import CButton from '~/components/Button';

export const Container = styled.View`
  padding: 20px;
`;

export const Avatar = styled.Image`
  height: 120px;
  width: 120px;
  background: #ccc;
  border-radius: 60px;
  align-self: center;
  margin: 20px 0;
`;

export const Label = styled.Text`
  font-size: 12px;
  color: #666;
`;

export const Text = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Button = styled(CButton).attrs({
  color: '#E74040',
})`
  margin-top: 15px;
`;
