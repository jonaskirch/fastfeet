import styled from 'styled-components/native';
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

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
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
  background: #fff;
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
