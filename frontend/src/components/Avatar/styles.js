import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  height: ${props => `${props.size}px`};
  width: ${props => `${props.size}px`};
  background: #f4effc;
  border-radius: 50%;

  img {
    background: #eee;
    height: 100%;
    width: 100%;
    border-radius: 50%;
  }

  strong {
    color: #a28fd0;
    font-size: ${props => `${props.fontSize}px`};
  }
`;
