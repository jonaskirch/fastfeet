import styled from 'styled-components/native';
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
`;

export const Form = styled.View``;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
  multiline: true,
  textAlignVertical: 'top',
})`
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 4px;
  font-size: 16px;
  color: #333;
  height: 300px;
  background: #fff;
`;

export const SubmitButton = styled(Button)`
  margin-top: 20px;
`;
