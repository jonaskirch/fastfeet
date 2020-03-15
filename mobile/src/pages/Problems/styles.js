import styled from 'styled-components/native';
import colors from '~/styles/colors';

export const Container = styled.View`
  padding: 20px;
  background: #fff;
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.primary};
  align-self: center;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 10px;
`;

export const Problem = styled.View`
  border: 1px solid #eee;
  border-radius: 4px;
  padding-left: 20px;
  padding-right: 10px;
  min-height: 55px;
  margin-bottom: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Description = styled.Text`
  font-size: 16px;
  color: #999;
`;

export const Date = styled.Text`
  font-size: 12px;
  color: #c1c1c1;
`;

export const Loading = styled.ActivityIndicator.attrs({
  color: colors.primary,
  size: 'large',
})`
  flex: 1;
`;
