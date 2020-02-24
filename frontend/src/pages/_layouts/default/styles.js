import styled from 'styled-components';
import colors from '~/styles/colors';

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

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    background: #fff;
    padding: 20px;
    border-radius: 4px;

    label {
      color: #333;
      text-align: left;
      font-weight: bold;
      font-size: 12px;
      margin-bottom: 8px;
    }

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      height: 40px;
      padding: 0 15px;
      width: 100%;
      margin-bottom: 20px;
      /* margin-right: 20px; */

      &::placeholder {
        color: #999;
      }
    }

    span {
      color: ${colors.error};
      margin-bottom: 10px;
      font-weight: bold;
    }
  }
`;
