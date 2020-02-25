import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  width: 900px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  & > div {
    display: flex;

    * {
      margin-left: 10px;
    }
  }
`;

export const Title = styled.h1`
  font-size: 18px;
  color: #333;
  font-weight: bold;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  div {
    margin-right: 10px;
  }

  /* label {
    display: block;
  } */
`;
