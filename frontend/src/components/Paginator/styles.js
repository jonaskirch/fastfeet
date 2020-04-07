import styled from 'styled-components';
import { lighten } from 'polished';
import colors from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;

  ul {
    display: flex;
    list-style: none;
    border: 1px solid black;
    border-radius: 3px;
  }

  li {
    display: inline;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  background-color: ${props => (props.active ? colors.primary : '#eee')};
  border: 1px solid black;

  :hover {
    background-color: ${lighten(0.2, colors.primary)};
  }

  :disabled {
    background-color: #eee;
  }

  :disabled:hover {
    background-color: #eee;
  }
`;
