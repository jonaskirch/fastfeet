import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 50px;
  /* display: flex; */
  /* flex-direction: column; */
  /* margin: auto; */
  /* align-items: center; */
  /* justify-content: center; */

  div {
    display: flex;
    /* width: 100%; */
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 10px;
  }
`;

export const Title = styled.h1`
  font-size: 18px;
  color: #333;
  font-weight: bold;
`;

export const InputSearch = styled.input`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 20px;
  /* text-align: left; */

  thead th {
    padding: 0 20px;
  }

  tbody tr {
    background: #fff;
    color: #666;
  }

  tbody td {
    padding: 20px;

    &:first-child {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }

    &:last-child {
      /* width: 5px; */
      /* padding: 0;
      margin: 0; */
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }
`;
