import styled from 'styled-components/native';

export const Container = styled.View`
  align-self: center;
`;

export const AvatarImage = styled.Image`
  height: ${props => `${props.size}px`};
  width: ${props => `${props.size}px`};
  background: #f4effc;
  border-radius: ${props => `${props.size / 2}px`};
`;

export const AvatarName = styled.View`
  height: ${props => `${props.size}px`};
  width: ${props => `${props.size}px`};
  background: #f4effc;
  border-radius: ${props => `${props.size / 2}px`};
  justify-content: center;
  align-items: center;
`;

export const Name = styled.Text`
  color: #a28fd0;
  font-size: ${props => `${props.size}px`};
`;
