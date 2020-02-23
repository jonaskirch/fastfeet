import styled from 'styled-components';
import colors from '~/styles/colors';

export const Container = styled.div`
  border: 1px solid ${props => (props.active ? colors.primary : '#ddd')};
  border-radius: 4px;
  padding: 10px;
  background: #fff;
  width: 300px;
  margin: 0;
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  margin-left: 5px;
  color: ${props => props.active && colors.primary};
  /* font-weight: ${props => (props.active ? 'bold' : 'normal')}; */

  /* &::placeholder {
    color: ${props => props.active && colors.primary};
    font-weight: normal;
  } */
`;
