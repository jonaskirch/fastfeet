import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: #f5f5f5;
`;

export const Content = styled.div`
  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 20px;
    text-align: left;
    font-size: 14px;

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
        width: 30px;
        margin: 0;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;

        div {
          display: flex;
          justify-content: center;
        }
      }
    }
  }
`;
