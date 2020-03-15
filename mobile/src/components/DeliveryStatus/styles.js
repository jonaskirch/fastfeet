import styled from 'styled-components/native';
import colors from '~/styles/colors';

export const Container = styled.View`
  /* padding: 10px; */
  border: 1px solid #eee;
  border-radius: 4px;
  margin-bottom: 30px;
`;

export const Header = styled.View`
  flex-direction: row;
  margin: 10px;
`;

export const Title = styled.Text`
  margin-left: 10px;
  color: ${colors.primary};
  font-weight: bold;
`;

export const TimeLine = styled.View`
  height: 70px;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background: #eee;
  padding: 15px;
  align-items: flex-end;
`;

export const Label = styled.Text`
  font-size: 8px;
  color: #999;
  font-weight: bold;
`;

export const Text = styled.Text`
  font-size: 12px;
  color: #444;
  font-weight: bold;
`;

export const LinkButton = styled.TouchableOpacity`
  padding-top: 10px;
`;

export const LinkText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: ${colors.primary};
`;
