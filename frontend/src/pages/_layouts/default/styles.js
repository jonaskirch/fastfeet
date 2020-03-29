import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100%;
  background: #f5f5f5;
`;

export const Content = styled.div`
  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 20px;
    text-align: left;
    font-size: 16px;

    thead th {
      padding: 0 15px;
      color: #444;
      font-size: 16px;
      font-weight: bold;
    }

    tbody tr {
      background: #fff;
      color: #666;
      font-size: 16px;
    }

    tbody td {
      height: 57px;
      padding: 15px;

      &:first-child {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }

      &:last-child {
        width: 30px;
        margin: 0;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;

        div {
          display: flex;
          justify-content: center;
        }
      }
    }
  }
`;
