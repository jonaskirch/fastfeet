import styled from 'styled-components/native';
import colors from '~/styles/colors';

export const Container = styled.View`
  flex-direction: row;
  position: relative;
  justify-content: space-between;
  margin: 10px 30px 5px 30px;
`;

export const Point = styled.View`
  height: 9px;
  width: 9px;
  border-radius: 4.5px;
  background: ${props => (props.marker ? colors.primary : '#FFF')};
  border: 2px solid ${colors.primary};
`;

export const Line = styled.View`
  position: absolute;
  height: 1px;
  width: 100%;
  top: 4px;
  left: 0px;
  background: ${colors.primary};
  z-index: 0;
`;

export const Legend = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Label = styled.Text`
  color: #999;
  font-size: 8px;
  width: 70px;
  text-align: center;
`;
