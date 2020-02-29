import styled from 'styled-components';
import { lighten } from 'polished';
import colors from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;

  ul {
    display: inline-block;
    list-style: none;
    border: 1px solid black;
    border-radius: 3px;
  }

  li {
    display: inline;
  }

  button {
    height: 50px;
    width: 50px;
    background-color: #eee;
    border: 1px solid black;
  }

  button:hover {
    background-color: ${lighten(0.3, colors.primary)};
  }

  button.active {
    background-color: ${colors.primary};
  }

  button:disabled {
    background-color: #eee;
  }

  button:disabled:hover {
    background-color: #eee;
  }
`;
