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

export const Box = styled.View`
  padding: 14px;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 4px;
  margin-bottom: 10px;
`;

export const Header = styled.View`
  flex-direction: row;
  color: ${colors.primary};
`;

export const Title = styled.Text`
  color: ${colors.primary};
  font-weight: bold;
  margin-left: 5px;
`;

export const Label = styled.Text`
  color: #999;
  font-weight: bold;
  margin-top: 5px;
`;

export const Text = styled.Text`
  color: #666;
  margin-top: 5px;
  margin-bottom: 10px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Toolbar = styled.View`
  flex-direction: row;
  height: 83px;
  background: #f8f9fd;
  border: 1px solid #eee;
  border-radius: 4px;
`;

export const ToolbarButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  border: 1px solid #eee;
`;

export const ToolbarButtonText = styled.Text`
  color: #999;
  font-size: 12px;
  text-align: center;
  width: 70px;
`;

export const ButtonStart = styled(Button)`
  margin-top: 5px;
`;
