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

export const Welcome = styled.View`
  margin-left: 10px;
  flex: 1;
`;
export const WelcomeText = styled.Text`
  font-size: 12px;
  color: #666;
`;
export const WelcomeUserName = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #444;
`;

export const ExitButton = styled.TouchableOpacity``;

export const Toolbar = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #444;
  flex: 1;
`;

export const FilterButton = styled.TouchableOpacity``;

export const FilterText = styled.Text`
  margin-left: 15px;
  font-size: 12px;
  font-weight: bold;
  color: ${props => (props.active ? colors.primary : '#999')};

  text-decoration: ${props => (props.active ? 'underline' : 'none')};
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 10px;
`;

export const Loading = styled.ActivityIndicator.attrs({
  color: colors.primary,
  size: 'large',
})`
  flex: 1;
`;
