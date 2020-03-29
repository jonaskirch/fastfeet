import styled from 'styled-components';

export const Container = styled.div``;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-right: 10px;

    label,
    input {
      margin-bottom: 9px;
    }
  }

  & :last-child {
    margin-right: 0;
  }
`;
