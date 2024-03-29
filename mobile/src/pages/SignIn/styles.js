import styled from 'styled-components/native';
import Button from '~/components/Button';
import colors from '~/styles/colors';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background: ${colors.primary};
`;

export const Image = styled.Image`
  align-self: center;
`;

export const Form = styled.View`
  padding: 25px;
`;
export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  background: #fff;
  border-radius: 4px;
  padding-left: 15px;
  font-size: 16px;
  margin-top: 20px;
  height: 45px;
`;

export const SubmitButton = styled(Button).attrs({
  color: '#82bf18',
})`
  margin-top: 15px;
`;
