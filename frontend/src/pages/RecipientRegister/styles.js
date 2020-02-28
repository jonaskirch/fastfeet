import styled from 'styled-components';

export const Container = styled.div``;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    flex: 1;
    margin-right: 10px;
  }

  & :last-child {
    margin-right: 0;
  }
`;
