import styled from 'styled-components/native';
import colors from '~/styles/colors';

export const Container = styled.View`
  flex-direction: row;
  background: ${colors.primary};
  height: 70px;
  align-items: center;
  z-index: 0;
`;

export const BackButton = styled.TouchableOpacity`
  padding: 15px;
`;

export const Title = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: #fff;
  margin-right: 50px;
`;
