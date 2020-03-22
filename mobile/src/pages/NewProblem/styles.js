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
  position: relative;
`;

export const Container = styled.View`
  position: absolute;
  z-index: 99999;
  top: -70px;
  left: 20px;
  right: 20px;
  bottom: 0;
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
