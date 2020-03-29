import styled from 'styled-components';
import colors from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${props => (props.active ? colors.primary : '#ddd')};
  border-radius: 4px;
  height: 40px;
  padding: 10px;
  background: #fff;
  width: 300px;
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  margin-left: 5px;
  color: ${props => props.active && colors.primary};
`;
