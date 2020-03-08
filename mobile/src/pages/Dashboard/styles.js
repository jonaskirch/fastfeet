import styled from 'styled-components/native';
import colors from '~/styles/colors';

export const Container = styled.View`
  padding: 20px;
  background: #fff;
  flex: 1;
`;

export const User = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Avatar = styled.Image`
  height: 50px;
  width: 50px;
  background: #ccc;
  border-radius: 25px;
`;

export const Welcome = styled.View`
  margin-left: 10px;
  flex: 1;
`;
export const WelcomeText = styled.Text`
  font-size: 11px;
  color: #666;
`;
export const WelcomeUserName = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const ExitButton = styled.TouchableOpacity``;

export const Toolbar = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  flex: 1;
`;
export const FilterText = styled.Text`
  margin-left: 20px;
  font-size: 13px;
  color: ${props => (props.active ? colors.primary : '#666')};

  text-decoration: ${props => (props.active ? 'underline' : 'none')};
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 10px;
`;
